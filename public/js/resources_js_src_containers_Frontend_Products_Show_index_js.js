"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Frontend_Products_Show_index_js"],{

/***/ "./resources/js/src/components/Error/Error.js":
/*!****************************************************!*\
  !*** ./resources/js/src/components/Error/Error.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var error = function error(_ref) {
  var err = _ref.err;
  return err ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "alert alert-danger text-10 text-md-12 text-xxl-14",
    children: err.message ? err.message : err
  }) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (error);

/***/ }),

/***/ "./resources/js/src/components/Feedback/Feedback.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/Feedback/Feedback.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var message = _ref.message,
      time = _ref.time;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  if (time) setTimeout(function () {
    setVisible(false);
  }, time);
  return message ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "text-10 text-md-12 text-xxl-14",
    color: message.type,
    isOpen: visible,
    children: message.content
  }) : null;
});

/***/ }),

/***/ "./resources/js/src/components/UI/Banner/Banner.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/UI/Banner/Banner.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PresentationalContainer/PresentationalContainer */ "./resources/js/src/components/UI/PresentationalContainer/PresentationalContainer.js");
/* harmony import */ var _Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Breadcrumb/Breadcrumb */ "./resources/js/src/components/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _assets_images_Drone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/Drone.png */ "./resources/js/src/assets/images/Drone.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var banner = function banner(_ref) {
  var title = _ref.title,
      items = _ref.items;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bg: "",
    className: "position-relative",
    style: {
      background: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + _assets_images_Drone_png__WEBPACK_IMPORTED_MODULE_3__["default"] + '") no-repeat center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    },
    innerStyle: {
      marginTop: 50
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "position-absolute w-100 h-100 bg-dark-gradient",
      style: {
        opacity: .9,
        top: 0,
        left: 0,
        zIndex: 1
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "position-relative",
      style: {
        zIndex: 2
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
        items: items,
        main: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "text-center text-white py-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-700 pt-5",
          children: title
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (banner);

/***/ }),

/***/ "./resources/js/src/components/UI/Breadcrumb/Breadcrumb.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/components/UI/Breadcrumb/Breadcrumb.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/BreadcrumbItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Breadcrumb.js");
/* harmony import */ var _WithPoint_WithPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WithPoint/WithPoint */ "./resources/js/src/components/UI/WithPoint/WithPoint.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var breadcrumb = function breadcrumb(_ref) {
  var items = _ref.items,
      main = _ref.main;
  var itemsComponent = null;
  if (items) itemsComponent = items.map(function (item, i) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
        className: "text-white text-700",
        to: item.to,
        children: item.content
      })
    }, i);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "container-fluid bg-transparent position-absolute",
    style: {
      top: 0,
      opacity: .5
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "px-5 pt-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        listClassName: "bg-transparent rounded-0 m-0 p-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            className: "text-700 text-white",
            to: "/",
            children: "Home"
          })
        }), itemsComponent, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "text-white text-300 text-montserrat-alt",
          active: true,
          children: main
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (breadcrumb);

/***/ }),

/***/ "./resources/js/src/components/UI/PresentationalContainer/PresentationalContainer.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/components/UI/PresentationalContainer/PresentationalContainer.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var presentationalContainer = function presentationalContainer(_ref) {
  var _ref$bg = _ref.bg,
      bg = _ref$bg === void 0 ? 'white' : _ref$bg,
      children = _ref.children,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'dark' : _ref$text,
      _ref$innerClassName = _ref.innerClassName,
      innerClassName = _ref$innerClassName === void 0 ? '' : _ref$innerClassName,
      user = _ref.user,
      style = _ref.style,
      innerStyle = _ref.innerStyle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 12,
    className: (!user ? "py-5 " : "py-0 ") + ("bg-" + bg + " ") + ("text-" + text),
    style: style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: (user ? 'container-fluid' : 'container') + " " + innerClassName,
      style: innerStyle,
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (presentationalContainer);

/***/ }),

/***/ "./resources/js/src/components/UI/WithPoint/WithPoint.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/UI/WithPoint/WithPoint.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var withPoint = function withPoint(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: 'position-relative ' + className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      icon: "circle",
      size: size,
      className: "position-absolute text-" + color,
      style: {
        top: 8,
        left: -2,
        transform: 'translate(-100%, -100%)'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPoint);

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Products/Show/index.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Products/Show/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Container.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/UI/Spinner */ "./resources/js/src/components/UI/Spinner/index.js");
/* harmony import */ var _components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/UI/Banner/Banner */ "./resources/js/src/components/UI/Banner/Banner.js");
/* harmony import */ var _components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/UI/PresentationalContainer/PresentationalContainer */ "./resources/js/src/components/UI/PresentationalContainer/PresentationalContainer.js");
/* harmony import */ var _store_actions_frontend_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/actions/frontend/products */ "./resources/js/src/store/actions/frontend/products.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }














