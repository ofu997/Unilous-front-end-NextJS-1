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
/* harmony import */ var _navBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navBar/NavBar */ "./components/navBar/NavBar.js");
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/schemas/queries */ "./src/schemas/queries.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











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
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_navBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    query: query,
    onQueryChange: onQueryChange,
    noUser: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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

/***/ "./components/navBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/navBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserContainer */ "./components/navBar/UserContainer.js");
/* harmony import */ var _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/navBar.module.css */ "./styles/navBar.module.css");
/* harmony import */ var _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _text_field_SkillSugg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text-field/SkillSugg */ "./components/text-field/SkillSugg.js");
/* harmony import */ var _user_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/utilities/UserNotifList */ "./components/user/utilities/UserNotifList.js");
/* harmony import */ var _user_utilities_UserSP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/utilities/UserSP */ "./components/user/utilities/UserSP.js");
/* harmony import */ var _user_form_SignIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/form/SignIn */ "./components/user/form/SignIn.js");
/* harmony import */ var _user_form_Register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user/form/Register */ "./components/user/form/Register.js");
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\navBar\\NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const NavBar = props => {
  const {
    0: utilityShown,
    1: setUtilityShown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: menuItemShown,
    1: setMenuItemShown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const changeUtility = name => {
    setMenuItemShown(null);
    if (name === utilityShown) setUtilityShown(null);else setUtilityShown(name);
  };

  const changeMenuItem = item => {
    if (item === menuItemShown) setMenuItemShown(null);else setMenuItemShown(item);
  };

  const linkToPush = props.query ? `/results/${encodeURIComponent(props.query)}` : '/results/all';

  const enterQuery = () => {
    next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(linkToPush);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      enterQuery();
    }
  };

  const onSuggestionClicked = skill => {
    const splitQuery = props.query.split(' ');
    const newQuery = splitQuery.length === 1 ? `${skill} ` : `${splitQuery.slice(0, -1).join(' ')} ${skill} `;
    props.onQueryChange({
      target: {
        value: newQuery
      }
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    props.clearToken();
  };

  const menuStyle = menuItemShown ? {
    borderBottomColor: '#282828'
  } : null;
  const alertBarStyle = props.alertNotif.color ? {
    backgroundColor: props.alertNotif.color,
    color: props.alertNotif.textColor
  } : {
    display: 'none',
    backgroundColor: props.alertNotif.color,
    color: props.alertNotif.textColor
  };
  console.log(props.noUser);

  if (props.noUser) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navContainer} HWM`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/logo/logoB.svg",
      alt: "icon",
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarIcon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    }))), __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchBar,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/results/[searchQuery]",
      as: linkToPush,
      onClick: () => enterQuery(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: `neutralize-link ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.enterSearch} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchHover}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/svg/searchW.svg",
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchIcon,
      alt: "search",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 102
      }
    }))), __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchHr,
      style: {
        backgroundColor: 'white'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }), __jsx("input", {
      value: props.query,
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchInput,
      type: "text",
      onChange: e => props.onQueryChange(e),
      onKeyPress: e => handleKeyPress(e),
      placeholder: "search or enter nothing for all results",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.SBSeparator,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }), __jsx(_text_field_SkillSugg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      query: props.query,
      onSuggestionClicked: onSuggestionClicked,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alertBarContainer,
      style: alertBarStyle,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.message,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }
    }, props.alertNotif.message), __jsx("h2", {
      onClick: () => props.resetAlert(),
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      }
    }, "x"))), __jsx("div", {
      className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navContainerM} SWM`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarContainerM,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBBrand} neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/logo/logoB.svg",
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBLogo,
      alt: "logo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      }
    }), __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 33
      }
    }, "Unilous"))), __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBPrimaryUtilities,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: "/svg/searchSB.svg",
      onClick: () => changeUtility('search'),
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUSearch,
      alt: "search",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 29
      }
    }), __jsx("div", {
      onClick: () => changeUtility('menu'),
      className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUHamburgerContainer} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNContainer}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/hamburger.svg",
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUHamburger,
      alt: "menu",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 33
      }
    })))), __jsx("div", {
      onClick: () => props.resetAlert(),
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alertBarContainer,
      style: alertBarStyle,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.message,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 25
      }
    }, props.alertNotif.message), __jsx("h2", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 25
      }
    }, "x"))));
  }

  const pendingNotifStats = props.currentUser && props.currentUser.pendingNotifications > 0 ? [_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNBubble, props.currentUser.pendingNotifications] : [null, null];

  const ShowInSubNav = () => {
    const moreItemButton = menuItemShown === 'more' ? __jsx("img", {
      src: "/svg/moreW.svg",
      onClick: () => changeMenuItem('more'),
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItemSelected,
      alt: "more",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }) : __jsx("img", {
      src: "/svg/moreSB.svg",
      onClick: () => changeMenuItem('more'),
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
      alt: "more",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    });

    if (utilityShown === 'menu') {
      if (props.token) {
        // const allItems = [
        //     {name: 'notifications', iconB: bellIconB, iconW: bellIconW},
        //     {name: 'following', iconB: heartIconB, iconW: heartIconW},
        // ]
        const notifItemButton = menuItemShown === 'notifications' ? __jsx("div", {
          onClick: () => changeMenuItem('notifications'),
          className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItemSelected} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNContainer}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: bellIconW,
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.notificationItem,
          alt: 'notifications',
          key: `UO${'notifications'}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: pendingNotifStats[0],
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }
        }, pendingNotifStats[1])) : __jsx("div", {
          onClick: () => changeMenuItem('notifications'),
          className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNContainer}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: "/svg/bellB.svg",
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.notificationItem,
          alt: 'notifications',
          key: `UO${'notifications'}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: pendingNotifStats[0],
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }
        }, pendingNotifStats[1]));
        const followingItemButton = menuItemShown === 'following' ? __jsx("img", {
          src: "/svg/heartW.svg",
          onClick: () => changeMenuItem('following'),
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItemSelected,
          alt: 'following',
          key: `UO${'following'}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 21
          }
        }) : __jsx("img", {
          src: "/svg/heartB.svg",
          onClick: () => changeMenuItem('following'),
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
          alt: 'following',
          key: `UO${'following'}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }
        });
        return __jsx("div", {
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarSubContainerM,
          style: menuStyle,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 21
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/post-form/",
          onClick: () => changeMenuItem(null),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
          style: {
            padding: 0,
            margin: 0
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/plusB.svg",
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
          alt: "add project",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 88
          }
        }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "user/[username]",
          as: `/user/${props.currentUser.username}`,
          onClick: () => changeMenuItem(null),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }
        }, __jsx("a", {
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
          style: {
            padding: 0,
            margin: 0
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: userIcon,
          className: "menu-item",
          alt: "user page",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 88
          }
        }))), notifItemButton, followingItemButton, __jsx("img", {
          src: exitIcon,
          onClick: () => handleLogout(),
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
          alt: "log out",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }
        }), moreItemButton);
      }

      const allItems = ['sign in', 'register'];
      const modalItemButtons = allItems.map(i => menuItemShown === i ? __jsx("h3", {
        onClick: () => changeMenuItem(i),
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItemSelected,
        key: `MI${i}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }
      }, i) : __jsx("h3", {
        onClick: () => changeMenuItem(i),
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
        key: `MI${i}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, i));
      return __jsx("div", {
        className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarSubContainerM} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.loginBar}`,
        style: menuStyle,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, modalItemButtons, moreItemButton);
    }

    return null;
  };

  const MenuItemToShow = () => {
    if (menuItemShown === 'sign in') {
      return __jsx("div", {
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuModalContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }
      }, __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        noBG: true,
        changeMenuItem: changeMenuItem,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }));
    }

    if (menuItemShown === 'register') {
      return __jsx("div", {
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuModalContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }
      }, __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_9__["default"], {
        noBG: true,
        changeMenuItem: changeMenuItem,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }
      }));
    }

    if (menuItemShown === 'notifications') {
      return __jsx("div", {
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuModalContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      }, "notifications"), __jsx(_user_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }
      }));
    }

    if (menuItemShown === 'following') {
      return __jsx("div", {
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuModalContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }
      }, "saved posts"), __jsx(_user_utilities_UserSP__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }
      }));
    }

    if (menuItemShown === 'more') {
      return __jsx("div", {
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuModalContainer,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/contact/",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "neutralize-link",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 25
        }
      }, __jsx("h1", {
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.moreLink,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 56
        }
      }, "contact us"))));
    }

    return null;
  };

  const showWhenSB = utilityShown === 'search' ? {
    display: 'block'
  } : {
    display: 'none'
  };
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navContainer} HWM`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoB.svg",
    alt: "icon",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/results/[searchQuery]",
    as: linkToPush,
    onClick: () => enterQuery(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: `neutralize-link ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.enterSearch} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchHover}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/svg/searchW.svg",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchIcon,
    alt: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 98
    }
  }))), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchHr,
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 25
    }
  }), __jsx("input", {
    value: props.query,
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchInput,
    type: "text",
    onChange: e => props.onQueryChange(e),
    onKeyPress: e => handleKeyPress(e),
    placeholder: "search or enter nothing for all results",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.SBSeparator,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 25
    }
  }), __jsx(_text_field_SkillSugg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    query: props.query,
    onSuggestionClicked: onSuggestionClicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 25
    }
  })), __jsx(_UserContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alertBarContainer,
    style: alertBarStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.message,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }, props.alertNotif.message), __jsx("h2", {
    onClick: () => props.resetAlert(),
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }, "x"))), __jsx("div", {
    className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navContainerM} SWM`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarContainerM,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBBrand} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoB.svg",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBLogo,
    alt: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 29
    }
  }), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 29
    }
  }, "Unilous"))), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBPrimaryUtilities,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/svg/searchSB.svg",
    onClick: () => changeUtility('search'),
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUSearch,
    alt: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  }), __jsx("div", {
    onClick: () => changeUtility('menu'),
    className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUHamburgerContainer} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNContainer}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/hamburger.svg",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUHamburger,
    alt: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: `${pendingNotifStats[0]} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNBubbleHamburger}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 29
    }
  }, pendingNotifStats[1])))), __jsx("div", {
    onClick: () => props.resetAlert(),
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alertBarContainer,
    style: alertBarStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.message,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 21
    }
  }, props.alertNotif.message), __jsx("h2", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  }, "x")), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarSubContainer,
    style: showWhenSB,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/results/[searchQuery]",
    as: linkToPush,
    onClick: () => enterQuery(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: `neutralize-link ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.enterSearch} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchHover}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/svg/searchW.svg",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchIcon,
    alt: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchHr,
    style: {
      backgroundColor: 'white',
      height: '0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }), __jsx("input", {
    value: props.query,
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchInput,
    type: "text",
    onChange: e => props.onQueryChange(e),
    onKeyPress: e => handleKeyPress(e),
    placeholder: "search or enter nothing for all results",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }), __jsx(_text_field_SkillSugg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    query: props.query,
    onSuggestionClicked: onSuggestionClicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }))), __jsx(ShowInSubNav, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }), __jsx(MenuItemToShow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  })));
}; // NavBar = withRouter(NavBar)


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token,
    alertNotif: state.alertNotif
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearToken: Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_10__["clearToken"], dispatch),
    resetAlert: Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])(_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_11__["resetAlert"], dispatch)
  };
};

_redux_reducers_token__WEBPACK_IMPORTED_MODULE_10__["clearToken"];
_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_11__["resetAlert"];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NavBar));

/***/ }),

/***/ "./components/navBar/UserContainer.js":
/*!********************************************!*\
  !*** ./components/navBar/UserContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/user/user.module.css */ "./styles/user/user.module.css");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_structure_NotLogged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/structure/NotLogged */ "./components/user/structure/NotLogged.js");
/* harmony import */ var _user_structure_Logged__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/structure/Logged */ "./components/user/structure/Logged.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\navBar\\UserContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const UserContainer = props => {
  const logStateToShow = props.token ? __jsx(_user_structure_Logged__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 42
    }
  }) : __jsx(_user_structure_NotLogged__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 55
    }
  });
  return __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, logStateToShow);
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(UserContainer));

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
/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/schemas/mutations */ "./src/schemas/mutations.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/functions/functions */ "./src/functions/functions.js");
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


  const [removeSPMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__["REMOVE_SAVED_POST"], {
    onError: handleError
  });
  const p = props.post;
  const user = props.post.user ? props.post.user.username : props.user;
  const pallette = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_7__["palletteGenerator"])(p.color).colorPallette; // const handleRemove = async () => {
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_7__["triggerAlert"])('danger', `unfollowed$: unfollowed post '${p.title}'`, props.setAlert, props.resetAlert);
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
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/functions/functions */ "./src/functions/functions.js");
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
    const stats = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_2__["websiteStats"])(l);
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

/***/ "./components/text-field/SkillSugg.js":
/*!********************************************!*\
  !*** ./components/text-field/SkillSugg.js ***!
  \********************************************/
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
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/schemas/queries */ "./src/schemas/queries.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\text-field\\SkillSugg.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SkillSugg = props => {
  const splitQuery = props.query.toLowerCase().split(' ');
  const lastWord = splitQuery.slice(-1) === '' ? splitQuery.slice(-2, -1)[0] : splitQuery.slice(-1)[0];
  const {
    0: skills,
    1: setSkills
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const skillSearchQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__["SKILL_SEARCH"], {
    variables: {
      filter: lastWord
    }
  });

  const skillConditions = (query, reducer) => {
    if (!query) return null;
    if (!query.skillSearch) return null;
    return query.skillSearch;
  };

  const skillsList = skillConditions(skillSearchQuery.data, skills);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (skillsList) {
      setSkills(skillsList);
    }
  }, [skillsList, skills]);

  const suggestionsToShow = () => {
    if (skills) {
      return skills.map(s => __jsx("div", {
        onClick: () => props.onSuggestionClicked(s.name),
        className: "search-suggestion",
        key: `SS${s.name}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, s.name));
    }

    return __jsx("div", {
      style: {
        gridColumn: '1/3'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        height: '5vh'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }), __jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }));
  };

  const suggestionsStyle = skills.length !== 0 && props.query !== '' && lastWord !== '' ? {
    display: 'block'
  } : {
    display: 'none'
  };
  return __jsx("div", {
    className: "search-suggestions-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "search-suggestions",
    style: suggestionsStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, suggestionsToShow()));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(SkillSugg));

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
/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/schemas/mutations */ "./src/schemas/mutations.js");
/* harmony import */ var _text_field_InputHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../text-field/InputHeader */ "./components/text-field/InputHeader.js");
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/functions/functions */ "./src/functions/functions.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ "./styles/user/user.module.css");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\form\\Register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Register = props => {
  const username = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('text');
  const password = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('password');
  const rePassword = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('password');
  const email = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('email');
  const referenceLink = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["useField"])('url');

  const onError = e => {
    let cleanedMessage = e.message;
    console.log(referenceLink.fields.value);
    console.log(e.message);
    if (cleanedMessage.includes('username')) cleanedMessage = `username$: ${username.fields.value} is already being used`;
    if (cleanedMessage.includes('referenceLink')) cleanedMessage = `reference link$: ${referenceLink.fields.value} is already being used`;
    if (cleanedMessage.includes('email')) cleanedMessage = `email$: ${email.fields.value} is already being used`;
    Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["triggerAlert"])('warning', cleanedMessage, props.setAlert, props.resetAlert);
  };

  const [registerMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["CREATE_USER"], {
    onError
  });

  const handleSumbit = async e => {
    e.preventDefault();

    if (password.fields.value !== rePassword.fields.value) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["triggerAlert"])('warning', 'password$: password and re-password did not match', props.setAlert, props.resetAlert);
      return null;
    }

    if (!username.fields.value.length || !password.fields.value.length || !rePassword.fields.value.length || !referenceLink.fields.value.length) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["triggerAlert"])('warning', 'all$: all fields must be filled', props.setAlert, props.resetAlert);
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

      username.reset();
      password.reset();
      rePassword.reset();
      email.reset();
      referenceLink.reset();
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["triggerAlert"])('success', 'registered$: account successfully created', props.setAlert, props.resetAlert);
      console.log('registered');
    }
  };

  const bgStyle = props.noBG ? {
    backgroundColor: '#282828'
  } : null;
  return __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.userFormContainer,
    style: bgStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.userForm,
    onSubmit: e => handleSumbit(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UFInput
  }, username.fields, {
    id: "SI-username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UFInput
  }, password.fields, {
    id: "SI-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UFInput
  }, rePassword.fields, {
    id: "SI-rePassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  })), __jsx(_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputFor: "SI-referenceLink",
    info: true,
    title: "portafolio link",
    color: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
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
      lineNumber: 81,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 65
    }
  }, "always view another users portafolio link before working with them")), __jsx("ul", {
    style: {
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "sites recommended: ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 48
    }
  }, "LinkedIn"), ", ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 75
    }
  }, "Indeed"), ", ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 100
    }
  }, "GitHub"), ", or ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 128
    }
  }, "Facebook")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, "to further ensure your portafolio link is trustworthy, link your Unilous accout from your portafolio link"))), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UFInput
  }, referenceLink.fields, {
    id: "SI-referenceLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.UFSubmit,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 63
    }
  }, "register"))));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  setAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__["setAlert"],
  resetAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__["resetAlert"]
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
/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/schemas/mutations */ "./src/schemas/mutations.js");
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/functions/functions */ "./src/functions/functions.js");
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var _text_field_InputHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../text-field/InputHeader */ "./components/text-field/InputHeader.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ "./styles/user/user.module.css");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\form\\SignIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const SignIn = props => {
  const username = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_4__["useField"])('text');
  const password = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_4__["useField"])('password');

  const onError = e => {
    let cleanedMessage = e.message;
    console.log(cleanedMessage);
    cleanedMessage = cleanedMessage.split(':');
    cleanedMessage = cleanedMessage.slice(1, cleanedMessage.length).join('$:');
    Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_4__["triggerAlert"])('warning', cleanedMessage, props.setAlert, props.resetAlert);
  };

  const [signInMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["LOGIN"], {
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
      username.reset();
      password.reset();
      localStorage.setItem('token', token);
      localStorage.setItem('username', username.fields.value);
      props.setToken(token);
      window.location.reload();
    }
  };

  const bgStyle = props.noBG ? {
    backgroundColor: '#282828'
  } : null;
  return __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userFormContainer,
    style: bgStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userForm,
    onSubmit: e => handleSumbit(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, username.fields, {
    id: "SI-username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, password.fields, {
    id: "SI-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFSubmit,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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

/***/ "./components/user/structure/Logged.js":
/*!*********************************************!*\
  !*** ./components/user/structure/Logged.js ***!
  \*********************************************/
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
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/schemas/queries */ "./src/schemas/queries.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var _utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/UserNotifList */ "./components/user/utilities/UserNotifList.js");
/* harmony import */ var _utilities_UserSP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/UserSP */ "./components/user/utilities/UserSP.js");
/* harmony import */ var _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/user/userUtilities.module.css */ "./styles/user/userUtilities.module.css");
/* harmony import */ var _styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_user_userUtilities_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ "./styles/user/user.module.css");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\structure\\Logged.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const Logged = props => {
  const {
    0: showUtilities,
    1: setShowUtilities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: utilityShown,
    1: setUtilityShown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const currentUserUN = localStorage.getItem('username') ? localStorage.getItem('username') : 'fakeUser';
  const userQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__["FIND_USER"], {
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

  if (!props.currentUser) {
    return __jsx("div", {
      className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userContainer} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.LGDUserContainer}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userOptionsSplitter,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userIconContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userBanner,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }));
  }

  const logout = () => {
    localStorage.clear();
    props.clearToken();
  };

  const changeUtilityShown = changeTo => {
    if (changeTo === utilityShown) {
      setUtilityShown(null);
    } else {
      setUtilityShown(changeTo);
    }

    setShowUtilities(true);
  };

  const changeShowUtilities = changeTo => {
    if (!changeTo) {
      setShowUtilities(changeTo);
      setUtilityShown(null);
    } else {
      setShowUtilities(changeTo);
    }
  };

  const usernameIcon = props.currentUser.username.substr(0, 1).toUpperCase();
  const iconToShow = showUtilities ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/user/[username",
    as: `/user/${encodeURIComponent(props.currentUser.username)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userIconContainer} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UICH} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userUsernameIcon} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userIconHover}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, usernameIcon))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/user/[username]",
    as: `/user/${encodeURIComponent(props.currentUser.username)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "user-icon-container UICH",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/svg/userW.svg",
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userIcon} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userIconHover}`,
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  })));
  const basicStyles = {
    user: {
      className: '',
      icon: "/svg/userSB.svg"
    },
    notifications: {
      className: '',
      icon: "/svg/bellB.svg"
    },
    following: {
      className: '',
      icon: "/svg/heartB.svg"
    }
  };

  if (utilityShown === 'user') {
    basicStyles.user = {
      className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUOSelected,
      icon: "/svg/userW.svg"
    };
  }

  if (utilityShown === 'notifications') {
    basicStyles.notifications = {
      className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUOSelected,
      icon: "/svg/bellW.svg"
    };
  }

  if (utilityShown === 'following') {
    basicStyles.following = {
      className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUOSelected,
      icon: "/svg/heartW.svg"
    };
  }

  const pendingNotifStats = props.currentUser && props.currentUser.pendingNotifications > 0 ? [_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.PNBubble, props.currentUser.pendingNotifications] : [null, null];
  const showInBanner = showUtilities ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/postformpage/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUAddPost} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userUtilityOption} neutralize-link`,
    style: {
      gridColumn: '1/3'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/svg/plusB.svg",
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUAPIcon,
    alt: "add post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }), __jsx("h4", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUAPText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "add post"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/user/[username]",
    as: `/user/${props.currentUser.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userUtilityOption} ${basicStyles.user.className}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: basicStyles.user.icon,
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUIcon,
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 88
    }
  }))), __jsx("div", {
    onClick: () => changeUtilityShown('notifications'),
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userUtilityOption} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.PNContainer} ${basicStyles.notifications.className}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: basicStyles.notifications.icon,
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUIcon,
    alt: "notifications",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: pendingNotifStats[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, pendingNotifStats[1])), __jsx("div", {
    onClick: () => changeUtilityShown('following'),
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userUtilityOption} ${basicStyles.following.className}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: basicStyles.following.icon,
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUIcon,
    alt: "follow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  })), __jsx("div", {
    onClick: () => logout(),
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userUtilityOption} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UULogout}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/svg/exitB.svg",
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UULogoutIcon,
    alt: "log out",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }))) : __jsx("div", {
    onClick: () => changeShowUtilities(!showUtilities),
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userUsernameContainer} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.SUH}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "user-username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 118
    }
  }, props.currentUser.username));
  const showBubble = showUtilities ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }) : __jsx("div", {
    onClick: () => changeUtilityShown('notifications'),
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userNotificationBubble,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "4");
  const showUtilityContent = utilityShown ? {
    display: 'block'
  } : {
    display: 'none'
  };

  const utilityContent = () => {
    // if (utilityShown === 'user') {
    //     return <div><UserInfo /></div>
    // }
    if (utilityShown === 'notifications') {
      return __jsx(_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 20
        }
      });
    }

    if (utilityShown === 'following') {
      return __jsx(_utilities_UserSP__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 20
        }
      });
    }

    return null;
  };

  return __jsx("div", {
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userContainer} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.LGDUserContainer}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userOptionsSplitter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, iconToShow), __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userBanner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, showInBanner), showBubble, __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUUtilitiesSplitter,
    style: showUtilityContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UUContentContainer,
    style: showUtilityContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, utilityShown), utilityContent()));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearToken: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_5__["clearToken"], dispatch),
    setCurrentUser: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_4__["setCurrentUser"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Logged));

/***/ }),

/***/ "./components/user/structure/NotLogged.js":
/*!************************************************!*\
  !*** ./components/user/structure/NotLogged.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ "./styles/user/user.module.css");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/SignIn */ "./components/user/form/SignIn.js");
/* harmony import */ var _form_Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/Register */ "./components/user/form/Register.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\structure\\NotLogged.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import userIcon from '../../../static/svg/userW.svg'




const NotLogged = props => {
  const {
    0: userOption,
    1: setUserOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const optionStyle = userOption ? userOption === 'sign in' ? {
    signIn: {
      backgroundColor: '#484848',
      color: 'white'
    },
    register: null
  } : {
    signIn: null,
    register: {
      backgroundColor: '#484848',
      color: 'white'
    }
  } : {
    signIn: null,
    register: null
  };
  const formToShow = userOption ? userOption === 'sign in' ? __jsx(_form_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }) : __jsx(_form_Register__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 26
    }
  }) : null;

  const changeOption = changeTo => {
    if (userOption === changeTo) {
      setUserOption(null);
    } else {
      setUserOption(changeTo);
    }
  };

  return __jsx("div", {
    className: `${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userContainer} ${_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.NLUserContainer}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    onClick: () => changeOption('sign in'),
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOptionContainer,
    style: optionStyle.signIn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOptions,
    style: {
      paddingRight: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "sign in")), __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOptionsSplitter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userIconContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/svg/userW.svg",
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userIcon,
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }))), __jsx("div", {
    onClick: () => changeOption('register'),
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOptionContainer,
    style: optionStyle.register,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userOptions,
    style: {
      paddingLeft: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "register")), formToShow);
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(NotLogged));

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
/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/schemas/mutations */ "./src/schemas/mutations.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/functions/functions */ "./src/functions/functions.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\utilities\\Notif.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Notif = props => {
  const handleError = e => {
    console.log(e);
  };

  const [acceptNotif] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__["ACCEPT_NOTIFICATION"], {
    onError: handleError
  });
  const [declineNotif] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__["DECLINE_NOTIFICATION"], {
    onError: handleError
  });
  const [answerQuestion] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__["ANSWER_QUESTION"], {
    onError: handleError
  });
  const answer = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_8__["useField"])('text');

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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_8__["triggerAlert"])('success', `replied$: you have replied to ${props.notif.userFrom.username}'s question`, props.setAlert, props.resetAlert);
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_8__["triggerAlert"])('success', `accepted$: you have accepted ${props.notif.userFrom.username} to your team`, props.setAlert, props.resetAlert);
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_8__["triggerAlert"])('danger', `declined$: you have declined ${props.notif.userFrom.username}'s request to join`, props.setAlert, props.resetAlert);
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
        const GCLinkStats = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_8__["websiteStats"])(notif.post.contactLink);
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
        const GCLinkStats = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_8__["websiteStats"])(notif.post.contactLink);
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
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/schemas/queries */ "./src/schemas/queries.js");
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
  }), showNotifications, __jsx("div", {
    style: {
      height: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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

/***/ "./components/user/utilities/UserSP.js":
/*!*********************************************!*\
  !*** ./components/user/utilities/UserSP.js ***!
  \*********************************************/
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
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/schemas/queries */ "./src/schemas/queries.js");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _post_PostSmall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../post/PostSmall */ "./components/post/PostSmall.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Loading */ "./components/Loading.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\user\\utilities\\UserSP.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const UserSP = props => {
  const id_list = props.currentUser.savedPosts.map(p => p._id);
  const postListQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__["LIST_OF_POSTS"], {
    variables: {
      id_list
    }
  });

  const queryConditions = (query, reducer) => {
    if (!query) return null;
    if (!query.getListOfPosts) return null;
    if (!reducer) return query.getListOfPosts;
    if (reducer && reducer.length > 0 && !reducer[0].title) return query.getListOfPosts;
    return null;
  };

  const postList = queryConditions(postListQuery.data, props.currentUser.savedPosts);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (postList) {
      let newPostList = [];

      for (const ind in postList) {
        newPostList.push(_objectSpread(_objectSpread({}, postList[ind]), {}, {
          _id: id_list[ind]
        }));
      }

      props.setCurrentUserSP(newPostList);
    }
  }, [postList, props.setCurrentUserSP, props, id_list]);

  if (props.currentUser.savedPosts.length > 0 && !props.currentUser.savedPosts[0].user) {
    return __jsx("div", {
      style: {
        gridColumn: '1/3'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        height: '5vh'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }), __jsx(_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }));
  }

  const allSP = props.currentUser.savedPosts.map(p => __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: p,
    user: p.user.username,
    type: "saved",
    key: `SP${p.title}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 57
    }
  }));
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      height: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), allSP);
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setCurrentUserSP: _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_4__["setCurrentUserSP"]
})(UserSP));

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
      authorization: token ? `berySecret ${token}` : null
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
/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/schemas/mutations */ "./src/schemas/mutations.js");
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/schemas/queries */ "./src/schemas/queries.js");
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
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/functions/functions */ "./src/functions/functions.js");
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
  const question = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["useField"])('text');
  const message = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["useField"])('text');

  const onJoinError = e => {
    if (e.message.includes('is longer than the maximum allowed length')) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `message$: message of ${message.fields.value.length} characters exceeded the maximum of 800 characters.`, props.setAlert, props.resetAlert);
    }
  };

  const onQuestionError = e => {
    if (e.message.includes('is longer than the maximum allowed length')) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `question$: question of ${question.fields.value.length} characters exceeded the maximum of 800 characters.`, props.setAlert, props.resetAlert);
    }
  };

  const onFollowError = e => {
    console.log(e);
  };

  const [followMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["SAVE_POST"], {
    onError: onFollowError
  });
  const [makeNotification] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["MAKE_NOTIFICATION"], {
    onError: onJoinError
  });
  const [askQuestion] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["ASK_QUESTION"], {
    onError: onQuestionError
  });

  const handleFollow = async () => {
    if (!props.token) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', 'sign in$: must be signed in to perform this action', props.setAlert, props.resetAlert);
    }

    const result = await followMutation({
      variables: {
        user: props.currentUser._id,
        postId: currentPost._id
      }
    });

    if (result) {
      props.setCurrentUserSP(props.currentUser.savedPosts.concat(currentPost));
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('success', 'followed$: you are now following this post', props.setAlert, props.resetAlert);
    }
  };

  const qandaQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_4__["Q_AND_A_NOTIFS"], {
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `sign in$: must be signed in to perform this action`, props.setAlert, props.resetAlert);
      return null;
    }

    if (!message.fields.value.length) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `message$: message field is required`, props.setAlert, props.resetAlert);
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('success', `sent$: (check your answered notifications for the response) request has been sent to ${currentPost.user.username}`, props.setAlert, props.resetAlert);
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `sign in$: must be signed in to perform this action`, props.setAlert, props.resetAlert);
      return null;
    }

    if (!question.fields.value.length) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('warning', `question$: question field is required`, props.setAlert, props.resetAlert);
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["triggerAlert"])('success', `sent$: (check your answered notifications for the response) question has been sent to ${currentPost.user.username}`, props.setAlert, props.resetAlert);
    }
  };

  const pallette = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_15__["palletteGenerator"])(currentPost.color).colorPallette;
  const teamHTML = currentPost.team ? currentPost.team.map(un => __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/user/username",
    as: `/user/${un}`,
    className: `${_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCUserContainer} neutralize-link`,
    key: `PT${un}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, __jsx("a", {
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
      href: "/postformpage/",
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
    property: "og:title",
    content: "Unilous",
    key: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Share a project, build a team, make it awesome!",
    key: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: "Unilous",
    key: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Share a project, build a team, make it awesome!",
    key: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "navbar-height",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.postPageContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }
  }, __jsx(HomeContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  }), __jsx("h2", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }, currentPost.title), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCSubHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/user/[username]",
    as: `/user/${encodeURIComponent(currentPost.user.username)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: `${_styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCUserContainer} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 29
    }
  }, __jsx("img", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCUserIcon,
    src: "/svg/userB.svg",
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 33
    }
  }), __jsx("p", {
    className: "NM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 33
    }
  }, currentPost.user.username))), __jsx("p", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 25
    }
  }, cleanedTime)), __jsx(ModifiedDescription, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 21
    }
  }), __jsx(_components_postPage_PostImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
    imageLinks: currentPost.imageLinks,
    color: currentPost.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }), __jsx(_components_postPage_PostLinks__WEBPACK_IMPORTED_MODULE_9__["default"], {
    referenceLinks: currentPost.referenceLinks,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 21
    }
  }), __jsx("h3", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 21
    }
  }, "Q and A"), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCAllQandaContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 21
    }
  }, qandaList), __jsx("h3", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  }, "team"), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.teamInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, teamHTML.length, " team members"), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCTeamContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }, teamHTML)), __jsx(_components_text_field_FormContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    pallette: pallette,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSFollowHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
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
      lineNumber: 309,
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
      lineNumber: 310,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 156
    }
  })), __jsx("p", {
    className: "NM",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 29
    }
  }, "follow"))), skillsHTML, __jsx("div", {
    style: questionStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSDivision,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
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
      lineNumber: 318,
      columnNumber: 29
    }
  }, __jsx("ul", {
    style: {
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 37
    }
  }, "if answered it will be shown on post")))), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSInputContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 25
    }
  }, __jsx("textarea", _extends({
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPSInput,
    id: "PPS-question"
  }, question.fields, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: _styles_pages_newPostPage_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.PPCSubmitContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
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
      lineNumber: 328,
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
    query: _src_schemas_queries__WEBPACK_IMPORTED_MODULE_4__["FIND_POST"],
    variables: {
      title: 'Unilous'
    }
  }).catch(err => console.log(err));
  console.log(postQuery);
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

