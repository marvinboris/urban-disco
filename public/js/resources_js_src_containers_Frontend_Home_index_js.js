"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Frontend_Home_index_js"],{

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

/***/ "./resources/js/src/components/UI/ArticleCard/ArticleCard.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/UI/ArticleCard/ArticleCard.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardImg.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardTitle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardSubtitle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardText.js");
/* harmony import */ var _ArticleCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleCard.css */ "./resources/js/src/components/UI/ArticleCard/ArticleCard.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var articleCard = function articleCard(_ref) {
  var photo = _ref.photo,
      name = _ref.name,
      description = _ref.description,
      _ref$price = _ref.price,
      price = _ref$price === void 0 ? 0 : _ref$price,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? '/' : _ref$link,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? 6 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 4 : _ref$lg;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: md,
    lg: lg,
    className: "ArticleCard pb-3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "text-dark shadow-sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        top: true,
        width: "100%",
        src: photo,
        alt: "Card image cap",
        className: "embed-responsive embed-responsive-4by3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "h5 text-700",
          children: link.includes('//') ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            className: "bg-dark-gradient bg-text",
            href: link,
            target: "_blank",
            children: name
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
            className: "bg-dark-gradient bg-text",
            to: link,
            children: name
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "text-muted text-truncate small mb-2",
          children: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "bg-dark-gradient bg-text h6 text-600",
          children: [price, " FCFA"]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (articleCard);

/***/ }),

/***/ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var betweenButton = function betweenButton(_ref) {
  var children = _ref.children,
      color = _ref.color,
      icon = _ref.icon,
      _ref$iconColor = _ref.iconColor,
      iconColor = _ref$iconColor === void 0 ? 'reset' : _ref$iconColor,
      className = _ref.className,
      size = _ref.size,
      pill = _ref.pill;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: color,
    size: size,
    className: "d-inline-flex align-items-center " + (pill ? ' rounded-pill ' : '') + className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "text-300",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
      className: "ml-3 fas fa-lg fa-" + icon + " text-" + iconColor
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (betweenButton);

/***/ }),

/***/ "./resources/js/src/components/UI/Post/index.js":
/*!******************************************************!*\
  !*** ./resources/js/src/components/UI/Post/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardImg.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardTitle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardText.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _Post_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post.css */ "./resources/js/src/components/UI/Post/Post.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var photo = _ref.photo,
      title = _ref.title,
      body = _ref.body,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? '/' : _ref$link,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? 6 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 4 : _ref$lg;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    md: md,
    lg: lg,
    className: "NewsCard text-left pb-3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "overflow-hidden shadow-sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        top: true,
        width: "100%",
        src: photo,
        alt: "News card cap",
        className: "embed-responsive embed-responsive-4by3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "h5 bg-dark-gradient bg-text text-truncate",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "text-300 text-small mb-4",
          children: (0,_shared_utility__WEBPACK_IMPORTED_MODULE_2__.htmlEntities)(body).substr(0, 100)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "d-flex justify-content-between align-items-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: link,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
              icon: "arrow-alt-circle-right",
              color: "dark",
              size: "sm",
              children: "Read More"
            })
          })
        })]
      })]
    })
  });
});

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

/***/ "./resources/js/src/components/UI/Titles/Title/Title.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/UI/Titles/Title/Title.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var title = function title(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
    className: "mb-4 bg-dark-gradient bg-text text-700 " + className,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (title);

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Home/Carousel/Carousel.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Home/Carousel/Carousel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CarouselItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Carousel.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CarouselIndicators.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CarouselControl.js");
/* harmony import */ var _assets_images_Layer_4_copy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/images/Layer_4_copy.png */ "./resources/js/src/assets/images/Layer_4_copy.png");
/* harmony import */ var _assets_images_482f2140_4473_42e8_85d2_0953eaf84d88_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images/482f2140-4473-42e8-85d2-0953eaf84d88.png */ "./resources/js/src/assets/images/482f2140-4473-42e8-85d2-0953eaf84d88.png");
/* harmony import */ var _assets_images_onlinestudents_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/onlinestudents.png */ "./resources/js/src/assets/images/onlinestudents.png");
/* harmony import */ var _assets_images_business_bg_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/images/business-bg-3.png */ "./resources/js/src/assets/images/business-bg-3.png");
/* harmony import */ var _assets_images_SRTP_abstract_background_19_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/images/SRTP-abstract-background-19.png */ "./resources/js/src/assets/images/SRTP-abstract-background-19.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var items = [{
  src: _assets_images_Layer_4_copy_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  altText: 'Slide 1'
}, {
  src: _assets_images_482f2140_4473_42e8_85d2_0953eaf84d88_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  altText: 'Slide 2'
}, {
  src: _assets_images_onlinestudents_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  altText: 'Slide 3'
}, {
  src: _assets_images_business_bg_3_png__WEBPACK_IMPORTED_MODULE_4__["default"],
  altText: 'Slide 4'
}];

