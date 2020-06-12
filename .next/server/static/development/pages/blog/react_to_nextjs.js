module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

  console.log(props.userDD);

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

/***/ "./pages/blog/react_to_nextjs.js":
/*!***************************************!*\
  !*** ./pages/blog/react_to_nextjs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/blog.module.css */ "./styles/blog.module.css");
/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\pages\\blog\\react_to_nextjs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const RtN = () => {
  const reactPackages = `
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},`;
  const nextPackages = `
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
},`;
  const routerItems = `
<BrowserRouter>
    <NavBar onQueryChange={onQueryChange} enteredSearch={enteredSearch} />
    <Route exact path="/" render={() => <Home search={search} /> } />
    <Route path="/post/:id" render={({match}) => <PostPage postId={match.params.id} /> } />
</BrowserRouter>`;
  const layout = `
<NavBar onQueryChange={onQueryChange} enteredSearch={enteredSearch} />
{props.children}`;
  const bindMiddleware = `
const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}`;
  const store = `
const store = () => createStore(reducers, bindMiddleware([thunkMiddleware]))`;
  const oldDispatch = `
export default connect(
    mapStateToProps,
    {changeReducer}
)(Page)`;
  const newDispatch = `
import {bindActionCreators} from 'redux'

...

const mapDispatchToProps = (dispatch) => {
    return {
        changeReducer: bindActionCreators(changeReducer, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page)`;
  const apolloExport = `
import { withApollo } from "next-apollo"

...

export default withApollo(apolloClient)`;
  const oldToken = `
const token = localStorage.getItem('token')`;
  const newToken = `
let token = null
if(typeof window !== 'undefined') {
    token = localStorage.getItem('token')
}`;
  const getInitialPropsEx = `
import {apolloClient} from '../lib/apollo'
import {FIND_POST} from '../schemas/queries'

const Page = (props) => {
    const post = props.post
    ...
}

Page.getInitialProps = async () => {
    const postQuery = await apolloClient.query({
        query: FIND_POST,
        variables: {title: 'Unilous'} 
    }).catch(err => console.log(err))
    return {
        post: postQuery.data.findPost,
    }
}`;
  const _appRC = `
import { Provider } from 'react-redux'

const MyApp = ({ Component, pageProps, store }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}`;
  const _appGIP = `
MyApp.getInitialProps = async ({Component, ctx}) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    if (Object.keys(pageProps).length > 0) {
        return {pageProps};
    } else {
        return {};
    }
};`;
  const _appDE = `
import initStore from '../redux/store'
import withRedux from 'next-redux-wrapper'
import {compose} from 'redux'
import withApollo from '../lib/apollo'

...

export default compose(withRedux(initStore), withApollo({ssr: true}))(MyApp)`;
  const oldSVG = `
import logo from '../static/svg/logo.svg'

...

return (
    <img src={logo} />
)`;
  const newSVG = `
return (
    <img src="/svg/logo.svg" />
)`;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, "Contact | Unilous"), __jsx("meta", {
    name: "description",
    content: "Contact the Unilous team",
    key: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "navbar-height",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, "Converting a React application with Redux and Apollo to Next.JS"), __jsx("img", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.imgTitle,
    src: "https://i.imgur.com/mW3nk8o.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, "If you have clicked on this blog odds are that you have heard of ", __jsx("a", {
    href: "https://nextjs.org/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 86
    }
  }, "Next.JS"), ", if not allow me to introduce it. Next.JS is a ", __jsx("a", {
    href: "https://reactjs.org/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 34
    }
  }, "React"), " framework that is best known for its server side rendering capabilities which allows for better search engine optimization (SEO). In short the reason for which we at Unilous among other React developers switch to Next.JS is to alleviate the hassle of SEO in the most effective manner."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, "Although Next.JS is already built on the shoulders of React, there are still many challenges which need to be overcome before getting the application up and running. For this guide I will touch on the key changes I had to make when converting my React application with the centralized state management: ", __jsx("a", {
    href: "https://redux.js.org/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 158
    }
  }, "Redux"), ", and the GraphQL API: ", __jsx("a", {
    href: "https://www.apollographql.com/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 222
    }
  }, "Apollo"), " to Next.js."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, "I highly suggest you finish this ", __jsx("a", {
    href: "https://nextjs.org/learn/basics/create-nextjs-app",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 62
    }
  }, "tutorial"), " provided by Next.JS before getting started with this guide")), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, "For reference this is what your final Next.JS application should look like."), __jsx("div", {
    style: {
      display: 'grid'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.imgSM,
    src: "https://i.imgur.com/3HosEcE.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  })), __jsx("ol", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, "1. Update your node environment"), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }, "First you must set up the proper node packages so that the application runs as a Next.JS app rather than a React app."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, "You will need to replace the following scripts from React"), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.remove}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, reactPackages)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }, "With the standard Next.JS scripts"), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 29
    }
  }, nextPackages))), __jsx("li", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 25
    }
  }, "2. Adjusting navigation"), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, "Next.JS routing depends on the file structure whereas React routing was dependent on the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 118
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 146
    }
  }, "BrowserRouter")), " component. This process can be separated into several steps..."), __jsx("h3", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.subTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }, "a. Reorganize components"), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, "Next.JS requires a root level folder named ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 72
    }
  }, "pages"), "."), __jsx("div", {
    style: {
      display: 'grid'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.imgSM,
    src: "https://i.imgur.com/3FfHkZg.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  }, "Within this folder is where all of the routing happens. You can think of the pages folder as the host of your site and the files within the folder are paths with an exception of ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 151
    }
  }, "index.js"), " which will serve as the host page. For more information on routing in Next.JS I reccomend this ", __jsx("a", {
    href: "https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 89
    }
  }, "guide"), " from its official documentation."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 25
    }
  }, "To accomplish this you will need to move all of your root page files excluding your ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 113
    }
  }, "App.js"), " file into a new pages folder. Next I strongly suggest you rename all of your files to follow ", __jsx("a", {
    href: "https://library.stanford.edu/research/data-management-services/data-best-practices/best-practices-file-naming",
    rel: "nofollow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 92
    }
  }, "proper url naming conventions"), " so that you avoid problems with browsers and ensure your url remains readable. In the case that you have dynamic routes you will need to follow this ", __jsx("a", {
    href: "https://nextjs.org/learn/basics/dynamic-routes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 99
    }
  }, "guide"), " from the official Next.JS documentation."), __jsx("h3", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.subTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 25
    }
  }, "b. Transform ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 65
    }
  }, "App.js"), " to ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 111
    }
  }, "Layout.js")), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 25
    }
  }, "The traditional App.js serves to distribute components to all of the pages to ensure they have a uniform appearance. In Next.JS, since all of the pages are independent of each other, that will no longer work."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 25
    }
  }, "Usually within this App.js file you will contain the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 82
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 110
    }
  }, "BrowserRouter")), " component, the navigation bar or header, and the footer. To get started adjusting this file, rename it to ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 78
    }
  }, "Layout.js"), ". Then remove the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 45
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 73
    }
  }, "BrowserRouter")), " component along with the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 132
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 160
    }
  }, "Route")), " components within it, as they are no longer needed."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.remove}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 29
    }
  }, routerItems)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }, "In its place leave the other components like the navigation bar and add ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 101
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 129
    }
  }, '{props.children}'))), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 29
    }
  }, layout)), __jsx("h3", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.subTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 25
    }
  }, "c. Redirect paths"), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }
  }, "Once you have your ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 48
    }
  }, "pages"), " folder setup make sure to redirect all paths to other files within the folder as they have been relocated within your application.")), __jsx("li", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 25
    }
  }, "3. Adjusting Redux"), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }, "Redux integration to react looks mostly the same throughout the whole application. The reducers do not need to be changed in any way outside of relocating them to the root of your project. The ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 33
    }
  }, "store.js"), " on the other hand does receive two additions to be able to implement Thunk into Redux as middleware."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }
  }, "First you must implement the following function to connect the middleware to Redux."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 29
    }
  }, bindMiddleware)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  }, "Then the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 38
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 66
    }
  }, "bindMiddleware")), " function must be implemented before exporting the store. To do that we replace the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 55
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 83
    }
  }, "applyMiddleware")), " function with ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 133
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 161
    }
  }, "bindMiddleware")), " and place the bind middleware inside. Additionally we make the store a function to avoid errors later on. The final store variable should look like the following..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 29
    }
  }, store)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 25
    }
  }, "This will then affect the way you will need to map dispatch to props requiring the use of the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 123
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 151
    }
  }, "bindActionCreators")), " import from redux. In the end any file that needs to dispatch to people will need to change from this..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.remove}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 29
    }
  }, oldDispatch)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, "to something similar to this..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 29
    }
  }, newDispatch)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 25
    }
  }, "There will be some more changes needed to get Redux to work but I will address them once we get to the new ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 136
    }
  }, "index.js"), " or ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 184
    }
  }, "_app.js"), " page.")), __jsx("li", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 25
    }
  }, "4. Integrating Apollo"), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 25
    }
  }, "The integration of Apollo requires minimal changes much like redux. The first change will be to relocate the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 70
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 98
    }
  }, "ApolloClient")), " and everything connected within it to its own ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 177
    }
  }, "apollo.js"), " file, then move that file inside a folder named ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 271
    }
  }, "lib"), " on the root of the app. Once ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 34
    }
  }, "apollo.js"), " is in its new folder, make sure to to export the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 129
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 157
    }
  }, "ApolloClient")), " variable. For the default export you will need to utilize the withApollo import from Next.JS, the final default export will look like the following..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 29
    }
  }, apolloExport)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 25
    }
  }, "Additionally in the case that you have have user authentication and rely on a browsers ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 116
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 144
    }
  }, "localStorage")), ", you will need to make the following change to the way you get your ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 245
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 273
    }
  }, "token")), ". From this..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.remove}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 29
    }
  }, oldToken)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 25
    }
  }, "To this..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 29
    }
  }, newToken)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 25
    }
  }, "This lack of access to browser utilities as a result of server side routing results in the biggest change to working with Apollo in Next.JS. The same issue with the token will likely occur in other areas of your application depending on how you interact with browser utilities like ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 170
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 198
    }
  }, "localStorage")), ". In general I recommend that that you reduce the amount of code that lies inside ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 109
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 137
    }
  }, "if(typeof window !== 'undefined') ", '{}')), ". Additionally you should include an ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 64
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 92
    }
  }, "else")), " statement for when that information cannot be received so that you component does not render blank coming into the client."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 25
    }
  }, "As a means of dealing with the same issue posed by server side rendering, Next.JS provides the functionality to load data while on render. To do that Next.JS provides the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 61
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 89
    }
  }, "getInitialProps")), " functionality which is ran before the actual React component is rendered. Once that data is fetched it can then be passed as a prop to the same React component. The code would look similar to this..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 29
    }
  }, getInitialPropsEx)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 25
    }
  }, "One thing to note is that only files under the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 76
    }
  }, "pages"), " directory can use ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 136
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 164
    }
  }, "getInitialProps")), " so components wont have this option."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 25
    }
  }, "There will be some more changes needed to get Apollo to work but I will address them once we get to the new ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 137
    }
  }, "index.js"), " or ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 185
    }
  }, "_app.js"), " page.")), __jsx("li", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 25
    }
  }, "5. Formatting ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 63
    }
  }, "index.js"), " to ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 111
    }
  }, "_app.js")), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 25
    }
  }, "The index file is used to connect other top level technologies like Apollo and Redux. Next.JS requires a similar, the file must to be named ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 83
    }
  }, "_app.js"), " and be located inside the pages folder. Since we have already separated the Apollo code into its dedicated file the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 105
    }
  }, "_app.js"), " file becomes very simple. The ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 33
    }
  }, "_app.js"), " file will now only contain a React component with a ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 129
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 157
    }
  }, "getInitialProps")), " attached to it and a somewhat complicated default export."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 25
    }
  }, "For the React component the props will need to get destructured into the key components ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 117
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 145
    }
  }, `{ Component, pageProps, store }`)), ". The component will serve as the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 61
    }
  }, "App.js"), " itself and we will need to pass he ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 139
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 167
    }
  }, "pageProps")), " for its attributes. The ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 33
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 61
    }
  }, "Component")), " will only need to be wrapped by the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 127
    }
  }, "react-redux"), " ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 175
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 203
    }
  }, "Provider")), " where the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 242
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 270
    }
  }, "store")), " will be passed as ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 314
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 342
    }
  }, "store")), ". The resulting code will look like this..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 29
    }
  }, _appRC)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 25
    }
  }, "Unfortunately you cannot get access to props without directly adding the following ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 112
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 140
    }
  }, "getInitialProps")), ". This serves to pass the props to the rest of the pages. The code will look like this..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 29
    }
  }, _appGIP)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 25
    }
  }, "The default export for ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 52
    }
  }, "_app.js"), " is far from ordinary as it requires some final additions. The redux store needs to be wrapped around the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 76
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 104
    }
  }, "withRedux")), " wrapper provided by Next.JS. For the Apollo component you must indicate that the application is server side rendered (SSR) like this  ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 134
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 162
    }
  }, `{ssr: true}`)), ". Finally you stitch together both React and Apollo with the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeBit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 88
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 116
    }
  }, "compose")), " function from ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 158
    }
  }, "redux"), ". The final code will look like this..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 29
    }
  }, _appDE))), __jsx("li", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 25
    }
  }, "6. Working with static files"), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 25
    }
  }, "For static files there are only a few minor changes needed. First the static folder should be moved to the root directory of your applications. In the case that you have any SVGs you will need to move them to the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 98
    }
  }, "public"), " folder. Now that the static folder is finalized in the root directory all that is left is to update paths leading to it."), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 25
    }
  }, "because the SVGs are now located under the ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 72
    }
  }, "public"), " folder there will need to be one major change towards accessing th SVGs. Unlike before where you would import SVGs into your application and distribute them as a variable, like so..."), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.remove}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 29
    }
  }, oldSVG)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 25
    }
  }, "Now you can simply access your SVGs through a route as if your ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 92
    }
  }, "public"), " folder was the host"), __jsx("div", {
    className: `${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeContainer} ${_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 25
    }
  }, __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 29
    }
  }, newSVG)), __jsx("p", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 25
    }
  }, "Next.JS also offers a great feature with files by simply adding a ", __jsx("span", {
    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.codeLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 95
    }
  }, ".module"), " to  CSS files. This feature serves to better organize the naming of styles. To learn more about this feature visit this ", __jsx("a", {
    href: "https://nextjs.org/learn/basics/assets-metadata-css/layout-component",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 73
    }
  }, "guide"), " from the official Next.JS documentation.")))));
};

const mapStateToProps = state => {
  return {// currentUser: state.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {// setUserDD: bindActionCreators(setUserDD, dispatch),
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(RtN));

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

/***/ "./styles/blog.module.css":
/*!********************************!*\
  !*** ./styles/blog.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "blog_container__1ntJ1",
	"listContainer": "blog_listContainer__LZMUp",
	"listItem": "blog_listItem__3sM70",
	"title": "blog_title__3VvZ3",
	"subTitle": "blog_subTitle__2B_m9",
	"imgTitle": "blog_imgTitle__2Y09T",
	"imgSM": "blog_imgSM__3N4Tw",
	"text": "blog_text__1Tm4y",
	"codeContainer": "blog_codeContainer__3KYqT",
	"codeBit": "blog_codeBit__1JQrl",
	"codeLike": "blog_codeLike__1qlsL",
	"add": "blog_add__339O7",
	"remove": "blog_remove__2JUvW"
};


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

/***/ 3:
/*!*********************************************!*\
  !*** multi ./pages/blog/react_to_nextjs.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\Projects\projectU\projectu\pages\blog\react_to_nextjs.js */"./pages/blog/react_to_nextjs.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdOYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3TmF2QmFyL3NpZ25lZC9Ob3RTaWduZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdOYXZCYXIvc2lnbmVkL1NpZ25lZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci91c2VyL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdOYXZCYXIvdXNlci9Vc2VyVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC9Qb3N0U21hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LWZpZWxkL0lucHV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9mb3JtL1JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9mb3JtL1NpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvdXRpbGl0aWVzL05vdGlmLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci91dGlsaXRpZXMvVXNlck5vdGlmTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9mdW5jdGlvbnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9hcG9sbG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL3JlYWN0X3RvX25leHRqcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3Rva2VuLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3VzZXJERC5qcyIsIndlYnBhY2s6Ly8vLi9zY2hlbWFzL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zY2hlbWFzL3F1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2Jsb2cubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5wdXRIZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3VzZXIvdXNlclV0aWxpdGllcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rLWh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsIm9uUXVlcnlDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2hpbGRyZW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInRva2VuIiwiY3VycmVudFVzZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldFRva2VuIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwic2V0Q3VycmVudFVzZXIiLCJzZXRQZW5kaW5nTm90aWZpY2F0aW9ucyIsInNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyIsImNvbm5lY3QiLCJMb2FkaW5nIiwic2l6ZSIsImNvbG9yIiwiTmF2QmFyIiwibm9Vc2VyIiwiTkIiLCJjb250YWluZXIiLCJicmFuZENvbnRhaW5lciIsImljb24iLCJuYW1lIiwiY29udGFpbmVyTSIsIm5hdkljb24iLCJicmFuZENvbnRhaW5lck0iLCJzZWFyY2hRdWVyeSIsInVzZUZpZWxkIiwiY3VycmVudFVzZXJVTiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyUXVlcnkiLCJ1c2VRdWVyeSIsIkZJTkRfVVNFUiIsInZhcmlhYmxlcyIsInVzZXJuYW1lIiwidXNlclF1ZXJ5Q29uZGl0aW9ucyIsImRhdGEiLCJyZWR1Y2VyIiwiZmluZFVzZXIiLCJ1c2VyUmVzdWx0IiwidXNlRWZmZWN0Iiwic3ViTmF2Iiwic2V0U3ViTmF2IiwidXNlckREIiwicmVzZXROYXYiLCJyZXNldFVzZXJERCIsIlNRQ2xlYW5lZCIsImZpZWxkcyIsImVudGVyU2VhcmNoIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUtleVByZXNzIiwiZSIsIm5vU3RhdGUiLCJrZXkiLCJTUSIsImhhbmRsZVN1Yk5hdlN0YXRlIiwiaGFuZGxlU3ViTmF2SXRlbVN0YXRlIiwic2V0VXNlckREIiwibG9nb3V0IiwiY2xlYXIiLCJjbGVhclRva2VuIiwic2lnbmVkU3RhdGUiLCJTdWJOYXYiLCJzdWJOYXZDb250YWluZXIiLCJzZWFyY2hDb250YWluZXJNIiwic2VhcmNoQnRuIiwibWFnbmlmaWVyIiwic2VhcmNoQmFyIiwibWVudUNvbnRhaW5lciIsInVzZXJPcHRpb24iLCJtb3JlQ29udGFpbmVyIiwibW9yZSIsIm5vdGlmQ29udGFpbmVyTSIsImJlbGwiLCJub2ZpZkNvdW50Iiwic2lnbk9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJTdWJOYXZJdGVtIiwiU05JQ29udGFpbmVyIiwidGl0bGVCZWxsIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZGRPcHRpb24iLCJ0aXRsZU1vcmUiLCJzZWFyY2hDb250YWluZXIiLCJDUENvbnRhaW5lciIsInBsdXMiLCJDUFRleHQiLCJuYXZJdGVtIiwiTm90U2lnbmVkIiwiaGFuZGxlVXNlclN0YXRlIiwic2hvd1VzZXJERCIsImRpc3BsYXkiLCJzaG93SW5ERCIsInVzZXJXcmFwcGVyIiwidXNlckNvbnRhaW5lciIsImJhY2tncm91bmRDb2xvciIsIlNpZ25lZCIsInVzZXJTdGF0ZSIsInNldFVzZXJTdGF0ZSIsIm5vdGlmQ29udGFpbmVyIiwidXNlckluZm9Db250YWluZXIiLCJEREFycm93IiwiUG9zdFNtYWxsIiwiaGFuZGxlRXJyb3IiLCJyZW1vdmVTUE11dGF0aW9uIiwidXNlTXV0YXRpb24iLCJSRU1PVkVfU0FWRURfUE9TVCIsIm9uRXJyb3IiLCJwIiwicG9zdCIsInVzZXIiLCJwYWxsZXR0ZSIsInBhbGxldHRlR2VuZXJhdG9yIiwiY29sb3JQYWxsZXR0ZSIsImhhbmRsZVNhdmVSZW1vdmUiLCJyZXN1bHQiLCJfaWQiLCJwb3N0SWQiLCJuZXdTYXZlZFBvc3RzIiwic2F2ZWRQb3N0cyIsImZpbHRlciIsInNldEN1cnJlbnRVc2VyU1AiLCJ0cmlnZ2VyQWxlcnQiLCJ0aXRsZSIsInNldEFsZXJ0IiwicmVzZXRBbGVydCIsInR5cGUiLCJQVCIsInBvc3RXcmFwcGVyU20iLCJwb3N0Q29sb3JJbmRpY2F0b3IiLCJwb3N0Q29udGFpbmVyIiwicG9zdEhlYWRlciIsImVuY29kZVVSSUNvbXBvbmVudCIsIlBIVXNlciIsIlBIVUljb24iLCJwb3N0VGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJwb3N0U21SZW1vdmUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwic2V0Q3VycmVudFVzZXJQb3N0cyIsIklucHV0SGVhZGVyIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImluZm8iLCJpbnB1dEZvciIsIklIIiwiaW5mb1RpdGxlVGV4dCIsInNob3dJbmZvIiwiY29sb3JJbmZvIiwidGV4dENvbG9yIiwiZm9ybUluZm9Db250YWluZXIiLCJpbmZvSGVhZGVyQ29udGFpbmVyIiwiaW5mb0ljb24iLCJpbmZvQ29udGVudCIsIlJlZ2lzdGVyIiwicGFzc3dvcmQiLCJyZVBhc3N3b3JkIiwiZW1haWwiLCJyZWZlcmVuY2VMaW5rIiwiY2xlYW5lZE1lc3NhZ2UiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJvbkxvZ2luRXJyb3IiLCJyZWdpc3Rlck11dGF0aW9uIiwiQ1JFQVRFX1VTRVIiLCJsb2dpbk11dGF0aW9uIiwiTE9HSU4iLCJoYW5kbGVTdW1iaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImNoYW5nZU1lbnVJdGVtIiwibG9naW5SZXN1bHQiLCJsb2dpbiIsInNldEl0ZW0iLCJyZXNldCIsIm9uU3VjY2VzcyIsImJnU3R5bGUiLCJub0JHIiwiVVIiLCJ1c2VyRm9ybUNvbnRhaW5lciIsInVzZXJGb3JtIiwiVUZJbnB1dCIsIm1hcmdpbiIsIlVGU3VibWl0IiwiU2lnbkluIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJzaWduSW5NdXRhdGlvbiIsIk5vdGlmIiwiYWNjZXB0Tm90aWYiLCJBQ0NFUFRfTk9USUZJQ0FUSU9OIiwiZGVjbGluZU5vdGlmIiwiREVDTElORV9OT1RJRklDQVRJT04iLCJhbnN3ZXJRdWVzdGlvbiIsIkFOU1dFUl9RVUVTVElPTiIsImFuc3dlciIsImhhbmRsZUFuc3dlciIsIm5vdGlmaWNhdGlvbklkIiwibm90aWYiLCJyZXNwb25zZSIsIm5ld05vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwibWFwIiwibiIsInVzZXJGcm9tIiwiaGFuZGxlQWNjZXB0IiwiYWNjZXB0IiwiYWNjZXB0Tm90aWZpY2F0aW9uIiwiaGFuZGxlRGVjbGluZSIsImRlY2xpbmUiLCJkZWNsaW5lTm90aWZpY2F0aW9uIiwibm90aWZTdGF0dXNDb2xvciIsImFjY2VwdGVkIiwicXVlc3Rpb24iLCJib3JkZXJCb3R0b20iLCJ1c2VyVG8iLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIkdDTGlua1N0YXRzIiwid2Vic2l0ZVN0YXRzIiwiY29udGFjdExpbmsiLCJjbGVhbmVkTGluayIsInNraWxsVG9Kb2luIiwic2tpbGxOYW1lcyIsInByb3Bvc2VkQ29udHJpYnV0aW9uIiwiaW5kZXhPZiIsIlVzZXJOb3RpZkxpc3QiLCJzZW50RmlsdGVyIiwic2V0U2VudEZpbHRlciIsInNob3dTRkREIiwic2V0U2hvd1NGREQiLCJzdGF0dXNGaWx0ZXIiLCJzZXRTdGF0dXNGaWx0ZXIiLCJzaG93U3RhdHVzREQiLCJzZXRTaG93U3RhdHVzREQiLCJncmlkQ29sdW1uIiwiaGVpZ2h0IiwiRmlsdGVyIiwic2VudE9wdGlvbnMiLCJhbGxPcHRpb25zIiwib25PcHRpb25DbGljayIsIm9wdGlvbiIsIm8iLCJVVSIsIk5GRERPcHRpb24iLCJzZW50REQiLCJORnJvcGRvd24iLCJORlNwbGl0dGVyIiwic3RhdHVzT3B0aW9ucyIsInN0YXR1c0REIiwiTkZEcm9wZG93biIsIm5vdGlmRmlsdGVyQ29udGFpbmVyIiwiTkZDcmVhdG9yQ29udGFpbmVyIiwiTkZMYWJlbCIsIk5GT3B0aW9uQ29udGFpbmVyIiwiTkZPcHRpb24iLCJzdGF0dXNDb25kaXRpb25zIiwibm90aWZTdGF0dXMiLCJzZW50Q29uZGl0aW9ucyIsInNlbnRTdGF0dXMiLCJzaG93Tm90aWZpY2F0aW9ucyIsInJldmVyc2UiLCJyb3dHYXAiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInVybCIsInN0YXJ0Iiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsInByaW1hcnlDb2xvciIsImNvbG9ycyIsImMiLCJOdW1iZXIiLCJoaWdoZXJDb2xvciIsImlzRGFyayIsImh0dHBMaW5rIiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJfIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJhcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwid2l0aEFwb2xsbyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInNjcm9sbCIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiUnROIiwicmVhY3RQYWNrYWdlcyIsIm5leHRQYWNrYWdlcyIsInJvdXRlckl0ZW1zIiwibGF5b3V0IiwiYmluZE1pZGRsZXdhcmUiLCJzdG9yZSIsIm9sZERpc3BhdGNoIiwibmV3RGlzcGF0Y2giLCJhcG9sbG9FeHBvcnQiLCJvbGRUb2tlbiIsIm5ld1Rva2VuIiwiZ2V0SW5pdGlhbFByb3BzRXgiLCJfYXBwUkMiLCJfYXBwR0lQIiwiX2FwcERFIiwib2xkU1ZHIiwibmV3U1ZHIiwiQiIsImltZ1RpdGxlIiwidGV4dCIsImltZ1NNIiwibGlzdENvbnRhaW5lciIsImxpc3RJdGVtIiwiY29kZUNvbnRhaW5lciIsInJlbW92ZSIsImFkZCIsImNvZGVCaXQiLCJzdWJUaXRsZSIsImNvZGVMaWtlIiwiYWxlcnROb3RpZiIsImFjdGlvbiIsInBvc3RzIiwiYW10IiwicGVuZGluZ05vdGlmaWNhdGlvbnMiLCJDUkVBVEVfUE9TVCIsImdxbCIsIk1BS0VfTk9USUZJQ0FUSU9OIiwiU0FWRV9QT1NUIiwiQVNLX1FVRVNUSU9OIiwiTElTVF9PRl9OT1RJRklDQVRJT05TIiwiU0tJTExfU0VBUkNIIiwiTUUiLCJMSVNUX09GX1BPU1RTIiwiRklORF9QT1NUIiwiQUxMX1VTRVJTIiwiU09NRV9VU0VSUyIsIkFMTF9QT1NUUyIsIkdFVF9QT1NUX1RJVExFUyIsIlNFQVJDSF9QT1NUUyIsIlBFTkRJTkdfTk9USUZTIiwiUV9BTkRfQV9OT1RJRlMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBLGdEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nXFxyZWFjdF90b19uZXh0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIsIHNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbi8vIGltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vbmV3TmF2QmFyL05hdkJhcidcclxuaW1wb3J0IHsgRklORF9VU0VSLCBQRU5ESU5HX05PVElGUywgTElTVF9PRl9OT1RJRklDQVRJT05TIH0gZnJvbSAnLi4vc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBvblF1ZXJ5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxOYXZCYXIgcXVlcnk9e3F1ZXJ5fSBvblF1ZXJ5Q2hhbmdlPXtvblF1ZXJ5Q2hhbmdlfSBub1VzZXIgLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICYmIHByb3BzLnRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgcHJvcHMuc2V0VG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLl9pZCA6ICd0aGlzaXNmYWtlJ1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnNRdWVyeSA9IHVzZVF1ZXJ5KFBFTkRJTkdfTk9USUZTLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczogIHt1c2VySWQ6IGN1cnJlbnRVc2VySWR9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlclVOID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSA6ICd0aGlzaXNmYWtlJ1xyXG4gICAgICAgIGNvbnN0IHVzZXJRdWVyeSA9IHVzZVF1ZXJ5KEZJTkRfVVNFUiwge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogY3VycmVudFVzZXJVTn1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHVzZXJOb3RpZnMgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQpIDogW11cclxuICAgICAgICBjb25zdCBub3RpZnNRdWVyeSA9IHVzZVF1ZXJ5KExJU1RfT0ZfTk9USUZJQ0FUSU9OUywge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25zOiB1c2VyTm90aWZzfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3Qgbm90aWZzUXVlcnlDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vdGlmc1F1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChub3RpZnNRdWVyeS5sb2FkaW5nKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAobm90aWZzUXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zLmxlbmd0aCA8IDEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5sZW5ndGgpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zWzBdLnVzZXJGcm9tKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gbm90aWZzUXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnNDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXBlbmRpbmdOb3RpZnNRdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocHJvcHMuY3VycmVudFVzZXIgJiYgcHJvcHMuY3VycmVudFVzZXIucGVuZGluZ05vdGlmaWNhdGlvbnMpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBwZW5kaW5nTm90aWZzUXVlcnkuZGF0YS5zZWFyY2hBd2FpdGluZ05vdGlmc1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyQ29uZGl0aW9ucyA9IChxdWVyeSwgcmVkdWNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXF1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcXVlcnkuZGF0YS5maW5kVXNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHJlZHVjZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBxdWVyeS5kYXRhLmZpbmRVc2VyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc0ZpbGxlZCA9IG5vdGlmc1F1ZXJ5Q29uZGl0aW9ucygpXHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmcyA9IHBlbmRpbmdOb3RpZnNDb25kaXRpb25zKClcclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNvbmRpdGlvbnModXNlclF1ZXJ5LCBwcm9wcy5jdXJyZW50VXNlcilcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXIodXNlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGVuZGluZ05vdGlmcykge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMocGVuZGluZ05vdGlmcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm90aWZzRmlsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobm90aWZzRmlsbGVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW25vdGlmc0ZpbGxlZCwgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCB1c2VyLCBwcm9wcy5zZXRDdXJyZW50VXNlciwgcGVuZGluZ05vdGlmcywgcHJvcHMuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIHByb3BzXSlcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdkJhciBxdWVyeT17cXVlcnl9IG9uUXVlcnlDaGFuZ2U9e29uUXVlcnlDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKHNldFRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXI6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlciwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldFBlbmRpbmdOb3RpZmljYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5zZXRDdXJyZW50VXNlclxyXG5zZXRQZW5kaW5nTm90aWZpY2F0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExheW91dCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuLy8gaW1wb3J0IGxvZ29CIGZyb20gJy4uL3N0YXRpYy9zdmcvbG9nby9sb2dvQi5zdmcnXHJcbi8vIGltcG9ydCBsb2dvVyBmcm9tICcuLi9zdGF0aWMvc3ZnL2xvZ28vbG9nb1cuc3ZnJ1xyXG5cclxuY29uc3QgTG9hZGluZyA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYgKHByb3BzLnNpemUgPT09ICdzbWFsbCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvQi5zdmdcIiBjbGFzc05hbWU9XCJsb2FkaW5nLWxvZ29cIiBhbHQ9XCJsb2FkaW5nIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPmxvYWRpbmc8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMuY29sb3IgPT09ICd3aGl0ZScpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT1cImxvYWRpbmctbG9nby1sXCIgYWx0PVwibG9hZGluZyBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxvYWRpbmctdGl0bGVcIj5sb2FkaW5nPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgY2xhc3NOYW1lPVwibG9hZGluZy1sb2dvLWxcIiBhbHQ9XCJsb2FkaW5nIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9hZGluZy10aXRsZVwiPmxvYWRpbmc8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoTG9hZGluZykiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTkIgZnJvbSAnLi4vLi4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge3VzZUZpZWxkfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBOb3RTaWduZWQgZnJvbSAnLi9zaWduZWQvTm90U2lnbmVkJ1xyXG5pbXBvcnQgU2lnbmVkIGZyb20gJy4vc2lnbmVkL1NpZ25lZCdcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uL3VzZXIvZm9ybS9TaWduSW4nXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi91c2VyL2Zvcm0vUmVnaXN0ZXInXHJcbmltcG9ydCB7Y2xlYXJUb2tlbn0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCB7c2V0Q3VycmVudFVzZXJ9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgVXNlck5vdGlmTGlzdCBmcm9tICcuLi91c2VyL3V0aWxpdGllcy9Vc2VyTm90aWZMaXN0J1xyXG5pbXBvcnQgeyBGSU5EX1VTRVIgfSBmcm9tICcuLi8uLi9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtzZXRVc2VyREQsIHJlc2V0VXNlckREfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy91c2VyREQnXHJcblxyXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5ub1VzZXIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIV01cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuYnJhbmRDb250YWluZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtOQi5uYW1lfT5Vbmlsb3VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNXTVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5jb250YWluZXJNfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtOQi5icmFuZENvbnRhaW5lck19IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtOQi5uYW1lfT5Vbmlsb3VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gICAgY29uc3QgY3VycmVudFVzZXJVTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgOiAnZmFrZVVzZXInXHJcbiAgICBjb25zdCB1c2VyUXVlcnkgPSB1c2VRdWVyeShGSU5EX1VTRVIsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogY3VycmVudFVzZXJVTn1cclxuICAgIH0pXHJcbiAgICBjb25zdCB1c2VyUXVlcnlDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdXNlclF1ZXJ5LmRhdGFcclxuICAgICAgICBjb25zdCByZWR1Y2VyID0gcHJvcHMuY3VycmVudFVzZXJcclxuICAgICAgICBpZiAoIXF1ZXJ5KSB7IHJldHVybiBudWxsIH1cclxuICAgICAgICBpZiAoIXF1ZXJ5LmZpbmRVc2VyKSB7IHJldHVybiBudWxsIH1cclxuICAgICAgICBpZiAocmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAocXVlcnkuZmluZFVzZXIudXNlcm5hbWUgPT09IHJlZHVjZXIudXNlcm5hbWUpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcXVlcnkuZmluZFVzZXJcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXJSZXN1bHQgPSB1c2VyUXVlcnlDb25kaXRpb25zKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyKHVzZXJSZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLCBwcm9wcy5jdXJyZW50VXNlciwgdXNlclJlc3VsdF0pXHJcblxyXG4gICAgY29uc3QgW3N1Yk5hdiwgc2V0U3ViTmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgaWYgKHByb3BzLnVzZXJERCkge1xyXG4gICAgICAgIGlmICghc3ViTmF2KSB7XHJcbiAgICAgICAgICAgIHNldFN1Yk5hdignbWVudScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzZXROYXYgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3ViTmF2KGZhbHNlKVxyXG4gICAgICAgIHByb3BzLnJlc2V0VXNlckREKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTUUNsZWFuZWQgPSBzZWFyY2hRdWVyeS5maWVsZHMudmFsdWUgPT09ICcnID8gJ2FsbCcgOiBzZWFyY2hRdWVyeS5maWVsZHMudmFsdWVcclxuXHJcbiAgICBjb25zdCBlbnRlclNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL3Jlc3VsdHMvJHtTUUNsZWFuZWR9YClcclxuICAgICAgICByZXNldE5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSwgbm9TdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaWYgKG5vU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFNRID0gZS50YXJnZXQudmFsdWUgPT09ICcnID8gJ2FsbCcgOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9yZXN1bHRzLyR7U1F9YClcclxuICAgICAgICAgICAgICAgIHJlc2V0TmF2KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtlbnRlclNlYXJjaCgpfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJOYXZTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gc3ViTmF2KSB7c2V0U3ViTmF2KGZhbHNlKX1cclxuICAgICAgICBlbHNlIHtzZXRTdWJOYXYoc3RhdGUpfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3ViTmF2SXRlbVN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBwcm9wcy51c2VyREQpIHtwcm9wcy5yZXNldFVzZXJERCgpfVxyXG4gICAgICAgIGVsc2Uge3Byb3BzLnNldFVzZXJERChzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBwcm9wcy5jbGVhclRva2VuKClcclxuICAgICAgICByZXNldE5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2lnbmVkU3RhdGUgPSBwcm9wcy50b2tlbiA/IDxTaWduZWQgLz4gOiA8Tm90U2lnbmVkIC8+XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUgOiAnJ1xyXG4gICAgY29uc3QgU3ViTmF2ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghc3ViTmF2KSB7cmV0dXJuIG51bGx9XHJcbiAgICAgICAgZWxzZSBpZiAoc3ViTmF2ID09PSAnc2VhcmNoJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnN1Yk5hdkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaENvbnRhaW5lck19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XVwiIGFzPXtgL3Jlc3VsdHMvJHtTUUNsZWFuZWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e05CLnNlYXJjaEJ0bn0+PGltZyBzcmM9XCIvc3ZnL3NlYXJjaFdXLnN2Z1wiIGNsYXNzTmFtZT17TkIubWFnbmlmaWVyfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0gcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBvbktleVByZXNzPXsoZSkgPT4gaGFuZGxlS2V5UHJlc3MoZSwgdHJ1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdWJOYXYgPT09ICdtZW51Jykge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMubm9Vc2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zdWJOYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIudXNlck9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdub3RpZmljYXRpb24nKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ3VzZXInKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5tb3JlQ29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ21vcmUnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBjbGFzc05hbWU9e05CLm1vcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BzLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zdWJOYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIudXNlck9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdub3RpZmljYXRpb24nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5vdGlmQ29udGFpbmVyTX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9iZWxsVy5zdmdcIiBjbGFzc05hbWU9e05CLmJlbGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5ub2ZpZkNvdW50fT4tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ3VzZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJuYW1lfT57dXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5tb3JlQ29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ21vcmUnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBjbGFzc05hbWU9e05CLm1vcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zdWJOYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIuc2lnbk9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdzaWduaW4nKX0gPnNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5zaWduT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ3JlZ2lzdGVyJyl9ID5yZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLm1vcmVDb250YWluZXJ9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Yk5hdkl0ZW1TdGF0ZSgnbW9yZScpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL21vcmVXLnN2Z1wiIGNsYXNzTmFtZT17TkIubW9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHByb3BzLnVzZXJERClcclxuICAgIGNvbnN0IFN1Yk5hdkl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy51c2VyREQpIHtyZXR1cm4gbnVsbH1cclxuICAgICAgICBpZiAocHJvcHMudXNlckREID09PSAnc2lnbmluJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNOSUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZ25JbiBvblN1Y2Nlc3M9e3Jlc2V0TmF2fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnVzZXJERCA9PT0gJ3JlZ2lzdGVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNOSUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlZ2lzdGVyIG9uU3VjY2Vzcz17cmVzZXROYXZ9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy51c2VyREQgPT09ICdub3RpZmljYXRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU05JQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvYmVsbFcuc3ZnXCIgY2xhc3NOYW1lPXtOQi50aXRsZUJlbGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJOb3RpZkxpc3QgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy51c2VyREQgPT09ICd1c2VyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNOSUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9eygpID0+IHJlc2V0TmF2KCl9IGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2RlY29kZVVSSUNvbXBvbmVudChwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT48aDMgY2xhc3NOYW1lPXtOQi5kZE9wdGlvbn0+YWNjb3VudCBkZXRhaWxzPC9oMz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e05CLmRkT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0gc3R5bGU9e3tjb2xvcjogJ3JnYigyNTQsNTIsNzcpJ319PlNpZ24gb3V0PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy51c2VyREQgPT09ICdtb3JlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNOSUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL21vcmVXLnN2Z1wiIGNsYXNzTmFtZT17TkIudGl0bGVNb3JlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9eygpID0+IHJlc2V0TmF2KCl9IGhyZWY9XCIvcG9zdGZvcm1wYWdlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+PGgzIGNsYXNzTmFtZT17TkIuZGRPcHRpb259PmNyZWF0ZSBwcm9qZWN0PC9oMz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIV01cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuYnJhbmRDb250YWluZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17TkIubmFtZX0+VW5pbG91czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzdWx0cy9bc2VhcmNoUXVlcnldXCIgYXM9e2AvcmVzdWx0cy8ke1NRQ2xlYW5lZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIuc2VhcmNoQnRufT48aW1nIHNyYz1cIi9zdmcvc2VhcmNoV1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5tYWduaWZpZXJ9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0gcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBvbktleVByZXNzPXsoZSkgPT4gaGFuZGxlS2V5UHJlc3MoZSl9IHsuLi5zZWFyY2hRdWVyeS5maWVsZHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0Zm9ybXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtOQi5DUENvbnRhaW5lcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvcGx1c1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5wbHVzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLkNQVGV4dH0+Y3JlYXRlIHByb2plY3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7c2lnbmVkU3RhdGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU1dNXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuY29udGFpbmVyTX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtOQi5icmFuZENvbnRhaW5lck19IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17TkIubmFtZX0+VW5pbG91czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZTdGF0ZSgnc2VhcmNoJyl9IGNsYXNzTmFtZT17TkIubmF2SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvc2VhcmNoV1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2U3RhdGUoJ21lbnUnKX0gY2xhc3NOYW1lPXtOQi5uYXZJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2hhbWJ1cmdlclcuc3ZnXCIgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJOYXYgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3ViTmF2SXRlbSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgdXNlckREOiBzdGF0ZS51c2VyREQsXHJcbiAgICAgICAgLy8gYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZlxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyVG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXI6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlciwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldFVzZXJERDogYmluZEFjdGlvbkNyZWF0b3JzKHNldFVzZXJERCwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHJlc2V0VXNlckREOiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKE5hdkJhcikiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IE5CIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9uZXdOYXZCYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi8uLi91c2VyL2Zvcm0vUmVnaXN0ZXInXHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi4vLi4vdXNlci9mb3JtL1NpZ25JbidcclxuaW1wb3J0IHtzZXRVc2VyREQsIHJlc2V0VXNlckREfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy91c2VyREQnXHJcblxyXG5jb25zdCBOb3RTaWduZWQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVVzZXJTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gcHJvcHMudXNlckREKSB7cHJvcHMucmVzZXRVc2VyREQoKX1cclxuICAgICAgICBlbHNlIHtwcm9wcy5zZXRVc2VyREQoc3RhdGUpfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dVc2VyREQgPSBwcm9wcy51c2VyREQgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG4gICAgY29uc3Qgc2hvd0luREQgPSBwcm9wcy51c2VyREQgPyBcclxuICAgICAgICBwcm9wcy51c2VyREQgPT09ICdyZWdpc3RlcicgPyA8UmVnaXN0ZXIgLz4gOlxyXG4gICAgICAgIHByb3BzLnVzZXJERCA9PT0gJ3NpZ25pbicgPyA8U2lnbkluIC8+IDogbnVsbFxyXG4gICAgOiBudWxsXHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlcldyYXBwZXJ9ICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5zaWduT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ3NpZ25pbicpfSA+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnNpZ25PcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVVzZXJTdGF0ZSgncmVnaXN0ZXInKX0gPnJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlckREfSBzdHlsZT17c2hvd1VzZXJERH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1oclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9fSAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbkREfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIHVzZXJERDogc3RhdGUudXNlckRELFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFVzZXJERDogYmluZEFjdGlvbkNyZWF0b3JzKHNldFVzZXJERCwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHJlc2V0VXNlckREOiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKE5vdFNpZ25lZCkiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IE5CIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9uZXdOYXZCYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL3VzZXIvTm90aWZpY2F0aW9ucydcclxuaW1wb3J0IFVzZXJVdGlsaXRpZXMgZnJvbSAnLi4vdXNlci9Vc2VyVXRpbGl0aWVzJ1xyXG5cclxuXHJcbmNvbnN0IFNpZ25lZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGFuZGxlVXNlclN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSB1c2VyU3RhdGUpIHtzZXRVc2VyU3RhdGUoZmFsc2UpfVxyXG4gICAgICAgIGVsc2Uge3NldFVzZXJTdGF0ZShzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93VXNlckREID0gdXNlclN0YXRlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gdXNlclN0YXRlID8gXHJcbiAgICAgICAgdXNlclN0YXRlID09PSAnbm90aWZpY2F0aW9uJyA/IDxOb3RpZmljYXRpb25zIC8+IDogPFVzZXJVdGlsaXRpZXMgLz5cclxuICAgIDogbnVsbFxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lIDogJydcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnVzZXJPcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVVzZXJTdGF0ZSgnbm90aWZpY2F0aW9uJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5ub3RpZkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9iZWxsVy5zdmdcIiBjbGFzc05hbWU9e05CLmJlbGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5ub2ZpZkNvdW50fT4tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ3VzZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJJbmZvQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJuYW1lfT57dXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9kZFcuc3ZnXCIgY2xhc3NOYW1lPXtOQi5EREFycm93fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlckREfSBzdHlsZT17c2hvd1VzZXJERH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1oclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9fSAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbkREfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIC8vIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWZcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIC8vIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShTaWduZWQpIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgVXNlck5vdGlmTGlzdCBmcm9tICcuLi8uLi91c2VyL3V0aWxpdGllcy9Vc2VyTm90aWZMaXN0J1xyXG5cclxuY29uc3QgU2lnbmVkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHVzZXJTdGF0ZSkge3NldFVzZXJTdGF0ZShmYWxzZSl9XHJcbiAgICAgICAgZWxzZSB7c2V0VXNlclN0YXRlKHN0YXRlKX1cclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dVc2VyREQgPSB1c2VyU3RhdGUgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG4gICAgY29uc3Qgc2hvd0luREQgPSB1c2VyU3RhdGUgPyBcclxuICAgICAgICB1c2VyU3RhdGUgPT09ICdub3RpZmljYXRpb24nID8gPE5vdGlmaWNhdGlvbnMgLz4gOiA8VXNlclV0aWxpdGllcyAvPlxyXG4gICAgOiBudWxsXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvYmVsbFcuc3ZnXCIgY2xhc3NOYW1lPXtOQi50aXRsZUJlbGx9IC8+XHJcbiAgICAgICAgICAgIDxVc2VyTm90aWZMaXN0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICAvLyBhbGVydE5vdGlmOiBzdGF0ZS5hbGVydE5vdGlmXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gY2xlYXJUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKGNsZWFyVG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICAvLyByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoU2lnbmVkKSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTkIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7Y2xlYXJUb2tlbn0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuXHJcbmNvbnN0IFNpZ25lZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGFuZGxlVXNlclN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSB1c2VyU3RhdGUpIHtzZXRVc2VyU3RhdGUoZmFsc2UpfVxyXG4gICAgICAgIGVsc2Uge3NldFVzZXJTdGF0ZShzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93VXNlckREID0gdXNlclN0YXRlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gdXNlclN0YXRlID8gXHJcbiAgICAgICAgdXNlclN0YXRlID09PSAnbm90aWZpY2F0aW9uJyA/IDxOb3RpZmljYXRpb25zIC8+IDogPFVzZXJVdGlsaXRpZXMgLz5cclxuICAgIDogbnVsbFxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICAgICAgcHJvcHMuY2xlYXJUb2tlbigpXHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUgOiAnJ1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+e3VzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2RlY29kZVVSSUNvbXBvbmVudChwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+PGgzIGNsYXNzTmFtZT17TkIuZGRPcHRpb259PmFjY291bnQgZGV0YWlsczwvaDM+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e05CLmRkT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0gc3R5bGU9e3tjb2xvcjogJ3JnYigyNTQsNTIsNzcpJ319PnNpZ24gb3V0PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIC8vIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWZcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIC8vIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShTaWduZWQpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBSRU1PVkVfU0FWRURfUE9TVCB9IGZyb20gJy4uLy4uL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlclBvc3RzLCBzZXRDdXJyZW50VXNlclNQIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IHsgdHJpZ2dlckFsZXJ0LCBwYWxsZXR0ZUdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCBQVCBmcm9tICcuLi8uLi9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUG9zdFNtYWxsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IFsgZGVsZXRlUG9zdE11dGF0aW9uIF0gPSB1c2VNdXRhdGlvbihERUxFVEVfUE9TVCwge1xyXG4gICAgLy8gICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICAvLyB9KVxyXG4gICAgY29uc3QgWyByZW1vdmVTUE11dGF0aW9uIF0gPSB1c2VNdXRhdGlvbihSRU1PVkVfU0FWRURfUE9TVCwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcCA9IHByb3BzLnBvc3RcclxuICAgIGNvbnN0IHVzZXIgPSBwcm9wcy5wb3N0LnVzZXIgPyBwcm9wcy5wb3N0LnVzZXIudXNlcm5hbWUgOiBwcm9wcy51c2VyXHJcbiAgICBjb25zdCBwYWxsZXR0ZSA9IHBhbGxldHRlR2VuZXJhdG9yKHAuY29sb3IpLmNvbG9yUGFsbGV0dGVcclxuICAgIC8vIGNvbnN0IGhhbmRsZVJlbW92ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWxldGVQb3N0TXV0YXRpb24oe1xyXG4gICAgLy8gICAgICAgICB2YXJpYWJsZXM6IHtwb3N0SWQ6IHByb3BzLnBvc3QuX2lkfVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgLy8gICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlclBvc3RzKHByb3BzLmN1cnJlbnRVc2VyLnBvc3RzLmZpbHRlcihwID0+IHAuX2lkICE9PSBwcm9wcy5wb3N0Ll9pZCkpXHJcbiAgICAvLyAgICAgICAgIHRyaWdnZXJBbGVydCgnZGFuZ2VyJywgYGRlbGV0ZWQgJDogZGVsZXRlZCBwb3N0ICcke3AudGl0bGV9J2AsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIGNvbnN0IGhhbmRsZVNhdmVSZW1vdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtb3ZlU1BNdXRhdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogcHJvcHMuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgcG9zdElkOiBwLl9pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NhdmVkUG9zdHMgPSBwcm9wcy5jdXJyZW50VXNlci5zYXZlZFBvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QuX2lkICE9PSBwLl9pZClcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJTUChuZXdTYXZlZFBvc3RzKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ2RhbmdlcicsIGB1bmZvbGxvd2VkJDogdW5mb2xsb3dlZCBwb3N0ICcke3AudGl0bGV9J2AsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHByb3BzLnR5cGUgPT09ICdzYXZlZCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdFdyYXBwZXJTbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbG9ySW5kaWNhdG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcGFsbGV0dGUuY29sb3J9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXIpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtQVC5QSFVzZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQVC5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3RpdGxlXVwiIGFzPXtgL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocC50aXRsZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1BULnBvc3RUaXRsZX0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3cHgnfX0+e3AudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlUmVtb3ZlKCl9IGNsYXNzTmFtZT17UFQucG9zdFNtUmVtb3ZlfT54PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcHMuY3VycmVudFVzZXIpIHtcclxuICAgICAgICBpZiAodXNlciA9PT0gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0V3JhcHBlclNtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbG9ySW5kaWNhdG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcGFsbGV0dGUuY29sb3J9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXIpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BULlBIVXNlcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQVC5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bdGl0bGVdXCIgYXM9e2AvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwLnRpdGxlKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQVC5wb3N0VGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnN3B4J319PntwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUoKX0gY2xhc3NOYW1lPVwicG9zdC1zbS1yZW1vdmVcIj54PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdFdyYXBwZXJTbX0gc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOiAnOHB4IGF1dG8nfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29sb3JJbmRpY2F0b3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwYWxsZXR0ZS5jb2xvcn19IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQodXNlcil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7UFQuUEhVc2VyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQVC5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1t0aXRsZV1cIiBhcz17YC9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHAudGl0bGUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQVC5wb3N0VGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnN3B4J319PntwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7IHNldEN1cnJlbnRVc2VyUG9zdHMsIHNldEN1cnJlbnRVc2VyU1AsIHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShQb3N0U21hbGwpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IElIIGZyb20gJy4uLy4uL3N0eWxlcy9pbnB1dEhlYWRlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgSW5wdXRIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgaWYgKCFwcm9wcy5pbmZvKSB7XHJcbiAgICAgICAgcmV0dXJuIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5pbnB1dEZvcn0+PGgzIGNsYXNzTmFtZT17SUguaW5mb1RpdGxlVGV4dH0+e3Byb3BzLnRpdGxlfTwvaDM+PC9sYWJlbD5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93SW5mbyA9IGV4cGFuZGVkID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ30gXHJcbiAgICBjb25zdCBjb2xvckluZm8gPSBwcm9wcy5jb2xvciA9PT0gJ3doaXRlJyA/XHJcbiAgICAgICAge3RleHRDb2xvcjogJyMyODI4MjgnLCBpY29uOiAnL3N2Zy9pbmZvQi5zdmcnfSA6IHt0ZXh0Q29sb3I6ICd3aGl0ZScsIGljb246ICcvc3ZnL2luZm9XLnN2Zyd9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtJSC5mb3JtSW5mb0NvbnRhaW5lcn0gc3R5bGU9e3tjb2xvcjogY29sb3JJbmZvLnRleHRDb2xvcn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SUguaW5mb0hlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMuaW5wdXRGb3J9PjxoMyBjbGFzc05hbWU9e0lILmluZm9UaXRsZVRleHR9Pntwcm9wcy50aXRsZX08L2gzPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IHNyYz17Y29sb3JJbmZvLmljb259IGNsYXNzTmFtZT17SUguaW5mb0ljb259IGFsdD1cImluZm9cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0lILmluZm9Db250ZW50fSBzdHlsZT17c2hvd0luZm99PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShJbnB1dEhlYWRlcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBDUkVBVEVfVVNFUiwgTE9HSU4gfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IElucHV0SGVhZGVyIGZyb20gJy4uLy4uL3RleHQtZmllbGQvSW5wdXRIZWFkZXInXHJcbmltcG9ydCB7IHVzZUZpZWxkLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBSZWdpc3RlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VGaWVsZCgndGV4dCcpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZUZpZWxkKCdwYXNzd29yZCcpXHJcbiAgICBjb25zdCByZVBhc3N3b3JkID0gdXNlRmllbGQoJ3Bhc3N3b3JkJylcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlRmllbGQoJ2VtYWlsJylcclxuICAgIGNvbnN0IHJlZmVyZW5jZUxpbmsgPSB1c2VGaWVsZCgndXJsJylcclxuXHJcbiAgICBjb25zdCBvbkVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW5lZE1lc3NhZ2UgPSBlLm1lc3NhZ2VcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpXHJcbiAgICAgICAgaWYgKGNsZWFuZWRNZXNzYWdlLmluY2x1ZGVzKCd1c2VybmFtZScpKSBjbGVhbmVkTWVzc2FnZSA9IGB1c2VybmFtZSQ6ICR7dXNlcm5hbWUuZmllbGRzLnZhbHVlfSBpcyBhbHJlYWR5IGJlaW5nIHVzZWRgXHJcbiAgICAgICAgaWYgKGNsZWFuZWRNZXNzYWdlLmluY2x1ZGVzKCdyZWZlcmVuY2VMaW5rJykpIGNsZWFuZWRNZXNzYWdlID0gYHJlZmVyZW5jZSBsaW5rJDogJHtyZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIGlmIChjbGVhbmVkTWVzc2FnZS5pbmNsdWRlcygnZW1haWwnKSkgY2xlYW5lZE1lc3NhZ2UgPSBgZW1haWwkOiAke2VtYWlsLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGNsZWFuZWRNZXNzYWdlLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIH1cclxuICAgIGNvbnN0IG9uTG9naW5FcnJvciA9IChlKSA9PiBjb25zb2xlLmxvZyhlKVxyXG5cclxuICAgIGNvbnN0IFtyZWdpc3Rlck11dGF0aW9uXSA9IHVzZU11dGF0aW9uKENSRUFURV9VU0VSLCB7IG9uRXJyb3IgfSlcclxuICAgIGNvbnN0IFtsb2dpbk11dGF0aW9uXSA9IHVzZU11dGF0aW9uKExPR0lOLCB7b25FcnJvcjogb25Mb2dpbkVycm9yfSlcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtYml0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAocGFzc3dvcmQuZmllbGRzLnZhbHVlICE9PSByZVBhc3N3b3JkLmZpZWxkcy52YWx1ZSkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAncGFzc3dvcmQkOiBwYXNzd29yZCBhbmQgcmUtcGFzc3dvcmQgZGlkIG5vdCBtYXRjaCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXVzZXJuYW1lLmZpZWxkcy52YWx1ZS5sZW5ndGggfHwgIXBhc3N3b3JkLmZpZWxkcy52YWx1ZS5sZW5ndGggfHwgIXJlUGFzc3dvcmQuZmllbGRzLnZhbHVlLmxlbmd0aCB8fCAhcmVmZXJlbmNlTGluay5maWVsZHMudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsICdhbGwkOiBhbGwgZmllbGRzIG11c3QgYmUgZmlsbGVkJywgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlZ2lzdGVyTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTGluazogcmVmZXJlbmNlTGluay5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmNoYW5nZU1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VNZW51SXRlbShudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzdWx0ID0gYXdhaXQgbG9naW5NdXRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC5maWVsZHMudmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2dpblJlc3VsdC5kYXRhLmxvZ2luLnZhbHVlXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB1c2VybmFtZS5maWVsZHMudmFsdWUpXHJcbiAgICAgICAgICAgIHByb3BzLnNldFRva2VuKHRva2VuKVxyXG4gICAgICAgICAgICB1c2VybmFtZS5yZXNldCgpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLnJlc2V0KClcclxuICAgICAgICAgICAgcmVQYXNzd29yZC5yZXNldCgpXHJcbiAgICAgICAgICAgIGVtYWlsLnJlc2V0KClcclxuICAgICAgICAgICAgcmVmZXJlbmNlTGluay5yZXNldCgpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsICdyZWdpc3RlcmVkJDogYWNjb3VudCBzdWNjZXNzZnVsbHkgY3JlYXRlZC4gc2lnbmluZyB5b3UgaW4gbm93LicsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25TdWNjZXNzKClcclxuICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiZ1N0eWxlID0gcHJvcHMubm9CRyA/IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyODI4J30gOiBudWxsXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIudXNlckZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDI+cmVnaXN0ZXI8L2gyPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1VSLnVzZXJGb3JtfSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1bWJpdChlKX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS11c2VybmFtZVwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInVzZXJuYW1lXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi51c2VybmFtZS5maWVsZHN9IGlkPVwiU0ktdXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJwYXNzd29yZFwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucGFzc3dvcmQuZmllbGRzfSBpZD1cIlNJLXBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXJlUGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJyZS10eXBlIHBhc3N3b3JkXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5yZVBhc3N3b3JkLmZpZWxkc30gaWQ9XCJTSS1yZVBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1lbWFpbFwiIGluZm89e3RydWV9IHRpdGxlPVwiZW1haWxcIiBjb2xvcj1cImRhcmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51bnRpbGwgZnVydGhlciBwb2xpY3kgY2hhbmdlcyBubyBlbWFpbHMgYXJlIHNlbnQgeW91ciB3YXk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+b25seSBzaG93biB0byB1c2VycyB3aG8geW91IGFjY2VwdCBhZnRlciBjb250YWN0aW5nIHlvdSBkaXJlY3RseSAobm90IHRocm91Z2ggcG9zdCk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLmVtYWlsLmZpZWxkc30gaWQ9XCJTSS1lbWFpbFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcmVmZXJlbmNlTGlua1wiIGluZm89e3RydWV9IHRpdGxlPVwicmVzdW1lIGxpbmtcIiBjb2xvcj1cImRhcmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW46IDAsIG1hcmdpbkJvdHRvbTogJzVweCd9fT5saW5rIG9uIHlvdXIgdXNlciBwYWdlIHVzZWQgYXMgYSByZXN1bWUgdG8gZGVtb25zdHJhdGUgeW91ciBhYmlsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luOiAwLCBtYXJnaW5Cb3R0b206ICc1cHgnfX0+PHN0cm9uZz5hbHdheXMgdmlldyBhbm90aGVyIHVzZXJzIHBvcnRhZm9saW8gbGluayBiZWZvcmUgd29ya2luZyB3aXRoIHRoZW08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5zaXRlcyByZWNvbW1lbmRlZDogPHN0cm9uZz5MaW5rZWRJbjwvc3Ryb25nPiwgPHN0cm9uZz5JbmRlZWQ8L3N0cm9uZz4sIDxzdHJvbmc+R2l0SHViPC9zdHJvbmc+LCBvciA8c3Ryb25nPkZhY2Vib29rPC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnRvIGZ1cnRoZXIgZW5zdXJlIHlvdXIgcG9ydGFmb2xpbyBsaW5rIGlzIHRydXN0d29ydGh5LCBsaW5rIHlvdXIgVW5pbG91cyBhY2NvdXQgZnJvbSB5b3VyIHBvcnRhZm9saW8gbGluazwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucmVmZXJlbmNlTGluay5maWVsZHN9IGlkPVwiU0ktcmVmZXJlbmNlTGlua1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17VVIuVUZTdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj48aDM+cmVnaXN0ZXI8L2gzPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGwsXHJcbiAgICB7IHNldEFsZXJ0LCByZXNldEFsZXJ0LCBzZXRUb2tlbiB9XHJcbikoUmVnaXN0ZXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgTE9HSU4gfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgdXNlRmllbGQsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCBJbnB1dEhlYWRlciBmcm9tICcuLi8uLi90ZXh0LWZpZWxkL0lucHV0SGVhZGVyJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB1c2VGaWVsZCgncGFzc3dvcmQnKVxyXG5cclxuICAgIGNvbnN0IG9uRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBjbGVhbmVkTWVzc2FnZSA9IGUubWVzc2FnZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNsZWFuZWRNZXNzYWdlKVxyXG4gICAgICAgIGNsZWFuZWRNZXNzYWdlID0gY2xlYW5lZE1lc3NhZ2Uuc3BsaXQoJzonKVxyXG4gICAgICAgIGNsZWFuZWRNZXNzYWdlID0gY2xlYW5lZE1lc3NhZ2Uuc2xpY2UoMSwgY2xlYW5lZE1lc3NhZ2UubGVuZ3RoKS5qb2luKCckOicpXHJcbiAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgY2xlYW5lZE1lc3NhZ2UsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3NpZ25Jbk11dGF0aW9uXSA9IHVzZU11dGF0aW9uKExPR0lOLCB7IG9uRXJyb3IgfSlcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtYml0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW5NdXRhdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC5maWVsZHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuY2hhbmdlTWVudUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZU1lbnVJdGVtKG51bGwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXN1bHQuZGF0YS5sb2dpbi52YWx1ZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUuZmllbGRzLnZhbHVlKVxyXG4gICAgICAgICAgICB1c2VybmFtZS5yZXNldCgpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLnJlc2V0KClcclxuICAgICAgICAgICAgcHJvcHMuc2V0VG9rZW4odG9rZW4pXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vblN1Y2Nlc3MoKVxyXG4gICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJnU3R5bGUgPSBwcm9wcy5ub0JHID8ge2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfSA6IG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyRm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMj5zaWduIGluPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtVUi51c2VyRm9ybX0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdW1iaXQoZSl9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktdXNlcm5hbWVcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJ1c2VybmFtZVwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4udXNlcm5hbWUuZmllbGRzfSBpZD1cIlNJLXVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXBhc3N3b3JkXCIgaW5mbz17ZmFsc2V9IHRpdGxlPVwicGFzc3dvcmRcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnBhc3N3b3JkLmZpZWxkc30gaWQ9XCJTSS1wYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17VVIuVUZTdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj48aDM+c2lnbiBpbjwvaDM+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vIFx0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy8gXHR9XHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGwsXHJcbiAgICB7IHNldFRva2VuLCBzZXRBbGVydCwgcmVzZXRBbGVydCB9XHJcbikoU2lnbkluKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQb3N0U21hbGwgZnJvbSAnLi4vLi4vcG9zdC9Qb3N0U21hbGwnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgQUNDRVBUX05PVElGSUNBVElPTiwgREVDTElORV9OT1RJRklDQVRJT04sIEFOU1dFUl9RVUVTVElPTiB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgeyB1c2VGaWVsZCwgd2Vic2l0ZVN0YXRzLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5cclxuY29uc3QgTm90aWYgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFthY2NlcHROb3RpZl0gPSB1c2VNdXRhdGlvbihBQ0NFUFRfTk9USUZJQ0FUSU9OLCB7XHJcbiAgICAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIH0pXHJcbiAgICBjb25zdCBbZGVjbGluZU5vdGlmXSA9IHVzZU11dGF0aW9uKERFQ0xJTkVfTk9USUZJQ0FUSU9OLCB7XHJcbiAgICAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIH0pXHJcbiAgICBjb25zdCBbYW5zd2VyUXVlc3Rpb25dID0gdXNlTXV0YXRpb24oQU5TV0VSX1FVRVNUSU9OLCB7XHJcbiAgICAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgYW5zd2VyID0gdXNlRmllbGQoJ3RleHQnKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFuc3dlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhbnN3ZXJRdWVzdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uSWQ6IHByb3BzLm5vdGlmLl9pZCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBhbnN3ZXIuZmllbGRzLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQgPT09IHByb3BzLm5vdGlmLl9pZCA/IHJlc3VsdC5kYXRhLmFuc3dlclF1ZXN0aW9uIDogbilcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5ld05vdGlmaWNhdGlvbnMpXHJcbiAgICAgICAgICAgIGFuc3dlci5yZXNldCgpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsIGByZXBsaWVkJDogeW91IGhhdmUgcmVwbGllZCB0byAke3Byb3BzLm5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfSdzIHF1ZXN0aW9uYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVBY2NlcHQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWNjZXB0ID0gYXdhaXQgYWNjZXB0Tm90aWYoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25JZDogcHJvcHMubm90aWYuX2lkfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGFjY2VwdCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb25zID0gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCA9PT0gcHJvcHMubm90aWYuX2lkID8gYWNjZXB0LmRhdGEuYWNjZXB0Tm90aWZpY2F0aW9uIDogbilcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5ld05vdGlmaWNhdGlvbnMpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsIGBhY2NlcHRlZCQ6IHlvdSBoYXZlIGFjY2VwdGVkICR7cHJvcHMubm90aWYudXNlckZyb20udXNlcm5hbWV9IHRvIHlvdXIgdGVhbWAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURlY2xpbmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVjbGluZSA9IGF3YWl0IGRlY2xpbmVOb3RpZih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbklkOiBwcm9wcy5ub3RpZi5faWR9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKGRlY2xpbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQgPT09IHByb3BzLm5vdGlmLl9pZCA/IGRlY2xpbmUuZGF0YS5kZWNsaW5lTm90aWZpY2F0aW9uIDogbilcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5ld05vdGlmaWNhdGlvbnMpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnZGFuZ2VyJywgYGRlY2xpbmVkJDogeW91IGhhdmUgZGVjbGluZWQgJHtwcm9wcy5ub3RpZi51c2VyRnJvbS51c2VybmFtZX0ncyByZXF1ZXN0IHRvIGpvaW5gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG5vdGlmID0gcHJvcHMubm90aWZcclxuICAgIGNvbnN0IG5vdGlmU3RhdHVzQ29sb3IgPSBub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCA/IFxyXG4gICAgICAgICdyZ2IoMjI2LDE4NCw1OSknIDpcclxuICAgICAgICBub3RpZi5hY2NlcHRlZCA/XHJcbiAgICAgICAgICAgIG5vdGlmLnBvc3QgP1xyXG4gICAgICAgICAgICAgICAgJ3JnYig1MiwxNjYsOTUpJyA6ICcjOGI4YjhiJyBcclxuICAgICAgICAgICAgOiAncmdiKDI1NCw1Miw3NyknXHJcbiAgICBpZiAobm90aWYudXNlckZyb20udXNlcm5hbWUgPT09IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lKXtcclxuICAgICAgICBpZiAobm90aWYuYWNjZXB0ZWQpIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5hbnN3ZXJlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYuYW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vdGlmLnBvc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IEdDTGlua1N0YXRzID0gd2Vic2l0ZVN0YXRzKG5vdGlmLnBvc3QuY29udGFjdExpbmspXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkTGluayA9IG5vdGlmLnBvc3QuY29udGFjdExpbmsuc3BsaXQoJy8nKVsyXVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+Z3JvdXAvY29udGFjdCBsaW5rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e25vdGlmLnBvc3QuY29udGFjdExpbmt9IGNsYXNzTmFtZT1cIm4tam9pbi1saW5rIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogR0NMaW5rU3RhdHMuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17R0NMaW5rU3RhdHMuaWNvbn0gY2xhc3NOYW1lPVwibi1KTC1pY29uXCIgYWx0PXtHQ0xpbmtTdGF0cy50aXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y2xlYW5lZExpbmt9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgbWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pm1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm90aWYuYWNjZXB0ZWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChub3RpZi5hY2NlcHRlZCkge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5hbnN3ZXJlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYuYW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vdGlmLnBvc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IEdDTGlua1N0YXRzID0gd2Vic2l0ZVN0YXRzKG5vdGlmLnBvc3QuY29udGFjdExpbmspXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkTGluayA9IG5vdGlmLnBvc3QuY29udGFjdExpbmsuc3BsaXQoJy8nKVsyXVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnNlbnQgZ3JvdXAvY29udGFjdCBsaW5rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e25vdGlmLnBvc3QuY29udGFjdExpbmt9IGNsYXNzTmFtZT1cIm4tam9pbi1saW5rIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogR0NMaW5rU3RhdHMuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17R0NMaW5rU3RhdHMuaWNvbn0gY2xhc3NOYW1lPVwibi1KTC1pY29uXCIgYWx0PXtHQ0xpbmtTdGF0cy50aXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y2xlYW5lZExpbmt9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIG1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5tZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLXJlcGx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiPnJlcGx5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJuLW5vdGlmLXJlcGx5LWZpZWxkXCIgey4uLmFuc3dlci5maWVsZHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBbnN3ZXIoKX0gY2xhc3NOYW1lPVwibi1Bb0Qtb3B0aW9uIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYig1MiwxNjYsOTUpJ319PmFuc3dlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+YWNjZXB0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLUFvRFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2xpbmUoKX0gY2xhc3NOYW1lPVwibi1Bb0Qtb3B0aW9uIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYigyNTQsNTIsNzcpJ319PmRlY2xpbmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjY2VwdCgpfSBjbGFzc05hbWU9XCJuLUFvRC1vcHRpb24gbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiKDUyLDE2Niw5NSknfX0+YWNjZXB0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtub3RpZi51c2VyVG8udXNlcm5hbWV9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5tZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfVxyXG4pKE5vdGlmKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgTElTVF9PRl9OT1RJRklDQVRJT05TIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgTm90aWYgZnJvbSAnLi9Ob3RpZidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vTG9hZGluZydcclxuaW1wb3J0IGFwb2xsbywge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vLi4vLi4vbGliL2Fwb2xsbydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgVVUgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlclV0aWxpdGllcy5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcblxyXG5jb25zdCBVc2VyTm90aWZMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3RRdWVyeSA9IHVzZVF1ZXJ5KExJU1RfT0ZfTk9USUZJQ0FUSU9OUywge1xyXG4gICAgLy8gICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbnM6IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQpfVxyXG4gICAgLy8gfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKG5vdGlmc0xpc3RRdWVyeSlcclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3RRdWVyeSA9IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAvLyAgICAgcXVlcnk6IExJU1RfT0ZfTk9USUZJQ0FUSU9OUyxcclxuICAgIC8vICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25zOiBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkKX1cclxuICAgIC8vIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxuICAgIGNvbnN0IFtzZW50RmlsdGVyLCBzZXRTZW50RmlsdGVyXSA9IHVzZVN0YXRlKCd0byB5b3UnKVxyXG4gICAgY29uc3QgW3Nob3dTRkRELCBzZXRTaG93U0ZERF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdGF0dXNGaWx0ZXIsIHNldFN0YXR1c0ZpbHRlcl0gPSB1c2VTdGF0ZSgncGVuZGluZycpXHJcbiAgICBjb25zdCBbc2hvd1N0YXR1c0RELCBzZXRTaG93U3RhdHVzRERdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdENvbmRpdGlvbnMgPSAocXVlcnksIHJlZHVjZXIpID0+IHtcclxuICAgIC8vICAgICBpZiAoIXF1ZXJ5KSB7IHJldHVybiBudWxsIH1cclxuICAgIC8vICAgICBpZiAocmVkdWNlci5sZW5ndGggPT09IDApIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgLy8gICAgIGlmIChyZWR1Y2VyWzBdLnVzZXJUbykge1xyXG4gICAgLy8gICAgICAgICBpZiAocXVlcnkuX2lkID09PSByZWR1Y2VyWzBdLl9pZCApIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gcXVlcnlcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3QgPSBub3RpZnNMaXN0Q29uZGl0aW9ucyhub3RpZnNMaXN0UXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zLCBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKG5vdGlmc0xpc3QpIHtcclxuICAgIC8vICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5vdGlmc0xpc3QpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW25vdGlmc0xpc3QsIHByb3BzLCBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnNdKVxyXG5cclxuICAgIGlmIChwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnNbMF0udXNlclRvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnNXZoJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZpbHRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZW50T3B0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IFsnZnJvbSB5b3UnLCAndG8geW91J11cclxuICAgICAgICAgICAgY29uc3Qgb25PcHRpb25DbGljayA9IChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlbnRGaWx0ZXIob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd1NGREQoIXNob3dTRkREKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxPcHRpb25zLm1hcChvID0+IG8gIT09IHNlbnRGaWx0ZXIgPyA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uT3B0aW9uQ2xpY2sobyl9IGNsYXNzTmFtZT17VVUuTkZERE9wdGlvbn0ga2V5PXtgU0ZERCR7b31gfT57b308L2Rpdj4gOiBudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZW50REQgPSBzaG93U0ZERCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORnJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORlNwbGl0dGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZW50T3B0aW9ucygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk6IG51bGxcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c09wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxPcHRpb25zID0gWydhbGwnLCAnYWNjZXB0ZWQnLCAnZGVjbGluZWQnLCAncGVuZGluZycsICdtZXNzYWdlcyddXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXR1c0ZpbHRlcihvcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1N0YXR1c0REKCFzaG93U3RhdHVzREQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsT3B0aW9ucy5tYXAobyA9PiBvICE9PSBzdGF0dXNGaWx0ZXIgPyA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uT3B0aW9uQ2xpY2sobyl9IGNsYXNzTmFtZT17YCR7b30tb3B0aW9uICR7VVUuTkZERE9wdGlvbn1gfSBrZXk9e2BTdGF0dXNERCR7b31gfT57b308L2Rpdj4gOiBudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0REID0gc2hvd1N0YXR1c0REID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORkRyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GU3BsaXR0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNPcHRpb25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApOiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUubm90aWZGaWx0ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORkNyZWF0b3JDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtVVS5ORkxhYmVsfT5zdGF0dXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZPcHRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U3RhdHVzREQoIXNob3dTdGF0dXNERCl9IGNsYXNzTmFtZT17YCR7c3RhdHVzRmlsdGVyfS1vcHRpb24gJHtVVS5ORk9wdGlvbn1gfT57c3RhdHVzRmlsdGVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c0REfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORkNyZWF0b3JDb250YWluZXJ9IHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17VVUuTkZMYWJlbH0+c2VudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GT3B0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U0ZERCghc2hvd1NGREQpfSBjbGFzc05hbWU9e1VVLk5GT3B0aW9ufT57c2VudEZpbHRlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbnRERH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzQ29uZGl0aW9ucyA9IChub3RpZikgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXNGaWx0ZXIgPT09ICdhbGwnKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGNvbnN0IG5vdGlmU3RhdHVzID0gbm90aWYuYWNjZXB0ZWQgPT09IG51bGwgP1xyXG4gICAgICAgICAgICAncGVuZGluZycgOiBcclxuICAgICAgICAgICAgbm90aWYuYWNjZXB0ZWQgP1xyXG4gICAgICAgICAgICBub3RpZi5wb3N0ID9cclxuICAgICAgICAgICAgICAgICdhY2NlcHRlZCcgOiAnbWVzc2FnZXMnXHJcbiAgICAgICAgICAgIDogJ2RlY2xpbmVkJ1xyXG4gICAgICAgIGlmIChzdGF0dXNGaWx0ZXIgPT09IG5vdGlmU3RhdHVzKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VudENvbmRpdGlvbnMgPSAobm90aWYpID0+IHtcclxuICAgICAgICBpZiAoc2VudEZpbHRlciA9PT0gJ2FsbCcpIHJldHVybiB0cnVlXHJcbiAgICAgICAgY29uc3Qgc2VudFN0YXR1cyA9IG5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lID09PSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSA/XHJcbiAgICAgICAgICAgICdmcm9tIHlvdScgOiAndG8geW91J1xyXG4gICAgICAgIGlmIChzZW50RmlsdGVyID09PSBzZW50U3RhdHVzKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzQ29uZGl0aW9ucyhuKSAmJiBzZW50Q29uZGl0aW9ucyhuKSl7XHJcbiAgICAgICAgICAgIHJldHVybiA8Tm90aWYgbm90aWY9e259IGtleT17YFVOJHtuLl9pZH1gfS8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9KS5yZXZlcnNlKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyVXRpbC1ub3RpZlwiPlxyXG4gICAgICAgICAgICA8RmlsdGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxMHB4J319IC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZ3JpZCcsIHJvd0dhcDogJzEwcHgnLCB3aWR0aDogJzk1JScsIG1hcmdpbjogJ2F1dG8nLCBtYXJnaW5Ub3A6ICcxMHB4J319PlxyXG4gICAgICAgICAgICB7c2hvd05vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTBweCd9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVXNlck5vdGlmTGlzdCkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCB0cmlnZ2VyQWxlcnQgPSAodHlwZSwgbWVzc2FnZSwgc2V0QWxlcnQsIHJlc2V0QWxlcnQpID0+IHtcclxuICAgIC8vIHRyaWdnZXJBbGVydCgnd2FybmluZycsICdzdWNjZXNzOiBhbGVydCBiYXIgaXMgd29ya2luZycsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgY29uc3QgY2xlYW5lZE1lc3NhZ2UgPSA8cCBzdHlsZT17e21hcmdpbjogMH19PjxzdHJvbmc+e21lc3NhZ2Uuc3BsaXQoJyQ6JylbMF19PC9zdHJvbmc+OiB7bWVzc2FnZS5zcGxpdCgnJDonKVsxXX08L3A+XHJcbiAgICBpZiAodHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoe2NvbG9yOiAncmdiKDUyLDE2Niw5NSknLCB0ZXh0Q29sb3I6ICd3aGl0ZScsIG1lc3NhZ2U6IGNsZWFuZWRNZXNzYWdlfSlcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnd2FybmluZycpIHtcclxuICAgICAgICBzZXRBbGVydCh7Y29sb3I6ICdyZ2IoMjI2LDE4NCw1OSknLCB0ZXh0Q29sb3I6ICd3aGl0ZScsIG1lc3NhZ2U6IGNsZWFuZWRNZXNzYWdlfSlcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnZGFuZ2VyJykge1xyXG4gICAgICAgIHNldEFsZXJ0KHtjb2xvcjogJ3JnYigyNTQsNTIsNzcpJywgdGV4dENvbG9yOiAnd2hpdGUnLCBtZXNzYWdlOiBjbGVhbmVkTWVzc2FnZX0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3ZWJzaXRlU3RhdHMgPSAodXJsKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydCA9IHVybC5zcGxpdCgnLycpWzJdID8gdXJsLnNwbGl0KCcvJylbMl0gOiAnJ1xyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCd1bmlsb3VzJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL2xvZ28vbG9nb1cuc3ZnJywgY29sb3I6ICcjMjgyODI4JywgdGl0bGU6ICdVbmlsb3VzJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnZGlzY29yZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9kaXNjb3JkLnN2ZycsIGNvbG9yOiAnIzcyODlEQScsIHRpdGxlOiAnRGlzY29yZCd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3RyZWxsbycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy90cmVsbG8uc3ZnJywgY29sb3I6ICcjMDA3OUJGJywgdGl0bGU6ICdUcmVsbG8nfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCd3aGF0c2FwcCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy93aGF0c2FwcC5zdmcnLCBjb2xvcjogJyMyNUQzNjYnLCB0aXRsZTogJ1doYXRzQXBwJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnbW9uZGF5JykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICdodHRwczovL2kuaW1ndXIuY29tL2JnYVFaYzkucG5nJywgY29sb3I6ICcjMzMzMzMzJywgdGl0bGU6ICdNb25kYXknfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdzbGFjaycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9zbGFjay5zdmcnLCBjb2xvcjogJyM0QTE1NEInLCB0aXRsZTogJ1NsYWNrJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnbGlua2VkaW4nKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvbGlua2VkaW4uc3ZnJywgY29sb3I6ICdyZ2IoNDAsMTAzLDE3OCknLCB0aXRsZTogJ0xpbmtlZEluJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnZmFjZWJvb2snKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvZmFjZWJvb2suc3ZnJywgY29sb3I6ICdyZ2IoNjYsMTAzLDE3OCknLCB0aXRsZTogJ0ZhY2Vib29rJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnaW5kZWVkJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICdodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cHMlM0ElMkYlMkZnb2hpcmUtd2Vic2l0ZS5zMy5hbWF6b25hd3MuY29tJTJGaW1nJTJGaW50ZWdyYXRpb24tbG9nb3MlMkZpbmRlZWQtaWNvbi5qcGcmZj0xJm5vZmI9MScsIGNvbG9yOiAnIzI4MjgyOCcsIHRpdGxlOiAnSW5kZWVkJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnZ2l0aHViJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2dpdEh1Yi5zdmcnLCBjb2xvcjogJyMzMzMnLCB0aXRsZTogJ0dpdEh1Yid9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2ludGVybmV0LnN2ZycsIGNvbG9yOiAnIzQ4NDg0OCcsdGl0bGU6ICd1bmtub3duIHVybCd9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGaWVsZCA9ICh0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBvbkNoYW5nZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhbGxldHRlR2VuZXJhdG9yID0gKHByaW1hcnlDb2xvcikgPT4ge1xyXG4gICAgY29uc3QgY29sb3IgPSBwcmltYXJ5Q29sb3JcclxuICAgIGNvbnN0IGNvbG9ycyA9IGNvbG9yLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcChjID0+IE51bWJlcihjKSlcclxuICAgIGNvbnN0IGhpZ2hlckNvbG9yID0gYHJnYigke2NvbG9ycy5tYXAoYyA9PiBjICsgMzApLmpvaW4oJywnKX0pYFxyXG4gICAgbGV0IGlzRGFyayA9ICgoY29sb3JzWzBdICsgY29sb3JzWzFdICsgY29sb3JzWzJdKSAvIDMpIDwgMTI3ID9cclxuICAgICAgICB0cnVlIDogZmFsc2VcclxuICAgIC8vIGNvbnN0IGlzRGFyayA9IGZhbHNlXHJcbiAgICBjb25zdCBjb2xvclBhbGxldHRlID0gaXNEYXJrID8gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICBoaWdoZXJDb2xvcixcclxuICAgICAgICAgICAgLy8gdXNlckljb246IHVzZXJJY29uVyxcclxuICAgICAgICAgICAgLy8gaGFuZHNoYWtlSWNvbjogaGFuZHNoYWtlSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHBsdXNJY29uOiBwbHVzSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHNoYXJlSWNvbjogc2hhcmVJY29uVyxcclxuICAgICAgICAgICAgLy8gc2hyaW5rSWNvbjogc2hyaW5rVyxcclxuICAgICAgICAgICAgLy8gY29sb3JlZDoge1xyXG4gICAgICAgICAgICAvLyAgICAgaGVhcnRJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjggNTEyLjAwMDAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQ3MS4zODI4MTIgNDQuNTc4MTI1Yy0yNi41MDM5MDYtMjguNzQ2MDk0LTYyLjg3MTA5My00NC41NzgxMjUtMTAyLjQxMDE1Ni00NC41NzgxMjUtMjkuNTU0Njg3IDAtNTYuNjIxMDk0IDkuMzQzNzUtODAuNDQ5MjE4IDI3Ljc2OTUzMS0xMi4wMjM0MzggOS4zMDA3ODEtMjIuOTE3OTY5IDIwLjY3OTY4OC0zMi41MjM0MzggMzMuOTYwOTM4LTkuNjAxNTYyLTEzLjI3NzM0NC0yMC41LTI0LjY2MDE1Ny0zMi41MjczNDQtMzMuOTYwOTM4LTIzLjgyNDIxOC0xOC40MjU3ODEtNTAuODkwNjI1LTI3Ljc2OTUzMS04MC40NDUzMTItMjcuNzY5NTMxLTM5LjUzOTA2MyAwLTc1LjkxMDE1NiAxNS44MzIwMzEtMTAyLjQxNDA2MyA0NC41NzgxMjUtMjYuMTg3NSAyOC40MTAxNTYtNDAuNjEzMjgxIDY3LjIyMjY1Ni00MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MSAxNi4xMzY3MTkgODIuOTM3NSA1MC43ODEyNSAxMjQuNzQyMTg3IDMwLjk5MjE4OCAzNy4zOTQ1MzEgNzUuNTM1MTU2IDc1LjM1NTQ2OSAxMjcuMTE3MTg4IDExOS4zMTI1IDE3LjYxMzI4MSAxNS4wMTE3MTkgMzcuNTc4MTI0IDMyLjAyNzM0NCA1OC4zMDg1OTMgNTAuMTUyMzQ0IDUuNDc2NTYzIDQuNzk2ODc1IDEyLjUwMzkwNyA3LjQzNzUgMTkuNzkyOTY5IDcuNDM3NSA3LjI4NTE1NiAwIDE0LjMxNjQwNi0yLjY0MDYyNSAxOS43ODUxNTYtNy40Mjk2ODcgMjAuNzMwNDY5LTE4LjEyODkwNyA0MC43MDcwMzItMzUuMTUyMzQ0IDU4LjMyODEyNS01MC4xNzE4NzYgNTEuNTc0MjE5LTQzLjk0OTIxOCA5Ni4xMTcxODgtODEuOTA2MjUgMTI3LjEwOTM3NS0xMTkuMzA0Njg3IDM0LjY0NDUzMi00MS44MDA3ODEgNTAuNzc3MzQ0LTgxLjQzNzUgNTAuNzc3MzQ0LTEyNC43NDIxODcgMC00Mi4wNjY0MDctMTQuNDI1NzgxLTgwLjg3ODkwNy00MC42MTcxODgtMTA5LjI4OTA2M3ptMCAwXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gICAgIHNoYXJlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gdmlld0JveD1cIjAgLTIyIDUxMiA1MTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm01MTIgMjMzLjgyMDMxMi0yMTIuNzc3MzQ0LTIzMy4zMjAzMTJ2MTM5LjIwMzEyNWgtNDUuMjM4MjgxYy0xNDAuMjczNDM3IDAtMjUzLjk4NDM3NSAxMTMuNzEwOTM3LTI1My45ODQzNzUgMjUzLjk4NDM3NXY3My43Njk1MzFsMjAuMDkzNzUtMjIuMDE5NTMxYzY4LjMxNjQwNi03NC44NTE1NjIgMTY0Ljk4MDQ2OS0xMTcuNSAyNjYuMzI0MjE5LTExNy41aDEyLjgwNDY4N3YxMzkuMjAzMTI1em0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgaGFuZHNoYWtlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnPjxwYXRoIGQ9XCJtMzg2LjE1OCA4LjczM2MtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0zNi40NzggMzYuNDc4Yy0xOS45MjMtMTAuNzY5LTQ1LjM4Ni03Ljc0OC02Mi4xOTkgOS4wNjVsLTY5LjQxNiA2OS40MTZjLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDBsMjUuMDktMjUuMDljMzguOTEyIDMyLjQ0OCA5Mi4yNzMgNDIuNiAxNDAuNTkxIDI2LjI1Mmw2Ni44MiA2Ni44MmM4LjM3Ni0xOC4xOTIgNS44MzQtNDAuMjE2LTcuNjUtNTYuMDY5bDM1LjA1OC0zNS4wNThjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzLS4xMDEtLjEwMS0uMjExLS4xODctLjMxNS0uMjg0bC4wMTUtLjAxNXpcIi8+PHBhdGggZD1cIm0yNzYuNDU5IDQwMC4wMTFjLTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ2IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMGwtNDYuMjcyIDQ2LjI3MmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGw0Ni4yNzItNDYuMjcyYzE0LjA0NC0xNC4wNDMgMTQuMDQ0LTM2LjgwNy4wMDMtNTAuODQ4elwiLz48cGF0aCBkPVwibTI3Ni4xNiAxODguNTA0LTcuMjQ4IDcuMjQ4Yy0yNS43MTUgMjUuNzE1LTY3LjU1OCAyNS43MTUtOTMuMjczIDBzLTI1LjcxNS02Ny41NTggMC05My4yNzNsNTcuNTE0LTU3LjUxNGMtMTYuMTU3LTYuMTg4LTM0LjU0Ny00Ljg5MS00OS43NjggMy44OTJsLTM2LjMyOS0zNi4zMjljLTUuODU4LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMTIxLjQ1IDEyMS40NDljLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxM2wzNi4zMjkgMzYuMzI5Yy04Ljc4MyAxNS4yMjEtMTAuMDggMzMuNjExLTMuODkyIDQ5Ljc2OGwxNS4wMjktMTUuMDI5YzI1LjcxNS0yNS43MTUgNjcuNTU4LTI1LjcxNSA5My4yNzMgMCA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NHMxNS4zMTQgMjAuODk1IDE3Ljg1NCAzMi45OTNjMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1MyA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NCAyNS43MTUgMjUuNzE1IDI1LjcxNSA2Ny41NTggMCA5My4yNzNsLTE4LjU2MiAxOC41NjIgNi40OTcgNi40OTdjMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0N2wtODQuNDc1LTg0LjQ3NWMtNDMuOTk2IDkuNzA3LTg5Ljk5MiAyLjA5Ny0xMjguMzU4LTIwLjc2MXpcIi8+PC9nPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICA6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICcjMjgyODI4JyxcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIGhpZ2hlckNvbG9yLFxyXG4gICAgICAgICAgICAvLyB1c2VySWNvbjogdXNlckljb25CLFxyXG4gICAgICAgICAgICAvLyBoYW5kc2hha2VJY29uOiBoYW5kc2hha2VJY29uQixcclxuICAgICAgICAgICAgLy8gcGx1c0ljb246IHBsdXNJY29uQixcclxuICAgICAgICAgICAgLy8gc2hhcmVJY29uOiBzaGFyZUljb25CLFxyXG4gICAgICAgICAgICAvLyBzaHJpbmtJY29uOiBzaHJpbmtCLFxyXG4gICAgICAgICAgICAvLyBjb2xvcmVkOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBoZWFydEljb246IDxzdmcgZmlsbD17Y29sb3J9IHZpZXdCb3g9XCIwIC0yOCA1MTIuMDAwMDIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNDcxLjM4MjgxMiA0NC41NzgxMjVjLTI2LjUwMzkwNi0yOC43NDYwOTQtNjIuODcxMDkzLTQ0LjU3ODEyNS0xMDIuNDEwMTU2LTQ0LjU3ODEyNS0yOS41NTQ2ODcgMC01Ni42MjEwOTQgOS4zNDM3NS04MC40NDkyMTggMjcuNzY5NTMxLTEyLjAyMzQzOCA5LjMwMDc4MS0yMi45MTc5NjkgMjAuNjc5Njg4LTMyLjUyMzQzOCAzMy45NjA5MzgtOS42MDE1NjItMTMuMjc3MzQ0LTIwLjUtMjQuNjYwMTU3LTMyLjUyNzM0NC0zMy45NjA5MzgtMjMuODI0MjE4LTE4LjQyNTc4MS01MC44OTA2MjUtMjcuNzY5NTMxLTgwLjQ0NTMxMi0yNy43Njk1MzEtMzkuNTM5MDYzIDAtNzUuOTEwMTU2IDE1LjgzMjAzMS0xMDIuNDE0MDYzIDQ0LjU3ODEyNS0yNi4xODc1IDI4LjQxMDE1Ni00MC42MTMyODEgNjcuMjIyNjU2LTQwLjYxMzI4MSAxMDkuMjkyOTY5IDAgNDMuMzAwNzgxIDE2LjEzNjcxOSA4Mi45Mzc1IDUwLjc4MTI1IDEyNC43NDIxODcgMzAuOTkyMTg4IDM3LjM5NDUzMSA3NS41MzUxNTYgNzUuMzU1NDY5IDEyNy4xMTcxODggMTE5LjMxMjUgMTcuNjEzMjgxIDE1LjAxMTcxOSAzNy41NzgxMjQgMzIuMDI3MzQ0IDU4LjMwODU5MyA1MC4xNTIzNDQgNS40NzY1NjMgNC43OTY4NzUgMTIuNTAzOTA3IDcuNDM3NSAxOS43OTI5NjkgNy40Mzc1IDcuMjg1MTU2IDAgMTQuMzE2NDA2LTIuNjQwNjI1IDE5Ljc4NTE1Ni03LjQyOTY4NyAyMC43MzA0NjktMTguMTI4OTA3IDQwLjcwNzAzMi0zNS4xNTIzNDQgNTguMzI4MTI1LTUwLjE3MTg3NiA1MS41NzQyMTktNDMuOTQ5MjE4IDk2LjExNzE4OC04MS45MDYyNSAxMjcuMTA5Mzc1LTExOS4zMDQ2ODcgMzQuNjQ0NTMyLTQxLjgwMDc4MSA1MC43NzczNDQtODEuNDM3NSA1MC43NzczNDQtMTI0Ljc0MjE4NyAwLTQyLjA2NjQwNy0xNC40MjU3ODEtODAuODc4OTA3LTQwLjYxNzE4OC0xMDkuMjg5MDYzem0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgc2hhcmVJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjIgNTEyIDUxMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTUxMiAyMzMuODIwMzEyLTIxMi43NzczNDQtMjMzLjMyMDMxMnYxMzkuMjAzMTI1aC00NS4yMzgyODFjLTE0MC4yNzM0MzcgMC0yNTMuOTg0Mzc1IDExMy43MTA5MzctMjUzLjk4NDM3NSAyNTMuOTg0Mzc1djczLjc2OTUzMWwyMC4wOTM3NS0yMi4wMTk1MzFjNjguMzE2NDA2LTc0Ljg1MTU2MiAxNjQuOTgwNDY5LTExNy41IDI2Ni4zMjQyMTktMTE3LjVoMTIuODA0Njg3djEzOS4yMDMxMjV6bTAgMFwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vICAgICBoYW5kc2hha2VJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSBpZD1cIkNhcGFfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGc+PHBhdGggZD1cIm0zODYuMTU4IDguNzMzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTM2LjQ3OCAzNi40NzhjLTE5LjkyMy0xMC43NjktNDUuMzg2LTcuNzQ4LTYyLjE5OSA5LjA2NWwtNjkuNDE2IDY5LjQxNmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGwyNS4wOS0yNS4wOWMzOC45MTIgMzIuNDQ4IDkyLjI3MyA0Mi42IDE0MC41OTEgMjYuMjUybDY2LjgyIDY2LjgyYzguMzc2LTE4LjE5MiA1LjgzNC00MC4yMTYtNy42NS01Ni4wNjlsMzUuMDU4LTM1LjA1OGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTMtLjEwMS0uMTAxLS4yMTEtLjE4Ny0uMzE1LS4yODRsLjAxNS0uMDE1elwiLz48cGF0aCBkPVwibTI3Ni40NTkgNDAwLjAxMWMtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDYgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwbC00Ni4yNzIgNDYuMjcyYy0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwbDQ2LjI3Mi00Ni4yNzJjMTQuMDQ0LTE0LjA0MyAxNC4wNDQtMzYuODA3LjAwMy01MC44NDh6XCIvPjxwYXRoIGQ9XCJtMjc2LjE2IDE4OC41MDQtNy4yNDggNy4yNDhjLTI1LjcxNSAyNS43MTUtNjcuNTU4IDI1LjcxNS05My4yNzMgMHMtMjUuNzE1LTY3LjU1OCAwLTkzLjI3M2w1Ny41MTQtNTcuNTE0Yy0xNi4xNTctNi4xODgtMzQuNTQ3LTQuODkxLTQ5Ljc2OCAzLjg5MmwtMzYuMzI5LTM2LjMyOWMtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0xMjEuNDUgMTIxLjQ0OWMtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzbDM2LjMyOSAzNi4zMjljLTguNzgzIDE1LjIyMS0xMC4wOCAzMy42MTEtMy44OTIgNDkuNzY4bDE1LjAyOS0xNS4wMjljMjUuNzE1LTI1LjcxNSA2Ny41NTgtMjUuNzE1IDkzLjI3MyAwIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0czE1LjMxNCAyMC44OTUgMTcuODU0IDMyLjk5M2MxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODUzIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0IDI1LjcxNSAyNS43MTUgMjUuNzE1IDY3LjU1OCAwIDkzLjI3M2wtMTguNTYyIDE4LjU2MiA2LjQ5NyA2LjQ5N2MxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3bC04NC40NzUtODQuNDc1Yy00My45OTYgOS43MDctODkuOTkyIDIuMDk3LTEyOC4zNTgtMjAuNzYxelwiLz48L2c+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb2xvclBhbGxldHRlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIm5leHQtYXBvbGxvXCJcclxuLy8gaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIlxyXG5cclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCdcclxuaW1wb3J0IHsgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJ1xyXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5J1xyXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCdcclxuLy8gaHR0cHM6Ly91bmlsb3VzLWdyYXBocWwtYmFja2VuZC5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuXHJcbi8vIGh0dHBzOi8vdW5pbG91cy1iYWNrLWVuZC1kZXYuaGVyb2t1YXBwLmNvbS9ncmFwaHFsXHJcbi8vIGh0dHBzOi8vcHJvamVjdHUtYmFjay1lbmQtMjAyMC5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuLy8gaHR0cHM6Ly91bmlsb3VzLWJhY2stZW5kLW5leHRqcy5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuXHJcbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xyXG4gIHVyaTogJ2h0dHBzOi8vdW5pbG91cy1iYWNrLWVuZC1uZXh0anMuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJyxcclxufSlcclxuXHJcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcclxuICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYFVuaWxvdXMqMjAwMCAke3Rva2VufWAgOiBudWxsLFxyXG4gICAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pXHJcblxyXG4vLyBjb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuLy8gICB1cmk6ICdodHRwczovL3Byb2plY3R1LWJhY2stZW5kLTIwMjAuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJyxcclxuLy8gICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxuLy8gICBzc3JNb2RlOiB0cnVlXHJcbi8vIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKGFwb2xsb0NsaWVudClcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEIgZnJvbSAnLi4vLi4vc3R5bGVzL2Jsb2cubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFJ0TiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlYWN0UGFja2FnZXMgPSBgXHJcblwic2NyaXB0c1wiOiB7XHJcbiAgICBcInN0YXJ0XCI6IFwicmVhY3Qtc2NyaXB0cyBzdGFydFwiLFxyXG4gICAgXCJidWlsZFwiOiBcInJlYWN0LXNjcmlwdHMgYnVpbGRcIixcclxuICAgIFwidGVzdFwiOiBcInJlYWN0LXNjcmlwdHMgdGVzdFwiLFxyXG4gICAgXCJlamVjdFwiOiBcInJlYWN0LXNjcmlwdHMgZWplY3RcIlxyXG59LGBcclxuICAgIGNvbnN0IG5leHRQYWNrYWdlcyA9IGBcclxuXCJzY3JpcHRzXCI6IHtcclxuICAgIFwiZGV2XCI6IFwibmV4dFwiLFxyXG4gICAgXCJidWlsZFwiOiBcIm5leHQgYnVpbGRcIixcclxuICAgIFwic3RhcnRcIjogXCJuZXh0IHN0YXJ0XCJcclxufSxgXHJcbiAgICBjb25zdCByb3V0ZXJJdGVtcyA9IGBcclxuPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICA8TmF2QmFyIG9uUXVlcnlDaGFuZ2U9e29uUXVlcnlDaGFuZ2V9IGVudGVyZWRTZWFyY2g9e2VudGVyZWRTZWFyY2h9IC8+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiByZW5kZXI9eygpID0+IDxIb21lIHNlYXJjaD17c2VhcmNofSAvPiB9IC8+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9wb3N0LzppZFwiIHJlbmRlcj17KHttYXRjaH0pID0+IDxQb3N0UGFnZSBwb3N0SWQ9e21hdGNoLnBhcmFtcy5pZH0gLz4gfSAvPlxyXG48L0Jyb3dzZXJSb3V0ZXI+YFxyXG4gICAgY29uc3QgbGF5b3V0ID0gYFxyXG48TmF2QmFyIG9uUXVlcnlDaGFuZ2U9e29uUXVlcnlDaGFuZ2V9IGVudGVyZWRTZWFyY2g9e2VudGVyZWRTZWFyY2h9IC8+XHJcbntwcm9wcy5jaGlsZHJlbn1gXHJcbiAgICBjb25zdCBiaW5kTWlkZGxld2FyZSA9IGBcclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKVxyXG4gICAgICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcclxuICAgIH1cclxuICAgIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcclxufWBcclxuICAgIGNvbnN0IHN0b3JlID0gYFxyXG5jb25zdCBzdG9yZSA9ICgpID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBiaW5kTWlkZGxld2FyZShbdGh1bmtNaWRkbGV3YXJlXSkpYFxyXG4gICAgY29uc3Qgb2xkRGlzcGF0Y2ggPSBgXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7Y2hhbmdlUmVkdWNlcn1cclxuKShQYWdlKWBcclxuICAgIGNvbnN0IG5ld0Rpc3BhdGNoID0gYFxyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcblxyXG4uLi5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGFuZ2VSZWR1Y2VyOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2hhbmdlUmVkdWNlciwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoUGFnZSlgXHJcbiAgICBjb25zdCBhcG9sbG9FeHBvcnQgPSBgXHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwibmV4dC1hcG9sbG9cIlxyXG5cclxuLi4uXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKGFwb2xsb0NsaWVudClgXHJcbiAgICBjb25zdCBvbGRUb2tlbiA9IGBcclxuY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKWBcclxuICAgIGNvbnN0IG5ld1Rva2VuID0gYFxyXG5sZXQgdG9rZW4gPSBudWxsXHJcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbn1gXHJcbiAgICBjb25zdCBnZXRJbml0aWFsUHJvcHNFeCA9IGBcclxuaW1wb3J0IHthcG9sbG9DbGllbnR9IGZyb20gJy4uL2xpYi9hcG9sbG8nXHJcbmltcG9ydCB7RklORF9QT1NUfSBmcm9tICcuLi9zY2hlbWFzL3F1ZXJpZXMnXHJcblxyXG5jb25zdCBQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBwb3N0ID0gcHJvcHMucG9zdFxyXG4gICAgLi4uXHJcbn1cclxuXHJcblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdFF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogRklORF9QT1NULFxyXG4gICAgICAgIHZhcmlhYmxlczoge3RpdGxlOiAnVW5pbG91cyd9IFxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc3Q6IHBvc3RRdWVyeS5kYXRhLmZpbmRQb3N0LFxyXG4gICAgfVxyXG59YFxyXG4gICAgY29uc3QgX2FwcFJDID0gYFxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApXHJcbn1gXHJcbiAgICBjb25zdCBfYXBwR0lQID0gYFxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe0NvbXBvbmVudCwgY3R4fSkgPT4ge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9O1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHBhZ2VQcm9wcykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7cGFnZVByb3BzfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59O2BcclxuICAgIGNvbnN0IF9hcHBERSA9IGBcclxuaW1wb3J0IGluaXRTdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7Y29tcG9zZX0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJy4uL2xpYi9hcG9sbG8nXHJcblxyXG4uLi5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uod2l0aFJlZHV4KGluaXRTdG9yZSksIHdpdGhBcG9sbG8oe3NzcjogdHJ1ZX0pKShNeUFwcClgXHJcbiAgICBjb25zdCBvbGRTVkcgPSBgXHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL3N0YXRpYy9zdmcvbG9nby5zdmcnXHJcblxyXG4uLi5cclxuXHJcbnJldHVybiAoXHJcbiAgICA8aW1nIHNyYz17bG9nb30gLz5cclxuKWBcclxuY29uc3QgbmV3U1ZHID0gYFxyXG5yZXR1cm4gKFxyXG4gICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28uc3ZnXCIgLz5cclxuKWBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNvbnRhY3QgfCBVbmlsb3VzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb250YWN0IHRoZSBVbmlsb3VzIHRlYW1cIiBrZXk9XCJkZXNjcmlwdGlvblwiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Qi5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Qi50aXRsZX0+Q29udmVydGluZyBhIFJlYWN0IGFwcGxpY2F0aW9uIHdpdGggUmVkdXggYW5kIEFwb2xsbyB0byBOZXh0LkpTPC9oMT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtCLmltZ1RpdGxlfSBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL21XM25rOG8uanBnXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICBJZiB5b3UgaGF2ZSBjbGlja2VkIG9uIHRoaXMgYmxvZyBvZGRzIGFyZSB0aGF0IHlvdSBoYXZlIGhlYXJkIG9mIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCI+TmV4dC5KUzwvYT4sIGlmIG5vdCBhbGxvdyBtZSB0byBpbnRyb2R1Y2UgaXQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE5leHQuSlMgaXMgYSA8YSBocmVmPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9cIj5SZWFjdDwvYT4gZnJhbWV3b3JrIHRoYXQgaXMgYmVzdCBrbm93biBmb3IgaXRzIHNlcnZlciBzaWRlIHJlbmRlcmluZyBjYXBhYmlsaXRpZXMgd2hpY2ggYWxsb3dzIGZvciBiZXR0ZXIgc2VhcmNoIGVuZ2luZSBvcHRpbWl6YXRpb24gKFNFTykuIFxyXG4gICAgICAgICAgICAgICAgICAgIEluIHNob3J0IHRoZSByZWFzb24gZm9yIHdoaWNoIHdlIGF0IFVuaWxvdXMgYW1vbmcgb3RoZXIgUmVhY3QgZGV2ZWxvcGVycyBzd2l0Y2ggdG8gTmV4dC5KUyBpcyB0byBhbGxldmlhdGUgdGhlIGhhc3NsZSBvZiBTRU8gaW4gdGhlIG1vc3QgZWZmZWN0aXZlIG1hbm5lci5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICBBbHRob3VnaCBOZXh0LkpTIGlzIGFscmVhZHkgYnVpbHQgb24gdGhlIHNob3VsZGVycyBvZiBSZWFjdCwgdGhlcmUgYXJlIHN0aWxsIG1hbnkgY2hhbGxlbmdlcyB3aGljaCBuZWVkIHRvIGJlIG92ZXJjb21lIGJlZm9yZSBnZXR0aW5nIHRoZSBhcHBsaWNhdGlvbiB1cCBhbmQgcnVubmluZy5cclxuICAgICAgICAgICAgICAgICAgICBGb3IgdGhpcyBndWlkZSBJIHdpbGwgdG91Y2ggb24gdGhlIGtleSBjaGFuZ2VzIEkgaGFkIHRvIG1ha2Ugd2hlbiBjb252ZXJ0aW5nIG15IFJlYWN0IGFwcGxpY2F0aW9uIHdpdGggdGhlIGNlbnRyYWxpemVkIHN0YXRlIG1hbmFnZW1lbnQ6IDxhIGhyZWY9XCJodHRwczovL3JlZHV4LmpzLm9yZy9cIj5SZWR1eDwvYT4sIGFuZCB0aGUgR3JhcGhRTCBBUEk6IDxhIGhyZWY9XCJodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9cIj5BcG9sbG88L2E+IHRvIE5leHQuanMuIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SSBoaWdobHkgc3VnZ2VzdCB5b3UgZmluaXNoIHRoaXMgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybi9iYXNpY3MvY3JlYXRlLW5leHRqcy1hcHBcIj50dXRvcmlhbDwvYT4gcHJvdmlkZWQgYnkgTmV4dC5KUyBiZWZvcmUgZ2V0dGluZyBzdGFydGVkIHdpdGggdGhpcyBndWlkZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIEZvciByZWZlcmVuY2UgdGhpcyBpcyB3aGF0IHlvdXIgZmluYWwgTmV4dC5KUyBhcHBsaWNhdGlvbiBzaG91bGQgbG9vayBsaWtlLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdncmlkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtCLmltZ1NNfSBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tLzNIb3NFY0UucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT17Qi5saXN0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtCLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Qi50aXRsZX0+MS4gVXBkYXRlIHlvdXIgbm9kZSBlbnZpcm9ubWVudDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IHlvdSBtdXN0IHNldCB1cCB0aGUgcHJvcGVyIG5vZGUgcGFja2FnZXMgc28gdGhhdCB0aGUgYXBwbGljYXRpb24gcnVucyBhcyBhIE5leHQuSlMgYXBwIHJhdGhlciB0aGFuIGEgUmVhY3QgYXBwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSB3aWxsIG5lZWQgdG8gcmVwbGFjZSB0aGUgZm9sbG93aW5nIHNjcmlwdHMgZnJvbSBSZWFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtCLmNvZGVDb250YWluZXJ9ICR7Qi5yZW1vdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57cmVhY3RQYWNrYWdlc308L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0IudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaXRoIHRoZSBzdGFuZGFyZCBOZXh0LkpTIHNjcmlwdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Qi5jb2RlQ29udGFpbmVyfSAke0IuYWRkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+e25leHRQYWNrYWdlc308L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Qi5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e0IudGl0bGV9PjIuIEFkanVzdGluZyBuYXZpZ2F0aW9uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dC5KUyByb3V0aW5nIGRlcGVuZHMgb24gdGhlIGZpbGUgc3RydWN0dXJlIHdoZXJlYXMgUmVhY3Qgcm91dGluZyB3YXMgZGVwZW5kZW50IG9uIHRoZSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+QnJvd3NlclJvdXRlcjwvY29kZT48L3NwYW4+IGNvbXBvbmVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHByb2Nlc3MgY2FuIGJlIHNlcGFyYXRlZCBpbnRvIHNldmVyYWwgc3RlcHMuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtCLnN1YlRpdGxlfT5hLiBSZW9yZ2FuaXplIGNvbXBvbmVudHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0IudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0LkpTIHJlcXVpcmVzIGEgcm9vdCBsZXZlbCBmb2xkZXIgbmFtZWQgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5wYWdlczwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdncmlkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e0IuaW1nU019IHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vM0ZmSGtaZy5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2l0aGluIHRoaXMgZm9sZGVyIGlzIHdoZXJlIGFsbCBvZiB0aGUgcm91dGluZyBoYXBwZW5zLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gdGhpbmsgb2YgdGhlIHBhZ2VzIGZvbGRlciBhcyB0aGUgaG9zdCBvZiB5b3VyIHNpdGUgYW5kIHRoZSBmaWxlcyB3aXRoaW4gdGhlIGZvbGRlciBhcmUgcGF0aHMgd2l0aCBhbiBleGNlcHRpb24gb2YgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5pbmRleC5qczwvc3Bhbj4gd2hpY2ggd2lsbCBzZXJ2ZSBhcyB0aGUgaG9zdCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gcm91dGluZyBpbiBOZXh0LkpTIEkgcmVjY29tZW5kIHRoaXMgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybi9iYXNpY3MvbmF2aWdhdGUtYmV0d2Vlbi1wYWdlcy9wYWdlcy1pbi1uZXh0anNcIj5ndWlkZTwvYT4gZnJvbSBpdHMgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0IudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBhY2NvbXBsaXNoIHRoaXMgeW91IHdpbGwgbmVlZCB0byBtb3ZlIGFsbCBvZiB5b3VyIHJvb3QgcGFnZSBmaWxlcyBleGNsdWRpbmcgeW91ciA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9PkFwcC5qczwvc3Bhbj4gZmlsZSBpbnRvIGEgbmV3IHBhZ2VzIGZvbGRlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHQgSSBzdHJvbmdseSBzdWdnZXN0IHlvdSByZW5hbWUgYWxsIG9mIHlvdXIgZmlsZXMgdG8gZm9sbG93IDxhIGhyZWY9XCJodHRwczovL2xpYnJhcnkuc3RhbmZvcmQuZWR1L3Jlc2VhcmNoL2RhdGEtbWFuYWdlbWVudC1zZXJ2aWNlcy9kYXRhLWJlc3QtcHJhY3RpY2VzL2Jlc3QtcHJhY3RpY2VzLWZpbGUtbmFtaW5nXCIgcmVsPVwibm9mb2xsb3dcIj5wcm9wZXIgdXJsIG5hbWluZyBjb252ZW50aW9uczwvYT4gc28gdGhhdCB5b3UgYXZvaWQgcHJvYmxlbXMgd2l0aCBicm93c2VycyBhbmQgZW5zdXJlIHlvdXIgdXJsIHJlbWFpbnMgcmVhZGFibGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiB0aGUgY2FzZSB0aGF0IHlvdSBoYXZlIGR5bmFtaWMgcm91dGVzIHlvdSB3aWxsIG5lZWQgdG8gZm9sbG93IHRoaXMgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybi9iYXNpY3MvZHluYW1pYy1yb3V0ZXNcIj5ndWlkZTwvYT4gZnJvbSB0aGUgb2ZmaWNpYWwgTmV4dC5KUyBkb2N1bWVudGF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0Iuc3ViVGl0bGV9PmIuIFRyYW5zZm9ybSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9PkFwcC5qczwvc3Bhbj4gdG8gPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5MYXlvdXQuanM8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHRyYWRpdGlvbmFsIEFwcC5qcyBzZXJ2ZXMgdG8gZGlzdHJpYnV0ZSBjb21wb25lbnRzIHRvIGFsbCBvZiB0aGUgcGFnZXMgdG8gZW5zdXJlIHRoZXkgaGF2ZSBhIHVuaWZvcm0gYXBwZWFyYW5jZS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiBOZXh0LkpTLCBzaW5jZSBhbGwgb2YgdGhlIHBhZ2VzIGFyZSBpbmRlcGVuZGVudCBvZiBlYWNoIG90aGVyLCB0aGF0IHdpbGwgbm8gbG9uZ2VyIHdvcmsuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzdWFsbHkgd2l0aGluIHRoaXMgQXBwLmpzIGZpbGUgeW91IHdpbGwgY29udGFpbiB0aGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPkJyb3dzZXJSb3V0ZXI8L2NvZGU+PC9zcGFuPiBjb21wb25lbnQsIHRoZSBuYXZpZ2F0aW9uIGJhciBvciBoZWFkZXIsIGFuZCB0aGUgZm9vdGVyLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGdldCBzdGFydGVkIGFkanVzdGluZyB0aGlzIGZpbGUsIHJlbmFtZSBpdCB0byA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9PkxheW91dC5qczwvc3Bhbj4uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlbiByZW1vdmUgdGhlIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlQml0fT48Y29kZT5Ccm93c2VyUm91dGVyPC9jb2RlPjwvc3Bhbj4gY29tcG9uZW50IGFsb25nIHdpdGggdGhlIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlQml0fT48Y29kZT5Sb3V0ZTwvY29kZT48L3NwYW4+IGNvbXBvbmVudHMgd2l0aGluIGl0LCBhcyB0aGV5IGFyZSBubyBsb25nZXIgbmVlZGVkLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Qi5jb2RlQ29udGFpbmVyfSAke0IucmVtb3ZlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+e3JvdXRlckl0ZW1zfTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIGl0cyBwbGFjZSBsZWF2ZSB0aGUgb3RoZXIgY29tcG9uZW50cyBsaWtlIHRoZSBuYXZpZ2F0aW9uIGJhciBhbmQgYWRkIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlQml0fT48Y29kZT57J3twcm9wcy5jaGlsZHJlbn0nfTwvY29kZT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0IuY29kZUNvbnRhaW5lcn0gJHtCLmFkZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntsYXlvdXR9PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Qi5zdWJUaXRsZX0+Yy4gUmVkaXJlY3QgcGF0aHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0IudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmNlIHlvdSBoYXZlIHlvdXIgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5wYWdlczwvc3Bhbj4gZm9sZGVyIHNldHVwIG1ha2Ugc3VyZSB0byByZWRpcmVjdCBhbGwgcGF0aHMgdG8gb3RoZXIgZmlsZXMgd2l0aGluIHRoZSBmb2xkZXIgYXMgdGhleSBoYXZlIGJlZW4gcmVsb2NhdGVkIHdpdGhpbiB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtCLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Qi50aXRsZX0+My4gQWRqdXN0aW5nIFJlZHV4PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVkdXggaW50ZWdyYXRpb24gdG8gcmVhY3QgbG9va3MgbW9zdGx5IHRoZSBzYW1lIHRocm91Z2hvdXQgdGhlIHdob2xlIGFwcGxpY2F0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHJlZHVjZXJzIGRvIG5vdCBuZWVkIHRvIGJlIGNoYW5nZWQgaW4gYW55IHdheSBvdXRzaWRlIG9mIHJlbG9jYXRpbmcgdGhlbSB0byB0aGUgcm9vdCBvZiB5b3VyIHByb2plY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5zdG9yZS5qczwvc3Bhbj4gb24gdGhlIG90aGVyIGhhbmQgZG9lcyByZWNlaXZlIHR3byBhZGRpdGlvbnMgdG8gYmUgYWJsZSB0byBpbXBsZW1lbnQgVGh1bmsgaW50byBSZWR1eCBhcyBtaWRkbGV3YXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IHlvdSBtdXN0IGltcGxlbWVudCB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uIHRvIGNvbm5lY3QgdGhlIG1pZGRsZXdhcmUgdG8gUmVkdXguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0IuY29kZUNvbnRhaW5lcn0gJHtCLmFkZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntiaW5kTWlkZGxld2FyZX08L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0IudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVuIHRoZSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+YmluZE1pZGRsZXdhcmU8L2NvZGU+PC9zcGFuPiBmdW5jdGlvbiBtdXN0IGJlIGltcGxlbWVudGVkIGJlZm9yZSBleHBvcnRpbmcgdGhlIHN0b3JlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gZG8gdGhhdCB3ZSByZXBsYWNlIHRoZSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+YXBwbHlNaWRkbGV3YXJlPC9jb2RlPjwvc3Bhbj4gZnVuY3Rpb24gd2l0aCA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+YmluZE1pZGRsZXdhcmU8L2NvZGU+PC9zcGFuPiBhbmQgcGxhY2UgdGhlIGJpbmQgbWlkZGxld2FyZSBpbnNpZGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRpdGlvbmFsbHkgd2UgbWFrZSB0aGUgc3RvcmUgYSBmdW5jdGlvbiB0byBhdm9pZCBlcnJvcnMgbGF0ZXIgb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZmluYWwgc3RvcmUgdmFyaWFibGUgc2hvdWxkIGxvb2sgbGlrZSB0aGUgZm9sbG93aW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0IuY29kZUNvbnRhaW5lcn0gJHtCLmFkZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntzdG9yZX08L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0IudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHdpbGwgdGhlbiBhZmZlY3QgdGhlIHdheSB5b3Ugd2lsbCBuZWVkIHRvIG1hcCBkaXNwYXRjaCB0byBwcm9wcyByZXF1aXJpbmcgdGhlIHVzZSBvZiB0aGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPmJpbmRBY3Rpb25DcmVhdG9yczwvY29kZT48L3NwYW4+IGltcG9ydCBmcm9tIHJlZHV4LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIGVuZCBhbnkgZmlsZSB0aGF0IG5lZWRzIHRvIGRpc3BhdGNoIHRvIHBlb3BsZSB3aWxsIG5lZWQgdG8gY2hhbmdlIGZyb20gdGhpcy4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtCLmNvZGVDb250YWluZXJ9ICR7Qi5yZW1vdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57b2xkRGlzcGF0Y2h9PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gc29tZXRoaW5nIHNpbWlsYXIgdG8gdGhpcy4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtCLmNvZGVDb250YWluZXJ9ICR7Qi5hZGR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57bmV3RGlzcGF0Y2h9PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgd2lsbCBiZSBzb21lIG1vcmUgY2hhbmdlcyBuZWVkZWQgdG8gZ2V0IFJlZHV4IHRvIHdvcmsgYnV0IEkgd2lsbCBhZGRyZXNzIHRoZW0gb25jZSB3ZSBnZXQgdG8gdGhlIG5ldyA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9PmluZGV4LmpzPC9zcGFuPiBvciA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9Pl9hcHAuanM8L3NwYW4+IHBhZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e0IubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtCLnRpdGxlfT40LiBJbnRlZ3JhdGluZyBBcG9sbG88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0IudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgaW50ZWdyYXRpb24gb2YgQXBvbGxvIHJlcXVpcmVzIG1pbmltYWwgY2hhbmdlcyBtdWNoIGxpa2UgcmVkdXguIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZpcnN0IGNoYW5nZSB3aWxsIGJlIHRvIHJlbG9jYXRlIHRoZSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+QXBvbGxvQ2xpZW50PC9jb2RlPjwvc3Bhbj4gYW5kIGV2ZXJ5dGhpbmcgY29ubmVjdGVkIHdpdGhpbiBpdCB0byBpdHMgb3duIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlTGlrZX0+YXBvbGxvLmpzPC9zcGFuPiBmaWxlLCB0aGVuIG1vdmUgdGhhdCBmaWxlIGluc2lkZSBhIGZvbGRlciBuYW1lZCA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9PmxpYjwvc3Bhbj4gb24gdGhlIHJvb3Qgb2YgdGhlIGFwcC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmNlIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlTGlrZX0+YXBvbGxvLmpzPC9zcGFuPiBpcyBpbiBpdHMgbmV3IGZvbGRlciwgbWFrZSBzdXJlIHRvIHRvIGV4cG9ydCB0aGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPkFwb2xsb0NsaWVudDwvY29kZT48L3NwYW4+IHZhcmlhYmxlLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciB0aGUgZGVmYXVsdCBleHBvcnQgeW91IHdpbGwgbmVlZCB0byB1dGlsaXplIHRoZSB3aXRoQXBvbGxvIGltcG9ydCBmcm9tIE5leHQuSlMsIHRoZSBmaW5hbCBkZWZhdWx0IGV4cG9ydCB3aWxsIGxvb2sgbGlrZSB0aGUgZm9sbG93aW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0IuY29kZUNvbnRhaW5lcn0gJHtCLmFkZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPnthcG9sbG9FeHBvcnR9PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkaXRpb25hbGx5IGluIHRoZSBjYXNlIHRoYXQgeW91IGhhdmUgaGF2ZSB1c2VyIGF1dGhlbnRpY2F0aW9uIGFuZCByZWx5IG9uIGEgYnJvd3NlcnMgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPmxvY2FsU3RvcmFnZTwvY29kZT48L3NwYW4+LCB5b3Ugd2lsbCBuZWVkIHRvIG1ha2UgdGhlIGZvbGxvd2luZyBjaGFuZ2UgdG8gdGhlIHdheSB5b3UgZ2V0IHlvdXIgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPnRva2VuPC9jb2RlPjwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tIHRoaXMuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Qi5jb2RlQ29udGFpbmVyfSAke0IucmVtb3ZlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+e29sZFRva2VufTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIHRoaXMuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Qi5jb2RlQ29udGFpbmVyfSAke0IuYWRkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+e25ld1Rva2VufTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgbGFjayBvZiBhY2Nlc3MgdG8gYnJvd3NlciB1dGlsaXRpZXMgYXMgYSByZXN1bHQgb2Ygc2VydmVyIHNpZGUgcm91dGluZyByZXN1bHRzIGluIHRoZSBiaWdnZXN0IGNoYW5nZSB0byB3b3JraW5nIHdpdGggQXBvbGxvIGluIE5leHQuSlMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHNhbWUgaXNzdWUgd2l0aCB0aGUgdG9rZW4gd2lsbCBsaWtlbHkgb2NjdXIgaW4gb3RoZXIgYXJlYXMgb2YgeW91ciBhcHBsaWNhdGlvbiBkZXBlbmRpbmcgb24gaG93IHlvdSBpbnRlcmFjdCB3aXRoIGJyb3dzZXIgdXRpbGl0aWVzIGxpa2UgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPmxvY2FsU3RvcmFnZTwvY29kZT48L3NwYW4+LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gZ2VuZXJhbCBJIHJlY29tbWVuZCB0aGF0IHRoYXQgeW91IHJlZHVjZSB0aGUgYW1vdW50IG9mIGNvZGUgdGhhdCBsaWVzIGluc2lkZSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+aWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsne30nfTwvY29kZT48L3NwYW4+LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZGl0aW9uYWxseSB5b3Ugc2hvdWxkIGluY2x1ZGUgYW4gPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPmVsc2U8L2NvZGU+PC9zcGFuPiBzdGF0ZW1lbnQgZm9yIHdoZW4gdGhhdCBpbmZvcm1hdGlvbiBjYW5ub3QgYmUgcmVjZWl2ZWQgc28gdGhhdCB5b3UgY29tcG9uZW50IGRvZXMgbm90IHJlbmRlciBibGFuayBjb21pbmcgaW50byB0aGUgY2xpZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzIGEgbWVhbnMgb2YgZGVhbGluZyB3aXRoIHRoZSBzYW1lIGlzc3VlIHBvc2VkIGJ5IHNlcnZlciBzaWRlIHJlbmRlcmluZywgTmV4dC5KUyBwcm92aWRlcyB0aGUgZnVuY3Rpb25hbGl0eSB0byBsb2FkIGRhdGEgd2hpbGUgb24gcmVuZGVyLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGRvIHRoYXQgTmV4dC5KUyBwcm92aWRlcyB0aGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPmdldEluaXRpYWxQcm9wczwvY29kZT48L3NwYW4+IGZ1bmN0aW9uYWxpdHkgd2hpY2ggaXMgcmFuIGJlZm9yZSB0aGUgYWN0dWFsIFJlYWN0IGNvbXBvbmVudCBpcyByZW5kZXJlZC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmNlIHRoYXQgZGF0YSBpcyBmZXRjaGVkIGl0IGNhbiB0aGVuIGJlIHBhc3NlZCBhcyBhIHByb3AgdG8gdGhlIHNhbWUgUmVhY3QgY29tcG9uZW50LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBjb2RlIHdvdWxkIGxvb2sgc2ltaWxhciB0byB0aGlzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0IuY29kZUNvbnRhaW5lcn0gJHtCLmFkZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntnZXRJbml0aWFsUHJvcHNFeH08L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0IudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmUgdGhpbmcgdG8gbm90ZSBpcyB0aGF0IG9ubHkgZmlsZXMgdW5kZXIgdGhlIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlTGlrZX0+cGFnZXM8L3NwYW4+IGRpcmVjdG9yeSBjYW4gdXNlIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlQml0fT48Y29kZT5nZXRJbml0aWFsUHJvcHM8L2NvZGU+PC9zcGFuPiBzbyBjb21wb25lbnRzIHdvbnQgaGF2ZSB0aGlzIG9wdGlvbi4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgd2lsbCBiZSBzb21lIG1vcmUgY2hhbmdlcyBuZWVkZWQgdG8gZ2V0IEFwb2xsbyB0byB3b3JrIGJ1dCBJIHdpbGwgYWRkcmVzcyB0aGVtIG9uY2Ugd2UgZ2V0IHRvIHRoZSBuZXcgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5pbmRleC5qczwvc3Bhbj4gb3IgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5fYXBwLmpzPC9zcGFuPiBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtCLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Qi50aXRsZX0+NS4gRm9ybWF0dGluZyA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9PmluZGV4LmpzPC9zcGFuPiB0byA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9Pl9hcHAuanM8L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGluZGV4IGZpbGUgaXMgdXNlZCB0byBjb25uZWN0IG90aGVyIHRvcCBsZXZlbCB0ZWNobm9sb2dpZXMgbGlrZSBBcG9sbG8gYW5kIFJlZHV4LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHQuSlMgcmVxdWlyZXMgYSBzaW1pbGFyLCB0aGUgZmlsZSBtdXN0IHRvIGJlIG5hbWVkIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlTGlrZX0+X2FwcC5qczwvc3Bhbj4gYW5kIGJlIGxvY2F0ZWQgaW5zaWRlIHRoZSBwYWdlcyBmb2xkZXIuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luY2Ugd2UgaGF2ZSBhbHJlYWR5IHNlcGFyYXRlZCB0aGUgQXBvbGxvIGNvZGUgaW50byBpdHMgZGVkaWNhdGVkIGZpbGUgdGhlIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlTGlrZX0+X2FwcC5qczwvc3Bhbj4gZmlsZSBiZWNvbWVzIHZlcnkgc2ltcGxlLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9Pl9hcHAuanM8L3NwYW4+IGZpbGUgd2lsbCBub3cgb25seSBjb250YWluIGEgUmVhY3QgY29tcG9uZW50IHdpdGggYSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+Z2V0SW5pdGlhbFByb3BzPC9jb2RlPjwvc3Bhbj4gYXR0YWNoZWQgdG8gaXQgYW5kIGEgc29tZXdoYXQgY29tcGxpY2F0ZWQgZGVmYXVsdCBleHBvcnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIHRoZSBSZWFjdCBjb21wb25lbnQgdGhlIHByb3BzIHdpbGwgbmVlZCB0byBnZXQgZGVzdHJ1Y3R1cmVkIGludG8gdGhlIGtleSBjb21wb25lbnRzIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlQml0fT48Y29kZT57YHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlIH1gfTwvY29kZT48L3NwYW4+LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBjb21wb25lbnQgd2lsbCBzZXJ2ZSBhcyB0aGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5BcHAuanM8L3NwYW4+IGl0c2VsZiBhbmQgd2Ugd2lsbCBuZWVkIHRvIHBhc3MgaGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPnBhZ2VQcm9wczwvY29kZT48L3NwYW4+IGZvciBpdHMgYXR0cmlidXRlcy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPkNvbXBvbmVudDwvY29kZT48L3NwYW4+IHdpbGwgb25seSBuZWVkIHRvIGJlIHdyYXBwZWQgYnkgdGhlIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlTGlrZX0+cmVhY3QtcmVkdXg8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlQml0fT48Y29kZT5Qcm92aWRlcjwvY29kZT48L3NwYW4+IHdoZXJlIHRoZSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+c3RvcmU8L2NvZGU+PC9zcGFuPiB3aWxsIGJlIHBhc3NlZCBhcyA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+c3RvcmU8L2NvZGU+PC9zcGFuPi4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcmVzdWx0aW5nIGNvZGUgd2lsbCBsb29rIGxpa2UgdGhpcy4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtCLmNvZGVDb250YWluZXJ9ICR7Qi5hZGR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57X2FwcFJDfTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuZm9ydHVuYXRlbHkgeW91IGNhbm5vdCBnZXQgYWNjZXNzIHRvIHByb3BzIHdpdGhvdXQgZGlyZWN0bHkgYWRkaW5nIHRoZSBmb2xsb3dpbmcgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVCaXR9Pjxjb2RlPmdldEluaXRpYWxQcm9wczwvY29kZT48L3NwYW4+LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgc2VydmVzIHRvIHBhc3MgdGhlIHByb3BzIHRvIHRoZSByZXN0IG9mIHRoZSBwYWdlcy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgY29kZSB3aWxsIGxvb2sgbGlrZSB0aGlzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0IuY29kZUNvbnRhaW5lcn0gJHtCLmFkZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntfYXBwR0lQfTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBkZWZhdWx0IGV4cG9ydCBmb3IgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5fYXBwLmpzPC9zcGFuPiBpcyBmYXIgZnJvbSBvcmRpbmFyeSBhcyBpdCByZXF1aXJlcyBzb21lIGZpbmFsIGFkZGl0aW9ucy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcmVkdXggc3RvcmUgbmVlZHMgdG8gYmUgd3JhcHBlZCBhcm91bmQgdGhlIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlQml0fT48Y29kZT53aXRoUmVkdXg8L2NvZGU+PC9zcGFuPiB3cmFwcGVyIHByb3ZpZGVkIGJ5IE5leHQuSlMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgdGhlIEFwb2xsbyBjb21wb25lbnQgeW91IG11c3QgaW5kaWNhdGUgdGhhdCB0aGUgYXBwbGljYXRpb24gaXMgc2VydmVyIHNpZGUgcmVuZGVyZWQgKFNTUikgbGlrZSB0aGlzICA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUJpdH0+PGNvZGU+e2B7c3NyOiB0cnVlfWB9PC9jb2RlPjwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5hbGx5IHlvdSBzdGl0Y2ggdG9nZXRoZXIgYm90aCBSZWFjdCBhbmQgQXBvbGxvIHdpdGggdGhlIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlQml0fT48Y29kZT5jb21wb3NlPC9jb2RlPjwvc3Bhbj4gZnVuY3Rpb24gZnJvbSA8c3BhbiBjbGFzc05hbWU9e0IuY29kZUxpa2V9PnJlZHV4PC9zcGFuPi4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZmluYWwgY29kZSB3aWxsIGxvb2sgbGlrZSB0aGlzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0IuY29kZUNvbnRhaW5lcn0gJHtCLmFkZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntfYXBwREV9PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e0IubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtCLnRpdGxlfT42LiBXb3JraW5nIHdpdGggc3RhdGljIGZpbGVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtCLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIHN0YXRpYyBmaWxlcyB0aGVyZSBhcmUgb25seSBhIGZldyBtaW5vciBjaGFuZ2VzIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IHRoZSBzdGF0aWMgZm9sZGVyIHNob3VsZCBiZSBtb3ZlZCB0byB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgeW91ciBhcHBsaWNhdGlvbnMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIGNhc2UgdGhhdCB5b3UgaGF2ZSBhbnkgU1ZHcyB5b3Ugd2lsbCBuZWVkIHRvIG1vdmUgdGhlbSB0byB0aGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5wdWJsaWM8L3NwYW4+IGZvbGRlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdyB0aGF0IHRoZSBzdGF0aWMgZm9sZGVyIGlzIGZpbmFsaXplZCBpbiB0aGUgcm9vdCBkaXJlY3RvcnkgYWxsIHRoYXQgaXMgbGVmdCBpcyB0byB1cGRhdGUgcGF0aHMgbGVhZGluZyB0byBpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e0IudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWNhdXNlIHRoZSBTVkdzIGFyZSBub3cgbG9jYXRlZCB1bmRlciB0aGUgPHNwYW4gY2xhc3NOYW1lPXtCLmNvZGVMaWtlfT5wdWJsaWM8L3NwYW4+IGZvbGRlciB0aGVyZSB3aWxsIG5lZWQgdG8gYmUgb25lIG1ham9yIGNoYW5nZSB0b3dhcmRzIGFjY2Vzc2luZyB0aCBTVkdzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5saWtlIGJlZm9yZSB3aGVyZSB5b3Ugd291bGQgaW1wb3J0IFNWR3MgaW50byB5b3VyIGFwcGxpY2F0aW9uIGFuZCBkaXN0cmlidXRlIHRoZW0gYXMgYSB2YXJpYWJsZSwgbGlrZSBzby4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtCLmNvZGVDb250YWluZXJ9ICR7Qi5yZW1vdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57b2xkU1ZHfTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdyB5b3UgY2FuIHNpbXBseSBhY2Nlc3MgeW91ciBTVkdzIHRocm91Z2ggYSByb3V0ZSBhcyBpZiB5b3VyIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlTGlrZX0+cHVibGljPC9zcGFuPiBmb2xkZXIgd2FzIHRoZSBob3N0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtCLmNvZGVDb250YWluZXJ9ICR7Qi5hZGR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57bmV3U1ZHfTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Qi50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHQuSlMgYWxzbyBvZmZlcnMgYSBncmVhdCBmZWF0dXJlIHdpdGggZmlsZXMgYnkgc2ltcGx5IGFkZGluZyBhIDxzcGFuIGNsYXNzTmFtZT17Qi5jb2RlTGlrZX0+Lm1vZHVsZTwvc3Bhbj4gdG8gIENTUyBmaWxlcy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGZlYXR1cmUgc2VydmVzIHRvIGJldHRlciBvcmdhbml6ZSB0aGUgbmFtaW5nIG9mIHN0eWxlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhpcyBmZWF0dXJlIHZpc2l0IHRoaXMgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybi9iYXNpY3MvYXNzZXRzLW1ldGFkYXRhLWNzcy9sYXlvdXQtY29tcG9uZW50XCI+Z3VpZGU8L2E+IGZyb20gdGhlIG9mZmljaWFsIE5leHQuSlMgZG9jdW1lbnRhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICAvLyBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gc2V0VXNlckREOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0VXNlckRELCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShSdE4pIiwiZXhwb3J0IGNvbnN0IHNldEFsZXJ0ID0gKGluZm8pID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0FMRVJUJyxcclxuICAgICAgICAgICAgZGF0YTogaW5mb1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXNldEFsZXJ0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdSRVNFVF9BTEVSVCdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhbGVydE5vdGlmID0gKHN0YXRlID0ge2NvbG9yOiBudWxsLCB0ZXh0Q29sb3I6IG51bGwsIG1lc3NhZ2U6IG51bGx9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfQUxFUlQnIDpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICAgICAgY2FzZSAnUkVTRVRfQUxFUlQnIDpcclxuICAgICAgICAgICAgcmV0dXJuIHtjb2xvcjogbnVsbCwgdGV4dENvbG9yOiBudWxsLCBtZXNzYWdlOiBudWxsfVxyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxlcnROb3RpZiIsImV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlciA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVVJSRU5UX1VTRVInLFxyXG4gICAgICAgICAgICBkYXRhOiB1c2VyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyUG9zdHMgPSAocG9zdHMpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX1BPU1RTJyxcclxuICAgICAgICAgICAgZGF0YTogcG9zdHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXJTUCA9IChwb3N0cykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfU1AnLFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0c1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgPSAobm90aWZpY2F0aW9ucykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfTk9USUZJQ0FUSU9OUycsXHJcbiAgICAgICAgICAgIGRhdGE6IG5vdGlmaWNhdGlvbnNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMgPSAoYW10KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9QTicsXHJcbiAgICAgICAgICAgIGRhdGE6IGFtdFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGN1cnJlbnRVc2VyID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVX1BOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGVuZGluZ05vdGlmaWNhdGlvbnM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVVJSRU5UX1VTRVInIDpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICAgICAgY2FzZSAnU0VUX0NVX1BPU1RTJyA6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBvc3RzOiBhY3Rpb24uZGF0YX1cclxuICAgICAgICBjYXNlICdTRVRfQ1VfU1AnIDpcclxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzYXZlZFBvc3RzOiBhY3Rpb24uZGF0YX1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICBjYXNlICdTRVRfQ1VfTk9USUZJQ0FUSU9OUycgOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBub3RpZmljYXRpb25zOiBhY3Rpb24uZGF0YX1cclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRVc2VyIiwiZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHRva2VuKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdTRVRfVE9LRU4nLFxyXG4gICAgICAgIGRhdGE6IHRva2VuXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJUb2tlbiA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0NMRUFSX1RPS0VOJ1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgdG9rZW4gPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9UT0tFTicgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdDTEVBUl9UT0tFTicgOlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2tlbiIsImV4cG9ydCBjb25zdCBzZXRVc2VyREQgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX1VTRVJfREQnLFxyXG4gICAgICAgICAgICBkYXRhOiBzdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXNldFVzZXJERCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnUkVTRVRfVVNFUl9ERCdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VyREQgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfVVNFUl9ERCcgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdSRVNFVF9VU0VSX0REJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyREQiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gYWRkUG9zdChcclxuICAgICR0aXRsZTogU3RyaW5nISxcclxuICAgICR1c2VyOiBJRCEsXHJcbiAgICAkY29udGFjdExpbms6IFN0cmluZyFcclxuICAgICRza2lsbE5hbWVzOiBbU3RyaW5nIV0hLFxyXG4gICAgJHNraWxsQ2FwYWNpdGllczogW0ludCFdISxcclxuICAgICRza2lsbEZpbGxzOiBbSW50IV0hLFxyXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchLFxyXG4gICAgJGNvbG9yOiBTdHJpbmchLFxyXG4gICAgJGltYWdlTGlua3M6IFtTdHJpbmchXSxcclxuICAgICRyZWZlcmVuY2VMaW5rczogW1N0cmluZyFdXHJcbiAgKXtcclxuICAgIGFkZFBvc3QoXHJcbiAgICAgIHRpdGxlOiR0aXRsZSxcclxuICAgICAgdXNlcjokdXNlcixcclxuICAgICAgY29udGFjdExpbms6ICRjb250YWN0TGluayxcclxuICAgICAgc2tpbGxOYW1lczokc2tpbGxOYW1lcyxcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzOiRza2lsbENhcGFjaXRpZXMsXHJcbiAgICAgIHNraWxsRmlsbHM6ICRza2lsbEZpbGxzLFxyXG4gICAgICBkZXNjcmlwdGlvbjokZGVzY3JpcHRpb24sXHJcbiAgICAgIGNvbG9yOiRjb2xvcixcclxuICAgICAgaW1hZ2VMaW5rczokaW1hZ2VMaW5rcyxcclxuICAgICAgcmVmZXJlbmNlTGlua3M6JHJlZmVyZW5jZUxpbmtzXHJcbiAgICApe1xyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUID0gZ3FsYFxyXG4vLyAgIG11dGF0aW9uIGRlbGV0ZVBvc3QgKFxyXG4vLyAgICAgJHBvc3RJZDogSUQhXHJcbi8vICAgKSB7XHJcbi8vICAgICBkZWxldGVQb3N0IChwb3N0SWQ6ICRwb3N0SWQpXHJcbi8vICAgfVxyXG4vLyBgXHJcblxyXG5leHBvcnQgY29uc3QgTUFLRV9OT1RJRklDQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gbWFrZU5vdGlmaWNhdGlvbihcclxuICAgICR1c2VyRnJvbUlkOiBJRCEsXHJcbiAgICAkdXNlclRvSWQ6IElEISxcclxuICAgICRtZXNzYWdlOiBTdHJpbmchLFxyXG4gICAgJHBvc3RJZDogSUQsXHJcbiAgICAkcHJvcG9zZWRDb250cmlidXRpb246IFtJbnQhXVxyXG4gICl7XHJcbiAgICBtYWtlTm90aWZpY2F0aW9uKFxyXG4gICAgICB1c2VyRnJvbUlkOiAkdXNlckZyb21JZCxcclxuICAgICAgdXNlclRvSWQ6ICR1c2VyVG9JZCxcclxuICAgICAgbWVzc2FnZTogJG1lc3NhZ2UsXHJcbiAgICAgIHBvc3RJZDogJHBvc3RJZCxcclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb246ICRwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgKXtcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQUNDRVBUX05PVElGSUNBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBhY2NlcHROb3RpZmljYXRpb24oJG5vdGlmaWNhdGlvbklkOiBJRCEpIHtcclxuICAgIGFjY2VwdE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZDogJG5vdGlmaWNhdGlvbklkKSB7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgREVDTElORV9OT1RJRklDQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gZGVjbGluZU5vdGlmaWNhdGlvbigkbm90aWZpY2F0aW9uSWQ6IElEISkge1xyXG4gICAgZGVjbGluZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZDogJG5vdGlmaWNhdGlvbklkKSB7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1VTRVIgPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlVXNlcigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISwgJHJlZmVyZW5jZUxpbms6IFN0cmluZyEpIHtcclxuICAgIGNyZWF0ZVVzZXIoXHJcbiAgICAgIHVzZXJuYW1lOiAkdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmQsXHJcbiAgICAgIHJlZmVyZW5jZUxpbms6ICRyZWZlcmVuY2VMaW5rXHJcbiAgICApe1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0gZ3FsYFxyXG4gIG11dGF0aW9uIGxvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKXtcclxuICAgIGxvZ2luKFxyXG4gICAgICB1c2VybmFtZTogJHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogJHBhc3N3b3JkXHJcbiAgICApe1xyXG4gICAgICB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNBVkVfUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiBzYXZlUG9zdFRvVXNlciAoXHJcbiAgICAkdXNlcjogSUQhLFxyXG4gICAgJHBvc3RJZDogSUQhXHJcbiAgKSB7XHJcbiAgICBzYXZlUG9zdFRvVXNlciAodXNlcjogJHVzZXIsIHBvc3RJZDogJHBvc3RJZCkge1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1NBVkVEX1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gcmVtb3ZlU2F2ZWRQb3N0IChcclxuICAgICR1c2VyOiBJRCEsXHJcbiAgICAkcG9zdElkOiBJRCFcclxuICApIHtcclxuICAgIHJlbW92ZVNhdmVkUG9zdCAodXNlcjogJHVzZXIsIHBvc3RJZDogJHBvc3RJZClcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBU0tfUVVFU1RJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gYXNrUXVlc3Rpb24gKFxyXG4gICAgJHVzZXJGcm9tSWQ6IElEISxcclxuICAgICR1c2VyVG9JZDogSUQhLFxyXG4gICAgJHBvc3RJZDogSUQhLFxyXG4gICAgJHF1ZXN0aW9uOiBTdHJpbmchXHJcbiAgKXtcclxuICAgIGFza1F1ZXN0aW9uIChcclxuICAgICAgdXNlckZyb21JZDogJHVzZXJGcm9tSWQsXHJcbiAgICAgIHVzZXJUb0lkOiAkdXNlclRvSWQsXHJcbiAgICAgIHBvc3RJZDogJHBvc3RJZCxcclxuICAgICAgcXVlc3Rpb246ICRxdWVzdGlvblxyXG4gICAgKXtcclxuICAgICAgdXNlckZyb20ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgcG9zdHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGNvbG9yXHJcbiAgICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICBxdWVzdGlvblxyXG4gICAgICBhbnN3ZXJcclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQU5TV0VSX1FVRVNUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFuc3dlclF1ZXN0aW9uIChcclxuICAgICRub3RpZmljYXRpb25JZDogSUQhLFxyXG4gICAgJHJlc3BvbnNlOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBhbnN3ZXJRdWVzdGlvbiAoXHJcbiAgICAgIG5vdGlmaWNhdGlvbklkOiAkbm90aWZpY2F0aW9uSWQsXHJcbiAgICAgIHJlc3BvbnNlOiAkcmVzcG9uc2VcclxuICAgICl7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYCIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBMSVNUX09GX05PVElGSUNBVElPTlMgPSBncWxgXHJcbiAgcXVlcnkgbGlzdE9mTm90aWZpY2F0aW9ucygkbm90aWZpY2F0aW9uczogW1N0cmluZyFdKSB7XHJcbiAgICBsaXN0T2ZOb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnM6ICRub3RpZmljYXRpb25zKSB7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIGNvbnRhY3RMaW5rXHJcbiAgICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICBxdWVzdGlvblxyXG4gICAgICBhbnN3ZXJcclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU0tJTExfU0VBUkNIID0gZ3FsYFxyXG4gIHF1ZXJ5IHNraWxsU2VhcmNoKCRmaWx0ZXI6IFN0cmluZyEpIHtcclxuICAgIHNraWxsU2VhcmNoKGZpbHRlcjogJGZpbHRlcikge1xyXG4gICAgICBuYW1lXHJcbiAgICAgIHVzZXNcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBNRSA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBtZXtcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgcmVmZXJlbmNlTGlua1xyXG4gICAgICBwcmltYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBzZWNvbmRhcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGludGVyZXN0c1xyXG4gICAgICBwb3N0c3tcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBfaWRcclxuICAgICAgfSxcclxuICAgICAgbm90aWZpY2F0aW9uc3tcclxuICAgICAgICB1c2VyRnJvbXtcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyVG97XHJcbiAgICAgICAgICBfaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIHBvc3R7XHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgICAgYWNjZXB0ZWRcclxuICAgICAgfVxyXG4gICAgICBfaWRcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTElTVF9PRl9QT1NUUyA9IGdxbGBcclxuICBxdWVyeSBnZXRMaXN0T2ZQb3N0cygkaWRfbGlzdDogW1N0cmluZ10pIHtcclxuICAgIGdldExpc3RPZlBvc3RzKGlkTGlzdDogJGlkX2xpc3Qpe1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1c2Vye1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgY29sb3JcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRklORF9QT1NUID0gZ3FsYFxyXG4gIHF1ZXJ5IGZpbmRQb3N0KCR0aXRsZTogU3RyaW5nISl7XHJcbiAgICBmaW5kUG9zdCh0aXRsZTogJHRpdGxlKXtcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBza2lsbE5hbWVzXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICBza2lsbEZpbGxzXHJcbiAgICAgIHRlYW1cclxuICAgICAgdGltZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBjb2xvclxyXG4gICAgICBpbWFnZUxpbmtzXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtzXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZJTkRfVVNFUiA9IGdxbGBcclxuICBxdWVyeSBmaW5kVXNlcigkdXNlcm5hbWU6IFN0cmluZyEpe1xyXG4gICAgZmluZFVzZXIodXNlcm5hbWU6ICR1c2VybmFtZSkge1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgICByZWZlcmVuY2VMaW5rXHJcbiAgICAgIHByaW1hcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNlY29uZGFyeVNraWxsc3tcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgICAgaW50ZXJlc3RzXHJcbiAgICAgIHBvc3Rze1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIG5vdGlmaWNhdGlvbnMge1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHNhdmVkUG9zdHMge1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9VU0VSUyA9IGdxbGBcclxuICBxdWVyeXtcclxuICAgIGFsbFVzZXJze1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTT01FX1VTRVJTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNvbWVVc2Vycygkc2tpcDogSW50ISwgJGZpcnN0OiBJbnQhKXtcclxuICAgIHNvbWVVc2Vycyhza2lwOiAkc2tpcCwgZmlyc3Q6ICRmaXJzdCl7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQUxMX1BPU1RTID0gZ3FsYFxyXG4gIHF1ZXJ5e1xyXG4gICAgYWxsUG9zdHN7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXJ7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBza2lsbE5hbWVzXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICBza2lsbEZpbGxzXHJcbiAgICAgIHRpbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgY29sb3JcclxuICAgICAgaW1hZ2VMaW5rc1xyXG4gICAgICByZWZlcmVuY2VMaW5rc1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9USVRMRVMgPSBncWxgXHJcbiAgcXVlcnl7XHJcbiAgICBhbGxQb3N0c3tcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnkgc2VhcmNoUG9zdHMoJGZpbHRlclN0cmluZzogU3RyaW5nISwgJHBvc3RJZHM6IFtTdHJpbmchXSwgJGV2ZW50UXVlcnk6IFN0cmluZyl7XHJcbiAgICBzZWFyY2hQb3N0cyhmaWx0ZXJTdHJpbmc6ICRmaWx0ZXJTdHJpbmcsIHBvc3RJZHM6ICRwb3N0SWRzLCBldmVudFF1ZXJ5OiAkZXZlbnRRdWVyeSl7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICB0aW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbG9yXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBFTkRJTkdfTk9USUZTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNlYXJjaEF3YWl0aW5nTm90aWZzKCR1c2VySWQ6IElEISkge1xyXG4gICAgc2VhcmNoQXdhaXRpbmdOb3RpZnModXNlcklkOiAkdXNlcklkKVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFFfQU5EX0FfTk9USUZTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNlYXJjaEFuc3dlcmVkUVRvUG9zdCAoICR0aXRsZTogU3RyaW5nISApIHtcclxuICAgIHNlYXJjaEFuc3dlcmVkUVRvUG9zdCAoXHJcbiAgICAgIHRpdGxlOiAkdGl0bGVcclxuICAgICl7XHJcbiAgICAgIHVzZXJGcm9te1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHF1ZXN0aW9uXHJcbiAgICAgIGFuc3dlclxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmAiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJibG9nX2NvbnRhaW5lcl9fMW50SjFcIixcblx0XCJsaXN0Q29udGFpbmVyXCI6IFwiYmxvZ19saXN0Q29udGFpbmVyX19MWk1VcFwiLFxuXHRcImxpc3RJdGVtXCI6IFwiYmxvZ19saXN0SXRlbV9fM3NNNzBcIixcblx0XCJ0aXRsZVwiOiBcImJsb2dfdGl0bGVfXzNWdlozXCIsXG5cdFwic3ViVGl0bGVcIjogXCJibG9nX3N1YlRpdGxlX18yQl9tOVwiLFxuXHRcImltZ1RpdGxlXCI6IFwiYmxvZ19pbWdUaXRsZV9fMlkwOVRcIixcblx0XCJpbWdTTVwiOiBcImJsb2dfaW1nU01fXzNONFR3XCIsXG5cdFwidGV4dFwiOiBcImJsb2dfdGV4dF9fMVRtNHlcIixcblx0XCJjb2RlQ29udGFpbmVyXCI6IFwiYmxvZ19jb2RlQ29udGFpbmVyX18zS1lxVFwiLFxuXHRcImNvZGVCaXRcIjogXCJibG9nX2NvZGVCaXRfXzFKUXJsXCIsXG5cdFwiY29kZUxpa2VcIjogXCJibG9nX2NvZGVMaWtlX18xcWxzTFwiLFxuXHRcImFkZFwiOiBcImJsb2dfYWRkX18zMzlPN1wiLFxuXHRcInJlbW92ZVwiOiBcImJsb2dfcmVtb3ZlX18ySlV2V1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybUluZm9Db250YWluZXJcIjogXCJpbnB1dEhlYWRlcl9mb3JtSW5mb0NvbnRhaW5lcl9feVFia2FcIixcblx0XCJpbmZvSGVhZGVyQ29udGFpbmVyXCI6IFwiaW5wdXRIZWFkZXJfaW5mb0hlYWRlckNvbnRhaW5lcl9faFEtSWtcIixcblx0XCJpbmZvVGl0bGVUZXh0XCI6IFwiaW5wdXRIZWFkZXJfaW5mb1RpdGxlVGV4dF9fM3hsamxcIixcblx0XCJpbmZvSWNvbkNvbnRhaW5lclwiOiBcImlucHV0SGVhZGVyX2luZm9JY29uQ29udGFpbmVyX18zTXhYM1wiLFxuXHRcImluZm9JY29uXCI6IFwiaW5wdXRIZWFkZXJfaW5mb0ljb25fXzNiVE96XCIsXG5cdFwiaW5mb0NvbnRlbnRcIjogXCJpbnB1dEhlYWRlcl9pbmZvQ29udGVudF9fMXdPbndcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9jb250YWluZXJfXzJTZnQ5XCIsXG5cdFwiYnJhbmRDb250YWluZXJcIjogXCJuZXdOYXZCYXJfYnJhbmRDb250YWluZXJfXzEtR2o2XCIsXG5cdFwibmFtZVwiOiBcIm5ld05hdkJhcl9uYW1lX18yY1pfcVwiLFxuXHRcImljb25cIjogXCJuZXdOYXZCYXJfaWNvbl9fMmdMTTBcIixcblx0XCJzZWFyY2hDb250YWluZXJcIjogXCJuZXdOYXZCYXJfc2VhcmNoQ29udGFpbmVyX19fRVdTSFwiLFxuXHRcIm1hZ25pZmllclwiOiBcIm5ld05hdkJhcl9tYWduaWZpZXJfXzNVSzhkXCIsXG5cdFwic2VhcmNoQnRuXCI6IFwibmV3TmF2QmFyX3NlYXJjaEJ0bl9fUWZ1V19cIixcblx0XCJzZWFyY2hCYXJcIjogXCJuZXdOYXZCYXJfc2VhcmNoQmFyX19WQmI3a1wiLFxuXHRcIkNQQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX0NQQ29udGFpbmVyX18ydUlrX1wiLFxuXHRcInBsdXNcIjogXCJuZXdOYXZCYXJfcGx1c19fM0d3UVVcIixcblx0XCJDUFRleHRcIjogXCJuZXdOYXZCYXJfQ1BUZXh0X18yanJlMFwiLFxuXHRcInVzZXJXcmFwcGVyXCI6IFwibmV3TmF2QmFyX3VzZXJXcmFwcGVyX18yd3dwNVwiLFxuXHRcInVzZXJDb250YWluZXJcIjogXCJuZXdOYXZCYXJfdXNlckNvbnRhaW5lcl9fMWZHRXZcIixcblx0XCJ1c2VyT3B0aW9uXCI6IFwibmV3TmF2QmFyX3VzZXJPcHRpb25fXzNiWjFpXCIsXG5cdFwibm90aWZDb250YWluZXJcIjogXCJuZXdOYXZCYXJfbm90aWZDb250YWluZXJfXzNEcFBkXCIsXG5cdFwidGl0bGVCZWxsXCI6IFwibmV3TmF2QmFyX3RpdGxlQmVsbF9fMWVXZndcIixcblx0XCJiZWxsXCI6IFwibmV3TmF2QmFyX2JlbGxfXzNrRC03XCIsXG5cdFwibm9maWZDb3VudFwiOiBcIm5ld05hdkJhcl9ub2ZpZkNvdW50X18xYkN3YlwiLFxuXHRcInVzZXJJbmZvQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX3VzZXJJbmZvQ29udGFpbmVyX18xWFM0M1wiLFxuXHRcInVzZXJuYW1lXCI6IFwibmV3TmF2QmFyX3VzZXJuYW1lX19Fd0hXMFwiLFxuXHRcIkREQXJyb3dcIjogXCJuZXdOYXZCYXJfRERBcnJvd19fMTR4c1FcIixcblx0XCJ1c2VyRERcIjogXCJuZXdOYXZCYXJfdXNlckREX18yLUstTFwiLFxuXHRcInVzZXJcIjogXCJuZXdOYXZCYXJfdXNlcl9fMVJjaVJcIixcblx0XCJzaWduT3B0aW9uXCI6IFwibmV3TmF2QmFyX3NpZ25PcHRpb25fXzNUMkYtXCIsXG5cdFwiY29udGFpbmVyTVwiOiBcIm5ld05hdkJhcl9jb250YWluZXJNX18ySWppYVwiLFxuXHRcImJyYW5kQ29udGFpbmVyTVwiOiBcIm5ld05hdkJhcl9icmFuZENvbnRhaW5lck1fXzNJVEU1XCIsXG5cdFwibmF2SXRlbVwiOiBcIm5ld05hdkJhcl9uYXZJdGVtX19HTHdQdVwiLFxuXHRcIm5hdkljb25cIjogXCJuZXdOYXZCYXJfbmF2SWNvbl9fM255RHdcIixcblx0XCJzdWJOYXZDb250YWluZXJcIjogXCJuZXdOYXZCYXJfc3ViTmF2Q29udGFpbmVyX18zcVVRa1wiLFxuXHRcInNlYXJjaENvbnRhaW5lck1cIjogXCJuZXdOYXZCYXJfc2VhcmNoQ29udGFpbmVyTV9fMl9uQkRcIixcblx0XCJtZW51Q29udGFpbmVyXCI6IFwibmV3TmF2QmFyX21lbnVDb250YWluZXJfXzNtUkJEXCIsXG5cdFwibW9yZUNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9tb3JlQ29udGFpbmVyX18xWHZVWlwiLFxuXHRcInRpdGxlTW9yZVwiOiBcIm5ld05hdkJhcl90aXRsZU1vcmVfXzFtTUdhXCIsXG5cdFwibW9yZVwiOiBcIm5ld05hdkJhcl9tb3JlX18ySmdFcFwiLFxuXHRcIlNOSUNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9TTklDb250YWluZXJfXzF5NnBPXCIsXG5cdFwibm90aWZDb250YWluZXJNXCI6IFwibmV3TmF2QmFyX25vdGlmQ29udGFpbmVyTV9fMTctVTJcIixcblx0XCJkZE9wdGlvblwiOiBcIm5ld05hdkJhcl9kZE9wdGlvbl9fMWZxam1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvc3RXcmFwcGVyXCI6IFwicG9zdF9wb3N0V3JhcHBlcl9fcU55eVFcIixcblx0XCJwb3N0SG92ZXJcIjogXCJwb3N0X3Bvc3RIb3Zlcl9fVWlqblBcIixcblx0XCJwb3N0Q29sb3JJbmRpY2F0b3JcIjogXCJwb3N0X3Bvc3RDb2xvckluZGljYXRvcl9fM3I2dGhcIixcblx0XCJwb3N0Q29udGFpbmVyXCI6IFwicG9zdF9wb3N0Q29udGFpbmVyX18yVzZfMFwiLFxuXHRcInBvc3RIZWFkZXJXcmFwcGVyXCI6IFwicG9zdF9wb3N0SGVhZGVyV3JhcHBlcl9fMWxHTC1cIixcblx0XCJwb3N0SGVhZGVyU3RyZXRjaFwiOiBcInBvc3RfcG9zdEhlYWRlclN0cmV0Y2hfXzFtMHlBXCIsXG5cdFwicG9zdEhlYWRlclwiOiBcInBvc3RfcG9zdEhlYWRlcl9fM1dyYUZcIixcblx0XCJQSFVzZXJTdHJldGNoXCI6IFwicG9zdF9QSFVzZXJTdHJldGNoX18xaXVXNVwiLFxuXHRcIlBIVXNlclwiOiBcInBvc3RfUEhVc2VyX19GTDdPY1wiLFxuXHRcIlBIVUljb25cIjogXCJwb3N0X1BIVUljb25fXzFXQ2c3XCIsXG5cdFwiUEhEYXRlXCI6IFwicG9zdF9QSERhdGVfXzJ0UW5fXCIsXG5cdFwicG9zdFRpdGxlXCI6IFwicG9zdF9wb3N0VGl0bGVfXzEyUkNFXCIsXG5cdFwicG9zdERlc2NyaXB0aW9uXCI6IFwicG9zdF9wb3N0RGVzY3JpcHRpb25fXzNWQ1oxXCIsXG5cdFwicG9zdFNraWxsc0NvbnRhaW5lclwiOiBcInBvc3RfcG9zdFNraWxsc0NvbnRhaW5lcl9fMzNqdHRcIixcblx0XCJwb3N0U2tpbGxJbnNDb250YWluZXJcIjogXCJwb3N0X3Bvc3RTa2lsbEluc0NvbnRhaW5lcl9fM0tpQkRcIixcblx0XCJQU0lOYW1lXCI6IFwicG9zdF9QU0lOYW1lX19uT0M1OFwiLFxuXHRcIlBTSVN0YXRzXCI6IFwicG9zdF9QU0lTdGF0c19fMzZHRElcIixcblx0XCJwb3N0VXRpbGl0aWVzQ29udGFpbmVyXCI6IFwicG9zdF9wb3N0VXRpbGl0aWVzQ29udGFpbmVyX18xMWNpX1wiLFxuXHRcIlBVSWNvbkNvbnRhaW5lclwiOiBcInBvc3RfUFVJY29uQ29udGFpbmVyX18xUm9PVlwiLFxuXHRcIlBVSWNvblwiOiBcInBvc3RfUFVJY29uX18yRFhmM1wiLFxuXHRcInBvc3RXcmFwcGVyU21cIjogXCJwb3N0X3Bvc3RXcmFwcGVyU21fXzJ5ZlQ3XCIsXG5cdFwicG9zdFNtUmVtb3ZlXCI6IFwicG9zdF9wb3N0U21SZW1vdmVfXzFWU0JwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyV3JhcHBlclwiOiBcInVzZXJfdXNlcldyYXBwZXJfXzNLM3poXCIsXG5cdFwidXNlckNvbnRhaW5lclwiOiBcInVzZXJfdXNlckNvbnRhaW5lcl9fMXJMbklcIixcblx0XCJ1c2VyT3B0aW9uc1NwbGl0dGVyXCI6IFwidXNlcl91c2VyT3B0aW9uc1NwbGl0dGVyX18ycnFaWlwiLFxuXHRcInVzZXJJY29uQ29udGFpbmVyXCI6IFwidXNlcl91c2VySWNvbkNvbnRhaW5lcl9fMjM0aWpcIixcblx0XCJTVUhcIjogXCJ1c2VyX1NVSF9fMU1yZTBcIixcblx0XCJVSUNIXCI6IFwidXNlcl9VSUNIX18zalJJeFwiLFxuXHRcIkxHRFVzZXJDb250YWluZXJcIjogXCJ1c2VyX0xHRFVzZXJDb250YWluZXJfXzN3Y2FsXCIsXG5cdFwidXNlckJhbm5lclwiOiBcInVzZXJfdXNlckJhbm5lcl9fMUF4d2xcIixcblx0XCJ1c2VyVXNlcm5hbWVDb250YWluZXJcIjogXCJ1c2VyX3VzZXJVc2VybmFtZUNvbnRhaW5lcl9fMWhBOEhcIixcblx0XCJ1c2VyVXNlcm5hbWVcIjogXCJ1c2VyX3VzZXJVc2VybmFtZV9fOXByaW5cIixcblx0XCJ1c2VyVXNlcm5hbWVJY29uXCI6IFwidXNlcl91c2VyVXNlcm5hbWVJY29uX18zTzhxdFwiLFxuXHRcIlBOQ29udGFpbmVyXCI6IFwidXNlcl9QTkNvbnRhaW5lcl9fMjJMeVRcIixcblx0XCJQTkJ1YmJsZVwiOiBcInVzZXJfUE5CdWJibGVfX0pWVU9CXCIsXG5cdFwidXNlclV0aWxpdHlPcHRpb25cIjogXCJ1c2VyX3VzZXJVdGlsaXR5T3B0aW9uX18xVnVnQlwiLFxuXHRcIlVVT1NlbGVjdGVkXCI6IFwidXNlcl9VVU9TZWxlY3RlZF9fM3Z2UWtcIixcblx0XCJVVUFkZFBvc3RcIjogXCJ1c2VyX1VVQWRkUG9zdF9fMjNBdDdcIixcblx0XCJVVUFQSWNvblwiOiBcInVzZXJfVVVBUEljb25fXzNfUzhoXCIsXG5cdFwiVVVBUFRleHRcIjogXCJ1c2VyX1VVQVBUZXh0X18xYjNGMlwiLFxuXHRcIlVVSWNvblwiOiBcInVzZXJfVVVJY29uX194MUlCclwiLFxuXHRcIlVVTG9nb3V0XCI6IFwidXNlcl9VVUxvZ291dF9fMl9EYkhcIixcblx0XCJVVUxvZ291dEljb25cIjogXCJ1c2VyX1VVTG9nb3V0SWNvbl9fMkdQQ0VcIixcblx0XCJ1c2VyTm90aWZpY2F0aW9uQnViYmxlXCI6IFwidXNlcl91c2VyTm90aWZpY2F0aW9uQnViYmxlX18zaDFOV1wiLFxuXHRcIlVVVXRpbGl0aWVzU3BsaXR0ZXJcIjogXCJ1c2VyX1VVVXRpbGl0aWVzU3BsaXR0ZXJfXzNaS0JQXCIsXG5cdFwiVVVDb250ZW50Q29udGFpbmVyXCI6IFwidXNlcl9VVUNvbnRlbnRDb250YWluZXJfXzFHS0JfXCIsXG5cdFwiTkxVc2VyQ29udGFpbmVyXCI6IFwidXNlcl9OTFVzZXJDb250YWluZXJfXzNaNUx3XCIsXG5cdFwidXNlck9wdGlvbkNvbnRhaW5lclwiOiBcInVzZXJfdXNlck9wdGlvbkNvbnRhaW5lcl9fMzM4Um1cIixcblx0XCJ1c2VyT3B0aW9uc1wiOiBcInVzZXJfdXNlck9wdGlvbnNfX2t0ZXNnXCIsXG5cdFwidXNlckljb25cIjogXCJ1c2VyX3VzZXJJY29uX18yMHQ1NVwiLFxuXHRcInVzZXJGb3JtQ29udGFpbmVyXCI6IFwidXNlcl91c2VyRm9ybUNvbnRhaW5lcl9fQWhKbHVcIixcblx0XCJ1c2VyRm9ybVwiOiBcInVzZXJfdXNlckZvcm1fX3J4Q2RSXCIsXG5cdFwiVUZMYWJlbFwiOiBcInVzZXJfVUZMYWJlbF9fMnRfMXVcIixcblx0XCJVRklucHV0XCI6IFwidXNlcl9VRklucHV0X18zd09VNlwiLFxuXHRcIlVGU3VibWl0XCI6IFwidXNlcl9VRlN1Ym1pdF9fdFN2TGRcIixcblx0XCJub3RpZmljYXRpb25Db250YWluZXJcIjogXCJ1c2VyX25vdGlmaWNhdGlvbkNvbnRhaW5lcl9fMnh5TW1cIixcblx0XCJub3RpZmljYXRpb25IZWFkZXJcIjogXCJ1c2VyX25vdGlmaWNhdGlvbkhlYWRlcl9fMXE4Ti1cIixcblx0XCJOVXNlckNvbnRhaW5lclwiOiBcInVzZXJfTlVzZXJDb250YWluZXJfXzN3RnItXCIsXG5cdFwiTlVzZXJJY29uXCI6IFwidXNlcl9OVXNlckljb25fX1pFTjN0XCIsXG5cdFwiTlVzZXJcIjogXCJ1c2VyX05Vc2VyX18zOTJOVVwiLFxuXHRcIk5Vc2VyTGFiZWxcIjogXCJ1c2VyX05Vc2VyTGFiZWxfXzNoYW1mXCIsXG5cdFwiTlNraWxsQ29udHJpYnV0aW9uc1wiOiBcInVzZXJfTlNraWxsQ29udHJpYnV0aW9uc19faGhZRC1cIixcblx0XCJOUHJvcG9zZWRIZWxwXCI6IFwidXNlcl9OUHJvcG9zZWRIZWxwX18zaEY2UVwiLFxuXHRcIk5Ta2lsbEluc1wiOiBcInVzZXJfTlNraWxsSW5zX18yYTlTVVwiLFxuXHRcIk5Ta2lsbFByb3BcIjogXCJ1c2VyX05Ta2lsbFByb3BfXzJhUlIxXCIsXG5cdFwibm90aWZpY2F0aW9uQ2hvaWNlXCI6IFwidXNlcl9ub3RpZmljYXRpb25DaG9pY2VfX2x6ZFZYXCIsXG5cdFwibm90aWZpY2F0aW9uT3B0aW9uXCI6IFwidXNlcl9ub3RpZmljYXRpb25PcHRpb25fXzN3N1hIXCIsXG5cdFwibm90aWZpY2F0aW9uRW1haWxcIjogXCJ1c2VyX25vdGlmaWNhdGlvbkVtYWlsX19nckxfWVwiLFxuXHRcIk5NZXNzYWdlXCI6IFwidXNlcl9OTWVzc2FnZV9fMk4yOWNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVzZXJVdGlsSW5mb1wiOiBcInVzZXJVdGlsaXRpZXNfdXNlclV0aWxJbmZvX18xLVcxYlwiLFxuXHRcInNpbXBsZVBvc3RCYW5uZXJcIjogXCJ1c2VyVXRpbGl0aWVzX3NpbXBsZVBvc3RCYW5uZXJfXzM1NmxlXCIsXG5cdFwidXNlclV0aWxOb3RpZlwiOiBcInVzZXJVdGlsaXRpZXNfdXNlclV0aWxOb3RpZl9feFIyNVVcIixcblx0XCJub3RpZmljYXRpb25Db250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvbkNvbnRhaW5lcl9fNXNudVdcIixcblx0XCJub3RpZkNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZDb250YWluZXJfXzJEZ2VlXCIsXG5cdFwibm90aWZTZW5kZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmU2VuZGVyX18yZVIyR1wiLFxuXHRcIm5vdGlmTWVzc2FnZVwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZNZXNzYWdlX18xZXpfWFwiLFxuXHRcIm5vdGlmQWNjZXB0ZWRcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmQWNjZXB0ZWRfXzI4bDllXCIsXG5cdFwibm90aWZEZWNsaW5lZFwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZEZWNsaW5lZF9fLWdrd0dcIixcblx0XCJub3RpZmljYXRpb25PcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvbk9wdGlvbl9fM25yYUpcIixcblx0XCJzdGFuZGFyZEhvdmVyXCI6IFwidXNlclV0aWxpdGllc19zdGFuZGFyZEhvdmVyX18xY21Ca1wiLFxuXHRcIk5BbnN3ZXJJbnB1dFwiOiBcInVzZXJVdGlsaXRpZXNfTkFuc3dlcklucHV0X18yaG5mVFwiLFxuXHRcImRlY2lkZVwiOiBcInVzZXJVdGlsaXRpZXNfZGVjaWRlX19WSURHYVwiLFxuXHRcIm9wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfb3B0aW9uX19BU0wtS1wiLFxuXHRcImVtYWlsXCI6IFwidXNlclV0aWxpdGllc19lbWFpbF9fMnUtdmVcIixcblx0XCJza2lsbGxcIjogXCJ1c2VyVXRpbGl0aWVzX3NraWxsbF9fMUlMeERcIixcblx0XCJub3RpZkZpbHRlckNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZGaWx0ZXJDb250YWluZXJfXzFVcnk1XCIsXG5cdFwiTkZDcmVhdG9yQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ORkNyZWF0b3JDb250YWluZXJfXzJjNFM2XCIsXG5cdFwibWVzc2FnZXNPcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX21lc3NhZ2VzT3B0aW9uX19lUms1UVwiLFxuXHRcIk5GTGFiZWxcIjogXCJ1c2VyVXRpbGl0aWVzX05GTGFiZWxfXzMzVklFXCIsXG5cdFwiTkZPcHRpb25Db250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX05GT3B0aW9uQ29udGFpbmVyX18yOTc2S1wiLFxuXHRcIk5GT3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19ORk9wdGlvbl9fMmxfN0NcIixcblx0XCJORlNwbGl0dGVyXCI6IFwidXNlclV0aWxpdGllc19ORlNwbGl0dGVyX18xVWtBb1wiLFxuXHRcIk5GRERPcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX05GRERPcHRpb25fXzNYSFdKXCIsXG5cdFwibm90aWZpY2F0aW9uQ0xDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvbkNMQ29udGFpbmVyX19sVVN2QVwiLFxuXHRcIm5vdGlmaWNhdGlvblN1Y2Vzc0ljb25cIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvblN1Y2Vzc0ljb25fXzFjdnFyXCIsXG5cdFwibm90aWZpY2F0aW9uQ2xcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvbkNsX18yLV8zTlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstY29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==