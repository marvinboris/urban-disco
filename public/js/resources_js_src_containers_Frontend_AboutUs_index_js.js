"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Frontend_AboutUs_index_js"],{

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

/***/ "./resources/js/src/components/UI/TeamMemberCard/TeamMemberCard.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/UI/TeamMemberCard/TeamMemberCard.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var _TeamMemberCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamMemberCard.css */ "./resources/js/src/components/UI/TeamMemberCard/TeamMemberCard.css");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var teamMemberCard = function teamMemberCard(_ref) {
  var name = _ref.name,
      title = _ref.title,
      children = _ref.children,
      src = _ref.src,
      lg = _ref.lg;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    md: 6,
    lg: 3,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "border-0 rounded-0 bg-transparent overflow-hidden position-relative text-left shadow-sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "position-absolute w-100 h-100",
        style: {
          background: "url('" + src + "') no-repeat center",
          backgroundSize: 'cover'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "card-img-top embed-responsive embed-responsive-1by1 bg-black",
        style: {
          opacity: .3
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "bg-black-80 text-white position-relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "bg-white rounded-right position-absolute",
          style: {
            width: 8,
            height: 36,
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "ml-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "font-weight-normal text-montserrat-alt h4 position-relative d-flex align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "pr-2",
              children: name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "position-absolute border-bottom border-white-20",
              style: {
                top: 13,
                left: -50,
                width: 45
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: "circle",
                className: "text-xx-small position-absolute",
                style: {
                  right: 0,
                  top: 0,
                  transform: 'translateY(-50%)'
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "position-relative border-bottom border-white-20 flex-fill",
              style: {
                marginRight: -20
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: "play",
                className: "text-xx-small text-yellow position-absolute",
                style: {
                  left: 0,
                  top: 0,
                  transform: 'translateY(-50%)'
                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "card-text text-light text-montserrat-alt pb-1 mb-3",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              size: "lg",
              className: "mr-2",
              icon: ["fab", "facebook-square"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              size: "lg",
              className: "mr-2",
              icon: ["fab", "twitter-square"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              size: "lg",
              className: "mr-2",
              icon: ["fab", "instagram"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              size: "lg",
              className: "mr-2",
              icon: ["fab", "whatsapp"]
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teamMemberCard);

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

/***/ "./resources/js/src/containers/Frontend/AboutUs/ClientBlock/ClientBlock.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/AboutUs/ClientBlock/ClientBlock.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var src = _ref.src,
      height = _ref.height;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "text-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: src,
      style: {
        height: height
      }
    })
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/AboutUs/InfoBlock/InfoBlock.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/AboutUs/InfoBlock/InfoBlock.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var icon = _ref.icon,
      number = _ref.number,
      title = _ref.title;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lg: 3,
    xs: 6,
    className: "text-center text-white h2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
      className: "fas fa-2x fa-" + icon
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "py-4 text-montserrat-alt text-700 counter",
      children: number
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-500",
      children: title
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/AboutUs/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/AboutUs/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Container.js");
/* harmony import */ var _components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/UI/PresentationalContainer/PresentationalContainer */ "./resources/js/src/components/UI/PresentationalContainer/PresentationalContainer.js");
/* harmony import */ var _components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/UI/TeamMemberCard/TeamMemberCard */ "./resources/js/src/components/UI/TeamMemberCard/TeamMemberCard.js");
/* harmony import */ var _components_UI_WithPoint_WithPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/UI/WithPoint/WithPoint */ "./resources/js/src/components/UI/WithPoint/WithPoint.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/UI/Banner/Banner */ "./resources/js/src/components/UI/Banner/Banner.js");
/* harmony import */ var _components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Titles/Title/Title */ "./resources/js/src/components/UI/Titles/Title/Title.js");
/* harmony import */ var _ClientBlock_ClientBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClientBlock/ClientBlock */ "./resources/js/src/containers/Frontend/AboutUs/ClientBlock/ClientBlock.js");
/* harmony import */ var _InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InfoBlock/InfoBlock */ "./resources/js/src/containers/Frontend/AboutUs/InfoBlock/InfoBlock.js");
/* harmony import */ var _assets_images_Tab01_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/images/Tab01.jpg */ "./resources/js/src/assets/images/Tab01.jpg");
/* harmony import */ var _assets_images_men_images_png_1_2x_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/images/men-images-png-1@2x.png */ "./resources/js/src/assets/images/men-images-png-1@2x.png");
/* harmony import */ var _assets_images_product_111_11_2x_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/images/product_111_11@2x.png */ "./resources/js/src/assets/images/product_111_11@2x.png");
/* harmony import */ var _assets_images_istockphoto_531547724_612x612_2x_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/images/istockphoto-531547724-612x612@2x.png */ "./resources/js/src/assets/images/istockphoto-531547724-612x612@2x.png");
/* harmony import */ var _assets_images_ABOUT1_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/images/ABOUT1.jpg */ "./resources/js/src/assets/images/ABOUT1.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
        xs: 12,
        className: "AboutUs p-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_Banner_Banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: "About Us"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          innerClassName: "py-5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
            className: "align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
              lg: 5,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
                src: _assets_images_Tab01_jpg__WEBPACK_IMPORTED_MODULE_10__["default"],
                className: "img-fluid"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
              lg: 7,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
                children: "Who We Are?"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                className: "mb-4",
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies pretium nisi quis interdum. Duis elit purus, suscipit et quam sit amet, fringilla semper nisi. Ut sed pellentesque lectus. Nullam quis urna maximus, cursus arcu sit amet, sagittis elit."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                children: "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean imperdiet."
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "position-relative",
          style: {
            background: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + _assets_images_ABOUT1_jpg__WEBPACK_IMPORTED_MODULE_14__["default"] + '") no-repeat center',
            backgroundSize: 'cover'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "position-absolute w-100 h-100 bg-dark-gradient",
            style: {
              opacity: .7,
              top: 0,
              zIndex: 1
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "position-relative",
            style: {
              zIndex: 2
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
              className: "py-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  icon: "hourglass",
                  number: 164,
                  title: "Hours per week"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  icon: "code",
                  number: 20000,
                  title: "Lines of code"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  icon: "cogs",
                  number: 1000,
                  title: "Projects"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InfoBlock_InfoBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  icon: "file-image",
                  number: 2000,
                  title: "Dribble"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_PresentationalContainer_PresentationalContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "text-center py-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_Titles_Title_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
              children: "Our team"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
              className: "mb-4 text-300",
              children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
                name: "John Alverosa",
                title: "CEO",
                src: _assets_images_men_images_png_1_2x_png__WEBPACK_IMPORTED_MODULE_11__["default"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
                name: "Palo Altonio",
                title: "SEO Marketing",
                src: _assets_images_product_111_11_2x_png__WEBPACK_IMPORTED_MODULE_12__["default"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
                name: "Doe Borison",
                title: "Technician",
                src: _assets_images_istockphoto_531547724_612x612_2x_png__WEBPACK_IMPORTED_MODULE_13__["default"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
                name: "John Alverosa",
                title: "Counselor",
                src: _assets_images_men_images_png_1_2x_png__WEBPACK_IMPORTED_MODULE_11__["default"]
              })]
            })]
          })
        })]
      });
    }
  }]);

  return AboutUs;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(AboutUs));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/TeamMemberCard/TeamMemberCard.css":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/TeamMemberCard/TeamMemberCard.css ***!
  \************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".TeamMemberCard img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center;\r\n       object-position: center;\r\n}\r\n\r\n.TeamMemberCard .img-wrapper {\r\n    width: 100px;\r\n    height: 100px;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/images/ABOUT1.jpg":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/ABOUT1.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/ABOUT1.jpg?d35cd91242e26f35c5881499819492a6");

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

