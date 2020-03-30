(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/containers/Auth/Signup/Signup.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/containers/Auth/Signup/Signup.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Signup,\r\n.Signup > .container,\r\n.Signup > .container > .row {\r\n    min-height: 100vh;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/UI/Input/Input.js":
/*!***************************************************!*\
  !*** ./resources/js/components/UI/Input/Input.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var input = function input(_ref) {
  var icon = _ref.icon,
      name = _ref.name,
      type = _ref.type,
      check = _ref.check,
      placeholder = _ref.placeholder,
      required = _ref.required,
      autoFocus = _ref.autoFocus,
      children = _ref.children,
      className = _ref.className,
      onChange = _ref.onChange,
      invalid = _ref.invalid,
      touched = _ref.touched,
      shouldValidate = _ref.shouldValidate,
      row = _ref.row,
      select = _ref.select,
      options = _ref.options,
      file = _ref.file,
      value = _ref.value;
  var optionEls = null;

  if (select) {
    optionEls = options.array.map(function (option) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: option[options.value],
        value: option[options.value]
      }, option[options.name]);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    row: row,
    className: className + (row ? " align-items-center" : ''),
    check: check
  }, check ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: type,
    name: name,
    id: name,
    label: children,
    value: value ? value : ''
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    sm: row ? 4 : null,
    className: row ? " text-right font-weight-bold" : "",
    "for": name
  }, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    fixedWidth: true,
    icon: icon,
    className: "mr-1"
  }) : null, children), row ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 8
  }, file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: type,
    invalid: invalid && touched && shouldValidate,
    valid: !invalid && touched && shouldValidate,
    name: name,
    id: name,
    required: required,
    autoFocus: autoFocus,
    placeholder: placeholder,
    onChange: onChange
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: type,
    value: value ? value : '',
    invalid: invalid && touched && shouldValidate,
    valid: !invalid && touched && shouldValidate,
    name: name,
    id: name,
    required: required,
    autoFocus: autoFocus,
    placeholder: placeholder,
    onChange: onChange
  })) : select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: type,
    value: value ? value : '',
    invalid: invalid && touched && shouldValidate,
    valid: !invalid && touched && shouldValidate,
    name: name,
    id: name,
    required: required,
    autoFocus: autoFocus,
    placeholder: placeholder,
    onChange: onChange
  }, optionEls) : file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: type,
    invalid: invalid && touched && shouldValidate,
    valid: !invalid && touched && shouldValidate,
    name: name,
    id: name,
    required: required,
    autoFocus: autoFocus,
    placeholder: placeholder,
    onChange: onChange
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: type,
    value: value ? value : '',
    invalid: invalid && touched && shouldValidate,
    valid: !invalid && touched && shouldValidate,
    name: name,
    id: name,
    required: required,
    autoFocus: autoFocus,
    placeholder: placeholder,
    onChange: onChange
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ }),

/***/ "./resources/js/containers/Auth/Signup/Signup.css":
/*!********************************************************!*\
  !*** ./resources/js/containers/Auth/Signup/Signup.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Signup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/containers/Auth/Signup/Signup.css");

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

/***/ "./resources/js/containers/Auth/Signup/Signup.js":
/*!*******************************************************!*\
  !*** ./resources/js/containers/Auth/Signup/Signup.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Signup_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Signup.css */ "./resources/js/containers/Auth/Signup/Signup.css");
/* harmony import */ var _Signup_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Signup_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/UI/Logo/Logo */ "./resources/js/components/UI/Logo/Logo.js");
/* harmony import */ var _components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Input/Input */ "./resources/js/components/UI/Input/Input.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions */ "./resources/js/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/utility */ "./resources/js/shared/utility.js");
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