var homeCarousel = function homeCarousel(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      animating = _useState4[0],
      setAnimating = _useState4[1];

  var next = function next() {
    if (animating) return;
    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  var previous = function previous() {
    if (animating) return;
    var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  var goToIndex = function goToIndex(newIndex) {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  var slides = items.map(function (item) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onExiting: function onExiting() {
        return setAnimating(true);
      },
      onExited: function onExited() {
        return setAnimating(false);
      },
      className: "h-100",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "h-100",
        style: {
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(' + item.src + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "h-100 bg-dark-gradient",
          style: {
            opacity: .7
          }
        })
      })
    }, item.src);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    className: "h-100 carousel-fade",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      items: items,
      activeIndex: activeIndex,
      className: "d-flex flex-column align-items-center",
      onClickHandler: goToIndex
    }), slides, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: previous,
      className: "btn btn-dark"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      direction: "next",
      directionText: "Next",
      onClickHandler: next,
      className: "btn btn-black rounded-right-0"
    }), props.children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeCarousel);

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Home/Characteristic/Characteristic.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Home/Characteristic/Characteristic.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var characteristic = function characteristic(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$number = _ref.number,
      number = _ref$number === void 0 ? 0 : _ref$number;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 6,
    className: "d-flex pb-2 " + className,
    style: {
      overflow: 'visible'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "pr-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "rounded-circle embed-responsive embed-responsive-1by1 border border-dark border-2 text-700 text-x-large d-flex justify-content-center align-items-center",
        style: {
          width: 40
        },
        children: number
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "text-small text-300",
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (characteristic);

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Home/UnderCarouselBlock/UnderCarouselBlock.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Home/UnderCarouselBlock/UnderCarouselBlock.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var underCarouselBlock = function underCarouselBlock(_ref) {
  var children = _ref.children,
      title = _ref.title,
      icon = _ref.icon,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sm: 6,
    lg: 3,
    className: 'text-center text-dark py-3 small px-4 m-0 ' + className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "mb-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
          className: "fas fa-" + icon + " fa-3x bg-text bg-dark-gradient"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
        className: "text-700 mb-3 bg-text bg-dark-gradient",
        style: {
          textShadow: '0 0 4px 2px black'
        },
        children: title
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-300",
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (underCarouselBlock);

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Home/index.js":
/*!************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Home/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Container.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/UI/PresentationalContainer/PresentationalContainer */ "./resources/js/src/components/UI/PresentationalContainer/PresentationalContainer.js");
/* harmony import */ var _Carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Carousel/Carousel */ "./resources/js/src/containers/Frontend/Home/Carousel/Carousel.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _components_UI_Button_CenterButton_CenterButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Button/CenterButton/CenterButton */ "./resources/js/src/components/UI/Button/CenterButton/CenterButton.js");
/* harmony import */ var _components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Titles/Title/Title */ "./resources/js/src/components/UI/Titles/Title/Title.js");
/* harmony import */ var _components_UI_ArticleCard_ArticleCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/ArticleCard/ArticleCard */ "./resources/js/src/components/UI/ArticleCard/ArticleCard.js");
/* harmony import */ var _components_UI_Post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Post */ "./resources/js/src/components/UI/Post/index.js");
/* harmony import */ var _UnderCarouselBlock_UnderCarouselBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UnderCarouselBlock/UnderCarouselBlock */ "./resources/js/src/containers/Frontend/Home/UnderCarouselBlock/UnderCarouselBlock.js");
/* harmony import */ var _Characteristic_Characteristic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Characteristic/Characteristic */ "./resources/js/src/containers/Frontend/Home/Characteristic/Characteristic.js");
/* harmony import */ var _components_UI_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/UI/Spinner */ "./resources/js/src/components/UI/Spinner/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _store_actions_frontend_home__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../store/actions/frontend/home */ "./resources/js/src/store/actions/frontend/home.js");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Home.css */ "./resources/js/src/containers/Frontend/Home/Home.css");
/* harmony import */ var _assets_images_computer_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../assets/images/computer.png */ "./resources/js/src/assets/images/computer.png");
/* harmony import */ var _assets_images_photo_2021_08_07_21_08_43_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../assets/images/photo_2021-08-07_21-08-43.jpg */ "./resources/js/src/assets/images/photo_2021-08-07_21-08-43.jpg");
/* harmony import */ var _assets_images_photo_2021_08_07_21_06_47_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../assets/images/photo_2021-08-07_21-06-47.jpg */ "./resources/js/src/assets/images/photo_2021-08-07_21-06-47.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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


























