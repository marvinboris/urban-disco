(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./public/css/star-rating-svg.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./public/css/star-rating-svg.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jq-stars {\n  display: inline-block;\n}\n\n.jq-rating-label {\n  font-size: 22px;\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n  font-family: helvetica, arial, verdana;\n}\n\n.jq-star {\n  width: 100px;\n  height: 100px;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.jq-star-svg {\n  padding-left: 3px;\n  width: 100%;\n  height: 100% ;\n}\n\n.jq-star:hover .fs-star-svg path {\n}\n\n.jq-star-svg path {\n  /* stroke: #000; */\n  stroke-linejoin: round;\n}\n\n/* un-used */\n.jq-shadow {\n  -webkit-filter: drop-shadow( -2px -2px 2px #888 );\n  filter: drop-shadow( -2px -2px 2px #888 );\n}\n", ""]);

// exports


/***/ }),

/***/ "./public/css/star-rating-svg.css":
/*!****************************************!*\
  !*** ./public/css/star-rating-svg.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/postcss-loader/src??ref--6-2!./star-rating-svg.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./public/css/star-rating-svg.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./public/images/2fa67f482133f1c934235b73c2a03954_L.jpg":
/*!**************************************************************!*\
  !*** ./public/images/2fa67f482133f1c934235b73c2a03954_L.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/2fa67f482133f1c934235b73c2a03954_L.jpg?54941c18822f4d377058cf6d090b0c33";

/***/ }),

/***/ "./public/images/94d43e327d9303539cb1e2aac7032668_L.jpg":
/*!**************************************************************!*\
  !*** ./public/images/94d43e327d9303539cb1e2aac7032668_L.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/94d43e327d9303539cb1e2aac7032668_L.jpg?638eaacf40078c8a985c32b297ab329b";

/***/ }),

/***/ "./public/images/e0a70f72bdae9885bfc32d7cd19a26a1_L.jpg":
/*!**************************************************************!*\
  !*** ./public/images/e0a70f72bdae9885bfc32d7cd19a26a1_L.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/e0a70f72bdae9885bfc32d7cd19a26a1_L.jpg?0a325782244144b240151be1275ad1b5";

/***/ }),

/***/ "./resources/js/components/UI/Banner/Banner.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/UI/Banner/Banner.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PresentationalContainer/PresentationalContainer */ "./resources/js/components/UI/PresentationalContainer/PresentationalContainer.js");
/* harmony import */ var _Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Breadcrumb/Breadcrumb */ "./resources/js/components/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _public_images_Drone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../public/images/Drone.png */ "./public/images/Drone.png");
/* harmony import */ var _public_images_Drone_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_Drone_png__WEBPACK_IMPORTED_MODULE_3__);





var banner = function banner(_ref) {
  var title = _ref.title,
      items = _ref.items;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bg: "",
    className: "position-relative",
    style: {
      background: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + _public_images_Drone_png__WEBPACK_IMPORTED_MODULE_3___default.a + '") no-repeat center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    },
    innerStyle: {
      marginTop: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-absolute w-100 h-100 bg-dark-gradient",
    style: {
      opacity: .9,
      top: 0,
      left: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative",
    style: {
      zIndex: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: items,
    main: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center text-white py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-700 pt-5"
  }, title))));
};

/* harmony default export */ __webpack_exports__["default"] = (banner);

/***/ }),

/***/ "./resources/js/components/UI/Breadcrumb/Breadcrumb.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/UI/Breadcrumb/Breadcrumb.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _WithPoint_WithPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WithPoint/WithPoint */ "./resources/js/components/UI/WithPoint/WithPoint.js");





var breadcrumb = function breadcrumb(_ref) {
  var items = _ref.items,
      main = _ref.main;
  var itemsComponent = null;
  if (items) itemsComponent = items.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "text-white text-700",
      to: item.to
    }, item.content));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid bg-transparent position-absolute",
    style: {
      top: 0,
      opacity: .5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-5 pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    listClassName: "bg-transparent rounded-0 m-0 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "text-700 text-white",
    to: "/"
  }, "Home")), itemsComponent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
    className: "text-white text-300 text-montserrat-alt",
    active: true
  }, main))));
};

