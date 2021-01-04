import { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function Network({ selectNode, setNodeName }) {
  const ref = useRef();

  function handleMouseOverNode(e, d) {
    console.log(d);
    selectNode(d.id - 1);
    setNodeName(d.name);
  }

  function init() {
    const settings = {
      width: 586,
      height: 330,
      margin: { top: 10, right: 30, bottom: 30, left: 40 },
    };

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", settings.width)
      .attr("height", settings.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + settings.margin.left + "," + settings.margin.top + ")"
      );

    d3.json("network.json").then(function (data) {
      const link = svg
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        .style("stroke", "#86EFAC")
        .attr("stroke-width", 5);

      const node = svg.selectAll("g").data(data.nodes).enter().append("g");

      const radius = 15;
      node
        .append("circle")
        .attr("r", radius)
        .style("fill", (d) => (d.name === "Pipeline" ? "#86EFAC" : "#22C55E"));

      node.on("mouseover touchmove", (e, d) => handleMouseOverNode(e, d));

      node
        .append("text")
        // .attr("dx", (d) => -radius / 2)
        .attr("dy", (d) => radius / 2)
        .attr("font-size", radius)
        .attr("text-anchor", (d) => {
          if (d.id >= 8 || d.name === "Pipeline") {
            return "start";
          }
          return "end";
        })
        .text((d) => d.name)
        .style("fill", "#1F2937");

      const simulation = d3
        .forceSimulation(data.nodes) // Force algorithm is applied to data.nodes
        .force(
          "link",
          d3
            .forceLink() // This force provides links between nodes
            .id(function (d) {
              return d.id;
            }) // This provide  the id of a node
            .links(data.links) // and this the list of links
        )
        .force("charge", d3.forceManyBody().strength(-200)) // This adds repulsion between nodes. Play with the -400 for the repulsion strength
        .force(
          "center",
          d3.forceCenter(settings.width / 3, settings.height / 2)
        ) // This force attracts nodes to the center of the svg area
        .on("end", ticked);

      function ticked() {
        node
          .attr("cx", function (d) {
            return (d.x = Math.max(
              radius,
              Math.min(settings.width - radius, d.x)
            ));
          })
          .attr("cy", function (d) {
            return (d.y = Math.max(
              radius,
              Math.min(settings.height - radius, d.y)
            ));
          });

        link
          .attr("x1", function (d) {
            return d.source.x;
          })
          .attr("y1", function (d) {
            return d.source.y;
          })
          .attr("x2", function (d) {
            return d.target.x;
          })
          .attr("y2", function (d) {
            return d.target.y;
          });

        node.attr("transform", (d) => `translate(${d.x + 6}, ${d.y + 6})`);
      }
    });
  }

  useEffect(init, []);
  return (
    <>
      <div className="network relative overflow-hidden" ref={ref}></div>
    </>
  );
}
