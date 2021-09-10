"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Backend_Admin_Dashboard_Dashboard_js"],{

/***/ "./resources/js/src/components/Backend/Dashboard/Card/Card.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/Backend/Dashboard/Card/Card.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      link = _ref.link,
      color = _ref.color,
      details = _ref.details;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "col-xxl-3 col-6 pb-3 pb-xxl-0",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: link,
      className: "bg-".concat(color, "-10 rounded-8 text-decoration-none text-").concat(color, " px-4 py-4 d-flex align-items-center"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mr-4 d-none d-sm-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          icon: icon,
          className: "text-33 text-".concat(color, "-50")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "w-100",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "d-flex justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "text-montserrat text-700 text-35",
            children: children
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "d-sm-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
              icon: icon,
              className: "text-33 text-".concat(color, "-50")
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "text-12 text-300 text-truncate",
          children: details
        })]
      })]
    })
  });
});

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/BreadcrumbItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Breadcrumb.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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








var Breadcrumb = /*#__PURE__*/function (_Component) {
  _inherits(Breadcrumb, _Component);

  var _super = _createSuper(Breadcrumb);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _super.apply(this, arguments);
  }

  _createClass(Breadcrumb, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          main = _this$props.main,
          icon = _this$props.icon,
          home = _this$props.content.cms.pages.general.home,
          _this$props$dark = _this$props.dark,
          dark = _this$props$dark === void 0 ? false : _this$props$dark;
      var itemsComponent = null;
      if (items) itemsComponent = items.map(function (item, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            className: "text-".concat(dark ? "light" : "secondary"),
            to: item.to,
            children: item.content
          })
        }, i);
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "d-none d-sm-flex align-items-center",
        color: dark ? "light" : "secondary",
        listClassName: "bg-transparent rounded-0 justify-content-end text-large",
        style: {
          top: '50%',
          right: 0,
          transform: 'translateY(-10px)',
          position: 'absolute',
          zIndex: 1000
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            className: "text-".concat(dark ? "light" : "secondary"),
            to: "/",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-" + icon + " mr-1"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              children: home
            })]
          })
        }), itemsComponent, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "text-".concat(dark ? "light" : "secondary", " text-decoration-none"),
          active: true,
          children: main
        })]
      });
    }
  }]);

  return Breadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Breadcrumb));

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/Table/Table.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Table/Table.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Input.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var fields = _ref.fields,
      array = _ref.array,
      limit = _ref.limit,
      bordered = _ref.bordered,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      title = _ref.title,
      icon = _ref.icon,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark,
      borderless = _ref.borderless,
      _ref$innerClassName = _ref.innerClassName,
      innerClassName = _ref$innerClassName === void 0 ? '' : _ref$innerClassName,
      _ref$outerClassName = _ref.outerClassName,
      outerClassName = _ref$outerClassName === void 0 ? '' : _ref$outerClassName,
      p0 = _ref.p0,
      select = _ref.select,
      children = _ref.children,
      selectHandler = _ref.selectHandler,
      style = _ref.style,
      searchable = _ref.searchable,
      draggable = _ref.draggable,
      closable = _ref.closable;
  var titles = fields.map(function (_ref2) {
    var name = _ref2.name;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
      className: "align-middle text-nowrap",
      children: name
    }, name);
  });
  titles.unshift( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
    className: "text-center align-middle",
    children: "SL"
  }, "#"));
  if (select) titles.unshift( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
    className: "align-middle text-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      type: "checkbox",
      onClick: selectHandler,
      className: "select_all"
    })
  }, "select_all"));
  var content = array.map(function (item, index) {
    if (limit && index >= limit) return null;
    var inside = [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
      className: "text-center align-middle",
      children: index + 1
    }, 'primary' + index)];
    if (select) inside.unshift( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
      className: "text-center align-middle",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "checkbox",
        value: item._id
      })
    }, 'white' + index));
    fields.forEach(function (_ref3) {
      var key = _ref3.key,
          minWidth = _ref3.minWidth,
          maxWidth = _ref3.maxWidth;
      inside.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
        className: "align-middle text-nowrap text-truncate",
        style: {
          minWidth: minWidth,
          maxWidth: maxWidth
        },
        children: item[key]
      }, key));
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr", {
      className: "align-middle",
      children: inside
    }, index + 1);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    className: "pb-4 ".concat(outerClassName),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "d-flex flex-column h-100 shadow-sm ".concat(dark ? "text-light bg-darklight " : "text-secondary bg-soft", " ").concat(className),
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "p-3 border-bottom border-".concat(dark ? "border" : "border-50", " text-700 text-brokenblue d-flex position-relative"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          className: "d-inline-flex text-".concat(dark ? "yellow" : "reset", " align-items-center"),
          children: [icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            fixedWidth: true,
            className: "mr-2 text-" + (dark ? "yellow" : "reset"),
            icon: icon,
            size: "lg"
          }) : null, title]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "ml-auto d-none d-lg-flex justify-content-end align-items-center text-" + (dark ? "light" : "secondary") + " position-absolute",
          style: {
            top: '50%',
            right: 16,
            transform: 'translateY(-50%)'
          },
          children: [searchable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            type: "search",
            name: "search",
            className: "bg-".concat(dark ? "darkblue border-0" : "", " rounded-2 mr-3"),
            placeholder: "Search here..."
          }) : null, draggable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faArrowsAlt,
            size: "lg",
            className: "mr-3"
          }) : null, closable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimes,
            size: "2x"
          }) : null]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex-fill d-flex flex-column " + (!p0 ? "p-3" : "p-0"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "table-responsive flex-fill",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            dark: dark,
            bordered: bordered,
            hover: true,
            borderless: borderless,
            className: "bg-".concat(dark ? "darkblue" : "", " ").concat(innerClassName),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
              className: dark ? "text-light" : "bg-white text-secondary",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr", {
                children: titles
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
              className: dark ? "bg-darklight-50 text-light" : "bg-white-50 text-secondary",
              children: content
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "pt-3",
          children: children
        })]
      })]
    })
  });
});

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/TitleWrapper/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/TitleWrapper/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _TitleWrapper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleWrapper.css */ "./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "UI TitleWrapper py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 bg-border-15 position-relative",
    children: children
  });
});