/* harmony default export */ __webpack_exports__["default"] = (breadcrumb);

/***/ }),

/***/ "./resources/js/components/UI/Stars/Stars.js":
/*!***************************************************!*\
  !*** ./resources/js/components/UI/Stars/Stars.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_star_rating_svg_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../public/css/star-rating-svg.css */ "./public/css/star-rating-svg.css");
/* harmony import */ var _public_css_star_rating_svg_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_star_rating_svg_css__WEBPACK_IMPORTED_MODULE_1__);



var stars = function stars(_ref) {
  var mark = _ref.mark,
      readOnly = _ref.readOnly;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: readOnly ? "read-only-stars" : "ranking-stars",
    "data-rating": mark
  });
};

/* harmony default export */ __webpack_exports__["default"] = (stars);

/***/ }),

/***/ "./resources/js/components/UI/WithPoint/WithPoint.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/UI/WithPoint/WithPoint.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



var withPoint = function withPoint(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'position-relative ' + className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "circle",
    size: size,
    className: "position-absolute text-" + color,
    style: {
      top: 8,
      left: -2,
      transform: 'translate(-100%, -100%)'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (withPoint);

/***/ }),

/***/ "./resources/js/containers/Blog/Post/Post.js":
/*!***************************************************!*\
  !*** ./resources/js/containers/Blog/Post/Post.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/UI/PresentationalContainer/PresentationalContainer */ "./resources/js/components/UI/PresentationalContainer/PresentationalContainer.js");
/* harmony import */ var _components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/UI/Banner/Banner */ "./resources/js/components/UI/Banner/Banner.js");
/* harmony import */ var _components_UI_Stars_Stars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/UI/Stars/Stars */ "./resources/js/components/UI/Stars/Stars.js");
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Sidebar/Sidebar */ "./resources/js/containers/Blog/Sidebar/Sidebar.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Spinner/Spinner */ "./resources/js/components/UI/Spinner/Spinner.js");
/* harmony import */ var _public_images_ada9a09acea936d776a6f55c82778c43_L_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/images/ada9a09acea936d776a6f55c82778c43_L.jpg */ "./public/images/ada9a09acea936d776a6f55c82778c43_L.jpg");
/* harmony import */ var _public_images_ada9a09acea936d776a6f55c82778c43_L_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_images_ada9a09acea936d776a6f55c82778c43_L_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_images_ffee2447b152494b43d9816faaea83c8_L_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/images/ffee2447b152494b43d9816faaea83c8_L.jpg */ "./public/images/ffee2447b152494b43d9816faaea83c8_L.jpg");
/* harmony import */ var _public_images_ffee2447b152494b43d9816faaea83c8_L_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_images_ffee2447b152494b43d9816faaea83c8_L_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_images_2ff2ba0051687eef5ca0459cf942940c_L_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../public/images/2ff2ba0051687eef5ca0459cf942940c_L.jpg */ "./public/images/2ff2ba0051687eef5ca0459cf942940c_L.jpg");
/* harmony import */ var _public_images_2ff2ba0051687eef5ca0459cf942940c_L_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_images_2ff2ba0051687eef5ca0459cf942940c_L_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_images_94d43e327d9303539cb1e2aac7032668_L_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../public/images/94d43e327d9303539cb1e2aac7032668_L.jpg */ "./public/images/94d43e327d9303539cb1e2aac7032668_L.jpg");
/* harmony import */ var _public_images_94d43e327d9303539cb1e2aac7032668_L_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_images_94d43e327d9303539cb1e2aac7032668_L_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_images_e0a70f72bdae9885bfc32d7cd19a26a1_L_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../public/images/e0a70f72bdae9885bfc32d7cd19a26a1_L.jpg */ "./public/images/e0a70f72bdae9885bfc32d7cd19a26a1_L.jpg");
/* harmony import */ var _public_images_e0a70f72bdae9885bfc32d7cd19a26a1_L_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_images_e0a70f72bdae9885bfc32d7cd19a26a1_L_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_images_2fa67f482133f1c934235b73c2a03954_L_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../public/images/2fa67f482133f1c934235b73c2a03954_L.jpg */ "./public/images/2fa67f482133f1c934235b73c2a03954_L.jpg");
/* harmony import */ var _public_images_2fa67f482133f1c934235b73c2a03954_L_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_images_2fa67f482133f1c934235b73c2a03954_L_jpg__WEBPACK_IMPORTED_MODULE_13__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var postsBlockInfo = [{
  title: 'Drones successfully tested to inspect',
  author: 'Super User',
  src: _public_images_ada9a09acea936d776a6f55c82778c43_L_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'drones-successfully-tested-to-inspect'
}, {
  title: 'Drone journey to the center',
  author: 'Super User',
  src: _public_images_ffee2447b152494b43d9816faaea83c8_L_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'drone-journey-to-center'
}, {
  title: 'The best drones of 2019',
  author: 'Super User',
  src: _public_images_2ff2ba0051687eef5ca0459cf942940c_L_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'best-drones-2019'
}, {
  title: 'The drones of CES 2019',
  author: 'Super User',
  src: _public_images_94d43e327d9303539cb1e2aac7032668_L_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'drones-ces-2019'
}, {
  title: 'The 8 best drones to buy in 2019',
  author: 'Super User',
  src: _public_images_e0a70f72bdae9885bfc32d7cd19a26a1_L_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: '8-best-drones-buy-2019'
}, {
  title: 'A young woman in Photostream',
  author: 'Super User',
  src: _public_images_2fa67f482133f1c934235b73c2a03954_L_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'young-woman-photostream'
}];

