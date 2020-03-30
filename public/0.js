(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/UI/TeamMemberCard/TeamMemberCard.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/UI/TeamMemberCard/TeamMemberCard.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".TeamMemberCard img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center;\r\n       object-position: center;\r\n}\r\n\r\n.TeamMemberCard .img-wrapper {\r\n    width: 100px;\r\n    height: 100px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./public/images/ABOUT1.jpg":
/*!**********************************!*\
  !*** ./public/images/ABOUT1.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/ABOUT1.jpg?bb5cca9bacc507e709b141415dbe123e";

/***/ }),

/***/ "./public/images/Tab01.jpg":
/*!*********************************!*\
  !*** ./public/images/Tab01.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Tab01.jpg?a98a6f56cc8de10f5fd39de52740a91d";

/***/ }),

/***/ "./public/images/istockphoto-531547724-612x612@2x.png":
/*!************************************************************!*\
  !*** ./public/images/istockphoto-531547724-612x612@2x.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/istockphoto-531547724-612x612@2x.png?9b250131f3a2e1687dbb54140cc31f73";

/***/ }),

/***/ "./public/images/men-images-png-1@2x.png":
/*!***********************************************!*\
  !*** ./public/images/men-images-png-1@2x.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/men-images-png-1@2x.png?ae9229a61c93fe02fc2e3750306cfcf3";

/***/ }),

/***/ "./public/images/product_111_11@2x.png":
/*!*********************************************!*\
  !*** ./public/images/product_111_11@2x.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/product_111_11@2x.png?d659b4347ff4faf0c6ac10a2cac8114f";

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

/***/ "./resources/js/components/UI/TeamMemberCard/TeamMemberCard.css":
/*!**********************************************************************!*\
  !*** ./resources/js/components/UI/TeamMemberCard/TeamMemberCard.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./TeamMemberCard.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/UI/TeamMemberCard/TeamMemberCard.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/UI/TeamMemberCard/TeamMemberCard.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/UI/TeamMemberCard/TeamMemberCard.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _TeamMemberCard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamMemberCard.css */ "./resources/js/components/UI/TeamMemberCard/TeamMemberCard.css");
/* harmony import */ var _TeamMemberCard_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TeamMemberCard_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");