/***/ "./src/functions/functions.js":
/*!************************************!*\
  !*** ./src/functions/functions.js ***!
  \************************************/
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
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\src\\functions\\functions.js";
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
  if (url.split('/').length < 3) {
    return {
      icon: '/svg/websites/input.svg',
      color: '#484848',
      title: 'unknown url'
    };
  }

  const start = url.split('/')[2];

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
      icon: '/svg/website/trello.svg',
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
    icon: 'svg/websites/internet.svg',
    color: '#282828',
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

/***/ "./src/schemas/mutations.js":
/*!**********************************!*\
  !*** ./src/schemas/mutations.js ***!
  \**********************************/
/*! exports provided: CREATE_POST, DELETE_POST, MAKE_NOTIFICATION, ACCEPT_NOTIFICATION, DECLINE_NOTIFICATION, CREATE_USER, LOGIN, SAVE_POST, REMOVE_SAVED_POST, ASK_QUESTION, ANSWER_QUESTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST", function() { return CREATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return DELETE_POST; });
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
`;
const DELETE_POST = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation deletePost (
    $postId: ID!
  ) {
    deletePost (postId: $postId)
  }
`;
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

/***/ "./src/schemas/queries.js":
/*!********************************!*\
  !*** ./src/schemas/queries.js ***!
  \********************************/
/*! exports provided: LIST_OF_NOTIFICATIONS, SKILL_SEARCH, ME, LIST_OF_POSTS, FIND_POST, FIND_USER, ALL_USERS, ALL_POSTS, GET_POST_TITLES, SEARCH_POSTS, PENDING_NOTIFS, Q_AND_A_NOTIFS */
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

