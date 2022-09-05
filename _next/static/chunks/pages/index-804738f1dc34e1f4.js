(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9031:function(e,t,n){"use strict";n.d(t,{R:function(){return a}});var r=n(5893),a=function(e){var t=e.children;return(0,r.jsx)("div",{className:"text-gradient font-light italic font-sans bg-gradient-to-r from-j-blue to-j-magenta text-4xl",children:(0,r.jsx)("p",{className:"m-0 pb-4",children:t})})}},833:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(9031),a=n(5893),s=function(){return(0,a.jsx)("div",{className:"rounded-full h-36 w-36 overflow-hidden",children:(0,a.jsx)("img",{src:"./img/meglow.jpg",alt:"Picture of Jerell"})})},c=function(){return(0,a.jsxs)("div",{className:"flex space-x-8 items-center",children:[(0,a.jsx)("div",{className:"left",children:(0,a.jsx)(s,{})}),(0,a.jsxs)("div",{className:"right flex flex-col",children:[(0,a.jsx)("p",{children:"Cheuk Man Ng"}),(0,a.jsx)(r.R,{children:"Locum Pharmacist"}),(0,a.jsx)("p",{children:"Aston University Graduate"}),(0,a.jsx)("p",{children:"Qualified pharmacist since Aug 2022"}),(0,a.jsx)("p",{children:"GpHC no. 2231084"}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)("p",{children:"+447570807718"}),(0,a.jsx)("a",{href:"mailto:Ngcheukman15@gmail.com",className:"block",children:(0,a.jsx)("span",{children:"Ngcheukman15@gmail.com"})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/cheuk-man-ng-9014821a4/",className:"block",children:(0,a.jsx)("span",{children:"Linkedin profile"})})]})]})]})}},6113:function(e,t,n){"use strict";var r=n(9008),a=n(5893);t.Z=function(e){var t=e.title,n=e.children,s=e.hideNamePrefix,c=void 0!==s&&s;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:t?c?t:"Jerell James | ".concat(t):"Jerell James"}),(0,a.jsx)("meta",{name:"description",content:"I make software for oil and gas companies"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("main",{className:"mx-auto",children:(0,a.jsx)("div",{className:"flex flex-col h-screen px-2",children:n})})]})}},5805:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r=n(29),a=n(7794),s=n.n(a),c=n(6113),i=n(9031),o=n(5321),u=n(7702);function l(e,t,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t,n,r){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,u.v0)(),e.next=3,(0,u.XB)(a);case 3:return e.prev=3,e.next=6,(0,o.ET)((0,o.hJ)(t,n),r);case 6:c=e.sent,console.log("Document written with ID: ",c.id),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error adding document: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}var f=n(4230);function p(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(f.db,"reviews",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n(7294),m=n(5893);function j(e){var t=e.value,n=e.selectedRating,r=e.hover,a=e.click;return(0,m.jsx)("input",{type:"radio",className:"bg-j-yellowred rounded-full h-8 w-8 cursor-pointer appearance-none ".concat(n>=t?"opacity-1":"opacity-50"),onMouseOver:function(){return r(t)},onClick:function(){return a(t)}})}function v(e){var t=e.update,n=(0,h.useState)(-1),r=n[0],a=n[1],s=(0,h.useState)(10),c=s[0],i=s[1],o=(0,h.useState)(!1),u=o[0],l=o[1],d=["Not good","Could've been better","OK","Good","Great"];function f(e){i(e)}function p(e){a(e),t(e)}function x(){l(!u)}var v=u?c:r;return(0,m.jsxs)("fieldset",{className:"flex flex-row items-center gap-1",children:[(0,m.jsx)("div",{className:"grid grid-cols-5 gap-1",onMouseEnter:x,onMouseLeave:x,children:d.map((function(e,t){return(0,m.jsx)(j,{value:t,selectedRating:v,hover:f,click:p},e)}))}),(0,m.jsx)("p",{children:u?d[c]:r<0?"Select your rating":d[r]})]})}function g(e){var t=e.submit,n=e.disabled;var r=e.submitted?"Submission received":"Submit";return(0,m.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),n||t()}(e)},className:"py-1 bg-j-magenta text-white  ".concat(n?"cursor-default opacity-75":"opacity-90 cursor-pointer hover:opacity-100"),disabled:n,children:r})}function b(e){var t=e.refresh,n=(0,h.useState)(-1),a=n[0],c=n[1],i=(0,h.useState)(""),o=i[0],u=i[1],l=(0,h.useState)("Anonymous"),d=l[0],f=l[1],x=0===o.length||a<0,j=(0,h.useState)(!1),b=j[0],w=j[1],y=(0,h.useState)(!1),N=y[0],k=y[1];function O(){return(O=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(!0),n={rating:a+1,review:o,name:d,date:new Date,approved:!1},!x){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,p(n);case 6:return e.next=8,t();case 8:w(!1),k(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,m.jsxs)("form",{className:"flex flex-col gap-2 ".concat(b?"opacity-80":"opacity-100"),children:[(0,m.jsx)(v,{update:function(e){c(e),k(!1)}}),(0,m.jsx)("textarea",{name:"review",id:"review",cols:30,rows:10,placeholder:"Please give a review on my performance in your store, be as detailed as you would like but please do not breach patient confidentiality",onChange:function(e){u(e.target.value),k(!1)},disabled:b}),(0,m.jsx)("input",{type:"text",name:"name",id:"name",autoComplete:"name",placeholder:"name (optional)",onChange:function(e){f(e.target.value),k(!1)},disabled:b}),(0,m.jsx)(g,{submit:function(){return O.apply(this,arguments)},disabled:x||b||N,submitted:N}),N&&(0,m.jsx)("p",{children:"Thank you for submitting a review."})]})}var w=n(833),y=n(9499),N=n(1525),k=n(9345);function O(e){var t=e.rating,n=e.review,r=e.name,a=e.date,s=new Date(1e3*a.seconds);return(0,m.jsxs)("div",{className:"border-t py-2 mb-2",children:[(0,m.jsxs)("p",{className:"text-j-dodger",children:[t," / 5"]}),(0,m.jsx)("p",{className:"text-center text-gradient bg-gradient-to-r from-j-dodger to-j-blue text-j",children:n}),(0,m.jsx)("p",{className:"text-right",children:r}),(0,m.jsx)("p",{className:"text-right text-xs",children:(0,N.Z)(s,new Date,{locale:k.Z})})]})}function S(e){var t=e.label,n=e.options,r=e.update;return(0,m.jsx)("div",{className:"text-sm",children:(0,m.jsx)("select",{name:t,className:"outline-none w-full p-0.5 text-j-blue",onChange:function(e){return function(e){r(e.target.value)}(e)},children:n.map((function(e){return(0,m.jsx)("option",{children:e},e)}))})})}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,y.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){var t=e.reviews,n=function(e){return function(){return t.filter((function(t){return t.rating==e}))}},r={"Filter by rating":function(){return t},"\u2605\u2605\u2605\u2605\u2605":n(5),"\u2605\u2605\u2605\u2605":n(4),"\u2605\u2605\u2605":n(3),"\u2605\u2605":n(2),"\u2605":n(1)},a=Object.keys(r),s=(0,h.useState)(a[0]),c=s[0],i=s[1],o=function(e){return function(t){return t.sort(e)}},u={"Sort by date (most recent)":o((function(e,t){return new Date(1e3*t.date.seconds).getTime()-new Date(1e3*e.date.seconds).getTime()})),"Sort by date (oldest)":o((function(e,t){return new Date(1e3*e.date.seconds).getTime()-new Date(1e3*t.date.seconds).getTime()}))},l=Object.keys(u),d=(0,h.useState)(l[0]),f=d[0],p=d[1];return(0,m.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,m.jsx)(S,{label:"sort",options:l,update:p}),(0,m.jsx)(S,{label:"rating filter",options:a,update:i})]}),u[f](r[c]()).map((function(e,t){return(0,h.createElement)(O,D(D({},e),{},{key:t}))}))]})}function Z(e,t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(s().mark((function e(t,n){var r,a,c,i,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,u.v0)(),e.next=3,(0,u.XB)(r);case 3:return a=(0,o.hJ)(t,n),c=(0,o.IO)(a,(0,o.ar)("approved","==",!0),(0,o.Xo)("date","desc")),e.next=7,(0,o.PL)(c);case 7:return i=e.sent,l=[],i.forEach((function(e){l.push(e.data())})),e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return T.apply(this,arguments)}function T(){return(T=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(f.db,"reviews");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){var e=(0,h.useState)([]),t=e[0],n=e[1];function a(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,h.useEffect)((function(){a()}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(c.Z,{title:"Leave a review",hideNamePrefix:!0,children:(0,m.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,m.jsxs)("div",{className:"max-w-prose w-full",children:[(0,m.jsx)("section",{className:"py-8 flex flex-col gap-4",children:(0,m.jsx)(w.Z,{})}),(0,m.jsx)("section",{className:"mt-8",children:(0,m.jsx)("div",{className:"my-2 text-center",children:(0,m.jsx)(i.R,{children:"Leave a review"})})}),(0,m.jsx)("section",{className:"flex flex-col gap-1",children:(0,m.jsx)(b,{refresh:a})}),(0,m.jsx)("section",{className:"mt-12",children:(0,m.jsx)(E,{reviews:t})})]})})})})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5805)}])}},function(e){e.O(0,[440,368,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);