var Signup = /*#__PURE__*/function (_Component) {
  _inherits(Signup, _Component);

  var _super = _createSuper(Signup);

  function Signup() {
    var _this;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      formError: false,
      formLoading: false,
      controls: {
        name: {
          elementConfig: {
            type: 'text',
            label: 'Nom(s) & prénom(s)',
            autoFocus: true
          },
          icon: 'signature',
          value: '',
          validation: {
            required: true,
            minLength: 5
          },
          valid: false,
          touched: false
        },
        email: {
          elementConfig: {
            type: 'email',
            label: 'Adresse mail'
          },
          icon: 'envelope',
          value: '',
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        password: {
          elementConfig: {
            type: 'password',
            label: 'Mot de passe'
          },
          icon: 'lock',
          value: '',
          validation: {
            required: true,
            minLength: 8
          },
          valid: false,
          touched: false
        },
        password_confirmation: {
          elementConfig: {
            type: 'password',
            label: 'Confirmation du mot de passe'
          },
          icon: 'key',
          value: '',
          validation: {
            required: true,
            minLength: 8
          },
          valid: false,
          touched: false
        },
        roleId: {
          elementConfig: {
            type: 'select',
            label: 'Rôle',
            options: {
              array: [],
              value: '_id',
              name: 'name'
            }
          },
          icon: 'user-tag',
          value: '',
          validation: {
            required: true
          },
          valid: true,
          touched: false
        },
        phone: {
          elementConfig: {
            type: 'tel',
            label: 'Numéro de téléphone'
          },
          icon: 'phone',
          value: '',
          validation: {
            required: true,
            minLength: 8
          },
          valid: false,
          touched: false
        },
        image: {
          elementConfig: {
            type: 'file',
            label: 'Photo'
          },
          icon: 'image',
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (event) {
      var _event$target = event.target,
          files = _event$target.files,
          name = _event$target.name,
          value = _event$target.value;
      var controls = _this.state.controls;

      _this.setState(Object(_shared_utility__WEBPACK_IMPORTED_MODULE_9__["updateObject"])(_this.state, {
        controls: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_9__["updateObject"])(controls, _defineProperty({}, name, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_9__["updateObject"])(controls[name], {
          value: files ? files[0] : value,
          valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_9__["checkValidity"])(value, controls[name].validation),
          touched: true
        })))
      }));

      _this.setState({
        formError: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (event) {
      var controls = _this.state.controls;
      event.preventDefault();
      var data = {};
      var valid = true;

      for (var key in controls) {
        if (controls.hasOwnProperty(key)) {
          var element = controls[key];
          data[key] = element.value;
          if (element.hasOwnProperty('valid')) valid = valid && element.valid;
        }
      }

      if (valid) {
        _this.props.onAuthErrorReset();

        _this.props.onAuthSignup(data);

        _this.setState({
          formError: false
        });
      } else _this.setState({
        formError: true
      });
    });

    return _this;
  }

  _createClass(Signup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.auth.authPage) this.props.onAuthPageOn();
      if (this.props.auth.userPage) this.props.onUserPageOff();
      this.props.onSetAuthRedirectPath();
      fetch('http://localhost:8080/auth/signup', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Erreur lors de la récupération des rôles.');
        }

        return res.json();
      }).then(function (resData) {
        _this2.setState({
          controls: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_9__["updateObject"])(_this2.state.controls, {
            roleId: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_9__["updateObject"])(_this2.state.controls.roleId, {
              elementConfig: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_9__["updateObject"])(_this2.state.controls.roleId.elementConfig, {
                options: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_9__["updateObject"])(_this2.state.controls.roleId.elementConfig.options, {
                  array: resData.roles
                })
              })
            })
          })
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.onAuthErrorReset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          controls = _this$state.controls,
          formError = _this$state.formError,
          formLoading = _this$state.formLoading;
      var _this$props$auth = this.props.auth,
          token = _this$props$auth.token,
          authRedirectPath = _this$props$auth.authRedirectPath,
          error = _this$props$auth.error,
          loading = _this$props$auth.loading;
      var redirect = null;
      if (token !== null) redirect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: authRedirectPath
      });
      var globalError = null;
      if (formError) globalError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-center text-danger"
      }, "Veuillez v\xE9rifier vos informations.");
      var formContent = Object.keys(controls).map(function (control) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: control,
          value: controls[control].value,
          onChange: function onChange(event) {
            return _this3.inputChangedHandler(event);
          },
          name: control,
          icon: controls[control].icon,
          className: controls[control].elementConfig.className,
          check: ['radio', 'checkbox'].includes(controls[control].elementConfig.type),
          select: controls[control].elementConfig.type === 'select',
          file: controls[control].elementConfig.type === 'file',
          options: controls[control].elementConfig.options,
          required: controls[control].validation.required,
          type: controls[control].elementConfig.type,
          invalid: !controls[control].valid,
          touched: controls[control].touched,
          shouldValidate: controls[control].validation ? true : false,
          autoFocus: controls[control].elementConfig.autoFocus
        }, controls[control].elementConfig.label);
      });
      var form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, globalError, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-danger"
      }, error.message) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: function onSubmit(event) {
          return _this3.submitHandler(event);
        }
      }, formContent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "danger",
        block: true
      }, "S'inscrire", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: "user-plus",
        size: "lg",
        className: "ml-1"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: "/login",
        className: "text-info"
      }, "J'ai d\xE9j\xE0 un compte.")));
      if (formLoading || loading) form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
        type: "grow",
        style: {
          width: '5rem',
          height: '5rem'
        },
        color: "danger"
      }));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12,
        className: "Signup p-0 bg-info-danger"
      }, redirect, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        className: "py-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        className: "justify-content-center align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        lg: 7
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        className: "py-4 px-5 rounded-lg shadow-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: "/",
        className: "text-decoration-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Logo_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-uppercase font-weight-light text-center mb-3"
      }, "Inscription"), form)))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAuthPageOn: function onAuthPageOn() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["authPageOn"]());
    },
    onUserPageOff: function onUserPageOff() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["userPageOff"]());
    },
    onAuthErrorReset: function onAuthErrorReset() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["authErrorReset"]());
    },
    onAuthSignup: function onAuthSignup(data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["authSignup"](data));
    },
    onSetAuthRedirectPath: function onSetAuthRedirectPath() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["setAuthRedirectPath"]('/'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Signup)));

/***/ })

}]);