var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super.apply(this, arguments);
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.get();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$frontend$ = this.props.frontend.home,
          loading = _this$props$frontend$.loading,
          error = _this$props$frontend$.error,
          message = _this$props$frontend$.message,
          _this$props$frontend$2 = _this$props$frontend$.products,
          products = _this$props$frontend$2 === void 0 ? [] : _this$props$frontend$2,
          _this$props$frontend$3 = _this$props$frontend$.posts,
          posts = _this$props$frontend$3 === void 0 ? [] : _this$props$frontend$3;
      var content;
      var lang = localStorage.getItem('lang');

      var feedback = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_2__["default"], {
        message: message
      });

      var errors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_Error_Error__WEBPACK_IMPORTED_MODULE_3__["default"], {
          err: error
        })
      });

      var articleCards = products.map(function (product) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_ArticleCard_ArticleCard__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({}, (0,_shared_utility__WEBPACK_IMPORTED_MODULE_14__.updateObject)(product, {
          name: product.name[lang],
          description: product.description[lang]
        })), Math.random() + JSON.stringify(product));
      });
      var newsCards = posts.map(function (post) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Post__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread({}, (0,_shared_utility__WEBPACK_IMPORTED_MODULE_14__.updateObject)(post, {
          title: post.title[lang],
          body: post.body[lang]
        })), JSON.stringify(post));
      });
      if (loading) content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {});else content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          bg: "transparent",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: "text-center py-5",
            id: "products",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: "Nos produits"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
              className: "mb-4 text-300",
              children: "S\xE9lectionnez le produit qui vous int\xE9resse et vous recevrez les instructions de paiement et livraison sur WhatsApp."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
              children: articleCards
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "position-relative container-fluid bg-white",
          id: "about",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
            className: "position-absolute h-100 w-100",
            style: {
              top: 0,
              left: 0
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
              className: "h-100",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
                className: "justify-content-end position-relative align-items-center",
                style: {
                  height: '50%'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
                  lg: 6,
                  className: "pl-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    children: "Des kits d'\xE9ducation"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
                    className: "mb-4 text-300",
                    children: "Fournissez vous en mat\xE9riel d'\xE9ducation pour vos projets, Nos kits d'education adapt\xE9s pour des prototypages de drones modulaires (a\xE9riens, sous-marins, mobiles)"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("a", {
                    href: "//api.whatsapp.com/send?phone=+237%20656395217",
                    className: "text-decoration-none text-reset",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Button_CenterButton_CenterButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      pill: true,
                      color: "dark",
                      children: "Demander le prix"
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
                className: "position-relative align-items-center",
                style: {
                  height: '50%'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
                  lg: 6,
                  className: "pr-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    children: "Ateliers en ligne"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
                    className: "mb-4 text-300",
                    children: "Formez vous depuis chez vous chaque weekend de mani\xE8re acc\xE9ler\xE9e avec vos kits de mani\xE8re personnalis\xE9e et a la demande"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("a", {
                    href: "//api.whatsapp.com/send?phone=+237%20656395217",
                    className: "text-decoration-none text-reset",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Button_CenterButton_CenterButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      pill: true,
                      color: "dark",
                      children: "Demander le prix"
                    })
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
            className: "align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
              lg: 6,
              className: "embed-responsive embed-responsive-4by3",
              style: {
                background: 'url("' + _assets_images_photo_2021_08_07_21_08_43_jpg__WEBPACK_IMPORTED_MODULE_18__["default"] + '") no-repeat center',
                backgroundSize: 'cover'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
              lg: 6
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
              lg: 6
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
              lg: 6,
              className: "embed-responsive embed-responsive-4by3",
              style: {
                background: 'url("' + _assets_images_photo_2021_08_07_21_06_47_jpg__WEBPACK_IMPORTED_MODULE_19__["default"] + '") no-repeat center',
                backgroundSize: 'cover'
              }
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          bg: "transparent",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: "text-center py-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: "Notre blog"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
              className: "mb-4 text-300",
              children: "Retrouvez les derni\xE8res nouvelles et actualit\xE9s du domaine qui est le n\xF4tre."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
              children: newsCards
            })]
          })
        })]
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
        xs: 12,
        className: "Home p-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
          className: "position-relative min-vh-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: "position-absolute h-100 w-100",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
              sm: 9,
              xl: 6,
              lg: 7,
              md: 8,
              id: "banner",
              className: "text-white mx-auto text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h1", {
                className: "display-4 text-700",
                children: "Obtenir vos kits et accessoires High Tech"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
                className: "text-300 text-large",
                children: "Des kits d'education, l'\xE9lectronique pour vos projets , des formations certifiantes et du financement participatif."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
                className: "text-large mt-5",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("a", {
                  href: "//api.whatsapp.com/send?phone=+237%20656395217",
                  className: "text-decoration-none text-reset",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    size: "lg",
                    color: "light",
                    pill: true,
                    icon: "dollar-sign",
                    className: "mr-3",
                    children: "Demander le prix"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("a", {
                  href: "//ma64industry.themasterofarts.com",
                  className: "text-decoration-none text-reset",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    size: "lg",
                    color: "outline-light",
                    pill: true,
                    icon: "dollar-sign",
                    children: "Crowdfunding"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          user: true,
          bg: "transparent",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
            className: "position-relative py-5",
            style: {
              transform: "translateY(0%) scale(1)",
              transformOrigin: 'center',
              zIndex: 11
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
              className: "flex",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
                className: "m-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_UnderCarouselBlock_UnderCarouselBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  border: true,
                  icon: "plane",
                  title: "From air"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_UnderCarouselBlock_UnderCarouselBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  border: true,
                  icon: "fighter-jet",
                  title: "Best drones"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_UnderCarouselBlock_UnderCarouselBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  border: true,
                  icon: "tachometer-alt",
                  title: "Speed"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_UnderCarouselBlock_UnderCarouselBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  icon: "robot",
                  title: "Long range"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
              className: "text-center mt-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("a", {
                href: "//api.whatsapp.com/send?phone=+237%20656395217",
                className: "text-decoration-none text-reset",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Button_CenterButton_CenterButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  pill: true,
                  color: "dark",
                  children: "Demander le prix"
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
          className: "position-relative bg-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
            className: "position-absolute w-50 h-100",
            style: {
              top: 0,
              right: 0,
              background: 'url("' + _assets_images_computer_png__WEBPACK_IMPORTED_MODULE_17__["default"] + '") no-repeat top right',
              backgroundSize: 'contain'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
            style: {
              zIndex: 2
            },
            className: "py-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
              className: "py-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
                lg: 8,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  children: "Assistance \xE0 la Qualification"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p", {
                  className: "text-300 w-75 mb-4",
                  children: "R\xE9ussissez votre projet d'\xE9tudes en IA, Robotique, Data Science gr\xE2ce \xE0 des programmes en ligne."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
                  className: "text-300",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Characteristic_Characteristic__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    number: "1",
                    children: "La jeunesse de la francophonie vise les hautes ing\xE9nieries."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Characteristic_Characteristic__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    number: "2",
                    children: "Un int\xE9r\xEAt croissant pour les m\xE9tiers informatiques depuis la crise du Covid."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Characteristic_Characteristic__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    number: "3",
                    children: "En cycle Licence, beaucoup aspirent \xE0 des sp\xE9cialisations."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Characteristic_Characteristic__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    number: "4",
                    children: "Themasterofarts offre des tutoriels, du mat\xE9riel, expertise et t\xE9l\xE9-expertise pour l'innovation."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Characteristic_Characteristic__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    number: "5",
                    children: "Nous offrons des programmes garantissant des bourses, l'acc\xE8s \xE0 des Master d'\xE9lite."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Characteristic_Characteristic__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    number: "6",
                    children: "Nos partenariats rendent l'innovation possible aux jeunes entrepreneurs."
                  })]
                })]
              })
            })
          })]
        }), feedback, errors, content]
      });
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get() {
      return dispatch((0,_store_actions_frontend_home__WEBPACK_IMPORTED_MODULE_15__.getHome)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./resources/js/src/store/actions/frontend/home.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/store/actions/frontend/home.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetHome": () => (/* binding */ resetHome),
/* harmony export */   "getHome": () => (/* binding */ getHome),
/* harmony export */   "postHome": () => (/* binding */ postHome)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "./resources/js/src/store/actions/actionTypes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var resetHome = function resetHome() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.HOME_RESET
  };
};

