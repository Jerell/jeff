import { useRef, useEffect } from "react";
import * as d3 from "d3";
import { SimpleGauge } from "d3-simple-gauge";

export default function Gauge({
  percent = Math.random(),
  max = 100,
  sections = 3,
}) {
  const ref = useRef();
  const value = Math.floor(percent * max);
  const text = <p>{value}</p>;

  function init() {
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", 160)
      .attr("height", 120);

    const simpleGauge = new SimpleGauge({
      el: svg.append("g"),
      height: 100,
      width: 160,
      interval: [0, max],
      sectionsCount: sections,
      barWidth: 20,
      needleRadius: 10,
      sectionsColors: d3.schemeSpectral[sections],
    });

    simpleGauge.value = value;
  }

  useEffect(init, []);
  return (
    <>
      <div className="gauge relative overflow-hidden" ref={ref}></div>
      {text}
    </>
  );
}
