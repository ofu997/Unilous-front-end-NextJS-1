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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./components/blog/BlogPost.js":
/*!*************************************!*\
  !*** ./components/blog/BlogPost.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/pages/blogpost.module.css */ "./styles/pages/blogpost.module.css");
/* harmony import */ var _styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\blog\\BlogPost.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BlogPost = props => __jsx("div", {
  className: _styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: props.link,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("img", {
  src: props.image,
  alt: "alt",
  className: _styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imgStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 11
  }
}))), __jsx("div", {
  id: "textDiv",
  className: _styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/user/[username]",
  as: `/user/${encodeURIComponent(props.author)}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("a", {
  className: `${_styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.authorContainer} neutralize-link`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 11
  }
}, __jsx("img", {
  className: _styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userIcon,
  src: "/svg/userB.svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
}), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }
}, props.author))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: props.link,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}, __jsx("a", {
  className: `${_styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.blackLink} neutralize-link`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 11
  }
}, __jsx("h2", {
  className: _styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }
}, props.title))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: props.link,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}, __jsx("a", {
  className: `${_styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description} neutralize-link`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 11
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }
}, props.description))), __jsx("p", {
  className: _styles_pages_blogpost_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.date,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}, props.date)));

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

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
    }, "Unilous"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/blog",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CPText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 33
      }
    }, "blogs"))))), __jsx("div", {
      className: "SWM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerM,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainerM} neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/logo/logoW.svg",
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 33
      }
    }), __jsx("h2", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    }, "Unilous"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/blog",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CPText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }
    }, "blogs"))))));
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
      lineNumber: 124,
      columnNumber: 39
    }
  }) : __jsx(_signed_NotSigned__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
          lineNumber: 130,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchContainerM,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/results/[searchQuery]",
        as: `/results/${SQCleaned}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBtn,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "/svg/searchWW.svg",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.magnifier,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
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
          lineNumber: 135,
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
            lineNumber: 143,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('notification'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 29
          }
        }), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('user'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 29
          }
        }), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.moreContainer,
          onClick: () => handleSubNavItemState('more'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/moreW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.more,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
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
            lineNumber: 156,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('notification'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notifContainerM,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 33
          }
        }, __jsx("img", {
          src: "/svg/bellW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bell,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 37
          }
        }), __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nofifCount,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 37
          }
        }, "-"))), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('user'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.username,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 33
          }
        }, username)), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.moreContainer,
          onClick: () => handleSubNavItemState('more'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/moreW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.more,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 33
          }
        }))));
      } else {
        return __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subNavContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
          onClick: () => handleSubNavItemState('signin'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 29
          }
        }, "sign in"), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
          onClick: () => handleSubNavItemState('register'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 29
          }
        }, "register"), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.moreContainer,
          onClick: () => handleSubNavItemState('more'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/moreW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.more,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
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
          lineNumber: 193,
          columnNumber: 17
        }
      }, __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSuccess: resetNav,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
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
          lineNumber: 200,
          columnNumber: 17
        }
      }, __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSuccess: resetNav,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
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
          lineNumber: 207,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/svg/bellW.svg",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleBell,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }
      }), __jsx(_user_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
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
          lineNumber: 215,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 21
        }
      }, props.currentUser.username), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onClick: () => resetNav(),
        href: "/user/[username]",
        as: `/user/${decodeURIComponent(props.currentUser.username)}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
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
          lineNumber: 218,
          columnNumber: 25
        }
      }, __jsx("h3", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
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
          lineNumber: 220,
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
          lineNumber: 226,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/svg/moreW.svg",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleMore,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onClick: () => resetNav(),
        href: "/postformpage",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
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
          lineNumber: 229,
          columnNumber: 25
        }
      }, __jsx("h3", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 81
        }
      }, "create project"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onClick: () => resetNav(),
        href: "/blog",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
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
          lineNumber: 232,
          columnNumber: 25
        }
      }, __jsx("h3", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 81
        }
      }, "blogs"))));
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "HWM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainer} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 29
    }
  }), __jsx("h2", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 29
    }
  }, "Unilous"))), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/results/[searchQuery]",
    as: `/results/${SQCleaned}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/svg/searchWW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.magnifier,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
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
      lineNumber: 253,
      columnNumber: 25
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/postformpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CPContainer} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/plusW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.plus,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CPText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 29
    }
  }, "create project"))), signedState, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CPText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 29
    }
  }, "blogs"))))), __jsx("div", {
    className: "SWM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerM,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 21
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainerM} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }), __jsx("h2", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 29
    }
  }, "Unilous"))), __jsx("button", {
    onClick: () => handleSubNavState('search'),
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/searchWW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 29
    }
  }))), __jsx("button", {
    onClick: () => handleSubNavState('menu'),
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/svg/hamburgerW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 25
    }
  })), __jsx(SubNav, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }), __jsx(SubNavItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
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

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_blog_BlogPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/blog/BlogPost */ "./components/blog/BlogPost.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\pages\\blog\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const blogs = [{
  id: 1,
  title: 'Converting a React application with Redux and Apollo to Next.JS (2020)',
  image: 'https://i.imgur.com/mW3nk8o.jpg',
  link: '/blog/react_to_nextjs',
  author: 'SebastianSosa',
  date: 'June 12, 2020',
  description: 'Although Next.JS is already built on the shoulders of React, there are still many challenges which need to be overcome before getting the application up and running. For this guide I will touch on the key changes I had to make when converting my React application with the centralized state management: Redux, and the GraphQL API: Apollo, to Next.JS.'
}];

const BlogIndex = () => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Blog | Unilous"), __jsx("meta", {
    name: "description",
    content: "Contact the Unilous team",
    key: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "navbar-height",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), blogs.map(item => __jsx(_components_blog_BlogPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    image: item.image,
    author: item.author,
    date: item.date,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  })));
};

