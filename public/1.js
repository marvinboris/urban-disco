(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{104:function(e,t,a){var n=a(105);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(22)(n,r);n.locals&&(e.exports=n.locals)},105:function(e,t,a){(e.exports=a(21)(!1)).push([e.i,".TeamMemberCard img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center;\r\n       object-position: center;\r\n}\r\n\r\n.TeamMemberCard .img-wrapper {\r\n    width: 100px;\r\n    height: 100px;\r\n}",""])},16:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(15),c=a(10),l=a(3),o=a(5),s=a(1),m=a.n(s),u=a(4),p=a.n(u),f=a(2),b={tag:f.h,active:m.a.bool,className:m.a.string,cssModule:m.a.object},d=function(e){var t=e.className,a=e.cssModule,n=e.active,i=e.tag,c=Object(o.a)(e,["className","cssModule","active","tag"]),s=Object(f.e)(p()(t,!!n&&"active","breadcrumb-item"),a);return r.a.createElement(i,Object(l.a)({},c,{className:s,"aria-current":n?"page":void 0}))};d.propTypes=b,d.defaultProps={tag:"li"};var g=d,v={tag:f.h,listTag:f.h,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},y=function(e){var t=e.className,a=e.listClassName,n=e.cssModule,i=e.children,c=e.tag,s=e.listTag,m=e["aria-label"],u=Object(o.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(f.e)(p()(t),n),d=Object(f.e)(p()("breadcrumb",a),n);return r.a.createElement(c,Object(l.a)({},u,{className:b,"aria-label":m}),r.a.createElement(s,{className:d},i))};y.propTypes=v,y.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var E=y,h=(a(67),function(e){var t=e.items,a=e.main,n=null;return t&&(n=t.map((function(e,t){return r.a.createElement(g,{key:t},r.a.createElement(c.b,{className:"text-white text-700",to:e.to},e.content))}))),r.a.createElement("div",{className:"container-fluid bg-transparent position-absolute",style:{top:0,opacity:.5}},r.a.createElement("div",{className:"px-5 pt-2"},r.a.createElement(E,{listClassName:"bg-transparent rounded-0 m-0 p-0"},r.a.createElement(g,null,r.a.createElement(c.b,{className:"text-700 text-white",to:"/"},"Home")),n,r.a.createElement(g,{className:"text-white text-300 text-montserrat-alt",active:!0},a))))}),x=a(47),N=a.n(x);t.a=function(e){var t=e.title,a=e.items;return r.a.createElement(i.a,{bg:"",className:"position-relative",style:{background:'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("'+N.a+'") no-repeat center',backgroundSize:"cover",backgroundAttachment:"fixed"},innerStyle:{marginTop:50}},r.a.createElement("div",{className:"position-absolute w-100 h-100 bg-dark-gradient",style:{opacity:.9,top:0,left:0,zIndex:1}}),r.a.createElement("div",{className:"position-relative",style:{zIndex:2}},r.a.createElement(h,{items:a,main:t}),r.a.createElement("div",{className:"text-center text-white py-5"},r.a.createElement("h1",{className:"text-700 pt-5"},t))))}},179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a(17),l=a(46),o=a(54),s=a(15),m=a(65),u=a(171),p=(a(104),a(7)),f=function(e){var t=e.name,a=e.title,n=(e.children,e.src);e.lg;return r.a.createElement(c.a,{md:6,lg:3},r.a.createElement(m.a,{className:"border-0 rounded-0 bg-transparent overflow-hidden position-relative text-left shadow-sm"},r.a.createElement("div",{className:"position-absolute w-100 h-100",style:{background:"url('"+n+"') no-repeat center",backgroundSize:"cover"}}),r.a.createElement("div",{className:"card-img-top embed-responsive embed-responsive-1by1 bg-black",style:{opacity:.3}}),r.a.createElement(u.a,{className:"bg-black-80 text-white position-relative"},r.a.createElement("div",{className:"bg-white rounded-right position-absolute",style:{width:8,height:36,top:"50%",left:0,transform:"translateY(-50%)"}}),r.a.createElement("div",{className:"ml-3"},r.a.createElement("div",{className:"font-weight-normal text-montserrat-alt h4 position-relative d-flex align-items-center"},r.a.createElement("span",{className:"pr-2"},t),r.a.createElement("div",{className:"position-absolute border-bottom border-white-20",style:{top:13,left:-50,width:45}},r.a.createElement(p.a,{icon:"circle",className:"text-xx-small position-absolute",style:{right:0,top:0,transform:"translateY(-50%)"}})),r.a.createElement("div",{className:"position-relative border-bottom border-white-20 flex-fill",style:{marginRight:-20}},r.a.createElement(p.a,{icon:"play",className:"text-xx-small text-yellow position-absolute",style:{left:0,top:0,transform:"translateY(-50%)"}}))),r.a.createElement("div",{className:"card-text text-light text-montserrat-alt pb-1 mb-3"},a),r.a.createElement("div",null,r.a.createElement(p.a,{size:"lg",className:"mr-2",icon:["fab","facebook-square"]}),r.a.createElement(p.a,{size:"lg",className:"mr-2",icon:["fab","twitter-square"]}),r.a.createElement(p.a,{size:"lg",className:"mr-2",icon:["fab","instagram"]}),r.a.createElement(p.a,{size:"lg",className:"mr-2",icon:["fab","whatsapp"]}))))))},b=(a(67),a(30),a(16)),d=a(25),g=function(e){var t=e.icon,a=e.number,n=e.title;return r.a.createElement(c.a,{lg:3,xs:6,className:"text-center text-white h2"},r.a.createElement(p.a,{size:"2x",icon:t}),r.a.createElement("div",{className:"py-4 text-montserrat-alt text-700 counter"},a),r.a.createElement("div",{className:"text-500"},n))},v=a(12),y=a(68),E=a.n(y),h=a(58),x=a.n(h),N=a(69),w=a.n(N),O=a(70),j=a.n(O),P=a(71),k=a.n(P);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(u,e);var t,a,n,i,m=(t=u,function(){var e,a=M(t);if(D()){var n=M(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return q(this,e)});function u(){return z(this,u),m.apply(this,arguments)}return a=u,(n=[{key:"componentDidMount",value:function(){this.props.auth.authPage&&this.props.onAuthPageOff(),this.props.auth.userPage&&this.props.onUserPageOff()}},{key:"render",value:function(){return r.a.createElement(c.a,{xs:12,className:"AboutUs p-0"},r.a.createElement(b.a,{title:"About Us"}),r.a.createElement(s.a,{innerClassName:"py-5"},r.a.createElement(l.a,{className:"align-items-center"},r.a.createElement(c.a,{lg:5},r.a.createElement("img",{src:E.a,className:"img-fluid"})),r.a.createElement(c.a,{lg:7},r.a.createElement(d.a,null,"Who We Are?"),r.a.createElement("p",{className:"mb-4"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies pretium nisi quis interdum. Duis elit purus, suscipit et quam sit amet, fringilla semper nisi. Ut sed pellentesque lectus. Nullam quis urna maximus, cursus arcu sit amet, sagittis elit."),r.a.createElement("p",null,"Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean imperdiet.")))),r.a.createElement("div",{className:"position-relative",style:{background:'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("'+k.a+'") no-repeat center',backgroundSize:"cover"}},r.a.createElement("div",{className:"position-absolute w-100 h-100 bg-dark-gradient",style:{opacity:.7,top:0,zIndex:1}}),r.a.createElement("div",{className:"position-relative",style:{zIndex:2}},r.a.createElement(o.a,{className:"py-5"},r.a.createElement(l.a,null,r.a.createElement(g,{icon:"hourglass",number:164,title:"Hours per week"}),r.a.createElement(g,{icon:"code",number:2e4,title:"Lines of code"}),r.a.createElement(g,{icon:"cogs",number:1e3,title:"Projects"}),r.a.createElement(g,{icon:"file-image",number:2e3,title:"Dribble"}))))),r.a.createElement(s.a,null,r.a.createElement("div",{className:"text-center py-5"},r.a.createElement(d.a,null,"Our team"),r.a.createElement("p",{className:"mb-4 text-300"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat."),r.a.createElement(l.a,null,r.a.createElement(f,{name:"John Alverosa",title:"CEO",src:x.a}),r.a.createElement(f,{name:"Palo Altonio",title:"SEO Marketing",src:w.a}),r.a.createElement(f,{name:"Doe Borison",title:"Technician",src:j.a}),r.a.createElement(f,{name:"John Alverosa",title:"Counselor",src:x.a})))))}}])&&C(a.prototype,n),i&&C(a,i),u}(n.Component);t.default=Object(i.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){A(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)}),(function(e){return{onAuthPageOff:function(){return e(v.e())},onUserPageOff:function(){return e(v.i())}}}))(R)},58:function(e,t){e.exports="/images/men-images-png-1@2x.png?ae9229a61c93fe02fc2e3750306cfcf3"},67:function(e,t,a){"use strict";a(0),a(7)},68:function(e,t){e.exports="/images/Tab01.jpg?a98a6f56cc8de10f5fd39de52740a91d"},69:function(e,t){e.exports="/images/product_111_11@2x.png?d659b4347ff4faf0c6ac10a2cac8114f"},70:function(e,t){e.exports="/images/istockphoto-531547724-612x612@2x.png?9b250131f3a2e1687dbb54140cc31f73"},71:function(e,t){e.exports="/images/ABOUT1.jpg?bb5cca9bacc507e709b141415dbe123e"}}]);