"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5330],{99412:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(85893);const o=function(e){var t=e.err;return t?(0,n.jsx)("div",{className:"alert alert-danger text-10 text-md-12 text-xxl-14",children:t.message?t.message:t}):null}},92740:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(67294),o=r(87462),s=r(63366),i=r(4942),a=r(45697),c=r.n(a),l=r(94184),u=r.n(l),d=r(23663),p=r(69638);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={children:c().node,className:c().string,closeClassName:c().string,closeAriaLabel:c().string,cssModule:c().object,color:c().string,fade:c().bool,isOpen:c().bool,toggle:c().func,tag:d.iC,transition:c().shape(p.Z.propTypes),innerRef:c().oneOfType([c().object,c().string,c().func])},b={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:m(m({},p.Z.defaultProps),{},{unmountOnExit:!0})};function y(e){var t=e.className,r=e.closeClassName,i=e.closeAriaLabel,a=e.cssModule,c=e.tag,l=e.color,f=e.isOpen,h=e.toggle,b=e.children,y=e.transition,v=e.fade,g=e.innerRef,x=(0,s.Z)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),j=(0,d.mx)(u()(t,"alert","alert-"+l,{"alert-dismissible":h}),a),O=(0,d.mx)(u()("close",r),a),N=m(m(m({},p.Z.defaultProps),y),{},{baseClass:v?y.baseClass:"",timeout:v?y.timeout:0});return n.createElement(p.Z,(0,o.Z)({},x,N,{tag:c,className:j,in:f,role:"alert",innerRef:g}),h?n.createElement("button",{type:"button",className:O,"aria-label":i,onClick:h},n.createElement("span",{"aria-hidden":"true"},"×")):null,b)}y.propTypes=h,y.defaultProps=b;const v=y;var g=r(85893);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,s=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const O=function(e){var t=e.message,r=e.time,o=x((0,n.useState)(!0),2),s=o[0],i=o[1];return r&&setTimeout((function(){i(!1)}),r),t?(0,g.jsx)(v,{className:"text-10 text-md-12 text-xxl-14",color:t.type,isOpen:s,children:t.content}):null}},89976:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(67294),o=r(28216),s=r(73727),i=r(51252),a=r(56941),c=r(90442),l=r(91121),u=r(75351),d=r(7285),p=r(26094),f=r(92903),m=r(93379),h=r.n(m),b=r(48891),y={insert:"head",singleton:!1};h()(b.Z,y);b.Z.locals;var v=r(85893);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Z(this,r)}}function Z(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(m,e);var t,r,n,o=E(m);function m(){return O(this,m),o.apply(this,arguments)}return t=m,(r=[{key:"render",value:function(){var e=this.props,t=e.content.cms.pages.components.product,r=e.photo,n=e.name,o=e.description,m=e.price,h=void 0===m?0:m,b=e.link,y=void 0===b?"/":b,g=e.md,x=void 0===g?6:g,j=e.lg,O=void 0===j?4:j;return(0,v.jsx)(i.Z,{md:x,lg:O,className:"ArticleCard pb-3",children:(0,v.jsxs)(a.Z,{className:"text-dark shadow-sm",children:[(0,v.jsx)(c.Z,{top:!0,width:"100%",src:r,alt:"Card image cap",className:"embed-responsive embed-responsive-4by3"}),(0,v.jsxs)(l.Z,{className:"text-center",children:[(0,v.jsx)(u.Z,{className:"h5 text-700",children:y.includes("//")?(0,v.jsx)("a",{className:"bg-dark-gradient bg-text",href:y,target:"_blank",children:n}):(0,v.jsx)(s.OL,{className:"bg-dark-gradient bg-text",to:y,children:n})}),(0,v.jsx)(d.Z,{className:"text-muted text-truncate small mb-2",children:(0,f.M3)(o).substr(0,100)}),(0,v.jsxs)(p.Z,{className:"bg-dark-gradient bg-text h6 text-600",children:[h," ",t.fcfa]})]})]})})}}])&&N(t.prototype,r),n&&N(t,n),m}(n.Component);const S=(0,o.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}))(k)},71795:(e,t,r)=>{r.d(t,{Z:()=>s});r(67294);var n=r(97975),o=r(85893);const s=function(e){var t=e.children,r=e.color,s=e.icon,i=e.iconColor,a=void 0===i?"reset":i,c=e.className,l=e.size,u=e.pill;return(0,o.jsxs)(n.Z,{color:r,size:l,className:"d-inline-flex align-items-center "+(u?" rounded-pill ":"")+c,children:[(0,o.jsx)("span",{className:"text-300",children:t}),(0,o.jsx)("i",{className:"ml-3 fas fa-lg fa-"+s+" text-"+a})]})}},62895:(e,t,r)=>{r.d(t,{Z:()=>s});r(67294);var n=r(51252),o=r(85893);const s=function(e){var t=e.bg,r=void 0===t?"white":t,s=e.children,i=e.text,a=void 0===i?"dark":i,c=e.innerClassName,l=void 0===c?"":c,u=e.user,d=e.style,p=e.innerStyle;return(0,o.jsx)(n.Z,{xs:12,className:(u?"py-0 ":"py-5 ")+"bg-"+r+" text-"+a,style:d,children:(0,o.jsx)("div",{className:(u?"container-fluid":"container")+" "+l,style:p,children:s})})}},55757:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(85893);const o=function(e){var t=e.children,r=e.className;return(0,n.jsx)("h2",{className:"mb-4 bg-dark-gradient bg-text text-700 "+r,children:t})}},55330:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_e});var n=r(67294),o=r(28216),s=r(10267),i=r(98595),a=r(51252),c=r(92740),l=r(99412),u=r(62895),d=r(4942),p=r(87462),f=r(63366),m=r(97326),h=r(51721),b=r(45697),y=r.n(b),v=r(94184),g=r.n(v),x=r(64317),j=r(23663);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={startAnimation:!1},r.onEnter=r.onEnter.bind((0,m.Z)(r)),r.onEntering=r.onEntering.bind((0,m.Z)(r)),r.onExit=r.onExit.bind((0,m.Z)(r)),r.onExiting=r.onExiting.bind((0,m.Z)(r)),r.onExited=r.onExited.bind((0,m.Z)(r)),r}(0,h.Z)(t,e);var r=t.prototype;return r.onEnter=function(e,t){this.setState({startAnimation:!1}),this.props.onEnter(e,t)},r.onEntering=function(e,t){var r=e.offsetHeight;return this.setState({startAnimation:!0}),this.props.onEntering(e,t),r},r.onExit=function(e){this.setState({startAnimation:!1}),this.props.onExit(e)},r.onExiting=function(e){this.setState({startAnimation:!0}),e.dispatchEvent(new CustomEvent("slide.bs.carousel")),this.props.onExiting(e)},r.onExited=function(e){e.dispatchEvent(new CustomEvent("slid.bs.carousel")),this.props.onExited(e)},r.render=function(){var e=this,t=this.props,r=t.in,o=t.children,s=t.cssModule,i=t.slide,a=t.tag,c=t.className,l=(0,f.Z)(t,["in","children","cssModule","slide","tag","className"]);return n.createElement(x.Transition,(0,p.Z)({},l,{enter:i,exit:i,in:r,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var r=e.context.direction,i=t===j.E5.ENTERED||t===j.E5.EXITING,l=(t===j.E5.ENTERING||t===j.E5.EXITING)&&e.state.startAnimation&&("right"===r?"carousel-item-left":"carousel-item-right"),u=t===j.E5.ENTERING&&("right"===r?"carousel-item-next":"carousel-item-prev"),d=(0,j.mx)(g()(c,"carousel-item",i&&"active",l,u),s);return n.createElement(a,{className:d},o)}))},t}(n.Component);w.propTypes=N(N({},x.Transition.propTypes),{},{tag:j.iC,in:y().bool,cssModule:y().object,children:y().node,slide:y().bool,className:y().string}),w.defaultProps=N(N({},x.Transition.defaultProps),{},{tag:"div",timeout:j.wF.Carousel,slide:!0}),w.contextTypes={direction:y().string};const E=w;var Z=function(e){function t(t){var r;return(r=e.call(this,t)||this).handleKeyPress=r.handleKeyPress.bind((0,m.Z)(r)),r.renderItems=r.renderItems.bind((0,m.Z)(r)),r.hoverStart=r.hoverStart.bind((0,m.Z)(r)),r.hoverEnd=r.hoverEnd.bind((0,m.Z)(r)),r.handleTouchStart=r.handleTouchStart.bind((0,m.Z)(r)),r.handleTouchEnd=r.handleTouchEnd.bind((0,m.Z)(r)),r.touchStartX=0,r.touchStartY=0,r.state={activeIndex:r.props.activeIndex,direction:"right",indicatorClicked:!1},r}(0,h.Z)(t,e);var r=t.prototype;return r.getChildContext=function(){return{direction:this.state.direction}},r.componentDidMount=function(){"carousel"===this.props.ride&&this.setInterval(),document.addEventListener("keyup",this.handleKeyPress)},t.getDerivedStateFromProps=function(e,t){var r=null,n=t.activeIndex,o=t.direction,s=t.indicatorClicked;return e.activeIndex!==n&&(e.activeIndex===n+1?o="right":e.activeIndex===n-1?o="left":e.activeIndex<n?o=s?"left":"right":e.activeIndex!==n&&(o=s?"right":"left"),r={activeIndex:e.activeIndex,direction:o,indicatorClicked:!1}),r},r.componentDidUpdate=function(e,t){t.activeIndex!==this.state.activeIndex&&this.setInterval(this.props)},r.componentWillUnmount=function(){this.clearInterval(),document.removeEventListener("keyup",this.handleKeyPress)},r.setInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){void 0===e&&(e=this.props),this.clearInterval(),e.interval&&(this.cycleInterval=setInterval((function(){e.next()}),parseInt(e.interval,10)))})),r.clearInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.cycleInterval)})),r.hoverStart=function(){var e;("hover"===this.props.pause&&this.clearInterval(),this.props.mouseEnter)&&(e=this.props).mouseEnter.apply(e,arguments)},r.hoverEnd=function(){var e;("hover"===this.props.pause&&this.setInterval(),this.props.mouseLeave)&&(e=this.props).mouseLeave.apply(e,arguments)},r.handleKeyPress=function(e){this.props.keyboard&&(37===e.keyCode?this.props.previous():39===e.keyCode&&this.props.next())},r.handleTouchStart=function(e){this.props.enableTouch&&(this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY)},r.handleTouchEnd=function(e){if(this.props.enableTouch){var t=e.changedTouches[0].screenX,r=e.changedTouches[0].screenY,n=Math.abs(this.touchStartX-t);n<Math.abs(this.touchStartY-r)||n<40||(t<this.touchStartX?this.props.next():this.props.previous())}},r.renderItems=function(e,t){var r=this,o=this.props.slide;return n.createElement("div",{className:t},e.map((function(e,t){var s=t===r.state.activeIndex;return n.cloneElement(e,{in:s,slide:o})})))},r.render=function(){var e=this,t=this.props,r=t.cssModule,o=t.slide,s=t.className,i=(0,j.mx)(g()(s,"carousel",o&&"slide"),r),a=(0,j.mx)(g()("carousel-inner"),r),c=this.props.children.filter((function(e){return null!=e&&"boolean"!=typeof e}));if(c.every((function(e){return e.type===E})))return n.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(c,a));if(c[0]instanceof Array){var l=c[0],u=c[1],d=c[2];return n.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(l,a),u,d)}var p=c[0],f=n.cloneElement(p,{onClickHandler:function(t){"function"==typeof p.props.onClickHandler&&e.setState({indicatorClicked:!0},(function(){return p.props.onClickHandler(t)}))}}),m=c[1],h=c[2],b=c[3];return n.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},f,this.renderItems(m,a),h,b)},t}(n.Component);Z.propTypes={activeIndex:y().number,next:y().func.isRequired,previous:y().func.isRequired,keyboard:y().bool,pause:y().oneOf(["hover",!1]),ride:y().oneOf(["carousel"]),interval:y().oneOfType([y().number,y().string,y().bool]),children:y().array,mouseEnter:y().func,mouseLeave:y().func,slide:y().bool,cssModule:y().object,className:y().string,enableTouch:y().bool},Z.defaultProps={interval:5e3,pause:"hover",keyboard:!0,slide:!0,enableTouch:!0},Z.childContextTypes={direction:y().string};const P=Z;var k=function(e){var t=e.items,r=e.activeIndex,o=e.cssModule,s=e.onClickHandler,i=e.className,a=(0,j.mx)(g()(i,"carousel-indicators"),o),c=t.map((function(e,t){var i=(0,j.mx)(g()({active:r===t}),o);return n.createElement("li",{key:""+(e.key||Object.values(e).join("")),onClick:function(e){e.preventDefault(),s(t)},className:i})}));return n.createElement("ol",{className:a},c)};k.propTypes={items:y().array.isRequired,activeIndex:y().number.isRequired,cssModule:y().object,onClickHandler:y().func.isRequired,className:y().string};const S=k;var T=function(e){var t=e.direction,r=e.onClickHandler,o=e.cssModule,s=e.directionText,i=e.className,a=(0,j.mx)(g()(i,"carousel-control-"+t),o),c=(0,j.mx)(g()("carousel-control-"+t+"-icon"),o),l=(0,j.mx)(g()("sr-only"),o);return n.createElement("a",{className:a,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:function(e){e.preventDefault(),r()}},n.createElement("span",{className:c,"aria-hidden":"true"}),n.createElement("span",{className:l},s||t))};T.propTypes={direction:y().oneOf(["prev","next"]).isRequired,onClickHandler:y().func.isRequired,cssModule:y().object,directionText:y().string,className:y().string};const C=T;var I=r(85893);function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,s=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const R=function(e){var t=M((0,n.useState)(0),2),r=t[0],o=t[1],s=M((0,n.useState)(!1),2),i=s[0],a=s[1],c=function(){if(!i){var t=r===e.items.length-1?0:r+1;o(t)}},l=function(){if(!i){var t=0===r?e.items.length-1:r-1;o(t)}},u=e.items.map((function(e){return(0,I.jsx)(E,{onExiting:function(){return a(!0)},onExited:function(){return a(!1)},className:"h-100",children:(0,I.jsx)("div",{className:"h-100",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("+e.src+")",backgroundSize:"cover",backgroundPosition:"center"},children:(0,I.jsx)("div",{className:"h-100 bg-dark-gradient",style:{opacity:.7}})})},e.src)}));return(0,I.jsxs)(P,{activeIndex:r,next:c,previous:l,className:"h-100 carousel-fade",children:[(0,I.jsx)(S,{items:e.items,activeIndex:r,className:"d-flex flex-column align-items-center",onClickHandler:function(e){i||o(e)}}),u,(0,I.jsx)(C,{direction:"prev",directionText:"Previous",onClickHandler:l,className:"btn btn-dark"}),(0,I.jsx)(C,{direction:"next",directionText:"Next",onClickHandler:c,className:"btn btn-black rounded-right-0"}),e.children]})};var D=r(71795),A=r(86637),H=r(55757),L=r(89976),z=r(56941),q=r(90442),X=r(91121),Y=r(75351),B=r(26094),U=r(73727),F=r(92903),K=r(93379),$=r.n(K),G=r(13695),J={insert:"head",singleton:!1};$()(G.Z,J);G.Z.locals;function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function re(e,t){return re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},re(e,t)}function ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=se(e);if(t){var o=se(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return oe(this,r)}}function oe(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function se(e){return se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},se(e)}var ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(s,e);var t,r,n,o=ne(s);function s(){return ee(this,s),o.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){var e=this.props,t=e.content.cms.pages.components.post,r=e.photo,n=e.title,o=e.body,s=e.link,i=void 0===s?"/":s,c=e.md,l=void 0===c?6:c,u=e.lg,d=void 0===u?4:u;return(0,I.jsx)(a.Z,{md:l,lg:d,className:"NewsCard text-left pb-3",children:(0,I.jsxs)(z.Z,{className:"overflow-hidden shadow-sm",children:[(0,I.jsx)(q.Z,{top:!0,width:"100%",src:r,alt:"News card cap",className:"embed-responsive embed-responsive-4by3"}),(0,I.jsxs)(X.Z,{children:[(0,I.jsx)(Y.Z,{className:"h5 bg-dark-gradient bg-text text-truncate",children:n}),(0,I.jsx)(B.Z,{className:"text-300 text-small mb-4",children:(0,F.M3)(o).substr(0,100)}),(0,I.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:(0,I.jsx)(U.OL,{to:i,className:"text-decoration-none",children:(0,I.jsx)(D.Z,{icon:"arrow-alt-circle-right",color:"dark",size:"sm",children:t.read_more})})})]})]})})}}])&&te(t.prototype,r),n&&te(t,n),s}(n.Component);const ae=(0,o.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}))(ie);const ce=function(e){var t=e.children,r=e.title,n=e.icon,o=e.className;return(0,I.jsxs)(a.Z,{sm:6,lg:3,className:"text-center text-dark py-3 small px-4 m-0 "+o,children:[(0,I.jsxs)("div",{children:[(0,I.jsx)("div",{className:"mb-3",children:(0,I.jsx)("i",{className:"fas fa-"+n+" fa-3x bg-text bg-dark-gradient"})}),(0,I.jsx)("h4",{className:"text-700 mb-3 bg-text bg-dark-gradient",style:{textShadow:"0 0 4px 2px black"},children:r})]}),(0,I.jsx)("div",{className:"text-300",children:t})]})};r(17625);const le=function(e){var t=e.children,r=e.className,n=e.number,o=void 0===n?0:n;return(0,I.jsxs)(a.Z,{md:6,className:"d-flex pb-2 "+r,style:{overflow:"visible"},children:[(0,I.jsx)("div",{className:"pr-3",children:(0,I.jsx)("div",{className:"rounded-circle embed-responsive embed-responsive-1by1 border border-dark border-2 text-700 text-x-large d-flex justify-content-center align-items-center",style:{width:40},children:o})}),(0,I.jsx)("div",{className:"text-small text-300",children:t})]})};var ue=r(70687),de=r(87757),pe=r.n(de),fe=r(73501);function me(e,t,r,n,o,s,i){try{var a=e[s](i),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(n,o)}function he(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var s=e.apply(t,r);function i(e){me(s,n,o,i,a,"next",e)}function a(e){me(s,n,o,i,a,"throw",e)}i(void 0)}))}}function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ve=function(){return{type:fe.jn}},ge=function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){ye(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:fe.kY},e)},xe=function(e){return{type:fe.ud,error:e}},je=r(49553),Oe={insert:"head",singleton:!1};$()(je.Z,Oe);je.Z.locals;function Ne(e){return Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(e)}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){Ze(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ze(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ke(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Se(e,t){return Se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Se(e,t)}function Te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Ie(e);if(t){var o=Ie(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Ce(this,r)}}function Ce(e,t){if(t&&("object"===Ne(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Ie(e){return Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ie(e)}var Me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Se(e,t)}(d,e);var t,r,n,o=Te(d);function d(){return Pe(this,d),o.apply(this,arguments)}return t=d,(r=[{key:"componentDidMount",value:function(){this.props.get()}},{key:"render",value:function(){var e,t=this.props,r=t.content.cms.pages.frontend,n=r.footer.bottom.social_networks.whatsapp,o=r.pages.home,d=o.banner,p=o.features,f=o.qualification_assistance,m=o.products,h=o.squares,b=o.blog,y=t.frontend.home,v=y.loading,g=y.error,x=y.message,j=y.products,O=void 0===j?[]:j,N=y.posts,w=void 0===N?[]:N,E=localStorage.getItem("lang"),Z=(0,I.jsx)(c.Z,{message:x}),P=(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(l.Z,{err:g})}),k=O.map((function(e){return(0,I.jsx)(L.Z,Ee({},(0,F.v4)(e,{name:e.name[E],description:e.description[E]})),Math.random()+JSON.stringify(e))})),S=w.map((function(e){return(0,I.jsx)(ae,Ee({},(0,F.v4)(e,{title:e.title[E],body:e.body[E]})),JSON.stringify(e))})),T=f.points.map((function(e,t){return(0,I.jsx)(le,{number:t+1,children:e},e)}));return e=v?(0,I.jsx)(ue.Z,{}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u.Z,{bg:"transparent",children:(0,I.jsxs)("div",{className:"text-center py-5",id:"products",children:[(0,I.jsx)(H.Z,{children:m.title}),(0,I.jsx)("p",{className:"mb-4 text-300",children:m.description}),(0,I.jsx)(s.Z,{children:k})]})}),(0,I.jsxs)("div",{className:"position-relative container-fluid bg-white",id:"about",children:[(0,I.jsx)("div",{className:"position-absolute h-100 w-100",style:{top:0,left:0},children:(0,I.jsxs)(i.Z,{className:"h-100",children:[(0,I.jsx)(s.Z,{className:"justify-content-end position-relative align-items-center",style:{height:"50%"},children:(0,I.jsxs)(a.Z,{lg:6,className:"pl-4",children:[(0,I.jsx)(H.Z,{children:h.education_kits.title}),(0,I.jsx)("p",{className:"mb-4 text-300",children:h.education_kits.description}),(0,I.jsx)("a",{href:n,className:"text-decoration-none text-reset",children:(0,I.jsx)(A.Z,{pill:!0,color:"dark",children:h.education_kits.ask_price})})]})}),(0,I.jsx)(s.Z,{className:"position-relative align-items-center",style:{height:"50%"},children:(0,I.jsxs)(a.Z,{lg:6,className:"pr-4",children:[(0,I.jsx)(H.Z,{children:h.online_workshops.title}),(0,I.jsx)("p",{className:"mb-4 text-300",children:h.online_workshops.description}),(0,I.jsx)("a",{href:n,className:"text-decoration-none text-reset",children:(0,I.jsx)(A.Z,{pill:!0,color:"dark",children:h.online_workshops.ask_price})})]})})]})}),(0,I.jsxs)(s.Z,{className:"align-items-center",children:[(0,I.jsx)(a.Z,{lg:6,className:"embed-responsive embed-responsive-4by3",style:{background:'url("'+h.education_kits.img+'") no-repeat center',backgroundSize:"cover"}}),(0,I.jsx)(a.Z,{lg:6}),(0,I.jsx)(a.Z,{lg:6}),(0,I.jsx)(a.Z,{lg:6,className:"embed-responsive embed-responsive-4by3",style:{background:'url("'+h.online_workshops.img+'") no-repeat center',backgroundSize:"cover"}})]})]}),(0,I.jsx)(u.Z,{bg:"transparent",children:(0,I.jsxs)("div",{className:"text-center py-5",children:[(0,I.jsx)(H.Z,{children:b.title}),(0,I.jsx)("p",{className:"mb-4 text-300",children:b.description}),(0,I.jsx)(s.Z,{children:S})]})})]}),(0,I.jsxs)(a.Z,{xs:12,className:"Home p-0",children:[(0,I.jsx)("div",{className:"position-relative min-vh-100",children:(0,I.jsxs)("div",{className:"position-absolute h-100 w-100",children:[(0,I.jsxs)(a.Z,{sm:9,xl:6,lg:7,md:8,id:"banner",className:"text-white mx-auto text-center",children:[(0,I.jsx)("h1",{className:"display-4 text-700",children:d.body.title}),(0,I.jsx)("p",{className:"text-300 text-large",children:d.body.description}),(0,I.jsxs)("div",{className:"text-large mt-5",children:[(0,I.jsx)("a",{href:n,className:"text-decoration-none text-reset",children:(0,I.jsx)(D.Z,{size:"lg",color:"light",pill:!0,icon:"dollar-sign",className:"mr-3",children:d.body.ask_price})}),(0,I.jsx)("a",{href:"//ma64industry.themasterofarts.com",className:"text-decoration-none text-reset",children:(0,I.jsx)(D.Z,{size:"lg",color:"outline-light",pill:!0,icon:"dollar-sign",children:d.body.crowdfunding})})]})]}),(0,I.jsx)(R,{items:d.carousel})]})}),(0,I.jsx)(u.Z,{user:!0,bg:"transparent",children:(0,I.jsxs)(i.Z,{className:"position-relative py-5",style:{transform:"translateY(0%) scale(1)",transformOrigin:"center",zIndex:11},children:[(0,I.jsx)("div",{className:"flex",children:(0,I.jsxs)(s.Z,{className:"m-0",children:[(0,I.jsx)(ce,{border:!0,icon:"plane",title:p.from_air}),(0,I.jsx)(ce,{border:!0,icon:"fighter-jet",title:p.best_drones}),(0,I.jsx)(ce,{border:!0,icon:"tachometer-alt",title:p.speed}),(0,I.jsx)(ce,{icon:"robot",title:p.long_range})]})}),(0,I.jsx)("div",{className:"text-center mt-5",children:(0,I.jsx)("a",{href:n,className:"text-decoration-none text-reset",children:(0,I.jsx)(A.Z,{pill:!0,color:"dark",children:p.ask_price})})})]})}),(0,I.jsxs)("div",{className:"position-relative bg-white",children:[(0,I.jsx)("div",{className:"position-absolute w-50 h-100",style:{top:0,right:0,background:'url("'+f.img+'") no-repeat top right',backgroundSize:"contain"}}),(0,I.jsx)(i.Z,{style:{zIndex:2},className:"py-5",children:(0,I.jsx)(s.Z,{className:"py-5",children:(0,I.jsxs)(a.Z,{lg:8,children:[(0,I.jsx)(H.Z,{children:f.title}),(0,I.jsx)("p",{className:"text-300 w-75 mb-4",children:f.description}),(0,I.jsx)(s.Z,{className:"text-300",children:T})]})})})]}),Z,P,e]})}}])&&ke(t.prototype,r),n&&ke(t,n),d}(n.Component);const _e=(0,o.$j)((function(e){return Ee({},e)}),(function(e){return{get:function(){return e(function(){var e=he(pe().mark((function e(t){var r,n;return pe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ve()),e.prev=1,e.next=4,fetch("".concat(PREFIX,"home"));case 4:return r=e.sent,e.next=7,r.json();case 7:n=e.sent,t(ge(n)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),t(xe(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Me)},48891:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(23645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".ArticleCard img{opacity:.8;transition:all .5s}.ArticleCard .card:hover img{opacity:1}",""]);const s=o},13695:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(23645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".UI.Post img{transform:scale(1) rotate(0deg);transform-origin:center;transition:all .5s}.UI.Post .card:hover img{transform:scale(1.1) rotate(3deg)}",""]);const s=o},49553:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(23645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".Home .carousel-inner{height:100%!important}.Home #banner{left:50%;margin:auto;position:absolute;top:50%;transform:translate(-50%,-60%) scale(.75);transform-origin:center;z-index:10}.Home .carousel-indicators{left:4%;margin:0;top:50%;transform:translateY(-50%);width:30px}.Home .carousel-indicators li{background-color:hsla(0,0%,100%,.7);border-radius:50%;height:24px;transition:all .5s;width:24px}.Home .carousel-indicators li.active{background-color:#fff;height:20px;width:20px}.Home .carousel-control-next,.Home .carousel-control-prev{bottom:40px;opacity:1;top:auto;width:51px!important}.Home .carousel-control-prev{border-bottom-right-radius:0!important;border-top-right-radius:0!important;height:30px!important;left:auto;right:91px}.Home .carousel-control-next{border-bottom-left-radius:0!important;border-top-left-radius:0!important;height:40px!important;right:40px}",""]);const s=o},56941:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),o=r(63366),s=r(67294),i=r(45697),a=r.n(i),c=r(94184),l=r.n(c),u=r(23663),d={tag:u.iC,inverse:a().bool,color:a().string,body:a().bool,outline:a().bool,className:a().string,cssModule:a().object,innerRef:a().oneOfType([a().object,a().string,a().func])},p=function(e){var t=e.className,r=e.cssModule,i=e.color,a=e.body,c=e.inverse,d=e.outline,p=e.tag,f=e.innerRef,m=(0,o.Z)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=(0,u.mx)(l()(t,"card",!!c&&"text-white",!!a&&"card-body",!!i&&(d?"border":"bg")+"-"+i),r);return s.createElement(p,(0,n.Z)({},m,{className:h,ref:f}))};p.propTypes=d,p.defaultProps={tag:"div"};const f=p},91121:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),o=r(63366),s=r(67294),i=r(45697),a=r.n(i),c=r(94184),l=r.n(c),u=r(23663),d={tag:u.iC,className:a().string,cssModule:a().object,innerRef:a().oneOfType([a().object,a().string,a().func])},p=function(e){var t=e.className,r=e.cssModule,i=e.innerRef,a=e.tag,c=(0,o.Z)(e,["className","cssModule","innerRef","tag"]),d=(0,u.mx)(l()(t,"card-body"),r);return s.createElement(a,(0,n.Z)({},c,{className:d,ref:i}))};p.propTypes=d,p.defaultProps={tag:"div"};const f=p},90442:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),o=r(63366),s=r(67294),i=r(45697),a=r.n(i),c=r(94184),l=r.n(c),u=r(23663),d={tag:u.iC,top:a().bool,bottom:a().bool,className:a().string,cssModule:a().object},p=function(e){var t=e.className,r=e.cssModule,i=e.top,a=e.bottom,c=e.tag,d=(0,o.Z)(e,["className","cssModule","top","bottom","tag"]),p="card-img";i&&(p="card-img-top"),a&&(p="card-img-bottom");var f=(0,u.mx)(l()(t,p),r);return s.createElement(c,(0,n.Z)({},d,{className:f}))};p.propTypes=d,p.defaultProps={tag:"img"};const f=p},7285:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),o=r(63366),s=r(67294),i=r(45697),a=r.n(i),c=r(94184),l=r.n(c),u=r(23663),d={tag:u.iC,className:a().string,cssModule:a().object},p=function(e){var t=e.className,r=e.cssModule,i=e.tag,a=(0,o.Z)(e,["className","cssModule","tag"]),c=(0,u.mx)(l()(t,"card-subtitle"),r);return s.createElement(i,(0,n.Z)({},a,{className:c}))};p.propTypes=d,p.defaultProps={tag:"div"};const f=p},26094:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),o=r(63366),s=r(67294),i=r(45697),a=r.n(i),c=r(94184),l=r.n(c),u=r(23663),d={tag:u.iC,className:a().string,cssModule:a().object},p=function(e){var t=e.className,r=e.cssModule,i=e.tag,a=(0,o.Z)(e,["className","cssModule","tag"]),c=(0,u.mx)(l()(t,"card-text"),r);return s.createElement(i,(0,n.Z)({},a,{className:c}))};p.propTypes=d,p.defaultProps={tag:"p"};const f=p},75351:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),o=r(63366),s=r(67294),i=r(45697),a=r.n(i),c=r(94184),l=r.n(c),u=r(23663),d={tag:u.iC,className:a().string,cssModule:a().object},p=function(e){var t=e.className,r=e.cssModule,i=e.tag,a=(0,o.Z)(e,["className","cssModule","tag"]),c=(0,u.mx)(l()(t,"card-title"),r);return s.createElement(i,(0,n.Z)({},a,{className:c}))};p.propTypes=d,p.defaultProps={tag:"div"};const f=p}}]);