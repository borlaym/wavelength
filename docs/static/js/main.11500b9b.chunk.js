(this.webpackJsonpwavelength=this.webpackJsonpwavelength||[]).push([[0],{12:function(t,e,n){t.exports=n(23)},17:function(t,e,n){},18:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),u=(n(17),n(3)),c=n(1),s=n(2);n(18);function l(){var t=Object(c.a)(["\n\ttransform: rotate(","deg);\n"]);return l=function(){return t},t}var f=s.a.canvas(l(),(function(t){return t.rotation-90}));var d=function(t){var e=a.a.createRef();return a.a.useEffect((function(){if(e.current){var t=e.current.getContext("2d");if(!t)return;var n=e.current,r=n.width,a=n.height;if(r!==a)throw new Error("Canvas needs to be a square");var o=[r/2,a/2],i=r/2,u=function(e,n){t&&(t.beginPath(),t.moveTo.apply(t,o),t.arc(o[0],o[1],i,e,e+Math.PI/180*10),t.lineTo.apply(t,o),t.fillStyle=n,t.closePath(),t.fill())};t.beginPath(),t.arc(o[0],o[1],i,0,2*Math.PI),t.fillStyle="#fff",t.fill(),u(-Math.PI/180*115,"yellow"),u(-Math.PI/180*75,"yellow"),u(-Math.PI/180*105,"orange"),u(-Math.PI/180*85,"orange"),u(-Math.PI/180*95,"turquoise")}}),[e.current]),a.a.createElement(f,{width:"500",height:"500",ref:e,rotation:t.rotation})};function h(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,a=r.useRef();r.useEffect((function(){a.current=e}),[e]),r.useEffect((function(){if(n&&n.addEventListener){var e=function(t){return a.current(t)};return n.addEventListener(t,e),function(){n.removeEventListener(t,e)}}}),[t,n])}function v(){var t=Object(c.a)(["\n\twidth: 8px;\n\theight: 230px;\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 246px;\n\tbackground: red;\n\ttransform-origin: center 100%;\n"]);return v=function(){return t},t}var p=s.a.div.attrs((function(t){return{style:{transform:"rotate(".concat(t.rotation,"deg)")}}}))(v());function m(){var t=r.useRef(null),e=r.useState(!1),n=Object(u.a)(e,2),a=n[0],o=n[1],i=r.useState(0),c=Object(u.a)(i,2),s=c[0],l=c[1],f=r.useState(0),d=Object(u.a)(f,2),v=d[0],m=d[1],b=r.useCallback((function(e){t.current&&e.target===t.current&&(l(e.x),o(!0))}),[]),g=r.useCallback((function(t){a&&o(!1)}),[a]),w=r.useCallback((function(t){if(a){var e=t.x-s;l(t.x),m(Math.max(Math.min(v+e/2,90),-90))}}),[a,v,s]);return h("mousedown",b),h("mouseup",g),h("mousemove",w),r.createElement(p,{ref:t,rotation:v})}function b(){var t=Object(c.a)(["\n\theight: 250px;\n\twidth: 500px;\n\tposition: absolute;\n\tborder-top-left-radius: 250px;\n\tborder-top-right-radius: 250px;\n\ttop: 0px;\n\tbackground: turquoise;\n\ttransform-origin: center 100%;\n\ttransform: ",";\n\ttransition: transform 0.5s;\n"]);return b=function(){return t},t}function g(){var t=Object(c.a)(["\n\theight: 251px;\n\twidth: 500px;\n\tposition: absolute;\n\ttop: 250px;\n\tbackground: #282c34;\n"]);return g=function(){return t},t}function w(){var t=Object(c.a)(["\n\tposition: relative;\n"]);return w=function(){return t},t}var E=s.a.div(w()),x=s.a.div(g()),k=s.a.div(b(),(function(t){return t.isOpen?"rotate(-180deg)":"rotate(0deg)"}));var M=function(){var t=a.a.createRef(),e=a.a.useState(0),n=Object(u.a)(e,2),r=n[0],o=n[1],i=a.a.useState(!0),c=Object(u.a)(i,2),s=c[0],l=c[1],f=a.a.useState(!1),h=Object(u.a)(f,2),v=h[0],p=h[1],b=a.a.useCallback((function(){o(180*Math.random())}),[]),g=a.a.useCallback((function(){t.current&&(s?(l(!1),t.current.addEventListener("transitionend",b,{once:!0})):b())}),[s,t,b]);return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(E,null,a.a.createElement(d,{rotation:r}),a.a.createElement(k,{isOpen:s||v,ref:t}),a.a.createElement(m,null),a.a.createElement(x,null,a.a.createElement("button",{onClick:s?g:function(){return l(!0)}},s?"Randomize":"Reveal"),a.a.createElement("button",{onMouseDown:function(){return p(!0)},onMouseUp:function(){return p(!1)},onMouseLeave:function(){return p(!1)}},"Peek")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.11500b9b.chunk.js.map