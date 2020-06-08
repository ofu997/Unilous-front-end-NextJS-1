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
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\newNavBar\\NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const NavBar = props => {
  if (props.noUser) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "HWM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainer} neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/logo/logoW.svg",
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 33
      }
    }), __jsx("h2", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }, "Unilous"))))), __jsx("div", {
      className: "SWM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerM,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainerM} neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/logo/logoW.svg",
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 33
      }
    }), __jsx("h2", {
      className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
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
  const {
    0: subNavItem,
    1: setSubNavItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const resetNav = () => {
    setSubNav(false);
    setSubNavItem(false);
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
    if (state === subNavItem) {
      setSubNavItem(false);
    } else {
      setSubNavItem(state);
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
      lineNumber: 109,
      columnNumber: 39
    }
  }) : __jsx(_signed_NotSigned__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
          lineNumber: 115,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchContainerM,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/results/[searchQuery]",
        as: `/results/${SQCleaned}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBtn,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "/svg/searchWW.svg",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.magnifier,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
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
          lineNumber: 120,
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
            lineNumber: 128,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('notification'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 29
          }
        }), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('user'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 29
          }
        }), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.moreContainer,
          onClick: () => handleSubNavItemState('more'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/moreW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.more,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
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
            lineNumber: 141,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('notification'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notifContainerM,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 33
          }
        }, __jsx("img", {
          src: "/svg/bellW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bell,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 37
          }
        }), __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nofifCount,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 37
          }
        }, "-"))), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOption,
          onClick: () => handleSubNavItemState('user'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.username,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 33
          }
        }, username)), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.moreContainer,
          onClick: () => handleSubNavItemState('more'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/moreW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.more,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 33
          }
        }))));
      } else {
        return __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subNavContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
          onClick: () => handleSubNavItemState('sign in'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 29
          }
        }, "sign in"), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
          onClick: () => handleSubNavItemState('register'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 29
          }
        }, "register"), __jsx("button", {
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.moreContainer,
          onClick: () => handleSubNavItemState('more'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/moreW.svg",
          className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.more,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 33
          }
        }))));
      }
    }
  };

  const SubNavItem = () => {
    if (!subNavItem) {
      return null;
    }

    if (subNavItem === 'sign in') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 17
        }
      }, __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSuccess: resetNav,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }
      }));
    }

    if (subNavItem === 'register') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 17
        }
      }, __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSuccess: resetNav,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }
      }));
    }

    if (subNavItem === 'notification') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/svg/bellW.svg",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleBell,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }
      }), __jsx(_user_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }
      }));
    }

    if (subNavItem === 'user') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }
      }, props.currentUser.username), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onClick: () => resetNav(),
        href: "/user/[username]",
        as: `/user/${decodeURIComponent(props.currentUser.username)}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
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
          lineNumber: 204,
          columnNumber: 25
        }
      }, __jsx("h3", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
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
          lineNumber: 206,
          columnNumber: 21
        }
      }, "Sign out"));
    }

    if (subNavItem === 'more') {
      return __jsx("div", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.SNIContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/svg/moreW.svg",
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleMore,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onClick: () => resetNav(),
        href: "/postformpage",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
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
          lineNumber: 215,
          columnNumber: 25
        }
      }, __jsx("h3", {
        className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ddOption,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 81
        }
      }, "create project"))));
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "HWM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainer} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 29
    }
  }), __jsx("h2", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, "Unilous"))), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/results/[searchQuery]",
    as: `/results/${SQCleaned}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/svg/searchWW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.magnifier,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
      lineNumber: 236,
      columnNumber: 25
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/postformpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CPContainer} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/plusW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.plus,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CPText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 29
    }
  }, "create project"))), signedState)), __jsx("div", {
    className: "SWM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerM,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.brandContainerM} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 29
    }
  }), __jsx("h2", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 29
    }
  }, "Unilous"))), __jsx("button", {
    onClick: () => handleSubNavState('search'),
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/searchWW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 29
    }
  }))), __jsx("button", {
    onClick: () => handleSubNavState('menu'),
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/svg/hamburgerW.svg",
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  })), __jsx(SubNav, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }), __jsx(SubNavItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 21
    }
  }))));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token // alertNotif: state.alertNotif

  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearToken: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_10__["clearToken"], dispatch),
    setCurrentUser: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_11__["setCurrentUser"], dispatch) // resetAlert: bindActionCreators(resetAlert, dispatch),

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
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\newNavBar\\signed\\NotSigned.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const NotSigned = props => {
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
  const showInDD = userState ? userState === 'register' ? __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 36
    }
  }) : __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 51
    }
  }) : null;
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
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
    onClick: () => handleUserState('signin'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "sign in"), __jsx("button", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,
    onClick: () => handleUserState('register'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "register")), __jsx("div", {
    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userDD,
    style: showUserDD,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
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

/***/ "./components/postPage/PostImages.js":
/*!*******************************************!*\
  !*** ./components/postPage/PostImages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/pages/newPostPage.module.css */ "./styles/pages/newPostPage.module.css");
/* harmony import */ var _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\postPage\\PostImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PostImages = props => {
  const {
    0: imgShown,
    1: setImgShown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const images = props.imageLinks;
  const imagesAmt = images.length;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (imagesAmt > 0) setImgShown(images[0]);
  }, [images, imagesAmt]);

  const setToImgShown = src => {
    setImgShown(src);
  };

  const HIStyle = {
    borderColor: props.color,
    width: '100%'
  };
  if (imagesAmt === 0) return null;else if (imagesAmt === 1) {
    return __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.PPCPicturesContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx("img", {
      style: HIStyle,
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.PPCPicturesHighlight,
      src: imgShown,
      alt: "highlight pic",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }));
  } else {
    const imageOptions = images.map(i => i === imgShown ? __jsx("img", {
      key: `img${i}`,
      onClick: () => setToImgShown(i),
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.PPCPicturesInstance,
      style: {
        borderColor: props.color
      },
      src: i,
      alt: "pic",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }) : __jsx("img", {
      key: `img${i}`,
      onClick: () => setToImgShown(i),
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.PPCPicturesInstance,
      style: {
        borderColor: '#282828'
      },
      src: i,
      alt: "pic",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }));
    return __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.PPCPicturesContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, __jsx("img", {
      style: HIStyle,
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.PPCPicturesHighlight,
      src: imgShown,
      alt: "highlight pic",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.PPCAllPicturesContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, imageOptions));
  }
}; // const mapStateToProps = (state) => {
// 	return {
//         
// 	}
// }


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(PostImages));

/***/ }),

/***/ "./components/postPage/PostLinks.js":
/*!******************************************!*\
  !*** ./components/postPage/PostLinks.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/functions */ "./functions/functions.js");
/* harmony import */ var _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pages/newPostPage.module.css */ "./styles/pages/newPostPage.module.css");
/* harmony import */ var _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\postPage\\PostLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const PostLinks = props => {
  const links = props.referenceLinks;

  if (links.length === 0) {
    return null;
  }

  const linksToShow = links.map(l => {
    const stats = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_2__["websiteStats"])(l);
    let cleanedLink = l.split('/').slice(2, 4).join('/');

    if (cleanedLink.length > 40) {
      cleanedLink = `${cleanedLink.slice(0, 40)} ...`;
    }

    return __jsx("a", {
      href: l,
      className: `${_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PPCReferenceLink} neutralize-link`,
      style: {
        backgroundColor: stats.color
      },
      rel: "nofollow",
      key: `referenceLink${l}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PPCRLIcon,
      src: "/svg/websites/internet.svg",
      alt: stats.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }), __jsx("h4", {
      className: "NM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, cleanedLink));
  });
  return __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PPCLinksContaier,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, linksToShow);
}; // const mapStateToProps = (state) => {
// 	return {
// 	}
// }


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(PostLinks));

/***/ }),

/***/ "./components/postPage/PostQandA.js":
/*!******************************************!*\
  !*** ./components/postPage/PostQandA.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\postPage\\PostQandA.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import userIcon from '../../static/svg/userB.svg'



const PostQandA = props => {
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const answerStyle = expanded ? {
    display: 'block'
  } : {
    display: 'none'
  };
  return __jsx("div", {
    className: "PPC-qanda-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/user/[username]",
    as: `/user/${encodeURIComponent(props.qanda.userFrom.username)}`,
    className: "PPC-qanda-header neutralize-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "PPC-user-icon",
    src: userIcon,
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "NM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, props.qanda.userFrom.username)), __jsx("p", {
    className: "PCC-qanda-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, props.qanda.question), __jsx("div", {
    className: "PCC-qanda-answer-container",
    style: answerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/user/[username]",
    as: `/user/${encodeURIComponent(props.qanda.userFrom.username)}`,
    className: "PPC-qanda-header neutralize-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "PPC-user-icon",
    src: userIcon,
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "NM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, props.qanda.userTo.username)), __jsx("p", {
    className: "PCC-qanda-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, props.qanda.answer)), __jsx("div", {
    onClick: () => setExpanded(!expanded),
    className: "PCC-answer-toggle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, expanded ? 'hide answer' : 'show answer'));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(PostQandA));

/***/ }),

/***/ "./components/text-field/FormContainer.js":
/*!************************************************!*\
  !*** ./components/text-field/FormContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\text-field\\FormContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FormContainer = props => {
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const signInWarning = props.token ? null : __jsx("h3", {
    className: "warning-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "must be signed to perform the these actions");

  if (expanded) {
    return __jsx("div", {
      className: "form-wrapper",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-container",
      style: {
        borderTopColor: props.pallette.color
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("div", {
      onClick: () => setExpanded(!expanded),
      className: "expanded-overlay SWM",
      style: {
        backgroundColor: props.pallette.color
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: props.pallette.shrinkIcon,
      className: "overlay-image-expanded",
      alt: "shrink form",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    })), signInWarning, props.children));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-wrapper HWM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-container",
    style: {
      borderTopColor: props.pallette.color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, signInWarning, props.children)), __jsx("div", {
    className: "form-wrapper-m",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    onClick: () => setExpanded(!expanded),
    className: "expand-overlay SWM",
    style: {
      backgroundColor: props.pallette.color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: props.pallette.handshakeIcon,
    className: "overlay-image",
    alt: "expand form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))));
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(FormContainer));

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schemas/mutations */ "./schemas/mutations.js");
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schemas/queries */ "./schemas/queries.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/pages/newPostPage.module.css */ "./styles/pages/newPostPage.module.css");
/* harmony import */ var _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_postPage_PostImages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/postPage/PostImages */ "./components/postPage/PostImages.js");
/* harmony import */ var _components_postPage_PostLinks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/postPage/PostLinks */ "./components/postPage/PostLinks.js");
/* harmony import */ var _components_postPage_PostQandA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/postPage/PostQandA */ "./components/postPage/PostQandA.js");
/* harmony import */ var _components_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/text-field/InputHeader */ "./components/text-field/InputHeader.js");
/* harmony import */ var _components_text_field_FormContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/text-field/FormContainer */ "./components/text-field/FormContainer.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../functions/functions */ "./functions/functions.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_21__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const PostPage = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["withRouter"])(props => {
  const {
    0: currentPost,
    1: setCurrentPost
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.post);
  const {
    0: skillExpanded,
    1: setSkillExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const question = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["useField"])('text');
  const message = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["useField"])('text');

  const onJoinError = e => {
    if (e.message.includes('is longer than the maximum allowed length')) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `message$: message of ${message.fields.value.length} characters exceeded the maximum of 800 characters.`, props.setAlert, props.resetAlert);
    }
  };

  const onQuestionError = e => {
    if (e.message.includes('is longer than the maximum allowed length')) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `question$: question of ${question.fields.value.length} characters exceeded the maximum of 800 characters.`, props.setAlert, props.resetAlert);
    }
  };

  const onFollowError = e => {
    console.log(e);
  };

  const [followMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["SAVE_POST"], {
    onError: onFollowError
  });
  const [makeNotification] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["MAKE_NOTIFICATION"], {
    onError: onJoinError
  });
  const [askQuestion] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["ASK_QUESTION"], {
    onError: onQuestionError
  });

  const handleFollow = async () => {
    if (!props.token) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', 'sign in$: must be signed in to perform this action', props.setAlert, props.resetAlert);
    }

    const result = await followMutation({
      variables: {
        user: props.currentUser._id,
        postId: currentPost._id
      }
    });

    if (result) {
      props.setCurrentUserSP(props.currentUser.savedPosts.concat(currentPost));
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('success', 'followed$: you are now following this post', props.setAlert, props.resetAlert);
    }
  };

  const qandaQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_schemas_queries__WEBPACK_IMPORTED_MODULE_4__["Q_AND_A_NOTIFS"], {
    variables: {
      title: decodeURIComponent(props.postTitle)
    }
  }); // const postQuery = useQuery(FIND_POST, {
  //     variables: {title: decodeURIComponent(props.postTitle)}
  // })

  const qandaChangeConditions = () => {
    const query = qandaQuery.data;
    const reducer = currentPost;
    if (!query) return null;
    if (!query.searchAnsweredQToPost) return null;
    if (!reducer) return null;
    if (reducer.qanda) return null;
    return query.searchAnsweredQToPost;
  }; // const postChangeConditions = () => {
  //     const query = postQuery.data
  //     const reducer = currentPost
  //     if (!query) return null
  //     if (!query.findPost) return null
  //     if (reducer) {
  //         if (reducer.title === query.findPost.title) return null
  //     }
  //     return query.findPost
  // }


  const qanda = qandaChangeConditions(); // const post = postChangeConditions()

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (qanda) {
      setCurrentPost(_objectSpread(_objectSpread({}, currentPost), {}, {
        qanda
      }));
    } // if (post) {
    //     setCurrentPost(post)
    // }

  }, [qanda, setCurrentPost, currentPost]);

  if (!currentPost) {
    return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 16
      }
    });
  }

  let cleanedTime = new Date(Number(currentPost.time));
  cleanedTime = cleanedTime.toString().split(' '); // cleanedTime = cleanedTime.slice(1,4).join(' ') + ' ' + cleanedTime[4].split(':').slice(0,2).join(':')

  cleanedTime = cleanedTime.slice(1, 3).join(' ') + ', ' + cleanedTime[3];
  let qandaList = currentPost.qanda ? currentPost.qanda.map(i => __jsx(_components_postPage_PostQandA__WEBPACK_IMPORTED_MODULE_10__["default"], {
    qanda: i,
    key: `QandA${i.question}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 68
    }
  })) : __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 122
    }
  });
  qandaList = qandaList.length ? qandaList : __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.qandaText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 48
    }
  }, "no question and answer pairs yet");
  const skillsHTML = [];
  const questionStyle = skillExpanded ? {
    display: 'none'
  } : {
    display: 'block'
  };

  const handleNotification = async proposedContribution => {
    if (!props.currentUser) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `sign in$: must be signed in to perform this action`, props.setAlert, props.resetAlert);
      return null;
    }

    if (!message.fields.value.length) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `message$: message field is required`, props.setAlert, props.resetAlert);
      return null;
    }

    const result = await makeNotification({
      variables: {
        userFromId: props.currentUser._id,
        userToId: currentPost.user._id,
        message: message.fields.value,
        postId: currentPost._id,
        proposedContribution
      }
    });

    if (result) {
      setSkillExpanded(null);
      message.reset();
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('success', `sent$: (check your answered notifications for the response) request has been sent to ${currentPost.user.username}`, props.setAlert, props.resetAlert);
    }
  };

  for (const ins in currentPost.skillNames) {
    const skillName = currentPost.skillNames[ins];
    const skillFill = currentPost.skillFills[ins];
    const skillCap = currentPost.skillCapacities[ins];
    const messageStyle = skillExpanded === skillName ? {
      display: 'block'
    } : {
      display: 'none'
    };
    const buttonToShown = skillExpanded === skillName ? __jsx("h4", {
      onClick: () => setSkillExpanded(null),
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSButtonExit,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, "X") : skillFill < skillCap ? __jsx("h4", {
      onClick: () => setSkillExpanded(skillName),
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSButton,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, "join") : __jsx("h4", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSButtonDisabled,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, "join");
    const skillProposition = Array(currentPost.skillNames.length).fill(0);
    skillProposition[ins] = 1;
    skillsHTML.push(__jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSSkill,
      key: `PPSS${skillName}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSDivision,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }), __jsx("p", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSSkillName,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, skillName), __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSSkillSecondary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSSkillInfo,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 21
      }
    }, skillFill, "/", skillCap), buttonToShown), __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSSkillForm,
      style: messageStyle,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSTitle,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }
    }, __jsx(_components_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
      inputFor: "PPS-message",
      info: false,
      title: "message",
      color: "white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSInputContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    }, __jsx("textarea", _extends({
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSInput,
      id: "PPS-message"
    }, message.fields, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCSubmitContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }
    }, __jsx("h4", {
      onClick: () => handleNotification(skillProposition),
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSBButton,
      style: {
        borderColor: currentPost.color
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 26
      }
    }, "join")))));
  }

  const handleQuestion = async () => {
    if (!props.currentUser) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `sign in$: must be signed in to perform this action`, props.setAlert, props.resetAlert);
      return null;
    }

    if (!question.fields.value.length) {
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `question$: question field is required`, props.setAlert, props.resetAlert);
      return null;
    }

    const result = await askQuestion({
      variables: {
        userFromId: props.currentUser._id,
        userToId: currentPost.user._id,
        postId: currentPost._id,
        question: question.fields.value
      }
    });

    if (result) {
      question.reset();
      Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('success', `sent$: (check your answered notifications for the response) question has been sent to ${currentPost.user.username}`, props.setAlert, props.resetAlert);
    }
  };

  const pallette = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_15__["palletteGenerator"])(currentPost.color).colorPallette;
  const teamHTML = currentPost.team ? currentPost.team.map(un => __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/user/username",
    as: `/user/${un}`,
    key: `PT${un}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: `${_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCUserContainer} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCUserIcon,
    src: "/svg/userB.svg",
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "NM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }, un)))) : null;

  const HomeContent = () => {
    return __jsx("div", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOptions,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/results/[searchQuery]",
      as: "/results/all",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: `${_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOption} neutralize-link`,
      style: {
        backgroundColor: '#282828'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/svg/searchWW.svg",
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOptionIcon,
      alt: "search",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 25
      }
    }), __jsx("h3", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOptionText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 25
      }
    }, "browse all"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/postformpage",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: `${_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOption} neutralize-link`,
      style: {
        backgroundColor: 'rgb(52,166,95)'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/svg/plusW.svg",
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOptionIcon,
      alt: "add",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 25
      }
    }), __jsx("h3", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOptionText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    }, "add project"))), __jsx("a", {
      href: "https://discord.gg/v7vFc9U",
      className: `${_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOption} ${_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOptionHighlight} neutralize-link`,
      style: {
        backgroundColor: '#7289DA'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "/svg/websites/discord.svg",
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOptionIcon,
      alt: "Discord",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 21
      }
    }), __jsx("h3", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.homeOptionText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }, "community discord")));
  };

  const ModifiedDescription = () => {
    const spacedDis = currentPost.description.split(' ');

    for (const i in spacedDis) {
      if (spacedDis[i].includes('https://')) {
        spacedDis[i] = `<a href="${spacedDis[i]}" class="p-link neutralize-link">${spacedDis[i]}</a>`;
      }

      if (spacedDis[i].includes('http://')) {
        spacedDis[i] = `<a href="${spacedDis[i]}" class="p-link neutralize-link">${spacedDis[i]}</a>`;
      }
    }

    const finalDis = spacedDis.join(' ');
    return __jsx("p", {
      className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCDescription,
      dangerouslySetInnerHTML: {
        __html: finalDis
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 16
      }
    });
  };

  const skillCap = currentPost.skillCapacities.reduce((n, t) => t + n, 0);
  const skillFill = currentPost.skillFills.reduce((n, t) => t + n, 0);

  const titleKeywords = () => {
    let title = currentPost.title;
    title = title.split(' ');
    let keywords = title.map(w => {
      if (w.slice(0, 1).toUpperCase() === w.slice(0, 1) && w.slice(0, 1).toLowerCase() === w.slice(0, 1)) return null;
      if (w.slice(0, 1).toUpperCase() === w.slice(0, 1)) return w + ',';
      return null;
    });
    keywords = keywords.length ? keywords.join(' ') : title[0] + ', ';
    return keywords;
  }; // <Helmet>
  //     <title>{currentPost.title}</title>
  //     <meta name="author" content={currentPost.user.username} />
  //     <meta name="description" content={`Join the project, be part of "${currentPost.title}" team! So far ${skillFill} awesome people have joined, there are only ${skillCap - skillFill} slots left.`} />
  //     <meta name="keywords" content={`${titleKeywords()} build, team`} />
  // </Helmet>


  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }, "Unilous"), __jsx("meta", {
    property: "og:image",
    content: "https://i.imgur.com/d6bsnRx.png",
    key: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Looking to join or make a team, Unilous will help you make it happen! Join our skilled community of people looking to make something great.",
    key: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "google-site-verification",
    content: "-ccdPuW0WxjjhXsjDgnfbYeolghrlU6r3MLjOdWKpCw",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "navbar-height",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.postPageContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 17
    }
  }, __jsx(HomeContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 21
    }
  }), __jsx("h2", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  }, currentPost.title), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCSubHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/user/[username]",
    as: `/user/${encodeURIComponent(currentPost.user.username)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: `${_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCUserContainer} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 29
    }
  }, __jsx("img", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCUserIcon,
    src: "/svg/userB.svg",
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 33
    }
  }), __jsx("p", {
    className: "NM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 33
    }
  }, currentPost.user.username))), __jsx("p", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 25
    }
  }, cleanedTime)), __jsx(ModifiedDescription, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 21
    }
  }), __jsx(_components_postPage_PostImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
    imageLinks: currentPost.imageLinks,
    color: currentPost.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 21
    }
  }), __jsx(_components_postPage_PostLinks__WEBPACK_IMPORTED_MODULE_9__["default"], {
    referenceLinks: currentPost.referenceLinks,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }), __jsx("h3", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 21
    }
  }, "Q and A"), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCAllQandaContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 21
    }
  }, qandaList), __jsx("h3", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 21
    }
  }, "team"), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.teamInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  }, teamHTML.length, " team members"), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTeamContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, teamHTML)), __jsx(_components_text_field_FormContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    pallette: pallette,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSFollowHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: () => handleFollow(),
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSFollowHeader,
    style: {
      borderTop: '2px solid currentPost.color'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCUserIcon,
    fill: currentPost.color,
    viewBox: "0 -28 512.00002 512",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 156
    }
  })), __jsx("p", {
    className: "NM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 29
    }
  }, "follow"))), skillsHTML, __jsx("div", {
    style: questionStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSDivision,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 25
    }
  }, __jsx(_components_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    inputFor: "PPS-question",
    info: true,
    title: "question",
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 29
    }
  }, __jsx("ul", {
    style: {
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 37
    }
  }, "if answered it will be shown on post")))), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSInputContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 25
    }
  }, __jsx("textarea", _extends({
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSInput,
    id: "PPS-question"
  }, question.fields, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCSubmitContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 25
    }
  }, __jsx("h4", {
    onClick: () => handleQuestion(),
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSButton,
    style: {
      borderColor: currentPost.color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 29
    }
  }, "ask"))))));
}); // const mapStateToProps = (state) => {
// 	return {
//         currentUser: state.currentUser,
//         token: state.token
// 	}
// }
// export default connect(
//     mapStateToProps, 
//     { setAlert, resetAlert, setCurrentUserSP }
// )(PostPage)

PostPage.getInitialProps = async () => {
  const postQuery = await _lib_apollo__WEBPACK_IMPORTED_MODULE_18__["apolloClient"].query({
    query: _schemas_queries__WEBPACK_IMPORTED_MODULE_4__["FIND_POST"],
    variables: {
      title: 'Unilous'
    }
  }).catch(err => console.log(err)); // console.log(postQuery)

  return {
    post: postQuery.data.findPost
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token,
    alertNotif: state.alertNotif
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAlert: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_14__["setAlert"], dispatch),
    resetAlert: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_14__["resetAlert"], dispatch),
    setToken: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_17__["setToken"], dispatch),
    setCurrentUserSP: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_13__["setCurrentUserSP"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PostPage));

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