var Post = /*#__PURE__*/function (_Component) {
  _inherits(Post, _Component);

  var _super = _createSuper(Post);

  function Post() {
    var _this;

    _classCallCheck(this, Post);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      postBlockInfo: null
    });

    return _this;
  }

  _createClass(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.auth.authPage) this.props.onAuthPageOff();
      if (this.props.auth.userPage) this.props.onUserPageOff();
      setTimeout(function () {
        var postBlockInfo = postsBlockInfo.find(function (_ref) {
          var link = _ref.link;
          return link === _this2.props.match.params.slug;
        });

        _this2.setState({
          postBlockInfo: postBlockInfo
        });
      }, 3000);
    }
  }, {
    key: "render",
    value: function render() {
      var postBlockInfo = this.state.postBlockInfo;
      var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
        items: [{
          to: '/blog',
          content: 'Blog'
        }],
        title: "Loading..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], null));

      if (postBlockInfo) {
        var _this$state$postBlock = this.state.postBlockInfo,
            author = _this$state$postBlock.author,
            title = _this$state$postBlock.title,
            src = _this$state$postBlock.src,
            children = _this$state$postBlock.children;
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
          items: [{
            to: '/blog',
            content: 'Blog'
          }],
          title: title
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "py-5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 9
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "text-decoration-none text-700 h3"
        }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Written by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "text-700"
        }, author)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "d-flex align-items-center"
        }, "Rate this item", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Stars_Stars__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "embed-responsive embed-responsive-16by9 my-4",
          style: {
            background: 'url("' + src + '") no-repeat center',
            backgroundSize: 'cover'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "mb-4"
        }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], null))))));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 12,
        className: "Blog p-0"
      }, content);
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAuthPageOff: function onAuthPageOff() {
      return dispatch(actions.authPageOff());
    },
    onUserPageOff: function onUserPageOff() {
      return dispatch(actions.userPageOff());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Post));

/***/ }),

/***/ "./resources/js/containers/Blog/Sidebar/Sidebar.js":
/*!*********************************************************!*\
  !*** ./resources/js/containers/Blog/Sidebar/Sidebar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _public_images_ada9a09acea936d776a6f55c82778c43_L_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../public/images/ada9a09acea936d776a6f55c82778c43_L.jpg */ "./public/images/ada9a09acea936d776a6f55c82778c43_L.jpg");