/***/ "./styles/navBar.module.css":
/*!**********************************!*\
  !*** ./styles/navBar.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"HWM": "navBar_HWM__Fu6VM",
	"SWM": "navBar_SWM__14HZ7",
	"alertBarContainer": "navBar_alertBarContainer__21XVJ",
	"message": "navBar_message__28Iqv",
	"close": "navBar_close__3R0jF",
	"navContainer": "navBar_navContainer__24AZa",
	"navBarContainer": "navBar_navBarContainer__n8eeV",
	"iconContainer": "navBar_iconContainer__3ADM-",
	"navBarIcon": "navBar_navBarIcon__1Oqbn",
	"searchBar": "navBar_searchBar__KiIY0",
	"SBSeparator": "navBar_SBSeparator__2n9oN",
	"enterSearch": "navBar_enterSearch__3MzMx",
	"searchHr": "navBar_searchHr__1z_O-",
	"searchIcon": "navBar_searchIcon__1EUBC",
	"searchingFor": "navBar_searchingFor__Q7mvs",
	"searchHover": "navBar_searchHover__vK-sr",
	"searchInput": "navBar_searchInput__1KoXL",
	"searchDescription": "navBar_searchDescription__3ue56",
	"searchSuggestion": "navBar_searchSuggestion__OSVq7",
	"filterDD": "navBar_filterDD__3ulFH",
	"filterOption": "navBar_filterOption__3eOE7",
	"navContainerM": "navBar_navContainerM__34S7O",
	"navBarContainerM": "navBar_navBarContainerM__2eMDp",
	"NBBrand": "navBar_NBBrand__2du9P",
	"NBLogo": "navBar_NBLogo__23YPa",
	"NBPrimaryUtilities": "navBar_NBPrimaryUtilities__rUDUN",
	"PUSearch": "navBar_PUSearch__11rrN",
	"PUHamburgerContainer": "navBar_PUHamburgerContainer__35X-C",
	"PUHamburger": "navBar_PUHamburger__1Zfvq",
	"navBarSubContainer": "navBar_navBarSubContainer__1MACK",
	"navBarSubContainerM": "navBar_navBarSubContainerM__32rrQ",
	"loginBar": "navBar_loginBar__3UZFn",
	"PNContainer": "navBar_PNContainer__2xrYg",
	"notificationItem": "navBar_notificationItem__2dgEN",
	"PNBubble": "navBar_PNBubble__2DoU2",
	"PNBubbleHamburger": "navBar_PNBubbleHamburger__1CV98",
	"menuItem": "navBar_menuItem__WSHmT",
	"menuItemSelected": "navBar_menuItemSelected__STkn6",
	"menuItemLogout": "navBar_menuItemLogout__2QT-f",
	"menuModalContainer": "navBar_menuModalContainer__38VUL",
	"moreLink": "navBar_moreLink__2b3fa"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2QmFyL1VzZXJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L1Bvc3RTbWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RQYWdlL1Bvc3RJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0UGFnZS9Qb3N0TGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0UGFnZS9Qb3N0UWFuZEEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LWZpZWxkL0Zvcm1Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LWZpZWxkL0lucHV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGV4dC1maWVsZC9Ta2lsbFN1Z2cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL2Zvcm0vUmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL2Zvcm0vU2lnbkluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9zdHJ1Y3R1cmUvTG9nZ2VkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci9zdHJ1Y3R1cmUvTm90TG9nZ2VkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci91dGlsaXRpZXMvTm90aWYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3V0aWxpdGllcy9Vc2VyTm90aWZMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlci91dGlsaXRpZXMvVXNlclNQLmpzIiwid2VicGFjazovLy8uL2xpYi9hcG9sbG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3Rva2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9xdWVyaWVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9pbnB1dEhlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9uYXZCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvcGFnZXMvbmV3UG9zdFBhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy91c2VyL3VzZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXNlci91c2VyVXRpbGl0aWVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwicXVlcnkiLCJzZXRRdWVyeSIsInVzZVN0YXRlIiwib25RdWVyeUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjaGlsZHJlbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidG9rZW4iLCJjdXJyZW50VXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2V0VG9rZW4iLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJzZXRDdXJyZW50VXNlciIsInNldFBlbmRpbmdOb3RpZmljYXRpb25zIiwic2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIiwiY29ubmVjdCIsIkxvYWRpbmciLCJzaXplIiwiY29sb3IiLCJOYXZCYXIiLCJ1dGlsaXR5U2hvd24iLCJzZXRVdGlsaXR5U2hvd24iLCJtZW51SXRlbVNob3duIiwic2V0TWVudUl0ZW1TaG93biIsImNoYW5nZVV0aWxpdHkiLCJuYW1lIiwiY2hhbmdlTWVudUl0ZW0iLCJpdGVtIiwibGlua1RvUHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImVudGVyUXVlcnkiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlS2V5UHJlc3MiLCJrZXkiLCJvblN1Z2dlc3Rpb25DbGlja2VkIiwic2tpbGwiLCJzcGxpdFF1ZXJ5Iiwic3BsaXQiLCJuZXdRdWVyeSIsImxlbmd0aCIsInNsaWNlIiwiam9pbiIsImhhbmRsZUxvZ291dCIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwiY2xlYXJUb2tlbiIsIm1lbnVTdHlsZSIsImJvcmRlckJvdHRvbUNvbG9yIiwiYWxlcnRCYXJTdHlsZSIsImFsZXJ0Tm90aWYiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm5vVXNlciIsIk5CIiwibmF2Q29udGFpbmVyIiwibmF2QmFyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsIm5hdkJhckljb24iLCJzZWFyY2hCYXIiLCJlbnRlclNlYXJjaCIsInNlYXJjaEhvdmVyIiwic2VhcmNoSWNvbiIsInNlYXJjaEhyIiwic2VhcmNoSW5wdXQiLCJlIiwiU0JTZXBhcmF0b3IiLCJhbGVydEJhckNvbnRhaW5lciIsIm1lc3NhZ2UiLCJyZXNldEFsZXJ0IiwiY2xvc2UiLCJuYXZDb250YWluZXJNIiwibmF2QmFyQ29udGFpbmVyTSIsIk5CQnJhbmQiLCJOQkxvZ28iLCJOQlByaW1hcnlVdGlsaXRpZXMiLCJQVVNlYXJjaCIsIlBVSGFtYnVyZ2VyQ29udGFpbmVyIiwiUE5Db250YWluZXIiLCJQVUhhbWJ1cmdlciIsInBlbmRpbmdOb3RpZlN0YXRzIiwicGVuZGluZ05vdGlmaWNhdGlvbnMiLCJQTkJ1YmJsZSIsIlNob3dJblN1Yk5hdiIsIm1vcmVJdGVtQnV0dG9uIiwibWVudUl0ZW1TZWxlY3RlZCIsIm1lbnVJdGVtIiwibm90aWZJdGVtQnV0dG9uIiwiYmVsbEljb25XIiwibm90aWZpY2F0aW9uSXRlbSIsImZvbGxvd2luZ0l0ZW1CdXR0b24iLCJuYXZCYXJTdWJDb250YWluZXJNIiwicGFkZGluZyIsIm1hcmdpbiIsInVzZXJuYW1lIiwidXNlckljb24iLCJleGl0SWNvbiIsImFsbEl0ZW1zIiwibW9kYWxJdGVtQnV0dG9ucyIsIm1hcCIsImkiLCJsb2dpbkJhciIsIk1lbnVJdGVtVG9TaG93IiwibWVudU1vZGFsQ29udGFpbmVyIiwibW9yZUxpbmsiLCJzaG93V2hlblNCIiwiUE5CdWJibGVIYW1idXJnZXIiLCJuYXZCYXJTdWJDb250YWluZXIiLCJoZWlnaHQiLCJVc2VyQ29udGFpbmVyIiwibG9nU3RhdGVUb1Nob3ciLCJVQyIsInVzZXJXcmFwcGVyIiwiUG9zdFNtYWxsIiwiaGFuZGxlRXJyb3IiLCJyZW1vdmVTUE11dGF0aW9uIiwidXNlTXV0YXRpb24iLCJSRU1PVkVfU0FWRURfUE9TVCIsIm9uRXJyb3IiLCJwIiwicG9zdCIsInVzZXIiLCJwYWxsZXR0ZSIsInBhbGxldHRlR2VuZXJhdG9yIiwiY29sb3JQYWxsZXR0ZSIsImhhbmRsZVNhdmVSZW1vdmUiLCJyZXN1bHQiLCJ2YXJpYWJsZXMiLCJfaWQiLCJwb3N0SWQiLCJuZXdTYXZlZFBvc3RzIiwic2F2ZWRQb3N0cyIsImZpbHRlciIsInNldEN1cnJlbnRVc2VyU1AiLCJ0cmlnZ2VyQWxlcnQiLCJ0aXRsZSIsInNldEFsZXJ0IiwidHlwZSIsIlBUIiwicG9zdFdyYXBwZXJTbSIsInBvc3RDb2xvckluZGljYXRvciIsInBvc3RDb250YWluZXIiLCJwb3N0SGVhZGVyIiwiUEhVc2VyIiwiUEhVSWNvbiIsInBvc3RUaXRsZSIsIm1hcmdpbkJvdHRvbSIsInBvc3RTbVJlbW92ZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJzZXRDdXJyZW50VXNlclBvc3RzIiwiUG9zdEltYWdlcyIsImltZ1Nob3duIiwic2V0SW1nU2hvd24iLCJpbWFnZXMiLCJpbWFnZUxpbmtzIiwiaW1hZ2VzQW10IiwidXNlRWZmZWN0Iiwic2V0VG9JbWdTaG93biIsInNyYyIsIkhJU3R5bGUiLCJib3JkZXJDb2xvciIsIndpZHRoIiwiUFAiLCJQUENQaWN0dXJlc0NvbnRhaW5lciIsIlBQQ1BpY3R1cmVzSGlnaGxpZ2h0IiwiaW1hZ2VPcHRpb25zIiwiUFBDUGljdHVyZXNJbnN0YW5jZSIsIlBQQ0FsbFBpY3R1cmVzQ29udGFpbmVyIiwiUG9zdExpbmtzIiwibGlua3MiLCJyZWZlcmVuY2VMaW5rcyIsImxpbmtzVG9TaG93IiwibCIsInN0YXRzIiwid2Vic2l0ZVN0YXRzIiwiY2xlYW5lZExpbmsiLCJQUENSZWZlcmVuY2VMaW5rIiwiUFBDUkxJY29uIiwiUFBDTGlua3NDb250YWllciIsIlBvc3RRYW5kQSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJhbnN3ZXJTdHlsZSIsInFhbmRhIiwidXNlckZyb20iLCJxdWVzdGlvbiIsInVzZXJUbyIsImFuc3dlciIsIkZvcm1Db250YWluZXIiLCJzaWduSW5XYXJuaW5nIiwiYm9yZGVyVG9wQ29sb3IiLCJzaHJpbmtJY29uIiwiaGFuZHNoYWtlSWNvbiIsIklucHV0SGVhZGVyIiwiaW5mbyIsImlucHV0Rm9yIiwiSUgiLCJpbmZvVGl0bGVUZXh0Iiwic2hvd0luZm8iLCJjb2xvckluZm8iLCJpY29uIiwiZm9ybUluZm9Db250YWluZXIiLCJpbmZvSGVhZGVyQ29udGFpbmVyIiwiaW5mb0ljb24iLCJpbmZvQ29udGVudCIsIlNraWxsU3VnZyIsInRvTG93ZXJDYXNlIiwibGFzdFdvcmQiLCJza2lsbHMiLCJzZXRTa2lsbHMiLCJza2lsbFNlYXJjaFF1ZXJ5IiwidXNlUXVlcnkiLCJTS0lMTF9TRUFSQ0giLCJza2lsbENvbmRpdGlvbnMiLCJyZWR1Y2VyIiwic2tpbGxTZWFyY2giLCJza2lsbHNMaXN0IiwiZGF0YSIsInN1Z2dlc3Rpb25zVG9TaG93IiwicyIsImdyaWRDb2x1bW4iLCJzdWdnZXN0aW9uc1N0eWxlIiwiUmVnaXN0ZXIiLCJ1c2VGaWVsZCIsInBhc3N3b3JkIiwicmVQYXNzd29yZCIsImVtYWlsIiwicmVmZXJlbmNlTGluayIsImNsZWFuZWRNZXNzYWdlIiwiZmllbGRzIiwiaW5jbHVkZXMiLCJyZWdpc3Rlck11dGF0aW9uIiwiQ1JFQVRFX1VTRVIiLCJoYW5kbGVTdW1iaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwiYmdTdHlsZSIsIm5vQkciLCJVUiIsInVzZXJGb3JtQ29udGFpbmVyIiwidXNlckZvcm0iLCJVRklucHV0IiwiVUZTdWJtaXQiLCJTaWduSW4iLCJzaWduSW5NdXRhdGlvbiIsIkxPR0lOIiwibG9naW4iLCJzZXRJdGVtIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJMb2dnZWQiLCJzaG93VXRpbGl0aWVzIiwic2V0U2hvd1V0aWxpdGllcyIsImN1cnJlbnRVc2VyVU4iLCJnZXRJdGVtIiwidXNlclF1ZXJ5IiwiRklORF9VU0VSIiwidXNlclF1ZXJ5Q29uZGl0aW9ucyIsImZpbmRVc2VyIiwidXNlclJlc3VsdCIsInVzZXJDb250YWluZXIiLCJMR0RVc2VyQ29udGFpbmVyIiwidXNlck9wdGlvbnNTcGxpdHRlciIsInVzZXJJY29uQ29udGFpbmVyIiwidXNlckJhbm5lciIsImxvZ291dCIsImNoYW5nZVV0aWxpdHlTaG93biIsImNoYW5nZVRvIiwiY2hhbmdlU2hvd1V0aWxpdGllcyIsInVzZXJuYW1lSWNvbiIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwiaWNvblRvU2hvdyIsIlVJQ0giLCJ1c2VyVXNlcm5hbWVJY29uIiwidXNlckljb25Ib3ZlciIsImJhc2ljU3R5bGVzIiwiY2xhc3NOYW1lIiwibm90aWZpY2F0aW9ucyIsImZvbGxvd2luZyIsIlVVT1NlbGVjdGVkIiwic2hvd0luQmFubmVyIiwiVVVBZGRQb3N0IiwidXNlclV0aWxpdHlPcHRpb24iLCJVVUFQSWNvbiIsIlVVQVBUZXh0IiwiVVVJY29uIiwiVVVMb2dvdXQiLCJVVUxvZ291dEljb24iLCJ1c2VyVXNlcm5hbWVDb250YWluZXIiLCJTVUgiLCJzaG93QnViYmxlIiwidXNlck5vdGlmaWNhdGlvbkJ1YmJsZSIsInNob3dVdGlsaXR5Q29udGVudCIsInV0aWxpdHlDb250ZW50IiwiVVVVdGlsaXRpZXNTcGxpdHRlciIsIlVVQ29udGVudENvbnRhaW5lciIsIk5vdExvZ2dlZCIsInVzZXJPcHRpb24iLCJzZXRVc2VyT3B0aW9uIiwib3B0aW9uU3R5bGUiLCJzaWduSW4iLCJyZWdpc3RlciIsImZvcm1Ub1Nob3ciLCJjaGFuZ2VPcHRpb24iLCJOTFVzZXJDb250YWluZXIiLCJ1c2VyT3B0aW9uQ29udGFpbmVyIiwidXNlck9wdGlvbnMiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIk5vdGlmIiwiYWNjZXB0Tm90aWYiLCJBQ0NFUFRfTk9USUZJQ0FUSU9OIiwiZGVjbGluZU5vdGlmIiwiREVDTElORV9OT1RJRklDQVRJT04iLCJhbnN3ZXJRdWVzdGlvbiIsIkFOU1dFUl9RVUVTVElPTiIsImhhbmRsZUFuc3dlciIsIm5vdGlmaWNhdGlvbklkIiwibm90aWYiLCJyZXNwb25zZSIsIm5ld05vdGlmaWNhdGlvbnMiLCJuIiwiaGFuZGxlQWNjZXB0IiwiYWNjZXB0IiwiYWNjZXB0Tm90aWZpY2F0aW9uIiwiaGFuZGxlRGVjbGluZSIsImRlY2xpbmUiLCJkZWNsaW5lTm90aWZpY2F0aW9uIiwibm90aWZTdGF0dXNDb2xvciIsImFjY2VwdGVkIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luTGVmdCIsIkdDTGlua1N0YXRzIiwiY29udGFjdExpbmsiLCJza2lsbFRvSm9pbiIsInNraWxsTmFtZXMiLCJwcm9wb3NlZENvbnRyaWJ1dGlvbiIsImluZGV4T2YiLCJVc2VyTm90aWZMaXN0Iiwic2VudEZpbHRlciIsInNldFNlbnRGaWx0ZXIiLCJzaG93U0ZERCIsInNldFNob3dTRkREIiwic3RhdHVzRmlsdGVyIiwic2V0U3RhdHVzRmlsdGVyIiwic2hvd1N0YXR1c0REIiwic2V0U2hvd1N0YXR1c0REIiwiRmlsdGVyIiwic2VudE9wdGlvbnMiLCJhbGxPcHRpb25zIiwib25PcHRpb25DbGljayIsIm9wdGlvbiIsIm8iLCJVVSIsIk5GRERPcHRpb24iLCJzZW50REQiLCJORnJvcGRvd24iLCJORlNwbGl0dGVyIiwic3RhdHVzT3B0aW9ucyIsInN0YXR1c0REIiwiTkZEcm9wZG93biIsIm5vdGlmRmlsdGVyQ29udGFpbmVyIiwiTkZDcmVhdG9yQ29udGFpbmVyIiwiTkZMYWJlbCIsIk5GT3B0aW9uQ29udGFpbmVyIiwiTkZPcHRpb24iLCJzdGF0dXNDb25kaXRpb25zIiwibm90aWZTdGF0dXMiLCJzZW50Q29uZGl0aW9ucyIsInNlbnRTdGF0dXMiLCJzaG93Tm90aWZpY2F0aW9ucyIsInJldmVyc2UiLCJVc2VyU1AiLCJpZF9saXN0IiwicG9zdExpc3RRdWVyeSIsIkxJU1RfT0ZfUE9TVFMiLCJxdWVyeUNvbmRpdGlvbnMiLCJnZXRMaXN0T2ZQb3N0cyIsInBvc3RMaXN0IiwibmV3UG9zdExpc3QiLCJpbmQiLCJhbGxTUCIsImh0dHBMaW5rIiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJfIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJhcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwid2l0aEFwb2xsbyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsInJlc29sdmUiLCJzY3JvbGwiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJQb3N0UGFnZSIsImN1cnJlbnRQb3N0Iiwic2V0Q3VycmVudFBvc3QiLCJza2lsbEV4cGFuZGVkIiwic2V0U2tpbGxFeHBhbmRlZCIsIm9uSm9pbkVycm9yIiwib25RdWVzdGlvbkVycm9yIiwib25Gb2xsb3dFcnJvciIsImZvbGxvd011dGF0aW9uIiwiU0FWRV9QT1NUIiwibWFrZU5vdGlmaWNhdGlvbiIsIk1BS0VfTk9USUZJQ0FUSU9OIiwiYXNrUXVlc3Rpb24iLCJBU0tfUVVFU1RJT04iLCJoYW5kbGVGb2xsb3ciLCJxYW5kYVF1ZXJ5IiwiUV9BTkRfQV9OT1RJRlMiLCJxYW5kYUNoYW5nZUNvbmRpdGlvbnMiLCJzZWFyY2hBbnN3ZXJlZFFUb1Bvc3QiLCJjbGVhbmVkVGltZSIsIkRhdGUiLCJOdW1iZXIiLCJ0aW1lIiwidG9TdHJpbmciLCJxYW5kYUxpc3QiLCJwcFN0eWxlIiwicWFuZGFUZXh0Iiwic2tpbGxzSFRNTCIsInF1ZXN0aW9uU3R5bGUiLCJoYW5kbGVOb3RpZmljYXRpb24iLCJ1c2VyRnJvbUlkIiwidXNlclRvSWQiLCJpbnMiLCJza2lsbE5hbWUiLCJza2lsbEZpbGwiLCJza2lsbEZpbGxzIiwic2tpbGxDYXAiLCJza2lsbENhcGFjaXRpZXMiLCJtZXNzYWdlU3R5bGUiLCJidXR0b25Ub1Nob3duIiwiUFBTQnV0dG9uRXhpdCIsIlBQU0J1dHRvbiIsIlBQU0J1dHRvbkRpc2FibGVkIiwic2tpbGxQcm9wb3NpdGlvbiIsImZpbGwiLCJQUFNTa2lsbCIsIlBQU0RpdmlzaW9uIiwiUFBTU2tpbGxOYW1lIiwiUFBTU2tpbGxTZWNvbmRhcnkiLCJQUFNTa2lsbEluZm8iLCJQUFNTa2lsbEZvcm0iLCJQUFNUaXRsZSIsIlBQU0lucHV0Q29udGFpbmVyIiwiUFBTSW5wdXQiLCJQUENTdWJtaXRDb250YWluZXIiLCJQUFNCQnV0dG9uIiwiaGFuZGxlUXVlc3Rpb24iLCJ0ZWFtSFRNTCIsInRlYW0iLCJ1biIsIlBQQ1VzZXJDb250YWluZXIiLCJQUENVc2VySWNvbiIsIkhvbWVDb250ZW50IiwiaG9tZU9wdGlvbnMiLCJob21lT3B0aW9uIiwiaG9tZU9wdGlvbkljb24iLCJob21lT3B0aW9uVGV4dCIsImhvbWVPcHRpb25IaWdobGlnaHQiLCJNb2RpZmllZERlc2NyaXB0aW9uIiwic3BhY2VkRGlzIiwiZGVzY3JpcHRpb24iLCJmaW5hbERpcyIsIlBQQ0Rlc2NyaXB0aW9uIiwiX19odG1sIiwicmVkdWNlIiwidCIsInRpdGxlS2V5d29yZHMiLCJrZXl3b3JkcyIsInciLCJwb3N0UGFnZUNvbnRhaW5lciIsIlBQQ29udGVudCIsIlBQQ1RpdGxlIiwiUFBDU3ViSGVhZGVyIiwiUFBDVGltZSIsIlBQQ0FsbFFhbmRhQ29udGFpbmVyIiwidGVhbUluZm8iLCJQUENUZWFtQ29udGFpbmVyIiwiUFBTRm9sbG93SGVhZGVyIiwiYm9yZGVyVG9wIiwicG9zdFF1ZXJ5IiwiRklORF9QT1NUIiwiZmluZFBvc3QiLCJhY3Rpb24iLCJwb3N0cyIsImFtdCIsInN0YXJ0Iiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsInByaW1hcnlDb2xvciIsImNvbG9ycyIsImMiLCJoaWdoZXJDb2xvciIsImlzRGFyayIsIkNSRUFURV9QT1NUIiwiZ3FsIiwiREVMRVRFX1BPU1QiLCJMSVNUX09GX05PVElGSUNBVElPTlMiLCJNRSIsIkFMTF9VU0VSUyIsIkFMTF9QT1NUUyIsIkdFVF9QT1NUX1RJVExFUyIsIlNFQVJDSF9QT1NUUyIsIlBFTkRJTkdfTk9USUZTIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIsIHNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBGSU5EX1VTRVIsIFBFTkRJTkdfTk9USUZTLCBMSVNUX09GX05PVElGSUNBVElPTlMgfSBmcm9tICcuLi9zcmMvc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBvblF1ZXJ5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxOYXZCYXIgcXVlcnk9e3F1ZXJ5fSBvblF1ZXJ5Q2hhbmdlPXtvblF1ZXJ5Q2hhbmdlfSBub1VzZXIgLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICYmIHByb3BzLnRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgcHJvcHMuc2V0VG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLl9pZCA6ICd0aGlzaXNmYWtlJ1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnNRdWVyeSA9IHVzZVF1ZXJ5KFBFTkRJTkdfTk9USUZTLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczogIHt1c2VySWQ6IGN1cnJlbnRVc2VySWR9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlclVOID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSA6ICd0aGlzaXNmYWtlJ1xyXG4gICAgICAgIGNvbnN0IHVzZXJRdWVyeSA9IHVzZVF1ZXJ5KEZJTkRfVVNFUiwge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogY3VycmVudFVzZXJVTn1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHVzZXJOb3RpZnMgPSBwcm9wcy5jdXJyZW50VXNlciA/IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQpIDogW11cclxuICAgICAgICBjb25zdCBub3RpZnNRdWVyeSA9IHVzZVF1ZXJ5KExJU1RfT0ZfTk9USUZJQ0FUSU9OUywge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25zOiB1c2VyTm90aWZzfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3Qgbm90aWZzUXVlcnlDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vdGlmc1F1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChub3RpZnNRdWVyeS5sb2FkaW5nKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAobm90aWZzUXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zLmxlbmd0aCA8IDEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5sZW5ndGgpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zWzBdLnVzZXJGcm9tKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gbm90aWZzUXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnNDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXBlbmRpbmdOb3RpZnNRdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocHJvcHMuY3VycmVudFVzZXIgJiYgcHJvcHMuY3VycmVudFVzZXIucGVuZGluZ05vdGlmaWNhdGlvbnMpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBwZW5kaW5nTm90aWZzUXVlcnkuZGF0YS5zZWFyY2hBd2FpdGluZ05vdGlmc1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyQ29uZGl0aW9ucyA9IChxdWVyeSwgcmVkdWNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXF1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmICghcXVlcnkuZGF0YS5maW5kVXNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHJlZHVjZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBxdWVyeS5kYXRhLmZpbmRVc2VyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc0ZpbGxlZCA9IG5vdGlmc1F1ZXJ5Q29uZGl0aW9ucygpXHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmcyA9IHBlbmRpbmdOb3RpZnNDb25kaXRpb25zKClcclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNvbmRpdGlvbnModXNlclF1ZXJ5LCBwcm9wcy5jdXJyZW50VXNlcilcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXIodXNlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGVuZGluZ05vdGlmcykge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMocGVuZGluZ05vdGlmcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm90aWZzRmlsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobm90aWZzRmlsbGVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW25vdGlmc0ZpbGxlZCwgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCB1c2VyLCBwcm9wcy5zZXRDdXJyZW50VXNlciwgcGVuZGluZ05vdGlmcywgcHJvcHMuc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIHByb3BzXSlcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdkJhciBxdWVyeT17cXVlcnl9IG9uUXVlcnlDaGFuZ2U9e29uUXVlcnlDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKHNldFRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXI6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlciwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldFBlbmRpbmdOb3RpZmljYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5zZXRDdXJyZW50VXNlclxyXG5zZXRQZW5kaW5nTm90aWZpY2F0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExheW91dCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuLy8gaW1wb3J0IGxvZ29CIGZyb20gJy4uL3N0YXRpYy9zdmcvbG9nby9sb2dvQi5zdmcnXHJcbi8vIGltcG9ydCBsb2dvVyBmcm9tICcuLi9zdGF0aWMvc3ZnL2xvZ28vbG9nb1cuc3ZnJ1xyXG5cclxuY29uc3QgTG9hZGluZyA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYgKHByb3BzLnNpemUgPT09ICdzbWFsbCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvQi5zdmdcIiBjbGFzc05hbWU9XCJsb2FkaW5nLWxvZ29cIiBhbHQ9XCJsb2FkaW5nIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPmxvYWRpbmc8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMuY29sb3IgPT09ICd3aGl0ZScpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29XLnN2Z1wiIGNsYXNzTmFtZT1cImxvYWRpbmctbG9nby1sXCIgYWx0PVwibG9hZGluZyBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxvYWRpbmctdGl0bGVcIj5sb2FkaW5nPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgY2xhc3NOYW1lPVwibG9hZGluZy1sb2dvLWxcIiBhbHQ9XCJsb2FkaW5nIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9hZGluZy10aXRsZVwiPmxvYWRpbmc8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoTG9hZGluZykiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBVc2VyQ29udGFpbmVyIGZyb20gJy4vVXNlckNvbnRhaW5lcidcbmltcG9ydCBOQiBmcm9tICcuLi8uLi9zdHlsZXMvbmF2QmFyLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgU2tpbGxTdWdnIGZyb20gJy4uL3RleHQtZmllbGQvU2tpbGxTdWdnJ1xuaW1wb3J0IFVzZXJOb3RpZkxpc3QgZnJvbSAnLi4vdXNlci91dGlsaXRpZXMvVXNlck5vdGlmTGlzdCdcbmltcG9ydCBVc2VyU1AgZnJvbSAnLi4vdXNlci91dGlsaXRpZXMvVXNlclNQJ1xuaW1wb3J0IFNpZ25JbiBmcm9tICcuLi91c2VyL2Zvcm0vU2lnbkluJ1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uL3VzZXIvZm9ybS9SZWdpc3RlcidcbmltcG9ydCB7IGNsZWFyVG9rZW4gfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcbmltcG9ydCB7IHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3V0aWxpdHlTaG93biwgc2V0VXRpbGl0eVNob3duXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW21lbnVJdGVtU2hvd24sIHNldE1lbnVJdGVtU2hvd25dID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGNoYW5nZVV0aWxpdHkgPSAobmFtZSkgPT4ge1xuICAgICAgICBzZXRNZW51SXRlbVNob3duKG51bGwpXG4gICAgICAgIGlmIChuYW1lID09PSB1dGlsaXR5U2hvd24pIHNldFV0aWxpdHlTaG93bihudWxsKVxuICAgICAgICBlbHNlIHNldFV0aWxpdHlTaG93bihuYW1lKVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZU1lbnVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG1lbnVJdGVtU2hvd24pIHNldE1lbnVJdGVtU2hvd24obnVsbClcbiAgICAgICAgZWxzZSBzZXRNZW51SXRlbVNob3duKGl0ZW0pXG4gICAgfVxuXG4gICAgY29uc3QgbGlua1RvUHVzaCA9IHByb3BzLnF1ZXJ5ID8gYC9yZXN1bHRzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb3BzLnF1ZXJ5KX1gIDogJy9yZXN1bHRzL2FsbCdcbiAgICBcbiAgICBjb25zdCBlbnRlclF1ZXJ5ID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaChsaW5rVG9QdXNoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgZW50ZXJRdWVyeSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblN1Z2dlc3Rpb25DbGlja2VkID0gKHNraWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0UXVlcnkgPSBwcm9wcy5xdWVyeS5zcGxpdCgnICcpXG4gICAgICAgIGNvbnN0IG5ld1F1ZXJ5ID0gc3BsaXRRdWVyeS5sZW5ndGggPT09IDEgPyBgJHtza2lsbH0gYCA6IGAke3NwbGl0UXVlcnkuc2xpY2UoMCwgLTEpLmpvaW4oJyAnKX0gJHtza2lsbH0gYFxuICAgICAgICBwcm9wcy5vblF1ZXJ5Q2hhbmdlKHt0YXJnZXQ6IHt2YWx1ZTogbmV3UXVlcnl9fSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIHByb3BzLmNsZWFyVG9rZW4oKVxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVTdHlsZSA9IG1lbnVJdGVtU2hvd24gPyB7Ym9yZGVyQm90dG9tQ29sb3I6ICcjMjgyODI4J30gOiBudWxsXG4gICAgY29uc3QgYWxlcnRCYXJTdHlsZSA9IHByb3BzLmFsZXJ0Tm90aWYuY29sb3IgP1xuICAgICAgICB7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5hbGVydE5vdGlmLmNvbG9yLCBjb2xvcjogcHJvcHMuYWxlcnROb3RpZi50ZXh0Q29sb3J9XG4gICAgICAgIDpcbiAgICAgICAge2Rpc3BsYXk6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5hbGVydE5vdGlmLmNvbG9yLCBjb2xvcjogcHJvcHMuYWxlcnROb3RpZi50ZXh0Q29sb3J9XG5cbiAgICBjb25zb2xlLmxvZyhwcm9wcy5ub1VzZXIpXG4gICAgaWYgKHByb3BzLm5vVXNlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7TkIubmF2Q29udGFpbmVyfSBIV01gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkJhckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtOQi5pY29uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgYWx0PVwiaWNvblwiIGNsYXNzTmFtZT17TkIubmF2QmFySWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc2VhcmNoQmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVzdWx0cy9bc2VhcmNoUXVlcnldJyBhcz17bGlua1RvUHVzaH0gIG9uQ2xpY2s9eygpID0+IGVudGVyUXVlcnkoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5ldXRyYWxpemUtbGluayAke05CLmVudGVyU2VhcmNofSAke05CLnNlYXJjaEhvdmVyfWB9PjxpbWcgc3JjPVwiL3N2Zy9zZWFyY2hXLnN2Z1wiIGNsYXNzTmFtZT17TkIuc2VhcmNoSWNvbn0gYWx0PVwic2VhcmNoXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zZWFyY2hIcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cHJvcHMucXVlcnl9IGNsYXNzTmFtZT17TkIuc2VhcmNoSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5vblF1ZXJ5Q2hhbmdlKGUpfSBvbktleVByZXNzPXsoZSkgPT4gaGFuZGxlS2V5UHJlc3MoZSl9IHBsYWNlaG9sZGVyPVwic2VhcmNoIG9yIGVudGVyIG5vdGhpbmcgZm9yIGFsbCByZXN1bHRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU0JTZXBhcmF0b3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsU3VnZyBxdWVyeT17cHJvcHMucXVlcnl9IG9uU3VnZ2VzdGlvbkNsaWNrZWQ9e29uU3VnZ2VzdGlvbkNsaWNrZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5hbGVydEJhckNvbnRhaW5lcn0gc3R5bGU9e2FsZXJ0QmFyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm1lc3NhZ2V9Pntwcm9wcy5hbGVydE5vdGlmLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgb25DbGljaz17KCkgPT4gcHJvcHMucmVzZXRBbGVydCgpfSBjbGFzc05hbWU9e05CLmNsb3NlfT54PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake05CLm5hdkNvbnRhaW5lck19IFNXTWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubmF2QmFyQ29udGFpbmVyTX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuTkJCcmFuZH0gbmV1dHJhbGl6ZS1saW5rYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29CLnN2Z1wiIGNsYXNzTmFtZT17TkIuTkJMb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlVuaWxvdXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5OQlByaW1hcnlVdGlsaXRpZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9zZWFyY2hTQi5zdmdcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVdGlsaXR5KCdzZWFyY2gnKX0gY2xhc3NOYW1lPXtOQi5QVVNlYXJjaH0gYWx0PVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZVV0aWxpdHkoJ21lbnUnKX0gY2xhc3NOYW1lPXtgJHtOQi5QVUhhbWJ1cmdlckNvbnRhaW5lcn0gJHtOQi5QTkNvbnRhaW5lcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2hhbWJ1cmdlci5zdmdcIiBjbGFzc05hbWU9e05CLlBVSGFtYnVyZ2VyfSBhbHQ9XCJtZW51XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5yZXNldEFsZXJ0KCl9IGNsYXNzTmFtZT17TkIuYWxlcnRCYXJDb250YWluZXJ9IHN0eWxlPXthbGVydEJhclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZXNzYWdlfT57cHJvcHMuYWxlcnROb3RpZi5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17TkIuY2xvc2V9Png8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgcGVuZGluZ05vdGlmU3RhdHMgPSBwcm9wcy5jdXJyZW50VXNlciAmJiBwcm9wcy5jdXJyZW50VXNlci5wZW5kaW5nTm90aWZpY2F0aW9ucyA+IDAgP1xuICAgICAgICBbTkIuUE5CdWJibGUsIHByb3BzLmN1cnJlbnRVc2VyLnBlbmRpbmdOb3RpZmljYXRpb25zXSA6IFtudWxsLCBudWxsXVxuICAgIFxuICAgIGNvbnN0IFNob3dJblN1Yk5hdiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9yZUl0ZW1CdXR0b24gPSBtZW51SXRlbVNob3duID09PSAnbW9yZScgP1xuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL21vcmVXLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKCdtb3JlJyl9IGNsYXNzTmFtZT17TkIubWVudUl0ZW1TZWxlY3RlZH0gYWx0PVwibW9yZVwiIC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbW9yZVNCLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKCdtb3JlJyl9IGNsYXNzTmFtZT17TkIubWVudUl0ZW19IGFsdD1cIm1vcmVcIiAvPlxuICAgICAgICBpZiAodXRpbGl0eVNob3duID09PSAnbWVudScpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy50b2tlbikge1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGFsbEl0ZW1zID0gW1xuICAgICAgICAgICAgICAgIC8vICAgICB7bmFtZTogJ25vdGlmaWNhdGlvbnMnLCBpY29uQjogYmVsbEljb25CLCBpY29uVzogYmVsbEljb25XfSxcbiAgICAgICAgICAgICAgICAvLyAgICAge25hbWU6ICdmb2xsb3dpbmcnLCBpY29uQjogaGVhcnRJY29uQiwgaWNvblc6IGhlYXJ0SWNvbld9LFxuICAgICAgICAgICAgICAgIC8vIF1cbiAgICAgICAgICAgICAgICBjb25zdCBub3RpZkl0ZW1CdXR0b24gPSBtZW51SXRlbVNob3duID09PSAnbm90aWZpY2F0aW9ucycgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKCdub3RpZmljYXRpb25zJyl9IGNsYXNzTmFtZT17YCR7TkIubWVudUl0ZW1TZWxlY3RlZH0gJHtOQi5QTkNvbnRhaW5lcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiZWxsSWNvbld9ICBjbGFzc05hbWU9e05CLm5vdGlmaWNhdGlvbkl0ZW19IGFsdD17J25vdGlmaWNhdGlvbnMnfSBrZXk9e2BVTyR7J25vdGlmaWNhdGlvbnMnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGVuZGluZ05vdGlmU3RhdHNbMF19ID57cGVuZGluZ05vdGlmU3RhdHNbMV19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlTWVudUl0ZW0oJ25vdGlmaWNhdGlvbnMnKX0gY2xhc3NOYW1lPXtgJHtOQi5tZW51SXRlbX0gJHtOQi5QTkNvbnRhaW5lcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9iZWxsQi5zdmdcIiBjbGFzc05hbWU9e05CLm5vdGlmaWNhdGlvbkl0ZW19IGFsdD17J25vdGlmaWNhdGlvbnMnfSBrZXk9e2BVTyR7J25vdGlmaWNhdGlvbnMnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGVuZGluZ05vdGlmU3RhdHNbMF19ID57cGVuZGluZ05vdGlmU3RhdHNbMV19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZm9sbG93aW5nSXRlbUJ1dHRvbiA9IG1lbnVJdGVtU2hvd24gPT09ICdmb2xsb3dpbmcnID8gXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9oZWFydFcuc3ZnXCIgb25DbGljaz17KCkgPT4gY2hhbmdlTWVudUl0ZW0oJ2ZvbGxvd2luZycpfSBjbGFzc05hbWU9e05CLm1lbnVJdGVtU2VsZWN0ZWR9IGFsdD17J2ZvbGxvd2luZyd9IGtleT17YFVPJHsnZm9sbG93aW5nJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9oZWFydEIuc3ZnXCIgb25DbGljaz17KCkgPT4gY2hhbmdlTWVudUl0ZW0oJ2ZvbGxvd2luZycpfSBjbGFzc05hbWU9e05CLm1lbnVJdGVtfSBhbHQ9eydmb2xsb3dpbmcnfSBrZXk9e2BVTyR7J2ZvbGxvd2luZyd9YH0gLz5cbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubmF2QmFyU3ViQ29udGFpbmVyTX0gc3R5bGU9e21lbnVTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QtZm9ybS9cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbShudWxsKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIubWVudUl0ZW19IHN0eWxlPXt7cGFkZGluZzogMCwgbWFyZ2luOiAwfX0+PGltZyBzcmM9XCIvc3ZnL3BsdXNCLnN2Z1wiIGNsYXNzTmFtZT17TkIubWVudUl0ZW19IGFsdD1cImFkZCBwcm9qZWN0XCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwidXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke3Byb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lfWB9IG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKG51bGwpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtOQi5tZW51SXRlbX0gc3R5bGU9e3twYWRkaW5nOiAwLCBtYXJnaW46IDB9fT48aW1nIHNyYz17dXNlckljb259IGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGFsdD1cInVzZXIgcGFnZVwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vdGlmSXRlbUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xsb3dpbmdJdGVtQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V4aXRJY29ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dvdXQoKX0gY2xhc3NOYW1lPXtOQi5tZW51SXRlbX0gYWx0PVwibG9nIG91dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9yZUl0ZW1CdXR0b259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFsbEl0ZW1zID0gWydzaWduIGluJywgJ3JlZ2lzdGVyJ11cbiAgICAgICAgICAgIGNvbnN0IG1vZGFsSXRlbUJ1dHRvbnMgPSBhbGxJdGVtcy5tYXAoaSA9PiBtZW51SXRlbVNob3duID09PSBpID8gXG4gICAgICAgICAgICAgICAgPGgzIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKGkpfSBjbGFzc05hbWU9e05CLm1lbnVJdGVtU2VsZWN0ZWR9IGtleT17YE1JJHtpfWB9ID57aX08L2gzPlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gY2hhbmdlTWVudUl0ZW0oaSl9IGNsYXNzTmFtZT17TkIubWVudUl0ZW19IGtleT17YE1JJHtpfWB9ID57aX08L2gzPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7TkIubmF2QmFyU3ViQ29udGFpbmVyTX0gJHtOQi5sb2dpbkJhcn1gfSBzdHlsZT17bWVudVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAge21vZGFsSXRlbUJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgICAgIHttb3JlSXRlbUJ1dHRvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG5cbiAgICBjb25zdCBNZW51SXRlbVRvU2hvdyA9ICgpID0+IHtcbiAgICAgICAgaWYgKG1lbnVJdGVtU2hvd24gPT09ICdzaWduIGluJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudU1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFNpZ25JbiBub0JHPXt0cnVlfSBjaGFuZ2VNZW51SXRlbT17Y2hhbmdlTWVudUl0ZW19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lbnVJdGVtU2hvd24gPT09ICdyZWdpc3RlcicpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm1lbnVNb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxSZWdpc3RlciBub0JHPXt0cnVlfSBjaGFuZ2VNZW51SXRlbT17Y2hhbmdlTWVudUl0ZW19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lbnVJdGVtU2hvd24gPT09ICdub3RpZmljYXRpb25zJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudU1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPm5vdGlmaWNhdGlvbnM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8VXNlck5vdGlmTGlzdCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZW51SXRlbVNob3duID09PSAnZm9sbG93aW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudU1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnNhdmVkIHBvc3RzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJTUCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZW51SXRlbVNob3duID09PSAnbW9yZScpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm1lbnVNb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC9cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj48aDEgY2xhc3NOYW1lPXtOQi5tb3JlTGlua30+Y29udGFjdCB1czwvaDE+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3Qgc2hvd1doZW5TQiA9IHV0aWxpdHlTaG93biA9PT0gJ3NlYXJjaCcgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtOQi5uYXZDb250YWluZXJ9IEhXTWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZCYXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e05CLmljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29CLnN2Z1wiIGFsdD1cImljb25cIiBjbGFzc05hbWU9e05CLm5hdkJhckljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVzdWx0cy9bc2VhcmNoUXVlcnldJyBhcz17bGlua1RvUHVzaH0gIG9uQ2xpY2s9eygpID0+IGVudGVyUXVlcnkoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbmV1dHJhbGl6ZS1saW5rICR7TkIuZW50ZXJTZWFyY2h9ICR7TkIuc2VhcmNoSG92ZXJ9YH0+PGltZyBzcmM9XCIvc3ZnL3NlYXJjaFcuc3ZnXCIgY2xhc3NOYW1lPXtOQi5zZWFyY2hJY29ufSBhbHQ9XCJzZWFyY2hcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zZWFyY2hIcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwcm9wcy5xdWVyeX0gY2xhc3NOYW1lPXtOQi5zZWFyY2hJbnB1dH0gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uUXVlcnlDaGFuZ2UoZSl9IG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXlQcmVzcyhlKX0gcGxhY2Vob2xkZXI9XCJzZWFyY2ggb3IgZW50ZXIgbm90aGluZyBmb3IgYWxsIHJlc3VsdHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNCU2VwYXJhdG9yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsU3VnZyBxdWVyeT17cHJvcHMucXVlcnl9IG9uU3VnZ2VzdGlvbkNsaWNrZWQ9e29uU3VnZ2VzdGlvbkNsaWNrZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VXNlckNvbnRhaW5lciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5hbGVydEJhckNvbnRhaW5lcn0gc3R5bGU9e2FsZXJ0QmFyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVzc2FnZX0+e3Byb3BzLmFsZXJ0Tm90aWYubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IHByb3BzLnJlc2V0QWxlcnQoKX0gY2xhc3NOYW1lPXtOQi5jbG9zZX0+eDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtOQi5uYXZDb250YWluZXJNfSBTV01gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubmF2QmFyQ29udGFpbmVyTX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake05CLk5CQnJhbmR9IG5ldXRyYWxpemUtbGlua2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29CLnN2Z1wiIGNsYXNzTmFtZT17TkIuTkJMb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+VW5pbG91czwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLk5CUHJpbWFyeVV0aWxpdGllc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvc2VhcmNoU0Iuc3ZnXCIgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eSgnc2VhcmNoJyl9IGNsYXNzTmFtZT17TkIuUFVTZWFyY2h9IGFsdD1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZVV0aWxpdHkoJ21lbnUnKX0gY2xhc3NOYW1lPXtgJHtOQi5QVUhhbWJ1cmdlckNvbnRhaW5lcn0gJHtOQi5QTkNvbnRhaW5lcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvaGFtYnVyZ2VyLnN2Z1wiIGNsYXNzTmFtZT17TkIuUFVIYW1idXJnZXJ9IGFsdD1cIm1lbnVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwZW5kaW5nTm90aWZTdGF0c1swXX0gJHtOQi5QTkJ1YmJsZUhhbWJ1cmdlcn1gfT57cGVuZGluZ05vdGlmU3RhdHNbMV19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5yZXNldEFsZXJ0KCl9IGNsYXNzTmFtZT17TkIuYWxlcnRCYXJDb250YWluZXJ9IHN0eWxlPXthbGVydEJhclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm1lc3NhZ2V9Pntwcm9wcy5hbGVydE5vdGlmLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e05CLmNsb3NlfT54PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubmF2QmFyU3ViQ29udGFpbmVyfSBzdHlsZT17c2hvd1doZW5TQn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5zZWFyY2hCYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XScgYXM9e2xpbmtUb1B1c2h9ICBvbkNsaWNrPXsoKSA9PiBlbnRlclF1ZXJ5KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5ldXRyYWxpemUtbGluayAke05CLmVudGVyU2VhcmNofSAke05CLnNlYXJjaEhvdmVyfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvc2VhcmNoVy5zdmdcIiBjbGFzc05hbWU9e05CLnNlYXJjaEljb259IGFsdD1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaEhyfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3doaXRlJywgaGVpZ2h0OiAnMCd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwcm9wcy5xdWVyeX0gY2xhc3NOYW1lPXtOQi5zZWFyY2hJbnB1dH0gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHByb3BzLm9uUXVlcnlDaGFuZ2UoZSl9IG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXlQcmVzcyhlKX0gcGxhY2Vob2xkZXI9XCJzZWFyY2ggb3IgZW50ZXIgbm90aGluZyBmb3IgYWxsIHJlc3VsdHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsU3VnZyBxdWVyeT17cHJvcHMucXVlcnl9IG9uU3VnZ2VzdGlvbkNsaWNrZWQ9e29uU3VnZ2VzdGlvbkNsaWNrZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTaG93SW5TdWJOYXYgLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1Ub1Nob3cgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbi8vIE5hdkJhciA9IHdpdGhSb3V0ZXIoTmF2QmFyKVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblx0cmV0dXJuIHtcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXG4gICAgICAgIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWZcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxuICAgICAgICByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxuICAgIH1cbn1cblxuY2xlYXJUb2tlblxucmVzZXRBbGVydFxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoTmF2QmFyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVUMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTm90TG9nZ2VkIGZyb20gJy4uL3VzZXIvc3RydWN0dXJlL05vdExvZ2dlZCdcclxuaW1wb3J0IExvZ2dlZCBmcm9tICcuLi91c2VyL3N0cnVjdHVyZS9Mb2dnZWQnXHJcblxyXG5cclxuY29uc3QgVXNlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgbG9nU3RhdGVUb1Nob3cgPSBwcm9wcy50b2tlbiA/IDxMb2dnZWQgLz4gOiA8Tm90TG9nZ2VkIC8+XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VDLnVzZXJXcmFwcGVyfT5cclxuICAgICAgICAgICAge2xvZ1N0YXRlVG9TaG93fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlblxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzXHJcbikoVXNlckNvbnRhaW5lcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IFJFTU9WRV9TQVZFRF9QT1NUIH0gZnJvbSAnLi4vLi4vc3JjL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlclBvc3RzLCBzZXRDdXJyZW50VXNlclNQIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IHsgdHJpZ2dlckFsZXJ0LCBwYWxsZXR0ZUdlbmVyYXRvciB9IGZyb20gJy4uLy4uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgUFQgZnJvbSAnLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFBvc3RTbWFsbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBbIGRlbGV0ZVBvc3RNdXRhdGlvbiBdID0gdXNlTXV0YXRpb24oREVMRVRFX1BPU1QsIHtcclxuICAgIC8vICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgLy8gfSlcclxuICAgIGNvbnN0IFsgcmVtb3ZlU1BNdXRhdGlvbiBdID0gdXNlTXV0YXRpb24oUkVNT1ZFX1NBVkVEX1BPU1QsIHtcclxuICAgICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgfSlcclxuICAgIGNvbnN0IHAgPSBwcm9wcy5wb3N0XHJcbiAgICBjb25zdCB1c2VyID0gcHJvcHMucG9zdC51c2VyID8gcHJvcHMucG9zdC51c2VyLnVzZXJuYW1lIDogcHJvcHMudXNlclxyXG4gICAgY29uc3QgcGFsbGV0dGUgPSBwYWxsZXR0ZUdlbmVyYXRvcihwLmNvbG9yKS5jb2xvclBhbGxldHRlXHJcbiAgICAvLyBjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVsZXRlUG9zdE11dGF0aW9uKHtcclxuICAgIC8vICAgICAgICAgdmFyaWFibGVzOiB7cG9zdElkOiBwcm9wcy5wb3N0Ll9pZH1cclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIGlmIChyZXN1bHQpIHtcclxuICAgIC8vICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJQb3N0cyhwcm9wcy5jdXJyZW50VXNlci5wb3N0cy5maWx0ZXIocCA9PiBwLl9pZCAhPT0gcHJvcHMucG9zdC5faWQpKVxyXG4gICAgLy8gICAgICAgICB0cmlnZ2VyQWxlcnQoJ2RhbmdlcicsIGBkZWxldGVkICQ6IGRlbGV0ZWQgcG9zdCAnJHtwLnRpdGxlfSdgLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBoYW5kbGVTYXZlUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlbW92ZVNQTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHByb3BzLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICAgICAgICAgIHBvc3RJZDogcC5faWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTYXZlZFBvc3RzID0gcHJvcHMuY3VycmVudFVzZXIuc2F2ZWRQb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0Ll9pZCAhPT0gcC5faWQpXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyU1AobmV3U2F2ZWRQb3N0cylcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdkYW5nZXInLCBgdW5mb2xsb3dlZCQ6IHVuZm9sbG93ZWQgcG9zdCAnJHtwLnRpdGxlfSdgLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwcm9wcy50eXBlID09PSAnc2F2ZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RXcmFwcGVyU219PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb2xvckluZGljYXRvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBhbGxldHRlLmNvbG9yfX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudCh1c2VyKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7UFQuUEhVc2VyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17UFQuUEhVSWNvbn0gc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBhbHQ9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1t0aXRsZV1cIiBhcz17YC9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHAudGl0bGUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQVC5wb3N0VGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnN3B4J319PntwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlU2F2ZVJlbW92ZSgpfSBjbGFzc05hbWU9e1BULnBvc3RTbVJlbW92ZX0+eDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgaWYgKHVzZXIgPT09IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdFdyYXBwZXJTbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb2xvckluZGljYXRvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBhbGxldHRlLmNvbG9yfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudCh1c2VyKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtQVC5QSFVzZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17UFQuUEhVSWNvbn0gc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBhbHQ9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3RpdGxlXVwiIGFzPXtgL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocC50aXRsZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17UFQucG9zdFRpdGxlfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzdweCd9fT57cC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKCl9IGNsYXNzTmFtZT1cInBvc3Qtc20tcmVtb3ZlXCI+eDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RXcmFwcGVyU219IHN0eWxlPXt7Z3JpZFRlbXBsYXRlQ29sdW1uczogJzhweCBhdXRvJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbG9ySW5kaWNhdG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcGFsbGV0dGUuY29sb3J9fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXIpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BULlBIVXNlcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17UFQuUEhVSWNvbn0gc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBhbHQ9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bdGl0bGVdXCIgYXM9e2AvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwLnRpdGxlKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17UFQucG9zdFRpdGxlfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzdweCd9fT57cC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgeyBzZXRDdXJyZW50VXNlclBvc3RzLCBzZXRDdXJyZW50VXNlclNQLCBzZXRBbGVydCwgcmVzZXRBbGVydCB9XHJcbikoUG9zdFNtYWxsKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFBQIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlcy9uZXdQb3N0UGFnZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUG9zdEltYWdlcyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2ltZ1Nob3duLCBzZXRJbWdTaG93bl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgXHJcbiAgICBjb25zdCBpbWFnZXMgPSBwcm9wcy5pbWFnZUxpbmtzXHJcbiAgICBjb25zdCBpbWFnZXNBbXQgPSBpbWFnZXMubGVuZ3RoXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbWFnZXNBbXQgPiAwKSBzZXRJbWdTaG93bihpbWFnZXNbMF0pXHJcbiAgICB9LCBbaW1hZ2VzLCBpbWFnZXNBbXRdKVxyXG4gICAgY29uc3Qgc2V0VG9JbWdTaG93biA9IChzcmMpID0+ICB7XHJcbiAgICAgICAgc2V0SW1nU2hvd24oc3JjKVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgSElTdHlsZSA9IHtcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHByb3BzLmNvbG9yLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnICAgXHJcbiAgICAgICAgfVxyXG4gICAgaWYgKGltYWdlc0FtdCA9PT0gMCkgcmV0dXJuIG51bGxcclxuICAgIGVsc2UgaWYgKGltYWdlc0FtdCAgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFAuUFBDUGljdHVyZXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17SElTdHlsZX0gY2xhc3NOYW1lPXtQUC5QUENQaWN0dXJlc0hpZ2hsaWdodH0gc3JjPXtpbWdTaG93bn0gYWx0PVwiaGlnaGxpZ2h0IHBpY1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGltYWdlT3B0aW9ucyA9IGltYWdlcy5tYXAoaSA9PiBpID09PSBpbWdTaG93biA/XHJcbiAgICAgICAgICAgIDxpbWcga2V5PXtgaW1nJHtpfWB9IG9uQ2xpY2s9eygpID0+IHNldFRvSW1nU2hvd24oaSl9IGNsYXNzTmFtZT17UFAuUFBDUGljdHVyZXNJbnN0YW5jZX0gc3R5bGU9e3tib3JkZXJDb2xvcjogcHJvcHMuY29sb3J9fSBzcmM9e2l9IGFsdD1cInBpY1wiIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGltZyBrZXk9e2BpbWcke2l9YH0gb25DbGljaz17KCkgPT4gc2V0VG9JbWdTaG93bihpKX0gY2xhc3NOYW1lPXtQUC5QUENQaWN0dXJlc0luc3RhbmNlfSBzdHlsZT17e2JvcmRlckNvbG9yOiAnIzI4MjgyOCd9fSBzcmM9e2l9IGFsdD1cInBpY1wiIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQUC5QUENQaWN0dXJlc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtISVN0eWxlfSBjbGFzc05hbWU9e1BQLlBQQ1BpY3R1cmVzSGlnaGxpZ2h0fSBzcmM9e2ltZ1Nob3dufSBhbHQ9XCJoaWdobGlnaHQgcGljXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQUC5QUENBbGxQaWN0dXJlc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vLyBcdHJldHVybiB7XHJcbi8vICAgICAgICAgXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoUG9zdEltYWdlcykiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgd2Vic2l0ZVN0YXRzIH0gZnJvbSAnLi4vLi4vc3JjL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCBQUCBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvbmV3UG9zdFBhZ2UubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFBvc3RMaW5rcyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgbGlua3MgPSBwcm9wcy5yZWZlcmVuY2VMaW5rc1xyXG4gICAgaWYgKGxpbmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbmNvbnN0IGxpbmtzVG9TaG93ID0gbGlua3MubWFwKGwgPT4ge1xyXG4gICAgY29uc3Qgc3RhdHMgPSB3ZWJzaXRlU3RhdHMobClcclxuICAgIGxldCBjbGVhbmVkTGluayA9IGwuc3BsaXQoJy8nKS5zbGljZSgyLDQpLmpvaW4oJy8nKVxyXG4gICAgaWYgKGNsZWFuZWRMaW5rLmxlbmd0aCA+IDQwKSB7XHJcbiAgICAgICAgY2xlYW5lZExpbmsgPSBgJHtjbGVhbmVkTGluay5zbGljZSgwLDQwKX0gLi4uYFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YSBocmVmPXtsfSBjbGFzc05hbWU9e2Ake1BQLlBQQ1JlZmVyZW5jZUxpbmt9IG5ldXRyYWxpemUtbGlua2B9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBzdGF0cy5jb2xvcn19IHJlbD1cIm5vZm9sbG93XCIga2V5PXtgcmVmZXJlbmNlTGluayR7bH1gfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1BQLlBQQ1JMSWNvbn0gc3JjPVwiL3N2Zy93ZWJzaXRlcy9pbnRlcm5ldC5zdmdcIiBhbHQ9e3N0YXRzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiTk1cIj57Y2xlYW5lZExpbmt9PC9oND5cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQUC5QUENMaW5rc0NvbnRhaWVyfSA+XHJcbiAgICAgICAgICAgIHtsaW5rc1RvU2hvd31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vIFx0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy8gXHR9XHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShQb3N0TGlua3MpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuLy8gaW1wb3J0IHVzZXJJY29uIGZyb20gJy4uLy4uL3N0YXRpYy9zdmcvdXNlckIuc3ZnJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcbmNvbnN0IFBvc3RRYW5kQSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGFuc3dlclN0eWxlID0gZXhwYW5kZWQgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlBQQy1xYW5kYS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb3BzLnFhbmRhLnVzZXJGcm9tLnVzZXJuYW1lKX1gfSBjbGFzc05hbWU9XCJQUEMtcWFuZGEtaGVhZGVyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJQUEMtdXNlci1pY29uXCIgc3JjPXt1c2VySWNvbn0gYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJOTVwiPntwcm9wcy5xYW5kYS51c2VyRnJvbS51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiUENDLXFhbmRhLWNvbnRlbnRcIj57cHJvcHMucWFuZGEucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlBDQy1xYW5kYS1hbnN3ZXItY29udGFpbmVyXCIgc3R5bGU9e2Fuc3dlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChwcm9wcy5xYW5kYS51c2VyRnJvbS51c2VybmFtZSl9YH0gY2xhc3NOYW1lPVwiUFBDLXFhbmRhLWhlYWRlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlBQQy11c2VyLWljb25cIiBzcmM9e3VzZXJJY29ufSBhbHQ9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJOTVwiPntwcm9wcy5xYW5kYS51c2VyVG8udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiUENDLXFhbmRhLWNvbnRlbnRcIj57cHJvcHMucWFuZGEuYW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0gY2xhc3NOYW1lPVwiUENDLWFuc3dlci10b2dnbGVcIj5cclxuICAgICAgICAgICAgICAgIHtleHBhbmRlZCA/ICdoaWRlIGFuc3dlcicgOiAnc2hvdyBhbnN3ZXInfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKFBvc3RRYW5kQSkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY29uc3QgRm9ybUNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBzaWduSW5XYXJuaW5nID0gcHJvcHMudG9rZW4gPyBudWxsIDogKFxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3YXJuaW5nLWNvbnRhaW5lclwiPm11c3QgYmUgc2lnbmVkIHRvIHBlcmZvcm0gdGhlIHRoZXNlIGFjdGlvbnM8L2gzPlxyXG4gICAgKVxyXG4gICAgaWYgKGV4cGFuZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlclRvcENvbG9yOiBwcm9wcy5wYWxsZXR0ZS5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0gY2xhc3NOYW1lPVwiZXhwYW5kZWQtb3ZlcmxheSBTV01cIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcHJvcHMucGFsbGV0dGUuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBhbGxldHRlLnNocmlua0ljb259IGNsYXNzTmFtZT1cIm92ZXJsYXktaW1hZ2UtZXhwYW5kZWRcIiBhbHQ9XCJzaHJpbmsgZm9ybVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpZ25Jbldhcm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyIEhXTVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyVG9wQ29sb3I6IHByb3BzLnBhbGxldHRlLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpZ25Jbldhcm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlci1tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IGNsYXNzTmFtZT1cImV4cGFuZC1vdmVybGF5IFNXTVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5wYWxsZXR0ZS5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wYWxsZXR0ZS5oYW5kc2hha2VJY29ufSBjbGFzc05hbWU9XCJvdmVybGF5LWltYWdlXCIgYWx0PVwiZXhwYW5kIGZvcm1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlblxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzXHJcbikoRm9ybUNvbnRhaW5lcikiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgSUggZnJvbSAnLi4vLi4vc3R5bGVzL2lucHV0SGVhZGVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBJbnB1dEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBpZiAoIXByb3BzLmluZm8pIHtcclxuICAgICAgICByZXR1cm4gPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlucHV0Rm9yfT48aDMgY2xhc3NOYW1lPXtJSC5pbmZvVGl0bGVUZXh0fT57cHJvcHMudGl0bGV9PC9oMz48L2xhYmVsPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dJbmZvID0gZXhwYW5kZWQgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfSBcclxuICAgIGNvbnN0IGNvbG9ySW5mbyA9IHByb3BzLmNvbG9yID09PSAnd2hpdGUnID9cclxuICAgICAgICB7dGV4dENvbG9yOiAnIzI4MjgyOCcsIGljb246ICcvc3ZnL2luZm9CLnN2Zyd9IDoge3RleHRDb2xvcjogJ3doaXRlJywgaWNvbjogJy9zdmcvaW5mb1cuc3ZnJ31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0lILmZvcm1JbmZvQ29udGFpbmVyfSBzdHlsZT17e2NvbG9yOiBjb2xvckluZm8udGV4dENvbG9yfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtJSC5pbmZvSGVhZGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5pbnB1dEZvcn0+PGgzIGNsYXNzTmFtZT17SUguaW5mb1RpdGxlVGV4dH0+e3Byb3BzLnRpdGxlfTwvaDM+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0gc3JjPXtjb2xvckluZm8uaWNvbn0gY2xhc3NOYW1lPXtJSC5pbmZvSWNvbn0gYWx0PVwiaW5mb1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SUguaW5mb0NvbnRlbnR9IHN0eWxlPXtzaG93SW5mb30+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKElucHV0SGVhZGVyKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBTS0lMTF9TRUFSQ0ggfSBmcm9tICcuLi8uLi9zcmMvc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xyXG5cclxuY29uc3QgU2tpbGxTdWdnID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBzcGxpdFF1ZXJ5ID0gcHJvcHMucXVlcnkudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpXHJcbiAgICBjb25zdCBsYXN0V29yZCA9IHNwbGl0UXVlcnkuc2xpY2UoLTEpID09PSAnJyA/IHNwbGl0UXVlcnkuc2xpY2UoLTIsIC0xKVswXSA6IHNwbGl0UXVlcnkuc2xpY2UoLTEpWzBdXHJcbiAgICBjb25zdCBbc2tpbGxzLCBzZXRTa2lsbHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBza2lsbFNlYXJjaFF1ZXJ5ID0gdXNlUXVlcnkoU0tJTExfU0VBUkNILCB7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7ZmlsdGVyOiBsYXN0V29yZH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBza2lsbENvbmRpdGlvbnMgPSAocXVlcnksIHJlZHVjZXIpID0+IHtcclxuICAgICAgICBpZiAoIXF1ZXJ5KSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmICghcXVlcnkuc2tpbGxTZWFyY2gpIHJldHVybiBudWxsXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5LnNraWxsU2VhcmNoXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzTGlzdCA9IHNraWxsQ29uZGl0aW9ucyhza2lsbFNlYXJjaFF1ZXJ5LmRhdGEsIHNraWxscylcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNraWxsc0xpc3QpIHtcclxuICAgICAgICAgICAgc2V0U2tpbGxzKHNraWxsc0xpc3QpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NraWxsc0xpc3QsIHNraWxsc10pXHJcblxyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnNUb1Nob3cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNraWxscykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgc2tpbGxzLm1hcChzID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMub25TdWdnZXN0aW9uQ2xpY2tlZChzLm5hbWUpfSBjbGFzc05hbWU9XCJzZWFyY2gtc3VnZ2VzdGlvblwiIGtleT17YFNTJHtzLm5hbWV9YH0+e3MubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc1dmgnfX0vPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zU3R5bGUgPSBza2lsbHMubGVuZ3RoICE9PSAwICYmIHByb3BzLnF1ZXJ5ICE9PSAnJyAmJiBsYXN0V29yZCAhPT0gJycgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtc3VnZ2VzdGlvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXN1Z2dlc3Rpb25zXCIgc3R5bGU9e3N1Z2dlc3Rpb25zU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zVG9TaG93KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoU2tpbGxTdWdnKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IENSRUFURV9VU0VSIH0gZnJvbSAnLi4vLi4vLi4vc3JjL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgSW5wdXRIZWFkZXIgZnJvbSAnLi4vLi4vdGV4dC1maWVsZC9JbnB1dEhlYWRlcidcclxuaW1wb3J0IHsgdXNlRmllbGQsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBSZWdpc3RlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VGaWVsZCgndGV4dCcpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZUZpZWxkKCdwYXNzd29yZCcpXHJcbiAgICBjb25zdCByZVBhc3N3b3JkID0gdXNlRmllbGQoJ3Bhc3N3b3JkJylcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlRmllbGQoJ2VtYWlsJylcclxuICAgIGNvbnN0IHJlZmVyZW5jZUxpbmsgPSB1c2VGaWVsZCgndXJsJylcclxuXHJcbiAgICBjb25zdCBvbkVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW5lZE1lc3NhZ2UgPSBlLm1lc3NhZ2VcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpXHJcbiAgICAgICAgaWYgKGNsZWFuZWRNZXNzYWdlLmluY2x1ZGVzKCd1c2VybmFtZScpKSBjbGVhbmVkTWVzc2FnZSA9IGB1c2VybmFtZSQ6ICR7dXNlcm5hbWUuZmllbGRzLnZhbHVlfSBpcyBhbHJlYWR5IGJlaW5nIHVzZWRgXHJcbiAgICAgICAgaWYgKGNsZWFuZWRNZXNzYWdlLmluY2x1ZGVzKCdyZWZlcmVuY2VMaW5rJykpIGNsZWFuZWRNZXNzYWdlID0gYHJlZmVyZW5jZSBsaW5rJDogJHtyZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIGlmIChjbGVhbmVkTWVzc2FnZS5pbmNsdWRlcygnZW1haWwnKSkgY2xlYW5lZE1lc3NhZ2UgPSBgZW1haWwkOiAke2VtYWlsLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGNsZWFuZWRNZXNzYWdlLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcmVnaXN0ZXJNdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihDUkVBVEVfVVNFUiwgeyBvbkVycm9yIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1bWJpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmZpZWxkcy52YWx1ZSAhPT0gcmVQYXNzd29yZC5maWVsZHMudmFsdWUpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ3Bhc3N3b3JkJDogcGFzc3dvcmQgYW5kIHJlLXBhc3N3b3JkIGRpZCBub3QgbWF0Y2gnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF1c2VybmFtZS5maWVsZHMudmFsdWUubGVuZ3RoIHx8ICFwYXNzd29yZC5maWVsZHMudmFsdWUubGVuZ3RoIHx8ICFyZVBhc3N3b3JkLmZpZWxkcy52YWx1ZS5sZW5ndGggfHwgIXJlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnYWxsJDogYWxsIGZpZWxkcyBtdXN0IGJlIGZpbGxlZCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWdpc3Rlck11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUxpbms6IHJlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jaGFuZ2VNZW51SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlTWVudUl0ZW0obnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1c2VybmFtZS5yZXNldCgpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLnJlc2V0KClcclxuICAgICAgICAgICAgcmVQYXNzd29yZC5yZXNldCgpXHJcbiAgICAgICAgICAgIGVtYWlsLnJlc2V0KClcclxuICAgICAgICAgICAgcmVmZXJlbmNlTGluay5yZXNldCgpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsICdyZWdpc3RlcmVkJDogYWNjb3VudCBzdWNjZXNzZnVsbHkgY3JlYXRlZCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXJlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJnU3R5bGUgPSBwcm9wcy5ub0JHID8ge2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfSA6IG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyRm9ybUNvbnRhaW5lcn0gc3R5bGU9e2JnU3R5bGV9PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1VSLnVzZXJGb3JtfSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1bWJpdChlKX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS11c2VybmFtZVwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInVzZXJuYW1lXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi51c2VybmFtZS5maWVsZHN9IGlkPVwiU0ktdXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJwYXNzd29yZFwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucGFzc3dvcmQuZmllbGRzfSBpZD1cIlNJLXBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXJlUGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJyZS10eXBlIHBhc3N3b3JkXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5yZVBhc3N3b3JkLmZpZWxkc30gaWQ9XCJTSS1yZVBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1lbWFpbFwiIGluZm89e3RydWV9IHRpdGxlPVwiZW1haWxcIiBjb2xvcj1cImRhcmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51bnRpbGwgZnVydGhlciBwb2xpY3kgY2hhbmdlcyBubyBlbWFpbHMgYXJlIHNlbnQgeW91ciB3YXk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+b25seSBzaG93biB0byB1c2VycyB3aG8geW91IGFjY2VwdCBhZnRlciBjb250YWN0aW5nIHlvdSBkaXJlY3RseSAobm90IHRocm91Z2ggcG9zdCk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLmVtYWlsLmZpZWxkc30gaWQ9XCJTSS1lbWFpbFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcmVmZXJlbmNlTGlua1wiIGluZm89e3RydWV9IHRpdGxlPVwicG9ydGFmb2xpbyBsaW5rXCIgY29sb3I9XCJkYXJrXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luOiAwLCBtYXJnaW5Cb3R0b206ICc1cHgnfX0+bGluayBvbiB5b3VyIHVzZXIgcGFnZSB1c2VkIGFzIGEgcmVzdW1lIHRvIGRlbW9uc3RyYXRlIHlvdXIgYWJpbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbjogMCwgbWFyZ2luQm90dG9tOiAnNXB4J319PjxzdHJvbmc+YWx3YXlzIHZpZXcgYW5vdGhlciB1c2VycyBwb3J0YWZvbGlvIGxpbmsgYmVmb3JlIHdvcmtpbmcgd2l0aCB0aGVtPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbjogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+c2l0ZXMgcmVjb21tZW5kZWQ6IDxzdHJvbmc+TGlua2VkSW48L3N0cm9uZz4sIDxzdHJvbmc+SW5kZWVkPC9zdHJvbmc+LCA8c3Ryb25nPkdpdEh1Yjwvc3Ryb25nPiwgb3IgPHN0cm9uZz5GYWNlYm9vazwvc3Ryb25nPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT50byBmdXJ0aGVyIGVuc3VyZSB5b3VyIHBvcnRhZm9saW8gbGluayBpcyB0cnVzdHdvcnRoeSwgbGluayB5b3VyIFVuaWxvdXMgYWNjb3V0IGZyb20geW91ciBwb3J0YWZvbGlvIGxpbms8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnJlZmVyZW5jZUxpbmsuZmllbGRzfSBpZD1cIlNJLXJlZmVyZW5jZUxpbmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1VSLlVGU3VibWl0fSB0eXBlPVwic3VibWl0XCI+PGgzPnJlZ2lzdGVyPC9oMz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsLFxyXG4gICAgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9XHJcbikoUmVnaXN0ZXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgTE9HSU4gfSBmcm9tICcuLi8uLi8uLi9zcmMvc2NoZW1hcy9tdXRhdGlvbnMnXHJcbmltcG9ydCB7IHVzZUZpZWxkLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IElucHV0SGVhZGVyIGZyb20gJy4uLy4uL3RleHQtZmllbGQvSW5wdXRIZWFkZXInXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IFVSIGZyb20gJy4uLy4uLy4uL3N0eWxlcy91c2VyL3VzZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFNpZ25JbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VGaWVsZCgndGV4dCcpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZUZpZWxkKCdwYXNzd29yZCcpXHJcblxyXG4gICAgY29uc3Qgb25FcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsZWFuZWRNZXNzYWdlID0gZS5tZXNzYWdlXHJcbiAgICAgICAgY29uc29sZS5sb2coY2xlYW5lZE1lc3NhZ2UpXHJcbiAgICAgICAgY2xlYW5lZE1lc3NhZ2UgPSBjbGVhbmVkTWVzc2FnZS5zcGxpdCgnOicpXHJcbiAgICAgICAgY2xlYW5lZE1lc3NhZ2UgPSBjbGVhbmVkTWVzc2FnZS5zbGljZSgxLCBjbGVhbmVkTWVzc2FnZS5sZW5ndGgpLmpvaW4oJyQ6JylcclxuICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBjbGVhbmVkTWVzc2FnZSwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBbc2lnbkluTXV0YXRpb25dID0gdXNlTXV0YXRpb24oTE9HSU4sIHsgb25FcnJvciB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTdW1iaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25Jbk11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLmZpZWxkcy52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jaGFuZ2VNZW51SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlTWVudUl0ZW0obnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3VsdC5kYXRhLmxvZ2luLnZhbHVlXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLnJlc2V0KClcclxuICAgICAgICAgICAgcGFzc3dvcmQucmVzZXQoKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUuZmllbGRzLnZhbHVlKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRUb2tlbih0b2tlbilcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJnU3R5bGUgPSBwcm9wcy5ub0JHID8ge2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfSA6IG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyRm9ybUNvbnRhaW5lcn0gc3R5bGU9e2JnU3R5bGV9PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1VSLnVzZXJGb3JtfSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1bWJpdChlKX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS11c2VybmFtZVwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInVzZXJuYW1lXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi51c2VybmFtZS5maWVsZHN9IGlkPVwiU0ktdXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJwYXNzd29yZFwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucGFzc3dvcmQuZmllbGRzfSBpZD1cIlNJLXBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtVUi5VRlN1Ym1pdH0gdHlwZT1cInN1Ym1pdFwiPjxoMz5zaWduIGluPC9oMz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy8gXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vLyBcdH1cclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbCxcclxuICAgIHsgc2V0VG9rZW4sIHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShTaWduSW4pIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IEZJTkRfVVNFUiB9IGZyb20gJy4uLy4uLy4uL3NyYy9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IGNsZWFyVG9rZW4gfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IFVzZXJOb3RpZkxpc3QgZnJvbSAnLi4vdXRpbGl0aWVzL1VzZXJOb3RpZkxpc3QnXHJcbmltcG9ydCBVc2VyU1AgZnJvbSAnLi4vdXRpbGl0aWVzL1VzZXJTUCdcclxuaW1wb3J0IFVVIGZyb20gJy4uLy4uLy4uL3N0eWxlcy91c2VyL3VzZXJVdGlsaXRpZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IFVSIGZyb20gJy4uLy4uLy4uL3N0eWxlcy91c2VyL3VzZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBMb2dnZWQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzaG93VXRpbGl0aWVzLCBzZXRTaG93VXRpbGl0aWVzXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbdXRpbGl0eVNob3duLCBzZXRVdGlsaXR5U2hvd25dID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgY3VycmVudFVzZXJVTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgOiAnZmFrZVVzZXInXHJcbiAgICBjb25zdCB1c2VyUXVlcnkgPSB1c2VRdWVyeShGSU5EX1VTRVIsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogY3VycmVudFVzZXJVTn1cclxuICAgIH0pXHJcbiAgICBjb25zdCB1c2VyUXVlcnlDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdXNlclF1ZXJ5LmRhdGFcclxuICAgICAgICBjb25zdCByZWR1Y2VyID0gcHJvcHMuY3VycmVudFVzZXJcclxuICAgICAgICBpZiAoIXF1ZXJ5KSB7IHJldHVybiBudWxsIH1cclxuICAgICAgICBpZiAoIXF1ZXJ5LmZpbmRVc2VyKSB7IHJldHVybiBudWxsIH1cclxuICAgICAgICBpZiAocmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAocXVlcnkuZmluZFVzZXIudXNlcm5hbWUgPT09IHJlZHVjZXIudXNlcm5hbWUpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcXVlcnkuZmluZFVzZXJcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXJSZXN1bHQgPSB1c2VyUXVlcnlDb25kaXRpb25zKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyKHVzZXJSZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLCBwcm9wcy5jdXJyZW50VXNlciwgdXNlclJlc3VsdF0pXHJcblxyXG4gICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtVUi51c2VyQ29udGFpbmVyfSAke1VSLkxHRFVzZXJDb250YWluZXJ9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIudXNlck9wdGlvbnNTcGxpdHRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJJY29uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL3N2Zy91c2VyVy5zdmdcIiBjbGFzc05hbWU9XCJ1c2VyLWljb25cIiBhbHQ9XCJ1c2VyXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyQmFubmVyfT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgIHByb3BzLmNsZWFyVG9rZW4oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVV0aWxpdHlTaG93biA9IChjaGFuZ2VUbykgPT4ge1xyXG4gICAgICAgIGlmIChjaGFuZ2VUbyA9PT0gdXRpbGl0eVNob3duKSB7XHJcbiAgICAgICAgICAgIHNldFV0aWxpdHlTaG93bihudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VXRpbGl0eVNob3duKGNoYW5nZVRvKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTaG93VXRpbGl0aWVzKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VTaG93VXRpbGl0aWVzID0gKGNoYW5nZVRvKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGFuZ2VUbykge1xyXG4gICAgICAgICAgICBzZXRTaG93VXRpbGl0aWVzKGNoYW5nZVRvKVxyXG4gICAgICAgICAgICBzZXRVdGlsaXR5U2hvd24obnVsbClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNob3dVdGlsaXRpZXMoY2hhbmdlVG8pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlcm5hbWVJY29uID0gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUuc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKClcclxuXHJcbiAgICBjb25zdCBpY29uVG9TaG93ID0gc2hvd1V0aWxpdGllcyA/XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1VSLnVzZXJJY29uQ29udGFpbmVyfSAke1VSLlVJQ0h9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7VVIudXNlclVzZXJuYW1lSWNvbn0gJHtVUi51c2VySWNvbkhvdmVyfWB9Pnt1c2VybmFtZUljb259PC9oMT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidXNlci1pY29uLWNvbnRhaW5lciBVSUNIXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlclcuc3ZnXCIgY2xhc3NOYW1lPXtgJHtVUi51c2VySWNvbn0gJHtVUi51c2VySWNvbkhvdmVyfWB9IGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgIGNvbnN0IGJhc2ljU3R5bGVzID0ge3VzZXI6IHtjbGFzc05hbWU6ICcnLCBpY29uOiBcIi9zdmcvdXNlclNCLnN2Z1wifSwgbm90aWZpY2F0aW9uczoge2NsYXNzTmFtZTogJycsIGljb246IFwiL3N2Zy9iZWxsQi5zdmdcIn0sIGZvbGxvd2luZzoge2NsYXNzTmFtZTogJycsIGljb246IFwiL3N2Zy9oZWFydEIuc3ZnXCJ9fVxyXG4gICAgaWYgKHV0aWxpdHlTaG93biA9PT0gJ3VzZXInKSB7IGJhc2ljU3R5bGVzLnVzZXIgPSB7Y2xhc3NOYW1lOiBVUi5VVU9TZWxlY3RlZCwgaWNvbjogXCIvc3ZnL3VzZXJXLnN2Z1wifX1cclxuICAgIGlmICh1dGlsaXR5U2hvd24gPT09ICdub3RpZmljYXRpb25zJykgeyBiYXNpY1N0eWxlcy5ub3RpZmljYXRpb25zID0ge2NsYXNzTmFtZTogVVIuVVVPU2VsZWN0ZWQsIGljb246IFwiL3N2Zy9iZWxsVy5zdmdcIn19XHJcbiAgICBpZiAodXRpbGl0eVNob3duID09PSAnZm9sbG93aW5nJykgeyBiYXNpY1N0eWxlcy5mb2xsb3dpbmcgPSB7Y2xhc3NOYW1lOiBVUi5VVU9TZWxlY3RlZCwgaWNvbjogXCIvc3ZnL2hlYXJ0Vy5zdmdcIn19XHJcbiAgICBcclxuICAgIGNvbnN0IHBlbmRpbmdOb3RpZlN0YXRzID0gcHJvcHMuY3VycmVudFVzZXIgJiYgcHJvcHMuY3VycmVudFVzZXIucGVuZGluZ05vdGlmaWNhdGlvbnMgPiAwID9cclxuICAgICAgICBbVVIuUE5CdWJibGUsIHByb3BzLmN1cnJlbnRVc2VyLnBlbmRpbmdOb3RpZmljYXRpb25zXSA6IFtudWxsLCBudWxsXVxyXG5cclxuICAgIGNvbnN0IHNob3dJbkJhbm5lciA9IHNob3dVdGlsaXRpZXMgP1xyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0Zm9ybXBhZ2UvXCIgPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtVUi5VVUFkZFBvc3R9ICR7VVIudXNlclV0aWxpdHlPcHRpb259IG5ldXRyYWxpemUtbGlua2B9IHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvcGx1c0Iuc3ZnXCIgY2xhc3NOYW1lPXtVUi5VVUFQSWNvbn0gYWx0PVwiYWRkIHBvc3RcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17VVIuVVVBUFRleHR9PmFkZCBwb3N0PC9oND5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZX1gfSA+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1VSLnVzZXJVdGlsaXR5T3B0aW9ufSAke2Jhc2ljU3R5bGVzLnVzZXIuY2xhc3NOYW1lfWB9PjxpbWcgc3JjPXtiYXNpY1N0eWxlcy51c2VyLmljb259IGNsYXNzTmFtZT17VVIuVVVJY29ufSBhbHQ9XCJ1c2VyXCIgLz48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVdGlsaXR5U2hvd24oJ25vdGlmaWNhdGlvbnMnKX0gY2xhc3NOYW1lPXtgJHtVUi51c2VyVXRpbGl0eU9wdGlvbn0gJHtVUi5QTkNvbnRhaW5lcn0gJHtiYXNpY1N0eWxlcy5ub3RpZmljYXRpb25zLmNsYXNzTmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYXNpY1N0eWxlcy5ub3RpZmljYXRpb25zLmljb259IGNsYXNzTmFtZT17VVIuVVVJY29ufSBhbHQ9XCJub3RpZmljYXRpb25zXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwZW5kaW5nTm90aWZTdGF0c1swXX0+e3BlbmRpbmdOb3RpZlN0YXRzWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVdGlsaXR5U2hvd24oJ2ZvbGxvd2luZycpfSBjbGFzc05hbWU9e2Ake1VSLnVzZXJVdGlsaXR5T3B0aW9ufSAke2Jhc2ljU3R5bGVzLmZvbGxvd2luZy5jbGFzc05hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmFzaWNTdHlsZXMuZm9sbG93aW5nLmljb259IGNsYXNzTmFtZT17VVIuVVVJY29ufSBhbHQ9XCJmb2xsb3dcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0gY2xhc3NOYW1lPXtgJHtVUi51c2VyVXRpbGl0eU9wdGlvbn0gJHtVUi5VVUxvZ291dH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9leGl0Qi5zdmdcIiBjbGFzc05hbWU9e1VSLlVVTG9nb3V0SWNvbn0gYWx0PVwibG9nIG91dFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlU2hvd1V0aWxpdGllcyghc2hvd1V0aWxpdGllcyl9IGNsYXNzTmFtZT17YCR7VVIudXNlclVzZXJuYW1lQ29udGFpbmVyfSAke1VSLlNVSH1gfT48aDIgY2xhc3NOYW1lPVwidXNlci11c2VybmFtZVwiPntwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZX08L2gyPjwvZGl2PlxyXG5cclxuICAgIGNvbnN0IHNob3dCdWJibGUgPSBzaG93VXRpbGl0aWVzID9cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eVNob3duKCdub3RpZmljYXRpb25zJyl9IGNsYXNzTmFtZT17VVIudXNlck5vdGlmaWNhdGlvbkJ1YmJsZX0+NDwvZGl2PlxyXG5cclxuXHJcbiAgICBjb25zdCBzaG93VXRpbGl0eUNvbnRlbnQgPSB1dGlsaXR5U2hvd24gPyBcclxuICAgICAgICB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG5cclxuICAgIGNvbnN0IHV0aWxpdHlDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmICh1dGlsaXR5U2hvd24gPT09ICd1c2VyJykge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gPGRpdj48VXNlckluZm8gLz48L2Rpdj5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHV0aWxpdHlTaG93biA9PT0gJ25vdGlmaWNhdGlvbnMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8VXNlck5vdGlmTGlzdCAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXRpbGl0eVNob3duID09PSAnZm9sbG93aW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gPFVzZXJTUCAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtVUi51c2VyQ29udGFpbmVyfSAke1VSLkxHRFVzZXJDb250YWluZXJ9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyT3B0aW9uc1NwbGl0dGVyfT5cclxuICAgICAgICAgICAgICAgIHtpY29uVG9TaG93fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJCYW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbkJhbm5lcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93QnViYmxlfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIuVVVVdGlsaXRpZXNTcGxpdHRlcn0gc3R5bGU9e3Nob3dVdGlsaXR5Q29udGVudH0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIuVVVDb250ZW50Q29udGFpbmVyfSBzdHlsZT17c2hvd1V0aWxpdHlDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxoMz57dXRpbGl0eVNob3dufTwvaDM+XHJcbiAgICAgICAgICAgICAgICB7dXRpbGl0eUNvbnRlbnQoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsZWFyVG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXI6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlciwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoTG9nZ2VkKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcbi8vIGltcG9ydCB1c2VySWNvbiBmcm9tICcuLi8uLi8uLi9zdGF0aWMvc3ZnL3VzZXJXLnN2ZydcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuLi9mb3JtL1NpZ25JbidcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uL2Zvcm0vUmVnaXN0ZXInXHJcblxyXG5cclxuY29uc3QgTm90TG9nZ2VkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlck9wdGlvbiwgc2V0VXNlck9wdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IG9wdGlvblN0eWxlID0gdXNlck9wdGlvbiA/IFxyXG4gICAgICAgIHVzZXJPcHRpb24gPT09ICdzaWduIGluJyA/XHJcbiAgICAgICAgICAgIHtzaWduSW46IHtiYWNrZ3JvdW5kQ29sb3I6ICcjNDg0ODQ4JywgY29sb3I6ICd3aGl0ZSd9LCByZWdpc3RlcjogbnVsbH1cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICB7c2lnbkluOiBudWxsLCByZWdpc3Rlcjoge2JhY2tncm91bmRDb2xvcjogJyM0ODQ4NDgnLCBjb2xvcjogJ3doaXRlJ319XHJcbiAgICAgICAgOiB7c2lnbkluOiBudWxsLCByZWdpc3RlcjogbnVsbH1cclxuXHJcbiAgICBjb25zdCBmb3JtVG9TaG93ID0gdXNlck9wdGlvbiA/IFxyXG4gICAgICAgIHVzZXJPcHRpb24gPT09ICdzaWduIGluJyA/XHJcbiAgICAgICAgICAgIDxTaWduSW4gLz4gOiA8UmVnaXN0ZXIgLz5cclxuICAgICAgICA6IG51bGxcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VPcHRpb24gPSAoY2hhbmdlVG8pID0+IHtcclxuICAgICAgICBpZiAodXNlck9wdGlvbiA9PT0gY2hhbmdlVG8pIHtcclxuICAgICAgICAgICAgc2V0VXNlck9wdGlvbihudWxsKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJPcHRpb24oY2hhbmdlVG8pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7VVIudXNlckNvbnRhaW5lcn0gJHtVUi5OTFVzZXJDb250YWluZXJ9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlT3B0aW9uKCdzaWduIGluJyl9IGNsYXNzTmFtZT17VVIudXNlck9wdGlvbkNvbnRhaW5lcn0gc3R5bGU9e29wdGlvblN0eWxlLnNpZ25Jbn0+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtVUi51c2VyT3B0aW9uc30gc3R5bGU9e3twYWRkaW5nUmlnaHQ6ICcxMHB4J319PnNpZ24gaW48L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJPcHRpb25zU3BsaXR0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJJY29uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlclcuc3ZnXCIgY2xhc3NOYW1lPXtVUi51c2VySWNvbn0gYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlT3B0aW9uKCdyZWdpc3RlcicpfSBjbGFzc05hbWU9e1VSLnVzZXJPcHRpb25Db250YWluZXJ9IHN0eWxlPXtvcHRpb25TdHlsZS5yZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtVUi51c2VyT3B0aW9uc30gc3R5bGU9e3twYWRkaW5nTGVmdDogJzEwcHgnfX0+cmVnaXN0ZXI8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2Zvcm1Ub1Nob3d9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShOb3RMb2dnZWQpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBvc3RTbWFsbCBmcm9tICcuLi8uLi9wb3N0L1Bvc3RTbWFsbCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBBQ0NFUFRfTk9USUZJQ0FUSU9OLCBERUNMSU5FX05PVElGSUNBVElPTiwgQU5TV0VSX1FVRVNUSU9OIH0gZnJvbSAnLi4vLi4vLi4vc3JjL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgeyB1c2VGaWVsZCwgd2Vic2l0ZVN0YXRzLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuXHJcbmNvbnN0IE5vdGlmID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbYWNjZXB0Tm90aWZdID0gdXNlTXV0YXRpb24oQUNDRVBUX05PVElGSUNBVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2RlY2xpbmVOb3RpZl0gPSB1c2VNdXRhdGlvbihERUNMSU5FX05PVElGSUNBVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Fuc3dlclF1ZXN0aW9uXSA9IHVzZU11dGF0aW9uKEFOU1dFUl9RVUVTVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGFuc3dlciA9IHVzZUZpZWxkKCd0ZXh0JylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBbnN3ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYW5zd2VyUXVlc3Rpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbklkOiBwcm9wcy5ub3RpZi5faWQsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZTogYW5zd2VyLmZpZWxkcy52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkID09PSBwcm9wcy5ub3RpZi5faWQgPyByZXN1bHQuZGF0YS5hbnN3ZXJRdWVzdGlvbiA6IG4pXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhuZXdOb3RpZmljYXRpb25zKVxyXG4gICAgICAgICAgICBhbnN3ZXIucmVzZXQoKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCBgcmVwbGllZCQ6IHlvdSBoYXZlIHJlcGxpZWQgdG8gJHtwcm9wcy5ub3RpZi51c2VyRnJvbS51c2VybmFtZX0ncyBxdWVzdGlvbmAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWNjZXB0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjY2VwdCA9IGF3YWl0IGFjY2VwdE5vdGlmKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uSWQ6IHByb3BzLm5vdGlmLl9pZH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChhY2NlcHQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQgPT09IHByb3BzLm5vdGlmLl9pZCA/IGFjY2VwdC5kYXRhLmFjY2VwdE5vdGlmaWNhdGlvbiA6IG4pXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhuZXdOb3RpZmljYXRpb25zKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCBgYWNjZXB0ZWQkOiB5b3UgaGF2ZSBhY2NlcHRlZCAke3Byb3BzLm5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfSB0byB5b3VyIHRlYW1gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVEZWNsaW5lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlY2xpbmUgPSBhd2FpdCBkZWNsaW5lTm90aWYoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25JZDogcHJvcHMubm90aWYuX2lkfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChkZWNsaW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkID09PSBwcm9wcy5ub3RpZi5faWQgPyBkZWNsaW5lLmRhdGEuZGVjbGluZU5vdGlmaWNhdGlvbiA6IG4pXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhuZXdOb3RpZmljYXRpb25zKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ2RhbmdlcicsIGBkZWNsaW5lZCQ6IHlvdSBoYXZlIGRlY2xpbmVkICR7cHJvcHMubm90aWYudXNlckZyb20udXNlcm5hbWV9J3MgcmVxdWVzdCB0byBqb2luYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBub3RpZiA9IHByb3BzLm5vdGlmXHJcbiAgICBjb25zdCBub3RpZlN0YXR1c0NvbG9yID0gbm90aWYuYWNjZXB0ZWQgPT09IG51bGwgPyBcclxuICAgICAgICAncmdiKDIyNiwxODQsNTkpJyA6XHJcbiAgICAgICAgbm90aWYuYWNjZXB0ZWQgP1xyXG4gICAgICAgICAgICBub3RpZi5wb3N0ID9cclxuICAgICAgICAgICAgICAgICdyZ2IoNTIsMTY2LDk1KScgOiAnIzhiOGI4YicgXHJcbiAgICAgICAgICAgIDogJ3JnYigyNTQsNTIsNzcpJ1xyXG4gICAgaWYgKG5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lID09PSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSl7XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+YW5zd2VyZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub3RpZi5wb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBHQ0xpbmtTdGF0cyA9IHdlYnNpdGVTdGF0cyhub3RpZi5wb3N0LmNvbnRhY3RMaW5rKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5lZExpbmsgPSBub3RpZi5wb3N0LmNvbnRhY3RMaW5rLnNwbGl0KCcvJylbMl1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pmdyb3VwL2NvbnRhY3QgbGluazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtub3RpZi5wb3N0LmNvbnRhY3RMaW5rfSBjbGFzc05hbWU9XCJuLWpvaW4tbGluayBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IEdDTGlua1N0YXRzLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0dDTGlua1N0YXRzLmljb259IGNsYXNzTmFtZT1cIm4tSkwtaWNvblwiIGFsdD17R0NMaW5rU3RhdHMudGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NsZWFuZWRMaW5rfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IG1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5tZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAobm90aWYuYWNjZXB0ZWQpIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+YW5zd2VyZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub3RpZi5wb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBHQ0xpbmtTdGF0cyA9IHdlYnNpdGVTdGF0cyhub3RpZi5wb3N0LmNvbnRhY3RMaW5rKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5lZExpbmsgPSBub3RpZi5wb3N0LmNvbnRhY3RMaW5rLnNwbGl0KCcvJylbMl1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5zZW50IGdyb3VwL2NvbnRhY3QgbGluazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtub3RpZi5wb3N0LmNvbnRhY3RMaW5rfSBjbGFzc05hbWU9XCJuLWpvaW4tbGluayBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IEdDTGlua1N0YXRzLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0dDTGlua1N0YXRzLmljb259IGNsYXNzTmFtZT1cIm4tSkwtaWNvblwiIGFsdD17R0NMaW5rU3RhdHMudGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NsZWFuZWRMaW5rfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBtZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1yZXBseVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIj5yZXBseTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibi1ub3RpZi1yZXBseS1maWVsZFwiIHsuLi5hbnN3ZXIuZmllbGRzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyKCl9IGNsYXNzTmFtZT1cIm4tQW9ELW9wdGlvbiBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9fT5hbnN3ZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pm1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PmFjY2VwdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1Bb0RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNsaW5lKCl9IGNsYXNzTmFtZT1cIm4tQW9ELW9wdGlvbiBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU0LDUyLDc3KSd9fT5kZWNsaW5lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY2NlcHQoKX0gY2xhc3NOYW1lPVwibi1Bb0Qtb3B0aW9uIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYig1MiwxNjYsOTUpJ319PmFjY2VwdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7bm90aWYudXNlclRvLnVzZXJuYW1lfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShOb3RpZilcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IExJU1RfT0ZfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4uLy4uLy4uL3NyYy9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyB9IGZyb20nLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCBOb3RpZiBmcm9tICcuL05vdGlmJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgYXBvbGxvLCB7YXBvbGxvQ2xpZW50fSBmcm9tICcuLi8uLi8uLi9saWIvYXBvbGxvJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBVVSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyVXRpbGl0aWVzLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuXHJcbmNvbnN0IFVzZXJOb3RpZkxpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdFF1ZXJ5ID0gdXNlUXVlcnkoTElTVF9PRl9OT1RJRklDQVRJT05TLCB7XHJcbiAgICAvLyAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uczogcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCl9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gY29uc29sZS5sb2cobm90aWZzTGlzdFF1ZXJ5KVxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdFF1ZXJ5ID0gYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIC8vICAgICBxdWVyeTogTElTVF9PRl9OT1RJRklDQVRJT05TLFxyXG4gICAgLy8gICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbnM6IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQpfVxyXG4gICAgLy8gfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcblxyXG4gICAgY29uc3QgW3NlbnRGaWx0ZXIsIHNldFNlbnRGaWx0ZXJdID0gdXNlU3RhdGUoJ3RvIHlvdScpXHJcbiAgICBjb25zdCBbc2hvd1NGREQsIHNldFNob3dTRkREXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3N0YXR1c0ZpbHRlciwgc2V0U3RhdHVzRmlsdGVyXSA9IHVzZVN0YXRlKCdwZW5kaW5nJylcclxuICAgIGNvbnN0IFtzaG93U3RhdHVzREQsIHNldFNob3dTdGF0dXNERF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBjb25zdCBub3RpZnNMaXN0Q29uZGl0aW9ucyA9IChxdWVyeSwgcmVkdWNlcikgPT4ge1xyXG4gICAgLy8gICAgIGlmICghcXVlcnkpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgLy8gICAgIGlmIChyZWR1Y2VyLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAvLyAgICAgaWYgKHJlZHVjZXJbMF0udXNlclRvKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChxdWVyeS5faWQgPT09IHJlZHVjZXJbMF0uX2lkICkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBxdWVyeVxyXG4gICAgLy8gfVxyXG4gICAgXHJcblxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdCA9IG5vdGlmc0xpc3RDb25kaXRpb25zKG5vdGlmc0xpc3RRdWVyeS5kYXRhLmxpc3RPZk5vdGlmaWNhdGlvbnMsIHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMpXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAobm90aWZzTGlzdCkge1xyXG4gICAgLy8gICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobm90aWZzTGlzdClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbbm90aWZzTGlzdCwgcHJvcHMsIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uc10pXHJcblxyXG4gICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9uc1swXS51c2VyVG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tncmlkQ29sdW1uOiAnMS8zJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc1dmgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIGNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbnRPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxPcHRpb25zID0gWydmcm9tIHlvdScsICd0byB5b3UnXVxyXG4gICAgICAgICAgICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VudEZpbHRlcihvcHRpb24pXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93U0ZERCghc2hvd1NGREQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFsbE9wdGlvbnMubWFwKG8gPT4gbyAhPT0gc2VudEZpbHRlciA/IDxkaXYgb25DbGljaz17KCkgPT4gb25PcHRpb25DbGljayhvKX0gY2xhc3NOYW1lPXtVVS5ORkRET3B0aW9ufSBrZXk9e2BTRkREJHtvfWB9PntvfTwvZGl2PiA6IG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbnRERCA9IHNob3dTRkREID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5Gcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GU3BsaXR0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbnRPcHRpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTogbnVsbFxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzT3B0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBbJ2FsbCcsICdhY2NlcHRlZCcsICdkZWNsaW5lZCcsICdwZW5kaW5nJywgJ21lc3NhZ2VzJ11cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uT3B0aW9uQ2xpY2sgPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdHVzRmlsdGVyKG9wdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93U3RhdHVzREQoIXNob3dTdGF0dXNERClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxPcHRpb25zLm1hcChvID0+IG8gIT09IHN0YXR1c0ZpbHRlciA/IDxkaXYgb25DbGljaz17KCkgPT4gb25PcHRpb25DbGljayhvKX0gY2xhc3NOYW1lPXtgJHtvfS1vcHRpb24gJHtVVS5ORkRET3B0aW9ufWB9IGtleT17YFN0YXR1c0REJHtvfWB9PntvfTwvZGl2PiA6IG51bGwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzREQgPSBzaG93U3RhdHVzREQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GRHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZTcGxpdHRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c09wdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk6IG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ub3RpZkZpbHRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GQ3JlYXRvckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1VVLk5GTGFiZWx9PnN0YXR1czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORk9wdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dTdGF0dXNERCghc2hvd1N0YXR1c0REKX0gY2xhc3NOYW1lPXtgJHtzdGF0dXNGaWx0ZXJ9LW9wdGlvbiAke1VVLk5GT3B0aW9ufWB9PntzdGF0dXNGaWx0ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzRER9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GQ3JlYXRvckNvbnRhaW5lcn0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtVVS5ORkxhYmVsfT5zZW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZPcHRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dTRkREKCFzaG93U0ZERCl9IGNsYXNzTmFtZT17VVUuTkZPcHRpb259PntzZW50RmlsdGVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VudEREfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0dXNDb25kaXRpb25zID0gKG5vdGlmKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1c0ZpbHRlciA9PT0gJ2FsbCcpIHJldHVybiB0cnVlXHJcbiAgICAgICAgY29uc3Qgbm90aWZTdGF0dXMgPSBub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgICdwZW5kaW5nJyA6IFxyXG4gICAgICAgICAgICBub3RpZi5hY2NlcHRlZCA/XHJcbiAgICAgICAgICAgIG5vdGlmLnBvc3QgP1xyXG4gICAgICAgICAgICAgICAgJ2FjY2VwdGVkJyA6ICdtZXNzYWdlcydcclxuICAgICAgICAgICAgOiAnZGVjbGluZWQnXHJcbiAgICAgICAgaWYgKHN0YXR1c0ZpbHRlciA9PT0gbm90aWZTdGF0dXMpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW50Q29uZGl0aW9ucyA9IChub3RpZikgPT4ge1xyXG4gICAgICAgIGlmIChzZW50RmlsdGVyID09PSAnYWxsJykgcmV0dXJuIHRydWVcclxuICAgICAgICBjb25zdCBzZW50U3RhdHVzID0gbm90aWYudXNlckZyb20udXNlcm5hbWUgPT09IHByb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lID9cclxuICAgICAgICAgICAgJ2Zyb20geW91JyA6ICd0byB5b3UnXHJcbiAgICAgICAgaWYgKHNlbnRGaWx0ZXIgPT09IHNlbnRTdGF0dXMpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXNDb25kaXRpb25zKG4pICYmIHNlbnRDb25kaXRpb25zKG4pKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxOb3RpZiBub3RpZj17bn0ga2V5PXtgVU4ke24uX2lkfWB9Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH0pLnJldmVyc2UoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJVdGlsLW5vdGlmXCI+XHJcbiAgICAgICAgICAgIDxGaWx0ZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzEwcHgnfX0gLz5cclxuICAgICAgICAgICAge3Nob3dOb3RpZmljYXRpb25zfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTBweCd9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVXNlck5vdGlmTGlzdCkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBMSVNUX09GX1BPU1RTIH0gZnJvbSAnLi4vLi4vLi4vc3JjL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXJTUCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgUG9zdFNtYWxsIGZyb20gJy4uLy4uL3Bvc3QvUG9zdFNtYWxsJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9Mb2FkaW5nJ1xyXG5cclxuXHJcbmNvbnN0IFVzZXJTUCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaWRfbGlzdCA9IHByb3BzLmN1cnJlbnRVc2VyLnNhdmVkUG9zdHMubWFwKHAgPT4gcC5faWQpXHJcbiAgICBjb25zdCBwb3N0TGlzdFF1ZXJ5ID0gdXNlUXVlcnkoTElTVF9PRl9QT1NUUywge1xyXG4gICAgICAgIHZhcmlhYmxlczoge2lkX2xpc3R9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgcXVlcnlDb25kaXRpb25zID0gKHF1ZXJ5LCByZWR1Y2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFxdWVyeSkgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAoIXF1ZXJ5LmdldExpc3RPZlBvc3RzKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmICghcmVkdWNlcikgcmV0dXJuIHF1ZXJ5LmdldExpc3RPZlBvc3RzXHJcbiAgICAgICAgaWYgKHJlZHVjZXIgJiYgcmVkdWNlci5sZW5ndGggPiAwICYmICFyZWR1Y2VyWzBdLnRpdGxlKSByZXR1cm4gcXVlcnkuZ2V0TGlzdE9mUG9zdHNcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc3RMaXN0ID0gcXVlcnlDb25kaXRpb25zKHBvc3RMaXN0UXVlcnkuZGF0YSwgcHJvcHMuY3VycmVudFVzZXIuc2F2ZWRQb3N0cylcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBpZiAocG9zdExpc3QpIHtcclxuICAgICAgICAgICAgbGV0IG5ld1Bvc3RMaXN0ID0gW11cclxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmQgaW4gcG9zdExpc3QpIHtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc3RMaXN0LnB1c2goey4uLnBvc3RMaXN0W2luZF0sIF9pZDogaWRfbGlzdFtpbmRdfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlclNQKG5ld1Bvc3RMaXN0KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwb3N0TGlzdCwgcHJvcHMuc2V0Q3VycmVudFVzZXJTUCwgcHJvcHMsIGlkX2xpc3RdKVxyXG5cclxuICAgIGlmIChwcm9wcy5jdXJyZW50VXNlci5zYXZlZFBvc3RzLmxlbmd0aCA+IDAgJiYgIXByb3BzLmN1cnJlbnRVc2VyLnNhdmVkUG9zdHNbMF0udXNlcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tncmlkQ29sdW1uOiAnMS8zJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzV2aCd9fS8+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZyBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFsbFNQID0gcHJvcHMuY3VycmVudFVzZXIuc2F2ZWRQb3N0cy5tYXAocCA9PiA8UG9zdFNtYWxsIHBvc3Q9e3B9IHVzZXI9e3AudXNlci51c2VybmFtZX0gdHlwZT1cInNhdmVkXCIga2V5PXtgU1Ake3AudGl0bGV9YH0gLz4pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxMHB4J319IC8+XHJcbiAgICAgICAgICAgIHthbGxTUH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIHsgc2V0Q3VycmVudFVzZXJTUCB9XHJcbikoVXNlclNQKSIsImltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwibmV4dC1hcG9sbG9cIlxyXG4vLyBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcImFwb2xsby1ib29zdFwiXHJcblxyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50J1xyXG5pbXBvcnQgeyBjcmVhdGVIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnXHJcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknXHJcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0J1xyXG4vLyBodHRwczovL3VuaWxvdXMtYmFjay1lbmQtZGV2Lmhlcm9rdWFwcC5jb20vZ3JhcGhxbFxyXG4vLyBodHRwczovL3Byb2plY3R1LWJhY2stZW5kLTIwMjAuaGVyb2t1YXBwLmNvbS9ncmFwaHFsXHJcbi8vIGh0dHBzOi8vdW5pbG91cy1iYWNrLWVuZC1uZXh0anMuaGVyb2t1YXBwLmNvbS9ncmFwaHFsXHJcblxyXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcclxuICB1cmk6ICdodHRwczovL3VuaWxvdXMtYmFjay1lbmQtbmV4dGpzLmhlcm9rdWFwcC5jb20vZ3JhcGhxbCcsXHJcbn0pXHJcblxyXG5jb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKF8sIHsgaGVhZGVycyB9KSA9PiB7XHJcbiAgbGV0IHRva2VuID0gbnVsbFxyXG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBiZXJ5U2VjcmV0ICR7dG9rZW59YCA6IG51bGwsXHJcbiAgICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcclxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxufSlcclxuXHJcbi8vIGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4vLyAgIHVyaTogJ2h0dHBzOi8vcHJvamVjdHUtYmFjay1lbmQtMjAyMC5oZXJva3VhcHAuY29tL2dyYXBocWwnLFxyXG4vLyAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4vLyAgIHNzck1vZGU6IHRydWVcclxuLy8gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oYXBvbGxvQ2xpZW50KVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IE1BS0VfTk9USUZJQ0FUSU9OLCBBU0tfUVVFU1RJT04sIFNBVkVfUE9TVCB9IGZyb20gJy4uL3NyYy9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgR0VUX1BPU1RfVElUTEVTLCBGSU5EX1BPU1QsIFFfQU5EX0FfTk9USUZTIH0gZnJvbSAnLi4vc3JjL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnXHJcbmltcG9ydCBwcFN0eWxlIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9uZXdQb3N0UGFnZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RQYWdlL1Bvc3RJbWFnZXMnXHJcbmltcG9ydCBQb3N0TGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0UGFnZS9Qb3N0TGlua3MnXHJcbmltcG9ydCBQb3N0UWFuZEEgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0UGFnZS9Qb3N0UWFuZEEnXHJcbmltcG9ydCBJbnB1dEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtZmllbGQvSW5wdXRIZWFkZXInXHJcbmltcG9ydCBGb3JtQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dC1maWVsZC9Gb3JtQ29udGFpbmVyJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlclNQIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IHsgdXNlRmllbGQsIHRyaWdnZXJBbGVydCwgcGFsbGV0dGVHZW5lcmF0b3IgfSBmcm9tICcuLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge3NldFRva2VufSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IGFwb2xsbywge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vbGliL2Fwb2xsbydcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgUG9zdFBhZ2UgPSB3aXRoUm91dGVyKChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRQb3N0LCBzZXRDdXJyZW50UG9zdF0gPSB1c2VTdGF0ZShwcm9wcy5wb3N0KVxyXG4gICAgY29uc3QgW3NraWxsRXhwYW5kZWQsIHNldFNraWxsRXhwYW5kZWRdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gICAgY29uc3QgbWVzc2FnZSA9IHVzZUZpZWxkKCd0ZXh0JylcclxuICAgIGNvbnN0IG9uSm9pbkVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5tZXNzYWdlLmluY2x1ZGVzKCdpcyBsb25nZXIgdGhhbiB0aGUgbWF4aW11bSBhbGxvd2VkIGxlbmd0aCcpKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBtZXNzYWdlJDogbWVzc2FnZSBvZiAke21lc3NhZ2UuZmllbGRzLnZhbHVlLmxlbmd0aH0gY2hhcmFjdGVycyBleGNlZWRlZCB0aGUgbWF4aW11bSBvZiA4MDAgY2hhcmFjdGVycy5gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvblF1ZXN0aW9uRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLm1lc3NhZ2UuaW5jbHVkZXMoJ2lzIGxvbmdlciB0aGFuIHRoZSBtYXhpbXVtIGFsbG93ZWQgbGVuZ3RoJykpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgYHF1ZXN0aW9uJDogcXVlc3Rpb24gb2YgJHtxdWVzdGlvbi5maWVsZHMudmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzIGV4Y2VlZGVkIHRoZSBtYXhpbXVtIG9mIDgwMCBjaGFyYWN0ZXJzLmAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uRm9sbG93RXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2ZvbGxvd011dGF0aW9uXSA9IHVzZU11dGF0aW9uKFNBVkVfUE9TVCwge1xyXG4gICAgICAgIG9uRXJyb3I6IG9uRm9sbG93RXJyb3JcclxuICAgIH0pXHJcbiAgICBjb25zdCBbbWFrZU5vdGlmaWNhdGlvbl0gPSB1c2VNdXRhdGlvbihNQUtFX05PVElGSUNBVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IG9uSm9pbkVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Fza1F1ZXN0aW9uXSA9IHVzZU11dGF0aW9uKEFTS19RVUVTVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IG9uUXVlc3Rpb25FcnJvclxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb2xsb3cgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy50b2tlbikge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnc2lnbiBpbiQ6IG11c3QgYmUgc2lnbmVkIGluIHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24nLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm9sbG93TXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHByb3BzLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICAgICAgICAgIHBvc3RJZDogY3VycmVudFBvc3QuX2lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyU1AocHJvcHMuY3VycmVudFVzZXIuc2F2ZWRQb3N0cy5jb25jYXQoY3VycmVudFBvc3QpKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCAnZm9sbG93ZWQkOiB5b3UgYXJlIG5vdyBmb2xsb3dpbmcgdGhpcyBwb3N0JywgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBxYW5kYVF1ZXJ5ID0gdXNlUXVlcnkoUV9BTkRfQV9OT1RJRlMsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHt0aXRsZTogZGVjb2RlVVJJQ29tcG9uZW50KHByb3BzLnBvc3RUaXRsZSl9XHJcbiAgICB9KVxyXG4gICAgLy8gY29uc3QgcG9zdFF1ZXJ5ID0gdXNlUXVlcnkoRklORF9QT1NULCB7XHJcbiAgICAvLyAgICAgdmFyaWFibGVzOiB7dGl0bGU6IGRlY29kZVVSSUNvbXBvbmVudChwcm9wcy5wb3N0VGl0bGUpfVxyXG4gICAgLy8gfSlcclxuICAgIGNvbnN0IHFhbmRhQ2hhbmdlQ29uZGl0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHFhbmRhUXVlcnkuZGF0YVxyXG4gICAgICAgIGNvbnN0IHJlZHVjZXIgPSBjdXJyZW50UG9zdFxyXG4gICAgICAgIGlmICghcXVlcnkpIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKCFxdWVyeS5zZWFyY2hBbnN3ZXJlZFFUb1Bvc3QpIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKCFyZWR1Y2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmIChyZWR1Y2VyLnFhbmRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIHJldHVybiBxdWVyeS5zZWFyY2hBbnN3ZXJlZFFUb1Bvc3RcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IHBvc3RDaGFuZ2VDb25kaXRpb25zID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5ID0gcG9zdFF1ZXJ5LmRhdGFcclxuICAgIC8vICAgICBjb25zdCByZWR1Y2VyID0gY3VycmVudFBvc3RcclxuICAgIC8vICAgICBpZiAoIXF1ZXJ5KSByZXR1cm4gbnVsbFxyXG4gICAgLy8gICAgIGlmICghcXVlcnkuZmluZFBvc3QpIHJldHVybiBudWxsXHJcbiAgICAvLyAgICAgaWYgKHJlZHVjZXIpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHJlZHVjZXIudGl0bGUgPT09IHF1ZXJ5LmZpbmRQb3N0LnRpdGxlKSByZXR1cm4gbnVsbFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gcXVlcnkuZmluZFBvc3RcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IHFhbmRhID0gcWFuZGFDaGFuZ2VDb25kaXRpb25zKClcclxuICAgIC8vIGNvbnN0IHBvc3QgPSBwb3N0Q2hhbmdlQ29uZGl0aW9ucygpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChxYW5kYSkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50UG9zdCh7Li4uY3VycmVudFBvc3QsIHFhbmRhfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHBvc3QpIHtcclxuICAgICAgICAvLyAgICAgc2V0Q3VycmVudFBvc3QocG9zdClcclxuICAgICAgICAvLyB9XHJcbiAgICB9LCBbcWFuZGEsIHNldEN1cnJlbnRQb3N0LCBjdXJyZW50UG9zdF0pXHJcbiAgICBpZiAoIWN1cnJlbnRQb3N0KSB7XHJcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsZWFuZWRUaW1lID0gbmV3IERhdGUoTnVtYmVyKGN1cnJlbnRQb3N0LnRpbWUpKVxyXG4gICAgY2xlYW5lZFRpbWUgPSBjbGVhbmVkVGltZS50b1N0cmluZygpLnNwbGl0KCcgJylcclxuICAgIC8vIGNsZWFuZWRUaW1lID0gY2xlYW5lZFRpbWUuc2xpY2UoMSw0KS5qb2luKCcgJykgKyAnICcgKyBjbGVhbmVkVGltZVs0XS5zcGxpdCgnOicpLnNsaWNlKDAsMikuam9pbignOicpXHJcbiAgICBjbGVhbmVkVGltZSA9IGNsZWFuZWRUaW1lLnNsaWNlKDEsMykuam9pbignICcpICsgJywgJyArIGNsZWFuZWRUaW1lWzNdXHJcblxyXG4gICAgbGV0IHFhbmRhTGlzdCA9IGN1cnJlbnRQb3N0LnFhbmRhID8gY3VycmVudFBvc3QucWFuZGEubWFwKGkgPT4gPFBvc3RRYW5kQSBxYW5kYT17aX0ga2V5PXtgUWFuZEEke2kucXVlc3Rpb259YH0gLz4pIDogPExvYWRpbmcgLz5cclxuICAgIHFhbmRhTGlzdCA9IHFhbmRhTGlzdC5sZW5ndGggPyBxYW5kYUxpc3QgOiA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5xYW5kYVRleHR9Pm5vIHF1ZXN0aW9uIGFuZCBhbnN3ZXIgcGFpcnMgeWV0PC9kaXY+XHJcbiAgICBjb25zdCBza2lsbHNIVE1MID0gW11cclxuICAgIGNvbnN0IHF1ZXN0aW9uU3R5bGUgPSBza2lsbEV4cGFuZGVkID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7ZGlzcGxheTogJ2Jsb2NrJ31cclxuICAgIGNvbnN0IGhhbmRsZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChwcm9wb3NlZENvbnRyaWJ1dGlvbikgPT4ge1xyXG4gICAgICAgIGlmICghcHJvcHMuY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgYHNpZ24gaW4kOiBtdXN0IGJlIHNpZ25lZCBpbiB0byBwZXJmb3JtIHRoaXMgYWN0aW9uYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWVzc2FnZS5maWVsZHMudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBtZXNzYWdlJDogbWVzc2FnZSBmaWVsZCBpcyByZXF1aXJlZGAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlTm90aWZpY2F0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRnJvbUlkOiBwcm9wcy5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICB1c2VyVG9JZDogY3VycmVudFBvc3QudXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RJZDogY3VycmVudFBvc3QuX2lkLFxyXG4gICAgICAgICAgICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBzZXRTa2lsbEV4cGFuZGVkKG51bGwpXHJcbiAgICAgICAgICAgIG1lc3NhZ2UucmVzZXQoKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCBgc2VudCQ6IChjaGVjayB5b3VyIGFuc3dlcmVkIG5vdGlmaWNhdGlvbnMgZm9yIHRoZSByZXNwb25zZSkgcmVxdWVzdCBoYXMgYmVlbiBzZW50IHRvICR7Y3VycmVudFBvc3QudXNlci51c2VybmFtZX1gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGlucyBpbiBjdXJyZW50UG9zdC5za2lsbE5hbWVzKSB7XHJcbiAgICAgICAgY29uc3Qgc2tpbGxOYW1lID0gY3VycmVudFBvc3Quc2tpbGxOYW1lc1tpbnNdXHJcbiAgICAgICAgY29uc3Qgc2tpbGxGaWxsID0gY3VycmVudFBvc3Quc2tpbGxGaWxsc1tpbnNdXHJcbiAgICAgICAgY29uc3Qgc2tpbGxDYXAgPSBjdXJyZW50UG9zdC5za2lsbENhcGFjaXRpZXNbaW5zXVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VTdHlsZSA9IHNraWxsRXhwYW5kZWQgPT09IHNraWxsTmFtZSA/IHtkaXNwbGF5OiAnYmxvY2snfSA6IHtkaXNwbGF5OiAnbm9uZSd9XHJcbiAgICAgICAgY29uc3QgYnV0dG9uVG9TaG93biA9IHNraWxsRXhwYW5kZWQgPT09IHNraWxsTmFtZSA/XHJcbiAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBzZXRTa2lsbEV4cGFuZGVkKG51bGwpfSBjbGFzc05hbWU9e3BwU3R5bGUuUFBTQnV0dG9uRXhpdH0+WDwvaDQ+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgc2tpbGxGaWxsIDwgc2tpbGxDYXAgP1xyXG4gICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IHNldFNraWxsRXhwYW5kZWQoc2tpbGxOYW1lKX0gY2xhc3NOYW1lPXtwcFN0eWxlLlBQU0J1dHRvbn0+am9pbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtwcFN0eWxlLlBQU0J1dHRvbkRpc2FibGVkfT5qb2luPC9oND5cclxuXHJcbiAgICAgICAgY29uc3Qgc2tpbGxQcm9wb3NpdGlvbiA9IEFycmF5KGN1cnJlbnRQb3N0LnNraWxsTmFtZXMubGVuZ3RoKS5maWxsKDApXHJcbiAgICAgICAgc2tpbGxQcm9wb3NpdGlvbltpbnNdID0gMVxyXG4gICAgICAgIHNraWxsc0hUTUwucHVzaCggXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLlBQU1NraWxsfSBrZXk9e2BQUFNTJHtza2lsbE5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNEaXZpc2lvbn0gLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cHBTdHlsZS5QUFNTa2lsbE5hbWV9Pntza2lsbE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBTU2tpbGxTZWNvbmRhcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cHBTdHlsZS5QUFNTa2lsbEluZm99Pntza2lsbEZpbGx9L3tza2lsbENhcH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAge2J1dHRvblRvU2hvd259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLlBQU1NraWxsRm9ybX0gc3R5bGU9e21lc3NhZ2VTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBTVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJQUFMtbWVzc2FnZVwiIGluZm89e2ZhbHNlfSB0aXRsZT1cIm1lc3NhZ2VcIiBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNJbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e3BwU3R5bGUuUFBTSW5wdXR9IGlkPVwiUFBTLW1lc3NhZ2VcIiB7Li4ubWVzc2FnZS5maWVsZHN9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBDU3VibWl0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgezxoNCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOb3RpZmljYXRpb24oc2tpbGxQcm9wb3NpdGlvbil9IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNCQnV0dG9ufSBzdHlsZT17e2JvcmRlckNvbG9yOiBjdXJyZW50UG9zdC5jb2xvcn19PmpvaW48L2g0Pn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUXVlc3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBgc2lnbiBpbiQ6IG11c3QgYmUgc2lnbmVkIGluIHRvIHBlcmZvcm0gdGhpcyBhY3Rpb25gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFxdWVzdGlvbi5maWVsZHMudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBxdWVzdGlvbiQ6IHF1ZXN0aW9uIGZpZWxkIGlzIHJlcXVpcmVkYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFza1F1ZXN0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRnJvbUlkOiBwcm9wcy5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICB1c2VyVG9JZDogY3VycmVudFBvc3QudXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ6IGN1cnJlbnRQb3N0Ll9pZCxcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbi5maWVsZHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBxdWVzdGlvbi5yZXNldCgpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsIGBzZW50JDogKGNoZWNrIHlvdXIgYW5zd2VyZWQgbm90aWZpY2F0aW9ucyBmb3IgdGhlIHJlc3BvbnNlKSBxdWVzdGlvbiBoYXMgYmVlbiBzZW50IHRvICR7Y3VycmVudFBvc3QudXNlci51c2VybmFtZX1gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYWxsZXR0ZSA9IHBhbGxldHRlR2VuZXJhdG9yKGN1cnJlbnRQb3N0LmNvbG9yKS5jb2xvclBhbGxldHRlXHJcblxyXG4gICAgY29uc3QgdGVhbUhUTUwgPSBjdXJyZW50UG9zdC50ZWFtID8gY3VycmVudFBvc3QudGVhbS5tYXAodW4gPT5cclxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvdXNlcm5hbWVcIiBhcz17YC91c2VyLyR7dW59YH0gY2xhc3NOYW1lPXtgJHtwcFN0eWxlLlBQQ1VzZXJDb250YWluZXJ9IG5ldXRyYWxpemUtbGlua2B9IGtleT17YFBUJHt1bn1gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17cHBTdHlsZS5QUENVc2VySWNvbn0gc3JjPScvc3ZnL3VzZXJCLnN2ZycgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJOTVwiPnt1bn08L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgXHJcbiAgICApOiBudWxsXHJcblxyXG4gICAgY29uc3QgSG9tZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuaG9tZU9wdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bHRzL1tzZWFyY2hRdWVyeV1cIiBhcz1cIi9yZXN1bHRzL2FsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7cHBTdHlsZS5ob21lT3B0aW9ufSBuZXV0cmFsaXplLWxpbmtgfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3ZnL3NlYXJjaFdXLnN2ZycgY2xhc3NOYW1lPXtwcFN0eWxlLmhvbWVPcHRpb25JY29ufSBhbHQ9XCJzZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtwcFN0eWxlLmhvbWVPcHRpb25UZXh0fT5icm93c2UgYWxsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3Rmb3JtcGFnZS9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3BwU3R5bGUuaG9tZU9wdGlvbn0gbmV1dHJhbGl6ZS1saW5rYH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdmcvcGx1c1cuc3ZnJyBjbGFzc05hbWU9e3BwU3R5bGUuaG9tZU9wdGlvbkljb259IGFsdD1cImFkZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3BwU3R5bGUuaG9tZU9wdGlvblRleHR9PmFkZCBwcm9qZWN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL3Y3dkZjOVVcIiBjbGFzc05hbWU9e2Ake3BwU3R5bGUuaG9tZU9wdGlvbn0gJHtwcFN0eWxlLmhvbWVPcHRpb25IaWdobGlnaHR9IG5ldXRyYWxpemUtbGlua2B9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzcyODlEQSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N2Zy93ZWJzaXRlcy9kaXNjb3JkLnN2ZycgY2xhc3NOYW1lPXtwcFN0eWxlLmhvbWVPcHRpb25JY29ufSBhbHQ9XCJEaXNjb3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtwcFN0eWxlLmhvbWVPcHRpb25UZXh0fT5jb21tdW5pdHkgZGlzY29yZDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNb2RpZmllZERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlZERpcyA9IGN1cnJlbnRQb3N0LmRlc2NyaXB0aW9uLnNwbGl0KCcgJylcclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gc3BhY2VkRGlzKSB7XHJcbiAgICAgICAgICAgIGlmIChzcGFjZWREaXNbaV0uaW5jbHVkZXMoJ2h0dHBzOi8vJykpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlZERpc1tpXSA9IGA8YSBocmVmPVwiJHtzcGFjZWREaXNbaV19XCIgY2xhc3M9XCJwLWxpbmsgbmV1dHJhbGl6ZS1saW5rXCI+JHtzcGFjZWREaXNbaV19PC9hPmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BhY2VkRGlzW2ldLmluY2x1ZGVzKCdodHRwOi8vJykpIHtcclxuICAgICAgICAgICAgICAgIHNwYWNlZERpc1tpXSA9IGA8YSBocmVmPVwiJHtzcGFjZWREaXNbaV19XCIgY2xhc3M9XCJwLWxpbmsgbmV1dHJhbGl6ZS1saW5rXCI+JHtzcGFjZWREaXNbaV19PC9hPmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaW5hbERpcyA9IHNwYWNlZERpcy5qb2luKCcgJylcclxuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPXtwcFN0eWxlLlBQQ0Rlc2NyaXB0aW9ufSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZmluYWxEaXN9fSAvPlxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2tpbGxDYXAgPSBjdXJyZW50UG9zdC5za2lsbENhcGFjaXRpZXMucmVkdWNlKChuLCB0KSA9PiB0ICsgbiwgMClcclxuICAgIGNvbnN0IHNraWxsRmlsbCA9IGN1cnJlbnRQb3N0LnNraWxsRmlsbHMucmVkdWNlKChuLCB0KSA9PiB0ICsgbiwgMClcclxuICAgIGNvbnN0IHRpdGxlS2V5d29yZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gY3VycmVudFBvc3QudGl0bGVcclxuICAgICAgICB0aXRsZSA9IHRpdGxlLnNwbGl0KCcgJylcclxuICAgICAgICBsZXQga2V5d29yZHMgPSB0aXRsZS5tYXAodyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3LnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgPT09IHcuc2xpY2UoMCwgMSkgJiYgdy5zbGljZSgwLCAxKS50b0xvd2VyQ2FzZSgpID09PSB3LnNsaWNlKDAsIDEpKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAody5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpID09PSB3LnNsaWNlKDAsIDEpKSByZXR1cm4gdyArICcsJ1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAga2V5d29yZHMgPSBrZXl3b3Jkcy5sZW5ndGggPyBrZXl3b3Jkcy5qb2luKCcgJykgOiB0aXRsZVswXSArICcsICdcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ga2V5d29yZHNcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gPEhlbG1ldD5cclxuICAgIC8vICAgICA8dGl0bGU+e2N1cnJlbnRQb3N0LnRpdGxlfTwvdGl0bGU+XHJcbiAgICAvLyAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9e2N1cnJlbnRQb3N0LnVzZXIudXNlcm5hbWV9IC8+XHJcbiAgICAvLyAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YEpvaW4gdGhlIHByb2plY3QsIGJlIHBhcnQgb2YgXCIke2N1cnJlbnRQb3N0LnRpdGxlfVwiIHRlYW0hIFNvIGZhciAke3NraWxsRmlsbH0gYXdlc29tZSBwZW9wbGUgaGF2ZSBqb2luZWQsIHRoZXJlIGFyZSBvbmx5ICR7c2tpbGxDYXAgLSBza2lsbEZpbGx9IHNsb3RzIGxlZnQuYH0gLz5cclxuICAgIC8vICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtgJHt0aXRsZUtleXdvcmRzKCl9IGJ1aWxkLCB0ZWFtYH0gLz5cclxuICAgIC8vIDwvSGVsbWV0PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Vbmlsb3VzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiVW5pbG91c1wiIGtleT1cInRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiU2hhcmUgYSBwcm9qZWN0LCBidWlsZCBhIHRlYW0sIG1ha2UgaXQgYXdlc29tZSFcIiBrZXk9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJVbmlsb3VzXCIga2V5PVwidGl0bGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiU2hhcmUgYSBwcm9qZWN0LCBidWlsZCBhIHRlYW0sIG1ha2UgaXQgYXdlc29tZSFcIiBrZXk9XCJkZXNjcmlwdGlvblwiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5wb3N0UGFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIb21lQ29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3BwU3R5bGUuUFBDVGl0bGV9PntjdXJyZW50UG9zdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLlBQQ1N1YkhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChjdXJyZW50UG9zdC51c2VyLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3BwU3R5bGUuUFBDVXNlckNvbnRhaW5lcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3BwU3R5bGUuUFBDVXNlckljb259IHNyYz0nL3N2Zy91c2VyQi5zdmcnIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIk5NXCI+e2N1cnJlbnRQb3N0LnVzZXIudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cHBTdHlsZS5QUENUaW1lfT57Y2xlYW5lZFRpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RpZmllZERlc2NyaXB0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RJbWFnZXMgaW1hZ2VMaW5rcz17Y3VycmVudFBvc3QuaW1hZ2VMaW5rc30gY29sb3I9e2N1cnJlbnRQb3N0LmNvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0TGlua3MgcmVmZXJlbmNlTGlua3M9e2N1cnJlbnRQb3N0LnJlZmVyZW5jZUxpbmtzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3BwU3R5bGUuUFBDVGl0bGV9PlEgYW5kIEE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcFN0eWxlLlBQQ0FsbFFhbmRhQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3FhbmRhTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtwcFN0eWxlLlBQQ1RpdGxlfT50ZWFtPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS50ZWFtSW5mb30+e3RlYW1IVE1MLmxlbmd0aH0gdGVhbSBtZW1iZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBDVGVhbUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZWFtSFRNTH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250YWluZXIgcGFsbGV0dGU9e3BhbGxldHRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3BwU3R5bGUuUFBTRm9sbG93SGVhZGVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlRm9sbG93KCl9IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNGb2xsb3dIZWFkZXJ9IHN0eWxlPXt7Ym9yZGVyVG9wOiAnMnB4IHNvbGlkIGN1cnJlbnRQb3N0LmNvbG9yJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3BwU3R5bGUuUFBDVXNlckljb259IGZpbGw9e2N1cnJlbnRQb3N0LmNvbG9yfSB2aWV3Qm94PVwiMCAtMjggNTEyLjAwMDAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQ3MS4zODI4MTIgNDQuNTc4MTI1Yy0yNi41MDM5MDYtMjguNzQ2MDk0LTYyLjg3MTA5My00NC41NzgxMjUtMTAyLjQxMDE1Ni00NC41NzgxMjUtMjkuNTU0Njg3IDAtNTYuNjIxMDk0IDkuMzQzNzUtODAuNDQ5MjE4IDI3Ljc2OTUzMS0xMi4wMjM0MzggOS4zMDA3ODEtMjIuOTE3OTY5IDIwLjY3OTY4OC0zMi41MjM0MzggMzMuOTYwOTM4LTkuNjAxNTYyLTEzLjI3NzM0NC0yMC41LTI0LjY2MDE1Ny0zMi41MjczNDQtMzMuOTYwOTM4LTIzLjgyNDIxOC0xOC40MjU3ODEtNTAuODkwNjI1LTI3Ljc2OTUzMS04MC40NDUzMTItMjcuNzY5NTMxLTM5LjUzOTA2MyAwLTc1LjkxMDE1NiAxNS44MzIwMzEtMTAyLjQxNDA2MyA0NC41NzgxMjUtMjYuMTg3NSAyOC40MTAxNTYtNDAuNjEzMjgxIDY3LjIyMjY1Ni00MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MSAxNi4xMzY3MTkgODIuOTM3NSA1MC43ODEyNSAxMjQuNzQyMTg3IDMwLjk5MjE4OCAzNy4zOTQ1MzEgNzUuNTM1MTU2IDc1LjM1NTQ2OSAxMjcuMTE3MTg4IDExOS4zMTI1IDE3LjYxMzI4MSAxNS4wMTE3MTkgMzcuNTc4MTI0IDMyLjAyNzM0NCA1OC4zMDg1OTMgNTAuMTUyMzQ0IDUuNDc2NTYzIDQuNzk2ODc1IDEyLjUwMzkwNyA3LjQzNzUgMTkuNzkyOTY5IDcuNDM3NSA3LjI4NTE1NiAwIDE0LjMxNjQwNi0yLjY0MDYyNSAxOS43ODUxNTYtNy40Mjk2ODcgMjAuNzMwNDY5LTE4LjEyODkwNyA0MC43MDcwMzItMzUuMTUyMzQ0IDU4LjMyODEyNS01MC4xNzE4NzYgNTEuNTc0MjE5LTQzLjk0OTIxOCA5Ni4xMTcxODgtODEuOTA2MjUgMTI3LjEwOTM3NS0xMTkuMzA0Njg3IDM0LjY0NDUzMi00MS44MDA3ODEgNTAuNzc3MzQ0LTgxLjQzNzUgNTAuNzc3MzQ0LTEyNC43NDIxODcgMC00Mi4wNjY0MDctMTQuNDI1NzgxLTgwLjg3ODkwNy00MC42MTcxODgtMTA5LjI4OTA2M3ptMCAwXCIvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiTk1cIj5mb2xsb3c8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtza2lsbHNIVE1MfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3F1ZXN0aW9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHBTdHlsZS5QUFNEaXZpc2lvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBTVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiUFBTLXF1ZXN0aW9uXCIgaW5mbz17dHJ1ZX0gdGl0bGU9XCJxdWVzdGlvblwiIGNvbG9yPVwid2hpdGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5pZiBhbnN3ZXJlZCBpdCB3aWxsIGJlIHNob3duIG9uIHBvc3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBTSW5wdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17cHBTdHlsZS5QUFNJbnB1dH0gaWQ9XCJQUFMtcXVlc3Rpb25cIiB7Li4ucXVlc3Rpb24uZmllbGRzfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BwU3R5bGUuUFBDU3VibWl0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdWVzdGlvbigpfSBjbGFzc05hbWU9e3BwU3R5bGUuUFBTQnV0dG9ufSBzdHlsZT17e2JvcmRlckNvbG9yOiBjdXJyZW50UG9zdC5jb2xvcn19PmFzazwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufSlcclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vLyBcdHJldHVybiB7XHJcbi8vICAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4vLyAgICAgICAgIHRva2VuOiBzdGF0ZS50b2tlblxyXG4vLyBcdH1cclxuLy8gfVxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4vLyAgICAgbWFwU3RhdGVUb1Byb3BzLCBcclxuLy8gICAgIHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQsIHNldEN1cnJlbnRVc2VyU1AgfVxyXG4vLyApKFBvc3RQYWdlKVxyXG5cclxuUG9zdFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdFF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogRklORF9QT1NULFxyXG4gICAgICAgIHZhcmlhYmxlczoge3RpdGxlOiAnVW5pbG91cyd9IFxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICBjb25zb2xlLmxvZyhwb3N0UXVlcnkpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc3Q6IHBvc3RRdWVyeS5kYXRhLmZpbmRQb3N0LFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZixcclxuXHR9XHJcbn1cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0QWxlcnQsIGRpc3BhdGNoKSxcclxuICAgICAgICByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldFRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0VG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRDdXJyZW50VXNlclNQOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXJTUCwgZGlzcGF0Y2gpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShQb3N0UGFnZSkiLCJleHBvcnQgY29uc3Qgc2V0QWxlcnQgPSAoaW5mbykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQUxFUlQnLFxyXG4gICAgICAgICAgICBkYXRhOiBpbmZvXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0QWxlcnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1JFU0VUX0FMRVJUJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFsZXJ0Tm90aWYgPSAoc3RhdGUgPSB7Y29sb3I6IG51bGwsIHRleHRDb2xvcjogbnVsbCwgbWVzc2FnZTogbnVsbH0sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9BTEVSVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdSRVNFVF9BTEVSVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4ge2NvbG9yOiBudWxsLCB0ZXh0Q29sb3I6IG51bGwsIG1lc3NhZ2U6IG51bGx9XHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGVydE5vdGlmIiwiZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsXHJcbiAgICAgICAgICAgIGRhdGE6IHVzZXJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXJQb3N0cyA9IChwb3N0cykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfUE9TVFMnLFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0c1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlclNQID0gKHBvc3RzKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9TUCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3RzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyA9IChub3RpZmljYXRpb25zKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9OT1RJRklDQVRJT05TJyxcclxuICAgICAgICAgICAgZGF0YTogbm90aWZpY2F0aW9uc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQZW5kaW5nTm90aWZpY2F0aW9ucyA9IChhbXQpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX1BOJyxcclxuICAgICAgICAgICAgZGF0YTogYW10XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY3VycmVudFVzZXIgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfQ1VfUE4nOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwZW5kaW5nTm90aWZpY2F0aW9uczogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVUlJFTlRfVVNFUicgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdTRVRfQ1VfUE9TVFMnIDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9TUCcgOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNhdmVkUG9zdHM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9OT1RJRklDQVRJT05TJyA6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5vdGlmaWNhdGlvbnM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFVzZXIiLCJleHBvcnQgY29uc3Qgc2V0VG9rZW4gPSAodG9rZW4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ1NFVF9UT0tFTicsXHJcbiAgICAgICAgZGF0YTogdG9rZW5cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhclRva2VuID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnQ0xFQVJfVE9LRU4nXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCB0b2tlbiA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX1RPS0VOJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIGNhc2UgJ0NMRUFSX1RPS0VOJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRva2VuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgdHJpZ2dlckFsZXJ0ID0gKHR5cGUsIG1lc3NhZ2UsIHNldEFsZXJ0LCByZXNldEFsZXJ0KSA9PiB7XHJcbiAgICAvLyB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnc3VjY2VzczogYWxlcnQgYmFyIGlzIHdvcmtpbmcnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIGNvbnN0IGNsZWFuZWRNZXNzYWdlID0gPHAgc3R5bGU9e3ttYXJnaW46IDB9fT48c3Ryb25nPnttZXNzYWdlLnNwbGl0KCckOicpWzBdfTwvc3Ryb25nPjoge21lc3NhZ2Uuc3BsaXQoJyQ6JylbMV19PC9wPlxyXG4gICAgaWYgKHR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgIHNldEFsZXJ0KHtjb2xvcjogJ3JnYig1MiwxNjYsOTUpJywgdGV4dENvbG9yOiAnd2hpdGUnLCBtZXNzYWdlOiBjbGVhbmVkTWVzc2FnZX0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoe2NvbG9yOiAncmdiKDIyNiwxODQsNTkpJywgdGV4dENvbG9yOiAnd2hpdGUnLCBtZXNzYWdlOiBjbGVhbmVkTWVzc2FnZX0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ2RhbmdlcicpIHtcclxuICAgICAgICBzZXRBbGVydCh7Y29sb3I6ICdyZ2IoMjU0LDUyLDc3KScsIHRleHRDb2xvcjogJ3doaXRlJywgbWVzc2FnZTogY2xlYW5lZE1lc3NhZ2V9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2Vic2l0ZVN0YXRzID0gKHVybCkgPT4ge1xyXG4gICAgaWYgKHVybC5zcGxpdCgnLycpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2lucHV0LnN2ZycsIGNvbG9yOiAnIzQ4NDg0OCcsdGl0bGU6ICd1bmtub3duIHVybCd9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydCA9IHVybC5zcGxpdCgnLycpWzJdXHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3VuaWxvdXMnKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvbG9nby9sb2dvVy5zdmcnLCBjb2xvcjogJyMyODI4MjgnLCB0aXRsZTogJ1VuaWxvdXMnfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdkaXNjb3JkJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2Rpc2NvcmQuc3ZnJywgY29sb3I6ICcjNzI4OURBJywgdGl0bGU6ICdEaXNjb3JkJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygndHJlbGxvJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGUvdHJlbGxvLnN2ZycsIGNvbG9yOiAnIzAwNzlCRicsIHRpdGxlOiAnVHJlbGxvJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnd2hhdHNhcHAnKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvd2hhdHNhcHAuc3ZnJywgY29sb3I6ICcjMjVEMzY2JywgdGl0bGU6ICdXaGF0c0FwcCd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ21vbmRheScpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9iZ2FRWmM5LnBuZycsIGNvbG9yOiAnIzMzMzMzMycsIHRpdGxlOiAnTW9uZGF5J31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnc2xhY2snKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvc2xhY2suc3ZnJywgY29sb3I6ICcjNEExNTRCJywgdGl0bGU6ICdTbGFjayd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2xpbmtlZGluJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2xpbmtlZGluLnN2ZycsIGNvbG9yOiAncmdiKDQwLDEwMywxNzgpJywgdGl0bGU6ICdMaW5rZWRJbid9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2ZhY2Vib29rJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2ZhY2Vib29rLnN2ZycsIGNvbG9yOiAncmdiKDY2LDEwMywxNzgpJywgdGl0bGU6ICdGYWNlYm9vayd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2luZGVlZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGZ29oaXJlLXdlYnNpdGUuczMuYW1hem9uYXdzLmNvbSUyRmltZyUyRmludGVncmF0aW9uLWxvZ29zJTJGaW5kZWVkLWljb24uanBnJmY9MSZub2ZiPTEnLCBjb2xvcjogJyMyODI4MjgnLCB0aXRsZTogJ0luZGVlZCd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2dpdGh1YicpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9naXRIdWIuc3ZnJywgY29sb3I6ICcjMzMzJywgdGl0bGU6ICdHaXRIdWInfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtpY29uOiAnc3ZnL3dlYnNpdGVzL2ludGVybmV0LnN2ZycsIGNvbG9yOiAnIzI4MjgyOCcsdGl0bGU6ICd1bmtub3duIHVybCd9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGaWVsZCA9ICh0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBvbkNoYW5nZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhbGxldHRlR2VuZXJhdG9yID0gKHByaW1hcnlDb2xvcikgPT4ge1xyXG4gICAgY29uc3QgY29sb3IgPSBwcmltYXJ5Q29sb3JcclxuICAgIGNvbnN0IGNvbG9ycyA9IGNvbG9yLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcChjID0+IE51bWJlcihjKSlcclxuICAgIGNvbnN0IGhpZ2hlckNvbG9yID0gYHJnYigke2NvbG9ycy5tYXAoYyA9PiBjICsgMzApLmpvaW4oJywnKX0pYFxyXG4gICAgbGV0IGlzRGFyayA9ICgoY29sb3JzWzBdICsgY29sb3JzWzFdICsgY29sb3JzWzJdKSAvIDMpIDwgMTI3ID9cclxuICAgICAgICB0cnVlIDogZmFsc2VcclxuICAgIC8vIGNvbnN0IGlzRGFyayA9IGZhbHNlXHJcbiAgICBjb25zdCBjb2xvclBhbGxldHRlID0gaXNEYXJrID8gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICBoaWdoZXJDb2xvcixcclxuICAgICAgICAgICAgLy8gdXNlckljb246IHVzZXJJY29uVyxcclxuICAgICAgICAgICAgLy8gaGFuZHNoYWtlSWNvbjogaGFuZHNoYWtlSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHBsdXNJY29uOiBwbHVzSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHNoYXJlSWNvbjogc2hhcmVJY29uVyxcclxuICAgICAgICAgICAgLy8gc2hyaW5rSWNvbjogc2hyaW5rVyxcclxuICAgICAgICAgICAgLy8gY29sb3JlZDoge1xyXG4gICAgICAgICAgICAvLyAgICAgaGVhcnRJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjggNTEyLjAwMDAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQ3MS4zODI4MTIgNDQuNTc4MTI1Yy0yNi41MDM5MDYtMjguNzQ2MDk0LTYyLjg3MTA5My00NC41NzgxMjUtMTAyLjQxMDE1Ni00NC41NzgxMjUtMjkuNTU0Njg3IDAtNTYuNjIxMDk0IDkuMzQzNzUtODAuNDQ5MjE4IDI3Ljc2OTUzMS0xMi4wMjM0MzggOS4zMDA3ODEtMjIuOTE3OTY5IDIwLjY3OTY4OC0zMi41MjM0MzggMzMuOTYwOTM4LTkuNjAxNTYyLTEzLjI3NzM0NC0yMC41LTI0LjY2MDE1Ny0zMi41MjczNDQtMzMuOTYwOTM4LTIzLjgyNDIxOC0xOC40MjU3ODEtNTAuODkwNjI1LTI3Ljc2OTUzMS04MC40NDUzMTItMjcuNzY5NTMxLTM5LjUzOTA2MyAwLTc1LjkxMDE1NiAxNS44MzIwMzEtMTAyLjQxNDA2MyA0NC41NzgxMjUtMjYuMTg3NSAyOC40MTAxNTYtNDAuNjEzMjgxIDY3LjIyMjY1Ni00MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MSAxNi4xMzY3MTkgODIuOTM3NSA1MC43ODEyNSAxMjQuNzQyMTg3IDMwLjk5MjE4OCAzNy4zOTQ1MzEgNzUuNTM1MTU2IDc1LjM1NTQ2OSAxMjcuMTE3MTg4IDExOS4zMTI1IDE3LjYxMzI4MSAxNS4wMTE3MTkgMzcuNTc4MTI0IDMyLjAyNzM0NCA1OC4zMDg1OTMgNTAuMTUyMzQ0IDUuNDc2NTYzIDQuNzk2ODc1IDEyLjUwMzkwNyA3LjQzNzUgMTkuNzkyOTY5IDcuNDM3NSA3LjI4NTE1NiAwIDE0LjMxNjQwNi0yLjY0MDYyNSAxOS43ODUxNTYtNy40Mjk2ODcgMjAuNzMwNDY5LTE4LjEyODkwNyA0MC43MDcwMzItMzUuMTUyMzQ0IDU4LjMyODEyNS01MC4xNzE4NzYgNTEuNTc0MjE5LTQzLjk0OTIxOCA5Ni4xMTcxODgtODEuOTA2MjUgMTI3LjEwOTM3NS0xMTkuMzA0Njg3IDM0LjY0NDUzMi00MS44MDA3ODEgNTAuNzc3MzQ0LTgxLjQzNzUgNTAuNzc3MzQ0LTEyNC43NDIxODcgMC00Mi4wNjY0MDctMTQuNDI1NzgxLTgwLjg3ODkwNy00MC42MTcxODgtMTA5LjI4OTA2M3ptMCAwXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gICAgIHNoYXJlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gdmlld0JveD1cIjAgLTIyIDUxMiA1MTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm01MTIgMjMzLjgyMDMxMi0yMTIuNzc3MzQ0LTIzMy4zMjAzMTJ2MTM5LjIwMzEyNWgtNDUuMjM4MjgxYy0xNDAuMjczNDM3IDAtMjUzLjk4NDM3NSAxMTMuNzEwOTM3LTI1My45ODQzNzUgMjUzLjk4NDM3NXY3My43Njk1MzFsMjAuMDkzNzUtMjIuMDE5NTMxYzY4LjMxNjQwNi03NC44NTE1NjIgMTY0Ljk4MDQ2OS0xMTcuNSAyNjYuMzI0MjE5LTExNy41aDEyLjgwNDY4N3YxMzkuMjAzMTI1em0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgaGFuZHNoYWtlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnPjxwYXRoIGQ9XCJtMzg2LjE1OCA4LjczM2MtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0zNi40NzggMzYuNDc4Yy0xOS45MjMtMTAuNzY5LTQ1LjM4Ni03Ljc0OC02Mi4xOTkgOS4wNjVsLTY5LjQxNiA2OS40MTZjLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDBsMjUuMDktMjUuMDljMzguOTEyIDMyLjQ0OCA5Mi4yNzMgNDIuNiAxNDAuNTkxIDI2LjI1Mmw2Ni44MiA2Ni44MmM4LjM3Ni0xOC4xOTIgNS44MzQtNDAuMjE2LTcuNjUtNTYuMDY5bDM1LjA1OC0zNS4wNThjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzLS4xMDEtLjEwMS0uMjExLS4xODctLjMxNS0uMjg0bC4wMTUtLjAxNXpcIi8+PHBhdGggZD1cIm0yNzYuNDU5IDQwMC4wMTFjLTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ2IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMGwtNDYuMjcyIDQ2LjI3MmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGw0Ni4yNzItNDYuMjcyYzE0LjA0NC0xNC4wNDMgMTQuMDQ0LTM2LjgwNy4wMDMtNTAuODQ4elwiLz48cGF0aCBkPVwibTI3Ni4xNiAxODguNTA0LTcuMjQ4IDcuMjQ4Yy0yNS43MTUgMjUuNzE1LTY3LjU1OCAyNS43MTUtOTMuMjczIDBzLTI1LjcxNS02Ny41NTggMC05My4yNzNsNTcuNTE0LTU3LjUxNGMtMTYuMTU3LTYuMTg4LTM0LjU0Ny00Ljg5MS00OS43NjggMy44OTJsLTM2LjMyOS0zNi4zMjljLTUuODU4LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMTIxLjQ1IDEyMS40NDljLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxM2wzNi4zMjkgMzYuMzI5Yy04Ljc4MyAxNS4yMjEtMTAuMDggMzMuNjExLTMuODkyIDQ5Ljc2OGwxNS4wMjktMTUuMDI5YzI1LjcxNS0yNS43MTUgNjcuNTU4LTI1LjcxNSA5My4yNzMgMCA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NHMxNS4zMTQgMjAuODk1IDE3Ljg1NCAzMi45OTNjMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1MyA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NCAyNS43MTUgMjUuNzE1IDI1LjcxNSA2Ny41NTggMCA5My4yNzNsLTE4LjU2MiAxOC41NjIgNi40OTcgNi40OTdjMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0N2wtODQuNDc1LTg0LjQ3NWMtNDMuOTk2IDkuNzA3LTg5Ljk5MiAyLjA5Ny0xMjguMzU4LTIwLjc2MXpcIi8+PC9nPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICA6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICcjMjgyODI4JyxcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIGhpZ2hlckNvbG9yLFxyXG4gICAgICAgICAgICAvLyB1c2VySWNvbjogdXNlckljb25CLFxyXG4gICAgICAgICAgICAvLyBoYW5kc2hha2VJY29uOiBoYW5kc2hha2VJY29uQixcclxuICAgICAgICAgICAgLy8gcGx1c0ljb246IHBsdXNJY29uQixcclxuICAgICAgICAgICAgLy8gc2hhcmVJY29uOiBzaGFyZUljb25CLFxyXG4gICAgICAgICAgICAvLyBzaHJpbmtJY29uOiBzaHJpbmtCLFxyXG4gICAgICAgICAgICAvLyBjb2xvcmVkOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBoZWFydEljb246IDxzdmcgZmlsbD17Y29sb3J9IHZpZXdCb3g9XCIwIC0yOCA1MTIuMDAwMDIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNDcxLjM4MjgxMiA0NC41NzgxMjVjLTI2LjUwMzkwNi0yOC43NDYwOTQtNjIuODcxMDkzLTQ0LjU3ODEyNS0xMDIuNDEwMTU2LTQ0LjU3ODEyNS0yOS41NTQ2ODcgMC01Ni42MjEwOTQgOS4zNDM3NS04MC40NDkyMTggMjcuNzY5NTMxLTEyLjAyMzQzOCA5LjMwMDc4MS0yMi45MTc5NjkgMjAuNjc5Njg4LTMyLjUyMzQzOCAzMy45NjA5MzgtOS42MDE1NjItMTMuMjc3MzQ0LTIwLjUtMjQuNjYwMTU3LTMyLjUyNzM0NC0zMy45NjA5MzgtMjMuODI0MjE4LTE4LjQyNTc4MS01MC44OTA2MjUtMjcuNzY5NTMxLTgwLjQ0NTMxMi0yNy43Njk1MzEtMzkuNTM5MDYzIDAtNzUuOTEwMTU2IDE1LjgzMjAzMS0xMDIuNDE0MDYzIDQ0LjU3ODEyNS0yNi4xODc1IDI4LjQxMDE1Ni00MC42MTMyODEgNjcuMjIyNjU2LTQwLjYxMzI4MSAxMDkuMjkyOTY5IDAgNDMuMzAwNzgxIDE2LjEzNjcxOSA4Mi45Mzc1IDUwLjc4MTI1IDEyNC43NDIxODcgMzAuOTkyMTg4IDM3LjM5NDUzMSA3NS41MzUxNTYgNzUuMzU1NDY5IDEyNy4xMTcxODggMTE5LjMxMjUgMTcuNjEzMjgxIDE1LjAxMTcxOSAzNy41NzgxMjQgMzIuMDI3MzQ0IDU4LjMwODU5MyA1MC4xNTIzNDQgNS40NzY1NjMgNC43OTY4NzUgMTIuNTAzOTA3IDcuNDM3NSAxOS43OTI5NjkgNy40Mzc1IDcuMjg1MTU2IDAgMTQuMzE2NDA2LTIuNjQwNjI1IDE5Ljc4NTE1Ni03LjQyOTY4NyAyMC43MzA0NjktMTguMTI4OTA3IDQwLjcwNzAzMi0zNS4xNTIzNDQgNTguMzI4MTI1LTUwLjE3MTg3NiA1MS41NzQyMTktNDMuOTQ5MjE4IDk2LjExNzE4OC04MS45MDYyNSAxMjcuMTA5Mzc1LTExOS4zMDQ2ODcgMzQuNjQ0NTMyLTQxLjgwMDc4MSA1MC43NzczNDQtODEuNDM3NSA1MC43NzczNDQtMTI0Ljc0MjE4NyAwLTQyLjA2NjQwNy0xNC40MjU3ODEtODAuODc4OTA3LTQwLjYxNzE4OC0xMDkuMjg5MDYzem0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgc2hhcmVJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjIgNTEyIDUxMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTUxMiAyMzMuODIwMzEyLTIxMi43NzczNDQtMjMzLjMyMDMxMnYxMzkuMjAzMTI1aC00NS4yMzgyODFjLTE0MC4yNzM0MzcgMC0yNTMuOTg0Mzc1IDExMy43MTA5MzctMjUzLjk4NDM3NSAyNTMuOTg0Mzc1djczLjc2OTUzMWwyMC4wOTM3NS0yMi4wMTk1MzFjNjguMzE2NDA2LTc0Ljg1MTU2MiAxNjQuOTgwNDY5LTExNy41IDI2Ni4zMjQyMTktMTE3LjVoMTIuODA0Njg3djEzOS4yMDMxMjV6bTAgMFwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vICAgICBoYW5kc2hha2VJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSBpZD1cIkNhcGFfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGc+PHBhdGggZD1cIm0zODYuMTU4IDguNzMzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTM2LjQ3OCAzNi40NzhjLTE5LjkyMy0xMC43NjktNDUuMzg2LTcuNzQ4LTYyLjE5OSA5LjA2NWwtNjkuNDE2IDY5LjQxNmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGwyNS4wOS0yNS4wOWMzOC45MTIgMzIuNDQ4IDkyLjI3MyA0Mi42IDE0MC41OTEgMjYuMjUybDY2LjgyIDY2LjgyYzguMzc2LTE4LjE5MiA1LjgzNC00MC4yMTYtNy42NS01Ni4wNjlsMzUuMDU4LTM1LjA1OGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTMtLjEwMS0uMTAxLS4yMTEtLjE4Ny0uMzE1LS4yODRsLjAxNS0uMDE1elwiLz48cGF0aCBkPVwibTI3Ni40NTkgNDAwLjAxMWMtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDYgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwbC00Ni4yNzIgNDYuMjcyYy0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwbDQ2LjI3Mi00Ni4yNzJjMTQuMDQ0LTE0LjA0MyAxNC4wNDQtMzYuODA3LjAwMy01MC44NDh6XCIvPjxwYXRoIGQ9XCJtMjc2LjE2IDE4OC41MDQtNy4yNDggNy4yNDhjLTI1LjcxNSAyNS43MTUtNjcuNTU4IDI1LjcxNS05My4yNzMgMHMtMjUuNzE1LTY3LjU1OCAwLTkzLjI3M2w1Ny41MTQtNTcuNTE0Yy0xNi4xNTctNi4xODgtMzQuNTQ3LTQuODkxLTQ5Ljc2OCAzLjg5MmwtMzYuMzI5LTM2LjMyOWMtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0xMjEuNDUgMTIxLjQ0OWMtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzbDM2LjMyOSAzNi4zMjljLTguNzgzIDE1LjIyMS0xMC4wOCAzMy42MTEtMy44OTIgNDkuNzY4bDE1LjAyOS0xNS4wMjljMjUuNzE1LTI1LjcxNSA2Ny41NTgtMjUuNzE1IDkzLjI3MyAwIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0czE1LjMxNCAyMC44OTUgMTcuODU0IDMyLjk5M2MxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODUzIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0IDI1LjcxNSAyNS43MTUgMjUuNzE1IDY3LjU1OCAwIDkzLjI3M2wtMTguNTYyIDE4LjU2MiA2LjQ5NyA2LjQ5N2MxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3bC04NC40NzUtODQuNDc1Yy00My45OTYgOS43MDctODkuOTkyIDIuMDk3LTEyOC4zNTgtMjAuNzYxelwiLz48L2c+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb2xvclBhbGxldHRlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gYWRkUG9zdChcclxuICAgICR0aXRsZTogU3RyaW5nISxcclxuICAgICR1c2VyOiBJRCEsXHJcbiAgICAkY29udGFjdExpbms6IFN0cmluZyFcclxuICAgICRza2lsbE5hbWVzOiBbU3RyaW5nIV0hLFxyXG4gICAgJHNraWxsQ2FwYWNpdGllczogW0ludCFdISxcclxuICAgICRza2lsbEZpbGxzOiBbSW50IV0hLFxyXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchLFxyXG4gICAgJGNvbG9yOiBTdHJpbmchLFxyXG4gICAgJGltYWdlTGlua3M6IFtTdHJpbmchXSxcclxuICAgICRyZWZlcmVuY2VMaW5rczogW1N0cmluZyFdXHJcbiAgKXtcclxuICAgIGFkZFBvc3QoXHJcbiAgICAgIHRpdGxlOiR0aXRsZSxcclxuICAgICAgdXNlcjokdXNlcixcclxuICAgICAgY29udGFjdExpbms6ICRjb250YWN0TGluayxcclxuICAgICAgc2tpbGxOYW1lczokc2tpbGxOYW1lcyxcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzOiRza2lsbENhcGFjaXRpZXMsXHJcbiAgICAgIHNraWxsRmlsbHM6ICRza2lsbEZpbGxzLFxyXG4gICAgICBkZXNjcmlwdGlvbjokZGVzY3JpcHRpb24sXHJcbiAgICAgIGNvbG9yOiRjb2xvcixcclxuICAgICAgaW1hZ2VMaW5rczokaW1hZ2VMaW5rcyxcclxuICAgICAgcmVmZXJlbmNlTGlua3M6JHJlZmVyZW5jZUxpbmtzXHJcbiAgICApe1xyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIGRlbGV0ZVBvc3QgKFxyXG4gICAgJHBvc3RJZDogSUQhXHJcbiAgKSB7XHJcbiAgICBkZWxldGVQb3N0IChwb3N0SWQ6ICRwb3N0SWQpXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTUFLRV9OT1RJRklDQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gbWFrZU5vdGlmaWNhdGlvbihcclxuICAgICR1c2VyRnJvbUlkOiBJRCEsXHJcbiAgICAkdXNlclRvSWQ6IElEISxcclxuICAgICRtZXNzYWdlOiBTdHJpbmchLFxyXG4gICAgJHBvc3RJZDogSUQsXHJcbiAgICAkcHJvcG9zZWRDb250cmlidXRpb246IFtJbnQhXVxyXG4gICl7XHJcbiAgICBtYWtlTm90aWZpY2F0aW9uKFxyXG4gICAgICB1c2VyRnJvbUlkOiAkdXNlckZyb21JZCxcclxuICAgICAgdXNlclRvSWQ6ICR1c2VyVG9JZCxcclxuICAgICAgbWVzc2FnZTogJG1lc3NhZ2UsXHJcbiAgICAgIHBvc3RJZDogJHBvc3RJZCxcclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb246ICRwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgKXtcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQUNDRVBUX05PVElGSUNBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBhY2NlcHROb3RpZmljYXRpb24oJG5vdGlmaWNhdGlvbklkOiBJRCEpIHtcclxuICAgIGFjY2VwdE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZDogJG5vdGlmaWNhdGlvbklkKSB7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgREVDTElORV9OT1RJRklDQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gZGVjbGluZU5vdGlmaWNhdGlvbigkbm90aWZpY2F0aW9uSWQ6IElEISkge1xyXG4gICAgZGVjbGluZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZDogJG5vdGlmaWNhdGlvbklkKSB7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1VTRVIgPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlVXNlcigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISwgJHJlZmVyZW5jZUxpbms6IFN0cmluZyEpIHtcclxuICAgIGNyZWF0ZVVzZXIoXHJcbiAgICAgIHVzZXJuYW1lOiAkdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmQsXHJcbiAgICAgIHJlZmVyZW5jZUxpbms6ICRyZWZlcmVuY2VMaW5rXHJcbiAgICApe1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0gZ3FsYFxyXG4gIG11dGF0aW9uIGxvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKXtcclxuICAgIGxvZ2luKFxyXG4gICAgICB1c2VybmFtZTogJHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogJHBhc3N3b3JkXHJcbiAgICApe1xyXG4gICAgICB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNBVkVfUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiBzYXZlUG9zdFRvVXNlciAoXHJcbiAgICAkdXNlcjogSUQhLFxyXG4gICAgJHBvc3RJZDogSUQhXHJcbiAgKSB7XHJcbiAgICBzYXZlUG9zdFRvVXNlciAodXNlcjogJHVzZXIsIHBvc3RJZDogJHBvc3RJZCkge1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1NBVkVEX1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gcmVtb3ZlU2F2ZWRQb3N0IChcclxuICAgICR1c2VyOiBJRCEsXHJcbiAgICAkcG9zdElkOiBJRCFcclxuICApIHtcclxuICAgIHJlbW92ZVNhdmVkUG9zdCAodXNlcjogJHVzZXIsIHBvc3RJZDogJHBvc3RJZClcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBU0tfUVVFU1RJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gYXNrUXVlc3Rpb24gKFxyXG4gICAgJHVzZXJGcm9tSWQ6IElEISxcclxuICAgICR1c2VyVG9JZDogSUQhLFxyXG4gICAgJHBvc3RJZDogSUQhLFxyXG4gICAgJHF1ZXN0aW9uOiBTdHJpbmchXHJcbiAgKXtcclxuICAgIGFza1F1ZXN0aW9uIChcclxuICAgICAgdXNlckZyb21JZDogJHVzZXJGcm9tSWQsXHJcbiAgICAgIHVzZXJUb0lkOiAkdXNlclRvSWQsXHJcbiAgICAgIHBvc3RJZDogJHBvc3RJZCxcclxuICAgICAgcXVlc3Rpb246ICRxdWVzdGlvblxyXG4gICAgKXtcclxuICAgICAgdXNlckZyb20ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgcG9zdHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGNvbG9yXHJcbiAgICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICBxdWVzdGlvblxyXG4gICAgICBhbnN3ZXJcclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQU5TV0VSX1FVRVNUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFuc3dlclF1ZXN0aW9uIChcclxuICAgICRub3RpZmljYXRpb25JZDogSUQhLFxyXG4gICAgJHJlc3BvbnNlOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBhbnN3ZXJRdWVzdGlvbiAoXHJcbiAgICAgIG5vdGlmaWNhdGlvbklkOiAkbm90aWZpY2F0aW9uSWQsXHJcbiAgICAgIHJlc3BvbnNlOiAkcmVzcG9uc2VcclxuICAgICl7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYCIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBMSVNUX09GX05PVElGSUNBVElPTlMgPSBncWxgXHJcbiAgcXVlcnkgbGlzdE9mTm90aWZpY2F0aW9ucygkbm90aWZpY2F0aW9uczogW1N0cmluZyFdKSB7XHJcbiAgICBsaXN0T2ZOb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnM6ICRub3RpZmljYXRpb25zKSB7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIGNvbnRhY3RMaW5rXHJcbiAgICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICBxdWVzdGlvblxyXG4gICAgICBhbnN3ZXJcclxuICAgICAgYWNjZXB0ZWRcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU0tJTExfU0VBUkNIID0gZ3FsYFxyXG4gIHF1ZXJ5IHNraWxsU2VhcmNoKCRmaWx0ZXI6IFN0cmluZyEpIHtcclxuICAgIHNraWxsU2VhcmNoKGZpbHRlcjogJGZpbHRlcikge1xyXG4gICAgICBuYW1lXHJcbiAgICAgIHVzZXNcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBNRSA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBtZXtcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgcmVmZXJlbmNlTGlua1xyXG4gICAgICBwcmltYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBzZWNvbmRhcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGludGVyZXN0c1xyXG4gICAgICBwb3N0c3tcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIHNraWxsRmlsbHNcclxuICAgICAgICBfaWRcclxuICAgICAgfSxcclxuICAgICAgbm90aWZpY2F0aW9uc3tcclxuICAgICAgICB1c2VyRnJvbXtcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyVG97XHJcbiAgICAgICAgICBfaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIHBvc3R7XHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgICAgYWNjZXB0ZWRcclxuICAgICAgfVxyXG4gICAgICBfaWRcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTElTVF9PRl9QT1NUUyA9IGdxbGBcclxuICBxdWVyeSBnZXRMaXN0T2ZQb3N0cygkaWRfbGlzdDogW1N0cmluZ10pIHtcclxuICAgIGdldExpc3RPZlBvc3RzKGlkTGlzdDogJGlkX2xpc3Qpe1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1c2Vye1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgY29sb3JcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRklORF9QT1NUID0gZ3FsYFxyXG4gIHF1ZXJ5IGZpbmRQb3N0KCR0aXRsZTogU3RyaW5nISl7XHJcbiAgICBmaW5kUG9zdCh0aXRsZTogJHRpdGxlKXtcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBza2lsbE5hbWVzXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICBza2lsbEZpbGxzXHJcbiAgICAgIHRlYW1cclxuICAgICAgdGltZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBjb2xvclxyXG4gICAgICBpbWFnZUxpbmtzXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtzXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZJTkRfVVNFUiA9IGdxbGBcclxuICBxdWVyeSBmaW5kVXNlcigkdXNlcm5hbWU6IFN0cmluZyEpe1xyXG4gICAgZmluZFVzZXIodXNlcm5hbWU6ICR1c2VybmFtZSkge1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgICByZWZlcmVuY2VMaW5rXHJcbiAgICAgIHByaW1hcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNlY29uZGFyeVNraWxsc3tcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgICAgaW50ZXJlc3RzXHJcbiAgICAgIHBvc3Rze1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIG5vdGlmaWNhdGlvbnMge1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHNhdmVkUG9zdHMge1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9VU0VSUyA9IGdxbGBcclxuICBxdWVyeXtcclxuICAgIGFsbFVzZXJze1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnl7XHJcbiAgICBhbGxQb3N0c3tcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlcntcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHNraWxsTmFtZXNcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgIHNraWxsRmlsbHNcclxuICAgICAgdGltZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBjb2xvclxyXG4gICAgICBpbWFnZUxpbmtzXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtzXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX1RJVExFUyA9IGdxbGBcclxuICBxdWVyeXtcclxuICAgIGFsbFBvc3Rze1xyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QT1NUUyA9IGdxbGBcclxuICBxdWVyeSBzZWFyY2hQb3N0cygkZmlsdGVyU3RyaW5nOiBTdHJpbmchLCAkcG9zdElkczogW1N0cmluZyFdLCAkZXZlbnRRdWVyeTogU3RyaW5nKXtcclxuICAgIHNlYXJjaFBvc3RzKGZpbHRlclN0cmluZzogJGZpbHRlclN0cmluZywgcG9zdElkczogJHBvc3RJZHMsIGV2ZW50UXVlcnk6ICRldmVudFF1ZXJ5KXtcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBza2lsbE5hbWVzXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICBza2lsbEZpbGxzXHJcbiAgICAgIHRpbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgY29sb3JcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUEVORElOR19OT1RJRlMgPSBncWxgXHJcbiAgcXVlcnkgc2VhcmNoQXdhaXRpbmdOb3RpZnMoJHVzZXJJZDogSUQhKSB7XHJcbiAgICBzZWFyY2hBd2FpdGluZ05vdGlmcyh1c2VySWQ6ICR1c2VySWQpXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUV9BTkRfQV9OT1RJRlMgPSBncWxgXHJcbiAgcXVlcnkgc2VhcmNoQW5zd2VyZWRRVG9Qb3N0ICggJHRpdGxlOiBTdHJpbmchICkge1xyXG4gICAgc2VhcmNoQW5zd2VyZWRRVG9Qb3N0IChcclxuICAgICAgdGl0bGU6ICR0aXRsZVxyXG4gICAgKXtcclxuICAgICAgdXNlckZyb217XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1JbmZvQ29udGFpbmVyXCI6IFwiaW5wdXRIZWFkZXJfZm9ybUluZm9Db250YWluZXJfX3lRYmthXCIsXG5cdFwiaW5mb0hlYWRlckNvbnRhaW5lclwiOiBcImlucHV0SGVhZGVyX2luZm9IZWFkZXJDb250YWluZXJfX2hRLUlrXCIsXG5cdFwiaW5mb1RpdGxlVGV4dFwiOiBcImlucHV0SGVhZGVyX2luZm9UaXRsZVRleHRfXzN4bGpsXCIsXG5cdFwiaW5mb0ljb25Db250YWluZXJcIjogXCJpbnB1dEhlYWRlcl9pbmZvSWNvbkNvbnRhaW5lcl9fM014WDNcIixcblx0XCJpbmZvSWNvblwiOiBcImlucHV0SGVhZGVyX2luZm9JY29uX18zYlRPelwiLFxuXHRcImluZm9Db250ZW50XCI6IFwiaW5wdXRIZWFkZXJfaW5mb0NvbnRlbnRfXzF3T253XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJIV01cIjogXCJuYXZCYXJfSFdNX19GdTZWTVwiLFxuXHRcIlNXTVwiOiBcIm5hdkJhcl9TV01fXzE0SFo3XCIsXG5cdFwiYWxlcnRCYXJDb250YWluZXJcIjogXCJuYXZCYXJfYWxlcnRCYXJDb250YWluZXJfXzIxWFZKXCIsXG5cdFwibWVzc2FnZVwiOiBcIm5hdkJhcl9tZXNzYWdlX18yOElxdlwiLFxuXHRcImNsb3NlXCI6IFwibmF2QmFyX2Nsb3NlX18zUjBqRlwiLFxuXHRcIm5hdkNvbnRhaW5lclwiOiBcIm5hdkJhcl9uYXZDb250YWluZXJfXzI0QVphXCIsXG5cdFwibmF2QmFyQ29udGFpbmVyXCI6IFwibmF2QmFyX25hdkJhckNvbnRhaW5lcl9fbjhlZVZcIixcblx0XCJpY29uQ29udGFpbmVyXCI6IFwibmF2QmFyX2ljb25Db250YWluZXJfXzNBRE0tXCIsXG5cdFwibmF2QmFySWNvblwiOiBcIm5hdkJhcl9uYXZCYXJJY29uX18xT3FiblwiLFxuXHRcInNlYXJjaEJhclwiOiBcIm5hdkJhcl9zZWFyY2hCYXJfX0tpSVkwXCIsXG5cdFwiU0JTZXBhcmF0b3JcIjogXCJuYXZCYXJfU0JTZXBhcmF0b3JfXzJuOW9OXCIsXG5cdFwiZW50ZXJTZWFyY2hcIjogXCJuYXZCYXJfZW50ZXJTZWFyY2hfXzNNek14XCIsXG5cdFwic2VhcmNoSHJcIjogXCJuYXZCYXJfc2VhcmNoSHJfXzF6X08tXCIsXG5cdFwic2VhcmNoSWNvblwiOiBcIm5hdkJhcl9zZWFyY2hJY29uX18xRVVCQ1wiLFxuXHRcInNlYXJjaGluZ0ZvclwiOiBcIm5hdkJhcl9zZWFyY2hpbmdGb3JfX1E3bXZzXCIsXG5cdFwic2VhcmNoSG92ZXJcIjogXCJuYXZCYXJfc2VhcmNoSG92ZXJfX3ZLLXNyXCIsXG5cdFwic2VhcmNoSW5wdXRcIjogXCJuYXZCYXJfc2VhcmNoSW5wdXRfXzFLb1hMXCIsXG5cdFwic2VhcmNoRGVzY3JpcHRpb25cIjogXCJuYXZCYXJfc2VhcmNoRGVzY3JpcHRpb25fXzN1ZTU2XCIsXG5cdFwic2VhcmNoU3VnZ2VzdGlvblwiOiBcIm5hdkJhcl9zZWFyY2hTdWdnZXN0aW9uX19PU1ZxN1wiLFxuXHRcImZpbHRlckREXCI6IFwibmF2QmFyX2ZpbHRlckREX18zdWxGSFwiLFxuXHRcImZpbHRlck9wdGlvblwiOiBcIm5hdkJhcl9maWx0ZXJPcHRpb25fXzNlT0U3XCIsXG5cdFwibmF2Q29udGFpbmVyTVwiOiBcIm5hdkJhcl9uYXZDb250YWluZXJNX18zNFM3T1wiLFxuXHRcIm5hdkJhckNvbnRhaW5lck1cIjogXCJuYXZCYXJfbmF2QmFyQ29udGFpbmVyTV9fMmVNRHBcIixcblx0XCJOQkJyYW5kXCI6IFwibmF2QmFyX05CQnJhbmRfXzJkdTlQXCIsXG5cdFwiTkJMb2dvXCI6IFwibmF2QmFyX05CTG9nb19fMjNZUGFcIixcblx0XCJOQlByaW1hcnlVdGlsaXRpZXNcIjogXCJuYXZCYXJfTkJQcmltYXJ5VXRpbGl0aWVzX19yVURVTlwiLFxuXHRcIlBVU2VhcmNoXCI6IFwibmF2QmFyX1BVU2VhcmNoX18xMXJyTlwiLFxuXHRcIlBVSGFtYnVyZ2VyQ29udGFpbmVyXCI6IFwibmF2QmFyX1BVSGFtYnVyZ2VyQ29udGFpbmVyX18zNVgtQ1wiLFxuXHRcIlBVSGFtYnVyZ2VyXCI6IFwibmF2QmFyX1BVSGFtYnVyZ2VyX18xWmZ2cVwiLFxuXHRcIm5hdkJhclN1YkNvbnRhaW5lclwiOiBcIm5hdkJhcl9uYXZCYXJTdWJDb250YWluZXJfXzFNQUNLXCIsXG5cdFwibmF2QmFyU3ViQ29udGFpbmVyTVwiOiBcIm5hdkJhcl9uYXZCYXJTdWJDb250YWluZXJNX18zMnJyUVwiLFxuXHRcImxvZ2luQmFyXCI6IFwibmF2QmFyX2xvZ2luQmFyX18zVVpGblwiLFxuXHRcIlBOQ29udGFpbmVyXCI6IFwibmF2QmFyX1BOQ29udGFpbmVyX18yeHJZZ1wiLFxuXHRcIm5vdGlmaWNhdGlvbkl0ZW1cIjogXCJuYXZCYXJfbm90aWZpY2F0aW9uSXRlbV9fMmRnRU5cIixcblx0XCJQTkJ1YmJsZVwiOiBcIm5hdkJhcl9QTkJ1YmJsZV9fMkRvVTJcIixcblx0XCJQTkJ1YmJsZUhhbWJ1cmdlclwiOiBcIm5hdkJhcl9QTkJ1YmJsZUhhbWJ1cmdlcl9fMUNWOThcIixcblx0XCJtZW51SXRlbVwiOiBcIm5hdkJhcl9tZW51SXRlbV9fV1NIbVRcIixcblx0XCJtZW51SXRlbVNlbGVjdGVkXCI6IFwibmF2QmFyX21lbnVJdGVtU2VsZWN0ZWRfX1NUa242XCIsXG5cdFwibWVudUl0ZW1Mb2dvdXRcIjogXCJuYXZCYXJfbWVudUl0ZW1Mb2dvdXRfXzJRVC1mXCIsXG5cdFwibWVudU1vZGFsQ29udGFpbmVyXCI6IFwibmF2QmFyX21lbnVNb2RhbENvbnRhaW5lcl9fMzhWVUxcIixcblx0XCJtb3JlTGlua1wiOiBcIm5hdkJhcl9tb3JlTGlua19fMmIzZmFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRlc3RcIjogXCJuZXdQb3N0UGFnZV90ZXN0X19CRHB3T1wiLFxuXHRcInBvc3RQYWdlQ29udGFpbmVyXCI6IFwibmV3UG9zdFBhZ2VfcG9zdFBhZ2VDb250YWluZXJfXzN3eDVfXCIsXG5cdFwiaG9tZU9wdGlvbnNcIjogXCJuZXdQb3N0UGFnZV9ob21lT3B0aW9uc19fMnhqMVVcIixcblx0XCJob21lT3B0aW9uSGlnaGxpZ2h0XCI6IFwibmV3UG9zdFBhZ2VfaG9tZU9wdGlvbkhpZ2hsaWdodF9faWFrRl9cIixcblx0XCJQUENvbnRlbnRcIjogXCJuZXdQb3N0UGFnZV9QUENvbnRlbnRfXzF0X01SXCIsXG5cdFwiaG9tZU9wdGlvblwiOiBcIm5ld1Bvc3RQYWdlX2hvbWVPcHRpb25fXzlOZnlrXCIsXG5cdFwiaG9tZU9wdGlvbkljb25cIjogXCJuZXdQb3N0UGFnZV9ob21lT3B0aW9uSWNvbl9fM05Hd2NcIixcblx0XCJob21lT3B0aW9uVGV4dFwiOiBcIm5ld1Bvc3RQYWdlX2hvbWVPcHRpb25UZXh0X18zUTZlZlwiLFxuXHRcIlBQQ1RpdGxlXCI6IFwibmV3UG9zdFBhZ2VfUFBDVGl0bGVfXzJIU1FUXCIsXG5cdFwiUFBDU3ViSGVhZGVyXCI6IFwibmV3UG9zdFBhZ2VfUFBDU3ViSGVhZGVyX18zdGRacVwiLFxuXHRcIlBQQ1VzZXJDb250YWluZXJcIjogXCJuZXdQb3N0UGFnZV9QUENVc2VyQ29udGFpbmVyX18xZXhzSFwiLFxuXHRcIlBQQ1VzZXJJY29uXCI6IFwibmV3UG9zdFBhZ2VfUFBDVXNlckljb25fX2Jfd1J0XCIsXG5cdFwiUFBDVGltZVwiOiBcIm5ld1Bvc3RQYWdlX1BQQ1RpbWVfXzF4bGJCXCIsXG5cdFwiUFBDRGVzY3JpcHRpb25cIjogXCJuZXdQb3N0UGFnZV9QUENEZXNjcmlwdGlvbl9fMmM3ZnRcIixcblx0XCJQUENQaWN0dXJlc0NvbnRhaW5lclwiOiBcIm5ld1Bvc3RQYWdlX1BQQ1BpY3R1cmVzQ29udGFpbmVyX18zWllVYVwiLFxuXHRcIlBQQ1BpY3R1cmVzSGlnaGxpZ2h0XCI6IFwibmV3UG9zdFBhZ2VfUFBDUGljdHVyZXNIaWdobGlnaHRfXzN0THFlXCIsXG5cdFwiUFBDQWxsUGljdHVyZXNDb250YWluZXJcIjogXCJuZXdQb3N0UGFnZV9QUENBbGxQaWN0dXJlc0NvbnRhaW5lcl9fMmMtYUJcIixcblx0XCJQUENQaWN0dXJlc0luc3RhbmNlXCI6IFwibmV3UG9zdFBhZ2VfUFBDUGljdHVyZXNJbnN0YW5jZV9fR1ZfU1pcIixcblx0XCJQUENMaW5rc0NvbnRhaW5lclwiOiBcIm5ld1Bvc3RQYWdlX1BQQ0xpbmtzQ29udGFpbmVyX18yWkE5QlwiLFxuXHRcIlBQQ1JlZmVyZW5jZUxpbmtcIjogXCJuZXdQb3N0UGFnZV9QUENSZWZlcmVuY2VMaW5rX18yVDFVcFwiLFxuXHRcIlBQQ1JMSWNvblwiOiBcIm5ld1Bvc3RQYWdlX1BQQ1JMSWNvbl9fWjZvU0pcIixcblx0XCJQUFNpZGVCYXJDb250YWluZXJcIjogXCJuZXdQb3N0UGFnZV9QUFNpZGVCYXJDb250YWluZXJfXzFjSXUyXCIsXG5cdFwiUFBTaWRlQmFyXCI6IFwibmV3UG9zdFBhZ2VfUFBTaWRlQmFyX18xUmxiZFwiLFxuXHRcIlBQQ1FhbmRhQ29udGFpbmVyXCI6IFwibmV3UG9zdFBhZ2VfUFBDUWFuZGFDb250YWluZXJfX1g0eUN0XCIsXG5cdFwiUFBDUWFuZGFIZWFkZXJcIjogXCJuZXdQb3N0UGFnZV9QUENRYW5kYUhlYWRlcl9fMm9tbDRcIixcblx0XCJQQ0NRYW5kYUNvbnRlbnRcIjogXCJuZXdQb3N0UGFnZV9QQ0NRYW5kYUNvbnRlbnRfXzN3SGhzXCIsXG5cdFwiUENDQW5zd2VyVG9nZ2xlXCI6IFwibmV3UG9zdFBhZ2VfUENDQW5zd2VyVG9nZ2xlX18xdGJLZlwiLFxuXHRcIlBDQ1FhbmRhQW5zd2VyQ29udGFpbmVyXCI6IFwibmV3UG9zdFBhZ2VfUENDUWFuZGFBbnN3ZXJDb250YWluZXJfXzNOakVqXCIsXG5cdFwiUFBTRm9sbG93SGVhZGVyXCI6IFwibmV3UG9zdFBhZ2VfUFBTRm9sbG93SGVhZGVyX19sN2lFVFwiLFxuXHRcIlBQU0RpdmlzaW9uXCI6IFwibmV3UG9zdFBhZ2VfUFBTRGl2aXNpb25fXzJNRG16XCIsXG5cdFwiUFBTU2tpbGxcIjogXCJuZXdQb3N0UGFnZV9QUFNTa2lsbF9fYzRrc2RcIixcblx0XCJQUFNTa2lsbE5hbWVcIjogXCJuZXdQb3N0UGFnZV9QUFNTa2lsbE5hbWVfXzJmVVhEXCIsXG5cdFwiUFBTU2tpbGxTZWNvbmRhcnlcIjogXCJuZXdQb3N0UGFnZV9QUFNTa2lsbFNlY29uZGFyeV9fUWV2QkZcIixcblx0XCJQUFNTa2lsbEluZm9cIjogXCJuZXdQb3N0UGFnZV9QUFNTa2lsbEluZm9fXzFaVTd3XCIsXG5cdFwiUFBTQnV0dG9uRXhpdFwiOiBcIm5ld1Bvc3RQYWdlX1BQU0J1dHRvbkV4aXRfXzN4SFlfXCIsXG5cdFwiUFBTQnV0dG9uXCI6IFwibmV3UG9zdFBhZ2VfUFBTQnV0dG9uX18xMHpURFwiLFxuXHRcIlBQU0J1dHRvbkRpc2FibGVkXCI6IFwibmV3UG9zdFBhZ2VfUFBTQnV0dG9uRGlzYWJsZWRfXzFpekpPXCIsXG5cdFwiUFBTVGl0bGVcIjogXCJuZXdQb3N0UGFnZV9QUFNUaXRsZV9fNTNfMy1cIixcblx0XCJQUFNTa2lsbEZvcm1cIjogXCJuZXdQb3N0UGFnZV9QUFNTa2lsbEZvcm1fXzF1QXZrXCIsXG5cdFwiUFBTSW5wdXRDb250YWluZXJcIjogXCJuZXdQb3N0UGFnZV9QUFNJbnB1dENvbnRhaW5lcl9fM3BhazdcIixcblx0XCJQUFNJbnB1dFwiOiBcIm5ld1Bvc3RQYWdlX1BQU0lucHV0X18yZ1pzclwiLFxuXHRcIlBQQ1N1Ym1pdENvbnRhaW5lclwiOiBcIm5ld1Bvc3RQYWdlX1BQQ1N1Ym1pdENvbnRhaW5lcl9fNHVXMURcIixcblx0XCJQUENUZWFtQ29udGFpbmVyXCI6IFwibmV3UG9zdFBhZ2VfUFBDVGVhbUNvbnRhaW5lcl9fM0diY0dcIixcblx0XCJQUENUZWFtTWVtYmVyXCI6IFwibmV3UG9zdFBhZ2VfUFBDVGVhbU1lbWJlcl9fMnRac0VcIixcblx0XCJxYW5kYVRleHRcIjogXCJuZXdQb3N0UGFnZV9xYW5kYVRleHRfXzF6VENoXCIsXG5cdFwidGVhbUluZm9cIjogXCJuZXdQb3N0UGFnZV90ZWFtSW5mb19fM09LNGNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvc3RXcmFwcGVyXCI6IFwicG9zdF9wb3N0V3JhcHBlcl9fcU55eVFcIixcblx0XCJwb3N0SG92ZXJcIjogXCJwb3N0X3Bvc3RIb3Zlcl9fVWlqblBcIixcblx0XCJwb3N0Q29sb3JJbmRpY2F0b3JcIjogXCJwb3N0X3Bvc3RDb2xvckluZGljYXRvcl9fM3I2dGhcIixcblx0XCJwb3N0Q29udGFpbmVyXCI6IFwicG9zdF9wb3N0Q29udGFpbmVyX18yVzZfMFwiLFxuXHRcInBvc3RIZWFkZXJXcmFwcGVyXCI6IFwicG9zdF9wb3N0SGVhZGVyV3JhcHBlcl9fMWxHTC1cIixcblx0XCJwb3N0SGVhZGVyU3RyZXRjaFwiOiBcInBvc3RfcG9zdEhlYWRlclN0cmV0Y2hfXzFtMHlBXCIsXG5cdFwicG9zdEhlYWRlclwiOiBcInBvc3RfcG9zdEhlYWRlcl9fM1dyYUZcIixcblx0XCJQSFVzZXJTdHJldGNoXCI6IFwicG9zdF9QSFVzZXJTdHJldGNoX18xaXVXNVwiLFxuXHRcIlBIVXNlclwiOiBcInBvc3RfUEhVc2VyX19GTDdPY1wiLFxuXHRcIlBIVUljb25cIjogXCJwb3N0X1BIVUljb25fXzFXQ2c3XCIsXG5cdFwiUEhEYXRlXCI6IFwicG9zdF9QSERhdGVfXzJ0UW5fXCIsXG5cdFwicG9zdFRpdGxlXCI6IFwicG9zdF9wb3N0VGl0bGVfXzEyUkNFXCIsXG5cdFwicG9zdERlc2NyaXB0aW9uXCI6IFwicG9zdF9wb3N0RGVzY3JpcHRpb25fXzNWQ1oxXCIsXG5cdFwicG9zdFNraWxsc0NvbnRhaW5lclwiOiBcInBvc3RfcG9zdFNraWxsc0NvbnRhaW5lcl9fMzNqdHRcIixcblx0XCJwb3N0U2tpbGxJbnNDb250YWluZXJcIjogXCJwb3N0X3Bvc3RTa2lsbEluc0NvbnRhaW5lcl9fM0tpQkRcIixcblx0XCJQU0lOYW1lXCI6IFwicG9zdF9QU0lOYW1lX19uT0M1OFwiLFxuXHRcIlBTSVN0YXRzXCI6IFwicG9zdF9QU0lTdGF0c19fMzZHRElcIixcblx0XCJwb3N0VXRpbGl0aWVzQ29udGFpbmVyXCI6IFwicG9zdF9wb3N0VXRpbGl0aWVzQ29udGFpbmVyX18xMWNpX1wiLFxuXHRcIlBVSWNvbkNvbnRhaW5lclwiOiBcInBvc3RfUFVJY29uQ29udGFpbmVyX18xUm9PVlwiLFxuXHRcIlBVSWNvblwiOiBcInBvc3RfUFVJY29uX18yRFhmM1wiLFxuXHRcInBvc3RXcmFwcGVyU21cIjogXCJwb3N0X3Bvc3RXcmFwcGVyU21fXzJ5ZlQ3XCIsXG5cdFwicG9zdFNtUmVtb3ZlXCI6IFwicG9zdF9wb3N0U21SZW1vdmVfXzFWU0JwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyV3JhcHBlclwiOiBcInVzZXJfdXNlcldyYXBwZXJfXzNLM3poXCIsXG5cdFwidXNlckNvbnRhaW5lclwiOiBcInVzZXJfdXNlckNvbnRhaW5lcl9fMXJMbklcIixcblx0XCJ1c2VyT3B0aW9uc1NwbGl0dGVyXCI6IFwidXNlcl91c2VyT3B0aW9uc1NwbGl0dGVyX18ycnFaWlwiLFxuXHRcInVzZXJJY29uQ29udGFpbmVyXCI6IFwidXNlcl91c2VySWNvbkNvbnRhaW5lcl9fMjM0aWpcIixcblx0XCJTVUhcIjogXCJ1c2VyX1NVSF9fMU1yZTBcIixcblx0XCJVSUNIXCI6IFwidXNlcl9VSUNIX18zalJJeFwiLFxuXHRcIkxHRFVzZXJDb250YWluZXJcIjogXCJ1c2VyX0xHRFVzZXJDb250YWluZXJfXzN3Y2FsXCIsXG5cdFwidXNlckJhbm5lclwiOiBcInVzZXJfdXNlckJhbm5lcl9fMUF4d2xcIixcblx0XCJ1c2VyVXNlcm5hbWVDb250YWluZXJcIjogXCJ1c2VyX3VzZXJVc2VybmFtZUNvbnRhaW5lcl9fMWhBOEhcIixcblx0XCJ1c2VyVXNlcm5hbWVcIjogXCJ1c2VyX3VzZXJVc2VybmFtZV9fOXByaW5cIixcblx0XCJ1c2VyVXNlcm5hbWVJY29uXCI6IFwidXNlcl91c2VyVXNlcm5hbWVJY29uX18zTzhxdFwiLFxuXHRcIlBOQ29udGFpbmVyXCI6IFwidXNlcl9QTkNvbnRhaW5lcl9fMjJMeVRcIixcblx0XCJQTkJ1YmJsZVwiOiBcInVzZXJfUE5CdWJibGVfX0pWVU9CXCIsXG5cdFwidXNlclV0aWxpdHlPcHRpb25cIjogXCJ1c2VyX3VzZXJVdGlsaXR5T3B0aW9uX18xVnVnQlwiLFxuXHRcIlVVT1NlbGVjdGVkXCI6IFwidXNlcl9VVU9TZWxlY3RlZF9fM3Z2UWtcIixcblx0XCJVVUFkZFBvc3RcIjogXCJ1c2VyX1VVQWRkUG9zdF9fMjNBdDdcIixcblx0XCJVVUFQSWNvblwiOiBcInVzZXJfVVVBUEljb25fXzNfUzhoXCIsXG5cdFwiVVVBUFRleHRcIjogXCJ1c2VyX1VVQVBUZXh0X18xYjNGMlwiLFxuXHRcIlVVSWNvblwiOiBcInVzZXJfVVVJY29uX194MUlCclwiLFxuXHRcIlVVTG9nb3V0XCI6IFwidXNlcl9VVUxvZ291dF9fMl9EYkhcIixcblx0XCJVVUxvZ291dEljb25cIjogXCJ1c2VyX1VVTG9nb3V0SWNvbl9fMkdQQ0VcIixcblx0XCJ1c2VyTm90aWZpY2F0aW9uQnViYmxlXCI6IFwidXNlcl91c2VyTm90aWZpY2F0aW9uQnViYmxlX18zaDFOV1wiLFxuXHRcIlVVVXRpbGl0aWVzU3BsaXR0ZXJcIjogXCJ1c2VyX1VVVXRpbGl0aWVzU3BsaXR0ZXJfXzNaS0JQXCIsXG5cdFwiVVVDb250ZW50Q29udGFpbmVyXCI6IFwidXNlcl9VVUNvbnRlbnRDb250YWluZXJfXzFHS0JfXCIsXG5cdFwiTkxVc2VyQ29udGFpbmVyXCI6IFwidXNlcl9OTFVzZXJDb250YWluZXJfXzNaNUx3XCIsXG5cdFwidXNlck9wdGlvbkNvbnRhaW5lclwiOiBcInVzZXJfdXNlck9wdGlvbkNvbnRhaW5lcl9fMzM4Um1cIixcblx0XCJ1c2VyT3B0aW9uc1wiOiBcInVzZXJfdXNlck9wdGlvbnNfX2t0ZXNnXCIsXG5cdFwidXNlckljb25cIjogXCJ1c2VyX3VzZXJJY29uX18yMHQ1NVwiLFxuXHRcInVzZXJGb3JtQ29udGFpbmVyXCI6IFwidXNlcl91c2VyRm9ybUNvbnRhaW5lcl9fQWhKbHVcIixcblx0XCJ1c2VyRm9ybVwiOiBcInVzZXJfdXNlckZvcm1fX3J4Q2RSXCIsXG5cdFwiVUZMYWJlbFwiOiBcInVzZXJfVUZMYWJlbF9fMnRfMXVcIixcblx0XCJVRklucHV0XCI6IFwidXNlcl9VRklucHV0X18zd09VNlwiLFxuXHRcIlVGU3VibWl0XCI6IFwidXNlcl9VRlN1Ym1pdF9fdFN2TGRcIixcblx0XCJub3RpZmljYXRpb25Db250YWluZXJcIjogXCJ1c2VyX25vdGlmaWNhdGlvbkNvbnRhaW5lcl9fMnh5TW1cIixcblx0XCJub3RpZmljYXRpb25IZWFkZXJcIjogXCJ1c2VyX25vdGlmaWNhdGlvbkhlYWRlcl9fMXE4Ti1cIixcblx0XCJOVXNlckNvbnRhaW5lclwiOiBcInVzZXJfTlVzZXJDb250YWluZXJfXzN3RnItXCIsXG5cdFwiTlVzZXJJY29uXCI6IFwidXNlcl9OVXNlckljb25fX1pFTjN0XCIsXG5cdFwiTlVzZXJcIjogXCJ1c2VyX05Vc2VyX18zOTJOVVwiLFxuXHRcIk5Vc2VyTGFiZWxcIjogXCJ1c2VyX05Vc2VyTGFiZWxfXzNoYW1mXCIsXG5cdFwiTlNraWxsQ29udHJpYnV0aW9uc1wiOiBcInVzZXJfTlNraWxsQ29udHJpYnV0aW9uc19faGhZRC1cIixcblx0XCJOUHJvcG9zZWRIZWxwXCI6IFwidXNlcl9OUHJvcG9zZWRIZWxwX18zaEY2UVwiLFxuXHRcIk5Ta2lsbEluc1wiOiBcInVzZXJfTlNraWxsSW5zX18yYTlTVVwiLFxuXHRcIk5Ta2lsbFByb3BcIjogXCJ1c2VyX05Ta2lsbFByb3BfXzJhUlIxXCIsXG5cdFwibm90aWZpY2F0aW9uQ2hvaWNlXCI6IFwidXNlcl9ub3RpZmljYXRpb25DaG9pY2VfX2x6ZFZYXCIsXG5cdFwibm90aWZpY2F0aW9uT3B0aW9uXCI6IFwidXNlcl9ub3RpZmljYXRpb25PcHRpb25fXzN3N1hIXCIsXG5cdFwibm90aWZpY2F0aW9uRW1haWxcIjogXCJ1c2VyX25vdGlmaWNhdGlvbkVtYWlsX19nckxfWVwiLFxuXHRcIk5NZXNzYWdlXCI6IFwidXNlcl9OTWVzc2FnZV9fMk4yOWNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVzZXJVdGlsSW5mb1wiOiBcInVzZXJVdGlsaXRpZXNfdXNlclV0aWxJbmZvX18xLVcxYlwiLFxuXHRcInNpbXBsZVBvc3RCYW5uZXJcIjogXCJ1c2VyVXRpbGl0aWVzX3NpbXBsZVBvc3RCYW5uZXJfXzM1NmxlXCIsXG5cdFwidXNlclV0aWxOb3RpZlwiOiBcInVzZXJVdGlsaXRpZXNfdXNlclV0aWxOb3RpZl9feFIyNVVcIixcblx0XCJub3RpZmljYXRpb25Db250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvbkNvbnRhaW5lcl9fNXNudVdcIixcblx0XCJub3RpZkNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZDb250YWluZXJfXzJEZ2VlXCIsXG5cdFwibm90aWZTZW5kZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmU2VuZGVyX18yZVIyR1wiLFxuXHRcIm5vdGlmTWVzc2FnZVwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZNZXNzYWdlX18xZXpfWFwiLFxuXHRcIm5vdGlmQWNjZXB0ZWRcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmQWNjZXB0ZWRfXzI4bDllXCIsXG5cdFwibm90aWZEZWNsaW5lZFwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZEZWNsaW5lZF9fLWdrd0dcIixcblx0XCJub3RpZmljYXRpb25PcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvbk9wdGlvbl9fM25yYUpcIixcblx0XCJzdGFuZGFyZEhvdmVyXCI6IFwidXNlclV0aWxpdGllc19zdGFuZGFyZEhvdmVyX18xY21Ca1wiLFxuXHRcIk5BbnN3ZXJJbnB1dFwiOiBcInVzZXJVdGlsaXRpZXNfTkFuc3dlcklucHV0X18yaG5mVFwiLFxuXHRcImRlY2lkZVwiOiBcInVzZXJVdGlsaXRpZXNfZGVjaWRlX19WSURHYVwiLFxuXHRcIm9wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfb3B0aW9uX19BU0wtS1wiLFxuXHRcImVtYWlsXCI6IFwidXNlclV0aWxpdGllc19lbWFpbF9fMnUtdmVcIixcblx0XCJza2lsbGxcIjogXCJ1c2VyVXRpbGl0aWVzX3NraWxsbF9fMUlMeERcIixcblx0XCJub3RpZkZpbHRlckNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfbm90aWZGaWx0ZXJDb250YWluZXJfXzFVcnk1XCIsXG5cdFwiTkZDcmVhdG9yQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ORkNyZWF0b3JDb250YWluZXJfXzJjNFM2XCIsXG5cdFwibWVzc2FnZXNPcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX21lc3NhZ2VzT3B0aW9uX19lUms1UVwiLFxuXHRcIk5GTGFiZWxcIjogXCJ1c2VyVXRpbGl0aWVzX05GTGFiZWxfXzMzVklFXCIsXG5cdFwiTkZPcHRpb25Db250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX05GT3B0aW9uQ29udGFpbmVyX18yOTc2S1wiLFxuXHRcIk5GT3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19ORk9wdGlvbl9fMmxfN0NcIixcblx0XCJORlNwbGl0dGVyXCI6IFwidXNlclV0aWxpdGllc19ORlNwbGl0dGVyX18xVWtBb1wiLFxuXHRcIk5GRERPcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX05GRERPcHRpb25fXzNYSFdKXCIsXG5cdFwibm90aWZpY2F0aW9uQ0xDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvbkNMQ29udGFpbmVyX19sVVN2QVwiLFxuXHRcIm5vdGlmaWNhdGlvblN1Y2Vzc0ljb25cIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvblN1Y2Vzc0ljb25fXzFjdnFyXCIsXG5cdFwibm90aWZpY2F0aW9uQ2xcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmaWNhdGlvbkNsX18yLV8zTlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstY29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==