var homeStart = function homeStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.HOME_START
  };
};

var homeSuccess = function homeSuccess(data) {
  return _objectSpread({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.HOME_SUCCESS
  }, data);
};

var homeFail = function homeFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.HOME_FAIL,
    error: error
  };
};

var getHome = function getHome() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(homeStart());
              _context.prev = 1;
              _context.next = 4;
              return fetch("".concat(PREFIX, "home"));

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              resData = _context.sent;
              dispatch(homeSuccess(resData));
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              dispatch(homeFail(_context.t0));

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
var postHome = function postHome(data) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      var form, res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(homeStart());
              _context2.prev = 1;
              form = new FormData(data);
              _context2.next = 5;
              return fetch("".concat(PREFIX, "home"), {
                method: 'POST',
                body: form
              });

            case 5:
              res = _context2.sent;
              _context2.next = 8;
              return res.json();

            case 8:
              resData = _context2.sent;

              if (!(res.status === 422)) {
                _context2.next = 13;
                break;
              }

              throw new Error(Object.values(resData.errors).join('\n'));

            case 13:
              if (!(res.status !== 200 && res.status !== 201)) {
                _context2.next = 15;
                break;
              }

              throw new Error(resData.error.message);

            case 15:
              dispatch(homeSuccess(resData));
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              dispatch(homeFail(_context2.t0));

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 18]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/ArticleCard/ArticleCard.css":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/ArticleCard/ArticleCard.css ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ArticleCard img {\r\n    opacity: .8;\r\n    transition: all .5s;\r\n}\r\n\r\n.ArticleCard .card:hover img {\r\n    opacity: 1;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Post/Post.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Post/Post.css ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UI.Post img {\r\n    transform: scale(1) rotate(0deg);\r\n    transform-origin: center;\r\n    transition: all .5s;\r\n}\r\n\r\n.UI.Post .card:hover img {\r\n    transform: scale(1.1) rotate(3deg);\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Home/Home.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Home/Home.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Home .carousel-inner {\r\n    height: 100% !important;\r\n}\r\n\r\n.Home #banner {\r\n    position: absolute;\r\n    margin: auto;\r\n    z-index: 10;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -60%) scale(0.75);\r\n    transform-origin: center;\r\n}\r\n\r\n.Home .carousel-indicators {\r\n    top: 50%;\r\n    width: 30px;\r\n    transform: translateY(-50%);\r\n    left: 4%;\r\n    margin: 0;\r\n}\r\n\r\n.Home .carousel-indicators li {\r\n    width: 24px;\r\n    height: 24px;\r\n    border-radius: 50%;\r\n    background-color: rgba(255, 255, 255, .7);\r\n    transition: all .5s;\r\n}\r\n\r\n.Home .carousel-indicators li.active {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #fff;\r\n}\r\n\r\n.Home .carousel-control-prev,\r\n.Home .carousel-control-next\r\n{\r\n    width: 51px !important;\r\n    opacity: 1;\r\n    bottom: 40px;\r\n    top: auto;\r\n}\r\n\r\n.Home .carousel-control-prev {\r\n    height: 30px !important;\r\n    border-top-right-radius: 0 !important;\r\n    border-bottom-right-radius: 0 !important;\r\n    left: auto;\r\n    right: 91px;\r\n}\r\n\r\n.Home .carousel-control-next {\r\n    height: 40px !important;\r\n    border-top-left-radius: 0 !important;\r\n    border-bottom-left-radius: 0 !important;\r\n    right: 40px;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/images/482f2140-4473-42e8-85d2-0953eaf84d88.png":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/assets/images/482f2140-4473-42e8-85d2-0953eaf84d88.png ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/482f2140-4473-42e8-85d2-0953eaf84d88.png?270e16764d47fede6c524ec4fe5cb7c9");

