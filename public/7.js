(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{111:function(e,t,n){var a=n(112);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(a,r);a.locals&&(e.exports=a.locals)},112:function(e,t,n){(e.exports=n(21)(!1)).push([e.i,".Signup,\r\n.Signup > .container,\r\n.Signup > .container > .row {\r\n    min-height: 100vh;\r\n}",""])},179:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n(26),l=n(10),c=n(7),s=n(58),u=n(59),f=n(40),d=n(65),p=n(17),m=n(53),h=n(43),b=n(64),g=(n(111),n(24)),v=n(51),y=n(12),O=n(8);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(j,e);var t,n,a,o,y=(t=j,function(){var e,n=x(t);if(S()){var a=x(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return C(this,e)});function j(){var e;w(this,j);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return k(R(e=y.call.apply(y,[this].concat(n))),"state",{formError:!1,formLoading:!1,controls:{name:{elementConfig:{type:"text",label:"Nom(s) & prénom(s)",autoFocus:!0},icon:"signature",value:"",validation:{required:!0,minLength:5},valid:!1,touched:!1},email:{elementConfig:{type:"email",label:"Adresse mail"},icon:"envelope",value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementConfig:{type:"password",label:"Mot de passe"},icon:"lock",value:"",validation:{required:!0,minLength:8},valid:!1,touched:!1},password_confirmation:{elementConfig:{type:"password",label:"Confirmation du mot de passe"},icon:"key",value:"",validation:{required:!0,minLength:8},valid:!1,touched:!1},roleId:{elementConfig:{type:"select",label:"Rôle",options:{array:[],value:"_id",name:"name"}},icon:"user-tag",value:"",validation:{required:!0},valid:!0,touched:!1},phone:{elementConfig:{type:"tel",label:"Numéro de téléphone"},icon:"phone",value:"",validation:{required:!0,minLength:8},valid:!1,touched:!1},image:{elementConfig:{type:"file",label:"Photo"},icon:"image",value:"",validation:{required:!0},valid:!1,touched:!1}}}),k(R(e),"inputChangedHandler",(function(t){var n=t.target,a=n.files,r=n.name,o=n.value,i=e.state.controls;e.setState(Object(O.b)(e.state,{controls:Object(O.b)(i,k({},r,Object(O.b)(i[r],{value:a?a[0]:o,valid:Object(O.a)(o,i[r].validation),touched:!0})))})),e.setState({formError:!1})})),k(R(e),"submitHandler",(function(t){var n=e.state.controls;t.preventDefault();var a={},r=!0;for(var o in n)if(n.hasOwnProperty(o)){var i=n[o];a[o]=i.value,i.hasOwnProperty("valid")&&(r=r&&i.valid)}r?(e.props.onAuthErrorReset(),e.props.onAuthSignup(a),e.setState({formError:!1})):e.setState({formError:!0})})),e}return n=j,(a=[{key:"componentDidMount",value:function(){var e=this;this.props.auth.authPage||this.props.onAuthPageOn(),this.props.auth.userPage&&this.props.onUserPageOff(),this.props.onSetAuthRedirectPath(),fetch("http://localhost:8080/auth/signup",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Erreur lors de la récupération des rôles.");return e.json()})).then((function(t){e.setState({controls:Object(O.b)(e.state.controls,{roleId:Object(O.b)(e.state.controls.roleId,{elementConfig:Object(O.b)(e.state.controls.roleId.elementConfig,{options:Object(O.b)(e.state.controls.roleId.elementConfig.options,{array:t.roles})})})})})})).catch((function(e){console.log(e)}))}},{key:"componentWillUnmount",value:function(){this.props.onAuthErrorReset()}},{key:"render",value:function(){var e=this,t=this.state,n=t.controls,a=t.formError,o=t.formLoading,y=this.props.auth,O=y.token,j=y.authRedirectPath,E=y.error,w=y.loading,N=null;null!==O&&(N=r.a.createElement(i.a,{to:j}));var C=null;a&&(C=r.a.createElement("p",{className:"text-center text-danger"},"Veuillez vérifier vos informations."));var R=Object.keys(n).map((function(t){return r.a.createElement(v.a,{key:t,value:n[t].value,onChange:function(t){return e.inputChangedHandler(t)},name:t,icon:n[t].icon,className:n[t].elementConfig.className,check:["radio","checkbox"].includes(n[t].elementConfig.type),select:"select"===n[t].elementConfig.type,file:"file"===n[t].elementConfig.type,options:n[t].elementConfig.options,required:n[t].validation.required,type:n[t].elementConfig.type,invalid:!n[t].valid,touched:n[t].touched,shouldValidate:!!n[t].validation,autoFocus:n[t].elementConfig.autoFocus},n[t].elementConfig.label)})),S=r.a.createElement(r.a.Fragment,null,C,E?r.a.createElement("div",{className:"alert alert-danger"},E.message):null,r.a.createElement(s.a,{onSubmit:function(t){return e.submitHandler(t)}},R,r.a.createElement(u.a,null,r.a.createElement(f.a,{color:"danger",block:!0},"S'inscrire",r.a.createElement(c.a,{icon:"user-plus",size:"lg",className:"ml-1"}))),r.a.createElement(l.b,{to:"/login",className:"text-info"},"J'ai déjà un compte.")));return(o||w)&&(S=r.a.createElement("div",{className:"text-center"},r.a.createElement(d.a,{type:"grow",style:{width:"5rem",height:"5rem"},color:"danger"}))),r.a.createElement(p.a,{xs:12,className:"Signup p-0 bg-info-danger"},N,r.a.createElement(m.a,{className:"py-5"},r.a.createElement(h.a,{className:"justify-content-center align-items-center"},r.a.createElement(p.a,{lg:7},r.a.createElement(b.a,{className:"py-4 px-5 rounded-lg shadow-sm"},r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement(l.b,{to:"/",className:"text-decoration-none"},r.a.createElement(g.a,null))),r.a.createElement("h5",{className:"text-uppercase font-weight-light text-center mb-3"},"Inscription"),S)))))}}])&&N(n.prototype,a),o&&N(n,o),j}(a.Component);t.default=Object(i.g)(Object(o.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)}),(function(e){return{onAuthPageOn:function(){return e(y.f())},onUserPageOff:function(){return e(y.i())},onAuthErrorReset:function(){return e(y.b())},onAuthSignup:function(t){return e(y.g(t))},onSetAuthRedirectPath:function(){return e(y.h("/"))}}}))(z))},35:function(e,t,n){"use strict";var a=n(3),r=n(5),o=n(0),i=n.n(o),l=n(1),c=n.n(l),s=n(4),u=n.n(s),f=n(2),d=n(11),p=n(13),m={className:c.a.string,id:c.a.oneOfType([c.a.string,c.a.number]).isRequired,label:c.a.node,valid:c.a.bool,invalid:c.a.bool,bsSize:c.a.string,htmlFor:c.a.string,cssModule:c.a.object,onChange:c.a.func,children:c.a.oneOfType([c.a.node,c.a.array,c.a.func]),innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={files:null},n.onChange=n.onChange.bind(Object(d.a)(n)),n}Object(p.a)(t,e);var n=t.prototype;return n.onChange=function(e){var t=e.target,n=this.props.onChange,a=this.getSelectedFiles(t);"function"==typeof n&&n.apply(void 0,arguments),this.setState({files:a})},n.getSelectedFiles=function(e){if(this.props.multiple&&e.files)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var t=e.value.split("\\");return t[t.length-1]}return e.value},n.render=function(){var e=this.props,t=e.className,n=e.label,o=e.valid,l=e.invalid,c=e.cssModule,s=e.children,d=(e.bsSize,e.innerRef),p=e.htmlFor,m=(e.type,e.onChange,e.dataBrowse),h=Object(r.a)(e,["className","label","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor","type","onChange","dataBrowse"]),b=Object(f.e)(u()(t,"custom-file"),c),g=Object(f.e)(u()(l&&"is-invalid",o&&"is-valid"),c),v=p||h.id,y=this.state.files;return i.a.createElement("div",{className:b},i.a.createElement("input",Object(a.a)({type:"file"},h,{ref:d,className:u()(g,Object(f.e)("custom-file-input",c)),onChange:this.onChange})),i.a.createElement("label",{className:Object(f.e)("custom-file-label",c),htmlFor:v,"data-browse":m},y||n||"Choose file"),s)},t}(i.a.Component);h.propTypes=m;var b=h,g={className:c.a.string,id:c.a.oneOfType([c.a.string,c.a.number]).isRequired,type:c.a.string.isRequired,label:c.a.node,inline:c.a.bool,valid:c.a.bool,invalid:c.a.bool,bsSize:c.a.string,htmlFor:c.a.string,cssModule:c.a.object,children:c.a.oneOfType([c.a.node,c.a.array,c.a.func]),innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])};function v(e){var t=e.className,n=e.label,o=e.inline,l=e.valid,c=e.invalid,s=e.cssModule,d=e.children,p=e.bsSize,m=e.innerRef,h=e.htmlFor,g=Object(r.a)(e,["className","label","inline","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor"]),v=g.type,y=Object(f.e)(u()(t,"custom-"+v,!!p&&"custom-"+v+"-"+p),s),O=Object(f.e)(u()(c&&"is-invalid",l&&"is-valid"),s),j=h||g.id;if("select"===v){g.type;var E=Object(r.a)(g,["type"]);return i.a.createElement("select",Object(a.a)({},E,{ref:m,className:u()(O,y)}),d)}if("file"===v)return i.a.createElement(b,e);if("checkbox"!==v&&"radio"!==v&&"switch"!==v)return i.a.createElement("input",Object(a.a)({},g,{ref:m,className:u()(O,y)}));var w=u()(y,Object(f.e)(u()("custom-control",{"custom-control-inline":o}),s));return i.a.createElement("div",{className:w},i.a.createElement("input",Object(a.a)({},g,{type:"switch"===v?"checkbox":v,ref:m,className:u()(O,Object(f.e)("custom-control-input",s))})),i.a.createElement("label",{className:Object(f.e)("custom-control-label",s),htmlFor:j},n),d)}v.propTypes=g;t.a=v},51:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(59),i=n(35),l=n(3),c=n(5),s=n(1),u=n.n(s),f=n(4),d=n.n(f),p=n(2),m=u.a.oneOfType([u.a.number,u.a.string]),h=u.a.oneOfType([u.a.string,u.a.number,u.a.shape({size:m,order:m,offset:m})]),b={children:u.a.node,hidden:u.a.bool,check:u.a.bool,size:u.a.string,for:u.a.string,tag:p.h,className:u.a.string,cssModule:u.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:u.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,a=e.hidden,o=e.widths,i=e.tag,s=e.check,u=e.size,f=e.for,m=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];o.forEach((function(t,a){var r=e[t];if(delete m[t],r||""===r){var o,i=!a;if(Object(p.d)(r)){var l,c=i?"-":"-"+t+"-";o=v(i,t,r.size),h.push(Object(p.e)(d()(((l={})[o]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l))),n)}else o=v(i,t,r),h.push(o)}}));var b=Object(p.e)(d()(t,!!a&&"sr-only",!!s&&"form-check-label",!!u&&"col-form-label-"+u,h,!!h.length&&"col-form-label"),n);return r.a.createElement(i,Object(l.a)({htmlFor:f},m,{className:b}))};y.propTypes=b,y.defaultProps=g;var O=y,j=n(17),E=n(54),w=n(7);t.a=function(e){var t=e.icon,n=e.name,a=e.type,l=e.check,c=e.placeholder,s=e.required,u=e.autoFocus,f=e.children,d=e.className,p=e.onChange,m=e.invalid,h=e.touched,b=e.shouldValidate,g=e.row,v=e.select,y=e.options,N=e.file,C=e.value,R=null;return v&&(R=y.array.map((function(e){return r.a.createElement("option",{key:e[y.value],value:e[y.value]},e[y.name])}))),r.a.createElement(o.a,{row:g,className:d+(g?" align-items-center":""),check:l},l?r.a.createElement(i.a,{type:a,name:n,id:n,label:f,value:C||""}):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{sm:g?4:null,className:g?" text-right font-weight-bold":"",for:n},t?r.a.createElement(w.a,{fixedWidth:!0,icon:t,className:"mr-1"}):null,f),g?r.a.createElement(j.a,{sm:8},N?r.a.createElement(i.a,{type:a,invalid:m&&h&&b,valid:!m&&h&&b,name:n,id:n,required:s,autoFocus:u,placeholder:c,onChange:p}):r.a.createElement(E.a,{type:a,value:C||"",invalid:m&&h&&b,valid:!m&&h&&b,name:n,id:n,required:s,autoFocus:u,placeholder:c,onChange:p})):v?r.a.createElement(E.a,{type:a,value:C||"",invalid:m&&h&&b,valid:!m&&h&&b,name:n,id:n,required:s,autoFocus:u,placeholder:c,onChange:p},R):N?r.a.createElement(i.a,{type:a,invalid:m&&h&&b,valid:!m&&h&&b,name:n,id:n,required:s,autoFocus:u,placeholder:c,onChange:p}):r.a.createElement(E.a,{type:a,value:C||"",invalid:m&&h&&b,valid:!m&&h&&b,name:n,id:n,required:s,autoFocus:u,placeholder:c,onChange:p})))}},54:function(e,t,n){"use strict";var a=n(3),r=n(5),o=n(11),i=n(13),l=n(0),c=n.n(l),s=n(1),u=n.n(s),f=n(4),d=n.n(f),p=n(2),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.h,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=e.bsSize,l=e.valid,s=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,h=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),y=u||("select"===o||"textarea"===o?o:"input"),O="form-control";m?(O+="-plaintext",y=u||"input"):"file"===o?O+="-file":g&&(O=f?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.i)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var j=Object(p.e)(d()(t,s&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,O),n);return("input"===y||u&&"function"==typeof u)&&(b.type=o),b.children&&!m&&"select"!==o&&"string"==typeof y&&"select"!==y&&(Object(p.i)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(y,Object(a.a)({},b,{ref:h,className:j}))},t}(c.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h},58:function(e,t,n){"use strict";var a=n(3),r=n(5),o=n(11),i=n(13),l=n(0),c=n.n(l),s=n(1),u=n.n(s),f=n(4),d=n.n(f),p=n(2),m={children:u.a.node,inline:u.a.bool,tag:p.h,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,i=e.tag,l=e.innerRef,s=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.e)(d()(t,!!o&&"form-inline"),n);return c.a.createElement(i,Object(a.a)({},s,{ref:l,className:u}))},t}(l.Component);h.propTypes=m,h.defaultProps={tag:"form"},t.a=h},59:function(e,t,n){"use strict";var a=n(3),r=n(5),o=n(0),i=n.n(o),l=n(1),c=n.n(l),s=n(4),u=n.n(s),f=n(2),d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:f.h,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.row,l=e.disabled,c=e.check,s=e.inline,d=e.tag,p=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(f.e)(u()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!s)&&"form-check-inline",!(!c||!l)&&"disabled"),n);return"fieldset"===d&&(p.disabled=l),i.a.createElement(d,Object(a.a)({},p,{className:m}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p}}]);