/***/ }),

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

/***/ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      className = _ref.className,
      user = _ref.user;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
    className: (user ? "h4 " : "") + "mb-2 " + className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
      className: "mr-2 fas fa-fw fa-" + icon
    }), children]
  });
});

/***/ }),

/***/ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-".concat(dark ? "light" : "secondary", " text-14 text-md-16 text-xxl-18 text-300 ").concat(className),
      children: children
    })
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/Admin/Dashboard/Dashboard.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Admin/Dashboard/Dashboard.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Backend/UI/Table/Table */ "./resources/js/src/components/Backend/UI/Table/Table.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Backend_Dashboard_Card_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Backend/Dashboard/Card/Card */ "./resources/js/src/components/Backend/Dashboard/Card/Card.js");
/* harmony import */ var _components_Backend_UI_TitleWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Backend/UI/TitleWrapper */ "./resources/js/src/components/Backend/UI/TitleWrapper/index.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _store_actions_backend_dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../store/actions/backend/dashboard */ "./resources/js/src/store/actions/backend/dashboard.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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






 // Components















var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _super.apply(this, arguments);
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.get();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          _this$props$content$c = _this$props.content.cms.pages.backend.pages.dashboard.admin,
          title = _this$props$content$c.title,
          subtitle = _this$props$content$c.subtitle,
          _this$props$content$c2 = _this$props$content$c.blocks,
          total_cycles = _this$props$content$c2.total_cycles,
          total_years = _this$props$content$c2.total_years,
          total_subjects = _this$props$content$c2.total_subjects,
          total_students = _this$props$content$c2.total_students,
          _this$props$backend$d = _this$props.backend.dashboard,
          loading = _this$props$backend$d.loading,
          error = _this$props$backend$d.error,
          blocksData = _this$props$backend$d.blocksData,
          totalCycles = _this$props$backend$d.totalCycles,
          totalYears = _this$props$backend$d.totalYears,
          totalSubjects = _this$props$backend$d.totalSubjects,
          totalStudents = _this$props$backend$d.totalStudents;
      var content = null;
      var errors = null;
      if (loading) content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_10__["default"], {})
      });else {
        errors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Error_Error__WEBPACK_IMPORTED_MODULE_9__["default"], {
            err: error
          })
        });

        if (blocksData) {
          var data = [{
            title: total_cycles.title,
            children: blocksData.totalCycles,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faCircleNotch,
            link: '/admin/cycles/',
            color: 'yellow',
            details: total_cycles.description,
            titleColor: 'white'
          }, {
            title: total_years.title,
            children: blocksData.totalYears,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faCalendar,
            link: '/admin/years/',
            color: 'brown',
            details: total_years.description,
            titleColor: 'white'
          }, {
            title: total_subjects.title,
            children: blocksData.totalSubjects,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faBook,
            link: '/admin/subjects/',
            color: 'lightyellow',
            details: total_subjects.description,
            titleColor: 'white'
          }, {
            title: total_students.title,
            children: blocksData.totalStudents,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faUserGraduate,
            link: '/admin/students/',
            color: 'darkhead',
            details: total_students.description,
            titleColor: 'white'
          }];
          var cards = data.map(function (_ref, index) {
            var title = _ref.title,
                titleColor = _ref.titleColor,
                icon = _ref.icon,
                link = _ref.link,
                color = _ref.color,
                children = _ref.children,
                details = _ref.details,
                circleBorder = _ref.circleBorder,
                circleColor = _ref.circleColor,
                light = _ref.light;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Backend_Dashboard_Card_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
              color: color,
              title: title,
              titleColor: titleColor,
              details: details,
              circleBorder: circleBorder,
              circleColor: circleColor,
              icon: icon,
              link: link,
              light: light,
              children: children
            }, index);
          });
          var cyclesData = totalCycles.map(function (cycle) {
            return (0,_shared_utility__WEBPACK_IMPORTED_MODULE_12__.updateObject)(cycle, {
              action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  className: "text-blue mr-2",
                  to: "/admin/cycles/".concat(cycle.id),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faEye,
                    fixedWidth: true
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  className: "text-green mr-2",
                  to: "/admin/cycles/".concat(cycle.id, "/edit"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faEdit,
                    fixedWidth: true
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("a", {
                  className: "text-red",
                  href: "#",
                  onClick: function onClick() {
                    return _this.props.deletecycles(cycle.id);
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTrash,
                    fixedWidth: true
                  })
                })]
              })
            });
          });
          var yearsData = totalYears.map(function (year) {
            return (0,_shared_utility__WEBPACK_IMPORTED_MODULE_12__.updateObject)(year, {
              action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  className: "text-blue mr-2",
                  to: "/admin/years/".concat(year.id),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faEye,
                    fixedWidth: true
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  className: "text-green mr-2",
                  to: "/admin/years/".concat(year.id, "/edit"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faEdit,
                    fixedWidth: true
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("a", {
                  className: "text-red",
                  href: "#",
                  onClick: function onClick() {
                    return _this.props.deleteyears(year.id);
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTrash,
                    fixedWidth: true
                  })
                })]
              })
            });
          });
          var subjectsData = totalSubjects.map(function (subject) {
            return (0,_shared_utility__WEBPACK_IMPORTED_MODULE_12__.updateObject)(subject, {
              action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  className: "text-blue mr-2",
                  to: "/admin/subjects/".concat(subject.id),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faEye,
                    fixedWidth: true
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  className: "text-green mr-2",
                  to: "/admin/subjects/".concat(subject.id, "/edit"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faEdit,
                    fixedWidth: true
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("a", {
                  className: "text-red",
                  href: "#",
                  onClick: function onClick() {
                    return _this.props.deletesubjects(subject.id);
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTrash,
                    fixedWidth: true
                  })
                })]
              })
            });
          });
          var studentsData = totalStudents.map(function (student) {
            return (0,_shared_utility__WEBPACK_IMPORTED_MODULE_12__.updateObject)(student, {
              action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  className: "text-blue mr-2",
                  to: "/admin/students/".concat(student.id),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faEye,
                    fixedWidth: true
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  className: "text-green mr-2",
                  to: "/admin/students/".concat(student.id, "/edit"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faEdit,
                    fixedWidth: true
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("a", {
                  className: "text-red",
                  href: "#",
                  onClick: function onClick() {
                    return _this.props.deletestudents(student.id);
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTrash,
                    fixedWidth: true
                  })
                })]
              })
            });
          });
          content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "pt-4 px-4 pb-3 bg-yellow-10",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: cards
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              className: "mt-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
                array: cyclesData,
                searchable: true,
                draggable: true,
                closable: true,
                title: "Total Cycles",
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTasks,
                bordered: true,
                limit: 5,
                lg: 6,
                fields: [{
                  name: 'Name',
                  key: 'name'
                }, {
                  name: 'Slug',
                  key: 'slug'
                }, {
                  name: 'Action',
                  key: 'action'
                }],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  to: "/admin/cycles",
                  className: "text-reset",
                  children: 'View full cycle list | >'
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
                array: yearsData,
                searchable: true,
                draggable: true,
                closable: true,
                title: "Total Years",
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTasks,
                bordered: true,
                limit: 5,
                lg: 6,
                fields: [{
                  name: 'Name',
                  key: 'name'
                }, {
                  name: 'Slug',
                  key: 'slug'
                }, {
                  name: 'Action',
                  key: 'action'
                }],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  to: "/admin/years",
                  className: "text-reset",
                  children: 'View full year list | >'
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
                array: subjectsData,
                searchable: true,
                draggable: true,
                closable: true,
                title: "Total Subjects",
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTasks,
                bordered: true,
                limit: 5,
                lg: 6,
                fields: [{
                  name: 'Name',
                  key: 'name'
                }, {
                  name: 'Slug',
                  key: 'slug'
                }, {
                  name: 'Action',
                  key: 'action'
                }],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  to: "/admin/subjects",
                  className: "text-reset",
                  children: 'View full subject list | >'
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
                array: studentsData,
                searchable: true,
                draggable: true,
                closable: true,
                title: "Total Students",
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTasks,
                bordered: true,
                limit: 5,
                lg: 6,
                fields: [{
                  name: 'First name',
                  key: 'first_name'
                }, {
                  name: 'Last name',
                  key: 'last_name'
                }, {
                  name: 'Birth date',
                  key: 'birth_date'
                }, {
                  name: 'Birth place',
                  key: 'birth_place'
                }, {
                  name: 'Matricule',
                  key: 'matricule'
                }, {
                  name: 'Action',
                  key: 'action'
                }],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
                  to: "/admin/students",
                  className: "text-reset",
                  children: 'View full student list | >'
                })
              })]
            })]
          });
        }
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_Backend_UI_TitleWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"], {
            main: subtitle,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTachometerAlt
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
            user: true,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faTachometerAlt,
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
            user: true,
            children: subtitle
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "p-4 pb-0",
          children: [errors, content]
        })]
      });
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get() {
      return dispatch((0,_store_actions_backend_dashboard__WEBPACK_IMPORTED_MODULE_11__.getDashboard)());
    },
    reset: function reset() {
      return dispatch((0,_store_actions_backend_dashboard__WEBPACK_IMPORTED_MODULE_11__.resetDashboard)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Dashboard)));