var Product = /*#__PURE__*/function (_Component) {
  _inherits(Product, _Component);

  var _super = _createSuper(Product);

  function Product() {
    _classCallCheck(this, Product);

    return _super.apply(this, arguments);
  }

  _createClass(Product, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.get(this.props.match.params.slug);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$frontend$ = this.props.frontend.products,
          loading = _this$props$frontend$.loading,
          message = _this$props$frontend$.message,
          error = _this$props$frontend$.error,
          product = _this$props$frontend$.product;
      var content;
      var lang = localStorage.getItem('lang');

      var feedback = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_2__["default"], {
        message: message
      });

      var errors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Error_Error__WEBPACK_IMPORTED_MODULE_3__["default"], {
          err: error
        })
      });

      if (loading) content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
          items: [{
            to: '/products',
            content: 'Products'
          }],
          title: "Loading..."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
      });else if (product) {
        var name = product.name,
            photo = product.photo,
            price = product.price,
            description = product.description;
        content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
            items: [{
              to: '/products',
              content: 'Products'
            }],
            title: name[lang]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "py-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    md: 6,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "embed-responsive embed-responsive-16by9 w-100",
                      style: {
                        background: 'url("' + photo + '") no-repeat center',
                        backgroundSize: 'contain'
                      }
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    md: 6,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
                      className: "bg-dark-gradient bg-text texet-700",
                      children: name[lang]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h4", {
                      children: [price || 0, " FCFA"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
                      color: "dark",
                      children: "Add to cart"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    xs: 12,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h5", {
                      className: "mb-4",
                      children: "Description"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "text-300",
                      dangerouslySetInnerHTML: {
                        __html: description[lang]
                      }
                    })]
                  })]
                })
              })
            })
          })]
        });
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        xs: 12,
        className: "Products p-0",
        children: [feedback, errors, content]
      });
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get(slug) {
      return dispatch((0,_store_actions_frontend_products__WEBPACK_IMPORTED_MODULE_7__.getProduct)(slug));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Product));

/***/ }),

/***/ "./resources/js/src/store/actions/frontend/products.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/store/actions/frontend/products.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productsReset": () => (/* binding */ productsReset),
/* harmony export */   "getProducts": () => (/* binding */ getProducts),
/* harmony export */   "getProduct": () => (/* binding */ getProduct)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/actionTypes */ "./resources/js/src/store/actions/actionTypes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var productsReset = function productsReset() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_RESET
  };
};

var productsStart = function productsStart() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_START
  };
};

var productsSuccess = function productsSuccess(data) {
  return _objectSpread({
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_SUCCESS
  }, data);
};

var productsFail = function productsFail(error) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_FAIL,
    error: error
  };
};

var getProducts = function getProducts() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(productsStart());
              _context.prev = 1;
              _context.next = 4;
              return fetch("".concat(PREFIX, "products"));

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              resData = _context.sent;
              dispatch(productsSuccess(resData));
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              dispatch(productsFail(_context.t0));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getProduct = function getProduct(slug) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      var res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(productsStart());
              _context2.prev = 1;
              _context2.next = 4;
              return fetch("".concat(PREFIX, "products/").concat(slug));

            case 4:
              res = _context2.sent;
              _context2.next = 7;
              return res.json();

            case 7:
              resData = _context2.sent;
              dispatch(productsSuccess(resData));
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              dispatch(productsFail(_context2.t0));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 11]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/js/src/assets/images/Drone.png":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/Drone.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Drone.png?23d4aca42e533c19f7cfc0eaf0d59b77");

/***/ }),

/***/ "./node_modules/reactstrap/es/Alert.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Alert.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fade */ "./node_modules/reactstrap/es/Fade.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  closeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  closeAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  fade: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  tag: _utils__WEBPACK_IMPORTED_MODULE_6__.tagPropType,
  transition: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)])
};
var defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps), {}, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()('close', closeClassName), cssModule);

  var alertTransition = _objectSpread(_objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    in: isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, children);
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ "./node_modules/reactstrap/es/Breadcrumb.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/Breadcrumb.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  listTag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  listClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
var defaultProps = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className), cssModule);
  var listClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()('breadcrumb', listClassName), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    "aria-label": label
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ListTag, {
    className: listClasses
  }, children));
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);

/***/ }),

/***/ "./node_modules/reactstrap/es/BreadcrumbItem.js":
/*!******************************************************!*\
  !*** ./node_modules/reactstrap/es/BreadcrumbItem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  active: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cssModule", "active", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    "aria-current": active ? 'page' : undefined
  }));
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadcrumbItem);

/***/ })

}]);