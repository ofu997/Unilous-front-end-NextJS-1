module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Contributer.js":
/*!***********************************!*\
  !*** ./components/Contributer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/contact.module.css */ "./styles/pages/contact.module.css");
/* harmony import */ var _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\Contributer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Contributer = ({
  name,
  link,
  image,
  position,
  email,
  phone
}) => {
  return __jsx("div", {
    className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/user/[username]",
    as: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: `${_styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactHeader} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/svg/logo/logoW.svg",
    className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CHIcon,
    alt: "ProjectU",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }), __jsx("h3", {
    className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CHName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, name))), __jsx("img", {
    src: image,
    className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.profileImage,
    alt: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactInfoContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactInfo,
    style: {
      backgroundColor: '#f6f6f9'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 93
    }
  }, "position:"), position), __jsx("div", {
    className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 56
    }
  }, "email:"), email), __jsx("div", {
    className: _styles_pages_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contactInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 56
    }
  }, "phone:"), " ", phone)));
};

/* harmony default export */ __webpack_exports__["default"] = (Contributer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _newNavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newNavBar/NavBar */ "./components/newNavBar/NavBar.js");
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../schemas/queries */ "./schemas/queries.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import NavBar from './navBar/NavBar'






const Layout = props => {
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onQueryChange = event => {
    setQuery(event.target.value);
  };

  if (true) return __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_newNavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    query: query,
    onQueryChange: onQueryChange,
    noUser: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), props.children);else {}
};

const mapStateToProps = state => {
  return {
    token: state.token,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_2__["setToken"], dispatch),
    setCurrentUser: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__["setCurrentUser"], dispatch),
    setPendingNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__["setPendingNotifications"], dispatch),
    setCurrentUserNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__["setCurrentUserNotifications"], dispatch)
  };
};

_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__["setCurrentUser"];
_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__["setPendingNotifications"];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Layout));

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\Loading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import logoB from '../static/svg/logo/logoB.svg'
// import logoW from '../static/svg/logo/logoW.svg'

const Loading = props => {
  if (props.size === 'small') {
    return __jsx("div", {
      className: "loading-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/svg/logo/logoB.svg",
      className: "loading-logo",
      alt: "loading logo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, "loading"));
  }

  if (props.color === 'white') {
    return __jsx("div", {
      className: "loading-container",
      style: {
        color: 'white'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "navbar-height",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }), __jsx("img", {
      src: "/svg/logo/logoW.svg",
      className: "loading-logo-l",
      alt: "loading logo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }), __jsx("h1", {
      className: "loading-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, "loading"));
  }

  return __jsx("div", {
    className: "loading-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navbar-height",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/svg/logo/logoB.svg",
    className: "loading-logo-l",
    alt: "loading logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "loading-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "loading"));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(Loading));

/***/ }),

/***/ "./components/newNavBar/NavBar.js":
/*!****************************************!*\
  !*** ./components/newNavBar/NavBar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/newNavBar.module.css */ "./styles/newNavBar.module.css");
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/functions */ "./functions/functions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _signed_NotSigned__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signed/NotSigned */ "./components/newNavBar/signed/NotSigned.js");
/* harmony import */ var _signed_Signed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signed/Signed */ "./components/newNavBar/signed/Signed.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _user_form_SignIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/form/SignIn */ "./components/user/form/SignIn.js");
/* harmony import */ var _user_form_Register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user/form/Register */ "./components/user/form/Register.js");
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _user_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user/utilities/UserNotifList */ "./components/user/utilities/UserNotifList.js");
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../schemas/queries */ "./schemas/queries.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/reducers/userDD */ "./redux/reducers/userDD.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\newNavBar\\NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



















const NavBar = props => {
  if (props.noUser) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "HWM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainer} neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/logo/logoW.svg",
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }), __jsx("h2", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 33
      }
    }, "Unilous"))))), __jsx("div", {
      className: "SWM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerM,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainerM} neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/logo/logoW.svg",
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 33
      }
    }), __jsx("h2", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 33
      }
    }, "Unilous"))))));
  }

  const searchQuery = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_3__["useField"])('text');
  const currentUserUN = localStorage.getItem('username') ? localStorage.getItem('username') : 'fakeUser';
  const userQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__["useQuery"])(_schemas_queries__WEBPACK_IMPORTED_MODULE_13__["FIND_USER"], {
    variables: {
      username: currentUserUN
    }
  });

  const userQueryConditions = () => {
    const query = userQuery.data;
    const reducer = props.currentUser;

    if (!query) {
      return null;
    }

    if (!query.findUser) {
      return null;
    }

    if (reducer) {
      if (query.findUser.username === reducer.username) {
        return null;
      }
    }

    return query.findUser;
  };

  const userResult = userQueryConditions();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (userResult) {
      props.setCurrentUser(userResult);
    }
  }, [props, props.currentUser, userResult]);
  const {
    0: subNav,
    1: setSubNav
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  if (props.userDD) {
    if (!subNav) {
      setSubNav('menu');
    }
  }

  const resetNav = () => {
    setSubNav(false);
    props.resetUserDD();
  };

  const SQCleaned = searchQuery.fields.value === '' ? 'all' : searchQuery.fields.value;

  const enterSearch = () => {
    next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push(`/results/${SQCleaned}`);
    resetNav();
  };

  const handleKeyPress = (e, noState) => {
    if (event.key === 'Enter') {
      if (noState) {
        const SQ = e.target.value === '' ? 'all' : e.target.value;
        next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push(`/results/${SQ}`);
        resetNav();
      } else {
        enterSearch();
      }
    }
  };

  const handleSubNavState = state => {
    if (state === subNav) {
      setSubNav(false);
    } else {
      setSubNav(state);
    }
  };

  const handleSubNavItemState = state => {
    if (state === props.userDD) {
      props.resetUserDD();
    } else {
      props.setUserDD(state);
    }
  };

  const logout = () => {
    localStorage.clear();
    props.clearToken();
    resetNav();
  };

  const signedState = props.token ? __jsx(_signed_Signed__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 39
    }
  }) : __jsx(_signed_NotSigned__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 52
    }
  });
  const username = props.currentUser ? props.currentUser.username : '';

  const SubNav = () => {
    if (!subNav) {
      return null;
    } else if (subNav === 'search') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subNavContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchContainerM,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/results/[searchQuery]",
        as: `/results/${SQCleaned}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBtn,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "/svg/searchWW.svg",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.magnifier,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 57
        }
      }))), __jsx("input", {
        id: "search",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBar,
        placeholder: "Search",
        onKeyPress: e => handleKeyPress(e, true),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }
      })));
    } else if (subNav === 'menu') {
      if (props.noUser) {
        return __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subNavContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('notification'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 29
          }
        }), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('user'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 29
          }
        }), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.moreContainer,
          onClick: () => handleSubNavItemState('more'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/moreW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.more,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 33
          }
        }))));
      }

      if (props.token) {
        return __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subNavContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('notification'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notifContainerM,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 33
          }
        }, __jsx("img", {
          src: "/svg/bellW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bell,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 37
          }
        }), __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nofifCount,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 37
          }
        }, "-"))), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('user'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.username,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 33
          }
        }, username)), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.moreContainer,
          onClick: () => handleSubNavItemState('more'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/moreW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.more,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 33
          }
        }))));
      } else {
        return __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subNavContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
          onClick: () => handleSubNavItemState('signin'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 29
          }
        }, "sign in"), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
          onClick: () => handleSubNavItemState('register'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 29
          }
        }, "register"), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.moreContainer,
          onClick: () => handleSubNavItemState('more'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/moreW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.more,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 33
          }
        }))));
      }
    }
  };

  const SubNavItem = () => {
    if (!props.userDD) {
      return null;
    }

    if (props.userDD === 'signin') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }
      }, __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSuccess: resetNav,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }
      }));
    }

    if (props.userDD === 'register') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }
      }, __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSuccess: resetNav,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      }));
    }

    if (props.userDD === 'notification') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/svg/bellW.svg",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleBell,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }
      }), __jsx(_user_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }
      }));
    }

    if (props.userDD === 'user') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 21
        }
      }, props.currentUser.username), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onClick: () => resetNav(),
        href: "/user/[username]",
        as: `/user/${decodeURIComponent(props.currentUser.username)}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "neutralize-link",
        style: {
          color: 'white'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 25
        }
      }, __jsx("h3", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 81
        }
      }, "account details"))), __jsx("h3", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
        onClick: () => logout(),
        style: {
          color: 'rgb(254,52,77)'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }
      }, "Sign out"));
    }

    if (props.userDD === 'more') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/svg/moreW.svg",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleMore,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onClick: () => resetNav(),
        href: "/postformpage",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "neutralize-link",
        style: {
          color: 'white'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 25
        }
      }, __jsx("h3", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 81
        }
      }, "create project"))));
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "HWM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainer} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 29
    }
  }), __jsx("h2", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 29
    }
  }, "Unilous"))), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/results/[searchQuery]",
    as: `/results/${SQCleaned}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/svg/searchWW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.magnifier,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 57
    }
  }))), __jsx("input", _extends({
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBar,
    placeholder: "Search",
    onKeyPress: e => handleKeyPress(e)
  }, searchQuery.fields, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 25
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/postformpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CPContainer} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/plusW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.plus,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CPText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 29
    }
  }, "create project"))), signedState)), __jsx("div", {
    className: "SWM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerM,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainerM} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 29
    }
  }), __jsx("h2", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 29
    }
  }, "Unilous"))), __jsx("button", {
    onClick: () => handleSubNavState('search'),
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/searchWW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 29
    }
  }))), __jsx("button", {
    onClick: () => handleSubNavState('menu'),
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/svg/hamburgerW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 25
    }
  })), __jsx(SubNav, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 21
    }
  }), __jsx(SubNavItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  }))));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token,
    userDD: state.userDD // alertNotif: state.alertNotif

  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearToken: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_10__["clearToken"], dispatch),
    setCurrentUser: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_11__["setCurrentUser"], dispatch),
    setUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_16__["setUserDD"], dispatch),
    resetUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_16__["resetUserDD"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NavBar));

/***/ }),

/***/ "./components/newNavBar/signed/NotSigned.js":
/*!**************************************************!*\
  !*** ./components/newNavBar/signed/NotSigned.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ "./styles/newNavBar.module.css");
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_form_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/form/Register */ "./components/user/form/Register.js");
/* harmony import */ var _user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/form/SignIn */ "./components/user/form/SignIn.js");
/* harmony import */ var _redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/userDD */ "./redux/reducers/userDD.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\newNavBar\\signed\\NotSigned.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const NotSigned = props => {
  const handleUserState = state => {
    if (state === props.userDD) {
      props.resetUserDD();
    } else {
      props.setUserDD(state);
    }
  };

  const showUserDD = props.userDD ? {
    display: 'block'
  } : {
    display: 'none'
  };
  const showInDD = props.userDD ? props.userDD === 'register' ? __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 39
    }
  }) : props.userDD === 'signin' ? __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 37
    }
  }) : null : null;
  return __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
    onClick: () => handleUserState('signin'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "sign in"), __jsx("button", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
    onClick: () => handleUserState('register'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "register")), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userDD,
    style: showUserDD,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "custom-hr",
    style: {
      backgroundColor: '#282828'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), showInDD));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token,
    userDD: state.userDD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__["setUserDD"], dispatch),
    resetUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__["resetUserDD"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NotSigned));

/***/ }),

/***/ "./components/newNavBar/signed/Signed.js":
/*!***********************************************!*\
  !*** ./components/newNavBar/signed/Signed.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ "./styles/newNavBar.module.css");
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_Notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/Notifications */ "./components/newNavBar/user/Notifications.js");
/* harmony import */ var _user_UserUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/UserUtilities */ "./components/newNavBar/user/UserUtilities.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\newNavBar\\signed\\Signed.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Signed = props => {
  const {
    0: userState,
    1: setUserState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleUserState = state => {
    if (state === userState) {
      setUserState(false);
    } else {
      setUserState(state);
    }
  };

  const showUserDD = userState ? {
    display: 'block'
  } : {
    display: 'none'
  };
  const showInDD = userState ? userState === 'notification' ? __jsx(_user_Notifications__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 40
    }
  }) : __jsx(_user_UserUtilities__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 60
    }
  }) : null;
  const username = props.currentUser ? props.currentUser.username : '';
  return __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
    onClick: () => handleUserState('notification'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notifContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/svg/bellW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bell,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nofifCount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "-"))), __jsx("button", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
    onClick: () => handleUserState('user'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userInfoContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, username), __jsx("img", {
    src: "/svg/ddW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.DDArrow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userDD,
    style: showUserDD,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "custom-hr",
    style: {
      backgroundColor: '#282828'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), showInDD));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token // alertNotif: state.alertNotif

  };
};

const mapDispatchToProps = dispatch => {
  return {// clearToken: bindActionCreators(clearToken, dispatch),
    // resetAlert: bindActionCreators(resetAlert, dispatch),
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Signed));

/***/ }),

/***/ "./components/newNavBar/user/Notifications.js":
/*!****************************************************!*\
  !*** ./components/newNavBar/user/Notifications.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ "./styles/newNavBar.module.css");
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/utilities/UserNotifList */ "./components/user/utilities/UserNotifList.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\newNavBar\\user\\Notifications.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Signed = props => {
  const {
    0: userState,
    1: setUserState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleUserState = state => {
    if (state === userState) {
      setUserState(false);
    } else {
      setUserState(state);
    }
  };

  const showUserDD = userState ? {
    display: 'block'
  } : {
    display: 'none'
  };
  const showInDD = userState ? userState === 'notification' ? __jsx(Notifications, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 40
    }
  }) : __jsx(UserUtilities, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 60
    }
  }) : null;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/svg/bellW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleBell,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(_user_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token // alertNotif: state.alertNotif

  };
};

const mapDispatchToProps = dispatch => {
  return {// clearToken: bindActionCreators(clearToken, dispatch),
    // resetAlert: bindActionCreators(resetAlert, dispatch),
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Signed));

/***/ }),

/***/ "./components/newNavBar/user/UserUtilities.js":
/*!****************************************************!*\
  !*** ./components/newNavBar/user/UserUtilities.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ "./styles/newNavBar.module.css");
/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\newNavBar\\user\\UserUtilities.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Signed = props => {
  const {
    0: userState,
    1: setUserState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleUserState = state => {
    if (state === userState) {
      setUserState(false);
    } else {
      setUserState(state);
    }
  };

  const showUserDD = userState ? {
    display: 'block'
  } : {
    display: 'none'
  };
  const showInDD = userState ? userState === 'notification' ? __jsx(Notifications, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 40
    }
  }) : __jsx(UserUtilities, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 60
    }
  }) : null;

  const logout = () => {
    localStorage.clear();
    props.clearToken();
  };

  const username = props.currentUser ? props.currentUser.username : '';
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, username), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/user/[username]",
    as: `/user/${decodeURIComponent(props.currentUser.username)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "neutralize-link",
    style: {
      color: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 73
    }
  }, "account details"))), __jsx("h3", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
    onClick: () => logout(),
    style: {
      color: 'rgb(254,52,77)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "sign out"));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token // alertNotif: state.alertNotif

  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearToken: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_4__["clearToken"], dispatch) // resetAlert: bindActionCreators(resetAlert, dispatch),

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Signed));

/***/ }),

/***/ "./components/post/Post.js":
/*!*********************************!*\
  !*** ./components/post/Post.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../schemas/mutations */ "./schemas/mutations.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/post.module.css */ "./styles/post.module.css");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/functions */ "./functions/functions.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\post\\Post.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Post = props => {
  const post = props.post;
  const color = post.color;
  const colorPalette = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_7__["palletteGenerator"])(color).colorPallette;

  const handleError = e => {// console.log(e)
  };

  const [savePostMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__["SAVE_POST"], {
    onError: handleError
  });

  const handleSavePost = async () => {
    if (!props.token) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_7__["triggerAlert"])('warning', 'sign in$: must be signed in to perform this action', props.setAlert, props.resetAlert);
      return null;
    }

    const result = await savePostMutation({
      variables: {
        user: props.currentUser._id,
        postId: post._id
      }
    });

    if (result) {
      props.setCurrentUserSP(props.currentUser.savedPosts.concat(post));
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_7__["triggerAlert"])('success', 'followed$: you are now following this post', props.setAlert, props.resetAlert);
    }
  };

  const handleShare = () => {
    Object(_functions_functions__WEBPACK_IMPORTED_MODULE_7__["triggerAlert"])('success', 'copied url$: copied url to dashboard', props.setAlert, props.resetAlert);
  };

  const mappedSkills = () => {
    let allSkills = [];

    for (const ind in post.skillNames) {
      allSkills.push(__jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/results/[searchQuery]",
        as: `/results/${encodeURIComponent(post.skillNames[ind])}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postSkillInsContainer} neutralize-link`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }
      }, __jsx("h4", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PSIName,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }
      }, post.skillNames[ind]), __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PSIStats,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }
      }, `${post.skillFills[ind]} / ${post.skillCapacities[ind]}`))));
    }

    return allSkills;
  };

  let cleanedTime = new Date(Number(post.time));
  cleanedTime = cleanedTime.toString().split(' '); // cleanedTime = cleanedTime.slice(1,4).join(' ') + ' ' + cleanedTime[4].split(':').slice(0,2).join(':')

  cleanedTime = cleanedTime.slice(1, 3).join(' ') + ', ' + cleanedTime[3];
  const descriptionHeight = props.short ? {
    maxHeight: '75px'
  } : null;

  if (props.stretch) {
    return __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postWrapper,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postColorIndicator,
      style: {
        backgroundColor: colorPalette.color
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHeaderWrapper,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postUtilitiesContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }
    }, __jsx("div", {
      onClick: () => handleSavePost(),
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIconContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }
    }, __jsx("svg", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIcon,
      fill: colorPalette.color,
      viewBox: "0 -28 512.00002 512",
      xmlns: "http://www.w3.org/2000/svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 33
      }
    }, __jsx("path", {
      d: "m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 152
      }
    }))), __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__["CopyToClipboard"], {
      onCopy: () => handleShare(),
      text: `http://localhost:3000/post/${encodeURIComponent(post.title)}`,
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIconContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    }, __jsx("svg", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIcon,
      style: {
        width: '20px',
        paddingRight: '5px',
        paddingLeft: '5px'
      },
      fill: colorPalette.color,
      viewBox: "0 -22 512 511",
      xmlns: "http://www.w3.org/2000/svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    }, __jsx("path", {
      d: "m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 210
      }
    })))), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHeaderStretch,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/user/[username]",
      as: `/user/${encodeURIComponent(post.user.username)}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHUserStretch} neutralize-link ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 33
      }
    }, __jsx("img", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHUIcon,
      src: "/svg/userB.svg",
      alt: "user",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 37
      }
    }), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 37
      }
    }, post.user.username))), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHDate,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, cleanedTime))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[title]",
      as: `/post/${encodeURIComponent(post.title)}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "neutralize-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postTitle} ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 56
      }
    }, post.title))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[title]",
      as: `/post/${encodeURIComponent(post.title)}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postDescription} neutralize-link ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`,
      style: descriptionHeight,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, post.description)), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postSkillsContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }, mappedSkills())));
  }

  return __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postColorIndicator,
    style: {
      backgroundColor: colorPalette.color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/user/${encodeURIComponent(post.user.username)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHUser} neutralize-link ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHUIcon,
    src: "/svg/userB.svg",
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, post.user.username))), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, cleanedTime)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[title]",
    as: `/post/${encodeURIComponent(post.title)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "neutralize-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postTitle} ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 52
    }
  }, post.title))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[title]",
    as: `/post/${encodeURIComponent(post.title)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postDescription} neutralize-link ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`,
    style: descriptionHeight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, post.description)), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postSkillsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, mappedSkills()), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postUtilitiesContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("div", {
    onClick: () => handleSavePost(),
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIconContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, __jsx("svg", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIcon,
    fill: colorPalette.color,
    viewBox: "0 -28 512.00002 512",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 144
    }
  }))), __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__["CopyToClipboard"], {
    onCopy: () => handleShare(),
    text: `http://localhost:3000/post/${encodeURIComponent(post.title)}`,
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIconContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, __jsx("svg", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIcon,
    style: {
      width: '20px',
      paddingRight: '5px',
      paddingLeft: '5px'
    },
    fill: colorPalette.color,
    viewBox: "0 -22 512 511",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 202
    }
  }))))));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setCurrentUserSP: _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__["setCurrentUserSP"],
  setAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_8__["setAlert"],
  resetAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_8__["resetAlert"]
})(Post));

/***/ }),