/***/ "./resources/js/src/assets/images/Tab01.jpg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/Tab01.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Tab01.jpg?0f247f9adb2e5000c2b2f9aec92118c4");

/***/ }),

/***/ "./resources/js/src/assets/images/istockphoto-531547724-612x612@2x.png":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/assets/images/istockphoto-531547724-612x612@2x.png ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/istockphoto-531547724-612x612@2x.png?0b5a61065a2b1bfb9fe4a648bfe28b51");

/***/ }),

/***/ "./resources/js/src/assets/images/men-images-png-1@2x.png":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/men-images-png-1@2x.png ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/men-images-png-1@2x.png?85567d89368a53f4e69f2fade1f9a1e6");

/***/ }),

/***/ "./resources/js/src/assets/images/product_111_11@2x.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/product_111_11@2x.png ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/product_111_11@2x.png?bab2125f9a2df26f01106285ea100e01");

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

/***/ "./resources/js/src/components/UI/TeamMemberCard/TeamMemberCard.css":
/*!**************************************************************************!*\
  !*** ./resources/js/src/components/UI/TeamMemberCard/TeamMemberCard.css ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_TeamMemberCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./TeamMemberCard.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/TeamMemberCard/TeamMemberCard.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_TeamMemberCard_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_TeamMemberCard_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);