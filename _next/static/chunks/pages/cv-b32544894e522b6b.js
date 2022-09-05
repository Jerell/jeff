(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920],{9031:function(e,t,n){"use strict";n.d(t,{R:function(){return a}});var r=n(5893),a=function(e){var t=e.children;return(0,r.jsx)("div",{className:"text-gradient font-light italic font-sans bg-gradient-to-r from-j-blue to-j-magenta text-4xl",children:(0,r.jsx)("p",{className:"m-0 pb-4",children:t})})}},833:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(9031),a=n(5893),i=function(){return(0,a.jsx)("div",{className:"rounded-full h-36 w-36 overflow-hidden",children:(0,a.jsx)("img",{src:"./img/jeff.jpeg",alt:"Cheuk Man Ng"})})},o=function(){return(0,a.jsxs)("div",{className:"flex space-x-8 items-center",children:[(0,a.jsx)("div",{className:"left",children:(0,a.jsx)(i,{})}),(0,a.jsxs)("div",{className:"right flex flex-col",children:[(0,a.jsx)("p",{children:"Cheuk Man Ng"}),(0,a.jsx)(r.R,{children:"Locum Pharmacist"}),(0,a.jsx)("p",{children:"Aston University Graduate"}),(0,a.jsx)("p",{children:"Qualified pharmacist since Aug 2022"}),(0,a.jsx)("p",{children:"GpHC no. 2231084"}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)("a",{href:"tel:+447570807718",children:"+447570807718"}),(0,a.jsx)("a",{href:"mailto:Ngcheukman15@gmail.com",className:"block",children:(0,a.jsx)("span",{children:"Ngcheukman15@gmail.com"})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/cheuk-man-ng-9014821a4/",className:"block",children:(0,a.jsx)("span",{children:"Linkedin profile"})})]})]})]})}},6113:function(e,t,n){"use strict";var r=n(9008),a=n(5893);t.Z=function(e){var t=e.title,n=e.children,i=e.hideNamePrefix,o=void 0!==i&&i;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:t?o?t:"Jerell James | ".concat(t):"Jerell James"}),(0,a.jsx)("meta",{name:"description",content:"I make software for oil and gas companies"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("main",{className:"mx-auto",children:(0,a.jsx)("div",{className:"flex flex-col h-screen px-2",children:n})})]})}},7942:function(e,t,n){"use strict";var r=n(5696);t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},o=n(4957),s=n(9898),c=n(639);var l={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),d=i.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?o.resolveHref(a,e.as):s||i}}),[a,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,x=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),b=r(j,2),w=b[0],O=b[1],k=i.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);i.default.useEffect((function(){var e=O&&n&&o.isLocalURL(f),t="undefined"!==typeof x?x:a&&a.locale,r=l[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(a,f,p,{locale:t})}),[p,f,O,x,n,a]);var P={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}))}(e,a,f,p,m,v,g,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(f)&&u(a,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof x?x:a&&a.locale,N=a&&a.isLocaleDomain&&o.getDomainLocale(p,C,a&&a.locales,a&&a.domainLocales);P.href=N||o.addBasePath(o.addLocale(p,C,a&&a.defaultLocale))}return i.default.cloneElement(t,P)};t.default=d},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!o,u=a.useRef(),d=a.useState(!1),f=r(d,2),p=f[0],h=f[1],m=a.useState(t?t.current:null),v=r(m,2),g=v[0],x=v[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||p||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),c.push(n));if(t)return t;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:i,elements:a}),t}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),s.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:g,rootMargin:n}))}),[l,g,n,p]);return a.useEffect((function(){if(!o&&!p){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&x(t.current)}),[t]),[y,p]};var a=n(7294),i=n(6286),o="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(8e3);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},2717:function(e,t,n){"use strict";var r=n(930);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(i=n(1585))&&i.__esModule?i:{default:i},c=n(8e3),l=n(5850),u=n(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var u=p[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var d=a.props[u],f=r[u]||new Set;"name"===u&&o||!f.has(d)?(f.add(d),r[u]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:i})}))}var m=function(e){var t=e.children,n=o.useContext(c.AmpStateContext),r=o.useContext(l.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:u.isInAmpMode(n)},t)};t.default=m},1585:function(e,t,n){"use strict";var r=n(7980),a=n(3227),i=n(8361),o=(n(2191),n(5971)),s=n(2715),c=n(1193);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){o(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},7439:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(6113),a=n(833),i=n(9031),o=n(1664),s=n(5893),c=[{year:"2018-date",company:"Pace CCS",title:"Software engineer",description:"Responsible for the development of internal tools and web applications. Primarily using TypeScript, React, NodeJS, and Docker.",subsections:[{heading:"Timesheets",content:["Project management web application used by all employees to track time spent on different projects.","Automated the creation of progress reports showing metrics such as planned and actual costs and hours.","Hosted on an Azure virtual machine using Terraform, Ansible, and GitHub Actions."],tags:["TypeScript","React","Node.js","Docker","Terraform","CI/CD","GitHub Actions"]},{heading:"Digital Twin",content:["Development of a generalized software model for the CCS industry, used to investigate the behaviour and evolution of CO2 pipelines over time in response to user defined conditions.",(0,s.jsxs)(s.Fragment,{children:["Published"," ",(0,s.jsx)(o.default,{href:"https://www.npmjs.com/package/ccs-sim",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("span",{children:"ccs-sim"}),", an npm package for simulating the behaviour of fluid in pipelines."]})})]})],tags:["TypeScript","React","Azure","C# .Net Core","Docker","Terraform","CI/CD","GitHub Actions"]},{heading:"cvgen",content:"Development of a cross-platform desktop application that generates PDFs in a custom template using YAML input files.",tags:["TypeScript","Electron"],link:"https://github.com/Jerell/cvgen"},{heading:"Icthys LNG Phase 2a FEED",content:"Optimization of subsea design using an evolutionary algorithm.",tags:[],link:"https://onepetro.org/BHRICMPT/proceedings-abstract/BHR19/All-BHR19/BHR-2019-023/430"},{heading:"HyNet CCS project",content:"Development of offshore integrated digital twin model with snapshot and life of field modelling, including offshore pipelines, distribution manifold, topsides piping, wellhead chokes, wells, and reservoirs.",tags:["TypeScript","React","Azure","C# .Net Core"]},{heading:"Sphering",content:"Created an online visualisation of a pipeline to show how 'spheres' are used to flush out the condensation that accumulates inside.",tags:["TypeScript","React","NextJS"]},{heading:"VM monitoring Slack bot",content:"Used Azure Serverless Function Apps to monitor the activity of virtual machines and send alerts through Slack.",tags:["JavaScript","Azure","Serverless"]},{heading:"Adaptive grid",content:"Used Python to parse, manipulate and build output/input files for OLGA simulations. This project aimed to reduce simulation run times by running sequential simulations focused on a moving area of interest, rather than simulating an entire pipeline in high detail.",tags:["Python"]},{heading:"Master Document Register",content:"Built a web application used for monitoring the issue status of project deliverables. Involved manipulating Excel files and using the Google Drive API.",tags:["JavaScript","React"]}]}],l=n(9499),u=function(e){var t=e.children,n=e.reverse,r=void 0!==n&&n;return(0,s.jsxs)("div",{className:"py-4 flex ".concat(r?"flex-col-reverse":"flex-col"," ").concat(r?"lg:flex-row-reverse":"lg:flex-row"," center"),children:[(0,s.jsx)("div",{className:"flex primary max-w-prose",children:t[0]}),(0,s.jsx)("div",{className:"flex secondary flex-grow max-w-prose",children:t[1]})]})};function d(e){var t=e.heading,n=e.content,r=e.tags,a=e.link;return(0,s.jsxs)("div",{className:"subsection",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-1 items-center",children:[(0,s.jsx)("p",{className:"text-lg",children:a?(0,s.jsx)(o.default,{href:a,children:(0,s.jsx)("a",{children:(0,s.jsx)("span",{children:t})})}):t}),r.length?(0,s.jsx)("p",{className:"text-xs italic pt-1",children:r.join(", ")}):null]}),"string"===typeof n?(0,s.jsx)("p",{className:"text-sm",children:n}):(0,s.jsx)("ul",{className:"list-disc flex flex-col space-y-2 text-sm",children:n.map((function(e,t){return(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:e})},t)}))})]},t)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){var t=e.job;return(0,s.jsxs)(u,{children:[(0,s.jsx)("div",{className:"flex space-x-8",children:(0,s.jsx)(i.R,{children:t.company})}),(0,s.jsxs)("div",{className:"m-4 mt-1 flex flex-col space-y-4",children:[(0,s.jsxs)("p",{className:"text-xl",children:[t.title," | ",(0,s.jsx)("span",{className:"italic text-sm",children:t.year})]}),(0,s.jsx)("p",{children:t.description}),t.subsections.map((function(e,t){return(0,s.jsx)(d,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),t)}))]})]})}var h=function(){return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"border-b-4 border-j-yellowred border-dotted",children:(0,s.jsx)(i.R,{children:"Experience"})}),c.map((function(e,t){return(0,s.jsx)(p,{job:e},t)}))]})};function m(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("section",{className:"py-8",children:(0,s.jsx)(a.Z,{})}),(0,s.jsx)("section",{children:(0,s.jsx)("div",{children:(0,s.jsx)(h,{})})})]})})})}},4238:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cv",function(){return n(7439)}])},9008:function(e,t,n){e.exports=n(2717)},1664:function(e,t,n){e.exports=n(7942)}},function(e){e.O(0,[774,888,179],(function(){return t=4238,e(e.s=t);var t}));var t=e.O();_N_E=t}]);