/***/ "./components/post/PostSmall.js":
/*!**************************************!*\
  !*** ./components/post/PostSmall.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../schemas/mutations */ "./schemas/mutations.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/functions */ "./functions/functions.js");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/post.module.css */ "./styles/post.module.css");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\post\\PostSmall.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const PostSmall = props => {
  const handleError = e => {
    console.log(e);
  }; // const [ deletePostMutation ] = useMutation(DELETE_POST, {
  //     onError: handleError
  // })


  const [removeSPMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__["REMOVE_SAVED_POST"], {
    onError: handleError
  });
  const p = props.post;
  const user = props.post.user ? props.post.user.username : props.user;
  const pallette = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_7__["palletteGenerator"])(p.color).colorPallette; // const handleRemove = async () => {
  //     const result = await deletePostMutation({
  //         variables: {postId: props.post._id}
  //     })
  //     if (result) {
  //         props.setCurrentUserPosts(props.currentUser.posts.filter(p => p._id !== props.post._id))
  //         triggerAlert('danger', `deleted $: deleted post '${p.title}'`, props.setAlert, props.resetAlert)
  //     }
  // }

  const handleSaveRemove = async () => {
    const result = await removeSPMutation({
      variables: {
        user: props.currentUser._id,
        postId: p._id
      }
    });

    if (result) {
      const newSavedPosts = props.currentUser.savedPosts.filter(post => post._id !== p._id);
      props.setCurrentUserSP(newSavedPosts);
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_7__["triggerAlert"])('danger', `unfollowed$: unfollowed post '${p.title}'`, props.setAlert, props.resetAlert);
    }
  };

  if (props.type === 'saved') {
    return __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postWrapperSm,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postColorIndicator,
      style: {
        backgroundColor: pallette.color
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postHeader,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/user/[username]",
      as: `/user/${encodeURIComponent(user)}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUser} neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }
    }, __jsx("img", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUIcon,
      src: "/svg/userB.svg",
      alt: "user",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 33
      }
    }), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 33
      }
    }, user)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[title]",
      as: `/post/${encodeURIComponent(p.title)}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "neutralize-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postTitle,
      style: {
        marginBottom: '7px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }, p.title)))), __jsx("div", {
      onClick: () => handleSaveRemove(),
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postSmRemove,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, "x"));
  }

  if (props.currentUser) {
    if (user === props.currentUser.username) {
      return __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postWrapperSm,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postColorIndicator,
        style: {
          backgroundColor: pallette.color
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postHeader,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/user/[username]",
        as: `/user/${encodeURIComponent(user)}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUser} neutralize-link`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 33
        }
      }, __jsx("img", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUIcon,
        src: "/svg/userB.svg",
        alt: "user",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 37
        }
      }), __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 37
        }
      }, user)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/post/[title]",
        as: `/post/${encodeURIComponent(p.title)}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: "neutralize-link",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 29
        }
      }, __jsx("h3", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postTitle,
        style: {
          marginBottom: '7px'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 33
        }
      }, p.title)))));
    }
  }

  return __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postWrapperSm,
    style: {
      gridTemplateColumns: '8px auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postColorIndicator,
    style: {
      backgroundColor: pallette.color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/user/[username]",
    as: `/user/${encodeURIComponent(user)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUser} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUIcon,
    src: "/svg/userB.svg",
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, user)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[title]",
    as: `/post/${encodeURIComponent(p.title)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "neutralize-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postTitle,
    style: {
      marginBottom: '7px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, p.title)))));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setCurrentUserPosts: _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__["setCurrentUserPosts"],
  setCurrentUserSP: _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__["setCurrentUserSP"],
  setAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__["setAlert"],
  resetAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__["resetAlert"]
})(PostSmall));

/***/ }),

/***/ "./components/text-field/InputHeader.js":
/*!**********************************************!*\
  !*** ./components/text-field/InputHeader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/inputHeader.module.css */ "./styles/inputHeader.module.css");
/* harmony import */ var _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\text-field\\InputHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const InputHeader = props => {
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  if (!props.info) {
    return __jsx("label", {
      htmlFor: props.inputFor,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 16
      }
    }, __jsx("h3", {
      className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoTitleText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 48
      }
    }, props.title));
  }

  const showInfo = expanded ? {
    display: 'block'
  } : {
    display: 'none'
  };
  const colorInfo = props.color === 'white' ? {
    textColor: '#282828',
    icon: '/svg/infoB.svg'
  } : {
    textColor: 'white',
    icon: '/svg/infoW.svg'
  };
  return __jsx("div", {
    className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formInfoContainer,
    style: {
      color: colorInfo.textColor
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoHeaderContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: props.inputFor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoTitleText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 49
    }
  }, props.title)), __jsx("img", {
    onClick: () => setExpanded(!expanded),
    src: colorInfo.icon,
    className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoIcon,
    alt: "info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoContent,
    style: showInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.children));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(InputHeader));

/***/ }),

/***/ "./components/user/form/Register.js":
/*!******************************************!*\
  !*** ./components/user/form/Register.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../schemas/mutations */ "./schemas/mutations.js");
/* harmony import */ var _text_field_InputHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../text-field/InputHeader */ "./components/text-field/InputHeader.js");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../functions/functions */ "./functions/functions.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ "./styles/user/user.module.css");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\form\\Register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Register = props => {
  const username = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('text');
  const password = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('password');
  const rePassword = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('password');
  const email = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('email');
  const referenceLink = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('url');

  const onError = e => {
    let cleanedMessage = e.message;
    console.log(referenceLink.fields.value);
    console.log(e.message);
    if (cleanedMessage.includes('username')) cleanedMessage = `username$: ${username.fields.value} is already being used`;
    if (cleanedMessage.includes('referenceLink')) cleanedMessage = `reference link$: ${referenceLink.fields.value} is already being used`;
    if (cleanedMessage.includes('email')) cleanedMessage = `email$: ${email.fields.value} is already being used`;
    Object(_functions_functions__WEBPACK_IMPORTED_MODULE_5__["triggerAlert"])('warning', cleanedMessage, props.setAlert, props.resetAlert);
  };

  const onLoginError = e => console.log(e);

  const [registerMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["CREATE_USER"], {
    onError
  });
  const [loginMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["LOGIN"], {
    onError: onLoginError
  });

  const handleSumbit = async e => {
    e.preventDefault();

    if (password.fields.value !== rePassword.fields.value) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_5__["triggerAlert"])('warning', 'password$: password and re-password did not match', props.setAlert, props.resetAlert);
      return null;
    }

    if (!username.fields.value.length || !password.fields.value.length || !rePassword.fields.value.length || !referenceLink.fields.value.length) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_5__["triggerAlert"])('warning', 'all$: all fields must be filled', props.setAlert, props.resetAlert);
      return null;
    }

    const result = await registerMutation({
      variables: {
        username: username.fields.value,
        password: password.fields.value,
        referenceLink: referenceLink.fields.value
      }
    });

    if (result) {
      if (props.changeMenuItem) {
        props.changeMenuItem(null);
      }

      const loginResult = await loginMutation({
        variables: {
          username: username.fields.value,
          password: password.fields.value
        }
      });
      const token = loginResult.data.login.value;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username.fields.value);
      props.setToken(token);
      username.reset();
      password.reset();
      rePassword.reset();
      email.reset();
      referenceLink.reset();
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_5__["triggerAlert"])('success', 'registered$: account successfully created. signing you in now.', props.setAlert, props.resetAlert);

      try {
        props.onSuccess();
      } catch {}
    }
  };

  const bgStyle = props.noBG ? {
    backgroundColor: '#282828'
  } : null;
  return __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userFormContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "register"), __jsx("form", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userForm,
    onSubmit: e => handleSumbit(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputFor: "SI-username",
    info: false,
    title: "username",
    color: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, username.fields, {
    id: "SI-username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  })), __jsx(_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputFor: "SI-password",
    info: false,
    title: "password",
    color: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, password.fields, {
    id: "SI-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  })), __jsx(_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputFor: "SI-rePassword",
    info: false,
    title: "re-type password",
    color: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, rePassword.fields, {
    id: "SI-rePassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  })), __jsx(_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputFor: "SI-referenceLink",
    info: true,
    title: "resume link",
    color: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("p", {
    style: {
      margin: 0,
      marginBottom: '5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "link on your user page used as a resume to demonstrate your ability"), __jsx("p", {
    style: {
      margin: 0,
      marginBottom: '5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 65
    }
  }, "always view another users portafolio link before working with them")), __jsx("ul", {
    style: {
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, "sites recommended: ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 48
    }
  }, "LinkedIn"), ", ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 75
    }
  }, "Indeed"), ", ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 100
    }
  }, "GitHub"), ", or ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 128
    }
  }, "Facebook")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, "to further ensure your portafolio link is trustworthy, link your Unilous accout from your portafolio link"))), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, referenceLink.fields, {
    id: "SI-referenceLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFSubmit,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 63
    }
  }, "register"))));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  setAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__["setAlert"],
  resetAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__["resetAlert"],
  setToken: _redux_reducers_token__WEBPACK_IMPORTED_MODULE_7__["setToken"]
})(Register));

/***/ }),

/***/ "./components/user/form/SignIn.js":
/*!****************************************!*\
  !*** ./components/user/form/SignIn.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../schemas/mutations */ "./schemas/mutations.js");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../functions/functions */ "./functions/functions.js");
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var _text_field_InputHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../text-field/InputHeader */ "./components/text-field/InputHeader.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ "./styles/user/user.module.css");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\form\\SignIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const SignIn = props => {
  const username = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_4__["useField"])('text');
  const password = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_4__["useField"])('password');

  const onError = e => {
    let cleanedMessage = e.message;
    console.log(cleanedMessage);
    cleanedMessage = cleanedMessage.split(':');
    cleanedMessage = cleanedMessage.slice(1, cleanedMessage.length).join('$:');
    Object(_functions_functions__WEBPACK_IMPORTED_MODULE_4__["triggerAlert"])('warning', cleanedMessage, props.setAlert, props.resetAlert);
  };

  const [signInMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["LOGIN"], {
    onError
  });

  const handleSumbit = async e => {
    e.preventDefault();
    const result = await signInMutation({
      variables: {
        username: username.fields.value,
        password: password.fields.value
      }
    });

    if (result) {
      if (props.changeMenuItem) {
        props.changeMenuItem(null);
      }

      const token = result.data.login.value;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username.fields.value);
      username.reset();
      password.reset();
      props.setToken(token);

      try {
        props.onSuccess();
      } catch {}
    }
  };

  const bgStyle = props.noBG ? {
    backgroundColor: '#282828'
  } : null;
  return __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userFormContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "sign in"), __jsx("form", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userForm,
    onSubmit: e => handleSumbit(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    inputFor: "SI-username",
    info: false,
    title: "username",
    color: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, username.fields, {
    id: "SI-username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })), __jsx(_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    inputFor: "SI-password",
    info: false,
    title: "password",
    color: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, password.fields, {
    id: "SI-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFSubmit,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 63
    }
  }, "sign in"))));
}; // const mapStateToProps = (state) => {
// 	return {
// 	}
// }


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  setToken: _redux_reducers_token__WEBPACK_IMPORTED_MODULE_5__["setToken"],
  setAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_7__["setAlert"],
  resetAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_7__["resetAlert"]
})(SignIn));

/***/ }),

/***/ "./components/user/utilities/Notif.js":
/*!********************************************!*\
  !*** ./components/user/utilities/Notif.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _post_PostSmall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post/PostSmall */ "./components/post/PostSmall.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../schemas/mutations */ "./schemas/mutations.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../functions/functions */ "./functions/functions.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\utilities\\Notif.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Notif = props => {
  const handleError = e => {
    console.log(e);
  };

  const [acceptNotif] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__["ACCEPT_NOTIFICATION"], {
    onError: handleError
  });
  const [declineNotif] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__["DECLINE_NOTIFICATION"], {
    onError: handleError
  });
  const [answerQuestion] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__["ANSWER_QUESTION"], {
    onError: handleError
  });
  const answer = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_8__["useField"])('text');

  const handleAnswer = async () => {
    const result = await answerQuestion({
      variables: {
        notificationId: props.notif._id,
        response: answer.fields.value
      }
    });

    if (result) {
      const newNotifications = props.currentUser.notifications.map(n => n._id === props.notif._id ? result.data.answerQuestion : n);
      props.setCurrentUserNotifications(newNotifications);
      answer.reset();
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_8__["triggerAlert"])('success', `replied$: you have replied to ${props.notif.userFrom.username}'s question`, props.setAlert, props.resetAlert);
    }
  };

  const handleAccept = async () => {
    const accept = await acceptNotif({
      variables: {
        notificationId: props.notif._id
      }
    });

    if (accept) {
      const newNotifications = props.currentUser.notifications.map(n => n._id === props.notif._id ? accept.data.acceptNotification : n);
      props.setCurrentUserNotifications(newNotifications);
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_8__["triggerAlert"])('success', `accepted$: you have accepted ${props.notif.userFrom.username} to your team`, props.setAlert, props.resetAlert);
    }
  };

  const handleDecline = async () => {
    const decline = await declineNotif({
      variables: {
        notificationId: props.notif._id
      }
    });

    if (decline) {
      const newNotifications = props.currentUser.notifications.map(n => n._id === props.notif._id ? decline.data.declineNotification : n);
      props.setCurrentUserNotifications(newNotifications);
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_8__["triggerAlert"])('danger', `declined$: you have declined ${props.notif.userFrom.username}'s request to join`, props.setAlert, props.resetAlert);
    }
  };

  const notif = props.notif;
  const notifStatusColor = notif.accepted === null ? 'rgb(226,184,59)' : notif.accepted ? notif.post ? 'rgb(52,166,95)' : '#8b8b8b' : 'rgb(254,52,77)';

  if (notif.userFrom.username === props.currentUser.username) {
    if (notif.accepted) {
      if (notif.question) {
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }
        }, "sent question"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 33
          }
        }, "to:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 33
          }
        }, notif.userTo.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-content-secondary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 29
          }
        }, "question"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }
        }, notif.question)), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 29
          }
        }, "answered"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }
        }, notif.answer)));
      }

      if (notif.post) {
        const GCLinkStats = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_8__["websiteStats"])(notif.post.contactLink);
        const cleanedLink = notif.post.contactLink.split('/')[2];
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }
        }, "sent join request"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 33
          }
        }, "to:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 33
          }
        }, notif.userTo.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-STJ-container",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "n-notif-STJ",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 29
          }
        }, "skill to join: ", __jsx("strong", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 73
          }
        }, skillToJoin))), __jsx("div", {
          className: "n-notif-content-secondary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }
        }, __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }
        }, notif.message)), __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }
        }, "group/contact link"), __jsx("div", {
          className: "n-button-container",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }
        }, __jsx("a", {
          href: notif.post.contactLink,
          className: "n-join-link n-SH",
          style: {
            backgroundColor: GCLinkStats.color
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: GCLinkStats.icon,
          className: "n-JL-icon",
          alt: GCLinkStats.title,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 33
          }
        }), __jsx("h3", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 33
          }
        }, cleanedLink))));
      } else {
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }
        }, "sent message"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 33
          }
        }, "to:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 33
          }
        }, notif.userTo.username))), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 29
          }
        }, "message"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 29
          }
        }, notif.message)));
      }
    }

    if (notif.accepted === null) {
      if (notif.question) {
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }
        }, "sent question"), __jsx("div", {
          className: "n-notif-user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 29
          }
        }, "to:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 29
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 29
          }
        }, notif.userTo.username)), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 29
          }
        }, "question"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 29
          }
        }, notif.question)));
      } else {
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 25
          }
        }, "sent join request"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 33
          }
        }, "to:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 33
          }
        }, notif.userTo.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-STJ-container",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "n-notif-STJ",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 29
          }
        }, "skill to join: ", __jsx("strong", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 73
          }
        }, skillToJoin))), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }
        }, __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 29
          }
        }, notif.message)));
      }
    } else {
      if (notif.question) {
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }
        }, "sent question"), __jsx("div", {
          className: "n-notif-user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 29
          }
        }, "to:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 29
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 29
          }
        }, notif.userTo.username)), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 29
          }
        }, "question"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 29
          }
        }, notif.question)));
      } else {
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }
        }, "sent join request"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 33
          }
        }, "to:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 33
          }
        }, notif.userTo.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-STJ-container",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "n-notif-STJ",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 29
          }
        }, "skill to join: ", __jsx("strong", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 73
          }
        }, skillToJoin))), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 25
          }
        }, __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 29
          }
        }, notif.message)));
      }
    }
  } else {
    if (notif.accepted) {
      if (notif.question) {
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 25
          }
        }, "recieved question"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 33
          }
        }, "from:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 33
          }
        }, notif.userFrom.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-content-secondary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 29
          }
        }, "question"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 29
          }
        }, notif.question)), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 29
          }
        }, "answered"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 29
          }
        }, notif.answer)));
      }

      if (notif.post) {
        const GCLinkStats = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_8__["websiteStats"])(notif.post.contactLink);
        const cleanedLink = notif.post.contactLink.split('/')[2];
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 25
          }
        }, "recieved join request"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 33
          }
        }, "from:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 33
          }
        }, notif.userFrom.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-STJ-container",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "n-notif-STJ",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 29
          }
        }, "skill to join: ", __jsx("strong", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 73
          }
        }, skillToJoin))), __jsx("div", {
          className: "n-notif-content-secondary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 25
          }
        }, __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 29
          }
        }, notif.message)), __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 25
          }
        }, "sent group/contact link"), __jsx("div", {
          className: "n-button-container",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 25
          }
        }, __jsx("a", {
          href: notif.post.contactLink,
          className: "n-join-link n-SH",
          style: {
            backgroundColor: GCLinkStats.color
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: GCLinkStats.icon,
          className: "n-JL-icon",
          alt: GCLinkStats.title,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 33
          }
        }), __jsx("h3", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 33
          }
        }, cleanedLink))));
      } else {
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }
        }, "recieved message"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 33
          }
        }, "from:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 33
          }
        }, notif.userFrom.username))), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 29
          }
        }, "message"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 29
          }
        }, notif.message)));
      }
    }

    if (notif.accepted === null) {
      if (notif.question) {
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 25
          }
        }, "recieved question"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 33
          }
        }, "from:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 33
          }
        }, notif.userFrom.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-content-secondary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 29
          }
        }, "question"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 29
          }
        }, notif.question)), __jsx("div", {
          className: "n-notif-reply",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 29
          }
        }, "reply"), __jsx("textarea", _extends({
          className: "n-notif-reply-field"
        }, answer.fields, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 29
          }
        })), __jsx("div", {
          className: "n-button-container",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 29
          }
        }, __jsx("h3", {
          onClick: () => handleAnswer(),
          className: "n-AoD-option n-SH",
          style: {
            backgroundColor: 'rgb(52,166,95)'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 33
          }
        }, "answer"))));
      } else {
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 25
          }
        }, "recieved join request"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 33
          }
        }, "from:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 33
          }
        }, notif.userFrom.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-STJ-container",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "n-notif-STJ",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 29
          }
        }, "skill to join: ", __jsx("strong", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 73
          }
        }, skillToJoin))), __jsx("div", {
          className: "n-notif-content-secondary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 29
          }
        }, "message"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 29
          }
        }, notif.message)), __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 25
          }
        }, "accept"), __jsx("div", {
          className: "n-notif-AoD",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 25
          }
        }, __jsx("h3", {
          onClick: () => handleDecline(),
          className: "n-AoD-option n-SH",
          style: {
            backgroundColor: 'rgb(254,52,77)'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 29
          }
        }, "decline"), __jsx("h3", {
          onClick: () => handleAccept(),
          className: "n-AoD-option n-SH",
          style: {
            backgroundColor: 'rgb(52,166,95)'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 29
          }
        }, "accept")));
      }
    } else {
      if (notif.question) {
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 25
          }
        }, "recieved question"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 33
          }
        }, "from:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 33
          }
        }, notif.userFrom.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 29
          }
        }, "question"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 29
          }
        }, notif.question)));
      } else {
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return __jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385,
            columnNumber: 21
          }
        }, __jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 25
          }
        }, "recieved join request"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/user/[username]",
          as: `/user/${notif.userTo.username}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: "n-notif-user neutralize-link",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "NU-label",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 33
          }
        }, "to:"), __jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 33
          }
        }), __jsx("div", {
          className: "NU-username",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 33
          }
        }, notif.userTo.username))), __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: notif.post,
          user: notif.userTo.username,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "n-notif-STJ-container",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "n-notif-STJ",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 29
          }
        }, "skill to join: ", __jsx("strong", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 73
          }
        }, skillToJoin))), __jsx("div", {
          className: "n-notif-content-primary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 29
          }
        }, "message"), __jsx("p", {
          className: "n-notif-message",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 29
          }
        }, notif.message)));
      }
    }
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setCurrentUserNotifications: _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_6__["setCurrentUserNotifications"],
  setAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_7__["setAlert"],
  resetAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_7__["resetAlert"]
})(Notif));

/***/ }),

/***/ "./components/user/utilities/UserNotifList.js":
/*!****************************************************!*\
  !*** ./components/user/utilities/UserNotifList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../schemas/queries */ "./schemas/queries.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _Notif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Notif */ "./components/user/utilities/Notif.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Loading */ "./components/Loading.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ "./styles/user/user.module.css");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../styles/user/userUtilities.module.css */ "./styles/user/userUtilities.module.css");
/* harmony import */ var _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\utilities\\UserNotifList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const UserNotifList = props => {
  // const notifsListQuery = useQuery(LIST_OF_NOTIFICATIONS, {
  //     variables: {notifications: props.currentUser.notifications.map(n => n._id)}
  // })
  // console.log(notifsListQuery)
  // const notifsListQuery = apolloClient.query({
  //     query: LIST_OF_NOTIFICATIONS,
  //     variables: {notifications: props.currentUser.notifications.map(n => n._id)}
  // }).catch(err => console.log(err))
  const {
    0: sentFilter,
    1: setSentFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('to you');
  const {
    0: showSFDD,
    1: setShowSFDD
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: statusFilter,
    1: setStatusFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('pending');
  const {
    0: showStatusDD,
    1: setShowStatusDD
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // const notifsListConditions = (query, reducer) => {
  //     if (!query) { return null }
  //     if (reducer.length === 0) { return null }
  //     if (reducer[0].userTo) {
  //         if (query._id === reducer[0]._id ) { return null }
  //     }
  //     return query
  // }
  // const notifsList = notifsListConditions(notifsListQuery.data.listOfNotifications, props.currentUser.notifications)
  // useEffect(() => {
  //     if (notifsList) {
  //         props.setCurrentUserNotifications(notifsList)
  //     }
  // }, [notifsList, props, props.setCurrentUserNotifications])

  if (props.currentUser.notifications.length > 0) {
    if (!props.currentUser.notifications[0].userTo) {
      return __jsx("div", {
        style: {
          gridColumn: '1/3'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, __jsx("div", {
        style: {
          height: '5vh'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }
      }), __jsx(_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: "white",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      }));
    }
  }

  const Filter = () => {
    const sentOptions = () => {
      const allOptions = ['from you', 'to you'];

      const onOptionClick = option => {
        setSentFilter(option);
        setShowSFDD(!showSFDD);
      };

      return allOptions.map(o => o !== sentFilter ? __jsx("div", {
        onClick: () => onOptionClick(o),
        className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFDDOption,
        key: `SFDD${o}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 59
        }
      }, o) : null);
    };

    const sentDD = showSFDD ? __jsx("div", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFropdown,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFSplitter,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }), sentOptions()) : null;

    const statusOptions = () => {
      const allOptions = ['all', 'accepted', 'declined', 'pending', 'messages'];

      const onOptionClick = option => {
        setStatusFilter(option);
        setShowStatusDD(!showStatusDD);
      };

      return allOptions.map(o => o !== statusFilter ? __jsx("div", {
        onClick: () => onOptionClick(o),
        className: `${o}-option ${_styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFDDOption}`,
        key: `StatusDD${o}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 65
        }
      }, o) : null);
    };

    const statusDD = showStatusDD ? __jsx("div", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFDropdown,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFSplitter,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 25
      }
    }), statusOptions()) : null;
    return __jsx("div", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.notifFilterContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFCreatorContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, __jsx("h4", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFLabel,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }, "status"), __jsx("div", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFOptionContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }, __jsx("div", {
      onClick: () => setShowStatusDD(!showStatusDD),
      className: `${statusFilter}-option ${_styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFOption}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 29
      }
    }, statusFilter), statusDD)), __jsx("div", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFCreatorContainer,
      style: {
        marginLeft: '15px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("h4", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFLabel,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, "sent"), __jsx("div", {
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFOptionContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, __jsx("div", {
      onClick: () => setShowSFDD(!showSFDD),
      className: _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.NFOption,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 25
      }
    }, sentFilter), sentDD)));
  };

  const statusConditions = notif => {
    if (statusFilter === 'all') return true;
    const notifStatus = notif.accepted === null ? 'pending' : notif.accepted ? notif.post ? 'accepted' : 'messages' : 'declined';
    if (statusFilter === notifStatus) return true;
    return false;
  };

  const sentConditions = notif => {
    if (sentFilter === 'all') return true;
    const sentStatus = notif.userFrom.username === props.currentUser.username ? 'from you' : 'to you';
    if (sentFilter === sentStatus) return true;
    return false;
  };

  const showNotifications = props.currentUser.notifications.map(n => {
    if (statusConditions(n) && sentConditions(n)) {
      return __jsx(_Notif__WEBPACK_IMPORTED_MODULE_5__["default"], {
        notif: n,
        key: `UN${n._id}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 20
        }
      });
    }

    return null;
  }).reverse();
  return __jsx("div", {
    className: "userUtil-notif",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(Filter, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      height: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      display: 'grid',
      rowGap: '10px',
      width: '95%',
      margin: 'auto',
      marginTop: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, showNotifications), __jsx("div", {
    style: {
      height: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUserNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_4__["setCurrentUserNotifications"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(UserNotifList));

/***/ }),

/***/ "./functions/functions.js":
/*!********************************!*\
  !*** ./functions/functions.js ***!
  \********************************/
/*! exports provided: triggerAlert, websiteStats, useField, palletteGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerAlert", function() { return triggerAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "websiteStats", function() { return websiteStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useField", function() { return useField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palletteGenerator", function() { return palletteGenerator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\functions\\functions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const triggerAlert = (type, message, setAlert, resetAlert) => {
  // triggerAlert('warning', 'success: alert bar is working', props.setAlert, props.resetAlert)
  const cleanedMessage = __jsx("p", {
    style: {
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 28
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 51
    }
  }, message.split('$:')[0]), ": ", message.split('$:')[1]);

  if (type === 'success') {
    setAlert({
      color: 'rgb(52,166,95)',
      textColor: 'white',
      message: cleanedMessage
    });
  }

  if (type === 'warning') {
    setAlert({
      color: 'rgb(226,184,59)',
      textColor: 'white',
      message: cleanedMessage
    });
  }

  if (type === 'danger') {
    setAlert({
      color: 'rgb(254,52,77)',
      textColor: 'white',
      message: cleanedMessage
    });
  }
};
const websiteStats = url => {
  const start = url.split('/')[2] ? url.split('/')[2] : '';

  if (start.includes('unilous')) {
    return {
      icon: '/svg/logo/logoW.svg',
      color: '#282828',
      title: 'Unilous'
    };
  }

  if (start.includes('discord')) {
    return {
      icon: '/svg/websites/discord.svg',
      color: '#7289DA',
      title: 'Discord'
    };
  }

  if (start.includes('trello')) {
    return {
      icon: '/svg/websites/trello.svg',
      color: '#0079BF',
      title: 'Trello'
    };
  }

  if (start.includes('whatsapp')) {
    return {
      icon: '/svg/websites/whatsapp.svg',
      color: '#25D366',
      title: 'WhatsApp'
    };
  }

  if (start.includes('monday')) {
    return {
      icon: 'https://i.imgur.com/bgaQZc9.png',
      color: '#333333',
      title: 'Monday'
    };
  }

  if (start.includes('slack')) {
    return {
      icon: '/svg/websites/slack.svg',
      color: '#4A154B',
      title: 'Slack'
    };
  }

  if (start.includes('linkedin')) {
    return {
      icon: '/svg/websites/linkedin.svg',
      color: 'rgb(40,103,178)',
      title: 'LinkedIn'
    };
  }

  if (start.includes('facebook')) {
    return {
      icon: '/svg/websites/facebook.svg',
      color: 'rgb(66,103,178)',
      title: 'Facebook'
    };
  }

  if (start.includes('indeed')) {
    return {
      icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgohire-website.s3.amazonaws.com%2Fimg%2Fintegration-logos%2Findeed-icon.jpg&f=1&nofb=1',
      color: '#282828',
      title: 'Indeed'
    };
  }

  if (start.includes('github')) {
    return {
      icon: '/svg/websites/gitHub.svg',
      color: '#333',
      title: 'GitHub'
    };
  }

  return {
    icon: '/svg/websites/internet.svg',
    color: '#484848',
    title: 'unknown url'
  };
};
const useField = type => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onChange = event => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    fields: {
      type,
      value,
      onChange
    },
    reset
  };
};
const palletteGenerator = primaryColor => {
  const color = primaryColor;
  const colors = color.split('(')[1].split(')')[0].split(',').map(c => Number(c));
  const higherColor = `rgb(${colors.map(c => c + 30).join(',')})`;
  let isDark = (colors[0] + colors[1] + colors[2]) / 3 < 127 ? true : false; // const isDark = false

  const colorPallette = isDark ? {
    textColor: 'white',
    color,
    higherColor // userIcon: userIconW,
    // handshakeIcon: handshakeIconW,
    // plusIcon: plusIconW,
    // shareIcon: shareIconW,
    // shrinkIcon: shrinkW,
    // colored: {
    //     heartIcon: <svg fill={color} viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>,
    //     shareIcon: <svg fill={color} viewBox="0 -22 512 511" xmlns="http://www.w3.org/2000/svg"><path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0"/></svg>,
    //     handshakeIcon: <svg fill={color} id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m386.158 8.733c-5.858-5.858-15.355-5.858-21.213 0l-36.478 36.478c-19.923-10.769-45.386-7.748-62.199 9.065l-69.416 69.416c-14.041 14.041-14.041 36.806 0 50.846 14.041 14.041 36.806 14.041 50.846 0l25.09-25.09c38.912 32.448 92.273 42.6 140.591 26.252l66.82 66.82c8.376-18.192 5.834-40.216-7.65-56.069l35.058-35.058c5.858-5.858 5.858-15.355 0-21.213-.101-.101-.211-.187-.315-.284l.015-.015z"/><path d="m276.459 400.011c-14.041-14.041-36.806-14.041-50.847 0 14.041-14.041 14.041-36.806 0-50.846-14.041-14.041-36.806-14.041-50.847 0 14.041-14.041 14.041-36.806 0-50.846-14.041-14.041-36.806-14.041-50.846 0 14.041-14.041 14.041-36.806 0-50.846-14.041-14.041-36.806-14.041-50.847 0l-46.272 46.272c-14.041 14.041-14.041 36.806 0 50.847 14.041 14.041 36.806 14.041 50.846 0-14.041 14.041-14.041 36.806 0 50.846 14.041 14.041 36.806 14.041 50.846 0-14.041 14.041-14.041 36.806 0 50.847 14.041 14.041 36.806 14.041 50.846 0-14.041 14.041-14.041 36.806 0 50.846 14.041 14.041 36.806 14.041 50.846 0l46.272-46.272c14.044-14.043 14.044-36.807.003-50.848z"/><path d="m276.16 188.504-7.248 7.248c-25.715 25.715-67.558 25.715-93.273 0s-25.715-67.558 0-93.273l57.514-57.514c-16.157-6.188-34.547-4.891-49.768 3.892l-36.329-36.329c-5.858-5.858-15.355-5.858-21.213 0l-121.45 121.449c-5.858 5.858-5.858 15.355 0 21.213l36.329 36.329c-8.783 15.221-10.08 33.611-3.892 49.768l15.029-15.029c25.715-25.715 67.558-25.715 93.273 0 9.374 9.374 15.315 20.895 17.854 32.992 12.098 2.54 23.618 8.48 32.992 17.854s15.314 20.895 17.854 32.993c12.098 2.54 23.618 8.48 32.992 17.853 9.374 9.374 15.315 20.895 17.854 32.992 12.098 2.54 23.618 8.48 32.992 17.854 25.715 25.715 25.715 67.558 0 93.273l-18.562 18.562 6.497 6.497c14.041 14.041 36.806 14.041 50.847 0 14.041-14.041 14.041-36.806 0-50.847 14.041 14.041 36.806 14.041 50.847 0 14.041-14.041 14.041-36.806 0-50.847 14.041 14.041 36.806 14.041 50.847 0 14.041-14.041 14.041-36.806 0-50.847 14.041 14.041 36.806 14.041 50.847 0 14.041-14.041 14.041-36.806 0-50.847l-84.475-84.475c-43.996 9.707-89.992 2.097-128.358-20.761z"/></g></svg>,
    // }

  } : {
    textColor: '#282828',
    color,
    higherColor // userIcon: userIconB,
    // handshakeIcon: handshakeIconB,
    // plusIcon: plusIconB,
    // shareIcon: shareIconB,
    // shrinkIcon: shrinkB,
    // colored: {
    //     heartIcon: <svg fill={color} viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>,
    //     shareIcon: <svg fill={color} viewBox="0 -22 512 511" xmlns="http://www.w3.org/2000/svg"><path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0"/></svg>,
    //     handshakeIcon: <svg fill={color} id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m386.158 8.733c-5.858-5.858-15.355-5.858-21.213 0l-36.478 36.478c-19.923-10.769-45.386-7.748-62.199 9.065l-69.416 69.416c-14.041 14.041-14.041 36.806 0 50.846 14.041 14.041 36.806 14.041 50.846 0l25.09-25.09c38.912 32.448 92.273 42.6 140.591 26.252l66.82 66.82c8.376-18.192 5.834-40.216-7.65-56.069l35.058-35.058c5.858-5.858 5.858-15.355 0-21.213-.101-.101-.211-.187-.315-.284l.015-.015z"/><path d="m276.459 400.011c-14.041-14.041-36.806-14.041-50.847 0 14.041-14.041 14.041-36.806 0-50.846-14.041-14.041-36.806-14.041-50.847 0 14.041-14.041 14.041-36.806 0-50.846-14.041-14.041-36.806-14.041-50.846 0 14.041-14.041 14.041-36.806 0-50.846-14.041-14.041-36.806-14.041-50.847 0l-46.272 46.272c-14.041 14.041-14.041 36.806 0 50.847 14.041 14.041 36.806 14.041 50.846 0-14.041 14.041-14.041 36.806 0 50.846 14.041 14.041 36.806 14.041 50.846 0-14.041 14.041-14.041 36.806 0 50.847 14.041 14.041 36.806 14.041 50.846 0-14.041 14.041-14.041 36.806 0 50.846 14.041 14.041 36.806 14.041 50.846 0l46.272-46.272c14.044-14.043 14.044-36.807.003-50.848z"/><path d="m276.16 188.504-7.248 7.248c-25.715 25.715-67.558 25.715-93.273 0s-25.715-67.558 0-93.273l57.514-57.514c-16.157-6.188-34.547-4.891-49.768 3.892l-36.329-36.329c-5.858-5.858-15.355-5.858-21.213 0l-121.45 121.449c-5.858 5.858-5.858 15.355 0 21.213l36.329 36.329c-8.783 15.221-10.08 33.611-3.892 49.768l15.029-15.029c25.715-25.715 67.558-25.715 93.273 0 9.374 9.374 15.315 20.895 17.854 32.992 12.098 2.54 23.618 8.48 32.992 17.854s15.314 20.895 17.854 32.993c12.098 2.54 23.618 8.48 32.992 17.853 9.374 9.374 15.315 20.895 17.854 32.992 12.098 2.54 23.618 8.48 32.992 17.854 25.715 25.715 25.715 67.558 0 93.273l-18.562 18.562 6.497 6.497c14.041 14.041 36.806 14.041 50.847 0 14.041-14.041 14.041-36.806 0-50.847 14.041 14.041 36.806 14.041 50.847 0 14.041-14.041 14.041-36.806 0-50.847 14.041 14.041 36.806 14.041 50.847 0 14.041-14.041 14.041-36.806 0-50.847 14.041 14.041 36.806 14.041 50.847 0 14.041-14.041 14.041-36.806 0-50.847l-84.475-84.475c-43.996 9.707-89.992 2.097-128.358-20.761z"/></g></svg>,
    // }

  };
  return {
    colorPallette
  };
};

/***/ }),

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/*! exports provided: apolloClient, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apolloClient", function() { return apolloClient; });
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import ApolloClient, { HttpLink, InMemoryCache } from "apollo-boost"




 // https://unilous-graphql-backend.herokuapp.com/graphql
// https://unilous-back-end-dev.herokuapp.com/graphql
// https://projectu-back-end-2020.herokuapp.com/graphql
// https://unilous-back-end-nextjs.herokuapp.com/graphql

const httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__["createHttpLink"])({
  uri: 'https://unilous-back-end-nextjs.herokuapp.com/graphql'
});
const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])((_, {
  headers
}) => {
  let token = null;

  if (false) {}

  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: token ? `Unilous*2000 ${token}` : null
    })
  };
});
const apolloClient = new apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  link: authLink.concat(httpLink),
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]()
}); // const apolloClient = new ApolloClient({
//   uri: 'https://projectu-back-end-2020.herokuapp.com/graphql',
//   cache: new InMemoryCache(),
//   ssrMode: true
// })

/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_0__["withApollo"])(apolloClient));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/homePage.js":
/*!***************************!*\
  !*** ./pages/homePage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/homePage.module.css */ "./styles/pages/homePage.module.css");
/* harmony import */ var _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Contributer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contributer */ "./components/Contributer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../schemas/queries */ "./schemas/queries.js");
/* harmony import */ var _components_post_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/post/Post */ "./components/post/Post.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/reducers/userDD */ "./redux/reducers/userDD.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\pages\\homePage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const HomePage = props => {
  const listOfUsers = props.someUsers.map(u => __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/user/[username]",
    as: `/user/${u.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userIns} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userPrimary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, u.username), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userSecondary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "0 projects"))));
  const positionInCP = props.currentUser ? props.token ? props.currentUser.posts.length ? 2 : props.currentUser ? 1 : 0 : 0 : 0;
  const buttonsForCP = [__jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: () => props.setUserDD('signin'),
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Sign in"), __jsx("button", {
    onClick: () => props.setUserDD('register'),
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDL} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Register")), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/postformpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 40
    }
  }, "Create post"))), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: () => props.setUserDD('signin'),
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark}`,
    style: {
      opacity: 0.7,
      cursor: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Share post"))];
  const colorsForCP = [positionInCP >= 1 ? {
    color: 'rgb(52,166,95)'
  } : null, positionInCP >= 2 ? {
    color: 'rgb(52,166,95)'
  } : null, positionInCP >= 3 ? {
    color: 'rgb(52,166,95)'
  } : null];
  console.log(props.currentUser);
  const positionInJP = props.currentUser ? props.token ? props.currentUser.notifications.length ? 3 : props.currentUser ? 1 : 0 : 0 : 0;
  const buttonsForJP = [__jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: () => props.setUserDD('signin'),
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Sign in"), __jsx("button", {
    onClick: () => props.setUserDD('register'),
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDL} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Register")), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/results/all",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 39
    }
  }, "Find a project"))), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark}`,
    style: {
      opacity: 0.7,
      cursor: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Join a project")), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark}`,
    style: {
      opacity: 0.7,
      cursor: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Check notifications"))];
  const colorsForJP = [positionInJP >= 1 ? {
    color: 'rgb(52,166,95)'
  } : null, positionInJP >= 2 ? {
    color: 'rgb(52,166,95)'
  } : null, positionInJP >= 3 ? {
    color: 'rgb(52,166,95)'
  } : null, positionInJP >= 4 ? {
    color: 'rgb(52,166,95)'
  } : null];
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Unilous"), __jsx("meta", {
    property: "og:image",
    content: "https://i.imgur.com/d6bsnRx.png",
    key: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Looking to join or make a team, Unilous will help you make it happen! Join our skilled community of people looking to make something great.",
    key: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "navbar-height",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    style: {
      backgroundColor: '#282828'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rowContainer,
    style: {
      color: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.narrow}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.leftAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "Build your team, create your project"), __jsx("p", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lgPara,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, "Unilous is a platform uniquely designed for building teams. At the center of Unilous lies the project post which provides both the information a user would want to know about the project, and features necessary for an effective joining process."), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnLight} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons} neutralize-link`,
    href: "#CAPCard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, "Get started"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/results/[searchQuery]",
    as: "/results/all",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnLD} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 83
    }
  }, "Start browsing")))), __jsx("div", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imageBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.narrow} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buildYourTeamOuterBox}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buildYourTeamImage} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buildYourTeamInnerBox}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, __jsx(_components_post_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: props.post,
    short: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }))))), __jsx("div", {
    id: "CAPCard",
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rowContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    style: {
      justifySelf: 'end'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.leftAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, "Create a project"), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lgPara,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "The project serves as the vehicle of Unilous as it is the method to which the team is built. Projects are automatically displayed on our results page where they are ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 217
    }
  }, __jsx("a", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkDark,
    style: {
      opacity: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 232
    }
  }, "ordered on effectiveness and time of posting")), ". We  provide you with all of the necessary features to pitch your project in an attractive way all the while containing all of the necessary information the user would want."), __jsx("ol", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("li", {
    style: colorsForCP[0],
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardListItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, "Sign in or Register"), __jsx("li", {
    style: colorsForCP[1],
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardListItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, "Create post"), __jsx("li", {
    style: colorsForCP[2],
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardListItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx("span", {
    style: {
      opacity: 0.7
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 84
    }
  }, "(Optional)"), " Share it")), __jsx("div", {
    style: {
      height: '170px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }), buttonsForCP[positionInCP]), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    style: {
      justifySelf: 'start'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.leftAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, "Join a project"), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lgPara,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, "While the project is the vehicle of Unilous, its users make it move. Many of the projects posted are rough ideas on what it could be, by joining a project we encourage that the users joining work side by side with the creator to imagine something better. We offer a variety of projects ranging all fields and interests as Unilous was built with everyone in mind. Unilous has made its project joining process as ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 463
    }
  }, __jsx("a", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkDark,
    style: {
      opacity: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 478
    }
  }, "simple as it can be")), "."), __jsx("ol", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx("li", {
    style: colorsForJP[0],
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardListItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, "Sign in or Register"), __jsx("li", {
    style: colorsForJP[1],
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardListItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, "Find a project"), __jsx("li", {
    style: colorsForJP[2],
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardListItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, "Join on a specific skill on the project"), __jsx("li", {
    style: colorsForJP[3],
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardListItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, "Check notifications for the response")), __jsx("div", {
    style: {
      height: '170px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }), buttonsForJP[positionInJP]))), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "community",
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rowContainer} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.communityOrProjectsDiv}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.narrow}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.leftAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, "Network"), __jsx("p", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lgPara,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, "Unilous does the networking so you don't need to. We provide you with access to all of our talented users by directly browsing our users or indirectly posting projects for all of the potentially interested users to see. The Unilous community although with different interests and skill sets are all looking to create and be part of something great."), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/results/[searchQuery]",
    as: "/results/all",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 83
    }
  }, "Browse users")))), __jsx("div", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imageBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.narrow}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userBoxContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/svg/logo/logoW.svg",
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }), __jsx("h3", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  }, "Users")), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.usersContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, listOfUsers), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userFooter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, "more..."))))), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "projects",
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rowContainer} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.communityOrProjectsDiv}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.narrow}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.leftAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }, "Projects"), __jsx("p", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lgPara,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, "Unilus contains many different kinds of projects with all kinds of skills needed. Although they have different complexities and different skill requirements, all of them need a team. Project Unilous for example is also on display welcoming new members interested in contributing to it."), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/results/[searchQuery]",
    as: "/results/all",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: `${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnDark} ${_styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adjacentHalfWidthButtons} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 83
    }
  }, "Browse projects")))), __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imageBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _styles_pages_homePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.postContaiener,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 25
    }
  }, __jsx(_components_post_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: props.otherPosts[0],
    short: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 29
    }
  }))))));
};