/* harmony import */ var _public_images_ada9a09acea936d776a6f55c82778c43_L_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_ada9a09acea936d776a6f55c82778c43_L_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_images_ffee2447b152494b43d9816faaea83c8_L_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../public/images/ffee2447b152494b43d9816faaea83c8_L.jpg */ "./public/images/ffee2447b152494b43d9816faaea83c8_L.jpg");
/* harmony import */ var _public_images_ffee2447b152494b43d9816faaea83c8_L_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_images_ffee2447b152494b43d9816faaea83c8_L_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_2ff2ba0051687eef5ca0459cf942940c_L_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../public/images/2ff2ba0051687eef5ca0459cf942940c_L.jpg */ "./public/images/2ff2ba0051687eef5ca0459cf942940c_L.jpg");
/* harmony import */ var _public_images_2ff2ba0051687eef5ca0459cf942940c_L_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_images_2ff2ba0051687eef5ca0459cf942940c_L_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_images_94d43e327d9303539cb1e2aac7032668_L_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../public/images/94d43e327d9303539cb1e2aac7032668_L.jpg */ "./public/images/94d43e327d9303539cb1e2aac7032668_L.jpg");
/* harmony import */ var _public_images_94d43e327d9303539cb1e2aac7032668_L_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_images_94d43e327d9303539cb1e2aac7032668_L_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_images_e0a70f72bdae9885bfc32d7cd19a26a1_L_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/e0a70f72bdae9885bfc32d7cd19a26a1_L.jpg */ "./public/images/e0a70f72bdae9885bfc32d7cd19a26a1_L.jpg");
/* harmony import */ var _public_images_e0a70f72bdae9885bfc32d7cd19a26a1_L_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_images_e0a70f72bdae9885bfc32d7cd19a26a1_L_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_images_2fa67f482133f1c934235b73c2a03954_L_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/images/2fa67f482133f1c934235b73c2a03954_L.jpg */ "./public/images/2fa67f482133f1c934235b73c2a03954_L.jpg");
/* harmony import */ var _public_images_2fa67f482133f1c934235b73c2a03954_L_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_images_2fa67f482133f1c934235b73c2a03954_L_jpg__WEBPACK_IMPORTED_MODULE_8__);









var postsBlockInfo = [{
  title: 'Drones successfully tested to inspect',
  author: 'Super User',
  src: _public_images_ada9a09acea936d776a6f55c82778c43_L_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'drones-successfully-tested-to-inspect'
}, {
  title: 'Drone journey to the center',
  author: 'Super User',
  src: _public_images_ffee2447b152494b43d9816faaea83c8_L_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'drone-journey-to-center'
}, {
  title: 'The best drones of 2019',
  author: 'Super User',
  src: _public_images_2ff2ba0051687eef5ca0459cf942940c_L_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'best-drones-2019'
}, {
  title: 'The drones of CES 2019',
  author: 'Super User',
  src: _public_images_94d43e327d9303539cb1e2aac7032668_L_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'drones-ces-2019'
}, {
  title: 'The 8 best drones to buy in 2019',
  author: 'Super User',
  src: _public_images_e0a70f72bdae9885bfc32d7cd19a26a1_L_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: '8-best-drones-buy-2019'
}, {
  title: 'A young woman in Photostream',
  author: 'Super User',
  src: _public_images_2fa67f482133f1c934235b73c2a03954_L_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
  children: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  link: 'young-woman-photostream'
}];

var sidebar = function sidebar() {
  var popularPosts = postsBlockInfo.filter(function (p, index) {
    return index < 3;
  }).map(function (_ref) {
    var link = _ref.link,
        src = _ref.src,
        title = _ref.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-3",
      key: src
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: '/blog/' + link,
      className: "text-dark"
    }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "embed-responsive embed-responsive-16by9",
      style: {
        background: 'url("' + src + '") no-repeat center',
        backgroundSize: 'cover'
      }
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-500"
  }, "SEARCH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "search",
    placeholder: "Search ..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-500"
  }, "POPULAR POSTS"), popularPosts));
};

/* harmony default export */ __webpack_exports__["default"] = (sidebar);

/***/ })

}]);