var teamMemberCard = function teamMemberCard(_ref) {
  var name = _ref.name,
      title = _ref.title,
      children = _ref.children,
      src = _ref.src,
      lg = _ref.lg;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    lg: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "border-0 rounded-0 bg-transparent overflow-hidden position-relative text-left shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-absolute w-100 h-100",
    style: {
      background: "url('" + src + "') no-repeat center",
      backgroundSize: 'cover'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-img-top embed-responsive embed-responsive-1by1 bg-black",
    style: {
      opacity: .3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    className: "bg-black-80 text-white position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white rounded-right position-absolute",
    style: {
      width: 8,
      height: 36,
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-weight-normal text-montserrat-alt h4 position-relative d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pr-2"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-absolute border-bottom border-white-20",
    style: {
      top: 13,
      left: -50,
      width: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "circle",
    className: "text-xx-small position-absolute",
    style: {
      right: 0,
      top: 0,
      transform: 'translateY(-50%)'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative border-bottom border-white-20 flex-fill",
    style: {
      marginRight: -20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "play",
    className: "text-xx-small text-yellow position-absolute",
    style: {
      left: 0,
      top: 0,
      transform: 'translateY(-50%)'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-text text-light text-montserrat-alt pb-1 mb-3"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "lg",
    className: "mr-2",
    icon: ["fab", "facebook-square"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "lg",
    className: "mr-2",
    icon: ["fab", "twitter-square"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "lg",
    className: "mr-2",
    icon: ["fab", "instagram"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "lg",
    className: "mr-2",
    icon: ["fab", "whatsapp"]
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (teamMemberCard);

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

/***/ "./resources/js/containers/AboutUs/AboutUs.js":
/*!****************************************************!*\
  !*** ./resources/js/containers/AboutUs/AboutUs.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/PresentationalContainer/PresentationalContainer */ "./resources/js/components/UI/PresentationalContainer/PresentationalContainer.js");
/* harmony import */ var _components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/TeamMemberCard/TeamMemberCard */ "./resources/js/components/UI/TeamMemberCard/TeamMemberCard.js");
/* harmony import */ var _components_UI_WithPoint_WithPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UI/WithPoint/WithPoint */ "./resources/js/components/UI/WithPoint/WithPoint.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Banner/Banner */ "./resources/js/components/UI/Banner/Banner.js");
/* harmony import */ var _components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UI/Titles/Title/Title */ "./resources/js/components/UI/Titles/Title/Title.js");
/* harmony import */ var _ClientBlock_ClientBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ClientBlock/ClientBlock */ "./resources/js/containers/AboutUs/ClientBlock/ClientBlock.js");
/* harmony import */ var _InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InfoBlock/InfoBlock */ "./resources/js/containers/AboutUs/InfoBlock/InfoBlock.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions */ "./resources/js/store/actions/index.js");
/* harmony import */ var _public_images_Tab01_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../public/images/Tab01.jpg */ "./public/images/Tab01.jpg");
/* harmony import */ var _public_images_Tab01_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_images_Tab01_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_images_men_images_png_1_2x_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../public/images/men-images-png-1@2x.png */ "./public/images/men-images-png-1@2x.png");
/* harmony import */ var _public_images_men_images_png_1_2x_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_images_men_images_png_1_2x_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_images_product_111_11_2x_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../public/images/product_111_11@2x.png */ "./public/images/product_111_11@2x.png");
/* harmony import */ var _public_images_product_111_11_2x_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_images_product_111_11_2x_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_images_istockphoto_531547724_612x612_2x_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../public/images/istockphoto-531547724-612x612@2x.png */ "./public/images/istockphoto-531547724-612x612@2x.png");
/* harmony import */ var _public_images_istockphoto_531547724_612x612_2x_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_images_istockphoto_531547724_612x612_2x_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_images_ABOUT1_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../public/images/ABOUT1.jpg */ "./public/images/ABOUT1.jpg");
/* harmony import */ var _public_images_ABOUT1_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_images_ABOUT1_jpg__WEBPACK_IMPORTED_MODULE_16__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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












 // Who We Are Image

 // Our Team Images



 // Info Block Background



var AboutUs = /*#__PURE__*/function (_Component) {
  _inherits(AboutUs, _Component);

  var _super = _createSuper(AboutUs);

  function AboutUs() {
    _classCallCheck(this, AboutUs);

    return _super.apply(this, arguments);
  }

  _createClass(AboutUs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.auth.authPage) this.props.onAuthPageOff();
      if (this.props.auth.userPage) this.props.onUserPageOff();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 12,
        className: "AboutUs p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "About Us"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        innerClassName: "py-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 5
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _public_images_Tab01_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
        className: "img-fluid"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 7
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Who We Are?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mb-4"
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies pretium nisi quis interdum. Duis elit purus, suscipit et quam sit amet, fringilla semper nisi. Ut sed pellentesque lectus. Nullam quis urna maximus, cursus arcu sit amet, sagittis elit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean imperdiet.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "position-relative",
        style: {
          background: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + _public_images_ABOUT1_jpg__WEBPACK_IMPORTED_MODULE_16___default.a + '") no-repeat center',
          backgroundSize: 'cover'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "position-absolute w-100 h-100 bg-dark-gradient",
        style: {
          opacity: .7,
          top: 0,
          zIndex: 1
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "position-relative",
        style: {
          zIndex: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        className: "py-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
        icon: "hourglass",
        number: 164,
        title: "Hours per week"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
        icon: "code",
        number: 20000,
        title: "Lines of code"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
        icon: "cogs",
        number: 1000,
        title: "Projects"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
        icon: "file-image",
        number: 2000,
        title: "Dribble"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center py-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Our team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mb-4 text-300"
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "John Alverosa",
        title: "CEO",
        src: _public_images_men_images_png_1_2x_png__WEBPACK_IMPORTED_MODULE_13___default.a
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "Palo Altonio",
        title: "SEO Marketing",
        src: _public_images_product_111_11_2x_png__WEBPACK_IMPORTED_MODULE_14___default.a
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "Doe Borison",
        title: "Technician",
        src: _public_images_istockphoto_531547724_612x612_2x_png__WEBPACK_IMPORTED_MODULE_15___default.a
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "John Alverosa",
        title: "Counselor",
        src: _public_images_men_images_png_1_2x_png__WEBPACK_IMPORTED_MODULE_13___default.a
      })))));
    }
  }]);

  return AboutUs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAuthPageOff: function onAuthPageOff() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_11__["authPageOff"]());
    },
    onUserPageOff: function onUserPageOff() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_11__["userPageOff"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AboutUs));

/***/ }),

/***/ "./resources/js/containers/AboutUs/ClientBlock/ClientBlock.js":
/*!********************************************************************!*\
  !*** ./resources/js/containers/AboutUs/ClientBlock/ClientBlock.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var clientBlock = function clientBlock(_ref) {
  var src = _ref.src,
      height = _ref.height;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    style: {
      height: height
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (clientBlock);

/***/ }),

/***/ "./resources/js/containers/AboutUs/InfoBlock/InfoBlock.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/AboutUs/InfoBlock/InfoBlock.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var infoBlock = function infoBlock(_ref) {
  var icon = _ref.icon,
      number = _ref.number,
      title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 3,
    xs: 6,
    className: "text-center text-white h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    size: "2x",
    icon: icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4 text-montserrat-alt text-700 counter"
  }, number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-500"
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (infoBlock);

/***/ })

}]);