HomePage.getInitialProps = async () => {
  const postQuery = await _lib_apollo__WEBPACK_IMPORTED_MODULE_6__["apolloClient"].query({
    query: _schemas_queries__WEBPACK_IMPORTED_MODULE_7__["FIND_POST"],
    variables: {
      title: 'Unilous'
    }
  }).catch(err => console.log(err));
  const postsQuery = await _lib_apollo__WEBPACK_IMPORTED_MODULE_6__["apolloClient"].query({
    query: _schemas_queries__WEBPACK_IMPORTED_MODULE_7__["SEARCH_POSTS"],
    variables: {
      filterString: '',
      postIds: [],
      eventQuery: null
    }
  }).catch(err => console.log(err));
  const someUsers = await _lib_apollo__WEBPACK_IMPORTED_MODULE_6__["apolloClient"].query({
    query: _schemas_queries__WEBPACK_IMPORTED_MODULE_7__["SOME_USERS"],
    variables: {
      skip: 0,
      first: 6
    }
  }).catch(err => console.log(err)); // console.log(postQuery)

  return {
    post: postQuery.data.findPost,
    otherPosts: postsQuery.data.searchPosts,
    someUsers: someUsers.data.someUsers
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_11__["setUserDD"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(HomePage));

/***/ }),

/***/ "./redux/reducers/alertNotif.js":
/*!**************************************!*\
  !*** ./redux/reducers/alertNotif.js ***!
  \**************************************/
/*! exports provided: setAlert, resetAlert, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAlert", function() { return setAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAlert", function() { return resetAlert; });
const setAlert = info => {
  return async dispatch => {
    dispatch({
      type: 'SET_ALERT',
      data: info
    });
  };
};
const resetAlert = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_ALERT'
    });
  };
};

const alertNotif = (state = {
  color: null,
  textColor: null,
  message: null
}, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.data;

    case 'RESET_ALERT':
      return {
        color: null,
        textColor: null,
        message: null
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (alertNotif);

/***/ }),

/***/ "./redux/reducers/currentUser.js":
/*!***************************************!*\
  !*** ./redux/reducers/currentUser.js ***!
  \***************************************/
/*! exports provided: setCurrentUser, setCurrentUserPosts, setCurrentUserSP, setCurrentUserNotifications, setPendingNotifications, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUserPosts", function() { return setCurrentUserPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUserSP", function() { return setCurrentUserSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUserNotifications", function() { return setCurrentUserNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPendingNotifications", function() { return setPendingNotifications; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const setCurrentUser = user => {
  return async dispatch => {
    dispatch({
      type: 'SET_CURRENT_USER',
      data: user
    });
  };
};
const setCurrentUserPosts = posts => {
  return async dispatch => {
    dispatch({
      type: 'SET_CU_POSTS',
      data: posts
    });
  };
};
const setCurrentUserSP = posts => {
  return async dispatch => {
    dispatch({
      type: 'SET_CU_SP',
      data: posts
    });
  };
};
const setCurrentUserNotifications = notifications => {
  return async dispatch => {
    dispatch({
      type: 'SET_CU_NOTIFICATIONS',
      data: notifications
    });
  };
};
const setPendingNotifications = amt => {
  return async dispatch => {
    dispatch({
      type: 'SET_CU_PN',
      data: amt
    });
  };
};

const currentUser = (state = null, action) => {
  switch (action.type) {
    case 'SET_CU_PN':
      return _objectSpread(_objectSpread({}, state), {}, {
        pendingNotifications: action.data
      });

    case 'SET_CURRENT_USER':
      return action.data;

    case 'SET_CU_POSTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.data
      });

    case 'SET_CU_SP':
      if (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          savedPosts: action.data
        });
      }

      return state;

    case 'SET_CU_NOTIFICATIONS':
      return _objectSpread(_objectSpread({}, state), {}, {
        notifications: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (currentUser);

/***/ }),

/***/ "./redux/reducers/token.js":
/*!*********************************!*\
  !*** ./redux/reducers/token.js ***!
  \*********************************/
/*! exports provided: setToken, clearToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearToken", function() { return clearToken; });
const setToken = token => dispatch => {
  return dispatch({
    type: 'SET_TOKEN',
    data: token
  });
};
const clearToken = () => dispatch => {
  return dispatch({
    type: 'CLEAR_TOKEN'
  });
};

const token = (state = null, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.data;

    case 'CLEAR_TOKEN':
      return null;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (token);

/***/ }),

/***/ "./redux/reducers/userDD.js":
/*!**********************************!*\
  !*** ./redux/reducers/userDD.js ***!
  \**********************************/
/*! exports provided: setUserDD, resetUserDD, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserDD", function() { return setUserDD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetUserDD", function() { return resetUserDD; });
const setUserDD = state => {
  return async dispatch => {
    dispatch({
      type: 'SET_USER_DD',
      data: state
    });
  };
};
const resetUserDD = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_USER_DD'
    });
  };
};

const userDD = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER_DD':
      return action.data;

    case 'RESET_USER_DD':
      return null;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userDD);

/***/ }),

/***/ "./schemas/mutations.js":
/*!******************************!*\
  !*** ./schemas/mutations.js ***!
  \******************************/
/*! exports provided: CREATE_POST, MAKE_NOTIFICATION, ACCEPT_NOTIFICATION, DECLINE_NOTIFICATION, CREATE_USER, LOGIN, SAVE_POST, REMOVE_SAVED_POST, ASK_QUESTION, ANSWER_QUESTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST", function() { return CREATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKE_NOTIFICATION", function() { return MAKE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCEPT_NOTIFICATION", function() { return ACCEPT_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLINE_NOTIFICATION", function() { return DECLINE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_USER", function() { return CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_POST", function() { return SAVE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SAVED_POST", function() { return REMOVE_SAVED_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASK_QUESTION", function() { return ASK_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANSWER_QUESTION", function() { return ANSWER_QUESTION; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_POST = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation addPost(
    $title: String!,
    $user: ID!,
    $contactLink: String!
    $skillNames: [String!]!,
    $skillCapacities: [Int!]!,
    $skillFills: [Int!]!,
    $description: String!,
    $color: String!,
    $imageLinks: [String!],
    $referenceLinks: [String!]
  ){
    addPost(
      title:$title,
      user:$user,
      contactLink: $contactLink,
      skillNames:$skillNames,
      skillCapacities:$skillCapacities,
      skillFills: $skillFills,
      description:$description,
      color:$color,
      imageLinks:$imageLinks,
      referenceLinks:$referenceLinks
    ){
      title
    }
  }
`; // export const DELETE_POST = gql`
//   mutation deletePost (
//     $postId: ID!
//   ) {
//     deletePost (postId: $postId)
//   }
// `

const MAKE_NOTIFICATION = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation makeNotification(
    $userFromId: ID!,
    $userToId: ID!,
    $message: String!,
    $postId: ID,
    $proposedContribution: [Int!]
  ){
    makeNotification(
      userFromId: $userFromId,
      userToId: $userToId,
      message: $message,
      postId: $postId,
      proposedContribution: $proposedContribution
    ){
      _id
    }
  }
`;
const ACCEPT_NOTIFICATION = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation acceptNotification($notificationId: ID!) {
    acceptNotification(notificationId: $notificationId) {
      userFrom {
        username
        _id
      }
      userTo {
        username
        _id
      }
      message
      post{
        title
        color
        skillNames
        skillFills
        skillCapacities
        _id
      }
      proposedContribution
      accepted
      _id
    }
  }
`;
const DECLINE_NOTIFICATION = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation declineNotification($notificationId: ID!) {
    declineNotification(notificationId: $notificationId) {
      userFrom {
        username
        _id
      }
      userTo {
        username
        _id
      }
      message
      post{
        title
        color
        skillNames
        skillFills
        skillCapacities
        _id
      }
      proposedContribution
      accepted
      _id
    }
  }
`;
const CREATE_USER = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation createUser($username: String!, $password: String!, $referenceLink: String!) {
    createUser(
      username: $username,
      password: $password,
      referenceLink: $referenceLink
    ){
      username
      password
    }
  }
`;
const LOGIN = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation login($username: String!, $password: String!){
    login(
      username: $username,
      password: $password
    ){
      value
    }
  }
`;
const SAVE_POST = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation savePostToUser (
    $user: ID!,
    $postId: ID!
  ) {
    savePostToUser (user: $user, postId: $postId) {
      username
    }
  }
`;
const REMOVE_SAVED_POST = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation removeSavedPost (
    $user: ID!,
    $postId: ID!
  ) {
    removeSavedPost (user: $user, postId: $postId)
  }
`;
const ASK_QUESTION = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation askQuestion (
    $userFromId: ID!,
    $userToId: ID!,
    $postId: ID!,
    $question: String!
  ){
    askQuestion (
      userFromId: $userFromId,
      userToId: $userToId,
      postId: $postId,
      question: $question
    ){
      userFrom {
        username
      }
      userTo {
        username
      }
      message
      post{
        title
        color
        skillNames
        skillFills
        skillCapacities
        _id
      }
      proposedContribution
      question
      answer
      accepted
      _id
    }
  }
`;
const ANSWER_QUESTION = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation answerQuestion (
    $notificationId: ID!,
    $response: String!
  ) {
    answerQuestion (
      notificationId: $notificationId,
      response: $response
    ){
      userFrom {
        username
      }
      userTo {
        username
      }
      message
      post{
        title
        color
        skillNames
        skillFills
        skillCapacities
        _id
      }
      proposedContribution
      question
      answer
      accepted
      _id
    }
  }
`;

/***/ }),

/***/ "./schemas/queries.js":
/*!****************************!*\
  !*** ./schemas/queries.js ***!
  \****************************/
/*! exports provided: LIST_OF_NOTIFICATIONS, SKILL_SEARCH, ME, LIST_OF_POSTS, FIND_POST, FIND_USER, ALL_USERS, SOME_USERS, ALL_POSTS, GET_POST_TITLES, SEARCH_POSTS, PENDING_NOTIFS, Q_AND_A_NOTIFS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_OF_NOTIFICATIONS", function() { return LIST_OF_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILL_SEARCH", function() { return SKILL_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ME", function() { return ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_OF_POSTS", function() { return LIST_OF_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_POST", function() { return FIND_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_USER", function() { return FIND_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_USERS", function() { return ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOME_USERS", function() { return SOME_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_POSTS", function() { return ALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_TITLES", function() { return GET_POST_TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_POSTS", function() { return SEARCH_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENDING_NOTIFS", function() { return PENDING_NOTIFS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q_AND_A_NOTIFS", function() { return Q_AND_A_NOTIFS; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const LIST_OF_NOTIFICATIONS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query listOfNotifications($notifications: [String!]) {
    listOfNotifications(notifications: $notifications) {
      userFrom {
        username
      }
      userTo {
        username
      }
      message
      post{
        title
        color
        contactLink
        skillNames
        skillFills
        skillCapacities
        _id
      }
      proposedContribution
      question
      answer
      accepted
      _id
    }
  }
`;
const SKILL_SEARCH = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query skillSearch($filter: String!) {
    skillSearch(filter: $filter) {
      name
      uses
    }
  }
`;
const ME = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query {
    me{
      username
      referenceLink
      primarySkills{
        name
      }
      secondarySkills{
        name
      }
      interests
      posts{
        title
        skillCapacities
        skillFills
        _id
      },
      notifications{
        userFrom{
          _id
        }
        userTo{
          _id
        }
        message
        post{
          title
          _id
        }
        proposedContribution
        accepted
      }
      _id

    }
  }
`;
const LIST_OF_POSTS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getListOfPosts($id_list: [String]) {
    getListOfPosts(idList: $id_list){
      title
      user{
        username
        _id
      }
      color
      skillFills
      skillCapacities
      _id
    }
  }
`;
const FIND_POST = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query findPost($title: String!){
    findPost(title: $title){
      title
      user {
        username
        _id
      }
      skillNames
      skillCapacities
      skillFills
      team
      time
      description
      color
      imageLinks
      referenceLinks
      _id
    }
  }
`;
const FIND_USER = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query findUser($username: String!){
    findUser(username: $username) {
      username
      password
      referenceLink
      primarySkills{
        name
      }
      secondarySkills{
        name
      }
      interests
      posts{
        _id
      }
      notifications {
        _id
      }
      savedPosts {
        _id
      }
      _id
    }
  }
`;
const ALL_USERS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query{
    allUsers{
      username
      _id
    }
  }
`;
const SOME_USERS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query someUsers($skip: Int!, $first: Int!){
    someUsers(skip: $skip, first: $first){
      username
    }
  }
`;
const ALL_POSTS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query{
    allPosts{
      title
      user{
        username
        _id
      }
      skillNames
      skillCapacities
      skillFills
      time
      description
      color
      imageLinks
      referenceLinks
      _id
    }
  }
`;
const GET_POST_TITLES = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query{
    allPosts{
      title
    }
  }
`;
const SEARCH_POSTS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query searchPosts($filterString: String!, $postIds: [String!], $eventQuery: String){
    searchPosts(filterString: $filterString, postIds: $postIds, eventQuery: $eventQuery){
      title
      user {
        username
        _id
      }
      skillNames
      skillCapacities
      skillFills
      time
      description
      color
      _id
    }
  }
`;
const PENDING_NOTIFS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query searchAwaitingNotifs($userId: ID!) {
    searchAwaitingNotifs(userId: $userId)
  }
`;
const Q_AND_A_NOTIFS = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query searchAnsweredQToPost ( $title: String! ) {
    searchAnsweredQToPost (
      title: $title
    ){
      userFrom{
        username
      }
      userTo {
        username
      }
      question
      answer
      _id
    }
  }
`;

/***/ }),

/***/ "./styles/inputHeader.module.css":
/*!***************************************!*\
  !*** ./styles/inputHeader.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"formInfoContainer": "inputHeader_formInfoContainer__yQbka",
	"infoHeaderContainer": "inputHeader_infoHeaderContainer__hQ-Ik",
	"infoTitleText": "inputHeader_infoTitleText__3xljl",
	"infoIconContainer": "inputHeader_infoIconContainer__3MxX3",
	"infoIcon": "inputHeader_infoIcon__3bTOz",
	"infoContent": "inputHeader_infoContent__1wOnw"
};


/***/ }),

/***/ "./styles/newNavBar.module.css":
/*!*************************************!*\
  !*** ./styles/newNavBar.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "newNavBar_container__2Sft9",
	"brandContainer": "newNavBar_brandContainer__1-Gj6",
	"name": "newNavBar_name__2cZ_q",
	"icon": "newNavBar_icon__2gLM0",
	"searchContainer": "newNavBar_searchContainer___EWSH",
	"magnifier": "newNavBar_magnifier__3UK8d",
	"searchBtn": "newNavBar_searchBtn__QfuW_",
	"searchBar": "newNavBar_searchBar__VBb7k",
	"CPContainer": "newNavBar_CPContainer__2uIk_",
	"plus": "newNavBar_plus__3GwQU",
	"CPText": "newNavBar_CPText__2jre0",
	"userWrapper": "newNavBar_userWrapper__2wwp5",
	"userContainer": "newNavBar_userContainer__1fGEv",
	"userOption": "newNavBar_userOption__3bZ1i",
	"notifContainer": "newNavBar_notifContainer__3DpPd",
	"titleBell": "newNavBar_titleBell__1eWfw",
	"bell": "newNavBar_bell__3kD-7",
	"nofifCount": "newNavBar_nofifCount__1bCwb",
	"userInfoContainer": "newNavBar_userInfoContainer__1XS43",
	"username": "newNavBar_username__EwHW0",
	"DDArrow": "newNavBar_DDArrow__14xsQ",
	"userDD": "newNavBar_userDD__2-K-L",
	"user": "newNavBar_user__1RciR",
	"signOption": "newNavBar_signOption__3T2F-",
	"containerM": "newNavBar_containerM__2Ijia",
	"brandContainerM": "newNavBar_brandContainerM__3ITE5",
	"navItem": "newNavBar_navItem__GLwPu",
	"navIcon": "newNavBar_navIcon__3nyDw",
	"subNavContainer": "newNavBar_subNavContainer__3qUQk",
	"searchContainerM": "newNavBar_searchContainerM__2_nBD",
	"menuContainer": "newNavBar_menuContainer__3mRBD",
	"moreContainer": "newNavBar_moreContainer__1XvUZ",
	"titleMore": "newNavBar_titleMore__1mMGa",
	"more": "newNavBar_more__2JgEp",
	"SNIContainer": "newNavBar_SNIContainer__1y6pO",
	"notifContainerM": "newNavBar_notifContainerM__17-U2",
	"ddOption": "newNavBar_ddOption__1fqjm"
};


/***/ }),

/***/ "./styles/pages/contact.module.css":
/*!*****************************************!*\
  !*** ./styles/pages/contact.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"test": "contact_test__a5Z7l",
	"contactsContainer": "contact_contactsContainer__35iq5",
	"contactContainer": "contact_contactContainer__5ABof",
	"contactHeader": "contact_contactHeader__2GFmk",
	"CHIcon": "contact_CHIcon__1y-_Z",
	"CHName": "contact_CHName__1KtYU",
	"profileImage": "contact_profileImage__2sfPy",
	"contactInfoContainer": "contact_contactInfoContainer__TK7aD",
	"contactInfo": "contact_contactInfo__2yCr6"
};


/***/ }),

/***/ "./styles/pages/homePage.module.css":
/*!******************************************!*\
  !*** ./styles/pages/homePage.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "homePage_wrapper__h9kvN",
	"container": "homePage_container__KrY5H",
	"lgPara": "homePage_lgPara__24lP3",
	"button": "homePage_button__2MCCd",
	"btnDark": "homePage_btnDark__1-uF_",
	"btnLight": "homePage_btnLight__1smxI",
	"btnLD": "homePage_btnLD__3oKTX",
	"btnDL": "homePage_btnDL__N3tF-",
	"linkDark": "homePage_linkDark__2grc-",
	"linkLight": "homePage_linkLight__1eZzl",
	"rowContainer": "homePage_rowContainer__3dqX7",
	"card": "homePage_card__ltdbQ",
	"cardHeading": "homePage_cardHeading__228Gn",
	"cardContent": "homePage_cardContent__2Yuqu",
	"cardList": "homePage_cardList__3k2WB",
	"cardListItem": "homePage_cardListItem__29bGT",
	"cardListNumber": "homePage_cardListNumber__3Ye7Y",
	"cardFooter": "homePage_cardFooter__2Jwnj",
	"leftAlign": "homePage_leftAlign__2eYLP",
	"imageBox": "homePage_imageBox__z61SB",
	"textBox": "homePage_textBox__-uR62",
	"narrow": "homePage_narrow__2p9p9",
	"containerWide": "homePage_containerWide__3icP0",
	"containerNarrow": "homePage_containerNarrow__22P91",
	"adjacentHalfWidthButtons": "homePage_adjacentHalfWidthButtons__2nDzt",
	"halfWidthButton": "homePage_halfWidthButton__3YpKE",
	"buildYourTeamCreateYourProject": "homePage_buildYourTeamCreateYourProject__3K7c3",
	"buildYourTeamImage": "homePage_buildYourTeamImage__1vTvr",
	"buildYourTeamInnerBox": "homePage_buildYourTeamInnerBox__3M2ug",
	"postContaiener": "homePage_postContaiener__E2p_R",
	"userBoxContainer": "homePage_userBoxContainer__3JEO0",
	"userHeader": "homePage_userHeader__2wwmy",
	"logo": "homePage_logo__3_mCb",
	"userTitle": "homePage_userTitle__11Zhw",
	"usersContainer": "homePage_usersContainer__1Ic7n",
	"userIns": "homePage_userIns__31kQU",
	"userPrimary": "homePage_userPrimary__2eGUD",
	"userSecondary": "homePage_userSecondary__34oGW",
	"userFooter": "homePage_userFooter__3UK4W"
};


/***/ }),

/***/ "./styles/post.module.css":
/*!********************************!*\
  !*** ./styles/post.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"postWrapper": "post_postWrapper__qNyyQ",
	"postHover": "post_postHover__UijnP",
	"postColorIndicator": "post_postColorIndicator__3r6th",
	"postContainer": "post_postContainer__2W6_0",
	"postHeaderWrapper": "post_postHeaderWrapper__1lGL-",
	"postHeaderStretch": "post_postHeaderStretch__1m0yA",
	"postHeader": "post_postHeader__3WraF",
	"PHUserStretch": "post_PHUserStretch__1iuW5",
	"PHUser": "post_PHUser__FL7Oc",
	"PHUIcon": "post_PHUIcon__1WCg7",
	"PHDate": "post_PHDate__2tQn_",
	"postTitle": "post_postTitle__12RCE",
	"postDescription": "post_postDescription__3VCZ1",
	"postSkillsContainer": "post_postSkillsContainer__33jtt",
	"postSkillInsContainer": "post_postSkillInsContainer__3KiBD",
	"PSIName": "post_PSIName__nOC58",
	"PSIStats": "post_PSIStats__36GDI",
	"postUtilitiesContainer": "post_postUtilitiesContainer__11ci_",
	"PUIconContainer": "post_PUIconContainer__1RoOV",
	"PUIcon": "post_PUIcon__2DXf3",
	"postWrapperSm": "post_postWrapperSm__2yfT7",
	"postSmRemove": "post_postSmRemove__1VSBp"
};


/***/ }),

/***/ "./styles/user/user.module.css":
/*!*************************************!*\
  !*** ./styles/user/user.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userWrapper": "user_userWrapper__3K3zh",
	"userContainer": "user_userContainer__1rLnI",
	"userOptionsSplitter": "user_userOptionsSplitter__2rqZZ",
	"userIconContainer": "user_userIconContainer__234ij",
	"SUH": "user_SUH__1Mre0",
	"UICH": "user_UICH__3jRIx",
	"LGDUserContainer": "user_LGDUserContainer__3wcal",
	"userBanner": "user_userBanner__1Axwl",
	"userUsernameContainer": "user_userUsernameContainer__1hA8H",
	"userUsername": "user_userUsername__9prin",
	"userUsernameIcon": "user_userUsernameIcon__3O8qt",
	"PNContainer": "user_PNContainer__22LyT",
	"PNBubble": "user_PNBubble__JVUOB",
	"userUtilityOption": "user_userUtilityOption__1VugB",
	"UUOSelected": "user_UUOSelected__3vvQk",
	"UUAddPost": "user_UUAddPost__23At7",
	"UUAPIcon": "user_UUAPIcon__3_S8h",
	"UUAPText": "user_UUAPText__1b3F2",
	"UUIcon": "user_UUIcon__x1IBr",
	"UULogout": "user_UULogout__2_DbH",
	"UULogoutIcon": "user_UULogoutIcon__2GPCE",
	"userNotificationBubble": "user_userNotificationBubble__3h1NW",
	"UUUtilitiesSplitter": "user_UUUtilitiesSplitter__3ZKBP",
	"UUContentContainer": "user_UUContentContainer__1GKB_",
	"NLUserContainer": "user_NLUserContainer__3Z5Lw",
	"userOptionContainer": "user_userOptionContainer__338Rm",
	"userOptions": "user_userOptions__ktesg",
	"userIcon": "user_userIcon__20t55",
	"userFormContainer": "user_userFormContainer__AhJlu",
	"userForm": "user_userForm__rxCdR",
	"UFLabel": "user_UFLabel__2t_1u",
	"UFInput": "user_UFInput__3wOU6",
	"UFSubmit": "user_UFSubmit__tSvLd",
	"notificationContainer": "user_notificationContainer__2xyMm",
	"notificationHeader": "user_notificationHeader__1q8N-",
	"NUserContainer": "user_NUserContainer__3wFr-",
	"NUserIcon": "user_NUserIcon__ZEN3t",
	"NUser": "user_NUser__392NU",
	"NUserLabel": "user_NUserLabel__3hamf",
	"NSkillContributions": "user_NSkillContributions__hhYD-",
	"NProposedHelp": "user_NProposedHelp__3hF6Q",
	"NSkillIns": "user_NSkillIns__2a9SU",
	"NSkillProp": "user_NSkillProp__2aRR1",
	"notificationChoice": "user_notificationChoice__lzdVX",
	"notificationOption": "user_notificationOption__3w7XH",
	"notificationEmail": "user_notificationEmail__grL_Y",
	"NMessage": "user_NMessage__2N29c"
};


/***/ }),