/***/ }),

/***/ "./resources/js/src/assets/images/Layer_4_copy.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/Layer_4_copy.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Layer_4_copy.png?2636acc481bb42af9c821a57c19c264f");

/***/ }),

/***/ "./resources/js/src/assets/images/SRTP-abstract-background-19.png":
/*!************************************************************************!*\
  !*** ./resources/js/src/assets/images/SRTP-abstract-background-19.png ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/SRTP-abstract-background-19.png?e3cef807d9aa0dcc61b818e3d5b5db7f");

/***/ }),

/***/ "./resources/js/src/assets/images/business-bg-3.png":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/business-bg-3.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/business-bg-3.png?d86748e1b75a608427afbefcead2dd5e");

/***/ }),

/***/ "./resources/js/src/assets/images/computer.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/computer.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/computer.png?0f7ea7b7d0054828e2ba17ffdebe7371");

/***/ }),

/***/ "./resources/js/src/assets/images/onlinestudents.png":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/onlinestudents.png ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/onlinestudents.png?b60bd218041d854371853fc21a031a8a");

/***/ }),

/***/ "./resources/js/src/assets/images/photo_2021-08-07_21-06-47.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/photo_2021-08-07_21-06-47.jpg ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/photo_2021-08-07_21-06-47.jpg?5e5a8b3ef8994ff6a7b65c681ee61933");