const mapStateToProps = state => {
  return {// currentUser: state.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {// setUserDD: bindActionCreators(setUserDD, dispatch),
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(BlogIndex));

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

/***/ "./styles/pages/blogpost.module.css":
/*!******************************************!*\
  !*** ./styles/pages/blogpost.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "blogpost_container__3Q2BS",
	"imgStyle": "blogpost_imgStyle__3Lnon",
	"textBox": "blogpost_textBox__Ah14B",
	"date": "blogpost_date__2rnz4",
	"blackLink": "blogpost_blackLink__26vUS",
	"title": "blogpost_title__1Ukhm",
	"authorContainer": "blogpost_authorContainer__3Plkw",
	"userIcon": "blogpost_userIcon__2ann7",
	"description": "blogpost_description__2td28"
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

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/blog/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\Projects\projectU\projectu\pages\blog\index.js */"./pages/blog/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9nL0Jsb2dQb3N0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3TmF2QmFyL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci9zaWduZWQvTm90U2lnbmVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3TmF2QmFyL3NpZ25lZC9TaWduZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdOYXZCYXIvdXNlci9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3TmF2QmFyL3VzZXIvVXNlclV0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvUG9zdFNtYWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGV4dC1maWVsZC9JbnB1dEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvZm9ybS9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvZm9ybS9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3V0aWxpdGllcy9Ob3RpZi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvdXRpbGl0aWVzL1VzZXJOb3RpZkxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZnVuY3Rpb25zL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3Rva2VuLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3VzZXJERC5qcyIsIndlYnBhY2s6Ly8vLi9zY2hlbWFzL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zY2hlbWFzL3F1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2lucHV0SGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9wYWdlcy9ibG9ncG9zdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy91c2VyL3VzZXJVdGlsaXRpZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rLWNvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hcG9sbG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlU3RhdGUiLCJvblF1ZXJ5Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ0b2tlbiIsImN1cnJlbnRVc2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZXRUb2tlbiIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInNldEN1cnJlbnRVc2VyIiwic2V0UGVuZGluZ05vdGlmaWNhdGlvbnMiLCJzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMiLCJjb25uZWN0IiwiTG9hZGluZyIsInNpemUiLCJjb2xvciIsIkJsb2dQb3N0IiwiQlAiLCJjb250YWluZXIiLCJsaW5rIiwiaW1hZ2UiLCJpbWdTdHlsZSIsInRleHRCb3giLCJlbmNvZGVVUklDb21wb25lbnQiLCJhdXRob3IiLCJhdXRob3JDb250YWluZXIiLCJ1c2VySWNvbiIsImJsYWNrTGluayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiTmF2QmFyIiwibm9Vc2VyIiwiTkIiLCJicmFuZENvbnRhaW5lciIsImljb24iLCJuYW1lIiwiQ1BUZXh0IiwiY29udGFpbmVyTSIsIm5hdkljb24iLCJicmFuZENvbnRhaW5lck0iLCJzZWFyY2hRdWVyeSIsInVzZUZpZWxkIiwiY3VycmVudFVzZXJVTiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyUXVlcnkiLCJ1c2VRdWVyeSIsIkZJTkRfVVNFUiIsInZhcmlhYmxlcyIsInVzZXJuYW1lIiwidXNlclF1ZXJ5Q29uZGl0aW9ucyIsImRhdGEiLCJyZWR1Y2VyIiwiZmluZFVzZXIiLCJ1c2VyUmVzdWx0IiwidXNlRWZmZWN0Iiwic3ViTmF2Iiwic2V0U3ViTmF2IiwidXNlckREIiwicmVzZXROYXYiLCJyZXNldFVzZXJERCIsIlNRQ2xlYW5lZCIsImZpZWxkcyIsImVudGVyU2VhcmNoIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUtleVByZXNzIiwiZSIsIm5vU3RhdGUiLCJrZXkiLCJTUSIsImhhbmRsZVN1Yk5hdlN0YXRlIiwiaGFuZGxlU3ViTmF2SXRlbVN0YXRlIiwic2V0VXNlckREIiwibG9nb3V0IiwiY2xlYXIiLCJjbGVhclRva2VuIiwic2lnbmVkU3RhdGUiLCJTdWJOYXYiLCJzdWJOYXZDb250YWluZXIiLCJzZWFyY2hDb250YWluZXJNIiwic2VhcmNoQnRuIiwibWFnbmlmaWVyIiwic2VhcmNoQmFyIiwibWVudUNvbnRhaW5lciIsInVzZXJPcHRpb24iLCJtb3JlQ29udGFpbmVyIiwibW9yZSIsIm5vdGlmQ29udGFpbmVyTSIsImJlbGwiLCJub2ZpZkNvdW50Iiwic2lnbk9wdGlvbiIsIlN1Yk5hdkl0ZW0iLCJTTklDb250YWluZXIiLCJ0aXRsZUJlbGwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZE9wdGlvbiIsInRpdGxlTW9yZSIsInNlYXJjaENvbnRhaW5lciIsIkNQQ29udGFpbmVyIiwicGx1cyIsIm5hdkl0ZW0iLCJOb3RTaWduZWQiLCJoYW5kbGVVc2VyU3RhdGUiLCJzaG93VXNlckREIiwiZGlzcGxheSIsInNob3dJbkREIiwidXNlcldyYXBwZXIiLCJ1c2VyQ29udGFpbmVyIiwiYmFja2dyb3VuZENvbG9yIiwiU2lnbmVkIiwidXNlclN0YXRlIiwic2V0VXNlclN0YXRlIiwibm90aWZDb250YWluZXIiLCJ1c2VySW5mb0NvbnRhaW5lciIsIkREQXJyb3ciLCJQb3N0U21hbGwiLCJoYW5kbGVFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVTUE11dGF0aW9uIiwidXNlTXV0YXRpb24iLCJSRU1PVkVfU0FWRURfUE9TVCIsIm9uRXJyb3IiLCJwIiwicG9zdCIsInVzZXIiLCJwYWxsZXR0ZSIsInBhbGxldHRlR2VuZXJhdG9yIiwiY29sb3JQYWxsZXR0ZSIsImhhbmRsZVNhdmVSZW1vdmUiLCJyZXN1bHQiLCJfaWQiLCJwb3N0SWQiLCJuZXdTYXZlZFBvc3RzIiwic2F2ZWRQb3N0cyIsImZpbHRlciIsInNldEN1cnJlbnRVc2VyU1AiLCJ0cmlnZ2VyQWxlcnQiLCJzZXRBbGVydCIsInJlc2V0QWxlcnQiLCJ0eXBlIiwiUFQiLCJwb3N0V3JhcHBlclNtIiwicG9zdENvbG9ySW5kaWNhdG9yIiwicG9zdENvbnRhaW5lciIsInBvc3RIZWFkZXIiLCJQSFVzZXIiLCJQSFVJY29uIiwicG9zdFRpdGxlIiwibWFyZ2luQm90dG9tIiwicG9zdFNtUmVtb3ZlIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInNldEN1cnJlbnRVc2VyUG9zdHMiLCJJbnB1dEhlYWRlciIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJpbmZvIiwiaW5wdXRGb3IiLCJJSCIsImluZm9UaXRsZVRleHQiLCJzaG93SW5mbyIsImNvbG9ySW5mbyIsInRleHRDb2xvciIsImZvcm1JbmZvQ29udGFpbmVyIiwiaW5mb0hlYWRlckNvbnRhaW5lciIsImluZm9JY29uIiwiaW5mb0NvbnRlbnQiLCJSZWdpc3RlciIsInBhc3N3b3JkIiwicmVQYXNzd29yZCIsImVtYWlsIiwicmVmZXJlbmNlTGluayIsImNsZWFuZWRNZXNzYWdlIiwibWVzc2FnZSIsImluY2x1ZGVzIiwib25Mb2dpbkVycm9yIiwicmVnaXN0ZXJNdXRhdGlvbiIsIkNSRUFURV9VU0VSIiwibG9naW5NdXRhdGlvbiIsIkxPR0lOIiwiaGFuZGxlU3VtYml0IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJjaGFuZ2VNZW51SXRlbSIsImxvZ2luUmVzdWx0IiwibG9naW4iLCJzZXRJdGVtIiwicmVzZXQiLCJvblN1Y2Nlc3MiLCJiZ1N0eWxlIiwibm9CRyIsIlVSIiwidXNlckZvcm1Db250YWluZXIiLCJ1c2VyRm9ybSIsIlVGSW5wdXQiLCJtYXJnaW4iLCJVRlN1Ym1pdCIsIlNpZ25JbiIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwic2lnbkluTXV0YXRpb24iLCJOb3RpZiIsImFjY2VwdE5vdGlmIiwiQUNDRVBUX05PVElGSUNBVElPTiIsImRlY2xpbmVOb3RpZiIsIkRFQ0xJTkVfTk9USUZJQ0FUSU9OIiwiYW5zd2VyUXVlc3Rpb24iLCJBTlNXRVJfUVVFU1RJT04iLCJhbnN3ZXIiLCJoYW5kbGVBbnN3ZXIiLCJub3RpZmljYXRpb25JZCIsIm5vdGlmIiwicmVzcG9uc2UiLCJuZXdOb3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9ucyIsIm1hcCIsIm4iLCJ1c2VyRnJvbSIsImhhbmRsZUFjY2VwdCIsImFjY2VwdCIsImFjY2VwdE5vdGlmaWNhdGlvbiIsImhhbmRsZURlY2xpbmUiLCJkZWNsaW5lIiwiZGVjbGluZU5vdGlmaWNhdGlvbiIsIm5vdGlmU3RhdHVzQ29sb3IiLCJhY2NlcHRlZCIsInF1ZXN0aW9uIiwiYm9yZGVyQm90dG9tIiwidXNlclRvIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJHQ0xpbmtTdGF0cyIsIndlYnNpdGVTdGF0cyIsImNvbnRhY3RMaW5rIiwiY2xlYW5lZExpbmsiLCJza2lsbFRvSm9pbiIsInNraWxsTmFtZXMiLCJwcm9wb3NlZENvbnRyaWJ1dGlvbiIsImluZGV4T2YiLCJVc2VyTm90aWZMaXN0Iiwic2VudEZpbHRlciIsInNldFNlbnRGaWx0ZXIiLCJzaG93U0ZERCIsInNldFNob3dTRkREIiwic3RhdHVzRmlsdGVyIiwic2V0U3RhdHVzRmlsdGVyIiwic2hvd1N0YXR1c0REIiwic2V0U2hvd1N0YXR1c0REIiwiZ3JpZENvbHVtbiIsImhlaWdodCIsIkZpbHRlciIsInNlbnRPcHRpb25zIiwiYWxsT3B0aW9ucyIsIm9uT3B0aW9uQ2xpY2siLCJvcHRpb24iLCJvIiwiVVUiLCJORkRET3B0aW9uIiwic2VudEREIiwiTkZyb3Bkb3duIiwiTkZTcGxpdHRlciIsInN0YXR1c09wdGlvbnMiLCJzdGF0dXNERCIsIk5GRHJvcGRvd24iLCJub3RpZkZpbHRlckNvbnRhaW5lciIsIk5GQ3JlYXRvckNvbnRhaW5lciIsIk5GTGFiZWwiLCJORk9wdGlvbkNvbnRhaW5lciIsIk5GT3B0aW9uIiwic3RhdHVzQ29uZGl0aW9ucyIsIm5vdGlmU3RhdHVzIiwic2VudENvbmRpdGlvbnMiLCJzZW50U3RhdHVzIiwic2hvd05vdGlmaWNhdGlvbnMiLCJyZXZlcnNlIiwicm93R2FwIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJ1cmwiLCJzdGFydCIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJwcmltYXJ5Q29sb3IiLCJjb2xvcnMiLCJjIiwiTnVtYmVyIiwiaGlnaGVyQ29sb3IiLCJpc0RhcmsiLCJodHRwTGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJzZXRDb250ZXh0IiwiXyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiYXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50IiwiY29uY2F0IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwid2l0aEFwb2xsbyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInNjcm9sbCIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiYmxvZ3MiLCJpZCIsIkJsb2dJbmRleCIsIml0ZW0iLCJhbGVydE5vdGlmIiwiYWN0aW9uIiwicG9zdHMiLCJhbXQiLCJwZW5kaW5nTm90aWZpY2F0aW9ucyIsIkNSRUFURV9QT1NUIiwiZ3FsIiwiTUFLRV9OT1RJRklDQVRJT04iLCJTQVZFX1BPU1QiLCJBU0tfUVVFU1RJT04iLCJMSVNUX09GX05PVElGSUNBVElPTlMiLCJTS0lMTF9TRUFSQ0giLCJNRSIsIkxJU1RfT0ZfUE9TVFMiLCJGSU5EX1BPU1QiLCJBTExfVVNFUlMiLCJTT01FX1VTRVJTIiwiQUxMX1BPU1RTIiwiR0VUX1BPU1RfVElUTEVTIiwiU0VBUkNIX1BPU1RTIiwiUEVORElOR19OT1RJRlMiLCJRX0FORF9BX05PVElGUyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3RCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDOztBQUVBLFFB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QTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBLGdEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyLCBzZXRQZW5kaW5nTm90aWZpY2F0aW9ucywgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG4vLyBpbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2QmFyL05hdkJhcidcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL25ld05hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IEZJTkRfVVNFUiwgUEVORElOR19OT1RJRlMsIExJU1RfT0ZfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4uL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3Qgb25RdWVyeUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TmF2QmFyIHF1ZXJ5PXtxdWVyeX0gb25RdWVyeUNoYW5nZT17b25RdWVyeUNoYW5nZX0gbm9Vc2VyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAmJiBwcm9wcy50b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHByb3BzLnNldFRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci5faWQgOiAndGhpc2lzZmFrZSdcclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzUXVlcnkgPSB1c2VRdWVyeShQRU5ESU5HX05PVElGUywge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6ICB7dXNlcklkOiBjdXJyZW50VXNlcklkfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJVTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgOiAndGhpc2lzZmFrZSdcclxuICAgICAgICBjb25zdCB1c2VyUXVlcnkgPSB1c2VRdWVyeShGSU5EX1VTRVIsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7dXNlcm5hbWU6IGN1cnJlbnRVc2VyVU59XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCB1c2VyTm90aWZzID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkKSA6IFtdXHJcbiAgICAgICAgY29uc3Qgbm90aWZzUXVlcnkgPSB1c2VRdWVyeShMSVNUX09GX05PVElGSUNBVElPTlMsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uczogdXNlck5vdGlmc31cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc1F1ZXJ5Q29uZGl0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub3RpZnNRdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAobm90aWZzUXVlcnkubG9hZGluZykgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKG5vdGlmc1F1ZXJ5LmRhdGEubGlzdE9mTm90aWZpY2F0aW9ucy5sZW5ndGggPCAxKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9uc1swXS51c2VyRnJvbSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIG5vdGlmc1F1ZXJ5LmRhdGEubGlzdE9mTm90aWZpY2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzQ29uZGl0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwZW5kaW5nTm90aWZzUXVlcnkuZGF0YSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyICYmIHByb3BzLmN1cnJlbnRVc2VyLnBlbmRpbmdOb3RpZmljYXRpb25zKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gcGVuZGluZ05vdGlmc1F1ZXJ5LmRhdGEuc2VhcmNoQXdhaXRpbmdOb3RpZnNcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlckNvbmRpdGlvbnMgPSAocXVlcnksIHJlZHVjZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFxdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAoIXF1ZXJ5LmRhdGEuZmluZFVzZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChyZWR1Y2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gcXVlcnkuZGF0YS5maW5kVXNlclxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBub3RpZnNGaWxsZWQgPSBub3RpZnNRdWVyeUNvbmRpdGlvbnMoKVxyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnMgPSBwZW5kaW5nTm90aWZzQ29uZGl0aW9ucygpXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDb25kaXRpb25zKHVzZXJRdWVyeSwgcHJvcHMuY3VycmVudFVzZXIpXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyKHVzZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBlbmRpbmdOb3RpZnMpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldFBlbmRpbmdOb3RpZmljYXRpb25zKHBlbmRpbmdOb3RpZnMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vdGlmc0ZpbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5vdGlmc0ZpbGxlZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtub3RpZnNGaWxsZWQsIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgdXNlciwgcHJvcHMuc2V0Q3VycmVudFVzZXIsIHBlbmRpbmdOb3RpZnMsIHByb3BzLnNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBwcm9wc10pXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxOYXZCYXIgcXVlcnk9e3F1ZXJ5fSBvblF1ZXJ5Q2hhbmdlPXtvblF1ZXJ5Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0VG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXIsIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRQZW5kaW5nTm90aWZpY2F0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuc2V0Q3VycmVudFVzZXJcclxuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShMYXlvdXQpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vIGltcG9ydCBsb2dvQiBmcm9tICcuLi9zdGF0aWMvc3ZnL2xvZ28vbG9nb0Iuc3ZnJ1xyXG4vLyBpbXBvcnQgbG9nb1cgZnJvbSAnLi4vc3RhdGljL3N2Zy9sb2dvL2xvZ29XLnN2ZydcclxuXHJcbmNvbnN0IExvYWRpbmcgPSAocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5zaXplID09PSAnc21hbGwnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgY2xhc3NOYW1lPVwibG9hZGluZy1sb2dvXCIgYWx0PVwibG9hZGluZyBsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMT5sb2FkaW5nPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKHByb3BzLmNvbG9yID09PSAnd2hpdGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvVy5zdmdcIiBjbGFzc05hbWU9XCJsb2FkaW5nLWxvZ28tbFwiIGFsdD1cImxvYWRpbmcgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2FkaW5nLXRpdGxlXCI+bG9hZGluZzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29CLnN2Z1wiIGNsYXNzTmFtZT1cImxvYWRpbmctbG9nby1sXCIgYWx0PVwibG9hZGluZyBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxvYWRpbmctdGl0bGVcIj5sb2FkaW5nPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKExvYWRpbmcpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCUCBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvYmxvZ3Bvc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEJsb2dQb3N0ID0gcHJvcHMgPT4gXG4gICAgPGRpdiBjbGFzc05hbWU9e0JQLmNvbnRhaW5lcn0+XG4gICAgICA8TGluayBocmVmPXtwcm9wcy5saW5rfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9J2FsdCcgY2xhc3NOYW1lPXtCUC5pbWdTdHlsZX0vPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGlkPSd0ZXh0RGl2JyBjbGFzc05hbWU9e0JQLnRleHRCb3h9PlxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMuYXV0aG9yKX1gfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake0JQLmF1dGhvckNvbnRhaW5lcn0gbmV1dHJhbGl6ZS1saW5rYH0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17QlAudXNlckljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgLz5cbiAgICAgICAgICAgIDxkaXY+e3Byb3BzLmF1dGhvcn08L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17cHJvcHMubGlua30+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtCUC5ibGFja0xpbmt9IG5ldXRyYWxpemUtbGlua2B9ID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e0JQLnRpdGxlfT57cHJvcHMudGl0bGV9PC9oMj4gIFxuICAgICAgICAgIDwvYT4gICAgICBcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtwcm9wcy5saW5rfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake0JQLmRlc2NyaXB0aW9ufSBuZXV0cmFsaXplLWxpbmtgfT5cbiAgICAgICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17QlAuZGF0ZX0+e3Byb3BzLmRhdGV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0OyAiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTkIgZnJvbSAnLi4vLi4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge3VzZUZpZWxkfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBOb3RTaWduZWQgZnJvbSAnLi9zaWduZWQvTm90U2lnbmVkJ1xyXG5pbXBvcnQgU2lnbmVkIGZyb20gJy4vc2lnbmVkL1NpZ25lZCdcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uL3VzZXIvZm9ybS9TaWduSW4nXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi91c2VyL2Zvcm0vUmVnaXN0ZXInXHJcbmltcG9ydCB7Y2xlYXJUb2tlbn0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCB7c2V0Q3VycmVudFVzZXJ9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgVXNlck5vdGlmTGlzdCBmcm9tICcuLi91c2VyL3V0aWxpdGllcy9Vc2VyTm90aWZMaXN0J1xyXG5pbXBvcnQgeyBGSU5EX1VTRVIgfSBmcm9tICcuLi8uLi9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtzZXRVc2VyREQsIHJlc2V0VXNlckREfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy91c2VyREQnXHJcblxyXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5ub1VzZXIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIV01cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuYnJhbmRDb250YWluZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtOQi5uYW1lfT5Vbmlsb3VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5DUFRleHR9PmJsb2dzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTV01cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuY29udGFpbmVyTX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubmF2SWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuYnJhbmRDb250YWluZXJNfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvVy5zdmdcIiBjbGFzc05hbWU9e05CLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17TkIubmFtZX0+VW5pbG91czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuQ1BUZXh0fT5ibG9nczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB1c2VGaWVsZCgndGV4dCcpXHJcbiAgICBjb25zdCBjdXJyZW50VXNlclVOID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSA6ICdmYWtlVXNlcidcclxuICAgIGNvbnN0IHVzZXJRdWVyeSA9IHVzZVF1ZXJ5KEZJTkRfVVNFUiwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBjdXJyZW50VXNlclVOfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHVzZXJRdWVyeUNvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB1c2VyUXVlcnkuZGF0YVxyXG4gICAgICAgIGNvbnN0IHJlZHVjZXIgPSBwcm9wcy5jdXJyZW50VXNlclxyXG4gICAgICAgIGlmICghcXVlcnkpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIGlmICghcXVlcnkuZmluZFVzZXIpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIGlmIChyZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeS5maW5kVXNlci51c2VybmFtZSA9PT0gcmVkdWNlci51c2VybmFtZSkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBxdWVyeS5maW5kVXNlclxyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlclJlc3VsdCA9IHVzZXJRdWVyeUNvbmRpdGlvbnMoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJSZXN1bHQpIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXIodXNlclJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMsIHByb3BzLmN1cnJlbnRVc2VyLCB1c2VyUmVzdWx0XSlcclxuXHJcbiAgICBjb25zdCBbc3ViTmF2LCBzZXRTdWJOYXZdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBpZiAocHJvcHMudXNlckREKSB7XHJcbiAgICAgICAgaWYgKCFzdWJOYXYpIHtcclxuICAgICAgICAgICAgc2V0U3ViTmF2KCdtZW51JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNldE5hdiA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdWJOYXYoZmFsc2UpXHJcbiAgICAgICAgcHJvcHMucmVzZXRVc2VyREQoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNRQ2xlYW5lZCA9IHNlYXJjaFF1ZXJ5LmZpZWxkcy52YWx1ZSA9PT0gJycgPyAnYWxsJyA6IHNlYXJjaFF1ZXJ5LmZpZWxkcy52YWx1ZVxyXG5cclxuICAgIGNvbnN0IGVudGVyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvcmVzdWx0cy8ke1NRQ2xlYW5lZH1gKVxyXG4gICAgICAgIHJlc2V0TmF2KClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChlLCBub1N0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBpZiAobm9TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgU1EgPSBlLnRhcmdldC52YWx1ZSA9PT0gJycgPyAnYWxsJyA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL3Jlc3VsdHMvJHtTUX1gKVxyXG4gICAgICAgICAgICAgICAgcmVzZXROYXYoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge2VudGVyU2VhcmNoKCl9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Yk5hdlN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBzdWJOYXYpIHtzZXRTdWJOYXYoZmFsc2UpfVxyXG4gICAgICAgIGVsc2Uge3NldFN1Yk5hdihzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJOYXZJdGVtU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHByb3BzLnVzZXJERCkge3Byb3BzLnJlc2V0VXNlckREKCl9XHJcbiAgICAgICAgZWxzZSB7cHJvcHMuc2V0VXNlckREKHN0YXRlKX1cclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgIHByb3BzLmNsZWFyVG9rZW4oKVxyXG4gICAgICAgIHJlc2V0TmF2KClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaWduZWRTdGF0ZSA9IHByb3BzLnRva2VuID8gPFNpZ25lZCAvPiA6IDxOb3RTaWduZWQgLz5cclxuICAgIGNvbnN0IHVzZXJuYW1lID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSA6ICcnXHJcbiAgICBjb25zdCBTdWJOYXYgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdWJOYXYpIHtyZXR1cm4gbnVsbH1cclxuICAgICAgICBlbHNlIGlmIChzdWJOYXYgPT09ICdzZWFyY2gnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc3ViTmF2Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc2VhcmNoQ29udGFpbmVyTX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzdWx0cy9bc2VhcmNoUXVlcnldXCIgYXM9e2AvcmVzdWx0cy8ke1NRQ2xlYW5lZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIuc2VhcmNoQnRufT48aW1nIHNyYz1cIi9zdmcvc2VhcmNoV1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5tYWduaWZpZXJ9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaFwiIGNsYXNzTmFtZT17TkIuc2VhcmNoQmFyfSBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXlQcmVzcyhlLCB0cnVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN1Yk5hdiA9PT0gJ21lbnUnKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5ub1VzZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnN1Yk5hdkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZW51Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ25vdGlmaWNhdGlvbicpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnVzZXJPcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Yk5hdkl0ZW1TdGF0ZSgndXNlcicpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLm1vcmVDb250YWluZXJ9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Yk5hdkl0ZW1TdGF0ZSgnbW9yZScpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL21vcmVXLnN2Z1wiIGNsYXNzTmFtZT17TkIubW9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvcHMudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnN1Yk5hdkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZW51Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ25vdGlmaWNhdGlvbicpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubm90aWZDb250YWluZXJNfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2JlbGxXLnN2Z1wiIGNsYXNzTmFtZT17TkIuYmVsbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5vZmlmQ291bnR9Pi08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnVzZXJPcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Yk5hdkl0ZW1TdGF0ZSgndXNlcicpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlcm5hbWV9Pnt1c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLm1vcmVDb250YWluZXJ9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Yk5hdkl0ZW1TdGF0ZSgnbW9yZScpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL21vcmVXLnN2Z1wiIGNsYXNzTmFtZT17TkIubW9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnN1Yk5hdkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZW51Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5zaWduT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ3NpZ25pbicpfSA+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnNpZ25PcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Yk5hdkl0ZW1TdGF0ZSgncmVnaXN0ZXInKX0gPnJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIubW9yZUNvbnRhaW5lcn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdtb3JlJyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbW9yZVcuc3ZnXCIgY2xhc3NOYW1lPXtOQi5tb3JlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgU3ViTmF2SXRlbSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXByb3BzLnVzZXJERCkge3JldHVybiBudWxsfVxyXG4gICAgICAgIGlmIChwcm9wcy51c2VyREQgPT09ICdzaWduaW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU05JQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lnbkluIG9uU3VjY2Vzcz17cmVzZXROYXZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMudXNlckREID09PSAncmVnaXN0ZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU05JQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVnaXN0ZXIgb25TdWNjZXNzPXtyZXNldE5hdn0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnVzZXJERCA9PT0gJ25vdGlmaWNhdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5TTklDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9iZWxsVy5zdmdcIiBjbGFzc05hbWU9e05CLnRpdGxlQmVsbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VXNlck5vdGlmTGlzdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnVzZXJERCA9PT0gJ3VzZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU05JQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gcmVzZXROYXYoKX0gaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZGVjb2RlVVJJQ29tcG9uZW50KHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PjxoMyBjbGFzc05hbWU9e05CLmRkT3B0aW9ufT5hY2NvdW50IGRldGFpbHM8L2gzPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17TkIuZGRPcHRpb259IG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfSBzdHlsZT17e2NvbG9yOiAncmdiKDI1NCw1Miw3NyknfX0+U2lnbiBvdXQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnVzZXJERCA9PT0gJ21vcmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU05JQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbW9yZVcuc3ZnXCIgY2xhc3NOYW1lPXtOQi50aXRsZU1vcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gcmVzZXROYXYoKX0gaHJlZj1cIi9wb3N0Zm9ybXBhZ2VcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT48aDMgY2xhc3NOYW1lPXtOQi5kZE9wdGlvbn0+Y3JlYXRlIHByb2plY3Q8L2gzPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gcmVzZXROYXYoKX0gaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT48aDMgY2xhc3NOYW1lPXtOQi5kZE9wdGlvbn0+YmxvZ3M8L2gzPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhXTVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtOQi5icmFuZENvbnRhaW5lcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvVy5zdmdcIiBjbGFzc05hbWU9e05CLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtOQi5uYW1lfT5Vbmlsb3VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bHRzL1tzZWFyY2hRdWVyeV1cIiBhcz17YC9yZXN1bHRzLyR7U1FDbGVhbmVkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtOQi5zZWFyY2hCdG59PjxpbWcgc3JjPVwiL3N2Zy9zZWFyY2hXVy5zdmdcIiBjbGFzc05hbWU9e05CLm1hZ25pZmllcn0gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17TkIuc2VhcmNoQmFyfSBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXlQcmVzcyhlKX0gey4uLnNlYXJjaFF1ZXJ5LmZpZWxkc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3Rmb3JtcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake05CLkNQQ29udGFpbmVyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9wbHVzVy5zdmdcIiBjbGFzc05hbWU9e05CLnBsdXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuQ1BUZXh0fT5jcmVhdGUgcHJvamVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaWduZWRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuQ1BUZXh0fT5ibG9nczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNXTVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLmNvbnRhaW5lck19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuYnJhbmRDb250YWluZXJNfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e05CLm5hbWV9PlVuaWxvdXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2U3RhdGUoJ3NlYXJjaCcpfSBjbGFzc05hbWU9e05CLm5hdkl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3NlYXJjaFdXLnN2Z1wiIGNsYXNzTmFtZT17TkIubmF2SWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Yk5hdlN0YXRlKCdtZW51Jyl9IGNsYXNzTmFtZT17TkIubmF2SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9oYW1idXJnZXJXLnN2Z1wiIGNsYXNzTmFtZT17TkIubmF2SWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U3ViTmF2IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1Yk5hdkl0ZW0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIHVzZXJERDogc3RhdGUudXNlckRELFxyXG4gICAgICAgIC8vIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWZcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXIsIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRVc2VyREQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgICAgICByZXNldFVzZXJERDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0VXNlckRELCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShOYXZCYXIpIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vLi4vdXNlci9mb3JtL1JlZ2lzdGVyJ1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uLy4uL3VzZXIvZm9ybS9TaWduSW4nXHJcbmltcG9ydCB7c2V0VXNlckRELCByZXNldFVzZXJERH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdXNlckREJ1xyXG5cclxuY29uc3QgTm90U2lnbmVkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHByb3BzLnVzZXJERCkge3Byb3BzLnJlc2V0VXNlckREKCl9XHJcbiAgICAgICAgZWxzZSB7cHJvcHMuc2V0VXNlckREKHN0YXRlKX1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VXNlckREID0gcHJvcHMudXNlckREID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gcHJvcHMudXNlckREID8gXHJcbiAgICAgICAgcHJvcHMudXNlckREID09PSAncmVnaXN0ZXInID8gPFJlZ2lzdGVyIC8+IDpcclxuICAgICAgICBwcm9wcy51c2VyREQgPT09ICdzaWduaW4nID8gPFNpZ25JbiAvPiA6IG51bGxcclxuICAgIDogbnVsbFxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJXcmFwcGVyfSAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIuc2lnbk9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclN0YXRlKCdzaWduaW4nKX0gPnNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5zaWduT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ3JlZ2lzdGVyJyl9ID5yZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJERH0gc3R5bGU9e3Nob3dVc2VyRER9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20taHJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfX0gLz5cclxuICAgICAgICAgICAgICAgIHtzaG93SW5ERH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICB1c2VyREQ6IHN0YXRlLnVzZXJERCxcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRVc2VyREQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgICAgICByZXNldFVzZXJERDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0VXNlckRELCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShOb3RTaWduZWQpIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi91c2VyL05vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBVc2VyVXRpbGl0aWVzIGZyb20gJy4uL3VzZXIvVXNlclV0aWxpdGllcydcclxuXHJcblxyXG5jb25zdCBTaWduZWQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhhbmRsZVVzZXJTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdXNlclN0YXRlKSB7c2V0VXNlclN0YXRlKGZhbHNlKX1cclxuICAgICAgICBlbHNlIHtzZXRVc2VyU3RhdGUoc3RhdGUpfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd1VzZXJERCA9IHVzZXJTdGF0ZSA/IHtkaXNwbGF5OiAnYmxvY2snfSA6IHtkaXNwbGF5OiAnbm9uZSd9XHJcbiAgICBjb25zdCBzaG93SW5ERCA9IHVzZXJTdGF0ZSA/IFxyXG4gICAgICAgIHVzZXJTdGF0ZSA9PT0gJ25vdGlmaWNhdGlvbicgPyA8Tm90aWZpY2F0aW9ucyAvPiA6IDxVc2VyVXRpbGl0aWVzIC8+XHJcbiAgICA6IG51bGxcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSA6ICcnXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ25vdGlmaWNhdGlvbicpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubm90aWZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvYmVsbFcuc3ZnXCIgY2xhc3NOYW1lPXtOQi5iZWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubm9maWZDb3VudH0+LTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIudXNlck9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclN0YXRlKCd1c2VyJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VySW5mb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VybmFtZX0+e3VzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvZGRXLnN2Z1wiIGNsYXNzTmFtZT17TkIuRERBcnJvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJERH0gc3R5bGU9e3Nob3dVc2VyRER9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20taHJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfX0gLz5cclxuICAgICAgICAgICAgICAgIHtzaG93SW5ERH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICAvLyBhbGVydE5vdGlmOiBzdGF0ZS5hbGVydE5vdGlmXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gY2xlYXJUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKGNsZWFyVG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICAvLyByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoU2lnbmVkKSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTkIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IFVzZXJOb3RpZkxpc3QgZnJvbSAnLi4vLi4vdXNlci91dGlsaXRpZXMvVXNlck5vdGlmTGlzdCdcclxuXHJcbmNvbnN0IFNpZ25lZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGFuZGxlVXNlclN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSB1c2VyU3RhdGUpIHtzZXRVc2VyU3RhdGUoZmFsc2UpfVxyXG4gICAgICAgIGVsc2Uge3NldFVzZXJTdGF0ZShzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93VXNlckREID0gdXNlclN0YXRlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gdXNlclN0YXRlID8gXHJcbiAgICAgICAgdXNlclN0YXRlID09PSAnbm90aWZpY2F0aW9uJyA/IDxOb3RpZmljYXRpb25zIC8+IDogPFVzZXJVdGlsaXRpZXMgLz5cclxuICAgIDogbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2JlbGxXLnN2Z1wiIGNsYXNzTmFtZT17TkIudGl0bGVCZWxsfSAvPlxyXG4gICAgICAgICAgICA8VXNlck5vdGlmTGlzdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgLy8gYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZlxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIGNsZWFyVG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgLy8gcmVzZXRBbGVydDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0QWxlcnQsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFNpZ25lZCkiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IE5CIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9uZXdOYXZCYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2NsZWFyVG9rZW59IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcblxyXG5jb25zdCBTaWduZWQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhhbmRsZVVzZXJTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdXNlclN0YXRlKSB7c2V0VXNlclN0YXRlKGZhbHNlKX1cclxuICAgICAgICBlbHNlIHtzZXRVc2VyU3RhdGUoc3RhdGUpfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd1VzZXJERCA9IHVzZXJTdGF0ZSA/IHtkaXNwbGF5OiAnYmxvY2snfSA6IHtkaXNwbGF5OiAnbm9uZSd9XHJcbiAgICBjb25zdCBzaG93SW5ERCA9IHVzZXJTdGF0ZSA/IFxyXG4gICAgICAgIHVzZXJTdGF0ZSA9PT0gJ25vdGlmaWNhdGlvbicgPyA8Tm90aWZpY2F0aW9ucyAvPiA6IDxVc2VyVXRpbGl0aWVzIC8+XHJcbiAgICA6IG51bGxcclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgIHByb3BzLmNsZWFyVG9rZW4oKVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lIDogJydcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPnt1c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtkZWNvZGVVUklDb21wb25lbnQocHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PjxoMyBjbGFzc05hbWU9e05CLmRkT3B0aW9ufT5hY2NvdW50IGRldGFpbHM8L2gzPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtOQi5kZE9wdGlvbn0gb25DbGljaz17KCkgPT4gbG9nb3V0KCl9IHN0eWxlPXt7Y29sb3I6ICdyZ2IoMjU0LDUyLDc3KSd9fT5zaWduIG91dDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICAvLyBhbGVydE5vdGlmOiBzdGF0ZS5hbGVydE5vdGlmXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xlYXJUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKGNsZWFyVG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICAvLyByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoU2lnbmVkKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgUkVNT1ZFX1NBVkVEX1BPU1QgfSBmcm9tICcuLi8uLi9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXJQb3N0cywgc2V0Q3VycmVudFVzZXJTUCB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCB7IHRyaWdnZXJBbGVydCwgcGFsbGV0dGVHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgUFQgZnJvbSAnLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFBvc3RTbWFsbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBbIGRlbGV0ZVBvc3RNdXRhdGlvbiBdID0gdXNlTXV0YXRpb24oREVMRVRFX1BPU1QsIHtcclxuICAgIC8vICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgLy8gfSlcclxuICAgIGNvbnN0IFsgcmVtb3ZlU1BNdXRhdGlvbiBdID0gdXNlTXV0YXRpb24oUkVNT1ZFX1NBVkVEX1BPU1QsIHtcclxuICAgICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgfSlcclxuICAgIGNvbnN0IHAgPSBwcm9wcy5wb3N0XHJcbiAgICBjb25zdCB1c2VyID0gcHJvcHMucG9zdC51c2VyID8gcHJvcHMucG9zdC51c2VyLnVzZXJuYW1lIDogcHJvcHMudXNlclxyXG4gICAgY29uc3QgcGFsbGV0dGUgPSBwYWxsZXR0ZUdlbmVyYXRvcihwLmNvbG9yKS5jb2xvclBhbGxldHRlXHJcbiAgICAvLyBjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVsZXRlUG9zdE11dGF0aW9uKHtcclxuICAgIC8vICAgICAgICAgdmFyaWFibGVzOiB7cG9zdElkOiBwcm9wcy5wb3N0Ll9pZH1cclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIGlmIChyZXN1bHQpIHtcclxuICAgIC8vICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJQb3N0cyhwcm9wcy5jdXJyZW50VXNlci5wb3N0cy5maWx0ZXIocCA9PiBwLl9pZCAhPT0gcHJvcHMucG9zdC5faWQpKVxyXG4gICAgLy8gICAgICAgICB0cmlnZ2VyQWxlcnQoJ2RhbmdlcicsIGBkZWxldGVkICQ6IGRlbGV0ZWQgcG9zdCAnJHtwLnRpdGxlfSdgLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBoYW5kbGVTYXZlUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlbW92ZVNQTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHByb3BzLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICAgICAgICAgIHBvc3RJZDogcC5faWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTYXZlZFBvc3RzID0gcHJvcHMuY3VycmVudFVzZXIuc2F2ZWRQb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0Ll9pZCAhPT0gcC5faWQpXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyU1AobmV3U2F2ZWRQb3N0cylcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdkYW5nZXInLCBgdW5mb2xsb3dlZCQ6IHVuZm9sbG93ZWQgcG9zdCAnJHtwLnRpdGxlfSdgLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwcm9wcy50eXBlID09PSAnc2F2ZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RXcmFwcGVyU219PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb2xvckluZGljYXRvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBhbGxldHRlLmNvbG9yfX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudCh1c2VyKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7UFQuUEhVc2VyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17UFQuUEhVSWNvbn0gc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBhbHQ9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1t0aXRsZV1cIiBhcz17YC9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHAudGl0bGUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQVC5wb3N0VGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnN3B4J319PntwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlU2F2ZVJlbW92ZSgpfSBjbGFzc05hbWU9e1BULnBvc3RTbVJlbW92ZX0+eDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgaWYgKHVzZXIgPT09IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdFdyYXBwZXJTbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb2xvckluZGljYXRvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBhbGxldHRlLmNvbG9yfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudCh1c2VyKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtQVC5QSFVzZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17UFQuUEhVSWNvbn0gc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBhbHQ9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3RpdGxlXVwiIGFzPXtgL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocC50aXRsZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17UFQucG9zdFRpdGxlfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzdweCd9fT57cC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKCl9IGNsYXNzTmFtZT1cInBvc3Qtc20tcmVtb3ZlXCI+eDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RXcmFwcGVyU219IHN0eWxlPXt7Z3JpZFRlbXBsYXRlQ29sdW1uczogJzhweCBhdXRvJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbG9ySW5kaWNhdG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcGFsbGV0dGUuY29sb3J9fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXIpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BULlBIVXNlcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17UFQuUEhVSWNvbn0gc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBhbHQ9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bdGl0bGVdXCIgYXM9e2AvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwLnRpdGxlKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17UFQucG9zdFRpdGxlfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzdweCd9fT57cC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgeyBzZXRDdXJyZW50VXNlclBvc3RzLCBzZXRDdXJyZW50VXNlclNQLCBzZXRBbGVydCwgcmVzZXRBbGVydCB9XHJcbikoUG9zdFNtYWxsKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBJSCBmcm9tICcuLi8uLi9zdHlsZXMvaW5wdXRIZWFkZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IElucHV0SGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGlmICghcHJvcHMuaW5mbykge1xyXG4gICAgICAgIHJldHVybiA8bGFiZWwgaHRtbEZvcj17cHJvcHMuaW5wdXRGb3J9PjxoMyBjbGFzc05hbWU9e0lILmluZm9UaXRsZVRleHR9Pntwcm9wcy50aXRsZX08L2gzPjwvbGFiZWw+XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0luZm8gPSBleHBhbmRlZCA/IHtkaXNwbGF5OiAnYmxvY2snfSA6IHtkaXNwbGF5OiAnbm9uZSd9IFxyXG4gICAgY29uc3QgY29sb3JJbmZvID0gcHJvcHMuY29sb3IgPT09ICd3aGl0ZScgP1xyXG4gICAgICAgIHt0ZXh0Q29sb3I6ICcjMjgyODI4JywgaWNvbjogJy9zdmcvaW5mb0Iuc3ZnJ30gOiB7dGV4dENvbG9yOiAnd2hpdGUnLCBpY29uOiAnL3N2Zy9pbmZvVy5zdmcnfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SUguZm9ybUluZm9Db250YWluZXJ9IHN0eWxlPXt7Y29sb3I6IGNvbG9ySW5mby50ZXh0Q29sb3J9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0lILmluZm9IZWFkZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlucHV0Rm9yfT48aDMgY2xhc3NOYW1lPXtJSC5pbmZvVGl0bGVUZXh0fT57cHJvcHMudGl0bGV9PC9oMz48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfSBzcmM9e2NvbG9ySW5mby5pY29ufSBjbGFzc05hbWU9e0lILmluZm9JY29ufSBhbHQ9XCJpbmZvXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtJSC5pbmZvQ29udGVudH0gc3R5bGU9e3Nob3dJbmZvfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoSW5wdXRIZWFkZXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgQ1JFQVRFX1VTRVIsIExPR0lOIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hcy9tdXRhdGlvbnMnXHJcbmltcG9ydCBJbnB1dEhlYWRlciBmcm9tICcuLi8uLi90ZXh0LWZpZWxkL0lucHV0SGVhZGVyJ1xyXG5pbXBvcnQgeyB1c2VGaWVsZCwgdHJpZ2dlckFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB1c2VGaWVsZCgncGFzc3dvcmQnKVxyXG4gICAgY29uc3QgcmVQYXNzd29yZCA9IHVzZUZpZWxkKCdwYXNzd29yZCcpXHJcbiAgICBjb25zdCBlbWFpbCA9IHVzZUZpZWxkKCdlbWFpbCcpXHJcbiAgICBjb25zdCByZWZlcmVuY2VMaW5rID0gdXNlRmllbGQoJ3VybCcpXHJcblxyXG4gICAgY29uc3Qgb25FcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsZWFuZWRNZXNzYWdlID0gZS5tZXNzYWdlXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVmZXJlbmNlTGluay5maWVsZHMudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxyXG4gICAgICAgIGlmIChjbGVhbmVkTWVzc2FnZS5pbmNsdWRlcygndXNlcm5hbWUnKSkgY2xlYW5lZE1lc3NhZ2UgPSBgdXNlcm5hbWUkOiAke3VzZXJuYW1lLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIGlmIChjbGVhbmVkTWVzc2FnZS5pbmNsdWRlcygncmVmZXJlbmNlTGluaycpKSBjbGVhbmVkTWVzc2FnZSA9IGByZWZlcmVuY2UgbGluayQ6ICR7cmVmZXJlbmNlTGluay5maWVsZHMudmFsdWV9IGlzIGFscmVhZHkgYmVpbmcgdXNlZGBcclxuICAgICAgICBpZiAoY2xlYW5lZE1lc3NhZ2UuaW5jbHVkZXMoJ2VtYWlsJykpIGNsZWFuZWRNZXNzYWdlID0gYGVtYWlsJDogJHtlbWFpbC5maWVsZHMudmFsdWV9IGlzIGFscmVhZHkgYmVpbmcgdXNlZGBcclxuICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBjbGVhbmVkTWVzc2FnZSwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkxvZ2luRXJyb3IgPSAoZSkgPT4gY29uc29sZS5sb2coZSlcclxuXHJcbiAgICBjb25zdCBbcmVnaXN0ZXJNdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihDUkVBVEVfVVNFUiwgeyBvbkVycm9yIH0pXHJcbiAgICBjb25zdCBbbG9naW5NdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihMT0dJTiwge29uRXJyb3I6IG9uTG9naW5FcnJvcn0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1bWJpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmZpZWxkcy52YWx1ZSAhPT0gcmVQYXNzd29yZC5maWVsZHMudmFsdWUpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ3Bhc3N3b3JkJDogcGFzc3dvcmQgYW5kIHJlLXBhc3N3b3JkIGRpZCBub3QgbWF0Y2gnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF1c2VybmFtZS5maWVsZHMudmFsdWUubGVuZ3RoIHx8ICFwYXNzd29yZC5maWVsZHMudmFsdWUubGVuZ3RoIHx8ICFyZVBhc3N3b3JkLmZpZWxkcy52YWx1ZS5sZW5ndGggfHwgIXJlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnYWxsJDogYWxsIGZpZWxkcyBtdXN0IGJlIGZpbGxlZCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWdpc3Rlck11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUxpbms6IHJlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jaGFuZ2VNZW51SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlTWVudUl0ZW0obnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBsb2dpblJlc3VsdCA9IGF3YWl0IGxvZ2luTXV0YXRpb24oe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQuZmllbGRzLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9naW5SZXN1bHQuZGF0YS5sb2dpbi52YWx1ZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUuZmllbGRzLnZhbHVlKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRUb2tlbih0b2tlbilcclxuICAgICAgICAgICAgdXNlcm5hbWUucmVzZXQoKVxyXG4gICAgICAgICAgICBwYXNzd29yZC5yZXNldCgpXHJcbiAgICAgICAgICAgIHJlUGFzc3dvcmQucmVzZXQoKVxyXG4gICAgICAgICAgICBlbWFpbC5yZXNldCgpXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmsucmVzZXQoKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCAncmVnaXN0ZXJlZCQ6IGFjY291bnQgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuIHNpZ25pbmcgeW91IGluIG5vdy4nLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uU3VjY2VzcygpXHJcbiAgICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmdTdHlsZSA9IHByb3BzLm5vQkcgPyB7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9IDogbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJGb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgyPnJlZ2lzdGVyPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtVUi51c2VyRm9ybX0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdW1iaXQoZSl9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktdXNlcm5hbWVcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJ1c2VybmFtZVwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4udXNlcm5hbWUuZmllbGRzfSBpZD1cIlNJLXVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXBhc3N3b3JkXCIgaW5mbz17ZmFsc2V9IHRpdGxlPVwicGFzc3dvcmRcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnBhc3N3b3JkLmZpZWxkc30gaWQ9XCJTSS1wYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1yZVBhc3N3b3JkXCIgaW5mbz17ZmFsc2V9IHRpdGxlPVwicmUtdHlwZSBwYXNzd29yZFwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucmVQYXNzd29yZC5maWVsZHN9IGlkPVwiU0ktcmVQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktZW1haWxcIiBpbmZvPXt0cnVlfSB0aXRsZT1cImVtYWlsXCIgY29sb3I9XCJkYXJrXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbjogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+dW50aWxsIGZ1cnRoZXIgcG9saWN5IGNoYW5nZXMgbm8gZW1haWxzIGFyZSBzZW50IHlvdXIgd2F5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm9ubHkgc2hvd24gdG8gdXNlcnMgd2hvIHlvdSBhY2NlcHQgYWZ0ZXIgY29udGFjdGluZyB5b3UgZGlyZWN0bHkgKG5vdCB0aHJvdWdoIHBvc3QpPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5lbWFpbC5maWVsZHN9IGlkPVwiU0ktZW1haWxcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXJlZmVyZW5jZUxpbmtcIiBpbmZvPXt0cnVlfSB0aXRsZT1cInJlc3VtZSBsaW5rXCIgY29sb3I9XCJkYXJrXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luOiAwLCBtYXJnaW5Cb3R0b206ICc1cHgnfX0+bGluayBvbiB5b3VyIHVzZXIgcGFnZSB1c2VkIGFzIGEgcmVzdW1lIHRvIGRlbW9uc3RyYXRlIHlvdXIgYWJpbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbjogMCwgbWFyZ2luQm90dG9tOiAnNXB4J319PjxzdHJvbmc+YWx3YXlzIHZpZXcgYW5vdGhlciB1c2VycyBwb3J0YWZvbGlvIGxpbmsgYmVmb3JlIHdvcmtpbmcgd2l0aCB0aGVtPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbjogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+c2l0ZXMgcmVjb21tZW5kZWQ6IDxzdHJvbmc+TGlua2VkSW48L3N0cm9uZz4sIDxzdHJvbmc+SW5kZWVkPC9zdHJvbmc+LCA8c3Ryb25nPkdpdEh1Yjwvc3Ryb25nPiwgb3IgPHN0cm9uZz5GYWNlYm9vazwvc3Ryb25nPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT50byBmdXJ0aGVyIGVuc3VyZSB5b3VyIHBvcnRhZm9saW8gbGluayBpcyB0cnVzdHdvcnRoeSwgbGluayB5b3VyIFVuaWxvdXMgYWNjb3V0IGZyb20geW91ciBwb3J0YWZvbGlvIGxpbms8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnJlZmVyZW5jZUxpbmsuZmllbGRzfSBpZD1cIlNJLXJlZmVyZW5jZUxpbmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1VSLlVGU3VibWl0fSB0eXBlPVwic3VibWl0XCI+PGgzPnJlZ2lzdGVyPC9oMz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsLFxyXG4gICAgeyBzZXRBbGVydCwgcmVzZXRBbGVydCwgc2V0VG9rZW4gfVxyXG4pKFJlZ2lzdGVyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IExPR0lOIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hcy9tdXRhdGlvbnMnXHJcbmltcG9ydCB7IHVzZUZpZWxkLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgSW5wdXRIZWFkZXIgZnJvbSAnLi4vLi4vdGV4dC1maWVsZC9JbnB1dEhlYWRlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZUZpZWxkKCd0ZXh0JylcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gdXNlRmllbGQoJ3Bhc3N3b3JkJylcclxuXHJcbiAgICBjb25zdCBvbkVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW5lZE1lc3NhZ2UgPSBlLm1lc3NhZ2VcclxuICAgICAgICBjb25zb2xlLmxvZyhjbGVhbmVkTWVzc2FnZSlcclxuICAgICAgICBjbGVhbmVkTWVzc2FnZSA9IGNsZWFuZWRNZXNzYWdlLnNwbGl0KCc6JylcclxuICAgICAgICBjbGVhbmVkTWVzc2FnZSA9IGNsZWFuZWRNZXNzYWdlLnNsaWNlKDEsIGNsZWFuZWRNZXNzYWdlLmxlbmd0aCkuam9pbignJDonKVxyXG4gICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGNsZWFuZWRNZXNzYWdlLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIH1cclxuICAgIGNvbnN0IFtzaWduSW5NdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihMT0dJTiwgeyBvbkVycm9yIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1bWJpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQuZmllbGRzLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmNoYW5nZU1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VNZW51SXRlbShudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzdWx0LmRhdGEubG9naW4udmFsdWVcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHVzZXJuYW1lLmZpZWxkcy52YWx1ZSlcclxuICAgICAgICAgICAgdXNlcm5hbWUucmVzZXQoKVxyXG4gICAgICAgICAgICBwYXNzd29yZC5yZXNldCgpXHJcbiAgICAgICAgICAgIHByb3BzLnNldFRva2VuKHRva2VuKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25TdWNjZXNzKClcclxuICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiZ1N0eWxlID0gcHJvcHMubm9CRyA/IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyODI4J30gOiBudWxsXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIudXNlckZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDI+c2lnbiBpbjwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17VVIudXNlckZvcm19IG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VtYml0KGUpfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXVzZXJuYW1lXCIgaW5mbz17ZmFsc2V9IHRpdGxlPVwidXNlcm5hbWVcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnVzZXJuYW1lLmZpZWxkc30gaWQ9XCJTSS11c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1wYXNzd29yZFwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInBhc3N3b3JkXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5wYXNzd29yZC5maWVsZHN9IGlkPVwiU0ktcGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1VSLlVGU3VibWl0fSB0eXBlPVwic3VibWl0XCI+PGgzPnNpZ24gaW48L2gzPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vLyBcdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsLFxyXG4gICAgeyBzZXRUb2tlbiwgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfVxyXG4pKFNpZ25JbikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUG9zdFNtYWxsIGZyb20gJy4uLy4uL3Bvc3QvUG9zdFNtYWxsJ1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IEFDQ0VQVF9OT1RJRklDQVRJT04sIERFQ0xJTkVfTk9USUZJQ0FUSU9OLCBBTlNXRVJfUVVFU1RJT04gfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IHsgdXNlRmllbGQsIHdlYnNpdGVTdGF0cywgdHJpZ2dlckFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuXHJcbmNvbnN0IE5vdGlmID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbYWNjZXB0Tm90aWZdID0gdXNlTXV0YXRpb24oQUNDRVBUX05PVElGSUNBVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2RlY2xpbmVOb3RpZl0gPSB1c2VNdXRhdGlvbihERUNMSU5FX05PVElGSUNBVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Fuc3dlclF1ZXN0aW9uXSA9IHVzZU11dGF0aW9uKEFOU1dFUl9RVUVTVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGFuc3dlciA9IHVzZUZpZWxkKCd0ZXh0JylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBbnN3ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYW5zd2VyUXVlc3Rpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbklkOiBwcm9wcy5ub3RpZi5faWQsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZTogYW5zd2VyLmZpZWxkcy52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkID09PSBwcm9wcy5ub3RpZi5faWQgPyByZXN1bHQuZGF0YS5hbnN3ZXJRdWVzdGlvbiA6IG4pXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhuZXdOb3RpZmljYXRpb25zKVxyXG4gICAgICAgICAgICBhbnN3ZXIucmVzZXQoKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCBgcmVwbGllZCQ6IHlvdSBoYXZlIHJlcGxpZWQgdG8gJHtwcm9wcy5ub3RpZi51c2VyRnJvbS51c2VybmFtZX0ncyBxdWVzdGlvbmAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWNjZXB0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjY2VwdCA9IGF3YWl0IGFjY2VwdE5vdGlmKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uSWQ6IHByb3BzLm5vdGlmLl9pZH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChhY2NlcHQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQgPT09IHByb3BzLm5vdGlmLl9pZCA/IGFjY2VwdC5kYXRhLmFjY2VwdE5vdGlmaWNhdGlvbiA6IG4pXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhuZXdOb3RpZmljYXRpb25zKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCBgYWNjZXB0ZWQkOiB5b3UgaGF2ZSBhY2NlcHRlZCAke3Byb3BzLm5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfSB0byB5b3VyIHRlYW1gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVEZWNsaW5lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlY2xpbmUgPSBhd2FpdCBkZWNsaW5lTm90aWYoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25JZDogcHJvcHMubm90aWYuX2lkfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChkZWNsaW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkID09PSBwcm9wcy5ub3RpZi5faWQgPyBkZWNsaW5lLmRhdGEuZGVjbGluZU5vdGlmaWNhdGlvbiA6IG4pXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhuZXdOb3RpZmljYXRpb25zKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ2RhbmdlcicsIGBkZWNsaW5lZCQ6IHlvdSBoYXZlIGRlY2xpbmVkICR7cHJvcHMubm90aWYudXNlckZyb20udXNlcm5hbWV9J3MgcmVxdWVzdCB0byBqb2luYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBub3RpZiA9IHByb3BzLm5vdGlmXHJcbiAgICBjb25zdCBub3RpZlN0YXR1c0NvbG9yID0gbm90aWYuYWNjZXB0ZWQgPT09IG51bGwgPyBcclxuICAgICAgICAncmdiKDIyNiwxODQsNTkpJyA6XHJcbiAgICAgICAgbm90aWYuYWNjZXB0ZWQgP1xyXG4gICAgICAgICAgICBub3RpZi5wb3N0ID9cclxuICAgICAgICAgICAgICAgICdyZ2IoNTIsMTY2LDk1KScgOiAnIzhiOGI4YicgXHJcbiAgICAgICAgICAgIDogJ3JnYigyNTQsNTIsNzcpJ1xyXG4gICAgaWYgKG5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lID09PSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSl7XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+YW5zd2VyZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub3RpZi5wb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBHQ0xpbmtTdGF0cyA9IHdlYnNpdGVTdGF0cyhub3RpZi5wb3N0LmNvbnRhY3RMaW5rKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5lZExpbmsgPSBub3RpZi5wb3N0LmNvbnRhY3RMaW5rLnNwbGl0KCcvJylbMl1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pmdyb3VwL2NvbnRhY3QgbGluazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtub3RpZi5wb3N0LmNvbnRhY3RMaW5rfSBjbGFzc05hbWU9XCJuLWpvaW4tbGluayBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IEdDTGlua1N0YXRzLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0dDTGlua1N0YXRzLmljb259IGNsYXNzTmFtZT1cIm4tSkwtaWNvblwiIGFsdD17R0NMaW5rU3RhdHMudGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NsZWFuZWRMaW5rfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IG1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5tZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAobm90aWYuYWNjZXB0ZWQpIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+YW5zd2VyZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub3RpZi5wb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBHQ0xpbmtTdGF0cyA9IHdlYnNpdGVTdGF0cyhub3RpZi5wb3N0LmNvbnRhY3RMaW5rKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5lZExpbmsgPSBub3RpZi5wb3N0LmNvbnRhY3RMaW5rLnNwbGl0KCcvJylbMl1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5zZW50IGdyb3VwL2NvbnRhY3QgbGluazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtub3RpZi5wb3N0LmNvbnRhY3RMaW5rfSBjbGFzc05hbWU9XCJuLWpvaW4tbGluayBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IEdDTGlua1N0YXRzLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0dDTGlua1N0YXRzLmljb259IGNsYXNzTmFtZT1cIm4tSkwtaWNvblwiIGFsdD17R0NMaW5rU3RhdHMudGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NsZWFuZWRMaW5rfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBtZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1yZXBseVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIj5yZXBseTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibi1ub3RpZi1yZXBseS1maWVsZFwiIHsuLi5hbnN3ZXIuZmllbGRzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyKCl9IGNsYXNzTmFtZT1cIm4tQW9ELW9wdGlvbiBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9fT5hbnN3ZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pm1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PmFjY2VwdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1Bb0RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNsaW5lKCl9IGNsYXNzTmFtZT1cIm4tQW9ELW9wdGlvbiBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU0LDUyLDc3KSd9fT5kZWNsaW5lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY2NlcHQoKX0gY2xhc3NOYW1lPVwibi1Bb0Qtb3B0aW9uIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYig1MiwxNjYsOTUpJ319PmFjY2VwdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7bm90aWYudXNlclRvLnVzZXJuYW1lfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShOb3RpZilcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IExJU1RfT0ZfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIH0gZnJvbScuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IE5vdGlmIGZyb20gJy4vTm90aWYnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL0xvYWRpbmcnXHJcbmltcG9ydCBhcG9sbG8sIHthcG9sbG9DbGllbnR9IGZyb20gJy4uLy4uLy4uL2xpYi9hcG9sbG8nXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IFVSIGZyb20gJy4uLy4uLy4uL3N0eWxlcy91c2VyL3VzZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IFVVIGZyb20gJy4uLy4uLy4uL3N0eWxlcy91c2VyL3VzZXJVdGlsaXRpZXMubW9kdWxlLmNzcydcclxuXHJcblxyXG5cclxuY29uc3QgVXNlck5vdGlmTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCBub3RpZnNMaXN0UXVlcnkgPSB1c2VRdWVyeShMSVNUX09GX05PVElGSUNBVElPTlMsIHtcclxuICAgIC8vICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25zOiBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkKX1cclxuICAgIC8vIH0pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhub3RpZnNMaXN0UXVlcnkpXHJcbiAgICAvLyBjb25zdCBub3RpZnNMaXN0UXVlcnkgPSBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgLy8gICAgIHF1ZXJ5OiBMSVNUX09GX05PVElGSUNBVElPTlMsXHJcbiAgICAvLyAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uczogcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCl9XHJcbiAgICAvLyB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgICBjb25zdCBbc2VudEZpbHRlciwgc2V0U2VudEZpbHRlcl0gPSB1c2VTdGF0ZSgndG8geW91JylcclxuICAgIGNvbnN0IFtzaG93U0ZERCwgc2V0U2hvd1NGRERdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3RhdHVzRmlsdGVyLCBzZXRTdGF0dXNGaWx0ZXJdID0gdXNlU3RhdGUoJ3BlbmRpbmcnKVxyXG4gICAgY29uc3QgW3Nob3dTdGF0dXNERCwgc2V0U2hvd1N0YXR1c0REXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3RDb25kaXRpb25zID0gKHF1ZXJ5LCByZWR1Y2VyKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKCFxdWVyeSkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAvLyAgICAgaWYgKHJlZHVjZXIubGVuZ3RoID09PSAwKSB7IHJldHVybiBudWxsIH1cclxuICAgIC8vICAgICBpZiAocmVkdWNlclswXS51c2VyVG8pIHtcclxuICAgIC8vICAgICAgICAgaWYgKHF1ZXJ5Ll9pZCA9PT0gcmVkdWNlclswXS5faWQgKSB7IHJldHVybiBudWxsIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHF1ZXJ5XHJcbiAgICAvLyB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBjb25zdCBub3RpZnNMaXN0ID0gbm90aWZzTGlzdENvbmRpdGlvbnMobm90aWZzTGlzdFF1ZXJ5LmRhdGEubGlzdE9mTm90aWZpY2F0aW9ucywgcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucylcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChub3RpZnNMaXN0KSB7XHJcbiAgICAvLyAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhub3RpZnNMaXN0KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIFtub3RpZnNMaXN0LCBwcm9wcywgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zXSlcclxuXHJcbiAgICBpZiAocHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zWzBdLnVzZXJUbykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2dyaWRDb2x1bW46ICcxLzMnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzV2aCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VudE9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBbJ2Zyb20geW91JywgJ3RvIHlvdSddXHJcbiAgICAgICAgICAgIGNvbnN0IG9uT3B0aW9uQ2xpY2sgPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZW50RmlsdGVyKG9wdGlvbilcclxuICAgICAgICAgICAgICAgIHNldFNob3dTRkREKCFzaG93U0ZERClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWxsT3B0aW9ucy5tYXAobyA9PiBvICE9PSBzZW50RmlsdGVyID8gPGRpdiBvbkNsaWNrPXsoKSA9PiBvbk9wdGlvbkNsaWNrKG8pfSBjbGFzc05hbWU9e1VVLk5GRERPcHRpb259IGtleT17YFNGREQke299YH0+e299PC9kaXY+IDogbnVsbClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VudEREID0gc2hvd1NGREQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZTcGxpdHRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7c2VudE9wdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApOiBudWxsXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXNPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IFsnYWxsJywgJ2FjY2VwdGVkJywgJ2RlY2xpbmVkJywgJ3BlbmRpbmcnLCAnbWVzc2FnZXMnXVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25PcHRpb25DbGljayA9IChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXNGaWx0ZXIob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dTdGF0dXNERCghc2hvd1N0YXR1c0REKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbE9wdGlvbnMubWFwKG8gPT4gbyAhPT0gc3RhdHVzRmlsdGVyID8gPGRpdiBvbkNsaWNrPXsoKSA9PiBvbk9wdGlvbkNsaWNrKG8pfSBjbGFzc05hbWU9e2Ake299LW9wdGlvbiAke1VVLk5GRERPcHRpb259YH0ga2V5PXtgU3RhdHVzREQke299YH0+e299PC9kaXY+IDogbnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXNERCA9IHNob3dTdGF0dXNERCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORlNwbGl0dGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzT3B0aW9ucygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTogbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLm5vdGlmRmlsdGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZDcmVhdG9yQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17VVUuTkZMYWJlbH0+c3RhdHVzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GT3B0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2hvd1N0YXR1c0REKCFzaG93U3RhdHVzREQpfSBjbGFzc05hbWU9e2Ake3N0YXR1c0ZpbHRlcn0tb3B0aW9uICR7VVUuTkZPcHRpb259YH0+e3N0YXR1c0ZpbHRlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNERH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZDcmVhdG9yQ29udGFpbmVyfSBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1VVLk5GTGFiZWx9PnNlbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORk9wdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2hvd1NGREQoIXNob3dTRkREKX0gY2xhc3NOYW1lPXtVVS5ORk9wdGlvbn0+e3NlbnRGaWx0ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZW50RER9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXR1c0NvbmRpdGlvbnMgPSAobm90aWYpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzRmlsdGVyID09PSAnYWxsJykgcmV0dXJuIHRydWVcclxuICAgICAgICBjb25zdCBub3RpZlN0YXR1cyA9IG5vdGlmLmFjY2VwdGVkID09PSBudWxsID9cclxuICAgICAgICAgICAgJ3BlbmRpbmcnIDogXHJcbiAgICAgICAgICAgIG5vdGlmLmFjY2VwdGVkID9cclxuICAgICAgICAgICAgbm90aWYucG9zdCA/XHJcbiAgICAgICAgICAgICAgICAnYWNjZXB0ZWQnIDogJ21lc3NhZ2VzJ1xyXG4gICAgICAgICAgICA6ICdkZWNsaW5lZCdcclxuICAgICAgICBpZiAoc3RhdHVzRmlsdGVyID09PSBub3RpZlN0YXR1cykgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbnRDb25kaXRpb25zID0gKG5vdGlmKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbnRGaWx0ZXIgPT09ICdhbGwnKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGNvbnN0IHNlbnRTdGF0dXMgPSBub3RpZi51c2VyRnJvbS51c2VybmFtZSA9PT0gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUgP1xyXG4gICAgICAgICAgICAnZnJvbSB5b3UnIDogJ3RvIHlvdSdcclxuICAgICAgICBpZiAoc2VudEZpbHRlciA9PT0gc2VudFN0YXR1cykgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dOb3RpZmljYXRpb25zID0gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1c0NvbmRpdGlvbnMobikgJiYgc2VudENvbmRpdGlvbnMobikpe1xyXG4gICAgICAgICAgICByZXR1cm4gPE5vdGlmIG5vdGlmPXtufSBrZXk9e2BVTiR7bi5faWR9YH0vPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfSkucmV2ZXJzZSgpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclV0aWwtbm90aWZcIj5cclxuICAgICAgICAgICAgPEZpbHRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTBweCd9fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2dyaWQnLCByb3dHYXA6ICcxMHB4Jywgd2lkdGg6ICc5NSUnLCBtYXJnaW46ICdhdXRvJywgbWFyZ2luVG9wOiAnMTBweCd9fT5cclxuICAgICAgICAgICAge3Nob3dOb3RpZmljYXRpb25zfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzEwcHgnfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVzZXJOb3RpZkxpc3QpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgdHJpZ2dlckFsZXJ0ID0gKHR5cGUsIG1lc3NhZ2UsIHNldEFsZXJ0LCByZXNldEFsZXJ0KSA9PiB7XHJcbiAgICAvLyB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnc3VjY2VzczogYWxlcnQgYmFyIGlzIHdvcmtpbmcnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIGNvbnN0IGNsZWFuZWRNZXNzYWdlID0gPHAgc3R5bGU9e3ttYXJnaW46IDB9fT48c3Ryb25nPnttZXNzYWdlLnNwbGl0KCckOicpWzBdfTwvc3Ryb25nPjoge21lc3NhZ2Uuc3BsaXQoJyQ6JylbMV19PC9wPlxyXG4gICAgaWYgKHR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgIHNldEFsZXJ0KHtjb2xvcjogJ3JnYig1MiwxNjYsOTUpJywgdGV4dENvbG9yOiAnd2hpdGUnLCBtZXNzYWdlOiBjbGVhbmVkTWVzc2FnZX0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoe2NvbG9yOiAncmdiKDIyNiwxODQsNTkpJywgdGV4dENvbG9yOiAnd2hpdGUnLCBtZXNzYWdlOiBjbGVhbmVkTWVzc2FnZX0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ2RhbmdlcicpIHtcclxuICAgICAgICBzZXRBbGVydCh7Y29sb3I6ICdyZ2IoMjU0LDUyLDc3KScsIHRleHRDb2xvcjogJ3doaXRlJywgbWVzc2FnZTogY2xlYW5lZE1lc3NhZ2V9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2Vic2l0ZVN0YXRzID0gKHVybCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhcnQgPSB1cmwuc3BsaXQoJy8nKVsyXSA/IHVybC5zcGxpdCgnLycpWzJdIDogJydcclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygndW5pbG91cycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy9sb2dvL2xvZ29XLnN2ZycsIGNvbG9yOiAnIzI4MjgyOCcsIHRpdGxlOiAnVW5pbG91cyd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2Rpc2NvcmQnKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvZGlzY29yZC5zdmcnLCBjb2xvcjogJyM3Mjg5REEnLCB0aXRsZTogJ0Rpc2NvcmQnfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCd0cmVsbG8nKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvdHJlbGxvLnN2ZycsIGNvbG9yOiAnIzAwNzlCRicsIHRpdGxlOiAnVHJlbGxvJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnd2hhdHNhcHAnKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvd2hhdHNhcHAuc3ZnJywgY29sb3I6ICcjMjVEMzY2JywgdGl0bGU6ICdXaGF0c0FwcCd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ21vbmRheScpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9iZ2FRWmM5LnBuZycsIGNvbG9yOiAnIzMzMzMzMycsIHRpdGxlOiAnTW9uZGF5J31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnc2xhY2snKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvc2xhY2suc3ZnJywgY29sb3I6ICcjNEExNTRCJywgdGl0bGU6ICdTbGFjayd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2xpbmtlZGluJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2xpbmtlZGluLnN2ZycsIGNvbG9yOiAncmdiKDQwLDEwMywxNzgpJywgdGl0bGU6ICdMaW5rZWRJbid9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2ZhY2Vib29rJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2ZhY2Vib29rLnN2ZycsIGNvbG9yOiAncmdiKDY2LDEwMywxNzgpJywgdGl0bGU6ICdGYWNlYm9vayd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2luZGVlZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGZ29oaXJlLXdlYnNpdGUuczMuYW1hem9uYXdzLmNvbSUyRmltZyUyRmludGVncmF0aW9uLWxvZ29zJTJGaW5kZWVkLWljb24uanBnJmY9MSZub2ZiPTEnLCBjb2xvcjogJyMyODI4MjgnLCB0aXRsZTogJ0luZGVlZCd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2dpdGh1YicpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9naXRIdWIuc3ZnJywgY29sb3I6ICcjMzMzJywgdGl0bGU6ICdHaXRIdWInfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9pbnRlcm5ldC5zdmcnLCBjb2xvcjogJyM0ODQ4NDgnLHRpdGxlOiAndW5rbm93biB1cmwnfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmllbGQgPSAodHlwZSkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgb25DaGFuZ2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYWxsZXR0ZUdlbmVyYXRvciA9IChwcmltYXJ5Q29sb3IpID0+IHtcclxuICAgIGNvbnN0IGNvbG9yID0gcHJpbWFyeUNvbG9yXHJcbiAgICBjb25zdCBjb2xvcnMgPSBjb2xvci5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoYyA9PiBOdW1iZXIoYykpXHJcbiAgICBjb25zdCBoaWdoZXJDb2xvciA9IGByZ2IoJHtjb2xvcnMubWFwKGMgPT4gYyArIDMwKS5qb2luKCcsJyl9KWBcclxuICAgIGxldCBpc0RhcmsgPSAoKGNvbG9yc1swXSArIGNvbG9yc1sxXSArIGNvbG9yc1syXSkgLyAzKSA8IDEyNyA/XHJcbiAgICAgICAgdHJ1ZSA6IGZhbHNlXHJcbiAgICAvLyBjb25zdCBpc0RhcmsgPSBmYWxzZVxyXG4gICAgY29uc3QgY29sb3JQYWxsZXR0ZSA9IGlzRGFyayA/IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgaGlnaGVyQ29sb3IsXHJcbiAgICAgICAgICAgIC8vIHVzZXJJY29uOiB1c2VySWNvblcsXHJcbiAgICAgICAgICAgIC8vIGhhbmRzaGFrZUljb246IGhhbmRzaGFrZUljb25XLFxyXG4gICAgICAgICAgICAvLyBwbHVzSWNvbjogcGx1c0ljb25XLFxyXG4gICAgICAgICAgICAvLyBzaGFyZUljb246IHNoYXJlSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHNocmlua0ljb246IHNocmlua1csXHJcbiAgICAgICAgICAgIC8vIGNvbG9yZWQ6IHtcclxuICAgICAgICAgICAgLy8gICAgIGhlYXJ0SWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gdmlld0JveD1cIjAgLTI4IDUxMi4wMDAwMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm00NzEuMzgyODEyIDQ0LjU3ODEyNWMtMjYuNTAzOTA2LTI4Ljc0NjA5NC02Mi44NzEwOTMtNDQuNTc4MTI1LTEwMi40MTAxNTYtNDQuNTc4MTI1LTI5LjU1NDY4NyAwLTU2LjYyMTA5NCA5LjM0Mzc1LTgwLjQ0OTIxOCAyNy43Njk1MzEtMTIuMDIzNDM4IDkuMzAwNzgxLTIyLjkxNzk2OSAyMC42Nzk2ODgtMzIuNTIzNDM4IDMzLjk2MDkzOC05LjYwMTU2Mi0xMy4yNzczNDQtMjAuNS0yNC42NjAxNTctMzIuNTI3MzQ0LTMzLjk2MDkzOC0yMy44MjQyMTgtMTguNDI1NzgxLTUwLjg5MDYyNS0yNy43Njk1MzEtODAuNDQ1MzEyLTI3Ljc2OTUzMS0zOS41MzkwNjMgMC03NS45MTAxNTYgMTUuODMyMDMxLTEwMi40MTQwNjMgNDQuNTc4MTI1LTI2LjE4NzUgMjguNDEwMTU2LTQwLjYxMzI4MSA2Ny4yMjI2NTYtNDAuNjEzMjgxIDEwOS4yOTI5NjkgMCA0My4zMDA3ODEgMTYuMTM2NzE5IDgyLjkzNzUgNTAuNzgxMjUgMTI0Ljc0MjE4NyAzMC45OTIxODggMzcuMzk0NTMxIDc1LjUzNTE1NiA3NS4zNTU0NjkgMTI3LjExNzE4OCAxMTkuMzEyNSAxNy42MTMyODEgMTUuMDExNzE5IDM3LjU3ODEyNCAzMi4wMjczNDQgNTguMzA4NTkzIDUwLjE1MjM0NCA1LjQ3NjU2MyA0Ljc5Njg3NSAxMi41MDM5MDcgNy40Mzc1IDE5Ljc5Mjk2OSA3LjQzNzUgNy4yODUxNTYgMCAxNC4zMTY0MDYtMi42NDA2MjUgMTkuNzg1MTU2LTcuNDI5Njg3IDIwLjczMDQ2OS0xOC4xMjg5MDcgNDAuNzA3MDMyLTM1LjE1MjM0NCA1OC4zMjgxMjUtNTAuMTcxODc2IDUxLjU3NDIxOS00My45NDkyMTggOTYuMTE3MTg4LTgxLjkwNjI1IDEyNy4xMDkzNzUtMTE5LjMwNDY4NyAzNC42NDQ1MzItNDEuODAwNzgxIDUwLjc3NzM0NC04MS40Mzc1IDUwLjc3NzM0NC0xMjQuNzQyMTg3IDAtNDIuMDY2NDA3LTE0LjQyNTc4MS04MC44Nzg5MDctNDAuNjE3MTg4LTEwOS4yODkwNjN6bTAgMFwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vICAgICBzaGFyZUljb246IDxzdmcgZmlsbD17Y29sb3J9IHZpZXdCb3g9XCIwIC0yMiA1MTIgNTExXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNTEyIDIzMy44MjAzMTItMjEyLjc3NzM0NC0yMzMuMzIwMzEydjEzOS4yMDMxMjVoLTQ1LjIzODI4MWMtMTQwLjI3MzQzNyAwLTI1My45ODQzNzUgMTEzLjcxMDkzNy0yNTMuOTg0Mzc1IDI1My45ODQzNzV2NzMuNzY5NTMxbDIwLjA5Mzc1LTIyLjAxOTUzMWM2OC4zMTY0MDYtNzQuODUxNTYyIDE2NC45ODA0NjktMTE3LjUgMjY2LjMyNDIxOS0xMTcuNWgxMi44MDQ2ODd2MTM5LjIwMzEyNXptMCAwXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gICAgIGhhbmRzaGFrZUljb246IDxzdmcgZmlsbD17Y29sb3J9IGlkPVwiQ2FwYV8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Zz48cGF0aCBkPVwibTM4Ni4xNTggOC43MzNjLTUuODU4LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMzYuNDc4IDM2LjQ3OGMtMTkuOTIzLTEwLjc2OS00NS4zODYtNy43NDgtNjIuMTk5IDkuMDY1bC02OS40MTYgNjkuNDE2Yy0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwbDI1LjA5LTI1LjA5YzM4LjkxMiAzMi40NDggOTIuMjczIDQyLjYgMTQwLjU5MSAyNi4yNTJsNjYuODIgNjYuODJjOC4zNzYtMTguMTkyIDUuODM0LTQwLjIxNi03LjY1LTU2LjA2OWwzNS4wNTgtMzUuMDU4YzUuODU4LTUuODU4IDUuODU4LTE1LjM1NSAwLTIxLjIxMy0uMTAxLS4xMDEtLjIxMS0uMTg3LS4zMTUtLjI4NGwuMDE1LS4wMTV6XCIvPjxwYXRoIGQ9XCJtMjc2LjQ1OSA0MDAuMDExYy0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NiAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDBsLTQ2LjI3MiA0Ni4yNzJjLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDBsNDYuMjcyLTQ2LjI3MmMxNC4wNDQtMTQuMDQzIDE0LjA0NC0zNi44MDcuMDAzLTUwLjg0OHpcIi8+PHBhdGggZD1cIm0yNzYuMTYgMTg4LjUwNC03LjI0OCA3LjI0OGMtMjUuNzE1IDI1LjcxNS02Ny41NTggMjUuNzE1LTkzLjI3MyAwcy0yNS43MTUtNjcuNTU4IDAtOTMuMjczbDU3LjUxNC01Ny41MTRjLTE2LjE1Ny02LjE4OC0zNC41NDctNC44OTEtNDkuNzY4IDMuODkybC0zNi4zMjktMzYuMzI5Yy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTEyMS40NSAxMjEuNDQ5Yy01Ljg1OCA1Ljg1OC01Ljg1OCAxNS4zNTUgMCAyMS4yMTNsMzYuMzI5IDM2LjMyOWMtOC43ODMgMTUuMjIxLTEwLjA4IDMzLjYxMS0zLjg5MiA0OS43NjhsMTUuMDI5LTE1LjAyOWMyNS43MTUtMjUuNzE1IDY3LjU1OC0yNS43MTUgOTMuMjczIDAgOS4zNzQgOS4zNzQgMTUuMzE1IDIwLjg5NSAxNy44NTQgMzIuOTkyIDEyLjA5OCAyLjU0IDIzLjYxOCA4LjQ4IDMyLjk5MiAxNy44NTRzMTUuMzE0IDIwLjg5NSAxNy44NTQgMzIuOTkzYzEyLjA5OCAyLjU0IDIzLjYxOCA4LjQ4IDMyLjk5MiAxNy44NTMgOS4zNzQgOS4zNzQgMTUuMzE1IDIwLjg5NSAxNy44NTQgMzIuOTkyIDEyLjA5OCAyLjU0IDIzLjYxOCA4LjQ4IDMyLjk5MiAxNy44NTQgMjUuNzE1IDI1LjcxNSAyNS43MTUgNjcuNTU4IDAgOTMuMjczbC0xOC41NjIgMTguNTYyIDYuNDk3IDYuNDk3YzE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDdsLTg0LjQ3NS04NC40NzVjLTQzLjk5NiA5LjcwNy04OS45OTIgMi4wOTctMTI4LjM1OC0yMC43NjF6XCIvPjwvZz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dENvbG9yOiAnIzI4MjgyOCcsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICBoaWdoZXJDb2xvcixcclxuICAgICAgICAgICAgLy8gdXNlckljb246IHVzZXJJY29uQixcclxuICAgICAgICAgICAgLy8gaGFuZHNoYWtlSWNvbjogaGFuZHNoYWtlSWNvbkIsXHJcbiAgICAgICAgICAgIC8vIHBsdXNJY29uOiBwbHVzSWNvbkIsXHJcbiAgICAgICAgICAgIC8vIHNoYXJlSWNvbjogc2hhcmVJY29uQixcclxuICAgICAgICAgICAgLy8gc2hyaW5rSWNvbjogc2hyaW5rQixcclxuICAgICAgICAgICAgLy8gY29sb3JlZDoge1xyXG4gICAgICAgICAgICAvLyAgICAgaGVhcnRJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjggNTEyLjAwMDAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQ3MS4zODI4MTIgNDQuNTc4MTI1Yy0yNi41MDM5MDYtMjguNzQ2MDk0LTYyLjg3MTA5My00NC41NzgxMjUtMTAyLjQxMDE1Ni00NC41NzgxMjUtMjkuNTU0Njg3IDAtNTYuNjIxMDk0IDkuMzQzNzUtODAuNDQ5MjE4IDI3Ljc2OTUzMS0xMi4wMjM0MzggOS4zMDA3ODEtMjIuOTE3OTY5IDIwLjY3OTY4OC0zMi41MjM0MzggMzMuOTYwOTM4LTkuNjAxNTYyLTEzLjI3NzM0NC0yMC41LTI0LjY2MDE1Ny0zMi41MjczNDQtMzMuOTYwOTM4LTIzLjgyNDIxOC0xOC40MjU3ODEtNTAuODkwNjI1LTI3Ljc2OTUzMS04MC40NDUzMTItMjcuNzY5NTMxLTM5LjUzOTA2MyAwLTc1LjkxMDE1NiAxNS44MzIwMzEtMTAyLjQxNDA2MyA0NC41NzgxMjUtMjYuMTg3NSAyOC40MTAxNTYtNDAuNjEzMjgxIDY3LjIyMjY1Ni00MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MSAxNi4xMzY3MTkgODIuOTM3NSA1MC43ODEyNSAxMjQuNzQyMTg3IDMwLjk5MjE4OCAzNy4zOTQ1MzEgNzUuNTM1MTU2IDc1LjM1NTQ2OSAxMjcuMTE3MTg4IDExOS4zMTI1IDE3LjYxMzI4MSAxNS4wMTE3MTkgMzcuNTc4MTI0IDMyLjAyNzM0NCA1OC4zMDg1OTMgNTAuMTUyMzQ0IDUuNDc2NTYzIDQuNzk2ODc1IDEyLjUwMzkwNyA3LjQzNzUgMTkuNzkyOTY5IDcuNDM3NSA3LjI4NTE1NiAwIDE0LjMxNjQwNi0yLjY0MDYyNSAxOS43ODUxNTYtNy40Mjk2ODcgMjAuNzMwNDY5LTE4LjEyODkwNyA0MC43MDcwMzItMzUuMTUyMzQ0IDU4LjMyODEyNS01MC4xNzE4NzYgNTEuNTc0MjE5LTQzLjk0OTIxOCA5Ni4xMTcxODgtODEuOTA2MjUgMTI3LjEwOTM3NS0xMTkuMzA0Njg3IDM0LjY0NDUzMi00MS44MDA3ODEgNTAuNzc3MzQ0LTgxLjQzNzUgNTAuNzc3MzQ0LTEyNC43NDIxODcgMC00Mi4wNjY0MDctMTQuNDI1NzgxLTgwLjg3ODkwNy00MC42MTcxODgtMTA5LjI4OTA2M3ptMCAwXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gICAgIHNoYXJlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gdmlld0JveD1cIjAgLTIyIDUxMiA1MTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm01MTIgMjMzLjgyMDMxMi0yMTIuNzc3MzQ0LTIzMy4zMjAzMTJ2MTM5LjIwMzEyNWgtNDUuMjM4MjgxYy0xNDAuMjczNDM3IDAtMjUzLjk4NDM3NSAxMTMuNzEwOTM3LTI1My45ODQzNzUgMjUzLjk4NDM3NXY3My43Njk1MzFsMjAuMDkzNzUtMjIuMDE5NTMxYzY4LjMxNjQwNi03NC44NTE1NjIgMTY0Ljk4MDQ2OS0xMTcuNSAyNjYuMzI0MjE5LTExNy41aDEyLjgwNDY4N3YxMzkuMjAzMTI1em0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgaGFuZHNoYWtlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnPjxwYXRoIGQ9XCJtMzg2LjE1OCA4LjczM2MtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0zNi40NzggMzYuNDc4Yy0xOS45MjMtMTAuNzY5LTQ1LjM4Ni03Ljc0OC02Mi4xOTkgOS4wNjVsLTY5LjQxNiA2OS40MTZjLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDBsMjUuMDktMjUuMDljMzguOTEyIDMyLjQ0OCA5Mi4yNzMgNDIuNiAxNDAuNTkxIDI2LjI1Mmw2Ni44MiA2Ni44MmM4LjM3Ni0xOC4xOTIgNS44MzQtNDAuMjE2LTcuNjUtNTYuMDY5bDM1LjA1OC0zNS4wNThjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzLS4xMDEtLjEwMS0uMjExLS4xODctLjMxNS0uMjg0bC4wMTUtLjAxNXpcIi8+PHBhdGggZD1cIm0yNzYuNDU5IDQwMC4wMTFjLTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ2IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMGwtNDYuMjcyIDQ2LjI3MmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGw0Ni4yNzItNDYuMjcyYzE0LjA0NC0xNC4wNDMgMTQuMDQ0LTM2LjgwNy4wMDMtNTAuODQ4elwiLz48cGF0aCBkPVwibTI3Ni4xNiAxODguNTA0LTcuMjQ4IDcuMjQ4Yy0yNS43MTUgMjUuNzE1LTY3LjU1OCAyNS43MTUtOTMuMjczIDBzLTI1LjcxNS02Ny41NTggMC05My4yNzNsNTcuNTE0LTU3LjUxNGMtMTYuMTU3LTYuMTg4LTM0LjU0Ny00Ljg5MS00OS43NjggMy44OTJsLTM2LjMyOS0zNi4zMjljLTUuODU4LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMTIxLjQ1IDEyMS40NDljLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxM2wzNi4zMjkgMzYuMzI5Yy04Ljc4MyAxNS4yMjEtMTAuMDggMzMuNjExLTMuODkyIDQ5Ljc2OGwxNS4wMjktMTUuMDI5YzI1LjcxNS0yNS43MTUgNjcuNTU4LTI1LjcxNSA5My4yNzMgMCA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NHMxNS4zMTQgMjAuODk1IDE3Ljg1NCAzMi45OTNjMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1MyA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NCAyNS43MTUgMjUuNzE1IDI1LjcxNSA2Ny41NTggMCA5My4yNzNsLTE4LjU2MiAxOC41NjIgNi40OTcgNi40OTdjMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0N2wtODQuNDc1LTg0LjQ3NWMtNDMuOTk2IDkuNzA3LTg5Ljk5MiAyLjA5Ny0xMjguMzU4LTIwLjc2MXpcIi8+PC9nPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29sb3JQYWxsZXR0ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gXCJuZXh0LWFwb2xsb1wiXHJcbi8vIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCJcclxuXHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnXHJcbmltcG9ydCB7IGNyZWF0ZUh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCdcclxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSdcclxuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnXHJcbi8vIGh0dHBzOi8vdW5pbG91cy1ncmFwaHFsLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9ncmFwaHFsXHJcblxyXG4vLyBodHRwczovL3VuaWxvdXMtYmFjay1lbmQtZGV2Lmhlcm9rdWFwcC5jb20vZ3JhcGhxbFxyXG4vLyBodHRwczovL3Byb2plY3R1LWJhY2stZW5kLTIwMjAuaGVyb2t1YXBwLmNvbS9ncmFwaHFsXHJcbi8vIGh0dHBzOi8vdW5pbG91cy1iYWNrLWVuZC1uZXh0anMuaGVyb2t1YXBwLmNvbS9ncmFwaHFsXHJcblxyXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcclxuICB1cmk6ICdodHRwczovL3VuaWxvdXMtYmFjay1lbmQtbmV4dGpzLmhlcm9rdWFwcC5jb20vZ3JhcGhxbCcsXHJcbn0pXHJcblxyXG5jb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKF8sIHsgaGVhZGVycyB9KSA9PiB7XHJcbiAgbGV0IHRva2VuID0gbnVsbFxyXG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBVbmlsb3VzKjIwMDAgJHt0b2tlbn1gIDogbnVsbCxcclxuICAgICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICBsaW5rOiBhdXRoTGluay5jb25jYXQoaHR0cExpbmspLFxyXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG59KVxyXG5cclxuLy8gY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbi8vICAgdXJpOiAnaHR0cHM6Ly9wcm9qZWN0dS1iYWNrLWVuZC0yMDIwLmhlcm9rdWFwcC5jb20vZ3JhcGhxbCcsXHJcbi8vICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbi8vICAgc3NyTW9kZTogdHJ1ZVxyXG4vLyB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhhcG9sbG9DbGllbnQpXHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBCbG9nUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jsb2cvQmxvZ1Bvc3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5jb25zdCBibG9ncz1bXHJcbiAgICB7ICAgIFxyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRpdGxlOiAnQ29udmVydGluZyBhIFJlYWN0IGFwcGxpY2F0aW9uIHdpdGggUmVkdXggYW5kIEFwb2xsbyB0byBOZXh0LkpTICgyMDIwKScsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tL21XM25rOG8uanBnJyxcclxuICAgICAgICBsaW5rOiAnL2Jsb2cvcmVhY3RfdG9fbmV4dGpzJyxcclxuICAgICAgICBhdXRob3I6ICdTZWJhc3RpYW5Tb3NhJyxcclxuICAgICAgICBkYXRlOiAnSnVuZSAxMiwgMjAyMCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbHRob3VnaCBOZXh0LkpTIGlzIGFscmVhZHkgYnVpbHQgb24gdGhlIHNob3VsZGVycyBvZiBSZWFjdCwgdGhlcmUgYXJlIHN0aWxsIG1hbnkgY2hhbGxlbmdlcyB3aGljaCBuZWVkIHRvIGJlIG92ZXJjb21lIGJlZm9yZSBnZXR0aW5nIHRoZSBhcHBsaWNhdGlvbiB1cCBhbmQgcnVubmluZy4gRm9yIHRoaXMgZ3VpZGUgSSB3aWxsIHRvdWNoIG9uIHRoZSBrZXkgY2hhbmdlcyBJIGhhZCB0byBtYWtlIHdoZW4gY29udmVydGluZyBteSBSZWFjdCBhcHBsaWNhdGlvbiB3aXRoIHRoZSBjZW50cmFsaXplZCBzdGF0ZSBtYW5hZ2VtZW50OiBSZWR1eCwgYW5kIHRoZSBHcmFwaFFMIEFQSTogQXBvbGxvLCB0byBOZXh0LkpTLicsXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCBCbG9nSW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCBVbmlsb3VzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb250YWN0IHRoZSBVbmlsb3VzIHRlYW1cIiBrZXk9XCJkZXNjcmlwdGlvblwiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAge2Jsb2dzLm1hcChpdGVtID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9nUG9zdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIC8vIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBzZXRVc2VyREQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKEJsb2dJbmRleCkiLCJleHBvcnQgY29uc3Qgc2V0QWxlcnQgPSAoaW5mbykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQUxFUlQnLFxyXG4gICAgICAgICAgICBkYXRhOiBpbmZvXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0QWxlcnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1JFU0VUX0FMRVJUJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFsZXJ0Tm90aWYgPSAoc3RhdGUgPSB7Y29sb3I6IG51bGwsIHRleHRDb2xvcjogbnVsbCwgbWVzc2FnZTogbnVsbH0sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9BTEVSVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdSRVNFVF9BTEVSVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4ge2NvbG9yOiBudWxsLCB0ZXh0Q29sb3I6IG51bGwsIG1lc3NhZ2U6IG51bGx9XHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGVydE5vdGlmIiwiZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsXHJcbiAgICAgICAgICAgIGRhdGE6IHVzZXJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXJQb3N0cyA9IChwb3N0cykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfUE9TVFMnLFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0c1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlclNQID0gKHBvc3RzKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9TUCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3RzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyA9IChub3RpZmljYXRpb25zKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9OT1RJRklDQVRJT05TJyxcclxuICAgICAgICAgICAgZGF0YTogbm90aWZpY2F0aW9uc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQZW5kaW5nTm90aWZpY2F0aW9ucyA9IChhbXQpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX1BOJyxcclxuICAgICAgICAgICAgZGF0YTogYW10XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY3VycmVudFVzZXIgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfQ1VfUE4nOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwZW5kaW5nTm90aWZpY2F0aW9uczogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVUlJFTlRfVVNFUicgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdTRVRfQ1VfUE9TVFMnIDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9TUCcgOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNhdmVkUG9zdHM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9OT1RJRklDQVRJT05TJyA6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5vdGlmaWNhdGlvbnM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFVzZXIiLCJleHBvcnQgY29uc3Qgc2V0VG9rZW4gPSAodG9rZW4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ1NFVF9UT0tFTicsXHJcbiAgICAgICAgZGF0YTogdG9rZW5cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhclRva2VuID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnQ0xFQVJfVE9LRU4nXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCB0b2tlbiA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX1RPS0VOJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIGNhc2UgJ0NMRUFSX1RPS0VOJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRva2VuIiwiZXhwb3J0IGNvbnN0IHNldFVzZXJERCA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUl9ERCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHN0YXRlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0VXNlckREID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdSRVNFVF9VU0VSX0REJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJERCA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9VU0VSX0REJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIGNhc2UgJ1JFU0VUX1VTRVJfREQnIDpcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJERCIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiBhZGRQb3N0KFxyXG4gICAgJHRpdGxlOiBTdHJpbmchLFxyXG4gICAgJHVzZXI6IElEISxcclxuICAgICRjb250YWN0TGluazogU3RyaW5nIVxyXG4gICAgJHNraWxsTmFtZXM6IFtTdHJpbmchXSEsXHJcbiAgICAkc2tpbGxDYXBhY2l0aWVzOiBbSW50IV0hLFxyXG4gICAgJHNraWxsRmlsbHM6IFtJbnQhXSEsXHJcbiAgICAkZGVzY3JpcHRpb246IFN0cmluZyEsXHJcbiAgICAkY29sb3I6IFN0cmluZyEsXHJcbiAgICAkaW1hZ2VMaW5rczogW1N0cmluZyFdLFxyXG4gICAgJHJlZmVyZW5jZUxpbmtzOiBbU3RyaW5nIV1cclxuICApe1xyXG4gICAgYWRkUG9zdChcclxuICAgICAgdGl0bGU6JHRpdGxlLFxyXG4gICAgICB1c2VyOiR1c2VyLFxyXG4gICAgICBjb250YWN0TGluazogJGNvbnRhY3RMaW5rLFxyXG4gICAgICBza2lsbE5hbWVzOiRza2lsbE5hbWVzLFxyXG4gICAgICBza2lsbENhcGFjaXRpZXM6JHNraWxsQ2FwYWNpdGllcyxcclxuICAgICAgc2tpbGxGaWxsczogJHNraWxsRmlsbHMsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiRkZXNjcmlwdGlvbixcclxuICAgICAgY29sb3I6JGNvbG9yLFxyXG4gICAgICBpbWFnZUxpbmtzOiRpbWFnZUxpbmtzLFxyXG4gICAgICByZWZlcmVuY2VMaW5rczokcmVmZXJlbmNlTGlua3NcclxuICAgICl7XHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG4vLyBleHBvcnQgY29uc3QgREVMRVRFX1BPU1QgPSBncWxgXHJcbi8vICAgbXV0YXRpb24gZGVsZXRlUG9zdCAoXHJcbi8vICAgICAkcG9zdElkOiBJRCFcclxuLy8gICApIHtcclxuLy8gICAgIGRlbGV0ZVBvc3QgKHBvc3RJZDogJHBvc3RJZClcclxuLy8gICB9XHJcbi8vIGBcclxuXHJcbmV4cG9ydCBjb25zdCBNQUtFX05PVElGSUNBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBtYWtlTm90aWZpY2F0aW9uKFxyXG4gICAgJHVzZXJGcm9tSWQ6IElEISxcclxuICAgICR1c2VyVG9JZDogSUQhLFxyXG4gICAgJG1lc3NhZ2U6IFN0cmluZyEsXHJcbiAgICAkcG9zdElkOiBJRCxcclxuICAgICRwcm9wb3NlZENvbnRyaWJ1dGlvbjogW0ludCFdXHJcbiAgKXtcclxuICAgIG1ha2VOb3RpZmljYXRpb24oXHJcbiAgICAgIHVzZXJGcm9tSWQ6ICR1c2VyRnJvbUlkLFxyXG4gICAgICB1c2VyVG9JZDogJHVzZXJUb0lkLFxyXG4gICAgICBtZXNzYWdlOiAkbWVzc2FnZSxcclxuICAgICAgcG9zdElkOiAkcG9zdElkLFxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvbjogJHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICApe1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBQ0NFUFRfTk9USUZJQ0FUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFjY2VwdE5vdGlmaWNhdGlvbigkbm90aWZpY2F0aW9uSWQ6IElEISkge1xyXG4gICAgYWNjZXB0Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkOiAkbm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgdXNlckZyb20ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgcG9zdHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGNvbG9yXHJcbiAgICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICBhY2NlcHRlZFxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBERUNMSU5FX05PVElGSUNBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBkZWNsaW5lTm90aWZpY2F0aW9uKCRub3RpZmljYXRpb25JZDogSUQhKSB7XHJcbiAgICBkZWNsaW5lTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkOiAkbm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgdXNlckZyb20ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgcG9zdHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGNvbG9yXHJcbiAgICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICBhY2NlcHRlZFxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfVVNFUiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVVc2VyKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchLCAkcmVmZXJlbmNlTGluazogU3RyaW5nISkge1xyXG4gICAgY3JlYXRlVXNlcihcclxuICAgICAgdXNlcm5hbWU6ICR1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZCxcclxuICAgICAgcmVmZXJlbmNlTGluazogJHJlZmVyZW5jZUxpbmtcclxuICAgICl7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU4gPSBncWxgXHJcbiAgbXV0YXRpb24gbG9naW4oJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpe1xyXG4gICAgbG9naW4oXHJcbiAgICAgIHVzZXJuYW1lOiAkdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcclxuICAgICl7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU0FWRV9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNhdmVQb3N0VG9Vc2VyIChcclxuICAgICR1c2VyOiBJRCEsXHJcbiAgICAkcG9zdElkOiBJRCFcclxuICApIHtcclxuICAgIHNhdmVQb3N0VG9Vc2VyICh1c2VyOiAkdXNlciwgcG9zdElkOiAkcG9zdElkKSB7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfU0FWRURfUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiByZW1vdmVTYXZlZFBvc3QgKFxyXG4gICAgJHVzZXI6IElEISxcclxuICAgICRwb3N0SWQ6IElEIVxyXG4gICkge1xyXG4gICAgcmVtb3ZlU2F2ZWRQb3N0ICh1c2VyOiAkdXNlciwgcG9zdElkOiAkcG9zdElkKVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFTS19RVUVTVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBhc2tRdWVzdGlvbiAoXHJcbiAgICAkdXNlckZyb21JZDogSUQhLFxyXG4gICAgJHVzZXJUb0lkOiBJRCEsXHJcbiAgICAkcG9zdElkOiBJRCEsXHJcbiAgICAkcXVlc3Rpb246IFN0cmluZyFcclxuICApe1xyXG4gICAgYXNrUXVlc3Rpb24gKFxyXG4gICAgICB1c2VyRnJvbUlkOiAkdXNlckZyb21JZCxcclxuICAgICAgdXNlclRvSWQ6ICR1c2VyVG9JZCxcclxuICAgICAgcG9zdElkOiAkcG9zdElkLFxyXG4gICAgICBxdWVzdGlvbjogJHF1ZXN0aW9uXHJcbiAgICApe1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIHF1ZXN0aW9uXHJcbiAgICAgIGFuc3dlclxyXG4gICAgICBhY2NlcHRlZFxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBTlNXRVJfUVVFU1RJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gYW5zd2VyUXVlc3Rpb24gKFxyXG4gICAgJG5vdGlmaWNhdGlvbklkOiBJRCEsXHJcbiAgICAkcmVzcG9uc2U6IFN0cmluZyFcclxuICApIHtcclxuICAgIGFuc3dlclF1ZXN0aW9uIChcclxuICAgICAgbm90aWZpY2F0aW9uSWQ6ICRub3RpZmljYXRpb25JZCxcclxuICAgICAgcmVzcG9uc2U6ICRyZXNwb25zZVxyXG4gICAgKXtcclxuICAgICAgdXNlckZyb20ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgcG9zdHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGNvbG9yXHJcbiAgICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICBxdWVzdGlvblxyXG4gICAgICBhbnN3ZXJcclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuZXhwb3J0IGNvbnN0IExJU1RfT0ZfTk9USUZJQ0FUSU9OUyA9IGdxbGBcclxuICBxdWVyeSBsaXN0T2ZOb3RpZmljYXRpb25zKCRub3RpZmljYXRpb25zOiBbU3RyaW5nIV0pIHtcclxuICAgIGxpc3RPZk5vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9uczogJG5vdGlmaWNhdGlvbnMpIHtcclxuICAgICAgdXNlckZyb20ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgcG9zdHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGNvbG9yXHJcbiAgICAgICAgY29udGFjdExpbmtcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIHF1ZXN0aW9uXHJcbiAgICAgIGFuc3dlclxyXG4gICAgICBhY2NlcHRlZFxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTS0lMTF9TRUFSQ0ggPSBncWxgXHJcbiAgcXVlcnkgc2tpbGxTZWFyY2goJGZpbHRlcjogU3RyaW5nISkge1xyXG4gICAgc2tpbGxTZWFyY2goZmlsdGVyOiAkZmlsdGVyKSB7XHJcbiAgICAgIG5hbWVcclxuICAgICAgdXNlc1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1FID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIG1le1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICByZWZlcmVuY2VMaW5rXHJcbiAgICAgIHByaW1hcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNlY29uZGFyeVNraWxsc3tcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgICAgaW50ZXJlc3RzXHJcbiAgICAgIHBvc3Rze1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9LFxyXG4gICAgICBub3RpZmljYXRpb25ze1xyXG4gICAgICAgIHVzZXJGcm9te1xyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXJUb3tcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgcG9zdHtcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBfaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgICBhY2NlcHRlZFxyXG4gICAgICB9XHJcbiAgICAgIF9pZFxyXG5cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMSVNUX09GX1BPU1RTID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldExpc3RPZlBvc3RzKCRpZF9saXN0OiBbU3RyaW5nXSkge1xyXG4gICAgZ2V0TGlzdE9mUG9zdHMoaWRMaXN0OiAkaWRfbGlzdCl7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXJ7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBjb2xvclxyXG4gICAgICBza2lsbEZpbGxzXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGSU5EX1BPU1QgPSBncWxgXHJcbiAgcXVlcnkgZmluZFBvc3QoJHRpdGxlOiBTdHJpbmchKXtcclxuICAgIGZpbmRQb3N0KHRpdGxlOiAkdGl0bGUpe1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1c2VyIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHNraWxsTmFtZXNcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgIHNraWxsRmlsbHNcclxuICAgICAgdGVhbVxyXG4gICAgICB0aW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbG9yXHJcbiAgICAgIGltYWdlTGlua3NcclxuICAgICAgcmVmZXJlbmNlTGlua3NcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRklORF9VU0VSID0gZ3FsYFxyXG4gIHF1ZXJ5IGZpbmRVc2VyKCR1c2VybmFtZTogU3RyaW5nISl7XHJcbiAgICBmaW5kVXNlcih1c2VybmFtZTogJHVzZXJuYW1lKSB7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtcclxuICAgICAgcHJpbWFyeVNraWxsc3tcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgICAgc2Vjb25kYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBpbnRlcmVzdHNcclxuICAgICAgcG9zdHN7XHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgbm90aWZpY2F0aW9ucyB7XHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgc2F2ZWRQb3N0cyB7XHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQUxMX1VTRVJTID0gZ3FsYFxyXG4gIHF1ZXJ5e1xyXG4gICAgYWxsVXNlcnN7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNPTUVfVVNFUlMgPSBncWxgXHJcbiAgcXVlcnkgc29tZVVzZXJzKCRza2lwOiBJbnQhLCAkZmlyc3Q6IEludCEpe1xyXG4gICAgc29tZVVzZXJzKHNraXA6ICRza2lwLCBmaXJzdDogJGZpcnN0KXtcclxuICAgICAgdXNlcm5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnl7XHJcbiAgICBhbGxQb3N0c3tcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlcntcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHNraWxsTmFtZXNcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgIHNraWxsRmlsbHNcclxuICAgICAgdGltZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBjb2xvclxyXG4gICAgICBpbWFnZUxpbmtzXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtzXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX1RJVExFUyA9IGdxbGBcclxuICBxdWVyeXtcclxuICAgIGFsbFBvc3Rze1xyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QT1NUUyA9IGdxbGBcclxuICBxdWVyeSBzZWFyY2hQb3N0cygkZmlsdGVyU3RyaW5nOiBTdHJpbmchLCAkcG9zdElkczogW1N0cmluZyFdLCAkZXZlbnRRdWVyeTogU3RyaW5nKXtcclxuICAgIHNlYXJjaFBvc3RzKGZpbHRlclN0cmluZzogJGZpbHRlclN0cmluZywgcG9zdElkczogJHBvc3RJZHMsIGV2ZW50UXVlcnk6ICRldmVudFF1ZXJ5KXtcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBza2lsbE5hbWVzXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICBza2lsbEZpbGxzXHJcbiAgICAgIHRpbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgY29sb3JcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUEVORElOR19OT1RJRlMgPSBncWxgXHJcbiAgcXVlcnkgc2VhcmNoQXdhaXRpbmdOb3RpZnMoJHVzZXJJZDogSUQhKSB7XHJcbiAgICBzZWFyY2hBd2FpdGluZ05vdGlmcyh1c2VySWQ6ICR1c2VySWQpXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUV9BTkRfQV9OT1RJRlMgPSBncWxgXHJcbiAgcXVlcnkgc2VhcmNoQW5zd2VyZWRRVG9Qb3N0ICggJHRpdGxlOiBTdHJpbmchICkge1xyXG4gICAgc2VhcmNoQW5zd2VyZWRRVG9Qb3N0IChcclxuICAgICAgdGl0bGU6ICR0aXRsZVxyXG4gICAgKXtcclxuICAgICAgdXNlckZyb217XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1JbmZvQ29udGFpbmVyXCI6IFwiaW5wdXRIZWFkZXJfZm9ybUluZm9Db250YWluZXJfX3lRYmthXCIsXG5cdFwiaW5mb0hlYWRlckNvbnRhaW5lclwiOiBcImlucHV0SGVhZGVyX2luZm9IZWFkZXJDb250YWluZXJfX2hRLUlrXCIsXG5cdFwiaW5mb1RpdGxlVGV4dFwiOiBcImlucHV0SGVhZGVyX2luZm9UaXRsZVRleHRfXzN4bGpsXCIsXG5cdFwiaW5mb0ljb25Db250YWluZXJcIjogXCJpbnB1dEhlYWRlcl9pbmZvSWNvbkNvbnRhaW5lcl9fM014WDNcIixcblx0XCJpbmZvSWNvblwiOiBcImlucHV0SGVhZGVyX2luZm9JY29uX18zYlRPelwiLFxuXHRcImluZm9Db250ZW50XCI6IFwiaW5wdXRIZWFkZXJfaW5mb0NvbnRlbnRfXzF3T253XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJuZXdOYXZCYXJfY29udGFpbmVyX18yU2Z0OVwiLFxuXHRcImJyYW5kQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX2JyYW5kQ29udGFpbmVyX18xLUdqNlwiLFxuXHRcIm5hbWVcIjogXCJuZXdOYXZCYXJfbmFtZV9fMmNaX3FcIixcblx0XCJpY29uXCI6IFwibmV3TmF2QmFyX2ljb25fXzJnTE0wXCIsXG5cdFwic2VhcmNoQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX3NlYXJjaENvbnRhaW5lcl9fX0VXU0hcIixcblx0XCJtYWduaWZpZXJcIjogXCJuZXdOYXZCYXJfbWFnbmlmaWVyX18zVUs4ZFwiLFxuXHRcInNlYXJjaEJ0blwiOiBcIm5ld05hdkJhcl9zZWFyY2hCdG5fX1FmdVdfXCIsXG5cdFwic2VhcmNoQmFyXCI6IFwibmV3TmF2QmFyX3NlYXJjaEJhcl9fVkJiN2tcIixcblx0XCJDUENvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9DUENvbnRhaW5lcl9fMnVJa19cIixcblx0XCJwbHVzXCI6IFwibmV3TmF2QmFyX3BsdXNfXzNHd1FVXCIsXG5cdFwiQ1BUZXh0XCI6IFwibmV3TmF2QmFyX0NQVGV4dF9fMmpyZTBcIixcblx0XCJ1c2VyV3JhcHBlclwiOiBcIm5ld05hdkJhcl91c2VyV3JhcHBlcl9fMnd3cDVcIixcblx0XCJ1c2VyQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX3VzZXJDb250YWluZXJfXzFmR0V2XCIsXG5cdFwidXNlck9wdGlvblwiOiBcIm5ld05hdkJhcl91c2VyT3B0aW9uX18zYloxaVwiLFxuXHRcIm5vdGlmQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX25vdGlmQ29udGFpbmVyX18zRHBQZFwiLFxuXHRcInRpdGxlQmVsbFwiOiBcIm5ld05hdkJhcl90aXRsZUJlbGxfXzFlV2Z3XCIsXG5cdFwiYmVsbFwiOiBcIm5ld05hdkJhcl9iZWxsX18za0QtN1wiLFxuXHRcIm5vZmlmQ291bnRcIjogXCJuZXdOYXZCYXJfbm9maWZDb3VudF9fMWJDd2JcIixcblx0XCJ1c2VySW5mb0NvbnRhaW5lclwiOiBcIm5ld05hdkJhcl91c2VySW5mb0NvbnRhaW5lcl9fMVhTNDNcIixcblx0XCJ1c2VybmFtZVwiOiBcIm5ld05hdkJhcl91c2VybmFtZV9fRXdIVzBcIixcblx0XCJEREFycm93XCI6IFwibmV3TmF2QmFyX0REQXJyb3dfXzE0eHNRXCIsXG5cdFwidXNlckREXCI6IFwibmV3TmF2QmFyX3VzZXJERF9fMi1LLUxcIixcblx0XCJ1c2VyXCI6IFwibmV3TmF2QmFyX3VzZXJfXzFSY2lSXCIsXG5cdFwic2lnbk9wdGlvblwiOiBcIm5ld05hdkJhcl9zaWduT3B0aW9uX18zVDJGLVwiLFxuXHRcImNvbnRhaW5lck1cIjogXCJuZXdOYXZCYXJfY29udGFpbmVyTV9fMklqaWFcIixcblx0XCJicmFuZENvbnRhaW5lck1cIjogXCJuZXdOYXZCYXJfYnJhbmRDb250YWluZXJNX18zSVRFNVwiLFxuXHRcIm5hdkl0ZW1cIjogXCJuZXdOYXZCYXJfbmF2SXRlbV9fR0x3UHVcIixcblx0XCJuYXZJY29uXCI6IFwibmV3TmF2QmFyX25hdkljb25fXzNueUR3XCIsXG5cdFwic3ViTmF2Q29udGFpbmVyXCI6IFwibmV3TmF2QmFyX3N1Yk5hdkNvbnRhaW5lcl9fM3FVUWtcIixcblx0XCJzZWFyY2hDb250YWluZXJNXCI6IFwibmV3TmF2QmFyX3NlYXJjaENvbnRhaW5lck1fXzJfbkJEXCIsXG5cdFwibWVudUNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9tZW51Q29udGFpbmVyX18zbVJCRFwiLFxuXHRcIm1vcmVDb250YWluZXJcIjogXCJuZXdOYXZCYXJfbW9yZUNvbnRhaW5lcl9fMVh2VVpcIixcblx0XCJ0aXRsZU1vcmVcIjogXCJuZXdOYXZCYXJfdGl0bGVNb3JlX18xbU1HYVwiLFxuXHRcIm1vcmVcIjogXCJuZXdOYXZCYXJfbW9yZV9fMkpnRXBcIixcblx0XCJTTklDb250YWluZXJcIjogXCJuZXdOYXZCYXJfU05JQ29udGFpbmVyX18xeTZwT1wiLFxuXHRcIm5vdGlmQ29udGFpbmVyTVwiOiBcIm5ld05hdkJhcl9ub3RpZkNvbnRhaW5lck1fXzE3LVUyXCIsXG5cdFwiZGRPcHRpb25cIjogXCJuZXdOYXZCYXJfZGRPcHRpb25fXzFmcWptXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJibG9ncG9zdF9jb250YWluZXJfXzNRMkJTXCIsXG5cdFwiaW1nU3R5bGVcIjogXCJibG9ncG9zdF9pbWdTdHlsZV9fM0xub25cIixcblx0XCJ0ZXh0Qm94XCI6IFwiYmxvZ3Bvc3RfdGV4dEJveF9fQWgxNEJcIixcblx0XCJkYXRlXCI6IFwiYmxvZ3Bvc3RfZGF0ZV9fMnJuejRcIixcblx0XCJibGFja0xpbmtcIjogXCJibG9ncG9zdF9ibGFja0xpbmtfXzI2dlVTXCIsXG5cdFwidGl0bGVcIjogXCJibG9ncG9zdF90aXRsZV9fMVVraG1cIixcblx0XCJhdXRob3JDb250YWluZXJcIjogXCJibG9ncG9zdF9hdXRob3JDb250YWluZXJfXzNQbGt3XCIsXG5cdFwidXNlckljb25cIjogXCJibG9ncG9zdF91c2VySWNvbl9fMmFubjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcImJsb2dwb3N0X2Rlc2NyaXB0aW9uX18ydGQyOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9zdFdyYXBwZXJcIjogXCJwb3N0X3Bvc3RXcmFwcGVyX19xTnl5UVwiLFxuXHRcInBvc3RIb3ZlclwiOiBcInBvc3RfcG9zdEhvdmVyX19VaWpuUFwiLFxuXHRcInBvc3RDb2xvckluZGljYXRvclwiOiBcInBvc3RfcG9zdENvbG9ySW5kaWNhdG9yX18zcjZ0aFwiLFxuXHRcInBvc3RDb250YWluZXJcIjogXCJwb3N0X3Bvc3RDb250YWluZXJfXzJXNl8wXCIsXG5cdFwicG9zdEhlYWRlcldyYXBwZXJcIjogXCJwb3N0X3Bvc3RIZWFkZXJXcmFwcGVyX18xbEdMLVwiLFxuXHRcInBvc3RIZWFkZXJTdHJldGNoXCI6IFwicG9zdF9wb3N0SGVhZGVyU3RyZXRjaF9fMW0weUFcIixcblx0XCJwb3N0SGVhZGVyXCI6IFwicG9zdF9wb3N0SGVhZGVyX18zV3JhRlwiLFxuXHRcIlBIVXNlclN0cmV0Y2hcIjogXCJwb3N0X1BIVXNlclN0cmV0Y2hfXzFpdVc1XCIsXG5cdFwiUEhVc2VyXCI6IFwicG9zdF9QSFVzZXJfX0ZMN09jXCIsXG5cdFwiUEhVSWNvblwiOiBcInBvc3RfUEhVSWNvbl9fMVdDZzdcIixcblx0XCJQSERhdGVcIjogXCJwb3N0X1BIRGF0ZV9fMnRRbl9cIixcblx0XCJwb3N0VGl0bGVcIjogXCJwb3N0X3Bvc3RUaXRsZV9fMTJSQ0VcIixcblx0XCJwb3N0RGVzY3JpcHRpb25cIjogXCJwb3N0X3Bvc3REZXNjcmlwdGlvbl9fM1ZDWjFcIixcblx0XCJwb3N0U2tpbGxzQ29udGFpbmVyXCI6IFwicG9zdF9wb3N0U2tpbGxzQ29udGFpbmVyX18zM2p0dFwiLFxuXHRcInBvc3RTa2lsbEluc0NvbnRhaW5lclwiOiBcInBvc3RfcG9zdFNraWxsSW5zQ29udGFpbmVyX18zS2lCRFwiLFxuXHRcIlBTSU5hbWVcIjogXCJwb3N0X1BTSU5hbWVfX25PQzU4XCIsXG5cdFwiUFNJU3RhdHNcIjogXCJwb3N0X1BTSVN0YXRzX18zNkdESVwiLFxuXHRcInBvc3RVdGlsaXRpZXNDb250YWluZXJcIjogXCJwb3N0X3Bvc3RVdGlsaXRpZXNDb250YWluZXJfXzExY2lfXCIsXG5cdFwiUFVJY29uQ29udGFpbmVyXCI6IFwicG9zdF9QVUljb25Db250YWluZXJfXzFSb09WXCIsXG5cdFwiUFVJY29uXCI6IFwicG9zdF9QVUljb25fXzJEWGYzXCIsXG5cdFwicG9zdFdyYXBwZXJTbVwiOiBcInBvc3RfcG9zdFdyYXBwZXJTbV9fMnlmVDdcIixcblx0XCJwb3N0U21SZW1vdmVcIjogXCJwb3N0X3Bvc3RTbVJlbW92ZV9fMVZTQnBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVzZXJXcmFwcGVyXCI6IFwidXNlcl91c2VyV3JhcHBlcl9fM0szemhcIixcblx0XCJ1c2VyQ29udGFpbmVyXCI6IFwidXNlcl91c2VyQ29udGFpbmVyX18xckxuSVwiLFxuXHRcInVzZXJPcHRpb25zU3BsaXR0ZXJcIjogXCJ1c2VyX3VzZXJPcHRpb25zU3BsaXR0ZXJfXzJycVpaXCIsXG5cdFwidXNlckljb25Db250YWluZXJcIjogXCJ1c2VyX3VzZXJJY29uQ29udGFpbmVyX18yMzRpalwiLFxuXHRcIlNVSFwiOiBcInVzZXJfU1VIX18xTXJlMFwiLFxuXHRcIlVJQ0hcIjogXCJ1c2VyX1VJQ0hfXzNqUkl4XCIsXG5cdFwiTEdEVXNlckNvbnRhaW5lclwiOiBcInVzZXJfTEdEVXNlckNvbnRhaW5lcl9fM3djYWxcIixcblx0XCJ1c2VyQmFubmVyXCI6IFwidXNlcl91c2VyQmFubmVyX18xQXh3bFwiLFxuXHRcInVzZXJVc2VybmFtZUNvbnRhaW5lclwiOiBcInVzZXJfdXNlclVzZXJuYW1lQ29udGFpbmVyX18xaEE4SFwiLFxuXHRcInVzZXJVc2VybmFtZVwiOiBcInVzZXJfdXNlclVzZXJuYW1lX185cHJpblwiLFxuXHRcInVzZXJVc2VybmFtZUljb25cIjogXCJ1c2VyX3VzZXJVc2VybmFtZUljb25fXzNPOHF0XCIsXG5cdFwiUE5Db250YWluZXJcIjogXCJ1c2VyX1BOQ29udGFpbmVyX18yMkx5VFwiLFxuXHRcIlBOQnViYmxlXCI6IFwidXNlcl9QTkJ1YmJsZV9fSlZVT0JcIixcblx0XCJ1c2VyVXRpbGl0eU9wdGlvblwiOiBcInVzZXJfdXNlclV0aWxpdHlPcHRpb25fXzFWdWdCXCIsXG5cdFwiVVVPU2VsZWN0ZWRcIjogXCJ1c2VyX1VVT1NlbGVjdGVkX18zdnZRa1wiLFxuXHRcIlVVQWRkUG9zdFwiOiBcInVzZXJfVVVBZGRQb3N0X18yM0F0N1wiLFxuXHRcIlVVQVBJY29uXCI6IFwidXNlcl9VVUFQSWNvbl9fM19TOGhcIixcblx0XCJVVUFQVGV4dFwiOiBcInVzZXJfVVVBUFRleHRfXzFiM0YyXCIsXG5cdFwiVVVJY29uXCI6IFwidXNlcl9VVUljb25fX3gxSUJyXCIsXG5cdFwiVVVMb2dvdXRcIjogXCJ1c2VyX1VVTG9nb3V0X18yX0RiSFwiLFxuXHRcIlVVTG9nb3V0SWNvblwiOiBcInVzZXJfVVVMb2dvdXRJY29uX18yR1BDRVwiLFxuXHRcInVzZXJOb3RpZmljYXRpb25CdWJibGVcIjogXCJ1c2VyX3VzZXJOb3RpZmljYXRpb25CdWJibGVfXzNoMU5XXCIsXG5cdFwiVVVVdGlsaXRpZXNTcGxpdHRlclwiOiBcInVzZXJfVVVVdGlsaXRpZXNTcGxpdHRlcl9fM1pLQlBcIixcblx0XCJVVUNvbnRlbnRDb250YWluZXJcIjogXCJ1c2VyX1VVQ29udGVudENvbnRhaW5lcl9fMUdLQl9cIixcblx0XCJOTFVzZXJDb250YWluZXJcIjogXCJ1c2VyX05MVXNlckNvbnRhaW5lcl9fM1o1THdcIixcblx0XCJ1c2VyT3B0aW9uQ29udGFpbmVyXCI6IFwidXNlcl91c2VyT3B0aW9uQ29udGFpbmVyX18zMzhSbVwiLFxuXHRcInVzZXJPcHRpb25zXCI6IFwidXNlcl91c2VyT3B0aW9uc19fa3Rlc2dcIixcblx0XCJ1c2VySWNvblwiOiBcInVzZXJfdXNlckljb25fXzIwdDU1XCIsXG5cdFwidXNlckZvcm1Db250YWluZXJcIjogXCJ1c2VyX3VzZXJGb3JtQ29udGFpbmVyX19BaEpsdVwiLFxuXHRcInVzZXJGb3JtXCI6IFwidXNlcl91c2VyRm9ybV9fcnhDZFJcIixcblx0XCJVRkxhYmVsXCI6IFwidXNlcl9VRkxhYmVsX18ydF8xdVwiLFxuXHRcIlVGSW5wdXRcIjogXCJ1c2VyX1VGSW5wdXRfXzN3T1U2XCIsXG5cdFwiVUZTdWJtaXRcIjogXCJ1c2VyX1VGU3VibWl0X190U3ZMZFwiLFxuXHRcIm5vdGlmaWNhdGlvbkNvbnRhaW5lclwiOiBcInVzZXJfbm90aWZpY2F0aW9uQ29udGFpbmVyX18yeHlNbVwiLFxuXHRcIm5vdGlmaWNhdGlvbkhlYWRlclwiOiBcInVzZXJfbm90aWZpY2F0aW9uSGVhZGVyX18xcThOLVwiLFxuXHRcIk5Vc2VyQ29udGFpbmVyXCI6IFwidXNlcl9OVXNlckNvbnRhaW5lcl9fM3dGci1cIixcblx0XCJOVXNlckljb25cIjogXCJ1c2VyX05Vc2VySWNvbl9fWkVOM3RcIixcblx0XCJOVXNlclwiOiBcInVzZXJfTlVzZXJfXzM5Mk5VXCIsXG5cdFwiTlVzZXJMYWJlbFwiOiBcInVzZXJfTlVzZXJMYWJlbF9fM2hhbWZcIixcblx0XCJOU2tpbGxDb250cmlidXRpb25zXCI6IFwidXNlcl9OU2tpbGxDb250cmlidXRpb25zX19oaFlELVwiLFxuXHRcIk5Qcm9wb3NlZEhlbHBcIjogXCJ1c2VyX05Qcm9wb3NlZEhlbHBfXzNoRjZRXCIsXG5cdFwiTlNraWxsSW5zXCI6IFwidXNlcl9OU2tpbGxJbnNfXzJhOVNVXCIsXG5cdFwiTlNraWxsUHJvcFwiOiBcInVzZXJfTlNraWxsUHJvcF9fMmFSUjFcIixcblx0XCJub3RpZmljYXRpb25DaG9pY2VcIjogXCJ1c2VyX25vdGlmaWNhdGlvbkNob2ljZV9fbHpkVlhcIixcblx0XCJub3RpZmljYXRpb25PcHRpb25cIjogXCJ1c2VyX25vdGlmaWNhdGlvbk9wdGlvbl9fM3c3WEhcIixcblx0XCJub3RpZmljYXRpb25FbWFpbFwiOiBcInVzZXJfbm90aWZpY2F0aW9uRW1haWxfX2dyTF9ZXCIsXG5cdFwiTk1lc3NhZ2VcIjogXCJ1c2VyX05NZXNzYWdlX18yTjI5Y1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXNlclV0aWxJbmZvXCI6IFwidXNlclV0aWxpdGllc191c2VyVXRpbEluZm9fXzEtVzFiXCIsXG5cdFwic2ltcGxlUG9zdEJhbm5lclwiOiBcInVzZXJVdGlsaXRpZXNfc2ltcGxlUG9zdEJhbm5lcl9fMzU2bGVcIixcblx0XCJ1c2VyVXRpbE5vdGlmXCI6IFwidXNlclV0aWxpdGllc191c2VyVXRpbE5vdGlmX194UjI1VVwiLFxuXHRcIm5vdGlmaWNhdGlvbkNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uQ29udGFpbmVyX181c251V1wiLFxuXHRcIm5vdGlmQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZkNvbnRhaW5lcl9fMkRnZWVcIixcblx0XCJub3RpZlNlbmRlclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZTZW5kZXJfXzJlUjJHXCIsXG5cdFwibm90aWZNZXNzYWdlXCI6IFwidXNlclV0aWxpdGllc19ub3RpZk1lc3NhZ2VfXzFlel9YXCIsXG5cdFwibm90aWZBY2NlcHRlZFwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZBY2NlcHRlZF9fMjhsOWVcIixcblx0XCJub3RpZkRlY2xpbmVkXCI6IFwidXNlclV0aWxpdGllc19ub3RpZkRlY2xpbmVkX18tZ2t3R1wiLFxuXHRcIm5vdGlmaWNhdGlvbk9wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uT3B0aW9uX18zbnJhSlwiLFxuXHRcInN0YW5kYXJkSG92ZXJcIjogXCJ1c2VyVXRpbGl0aWVzX3N0YW5kYXJkSG92ZXJfXzFjbUJrXCIsXG5cdFwiTkFuc3dlcklucHV0XCI6IFwidXNlclV0aWxpdGllc19OQW5zd2VySW5wdXRfXzJobmZUXCIsXG5cdFwiZGVjaWRlXCI6IFwidXNlclV0aWxpdGllc19kZWNpZGVfX1ZJREdhXCIsXG5cdFwib3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19vcHRpb25fX0FTTC1LXCIsXG5cdFwiZW1haWxcIjogXCJ1c2VyVXRpbGl0aWVzX2VtYWlsX18ydS12ZVwiLFxuXHRcInNraWxsbFwiOiBcInVzZXJVdGlsaXRpZXNfc2tpbGxsX18xSUx4RFwiLFxuXHRcIm5vdGlmRmlsdGVyQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZkZpbHRlckNvbnRhaW5lcl9fMVVyeTVcIixcblx0XCJORkNyZWF0b3JDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX05GQ3JlYXRvckNvbnRhaW5lcl9fMmM0UzZcIixcblx0XCJtZXNzYWdlc09wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfbWVzc2FnZXNPcHRpb25fX2VSazVRXCIsXG5cdFwiTkZMYWJlbFwiOiBcInVzZXJVdGlsaXRpZXNfTkZMYWJlbF9fMzNWSUVcIixcblx0XCJORk9wdGlvbkNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfTkZPcHRpb25Db250YWluZXJfXzI5NzZLXCIsXG5cdFwiTkZPcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX05GT3B0aW9uX18ybF83Q1wiLFxuXHRcIk5GU3BsaXR0ZXJcIjogXCJ1c2VyVXRpbGl0aWVzX05GU3BsaXR0ZXJfXzFVa0FvXCIsXG5cdFwiTkZERE9wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfTkZERE9wdGlvbl9fM1hIV0pcIixcblx0XCJub3RpZmljYXRpb25DTENvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uQ0xDb250YWluZXJfX2xVU3ZBXCIsXG5cdFwibm90aWZpY2F0aW9uU3VjZXNzSWNvblwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uU3VjZXNzSWNvbl9fMWN2cXJcIixcblx0XCJub3RpZmljYXRpb25DbFwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uQ2xfXzItXzNOXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9