/***/ "./styles/pages/newPostPage.module.css":
/*!*********************************************!*\
  !*** ./styles/pages/newPostPage.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"test": "newPostPage_test__BDpwO",
	"postPageContainer": "newPostPage_postPageContainer__3wx5_",
	"homeOptions": "newPostPage_homeOptions__2xj1U",
	"homeOptionHighlight": "newPostPage_homeOptionHighlight__iakF_",
	"PPContent": "newPostPage_PPContent__1t_MR",
	"homeOption": "newPostPage_homeOption__9Nfyk",
	"homeOptionIcon": "newPostPage_homeOptionIcon__3NGwc",
	"homeOptionText": "newPostPage_homeOptionText__3Q6ef",
	"PPCTitle": "newPostPage_PPCTitle__2HSQT",
	"PPCSubHeader": "newPostPage_PPCSubHeader__3tdZq",
	"PPCUserContainer": "newPostPage_PPCUserContainer__1exsH",
	"PPCUserIcon": "newPostPage_PPCUserIcon__b_wRt",
	"PPCTime": "newPostPage_PPCTime__1xlbB",
	"PPCDescription": "newPostPage_PPCDescription__2c7ft",
	"PPCPicturesContainer": "newPostPage_PPCPicturesContainer__3ZYUa",
	"PPCPicturesHighlight": "newPostPage_PPCPicturesHighlight__3tLqe",
	"PPCAllPicturesContainer": "newPostPage_PPCAllPicturesContainer__2c-aB",
	"PPCPicturesInstance": "newPostPage_PPCPicturesInstance__GV_SZ",
	"PPCLinksContainer": "newPostPage_PPCLinksContainer__2ZA9B",
	"PPCReferenceLink": "newPostPage_PPCReferenceLink__2T1Up",
	"PPCRLIcon": "newPostPage_PPCRLIcon__Z6oSJ",
	"PPSideBarContainer": "newPostPage_PPSideBarContainer__1cIu2",
	"PPSideBar": "newPostPage_PPSideBar__1Rlbd",
	"PPCQandaContainer": "newPostPage_PPCQandaContainer__X4yCt",
	"PPCQandaHeader": "newPostPage_PPCQandaHeader__2oml4",
	"PCCQandaContent": "newPostPage_PCCQandaContent__3wHhs",
	"PCCAnswerToggle": "newPostPage_PCCAnswerToggle__1tbKf",
	"PCCQandaAnswerContainer": "newPostPage_PCCQandaAnswerContainer__3NjEj",
	"PPSFollowHeader": "newPostPage_PPSFollowHeader__l7iET",
	"PPSDivision": "newPostPage_PPSDivision__2MDmz",
	"PPSSkill": "newPostPage_PPSSkill__c4ksd",
	"PPSSkillName": "newPostPage_PPSSkillName__2fUXD",
	"PPSSkillSecondary": "newPostPage_PPSSkillSecondary__QevBF",
	"PPSSkillInfo": "newPostPage_PPSSkillInfo__1ZU7w",
	"PPSButtonExit": "newPostPage_PPSButtonExit__3xHY_",
	"PPSButton": "newPostPage_PPSButton__10zTD",
	"PPSButtonDisabled": "newPostPage_PPSButtonDisabled__1izJO",
	"PPSTitle": "newPostPage_PPSTitle__53_3-",
	"PPSSkillForm": "newPostPage_PPSSkillForm__1uAvk",
	"PPSInputContainer": "newPostPage_PPSInputContainer__3pak7",
	"PPSInput": "newPostPage_PPSInput__2gZsr",
	"PPCSubmitContainer": "newPostPage_PPCSubmitContainer__4uW1D",
	"PPCTeamContainer": "newPostPage_PPCTeamContainer__3GbcG",
	"PPCTeamMember": "newPostPage_PPCTeamMember__2tZsE",
	"qandaText": "newPostPage_qandaText__1zTCh",
	"teamInfo": "newPostPage_teamInfo__3OK4c"
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
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\Projects\projectU\projectu\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdOYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3TmF2QmFyL3NpZ25lZC9Ob3RTaWduZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdOYXZCYXIvc2lnbmVkL1NpZ25lZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci91c2VyL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdOYXZCYXIvdXNlci9Vc2VyVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC9Qb3N0U21hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0UGFnZS9Qb3N0SW1hZ2VzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdFBhZ2UvUG9zdExpbmtzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdFBhZ2UvUG9zdFFhbmRBLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGV4dC1maWVsZC9Gb3JtQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGV4dC1maWVsZC9JbnB1dEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvZm9ybS9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvZm9ybS9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3V0aWxpdGllcy9Ob3RpZi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvdXRpbGl0aWVzL1VzZXJOb3RpZkxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZnVuY3Rpb25zL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy90b2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9zY2hlbWFzL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zY2hlbWFzL3F1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2lucHV0SGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9wYWdlcy9uZXdQb3N0UGFnZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy91c2VyL3VzZXJVdGlsaXRpZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rLWNvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hcG9sbG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlU3RhdGUiLCJvblF1ZXJ5Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ0b2tlbiIsImN1cnJlbnRVc2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZXRUb2tlbiIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInNldEN1cnJlbnRVc2VyIiwic2V0UGVuZGluZ05vdGlmaWNhdGlvbnMiLCJzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMiLCJjb25uZWN0IiwiTG9hZGluZyIsInNpemUiLCJjb2xvciIsIk5hdkJhciIsIm5vVXNlciIsIk5CIiwiY29udGFpbmVyIiwiYnJhbmRDb250YWluZXIiLCJpY29uIiwibmFtZSIsImNvbnRhaW5lck0iLCJuYXZJY29uIiwiYnJhbmRDb250YWluZXJNIiwic2VhcmNoUXVlcnkiLCJ1c2VGaWVsZCIsImN1cnJlbnRVc2VyVU4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlclF1ZXJ5IiwidXNlUXVlcnkiLCJGSU5EX1VTRVIiLCJ2YXJpYWJsZXMiLCJ1c2VybmFtZSIsInVzZXJRdWVyeUNvbmRpdGlvbnMiLCJkYXRhIiwicmVkdWNlciIsImZpbmRVc2VyIiwidXNlclJlc3VsdCIsInVzZUVmZmVjdCIsInN1Yk5hdiIsInNldFN1Yk5hdiIsInN1Yk5hdkl0ZW0iLCJzZXRTdWJOYXZJdGVtIiwicmVzZXROYXYiLCJTUUNsZWFuZWQiLCJmaWVsZHMiLCJlbnRlclNlYXJjaCIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVLZXlQcmVzcyIsImUiLCJub1N0YXRlIiwia2V5IiwiU1EiLCJoYW5kbGVTdWJOYXZTdGF0ZSIsImhhbmRsZVN1Yk5hdkl0ZW1TdGF0ZSIsImxvZ291dCIsImNsZWFyIiwiY2xlYXJUb2tlbiIsInNpZ25lZFN0YXRlIiwiU3ViTmF2Iiwic3ViTmF2Q29udGFpbmVyIiwic2VhcmNoQ29udGFpbmVyTSIsInNlYXJjaEJ0biIsIm1hZ25pZmllciIsInNlYXJjaEJhciIsIm1lbnVDb250YWluZXIiLCJ1c2VyT3B0aW9uIiwibW9yZUNvbnRhaW5lciIsIm1vcmUiLCJub3RpZkNvbnRhaW5lck0iLCJiZWxsIiwibm9maWZDb3VudCIsInNpZ25PcHRpb24iLCJTdWJOYXZJdGVtIiwiU05JQ29udGFpbmVyIiwidGl0bGVCZWxsIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZGRPcHRpb24iLCJ0aXRsZU1vcmUiLCJzZWFyY2hDb250YWluZXIiLCJDUENvbnRhaW5lciIsInBsdXMiLCJDUFRleHQiLCJuYXZJdGVtIiwiTm90U2lnbmVkIiwidXNlclN0YXRlIiwic2V0VXNlclN0YXRlIiwiaGFuZGxlVXNlclN0YXRlIiwic2hvd1VzZXJERCIsImRpc3BsYXkiLCJzaG93SW5ERCIsInVzZXJXcmFwcGVyIiwidXNlckNvbnRhaW5lciIsInVzZXJERCIsImJhY2tncm91bmRDb2xvciIsIlNpZ25lZCIsIm5vdGlmQ29udGFpbmVyIiwidXNlckluZm9Db250YWluZXIiLCJEREFycm93IiwiUG9zdFNtYWxsIiwiaGFuZGxlRXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlU1BNdXRhdGlvbiIsInVzZU11dGF0aW9uIiwiUkVNT1ZFX1NBVkVEX1BPU1QiLCJvbkVycm9yIiwicCIsInBvc3QiLCJ1c2VyIiwicGFsbGV0dGUiLCJwYWxsZXR0ZUdlbmVyYXRvciIsImNvbG9yUGFsbGV0dGUiLCJoYW5kbGVTYXZlUmVtb3ZlIiwicmVzdWx0IiwiX2lkIiwicG9zdElkIiwibmV3U2F2ZWRQb3N0cyIsInNhdmVkUG9zdHMiLCJmaWx0ZXIiLCJzZXRDdXJyZW50VXNlclNQIiwidHJpZ2dlckFsZXJ0IiwidGl0bGUiLCJzZXRBbGVydCIsInJlc2V0QWxlcnQiLCJ0eXBlIiwiUFQiLCJwb3N0V3JhcHBlclNtIiwicG9zdENvbG9ySW5kaWNhdG9yIiwicG9zdENvbnRhaW5lciIsInBvc3RIZWFkZXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJQSFVzZXIiLCJQSFVJY29uIiwicG9zdFRpdGxlIiwibWFyZ2luQm90dG9tIiwicG9zdFNtUmVtb3ZlIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInNldEN1cnJlbnRVc2VyUG9zdHMiLCJQb3N0SW1hZ2VzIiwiaW1nU2hvd24iLCJzZXRJbWdTaG93biIsImltYWdlcyIsImltYWdlTGlua3MiLCJpbWFnZXNBbXQiLCJsZW5ndGgiLCJzZXRUb0ltZ1Nob3duIiwic3JjIiwiSElTdHlsZSIsImJvcmRlckNvbG9yIiwid2lkdGgiLCJQUCIsIlBQQ1BpY3R1cmVzQ29udGFpbmVyIiwiUFBDUGljdHVyZXNIaWdobGlnaHQiLCJpbWFnZU9wdGlvbnMiLCJtYXAiLCJpIiwiUFBDUGljdHVyZXNJbnN0YW5jZSIsIlBQQ0FsbFBpY3R1cmVzQ29udGFpbmVyIiwiUG9zdExpbmtzIiwibGlua3MiLCJyZWZlcmVuY2VMaW5rcyIsImxpbmtzVG9TaG93IiwibCIsInN0YXRzIiwid2Vic2l0ZVN0YXRzIiwiY2xlYW5lZExpbmsiLCJzcGxpdCIsInNsaWNlIiwiam9pbiIsIlBQQ1JlZmVyZW5jZUxpbmsiLCJQUENSTEljb24iLCJQUENMaW5rc0NvbnRhaWVyIiwiUG9zdFFhbmRBIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImFuc3dlclN0eWxlIiwicWFuZGEiLCJ1c2VyRnJvbSIsInVzZXJJY29uIiwicXVlc3Rpb24iLCJ1c2VyVG8iLCJhbnN3ZXIiLCJGb3JtQ29udGFpbmVyIiwic2lnbkluV2FybmluZyIsImJvcmRlclRvcENvbG9yIiwic2hyaW5rSWNvbiIsImhhbmRzaGFrZUljb24iLCJJbnB1dEhlYWRlciIsImluZm8iLCJpbnB1dEZvciIsIklIIiwiaW5mb1RpdGxlVGV4dCIsInNob3dJbmZvIiwiY29sb3JJbmZvIiwidGV4dENvbG9yIiwiZm9ybUluZm9Db250YWluZXIiLCJpbmZvSGVhZGVyQ29udGFpbmVyIiwiaW5mb0ljb24iLCJpbmZvQ29udGVudCIsIlJlZ2lzdGVyIiwicGFzc3dvcmQiLCJyZVBhc3N3b3JkIiwiZW1haWwiLCJyZWZlcmVuY2VMaW5rIiwiY2xlYW5lZE1lc3NhZ2UiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJvbkxvZ2luRXJyb3IiLCJyZWdpc3Rlck11dGF0aW9uIiwiQ1JFQVRFX1VTRVIiLCJsb2dpbk11dGF0aW9uIiwiTE9HSU4iLCJoYW5kbGVTdW1iaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZU1lbnVJdGVtIiwibG9naW5SZXN1bHQiLCJsb2dpbiIsInNldEl0ZW0iLCJyZXNldCIsIm9uU3VjY2VzcyIsImJnU3R5bGUiLCJub0JHIiwiVVIiLCJ1c2VyRm9ybUNvbnRhaW5lciIsInVzZXJGb3JtIiwiVUZJbnB1dCIsIm1hcmdpbiIsIlVGU3VibWl0IiwiU2lnbkluIiwic2lnbkluTXV0YXRpb24iLCJOb3RpZiIsImFjY2VwdE5vdGlmIiwiQUNDRVBUX05PVElGSUNBVElPTiIsImRlY2xpbmVOb3RpZiIsIkRFQ0xJTkVfTk9USUZJQ0FUSU9OIiwiYW5zd2VyUXVlc3Rpb24iLCJBTlNXRVJfUVVFU1RJT04iLCJoYW5kbGVBbnN3ZXIiLCJub3RpZmljYXRpb25JZCIsIm5vdGlmIiwicmVzcG9uc2UiLCJuZXdOb3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9ucyIsIm4iLCJoYW5kbGVBY2NlcHQiLCJhY2NlcHQiLCJhY2NlcHROb3RpZmljYXRpb24iLCJoYW5kbGVEZWNsaW5lIiwiZGVjbGluZSIsImRlY2xpbmVOb3RpZmljYXRpb24iLCJub3RpZlN0YXR1c0NvbG9yIiwiYWNjZXB0ZWQiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIkdDTGlua1N0YXRzIiwiY29udGFjdExpbmsiLCJza2lsbFRvSm9pbiIsInNraWxsTmFtZXMiLCJwcm9wb3NlZENvbnRyaWJ1dGlvbiIsImluZGV4T2YiLCJVc2VyTm90aWZMaXN0Iiwic2VudEZpbHRlciIsInNldFNlbnRGaWx0ZXIiLCJzaG93U0ZERCIsInNldFNob3dTRkREIiwic3RhdHVzRmlsdGVyIiwic2V0U3RhdHVzRmlsdGVyIiwic2hvd1N0YXR1c0REIiwic2V0U2hvd1N0YXR1c0REIiwiZ3JpZENvbHVtbiIsImhlaWdodCIsIkZpbHRlciIsInNlbnRPcHRpb25zIiwiYWxsT3B0aW9ucyIsIm9uT3B0aW9uQ2xpY2siLCJvcHRpb24iLCJvIiwiVVUiLCJORkRET3B0aW9uIiwic2VudEREIiwiTkZyb3Bkb3duIiwiTkZTcGxpdHRlciIsInN0YXR1c09wdGlvbnMiLCJzdGF0dXNERCIsIk5GRHJvcGRvd24iLCJub3RpZkZpbHRlckNvbnRhaW5lciIsIk5GQ3JlYXRvckNvbnRhaW5lciIsIk5GTGFiZWwiLCJORk9wdGlvbkNvbnRhaW5lciIsIk5GT3B0aW9uIiwic3RhdHVzQ29uZGl0aW9ucyIsIm5vdGlmU3RhdHVzIiwic2VudENvbmRpdGlvbnMiLCJzZW50U3RhdHVzIiwic2hvd05vdGlmaWNhdGlvbnMiLCJyZXZlcnNlIiwicm93R2FwIiwibWFyZ2luVG9wIiwidXJsIiwic3RhcnQiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwicHJpbWFyeUNvbG9yIiwiY29sb3JzIiwiYyIsIk51bWJlciIsImhpZ2hlckNvbG9yIiwiaXNEYXJrIiwiaHR0cExpbmsiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJjb25jYXQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ3aXRoQXBvbGxvIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwic2Nyb2xsIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJQb3N0UGFnZSIsImN1cnJlbnRQb3N0Iiwic2V0Q3VycmVudFBvc3QiLCJza2lsbEV4cGFuZGVkIiwic2V0U2tpbGxFeHBhbmRlZCIsIm9uSm9pbkVycm9yIiwib25RdWVzdGlvbkVycm9yIiwib25Gb2xsb3dFcnJvciIsImZvbGxvd011dGF0aW9uIiwiU0FWRV9QT1NUIiwibWFrZU5vdGlmaWNhdGlvbiIsIk1BS0VfTk9USUZJQ0FUSU9OIiwiYXNrUXVlc3Rpb24iLCJBU0tfUVVFU1RJT04iLCJoYW5kbGVGb2xsb3ciLCJxYW5kYVF1ZXJ5IiwiUV9BTkRfQV9OT1RJRlMiLCJxYW5kYUNoYW5nZUNvbmRpdGlvbnMiLCJzZWFyY2hBbnN3ZXJlZFFUb1Bvc3QiLCJjbGVhbmVkVGltZSIsIkRhdGUiLCJ0aW1lIiwidG9TdHJpbmciLCJxYW5kYUxpc3QiLCJwcFN0eWxlIiwicWFuZGFUZXh0Iiwic2tpbGxzSFRNTCIsInF1ZXN0aW9uU3R5bGUiLCJoYW5kbGVOb3RpZmljYXRpb24iLCJ1c2VyRnJvbUlkIiwidXNlclRvSWQiLCJpbnMiLCJza2lsbE5hbWUiLCJza2lsbEZpbGwiLCJza2lsbEZpbGxzIiwic2tpbGxDYXAiLCJza2lsbENhcGFjaXRpZXMiLCJtZXNzYWdlU3R5bGUiLCJidXR0b25Ub1Nob3duIiwiUFBTQnV0dG9uRXhpdCIsIlBQU0J1dHRvbiIsIlBQU0J1dHRvbkRpc2FibGVkIiwic2tpbGxQcm9wb3NpdGlvbiIsImZpbGwiLCJQUFNTa2lsbCIsIlBQU0RpdmlzaW9uIiwiUFBTU2tpbGxOYW1lIiwiUFBTU2tpbGxTZWNvbmRhcnkiLCJQUFNTa2lsbEluZm8iLCJQUFNTa2lsbEZvcm0iLCJQUFNUaXRsZSIsIlBQU0lucHV0Q29udGFpbmVyIiwiUFBTSW5wdXQiLCJQUENTdWJtaXRDb250YWluZXIiLCJQUFNCQnV0dG9uIiwiaGFuZGxlUXVlc3Rpb24iLCJ0ZWFtSFRNTCIsInRlYW0iLCJ1biIsIlBQQ1VzZXJDb250YWluZXIiLCJQUENVc2VySWNvbiIsIkhvbWVDb250ZW50IiwiaG9tZU9wdGlvbnMiLCJob21lT3B0aW9uIiwiaG9tZU9wdGlvbkljb24iLCJob21lT3B0aW9uVGV4dCIsImhvbWVPcHRpb25IaWdobGlnaHQiLCJNb2RpZmllZERlc2NyaXB0aW9uIiwic3BhY2VkRGlzIiwiZGVzY3JpcHRpb24iLCJmaW5hbERpcyIsIlBQQ0Rlc2NyaXB0aW9uIiwiX19odG1sIiwicmVkdWNlIiwidCIsInRpdGxlS2V5d29yZHMiLCJrZXl3b3JkcyIsInciLCJ0b0xvd2VyQ2FzZSIsInBvc3RQYWdlQ29udGFpbmVyIiwiUFBDb250ZW50IiwiUFBDVGl0bGUiLCJQUENTdWJIZWFkZXIiLCJQUENUaW1lIiwiUFBDQWxsUWFuZGFDb250YWluZXIiLCJ0ZWFtSW5mbyIsIlBQQ1RlYW1Db250YWluZXIiLCJQUFNGb2xsb3dIZWFkZXIiLCJib3JkZXJUb3AiLCJwb3N0UXVlcnkiLCJGSU5EX1BPU1QiLCJmaW5kUG9zdCIsImFsZXJ0Tm90aWYiLCJhY3Rpb24iLCJwb3N0cyIsImFtdCIsInBlbmRpbmdOb3RpZmljYXRpb25zIiwiQ1JFQVRFX1BPU1QiLCJncWwiLCJMSVNUX09GX05PVElGSUNBVElPTlMiLCJTS0lMTF9TRUFSQ0giLCJNRSIsIkxJU1RfT0ZfUE9TVFMiLCJBTExfVVNFUlMiLCJTT01FX1VTRVJTIiwiQUxMX1BPU1RTIiwiR0VUX1BPU1RfVElUTEVTIiwiU0VBUkNIX1BPU1RTIiwiUEVORElO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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyLCBzZXRQZW5kaW5nTm90aWZpY2F0aW9ucywgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG4vLyBpbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2QmFyL05hdkJhcidcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL25ld05hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IEZJTkRfVVNFUiwgUEVORElOR19OT1RJRlMsIExJU1RfT0ZfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4uL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3Qgb25RdWVyeUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TmF2QmFyIHF1ZXJ5PXtxdWVyeX0gb25RdWVyeUNoYW5nZT17b25RdWVyeUNoYW5nZX0gbm9Vc2VyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAmJiBwcm9wcy50b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHByb3BzLnNldFRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci5faWQgOiAndGhpc2lzZmFrZSdcclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzUXVlcnkgPSB1c2VRdWVyeShQRU5ESU5HX05PVElGUywge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6ICB7dXNlcklkOiBjdXJyZW50VXNlcklkfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJVTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgOiAndGhpc2lzZmFrZSdcclxuICAgICAgICBjb25zdCB1c2VyUXVlcnkgPSB1c2VRdWVyeShGSU5EX1VTRVIsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7dXNlcm5hbWU6IGN1cnJlbnRVc2VyVU59XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCB1c2VyTm90aWZzID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkKSA6IFtdXHJcbiAgICAgICAgY29uc3Qgbm90aWZzUXVlcnkgPSB1c2VRdWVyeShMSVNUX09GX05PVElGSUNBVElPTlMsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uczogdXNlck5vdGlmc31cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc1F1ZXJ5Q29uZGl0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub3RpZnNRdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAobm90aWZzUXVlcnkubG9hZGluZykgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKG5vdGlmc1F1ZXJ5LmRhdGEubGlzdE9mTm90aWZpY2F0aW9ucy5sZW5ndGggPCAxKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9uc1swXS51c2VyRnJvbSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIG5vdGlmc1F1ZXJ5LmRhdGEubGlzdE9mTm90aWZpY2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzQ29uZGl0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwZW5kaW5nTm90aWZzUXVlcnkuZGF0YSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyICYmIHByb3BzLmN1cnJlbnRVc2VyLnBlbmRpbmdOb3RpZmljYXRpb25zKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gcGVuZGluZ05vdGlmc1F1ZXJ5LmRhdGEuc2VhcmNoQXdhaXRpbmdOb3RpZnNcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlckNvbmRpdGlvbnMgPSAocXVlcnksIHJlZHVjZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFxdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAoIXF1ZXJ5LmRhdGEuZmluZFVzZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChyZWR1Y2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gcXVlcnkuZGF0YS5maW5kVXNlclxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBub3RpZnNGaWxsZWQgPSBub3RpZnNRdWVyeUNvbmRpdGlvbnMoKVxyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnMgPSBwZW5kaW5nTm90aWZzQ29uZGl0aW9ucygpXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDb25kaXRpb25zKHVzZXJRdWVyeSwgcHJvcHMuY3VycmVudFVzZXIpXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyKHVzZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBlbmRpbmdOb3RpZnMpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldFBlbmRpbmdOb3RpZmljYXRpb25zKHBlbmRpbmdOb3RpZnMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vdGlmc0ZpbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5vdGlmc0ZpbGxlZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtub3RpZnNGaWxsZWQsIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgdXNlciwgcHJvcHMuc2V0Q3VycmVudFVzZXIsIHBlbmRpbmdOb3RpZnMsIHByb3BzLnNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBwcm9wc10pXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxOYXZCYXIgcXVlcnk9e3F1ZXJ5fSBvblF1ZXJ5Q2hhbmdlPXtvblF1ZXJ5Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0VG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXIsIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRQZW5kaW5nTm90aWZpY2F0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuc2V0Q3VycmVudFVzZXJcclxuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShMYXlvdXQpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vIGltcG9ydCBsb2dvQiBmcm9tICcuLi9zdGF0aWMvc3ZnL2xvZ28vbG9nb0Iuc3ZnJ1xyXG4vLyBpbXBvcnQgbG9nb1cgZnJvbSAnLi4vc3RhdGljL3N2Zy9sb2dvL2xvZ29XLnN2ZydcclxuXHJcbmNvbnN0IExvYWRpbmcgPSAocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5zaXplID09PSAnc21hbGwnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgY2xhc3NOYW1lPVwibG9hZGluZy1sb2dvXCIgYWx0PVwibG9hZGluZyBsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMT5sb2FkaW5nPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKHByb3BzLmNvbG9yID09PSAnd2hpdGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvVy5zdmdcIiBjbGFzc05hbWU9XCJsb2FkaW5nLWxvZ28tbFwiIGFsdD1cImxvYWRpbmcgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2FkaW5nLXRpdGxlXCI+bG9hZGluZzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29CLnN2Z1wiIGNsYXNzTmFtZT1cImxvYWRpbmctbG9nby1sXCIgYWx0PVwibG9hZGluZyBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxvYWRpbmctdGl0bGVcIj5sb2FkaW5nPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKExvYWRpbmcpIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IE5CIGZyb20gJy4uLy4uL3N0eWxlcy9uZXdOYXZCYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHt1c2VGaWVsZH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTm90U2lnbmVkIGZyb20gJy4vc2lnbmVkL05vdFNpZ25lZCdcclxuaW1wb3J0IFNpZ25lZCBmcm9tICcuL3NpZ25lZC9TaWduZWQnXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuLi91c2VyL2Zvcm0vU2lnbkluJ1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vdXNlci9mb3JtL1JlZ2lzdGVyJ1xyXG5pbXBvcnQge2NsZWFyVG9rZW59IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQge3NldEN1cnJlbnRVc2VyfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IFVzZXJOb3RpZkxpc3QgZnJvbSAnLi4vdXNlci91dGlsaXRpZXMvVXNlck5vdGlmTGlzdCdcclxuaW1wb3J0IHsgRklORF9VU0VSIH0gZnJvbSAnLi4vLi4vc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5ub1VzZXIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIV01cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuYnJhbmRDb250YWluZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtOQi5uYW1lfT5Vbmlsb3VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNXTVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5jb250YWluZXJNfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtOQi5icmFuZENvbnRhaW5lck19IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT17TkIuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtOQi5uYW1lfT5Vbmlsb3VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gICAgY29uc3QgY3VycmVudFVzZXJVTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgOiAnZmFrZVVzZXInXHJcbiAgICBjb25zdCB1c2VyUXVlcnkgPSB1c2VRdWVyeShGSU5EX1VTRVIsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogY3VycmVudFVzZXJVTn1cclxuICAgIH0pXHJcbiAgICBjb25zdCB1c2VyUXVlcnlDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdXNlclF1ZXJ5LmRhdGFcclxuICAgICAgICBjb25zdCByZWR1Y2VyID0gcHJvcHMuY3VycmVudFVzZXJcclxuICAgICAgICBpZiAoIXF1ZXJ5KSB7IHJldHVybiBudWxsIH1cclxuICAgICAgICBpZiAoIXF1ZXJ5LmZpbmRVc2VyKSB7IHJldHVybiBudWxsIH1cclxuICAgICAgICBpZiAocmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAocXVlcnkuZmluZFVzZXIudXNlcm5hbWUgPT09IHJlZHVjZXIudXNlcm5hbWUpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcXVlcnkuZmluZFVzZXJcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXJSZXN1bHQgPSB1c2VyUXVlcnlDb25kaXRpb25zKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyKHVzZXJSZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLCBwcm9wcy5jdXJyZW50VXNlciwgdXNlclJlc3VsdF0pXHJcblxyXG4gICAgY29uc3QgW3N1Yk5hdiwgc2V0U3ViTmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3N1Yk5hdkl0ZW0sIHNldFN1Yk5hdkl0ZW1dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCByZXNldE5hdiA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdWJOYXYoZmFsc2UpXHJcbiAgICAgICAgc2V0U3ViTmF2SXRlbShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTUUNsZWFuZWQgPSBzZWFyY2hRdWVyeS5maWVsZHMudmFsdWUgPT09ICcnID8gJ2FsbCcgOiBzZWFyY2hRdWVyeS5maWVsZHMudmFsdWVcclxuXHJcbiAgICBjb25zdCBlbnRlclNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL3Jlc3VsdHMvJHtTUUNsZWFuZWR9YClcclxuICAgICAgICByZXNldE5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSwgbm9TdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaWYgKG5vU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFNRID0gZS50YXJnZXQudmFsdWUgPT09ICcnID8gJ2FsbCcgOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9yZXN1bHRzLyR7U1F9YClcclxuICAgICAgICAgICAgICAgIHJlc2V0TmF2KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtlbnRlclNlYXJjaCgpfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJOYXZTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gc3ViTmF2KSB7c2V0U3ViTmF2KGZhbHNlKX1cclxuICAgICAgICBlbHNlIHtzZXRTdWJOYXYoc3RhdGUpfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3ViTmF2SXRlbVN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBzdWJOYXZJdGVtKSB7c2V0U3ViTmF2SXRlbShmYWxzZSl9XHJcbiAgICAgICAgZWxzZSB7c2V0U3ViTmF2SXRlbShzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBwcm9wcy5jbGVhclRva2VuKClcclxuICAgICAgICByZXNldE5hdigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2lnbmVkU3RhdGUgPSBwcm9wcy50b2tlbiA/IDxTaWduZWQgLz4gOiA8Tm90U2lnbmVkIC8+XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUgOiAnJ1xyXG4gICAgY29uc3QgU3ViTmF2ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghc3ViTmF2KSB7cmV0dXJuIG51bGx9XHJcbiAgICAgICAgZWxzZSBpZiAoc3ViTmF2ID09PSAnc2VhcmNoJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnN1Yk5hdkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaENvbnRhaW5lck19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XVwiIGFzPXtgL3Jlc3VsdHMvJHtTUUNsZWFuZWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e05CLnNlYXJjaEJ0bn0+PGltZyBzcmM9XCIvc3ZnL3NlYXJjaFdXLnN2Z1wiIGNsYXNzTmFtZT17TkIubWFnbmlmaWVyfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0gcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBvbktleVByZXNzPXsoZSkgPT4gaGFuZGxlS2V5UHJlc3MoZSwgdHJ1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdWJOYXYgPT09ICdtZW51Jykge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMubm9Vc2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zdWJOYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIudXNlck9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdub3RpZmljYXRpb24nKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ3VzZXInKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5tb3JlQ29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ21vcmUnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBjbGFzc05hbWU9e05CLm1vcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BzLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zdWJOYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIudXNlck9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdub3RpZmljYXRpb24nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5vdGlmQ29udGFpbmVyTX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9iZWxsVy5zdmdcIiBjbGFzc05hbWU9e05CLmJlbGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5ub2ZpZkNvdW50fT4tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ3VzZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJuYW1lfT57dXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5tb3JlQ29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ21vcmUnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBjbGFzc05hbWU9e05CLm1vcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zdWJOYXZDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIuc2lnbk9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdzaWduIGluJyl9ID5zaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIuc2lnbk9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2SXRlbVN0YXRlKCdyZWdpc3RlcicpfSA+cmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5tb3JlQ29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZJdGVtU3RhdGUoJ21vcmUnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBjbGFzc05hbWU9e05CLm1vcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3ViTmF2SXRlbSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXN1Yk5hdkl0ZW0pIHtyZXR1cm4gbnVsbH1cclxuICAgICAgICBpZiAoc3ViTmF2SXRlbSA9PT0gJ3NpZ24gaW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU05JQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lnbkluIG9uU3VjY2Vzcz17cmVzZXROYXZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3ViTmF2SXRlbSA9PT0gJ3JlZ2lzdGVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNOSUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlZ2lzdGVyIG9uU3VjY2Vzcz17cmVzZXROYXZ9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJOYXZJdGVtID09PSAnbm90aWZpY2F0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNOSUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2JlbGxXLnN2Z1wiIGNsYXNzTmFtZT17TkIudGl0bGVCZWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyTm90aWZMaXN0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3ViTmF2SXRlbSA9PT0gJ3VzZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU05JQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gcmVzZXROYXYoKX0gaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZGVjb2RlVVJJQ29tcG9uZW50KHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PjxoMyBjbGFzc05hbWU9e05CLmRkT3B0aW9ufT5hY2NvdW50IGRldGFpbHM8L2gzPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17TkIuZGRPcHRpb259IG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfSBzdHlsZT17e2NvbG9yOiAncmdiKDI1NCw1Miw3NyknfX0+U2lnbiBvdXQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Yk5hdkl0ZW0gPT09ICdtb3JlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNOSUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL21vcmVXLnN2Z1wiIGNsYXNzTmFtZT17TkIudGl0bGVNb3JlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9eygpID0+IHJlc2V0TmF2KCl9IGhyZWY9XCIvcG9zdGZvcm1wYWdlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+PGgzIGNsYXNzTmFtZT17TkIuZGRPcHRpb259PmNyZWF0ZSBwcm9qZWN0PC9oMz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIV01cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuYnJhbmRDb250YWluZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17TkIubmFtZX0+VW5pbG91czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzdWx0cy9bc2VhcmNoUXVlcnldXCIgYXM9e2AvcmVzdWx0cy8ke1NRQ2xlYW5lZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIuc2VhcmNoQnRufT48aW1nIHNyYz1cIi9zdmcvc2VhcmNoV1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5tYWduaWZpZXJ9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0gcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBvbktleVByZXNzPXsoZSkgPT4gaGFuZGxlS2V5UHJlc3MoZSl9IHsuLi5zZWFyY2hRdWVyeS5maWVsZHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0Zm9ybXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtOQi5DUENvbnRhaW5lcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvcGx1c1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5wbHVzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLkNQVGV4dH0+Y3JlYXRlIHByb2plY3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7c2lnbmVkU3RhdGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU1dNXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuY29udGFpbmVyTX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtOQi5icmFuZENvbnRhaW5lck19IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17TkIubmFtZX0+VW5pbG91czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJOYXZTdGF0ZSgnc2VhcmNoJyl9IGNsYXNzTmFtZT17TkIubmF2SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvc2VhcmNoV1cuc3ZnXCIgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU3ViTmF2U3RhdGUoJ21lbnUnKX0gY2xhc3NOYW1lPXtOQi5uYXZJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2hhbWJ1cmdlclcuc3ZnXCIgY2xhc3NOYW1lPXtOQi5uYXZJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJOYXYgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3ViTmF2SXRlbSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgLy8gYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZlxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyVG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXI6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlciwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIC8vIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShOYXZCYXIpIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vLi4vdXNlci9mb3JtL1JlZ2lzdGVyJ1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uLy4uL3VzZXIvZm9ybS9TaWduSW4nXHJcblxyXG5jb25zdCBOb3RTaWduZWQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhhbmRsZVVzZXJTdGF0ZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdXNlclN0YXRlKSB7c2V0VXNlclN0YXRlKGZhbHNlKX1cclxuICAgICAgICBlbHNlIHtzZXRVc2VyU3RhdGUoc3RhdGUpfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dVc2VyREQgPSB1c2VyU3RhdGUgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG4gICAgY29uc3Qgc2hvd0luREQgPSB1c2VyU3RhdGUgPyBcclxuICAgICAgICB1c2VyU3RhdGUgPT09ICdyZWdpc3RlcicgPyA8UmVnaXN0ZXIgLz4gOiA8U2lnbkluIC8+XHJcbiAgICA6IG51bGxcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyV3JhcHBlcn0gICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnNpZ25PcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVVzZXJTdGF0ZSgnc2lnbmluJyl9ID5zaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIuc2lnbk9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclN0YXRlKCdyZWdpc3RlcicpfSA+cmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyRER9IHN0eWxlPXtzaG93VXNlckREfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWhyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyODI4J319IC8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0luRER9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgLy8gYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZlxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIGNsZWFyVG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgLy8gcmVzZXRBbGVydDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0QWxlcnQsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKE5vdFNpZ25lZCkiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IE5CIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9uZXdOYXZCYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL3VzZXIvTm90aWZpY2F0aW9ucydcclxuaW1wb3J0IFVzZXJVdGlsaXRpZXMgZnJvbSAnLi4vdXNlci9Vc2VyVXRpbGl0aWVzJ1xyXG5cclxuXHJcbmNvbnN0IFNpZ25lZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGFuZGxlVXNlclN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSB1c2VyU3RhdGUpIHtzZXRVc2VyU3RhdGUoZmFsc2UpfVxyXG4gICAgICAgIGVsc2Uge3NldFVzZXJTdGF0ZShzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93VXNlckREID0gdXNlclN0YXRlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gdXNlclN0YXRlID8gXHJcbiAgICAgICAgdXNlclN0YXRlID09PSAnbm90aWZpY2F0aW9uJyA/IDxOb3RpZmljYXRpb25zIC8+IDogPFVzZXJVdGlsaXRpZXMgLz5cclxuICAgIDogbnVsbFxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lIDogJydcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnVzZXJPcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVVzZXJTdGF0ZSgnbm90aWZpY2F0aW9uJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5ub3RpZkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9iZWxsVy5zdmdcIiBjbGFzc05hbWU9e05CLmJlbGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5ub2ZpZkNvdW50fT4tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi51c2VyT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ3VzZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJJbmZvQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJuYW1lfT57dXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9kZFcuc3ZnXCIgY2xhc3NOYW1lPXtOQi5EREFycm93fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlckREfSBzdHlsZT17c2hvd1VzZXJERH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1oclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9fSAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbkREfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIC8vIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWZcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIC8vIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShTaWduZWQpIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgVXNlck5vdGlmTGlzdCBmcm9tICcuLi8uLi91c2VyL3V0aWxpdGllcy9Vc2VyTm90aWZMaXN0J1xyXG5cclxuY29uc3QgU2lnbmVkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHVzZXJTdGF0ZSkge3NldFVzZXJTdGF0ZShmYWxzZSl9XHJcbiAgICAgICAgZWxzZSB7c2V0VXNlclN0YXRlKHN0YXRlKX1cclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dVc2VyREQgPSB1c2VyU3RhdGUgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG4gICAgY29uc3Qgc2hvd0luREQgPSB1c2VyU3RhdGUgPyBcclxuICAgICAgICB1c2VyU3RhdGUgPT09ICdub3RpZmljYXRpb24nID8gPE5vdGlmaWNhdGlvbnMgLz4gOiA8VXNlclV0aWxpdGllcyAvPlxyXG4gICAgOiBudWxsXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvYmVsbFcuc3ZnXCIgY2xhc3NOYW1lPXtOQi50aXRsZUJlbGx9IC8+XHJcbiAgICAgICAgICAgIDxVc2VyTm90aWZMaXN0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICAvLyBhbGVydE5vdGlmOiBzdGF0ZS5hbGVydE5vdGlmXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gY2xlYXJUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKGNsZWFyVG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICAvLyByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoU2lnbmVkKSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTkIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7Y2xlYXJUb2tlbn0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuXHJcbmNvbnN0IFNpZ25lZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGFuZGxlVXNlclN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSB1c2VyU3RhdGUpIHtzZXRVc2VyU3RhdGUoZmFsc2UpfVxyXG4gICAgICAgIGVsc2Uge3NldFVzZXJTdGF0ZShzdGF0ZSl9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93VXNlckREID0gdXNlclN0YXRlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gdXNlclN0YXRlID8gXHJcbiAgICAgICAgdXNlclN0YXRlID09PSAnbm90aWZpY2F0aW9uJyA/IDxOb3RpZmljYXRpb25zIC8+IDogPFVzZXJVdGlsaXRpZXMgLz5cclxuICAgIDogbnVsbFxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICAgICAgcHJvcHMuY2xlYXJUb2tlbigpXHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUgOiAnJ1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+e3VzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2RlY29kZVVSSUNvbXBvbmVudChwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+PGgzIGNsYXNzTmFtZT17TkIuZGRPcHRpb259PmFjY291bnQgZGV0YWlsczwvaDM+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e05CLmRkT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0gc3R5bGU9e3tjb2xvcjogJ3JnYigyNTQsNTIsNzcpJ319PnNpZ24gb3V0PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIC8vIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWZcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIC8vIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShTaWduZWQpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBSRU1PVkVfU0FWRURfUE9TVCB9IGZyb20gJy4uLy4uL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlclBvc3RzLCBzZXRDdXJyZW50VXNlclNQIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IHsgdHJpZ2dlckFsZXJ0LCBwYWxsZXR0ZUdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCBQVCBmcm9tICcuLi8uLi9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUG9zdFNtYWxsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IFsgZGVsZXRlUG9zdE11dGF0aW9uIF0gPSB1c2VNdXRhdGlvbihERUxFVEVfUE9TVCwge1xyXG4gICAgLy8gICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICAvLyB9KVxyXG4gICAgY29uc3QgWyByZW1vdmVTUE11dGF0aW9uIF0gPSB1c2VNdXRhdGlvbihSRU1PVkVfU0FWRURfUE9TVCwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcCA9IHByb3BzLnBvc3RcclxuICAgIGNvbnN0IHVzZXIgPSBwcm9wcy5wb3N0LnVzZXIgPyBwcm9wcy5wb3N0LnVzZXIudXNlcm5hbWUgOiBwcm9wcy51c2VyXHJcbiAgICBjb25zdCBwYWxsZXR0ZSA9IHBhbGxldHRlR2VuZXJhdG9yKHAuY29sb3IpLmNvbG9yUGFsbGV0dGVcclxuICAgIC8vIGNvbnN0IGhhbmRsZVJlbW92ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWxldGVQb3N0TXV0YXRpb24oe1xyXG4gICAgLy8gICAgICAgICB2YXJpYWJsZXM6IHtwb3N0SWQ6IHByb3BzLnBvc3QuX2lkfVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgLy8gICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlclBvc3RzKHByb3BzLmN1cnJlbnRVc2VyLnBvc3RzLmZpbHRlcihwID0+IHAuX2lkICE9PSBwcm9wcy5wb3N0Ll9pZCkpXHJcbiAgICAvLyAgICAgICAgIHRyaWdnZXJBbGVydCgnZGFuZ2VyJywgYGRlbGV0ZWQgJDogZGVsZXRlZCBwb3N0ICcke3AudGl0bGV9J2AsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIGNvbnN0IGhhbmRsZVNhdmVSZW1vdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtb3ZlU1BNdXRhdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogcHJvcHMuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgcG9zdElkOiBwLl9pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NhdmVkUG9zdHMgPSBwcm9wcy5jdXJyZW50VXNlci5zYXZlZFBvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QuX2lkICE9PSBwLl9pZClcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJTUChuZXdTYXZlZFBvc3RzKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ2RhbmdlcicsIGB1bmZvbGxvd2VkJDogdW5mb2xsb3dlZCBwb3N0ICcke3AudGl0bGV9J2AsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHByb3BzLnR5cGUgPT09ICdzYXZlZCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdFdyYXBwZXJTbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbG9ySW5kaWNhdG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcGFsbGV0dGUuY29sb3J9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXIpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtQVC5QSFVzZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQVC5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3RpdGxlXVwiIGFzPXtgL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocC50aXRsZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1BULnBvc3RUaXRsZX0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3cHgnfX0+e3AudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlUmVtb3ZlKCl9IGNsYXNzTmFtZT17UFQucG9zdFNtUmVtb3ZlfT54PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcHMuY3VycmVudFVzZXIpIHtcclxuICAgICAgICBpZiAodXNlciA9PT0gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0V3JhcHBlclNtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbG9ySW5kaWNhdG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcGFsbGV0dGUuY29sb3J9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXIpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BULlBIVXNlcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQVC5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bdGl0bGVdXCIgYXM9e2AvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwLnRpdGxlKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQVC5wb3N0VGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnN3B4J319PntwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUoKX0gY2xhc3NOYW1lPVwicG9zdC1zbS1yZW1vdmVcIj54PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdFdyYXBwZXJTbX0gc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOiAnOHB4IGF1dG8nfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29sb3JJbmRpY2F0b3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwYWxsZXR0ZS5jb2xvcn19IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQodXNlcil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7UFQuUEhVc2VyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQVC5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1t0aXRsZV1cIiBhcz17YC9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHAudGl0bGUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQVC5wb3N0VGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnN3B4J319PntwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7IHNldEN1cnJlbnRVc2VyUG9zdHMsIHNldEN1cnJlbnRVc2VyU1AsIHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShQb3N0U21hbGwpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUFAgZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL25ld1Bvc3RQYWdlLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaW1nU2hvd24sIHNldEltZ1Nob3duXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlcyA9IHByb3BzLmltYWdlTGlua3NcclxuICAgIGNvbnN0IGltYWdlc0FtdCA9IGltYWdlcy5sZW5ndGhcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGltYWdlc0FtdCA+IDApIHNldEltZ1Nob3duKGltYWdlc1swXSlcclxuICAgIH0sIFtpbWFnZXMsIGltYWdlc0FtdF0pXHJcbiAgICBjb25zdCBzZXRUb0ltZ1Nob3duID0gKHNyYykgPT4gIHtcclxuICAgICAgICBzZXRJbWdTaG93bihzcmMpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBISVN0eWxlID0ge1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogcHJvcHMuY29sb3IsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScgICBcclxuICAgICAgICB9XHJcbiAgICBpZiAoaW1hZ2VzQW10ID09PSAwKSByZXR1cm4gbnVsbFxyXG4gICAgZWxzZSBpZiAoaW1hZ2VzQW10ICA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQUC5QUENQaWN0dXJlc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtISVN0eWxlfSBjbGFzc05hbWU9e1BQLlBQQ1BpY3R1cmVzSGlnaGxpZ2h0fSBzcmM9e2ltZ1Nob3dufSBhbHQ9XCJoaWdobGlnaHQgcGljXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VPcHRpb25zID0gaW1hZ2VzLm1hcChpID0+IGkgPT09IGltZ1Nob3duID9cclxuICAgICAgICAgICAgPGltZyBrZXk9e2BpbWcke2l9YH0gb25DbGljaz17KCkgPT4gc2V0VG9JbWdTaG93bihpKX0gY2xhc3NOYW1lPXtQUC5QUENQaWN0dXJlc0luc3RhbmNlfSBzdHlsZT17e2JvcmRlckNvbG9yOiBwcm9wcy5jb2xvcn19IHNyYz17aX0gYWx0PVwicGljXCIgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8aW1nIGtleT17YGltZyR7aX1gfSBvbkNsaWNrPXsoKSA9PiBzZXRUb0ltZ1Nob3duKGkpfSBjbGFzc05hbWU9e1BQLlBQQ1BpY3R1cmVzSW5zdGFuY2V9IHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICcjMjgyODI4J319IHNyYz17aX0gYWx0PVwicGljXCIgLz5cclxuICAgICAgICApXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BQLlBQQ1BpY3R1cmVzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e0hJU3R5bGV9IGNsYXNzTmFtZT17UFAuUFBDUGljdHVyZXNIaWdobGlnaHR9IHNyYz17aW1nU2hvd259IGFsdD1cImhpZ2hsaWdodCBwaWNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BQLlBQQ0FsbFBpY3R1cmVzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vIFx0cmV0dXJuIHtcclxuLy8gICAgICAgICBcclxuLy8gXHR9XHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShQb3N0SW1hZ2VzKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB3ZWJzaXRlU3RhdHMgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgUFAgZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL25ld1Bvc3RQYWdlLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBQb3N0TGlua3MgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGxpbmtzID0gcHJvcHMucmVmZXJlbmNlTGlua3NcclxuICAgIGlmIChsaW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5jb25zdCBsaW5rc1RvU2hvdyA9IGxpbmtzLm1hcChsID0+IHtcclxuICAgIGNvbnN0IHN0YXRzID0gd2Vic2l0ZVN0YXRzKGwpXHJcbiAgICBsZXQgY2xlYW5lZExpbmsgPSBsLnNwbGl0KCcvJykuc2xpY2UoMiw0KS5qb2luKCcvJylcclxuICAgIGlmIChjbGVhbmVkTGluay5sZW5ndGggPiA0MCkge1xyXG4gICAgICAgIGNsZWFuZWRMaW5rID0gYCR7Y2xlYW5lZExpbmsuc2xpY2UoMCw0MCl9IC4uLmBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgaHJlZj17bH0gY2xhc3NOYW1lPXtgJHtQUC5QUENSZWZlcmVuY2VMaW5rfSBuZXV0cmFsaXplLWxpbmtgfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogc3RhdHMuY29sb3J9fSByZWw9XCJub2ZvbGxvd1wiIGtleT17YHJlZmVyZW5jZUxpbmske2x9YH0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQUC5QUENSTEljb259IHNyYz1cIi9zdmcvd2Vic2l0ZXMvaW50ZXJuZXQuc3ZnXCIgYWx0PXtzdGF0cy50aXRsZX0gLz5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIk5NXCI+e2NsZWFuZWRMaW5rfTwvaDQ+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFAuUFBDTGlua3NDb250YWllcn0gPlxyXG4gICAgICAgICAgICB7bGlua3NUb1Nob3d9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vLyBcdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoUG9zdExpbmtzKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vIGltcG9ydCB1c2VySWNvbiBmcm9tICcuLi8uLi9zdGF0aWMvc3ZnL3VzZXJCLnN2ZydcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBQb3N0UWFuZEEgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBhbnN3ZXJTdHlsZSA9IGV4cGFuZGVkID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQUEMtcWFuZGEtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChwcm9wcy5xYW5kYS51c2VyRnJvbS51c2VybmFtZSl9YH0gY2xhc3NOYW1lPVwiUFBDLXFhbmRhLWhlYWRlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiUFBDLXVzZXItaWNvblwiIHNyYz17dXNlckljb259IGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiTk1cIj57cHJvcHMucWFuZGEudXNlckZyb20udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlBDQy1xYW5kYS1jb250ZW50XCI+e3Byb3BzLnFhbmRhLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQQ0MtcWFuZGEtYW5zd2VyLWNvbnRhaW5lclwiIHN0eWxlPXthbnN3ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMucWFuZGEudXNlckZyb20udXNlcm5hbWUpfWB9IGNsYXNzTmFtZT1cIlBQQy1xYW5kYS1oZWFkZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJQUEMtdXNlci1pY29uXCIgc3JjPXt1c2VySWNvbn0gYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiTk1cIj57cHJvcHMucWFuZGEudXNlclRvLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlBDQy1xYW5kYS1jb250ZW50XCI+e3Byb3BzLnFhbmRhLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IGNsYXNzTmFtZT1cIlBDQy1hbnN3ZXItdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICB7ZXhwYW5kZWQgPyAnaGlkZSBhbnN3ZXInIDogJ3Nob3cgYW5zd2VyJ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShQb3N0UWFuZEEpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNvbnN0IEZvcm1Db250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qgc2lnbkluV2FybmluZyA9IHByb3BzLnRva2VuID8gbnVsbCA6IChcclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwid2FybmluZy1jb250YWluZXJcIj5tdXN0IGJlIHNpZ25lZCB0byBwZXJmb3JtIHRoZSB0aGVzZSBhY3Rpb25zPC9oMz5cclxuICAgIClcclxuICAgIGlmIChleHBhbmRlZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJUb3BDb2xvcjogcHJvcHMucGFsbGV0dGUuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IGNsYXNzTmFtZT1cImV4cGFuZGVkLW92ZXJsYXkgU1dNXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLnBhbGxldHRlLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wYWxsZXR0ZS5zaHJpbmtJY29ufSBjbGFzc05hbWU9XCJvdmVybGF5LWltYWdlLWV4cGFuZGVkXCIgYWx0PVwic2hyaW5rIGZvcm1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaWduSW5XYXJuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlciBIV01cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlclRvcENvbG9yOiBwcm9wcy5wYWxsZXR0ZS5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaWduSW5XYXJuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXItbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfSBjbGFzc05hbWU9XCJleHBhbmQtb3ZlcmxheSBTV01cIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcHJvcHMucGFsbGV0dGUuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMucGFsbGV0dGUuaGFuZHNoYWtlSWNvbn0gY2xhc3NOYW1lPVwib3ZlcmxheS1pbWFnZVwiIGFsdD1cImV4cGFuZCBmb3JtXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW5cclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wc1xyXG4pKEZvcm1Db250YWluZXIpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IElIIGZyb20gJy4uLy4uL3N0eWxlcy9pbnB1dEhlYWRlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgSW5wdXRIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgaWYgKCFwcm9wcy5pbmZvKSB7XHJcbiAgICAgICAgcmV0dXJuIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5pbnB1dEZvcn0+PGgzIGNsYXNzTmFtZT17SUguaW5mb1RpdGxlVGV4dH0+e3Byb3BzLnRpdGxlfTwvaDM+PC9sYWJlbD5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93SW5mbyA9IGV4cGFuZGVkID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ30gXHJcbiAgICBjb25zdCBjb2xvckluZm8gPSBwcm9wcy5jb2xvciA9PT0gJ3doaXRlJyA/XHJcbiAgICAgICAge3RleHRDb2xvcjogJyMyODI4MjgnLCBpY29uOiAnL3N2Zy9pbmZvQi5zdmcnfSA6IHt0ZXh0Q29sb3I6ICd3aGl0ZScsIGljb246ICcvc3ZnL2luZm9XLnN2Zyd9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtJSC5mb3JtSW5mb0NvbnRhaW5lcn0gc3R5bGU9e3tjb2xvcjogY29sb3JJbmZvLnRleHRDb2xvcn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SUguaW5mb0hlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMuaW5wdXRGb3J9PjxoMyBjbGFzc05hbWU9e0lILmluZm9UaXRsZVRleHR9Pntwcm9wcy50aXRsZX08L2gzPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IHNyYz17Y29sb3JJbmZvLmljb259IGNsYXNzTmFtZT17SUguaW5mb0ljb259IGFsdD1cImluZm9cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0lILmluZm9Db250ZW50fSBzdHlsZT17c2hvd0luZm99PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShJbnB1dEhlYWRlcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBDUkVBVEVfVVNFUiwgTE9HSU4gfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IElucHV0SGVhZGVyIGZyb20gJy4uLy4uL3RleHQtZmllbGQvSW5wdXRIZWFkZXInXHJcbmltcG9ydCB7IHVzZUZpZWxkLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBSZWdpc3RlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VGaWVsZCgndGV4dCcpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZUZpZWxkKCdwYXNzd29yZCcpXHJcbiAgICBjb25zdCByZVBhc3N3b3JkID0gdXNlRmllbGQoJ3Bhc3N3b3JkJylcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlRmllbGQoJ2VtYWlsJylcclxuICAgIGNvbnN0IHJlZmVyZW5jZUxpbmsgPSB1c2VGaWVsZCgndXJsJylcclxuXHJcbiAgICBjb25zdCBvbkVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW5lZE1lc3NhZ2UgPSBlLm1lc3NhZ2VcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpXHJcbiAgICAgICAgaWYgKGNsZWFuZWRNZXNzYWdlLmluY2x1ZGVzKCd1c2VybmFtZScpKSBjbGVhbmVkTWVzc2FnZSA9IGB1c2VybmFtZSQ6ICR7dXNlcm5hbWUuZmllbGRzLnZhbHVlfSBpcyBhbHJlYWR5IGJlaW5nIHVzZWRgXHJcbiAgICAgICAgaWYgKGNsZWFuZWRNZXNzYWdlLmluY2x1ZGVzKCdyZWZlcmVuY2VMaW5rJykpIGNsZWFuZWRNZXNzYWdlID0gYHJlZmVyZW5jZSBsaW5rJDogJHtyZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIGlmIChjbGVhbmVkTWVzc2FnZS5pbmNsdWRlcygnZW1haWwnKSkgY2xlYW5lZE1lc3NhZ2UgPSBgZW1haWwkOiAke2VtYWlsLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGNsZWFuZWRNZXNzYWdlLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIH1cclxuICAgIGNvbnN0IG9uTG9naW5FcnJvciA9IChlKSA9PiBjb25zb2xlLmxvZyhlKVxyXG5cclxuICAgIGNvbnN0IFtyZWdpc3Rlck11dGF0aW9uXSA9IHVzZU11dGF0aW9uKENSRUFURV9VU0VSLCB7IG9uRXJyb3IgfSlcclxuICAgIGNvbnN0IFtsb2dpbk11dGF0aW9uXSA9IHVzZU11dGF0aW9uKExPR0lOLCB7b25FcnJvcjogb25Mb2dpbkVycm9yfSlcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtYml0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAocGFzc3dvcmQuZmllbGRzLnZhbHVlICE9PSByZVBhc3N3b3JkLmZpZWxkcy52YWx1ZSkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAncGFzc3dvcmQkOiBwYXNzd29yZCBhbmQgcmUtcGFzc3dvcmQgZGlkIG5vdCBtYXRjaCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXVzZXJuYW1lLmZpZWxkcy52YWx1ZS5sZW5ndGggfHwgIXBhc3N3b3JkLmZpZWxkcy52YWx1ZS5sZW5ndGggfHwgIXJlUGFzc3dvcmQuZmllbGRzLnZhbHVlLmxlbmd0aCB8fCAhcmVmZXJlbmNlTGluay5maWVsZHMudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsICdhbGwkOiBhbGwgZmllbGRzIG11c3QgYmUgZmlsbGVkJywgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlZ2lzdGVyTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTGluazogcmVmZXJlbmNlTGluay5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmNoYW5nZU1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VNZW51SXRlbShudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzdWx0ID0gYXdhaXQgbG9naW5NdXRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC5maWVsZHMudmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2dpblJlc3VsdC5kYXRhLmxvZ2luLnZhbHVlXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB1c2VybmFtZS5maWVsZHMudmFsdWUpXHJcbiAgICAgICAgICAgIHByb3BzLnNldFRva2VuKHRva2VuKVxyXG4gICAgICAgICAgICB1c2VybmFtZS5yZXNldCgpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLnJlc2V0KClcclxuICAgICAgICAgICAgcmVQYXNzd29yZC5yZXNldCgpXHJcbiAgICAgICAgICAgIGVtYWlsLnJlc2V0KClcclxuICAgICAgICAgICAgcmVmZXJlbmNlTGluay5yZXNldCgpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsICdyZWdpc3RlcmVkJDogYWNjb3VudCBzdWNjZXNzZnVsbHkgY3JlYXRlZC4gc2lnbmluZyB5b3UgaW4gbm93LicsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25TdWNjZXNzKClcclxuICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiZ1N0eWxlID0gcHJvcHMubm9CRyA/IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyODI4J30gOiBudWxsXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIudXNlckZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDI+cmVnaXN0ZXI8L2gyPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1VSLnVzZXJGb3JtfSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1bWJpdChlKX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS11c2VybmFtZVwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInVzZXJuYW1lXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi51c2VybmFtZS5maWVsZHN9IGlkPVwiU0ktdXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJwYXNzd29yZFwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucGFzc3dvcmQuZmllbGRzfSBpZD1cIlNJLXBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXJlUGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJyZS10eXBlIHBhc3N3b3JkXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5yZVBhc3N3b3JkLmZpZWxkc30gaWQ9XCJTSS1yZVBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1lbWFpbFwiIGluZm89e3RydWV9IHRpdGxlPVwiZW1haWxcIiBjb2xvcj1cImRhcmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51bnRpbGwgZnVydGhlciBwb2xpY3kgY2hhbmdlcyBubyBlbWFpbHMgYXJlIHNlbnQgeW91ciB3YXk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+b25seSBzaG93biB0byB1c2VycyB3aG8geW91IGFjY2VwdCBhZnRlciBjb250YWN0aW5nIHlvdSBkaXJlY3RseSAobm90IHRocm91Z2ggcG9zdCk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLmVtYWlsLmZpZWxkc30gaWQ9XCJTSS1lbWFpbFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcmVmZXJlbmNlTGlua1wiIGluZm89e3RydWV9IHRpdGxlPVwicmVzdW1lIGxpbmtcIiBjb2xvcj1cImRhcmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW46IDAsIG1hcmdpbkJvdHRvbTogJzVweCd9fT5saW5rIG9uIHlvdXIgdXNlciBwYWdlIHVzZWQgYXMgYSByZXN1bWUgdG8gZGVtb25zdHJhdGUgeW91ciBhYmlsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luOiAwLCBtYXJnaW5Cb3R0b206ICc1cHgnfX0+PHN0cm9uZz5hbHdheXMgdmlldyBhbm90aGVyIHVzZXJzIHBvcnRhZm9saW8gbGluayBiZWZvcmUgd29ya2luZyB3aXRoIHRoZW08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5zaXRlcyByZWNvbW1lbmRlZDogPHN0cm9uZz5MaW5rZWRJbjwvc3Ryb25nPiwgPHN0cm9uZz5JbmRlZWQ8L3N0cm9uZz4sIDxzdHJvbmc+R2l0SHViPC9zdHJvbmc+LCBvciA8c3Ryb25nPkZhY2Vib29rPC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnRvIGZ1cnRoZXIgZW5zdXJlIHlvdXIgcG9ydGFmb2xpbyBsaW5rIGlzIHRydXN0d29ydGh5LCBsaW5rIHlvdXIgVW5pbG91cyBhY2NvdXQgZnJvbSB5b3VyIHBvcnRhZm9saW8gbGluazwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucmVmZXJlbmNlTGluay5maWVsZHN9IGlkPVwiU0ktcmVmZXJlbmNlTGlua1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17VVIuVUZTdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj48aDM+cmVnaXN0ZXI8L2gzPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGwsXHJcbiAgICB7IHNldEFsZXJ0LCByZXNldEFsZXJ0LCBzZXRUb2tlbiB9XHJcbikoUmVnaXN0ZXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgTE9HSU4gfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgdXNlRmllbGQsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCBJbnB1dEhlYWRlciBmcm9tICcuLi8uLi90ZXh0LWZpZWxkL0lucHV0SGVhZGVyJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB1c2VGaWVsZCgncGFzc3dvcmQnKVxyXG5cclxuICAgIGNvbnN0IG9uRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBjbGVhbmVkTWVzc2FnZSA9IGUubWVzc2FnZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNsZWFuZWRNZXNzYWdlKVxyXG4gICAgICAgIGNsZWFuZWRNZXNzYWdlID0gY2xlYW5lZE1lc3NhZ2Uuc3BsaXQoJzonKVxyXG4gICAgICAgIGNsZWFuZWRNZXNzYWdlID0gY2xlYW5lZE1lc3NhZ2Uuc2xpY2UoMSwgY2xlYW5lZE1lc3NhZ2UubGVuZ3RoKS5qb2luKCckOicpXHJcbiAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgY2xlYW5lZE1lc3NhZ2UsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3NpZ25Jbk11dGF0aW9uXSA9IHVzZU11dGF0aW9uKExPR0lOLCB7IG9uRXJyb3IgfSlcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtYml0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW5NdXRhdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC5maWVsZHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuY2hhbmdlTWVudUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZU1lbnVJdGVtKG51bGwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXN1bHQuZGF0YS5sb2dpbi52YWx1ZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUuZmllbGRzLnZhbHVlKVxyXG4gICAgICAgICAgICB1c2VybmFtZS5yZXNldCgpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLnJlc2V0KClcclxuICAgICAgICAgICAgcHJvcHMuc2V0VG9rZW4odG9rZW4pXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vblN1Y2Nlc3MoKVxyXG4gICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJnU3R5bGUgPSBwcm9wcy5ub0JHID8ge2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfSA6IG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyRm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMj5zaWduIGluPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtVUi51c2VyRm9ybX0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdW1iaXQoZSl9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktdXNlcm5hbWVcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJ1c2VybmFtZVwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4udXNlcm5hbWUuZmllbGRzfSBpZD1cIlNJLXVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXBhc3N3b3JkXCIgaW5mbz17ZmFsc2V9IHRpdGxlPVwicGFzc3dvcmRcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnBhc3N3b3JkLmZpZWxkc30gaWQ9XCJTSS1wYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17VVIuVUZTdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj48aDM+c2lnbiBpbjwvaDM+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vIFx0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy8gXHR9XHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGwsXHJcbiAgICB7IHNldFRva2VuLCBzZXRBbGVydCwgcmVzZXRBbGVydCB9XHJcbikoU2lnbkluKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQb3N0U21hbGwgZnJvbSAnLi4vLi4vcG9zdC9Qb3N0U21hbGwnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgQUNDRVBUX05PVElGSUNBVElPTiwgREVDTElORV9OT1RJRklDQVRJT04sIEFOU1dFUl9RVUVTVElPTiB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgeyB1c2VGaWVsZCwgd2Vic2l0ZVN0YXRzLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5cclxuY29uc3QgTm90aWYgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFthY2NlcHROb3RpZl0gPSB1c2VNdXRhdGlvbihBQ0NFUFRfTk9USUZJQ0FUSU9OLCB7XHJcbiAgICAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIH0pXHJcbiAgICBjb25zdCBbZGVjbGluZU5vdGlmXSA9IHVzZU11dGF0aW9uKERFQ0xJTkVfTk9USUZJQ0FUSU9OLCB7XHJcbiAgICAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIH0pXHJcbiAgICBjb25zdCBbYW5zd2VyUXVlc3Rpb25dID0gdXNlTXV0YXRpb24oQU5TV0VSX1FVRVNUSU9OLCB7XHJcbiAgICAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgYW5zd2VyID0gdXNlRmllbGQoJ3RleHQnKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFuc3dlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhbnN3ZXJRdWVzdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uSWQ6IHByb3BzLm5vdGlmLl9pZCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBhbnN3ZXIuZmllbGRzLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQgPT09IHByb3BzLm5vdGlmLl9pZCA/IHJlc3VsdC5kYXRhLmFuc3dlclF1ZXN0aW9uIDogbilcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5ld05vdGlmaWNhdGlvbnMpXHJcbiAgICAgICAgICAgIGFuc3dlci5yZXNldCgpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsIGByZXBsaWVkJDogeW91IGhhdmUgcmVwbGllZCB0byAke3Byb3BzLm5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfSdzIHF1ZXN0aW9uYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVBY2NlcHQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWNjZXB0ID0gYXdhaXQgYWNjZXB0Tm90aWYoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25JZDogcHJvcHMubm90aWYuX2lkfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGFjY2VwdCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb25zID0gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCA9PT0gcHJvcHMubm90aWYuX2lkID8gYWNjZXB0LmRhdGEuYWNjZXB0Tm90aWZpY2F0aW9uIDogbilcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5ld05vdGlmaWNhdGlvbnMpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsIGBhY2NlcHRlZCQ6IHlvdSBoYXZlIGFjY2VwdGVkICR7cHJvcHMubm90aWYudXNlckZyb20udXNlcm5hbWV9IHRvIHlvdXIgdGVhbWAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURlY2xpbmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVjbGluZSA9IGF3YWl0IGRlY2xpbmVOb3RpZih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbklkOiBwcm9wcy5ub3RpZi5faWR9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKGRlY2xpbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQgPT09IHByb3BzLm5vdGlmLl9pZCA/IGRlY2xpbmUuZGF0YS5kZWNsaW5lTm90aWZpY2F0aW9uIDogbilcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5ld05vdGlmaWNhdGlvbnMpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnZGFuZ2VyJywgYGRlY2xpbmVkJDogeW91IGhhdmUgZGVjbGluZWQgJHtwcm9wcy5ub3RpZi51c2VyRnJvbS51c2VybmFtZX0ncyByZXF1ZXN0IHRvIGpvaW5gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG5vdGlmID0gcHJvcHMubm90aWZcclxuICAgIGNvbnN0IG5vdGlmU3RhdHVzQ29sb3IgPSBub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCA/IFxyXG4gICAgICAgICdyZ2IoMjI2LDE4NCw1OSknIDpcclxuICAgICAgICBub3RpZi5hY2NlcHRlZCA/XHJcbiAgICAgICAgICAgIG5vdGlmLnBvc3QgP1xyXG4gICAgICAgICAgICAgICAgJ3JnYig1MiwxNjYsOTUpJyA6ICcjOGI4YjhiJyBcclxuICAgICAgICAgICAgOiAncmdiKDI1NCw1Miw3NyknXHJcbiAgICBpZiAobm90aWYudXNlckZyb20udXNlcm5hbWUgPT09IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lKXtcclxuICAgICAgICBpZiAobm90aWYuYWNjZXB0ZWQpIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5hbnN3ZXJlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYuYW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vdGlmLnBvc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IEdDTGlua1N0YXRzID0gd2Vic2l0ZVN0YXRzKG5vdGlmLnBvc3QuY29udGFjdExpbmspXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkTGluayA9IG5vdGlmLnBvc3QuY29udGFjdExpbmsuc3BsaXQoJy8nKVsyXVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+Z3JvdXAvY29udGFjdCBsaW5rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e25vdGlmLnBvc3QuY29udGFjdExpbmt9IGNsYXNzTmFtZT1cIm4tam9pbi1saW5rIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogR0NMaW5rU3RhdHMuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17R0NMaW5rU3RhdHMuaWNvbn0gY2xhc3NOYW1lPVwibi1KTC1pY29uXCIgYWx0PXtHQ0xpbmtTdGF0cy50aXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y2xlYW5lZExpbmt9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgbWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pm1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm90aWYuYWNjZXB0ZWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChub3RpZi5hY2NlcHRlZCkge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5hbnN3ZXJlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYuYW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vdGlmLnBvc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IEdDTGlua1N0YXRzID0gd2Vic2l0ZVN0YXRzKG5vdGlmLnBvc3QuY29udGFjdExpbmspXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkTGluayA9IG5vdGlmLnBvc3QuY29udGFjdExpbmsuc3BsaXQoJy8nKVsyXVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnNlbnQgZ3JvdXAvY29udGFjdCBsaW5rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e25vdGlmLnBvc3QuY29udGFjdExpbmt9IGNsYXNzTmFtZT1cIm4tam9pbi1saW5rIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogR0NMaW5rU3RhdHMuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17R0NMaW5rU3RhdHMuaWNvbn0gY2xhc3NOYW1lPVwibi1KTC1pY29uXCIgYWx0PXtHQ0xpbmtTdGF0cy50aXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y2xlYW5lZExpbmt9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIG1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5tZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLXJlcGx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiPnJlcGx5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJuLW5vdGlmLXJlcGx5LWZpZWxkXCIgey4uLmFuc3dlci5maWVsZHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBbnN3ZXIoKX0gY2xhc3NOYW1lPVwibi1Bb0Qtb3B0aW9uIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYig1MiwxNjYsOTUpJ319PmFuc3dlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+YWNjZXB0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLUFvRFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2xpbmUoKX0gY2xhc3NOYW1lPVwibi1Bb0Qtb3B0aW9uIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYigyNTQsNTIsNzcpJ319PmRlY2xpbmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjY2VwdCgpfSBjbGFzc05hbWU9XCJuLUFvRC1vcHRpb24gbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiKDUyLDE2Niw5NSknfX0+YWNjZXB0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtub3RpZi51c2VyVG8udXNlcm5hbWV9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5tZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfVxyXG4pKE5vdGlmKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgTElTVF9PRl9OT1RJRklDQVRJT05TIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgTm90aWYgZnJvbSAnLi9Ob3RpZidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vTG9hZGluZydcclxuaW1wb3J0IGFwb2xsbywge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vLi4vLi4vbGliL2Fwb2xsbydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgVVUgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlclV0aWxpdGllcy5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcblxyXG5jb25zdCBVc2VyTm90aWZMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3RRdWVyeSA9IHVzZVF1ZXJ5KExJU1RfT0ZfTk9USUZJQ0FUSU9OUywge1xyXG4gICAgLy8gICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbnM6IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQpfVxyXG4gICAgLy8gfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKG5vdGlmc0xpc3RRdWVyeSlcclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3RRdWVyeSA9IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAvLyAgICAgcXVlcnk6IExJU1RfT0ZfTk9USUZJQ0FUSU9OUyxcclxuICAgIC8vICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25zOiBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkKX1cclxuICAgIC8vIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxuICAgIGNvbnN0IFtzZW50RmlsdGVyLCBzZXRTZW50RmlsdGVyXSA9IHVzZVN0YXRlKCd0byB5b3UnKVxyXG4gICAgY29uc3QgW3Nob3dTRkRELCBzZXRTaG93U0ZERF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdGF0dXNGaWx0ZXIsIHNldFN0YXR1c0ZpbHRlcl0gPSB1c2VTdGF0ZSgncGVuZGluZycpXHJcbiAgICBjb25zdCBbc2hvd1N0YXR1c0RELCBzZXRTaG93U3RhdHVzRERdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdENvbmRpdGlvbnMgPSAocXVlcnksIHJlZHVjZXIpID0+IHtcclxuICAgIC8vICAgICBpZiAoIXF1ZXJ5KSB7IHJldHVybiBudWxsIH1cclxuICAgIC8vICAgICBpZiAocmVkdWNlci5sZW5ndGggPT09IDApIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgLy8gICAgIGlmIChyZWR1Y2VyWzBdLnVzZXJUbykge1xyXG4gICAgLy8gICAgICAgICBpZiAocXVlcnkuX2lkID09PSByZWR1Y2VyWzBdLl9pZCApIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gcXVlcnlcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3QgPSBub3RpZnNMaXN0Q29uZGl0aW9ucyhub3RpZnNMaXN0UXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zLCBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKG5vdGlmc0xpc3QpIHtcclxuICAgIC8vICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5vdGlmc0xpc3QpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW25vdGlmc0xpc3QsIHByb3BzLCBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnNdKVxyXG5cclxuICAgIGlmIChwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnNbMF0udXNlclRvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnNXZoJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZpbHRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZW50T3B0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IFsnZnJvbSB5b3UnLCAndG8geW91J11cclxuICAgICAgICAgICAgY29uc3Qgb25PcHRpb25DbGljayA9IChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlbnRGaWx0ZXIob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd1NGREQoIXNob3dTRkREKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxPcHRpb25zLm1hcChvID0+IG8gIT09IHNlbnRGaWx0ZXIgPyA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uT3B0aW9uQ2xpY2sobyl9IGNsYXNzTmFtZT17VVUuTkZERE9wdGlvbn0ga2V5PXtgU0ZERCR7b31gfT57b308L2Rpdj4gOiBudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZW50REQgPSBzaG93U0ZERCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORnJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORlNwbGl0dGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZW50T3B0aW9ucygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk6IG51bGxcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c09wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxPcHRpb25zID0gWydhbGwnLCAnYWNjZXB0ZWQnLCAnZGVjbGluZWQnLCAncGVuZGluZycsICdtZXNzYWdlcyddXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXR1c0ZpbHRlcihvcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1N0YXR1c0REKCFzaG93U3RhdHVzREQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsT3B0aW9ucy5tYXAobyA9PiBvICE9PSBzdGF0dXNGaWx0ZXIgPyA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uT3B0aW9uQ2xpY2sobyl9IGNsYXNzTmFtZT17YCR7b30tb3B0aW9uICR7VVUuTkZERE9wdGlvbn1gfSBrZXk9e2BTdGF0dXNERCR7b31gfT57b308L2Rpdj4gOiBudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0REID0gc2hvd1N0YXR1c0REID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORkRyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GU3BsaXR0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNPcHRpb25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApOiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUubm90aWZGaWx0ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORkNyZWF0b3JDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtVVS5ORkxhYmVsfT5zdGF0dXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZPcHRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U3RhdHVzREQoIXNob3dTdGF0dXNERCl9IGNsYXNzTmFtZT17YCR7c3RhdHVzRmlsdGVyfS1vcHRpb24gJHtVVS5ORk9wdGlvbn1gfT57c3RhdHVzRmlsdGVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c0REfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORkNyZWF0b3JDb250YWluZXJ9IHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17VVUuTkZMYWJlbH0+c2VudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GT3B0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U0ZERCghc2hvd1NGREQpfSBjbGFzc05hbWU9e1VVLk5GT3B0aW9ufT57c2VudEZpbHRlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbnRERH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzQ29uZGl0aW9ucyA9IChub3RpZikgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXNGaWx0ZXIgPT09ICdhbGwnKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGNvbnN0IG5vdGlmU3RhdHVzID0gbm90aWYuYWNjZXB0ZWQgPT09IG51bGwgP1xyXG4gICAgICAgICAgICAncGVuZGluZycgOiBcclxuICAgICAgICAgICAgbm90aWYuYWNjZXB0ZWQgP1xyXG4gICAgICAgICAgICBub3RpZi5wb3N0ID9cclxuICAgICAgICAgICAgICAgICdhY2NlcHRlZCcgOiAnbWVzc2FnZXMnXHJcbiAgICAgICAgICAgIDogJ2RlY2xpbmVkJ1xyXG4gICAgICAgIGlmIChzdGF0dXNGaWx0ZXIgPT09IG5vdGlmU3RhdHVzKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VudENvbmRpdGlvbnMgPSAobm90aWYpID0+IHtcclxuICAgICAgICBpZiAoc2VudEZpbHRlciA9PT0gJ2FsbCcpIHJldHVybiB0cnVlXHJcbiAgICAgICAgY29uc3Qgc2VudFN0YXR1cyA9IG5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lID09PSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSA/XHJcbiAgICAgICAgICAgICdmcm9tIHlvdScgOiAndG8geW91J1xyXG4gICAgICAgIGlmIChzZW50RmlsdGVyID09PSBzZW50U3RhdHVzKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzQ29uZGl0aW9ucyhuKSAmJiBzZW50Q29uZGl0aW9ucyhuKSl7XHJcbiAgICAgICAgICAgIHJldHVybiA8Tm90aWYgbm90aWY9e259IGtleT17YFVOJHtuLl9pZH1gfS8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9KS5yZXZlcnNlKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyVXRpbC1ub3RpZlwiPlxyXG4gICAgICAgICAgICA8RmlsdGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxMHB4J319IC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZ3JpZCcsIHJvd0dhcDogJzEwcHgnLCB3aWR0aDogJzk1JScsIG1hcmdpbjogJ2F1dG8nLCBtYXJnaW5Ub3A6ICcxMHB4J319PlxyXG4gICAgICAgICAgICB7c2hvd05vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTBweCd9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVXNlck5vdGlmTGlzdCkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCB0cmlnZ2VyQWxlcnQgPSAodHlwZSwgbWVzc2FnZSwgc2V0QWxlcnQsIHJlc2V0QWxlcnQpID0+IHtcclxuICAgIC8vIHRyaWdnZXJBbGVydCgnd2FybmluZycsICdzdWNjZXNzOiBhbGVydCBiYXIgaXMgd29ya2luZycsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgY29uc3QgY2xlYW5lZE1lc3NhZ2UgPSA8cCBzdHlsZT17e21hcmdpbjogMH19PjxzdHJvbmc+e21lc3NhZ2Uuc3BsaXQoJyQ6JylbMF19PC9zdHJvbmc+OiB7bWVzc2FnZS5zcGxpdCgnJDonKVsxXX08L3A+XHJcbiAgICBpZiAodHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoe2NvbG9yOiAncmdiKDUyLDE2Niw5NSknLCB0ZXh0Q29sb3I6ICd3aGl0ZScsIG1lc3NhZ2U6IGNsZWFuZWRNZXNzYWdlfSlcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnd2FybmluZycpIHtcclxuICAgICAgICBzZXRBbGVydCh7Y29sb3I6ICdyZ2IoMjI2LDE4NCw1OSknLCB0ZXh0Q29sb3I6ICd3aGl0ZScsIG1lc3NhZ2U6IGNsZWFuZWRNZXNzYWdlfSlcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnZGFuZ2VyJykge1xyXG4gICAgICAgIHNldEFsZXJ0KHtjb2xvcjogJ3JnYigyNTQsNTIsNzcpJywgdGV4dENvbG9yOiAnd2hpdGUnLCBtZXNzYWdlOiBjbGVhbmVkTWVzc2FnZX0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3ZWJzaXRlU3RhdHMgPSAodXJsKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydCA9IHVybC5zcGxpdCgnLycpWzJdID8gdXJsLnNwbGl0KCcvJylbMl0gOiAnJ1xyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCd1bmlsb3VzJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL2xvZ28vbG9nb1cuc3ZnJywgY29sb3I6ICcjMjgyODI4JywgdGl0bGU6ICdVbmlsb3VzJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnZGlzY29yZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9kaXNjb3JkLnN2ZycsIGNvbG9yOiAnIzcyODlEQScsIHRpdGxlOiAnRGlzY29yZCd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3RyZWxsbycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy90cmVsbG8uc3ZnJywgY29sb3I6ICcjMDA3OUJGJywgdGl0bGU6ICdUcmVsbG8nfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCd3aGF0c2FwcCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy93aGF0c2FwcC5zdmcnLCBjb2xvcjogJyMyNUQzNjYnLCB0aXRsZTogJ1doYXRzQXBwJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnbW9uZGF5JykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICdodHRwczovL2kuaW1ndXIuY29tL2JnYVFaYzkucG5nJywgY29sb3I6ICcjMzMzMzMzJywgdGl0bGU6ICdNb25kYXknfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdzbGFjaycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9zbGFjay5zdmcnLCBjb2xvcjogJyM0QTE1NEInLCB0aXRsZTogJ1NsYWNrJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnbGlua2VkaW4nKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvbGlua2VkaW4uc3ZnJywgY29sb3I6ICdyZ2IoNDAsMTAzLDE3OCknLCB0aXRsZTogJ0xpbmtlZEluJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnZmFjZWJvb2snKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvZmFjZWJvb2suc3ZnJywgY29sb3I6ICdyZ2IoNjYsMTAzLDE3OCknLCB0aXRsZTogJ0ZhY2Vib29rJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnaW5kZWVkJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICdodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cHMlM0ElMkYlMkZnb2hpcmUtd2Vic2l0ZS5zMy5hbWF6b25hd3MuY29tJTJGaW1nJTJGaW50ZWdyYXRpb24tbG9nb3MlMkZpbmRlZWQtaWNvbi5qcGcmZj0xJm5vZmI9MScsIGNvbG9yOiAnIzI4MjgyOCcsIHRpdGxlOiAnSW5kZWVkJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnZ2l0aHViJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2dpdEh1Yi5zdmcnLCBjb2xvcjogJyMzMzMnLCB0aXRsZTogJ0dpdEh1Yid9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2ludGVybmV0LnN2ZycsIGNvbG9yOiAnIzQ4NDg0OCcsdGl0bGU6ICd1bmtub3duIHVybCd9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGaWVsZCA9ICh0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBvbkNoYW5nZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhbGxldHRlR2VuZXJhdG9yID0gKHByaW1hcnlDb2xvcikgPT4ge1xyXG4gICAgY29uc3QgY29sb3IgPSBwcmltYXJ5Q29sb3JcclxuICAgIGNvbnN0IGNvbG9ycyA9IGNvbG9yLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcChjID0+IE51bWJlcihjKSlcclxuICAgIGNvbnN0IGhpZ2hlckNvbG9yID0gYHJnYigke2NvbG9ycy5tYXAoYyA9PiBjICsgMzApLmpvaW4oJywnKX0pYFxyXG4gICAgbGV0IGlzRGFyayA9ICgoY29sb3JzWzBdICsgY29sb3JzWzFdICsgY29sb3JzWzJdKSAvIDMpIDwgMTI3ID9cclxuICAgICAgICB0cnVlIDogZmFsc2VcclxuICAgIC8vIGNvbnN0IGlzRGFyayA9IGZhbHNlXHJcbiAgICBjb25zdCBjb2xvclBhbGxldHRlID0gaXNEYXJrID8gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICBoaWdoZXJDb2xvcixcclxuICAgICAgICAgICAgLy8gdXNlckljb246IHVzZXJJY29uVyxcclxuICAgICAgICAgICAgLy8gaGFuZHNoYWtlSWNvbjogaGFuZHNoYWtlSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHBsdXNJY29uOiBwbHVzSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHNoYXJlSWNvbjogc2hhcmVJY29uVyxcclxuICAgICAgICAgICAgLy8gc2hyaW5rSWNvbjogc2hyaW5rVyxcclxuICAgICAgICAgICAgLy8gY29sb3JlZDoge1xyXG4gICAgICAgICAgICAvLyAgICAgaGVhcnRJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjggNTEyLjAwMDAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQ3MS4zODI4MTIgNDQuNTc4MTI1Yy0yNi41MDM5MDYtMjguNzQ2MDk0LTYyLjg3MTA5My00NC41NzgxMjUtMTAyLjQxMDE1Ni00NC41NzgxMjUtMjkuNTU0Njg3IDAtNTYuNjIxMDk0IDkuMzQzNzUtODAuNDQ5MjE4IDI3Ljc2OTUzMS0xMi4wMjM0MzggOS4zMDA3ODEtMjIuOTE3OTY5IDIwLjY3OTY4OC0zMi41MjM0MzggMzMuOTYwOTM4LTkuNjAxNTYyLTEzLjI3NzM0NC0yMC41LTI0LjY2MDE1Ny0zMi41MjczNDQtMzMuOTYwOTM4LTIzLjgyNDIxOC0xOC40MjU3ODEtNTAuODkwNjI1LTI3Ljc2OTUzMS04MC40NDUzMTItMjcuNzY5NTMxLTM5LjUzOTA2MyAwLTc1LjkxMDE1NiAxNS44MzIwMzEtMTAyLjQxNDA2MyA0NC41NzgxMjUtMjYuMTg3NSAyOC40MTAxNTYtNDAuNjEzMjgxIDY3LjIyMjY1Ni00MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MSAxNi4xMzY3MTkgODIuOTM3NSA1MC43ODEyNSAxMjQuNzQyMTg3IDMwLjk5MjE4OCAzNy4zOTQ1MzEgNzUuNTM1MTU2IDc1LjM1NTQ2OSAxMjcuMTE3MTg4IDExOS4zMTI1IDE3LjYxMzI4MSAxNS4wMTE3MTkgMzcuNTc4MTI0IDMyLjAyNzM0NCA1OC4zMDg1OTMgNTAuMTUyMzQ0IDUuNDc2NTYzIDQuNzk2ODc1IDEyLjUwMzkwNyA3LjQzNzUgMTkuNzkyOTY5IDcuNDM3NSA3LjI4NTE1NiAwIDE0LjMxNjQwNi0yLjY0MDYyNSAxOS43ODUxNTYtNy40Mjk2ODcgMjAuNzMwNDY5LTE4LjEyODkwNyA0MC43MDcwMzItMzUuMTUyMzQ0IDU4LjMyODEyNS01MC4xNzE4NzYgNTEuNTc0MjE5LTQzLjk0OTIxOCA5Ni4xMTcxODgtODEuOTA2MjUgMTI3LjEwOTM3NS0xMTkuMzA0Njg3IDM0LjY0NDUzMi00MS44MDA3ODEgNTAuNzc3MzQ0LTgxLjQzNzUgNTAuNzc3MzQ0LTEyNC43NDIxODcgMC00Mi4wNjY0MDctMTQuNDI1NzgxLTgwLjg3ODkwNy00MC42MTcxODgtMTA5LjI4OTA2M3ptMCAwXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gICAgIHNoYXJlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gdmlld0JveD1cIjAgLTIyIDUxMiA1MTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm01MTIgMjMzLjgyMDMxMi0yMTIuNzc3MzQ0LTIzMy4zMjAzMTJ2MTM5LjIwMzEyNWgtNDUuMjM4MjgxYy0xNDAuMjczNDM3IDAtMjUzLjk4NDM3NSAxMTMuNzEwOTM3LTI1My45ODQzNzUgMjUzLjk4NDM3NXY3My43Njk1MzFsMjAuMDkzNzUtMjIuMDE5NTMxYzY4LjMxNjQwNi03NC44NTE1NjIgMTY0Ljk4MDQ2OS0xMTcuNSAyNjYuMzI0MjE5LTExNy41aDEyLjgwNDY4N3YxMzkuMjAzMTI1em0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgaGFuZHNoYWtlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnPjxwYXRoIGQ9XCJtMzg2LjE1OCA4LjczM2MtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0zNi40NzggMzYuNDc4Yy0xOS45MjMtMTAuNzY5LTQ1LjM4Ni03Ljc0OC02Mi4xOTkgOS4wNjVsLTY5LjQxNiA2OS40MTZjLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDBsMjUuMDktMjUuMDljMzguOTEyIDMyLjQ0OCA5Mi4yNzMgNDIuNiAxNDAuNTkxIDI2LjI1Mmw2Ni44MiA2Ni44MmM4LjM3Ni0xOC4xOTIgNS44MzQtNDAuMjE2LTcuNjUtNTYuMDY5bDM1LjA1OC0zNS4wNThjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzLS4xMDEtLjEwMS0uMjExLS4xODctLjMxNS0uMjg0bC4wMTUtLjAxNXpcIi8+PHBhdGggZD1cIm0yNzYuNDU5IDQwMC4wMTFjLTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ2IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMGwtNDYuMjcyIDQ2LjI3MmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGw0Ni4yNzItNDYuMjcyYzE0LjA0NC0xNC4wNDMgMTQuMDQ0LTM2LjgwNy4wMDMtNTAuODQ4elwiLz48cGF0aCBkPVwibTI3Ni4xNiAxODguNTA0LTcuMjQ4IDcuMjQ4Yy0yNS43MTUgMjUuNzE1LTY3LjU1OCAyNS43MTUtOTMuMjczIDBzLTI1LjcxNS02Ny41NTggMC05My4yNzNsNTcuNTE0LTU3LjUxNGMtMTYuMTU3LTYuMTg4LTM0LjU0Ny00Ljg5MS00OS43NjggMy44OTJsLTM2LjMyOS0zNi4zMjljLTUuODU4LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMTIxLjQ1IDEyMS40NDljLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxM2wzNi4zMjkgMzYuMzI5Yy04Ljc4MyAxNS4yMjEtMTAuMDggMzMuNjExLTMuODkyIDQ5Ljc2OGwxNS4wMjktMTUuMDI5YzI1LjcxNS0yNS43MTUgNjcuNTU4LTI1LjcxNSA5My4yNzMgMCA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NHMxNS4zMTQgMjAuODk1IDE3Ljg1NCAzMi45OTNjMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1MyA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NCAyNS43MTUgMjUuNzE1IDI1LjcxNSA2Ny41NTggMCA5My4yNzNsLTE4LjU2MiAxOC41NjIgNi40OTcgNi40OTdjMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0N2wtODQuNDc1LTg0LjQ3NWMtNDMuOTk2IDkuNzA3LTg5Ljk5MiAyLjA5Ny0xMjguMzU4LTIwLjc2MXpcIi8+PC9nPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICA6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICcjMjgyODI4JyxcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIGhpZ2hlckNvbG9yLFxyXG4gICAgICAgICAgICAvLyB1c2VySWNvbjogdXNlckljb25CLFxyXG4gICAgICAgICAgICAvLyBoYW5kc2hha2VJY29uOiBoYW5kc2hha2VJY29uQixcclxuICAgICAgICAgICAgLy8gcGx1c0ljb246IHBsdXNJY29uQixcclxuICAgICAgICAgICAgLy8gc2hhcmVJY29uOiBzaGFyZUljb25CLFxyXG4gICAgICAgICAgICAvLyBzaHJpbmtJY29uOiBzaHJpbmtCLFxyXG4gICAgICAgICAgICAvLyBjb2xvcmVkOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBoZWFydEljb246IDxzdmcgZmlsbD17Y29sb3J9IHZpZXdCb3g9XCIwIC0yOCA1MTIuMDAwMDIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNDcxLjM4MjgxMiA0NC41NzgxMjVjLTI2LjUwMzkwNi0yOC43NDYwOTQtNjIuODcxMDkzLTQ0LjU3ODEyNS0xMDIuNDEwMTU2LTQ0LjU3ODEyNS0yOS41NTQ2ODcgMC01Ni42MjEwOTQgOS4zNDM3NS04MC40NDkyMTggMjcuNzY5NTMxLTEyLjAyMzQzOCA5LjMwMDc4MS0yMi45MTc5NjkgMjAuNjc5Njg4LTMyLjUyMzQzOCAzMy45NjA5MzgtOS42MDE1NjItMTMuMjc3MzQ0LTIwLjUtMjQuNjYwMTU3LTMyLjUyNzM0NC0zMy45NjA5MzgtMjMuODI0MjE4LTE4LjQyNTc4MS01MC44OTA2MjUtMjcuNzY5NTMxLTgwLjQ0NTMxMi0yNy43Njk1MzEtMzkuNTM5MDYzIDAtNzUuOTEwMTU2IDE1LjgzMjAzMS0xMDIuNDE0MDYzIDQ0LjU3ODEyNS0yNi4xODc1IDI4LjQxMDE1Ni00MC42MTMyODEgNjcuMjIyNjU2LTQwLjYxMzI4MSAxMDkuMjkyOTY5IDAgNDMuMzAwNzgxIDE2LjEzNjcxOSA4Mi45Mzc1IDUwLjc4MTI1IDEyNC43NDIxODcgMzAuOTkyMTg4IDM3LjM5NDUzMSA3NS41MzUxNTYgNzUuMzU1NDY5IDEyNy4xMTcxODggMTE5LjMxMjUgMTcuNjEzMjgxIDE1LjAxMTcxOSAzNy41NzgxMjQgMzIuMDI3MzQ0IDU4LjMwODU5MyA1MC4xNTIzNDQgNS40NzY1NjMgNC43OTY4NzUgMTIuNTAzOTA3IDcuNDM3NSAxOS43OTI5NjkgNy40Mzc1IDcuMjg1MTU2IDAgMTQuMzE2NDA2LTIuNjQwNjI1IDE5Ljc4NTE1Ni03LjQyOTY4NyAyMC43MzA0NjktMTguMTI4OTA3IDQwLjcwNzAzMi0zNS4xNTIzNDQgNTguMzI4MTI1LTUwLjE3MTg3NiA1MS41NzQyMTktNDMuOTQ5MjE4IDk2LjExNzE4OC04MS45MDYyNSAxMjcuMTA5Mzc1LTExOS4zMDQ2ODcgMzQuNjQ0NTMyLTQxLjgwMDc4MSA1MC43NzczNDQtODEuNDM3NSA1MC43NzczNDQtMTI0Ljc0MjE4NyAwLTQyLjA2NjQwNy0xNC40MjU3ODEtODAuODc4OTA3LTQwLjYxNzE4OC0xMDkuMjg5MDYzem0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgc2hhcmVJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjIgNTEyIDUxMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTUxMiAyMzMuODIwMzEyLTIxMi43NzczNDQtMjMzLjMyMDMxMnYxMzkuMjAzMTI1aC00NS4yMzgyODFjLTE0MC4yNzM0MzcgMC0yNTMuOTg0Mzc1IDExMy43MTA5MzctMjUzLjk4NDM3NSAyNTMuOTg0Mzc1djczLjc2OTUzMWwyMC4wOTM3NS0yMi4wMTk1MzFjNjguMzE2NDA2LTc0Ljg1MTU2MiAxNjQuOTgwNDY5LTExNy41IDI2Ni4zMjQyMTktMTE3LjVoMTIuODA0Njg3djEzOS4yMDMxMjV6bTAgMFwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vICAgICBoYW5kc2hha2VJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSBpZD1cIkNhcGFfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGc+PHBhdGggZD1cIm0zODYuMTU4IDguNzMzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTM2LjQ3OCAzNi40NzhjLTE5LjkyMy0xMC43NjktNDUuMzg2LTcuNzQ4LTYyLjE5OSA5LjA2NWwtNjkuNDE2IDY5LjQxNmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGwyNS4wOS0yNS4wOWMzOC45MTIgMzIuNDQ4IDkyLjI3MyA0Mi42IDE0MC41OTEgMjYuMjUybDY2LjgyIDY2LjgyYzguMzc2LTE4LjE5MiA1LjgzNC00MC4yMTYtNy42NS01Ni4wNjlsMzUuMDU4LTM1LjA1OGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTMtLjEwMS0uMTAxLS4yMTEtLjE4Ny0uMzE1LS4yODRsLjAxNS0uMDE1elwiLz48cGF0aCBkPVwibTI3Ni40NTkgNDAwLjAxMWMtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDYgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwbC00Ni4yNzIgNDYuMjcyYy0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwbDQ2LjI3Mi00Ni4yNzJjMTQuMDQ0LTE0LjA0MyAxNC4wNDQtMzYuODA3LjAwMy01MC44NDh6XCIvPjxwYXRoIGQ9XCJtMjc2LjE2IDE4OC41MDQtNy4yNDggNy4yNDhjLTI1LjcxNSAyNS43MTUtNjcuNTU4IDI1LjcxNS05My4yNzMgMHMtMjUuNzE1LTY3LjU1OCAwLTkzLjI3M2w1Ny41MTQtNTcuNTE0Yy0xNi4xNTctNi4xODgtMzQuNTQ3LTQuODkxLTQ5Ljc2OCAzLjg5MmwtMzYuMzI5LTM2LjMyOWMtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0xMjEuNDUgMTIxLjQ0OWMtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzbDM2LjMyOSAzNi4zMjljLTguNzgzIDE1LjIyMS0xMC4wOCAzMy42MTEtMy44OTIgNDkuNzY4bDE1LjAyOS0xNS4wMjljMjUuNzE1LTI1LjcxNSA2Ny41NTgtMjUuNzE1IDkzLjI3MyAwIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0czE1LjMxNCAyMC44OTUgMTcuODU0IDMyLjk5M2MxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODUzIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0IDI1LjcxNSAyNS43MTUgMjUuNzE1IDY3LjU1OCAwIDkzLjI3M2wtMTguNTYyIDE4LjU2MiA2LjQ5NyA2LjQ5N2MxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3bC04NC40NzUtODQuNDc1Yy00My45OTYgOS43MDctODkuOTkyIDIuMDk3LTEyOC4zNTgtMjAuNzYxelwiLz48L2c+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb2xvclBhbGxldHRlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIm5leHQtYXBvbGxvXCJcclxuLy8gaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIlxyXG5cclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCdcclxuaW1wb3J0IHsgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJ1xyXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5J1xyXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCdcclxuLy8gaHR0cHM6Ly91bmlsb3VzLWdyYXBocWwtYmFja2VuZC5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuXHJcbi8vIGh0dHBzOi8vdW5pbG91cy1iYWNrLWVuZC1kZXYuaGVyb2t1YXBwLmNvbS9ncmFwaHFsXHJcbi8vIGh0dHBzOi8vcHJvamVjdHUtYmFjay1lbmQtMjAyMC5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuLy8gaHR0cHM6Ly91bmlsb3VzLWJhY2stZW5kLW5leHRqcy5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuXHJcbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xyXG4gIHVyaTogJ2h0dHBzOi8vdW5pbG91cy1iYWNrLWVuZC1uZXh0anMuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJyxcclxufSlcclxuXHJcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcclxuICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYFVuaWxvdXMqMjAwMCAke3Rva2VufWAgOiBudWxsLFxyXG4gICAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pXHJcblxyXG4vLyBjb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuLy8gICB1cmk6ICdodHRwczovL3Byb2plY3R1LWJhY2stZW5kLTIwMjAuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJyxcclxuLy8gICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxuLy8gICBzc3JNb2RlOiB0cnVlXHJcbi8vIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKGFwb2xsb0NsaWVudClcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBNQUtFX05PVElGSUNBVElPTiwgQVNLX1FVRVNUSU9OLCBTQVZFX1BPU1QgfSBmcm9tICcuLi9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgR0VUX1BPU1RfVElUTEVTLCBGSU5EX1BPU1QsIFFfQU5EX0FfTk9USUZTIH0gZnJvbSAnLi4vc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcclxuaW1wb3J0IHBwU3R5bGUgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL25ld1Bvc3RQYWdlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdFBhZ2UvUG9zdEltYWdlcydcclxuaW1wb3J0IFBvc3RMaW5rcyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RQYWdlL1Bvc3RMaW5rcydcclxuaW1wb3J0IFBvc3RRYW5kQSBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RQYWdlL1Bvc3RRYW5kQSdcclxuaW1wb3J0IElucHV0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dC1maWVsZC9JbnB1dEhlYWRlcidcclxuaW1wb3J0IEZvcm1Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWZpZWxkL0Zvcm1Db250YWluZXInXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyU1AgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgeyB1c2VGaWVsZCwgdHJpZ2dlckFsZXJ0LCBwYWxsZXR0ZUdlbmVyYXRvciB9IGZyb20gJy4uL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtzZXRUb2tlbn0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCBhcG9sbG8sIHthcG9sbG9DbGllbnR9IGZyb20gJy4uL2xpYi9hcG9sbG8nXHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IFBvc3RQYWdlID0gd2l0aFJvdXRlcigocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50UG9zdCwgc2V0Q3VycmVudFBvc3RdID0gdXNlU3RhdGUocHJvcHMucG9zdClcclxuICAgIGNvbnN0IFtza2lsbEV4cGFuZGVkLCBzZXRTa2lsbEV4cGFuZGVkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IHVzZUZpZWxkKCd0ZXh0JylcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSB1c2VGaWVsZCgndGV4dCcpXHJcbiAgICBjb25zdCBvbkpvaW5FcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUubWVzc2FnZS5pbmNsdWRlcygnaXMgbG9uZ2VyIHRoYW4gdGhlIG1heGltdW0gYWxsb3dlZCBsZW5ndGgnKSkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBgbWVzc2FnZSQ6IG1lc3NhZ2Ugb2YgJHttZXNzYWdlLmZpZWxkcy52YWx1ZS5sZW5ndGh9IGNoYXJhY3RlcnMgZXhjZWVkZWQgdGhlIG1heGltdW0gb2YgODAwIGNoYXJhY3RlcnMuYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25RdWVzdGlvbkVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5tZXNzYWdlLmluY2x1ZGVzKCdpcyBsb25nZXIgdGhhbiB0aGUgbWF4aW11bSBhbGxvd2VkIGxlbmd0aCcpKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBxdWVzdGlvbiQ6IHF1ZXN0aW9uIG9mICR7cXVlc3Rpb24uZmllbGRzLnZhbHVlLmxlbmd0aH0gY2hhcmFjdGVycyBleGNlZWRlZCB0aGUgbWF4aW11bSBvZiA4MDAgY2hhcmFjdGVycy5gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkZvbGxvd0Vycm9yID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtmb2xsb3dNdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihTQVZFX1BPU1QsIHtcclxuICAgICAgICBvbkVycm9yOiBvbkZvbGxvd0Vycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW21ha2VOb3RpZmljYXRpb25dID0gdXNlTXV0YXRpb24oTUFLRV9OT1RJRklDQVRJT04sIHtcclxuICAgICAgICBvbkVycm9yOiBvbkpvaW5FcnJvclxyXG4gICAgfSlcclxuICAgIGNvbnN0IFthc2tRdWVzdGlvbl0gPSB1c2VNdXRhdGlvbihBU0tfUVVFU1RJT04sIHtcclxuICAgICAgICBvbkVycm9yOiBvblF1ZXN0aW9uRXJyb3JcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9sbG93ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghcHJvcHMudG9rZW4pIHtcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ3NpZ24gaW4kOiBtdXN0IGJlIHNpZ25lZCBpbiB0byBwZXJmb3JtIHRoaXMgYWN0aW9uJywgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZvbGxvd011dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiBwcm9wcy5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ6IGN1cnJlbnRQb3N0Ll9pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlclNQKHByb3BzLmN1cnJlbnRVc2VyLnNhdmVkUG9zdHMuY29uY2F0KGN1cnJlbnRQb3N0KSlcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgJ2ZvbGxvd2VkJDogeW91IGFyZSBub3cgZm9sbG93aW5nIHRoaXMgcG9zdCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcWFuZGFRdWVyeSA9IHVzZVF1ZXJ5KFFfQU5EX0FfTk9USUZTLCB7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7dGl0bGU6IGRlY29kZVVSSUNvbXBvbmVudChwcm9wcy5wb3N0VGl0bGUpfVxyXG4gICAgfSlcclxuICAgIC8vIGNvbnN0IHBvc3RRdWVyeSA9IHVzZVF1ZXJ5KEZJTkRfUE9TVCwge1xyXG4gICAgLy8gICAgIHZhcmlhYmxlczoge3RpdGxlOiBkZWNvZGVVUklDb21wb25lbnQocHJvcHMucG9zdFRpdGxlKX1cclxuICAgIC8vIH0pXHJcbiAgICBjb25zdCBxYW5kYUNoYW5nZUNvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBxYW5kYVF1ZXJ5LmRhdGFcclxuICAgICAgICBjb25zdCByZWR1Y2VyID0gY3VycmVudFBvc3RcclxuICAgICAgICBpZiAoIXF1ZXJ5KSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmICghcXVlcnkuc2VhcmNoQW5zd2VyZWRRVG9Qb3N0KSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmICghcmVkdWNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAocmVkdWNlci5xYW5kYSkgcmV0dXJuIG51bGxcclxuICAgICAgICByZXR1cm4gcXVlcnkuc2VhcmNoQW5zd2VyZWRRVG9Qb3N0XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBwb3N0Q2hhbmdlQ29uZGl0aW9ucyA9ICgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBxdWVyeSA9IHBvc3RRdWVyeS5kYXRhXHJcbiAgICAvLyAgICAgY29uc3QgcmVkdWNlciA9IGN1cnJlbnRQb3N0XHJcbiAgICAvLyAgICAgaWYgKCFxdWVyeSkgcmV0dXJuIG51bGxcclxuICAgIC8vICAgICBpZiAoIXF1ZXJ5LmZpbmRQb3N0KSByZXR1cm4gbnVsbFxyXG4gICAgLy8gICAgIGlmIChyZWR1Y2VyKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChyZWR1Y2VyLnRpdGxlID09PSBxdWVyeS5maW5kUG9zdC50aXRsZSkgcmV0dXJuIG51bGxcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHF1ZXJ5LmZpbmRQb3N0XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBxYW5kYSA9IHFhbmRhQ2hhbmdlQ29uZGl0aW9ucygpXHJcbiAgICAvLyBjb25zdCBwb3N0ID0gcG9zdENoYW5nZUNvbmRpdGlvbnMoKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocWFuZGEpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFBvc3Qoey4uLmN1cnJlbnRQb3N0LCBxYW5kYX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIChwb3N0KSB7XHJcbiAgICAgICAgLy8gICAgIHNldEN1cnJlbnRQb3N0KHBvc3QpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSwgW3FhbmRhLCBzZXRDdXJyZW50UG9zdCwgY3VycmVudFBvc3RdKVxyXG4gICAgaWYgKCFjdXJyZW50UG9zdCkge1xyXG4gICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGVhbmVkVGltZSA9IG5ldyBEYXRlKE51bWJlcihjdXJyZW50UG9zdC50aW1lKSlcclxuICAgIGNsZWFuZWRUaW1lID0gY2xlYW5lZFRpbWUudG9TdHJpbmcoKS5zcGxpdCgnICcpXHJcbiAgICAvLyBjbGVhbmVkVGltZSA9IGNsZWFuZWRUaW1lLnNsaWNlKDEsNCkuam9pbignICcpICsgJyAnICsgY2xlYW5lZFRpbWVbNF0uc3BsaXQoJzonKS5zbGljZSgwLDIpLmpvaW4oJzonKVxyXG4gICAgY2xlYW5lZFRpbWUgPSBjbGVhbmVkVGltZS5zbGljZSgxLDMpLmpvaW4oJyAnKSArICcsICcgKyBjbGVhbmVkVGltZVszXVxyXG5cclxuICAgIGxldCBxYW5kYUxpc3QgPSBjdXJyZW50UG9zdC5xYW5kYSA/IGN1cnJlbnRQb3N0LnFhbmRhLm1hcChpID0+IDxQb3N0UWFuZEEgcWFuZGE9e2l9IGtleT17YFFhbmRBJHtpLnF1ZXN0aW9ufWB9IC8+KSA6IDxMb2FkaW5nIC8+XHJcbiAgICBxYW5kYUxpc3QgPSBxYW5kYUxpc3QubGVuZ3RoID8gcWFuZGFMaXN0IDogPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUucWFuZGFUZXh0fT5ubyBxdWVzdGlvbiBhbmQgYW5zd2VyIHBhaXJzIHlldDwvZGl2PlxyXG4gICAgY29uc3Qgc2tpbGxzSFRNTCA9IFtdXHJcbiAgICBjb25zdCBxdWVzdGlvblN0eWxlID0gc2tpbGxFeHBhbmRlZCA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge2Rpc3BsYXk6ICdibG9jayd9XHJcbiAgICBjb25zdCBoYW5kbGVOb3RpZmljYXRpb24gPSBhc3luYyAocHJvcG9zZWRDb250cmlidXRpb24pID0+IHtcclxuICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBzaWduIGluJDogbXVzdCBiZSBzaWduZWQgaW4gdG8gcGVyZm9ybSB0aGlzIGFjdGlvbmAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1lc3NhZ2UuZmllbGRzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBgbWVzc2FnZSQ6IG1lc3NhZ2UgZmllbGQgaXMgcmVxdWlyZWRgLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFrZU5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlckZyb21JZDogcHJvcHMuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgdXNlclRvSWQ6IGN1cnJlbnRQb3N0LnVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ6IGN1cnJlbnRQb3N0Ll9pZCxcclxuICAgICAgICAgICAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgc2V0U2tpbGxFeHBhbmRlZChudWxsKVxyXG4gICAgICAgICAgICBtZXNzYWdlLnJlc2V0KClcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgYHNlbnQkOiAoY2hlY2sgeW91ciBhbnN3ZXJlZCBub3RpZmljYXRpb25zIGZvciB0aGUgcmVzcG9uc2UpIHJlcXVlc3QgaGFzIGJlZW4gc2VudCB0byAke2N1cnJlbnRQb3N0LnVzZXIudXNlcm5hbWV9YCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBpbnMgaW4gY3VycmVudFBvc3Quc2tpbGxOYW1lcykge1xyXG4gICAgICAgIGNvbnN0IHNraWxsTmFtZSA9IGN1cnJlbnRQb3N0LnNraWxsTmFtZXNbaW5zXVxyXG4gICAgICAgIGNvbnN0IHNraWxsRmlsbCA9IGN1cnJlbnRQb3N0LnNraWxsRmlsbHNbaW5zXVxyXG4gICAgICAgIGNvbnN0IHNraWxsQ2FwID0gY3VycmVudFBvc3Quc2tpbGxDYXBhY2l0aWVzW2luc11cclxuICAgICAgICBjb25zdCBtZXNzYWdlU3R5bGUgPSBza2lsbEV4cGFuZGVkID09PSBza2lsbE5hbWUgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG4gICAgICAgIGNvbnN0IGJ1dHRvblRvU2hvd24gPSBza2lsbEV4cGFuZGVkID09PSBza2lsbE5hbWUgP1xyXG4gICAgICAgICAgICA8aDQgb25DbGljaz17KCkgPT4gc2V0U2tpbGxFeHBhbmRlZChudWxsKX0gY2xhc3NOYW1lPXtwcFN0eWxlLlBQU0J1dHRvbkV4aXR9Plg8L2g0PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIHNraWxsRmlsbCA8IHNraWxsQ2FwID9cclxuICAgICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBzZXRTa2lsbEV4cGFuZGVkKHNraWxsTmFtZSl9IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNCdXR0b259PmpvaW48L2g0PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNCdXR0b25EaXNhYmxlZH0+am9pbjwvaDQ+XHJcblxyXG4gICAgICAgIGNvbnN0IHNraWxsUHJvcG9zaXRpb24gPSBBcnJheShjdXJyZW50UG9zdC5za2lsbE5hbWVzLmxlbmd0aCkuZmlsbCgwKVxyXG4gICAgICAgIHNraWxsUHJvcG9zaXRpb25baW5zXSA9IDFcclxuICAgICAgICBza2lsbHNIVE1MLnB1c2goIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNTa2lsbH0ga2V5PXtgUFBTUyR7c2tpbGxOYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBTRGl2aXNpb259IC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3BwU3R5bGUuUFBTU2tpbGxOYW1lfT57c2tpbGxOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLlBQU1NraWxsU2Vjb25kYXJ5fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3BwU3R5bGUuUFBTU2tpbGxJbmZvfT57c2tpbGxGaWxsfS97c2tpbGxDYXB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25Ub1Nob3dufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNTa2lsbEZvcm19IHN0eWxlPXttZXNzYWdlU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLlBQU1RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiUFBTLW1lc3NhZ2VcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJtZXNzYWdlXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBTSW5wdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtwcFN0eWxlLlBQU0lucHV0fSBpZD1cIlBQUy1tZXNzYWdlXCIgey4uLm1lc3NhZ2UuZmllbGRzfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLlBQQ1N1Ym1pdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHs8aDQgb25DbGljaz17KCkgPT4gaGFuZGxlTm90aWZpY2F0aW9uKHNraWxsUHJvcG9zaXRpb24pfSBjbGFzc05hbWU9e3BwU3R5bGUuUFBTQkJ1dHRvbn0gc3R5bGU9e3tib3JkZXJDb2xvcjogY3VycmVudFBvc3QuY29sb3J9fT5qb2luPC9oND59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVF1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgYHNpZ24gaW4kOiBtdXN0IGJlIHNpZ25lZCBpbiB0byBwZXJmb3JtIHRoaXMgYWN0aW9uYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcXVlc3Rpb24uZmllbGRzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBgcXVlc3Rpb24kOiBxdWVzdGlvbiBmaWVsZCBpcyByZXF1aXJlZGAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhc2tRdWVzdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlckZyb21JZDogcHJvcHMuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgdXNlclRvSWQ6IGN1cnJlbnRQb3N0LnVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgcG9zdElkOiBjdXJyZW50UG9zdC5faWQsXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb24uZmllbGRzLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcXVlc3Rpb24ucmVzZXQoKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCBgc2VudCQ6IChjaGVjayB5b3VyIGFuc3dlcmVkIG5vdGlmaWNhdGlvbnMgZm9yIHRoZSByZXNwb25zZSkgcXVlc3Rpb24gaGFzIGJlZW4gc2VudCB0byAke2N1cnJlbnRQb3N0LnVzZXIudXNlcm5hbWV9YCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcGFsbGV0dGUgPSBwYWxsZXR0ZUdlbmVyYXRvcihjdXJyZW50UG9zdC5jb2xvcikuY29sb3JQYWxsZXR0ZVxyXG5cclxuICAgIGNvbnN0IHRlYW1IVE1MID0gY3VycmVudFBvc3QudGVhbSA/IGN1cnJlbnRQb3N0LnRlYW0ubWFwKHVuID0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL3VzZXJuYW1lXCIgYXM9e2AvdXNlci8ke3VufWB9IGtleT17YFBUJHt1bn1gfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtwcFN0eWxlLlBQQ1VzZXJDb250YWluZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3BwU3R5bGUuUFBDVXNlckljb259IHNyYz0nL3N2Zy91c2VyQi5zdmcnIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiTk1cIj57dW59PC9wPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIFxyXG4gICAgKTogbnVsbFxyXG5cclxuICAgIGNvbnN0IEhvbWVDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLmhvbWVPcHRpb25zfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzdWx0cy9bc2VhcmNoUXVlcnldXCIgYXM9XCIvcmVzdWx0cy9hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3BwU3R5bGUuaG9tZU9wdGlvbn0gbmV1dHJhbGl6ZS1saW5rYH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyODI4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N2Zy9zZWFyY2hXVy5zdmcnIGNsYXNzTmFtZT17cHBTdHlsZS5ob21lT3B0aW9uSWNvbn0gYWx0PVwic2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17cHBTdHlsZS5ob21lT3B0aW9uVGV4dH0+YnJvd3NlIGFsbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0Zm9ybXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3BwU3R5bGUuaG9tZU9wdGlvbn0gbmV1dHJhbGl6ZS1saW5rYH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdmcvcGx1c1cuc3ZnJyBjbGFzc05hbWU9e3BwU3R5bGUuaG9tZU9wdGlvbkljb259IGFsdD1cImFkZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3BwU3R5bGUuaG9tZU9wdGlvblRleHR9PmFkZCBwcm9qZWN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL3Y3dkZjOVVcIiBjbGFzc05hbWU9e2Ake3BwU3R5bGUuaG9tZU9wdGlvbn0gJHtwcFN0eWxlLmhvbWVPcHRpb25IaWdobGlnaHR9IG5ldXRyYWxpemUtbGlua2B9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzcyODlEQSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N2Zy93ZWJzaXRlcy9kaXNjb3JkLnN2ZycgY2xhc3NOYW1lPXtwcFN0eWxlLmhvbWVPcHRpb25JY29ufSBhbHQ9XCJEaXNjb3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtwcFN0eWxlLmhvbWVPcHRpb25UZXh0fT5jb21tdW5pdHkgZGlzY29yZDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNb2RpZmllZERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlZERpcyA9IGN1cnJlbnRQb3N0LmRlc2NyaXB0aW9uLnNwbGl0KCcgJylcclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gc3BhY2VkRGlzKSB7XHJcbiAgICAgICAgICAgIGlmIChzcGFjZWREaXNbaV0uaW5jbHVkZXMoJ2h0dHBzOi8vJykpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlZERpc1tpXSA9IGA8YSBocmVmPVwiJHtzcGFjZWREaXNbaV19XCIgY2xhc3M9XCJwLWxpbmsgbmV1dHJhbGl6ZS1saW5rXCI+JHtzcGFjZWREaXNbaV19PC9hPmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BhY2VkRGlzW2ldLmluY2x1ZGVzKCdodHRwOi8vJykpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlZERpc1tpXSA9IGA8YSBocmVmPVwiJHtzcGFjZWREaXNbaV19XCIgY2xhc3M9XCJwLWxpbmsgbmV1dHJhbGl6ZS1saW5rXCI+JHtzcGFjZWREaXNbaV19PC9hPmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaW5hbERpcyA9IHNwYWNlZERpcy5qb2luKCcgJylcclxuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPXtwcFN0eWxlLlBQQ0Rlc2NyaXB0aW9ufSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZmluYWxEaXN9fSAvPlxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2tpbGxDYXAgPSBjdXJyZW50UG9zdC5za2lsbENhcGFjaXRpZXMucmVkdWNlKChuLCB0KSA9PiB0ICsgbiwgMClcclxuICAgIGNvbnN0IHNraWxsRmlsbCA9IGN1cnJlbnRQb3N0LnNraWxsRmlsbHMucmVkdWNlKChuLCB0KSA9PiB0ICsgbiwgMClcclxuICAgIGNvbnN0IHRpdGxlS2V5d29yZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gY3VycmVudFBvc3QudGl0bGVcclxuICAgICAgICB0aXRsZSA9IHRpdGxlLnNwbGl0KCcgJylcclxuICAgICAgICBsZXQga2V5d29yZHMgPSB0aXRsZS5tYXAodyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3LnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgPT09IHcuc2xpY2UoMCwgMSkgJiYgdy5zbGljZSgwLCAxKS50b0xvd2VyQ2FzZSgpID09PSB3LnNsaWNlKDAsIDEpKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAody5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpID09PSB3LnNsaWNlKDAsIDEpKSByZXR1cm4gdyArICcsJ1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAga2V5d29yZHMgPSBrZXl3b3Jkcy5sZW5ndGggPyBrZXl3b3Jkcy5qb2luKCcgJykgOiB0aXRsZVswXSArICcsICdcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ga2V5d29yZHNcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gPEhlbG1ldD5cclxuICAgIC8vICAgICA8dGl0bGU+e2N1cnJlbnRQb3N0LnRpdGxlfTwvdGl0bGU+XHJcbiAgICAvLyAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9e2N1cnJlbnRQb3N0LnVzZXIudXNlcm5hbWV9IC8+XHJcbiAgICAvLyAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YEpvaW4gdGhlIHByb2plY3QsIGJlIHBhcnQgb2YgXCIke2N1cnJlbnRQb3N0LnRpdGxlfVwiIHRlYW0hIFNvIGZhciAke3NraWxsRmlsbH0gYXdlc29tZSBwZW9wbGUgaGF2ZSBqb2luZWQsIHRoZXJlIGFyZSBvbmx5ICR7c2tpbGxDYXAgLSBza2lsbEZpbGx9IHNsb3RzIGxlZnQuYH0gLz5cclxuICAgIC8vICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtgJHt0aXRsZUtleXdvcmRzKCl9IGJ1aWxkLCB0ZWFtYH0gLz5cclxuICAgIC8vIDwvSGVsbWV0PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Vbmlsb3VzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9kNmJzblJ4LnBuZ1wiIGtleT1cInRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJMb29raW5nIHRvIGpvaW4gb3IgbWFrZSBhIHRlYW0sIFVuaWxvdXMgd2lsbCBoZWxwIHlvdSBtYWtlIGl0IGhhcHBlbiEgSm9pbiBvdXIgc2tpbGxlZCBjb21tdW5pdHkgb2YgcGVvcGxlIGxvb2tpbmcgdG8gbWFrZSBzb21ldGhpbmcgZ3JlYXQuXCIga2V5PVwiZGVzY3JpcHRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cIi1jY2RQdVcwV3hqamhYc2pEZ25mYlllb2xnaHJsVTZyM01Mak9kV0twQ3dcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLnBvc3RQYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLlBQQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhvbWVDb250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17cHBTdHlsZS5QUENUaXRsZX0+e2N1cnJlbnRQb3N0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBDU3ViSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGN1cnJlbnRQb3N0LnVzZXIudXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7cHBTdHlsZS5QUENVc2VyQ29udGFpbmVyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17cHBTdHlsZS5QUENVc2VySWNvbn0gc3JjPScvc3ZnL3VzZXJCLnN2ZycgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiTk1cIj57Y3VycmVudFBvc3QudXNlci51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtwcFN0eWxlLlBQQ1RpbWV9PntjbGVhbmVkVGltZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGlmaWVkRGVzY3JpcHRpb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdEltYWdlcyBpbWFnZUxpbmtzPXtjdXJyZW50UG9zdC5pbWFnZUxpbmtzfSBjb2xvcj17Y3VycmVudFBvc3QuY29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RMaW5rcyByZWZlcmVuY2VMaW5rcz17Y3VycmVudFBvc3QucmVmZXJlbmNlTGlua3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17cHBTdHlsZS5QUENUaXRsZX0+USBhbmQgQTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBDQWxsUWFuZGFDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cWFuZGFMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3BwU3R5bGUuUFBDVGl0bGV9PnRlYW08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLnRlYW1JbmZvfT57dGVhbUhUTUwubGVuZ3RofSB0ZWFtIG1lbWJlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUENUZWFtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RlYW1IVE1MfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRhaW5lciBwYWxsZXR0ZT17cGFsbGV0dGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17cHBTdHlsZS5QUFNGb2xsb3dIZWFkZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2xsb3coKX0gY2xhc3NOYW1lPXtwcFN0eWxlLlBQU0ZvbGxvd0hlYWRlcn0gc3R5bGU9e3tib3JkZXJUb3A6ICcycHggc29saWQgY3VycmVudFBvc3QuY29sb3InfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17cHBTdHlsZS5QUENVc2VySWNvbn0gZmlsbD17Y3VycmVudFBvc3QuY29sb3J9IHZpZXdCb3g9XCIwIC0yOCA1MTIuMDAwMDIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNDcxLjM4MjgxMiA0NC41NzgxMjVjLTI2LjUwMzkwNi0yOC43NDYwOTQtNjIuODcxMDkzLTQ0LjU3ODEyNS0xMDIuNDEwMTU2LTQ0LjU3ODEyNS0yOS41NTQ2ODcgMC01Ni42MjEwOTQgOS4zNDM3NS04MC40NDkyMTggMjcuNzY5NTMxLTEyLjAyMzQzOCA5LjMwMDc4MS0yMi45MTc5NjkgMjAuNjc5Njg4LTMyLjUyMzQzOCAzMy45NjA5MzgtOS42MDE1NjItMTMuMjc3MzQ0LTIwLjUtMjQuNjYwMTU3LTMyLjUyNzM0NC0zMy45NjA5MzgtMjMuODI0MjE4LTE4LjQyNTc4MS01MC44OTA2MjUtMjcuNzY5NTMxLTgwLjQ0NTMxMi0yNy43Njk1MzEtMzkuNTM5MDYzIDAtNzUuOTEwMTU2IDE1LjgzMjAzMS0xMDIuNDE0MDYzIDQ0LjU3ODEyNS0yNi4xODc1IDI4LjQxMDE1Ni00MC42MTMyODEgNjcuMjIyNjU2LTQwLjYxMzI4MSAxMDkuMjkyOTY5IDAgNDMuMzAwNzgxIDE2LjEzNjcxOSA4Mi45Mzc1IDUwLjc4MTI1IDEyNC43NDIxODcgMzAuOTkyMTg4IDM3LjM5NDUzMSA3NS41MzUxNTYgNzUuMzU1NDY5IDEyNy4xMTcxODggMTE5LjMxMjUgMTcuNjEzMjgxIDE1LjAxMTcxOSAzNy41NzgxMjQgMzIuMDI3MzQ0IDU4LjMwODU5MyA1MC4xNTIzNDQgNS40NzY1NjMgNC43OTY4NzUgMTIuNTAzOTA3IDcuNDM3NSAxOS43OTI5NjkgNy40Mzc1IDcuMjg1MTU2IDAgMTQuMzE2NDA2LTIuNjQwNjI1IDE5Ljc4NTE1Ni03LjQyOTY4NyAyMC43MzA0NjktMTguMTI4OTA3IDQwLjcwNzAzMi0zNS4xNTIzNDQgNTguMzI4MTI1LTUwLjE3MTg3NiA1MS41NzQyMTktNDMuOTQ5MjE4IDk2LjExNzE4OC04MS45MDYyNSAxMjcuMTA5Mzc1LTExOS4zMDQ2ODcgMzQuNjQ0NTMyLTQxLjgwMDc4MSA1MC43NzczNDQtODEuNDM3NSA1MC43NzczNDQtMTI0Ljc0MjE4NyAwLTQyLjA2NjQwNy0xNC40MjU3ODEtODAuODc4OTA3LTQwLjYxNzE4OC0xMDkuMjg5MDYzem0wIDBcIi8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJOTVwiPmZvbGxvdzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3NraWxsc0hUTUx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17cXVlc3Rpb25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLlBQU0RpdmlzaW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJQUFMtcXVlc3Rpb25cIiBpbmZvPXt0cnVlfSB0aXRsZT1cInF1ZXN0aW9uXCIgY29sb3I9XCJ3aGl0ZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXJnaW46IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPmlmIGFuc3dlcmVkIGl0IHdpbGwgYmUgc2hvd24gb24gcG9zdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNJbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtwcFN0eWxlLlBQU0lucHV0fSBpZD1cIlBQUy1xdWVzdGlvblwiIHsuLi5xdWVzdGlvbi5maWVsZHN9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUENTdWJtaXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IGhhbmRsZVF1ZXN0aW9uKCl9IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNCdXR0b259IHN0eWxlPXt7Ym9yZGVyQ29sb3I6IGN1cnJlbnRQb3N0LmNvbG9yfX0+YXNrPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59KVxyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vIFx0cmV0dXJuIHtcclxuLy8gICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbi8vICAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuXHJcbi8vIFx0fVxyXG4vLyB9XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbi8vICAgICBtYXBTdGF0ZVRvUHJvcHMsIFxyXG4vLyAgICAgeyBzZXRBbGVydCwgcmVzZXRBbGVydCwgc2V0Q3VycmVudFVzZXJTUCB9XHJcbi8vICkoUG9zdFBhZ2UpXHJcblxyXG5Qb3N0UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwb3N0UXVlcnkgPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBGSU5EX1BPU1QsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7dGl0bGU6ICdVbmlsb3VzJ30gXHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHBvc3RRdWVyeSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9zdDogcG9zdFF1ZXJ5LmRhdGEuZmluZFBvc3QsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICBhbGVydE5vdGlmOiBzdGF0ZS5hbGVydE5vdGlmLFxyXG5cdH1cclxufVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0VG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyU1A6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlclNQLCBkaXNwYXRjaClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFBvc3RQYWdlKSIsImV4cG9ydCBjb25zdCBzZXRBbGVydCA9IChpbmZvKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9BTEVSVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGluZm9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRBbGVydCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnUkVTRVRfQUxFUlQnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYWxlcnROb3RpZiA9IChzdGF0ZSA9IHtjb2xvcjogbnVsbCwgdGV4dENvbG9yOiBudWxsLCBtZXNzYWdlOiBudWxsfSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX0FMRVJUJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIGNhc2UgJ1JFU0VUX0FMRVJUJyA6XHJcbiAgICAgICAgICAgIHJldHVybiB7Y29sb3I6IG51bGwsIHRleHRDb2xvcjogbnVsbCwgbWVzc2FnZTogbnVsbH1cclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsZXJ0Tm90aWYiLCJleHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXIgPSAodXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VSUkVOVF9VU0VSJyxcclxuICAgICAgICAgICAgZGF0YTogdXNlclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlclBvc3RzID0gKHBvc3RzKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9QT1NUUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3RzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyU1AgPSAocG9zdHMpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX1NQJyxcclxuICAgICAgICAgICAgZGF0YTogcG9zdHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zID0gKG5vdGlmaWNhdGlvbnMpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX05PVElGSUNBVElPTlMnLFxyXG4gICAgICAgICAgICBkYXRhOiBub3RpZmljYXRpb25zXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBlbmRpbmdOb3RpZmljYXRpb25zID0gKGFtdCkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfUE4nLFxyXG4gICAgICAgICAgICBkYXRhOiBhbXRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjdXJyZW50VXNlciA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9QTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBlbmRpbmdOb3RpZmljYXRpb25zOiBhY3Rpb24uZGF0YX1cclxuICAgICAgICBjYXNlICdTRVRfQ1VSUkVOVF9VU0VSJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9QT1NUUycgOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwb3N0czogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVX1NQJyA6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2F2ZWRQb3N0czogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgY2FzZSAnU0VUX0NVX05PVElGSUNBVElPTlMnIDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbm90aWZpY2F0aW9uczogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50VXNlciIsImV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnU0VUX1RPS0VOJyxcclxuICAgICAgICBkYXRhOiB0b2tlblxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyVG9rZW4gPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdDTEVBUl9UT0tFTidcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHRva2VuID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfVE9LRU4nIDpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICAgICAgY2FzZSAnQ0xFQVJfVE9LRU4nIDpcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9rZW4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gYWRkUG9zdChcclxuICAgICR0aXRsZTogU3RyaW5nISxcclxuICAgICR1c2VyOiBJRCEsXHJcbiAgICAkY29udGFjdExpbms6IFN0cmluZyFcclxuICAgICRza2lsbE5hbWVzOiBbU3RyaW5nIV0hLFxyXG4gICAgJHNraWxsQ2FwYWNpdGllczogW0ludCFdISxcclxuICAgICRza2lsbEZpbGxzOiBbSW50IV0hLFxyXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchLFxyXG4gICAgJGNvbG9yOiBTdHJpbmchLFxyXG4gICAgJGltYWdlTGlua3M6IFtTdHJpbmchXSxcclxuICAgICRyZWZlcmVuY2VMaW5rczogW1N0cmluZyFdXHJcbiAgKXtcclxuICAgIGFkZFBvc3QoXHJcbiAgICAgIHRpdGxlOiR0aXRsZSxcclxuICAgICAgdXNlcjokdXNlcixcclxuICAgICAgY29udGFjdExpbms6ICRjb250YWN0TGluayxcclxuICAgICAgc2tpbGxOYW1lczokc2tpbGxOYW1lcyxcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzOiRza2lsbENhcGFjaXRpZXMsXHJcbiAgICAgIHNraWxsRmlsbHM6ICRza2lsbEZpbGxzLFxyXG4gICAgICBkZXNjcmlwdGlvbjokZGVzY3JpcHRpb24sXHJcbiAgICAgIGNvbG9yOiRjb2xvcixcclxuICAgICAgaW1hZ2VMaW5rczokaW1hZ2VMaW5rcyxcclxuICAgICAgcmVmZXJlbmNlTGlua3M6JHJlZmVyZW5jZUxpbmtzXHJcbiAgICApe1xyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUID0gZ3FsYFxyXG4vLyAgIG11dGF0aW9uIGRlbGV0ZVBvc3QgKFxyXG4vLyAgICAgJHBvc3RJZDogSUQhXHJcbi8vICAgKSB7XHJcbi8vICAgICBkZWxldGVQb3N0IChwb3N0SWQ6ICRwb3N0SWQpXHJcbi8vICAgfVxyXG4vLyBgXHJcblxyXG5leHBvcnQgY29uc3QgTUFLRV9OT1RJRklDQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gbWFrZU5vdGlmaWNhdGlvbihcclxuICAgICR1c2VyRnJvbUlkOiBJRCEsXHJcbiAgICAkdXNlclRvSWQ6IElEISxcclxuICAgICRtZXNzYWdlOiBTdHJpbmchLFxyXG4gICAgJHBvc3RJZDogSUQsXHJcbiAgICAkcHJvcG9zZWRDb250cmlidXRpb246IFtJbnQhXVxyXG4gICl7XHJcbiAgICBtYWtlTm90aWZpY2F0aW9uKFxyXG4gICAgICB1c2VyRnJvbUlkOiAkdXNlckZyb21JZCxcclxuICAgICAgdXNlclRvSWQ6ICR1c2VyVG9JZCxcclxuICAgICAgbWVzc2FnZTogJG1lc3NhZ2UsXHJcbiAgICAgIHBvc3RJZDogJHBvc3RJZCxcclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb246ICRwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgKXtcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQUNDRVBUX05PVElGSUNBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBhY2NlcHROb3RpZmljYXRpb24oJG5vdGlmaWNhdGlvbklkOiBJRCEpIHtcclxuICAgIGFjY2VwdE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZDogJG5vdGlmaWNhdGlvbklkKSB7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgREVDTElORV9OT1RJRklDQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gZGVjbGluZU5vdGlmaWNhdGlvbigkbm90aWZpY2F0aW9uSWQ6IElEISkge1xyXG4gICAgZGVjbGluZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZDogJG5vdGlmaWNhdGlvbklkKSB7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1VTRVIgPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlVXNlcigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISwgJHJlZmVyZW5jZUxpbms6IFN0cmluZyEpIHtcclxuICAgIGNyZWF0ZVVzZXIoXHJcbiAgICAgIHVzZXJuYW1lOiAkdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmQsXHJcbiAgICAgIHJlZmVyZW5jZUxpbms6ICRyZWZlcmVuY2VMaW5rXHJcbiAgICApe1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0gZ3FsYFxyXG4gIG11dGF0aW9uIGxvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKXtcclxuICAgIGxvZ2luKFxyXG4gICAgICB1c2VybmFtZTogJHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogJHBhc3N3b3JkXHJcbiAgICApe1xyXG4gICAgICB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNBVkVfUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiBzYXZlUG9zdFRvVXNlciAoXHJcbiAgICAkdXNlcjogSUQhLFxyXG4gICAgJHBvc3RJZDogSUQhXHJcbiAgKSB7XHJcbiAgICBzYXZlUG9zdFRvVXNlciAodXNlcjogJHVzZXIsIHBvc3RJZDogJHBvc3RJZCkge1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1NBVkVEX1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gcmVtb3ZlU2F2ZWRQb3N0IChcclxuICAgICR1c2VyOiBJRCEsXHJcbiAgICAkcG9zdElkOiBJRCFcclxuICApIHtcclxuICAgIHJlbW92ZVNhdmVkUG9zdCAodXNlcjogJHVzZXIsIHBvc3RJZDogJHBvc3RJZClcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBU0tfUVVFU1RJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gYXNrUXVlc3Rpb24gKFxyXG4gICAgJHVzZXJGcm9tSWQ6IElEISxcclxuICAgICR1c2VyVG9JZDogSUQhLFxyXG4gICAgJHBvc3RJZDogSUQhLFxyXG4gICAgJHF1ZXN0aW9uOiBTdHJpbmchXHJcbiAgKXtcclxuICAgIGFza1F1ZXN0aW9uIChcclxuICAgICAgdXNlckZyb21JZDogJHVzZXJGcm9tSWQsXHJcbiAgICAgIHVzZXJUb0lkOiAkdXNlclRvSWQsXHJcbiAgICAgIHBvc3RJZDogJHBvc3RJZCxcclxuICAgICAgcXVlc3Rpb246ICRxdWVzdGlvblxyXG4gICAgKXtcclxuICAgICAgdXNlckZyb20ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgcG9zdHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGNvbG9yXHJcbiAgICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICBxdWVzdGlvblxyXG4gICAgICBhbnN3ZXJcclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQU5TV0VSX1FVRVNUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFuc3dlclF1ZXN0aW9uIChcclxuICAgICRub3RpZmljYXRpb25JZDogSUQhLFxyXG4gICAgJHJlc3BvbnNlOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBhbnN3ZXJRdWVzdGlvbiAoXHJcbiAgICAgIG5vdGlmaWNhdGlvbklkOiAkbm90aWZpY2F0aW9uSWQsXHJcbiAgICAgIHJlc3BvbnNlOiAkcmVzcG9uc2VcclxuICAgICl7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYCIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBMSVNUX09GX05PVElGSUNBVElPTlMgPSBncWxgXHJcbiAgcXVlcnkgbGlzdE9mTm90aWZpY2F0aW9ucygkbm90aWZpY2F0aW9uczogW1N0cmluZyFdKSB7XHJcbiAgICBsaXN0T2ZOb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnM6ICRub3RpZmljYXRpb25zKSB7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIGNvbnRhY3RMaW5rXHJcbiAgICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICBxdWVzdGlvblxyXG4gICAgICBhbnN3ZXJcclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU0tJTExfU0VBUkNIID0gZ3FsYFxyXG4gIHF1ZXJ5IHNraWxsU2VhcmNoKCRmaWx0ZXI6IFN0cmluZyEpIHtcclxuICAgIHNraWxsU2VhcmNoKGZpbHRlcjogJGZpbHRlcikge1xyXG4gICAgICBuYW1lXHJcbiAgICAgIHVzZXNcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBNRSA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBtZXtcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgcmVmZXJlbmNlTGlua1xyXG4gICAgICBwcmltYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBzZWNvbmRhcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGludGVyZXN0c1xyXG4gICAgICBwb3N0c3tcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBfaWRcclxuICAgICAgfSxcclxuICAgICAgbm90aWZpY2F0aW9uc3tcclxuICAgICAgICB1c2VyRnJvbXtcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyVG97XHJcbiAgICAgICAgICBfaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIHBvc3R7XHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgICAgYWNjZXB0ZWRcclxuICAgICAgfVxyXG4gICAgICBfaWRcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTElTVF9PRl9QT1NUUyA9IGdxbGBcclxuICBxdWVyeSBnZXRMaXN0T2ZQb3N0cygkaWRfbGlzdDogW1N0cmluZ10pIHtcclxuICAgIGdldExpc3RPZlBvc3RzKGlkTGlzdDogJGlkX2xpc3Qpe1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1c2Vye1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgY29sb3JcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRklORF9QT1NUID0gZ3FsYFxyXG4gIHF1ZXJ5IGZpbmRQb3N0KCR0aXRsZTogU3RyaW5nISl7XHJcbiAgICBmaW5kUG9zdCh0aXRsZTogJHRpdGxlKXtcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBza2lsbE5hbWVzXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICBza2lsbEZpbGxzXHJcbiAgICAgIHRlYW1cclxuICAgICAgdGltZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBjb2xvclxyXG4gICAgICBpbWFnZUxpbmtzXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtzXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZJTkRfVVNFUiA9IGdxbGBcclxuICBxdWVyeSBmaW5kVXNlcigkdXNlcm5hbWU6IFN0cmluZyEpe1xyXG4gICAgZmluZFVzZXIodXNlcm5hbWU6ICR1c2VybmFtZSkge1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgICByZWZlcmVuY2VMaW5rXHJcbiAgICAgIHByaW1hcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNlY29uZGFyeVNraWxsc3tcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgICAgaW50ZXJlc3RzXHJcbiAgICAgIHBvc3Rze1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIG5vdGlmaWNhdGlvbnMge1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHNhdmVkUG9zdHMge1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9VU0VSUyA9IGdxbGBcclxuICBxdWVyeXtcclxuICAgIGFsbFVzZXJze1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTT01FX1VTRVJTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNvbWVVc2Vycygkc2tpcDogSW50ISwgJGZpcnN0OiBJbnQhKXtcclxuICAgIHNvbWVVc2Vycyhza2lwOiAkc2tpcCwgZmlyc3Q6ICRmaXJzdCl7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQUxMX1BPU1RTID0gZ3FsYFxyXG4gIHF1ZXJ5e1xyXG4gICAgYWxsUG9zdHN7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXJ7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBza2lsbE5hbWVzXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICBza2lsbEZpbGxzXHJcbiAgICAgIHRpbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgY29sb3JcclxuICAgICAgaW1hZ2VMaW5rc1xyXG4gICAgICByZWZlcmVuY2VMaW5rc1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9USVRMRVMgPSBncWxgXHJcbiAgcXVlcnl7XHJcbiAgICBhbGxQb3N0c3tcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnkgc2VhcmNoUG9zdHMoJGZpbHRlclN0cmluZzogU3RyaW5nISwgJHBvc3RJZHM6IFtTdHJpbmchXSwgJGV2ZW50UXVlcnk6IFN0cmluZyl7XHJcbiAgICBzZWFyY2hQb3N0cyhmaWx0ZXJTdHJpbmc6ICRmaWx0ZXJTdHJpbmcsIHBvc3RJZHM6ICRwb3N0SWRzLCBldmVudFF1ZXJ5OiAkZXZlbnRRdWVyeSl7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICB0aW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbG9yXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBFTkRJTkdfTk9USUZTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNlYXJjaEF3YWl0aW5nTm90aWZzKCR1c2VySWQ6IElEISkge1xyXG4gICAgc2VhcmNoQXdhaXRpbmdOb3RpZnModXNlcklkOiAkdXNlcklkKVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFFfQU5EX0FfTk9USUZTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNlYXJjaEFuc3dlcmVkUVRvUG9zdCAoICR0aXRsZTogU3RyaW5nISApIHtcclxuICAgIHNlYXJjaEFuc3dlcmVkUVRvUG9zdCAoXHJcbiAgICAgIHRpdGxlOiAkdGl0bGVcclxuICAgICl7XHJcbiAgICAgIHVzZXJGcm9te1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHF1ZXN0aW9uXHJcbiAgICAgIGFuc3dlclxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmAiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtSW5mb0NvbnRhaW5lclwiOiBcImlucHV0SGVhZGVyX2Zvcm1JbmZvQ29udGFpbmVyX195UWJrYVwiLFxuXHRcImluZm9IZWFkZXJDb250YWluZXJcIjogXCJpbnB1dEhlYWRlcl9pbmZvSGVhZGVyQ29udGFpbmVyX19oUS1Ja1wiLFxuXHRcImluZm9UaXRsZVRleHRcIjogXCJpbnB1dEhlYWRlcl9pbmZvVGl0bGVUZXh0X18zeGxqbFwiLFxuXHRcImluZm9JY29uQ29udGFpbmVyXCI6IFwiaW5wdXRIZWFkZXJfaW5mb0ljb25Db250YWluZXJfXzNNeFgzXCIsXG5cdFwiaW5mb0ljb25cIjogXCJpbnB1dEhlYWRlcl9pbmZvSWNvbl9fM2JUT3pcIixcblx0XCJpbmZvQ29udGVudFwiOiBcImlucHV0SGVhZGVyX2luZm9Db250ZW50X18xd09ud1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibmV3TmF2QmFyX2NvbnRhaW5lcl9fMlNmdDlcIixcblx0XCJicmFuZENvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9icmFuZENvbnRhaW5lcl9fMS1HajZcIixcblx0XCJuYW1lXCI6IFwibmV3TmF2QmFyX25hbWVfXzJjWl9xXCIsXG5cdFwiaWNvblwiOiBcIm5ld05hdkJhcl9pY29uX18yZ0xNMFwiLFxuXHRcInNlYXJjaENvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9zZWFyY2hDb250YWluZXJfX19FV1NIXCIsXG5cdFwibWFnbmlmaWVyXCI6IFwibmV3TmF2QmFyX21hZ25pZmllcl9fM1VLOGRcIixcblx0XCJzZWFyY2hCdG5cIjogXCJuZXdOYXZCYXJfc2VhcmNoQnRuX19RZnVXX1wiLFxuXHRcInNlYXJjaEJhclwiOiBcIm5ld05hdkJhcl9zZWFyY2hCYXJfX1ZCYjdrXCIsXG5cdFwiQ1BDb250YWluZXJcIjogXCJuZXdOYXZCYXJfQ1BDb250YWluZXJfXzJ1SWtfXCIsXG5cdFwicGx1c1wiOiBcIm5ld05hdkJhcl9wbHVzX18zR3dRVVwiLFxuXHRcIkNQVGV4dFwiOiBcIm5ld05hdkJhcl9DUFRleHRfXzJqcmUwXCIsXG5cdFwidXNlcldyYXBwZXJcIjogXCJuZXdOYXZCYXJfdXNlcldyYXBwZXJfXzJ3d3A1XCIsXG5cdFwidXNlckNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl91c2VyQ29udGFpbmVyX18xZkdFdlwiLFxuXHRcInVzZXJPcHRpb25cIjogXCJuZXdOYXZCYXJfdXNlck9wdGlvbl9fM2JaMWlcIixcblx0XCJub3RpZkNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9ub3RpZkNvbnRhaW5lcl9fM0RwUGRcIixcblx0XCJ0aXRsZUJlbGxcIjogXCJuZXdOYXZCYXJfdGl0bGVCZWxsX18xZVdmd1wiLFxuXHRcImJlbGxcIjogXCJuZXdOYXZCYXJfYmVsbF9fM2tELTdcIixcblx0XCJub2ZpZkNvdW50XCI6IFwibmV3TmF2QmFyX25vZmlmQ291bnRfXzFiQ3diXCIsXG5cdFwidXNlckluZm9Db250YWluZXJcIjogXCJuZXdOYXZCYXJfdXNlckluZm9Db250YWluZXJfXzFYUzQzXCIsXG5cdFwidXNlcm5hbWVcIjogXCJuZXdOYXZCYXJfdXNlcm5hbWVfX0V3SFcwXCIsXG5cdFwiRERBcnJvd1wiOiBcIm5ld05hdkJhcl9EREFycm93X18xNHhzUVwiLFxuXHRcInVzZXJERFwiOiBcIm5ld05hdkJhcl91c2VyRERfXzItSy1MXCIsXG5cdFwidXNlclwiOiBcIm5ld05hdkJhcl91c2VyX18xUmNpUlwiLFxuXHRcInNpZ25PcHRpb25cIjogXCJuZXdOYXZCYXJfc2lnbk9wdGlvbl9fM1QyRi1cIixcblx0XCJjb250YWluZXJNXCI6IFwibmV3TmF2QmFyX2NvbnRhaW5lck1fXzJJamlhXCIsXG5cdFwiYnJhbmRDb250YWluZXJNXCI6IFwibmV3TmF2QmFyX2JyYW5kQ29udGFpbmVyTV9fM0lURTVcIixcblx0XCJuYXZJdGVtXCI6IFwibmV3TmF2QmFyX25hdkl0ZW1fX0dMd1B1XCIsXG5cdFwibmF2SWNvblwiOiBcIm5ld05hdkJhcl9uYXZJY29uX18zbnlEd1wiLFxuXHRcInN1Yk5hdkNvbnRhaW5lclwiOiBcIm5ld05hdkJhcl9zdWJOYXZDb250YWluZXJfXzNxVVFrXCIsXG5cdFwic2VhcmNoQ29udGFpbmVyTVwiOiBcIm5ld05hdkJhcl9zZWFyY2hDb250YWluZXJNX18yX25CRFwiLFxuXHRcIm1lbnVDb250YWluZXJcIjogXCJuZXdOYXZCYXJfbWVudUNvbnRhaW5lcl9fM21SQkRcIixcblx0XCJtb3JlQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX21vcmVDb250YWluZXJfXzFYdlVaXCIsXG5cdFwidGl0bGVNb3JlXCI6IFwibmV3TmF2QmFyX3RpdGxlTW9yZV9fMW1NR2FcIixcblx0XCJtb3JlXCI6IFwibmV3TmF2QmFyX21vcmVfXzJKZ0VwXCIsXG5cdFwiU05JQ29udGFpbmVyXCI6IFwibmV3TmF2QmFyX1NOSUNvbnRhaW5lcl9fMXk2cE9cIixcblx0XCJub3RpZkNvbnRhaW5lck1cIjogXCJuZXdOYXZCYXJfbm90aWZDb250YWluZXJNX18xNy1VMlwiLFxuXHRcImRkT3B0aW9uXCI6IFwibmV3TmF2QmFyX2RkT3B0aW9uX18xZnFqbVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGVzdFwiOiBcIm5ld1Bvc3RQYWdlX3Rlc3RfX0JEcHdPXCIsXG5cdFwicG9zdFBhZ2VDb250YWluZXJcIjogXCJuZXdQb3N0UGFnZV9wb3N0UGFnZUNvbnRhaW5lcl9fM3d4NV9cIixcblx0XCJob21lT3B0aW9uc1wiOiBcIm5ld1Bvc3RQYWdlX2hvbWVPcHRpb25zX18yeGoxVVwiLFxuXHRcImhvbWVPcHRpb25IaWdobGlnaHRcIjogXCJuZXdQb3N0UGFnZV9ob21lT3B0aW9uSGlnaGxpZ2h0X19pYWtGX1wiLFxuXHRcIlBQQ29udGVudFwiOiBcIm5ld1Bvc3RQYWdlX1BQQ29udGVudF9fMXRfTVJcIixcblx0XCJob21lT3B0aW9uXCI6IFwibmV3UG9zdFBhZ2VfaG9tZU9wdGlvbl9fOU5meWtcIixcblx0XCJob21lT3B0aW9uSWNvblwiOiBcIm5ld1Bvc3RQYWdlX2hvbWVPcHRpb25JY29uX18zTkd3Y1wiLFxuXHRcImhvbWVPcHRpb25UZXh0XCI6IFwibmV3UG9zdFBhZ2VfaG9tZU9wdGlvblRleHRfXzNRNmVmXCIsXG5cdFwiUFBDVGl0bGVcIjogXCJuZXdQb3N0UGFnZV9QUENUaXRsZV9fMkhTUVRcIixcblx0XCJQUENTdWJIZWFkZXJcIjogXCJuZXdQb3N0UGFnZV9QUENTdWJIZWFkZXJfXzN0ZFpxXCIsXG5cdFwiUFBDVXNlckNvbnRhaW5lclwiOiBcIm5ld1Bvc3RQYWdlX1BQQ1VzZXJDb250YWluZXJfXzFleHNIXCIsXG5cdFwiUFBDVXNlckljb25cIjogXCJuZXdQb3N0UGFnZV9QUENVc2VySWNvbl9fYl93UnRcIixcblx0XCJQUENUaW1lXCI6IFwibmV3UG9zdFBhZ2VfUFBDVGltZV9fMXhsYkJcIixcblx0XCJQUENEZXNjcmlwdGlvblwiOiBcIm5ld1Bvc3RQYWdlX1BQQ0Rlc2NyaXB0aW9uX18yYzdmdFwiLFxuXHRcIlBQQ1BpY3R1cmVzQ29udGFpbmVyXCI6IFwibmV3UG9zdFBhZ2VfUFBDUGljdHVyZXNDb250YWluZXJfXzNaWVVhXCIsXG5cdFwiUFBDUGljdHVyZXNIaWdobGlnaHRcIjogXCJuZXdQb3N0UGFnZV9QUENQaWN0dXJlc0hpZ2hsaWdodF9fM3RMcWVcIixcblx0XCJQUENBbGxQaWN0dXJlc0NvbnRhaW5lclwiOiBcIm5ld1Bvc3RQYWdlX1BQQ0FsbFBpY3R1cmVzQ29udGFpbmVyX18yYy1hQlwiLFxuXHRcIlBQQ1BpY3R1cmVzSW5zdGFuY2VcIjogXCJuZXdQb3N0UGFnZV9QUENQaWN0dXJlc0luc3RhbmNlX19HVl9TWlwiLFxuXHRcIlBQQ0xpbmtzQ29udGFpbmVyXCI6IFwibmV3UG9zdFBhZ2VfUFBDTGlua3NDb250YWluZXJfXzJaQTlCXCIsXG5cdFwiUFBDUmVmZXJlbmNlTGlua1wiOiBcIm5ld1Bvc3RQYWdlX1BQQ1JlZmVyZW5jZUxpbmtfXzJUMVVwXCIsXG5cdFwiUFBDUkxJY29uXCI6IFwibmV3UG9zdFBhZ2VfUFBDUkxJY29uX19aNm9TSlwiLFxuXHRcIlBQU2lkZUJhckNvbnRhaW5lclwiOiBcIm5ld1Bvc3RQYWdlX1BQU2lkZUJhckNvbnRhaW5lcl9fMWNJdTJcIixcblx0XCJQUFNpZGVCYXJcIjogXCJuZXdQb3N0UGFnZV9QUFNpZGVCYXJfXzFSbGJkXCIsXG5cdFwiUFBDUWFuZGFDb250YWluZXJcIjogXCJuZXdQb3N0UGFnZV9QUENRYW5kYUNvbnRhaW5lcl9fWDR5Q3RcIixcblx0XCJQUENRYW5kYUhlYWRlclwiOiBcIm5ld1Bvc3RQYWdlX1BQQ1FhbmRhSGVhZGVyX18yb21sNFwiLFxuXHRcIlBDQ1FhbmRhQ29udGVudFwiOiBcIm5ld1Bvc3RQYWdlX1BDQ1FhbmRhQ29udGVudF9fM3dIaHNcIixcblx0XCJQQ0NBbnN3ZXJUb2dnbGVcIjogXCJuZXdQb3N0UGFnZV9QQ0NBbnN3ZXJUb2dnbGVfXzF0YktmXCIsXG5cdFwiUENDUWFuZGFBbnN3ZXJDb250YWluZXJcIjogXCJuZXdQb3N0UGFnZV9QQ0NRYW5kYUFuc3dlckNvbnRhaW5lcl9fM05qRWpcIixcblx0XCJQUFNGb2xsb3dIZWFkZXJcIjogXCJuZXdQb3N0UGFnZV9QUFNGb2xsb3dIZWFkZXJfX2w3aUVUXCIsXG5cdFwiUFBTRGl2aXNpb25cIjogXCJuZXdQb3N0UGFnZV9QUFNEaXZpc2lvbl9fMk1EbXpcIixcblx0XCJQUFNTa2lsbFwiOiBcIm5ld1Bvc3RQYWdlX1BQU1NraWxsX19jNGtzZFwiLFxuXHRcIlBQU1NraWxsTmFtZVwiOiBcIm5ld1Bvc3RQYWdlX1BQU1NraWxsTmFtZV9fMmZVWERcIixcblx0XCJQUFNTa2lsbFNlY29uZGFyeVwiOiBcIm5ld1Bvc3RQYWdlX1BQU1NraWxsU2Vjb25kYXJ5X19RZXZCRlwiLFxuXHRcIlBQU1NraWxsSW5mb1wiOiBcIm5ld1Bvc3RQYWdlX1BQU1NraWxsSW5mb19fMVpVN3dcIixcblx0XCJQUFNCdXR0b25FeGl0XCI6IFwibmV3UG9zdFBhZ2VfUFBTQnV0dG9uRXhpdF9fM3hIWV9cIixcblx0XCJQUFNCdXR0b25cIjogXCJuZXdQb3N0UGFnZV9QUFNCdXR0b25fXzEwelREXCIsXG5cdFwiUFBTQnV0dG9uRGlzYWJsZWRcIjogXCJuZXdQb3N0UGFnZV9QUFNCdXR0b25EaXNhYmxlZF9fMWl6Sk9cIixcblx0XCJQUFNUaXRsZVwiOiBcIm5ld1Bvc3RQYWdlX1BQU1RpdGxlX181M18zLVwiLFxuXHRcIlBQU1NraWxsRm9ybVwiOiBcIm5ld1Bvc3RQYWdlX1BQU1NraWxsRm9ybV9fMXVBdmtcIixcblx0XCJQUFNJbnB1dENvbnRhaW5lclwiOiBcIm5ld1Bvc3RQYWdlX1BQU0lucHV0Q29udGFpbmVyX18zcGFrN1wiLFxuXHRcIlBQU0lucHV0XCI6IFwibmV3UG9zdFBhZ2VfUFBTSW5wdXRfXzJnWnNyXCIsXG5cdFwiUFBDU3VibWl0Q29udGFpbmVyXCI6IFwibmV3UG9zdFBhZ2VfUFBDU3VibWl0Q29udGFpbmVyX180dVcxRFwiLFxuXHRcIlBQQ1RlYW1Db250YWluZXJcIjogXCJuZXdQb3N0UGFnZV9QUENUZWFtQ29udGFpbmVyX18zR2JjR1wiLFxuXHRcIlBQQ1RlYW1NZW1iZXJcIjogXCJuZXdQb3N0UGFnZV9QUENUZWFtTWVtYmVyX18ydFpzRVwiLFxuXHRcInFhbmRhVGV4dFwiOiBcIm5ld1Bvc3RQYWdlX3FhbmRhVGV4dF9fMXpUQ2hcIixcblx0XCJ0ZWFtSW5mb1wiOiBcIm5ld1Bvc3RQYWdlX3RlYW1JbmZvX18zT0s0Y1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9zdFdyYXBwZXJcIjogXCJwb3N0X3Bvc3RXcmFwcGVyX19xTnl5UVwiLFxuXHRcInBvc3RIb3ZlclwiOiBcInBvc3RfcG9zdEhvdmVyX19VaWpuUFwiLFxuXHRcInBvc3RDb2xvckluZGljYXRvclwiOiBcInBvc3RfcG9zdENvbG9ySW5kaWNhdG9yX18zcjZ0aFwiLFxuXHRcInBvc3RDb250YWluZXJcIjogXCJwb3N0X3Bvc3RDb250YWluZXJfXzJXNl8wXCIsXG5cdFwicG9zdEhlYWRlcldyYXBwZXJcIjogXCJwb3N0X3Bvc3RIZWFkZXJXcmFwcGVyX18xbEdMLVwiLFxuXHRcInBvc3RIZWFkZXJTdHJldGNoXCI6IFwicG9zdF9wb3N0SGVhZGVyU3RyZXRjaF9fMW0weUFcIixcblx0XCJwb3N0SGVhZGVyXCI6IFwicG9zdF9wb3N0SGVhZGVyX18zV3JhRlwiLFxuXHRcIlBIVXNlclN0cmV0Y2hcIjogXCJwb3N0X1BIVXNlclN0cmV0Y2hfXzFpdVc1XCIsXG5cdFwiUEhVc2VyXCI6IFwicG9zdF9QSFVzZXJfX0ZMN09jXCIsXG5cdFwiUEhVSWNvblwiOiBcInBvc3RfUEhVSWNvbl9fMVdDZzdcIixcblx0XCJQSERhdGVcIjogXCJwb3N0X1BIRGF0ZV9fMnRRbl9cIixcblx0XCJwb3N0VGl0bGVcIjogXCJwb3N0X3Bvc3RUaXRsZV9fMTJSQ0VcIixcblx0XCJwb3N0RGVzY3JpcHRpb25cIjogXCJwb3N0X3Bvc3REZXNjcmlwdGlvbl9fM1ZDWjFcIixcblx0XCJwb3N0U2tpbGxzQ29udGFpbmVyXCI6IFwicG9zdF9wb3N0U2tpbGxzQ29udGFpbmVyX18zM2p0dFwiLFxuXHRcInBvc3RTa2lsbEluc0NvbnRhaW5lclwiOiBcInBvc3RfcG9zdFNraWxsSW5zQ29udGFpbmVyX18zS2lCRFwiLFxuXHRcIlBTSU5hbWVcIjogXCJwb3N0X1BTSU5hbWVfX25PQzU4XCIsXG5cdFwiUFNJU3RhdHNcIjogXCJwb3N0X1BTSVN0YXRzX18zNkdESVwiLFxuXHRcInBvc3RVdGlsaXRpZXNDb250YWluZXJcIjogXCJwb3N0X3Bvc3RVdGlsaXRpZXNDb250YWluZXJfXzExY2lfXCIsXG5cdFwiUFVJY29uQ29udGFpbmVyXCI6IFwicG9zdF9QVUljb25Db250YWluZXJfXzFSb09WXCIsXG5cdFwiUFVJY29uXCI6IFwicG9zdF9QVUljb25fXzJEWGYzXCIsXG5cdFwicG9zdFdyYXBwZXJTbVwiOiBcInBvc3RfcG9zdFdyYXBwZXJTbV9fMnlmVDdcIixcblx0XCJwb3N0U21SZW1vdmVcIjogXCJwb3N0X3Bvc3RTbVJlbW92ZV9fMVZTQnBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVzZXJXcmFwcGVyXCI6IFwidXNlcl91c2VyV3JhcHBlcl9fM0szemhcIixcblx0XCJ1c2VyQ29udGFpbmVyXCI6IFwidXNlcl91c2VyQ29udGFpbmVyX18xckxuSVwiLFxuXHRcInVzZXJPcHRpb25zU3BsaXR0ZXJcIjogXCJ1c2VyX3VzZXJPcHRpb25zU3BsaXR0ZXJfXzJycVpaXCIsXG5cdFwidXNlckljb25Db250YWluZXJcIjogXCJ1c2VyX3VzZXJJY29uQ29udGFpbmVyX18yMzRpalwiLFxuXHRcIlNVSFwiOiBcInVzZXJfU1VIX18xTXJlMFwiLFxuXHRcIlVJQ0hcIjogXCJ1c2VyX1VJQ0hfXzNqUkl4XCIsXG5cdFwiTEdEVXNlckNvbnRhaW5lclwiOiBcInVzZXJfTEdEVXNlckNvbnRhaW5lcl9fM3djYWxcIixcblx0XCJ1c2VyQmFubmVyXCI6IFwidXNlcl91c2VyQmFubmVyX18xQXh3bFwiLFxuXHRcInVzZXJVc2VybmFtZUNvbnRhaW5lclwiOiBcInVzZXJfdXNlclVzZXJuYW1lQ29udGFpbmVyX18xaEE4SFwiLFxuXHRcInVzZXJVc2VybmFtZVwiOiBcInVzZXJfdXNlclVzZXJuYW1lX185cHJpblwiLFxuXHRcInVzZXJVc2VybmFtZUljb25cIjogXCJ1c2VyX3VzZXJVc2VybmFtZUljb25fXzNPOHF0XCIsXG5cdFwiUE5Db250YWluZXJcIjogXCJ1c2VyX1BOQ29udGFpbmVyX18yMkx5VFwiLFxuXHRcIlBOQnViYmxlXCI6IFwidXNlcl9QTkJ1YmJsZV9fSlZVT0JcIixcblx0XCJ1c2VyVXRpbGl0eU9wdGlvblwiOiBcInVzZXJfdXNlclV0aWxpdHlPcHRpb25fXzFWdWdCXCIsXG5cdFwiVVVPU2VsZWN0ZWRcIjogXCJ1c2VyX1VVT1NlbGVjdGVkX18zdnZRa1wiLFxuXHRcIlVVQWRkUG9zdFwiOiBcInVzZXJfVVVBZGRQb3N0X18yM0F0N1wiLFxuXHRcIlVVQVBJY29uXCI6IFwidXNlcl9VVUFQSWNvbl9fM19TOGhcIixcblx0XCJVVUFQVGV4dFwiOiBcInVzZXJfVVVBUFRleHRfXzFiM0YyXCIsXG5cdFwiVVVJY29uXCI6IFwidXNlcl9VVUljb25fX3gxSUJyXCIsXG5cdFwiVVVMb2dvdXRcIjogXCJ1c2VyX1VVTG9nb3V0X18yX0RiSFwiLFxuXHRcIlVVTG9nb3V0SWNvblwiOiBcInVzZXJfVVVMb2dvdXRJY29uX18yR1BDRVwiLFxuXHRcInVzZXJOb3RpZmljYXRpb25CdWJibGVcIjogXCJ1c2VyX3VzZXJOb3RpZmljYXRpb25CdWJibGVfXzNoMU5XXCIsXG5cdFwiVVVVdGlsaXRpZXNTcGxpdHRlclwiOiBcInVzZXJfVVVVdGlsaXRpZXNTcGxpdHRlcl9fM1pLQlBcIixcblx0XCJVVUNvbnRlbnRDb250YWluZXJcIjogXCJ1c2VyX1VVQ29udGVudENvbnRhaW5lcl9fMUdLQl9cIixcblx0XCJOTFVzZXJDb250YWluZXJcIjogXCJ1c2VyX05MVXNlckNvbnRhaW5lcl9fM1o1THdcIixcblx0XCJ1c2VyT3B0aW9uQ29udGFpbmVyXCI6IFwidXNlcl91c2VyT3B0aW9uQ29udGFpbmVyX18zMzhSbVwiLFxuXHRcInVzZXJPcHRpb25zXCI6IFwidXNlcl91c2VyT3B0aW9uc19fa3Rlc2dcIixcblx0XCJ1c2VySWNvblwiOiBcInVzZXJfdXNlckljb25fXzIwdDU1XCIsXG5cdFwidXNlckZvcm1Db250YWluZXJcIjogXCJ1c2VyX3VzZXJGb3JtQ29udGFpbmVyX19BaEpsdVwiLFxuXHRcInVzZXJGb3JtXCI6IFwidXNlcl91c2VyRm9ybV9fcnhDZFJcIixcblx0XCJVRkxhYmVsXCI6IFwidXNlcl9VRkxhYmVsX18ydF8xdVwiLFxuXHRcIlVGSW5wdXRcIjogXCJ1c2VyX1VGSW5wdXRfXzN3T1U2XCIsXG5cdFwiVUZTdWJtaXRcIjogXCJ1c2VyX1VGU3VibWl0X190U3ZMZFwiLFxuXHRcIm5vdGlmaWNhdGlvbkNvbnRhaW5lclwiOiBcInVzZXJfbm90aWZpY2F0aW9uQ29udGFpbmVyX18yeHlNbVwiLFxuXHRcIm5vdGlmaWNhdGlvbkhlYWRlclwiOiBcInVzZXJfbm90aWZpY2F0aW9uSGVhZGVyX18xcThOLVwiLFxuXHRcIk5Vc2VyQ29udGFpbmVyXCI6IFwidXNlcl9OVXNlckNvbnRhaW5lcl9fM3dGci1cIixcblx0XCJOVXNlckljb25cIjogXCJ1c2VyX05Vc2VySWNvbl9fWkVOM3RcIixcblx0XCJOVXNlclwiOiBcInVzZXJfTlVzZXJfXzM5Mk5VXCIsXG5cdFwiTlVzZXJMYWJlbFwiOiBcInVzZXJfTlVzZXJMYWJlbF9fM2hhbWZcIixcblx0XCJOU2tpbGxDb250cmlidXRpb25zXCI6IFwidXNlcl9OU2tpbGxDb250cmlidXRpb25zX19oaFlELVwiLFxuXHRcIk5Qcm9wb3NlZEhlbHBcIjogXCJ1c2VyX05Qcm9wb3NlZEhlbHBfXzNoRjZRXCIsXG5cdFwiTlNraWxsSW5zXCI6IFwidXNlcl9OU2tpbGxJbnNfXzJhOVNVXCIsXG5cdFwiTlNraWxsUHJvcFwiOiBcInVzZXJfTlNraWxsUHJvcF9fMmFSUjFcIixcblx0XCJub3RpZmljYXRpb25DaG9pY2VcIjogXCJ1c2VyX25vdGlmaWNhdGlvbkNob2ljZV9fbHpkVlhcIixcblx0XCJub3RpZmljYXRpb25PcHRpb25cIjogXCJ1c2VyX25vdGlmaWNhdGlvbk9wdGlvbl9fM3c3WEhcIixcblx0XCJub3RpZmljYXRpb25FbWFpbFwiOiBcInVzZXJfbm90aWZpY2F0aW9uRW1haWxfX2dyTF9ZXCIsXG5cdFwiTk1lc3NhZ2VcIjogXCJ1c2VyX05NZXNzYWdlX18yTjI5Y1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXNlclV0aWxJbmZvXCI6IFwidXNlclV0aWxpdGllc191c2VyVXRpbEluZm9fXzEtVzFiXCIsXG5cdFwic2ltcGxlUG9zdEJhbm5lclwiOiBcInVzZXJVdGlsaXRpZXNfc2ltcGxlUG9zdEJhbm5lcl9fMzU2bGVcIixcblx0XCJ1c2VyVXRpbE5vdGlmXCI6IFwidXNlclV0aWxpdGllc191c2VyVXRpbE5vdGlmX194UjI1VVwiLFxuXHRcIm5vdGlmaWNhdGlvbkNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uQ29udGFpbmVyX181c251V1wiLFxuXHRcIm5vdGlmQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZkNvbnRhaW5lcl9fMkRnZWVcIixcblx0XCJub3RpZlNlbmRlclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZTZW5kZXJfXzJlUjJHXCIsXG5cdFwibm90aWZNZXNzYWdlXCI6IFwidXNlclV0aWxpdGllc19ub3RpZk1lc3NhZ2VfXzFlel9YXCIsXG5cdFwibm90aWZBY2NlcHRlZFwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZBY2NlcHRlZF9fMjhsOWVcIixcblx0XCJub3RpZkRlY2xpbmVkXCI6IFwidXNlclV0aWxpdGllc19ub3RpZkRlY2xpbmVkX18tZ2t3R1wiLFxuXHRcIm5vdGlmaWNhdGlvbk9wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uT3B0aW9uX18zbnJhSlwiLFxuXHRcInN0YW5kYXJkSG92ZXJcIjogXCJ1c2VyVXRpbGl0aWVzX3N0YW5kYXJkSG92ZXJfXzFjbUJrXCIsXG5cdFwiTkFuc3dlcklucHV0XCI6IFwidXNlclV0aWxpdGllc19OQW5zd2VySW5wdXRfXzJobmZUXCIsXG5cdFwiZGVjaWRlXCI6IFwidXNlclV0aWxpdGllc19kZWNpZGVfX1ZJREdhXCIsXG5cdFwib3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19vcHRpb25fX0FTTC1LXCIsXG5cdFwiZW1haWxcIjogXCJ1c2VyVXRpbGl0aWVzX2VtYWlsX18ydS12ZVwiLFxuXHRcInNraWxsbFwiOiBcInVzZXJVdGlsaXRpZXNfc2tpbGxsX18xSUx4RFwiLFxuXHRcIm5vdGlmRmlsdGVyQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZkZpbHRlckNvbnRhaW5lcl9fMVVyeTVcIixcblx0XCJORkNyZWF0b3JDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX05GQ3JlYXRvckNvbnRhaW5lcl9fMmM0UzZcIixcblx0XCJtZXNzYWdlc09wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfbWVzc2FnZXNPcHRpb25fX2VSazVRXCIsXG5cdFwiTkZMYWJlbFwiOiBcInVzZXJVdGlsaXRpZXNfTkZMYWJlbF9fMzNWSUVcIixcblx0XCJORk9wdGlvbkNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfTkZPcHRpb25Db250YWluZXJfXzI5NzZLXCIsXG5cdFwiTkZPcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX05GT3B0aW9uX18ybF83Q1wiLFxuXHRcIk5GU3BsaXR0ZXJcIjogXCJ1c2VyVXRpbGl0aWVzX05GU3BsaXR0ZXJfXzFVa0FvXCIsXG5cdFwiTkZERE9wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfTkZERE9wdGlvbl9fM1hIV0pcIixcblx0XCJub3RpZmljYXRpb25DTENvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uQ0xDb250YWluZXJfX2xVU3ZBXCIsXG5cdFwibm90aWZpY2F0aW9uU3VjZXNzSWNvblwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uU3VjZXNzSWNvbl9fMWN2cXJcIixcblx0XCJub3RpZmljYXRpb25DbFwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZpY2F0aW9uQ2xfXzItXzNOXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9