/***/ }),

/***/ "./resources/js/src/assets/images/photo_2021-08-07_21-08-43.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/photo_2021-08-07_21-08-43.jpg ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/photo_2021-08-07_21-08-43.jpg?a11430d150d9637f723f9800513c3190");

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

/***/ "./node_modules/reactstrap/es/Card.js":
/*!********************************************!*\
  !*** ./node_modules/reactstrap/es/Card.js ***!
  \********************************************/
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
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  outline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)])
};
var defaultProps = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardBody.js":
/*!************************************************!*\
  !*** ./node_modules/reactstrap/es/CardBody.js ***!
  \************************************************/
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
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)])
};
var defaultProps = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cssModule", "innerRef", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-body'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBody);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardImg.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/CardImg.js ***!
  \***********************************************/
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
  top: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  bottom: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'img'
};

var CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cssModule", "top", "bottom", "tag"]);

  var cardImgClassName = 'card-img';

  if (top) {
    cardImgClassName = 'card-img-top';
  }

  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, cardImgClassName), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

CardImg.propTypes = propTypes;
CardImg.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImg);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardSubtitle.js":
/*!****************************************************!*\
  !*** ./node_modules/reactstrap/es/CardSubtitle.js ***!
  \****************************************************/
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
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var CardSubtitle = function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cssModule", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-subtitle'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