/***/ "./styles/user/userUtilities.module.css":
/*!**********************************************!*\
  !*** ./styles/user/userUtilities.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userUtilInfo": "userUtilities_userUtilInfo__1-W1b",
	"simplePostBanner": "userUtilities_simplePostBanner__356le",
	"userUtilNotif": "userUtilities_userUtilNotif__xR25U",
	"notificationContainer": "userUtilities_notificationContainer__5snuW",
	"notifContainer": "userUtilities_notifContainer__2Dgee",
	"notifSender": "userUtilities_notifSender__2eR2G",
	"notifMessage": "userUtilities_notifMessage__1ez_X",
	"notifAccepted": "userUtilities_notifAccepted__28l9e",
	"notifDeclined": "userUtilities_notifDeclined__-gkwG",
	"notificationOption": "userUtilities_notificationOption__3nraJ",
	"standardHover": "userUtilities_standardHover__1cmBk",
	"NAnswerInput": "userUtilities_NAnswerInput__2hnfT",
	"decide": "userUtilities_decide__VIDGa",
	"option": "userUtilities_option__ASL-K",
	"email": "userUtilities_email__2u-ve",
	"skilll": "userUtilities_skilll__1ILxD",
	"notifFilterContainer": "userUtilities_notifFilterContainer__1Ury5",
	"NFCreatorContainer": "userUtilities_NFCreatorContainer__2c4S6",
	"messagesOption": "userUtilities_messagesOption__eRk5Q",
	"NFLabel": "userUtilities_NFLabel__33VIE",
	"NFOptionContainer": "userUtilities_NFOptionContainer__2976K",
	"NFOption": "userUtilities_NFOption__2l_7C",
	"NFSplitter": "userUtilities_NFSplitter__1UkAo",
	"NFDDOption": "userUtilities_NFDDOption__3XHWJ",
	"notificationCLContainer": "userUtilities_notificationCLContainer__lUSvA",
	"notificationSucessIcon": "userUtilities_notificationSucessIcon__1cvqr",
	"notificationCl": "userUtilities_notificationCl__2-_3N"
};


/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/homePage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\Projects\projectU\projectu\pages\homePage.js */"./pages/homePage.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdOYXZCYXIvc2lnbmVkL05vdFNpZ25lZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci9zaWduZWQvU2lnbmVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3TmF2QmFyL3VzZXIvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci91c2VyL1VzZXJVdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L1Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L1Bvc3RTbWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHQtZmllbGQvSW5wdXRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL2Zvcm0vUmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL2Zvcm0vU2lnbkluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci91dGlsaXRpZXMvTm90aWYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3V0aWxpdGllcy9Vc2VyTm90aWZMaXN0LmpzIiwid2VicGFjazovLy8uL2Z1bmN0aW9ucy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWVQYWdlLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvdXNlckRELmpzIiwid2VicGFjazovLy8uL3NjaGVtYXMvbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3NjaGVtYXMvcXVlcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5wdXRIZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3BhZ2VzL2NvbnRhY3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvcGFnZXMvaG9tZVBhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy91c2VyL3VzZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXNlci91c2VyVXRpbGl0aWVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29weS10by1jbGlwYm9hcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiQ29udHJpYnV0ZXIiLCJuYW1lIiwibGluayIsImltYWdlIiwicG9zaXRpb24iLCJlbWFpbCIsInBob25lIiwiY29udFN0eWxlIiwiY29udGFjdENvbnRhaW5lciIsImNvbnRhY3RIZWFkZXIiLCJDSEljb24iLCJDSE5hbWUiLCJwcm9maWxlSW1hZ2UiLCJjb250YWN0SW5mb0NvbnRhaW5lciIsImNvbnRhY3RJbmZvIiwiYmFja2dyb3VuZENvbG9yIiwiTGF5b3V0IiwicHJvcHMiLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlU3RhdGUiLCJvblF1ZXJ5Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ0b2tlbiIsImN1cnJlbnRVc2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZXRUb2tlbiIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInNldEN1cnJlbnRVc2VyIiwic2V0UGVuZGluZ05vdGlmaWNhdGlvbnMiLCJzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMiLCJjb25uZWN0IiwiTG9hZGluZyIsInNpemUiLCJjb2xvciIsIk5hdkJhciIsIm5vVXNlciIsIk5CIiwiY29udGFpbmVyIiwiYnJhbmRDb250YWluZXIiLCJpY29uIiwiY29udGFpbmVyTSIsIm5hdkljb24iLCJicmFuZENvbnRhaW5lck0iLCJzZWFyY2hRdWVyeSIsInVzZUZpZWxkIiwiY3VycmVudFVzZXJVTiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyUXVlcnkiLCJ1c2VRdWVyeSIsIkZJTkRfVVNFUiIsInZhcmlhYmxlcyIsInVzZXJuYW1lIiwidXNlclF1ZXJ5Q29uZGl0aW9ucyIsImRhdGEiLCJyZWR1Y2VyIiwiZmluZFVzZXIiLCJ1c2VyUmVzdWx0IiwidXNlRWZmZWN0Iiwic3ViTmF2Iiwic2V0U3ViTmF2IiwidXNlckREIiwicmVzZXROYXYiLCJyZXNldFVzZXJERCIsIlNRQ2xlYW5lZCIsImZpZWxkcyIsImVudGVyU2VhcmNoIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUtleVByZXNzIiwiZSIsIm5vU3RhdGUiLCJrZXkiLCJTUSIsImhhbmRsZVN1Yk5hdlN0YXRlIiwiaGFuZGxlU3ViTmF2SXRlbVN0YXRlIiwic2V0VXNlckREIiwibG9nb3V0IiwiY2xlYXIiLCJjbGVhclRva2VuIiwic2lnbmVkU3RhdGUiLCJTdWJOYXYiLCJzdWJOYXZDb250YWluZXIiLCJzZWFyY2hDb250YWluZXJNIiwic2VhcmNoQnRuIiwibWFnbmlmaWVyIiwic2VhcmNoQmFyIiwibWVudUNvbnRhaW5lciIsInVzZXJPcHRpb24iLCJtb3JlQ29udGFpbmVyIiwibW9yZSIsIm5vdGlmQ29udGFpbmVyTSIsImJlbGwiLCJub2ZpZkNvdW50Iiwic2lnbk9wdGlvbiIsIlN1Yk5hdkl0ZW0iLCJTTklDb250YWluZXIiLCJ0aXRsZUJlbGwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZE9wdGlvbiIsInRpdGxlTW9yZSIsInNlYXJjaENvbnRhaW5lciIsIkNQQ29udGFpbmVyIiwicGx1cyIsIkNQVGV4dCIsIm5hdkl0ZW0iLCJOb3RTaWduZWQiLCJoYW5kbGVVc2VyU3RhdGUiLCJzaG93VXNlckREIiwiZGlzcGxheSIsInNob3dJbkREIiwidXNlcldyYXBwZXIiLCJ1c2VyQ29udGFpbmVyIiwiU2lnbmVkIiwidXNlclN0YXRlIiwic2V0VXNlclN0YXRlIiwibm90aWZDb250YWluZXIiLCJ1c2VySW5mb0NvbnRhaW5lciIsIkREQXJyb3ciLCJQb3N0IiwicG9zdCIsImNvbG9yUGFsZXR0ZSIsInBhbGxldHRlR2VuZXJhdG9yIiwiY29sb3JQYWxsZXR0ZSIsImhhbmRsZUVycm9yIiwic2F2ZVBvc3RNdXRhdGlvbiIsInVzZU11dGF0aW9uIiwiU0FWRV9QT1NUIiwib25FcnJvciIsImhhbmRsZVNhdmVQb3N0IiwidHJpZ2dlckFsZXJ0Iiwic2V0QWxlcnQiLCJyZXNldEFsZXJ0IiwicmVzdWx0IiwidXNlciIsIl9pZCIsInBvc3RJZCIsInNldEN1cnJlbnRVc2VyU1AiLCJzYXZlZFBvc3RzIiwiY29uY2F0IiwiaGFuZGxlU2hhcmUiLCJtYXBwZWRTa2lsbHMiLCJhbGxTa2lsbHMiLCJpbmQiLCJza2lsbE5hbWVzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUFMiLCJwb3N0U2tpbGxJbnNDb250YWluZXIiLCJQU0lOYW1lIiwiUFNJU3RhdHMiLCJza2lsbEZpbGxzIiwic2tpbGxDYXBhY2l0aWVzIiwiY2xlYW5lZFRpbWUiLCJEYXRlIiwiTnVtYmVyIiwidGltZSIsInRvU3RyaW5nIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJkZXNjcmlwdGlvbkhlaWdodCIsInNob3J0IiwibWF4SGVpZ2h0Iiwic3RyZXRjaCIsInBvc3RXcmFwcGVyIiwicG9zdENvbG9ySW5kaWNhdG9yIiwicG9zdENvbnRhaW5lciIsInBvc3RIZWFkZXJXcmFwcGVyIiwicG9zdFV0aWxpdGllc0NvbnRhaW5lciIsIlBVSWNvbkNvbnRhaW5lciIsIlBVSWNvbiIsInRpdGxlIiwid2lkdGgiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsInBvc3RIZWFkZXJTdHJldGNoIiwiUEhVc2VyU3RyZXRjaCIsInBvc3RIb3ZlciIsIlBIVUljb24iLCJQSERhdGUiLCJwb3N0VGl0bGUiLCJwb3N0RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInBvc3RTa2lsbHNDb250YWluZXIiLCJwb3N0SGVhZGVyIiwiUEhVc2VyIiwiUG9zdFNtYWxsIiwiY29uc29sZSIsImxvZyIsInJlbW92ZVNQTXV0YXRpb24iLCJSRU1PVkVfU0FWRURfUE9TVCIsInAiLCJwYWxsZXR0ZSIsImhhbmRsZVNhdmVSZW1vdmUiLCJuZXdTYXZlZFBvc3RzIiwiZmlsdGVyIiwidHlwZSIsIlBUIiwicG9zdFdyYXBwZXJTbSIsIm1hcmdpbkJvdHRvbSIsInBvc3RTbVJlbW92ZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJzZXRDdXJyZW50VXNlclBvc3RzIiwiSW5wdXRIZWFkZXIiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaW5mbyIsImlucHV0Rm9yIiwiSUgiLCJpbmZvVGl0bGVUZXh0Iiwic2hvd0luZm8iLCJjb2xvckluZm8iLCJ0ZXh0Q29sb3IiLCJmb3JtSW5mb0NvbnRhaW5lciIsImluZm9IZWFkZXJDb250YWluZXIiLCJpbmZvSWNvbiIsImluZm9Db250ZW50IiwiUmVnaXN0ZXIiLCJwYXNzd29yZCIsInJlUGFzc3dvcmQiLCJyZWZlcmVuY2VMaW5rIiwiY2xlYW5lZE1lc3NhZ2UiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJvbkxvZ2luRXJyb3IiLCJyZWdpc3Rlck11dGF0aW9uIiwiQ1JFQVRFX1VTRVIiLCJsb2dpbk11dGF0aW9uIiwiTE9HSU4iLCJoYW5kbGVTdW1iaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImNoYW5nZU1lbnVJdGVtIiwibG9naW5SZXN1bHQiLCJsb2dpbiIsInNldEl0ZW0iLCJyZXNldCIsIm9uU3VjY2VzcyIsImJnU3R5bGUiLCJub0JHIiwiVVIiLCJ1c2VyRm9ybUNvbnRhaW5lciIsInVzZXJGb3JtIiwiVUZJbnB1dCIsIm1hcmdpbiIsIlVGU3VibWl0IiwiU2lnbkluIiwic2lnbkluTXV0YXRpb24iLCJOb3RpZiIsImFjY2VwdE5vdGlmIiwiQUNDRVBUX05PVElGSUNBVElPTiIsImRlY2xpbmVOb3RpZiIsIkRFQ0xJTkVfTk9USUZJQ0FUSU9OIiwiYW5zd2VyUXVlc3Rpb24iLCJBTlNXRVJfUVVFU1RJT04iLCJhbnN3ZXIiLCJoYW5kbGVBbnN3ZXIiLCJub3RpZmljYXRpb25JZCIsIm5vdGlmIiwicmVzcG9uc2UiLCJuZXdOb3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9ucyIsIm1hcCIsIm4iLCJ1c2VyRnJvbSIsImhhbmRsZUFjY2VwdCIsImFjY2VwdCIsImFjY2VwdE5vdGlmaWNhdGlvbiIsImhhbmRsZURlY2xpbmUiLCJkZWNsaW5lIiwiZGVjbGluZU5vdGlmaWNhdGlvbiIsIm5vdGlmU3RhdHVzQ29sb3IiLCJhY2NlcHRlZCIsInF1ZXN0aW9uIiwiYm9yZGVyQm90dG9tIiwidXNlclRvIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJHQ0xpbmtTdGF0cyIsIndlYnNpdGVTdGF0cyIsImNvbnRhY3RMaW5rIiwiY2xlYW5lZExpbmsiLCJza2lsbFRvSm9pbiIsInByb3Bvc2VkQ29udHJpYnV0aW9uIiwiaW5kZXhPZiIsIlVzZXJOb3RpZkxpc3QiLCJzZW50RmlsdGVyIiwic2V0U2VudEZpbHRlciIsInNob3dTRkREIiwic2V0U2hvd1NGREQiLCJzdGF0dXNGaWx0ZXIiLCJzZXRTdGF0dXNGaWx0ZXIiLCJzaG93U3RhdHVzREQiLCJzZXRTaG93U3RhdHVzREQiLCJncmlkQ29sdW1uIiwiaGVpZ2h0IiwiRmlsdGVyIiwic2VudE9wdGlvbnMiLCJhbGxPcHRpb25zIiwib25PcHRpb25DbGljayIsIm9wdGlvbiIsIm8iLCJVVSIsIk5GRERPcHRpb24iLCJzZW50REQiLCJORnJvcGRvd24iLCJORlNwbGl0dGVyIiwic3RhdHVzT3B0aW9ucyIsInN0YXR1c0REIiwiTkZEcm9wZG93biIsIm5vdGlmRmlsdGVyQ29udGFpbmVyIiwiTkZDcmVhdG9yQ29udGFpbmVyIiwiTkZMYWJlbCIsIk5GT3B0aW9uQ29udGFpbmVyIiwiTkZPcHRpb24iLCJzdGF0dXNDb25kaXRpb25zIiwibm90aWZTdGF0dXMiLCJzZW50Q29uZGl0aW9ucyIsInNlbnRTdGF0dXMiLCJzaG93Tm90aWZpY2F0aW9ucyIsInJldmVyc2UiLCJyb3dHYXAiLCJtYXJnaW5Ub3AiLCJ1cmwiLCJzdGFydCIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJwcmltYXJ5Q29sb3IiLCJjb2xvcnMiLCJjIiwiaGlnaGVyQ29sb3IiLCJpc0RhcmsiLCJodHRwTGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJzZXRDb250ZXh0IiwiXyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiYXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwid2l0aEFwb2xsbyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInNjcm9sbCIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiSG9tZVBhZ2UiLCJsaXN0T2ZVc2VycyIsInNvbWVVc2VycyIsInUiLCJIUCIsInVzZXJJbnMiLCJ1c2VyUHJpbWFyeSIsInVzZXJTZWNvbmRhcnkiLCJwb3NpdGlvbkluQ1AiLCJwb3N0cyIsImJ1dHRvbnNGb3JDUCIsImJ1dHRvbiIsImJ0bkRhcmsiLCJhZGphY2VudEhhbGZXaWR0aEJ1dHRvbnMiLCJidG5ETCIsIm9wYWNpdHkiLCJjdXJzb3IiLCJjb2xvcnNGb3JDUCIsInBvc2l0aW9uSW5KUCIsImJ1dHRvbnNGb3JKUCIsImNvbG9yc0ZvckpQIiwid3JhcHBlciIsInJvd0NvbnRhaW5lciIsInRleHRCb3giLCJuYXJyb3ciLCJsZWZ0QWxpZ24iLCJsZ1BhcmEiLCJidG5MaWdodCIsImJ0bkxEIiwiaW1hZ2VCb3giLCJidWlsZFlvdXJUZWFtT3V0ZXJCb3giLCJidWlsZFlvdXJUZWFtSW1hZ2UiLCJidWlsZFlvdXJUZWFtSW5uZXJCb3giLCJjYXJkIiwianVzdGlmeVNlbGYiLCJsaW5rRGFyayIsImNhcmRMaXN0IiwiY2FyZExpc3RJdGVtIiwiY29tbXVuaXR5T3JQcm9qZWN0c0RpdiIsInVzZXJCb3hDb250YWluZXIiLCJ1c2VySGVhZGVyIiwibG9nbyIsInVzZXJUaXRsZSIsInVzZXJzQ29udGFpbmVyIiwidXNlckZvb3RlciIsInBvc3RDb250YWllbmVyIiwib3RoZXJQb3N0cyIsInBvc3RRdWVyeSIsIkZJTkRfUE9TVCIsInBvc3RzUXVlcnkiLCJTRUFSQ0hfUE9TVFMiLCJmaWx0ZXJTdHJpbmciLCJwb3N0SWRzIiwiZXZlbnRRdWVyeSIsIlNPTUVfVVNFUlMiLCJza2lwIiwiZmlyc3QiLCJmaW5kUG9zdCIsInNlYXJjaFBvc3RzIiwiYWxlcnROb3RpZiIsImFjdGlvbiIsImFtdCIsInBlbmRpbmdOb3RpZmljYXRpb25zIiwiQ1JFQVRFX1BPU1QiLCJncWwiLCJNQUtFX05PVElGSUNBVElPTiIsIkFTS19RVUVTVElPTiIsIkxJU1RfT0ZfTk9USUZJQ0FUSU9OUyIsIlNLSUxMX1NFQVJDSCIsIk1FIiwiTElTVF9PRl9QT1NUUyIsIkFMTF9VU0VSUyIsIkFMTF9QT1NUUyIsIkdFVF9QT1NUX1RJVExFUyIsIlBFTkRJTkdfTk9USUZTIiwiUV9BTkRfQV9OT1RJRlMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaG9tZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBjb250U3R5bGUgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL2NvbnRhY3QubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY29uc3QgQ29udHJpYnV0ZXIgPSAoe25hbWUsIGxpbmssIGltYWdlLCBwb3NpdGlvbiwgZW1haWwsIHBob25lfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udFN0eWxlLmNvbnRhY3RDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtsaW5rfSA+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake2NvbnRTdHlsZS5jb250YWN0SGVhZGVyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvVy5zdmdcIiBjbGFzc05hbWU9e2NvbnRTdHlsZS5DSEljb259IGFsdD1cIlByb2plY3RVXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjb250U3R5bGUuQ0hOYW1lfT57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtjb250U3R5bGUucHJvZmlsZUltYWdlfSBhbHQ9XCJwcm9maWxlXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRTdHlsZS5jb250YWN0SW5mb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udFN0eWxlLmNvbnRhY3RJbmZvfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNmNmY2ZjknfX0+PHN0cm9uZz5wb3NpdGlvbjo8L3N0cm9uZz57cG9zaXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udFN0eWxlLmNvbnRhY3RJbmZvfT48c3Ryb25nPmVtYWlsOjwvc3Ryb25nPntlbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250U3R5bGUuY29udGFjdEluZm99PjxzdHJvbmc+cGhvbmU6PC9zdHJvbmc+IHtwaG9uZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVyIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIsIHNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbi8vIGltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vbmV3TmF2QmFyL05hdkJhcidcclxuaW1wb3J0IHsgRklORF9VU0VSLCBQRU5ESU5HX05PVElGUywgTElTVF9PRl9OT1RJRklDQVRJT05TIH0gZnJvbSAnLi4vc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBvblF1ZXJ5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxOYXZCYXIgcXVlcnk9e3F1ZXJ5fSBvblF1ZXJ5Q2hhbmdlPXtvblF1ZXJ5Q2hhbmdlfSBub1VzZXIgLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICYmIHByb3BzLnRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgcHJvcHMuc2V0VG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLl9pZCA6ICd0aGlzaXNmYWtlJ1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnNRdWVyeSA9IHVzZVF1ZXJ5KFBFTkRJTkdfTk9USUZTLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczogIHt1c2VySWQ6IGN1cnJlbnRVc2VySWR9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlclVOID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSA6ICd0aGlzaXNmYWtlJ1xyXG4gICAgICAgIGNvbnN0IHVzZXJRdWVyeSA9IHVzZVF1ZXJ5KEZJTkRfVVNFUiwge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogY3VycmVudFVzZXJVTn1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHVzZXJOb3RpZnMgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQpIDogW11cclxuICAgICAgICBjb25zdCBub3RpZnNRdWVyeSA9IHVzZVF1ZXJ5KExJU1RfT0ZfTk9USUZJQ0FUSU9OUywge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25zOiB1c2VyTm90aWZzfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3Qgbm90aWZzUXVlcnlDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vdGlmc1F1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChub3RpZnNRdWVyeS5sb2FkaW5nKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAobm90aWZzUXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zLmxlbmd0aCA8IDEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5sZW5ndGgpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zWzBdLnVzZXJGcm9tKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gbm90aWZzUXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnNDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXBlbmRpbmdOb3RpZnNRdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocHJvcHMuY3VycmVudFVzZXIgJiYgcHJvcHMuY3VycmVudFVzZXIucGVuZGluZ05vdGlmaWNhdGlvbnMpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBwZW5kaW5nTm90aWZzUXVlcnkuZGF0YS5zZWFyY2hBd2FpdGluZ05vdGlmc1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyQ29uZGl0aW9ucyA9IChxdWVyeSwgcmVkdWNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXF1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcXVlcnkuZGF0YS5maW5kVXNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHJlZHVjZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBxdWVyeS5kYXRhLmZpbmRVc2VyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc0ZpbGxlZCA9IG5vdGlmc1F1ZXJ5Q29uZGl0aW9ucygpXHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmcyA9IHBlbmRpbmdOb3RpZnNDb25kaXRpb25zKClcclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNvbmRpdGlvbnModXNlclF1ZXJ5LCBwcm9wcy5jdXJyZW50VXNlcilcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXIodXNlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGVuZGluZ05vdGlmcykge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMocGVuZGluZ05vdGlmcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm90aWZzRmlsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobm90aWZzRmlsbGVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW25vdGlmc0ZpbGxlZCwgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCB1c2VyLCBwcm9wcy5zZXRDdXJyZW50VXNlciwgcGVuZGluZ05vdGlmcywgcHJvcHMuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIHByb3BzXSlcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdkJhciBxdWVyeT17cXVlcnl9IG9uUXVlcnlDaGFuZ2U9e29uUXVlcnlDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKHNldFRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXI6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlciwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldFBlbmRpbmdOb3RpZmljYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5zZXRDdXJyZW50VXNlclxyXG5zZXRQZW5kaW5nTm90aWZpY2F0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExheW91dCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuLy8gaW1wb3J0IGxvZ29CIGZyb20gJy4uL3N0YXRpYy9zdmcvbG9nby9sb2dvQi5zdmcnXHJcbi8vIGltcG9ydCBsb2dvVyBmcm9tICcuLi9zdGF0aWMvc3ZnL2xvZ28vbG9nb1cuc3ZnJ1xyXG5cclxuY29uc3QgTG9hZGluZyA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYgKHByb3BzLnNpemUgPT09ICdzbWFsbCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvQi5zdmdcIiBjbGFzc05hbWU9XCJsb2FkaW5nLWxvZ29cIiBhbHQ9XCJsb2FkaW5nIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPmxvYWRpbmc8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMuY29sb3IgPT09ICd3aGl0ZScpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT1cImxvYWRpbmctbG9nby1sXCIgYWx0PVwibG9hZGluZyBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxvYWRpbmctdGl0bGVcIj5sb2FkaW5nPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgY2xhc3NOYW1lPVwibG9hZGluZy1sb2dvLWxcIiBhbHQ9XCJsb2FkaW5nIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9hZGluZy10aXRsZVwiPmxvYWRpbmc8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoTG9hZGluZykiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTkIgZnJvbSAnLi4vLi4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge3VzZUZpZWxkfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBOb3RTaWduZWQgZnJvbSAnLi9zaWduZWQvTm90U2lnbmVkJ1xyXG5pbXBvcnQgU2lnbmVkIGZyb20gJy4vc2lnbmVkL1NpZ25lZCdcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uL3VzZXIvZm9ybS9TaWduSW4nXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi91c2VyL2Zvcm0vUmVnaXN0ZXInXHJcbmltcG9ydCB7Y2xlYXJUb2tlbn0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCB7c2V0Q3VycmVudFVzZXJ9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgVXNlck5vdGlmTGlzdCBmcm9tICcuLi91c2VyL3V0aWxpdGllcy9Vc2VyTm90aWZMaXN0J1xyXG5pbXBvcnQgeyBGSU5EX1VTRVIgfSBmcm9tICcuLi8uLi9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtzZXRVc2VyREQsIHJlc2V0VXNlckREfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy91c2VyREQnXHJcblxyXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5ub1VzZXIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIV01cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuYnJhbmRDb250YWluZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtOQi5uYW1lfT5Vbmlsb3VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNXTVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5jb250YWluZXJNfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtOQi5icmFuZENvbnRhaW5lck19IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtOQi5uYW1lfT5Vbmlsb3VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gICAgY29uc3QgY3VycmVudFVzZXJVTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgOiAnZmFrZVVzZXInXHJcbiAgICBjb25zdCB1c2VyUXVlcnkgPSB1c2VRdWVyeShGSU5EX1VTRVIsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogY3VycmVudFVzZXJVTn1cclxuICAgIH0pXHJcbiAgICBjb25zdCB1c2VyUXVlcnlDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdXNlclF1ZXJ5LmRhdGFcclxuICAgICAgICBjb25zdCByZWR1Y2VyID0gcHJvcHMuY3VycmVudFVzZXJcclxuICAgICAgICBpZiAoIXF1ZXJ5KSB7IHJldHVybiBudWxsIH1cclxuICAgICAgICBpZiAoIXF1ZXJ5LmZpbmRVc2VyKSB7IHJldHVybiBudWxsIH1cclxuICAgICAgICBpZiAocmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAocXVlcnkuZmluZFVzZXIudXNlcm5hbWUgPT09IHJlZHVjZXIudXNlcm5hbWUpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcXVlcnkuZmluZFVzZXJcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXJSZXN1bHQgPSB1c2VyUXVlcnlDb25kaXRpb25zKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyKHVzZXJSZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLCBwcm9wcy5jdXJyZW50VXNlciwgdXNlclJlc3VsdF0pXHJcblxyXG4gICAgY29uc3QgW3N1Yk5hdiwgc2V0U3ViTmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgaWYgKHByb3BzLnVzZXJERCkge1xyXG4gICAgICAgIGlmICghc3ViTmF2KSB7XHJcbiAgICAgICAgICAgIHNldFN1Yk5hdignbWVudScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzZXROYXYgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3ViTmF2KGZhbHNlKVxyXG4gICAgICAgIHByb3BzLnJlc2V0VXNlckREKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTUUNsZWFuZWQgPSBzZWFyY2hRdWVyeS5maWVsZHMudmFsdWUgPT09ICcnID8gJ2FsbCcgOiBzZWFyY2hRdWVyeS5maWVsZHMudmFsdWVcclxuXHJcbiAgICBjb25zdCBlbnRlclNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL3Jlc3VsdHMvJHtTUUNsZWFuZWR9YClcclxuICAgICAgICByZXNldE5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSwgbm9TdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaWYgKG5vU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFNRID0gZS50YXJnZXQudmFsdWUgPT09ICcnID8gJ2FsbCcgOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9yZXN1bHRzLyR7U1F9YClcclxuICAgICAgICAgICAgICAgIHJlc2V0TmF2KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtlbnRlclNlYXJjaCgpfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJOYXZTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gc3ViTmF2KSB7c2V0U3ViTmF2KGZhbHNlKX1cclxuICAgICAgICBlbHNlIHtzZXRTdWJOYXYoc3RhdGUpfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3ViTmF2SXRlbVN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBwcm9wcy51c2VyREQpIHtwcm9wcy5yZXNldFVzZXJERCgpfVxyXG4gICAgICAgIGVsc2Uge3Byb3BzLnNldFVzZXJERChzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBwcm9wcy5jbGVhclRva2VuKClcclxuICAgICAgICByZXNldE5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2lnbmVkU3RhdGUgPSBwcm9wcy50b2tlbiA/IDxTaWduZWQgLz4gOiA8Tm90U2lnbmVkIC8+XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUgOiAnJ1xyXG4gICAgY29uc3QgU3ViTmF2ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghc3ViTmF2KSB7cmV0dXJuIG51bGx9XHJcbiAgICAgICAgZWxzZSBpZiAoc3ViTmF2ID09PSAnc2VhcmNoJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnN1Yk5hdkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaENvbnRhaW5lck19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XVwiIGFzPXtgL3Jlc3VsdHMvJHtTUUNsZWFuZWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e05CLnNlYXJjaEJ0bn0+PGltZyBzcmM9XCIvc3ZnL3NlYXJjaFdXLnN2Z1wiIGNsYXNzTmFtZT17TkIubWFnbmlmaWVyfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0gcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBvbktleVByZXNzPXsoZSkgPT4gaGFuZGxlS2V5UHJlc3MoZSwgdHJ1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdWJOYXYgPT09ICdtZW51Jykge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMubm9Vc2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zdWJOYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIudXNlck9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdub3RpZmljYXRpb24nKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ3VzZXInKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5tb3JlQ29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ21vcmUnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBjbGFzc05hbWU9e05CLm1vcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BzLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zdWJOYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIudXNlck9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdub3RpZmljYXRpb24nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5vdGlmQ29udGFpbmVyTX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9iZWxsVy5zdmdcIiBjbGFzc05hbWU9e05CLmJlbGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5ub2ZpZkNvdW50fT4tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ3VzZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJuYW1lfT57dXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5tb3JlQ29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ21vcmUnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBjbGFzc05hbWU9e05CLm1vcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zdWJOYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIuc2lnbk9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdzaWduaW4nKX0gPnNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5zaWduT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ3JlZ2lzdGVyJyl9ID5yZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLm1vcmVDb250YWluZXJ9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Yk5hdkl0ZW1TdGF0ZSgnbW9yZScpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL21vcmVXLnN2Z1wiIGNsYXNzTmFtZT17TkIubW9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTdWJOYXZJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghcHJvcHMudXNlckREKSB7cmV0dXJuIG51bGx9XHJcbiAgICAgICAgaWYgKHByb3BzLnVzZXJERCA9PT0gJ3NpZ25pbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5TTklDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWduSW4gb25TdWNjZXNzPXtyZXNldE5hdn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy51c2VyREQgPT09ICdyZWdpc3RlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5TTklDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWdpc3RlciBvblN1Y2Nlc3M9e3Jlc2V0TmF2fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMudXNlckREID09PSAnbm90aWZpY2F0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNOSUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2JlbGxXLnN2Z1wiIGNsYXNzTmFtZT17TkIudGl0bGVCZWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyTm90aWZMaXN0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMudXNlckREID09PSAndXNlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5TTklDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57cHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBvbkNsaWNrPXsoKSA9PiByZXNldE5hdigpfSBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtkZWNvZGVVUklDb21wb25lbnQocHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+PGgzIGNsYXNzTmFtZT17TkIuZGRPcHRpb259PmFjY291bnQgZGV0YWlsczwvaDM+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtOQi5kZE9wdGlvbn0gb25DbGljaz17KCkgPT4gbG9nb3V0KCl9IHN0eWxlPXt7Y29sb3I6ICdyZ2IoMjU0LDUyLDc3KSd9fT5TaWduIG91dDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMudXNlckREID09PSAnbW9yZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5TTklDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBjbGFzc05hbWU9e05CLnRpdGxlTW9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBvbkNsaWNrPXsoKSA9PiByZXNldE5hdigpfSBocmVmPVwiL3Bvc3Rmb3JtcGFnZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PjxoMyBjbGFzc05hbWU9e05CLmRkT3B0aW9ufT5jcmVhdGUgcHJvamVjdDwvaDM+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSFdNXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake05CLmJyYW5kQ29udGFpbmVyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e05CLm5hbWV9PlVuaWxvdXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zZWFyY2hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XVwiIGFzPXtgL3Jlc3VsdHMvJHtTUUNsZWFuZWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e05CLnNlYXJjaEJ0bn0+PGltZyBzcmM9XCIvc3ZnL3NlYXJjaFdXLnN2Z1wiIGNsYXNzTmFtZT17TkIubWFnbmlmaWVyfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtOQi5zZWFyY2hCYXJ9IHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleVByZXNzKGUpfSB7Li4uc2VhcmNoUXVlcnkuZmllbGRzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdGZvcm1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuQ1BDb250YWluZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3BsdXNXLnN2Z1wiIGNsYXNzTmFtZT17TkIucGx1c30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5DUFRleHR9PmNyZWF0ZSBwcm9qZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpZ25lZFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNXTVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLmNvbnRhaW5lck19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuYnJhbmRDb250YWluZXJNfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e05CLm5hbWV9PlVuaWxvdXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2U3RhdGUoJ3NlYXJjaCcpfSBjbGFzc05hbWU9e05CLm5hdkl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3NlYXJjaFdXLnN2Z1wiIGNsYXNzTmFtZT17TkIubmF2SWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Yk5hdlN0YXRlKCdtZW51Jyl9IGNsYXNzTmFtZT17TkIubmF2SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9oYW1idXJnZXJXLnN2Z1wiIGNsYXNzTmFtZT17TkIubmF2SWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U3ViTmF2IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1Yk5hdkl0ZW0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIHVzZXJERDogc3RhdGUudXNlckRELFxyXG4gICAgICAgIC8vIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWZcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXIsIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRVc2VyREQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgICAgICByZXNldFVzZXJERDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0VXNlckRELCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShOYXZCYXIpIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vLi4vdXNlci9mb3JtL1JlZ2lzdGVyJ1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uLy4uL3VzZXIvZm9ybS9TaWduSW4nXHJcbmltcG9ydCB7c2V0VXNlckRELCByZXNldFVzZXJERH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdXNlckREJ1xyXG5cclxuY29uc3QgTm90U2lnbmVkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHByb3BzLnVzZXJERCkge3Byb3BzLnJlc2V0VXNlckREKCl9XHJcbiAgICAgICAgZWxzZSB7cHJvcHMuc2V0VXNlckREKHN0YXRlKX1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VXNlckREID0gcHJvcHMudXNlckREID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gcHJvcHMudXNlckREID8gXHJcbiAgICAgICAgcHJvcHMudXNlckREID09PSAncmVnaXN0ZXInID8gPFJlZ2lzdGVyIC8+IDpcclxuICAgICAgICBwcm9wcy51c2VyREQgPT09ICdzaWduaW4nID8gPFNpZ25JbiAvPiA6IG51bGxcclxuICAgIDogbnVsbFxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJXcmFwcGVyfSAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIuc2lnbk9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclN0YXRlKCdzaWduaW4nKX0gPnNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5zaWduT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ3JlZ2lzdGVyJyl9ID5yZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJERH0gc3R5bGU9e3Nob3dVc2VyRER9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20taHJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfX0gLz5cclxuICAgICAgICAgICAgICAgIHtzaG93SW5ERH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICB1c2VyREQ6IHN0YXRlLnVzZXJERCxcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRVc2VyREQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgICAgICByZXNldFVzZXJERDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0VXNlckRELCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShOb3RTaWduZWQpIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi91c2VyL05vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBVc2VyVXRpbGl0aWVzIGZyb20gJy4uL3VzZXIvVXNlclV0aWxpdGllcydcclxuXHJcblxyXG5jb25zdCBTaWduZWQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhhbmRsZVVzZXJTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdXNlclN0YXRlKSB7c2V0VXNlclN0YXRlKGZhbHNlKX1cclxuICAgICAgICBlbHNlIHtzZXRVc2VyU3RhdGUoc3RhdGUpfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd1VzZXJERCA9IHVzZXJTdGF0ZSA/IHtkaXNwbGF5OiAnYmxvY2snfSA6IHtkaXNwbGF5OiAnbm9uZSd9XHJcbiAgICBjb25zdCBzaG93SW5ERCA9IHVzZXJTdGF0ZSA/IFxyXG4gICAgICAgIHVzZXJTdGF0ZSA9PT0gJ25vdGlmaWNhdGlvbicgPyA8Tm90aWZpY2F0aW9ucyAvPiA6IDxVc2VyVXRpbGl0aWVzIC8+XHJcbiAgICA6IG51bGxcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSA6ICcnXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ25vdGlmaWNhdGlvbicpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubm90aWZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvYmVsbFcuc3ZnXCIgY2xhc3NOYW1lPXtOQi5iZWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubm9maWZDb3VudH0+LTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIudXNlck9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclN0YXRlKCd1c2VyJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VySW5mb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VybmFtZX0+e3VzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvZGRXLnN2Z1wiIGNsYXNzTmFtZT17TkIuRERBcnJvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJERH0gc3R5bGU9e3Nob3dVc2VyRER9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20taHJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfX0gLz5cclxuICAgICAgICAgICAgICAgIHtzaG93SW5ERH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICAvLyBhbGVydE5vdGlmOiBzdGF0ZS5hbGVydE5vdGlmXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gY2xlYXJUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKGNsZWFyVG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICAvLyByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoU2lnbmVkKSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTkIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IFVzZXJOb3RpZkxpc3QgZnJvbSAnLi4vLi4vdXNlci91dGlsaXRpZXMvVXNlck5vdGlmTGlzdCdcclxuXHJcbmNvbnN0IFNpZ25lZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGFuZGxlVXNlclN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSB1c2VyU3RhdGUpIHtzZXRVc2VyU3RhdGUoZmFsc2UpfVxyXG4gICAgICAgIGVsc2Uge3NldFVzZXJTdGF0ZShzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93VXNlckREID0gdXNlclN0YXRlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gdXNlclN0YXRlID8gXHJcbiAgICAgICAgdXNlclN0YXRlID09PSAnbm90aWZpY2F0aW9uJyA/IDxOb3RpZmljYXRpb25zIC8+IDogPFVzZXJVdGlsaXRpZXMgLz5cclxuICAgIDogbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2JlbGxXLnN2Z1wiIGNsYXNzTmFtZT17TkIudGl0bGVCZWxsfSAvPlxyXG4gICAgICAgICAgICA8VXNlck5vdGlmTGlzdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgLy8gYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZlxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIGNsZWFyVG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgLy8gcmVzZXRBbGVydDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0QWxlcnQsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFNpZ25lZCkiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IE5CIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9uZXdOYXZCYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2NsZWFyVG9rZW59IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcblxyXG5jb25zdCBTaWduZWQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhhbmRsZVVzZXJTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdXNlclN0YXRlKSB7c2V0VXNlclN0YXRlKGZhbHNlKX1cclxuICAgICAgICBlbHNlIHtzZXRVc2VyU3RhdGUoc3RhdGUpfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd1VzZXJERCA9IHVzZXJTdGF0ZSA/IHtkaXNwbGF5OiAnYmxvY2snfSA6IHtkaXNwbGF5OiAnbm9uZSd9XHJcbiAgICBjb25zdCBzaG93SW5ERCA9IHVzZXJTdGF0ZSA/IFxyXG4gICAgICAgIHVzZXJTdGF0ZSA9PT0gJ25vdGlmaWNhdGlvbicgPyA8Tm90aWZpY2F0aW9ucyAvPiA6IDxVc2VyVXRpbGl0aWVzIC8+XHJcbiAgICA6IG51bGxcclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgIHByb3BzLmNsZWFyVG9rZW4oKVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lIDogJydcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPnt1c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtkZWNvZGVVUklDb21wb25lbnQocHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PjxoMyBjbGFzc05hbWU9e05CLmRkT3B0aW9ufT5hY2NvdW50IGRldGFpbHM8L2gzPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtOQi5kZE9wdGlvbn0gb25DbGljaz17KCkgPT4gbG9nb3V0KCl9IHN0eWxlPXt7Y29sb3I6ICdyZ2IoMjU0LDUyLDc3KSd9fT5zaWduIG91dDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICAvLyBhbGVydE5vdGlmOiBzdGF0ZS5hbGVydE5vdGlmXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xlYXJUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKGNsZWFyVG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICAvLyByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoU2lnbmVkKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgU0FWRV9QT1NUIH0gZnJvbSAnLi4vLi4vc2NoZW1hcy9tdXRhdGlvbnMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyU1AgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IFBTIGZyb20gJy4uLy4uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHBhbGxldHRlR2VuZXJhdG9yLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJ1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgcG9zdCA9IHByb3BzLnBvc3RcclxuICAgIGNvbnN0IGNvbG9yID0gcG9zdC5jb2xvclxyXG4gICAgY29uc3QgY29sb3JQYWxldHRlID0gcGFsbGV0dGVHZW5lcmF0b3IoY29sb3IpLmNvbG9yUGFsbGV0dGVcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICAgIGNvbnN0IFtzYXZlUG9zdE11dGF0aW9uXSA9IHVzZU11dGF0aW9uKFNBVkVfUE9TVCwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy50b2tlbikge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnc2lnbiBpbiQ6IG11c3QgYmUgc2lnbmVkIGluIHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24nLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2F2ZVBvc3RNdXRhdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogcHJvcHMuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgcG9zdElkOiBwb3N0Ll9pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyU1AocHJvcHMuY3VycmVudFVzZXIuc2F2ZWRQb3N0cy5jb25jYXQocG9zdCkpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsICdmb2xsb3dlZCQ6IHlvdSBhcmUgbm93IGZvbGxvd2luZyB0aGlzIHBvc3QnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2hhcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgJ2NvcGllZCB1cmwkOiBjb3BpZWQgdXJsIHRvIGRhc2hib2FyZCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1hcHBlZFNraWxscyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYWxsU2tpbGxzID0gW11cclxuICAgICAgICBmb3IgKGNvbnN0IGluZCBpbiBwb3N0LnNraWxsTmFtZXMpIHtcclxuICAgICAgICAgICAgYWxsU2tpbGxzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XVwiIGFzPXtgL3Jlc3VsdHMvJHtlbmNvZGVVUklDb21wb25lbnQocG9zdC5za2lsbE5hbWVzW2luZF0pfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BTLnBvc3RTa2lsbEluc0NvbnRhaW5lcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1BTLlBTSU5hbWV9Pntwb3N0LnNraWxsTmFtZXNbaW5kXX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFMuUFNJU3RhdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3Bvc3Quc2tpbGxGaWxsc1tpbmRdfSAvICR7cG9zdC5za2lsbENhcGFjaXRpZXNbaW5kXX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsU2tpbGxzXHJcbiAgICB9XHJcbiAgICBsZXQgY2xlYW5lZFRpbWUgPSBuZXcgRGF0ZShOdW1iZXIocG9zdC50aW1lKSlcclxuICAgIGNsZWFuZWRUaW1lID0gY2xlYW5lZFRpbWUudG9TdHJpbmcoKS5zcGxpdCgnICcpXHJcbiAgICAvLyBjbGVhbmVkVGltZSA9IGNsZWFuZWRUaW1lLnNsaWNlKDEsNCkuam9pbignICcpICsgJyAnICsgY2xlYW5lZFRpbWVbNF0uc3BsaXQoJzonKS5zbGljZSgwLDIpLmpvaW4oJzonKVxyXG4gICAgY2xlYW5lZFRpbWUgPSBjbGVhbmVkVGltZS5zbGljZSgxLDMpLmpvaW4oJyAnKSArICcsICcgKyBjbGVhbmVkVGltZVszXVxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSGVpZ2h0ID0gcHJvcHMuc2hvcnQgPyB7bWF4SGVpZ2h0OiAnNzVweCd9IDogbnVsbFxyXG4gICAgaWYgKHByb3BzLnN0cmV0Y2gpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFMucG9zdFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BTLnBvc3RDb2xvckluZGljYXRvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yUGFsZXR0ZS5jb2xvcn19IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFMucG9zdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BTLnBvc3RIZWFkZXJXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BTLnBvc3RVdGlsaXRpZXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlUG9zdCgpfSBjbGFzc05hbWU9e1BTLlBVSWNvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e1BTLlBVSWNvbn0gZmlsbD17Y29sb3JQYWxldHRlLmNvbG9yfSAgdmlld0JveD1cIjAgLTI4IDUxMi4wMDAwMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm00NzEuMzgyODEyIDQ0LjU3ODEyNWMtMjYuNTAzOTA2LTI4Ljc0NjA5NC02Mi44NzEwOTMtNDQuNTc4MTI1LTEwMi40MTAxNTYtNDQuNTc4MTI1LTI5LjU1NDY4NyAwLTU2LjYyMTA5NCA5LjM0Mzc1LTgwLjQ0OTIxOCAyNy43Njk1MzEtMTIuMDIzNDM4IDkuMzAwNzgxLTIyLjkxNzk2OSAyMC42Nzk2ODgtMzIuNTIzNDM4IDMzLjk2MDkzOC05LjYwMTU2Mi0xMy4yNzczNDQtMjAuNS0yNC42NjAxNTctMzIuNTI3MzQ0LTMzLjk2MDkzOC0yMy44MjQyMTgtMTguNDI1NzgxLTUwLjg5MDYyNS0yNy43Njk1MzEtODAuNDQ1MzEyLTI3Ljc2OTUzMS0zOS41MzkwNjMgMC03NS45MTAxNTYgMTUuODMyMDMxLTEwMi40MTQwNjMgNDQuNTc4MTI1LTI2LjE4NzUgMjguNDEwMTU2LTQwLjYxMzI4MSA2Ny4yMjI2NTYtNDAuNjEzMjgxIDEwOS4yOTI5NjkgMCA0My4zMDA3ODEgMTYuMTM2NzE5IDgyLjkzNzUgNTAuNzgxMjUgMTI0Ljc0MjE4NyAzMC45OTIxODggMzcuMzk0NTMxIDc1LjUzNTE1NiA3NS4zNTU0NjkgMTI3LjExNzE4OCAxMTkuMzEyNSAxNy42MTMyODEgMTUuMDExNzE5IDM3LjU3ODEyNCAzMi4wMjczNDQgNTguMzA4NTkzIDUwLjE1MjM0NCA1LjQ3NjU2MyA0Ljc5Njg3NSAxMi41MDM5MDcgNy40Mzc1IDE5Ljc5Mjk2OSA3LjQzNzUgNy4yODUxNTYgMCAxNC4zMTY0MDYtMi42NDA2MjUgMTkuNzg1MTU2LTcuNDI5Njg3IDIwLjczMDQ2OS0xOC4xMjg5MDcgNDAuNzA3MDMyLTM1LjE1MjM0NCA1OC4zMjgxMjUtNTAuMTcxODc2IDUxLjU3NDIxOS00My45NDkyMTggOTYuMTE3MTg4LTgxLjkwNjI1IDEyNy4xMDkzNzUtMTE5LjMwNDY4NyAzNC42NDQ1MzItNDEuODAwNzgxIDUwLjc3NzM0NC04MS40Mzc1IDUwLjc3NzM0NC0xMjQuNzQyMTg3IDAtNDIuMDY2NDA3LTE0LjQyNTc4MS04MC44Nzg5MDctNDAuNjE3MTg4LTEwOS4yODkwNjN6bTAgMFwiLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCBvbkNvcHk9eygpID0+IGhhbmRsZVNoYXJlKCl9IHRleHQ9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0LnRpdGxlKX1gfSBjbGFzc05hbWU9e1BTLlBVSWNvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL3NyYy9iZWxsQi5zdmdcIiBhbHQ9XCJzaGFyZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtQUy5QVUljb259IHN0eWxlPXt7d2lkdGg6ICcyMHB4JywgcGFkZGluZ1JpZ2h0OiAnNXB4JywgcGFkZGluZ0xlZnQ6ICc1cHgnfX0gZmlsbD17Y29sb3JQYWxldHRlLmNvbG9yfSB2aWV3Qm94PVwiMCAtMjIgNTEyIDUxMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTUxMiAyMzMuODIwMzEyLTIxMi43NzczNDQtMjMzLjMyMDMxMnYxMzkuMjAzMTI1aC00NS4yMzgyODFjLTE0MC4yNzM0MzcgMC0yNTMuOTg0Mzc1IDExMy43MTA5MzctMjUzLjk4NDM3NSAyNTMuOTg0Mzc1djczLjc2OTUzMWwyMC4wOTM3NS0yMi4wMTk1MzFjNjguMzE2NDA2LTc0Ljg1MTU2MiAxNjQuOTgwNDY5LTExNy41IDI2Ni4zMjQyMTktMTE3LjVoMTIuODA0Njg3djEzOS4yMDMxMjV6bTAgMFwiLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BTLnBvc3RIZWFkZXJTdHJldGNofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0LnVzZXIudXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BTLlBIVXNlclN0cmV0Y2h9IG5ldXRyYWxpemUtbGluayAke1BTLnBvc3RIb3Zlcn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1BTLlBIVUljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3Bvc3QudXNlci51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQUy5QSERhdGV9PntjbGVhbmVkVGltZX08L2Rpdj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bdGl0bGVdXCIgYXM9e2AvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0LnRpdGxlKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPjxoMyBjbGFzc05hbWU9e2Ake1BTLnBvc3RUaXRsZX0gJHtQUy5wb3N0SG92ZXJ9YH0+e3Bvc3QudGl0bGV9PC9oMz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bdGl0bGVdXCIgYXM9e2AvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0LnRpdGxlKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtQUy5wb3N0RGVzY3JpcHRpb259IG5ldXRyYWxpemUtbGluayAke1BTLnBvc3RIb3Zlcn1gfSBzdHlsZT17ZGVzY3JpcHRpb25IZWlnaHR9Pntwb3N0LmRlc2NyaXB0aW9ufTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BTLnBvc3RTa2lsbHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFwcGVkU2tpbGxzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFMucG9zdFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFMucG9zdENvbG9ySW5kaWNhdG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3JQYWxldHRlLmNvbG9yfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BTLnBvc3RDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BTLnBvc3RIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0LnVzZXIudXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtQUy5QSFVzZXJ9IG5ldXRyYWxpemUtbGluayAke1BTLnBvc3RIb3Zlcn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQUy5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57cG9zdC51c2VyLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQUy5QSERhdGV9PntjbGVhbmVkVGltZX08L2Rpdj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1t0aXRsZV1cIiBhcz17YC9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3QudGl0bGUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj48aDMgY2xhc3NOYW1lPXtgJHtQUy5wb3N0VGl0bGV9ICR7UFMucG9zdEhvdmVyfWB9Pntwb3N0LnRpdGxlfTwvaDM+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1t0aXRsZV1cIiBhcz17YC9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3QudGl0bGUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BTLnBvc3REZXNjcmlwdGlvbn0gbmV1dHJhbGl6ZS1saW5rICR7UFMucG9zdEhvdmVyfWB9IHN0eWxlPXtkZXNjcmlwdGlvbkhlaWdodH0+e3Bvc3QuZGVzY3JpcHRpb259PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BTLnBvc3RTa2lsbHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXBwZWRTa2lsbHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BTLnBvc3RVdGlsaXRpZXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlU2F2ZVBvc3QoKX0gY2xhc3NOYW1lPXtQUy5QVUljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17UFMuUFVJY29ufSBmaWxsPXtjb2xvclBhbGV0dGUuY29sb3J9ICB2aWV3Qm94PVwiMCAtMjggNTEyLjAwMDAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQ3MS4zODI4MTIgNDQuNTc4MTI1Yy0yNi41MDM5MDYtMjguNzQ2MDk0LTYyLjg3MTA5My00NC41NzgxMjUtMTAyLjQxMDE1Ni00NC41NzgxMjUtMjkuNTU0Njg3IDAtNTYuNjIxMDk0IDkuMzQzNzUtODAuNDQ5MjE4IDI3Ljc2OTUzMS0xMi4wMjM0MzggOS4zMDA3ODEtMjIuOTE3OTY5IDIwLjY3OTY4OC0zMi41MjM0MzggMzMuOTYwOTM4LTkuNjAxNTYyLTEzLjI3NzM0NC0yMC41LTI0LjY2MDE1Ny0zMi41MjczNDQtMzMuOTYwOTM4LTIzLjgyNDIxOC0xOC40MjU3ODEtNTAuODkwNjI1LTI3Ljc2OTUzMS04MC40NDUzMTItMjcuNzY5NTMxLTM5LjUzOTA2MyAwLTc1LjkxMDE1NiAxNS44MzIwMzEtMTAyLjQxNDA2MyA0NC41NzgxMjUtMjYuMTg3NSAyOC40MTAxNTYtNDAuNjEzMjgxIDY3LjIyMjY1Ni00MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MSAxNi4xMzY3MTkgODIuOTM3NSA1MC43ODEyNSAxMjQuNzQyMTg3IDMwLjk5MjE4OCAzNy4zOTQ1MzEgNzUuNTM1MTU2IDc1LjM1NTQ2OSAxMjcuMTE3MTg4IDExOS4zMTI1IDE3LjYxMzI4MSAxNS4wMTE3MTkgMzcuNTc4MTI0IDMyLjAyNzM0NCA1OC4zMDg1OTMgNTAuMTUyMzQ0IDUuNDc2NTYzIDQuNzk2ODc1IDEyLjUwMzkwNyA3LjQzNzUgMTkuNzkyOTY5IDcuNDM3NSA3LjI4NTE1NiAwIDE0LjMxNjQwNi0yLjY0MDYyNSAxOS43ODUxNTYtNy40Mjk2ODcgMjAuNzMwNDY5LTE4LjEyODkwNyA0MC43MDcwMzItMzUuMTUyMzQ0IDU4LjMyODEyNS01MC4xNzE4NzYgNTEuNTc0MjE5LTQzLjk0OTIxOCA5Ni4xMTcxODgtODEuOTA2MjUgMTI3LjEwOTM3NS0xMTkuMzA0Njg3IDM0LjY0NDUzMi00MS44MDA3ODEgNTAuNzc3MzQ0LTgxLjQzNzUgNTAuNzc3MzQ0LTEyNC43NDIxODcgMC00Mi4wNjY0MDctMTQuNDI1NzgxLTgwLjg3ODkwNy00MC42MTcxODgtMTA5LjI4OTA2M3ptMCAwXCIvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgb25Db3B5PXsoKSA9PiBoYW5kbGVTaGFyZSgpfSB0ZXh0PXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocG9zdC50aXRsZSl9YH0gY2xhc3NOYW1lPXtQUy5QVUljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17UFMuUFVJY29ufSBzdHlsZT17e3dpZHRoOiAnMjBweCcsIHBhZGRpbmdSaWdodDogJzVweCcsIHBhZGRpbmdMZWZ0OiAnNXB4J319IGZpbGw9e2NvbG9yUGFsZXR0ZS5jb2xvcn0gdmlld0JveD1cIjAgLTIyIDUxMiA1MTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm01MTIgMjMzLjgyMDMxMi0yMTIuNzc3MzQ0LTIzMy4zMjAzMTJ2MTM5LjIwMzEyNWgtNDUuMjM4MjgxYy0xNDAuMjczNDM3IDAtMjUzLjk4NDM3NSAxMTMuNzEwOTM3LTI1My45ODQzNzUgMjUzLjk4NDM3NXY3My43Njk1MzFsMjAuMDkzNzUtMjIuMDE5NTMxYzY4LjMxNjQwNi03NC44NTE1NjIgMTY0Ljk4MDQ2OS0xMTcuNSAyNjYuMzI0MjE5LTExNy41aDEyLjgwNDY4N3YxMzkuMjAzMTI1em0wIDBcIi8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlblxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgeyBzZXRDdXJyZW50VXNlclNQLCBzZXRBbGVydCwgcmVzZXRBbGVydCB9XHJcbikoUG9zdCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IFJFTU9WRV9TQVZFRF9QT1NUIH0gZnJvbSAnLi4vLi4vc2NoZW1hcy9tdXRhdGlvbnMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyUG9zdHMsIHNldEN1cnJlbnRVc2VyU1AgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgeyB0cmlnZ2VyQWxlcnQsIHBhbGxldHRlR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuaW1wb3J0IFBUIGZyb20gJy4uLy4uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBQb3N0U21hbGwgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgWyBkZWxldGVQb3N0TXV0YXRpb24gXSA9IHVzZU11dGF0aW9uKERFTEVURV9QT1NULCB7XHJcbiAgICAvLyAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIC8vIH0pXHJcbiAgICBjb25zdCBbIHJlbW92ZVNQTXV0YXRpb24gXSA9IHVzZU11dGF0aW9uKFJFTU9WRV9TQVZFRF9QT1NULCB7XHJcbiAgICAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIH0pXHJcbiAgICBjb25zdCBwID0gcHJvcHMucG9zdFxyXG4gICAgY29uc3QgdXNlciA9IHByb3BzLnBvc3QudXNlciA/IHByb3BzLnBvc3QudXNlci51c2VybmFtZSA6IHByb3BzLnVzZXJcclxuICAgIGNvbnN0IHBhbGxldHRlID0gcGFsbGV0dGVHZW5lcmF0b3IocC5jb2xvcikuY29sb3JQYWxsZXR0ZVxyXG4gICAgLy8gY29uc3QgaGFuZGxlUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlbGV0ZVBvc3RNdXRhdGlvbih7XHJcbiAgICAvLyAgICAgICAgIHZhcmlhYmxlczoge3Bvc3RJZDogcHJvcHMucG9zdC5faWR9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAvLyAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyUG9zdHMocHJvcHMuY3VycmVudFVzZXIucG9zdHMuZmlsdGVyKHAgPT4gcC5faWQgIT09IHByb3BzLnBvc3QuX2lkKSlcclxuICAgIC8vICAgICAgICAgdHJpZ2dlckFsZXJ0KCdkYW5nZXInLCBgZGVsZXRlZCAkOiBkZWxldGVkIHBvc3QgJyR7cC50aXRsZX0nYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZVJlbW92ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZW1vdmVTUE11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiBwcm9wcy5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ6IHAuX2lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2F2ZWRQb3N0cyA9IHByb3BzLmN1cnJlbnRVc2VyLnNhdmVkUG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC5faWQgIT09IHAuX2lkKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlclNQKG5ld1NhdmVkUG9zdHMpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnZGFuZ2VyJywgYHVuZm9sbG93ZWQkOiB1bmZvbGxvd2VkIHBvc3QgJyR7cC50aXRsZX0nYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gJ3NhdmVkJykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0V3JhcHBlclNtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29sb3JJbmRpY2F0b3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwYWxsZXR0ZS5jb2xvcn19IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQodXNlcil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BULlBIVXNlcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1BULlBIVUljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bdGl0bGVdXCIgYXM9e2AvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwLnRpdGxlKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17UFQucG9zdFRpdGxlfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzdweCd9fT57cC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmVSZW1vdmUoKX0gY2xhc3NOYW1lPXtQVC5wb3N0U21SZW1vdmV9Png8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wcy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgIGlmICh1c2VyID09PSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RXcmFwcGVyU219PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29sb3JJbmRpY2F0b3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwYWxsZXR0ZS5jb2xvcn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQodXNlcil9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7UFQuUEhVc2VyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1BULlBIVUljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1t0aXRsZV1cIiBhcz17YC9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHAudGl0bGUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1BULnBvc3RUaXRsZX0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3cHgnfX0+e3AudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZSgpfSBjbGFzc05hbWU9XCJwb3N0LXNtLXJlbW92ZVwiPng8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0V3JhcHBlclNtfSBzdHlsZT17e2dyaWRUZW1wbGF0ZUNvbHVtbnM6ICc4cHggYXV0byd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb2xvckluZGljYXRvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBhbGxldHRlLmNvbG9yfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudCh1c2VyKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtQVC5QSFVzZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1BULlBIVUljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3RpdGxlXVwiIGFzPXtgL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocC50aXRsZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1BULnBvc3RUaXRsZX0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3cHgnfX0+e3AudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIHsgc2V0Q3VycmVudFVzZXJQb3N0cywgc2V0Q3VycmVudFVzZXJTUCwgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfVxyXG4pKFBvc3RTbWFsbCkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgSUggZnJvbSAnLi4vLi4vc3R5bGVzL2lucHV0SGVhZGVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBJbnB1dEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBpZiAoIXByb3BzLmluZm8pIHtcclxuICAgICAgICByZXR1cm4gPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlucHV0Rm9yfT48aDMgY2xhc3NOYW1lPXtJSC5pbmZvVGl0bGVUZXh0fT57cHJvcHMudGl0bGV9PC9oMz48L2xhYmVsPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dJbmZvID0gZXhwYW5kZWQgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfSBcclxuICAgIGNvbnN0IGNvbG9ySW5mbyA9IHByb3BzLmNvbG9yID09PSAnd2hpdGUnID9cclxuICAgICAgICB7dGV4dENvbG9yOiAnIzI4MjgyOCcsIGljb246ICcvc3ZnL2luZm9CLnN2Zyd9IDoge3RleHRDb2xvcjogJ3doaXRlJywgaWNvbjogJy9zdmcvaW5mb1cuc3ZnJ31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0lILmZvcm1JbmZvQ29udGFpbmVyfSBzdHlsZT17e2NvbG9yOiBjb2xvckluZm8udGV4dENvbG9yfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtJSC5pbmZvSGVhZGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5pbnB1dEZvcn0+PGgzIGNsYXNzTmFtZT17SUguaW5mb1RpdGxlVGV4dH0+e3Byb3BzLnRpdGxlfTwvaDM+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0gc3JjPXtjb2xvckluZm8uaWNvbn0gY2xhc3NOYW1lPXtJSC5pbmZvSWNvbn0gYWx0PVwiaW5mb1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SUguaW5mb0NvbnRlbnR9IHN0eWxlPXtzaG93SW5mb30+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKElucHV0SGVhZGVyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IENSRUFURV9VU0VSLCBMT0dJTiB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgSW5wdXRIZWFkZXIgZnJvbSAnLi4vLi4vdGV4dC1maWVsZC9JbnB1dEhlYWRlcidcclxuaW1wb3J0IHsgdXNlRmllbGQsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IFVSIGZyb20gJy4uLy4uLy4uL3N0eWxlcy91c2VyL3VzZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZUZpZWxkKCd0ZXh0JylcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gdXNlRmllbGQoJ3Bhc3N3b3JkJylcclxuICAgIGNvbnN0IHJlUGFzc3dvcmQgPSB1c2VGaWVsZCgncGFzc3dvcmQnKVxyXG4gICAgY29uc3QgZW1haWwgPSB1c2VGaWVsZCgnZW1haWwnKVxyXG4gICAgY29uc3QgcmVmZXJlbmNlTGluayA9IHVzZUZpZWxkKCd1cmwnKVxyXG5cclxuICAgIGNvbnN0IG9uRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBjbGVhbmVkTWVzc2FnZSA9IGUubWVzc2FnZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcclxuICAgICAgICBpZiAoY2xlYW5lZE1lc3NhZ2UuaW5jbHVkZXMoJ3VzZXJuYW1lJykpIGNsZWFuZWRNZXNzYWdlID0gYHVzZXJuYW1lJDogJHt1c2VybmFtZS5maWVsZHMudmFsdWV9IGlzIGFscmVhZHkgYmVpbmcgdXNlZGBcclxuICAgICAgICBpZiAoY2xlYW5lZE1lc3NhZ2UuaW5jbHVkZXMoJ3JlZmVyZW5jZUxpbmsnKSkgY2xlYW5lZE1lc3NhZ2UgPSBgcmVmZXJlbmNlIGxpbmskOiAke3JlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlfSBpcyBhbHJlYWR5IGJlaW5nIHVzZWRgXHJcbiAgICAgICAgaWYgKGNsZWFuZWRNZXNzYWdlLmluY2x1ZGVzKCdlbWFpbCcpKSBjbGVhbmVkTWVzc2FnZSA9IGBlbWFpbCQ6ICR7ZW1haWwuZmllbGRzLnZhbHVlfSBpcyBhbHJlYWR5IGJlaW5nIHVzZWRgXHJcbiAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgY2xlYW5lZE1lc3NhZ2UsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25Mb2dpbkVycm9yID0gKGUpID0+IGNvbnNvbGUubG9nKGUpXHJcblxyXG4gICAgY29uc3QgW3JlZ2lzdGVyTXV0YXRpb25dID0gdXNlTXV0YXRpb24oQ1JFQVRFX1VTRVIsIHsgb25FcnJvciB9KVxyXG4gICAgY29uc3QgW2xvZ2luTXV0YXRpb25dID0gdXNlTXV0YXRpb24oTE9HSU4sIHtvbkVycm9yOiBvbkxvZ2luRXJyb3J9KVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTdW1iaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmIChwYXNzd29yZC5maWVsZHMudmFsdWUgIT09IHJlUGFzc3dvcmQuZmllbGRzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsICdwYXNzd29yZCQ6IHBhc3N3b3JkIGFuZCByZS1wYXNzd29yZCBkaWQgbm90IG1hdGNoJywgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdXNlcm5hbWUuZmllbGRzLnZhbHVlLmxlbmd0aCB8fCAhcGFzc3dvcmQuZmllbGRzLnZhbHVlLmxlbmd0aCB8fCAhcmVQYXNzd29yZC5maWVsZHMudmFsdWUubGVuZ3RoIHx8ICFyZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ2FsbCQ6IGFsbCBmaWVsZHMgbXVzdCBiZSBmaWxsZWQnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVnaXN0ZXJNdXRhdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VMaW5rOiByZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuY2hhbmdlTWVudUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZU1lbnVJdGVtKG51bGwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbG9naW5SZXN1bHQgPSBhd2FpdCBsb2dpbk11dGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLmZpZWxkcy52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvZ2luUmVzdWx0LmRhdGEubG9naW4udmFsdWVcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHVzZXJuYW1lLmZpZWxkcy52YWx1ZSlcclxuICAgICAgICAgICAgcHJvcHMuc2V0VG9rZW4odG9rZW4pXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLnJlc2V0KClcclxuICAgICAgICAgICAgcGFzc3dvcmQucmVzZXQoKVxyXG4gICAgICAgICAgICByZVBhc3N3b3JkLnJlc2V0KClcclxuICAgICAgICAgICAgZW1haWwucmVzZXQoKVxyXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rLnJlc2V0KClcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgJ3JlZ2lzdGVyZWQkOiBhY2NvdW50IHN1Y2Nlc3NmdWxseSBjcmVhdGVkLiBzaWduaW5nIHlvdSBpbiBub3cuJywgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vblN1Y2Nlc3MoKVxyXG4gICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJnU3R5bGUgPSBwcm9wcy5ub0JHID8ge2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfSA6IG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyRm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMj5yZWdpc3RlcjwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17VVIudXNlckZvcm19IG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VtYml0KGUpfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXVzZXJuYW1lXCIgaW5mbz17ZmFsc2V9IHRpdGxlPVwidXNlcm5hbWVcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnVzZXJuYW1lLmZpZWxkc30gaWQ9XCJTSS11c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1wYXNzd29yZFwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInBhc3N3b3JkXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5wYXNzd29yZC5maWVsZHN9IGlkPVwiU0ktcGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcmVQYXNzd29yZFwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInJlLXR5cGUgcGFzc3dvcmRcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnJlUGFzc3dvcmQuZmllbGRzfSBpZD1cIlNJLXJlUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLWVtYWlsXCIgaW5mbz17dHJ1ZX0gdGl0bGU9XCJlbWFpbFwiIGNvbG9yPVwiZGFya1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXJnaW46IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnVudGlsbCBmdXJ0aGVyIHBvbGljeSBjaGFuZ2VzIG5vIGVtYWlscyBhcmUgc2VudCB5b3VyIHdheTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5vbmx5IHNob3duIHRvIHVzZXJzIHdobyB5b3UgYWNjZXB0IGFmdGVyIGNvbnRhY3RpbmcgeW91IGRpcmVjdGx5IChub3QgdGhyb3VnaCBwb3N0KTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4uZW1haWwuZmllbGRzfSBpZD1cIlNJLWVtYWlsXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1yZWZlcmVuY2VMaW5rXCIgaW5mbz17dHJ1ZX0gdGl0bGU9XCJyZXN1bWUgbGlua1wiIGNvbG9yPVwiZGFya1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbjogMCwgbWFyZ2luQm90dG9tOiAnNXB4J319Pmxpbmsgb24geW91ciB1c2VyIHBhZ2UgdXNlZCBhcyBhIHJlc3VtZSB0byBkZW1vbnN0cmF0ZSB5b3VyIGFiaWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW46IDAsIG1hcmdpbkJvdHRvbTogJzVweCd9fT48c3Ryb25nPmFsd2F5cyB2aWV3IGFub3RoZXIgdXNlcnMgcG9ydGFmb2xpbyBsaW5rIGJlZm9yZSB3b3JraW5nIHdpdGggdGhlbTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXJnaW46IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnNpdGVzIHJlY29tbWVuZGVkOiA8c3Ryb25nPkxpbmtlZEluPC9zdHJvbmc+LCA8c3Ryb25nPkluZGVlZDwvc3Ryb25nPiwgPHN0cm9uZz5HaXRIdWI8L3N0cm9uZz4sIG9yIDxzdHJvbmc+RmFjZWJvb2s8L3N0cm9uZz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+dG8gZnVydGhlciBlbnN1cmUgeW91ciBwb3J0YWZvbGlvIGxpbmsgaXMgdHJ1c3R3b3J0aHksIGxpbmsgeW91ciBVbmlsb3VzIGFjY291dCBmcm9tIHlvdXIgcG9ydGFmb2xpbyBsaW5rPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5yZWZlcmVuY2VMaW5rLmZpZWxkc30gaWQ9XCJTSS1yZWZlcmVuY2VMaW5rXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtVUi5VRlN1Ym1pdH0gdHlwZT1cInN1Ym1pdFwiPjxoMz5yZWdpc3RlcjwvaDM+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbCxcclxuICAgIHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQsIHNldFRva2VuIH1cclxuKShSZWdpc3RlcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBMT0dJTiB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyB1c2VGaWVsZCwgdHJpZ2dlckFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IElucHV0SGVhZGVyIGZyb20gJy4uLy4uL3RleHQtZmllbGQvSW5wdXRIZWFkZXInXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IFVSIGZyb20gJy4uLy4uLy4uL3N0eWxlcy91c2VyL3VzZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFNpZ25JbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VGaWVsZCgndGV4dCcpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZUZpZWxkKCdwYXNzd29yZCcpXHJcblxyXG4gICAgY29uc3Qgb25FcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsZWFuZWRNZXNzYWdlID0gZS5tZXNzYWdlXHJcbiAgICAgICAgY29uc29sZS5sb2coY2xlYW5lZE1lc3NhZ2UpXHJcbiAgICAgICAgY2xlYW5lZE1lc3NhZ2UgPSBjbGVhbmVkTWVzc2FnZS5zcGxpdCgnOicpXHJcbiAgICAgICAgY2xlYW5lZE1lc3NhZ2UgPSBjbGVhbmVkTWVzc2FnZS5zbGljZSgxLCBjbGVhbmVkTWVzc2FnZS5sZW5ndGgpLmpvaW4oJyQ6JylcclxuICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBjbGVhbmVkTWVzc2FnZSwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBbc2lnbkluTXV0YXRpb25dID0gdXNlTXV0YXRpb24oTE9HSU4sIHsgb25FcnJvciB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTdW1iaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25Jbk11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLmZpZWxkcy52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jaGFuZ2VNZW51SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlTWVudUl0ZW0obnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3VsdC5kYXRhLmxvZ2luLnZhbHVlXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB1c2VybmFtZS5maWVsZHMudmFsdWUpXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLnJlc2V0KClcclxuICAgICAgICAgICAgcGFzc3dvcmQucmVzZXQoKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRUb2tlbih0b2tlbilcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uU3VjY2VzcygpXHJcbiAgICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmdTdHlsZSA9IHByb3BzLm5vQkcgPyB7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9IDogbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJGb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgyPnNpZ24gaW48L2gyPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1VSLnVzZXJGb3JtfSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1bWJpdChlKX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS11c2VybmFtZVwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInVzZXJuYW1lXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi51c2VybmFtZS5maWVsZHN9IGlkPVwiU0ktdXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJwYXNzd29yZFwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucGFzc3dvcmQuZmllbGRzfSBpZD1cIlNJLXBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtVUi5VRlN1Ym1pdH0gdHlwZT1cInN1Ym1pdFwiPjxoMz5zaWduIGluPC9oMz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy8gXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vLyBcdH1cclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbCxcclxuICAgIHsgc2V0VG9rZW4sIHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShTaWduSW4pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBvc3RTbWFsbCBmcm9tICcuLi8uLi9wb3N0L1Bvc3RTbWFsbCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBBQ0NFUFRfTk9USUZJQ0FUSU9OLCBERUNMSU5FX05PVElGSUNBVElPTiwgQU5TV0VSX1FVRVNUSU9OIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hcy9tdXRhdGlvbnMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCB7IHVzZUZpZWxkLCB3ZWJzaXRlU3RhdHMsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcblxyXG5jb25zdCBOb3RpZiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2FjY2VwdE5vdGlmXSA9IHVzZU11dGF0aW9uKEFDQ0VQVF9OT1RJRklDQVRJT04sIHtcclxuICAgICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtkZWNsaW5lTm90aWZdID0gdXNlTXV0YXRpb24oREVDTElORV9OT1RJRklDQVRJT04sIHtcclxuICAgICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgfSlcclxuICAgIGNvbnN0IFthbnN3ZXJRdWVzdGlvbl0gPSB1c2VNdXRhdGlvbihBTlNXRVJfUVVFU1RJT04sIHtcclxuICAgICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBhbnN3ZXIgPSB1c2VGaWVsZCgndGV4dCcpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQW5zd2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFuc3dlclF1ZXN0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25JZDogcHJvcHMubm90aWYuX2lkLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGFuc3dlci5maWVsZHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb25zID0gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCA9PT0gcHJvcHMubm90aWYuX2lkID8gcmVzdWx0LmRhdGEuYW5zd2VyUXVlc3Rpb24gOiBuKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobmV3Tm90aWZpY2F0aW9ucylcclxuICAgICAgICAgICAgYW5zd2VyLnJlc2V0KClcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgYHJlcGxpZWQkOiB5b3UgaGF2ZSByZXBsaWVkIHRvICR7cHJvcHMubm90aWYudXNlckZyb20udXNlcm5hbWV9J3MgcXVlc3Rpb25gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFjY2VwdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBhY2NlcHQgPSBhd2FpdCBhY2NlcHROb3RpZih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbklkOiBwcm9wcy5ub3RpZi5faWR9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoYWNjZXB0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkID09PSBwcm9wcy5ub3RpZi5faWQgPyBhY2NlcHQuZGF0YS5hY2NlcHROb3RpZmljYXRpb24gOiBuKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobmV3Tm90aWZpY2F0aW9ucylcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgYGFjY2VwdGVkJDogeW91IGhhdmUgYWNjZXB0ZWQgJHtwcm9wcy5ub3RpZi51c2VyRnJvbS51c2VybmFtZX0gdG8geW91ciB0ZWFtYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVjbGluZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBkZWNsaW5lID0gYXdhaXQgZGVjbGluZU5vdGlmKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uSWQ6IHByb3BzLm5vdGlmLl9pZH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoZGVjbGluZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb25zID0gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCA9PT0gcHJvcHMubm90aWYuX2lkID8gZGVjbGluZS5kYXRhLmRlY2xpbmVOb3RpZmljYXRpb24gOiBuKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobmV3Tm90aWZpY2F0aW9ucylcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdkYW5nZXInLCBgZGVjbGluZWQkOiB5b3UgaGF2ZSBkZWNsaW5lZCAke3Byb3BzLm5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfSdzIHJlcXVlc3QgdG8gam9pbmAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgbm90aWYgPSBwcm9wcy5ub3RpZlxyXG4gICAgY29uc3Qgbm90aWZTdGF0dXNDb2xvciA9IG5vdGlmLmFjY2VwdGVkID09PSBudWxsID8gXHJcbiAgICAgICAgJ3JnYigyMjYsMTg0LDU5KScgOlxyXG4gICAgICAgIG5vdGlmLmFjY2VwdGVkID9cclxuICAgICAgICAgICAgbm90aWYucG9zdCA/XHJcbiAgICAgICAgICAgICAgICAncmdiKDUyLDE2Niw5NSknIDogJyM4YjhiOGInIFxyXG4gICAgICAgICAgICA6ICdyZ2IoMjU0LDUyLDc3KSdcclxuICAgIGlmIChub3RpZi51c2VyRnJvbS51c2VybmFtZSA9PT0gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpe1xyXG4gICAgICAgIGlmIChub3RpZi5hY2NlcHRlZCkge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PmFuc3dlcmVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5hbnN3ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm90aWYucG9zdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgR0NMaW5rU3RhdHMgPSB3ZWJzaXRlU3RhdHMobm90aWYucG9zdC5jb250YWN0TGluaylcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuZWRMaW5rID0gbm90aWYucG9zdC5jb250YWN0TGluay5zcGxpdCgnLycpWzJdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5ncm91cC9jb250YWN0IGxpbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bm90aWYucG9zdC5jb250YWN0TGlua30gY2xhc3NOYW1lPVwibi1qb2luLWxpbmsgbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBHQ0xpbmtTdGF0cy5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtHQ0xpbmtTdGF0cy5pY29ufSBjbGFzc05hbWU9XCJuLUpMLWljb25cIiBhbHQ9e0dDTGlua1N0YXRzLnRpdGxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjbGVhbmVkTGlua308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBtZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PmFuc3dlcmVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5hbnN3ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm90aWYucG9zdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgR0NMaW5rU3RhdHMgPSB3ZWJzaXRlU3RhdHMobm90aWYucG9zdC5jb250YWN0TGluaylcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuZWRMaW5rID0gbm90aWYucG9zdC5jb250YWN0TGluay5zcGxpdCgnLycpWzJdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+c2VudCBncm91cC9jb250YWN0IGxpbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bm90aWYucG9zdC5jb250YWN0TGlua30gY2xhc3NOYW1lPVwibi1qb2luLWxpbmsgbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBHQ0xpbmtTdGF0cy5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtHQ0xpbmtTdGF0cy5pY29ufSBjbGFzc05hbWU9XCJuLUpMLWljb25cIiBhbHQ9e0dDTGlua1N0YXRzLnRpdGxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjbGVhbmVkTGlua308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgbWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pm1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm90aWYuYWNjZXB0ZWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtcmVwbHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCI+cmVwbHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm4tbm90aWYtcmVwbHktZmllbGRcIiB7Li4uYW5zd2VyLmZpZWxkc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcigpfSBjbGFzc05hbWU9XCJuLUFvRC1vcHRpb24gbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiKDUyLDE2Niw5NSknfX0+YW5zd2VyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5tZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5hY2NlcHQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtQW9EXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gaGFuZGxlRGVjbGluZSgpfSBjbGFzc05hbWU9XCJuLUFvRC1vcHRpb24gbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiKDI1NCw1Miw3NyknfX0+ZGVjbGluZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gaGFuZGxlQWNjZXB0KCl9IGNsYXNzTmFtZT1cIm4tQW9ELW9wdGlvbiBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9fT5hY2NlcHQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke25vdGlmLnVzZXJUby51c2VybmFtZX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pm1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIHsgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCBzZXRBbGVydCwgcmVzZXRBbGVydCB9XHJcbikoTm90aWYpXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBMSVNUX09GX05PVElGSUNBVElPTlMgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyB9IGZyb20nLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCBOb3RpZiBmcm9tICcuL05vdGlmJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgYXBvbGxvLCB7YXBvbGxvQ2xpZW50fSBmcm9tICcuLi8uLi8uLi9saWIvYXBvbGxvJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBVVSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyVXRpbGl0aWVzLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuXHJcbmNvbnN0IFVzZXJOb3RpZkxpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdFF1ZXJ5ID0gdXNlUXVlcnkoTElTVF9PRl9OT1RJRklDQVRJT05TLCB7XHJcbiAgICAvLyAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uczogcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCl9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gY29uc29sZS5sb2cobm90aWZzTGlzdFF1ZXJ5KVxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdFF1ZXJ5ID0gYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIC8vICAgICBxdWVyeTogTElTVF9PRl9OT1RJRklDQVRJT05TLFxyXG4gICAgLy8gICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbnM6IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQpfVxyXG4gICAgLy8gfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcblxyXG4gICAgY29uc3QgW3NlbnRGaWx0ZXIsIHNldFNlbnRGaWx0ZXJdID0gdXNlU3RhdGUoJ3RvIHlvdScpXHJcbiAgICBjb25zdCBbc2hvd1NGREQsIHNldFNob3dTRkREXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3N0YXR1c0ZpbHRlciwgc2V0U3RhdHVzRmlsdGVyXSA9IHVzZVN0YXRlKCdwZW5kaW5nJylcclxuICAgIGNvbnN0IFtzaG93U3RhdHVzREQsIHNldFNob3dTdGF0dXNERF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBjb25zdCBub3RpZnNMaXN0Q29uZGl0aW9ucyA9IChxdWVyeSwgcmVkdWNlcikgPT4ge1xyXG4gICAgLy8gICAgIGlmICghcXVlcnkpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgLy8gICAgIGlmIChyZWR1Y2VyLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAvLyAgICAgaWYgKHJlZHVjZXJbMF0udXNlclRvKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChxdWVyeS5faWQgPT09IHJlZHVjZXJbMF0uX2lkICkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBxdWVyeVxyXG4gICAgLy8gfVxyXG4gICAgXHJcblxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdCA9IG5vdGlmc0xpc3RDb25kaXRpb25zKG5vdGlmc0xpc3RRdWVyeS5kYXRhLmxpc3RPZk5vdGlmaWNhdGlvbnMsIHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMpXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAobm90aWZzTGlzdCkge1xyXG4gICAgLy8gICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobm90aWZzTGlzdClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbbm90aWZzTGlzdCwgcHJvcHMsIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uc10pXHJcblxyXG4gICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9uc1swXS51c2VyVG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tncmlkQ29sdW1uOiAnMS8zJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc1dmgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIGNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbnRPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxPcHRpb25zID0gWydmcm9tIHlvdScsICd0byB5b3UnXVxyXG4gICAgICAgICAgICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VudEZpbHRlcihvcHRpb24pXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93U0ZERCghc2hvd1NGREQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFsbE9wdGlvbnMubWFwKG8gPT4gbyAhPT0gc2VudEZpbHRlciA/IDxkaXYgb25DbGljaz17KCkgPT4gb25PcHRpb25DbGljayhvKX0gY2xhc3NOYW1lPXtVVS5ORkRET3B0aW9ufSBrZXk9e2BTRkREJHtvfWB9PntvfTwvZGl2PiA6IG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbnRERCA9IHNob3dTRkREID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5Gcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GU3BsaXR0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbnRPcHRpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTogbnVsbFxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzT3B0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBbJ2FsbCcsICdhY2NlcHRlZCcsICdkZWNsaW5lZCcsICdwZW5kaW5nJywgJ21lc3NhZ2VzJ11cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uT3B0aW9uQ2xpY2sgPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzRmlsdGVyKG9wdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93U3RhdHVzREQoIXNob3dTdGF0dXNERClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxPcHRpb25zLm1hcChvID0+IG8gIT09IHN0YXR1c0ZpbHRlciA/IDxkaXYgb25DbGljaz17KCkgPT4gb25PcHRpb25DbGljayhvKX0gY2xhc3NOYW1lPXtgJHtvfS1vcHRpb24gJHtVVS5ORkRET3B0aW9ufWB9IGtleT17YFN0YXR1c0REJHtvfWB9PntvfTwvZGl2PiA6IG51bGwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzREQgPSBzaG93U3RhdHVzREQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GRHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZTcGxpdHRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c09wdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk6IG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ub3RpZkZpbHRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GQ3JlYXRvckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1VVLk5GTGFiZWx9PnN0YXR1czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORk9wdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dTdGF0dXNERCghc2hvd1N0YXR1c0REKX0gY2xhc3NOYW1lPXtgJHtzdGF0dXNGaWx0ZXJ9LW9wdGlvbiAke1VVLk5GT3B0aW9ufWB9PntzdGF0dXNGaWx0ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzRER9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GQ3JlYXRvckNvbnRhaW5lcn0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtVVS5ORkxhYmVsfT5zZW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZPcHRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dTRkREKCFzaG93U0ZERCl9IGNsYXNzTmFtZT17VVUuTkZPcHRpb259PntzZW50RmlsdGVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VudEREfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0dXNDb25kaXRpb25zID0gKG5vdGlmKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1c0ZpbHRlciA9PT0gJ2FsbCcpIHJldHVybiB0cnVlXHJcbiAgICAgICAgY29uc3Qgbm90aWZTdGF0dXMgPSBub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgICdwZW5kaW5nJyA6IFxyXG4gICAgICAgICAgICBub3RpZi5hY2NlcHRlZCA/XHJcbiAgICAgICAgICAgIG5vdGlmLnBvc3QgP1xyXG4gICAgICAgICAgICAgICAgJ2FjY2VwdGVkJyA6ICdtZXNzYWdlcydcclxuICAgICAgICAgICAgOiAnZGVjbGluZWQnXHJcbiAgICAgICAgaWYgKHN0YXR1c0ZpbHRlciA9PT0gbm90aWZTdGF0dXMpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW50Q29uZGl0aW9ucyA9IChub3RpZikgPT4ge1xyXG4gICAgICAgIGlmIChzZW50RmlsdGVyID09PSAnYWxsJykgcmV0dXJuIHRydWVcclxuICAgICAgICBjb25zdCBzZW50U3RhdHVzID0gbm90aWYudXNlckZyb20udXNlcm5hbWUgPT09IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lID9cclxuICAgICAgICAgICAgJ2Zyb20geW91JyA6ICd0byB5b3UnXHJcbiAgICAgICAgaWYgKHNlbnRGaWx0ZXIgPT09IHNlbnRTdGF0dXMpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXNDb25kaXRpb25zKG4pICYmIHNlbnRDb25kaXRpb25zKG4pKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxOb3RpZiBub3RpZj17bn0ga2V5PXtgVU4ke24uX2lkfWB9Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH0pLnJldmVyc2UoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJVdGlsLW5vdGlmXCI+XHJcbiAgICAgICAgICAgIDxGaWx0ZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzEwcHgnfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdncmlkJywgcm93R2FwOiAnMTBweCcsIHdpZHRoOiAnOTUlJywgbWFyZ2luOiAnYXV0bycsIG1hcmdpblRvcDogJzEwcHgnfX0+XHJcbiAgICAgICAgICAgIHtzaG93Tm90aWZpY2F0aW9uc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxMHB4J319IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVc2VyTm90aWZMaXN0KSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyaWdnZXJBbGVydCA9ICh0eXBlLCBtZXNzYWdlLCBzZXRBbGVydCwgcmVzZXRBbGVydCkgPT4ge1xyXG4gICAgLy8gdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ3N1Y2Nlc3M6IGFsZXJ0IGJhciBpcyB3b3JraW5nJywgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICBjb25zdCBjbGVhbmVkTWVzc2FnZSA9IDxwIHN0eWxlPXt7bWFyZ2luOiAwfX0+PHN0cm9uZz57bWVzc2FnZS5zcGxpdCgnJDonKVswXX08L3N0cm9uZz46IHttZXNzYWdlLnNwbGl0KCckOicpWzFdfTwvcD5cclxuICAgIGlmICh0eXBlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICBzZXRBbGVydCh7Y29sb3I6ICdyZ2IoNTIsMTY2LDk1KScsIHRleHRDb2xvcjogJ3doaXRlJywgbWVzc2FnZTogY2xlYW5lZE1lc3NhZ2V9KVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICd3YXJuaW5nJykge1xyXG4gICAgICAgIHNldEFsZXJ0KHtjb2xvcjogJ3JnYigyMjYsMTg0LDU5KScsIHRleHRDb2xvcjogJ3doaXRlJywgbWVzc2FnZTogY2xlYW5lZE1lc3NhZ2V9KVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdkYW5nZXInKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoe2NvbG9yOiAncmdiKDI1NCw1Miw3NyknLCB0ZXh0Q29sb3I6ICd3aGl0ZScsIG1lc3NhZ2U6IGNsZWFuZWRNZXNzYWdlfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdlYnNpdGVTdGF0cyA9ICh1cmwpID0+IHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gdXJsLnNwbGl0KCcvJylbMl0gPyB1cmwuc3BsaXQoJy8nKVsyXSA6ICcnXHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3VuaWxvdXMnKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvbG9nby9sb2dvVy5zdmcnLCBjb2xvcjogJyMyODI4MjgnLCB0aXRsZTogJ1VuaWxvdXMnfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdkaXNjb3JkJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2Rpc2NvcmQuc3ZnJywgY29sb3I6ICcjNzI4OURBJywgdGl0bGU6ICdEaXNjb3JkJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygndHJlbGxvJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL3RyZWxsby5zdmcnLCBjb2xvcjogJyMwMDc5QkYnLCB0aXRsZTogJ1RyZWxsbyd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3doYXRzYXBwJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL3doYXRzYXBwLnN2ZycsIGNvbG9yOiAnIzI1RDM2NicsIHRpdGxlOiAnV2hhdHNBcHAnfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdtb25kYXknKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJ2h0dHBzOi8vaS5pbWd1ci5jb20vYmdhUVpjOS5wbmcnLCBjb2xvcjogJyMzMzMzMzMnLCB0aXRsZTogJ01vbmRheSd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3NsYWNrJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL3NsYWNrLnN2ZycsIGNvbG9yOiAnIzRBMTU0QicsIHRpdGxlOiAnU2xhY2snfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdsaW5rZWRpbicpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9saW5rZWRpbi5zdmcnLCBjb2xvcjogJ3JnYig0MCwxMDMsMTc4KScsIHRpdGxlOiAnTGlua2VkSW4nfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdmYWNlYm9vaycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9mYWNlYm9vay5zdmcnLCBjb2xvcjogJ3JnYig2NiwxMDMsMTc4KScsIHRpdGxlOiAnRmFjZWJvb2snfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdpbmRlZWQnKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJ2h0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRmdvaGlyZS13ZWJzaXRlLnMzLmFtYXpvbmF3cy5jb20lMkZpbWclMkZpbnRlZ3JhdGlvbi1sb2dvcyUyRmluZGVlZC1pY29uLmpwZyZmPTEmbm9mYj0xJywgY29sb3I6ICcjMjgyODI4JywgdGl0bGU6ICdJbmRlZWQnfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdnaXRodWInKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvZ2l0SHViLnN2ZycsIGNvbG9yOiAnIzMzMycsIHRpdGxlOiAnR2l0SHViJ31cclxuICAgIH1cclxuICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvaW50ZXJuZXQuc3ZnJywgY29sb3I6ICcjNDg0ODQ4Jyx0aXRsZTogJ3Vua25vd24gdXJsJ31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZpZWxkID0gKHR5cGUpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoJycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNldFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFsbGV0dGVHZW5lcmF0b3IgPSAocHJpbWFyeUNvbG9yKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvciA9IHByaW1hcnlDb2xvclxyXG4gICAgY29uc3QgY29sb3JzID0gY29sb3Iuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykubWFwKGMgPT4gTnVtYmVyKGMpKVxyXG4gICAgY29uc3QgaGlnaGVyQ29sb3IgPSBgcmdiKCR7Y29sb3JzLm1hcChjID0+IGMgKyAzMCkuam9pbignLCcpfSlgXHJcbiAgICBsZXQgaXNEYXJrID0gKChjb2xvcnNbMF0gKyBjb2xvcnNbMV0gKyBjb2xvcnNbMl0pIC8gMykgPCAxMjcgP1xyXG4gICAgICAgIHRydWUgOiBmYWxzZVxyXG4gICAgLy8gY29uc3QgaXNEYXJrID0gZmFsc2VcclxuICAgIGNvbnN0IGNvbG9yUGFsbGV0dGUgPSBpc0RhcmsgPyBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIGhpZ2hlckNvbG9yLFxyXG4gICAgICAgICAgICAvLyB1c2VySWNvbjogdXNlckljb25XLFxyXG4gICAgICAgICAgICAvLyBoYW5kc2hha2VJY29uOiBoYW5kc2hha2VJY29uVyxcclxuICAgICAgICAgICAgLy8gcGx1c0ljb246IHBsdXNJY29uVyxcclxuICAgICAgICAgICAgLy8gc2hhcmVJY29uOiBzaGFyZUljb25XLFxyXG4gICAgICAgICAgICAvLyBzaHJpbmtJY29uOiBzaHJpbmtXLFxyXG4gICAgICAgICAgICAvLyBjb2xvcmVkOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBoZWFydEljb246IDxzdmcgZmlsbD17Y29sb3J9IHZpZXdCb3g9XCIwIC0yOCA1MTIuMDAwMDIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNDcxLjM4MjgxMiA0NC41NzgxMjVjLTI2LjUwMzkwNi0yOC43NDYwOTQtNjIuODcxMDkzLTQ0LjU3ODEyNS0xMDIuNDEwMTU2LTQ0LjU3ODEyNS0yOS41NTQ2ODcgMC01Ni42MjEwOTQgOS4zNDM3NS04MC40NDkyMTggMjcuNzY5NTMxLTEyLjAyMzQzOCA5LjMwMDc4MS0yMi45MTc5NjkgMjAuNjc5Njg4LTMyLjUyMzQzOCAzMy45NjA5MzgtOS42MDE1NjItMTMuMjc3MzQ0LTIwLjUtMjQuNjYwMTU3LTMyLjUyNzM0NC0zMy45NjA5MzgtMjMuODI0MjE4LTE4LjQyNTc4MS01MC44OTA2MjUtMjcuNzY5NTMxLTgwLjQ0NTMxMi0yNy43Njk1MzEtMzkuNTM5MDYzIDAtNzUuOTEwMTU2IDE1LjgzMjAzMS0xMDIuNDE0MDYzIDQ0LjU3ODEyNS0yNi4xODc1IDI4LjQxMDE1Ni00MC42MTMyODEgNjcuMjIyNjU2LTQwLjYxMzI4MSAxMDkuMjkyOTY5IDAgNDMuMzAwNzgxIDE2LjEzNjcxOSA4Mi45Mzc1IDUwLjc4MTI1IDEyNC43NDIxODcgMzAuOTkyMTg4IDM3LjM5NDUzMSA3NS41MzUxNTYgNzUuMzU1NDY5IDEyNy4xMTcxODggMTE5LjMxMjUgMTcuNjEzMjgxIDE1LjAxMTcxOSAzNy41NzgxMjQgMzIuMDI3MzQ0IDU4LjMwODU5MyA1MC4xNTIzNDQgNS40NzY1NjMgNC43OTY4NzUgMTIuNTAzOTA3IDcuNDM3NSAxOS43OTI5NjkgNy40Mzc1IDcuMjg1MTU2IDAgMTQuMzE2NDA2LTIuNjQwNjI1IDE5Ljc4NTE1Ni03LjQyOTY4NyAyMC43MzA0NjktMTguMTI4OTA3IDQwLjcwNzAzMi0zNS4xNTIzNDQgNTguMzI4MTI1LTUwLjE3MTg3NiA1MS41NzQyMTktNDMuOTQ5MjE4IDk2LjExNzE4OC04MS45MDYyNSAxMjcuMTA5Mzc1LTExOS4zMDQ2ODcgMzQuNjQ0NTMyLTQxLjgwMDc4MSA1MC43NzczNDQtODEuNDM3NSA1MC43NzczNDQtMTI0Ljc0MjE4NyAwLTQyLjA2NjQwNy0xNC40MjU3ODEtODAuODc4OTA3LTQwLjYxNzE4OC0xMDkuMjg5MDYzem0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgc2hhcmVJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjIgNTEyIDUxMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTUxMiAyMzMuODIwMzEyLTIxMi43NzczNDQtMjMzLjMyMDMxMnYxMzkuMjAzMTI1aC00NS4yMzgyODFjLTE0MC4yNzM0MzcgMC0yNTMuOTg0Mzc1IDExMy43MTA5MzctMjUzLjk4NDM3NSAyNTMuOTg0Mzc1djczLjc2OTUzMWwyMC4wOTM3NS0yMi4wMTk1MzFjNjguMzE2NDA2LTc0Ljg1MTU2MiAxNjQuOTgwNDY5LTExNy41IDI2Ni4zMjQyMTktMTE3LjVoMTIuODA0Njg3djEzOS4yMDMxMjV6bTAgMFwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vICAgICBoYW5kc2hha2VJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSBpZD1cIkNhcGFfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGc+PHBhdGggZD1cIm0zODYuMTU4IDguNzMzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTM2LjQ3OCAzNi40NzhjLTE5LjkyMy0xMC43NjktNDUuMzg2LTcuNzQ4LTYyLjE5OSA5LjA2NWwtNjkuNDE2IDY5LjQxNmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGwyNS4wOS0yNS4wOWMzOC45MTIgMzIuNDQ4IDkyLjI3MyA0Mi42IDE0MC41OTEgMjYuMjUybDY2LjgyIDY2LjgyYzguMzc2LTE4LjE5MiA1LjgzNC00MC4yMTYtNy42NS01Ni4wNjlsMzUuMDU4LTM1LjA1OGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTMtLjEwMS0uMTAxLS4yMTEtLjE4Ny0uMzE1LS4yODRsLjAxNS0uMDE1elwiLz48cGF0aCBkPVwibTI3Ni40NTkgNDAwLjAxMWMtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDYgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwbC00Ni4yNzIgNDYuMjcyYy0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwbDQ2LjI3Mi00Ni4yNzJjMTQuMDQ0LTE0LjA0MyAxNC4wNDQtMzYuODA3LjAwMy01MC44NDh6XCIvPjxwYXRoIGQ9XCJtMjc2LjE2IDE4OC41MDQtNy4yNDggNy4yNDhjLTI1LjcxNSAyNS43MTUtNjcuNTU4IDI1LjcxNS05My4yNzMgMHMtMjUuNzE1LTY3LjU1OCAwLTkzLjI3M2w1Ny41MTQtNTcuNTE0Yy0xNi4xNTctNi4xODgtMzQuNTQ3LTQuODkxLTQ5Ljc2OCAzLjg5MmwtMzYuMzI5LTM2LjMyOWMtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0xMjEuNDUgMTIxLjQ0OWMtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzbDM2LjMyOSAzNi4zMjljLTguNzgzIDE1LjIyMS0xMC4wOCAzMy42MTEtMy44OTIgNDkuNzY4bDE1LjAyOS0xNS4wMjljMjUuNzE1LTI1LjcxNSA2Ny41NTgtMjUuNzE1IDkzLjI3MyAwIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0czE1LjMxNCAyMC44OTUgMTcuODU0IDMyLjk5M2MxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODUzIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0IDI1LjcxNSAyNS43MTUgMjUuNzE1IDY3LjU1OCAwIDkzLjI3M2wtMTguNTYyIDE4LjU2MiA2LjQ5NyA2LjQ5N2MxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3bC04NC40NzUtODQuNDc1Yy00My45OTYgOS43MDctODkuOTkyIDIuMDk3LTEyOC4zNTgtMjAuNzYxelwiLz48L2c+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHRDb2xvcjogJyMyODI4MjgnLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgaGlnaGVyQ29sb3IsXHJcbiAgICAgICAgICAgIC8vIHVzZXJJY29uOiB1c2VySWNvbkIsXHJcbiAgICAgICAgICAgIC8vIGhhbmRzaGFrZUljb246IGhhbmRzaGFrZUljb25CLFxyXG4gICAgICAgICAgICAvLyBwbHVzSWNvbjogcGx1c0ljb25CLFxyXG4gICAgICAgICAgICAvLyBzaGFyZUljb246IHNoYXJlSWNvbkIsXHJcbiAgICAgICAgICAgIC8vIHNocmlua0ljb246IHNocmlua0IsXHJcbiAgICAgICAgICAgIC8vIGNvbG9yZWQ6IHtcclxuICAgICAgICAgICAgLy8gICAgIGhlYXJ0SWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gdmlld0JveD1cIjAgLTI4IDUxMi4wMDAwMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm00NzEuMzgyODEyIDQ0LjU3ODEyNWMtMjYuNTAzOTA2LTI4Ljc0NjA5NC02Mi44NzEwOTMtNDQuNTc4MTI1LTEwMi40MTAxNTYtNDQuNTc4MTI1LTI5LjU1NDY4NyAwLTU2LjYyMTA5NCA5LjM0Mzc1LTgwLjQ0OTIxOCAyNy43Njk1MzEtMTIuMDIzNDM4IDkuMzAwNzgxLTIyLjkxNzk2OSAyMC42Nzk2ODgtMzIuNTIzNDM4IDMzLjk2MDkzOC05LjYwMTU2Mi0xMy4yNzczNDQtMjAuNS0yNC42NjAxNTctMzIuNTI3MzQ0LTMzLjk2MDkzOC0yMy44MjQyMTgtMTguNDI1NzgxLTUwLjg5MDYyNS0yNy43Njk1MzEtODAuNDQ1MzEyLTI3Ljc2OTUzMS0zOS41MzkwNjMgMC03NS45MTAxNTYgMTUuODMyMDMxLTEwMi40MTQwNjMgNDQuNTc4MTI1LTI2LjE4NzUgMjguNDEwMTU2LTQwLjYxMzI4MSA2Ny4yMjI2NTYtNDAuNjEzMjgxIDEwOS4yOTI5NjkgMCA0My4zMDA3ODEgMTYuMTM2NzE5IDgyLjkzNzUgNTAuNzgxMjUgMTI0Ljc0MjE4NyAzMC45OTIxODggMzcuMzk0NTMxIDc1LjUzNTE1NiA3NS4zNTU0NjkgMTI3LjExNzE4OCAxMTkuMzEyNSAxNy42MTMyODEgMTUuMDExNzE5IDM3LjU3ODEyNCAzMi4wMjczNDQgNTguMzA4NTkzIDUwLjE1MjM0NCA1LjQ3NjU2MyA0Ljc5Njg3NSAxMi41MDM5MDcgNy40Mzc1IDE5Ljc5Mjk2OSA3LjQzNzUgNy4yODUxNTYgMCAxNC4zMTY0MDYtMi42NDA2MjUgMTkuNzg1MTU2LTcuNDI5Njg3IDIwLjczMDQ2OS0xOC4xMjg5MDcgNDAuNzA3MDMyLTM1LjE1MjM0NCA1OC4zMjgxMjUtNTAuMTcxODc2IDUxLjU3NDIxOS00My45NDkyMTggOTYuMTE3MTg4LTgxLjkwNjI1IDEyNy4xMDkzNzUtMTE5LjMwNDY4NyAzNC42NDQ1MzItNDEuODAwNzgxIDUwLjc3NzM0NC04MS40Mzc1IDUwLjc3NzM0NC0xMjQuNzQyMTg3IDAtNDIuMDY2NDA3LTE0LjQyNTc4MS04MC44Nzg5MDctNDAuNjE3MTg4LTEwOS4yODkwNjN6bTAgMFwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vICAgICBzaGFyZUljb246IDxzdmcgZmlsbD17Y29sb3J9IHZpZXdCb3g9XCIwIC0yMiA1MTIgNTExXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNTEyIDIzMy44MjAzMTItMjEyLjc3NzM0NC0yMzMuMzIwMzEydjEzOS4yMDMxMjVoLTQ1LjIzODI4MWMtMTQwLjI3MzQzNyAwLTI1My45ODQzNzUgMTEzLjcxMDkzNy0yNTMuOTg0Mzc1IDI1My45ODQzNzV2NzMuNzY5NTMxbDIwLjA5Mzc1LTIyLjAxOTUzMWM2OC4zMTY0MDYtNzQuODUxNTYyIDE2NC45ODA0NjktMTE3LjUgMjY2LjMyNDIxOS0xMTcuNWgxMi44MDQ2ODd2MTM5LjIwMzEyNXptMCAwXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gICAgIGhhbmRzaGFrZUljb246IDxzdmcgZmlsbD17Y29sb3J9IGlkPVwiQ2FwYV8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Zz48cGF0aCBkPVwibTM4Ni4xNTggOC43MzNjLTUuODU4LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMzYuNDc4IDM2LjQ3OGMtMTkuOTIzLTEwLjc2OS00NS4zODYtNy43NDgtNjIuMTk5IDkuMDY1bC02OS40MTYgNjkuNDE2Yy0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwbDI1LjA5LTI1LjA5YzM4LjkxMiAzMi40NDggOTIuMjczIDQyLjYgMTQwLjU5MSAyNi4yNTJsNjYuODIgNjYuODJjOC4zNzYtMTguMTkyIDUuODM0LTQwLjIxNi03LjY1LTU2LjA2OWwzNS4wNTgtMzUuMDU4YzUuODU4LTUuODU4IDUuODU4LTE1LjM1NSAwLTIxLjIxMy0uMTAxLS4xMDEtLjIxMS0uMTg3LS4zMTUtLjI4NGwuMDE1LS4wMTV6XCIvPjxwYXRoIGQ9XCJtMjc2LjQ1OSA0MDAuMDExYy0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NiAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDBsLTQ2LjI3MiA0Ni4yNzJjLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDBsNDYuMjcyLTQ2LjI3MmMxNC4wNDQtMTQuMDQzIDE0LjA0NC0zNi44MDcuMDAzLTUwLjg0OHpcIi8+PHBhdGggZD1cIm0yNzYuMTYgMTg4LjUwNC03LjI0OCA3LjI0OGMtMjUuNzE1IDI1LjcxNS02Ny41NTggMjUuNzE1LTkzLjI3MyAwcy0yNS43MTUtNjcuNTU4IDAtOTMuMjczbDU3LjUxNC01Ny41MTRjLTE2LjE1Ny02LjE4OC0zNC41NDctNC44OTEtNDkuNzY4IDMuODkybC0zNi4zMjktMzYuMzI5Yy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTEyMS40NSAxMjEuNDQ5Yy01Ljg1OCA1Ljg1OC01Ljg1OCAxNS4zNTUgMCAyMS4yMTNsMzYuMzI5IDM2LjMyOWMtOC43ODMgMTUuMjIxLTEwLjA4IDMzLjYxMS0zLjg5MiA0OS43NjhsMTUuMDI5LTE1LjAyOWMyNS43MTUtMjUuNzE1IDY3LjU1OC0yNS43MTUgOTMuMjczIDAgOS4zNzQgOS4zNzQgMTUuMzE1IDIwLjg5NSAxNy44NTQgMzIuOTkyIDEyLjA5OCAyLjU0IDIzLjYxOCA4LjQ4IDMyLjk5MiAxNy44NTRzMTUuMzE0IDIwLjg5NSAxNy44NTQgMzIuOTkzYzEyLjA5OCAyLjU0IDIzLjYxOCA4LjQ4IDMyLjk5MiAxNy44NTMgOS4zNzQgOS4zNzQgMTUuMzE1IDIwLjg5NSAxNy44NTQgMzIuOTkyIDEyLjA5OCAyLjU0IDIzLjYxOCA4LjQ4IDMyLjk5MiAxNy44NTQgMjUuNzE1IDI1LjcxNSAyNS43MTUgNjcuNTU4IDAgOTMuMjczbC0xOC41NjIgMTguNTYyIDYuNDk3IDYuNDk3YzE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDdsLTg0LjQ3NS04NC40NzVjLTQzLjk5NiA5LjcwNy04OS45OTIgMi4wOTctMTI4LjM1OC0yMC43NjF6XCIvPjwvZz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbG9yUGFsbGV0dGVcclxuICAgIH1cclxufSIsImltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwibmV4dC1hcG9sbG9cIlxyXG4vLyBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcImFwb2xsby1ib29zdFwiXHJcblxyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50J1xyXG5pbXBvcnQgeyBjcmVhdGVIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnXHJcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknXHJcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0J1xyXG4vLyBodHRwczovL3VuaWxvdXMtZ3JhcGhxbC1iYWNrZW5kLmhlcm9rdWFwcC5jb20vZ3JhcGhxbFxyXG5cclxuLy8gaHR0cHM6Ly91bmlsb3VzLWJhY2stZW5kLWRldi5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuLy8gaHR0cHM6Ly9wcm9qZWN0dS1iYWNrLWVuZC0yMDIwLmhlcm9rdWFwcC5jb20vZ3JhcGhxbFxyXG4vLyBodHRwczovL3VuaWxvdXMtYmFjay1lbmQtbmV4dGpzLmhlcm9rdWFwcC5jb20vZ3JhcGhxbFxyXG5cclxuY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgdXJpOiAnaHR0cHM6Ly91bmlsb3VzLWJhY2stZW5kLW5leHRqcy5oZXJva3VhcHAuY29tL2dyYXBocWwnLFxyXG59KVxyXG5cclxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IG51bGxcclxuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgVW5pbG91cyoyMDAwICR7dG9rZW59YCA6IG51bGwsXHJcbiAgICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcclxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxufSlcclxuXHJcbi8vIGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4vLyAgIHVyaTogJ2h0dHBzOi8vcHJvamVjdHUtYmFjay1lbmQtMjAyMC5oZXJva3VhcHAuY29tL2dyYXBocWwnLFxyXG4vLyAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4vLyAgIHNzck1vZGU6IHRydWVcclxuLy8gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oYXBvbGxvQ2xpZW50KVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIUCBmcm9tICcuLi9zdHlsZXMvcGFnZXMvaG9tZVBhZ2UubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgQ29udHJpYnV0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cmlidXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vbGliL2Fwb2xsbydcclxuaW1wb3J0IHtGSU5EX1BPU1QsIFNFQVJDSF9QT1NUUywgU09NRV9VU0VSU30gZnJvbSAnLi4vc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3QvUG9zdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7c2V0VXNlckREfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy91c2VyREQnXHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gcHJvcHMuc29tZVVzZXJzLm1hcCh1ID0+IChcclxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHt1LnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake0hQLnVzZXJJbnN9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hQLnVzZXJQcmltYXJ5fT57dS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIUC51c2VyU2Vjb25kYXJ5fT4wIHByb2plY3RzPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApKVxyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uSW5DUCA9IHByb3BzLmN1cnJlbnRVc2VyID9cclxuICAgICAgICBwcm9wcy50b2tlbiA/IFxyXG4gICAgICAgICAgICBwcm9wcy5jdXJyZW50VXNlci5wb3N0cy5sZW5ndGggPyAyIDpcclxuICAgICAgICAgICAgcHJvcHMuY3VycmVudFVzZXIgPyAxIDogMFxyXG4gICAgICAgIDogMFxyXG4gICAgOiAwXHJcbiAgICBjb25zdCBidXR0b25zRm9yQ1AgPSBbXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuc2V0VXNlckREKCdzaWduaW4nKX0gY2xhc3NOYW1lPXtgJHtIUC5idXR0b259ICR7SFAuYnRuRGFya30gJHtIUC5hZGphY2VudEhhbGZXaWR0aEJ1dHRvbnN9YH0+U2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFVzZXJERCgncmVnaXN0ZXInKX0gY2xhc3NOYW1lPXtgJHtIUC5idXR0b259ICR7SFAuYnRuREx9ICR7SFAuYWRqYWNlbnRIYWxmV2lkdGhCdXR0b25zfWB9PlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3Rmb3JtcGFnZVwiPjxhIGNsYXNzTmFtZT17YCR7SFAuYnV0dG9ufSAke0hQLmJ0bkRhcmt9IG5ldXRyYWxpemUtbGlua2B9PkNyZWF0ZSBwb3N0PC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuc2V0VXNlckREKCdzaWduaW4nKX0gY2xhc3NOYW1lPXtgJHtIUC5idXR0b259ICR7SFAuYnRuRGFya31gfSBzdHlsZT17e29wYWNpdHk6IDAuNywgY3Vyc29yOiAnYXV0byd9fT5TaGFyZSBwb3N0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBdXHJcbiAgICBjb25zdCBjb2xvcnNGb3JDUCA9IFtcclxuICAgICAgICBwb3NpdGlvbkluQ1AgPj0gMSA/IHtjb2xvcjogJ3JnYig1MiwxNjYsOTUpJ30gOiBudWxsLFxyXG4gICAgICAgIHBvc2l0aW9uSW5DUCA+PSAyID8ge2NvbG9yOiAncmdiKDUyLDE2Niw5NSknfSA6IG51bGwsXHJcbiAgICAgICAgcG9zaXRpb25JbkNQID49IDMgPyB7Y29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9IDogbnVsbCxcclxuICAgIF1cclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmN1cnJlbnRVc2VyKVxyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uSW5KUCA9IHByb3BzLmN1cnJlbnRVc2VyID8gXHJcbiAgICAgICAgcHJvcHMudG9rZW4gPyBcclxuICAgICAgICAgICAgcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5sZW5ndGggPyAzIDpcclxuICAgICAgICAgICAgcHJvcHMuY3VycmVudFVzZXIgPyAxIDogMFxyXG4gICAgICAgIDogMFxyXG4gICAgOiAwXHJcbiAgICBjb25zdCBidXR0b25zRm9ySlAgPSBbXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuc2V0VXNlckREKCdzaWduaW4nKX0gY2xhc3NOYW1lPXtgJHtIUC5idXR0b259ICR7SFAuYnRuRGFya30gJHtIUC5hZGphY2VudEhhbGZXaWR0aEJ1dHRvbnN9YH0+U2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFVzZXJERCgncmVnaXN0ZXInKX0gY2xhc3NOYW1lPXtgJHtIUC5idXR0b259ICR7SFAuYnRuREx9ICR7SFAuYWRqYWNlbnRIYWxmV2lkdGhCdXR0b25zfWB9PlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VsdHMvYWxsXCI+PGEgY2xhc3NOYW1lPXtgJHtIUC5idXR0b259ICR7SFAuYnRuRGFya30gbmV1dHJhbGl6ZS1saW5rYH0+RmluZCBhIHByb2plY3Q8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PixcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake0hQLmJ1dHRvbn0gJHtIUC5idG5EYXJrfWB9IHN0eWxlPXt7b3BhY2l0eTogMC43LCBjdXJzb3I6ICdhdXRvJ319PkpvaW4gYSBwcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7SFAuYnV0dG9ufSAke0hQLmJ0bkRhcmt9YH0gc3R5bGU9e3tvcGFjaXR5OiAwLjcsIGN1cnNvcjogJ2F1dG8nfX0+Q2hlY2sgbm90aWZpY2F0aW9uczwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXVxyXG4gICAgY29uc3QgY29sb3JzRm9ySlAgPSBbXHJcbiAgICAgICAgcG9zaXRpb25JbkpQID49IDEgPyB7Y29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9IDogbnVsbCxcclxuICAgICAgICBwb3NpdGlvbkluSlAgPj0gMiA/IHtjb2xvcjogJ3JnYig1MiwxNjYsOTUpJ30gOiBudWxsLFxyXG4gICAgICAgIHBvc2l0aW9uSW5KUCA+PSAzID8ge2NvbG9yOiAncmdiKDUyLDE2Niw5NSknfSA6IG51bGwsXHJcbiAgICAgICAgcG9zaXRpb25JbkpQID49IDQgPyB7Y29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9IDogbnVsbCxcclxuICAgIF1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+VW5pbG91czwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vaS5pbWd1ci5jb20vZDZic25SeC5wbmdcIiBrZXk9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTG9va2luZyB0byBqb2luIG9yIG1ha2UgYSB0ZWFtLCBVbmlsb3VzIHdpbGwgaGVscCB5b3UgbWFrZSBpdCBoYXBwZW4hIEpvaW4gb3VyIHNraWxsZWQgY29tbXVuaXR5IG9mIHBlb3BsZSBsb29raW5nIHRvIG1ha2Ugc29tZXRoaW5nIGdyZWF0LlwiIGtleT1cImRlc2NyaXB0aW9uXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIUC53cmFwcGVyfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SFAucm93Q29udGFpbmVyfSBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0hQLnRleHRCb3h9ICR7SFAubmFycm93fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtIUC5sZWZ0QWxpZ259PkJ1aWxkIHlvdXIgdGVhbSwgY3JlYXRlIHlvdXIgcHJvamVjdDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17SFAubGdQYXJhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaWxvdXMgaXMgYSBwbGF0Zm9ybSB1bmlxdWVseSBkZXNpZ25lZCBmb3IgYnVpbGRpbmcgdGVhbXMuIEF0IHRoZSBjZW50ZXIgb2YgVW5pbG91cyBsaWVzIHRoZSBwcm9qZWN0IHBvc3Qgd2hpY2ggcHJvdmlkZXMgYm90aCB0aGUgaW5mb3JtYXRpb24gYSB1c2VyIHdvdWxkIHdhbnQgdG8ga25vdyBhYm91dCB0aGUgcHJvamVjdCwgYW5kIGZlYXR1cmVzIG5lY2Vzc2FyeSBmb3IgYW4gZWZmZWN0aXZlIGpvaW5pbmcgcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7SFAuYnV0dG9ufSAke0hQLmJ0bkxpZ2h0fSAke0hQLmFkamFjZW50SGFsZldpZHRoQnV0dG9uc30gbmV1dHJhbGl6ZS1saW5rYH0gaHJlZj1cIiNDQVBDYXJkXCI+R2V0IHN0YXJ0ZWQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XVwiIGFzPVwiL3Jlc3VsdHMvYWxsXCI+PGEgY2xhc3NOYW1lPXtgJHtIUC5idXR0b259ICR7SFAuYnRuTER9ICR7SFAuYWRqYWNlbnRIYWxmV2lkdGhCdXR0b25zfSBuZXV0cmFsaXplLWxpbmtgfT5TdGFydCBicm93c2luZzwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtIUC5pbWFnZUJveH0gJHtIUC5uYXJyb3d9ICR7SFAuYnVpbGRZb3VyVGVhbU91dGVyQm94fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7SFAuYnVpbGRZb3VyVGVhbUltYWdlfSAke0hQLmJ1aWxkWW91clRlYW1Jbm5lckJveH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0IHBvc3Q9e3Byb3BzLnBvc3R9IHNob3J0IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIkNBUENhcmRcIiBjbGFzc05hbWU9e0hQLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hQLnJvd0NvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17SFAuY2FyZH0gc3R5bGU9e3tqdXN0aWZ5U2VsZjogJ2VuZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17SFAubGVmdEFsaWdufT5DcmVhdGUgYSBwcm9qZWN0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hQLmxnUGFyYX0+VGhlIHByb2plY3Qgc2VydmVzIGFzIHRoZSB2ZWhpY2xlIG9mIFVuaWxvdXMgYXMgaXQgaXMgdGhlIG1ldGhvZCB0byB3aGljaCB0aGUgdGVhbSBpcyBidWlsdC4gUHJvamVjdHMgYXJlIGF1dG9tYXRpY2FsbHkgZGlzcGxheWVkIG9uIG91ciByZXN1bHRzIHBhZ2Ugd2hlcmUgdGhleSBhcmUgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e0hQLmxpbmtEYXJrfSBzdHlsZT17e29wYWNpdHk6IDF9fT5vcmRlcmVkIG9uIGVmZmVjdGl2ZW5lc3MgYW5kIHRpbWUgb2YgcG9zdGluZzwvYT48L0xpbms+LiBXZSAgcHJvdmlkZSB5b3Ugd2l0aCBhbGwgb2YgdGhlIG5lY2Vzc2FyeSBmZWF0dXJlcyB0byBwaXRjaCB5b3VyIHByb2plY3QgaW4gYW4gYXR0cmFjdGl2ZSB3YXkgYWxsIHRoZSB3aGlsZSBjb250YWluaW5nIGFsbCBvZiB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIHRoZSB1c2VyIHdvdWxkIHdhbnQuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9e0hQLmNhcmRMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17Y29sb3JzRm9yQ1BbMF19IGNsYXNzTmFtZT17SFAuY2FyZExpc3RJdGVtfT5TaWduIGluIG9yIFJlZ2lzdGVyPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17Y29sb3JzRm9yQ1BbMV19IGNsYXNzTmFtZT17SFAuY2FyZExpc3RJdGVtfT5DcmVhdGUgcG9zdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2NvbG9yc0ZvckNQWzJdfSBjbGFzc05hbWU9e0hQLmNhcmRMaXN0SXRlbX0+PHNwYW4gc3R5bGU9e3tvcGFjaXR5OiAwLjd9fT4oT3B0aW9uYWwpPC9zcGFuPiBTaGFyZSBpdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxNzBweCd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9uc0ZvckNQW3Bvc2l0aW9uSW5DUF19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hQLmNhcmR9IHN0eWxlPXt7anVzdGlmeVNlbGY6ICdzdGFydCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17SFAubGVmdEFsaWdufT5Kb2luIGEgcHJvamVjdDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIUC5sZ1BhcmF9PldoaWxlIHRoZSBwcm9qZWN0IGlzIHRoZSB2ZWhpY2xlIG9mIFVuaWxvdXMsIGl0cyB1c2VycyBtYWtlIGl0IG1vdmUuIE1hbnkgb2YgdGhlIHByb2plY3RzIHBvc3RlZCBhcmUgcm91Z2ggaWRlYXMgb24gd2hhdCBpdCBjb3VsZCBiZSwgYnkgam9pbmluZyBhIHByb2plY3Qgd2UgZW5jb3VyYWdlIHRoYXQgdGhlIHVzZXJzIGpvaW5pbmcgd29yayBzaWRlIGJ5IHNpZGUgd2l0aCB0aGUgY3JlYXRvciB0byBpbWFnaW5lIHNvbWV0aGluZyBiZXR0ZXIuIFdlIG9mZmVyIGEgdmFyaWV0eSBvZiBwcm9qZWN0cyByYW5naW5nIGFsbCBmaWVsZHMgYW5kIGludGVyZXN0cyBhcyBVbmlsb3VzIHdhcyBidWlsdCB3aXRoIGV2ZXJ5b25lIGluIG1pbmQuIFVuaWxvdXMgaGFzIG1hZGUgaXRzIHByb2plY3Qgam9pbmluZyBwcm9jZXNzIGFzIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtIUC5saW5rRGFya30gc3R5bGU9e3tvcGFjaXR5OiAxfX0+c2ltcGxlIGFzIGl0IGNhbiBiZTwvYT48L0xpbms+LjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPXtIUC5jYXJkTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2NvbG9yc0ZvckpQWzBdfSBjbGFzc05hbWU9e0hQLmNhcmRMaXN0SXRlbX0+U2lnbiBpbiBvciBSZWdpc3RlcjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2NvbG9yc0ZvckpQWzFdfSBjbGFzc05hbWU9e0hQLmNhcmRMaXN0SXRlbX0+RmluZCBhIHByb2plY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtjb2xvcnNGb3JKUFsyXX0gY2xhc3NOYW1lPXtIUC5jYXJkTGlzdEl0ZW19PkpvaW4gb24gYSBzcGVjaWZpYyBza2lsbCBvbiB0aGUgcHJvamVjdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2NvbG9yc0ZvckpQWzNdfSBjbGFzc05hbWU9e0hQLmNhcmRMaXN0SXRlbX0+Q2hlY2sgbm90aWZpY2F0aW9ucyBmb3IgdGhlIHJlc3BvbnNlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzE3MHB4J319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtidXR0b25zRm9ySlBbcG9zaXRpb25JbkpQXX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hQLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nY29tbXVuaXR5JyBjbGFzc05hbWU9e2Ake0hQLnJvd0NvbnRhaW5lcn0gJHtIUC5jb21tdW5pdHlPclByb2plY3RzRGl2fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtIUC50ZXh0Qm94fSAke0hQLm5hcnJvd31gfT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17SFAubGVmdEFsaWdufT5OZXR3b3JrPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtIUC5sZ1BhcmF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVbmlsb3VzIGRvZXMgdGhlIG5ldHdvcmtpbmcgc28geW91IGRvbid0IG5lZWQgdG8uIFdlIHByb3ZpZGUgeW91IHdpdGggYWNjZXNzIHRvIGFsbCBvZiBvdXIgdGFsZW50ZWQgdXNlcnMgYnkgZGlyZWN0bHkgYnJvd3Npbmcgb3VyIHVzZXJzIG9yIGluZGlyZWN0bHkgcG9zdGluZyBwcm9qZWN0cyBmb3IgYWxsIG9mIHRoZSBwb3RlbnRpYWxseSBpbnRlcmVzdGVkIHVzZXJzIHRvIHNlZS4gVGhlIFVuaWxvdXMgY29tbXVuaXR5IGFsdGhvdWdoIHdpdGggZGlmZmVyZW50IGludGVyZXN0cyBhbmQgc2tpbGwgc2V0cyBhcmUgYWxsIGxvb2tpbmcgdG8gY3JlYXRlIGFuZCBiZSBwYXJ0IG9mIHNvbWV0aGluZyBncmVhdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XVwiIGFzPVwiL3Jlc3VsdHMvYWxsXCI+PGEgY2xhc3NOYW1lPXtgJHtIUC5idXR0b259ICR7SFAuYnRuRGFya30gJHtIUC5hZGphY2VudEhhbGZXaWR0aEJ1dHRvbnN9IG5ldXRyYWxpemUtbGlua2B9PkJyb3dzZSB1c2VyczwvYT48L0xpbms+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0hQLmltYWdlQm94fSAke0hQLm5hcnJvd31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hQLnVzZXJCb3hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hQLnVzZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17SFAubG9nb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtIUC51c2VyVGl0bGV9PlVzZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hQLnVzZXJzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mVXNlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIUC51c2VyRm9vdGVyfT5tb3JlLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SFAud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdwcm9qZWN0cycgY2xhc3NOYW1lPXtgJHtIUC5yb3dDb250YWluZXJ9ICR7SFAuY29tbXVuaXR5T3JQcm9qZWN0c0Rpdn1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7SFAudGV4dEJveH0gJHtIUC5uYXJyb3d9YH0+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtIUC5sZWZ0QWxpZ259PlByb2plY3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtIUC5sZ1BhcmF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pbHVzIGNvbnRhaW5zIG1hbnkgZGlmZmVyZW50IGtpbmRzIG9mIHByb2plY3RzIHdpdGggYWxsIGtpbmRzIG9mIHNraWxscyBuZWVkZWQuIEFsdGhvdWdoIHRoZXkgaGF2ZSBkaWZmZXJlbnQgY29tcGxleGl0aWVzIGFuZCBkaWZmZXJlbnQgc2tpbGwgcmVxdWlyZW1lbnRzLCBhbGwgb2YgdGhlbSBuZWVkIGEgdGVhbS4gUHJvamVjdCBVbmlsb3VzIGZvciBleGFtcGxlIGlzIGFsc28gb24gZGlzcGxheSB3ZWxjb21pbmcgbmV3IG1lbWJlcnMgaW50ZXJlc3RlZCBpbiBjb250cmlidXRpbmcgdG8gaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bHRzL1tzZWFyY2hRdWVyeV1cIiBhcz1cIi9yZXN1bHRzL2FsbFwiPjxhIGNsYXNzTmFtZT17YCR7SFAuYnV0dG9ufSAke0hQLmJ0bkRhcmt9ICR7SFAuYWRqYWNlbnRIYWxmV2lkdGhCdXR0b25zfSBuZXV0cmFsaXplLWxpbmtgfT5Ccm93c2UgcHJvamVjdHM8L2E+PC9MaW5rPiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SFAuaW1hZ2VCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SFAucG9zdENvbnRhaWVuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3QgcG9zdD17cHJvcHMub3RoZXJQb3N0c1swXX0gc2hvcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdFF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogRklORF9QT1NULFxyXG4gICAgICAgIHZhcmlhYmxlczoge3RpdGxlOiAnVW5pbG91cyd9IFxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICBjb25zdCBwb3N0c1F1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogU0VBUkNIX1BPU1RTLFxyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBmaWx0ZXJTdHJpbmc6ICcnLFxyXG4gICAgICAgICAgICBwb3N0SWRzOiBbXSxcclxuICAgICAgICAgICAgZXZlbnRRdWVyeTogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIGNvbnN0IHNvbWVVc2VycyA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgcXVlcnk6IFNPTUVfVVNFUlMsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgc2tpcDogMCxcclxuICAgICAgICAgICBmaXJzdDogNixcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHBvc3RRdWVyeSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9zdDogcG9zdFF1ZXJ5LmRhdGEuZmluZFBvc3QsXHJcbiAgICAgICAgb3RoZXJQb3N0czogcG9zdHNRdWVyeS5kYXRhLnNlYXJjaFBvc3RzLFxyXG4gICAgICAgIHNvbWVVc2Vyczogc29tZVVzZXJzLmRhdGEuc29tZVVzZXJzXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRVc2VyREQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKEhvbWVQYWdlKSIsImV4cG9ydCBjb25zdCBzZXRBbGVydCA9IChpbmZvKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9BTEVSVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGluZm9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRBbGVydCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnUkVTRVRfQUxFUlQnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYWxlcnROb3RpZiA9IChzdGF0ZSA9IHtjb2xvcjogbnVsbCwgdGV4dENvbG9yOiBudWxsLCBtZXNzYWdlOiBudWxsfSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX0FMRVJUJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIGNhc2UgJ1JFU0VUX0FMRVJUJyA6XHJcbiAgICAgICAgICAgIHJldHVybiB7Y29sb3I6IG51bGwsIHRleHRDb2xvcjogbnVsbCwgbWVzc2FnZTogbnVsbH1cclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsZXJ0Tm90aWYiLCJleHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXIgPSAodXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VSUkVOVF9VU0VSJyxcclxuICAgICAgICAgICAgZGF0YTogdXNlclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlclBvc3RzID0gKHBvc3RzKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9QT1NUUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3RzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyU1AgPSAocG9zdHMpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX1NQJyxcclxuICAgICAgICAgICAgZGF0YTogcG9zdHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zID0gKG5vdGlmaWNhdGlvbnMpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX05PVElGSUNBVElPTlMnLFxyXG4gICAgICAgICAgICBkYXRhOiBub3RpZmljYXRpb25zXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBlbmRpbmdOb3RpZmljYXRpb25zID0gKGFtdCkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfUE4nLFxyXG4gICAgICAgICAgICBkYXRhOiBhbXRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjdXJyZW50VXNlciA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9QTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBlbmRpbmdOb3RpZmljYXRpb25zOiBhY3Rpb24uZGF0YX1cclxuICAgICAgICBjYXNlICdTRVRfQ1VSUkVOVF9VU0VSJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9QT1NUUycgOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwb3N0czogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVX1NQJyA6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2F2ZWRQb3N0czogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgY2FzZSAnU0VUX0NVX05PVElGSUNBVElPTlMnIDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbm90aWZpY2F0aW9uczogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50VXNlciIsImV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnU0VUX1RPS0VOJyxcclxuICAgICAgICBkYXRhOiB0b2tlblxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyVG9rZW4gPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdDTEVBUl9UT0tFTidcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHRva2VuID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfVE9LRU4nIDpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICAgICAgY2FzZSAnQ0xFQVJfVE9LRU4nIDpcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9rZW4iLCJleHBvcnQgY29uc3Qgc2V0VXNlckREID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSX0REJyxcclxuICAgICAgICAgICAgZGF0YTogc3RhdGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRVc2VyREQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1JFU0VUX1VTRVJfREQnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdXNlckREID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX1VTRVJfREQnIDpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICAgICAgY2FzZSAnUkVTRVRfVVNFUl9ERCcgOlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckREIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFkZFBvc3QoXHJcbiAgICAkdGl0bGU6IFN0cmluZyEsXHJcbiAgICAkdXNlcjogSUQhLFxyXG4gICAgJGNvbnRhY3RMaW5rOiBTdHJpbmchXHJcbiAgICAkc2tpbGxOYW1lczogW1N0cmluZyFdISxcclxuICAgICRza2lsbENhcGFjaXRpZXM6IFtJbnQhXSEsXHJcbiAgICAkc2tpbGxGaWxsczogW0ludCFdISxcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nISxcclxuICAgICRjb2xvcjogU3RyaW5nISxcclxuICAgICRpbWFnZUxpbmtzOiBbU3RyaW5nIV0sXHJcbiAgICAkcmVmZXJlbmNlTGlua3M6IFtTdHJpbmchXVxyXG4gICl7XHJcbiAgICBhZGRQb3N0KFxyXG4gICAgICB0aXRsZTokdGl0bGUsXHJcbiAgICAgIHVzZXI6JHVzZXIsXHJcbiAgICAgIGNvbnRhY3RMaW5rOiAkY29udGFjdExpbmssXHJcbiAgICAgIHNraWxsTmFtZXM6JHNraWxsTmFtZXMsXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllczokc2tpbGxDYXBhY2l0aWVzLFxyXG4gICAgICBza2lsbEZpbGxzOiAkc2tpbGxGaWxscyxcclxuICAgICAgZGVzY3JpcHRpb246JGRlc2NyaXB0aW9uLFxyXG4gICAgICBjb2xvcjokY29sb3IsXHJcbiAgICAgIGltYWdlTGlua3M6JGltYWdlTGlua3MsXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtzOiRyZWZlcmVuY2VMaW5rc1xyXG4gICAgKXtcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBERUxFVEVfUE9TVCA9IGdxbGBcclxuLy8gICBtdXRhdGlvbiBkZWxldGVQb3N0IChcclxuLy8gICAgICRwb3N0SWQ6IElEIVxyXG4vLyAgICkge1xyXG4vLyAgICAgZGVsZXRlUG9zdCAocG9zdElkOiAkcG9zdElkKVxyXG4vLyAgIH1cclxuLy8gYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1BS0VfTk9USUZJQ0FUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIG1ha2VOb3RpZmljYXRpb24oXHJcbiAgICAkdXNlckZyb21JZDogSUQhLFxyXG4gICAgJHVzZXJUb0lkOiBJRCEsXHJcbiAgICAkbWVzc2FnZTogU3RyaW5nISxcclxuICAgICRwb3N0SWQ6IElELFxyXG4gICAgJHByb3Bvc2VkQ29udHJpYnV0aW9uOiBbSW50IV1cclxuICApe1xyXG4gICAgbWFrZU5vdGlmaWNhdGlvbihcclxuICAgICAgdXNlckZyb21JZDogJHVzZXJGcm9tSWQsXHJcbiAgICAgIHVzZXJUb0lkOiAkdXNlclRvSWQsXHJcbiAgICAgIG1lc3NhZ2U6ICRtZXNzYWdlLFxyXG4gICAgICBwb3N0SWQ6ICRwb3N0SWQsXHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uOiAkcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICl7XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFDQ0VQVF9OT1RJRklDQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gYWNjZXB0Tm90aWZpY2F0aW9uKCRub3RpZmljYXRpb25JZDogSUQhKSB7XHJcbiAgICBhY2NlcHROb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6ICRub3RpZmljYXRpb25JZCkge1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IERFQ0xJTkVfTk9USUZJQ0FUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGRlY2xpbmVOb3RpZmljYXRpb24oJG5vdGlmaWNhdGlvbklkOiBJRCEpIHtcclxuICAgIGRlY2xpbmVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6ICRub3RpZmljYXRpb25JZCkge1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9VU0VSID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVVzZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEsICRyZWZlcmVuY2VMaW5rOiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVVc2VyKFxyXG4gICAgICB1c2VybmFtZTogJHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogJHBhc3N3b3JkLFxyXG4gICAgICByZWZlcmVuY2VMaW5rOiAkcmVmZXJlbmNlTGlua1xyXG4gICAgKXtcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgcGFzc3dvcmRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IGdxbGBcclxuICBtdXRhdGlvbiBsb2dpbigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISl7XHJcbiAgICBsb2dpbihcclxuICAgICAgdXNlcm5hbWU6ICR1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZFxyXG4gICAgKXtcclxuICAgICAgdmFsdWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTQVZFX1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gc2F2ZVBvc3RUb1VzZXIgKFxyXG4gICAgJHVzZXI6IElEISxcclxuICAgICRwb3N0SWQ6IElEIVxyXG4gICkge1xyXG4gICAgc2F2ZVBvc3RUb1VzZXIgKHVzZXI6ICR1c2VyLCBwb3N0SWQ6ICRwb3N0SWQpIHtcclxuICAgICAgdXNlcm5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9TQVZFRF9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIHJlbW92ZVNhdmVkUG9zdCAoXHJcbiAgICAkdXNlcjogSUQhLFxyXG4gICAgJHBvc3RJZDogSUQhXHJcbiAgKSB7XHJcbiAgICByZW1vdmVTYXZlZFBvc3QgKHVzZXI6ICR1c2VyLCBwb3N0SWQ6ICRwb3N0SWQpXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQVNLX1FVRVNUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFza1F1ZXN0aW9uIChcclxuICAgICR1c2VyRnJvbUlkOiBJRCEsXHJcbiAgICAkdXNlclRvSWQ6IElEISxcclxuICAgICRwb3N0SWQ6IElEISxcclxuICAgICRxdWVzdGlvbjogU3RyaW5nIVxyXG4gICl7XHJcbiAgICBhc2tRdWVzdGlvbiAoXHJcbiAgICAgIHVzZXJGcm9tSWQ6ICR1c2VyRnJvbUlkLFxyXG4gICAgICB1c2VyVG9JZDogJHVzZXJUb0lkLFxyXG4gICAgICBwb3N0SWQ6ICRwb3N0SWQsXHJcbiAgICAgIHF1ZXN0aW9uOiAkcXVlc3Rpb25cclxuICAgICl7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFOU1dFUl9RVUVTVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBhbnN3ZXJRdWVzdGlvbiAoXHJcbiAgICAkbm90aWZpY2F0aW9uSWQ6IElEISxcclxuICAgICRyZXNwb25zZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgYW5zd2VyUXVlc3Rpb24gKFxyXG4gICAgICBub3RpZmljYXRpb25JZDogJG5vdGlmaWNhdGlvbklkLFxyXG4gICAgICByZXNwb25zZTogJHJlc3BvbnNlXHJcbiAgICApe1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIHF1ZXN0aW9uXHJcbiAgICAgIGFuc3dlclxyXG4gICAgICBhY2NlcHRlZFxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmAiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgTElTVF9PRl9OT1RJRklDQVRJT05TID0gZ3FsYFxyXG4gIHF1ZXJ5IGxpc3RPZk5vdGlmaWNhdGlvbnMoJG5vdGlmaWNhdGlvbnM6IFtTdHJpbmchXSkge1xyXG4gICAgbGlzdE9mTm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zOiAkbm90aWZpY2F0aW9ucykge1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBjb250YWN0TGlua1xyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNLSUxMX1NFQVJDSCA9IGdxbGBcclxuICBxdWVyeSBza2lsbFNlYXJjaCgkZmlsdGVyOiBTdHJpbmchKSB7XHJcbiAgICBza2lsbFNlYXJjaChmaWx0ZXI6ICRmaWx0ZXIpIHtcclxuICAgICAgbmFtZVxyXG4gICAgICB1c2VzXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTUUgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgbWV7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtcclxuICAgICAgcHJpbWFyeVNraWxsc3tcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgICAgc2Vjb25kYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBpbnRlcmVzdHNcclxuICAgICAgcG9zdHN7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdGlmaWNhdGlvbnN7XHJcbiAgICAgICAgdXNlckZyb217XHJcbiAgICAgICAgICBfaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlclRve1xyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgICBwb3N0e1xyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICAgIGFjY2VwdGVkXHJcbiAgICAgIH1cclxuICAgICAgX2lkXHJcblxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExJU1RfT0ZfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnkgZ2V0TGlzdE9mUG9zdHMoJGlkX2xpc3Q6IFtTdHJpbmddKSB7XHJcbiAgICBnZXRMaXN0T2ZQb3N0cyhpZExpc3Q6ICRpZF9saXN0KXtcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlcntcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbG9yXHJcbiAgICAgIHNraWxsRmlsbHNcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZJTkRfUE9TVCA9IGdxbGBcclxuICBxdWVyeSBmaW5kUG9zdCgkdGl0bGU6IFN0cmluZyEpe1xyXG4gICAgZmluZFBvc3QodGl0bGU6ICR0aXRsZSl7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICB0ZWFtXHJcbiAgICAgIHRpbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgY29sb3JcclxuICAgICAgaW1hZ2VMaW5rc1xyXG4gICAgICByZWZlcmVuY2VMaW5rc1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGSU5EX1VTRVIgPSBncWxgXHJcbiAgcXVlcnkgZmluZFVzZXIoJHVzZXJuYW1lOiBTdHJpbmchKXtcclxuICAgIGZpbmRVc2VyKHVzZXJuYW1lOiAkdXNlcm5hbWUpIHtcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgcGFzc3dvcmRcclxuICAgICAgcmVmZXJlbmNlTGlua1xyXG4gICAgICBwcmltYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBzZWNvbmRhcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGludGVyZXN0c1xyXG4gICAgICBwb3N0c3tcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBub3RpZmljYXRpb25zIHtcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBzYXZlZFBvc3RzIHtcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfVVNFUlMgPSBncWxgXHJcbiAgcXVlcnl7XHJcbiAgICBhbGxVc2Vyc3tcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU09NRV9VU0VSUyA9IGdxbGBcclxuICBxdWVyeSBzb21lVXNlcnMoJHNraXA6IEludCEsICRmaXJzdDogSW50ISl7XHJcbiAgICBzb21lVXNlcnMoc2tpcDogJHNraXAsIGZpcnN0OiAkZmlyc3Qpe1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QT1NUUyA9IGdxbGBcclxuICBxdWVyeXtcclxuICAgIGFsbFBvc3Rze1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1c2Vye1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICB0aW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbG9yXHJcbiAgICAgIGltYWdlTGlua3NcclxuICAgICAgcmVmZXJlbmNlTGlua3NcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfVElUTEVTID0gZ3FsYFxyXG4gIHF1ZXJ5e1xyXG4gICAgYWxsUG9zdHN7XHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU1RTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNlYXJjaFBvc3RzKCRmaWx0ZXJTdHJpbmc6IFN0cmluZyEsICRwb3N0SWRzOiBbU3RyaW5nIV0sICRldmVudFF1ZXJ5OiBTdHJpbmcpe1xyXG4gICAgc2VhcmNoUG9zdHMoZmlsdGVyU3RyaW5nOiAkZmlsdGVyU3RyaW5nLCBwb3N0SWRzOiAkcG9zdElkcywgZXZlbnRRdWVyeTogJGV2ZW50UXVlcnkpe1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1c2VyIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHNraWxsTmFtZXNcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgIHNraWxsRmlsbHNcclxuICAgICAgdGltZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBjb2xvclxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQRU5ESU5HX05PVElGUyA9IGdxbGBcclxuICBxdWVyeSBzZWFyY2hBd2FpdGluZ05vdGlmcygkdXNlcklkOiBJRCEpIHtcclxuICAgIHNlYXJjaEF3YWl0aW5nTm90aWZzKHVzZXJJZDogJHVzZXJJZClcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBRX0FORF9BX05PVElGUyA9IGdxbGBcclxuICBxdWVyeSBzZWFyY2hBbnN3ZXJlZFFUb1Bvc3QgKCAkdGl0bGU6IFN0cmluZyEgKSB7XHJcbiAgICBzZWFyY2hBbnN3ZXJlZFFUb1Bvc3QgKFxyXG4gICAgICB0aXRsZTogJHRpdGxlXHJcbiAgICApe1xyXG4gICAgICB1c2VyRnJvbXtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBxdWVzdGlvblxyXG4gICAgICBhbnN3ZXJcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybUluZm9Db250YWluZXJcIjogXCJpbnB1dEhlYWRlcl9mb3JtSW5mb0NvbnRhaW5lcl9feVFia2FcIixcblx0XCJpbmZvSGVhZGVyQ29udGFpbmVyXCI6IFwiaW5wdXRIZWFkZXJfaW5mb0hlYWRlckNvbnRhaW5lcl9faFEtSWtcIixcblx0XCJpbmZvVGl0bGVUZXh0XCI6IFwiaW5wdXRIZWFkZXJfaW5mb1RpdGxlVGV4dF9fM3hsamxcIixcblx0XCJpbmZvSWNvbkNvbnRhaW5lclwiOiBcImlucHV0SGVhZGVyX2luZm9JY29uQ29udGFpbmVyX18zTXhYM1wiLFxuXHRcImluZm9JY29uXCI6IFwiaW5wdXRIZWFkZXJfaW5mb0ljb25fXzNiVE96XCIsXG5cdFwiaW5mb0NvbnRlbnRcIjogXCJpbnB1dEhlYWRlcl9pbmZvQ29udGVudF9fMXdPbndcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9jb250YWluZXJfXzJTZnQ5XCIsXG5cdFwiYnJhbmRDb250YWluZXJcIjogXCJuZXdOYXZCYXJfYnJhbmRDb250YWluZXJfXzEtR2o2XCIsXG5cdFwibmFtZVwiOiBcIm5ld05hdkJhcl9uYW1lX18yY1pfcVwiLFxuXHRcImljb25cIjogXCJuZXdOYXZCYXJfaWNvbl9fMmdMTTBcIixcblx0XCJzZWFyY2hDb250YWluZXJcIjogXCJuZXdOYXZCYXJfc2VhcmNoQ29udGFpbmVyX19fRVdTSFwiLFxuXHRcIm1hZ25pZmllclwiOiBcIm5ld05hdkJhcl9tYWduaWZpZXJfXzNVSzhkXCIsXG5cdFwic2VhcmNoQnRuXCI6IFwibmV3TmF2QmFyX3NlYXJjaEJ0bl9fUWZ1V19cIixcblx0XCJzZWFyY2hCYXJcIjogXCJuZXdOYXZCYXJfc2VhcmNoQmFyX19WQmI3a1wiLFxuXHRcIkNQQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX0NQQ29udGFpbmVyX18ydUlrX1wiLFxuXHRcInBsdXNcIjogXCJuZXdOYXZCYXJfcGx1c19fM0d3UVVcIixcblx0XCJDUFRleHRcIjogXCJuZXdOYXZCYXJfQ1BUZXh0X18yanJlMFwiLFxuXHRcInVzZXJXcmFwcGVyXCI6IFwibmV3TmF2QmFyX3VzZXJXcmFwcGVyX18yd3dwNVwiLFxuXHRcInVzZXJDb250YWluZXJcIjogXCJuZXdOYXZCYXJfdXNlckNvbnRhaW5lcl9fMWZHRXZcIixcblx0XCJ1c2VyT3B0aW9uXCI6IFwibmV3TmF2QmFyX3VzZXJPcHRpb25fXzNiWjFpXCIsXG5cdFwibm90aWZDb250YWluZXJcIjogXCJuZXdOYXZCYXJfbm90aWZDb250YWluZXJfXzNEcFBkXCIsXG5cdFwidGl0bGVCZWxsXCI6IFwibmV3TmF2QmFyX3RpdGxlQmVsbF9fMWVXZndcIixcblx0XCJiZWxsXCI6IFwibmV3TmF2QmFyX2JlbGxfXzNrRC03XCIsXG5cdFwibm9maWZDb3VudFwiOiBcIm5ld05hdkJhcl9ub2ZpZkNvdW50X18xYkN3YlwiLFxuXHRcInVzZXJJbmZvQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX3VzZXJJbmZvQ29udGFpbmVyX18xWFM0M1wiLFxuXHRcInVzZXJuYW1lXCI6IFwibmV3TmF2QmFyX3VzZXJuYW1lX19Fd0hXMFwiLFxuXHRcIkREQXJyb3dcIjogXCJuZXdOYXZCYXJfRERBcnJvd19fMTR4c1FcIixcblx0XCJ1c2VyRERcIjogXCJuZXdOYXZCYXJfdXNlckREX18yLUstTFwiLFxuXHRcInVzZXJcIjogXCJuZXdOYXZCYXJfdXNlcl9fMVJjaVJcIixcblx0XCJzaWduT3B0aW9uXCI6IFwibmV3TmF2QmFyX3NpZ25PcHRpb25fXzNUMkYtXCIsXG5cdFwiY29udGFpbmVyTVwiOiBcIm5ld05hdkJhcl9jb250YWluZXJNX18ySWppYVwiLFxuXHRcImJyYW5kQ29udGFpbmVyTVwiOiBcIm5ld05hdkJhcl9icmFuZENvbnRhaW5lck1fXzNJVEU1XCIsXG5cdFwibmF2SXRlbVwiOiBcIm5ld05hdkJhcl9uYXZJdGVtX19HTHdQdVwiLFxuXHRcIm5hdkljb25cIjogXCJuZXdOYXZCYXJfbmF2SWNvbl9fM255RHdcIixcblx0XCJzdWJOYXZDb250YWluZXJcIjogXCJuZXdOYXZCYXJfc3ViTmF2Q29udGFpbmVyX18zcVVRa1wiLFxuXHRcInNlYXJjaENvbnRhaW5lck1cIjogXCJuZXdOYXZCYXJfc2VhcmNoQ29udGFpbmVyTV9fMl9uQkRcIixcblx0XCJtZW51Q29udGFpbmVyXCI6IFwibmV3TmF2QmFyX21lbnVDb250YWluZXJfXzNtUkJEXCIsXG5cdFwibW9yZUNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9tb3JlQ29udGFpbmVyX18xWHZVWlwiLFxuXHRcInRpdGxlTW9yZVwiOiBcIm5ld05hdkJhcl90aXRsZU1vcmVfXzFtTUdhXCIsXG5cdFwibW9yZVwiOiBcIm5ld05hdkJhcl9tb3JlX18ySmdFcFwiLFxuXHRcIlNOSUNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9TTklDb250YWluZXJfXzF5NnBPXCIsXG5cdFwibm90aWZDb250YWluZXJNXCI6IFwibmV3TmF2QmFyX25vdGlmQ29udGFpbmVyTV9fMTctVTJcIixcblx0XCJkZE9wdGlvblwiOiBcIm5ld05hdkJhcl9kZE9wdGlvbl9fMWZxam1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRlc3RcIjogXCJjb250YWN0X3Rlc3RfX2E1WjdsXCIsXG5cdFwiY29udGFjdHNDb250YWluZXJcIjogXCJjb250YWN0X2NvbnRhY3RzQ29udGFpbmVyX18zNWlxNVwiLFxuXHRcImNvbnRhY3RDb250YWluZXJcIjogXCJjb250YWN0X2NvbnRhY3RDb250YWluZXJfXzVBQm9mXCIsXG5cdFwiY29udGFjdEhlYWRlclwiOiBcImNvbnRhY3RfY29udGFjdEhlYWRlcl9fMkdGbWtcIixcblx0XCJDSEljb25cIjogXCJjb250YWN0X0NISWNvbl9fMXktX1pcIixcblx0XCJDSE5hbWVcIjogXCJjb250YWN0X0NITmFtZV9fMUt0WVVcIixcblx0XCJwcm9maWxlSW1hZ2VcIjogXCJjb250YWN0X3Byb2ZpbGVJbWFnZV9fMnNmUHlcIixcblx0XCJjb250YWN0SW5mb0NvbnRhaW5lclwiOiBcImNvbnRhY3RfY29udGFjdEluZm9Db250YWluZXJfX1RLN2FEXCIsXG5cdFwiY29udGFjdEluZm9cIjogXCJjb250YWN0X2NvbnRhY3RJbmZvX18yeUNyNlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcImhvbWVQYWdlX3dyYXBwZXJfX2g5a3ZOXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX19Lclk1SFwiLFxuXHRcImxnUGFyYVwiOiBcImhvbWVQYWdlX2xnUGFyYV9fMjRsUDNcIixcblx0XCJidXR0b25cIjogXCJob21lUGFnZV9idXR0b25fXzJNQ0NkXCIsXG5cdFwiYnRuRGFya1wiOiBcImhvbWVQYWdlX2J0bkRhcmtfXzEtdUZfXCIsXG5cdFwiYnRuTGlnaHRcIjogXCJob21lUGFnZV9idG5MaWdodF9fMXNteElcIixcblx0XCJidG5MRFwiOiBcImhvbWVQYWdlX2J0bkxEX18zb0tUWFwiLFxuXHRcImJ0bkRMXCI6IFwiaG9tZVBhZ2VfYnRuRExfX04zdEYtXCIsXG5cdFwibGlua0RhcmtcIjogXCJob21lUGFnZV9saW5rRGFya19fMmdyYy1cIixcblx0XCJsaW5rTGlnaHRcIjogXCJob21lUGFnZV9saW5rTGlnaHRfXzFlWnpsXCIsXG5cdFwicm93Q29udGFpbmVyXCI6IFwiaG9tZVBhZ2Vfcm93Q29udGFpbmVyX18zZHFYN1wiLFxuXHRcImNhcmRcIjogXCJob21lUGFnZV9jYXJkX19sdGRiUVwiLFxuXHRcImNhcmRIZWFkaW5nXCI6IFwiaG9tZVBhZ2VfY2FyZEhlYWRpbmdfXzIyOEduXCIsXG5cdFwiY2FyZENvbnRlbnRcIjogXCJob21lUGFnZV9jYXJkQ29udGVudF9fMll1cXVcIixcblx0XCJjYXJkTGlzdFwiOiBcImhvbWVQYWdlX2NhcmRMaXN0X18zazJXQlwiLFxuXHRcImNhcmRMaXN0SXRlbVwiOiBcImhvbWVQYWdlX2NhcmRMaXN0SXRlbV9fMjliR1RcIixcblx0XCJjYXJkTGlzdE51bWJlclwiOiBcImhvbWVQYWdlX2NhcmRMaXN0TnVtYmVyX18zWWU3WVwiLFxuXHRcImNhcmRGb290ZXJcIjogXCJob21lUGFnZV9jYXJkRm9vdGVyX18ySndualwiLFxuXHRcImxlZnRBbGlnblwiOiBcImhvbWVQYWdlX2xlZnRBbGlnbl9fMmVZTFBcIixcblx0XCJpbWFnZUJveFwiOiBcImhvbWVQYWdlX2ltYWdlQm94X196NjFTQlwiLFxuXHRcInRleHRCb3hcIjogXCJob21lUGFnZV90ZXh0Qm94X18tdVI2MlwiLFxuXHRcIm5hcnJvd1wiOiBcImhvbWVQYWdlX25hcnJvd19fMnA5cDlcIixcblx0XCJjb250YWluZXJXaWRlXCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyV2lkZV9fM2ljUDBcIixcblx0XCJjb250YWluZXJOYXJyb3dcIjogXCJob21lUGFnZV9jb250YWluZXJOYXJyb3dfXzIyUDkxXCIsXG5cdFwiYWRqYWNlbnRIYWxmV2lkdGhCdXR0b25zXCI6IFwiaG9tZVBhZ2VfYWRqYWNlbnRIYWxmV2lkdGhCdXR0b25zX18ybkR6dFwiLFxuXHRcImhhbGZXaWR0aEJ1dHRvblwiOiBcImhvbWVQYWdlX2hhbGZXaWR0aEJ1dHRvbl9fM1lwS0VcIixcblx0XCJidWlsZFlvdXJUZWFtQ3JlYXRlWW91clByb2plY3RcIjogXCJob21lUGFnZV9idWlsZFlvdXJUZWFtQ3JlYXRlWW91clByb2plY3RfXzNLN2MzXCIsXG5cdFwiYnVpbGRZb3VyVGVhbUltYWdlXCI6IFwiaG9tZVBhZ2VfYnVpbGRZb3VyVGVhbUltYWdlX18xdlR2clwiLFxuXHRcImJ1aWxkWW91clRlYW1Jbm5lckJveFwiOiBcImhvbWVQYWdlX2J1aWxkWW91clRlYW1Jbm5lckJveF9fM00ydWdcIixcblx0XCJwb3N0Q29udGFpZW5lclwiOiBcImhvbWVQYWdlX3Bvc3RDb250YWllbmVyX19FMnBfUlwiLFxuXHRcInVzZXJCb3hDb250YWluZXJcIjogXCJob21lUGFnZV91c2VyQm94Q29udGFpbmVyX18zSkVPMFwiLFxuXHRcInVzZXJIZWFkZXJcIjogXCJob21lUGFnZV91c2VySGVhZGVyX18yd3dteVwiLFxuXHRcImxvZ29cIjogXCJob21lUGFnZV9sb2dvX18zX21DYlwiLFxuXHRcInVzZXJUaXRsZVwiOiBcImhvbWVQYWdlX3VzZXJUaXRsZV9fMTFaaHdcIixcblx0XCJ1c2Vyc0NvbnRhaW5lclwiOiBcImhvbWVQYWdlX3VzZXJzQ29udGFpbmVyX18xSWM3blwiLFxuXHRcInVzZXJJbnNcIjogXCJob21lUGFnZV91c2VySW5zX18zMWtRVVwiLFxuXHRcInVzZXJQcmltYXJ5XCI6IFwiaG9tZVBhZ2VfdXNlclByaW1hcnlfXzJlR1VEXCIsXG5cdFwidXNlclNlY29uZGFyeVwiOiBcImhvbWVQYWdlX3VzZXJTZWNvbmRhcnlfXzM0b0dXXCIsXG5cdFwidXNlckZvb3RlclwiOiBcImhvbWVQYWdlX3VzZXJGb290ZXJfXzNVSzRXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0V3JhcHBlclwiOiBcInBvc3RfcG9zdFdyYXBwZXJfX3FOeXlRXCIsXG5cdFwicG9zdEhvdmVyXCI6IFwicG9zdF9wb3N0SG92ZXJfX1Vpam5QXCIsXG5cdFwicG9zdENvbG9ySW5kaWNhdG9yXCI6IFwicG9zdF9wb3N0Q29sb3JJbmRpY2F0b3JfXzNyNnRoXCIsXG5cdFwicG9zdENvbnRhaW5lclwiOiBcInBvc3RfcG9zdENvbnRhaW5lcl9fMlc2XzBcIixcblx0XCJwb3N0SGVhZGVyV3JhcHBlclwiOiBcInBvc3RfcG9zdEhlYWRlcldyYXBwZXJfXzFsR0wtXCIsXG5cdFwicG9zdEhlYWRlclN0cmV0Y2hcIjogXCJwb3N0X3Bvc3RIZWFkZXJTdHJldGNoX18xbTB5QVwiLFxuXHRcInBvc3RIZWFkZXJcIjogXCJwb3N0X3Bvc3RIZWFkZXJfXzNXcmFGXCIsXG5cdFwiUEhVc2VyU3RyZXRjaFwiOiBcInBvc3RfUEhVc2VyU3RyZXRjaF9fMWl1VzVcIixcblx0XCJQSFVzZXJcIjogXCJwb3N0X1BIVXNlcl9fRkw3T2NcIixcblx0XCJQSFVJY29uXCI6IFwicG9zdF9QSFVJY29uX18xV0NnN1wiLFxuXHRcIlBIRGF0ZVwiOiBcInBvc3RfUEhEYXRlX18ydFFuX1wiLFxuXHRcInBvc3RUaXRsZVwiOiBcInBvc3RfcG9zdFRpdGxlX18xMlJDRVwiLFxuXHRcInBvc3REZXNjcmlwdGlvblwiOiBcInBvc3RfcG9zdERlc2NyaXB0aW9uX18zVkNaMVwiLFxuXHRcInBvc3RTa2lsbHNDb250YWluZXJcIjogXCJwb3N0X3Bvc3RTa2lsbHNDb250YWluZXJfXzMzanR0XCIsXG5cdFwicG9zdFNraWxsSW5zQ29udGFpbmVyXCI6IFwicG9zdF9wb3N0U2tpbGxJbnNDb250YWluZXJfXzNLaUJEXCIsXG5cdFwiUFNJTmFtZVwiOiBcInBvc3RfUFNJTmFtZV9fbk9DNThcIixcblx0XCJQU0lTdGF0c1wiOiBcInBvc3RfUFNJU3RhdHNfXzM2R0RJXCIsXG5cdFwicG9zdFV0aWxpdGllc0NvbnRhaW5lclwiOiBcInBvc3RfcG9zdFV0aWxpdGllc0NvbnRhaW5lcl9fMTFjaV9cIixcblx0XCJQVUljb25Db250YWluZXJcIjogXCJwb3N0X1BVSWNvbkNvbnRhaW5lcl9fMVJvT1ZcIixcblx0XCJQVUljb25cIjogXCJwb3N0X1BVSWNvbl9fMkRYZjNcIixcblx0XCJwb3N0V3JhcHBlclNtXCI6IFwicG9zdF9wb3N0V3JhcHBlclNtX18yeWZUN1wiLFxuXHRcInBvc3RTbVJlbW92ZVwiOiBcInBvc3RfcG9zdFNtUmVtb3ZlX18xVlNCcFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXNlcldyYXBwZXJcIjogXCJ1c2VyX3VzZXJXcmFwcGVyX18zSzN6aFwiLFxuXHRcInVzZXJDb250YWluZXJcIjogXCJ1c2VyX3VzZXJDb250YWluZXJfXzFyTG5JXCIsXG5cdFwidXNlck9wdGlvbnNTcGxpdHRlclwiOiBcInVzZXJfdXNlck9wdGlvbnNTcGxpdHRlcl9fMnJxWlpcIixcblx0XCJ1c2VySWNvbkNvbnRhaW5lclwiOiBcInVzZXJfdXNlckljb25Db250YWluZXJfXzIzNGlqXCIsXG5cdFwiU1VIXCI6IFwidXNlcl9TVUhfXzFNcmUwXCIsXG5cdFwiVUlDSFwiOiBcInVzZXJfVUlDSF9fM2pSSXhcIixcblx0XCJMR0RVc2VyQ29udGFpbmVyXCI6IFwidXNlcl9MR0RVc2VyQ29udGFpbmVyX18zd2NhbFwiLFxuXHRcInVzZXJCYW5uZXJcIjogXCJ1c2VyX3VzZXJCYW5uZXJfXzFBeHdsXCIsXG5cdFwidXNlclVzZXJuYW1lQ29udGFpbmVyXCI6IFwidXNlcl91c2VyVXNlcm5hbWVDb250YWluZXJfXzFoQThIXCIsXG5cdFwidXNlclVzZXJuYW1lXCI6IFwidXNlcl91c2VyVXNlcm5hbWVfXzlwcmluXCIsXG5cdFwidXNlclVzZXJuYW1lSWNvblwiOiBcInVzZXJfdXNlclVzZXJuYW1lSWNvbl9fM084cXRcIixcblx0XCJQTkNvbnRhaW5lclwiOiBcInVzZXJfUE5Db250YWluZXJfXzIyTHlUXCIsXG5cdFwiUE5CdWJibGVcIjogXCJ1c2VyX1BOQnViYmxlX19KVlVPQlwiLFxuXHRcInVzZXJVdGlsaXR5T3B0aW9uXCI6IFwidXNlcl91c2VyVXRpbGl0eU9wdGlvbl9fMVZ1Z0JcIixcblx0XCJVVU9TZWxlY3RlZFwiOiBcInVzZXJfVVVPU2VsZWN0ZWRfXzN2dlFrXCIsXG5cdFwiVVVBZGRQb3N0XCI6IFwidXNlcl9VVUFkZFBvc3RfXzIzQXQ3XCIsXG5cdFwiVVVBUEljb25cIjogXCJ1c2VyX1VVQVBJY29uX18zX1M4aFwiLFxuXHRcIlVVQVBUZXh0XCI6IFwidXNlcl9VVUFQVGV4dF9fMWIzRjJcIixcblx0XCJVVUljb25cIjogXCJ1c2VyX1VVSWNvbl9feDFJQnJcIixcblx0XCJVVUxvZ291dFwiOiBcInVzZXJfVVVMb2dvdXRfXzJfRGJIXCIsXG5cdFwiVVVMb2dvdXRJY29uXCI6IFwidXNlcl9VVUxvZ291dEljb25fXzJHUENFXCIsXG5cdFwidXNlck5vdGlmaWNhdGlvbkJ1YmJsZVwiOiBcInVzZXJfdXNlck5vdGlmaWNhdGlvbkJ1YmJsZV9fM2gxTldcIixcblx0XCJVVVV0aWxpdGllc1NwbGl0dGVyXCI6IFwidXNlcl9VVVV0aWxpdGllc1NwbGl0dGVyX18zWktCUFwiLFxuXHRcIlVVQ29udGVudENvbnRhaW5lclwiOiBcInVzZXJfVVVDb250ZW50Q29udGFpbmVyX18xR0tCX1wiLFxuXHRcIk5MVXNlckNvbnRhaW5lclwiOiBcInVzZXJfTkxVc2VyQ29udGFpbmVyX18zWjVMd1wiLFxuXHRcInVzZXJPcHRpb25Db250YWluZXJcIjogXCJ1c2VyX3VzZXJPcHRpb25Db250YWluZXJfXzMzOFJtXCIsXG5cdFwidXNlck9wdGlvbnNcIjogXCJ1c2VyX3VzZXJPcHRpb25zX19rdGVzZ1wiLFxuXHRcInVzZXJJY29uXCI6IFwidXNlcl91c2VySWNvbl9fMjB0NTVcIixcblx0XCJ1c2VyRm9ybUNvbnRhaW5lclwiOiBcInVzZXJfdXNlckZvcm1Db250YWluZXJfX0FoSmx1XCIsXG5cdFwidXNlckZvcm1cIjogXCJ1c2VyX3VzZXJGb3JtX19yeENkUlwiLFxuXHRcIlVGTGFiZWxcIjogXCJ1c2VyX1VGTGFiZWxfXzJ0XzF1XCIsXG5cdFwiVUZJbnB1dFwiOiBcInVzZXJfVUZJbnB1dF9fM3dPVTZcIixcblx0XCJVRlN1Ym1pdFwiOiBcInVzZXJfVUZTdWJtaXRfX3RTdkxkXCIsXG5cdFwibm90aWZpY2F0aW9uQ29udGFpbmVyXCI6IFwidXNlcl9ub3RpZmljYXRpb25Db250YWluZXJfXzJ4eU1tXCIsXG5cdFwibm90aWZpY2F0aW9uSGVhZGVyXCI6IFwidXNlcl9ub3RpZmljYXRpb25IZWFkZXJfXzFxOE4tXCIsXG5cdFwiTlVzZXJDb250YWluZXJcIjogXCJ1c2VyX05Vc2VyQ29udGFpbmVyX18zd0ZyLVwiLFxuXHRcIk5Vc2VySWNvblwiOiBcInVzZXJfTlVzZXJJY29uX19aRU4zdFwiLFxuXHRcIk5Vc2VyXCI6IFwidXNlcl9OVXNlcl9fMzkyTlVcIixcblx0XCJOVXNlckxhYmVsXCI6IFwidXNlcl9OVXNlckxhYmVsX18zaGFtZlwiLFxuXHRcIk5Ta2lsbENvbnRyaWJ1dGlvbnNcIjogXCJ1c2VyX05Ta2lsbENvbnRyaWJ1dGlvbnNfX2hoWUQtXCIsXG5cdFwiTlByb3Bvc2VkSGVscFwiOiBcInVzZXJfTlByb3Bvc2VkSGVscF9fM2hGNlFcIixcblx0XCJOU2tpbGxJbnNcIjogXCJ1c2VyX05Ta2lsbEluc19fMmE5U1VcIixcblx0XCJOU2tpbGxQcm9wXCI6IFwidXNlcl9OU2tpbGxQcm9wX18yYVJSMVwiLFxuXHRcIm5vdGlmaWNhdGlvbkNob2ljZVwiOiBcInVzZXJfbm90aWZpY2F0aW9uQ2hvaWNlX19semRWWFwiLFxuXHRcIm5vdGlmaWNhdGlvbk9wdGlvblwiOiBcInVzZXJfbm90aWZpY2F0aW9uT3B0aW9uX18zdzdYSFwiLFxuXHRcIm5vdGlmaWNhdGlvbkVtYWlsXCI6IFwidXNlcl9ub3RpZmljYXRpb25FbWFpbF9fZ3JMX1lcIixcblx0XCJOTWVzc2FnZVwiOiBcInVzZXJfTk1lc3NhZ2VfXzJOMjljXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyVXRpbEluZm9cIjogXCJ1c2VyVXRpbGl0aWVzX3VzZXJVdGlsSW5mb19fMS1XMWJcIixcblx0XCJzaW1wbGVQb3N0QmFubmVyXCI6IFwidXNlclV0aWxpdGllc19zaW1wbGVQb3N0QmFubmVyX18zNTZsZVwiLFxuXHRcInVzZXJVdGlsTm90aWZcIjogXCJ1c2VyVXRpbGl0aWVzX3VzZXJVdGlsTm90aWZfX3hSMjVVXCIsXG5cdFwibm90aWZpY2F0aW9uQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25Db250YWluZXJfXzVzbnVXXCIsXG5cdFwibm90aWZDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmQ29udGFpbmVyX18yRGdlZVwiLFxuXHRcIm5vdGlmU2VuZGVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZlNlbmRlcl9fMmVSMkdcIixcblx0XCJub3RpZk1lc3NhZ2VcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmTWVzc2FnZV9fMWV6X1hcIixcblx0XCJub3RpZkFjY2VwdGVkXCI6IFwidXNlclV0aWxpdGllc19ub3RpZkFjY2VwdGVkX18yOGw5ZVwiLFxuXHRcIm5vdGlmRGVjbGluZWRcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmRGVjbGluZWRfXy1na3dHXCIsXG5cdFwibm90aWZpY2F0aW9uT3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25PcHRpb25fXzNucmFKXCIsXG5cdFwic3RhbmRhcmRIb3ZlclwiOiBcInVzZXJVdGlsaXRpZXNfc3RhbmRhcmRIb3Zlcl9fMWNtQmtcIixcblx0XCJOQW5zd2VySW5wdXRcIjogXCJ1c2VyVXRpbGl0aWVzX05BbnN3ZXJJbnB1dF9fMmhuZlRcIixcblx0XCJkZWNpZGVcIjogXCJ1c2VyVXRpbGl0aWVzX2RlY2lkZV9fVklER2FcIixcblx0XCJvcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX29wdGlvbl9fQVNMLUtcIixcblx0XCJlbWFpbFwiOiBcInVzZXJVdGlsaXRpZXNfZW1haWxfXzJ1LXZlXCIsXG5cdFwic2tpbGxsXCI6IFwidXNlclV0aWxpdGllc19za2lsbGxfXzFJTHhEXCIsXG5cdFwibm90aWZGaWx0ZXJDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmRmlsdGVyQ29udGFpbmVyX18xVXJ5NVwiLFxuXHRcIk5GQ3JlYXRvckNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfTkZDcmVhdG9yQ29udGFpbmVyX18yYzRTNlwiLFxuXHRcIm1lc3NhZ2VzT3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19tZXNzYWdlc09wdGlvbl9fZVJrNVFcIixcblx0XCJORkxhYmVsXCI6IFwidXNlclV0aWxpdGllc19ORkxhYmVsX18zM1ZJRVwiLFxuXHRcIk5GT3B0aW9uQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ORk9wdGlvbkNvbnRhaW5lcl9fMjk3NktcIixcblx0XCJORk9wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfTkZPcHRpb25fXzJsXzdDXCIsXG5cdFwiTkZTcGxpdHRlclwiOiBcInVzZXJVdGlsaXRpZXNfTkZTcGxpdHRlcl9fMVVrQW9cIixcblx0XCJORkRET3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19ORkRET3B0aW9uX18zWEhXSlwiLFxuXHRcIm5vdGlmaWNhdGlvbkNMQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25DTENvbnRhaW5lcl9fbFVTdkFcIixcblx0XCJub3RpZmljYXRpb25TdWNlc3NJY29uXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25TdWNlc3NJY29uX18xY3ZxclwiLFxuXHRcIm5vdGlmaWNhdGlvbkNsXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25DbF9fMi1fM05cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWNvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=