/***/ }),

/***/ "./resources/js/src/store/actions/backend/dashboard.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/store/actions/backend/dashboard.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetDashboard": () => (/* binding */ resetDashboard),
/* harmony export */   "getDashboard": () => (/* binding */ getDashboard)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "./resources/js/src/store/actions/actionTypes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var resetDashboard = function resetDashboard() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.DASHBOARD_RESET
  };
};

var dashboardStart = function dashboardStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.DASHBOARD_START
  };
};

var dashboardSuccess = function dashboardSuccess(data) {
  return _objectSpread({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.DASHBOARD_SUCCESS
  }, data);
};

var dashboardFail = function dashboardFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.DASHBOARD_FAIL,
    error: error
  };
};

var getDashboard = function getDashboard() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch, getState) {
      var role, token, res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(dashboardStart());
              role = getState().auth.role;
              _context.prev = 2;
              token = localStorage.getItem('token');
              _context.next = 6;
              return fetch("".concat(PREFIX + role, "/dashboard"), {
                headers: {
                  Authorization: token
                }
              });

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              resData = _context.sent;
              dispatch(dashboardSuccess(resData));
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              dispatch(dashboardFail(_context.t0));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UI.TitleWrapper + div {\r\n    padding: 1rem;\r\n}\r\n\r\n@media (min-width: 800px) {\r\n    .UI.TitleWrapper + div {\r\n        padding: 1.5rem;\r\n    }\r\n}\r\n\r\n@media (min-width: 1900px) {\r\n    .UI.TitleWrapper + div {\r\n        padding: 3rem;\r\n    }\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ }),

/***/ "./node_modules/reactstrap/es/Table.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Table.js ***!
  \*********************************************/
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
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  bordered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  borderless: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  striped: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  dark: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  hover: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  responsiveTag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)])
};
var defaultProps = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_TitleWrapper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./TitleWrapper.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_TitleWrapper_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_TitleWrapper_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);