CardSubtitle.propTypes = propTypes;
CardSubtitle.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardSubtitle);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardText.js":
/*!************************************************!*\
  !*** ./node_modules/reactstrap/es/CardText.js ***!
  \************************************************/
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
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cssModule", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-text'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardText);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardTitle.js":
/*!*************************************************!*\
  !*** ./node_modules/reactstrap/es/CardTitle.js ***!
  \*************************************************/
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
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cssModule", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-title'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardTitle);

/***/ }),

/***/ "./node_modules/reactstrap/es/Carousel.js":
/*!************************************************!*\
  !*** ./node_modules/reactstrap/es/Carousel.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CarouselItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselItem */ "./node_modules/reactstrap/es/CarouselItem.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");







var SWIPE_THRESHOLD = 40;

var Carousel = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.renderItems = _this.renderItems.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.hoverStart = _this.hoverStart.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.hoverEnd = _this.hoverEnd.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.touchStartX = 0;
    _this.touchStartY = 0;
    _this.state = {
      activeIndex: _this.props.activeIndex,
      direction: 'right',
      indicatorClicked: false
    };
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      direction: this.state.direction
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


    document.addEventListener('keyup', this.handleKeyPress);
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newState = null;
    var activeIndex = prevState.activeIndex,
        direction = prevState.direction,
        indicatorClicked = prevState.indicatorClicked;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'right';
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = 'left';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'left' : 'right';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'right' : 'left';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction: direction,
        indicatorClicked: false
      };
    }

    return newState;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval(this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  };

  _proto.setInterval = function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (props) {
    if (props === void 0) {
      props = this.props;
    }

    // make sure not to have multiple intervals going...
    this.clearInterval();

    if (props.interval) {
      this.cycleInterval = setInterval(function () {
        props.next();
      }, parseInt(props.interval, 10));
    }
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval() {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function () {
    clearInterval(this.cycleInterval);
  });

  _proto.hoverStart = function hoverStart() {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }

    if (this.props.mouseEnter) {
      var _this$props;

      (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
    }
  };

  _proto.hoverEnd = function hoverEnd() {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }

    if (this.props.mouseLeave) {
      var _this$props2;

      (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
    }
  };

  _proto.handleKeyPress = function handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  };

  _proto.handleTouchStart = function handleTouchStart(e) {
    if (!this.props.enableTouch) {
      return;
    }

    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  };

  _proto.handleTouchEnd = function handleTouchEnd(e) {
    if (!this.props.enableTouch) {
      return;
    }

    var currentX = e.changedTouches[0].screenX;
    var currentY = e.changedTouches[0].screenY;
    var diffX = Math.abs(this.touchStartX - currentX);
    var diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

    if (diffX < diffY) {
      return;
    }

    if (diffX < SWIPE_THRESHOLD) {
      return;
    }

    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  };

  _proto.renderItems = function renderItems(carouselItems, className) {
    var _this2 = this;

    var slide = this.props.slide;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: className
    }, carouselItems.map(function (item, index) {
      var isIn = index === _this2.state.activeIndex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(item, {
        in: isIn,
        slide: slide
      });
    }));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        cssModule = _this$props3.cssModule,
        slide = _this$props3.slide,
        className = _this$props3.className;
    var outerClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'carousel', slide && 'slide'), cssModule);
    var innerClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()('carousel-inner'), cssModule); // filter out booleans, null, or undefined

    var children = this.props.children.filter(function (child) {
      return child !== null && child !== undefined && typeof child !== 'boolean';
    });
    var slidesOnly = children.every(function (child) {
      return child.type === _CarouselItem__WEBPACK_IMPORTED_MODULE_6__["default"];
    }); // Rendering only slides

    if (slidesOnly) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(children, innerClasses));
    } // Rendering slides and controls


    if (children[0] instanceof Array) {
      var _carouselItems = children[0];
      var _controlLeft = children[1];
      var _controlRight = children[2];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
    } // Rendering indicators, slides and controls


    var indicators = children[0];

    var wrappedOnClick = function wrappedOnClick(e) {
      if (typeof indicators.props.onClickHandler === 'function') {
        _this3.setState({
          indicatorClicked: true
        }, function () {
          return indicators.props.onClickHandler(e);
        });
      }
    };

    var wrappedIndicators = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    var carouselItems = children[1];
    var controlLeft = children[2];
    var controlRight = children[3];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
  };

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  // controls if the left and right arrow keys should control the carousel
  keyboard: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)]),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
  // called when the mouse enters the Carousel
  mouseEnter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  // called when the mouse exits the Carousel
  mouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  // controls whether the slide animation on the Carousel works or not
  slide: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  enableTouch: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true
};
Carousel.childContextTypes = {
  direction: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

/***/ }),

/***/ "./node_modules/reactstrap/es/CarouselControl.js":
/*!*******************************************************!*\
  !*** ./node_modules/reactstrap/es/CarouselControl.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");





var CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;
  var anchorClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, "carousel-control-" + direction), cssModule);
  var iconClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_2___default()("carousel-control-" + direction + "-icon"), cssModule);
  var screenReaderClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_2___default()('sr-only'), cssModule);
  return (
    /*#__PURE__*/
    // We need to disable this linting rule to use an `<a>` instead of
    // `<button>` because that's what the Bootstrap examples require:
    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: anchorClasses,
      style: {
        cursor: "pointer"
      },
      role: "button",
      tabIndex: "0",
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: iconClasses,
      "aria-hidden": "true"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: screenReaderClasses
    }, directionText || direction))
  );
};

CarouselControl.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['prev', 'next']).isRequired,
  onClickHandler: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  directionText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselControl);

/***/ }),

/***/ "./node_modules/reactstrap/es/CarouselIndicators.js":
/*!**********************************************************!*\
  !*** ./node_modules/reactstrap/es/CarouselIndicators.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");





var CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;
  var listClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeIndex === idx
    }), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: "" + (item.key || Object.values(item).join('')),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    className: listClasses
  }, indicators);
};

CarouselIndicators.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  activeIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onClickHandler: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselIndicators);

/***/ }),

/***/ "./node_modules/reactstrap/es/CarouselItem.js":
/*!****************************************************!*\
  !*** ./node_modules/reactstrap/es/CarouselItem.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var CarouselItem = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(CarouselItem, _React$Component);

  function CarouselItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onEntering = _this.onEntering.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onExit = _this.onExit.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onExiting = _this.onExiting.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onExited = _this.onExited.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.onEnter = function onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    var offsetHeight = node.offsetHeight;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        isIn = _this$props.in,
        children = _this$props.children,
        cssModule = _this$props.cssModule,
        slide = _this$props.slide,
        Tag = _this$props.tag,
        className = _this$props.className,
        transitionProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["in", "children", "cssModule", "slide", "tag", "className"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__.Transition, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, transitionProps, {
      enter: slide,
      exit: slide,
      in: isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var direction = _this2.context.direction;
      var isActive = status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.ENTERED || status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.EXITING;
      var directionClassName = (status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.ENTERING || status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
      var orderClassName = status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
      var itemClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Tag, {
        className: itemClasses
      }, children);
    });
  };

  return CarouselItem;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

CarouselItem.propTypes = _objectSpread(_objectSpread({}, react_transition_group__WEBPACK_IMPORTED_MODULE_8__.Transition.propTypes), {}, {
  tag: _utils__WEBPACK_IMPORTED_MODULE_9__.tagPropType,
  in: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  slide: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
});
CarouselItem.defaultProps = _objectSpread(_objectSpread({}, react_transition_group__WEBPACK_IMPORTED_MODULE_8__.Transition.defaultProps), {}, {
  tag: 'div',
  timeout: _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem.contextTypes = {
  direction: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselItem);

/***/ }),

/***/ "./resources/js/src/components/UI/ArticleCard/ArticleCard.css":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/UI/ArticleCard/ArticleCard.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_ArticleCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./ArticleCard.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/ArticleCard/ArticleCard.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_ArticleCard_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_ArticleCard_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/UI/Post/Post.css":
/*!******************************************************!*\
  !*** ./resources/js/src/components/UI/Post/Post.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Post_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Post.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Post/Post.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Post_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Post_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Home/Home.css":
/*!************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Home/Home.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Home.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Home/Home.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Home_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Home_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);