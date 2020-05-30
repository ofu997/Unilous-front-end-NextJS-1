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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../schemas/queries */ "./schemas/queries.js");
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

  if (props.noUser) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navContainer} HWM`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/logo/logoB.svg",
      alt: "icon",
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarIcon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 33
      }
    }))), __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchBar,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/results/[searchQuery]",
      as: linkToPush,
      onClick: () => enterQuery(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: `neutralize-link ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.enterSearch} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchHover}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/svg/searchW.svg",
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchIcon,
      alt: "search",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
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
        lineNumber: 74,
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
        lineNumber: 75,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.SBSeparator,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    }), __jsx(_text_field_SkillSugg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      query: props.query,
      onSuggestionClicked: onSuggestionClicked,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alertBarContainer,
      style: alertBarStyle,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.message,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }, props.alertNotif.message), __jsx("h2", {
      onClick: () => props.resetAlert(),
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }
    }, "x"))), __jsx("div", {
      className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navContainerM} SWM`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarContainerM,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBBrand} neutralize-link`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/logo/logoB.svg",
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBLogo,
      alt: "logo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 33
      }
    }), __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      }
    }, "Unilous"))), __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBPrimaryUtilities,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
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
        lineNumber: 94,
        columnNumber: 29
      }
    }), __jsx("div", {
      onClick: () => changeUtility('menu'),
      className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUHamburgerContainer} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNContainer}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/svg/hamburger.svg",
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUHamburger,
      alt: "menu",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 33
      }
    })))), __jsx("div", {
      onClick: () => props.resetAlert(),
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alertBarContainer,
      style: alertBarStyle,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.message,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }, props.alertNotif.message), __jsx("h2", {
      className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
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
        lineNumber: 114,
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
        lineNumber: 116,
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
            lineNumber: 124,
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
            lineNumber: 125,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: pendingNotifStats[0],
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }
        }, pendingNotifStats[1])) : __jsx("div", {
          onClick: () => changeMenuItem('notifications'),
          className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNContainer}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
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
            lineNumber: 130,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: pendingNotifStats[0],
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
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
            lineNumber: 135,
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
            lineNumber: 137,
            columnNumber: 21
          }
        });
        return __jsx("div", {
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarSubContainerM,
          style: menuStyle,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/postformpage",
          onClick: () => changeMenuItem(null),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
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
            lineNumber: 143,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/plusB.svg",
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
          alt: "add project",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 88
          }
        }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "user/[username]",
          as: `/user/${props.currentUser.username}`,
          onClick: () => changeMenuItem(null),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
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
            lineNumber: 146,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: "/svg/userSB.svg",
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
          alt: "user page",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 88
          }
        }))), notifItemButton, followingItemButton, __jsx("img", {
          src: "/svg/exitB.svg",
          onClick: () => handleLogout(),
          className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
          alt: "log out",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
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
          lineNumber: 157,
          columnNumber: 17
        }
      }, i) : __jsx("h3", {
        onClick: () => changeMenuItem(i),
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menuItem,
        key: `MI${i}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 17
        }
      }, i));
      return __jsx("div", {
        className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarSubContainerM} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.loginBar}`,
        style: menuStyle,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
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
          lineNumber: 176,
          columnNumber: 17
        }
      }, __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        noBG: true,
        changeMenuItem: changeMenuItem,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
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
          lineNumber: 183,
          columnNumber: 17
        }
      }, __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_9__["default"], {
        noBG: true,
        changeMenuItem: changeMenuItem,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
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
          lineNumber: 190,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }
      }, "notifications"), __jsx(_user_utilities_UserNotifList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
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
          lineNumber: 198,
          columnNumber: 17
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }
      }, "saved posts"), __jsx(_user_utilities_UserSP__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
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
          lineNumber: 206,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/contact/",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "neutralize-link",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 25
        }
      }, __jsx("h1", {
        className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.moreLink,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
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
      lineNumber: 219,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navContainer} HWM`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoB.svg",
    alt: "icon",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/results/[searchQuery]",
    as: linkToPush,
    onClick: () => enterQuery(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: `neutralize-link ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.enterSearch} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchHover}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/svg/searchW.svg",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchIcon,
    alt: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
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
      lineNumber: 231,
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
      lineNumber: 232,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.SBSeparator,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }
  }), __jsx(_text_field_SkillSugg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    query: props.query,
    onSuggestionClicked: onSuggestionClicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 25
    }
  })), __jsx(_UserContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alertBarContainer,
    style: alertBarStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.message,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }, props.alertNotif.message), __jsx("h2", {
    onClick: () => props.resetAlert(),
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }, "x"))), __jsx("div", {
    className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navContainerM} SWM`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarContainerM,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBBrand} neutralize-link`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/logo/logoB.svg",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBLogo,
    alt: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 29
    }
  }), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 29
    }
  }, "Unilous"))), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NBPrimaryUtilities,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
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
      lineNumber: 252,
      columnNumber: 25
    }
  }), __jsx("div", {
    onClick: () => changeUtility('menu'),
    className: `${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUHamburgerContainer} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNContainer}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/svg/hamburger.svg",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PUHamburger,
    alt: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: `${pendingNotifStats[0]} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PNBubbleHamburger}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }, pendingNotifStats[1])))), __jsx("div", {
    onClick: () => props.resetAlert(),
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alertBarContainer,
    style: alertBarStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.message,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, props.alertNotif.message), __jsx("h2", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 21
    }
  }, "x")), __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navBarSubContainer,
    style: showWhenSB,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/results/[searchQuery]",
    as: linkToPush,
    onClick: () => enterQuery(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: `neutralize-link ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.enterSearch} ${_styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchHover}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/svg/searchW.svg",
    className: _styles_navBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchIcon,
    alt: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
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
      lineNumber: 270,
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
      lineNumber: 271,
      columnNumber: 25
    }
  }), __jsx(_text_field_SkillSugg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    query: props.query,
    onSuggestionClicked: onSuggestionClicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }))), __jsx(ShowInSubNav, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 17
    }
  }), __jsx(MenuItemToShow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
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
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../schemas/mutations */ "./schemas/mutations.js");
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


  const [removeSPMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__["REMOVE_SAVED_POST"], {
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

/***/ "./components/post/PostSmallList.js":
/*!******************************************!*\
  !*** ./components/post/PostSmallList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_PostSmall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post/PostSmall */ "./components/post/PostSmall.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\post\\PostSmallList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PostSmallList = props => {
  const postListReady = props.posts.map(p => __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_2__["default"], {
    post: p,
    user: p.user.username,
    key: `PSL${p.title}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 48
    }
  }));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, postListReady);
}; // const mapStateToProps = (state) => {
// 	return {
//         
// 	}
// }


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(PostSmallList));

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

/***/ "./components/text-field/ReferenceLink.js":
/*!************************************************!*\
  !*** ./components/text-field/ReferenceLink.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/functions/functions */ "./src/functions/functions.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\text-field\\ReferenceLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ReferenceLink = props => {
  const referenceLinkContent = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_2__["websiteStats"])(props.rl);
  return __jsx("div", {
    className: "referenceLink-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "referenceLink-container",
    style: {
      backgroundColor: referenceLinkContent.color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: referenceLinkContent.icon,
    className: "RL-icon",
    alt: referenceLinkContent.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: props.rl,
    className: "RL-link neutralize-link",
    style: {
      color: referenceLinkContent.color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      margin: 'auto',
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 116
    }
  }, props.rl))));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(ReferenceLink));

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
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schemas/queries */ "./schemas/queries.js");
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
  const skillSearchQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_schemas_queries__WEBPACK_IMPORTED_MODULE_3__["SKILL_SEARCH"], {
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
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../schemas/mutations */ "./schemas/mutations.js");
/* harmony import */ var _text_field_InputHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../text-field/InputHeader */ "./components/text-field/InputHeader.js");
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/functions/functions */ "./src/functions/functions.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ "./styles/user/user.module.css");
/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8__);
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__["triggerAlert"])('success', 'registered$: account successfully created. signing you in now.', props.setAlert, props.resetAlert);
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
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userForm,
    onSubmit: e => handleSumbit(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, username.fields, {
    id: "SI-username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, password.fields, {
    id: "SI-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, rePassword.fields, {
    id: "SI-rePassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 91,
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
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 65
    }
  }, "always view another users portafolio link before working with them")), __jsx("ul", {
    style: {
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, "sites recommended: ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 48
    }
  }, "LinkedIn"), ", ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 75
    }
  }, "Indeed"), ", ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 100
    }
  }, "GitHub"), ", or ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 128
    }
  }, "Facebook")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, "to further ensure your portafolio link is trustworthy, link your Unilous accout from your portafolio link"))), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, referenceLink.fields, {
    id: "SI-referenceLink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFSubmit,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userForm,
    onSubmit: e => handleSumbit(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, username.fields, {
    id: "SI-username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("input", _extends({
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFInput
  }, password.fields, {
    id: "SI-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.UFSubmit,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../schemas/queries */ "./schemas/queries.js");
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
  const userQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_schemas_queries__WEBPACK_IMPORTED_MODULE_3__["FIND_USER"], {
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
    href: "/postformpage",
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
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../schemas/mutations */ "./schemas/mutations.js");
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

  const [acceptNotif] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__["ACCEPT_NOTIFICATION"], {
    onError: handleError
  });
  const [declineNotif] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__["DECLINE_NOTIFICATION"], {
    onError: handleError
  });
  const [answerQuestion] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_5__["ANSWER_QUESTION"], {
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
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../schemas/queries */ "./schemas/queries.js");
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
  const postListQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_schemas_queries__WEBPACK_IMPORTED_MODULE_3__["LIST_OF_POSTS"], {
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

/***/ "./pages/user/[username].js":
/*!**********************************!*\
  !*** ./pages/user/[username].js ***!
  \**********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schemas_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schemas/mutations */ "./schemas/mutations.js");
/* harmony import */ var _schemas_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../schemas/queries */ "./schemas/queries.js");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/pages/userPage.module.css */ "./styles/pages/userPage.module.css");
/* harmony import */ var _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_post_PostSmallList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post/PostSmallList */ "./components/post/PostSmallList.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_text_field_FormContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/text-field/FormContainer */ "./components/text-field/FormContainer.js");
/* harmony import */ var _components_text_field_ReferenceLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/text-field/ReferenceLink */ "./components/text-field/ReferenceLink.js");
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/functions/functions */ "./src/functions/functions.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\pages\\user\\[username].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



















const UserPage = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(props => {
  const currentUser = props.user;
  const message = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_11__["useField"])('text');

  const onError = e => {
    const eMessage = e.message;

    if (eMessage.includes('Path `message` (')) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_11__["triggerAlert"])('warning', `message$: message of ${message.fields.value.length} characters cannot be more than 800 characters`, props.setAlert, props.resetAlert);
    }
  };

  const [sendMessage] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["MAKE_NOTIFICATION"], {
    onError
  });

  const handleMessage = async () => {
    if (!message.fields.value.length) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_11__["triggerAlert"])('warning', `message$: message field is required`, props.setAlert, props.resetAlert);
      return null;
    }

    const result = await sendMessage({
      variables: {
        userFromId: props.currentUser._id,
        userToId: currentUser._id,
        message: message.fields.value
      }
    });

    if (result) {
      message.reset();
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_11__["triggerAlert"])('success', `sent: message has been sent to ${currentUser.username}`, props.setAlert, props.resetAlert);
    }
  };

  const pallette = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_11__["palletteGenerator"])("rgb(40,40,40)").colorPallette;

  const descriptionToShow = () => {
    const amtOfPosts = currentUser.posts.length;
    let dFinal = `${currentUser.username} `;

    if (amtOfPosts) {
      if (amtOfPosts === 1) dFinal = dFinal + `has ${amtOfPosts} awesome project that needs a team.`;else dFinal = dFinal + `has ${amtOfPosts} awesome projects that need teams.`;
    } else dFinal = dFinal + 'is looking fresh and ready to work on a project!';

    return dFinal;
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, `${currentUser.username} | Unilous user`), __jsx("meta", {
    name: "description",
    content: descriptionToShow(),
    key: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.UPContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "navbar-height",
    style: {
      gridColumn: '1/3'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.UPContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.UPTitleContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.UPTitleIcon,
    src: "/svg/userB.svg",
    alt: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx("h2", {
    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.UPTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, currentUser.username)), __jsx("h3", {
    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.UPTitle,
    style: {
      opacity: '0.8'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "profile link"), __jsx(_components_text_field_ReferenceLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
    rl: currentUser.referenceLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx("h2", {
    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.UPTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "posts"), __jsx("div", {
    className: _styles_pages_userPage_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.UPPostsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_components_post_PostSmallList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    posts: props.userPosts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }))), props.currentUser !== currentUser.username && __jsx(_components_text_field_FormContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    pallette: pallette,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "form-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "contact ", currentUser.username), __jsx("h4", {
    className: "form-title-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "message"), __jsx("div", {
    className: "form-field-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("textarea", _extends({
    className: "form-field"
  }, message.fields, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "form-submit-button-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("h4", {
    onClick: () => handleMessage(),
    className: "form-submit-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "send")))));
});
async function getStaticPaths() {
  const usernamesQuery = await _lib_apollo__WEBPACK_IMPORTED_MODULE_13__["apolloClient"].query({
    query: _schemas_queries__WEBPACK_IMPORTED_MODULE_4__["ALL_USERS"]
  }).then(res => {
    return res;
  }).catch(err => console.log(err));
  const paths = usernamesQuery.data.allUsers.map(u => `/user/${encodeURIComponent(u.username)}`);
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const userQuery = await _lib_apollo__WEBPACK_IMPORTED_MODULE_13__["apolloClient"].query({
    query: _schemas_queries__WEBPACK_IMPORTED_MODULE_4__["FIND_USER"],
    variables: {
      username: params.username
    }
  }).catch(err => console.log(err));
  const userPostsQuery = await _lib_apollo__WEBPACK_IMPORTED_MODULE_13__["apolloClient"].query({
    query: _schemas_queries__WEBPACK_IMPORTED_MODULE_4__["LIST_OF_POSTS"],
    variables: {
      id_list: userQuery.data.findUser.posts.map(p => p._id)
    }
  }).catch(err => console.log(err));
  return {
    props: {
      user: userQuery.data.findUser,
      userPosts: userPostsQuery.data.getListOfPosts
    }
  };
}

const mapStateToProps = state => {
  return {
    alertNotif: state.alertNotif,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAlert: Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])(_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_5__["setAlert"], dispatch),
    resetAlert: Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])(_redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_5__["resetAlert"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(UserPage)); // uses formContainer.css

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

/***/ "./styles/pages/userPage.module.css":
/*!******************************************!*\
  !*** ./styles/pages/userPage.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"UPContainer": "userPage_UPContainer__3R_8N",
	"UPPostsContainer": "userPage_UPPostsContainer__kaYbv",
	"UPTitleContainer": "userPage_UPTitleContainer__j0csi",
	"UPTitleIcon": "userPage_UPTitleIcon__3-8do",
	"UPTitle": "userPage_UPTitle__2HOZs",
	"UPRLContainer": "userPage_UPRLContainer__3rW5x",
	"UPRL": "userPage_UPRL__1vIer",
	"UPRLIconContainer": "userPage_UPRLIconContainer__3p5J9",
	"UPRLicon": "userPage_UPRLicon__2rZHj",
	"UPRLLink": "userPage_UPRLLink__1-5W2",
	"test": "userPage_test__1rNpl"
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

/***/ 7:
/*!****************************************!*\
  !*** multi ./pages/user/[username].js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\Projects\projectU\projectu\pages\user\[username].js */"./pages/user/[username].js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2QmFyL1VzZXJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L1Bvc3RTbWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvUG9zdFNtYWxsTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHQtZmllbGQvRm9ybUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHQtZmllbGQvSW5wdXRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LWZpZWxkL1JlZmVyZW5jZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LWZpZWxkL1NraWxsU3VnZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvZm9ybS9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvZm9ybS9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3N0cnVjdHVyZS9Mb2dnZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3N0cnVjdHVyZS9Ob3RMb2dnZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3V0aWxpdGllcy9Ob3RpZi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvdXRpbGl0aWVzL1VzZXJOb3RpZkxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3V0aWxpdGllcy9Vc2VyU1AuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXIvW3VzZXJuYW1lXS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3Rva2VuLmpzIiwid2VicGFjazovLy8uL3NjaGVtYXMvbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3NjaGVtYXMvcXVlcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5wdXRIZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvbmF2QmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3BhZ2VzL3VzZXJQYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3VzZXIvdXNlclV0aWxpdGllcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rLWh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsIm9uUXVlcnlDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2hpbGRyZW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInRva2VuIiwiY3VycmVudFVzZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldFRva2VuIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwic2V0Q3VycmVudFVzZXIiLCJzZXRQZW5kaW5nTm90aWZpY2F0aW9ucyIsInNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyIsImNvbm5lY3QiLCJMb2FkaW5nIiwic2l6ZSIsImNvbG9yIiwiTmF2QmFyIiwidXRpbGl0eVNob3duIiwic2V0VXRpbGl0eVNob3duIiwibWVudUl0ZW1TaG93biIsInNldE1lbnVJdGVtU2hvd24iLCJjaGFuZ2VVdGlsaXR5IiwibmFtZSIsImNoYW5nZU1lbnVJdGVtIiwiaXRlbSIsImxpbmtUb1B1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJlbnRlclF1ZXJ5IiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUtleVByZXNzIiwia2V5Iiwib25TdWdnZXN0aW9uQ2xpY2tlZCIsInNraWxsIiwic3BsaXRRdWVyeSIsInNwbGl0IiwibmV3UXVlcnkiLCJsZW5ndGgiLCJzbGljZSIsImpvaW4iLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsImNsZWFyVG9rZW4iLCJtZW51U3R5bGUiLCJib3JkZXJCb3R0b21Db2xvciIsImFsZXJ0QmFyU3R5bGUiLCJhbGVydE5vdGlmIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiZGlzcGxheSIsIm5vVXNlciIsIk5CIiwibmF2Q29udGFpbmVyIiwibmF2QmFyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsIm5hdkJhckljb24iLCJzZWFyY2hCYXIiLCJlbnRlclNlYXJjaCIsInNlYXJjaEhvdmVyIiwic2VhcmNoSWNvbiIsInNlYXJjaEhyIiwic2VhcmNoSW5wdXQiLCJlIiwiU0JTZXBhcmF0b3IiLCJhbGVydEJhckNvbnRhaW5lciIsIm1lc3NhZ2UiLCJyZXNldEFsZXJ0IiwiY2xvc2UiLCJuYXZDb250YWluZXJNIiwibmF2QmFyQ29udGFpbmVyTSIsIk5CQnJhbmQiLCJOQkxvZ28iLCJOQlByaW1hcnlVdGlsaXRpZXMiLCJQVVNlYXJjaCIsIlBVSGFtYnVyZ2VyQ29udGFpbmVyIiwiUE5Db250YWluZXIiLCJQVUhhbWJ1cmdlciIsInBlbmRpbmdOb3RpZlN0YXRzIiwicGVuZGluZ05vdGlmaWNhdGlvbnMiLCJQTkJ1YmJsZSIsIlNob3dJblN1Yk5hdiIsIm1vcmVJdGVtQnV0dG9uIiwibWVudUl0ZW1TZWxlY3RlZCIsIm1lbnVJdGVtIiwibm90aWZJdGVtQnV0dG9uIiwiYmVsbEljb25XIiwibm90aWZpY2F0aW9uSXRlbSIsImZvbGxvd2luZ0l0ZW1CdXR0b24iLCJuYXZCYXJTdWJDb250YWluZXJNIiwicGFkZGluZyIsIm1hcmdpbiIsInVzZXJuYW1lIiwiYWxsSXRlbXMiLCJtb2RhbEl0ZW1CdXR0b25zIiwibWFwIiwiaSIsImxvZ2luQmFyIiwiTWVudUl0ZW1Ub1Nob3ciLCJtZW51TW9kYWxDb250YWluZXIiLCJtb3JlTGluayIsInNob3dXaGVuU0IiLCJQTkJ1YmJsZUhhbWJ1cmdlciIsIm5hdkJhclN1YkNvbnRhaW5lciIsImhlaWdodCIsIlVzZXJDb250YWluZXIiLCJsb2dTdGF0ZVRvU2hvdyIsIlVDIiwidXNlcldyYXBwZXIiLCJQb3N0U21hbGwiLCJoYW5kbGVFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVTUE11dGF0aW9uIiwidXNlTXV0YXRpb24iLCJSRU1PVkVfU0FWRURfUE9TVCIsIm9uRXJyb3IiLCJwIiwicG9zdCIsInVzZXIiLCJwYWxsZXR0ZSIsInBhbGxldHRlR2VuZXJhdG9yIiwiY29sb3JQYWxsZXR0ZSIsImhhbmRsZVNhdmVSZW1vdmUiLCJyZXN1bHQiLCJ2YXJpYWJsZXMiLCJfaWQiLCJwb3N0SWQiLCJuZXdTYXZlZFBvc3RzIiwic2F2ZWRQb3N0cyIsImZpbHRlciIsInNldEN1cnJlbnRVc2VyU1AiLCJ0cmlnZ2VyQWxlcnQiLCJ0aXRsZSIsInNldEFsZXJ0IiwidHlwZSIsIlBUIiwicG9zdFdyYXBwZXJTbSIsInBvc3RDb2xvckluZGljYXRvciIsInBvc3RDb250YWluZXIiLCJwb3N0SGVhZGVyIiwiUEhVc2VyIiwiUEhVSWNvbiIsInBvc3RUaXRsZSIsIm1hcmdpbkJvdHRvbSIsInBvc3RTbVJlbW92ZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJzZXRDdXJyZW50VXNlclBvc3RzIiwiUG9zdFNtYWxsTGlzdCIsInBvc3RMaXN0UmVhZHkiLCJwb3N0cyIsIkZvcm1Db250YWluZXIiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwic2lnbkluV2FybmluZyIsImJvcmRlclRvcENvbG9yIiwic2hyaW5rSWNvbiIsImhhbmRzaGFrZUljb24iLCJJbnB1dEhlYWRlciIsImluZm8iLCJpbnB1dEZvciIsIklIIiwiaW5mb1RpdGxlVGV4dCIsInNob3dJbmZvIiwiY29sb3JJbmZvIiwiaWNvbiIsImZvcm1JbmZvQ29udGFpbmVyIiwiaW5mb0hlYWRlckNvbnRhaW5lciIsImluZm9JY29uIiwiaW5mb0NvbnRlbnQiLCJSZWZlcmVuY2VMaW5rIiwicmVmZXJlbmNlTGlua0NvbnRlbnQiLCJ3ZWJzaXRlU3RhdHMiLCJybCIsImZvbnRXZWlnaHQiLCJTa2lsbFN1Z2ciLCJ0b0xvd2VyQ2FzZSIsImxhc3RXb3JkIiwic2tpbGxzIiwic2V0U2tpbGxzIiwic2tpbGxTZWFyY2hRdWVyeSIsInVzZVF1ZXJ5IiwiU0tJTExfU0VBUkNIIiwic2tpbGxDb25kaXRpb25zIiwicmVkdWNlciIsInNraWxsU2VhcmNoIiwic2tpbGxzTGlzdCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJzdWdnZXN0aW9uc1RvU2hvdyIsInMiLCJncmlkQ29sdW1uIiwic3VnZ2VzdGlvbnNTdHlsZSIsIlJlZ2lzdGVyIiwidXNlRmllbGQiLCJwYXNzd29yZCIsInJlUGFzc3dvcmQiLCJlbWFpbCIsInJlZmVyZW5jZUxpbmsiLCJjbGVhbmVkTWVzc2FnZSIsImZpZWxkcyIsImluY2x1ZGVzIiwib25Mb2dpbkVycm9yIiwicmVnaXN0ZXJNdXRhdGlvbiIsIkNSRUFURV9VU0VSIiwibG9naW5NdXRhdGlvbiIsIkxPR0lOIiwiaGFuZGxlU3VtYml0IiwicHJldmVudERlZmF1bHQiLCJsb2dpblJlc3VsdCIsImxvZ2luIiwic2V0SXRlbSIsInJlc2V0IiwiYmdTdHlsZSIsIm5vQkciLCJVUiIsInVzZXJGb3JtQ29udGFpbmVyIiwidXNlckZvcm0iLCJVRklucHV0IiwiVUZTdWJtaXQiLCJTaWduSW4iLCJzaWduSW5NdXRhdGlvbiIsIkxvZ2dlZCIsInNob3dVdGlsaXRpZXMiLCJzZXRTaG93VXRpbGl0aWVzIiwiY3VycmVudFVzZXJVTiIsImdldEl0ZW0iLCJ1c2VyUXVlcnkiLCJGSU5EX1VTRVIiLCJ1c2VyUXVlcnlDb25kaXRpb25zIiwiZmluZFVzZXIiLCJ1c2VyUmVzdWx0IiwidXNlckNvbnRhaW5lciIsIkxHRFVzZXJDb250YWluZXIiLCJ1c2VyT3B0aW9uc1NwbGl0dGVyIiwidXNlckljb25Db250YWluZXIiLCJ1c2VyQmFubmVyIiwibG9nb3V0IiwiY2hhbmdlVXRpbGl0eVNob3duIiwiY2hhbmdlVG8iLCJjaGFuZ2VTaG93VXRpbGl0aWVzIiwidXNlcm5hbWVJY29uIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJpY29uVG9TaG93IiwiVUlDSCIsInVzZXJVc2VybmFtZUljb24iLCJ1c2VySWNvbkhvdmVyIiwidXNlckljb24iLCJiYXNpY1N0eWxlcyIsImNsYXNzTmFtZSIsIm5vdGlmaWNhdGlvbnMiLCJmb2xsb3dpbmciLCJVVU9TZWxlY3RlZCIsInNob3dJbkJhbm5lciIsIlVVQWRkUG9zdCIsInVzZXJVdGlsaXR5T3B0aW9uIiwiVVVBUEljb24iLCJVVUFQVGV4dCIsIlVVSWNvbiIsIlVVTG9nb3V0IiwiVVVMb2dvdXRJY29uIiwidXNlclVzZXJuYW1lQ29udGFpbmVyIiwiU1VIIiwic2hvd0J1YmJsZSIsInVzZXJOb3RpZmljYXRpb25CdWJibGUiLCJzaG93VXRpbGl0eUNvbnRlbnQiLCJ1dGlsaXR5Q29udGVudCIsIlVVVXRpbGl0aWVzU3BsaXR0ZXIiLCJVVUNvbnRlbnRDb250YWluZXIiLCJOb3RMb2dnZWQiLCJ1c2VyT3B0aW9uIiwic2V0VXNlck9wdGlvbiIsIm9wdGlvblN0eWxlIiwic2lnbkluIiwicmVnaXN0ZXIiLCJmb3JtVG9TaG93IiwiY2hhbmdlT3B0aW9uIiwiTkxVc2VyQ29udGFpbmVyIiwidXNlck9wdGlvbkNvbnRhaW5lciIsInVzZXJPcHRpb25zIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJOb3RpZiIsImFjY2VwdE5vdGlmIiwiQUNDRVBUX05PVElGSUNBVElPTiIsImRlY2xpbmVOb3RpZiIsIkRFQ0xJTkVfTk9USUZJQ0FUSU9OIiwiYW5zd2VyUXVlc3Rpb24iLCJBTlNXRVJfUVVFU1RJT04iLCJhbnN3ZXIiLCJoYW5kbGVBbnN3ZXIiLCJub3RpZmljYXRpb25JZCIsIm5vdGlmIiwicmVzcG9uc2UiLCJuZXdOb3RpZmljYXRpb25zIiwibiIsInVzZXJGcm9tIiwiaGFuZGxlQWNjZXB0IiwiYWNjZXB0IiwiYWNjZXB0Tm90aWZpY2F0aW9uIiwiaGFuZGxlRGVjbGluZSIsImRlY2xpbmUiLCJkZWNsaW5lTm90aWZpY2F0aW9uIiwibm90aWZTdGF0dXNDb2xvciIsImFjY2VwdGVkIiwicXVlc3Rpb24iLCJib3JkZXJCb3R0b20iLCJ1c2VyVG8iLCJtYXJnaW5MZWZ0IiwiR0NMaW5rU3RhdHMiLCJjb250YWN0TGluayIsImNsZWFuZWRMaW5rIiwic2tpbGxUb0pvaW4iLCJza2lsbE5hbWVzIiwicHJvcG9zZWRDb250cmlidXRpb24iLCJpbmRleE9mIiwiVXNlck5vdGlmTGlzdCIsInNlbnRGaWx0ZXIiLCJzZXRTZW50RmlsdGVyIiwic2hvd1NGREQiLCJzZXRTaG93U0ZERCIsInN0YXR1c0ZpbHRlciIsInNldFN0YXR1c0ZpbHRlciIsInNob3dTdGF0dXNERCIsInNldFNob3dTdGF0dXNERCIsIkZpbHRlciIsInNlbnRPcHRpb25zIiwiYWxsT3B0aW9ucyIsIm9uT3B0aW9uQ2xpY2siLCJvcHRpb24iLCJvIiwiVVUiLCJORkRET3B0aW9uIiwic2VudEREIiwiTkZyb3Bkb3duIiwiTkZTcGxpdHRlciIsInN0YXR1c09wdGlvbnMiLCJzdGF0dXNERCIsIk5GRHJvcGRvd24iLCJub3RpZkZpbHRlckNvbnRhaW5lciIsIk5GQ3JlYXRvckNvbnRhaW5lciIsIk5GTGFiZWwiLCJORk9wdGlvbkNvbnRhaW5lciIsIk5GT3B0aW9uIiwic3RhdHVzQ29uZGl0aW9ucyIsIm5vdGlmU3RhdHVzIiwic2VudENvbmRpdGlvbnMiLCJzZW50U3RhdHVzIiwic2hvd05vdGlmaWNhdGlvbnMiLCJyZXZlcnNlIiwiVXNlclNQIiwiaWRfbGlzdCIsInBvc3RMaXN0UXVlcnkiLCJMSVNUX09GX1BPU1RTIiwicXVlcnlDb25kaXRpb25zIiwiZ2V0TGlzdE9mUG9zdHMiLCJwb3N0TGlzdCIsIm5ld1Bvc3RMaXN0IiwiaW5kIiwiYWxsU1AiLCJodHRwTGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJzZXRDb250ZXh0IiwiXyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiYXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50IiwibGluayIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIndpdGhBcG9sbG8iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJzY3JvbGwiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJVc2VyUGFnZSIsImVNZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJNQUtFX05PVElGSUNBVElPTiIsImhhbmRsZU1lc3NhZ2UiLCJ1c2VyRnJvbUlkIiwidXNlclRvSWQiLCJkZXNjcmlwdGlvblRvU2hvdyIsImFtdE9mUG9zdHMiLCJkRmluYWwiLCJVUCIsIlVQQ29udGFpbmVyIiwiVVBDb250ZW50IiwiVVBUaXRsZUNvbnRhaW5lciIsIlVQVGl0bGVJY29uIiwiVVBUaXRsZSIsIm9wYWNpdHkiLCJVUFBvc3RzQ29udGFpbmVyIiwidXNlclBvc3RzIiwiZ2V0U3RhdGljUGF0aHMiLCJ1c2VybmFtZXNRdWVyeSIsIkFMTF9VU0VSUyIsImFsbFVzZXJzIiwidSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJ1c2VyUG9zdHNRdWVyeSIsImFjdGlvbiIsImFtdCIsIkNSRUFURV9QT1NUIiwiZ3FsIiwiREVMRVRFX1BPU1QiLCJTQVZFX1BPU1QiLCJBU0tfUVVFU1RJT04iLCJMSVNUX09GX05PVElGSUNBVElPTlMiLCJNRSIsIkZJTkRfUE9TVCIsIlNPTUVfVVNFUlMiLCJBTExfUE9TVFMiLCJHRVRfUE9TVF9USVRMRVMiLCJTRUFSQ0hfUE9TVFMiLCJQRU5ESU5HX05PVElGUyIsIlFfQU5EX0FfTk9USUZTIiwic3RhcnQiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwicHJpbWFyeUNvbG9yIiwiY29sb3JzIiwiYyIsIk51bWJlciIsImhpZ2hl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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVzZXJcXFt1c2VybmFtZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIsIHNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBGSU5EX1VTRVIsIFBFTkRJTkdfTk9USUZTLCBMSVNUX09GX05PVElGSUNBVElPTlMgfSBmcm9tICcuLi9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IG9uUXVlcnlDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPE5hdkJhciBxdWVyeT17cXVlcnl9IG9uUXVlcnlDaGFuZ2U9e29uUXVlcnlDaGFuZ2V9IG5vVXNlciAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgJiYgcHJvcHMudG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBwcm9wcy5zZXRUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIuX2lkIDogJ3RoaXNpc2Zha2UnXHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmc1F1ZXJ5ID0gdXNlUXVlcnkoUEVORElOR19OT1RJRlMsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiAge3VzZXJJZDogY3VycmVudFVzZXJJZH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyVU4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpIDogJ3RoaXNpc2Zha2UnXHJcbiAgICAgICAgY29uc3QgdXNlclF1ZXJ5ID0gdXNlUXVlcnkoRklORF9VU0VSLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBjdXJyZW50VXNlclVOfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgdXNlck5vdGlmcyA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCkgOiBbXVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc1F1ZXJ5ID0gdXNlUXVlcnkoTElTVF9PRl9OT1RJRklDQVRJT05TLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbnM6IHVzZXJOb3RpZnN9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBub3RpZnNRdWVyeUNvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm90aWZzUXVlcnkuZGF0YSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKG5vdGlmc1F1ZXJ5LmxvYWRpbmcpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChub3RpZnNRdWVyeS5kYXRhLmxpc3RPZk5vdGlmaWNhdGlvbnMubGVuZ3RoIDwgMSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLmxlbmd0aCkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnNbMF0udXNlckZyb20pIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBub3RpZnNRdWVyeS5kYXRhLmxpc3RPZk5vdGlmaWNhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmc0NvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcGVuZGluZ05vdGlmc1F1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jdXJyZW50VXNlciAmJiBwcm9wcy5jdXJyZW50VXNlci5wZW5kaW5nTm90aWZpY2F0aW9ucykgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIHBlbmRpbmdOb3RpZnNRdWVyeS5kYXRhLnNlYXJjaEF3YWl0aW5nTm90aWZzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXJDb25kaXRpb25zID0gKHF1ZXJ5LCByZWR1Y2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcXVlcnkuZGF0YSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKCFxdWVyeS5kYXRhLmZpbmRVc2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocmVkdWNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5LmRhdGEuZmluZFVzZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm90aWZzRmlsbGVkID0gbm90aWZzUXVlcnlDb25kaXRpb25zKClcclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzID0gcGVuZGluZ05vdGlmc0NvbmRpdGlvbnMoKVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2VyQ29uZGl0aW9ucyh1c2VyUXVlcnksIHByb3BzLmN1cnJlbnRVc2VyKVxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlcih1c2VyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwZW5kaW5nTm90aWZzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRQZW5kaW5nTm90aWZpY2F0aW9ucyhwZW5kaW5nTm90aWZzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub3RpZnNGaWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhub3RpZnNGaWxsZWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbbm90aWZzRmlsbGVkLCBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIHVzZXIsIHByb3BzLnNldEN1cnJlbnRVc2VyLCBwZW5kaW5nTm90aWZzLCBwcm9wcy5zZXRQZW5kaW5nTm90aWZpY2F0aW9ucywgcHJvcHNdKVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2QmFyIHF1ZXJ5PXtxdWVyeX0gb25RdWVyeUNoYW5nZT17b25RdWVyeUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0VG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRDdXJyZW50VXNlcjogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0UGVuZGluZ05vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRQZW5kaW5nTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcbnNldEN1cnJlbnRVc2VyXHJcbnNldFBlbmRpbmdOb3RpZmljYXRpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoTGF5b3V0KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4vLyBpbXBvcnQgbG9nb0IgZnJvbSAnLi4vc3RhdGljL3N2Zy9sb2dvL2xvZ29CLnN2ZydcclxuLy8gaW1wb3J0IGxvZ29XIGZyb20gJy4uL3N0YXRpYy9zdmcvbG9nby9sb2dvVy5zdmcnXHJcblxyXG5jb25zdCBMb2FkaW5nID0gKHByb3BzKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuc2l6ZSA9PT0gJ3NtYWxsJykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29CLnN2Z1wiIGNsYXNzTmFtZT1cImxvYWRpbmctbG9nb1wiIGFsdD1cImxvYWRpbmcgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+bG9hZGluZzwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy5jb2xvciA9PT0gJ3doaXRlJykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb1cuc3ZnXCIgY2xhc3NOYW1lPVwibG9hZGluZy1sb2dvLWxcIiBhbHQ9XCJsb2FkaW5nIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9hZGluZy10aXRsZVwiPmxvYWRpbmc8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvQi5zdmdcIiBjbGFzc05hbWU9XCJsb2FkaW5nLWxvZ28tbFwiIGFsdD1cImxvYWRpbmcgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2FkaW5nLXRpdGxlXCI+bG9hZGluZzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShMb2FkaW5nKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFVzZXJDb250YWluZXIgZnJvbSAnLi9Vc2VyQ29udGFpbmVyJ1xuaW1wb3J0IE5CIGZyb20gJy4uLy4uL3N0eWxlcy9uYXZCYXIubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBTa2lsbFN1Z2cgZnJvbSAnLi4vdGV4dC1maWVsZC9Ta2lsbFN1Z2cnXG5pbXBvcnQgVXNlck5vdGlmTGlzdCBmcm9tICcuLi91c2VyL3V0aWxpdGllcy9Vc2VyTm90aWZMaXN0J1xuaW1wb3J0IFVzZXJTUCBmcm9tICcuLi91c2VyL3V0aWxpdGllcy9Vc2VyU1AnXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uL3VzZXIvZm9ybS9TaWduSW4nXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vdXNlci9mb3JtL1JlZ2lzdGVyJ1xuaW1wb3J0IHsgY2xlYXJUb2tlbiB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xuaW1wb3J0IHsgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdXRpbGl0eVNob3duLCBzZXRVdGlsaXR5U2hvd25dID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbbWVudUl0ZW1TaG93biwgc2V0TWVudUl0ZW1TaG93bl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgY2hhbmdlVXRpbGl0eSA9IChuYW1lKSA9PiB7XG4gICAgICAgIHNldE1lbnVJdGVtU2hvd24obnVsbClcbiAgICAgICAgaWYgKG5hbWUgPT09IHV0aWxpdHlTaG93bikgc2V0VXRpbGl0eVNob3duKG51bGwpXG4gICAgICAgIGVsc2Ugc2V0VXRpbGl0eVNob3duKG5hbWUpXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlTWVudUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbSA9PT0gbWVudUl0ZW1TaG93bikgc2V0TWVudUl0ZW1TaG93bihudWxsKVxuICAgICAgICBlbHNlIHNldE1lbnVJdGVtU2hvd24oaXRlbSlcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rVG9QdXNoID0gcHJvcHMucXVlcnkgPyBgL3Jlc3VsdHMvJHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMucXVlcnkpfWAgOiAnL3Jlc3VsdHMvYWxsJ1xuICAgIFxuICAgIGNvbnN0IGVudGVyUXVlcnkgPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKGxpbmtUb1B1c2gpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgICAgICBlbnRlclF1ZXJ5KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uU3VnZ2VzdGlvbkNsaWNrZWQgPSAoc2tpbGwpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRRdWVyeSA9IHByb3BzLnF1ZXJ5LnNwbGl0KCcgJylcbiAgICAgICAgY29uc3QgbmV3UXVlcnkgPSBzcGxpdFF1ZXJ5Lmxlbmd0aCA9PT0gMSA/IGAke3NraWxsfSBgIDogYCR7c3BsaXRRdWVyeS5zbGljZSgwLCAtMSkuam9pbignICcpfSAke3NraWxsfSBgXG4gICAgICAgIHByb3BzLm9uUXVlcnlDaGFuZ2Uoe3RhcmdldDoge3ZhbHVlOiBuZXdRdWVyeX19KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgcHJvcHMuY2xlYXJUb2tlbigpXG4gICAgfVxuXG4gICAgY29uc3QgbWVudVN0eWxlID0gbWVudUl0ZW1TaG93biA/IHtib3JkZXJCb3R0b21Db2xvcjogJyMyODI4MjgnfSA6IG51bGxcbiAgICBjb25zdCBhbGVydEJhclN0eWxlID0gcHJvcHMuYWxlcnROb3RpZi5jb2xvciA/XG4gICAgICAgIHtiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmFsZXJ0Tm90aWYuY29sb3IsIGNvbG9yOiBwcm9wcy5hbGVydE5vdGlmLnRleHRDb2xvcn1cbiAgICAgICAgOlxuICAgICAgICB7ZGlzcGxheTogJ25vbmUnLCBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmFsZXJ0Tm90aWYuY29sb3IsIGNvbG9yOiBwcm9wcy5hbGVydE5vdGlmLnRleHRDb2xvcn1cblxuICAgIGlmIChwcm9wcy5ub1VzZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake05CLm5hdkNvbnRhaW5lcn0gSFdNYH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZCYXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIuaWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29CLnN2Z1wiIGFsdD1cImljb25cIiBjbGFzc05hbWU9e05CLm5hdkJhckljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XScgYXM9e2xpbmtUb1B1c2h9ICBvbkNsaWNrPXsoKSA9PiBlbnRlclF1ZXJ5KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuZXV0cmFsaXplLWxpbmsgJHtOQi5lbnRlclNlYXJjaH0gJHtOQi5zZWFyY2hIb3Zlcn1gfT48aW1nIHNyYz1cIi9zdmcvc2VhcmNoVy5zdmdcIiBjbGFzc05hbWU9e05CLnNlYXJjaEljb259IGFsdD1cInNlYXJjaFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc2VhcmNoSHJ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnF1ZXJ5fSBjbGFzc05hbWU9e05CLnNlYXJjaElucHV0fSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25RdWVyeUNoYW5nZShlKX0gb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleVByZXNzKGUpfSBwbGFjZWhvbGRlcj1cInNlYXJjaCBvciBlbnRlciBub3RoaW5nIGZvciBhbGwgcmVzdWx0c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNCU2VwYXJhdG9yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFN1Z2cgcXVlcnk9e3Byb3BzLnF1ZXJ5fSBvblN1Z2dlc3Rpb25DbGlja2VkPXtvblN1Z2dlc3Rpb25DbGlja2VkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuYWxlcnRCYXJDb250YWluZXJ9IHN0eWxlPXthbGVydEJhclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZXNzYWdlfT57cHJvcHMuYWxlcnROb3RpZi5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IHByb3BzLnJlc2V0QWxlcnQoKX0gY2xhc3NOYW1lPXtOQi5jbG9zZX0+eDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtOQi5uYXZDb250YWluZXJNfSBTV01gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkJhckNvbnRhaW5lck19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake05CLk5CQnJhbmR9IG5ldXRyYWxpemUtbGlua2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvQi5zdmdcIiBjbGFzc05hbWU9e05CLk5CTG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Vbmlsb3VzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuTkJQcmltYXJ5VXRpbGl0aWVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvc2VhcmNoU0Iuc3ZnXCIgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eSgnc2VhcmNoJyl9IGNsYXNzTmFtZT17TkIuUFVTZWFyY2h9IGFsdD1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVdGlsaXR5KCdtZW51Jyl9IGNsYXNzTmFtZT17YCR7TkIuUFVIYW1idXJnZXJDb250YWluZXJ9ICR7TkIuUE5Db250YWluZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9oYW1idXJnZXIuc3ZnXCIgY2xhc3NOYW1lPXtOQi5QVUhhbWJ1cmdlcn0gYWx0PVwibWVudVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMucmVzZXRBbGVydCgpfSBjbGFzc05hbWU9e05CLmFsZXJ0QmFyQ29udGFpbmVyfSBzdHlsZT17YWxlcnRCYXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVzc2FnZX0+e3Byb3BzLmFsZXJ0Tm90aWYubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e05CLmNsb3NlfT54PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHBlbmRpbmdOb3RpZlN0YXRzID0gcHJvcHMuY3VycmVudFVzZXIgJiYgcHJvcHMuY3VycmVudFVzZXIucGVuZGluZ05vdGlmaWNhdGlvbnMgPiAwID9cbiAgICAgICAgW05CLlBOQnViYmxlLCBwcm9wcy5jdXJyZW50VXNlci5wZW5kaW5nTm90aWZpY2F0aW9uc10gOiBbbnVsbCwgbnVsbF1cbiAgICBcbiAgICBjb25zdCBTaG93SW5TdWJOYXYgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vcmVJdGVtQnV0dG9uID0gbWVudUl0ZW1TaG93biA9PT0gJ21vcmUnID9cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbSgnbW9yZScpfSBjbGFzc05hbWU9e05CLm1lbnVJdGVtU2VsZWN0ZWR9IGFsdD1cIm1vcmVcIiAvPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL21vcmVTQi5zdmdcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbSgnbW9yZScpfSBjbGFzc05hbWU9e05CLm1lbnVJdGVtfSBhbHQ9XCJtb3JlXCIgLz5cbiAgICAgICAgaWYgKHV0aWxpdHlTaG93biA9PT0gJ21lbnUnKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBhbGxJdGVtcyA9IFtcbiAgICAgICAgICAgICAgICAvLyAgICAge25hbWU6ICdub3RpZmljYXRpb25zJywgaWNvbkI6IGJlbGxJY29uQiwgaWNvblc6IGJlbGxJY29uV30sXG4gICAgICAgICAgICAgICAgLy8gICAgIHtuYW1lOiAnZm9sbG93aW5nJywgaWNvbkI6IGhlYXJ0SWNvbkIsIGljb25XOiBoZWFydEljb25XfSxcbiAgICAgICAgICAgICAgICAvLyBdXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90aWZJdGVtQnV0dG9uID0gbWVudUl0ZW1TaG93biA9PT0gJ25vdGlmaWNhdGlvbnMnID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbSgnbm90aWZpY2F0aW9ucycpfSBjbGFzc05hbWU9e2Ake05CLm1lbnVJdGVtU2VsZWN0ZWR9ICR7TkIuUE5Db250YWluZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmVsbEljb25XfSAgY2xhc3NOYW1lPXtOQi5ub3RpZmljYXRpb25JdGVtfSBhbHQ9eydub3RpZmljYXRpb25zJ30ga2V5PXtgVU8keydub3RpZmljYXRpb25zJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BlbmRpbmdOb3RpZlN0YXRzWzBdfSA+e3BlbmRpbmdOb3RpZlN0YXRzWzFdfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKCdub3RpZmljYXRpb25zJyl9IGNsYXNzTmFtZT17YCR7TkIubWVudUl0ZW19ICR7TkIuUE5Db250YWluZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvYmVsbEIuc3ZnXCIgY2xhc3NOYW1lPXtOQi5ub3RpZmljYXRpb25JdGVtfSBhbHQ9eydub3RpZmljYXRpb25zJ30ga2V5PXtgVU8keydub3RpZmljYXRpb25zJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BlbmRpbmdOb3RpZlN0YXRzWzBdfSA+e3BlbmRpbmdOb3RpZlN0YXRzWzFdfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGxvd2luZ0l0ZW1CdXR0b24gPSBtZW51SXRlbVNob3duID09PSAnZm9sbG93aW5nJyA/IFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvaGVhcnRXLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKCdmb2xsb3dpbmcnKX0gY2xhc3NOYW1lPXtOQi5tZW51SXRlbVNlbGVjdGVkfSBhbHQ9eydmb2xsb3dpbmcnfSBrZXk9e2BVTyR7J2ZvbGxvd2luZyd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvaGVhcnRCLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKCdmb2xsb3dpbmcnKX0gY2xhc3NOYW1lPXtOQi5tZW51SXRlbX0gYWx0PXsnZm9sbG93aW5nJ30ga2V5PXtgVU8keydmb2xsb3dpbmcnfWB9IC8+XG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkJhclN1YkNvbnRhaW5lck19IHN0eWxlPXttZW51U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0Zm9ybXBhZ2VcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbShudWxsKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIubWVudUl0ZW19IHN0eWxlPXt7cGFkZGluZzogMCwgbWFyZ2luOiAwfX0+PGltZyBzcmM9XCIvc3ZnL3BsdXNCLnN2Z1wiIGNsYXNzTmFtZT17TkIubWVudUl0ZW19IGFsdD1cImFkZCBwcm9qZWN0XCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwidXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke3Byb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lfWB9IG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKG51bGwpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtOQi5tZW51SXRlbX0gc3R5bGU9e3twYWRkaW5nOiAwLCBtYXJnaW46IDB9fT48aW1nIHNyYz1cIi9zdmcvdXNlclNCLnN2Z1wiIGNsYXNzTmFtZT17TkIubWVudUl0ZW19IGFsdD1cInVzZXIgcGFnZVwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vdGlmSXRlbUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xsb3dpbmdJdGVtQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2V4aXRCLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ291dCgpfSBjbGFzc05hbWU9e05CLm1lbnVJdGVtfSBhbHQ9XCJsb2cgb3V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3JlSXRlbUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBbJ3NpZ24gaW4nLCAncmVnaXN0ZXInXVxuICAgICAgICAgICAgY29uc3QgbW9kYWxJdGVtQnV0dG9ucyA9IGFsbEl0ZW1zLm1hcChpID0+IG1lbnVJdGVtU2hvd24gPT09IGkgPyBcbiAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gY2hhbmdlTWVudUl0ZW0oaSl9IGNsYXNzTmFtZT17TkIubWVudUl0ZW1TZWxlY3RlZH0ga2V5PXtgTUkke2l9YH0gPntpfTwvaDM+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbShpKX0gY2xhc3NOYW1lPXtOQi5tZW51SXRlbX0ga2V5PXtgTUkke2l9YH0gPntpfTwvaDM+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtOQi5uYXZCYXJTdWJDb250YWluZXJNfSAke05CLmxvZ2luQmFyfWB9IHN0eWxlPXttZW51U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7bW9kYWxJdGVtQnV0dG9uc31cbiAgICAgICAgICAgICAgICAgICAge21vcmVJdGVtQnV0dG9ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cblxuICAgIGNvbnN0IE1lbnVJdGVtVG9TaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAobWVudUl0ZW1TaG93biA9PT0gJ3NpZ24gaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZW51TW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8U2lnbkluIG5vQkc9e3RydWV9IGNoYW5nZU1lbnVJdGVtPXtjaGFuZ2VNZW51SXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVudUl0ZW1TaG93biA9PT0gJ3JlZ2lzdGVyJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudU1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFJlZ2lzdGVyIG5vQkc9e3RydWV9IGNoYW5nZU1lbnVJdGVtPXtjaGFuZ2VNZW51SXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVudUl0ZW1TaG93biA9PT0gJ25vdGlmaWNhdGlvbnMnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZW51TW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+bm90aWZpY2F0aW9uczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxVc2VyTm90aWZMaXN0IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lbnVJdGVtU2hvd24gPT09ICdmb2xsb3dpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZW51TW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+c2F2ZWQgcG9zdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8VXNlclNQIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lbnVJdGVtU2hvd24gPT09ICdtb3JlJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudU1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0L1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPjxoMSBjbGFzc05hbWU9e05CLm1vcmVMaW5rfT5jb250YWN0IHVzPC9oMT48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCBzaG93V2hlblNCID0gdXRpbGl0eVNob3duID09PSAnc2VhcmNoJyA/IHtkaXNwbGF5OiAnYmxvY2snfSA6IHtkaXNwbGF5OiAnbm9uZSd9XG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake05CLm5hdkNvbnRhaW5lcn0gSFdNYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkJhckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIuaWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgYWx0PVwiaWNvblwiIGNsYXNzTmFtZT17TkIubmF2QmFySWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc2VhcmNoQmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9yZXN1bHRzL1tzZWFyY2hRdWVyeV0nIGFzPXtsaW5rVG9QdXNofSAgb25DbGljaz17KCkgPT4gZW50ZXJRdWVyeSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuZXV0cmFsaXplLWxpbmsgJHtOQi5lbnRlclNlYXJjaH0gJHtOQi5zZWFyY2hIb3Zlcn1gfT48aW1nIHNyYz1cIi9zdmcvc2VhcmNoVy5zdmdcIiBjbGFzc05hbWU9e05CLnNlYXJjaEljb259IGFsdD1cInNlYXJjaFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaEhyfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3doaXRlJ319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnF1ZXJ5fSBjbGFzc05hbWU9e05CLnNlYXJjaElucHV0fSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25RdWVyeUNoYW5nZShlKX0gb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleVByZXNzKGUpfSBwbGFjZWhvbGRlcj1cInNlYXJjaCBvciBlbnRlciBub3RoaW5nIGZvciBhbGwgcmVzdWx0c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU0JTZXBhcmF0b3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxTdWdnIHF1ZXJ5PXtwcm9wcy5xdWVyeX0gb25TdWdnZXN0aW9uQ2xpY2tlZD17b25TdWdnZXN0aW9uQ2xpY2tlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxVc2VyQ29udGFpbmVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLmFsZXJ0QmFyQ29udGFpbmVyfSBzdHlsZT17YWxlcnRCYXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZXNzYWdlfT57cHJvcHMuYWxlcnROb3RpZi5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgb25DbGljaz17KCkgPT4gcHJvcHMucmVzZXRBbGVydCgpfSBjbGFzc05hbWU9e05CLmNsb3NlfT54PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake05CLm5hdkNvbnRhaW5lck19IFNXTWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZCYXJDb250YWluZXJNfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuTkJCcmFuZH0gbmV1dHJhbGl6ZS1saW5rYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgY2xhc3NOYW1lPXtOQi5OQkxvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Vbmlsb3VzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuTkJQcmltYXJ5VXRpbGl0aWVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9zZWFyY2hTQi5zdmdcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVdGlsaXR5KCdzZWFyY2gnKX0gY2xhc3NOYW1lPXtOQi5QVVNlYXJjaH0gYWx0PVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eSgnbWVudScpfSBjbGFzc05hbWU9e2Ake05CLlBVSGFtYnVyZ2VyQ29udGFpbmVyfSAke05CLlBOQ29udGFpbmVyfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9oYW1idXJnZXIuc3ZnXCIgY2xhc3NOYW1lPXtOQi5QVUhhbWJ1cmdlcn0gYWx0PVwibWVudVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3BlbmRpbmdOb3RpZlN0YXRzWzBdfSAke05CLlBOQnViYmxlSGFtYnVyZ2VyfWB9PntwZW5kaW5nTm90aWZTdGF0c1sxXX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLnJlc2V0QWxlcnQoKX0gY2xhc3NOYW1lPXtOQi5hbGVydEJhckNvbnRhaW5lcn0gc3R5bGU9e2FsZXJ0QmFyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVzc2FnZX0+e3Byb3BzLmFsZXJ0Tm90aWYubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17TkIuY2xvc2V9Png8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZCYXJTdWJDb250YWluZXJ9IHN0eWxlPXtzaG93V2hlblNCfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVzdWx0cy9bc2VhcmNoUXVlcnldJyBhcz17bGlua1RvUHVzaH0gIG9uQ2xpY2s9eygpID0+IGVudGVyUXVlcnkoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbmV1dHJhbGl6ZS1saW5rICR7TkIuZW50ZXJTZWFyY2h9ICR7TkIuc2VhcmNoSG92ZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9zZWFyY2hXLnN2Z1wiIGNsYXNzTmFtZT17TkIuc2VhcmNoSWNvbn0gYWx0PVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc2VhcmNoSHJ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBoZWlnaHQ6ICcwJ319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnF1ZXJ5fSBjbGFzc05hbWU9e05CLnNlYXJjaElucHV0fSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25RdWVyeUNoYW5nZShlKX0gb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleVByZXNzKGUpfSBwbGFjZWhvbGRlcj1cInNlYXJjaCBvciBlbnRlciBub3RoaW5nIGZvciBhbGwgcmVzdWx0c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxTdWdnIHF1ZXJ5PXtwcm9wcy5xdWVyeX0gb25TdWdnZXN0aW9uQ2xpY2tlZD17b25TdWdnZXN0aW9uQ2xpY2tlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNob3dJblN1Yk5hdiAvPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVRvU2hvdyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy8gTmF2QmFyID0gd2l0aFJvdXRlcihOYXZCYXIpXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXHRyZXR1cm4ge1xuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcbiAgICAgICAgYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZlxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyVG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclRva2VuLCBkaXNwYXRjaCksXG4gICAgICAgIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXG4gICAgfVxufVxuXG5jbGVhclRva2VuXG5yZXNldEFsZXJ0XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShOYXZCYXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBVQyBmcm9tICcuLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBOb3RMb2dnZWQgZnJvbSAnLi4vdXNlci9zdHJ1Y3R1cmUvTm90TG9nZ2VkJ1xyXG5pbXBvcnQgTG9nZ2VkIGZyb20gJy4uL3VzZXIvc3RydWN0dXJlL0xvZ2dlZCdcclxuXHJcblxyXG5jb25zdCBVc2VyQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBsb2dTdGF0ZVRvU2hvdyA9IHByb3BzLnRva2VuID8gPExvZ2dlZCAvPiA6IDxOb3RMb2dnZWQgLz5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VUMudXNlcldyYXBwZXJ9PlxyXG4gICAgICAgICAgICB7bG9nU3RhdGVUb1Nob3d9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHNcclxuKShVc2VyQ29udGFpbmVyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgUkVNT1ZFX1NBVkVEX1BPU1QgfSBmcm9tICcuLi8uLi9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXJQb3N0cywgc2V0Q3VycmVudFVzZXJTUCB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCB7IHRyaWdnZXJBbGVydCwgcGFsbGV0dGVHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuaW1wb3J0IFBUIGZyb20gJy4uLy4uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBQb3N0U21hbGwgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgWyBkZWxldGVQb3N0TXV0YXRpb24gXSA9IHVzZU11dGF0aW9uKERFTEVURV9QT1NULCB7XHJcbiAgICAvLyAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIC8vIH0pXHJcbiAgICBjb25zdCBbIHJlbW92ZVNQTXV0YXRpb24gXSA9IHVzZU11dGF0aW9uKFJFTU9WRV9TQVZFRF9QT1NULCB7XHJcbiAgICAgICAgb25FcnJvcjogaGFuZGxlRXJyb3JcclxuICAgIH0pXHJcbiAgICBjb25zdCBwID0gcHJvcHMucG9zdFxyXG4gICAgY29uc3QgdXNlciA9IHByb3BzLnBvc3QudXNlciA/IHByb3BzLnBvc3QudXNlci51c2VybmFtZSA6IHByb3BzLnVzZXJcclxuICAgIGNvbnN0IHBhbGxldHRlID0gcGFsbGV0dGVHZW5lcmF0b3IocC5jb2xvcikuY29sb3JQYWxsZXR0ZVxyXG4gICAgLy8gY29uc3QgaGFuZGxlUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlbGV0ZVBvc3RNdXRhdGlvbih7XHJcbiAgICAvLyAgICAgICAgIHZhcmlhYmxlczoge3Bvc3RJZDogcHJvcHMucG9zdC5faWR9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAvLyAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyUG9zdHMocHJvcHMuY3VycmVudFVzZXIucG9zdHMuZmlsdGVyKHAgPT4gcC5faWQgIT09IHByb3BzLnBvc3QuX2lkKSlcclxuICAgIC8vICAgICAgICAgdHJpZ2dlckFsZXJ0KCdkYW5nZXInLCBgZGVsZXRlZCAkOiBkZWxldGVkIHBvc3QgJyR7cC50aXRsZX0nYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZVJlbW92ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZW1vdmVTUE11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiBwcm9wcy5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ6IHAuX2lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2F2ZWRQb3N0cyA9IHByb3BzLmN1cnJlbnRVc2VyLnNhdmVkUG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC5faWQgIT09IHAuX2lkKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlclNQKG5ld1NhdmVkUG9zdHMpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnZGFuZ2VyJywgYHVuZm9sbG93ZWQkOiB1bmZvbGxvd2VkIHBvc3QgJyR7cC50aXRsZX0nYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gJ3NhdmVkJykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0V3JhcHBlclNtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29sb3JJbmRpY2F0b3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwYWxsZXR0ZS5jb2xvcn19IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQodXNlcil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BULlBIVXNlcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1BULlBIVUljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bdGl0bGVdXCIgYXM9e2AvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwLnRpdGxlKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17UFQucG9zdFRpdGxlfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzdweCd9fT57cC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmVSZW1vdmUoKX0gY2xhc3NOYW1lPXtQVC5wb3N0U21SZW1vdmV9Png8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wcy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgIGlmICh1c2VyID09PSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RXcmFwcGVyU219PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29sb3JJbmRpY2F0b3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwYWxsZXR0ZS5jb2xvcn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQodXNlcil9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7UFQuUEhVc2VyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1BULlBIVUljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1t0aXRsZV1cIiBhcz17YC9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHAudGl0bGUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1BULnBvc3RUaXRsZX0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3cHgnfX0+e3AudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZSgpfSBjbGFzc05hbWU9XCJwb3N0LXNtLXJlbW92ZVwiPng8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0V3JhcHBlclNtfSBzdHlsZT17e2dyaWRUZW1wbGF0ZUNvbHVtbnM6ICc4cHggYXV0byd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb2xvckluZGljYXRvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBhbGxldHRlLmNvbG9yfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudCh1c2VyKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtQVC5QSFVzZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1BULlBIVUljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3RpdGxlXVwiIGFzPXtgL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocC50aXRsZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1BULnBvc3RUaXRsZX0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3cHgnfX0+e3AudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIHsgc2V0Q3VycmVudFVzZXJQb3N0cywgc2V0Q3VycmVudFVzZXJTUCwgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfVxyXG4pKFBvc3RTbWFsbCkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBQb3N0U21hbGwgZnJvbSAnLi4vcG9zdC9Qb3N0U21hbGwnXHJcblxyXG5jb25zdCBQb3N0U21hbGxMaXN0ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcG9zdExpc3RSZWFkeSA9IHByb3BzLnBvc3RzLm1hcChwID0+IDxQb3N0U21hbGwgcG9zdD17cH0gdXNlcj17cC51c2VyLnVzZXJuYW1lfSBrZXk9e2BQU0wke3AudGl0bGV9YH0gLz4pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtwb3N0TGlzdFJlYWR5fVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vLyBcdHJldHVybiB7XHJcbi8vICAgICAgICAgXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoUG9zdFNtYWxsTGlzdCkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY29uc3QgRm9ybUNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBzaWduSW5XYXJuaW5nID0gcHJvcHMudG9rZW4gPyBudWxsIDogKFxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3YXJuaW5nLWNvbnRhaW5lclwiPm11c3QgYmUgc2lnbmVkIHRvIHBlcmZvcm0gdGhlIHRoZXNlIGFjdGlvbnM8L2gzPlxyXG4gICAgKVxyXG4gICAgaWYgKGV4cGFuZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlclRvcENvbG9yOiBwcm9wcy5wYWxsZXR0ZS5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0gY2xhc3NOYW1lPVwiZXhwYW5kZWQtb3ZlcmxheSBTV01cIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcHJvcHMucGFsbGV0dGUuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBhbGxldHRlLnNocmlua0ljb259IGNsYXNzTmFtZT1cIm92ZXJsYXktaW1hZ2UtZXhwYW5kZWRcIiBhbHQ9XCJzaHJpbmsgZm9ybVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpZ25Jbldhcm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyIEhXTVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyVG9wQ29sb3I6IHByb3BzLnBhbGxldHRlLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpZ25Jbldhcm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlci1tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IGNsYXNzTmFtZT1cImV4cGFuZC1vdmVybGF5IFNXTVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5wYWxsZXR0ZS5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wYWxsZXR0ZS5oYW5kc2hha2VJY29ufSBjbGFzc05hbWU9XCJvdmVybGF5LWltYWdlXCIgYWx0PVwiZXhwYW5kIGZvcm1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlblxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzXHJcbikoRm9ybUNvbnRhaW5lcikiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgSUggZnJvbSAnLi4vLi4vc3R5bGVzL2lucHV0SGVhZGVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBJbnB1dEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBpZiAoIXByb3BzLmluZm8pIHtcclxuICAgICAgICByZXR1cm4gPGxhYmVsIGh0bWxGb3I9e3Byb3BzLmlucHV0Rm9yfT48aDMgY2xhc3NOYW1lPXtJSC5pbmZvVGl0bGVUZXh0fT57cHJvcHMudGl0bGV9PC9oMz48L2xhYmVsPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dJbmZvID0gZXhwYW5kZWQgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfSBcclxuICAgIGNvbnN0IGNvbG9ySW5mbyA9IHByb3BzLmNvbG9yID09PSAnd2hpdGUnID9cclxuICAgICAgICB7dGV4dENvbG9yOiAnIzI4MjgyOCcsIGljb246ICcvc3ZnL2luZm9CLnN2Zyd9IDoge3RleHRDb2xvcjogJ3doaXRlJywgaWNvbjogJy9zdmcvaW5mb1cuc3ZnJ31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0lILmZvcm1JbmZvQ29udGFpbmVyfSBzdHlsZT17e2NvbG9yOiBjb2xvckluZm8udGV4dENvbG9yfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtJSC5pbmZvSGVhZGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5pbnB1dEZvcn0+PGgzIGNsYXNzTmFtZT17SUguaW5mb1RpdGxlVGV4dH0+e3Byb3BzLnRpdGxlfTwvaDM+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0gc3JjPXtjb2xvckluZm8uaWNvbn0gY2xhc3NOYW1lPXtJSC5pbmZvSWNvbn0gYWx0PVwiaW5mb1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SUguaW5mb0NvbnRlbnR9IHN0eWxlPXtzaG93SW5mb30+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKElucHV0SGVhZGVyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB3ZWJzaXRlU3RhdHMgfSBmcm9tICcuLi8uLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuXHJcbmNvbnN0IFJlZmVyZW5jZUxpbmsgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJlZmVyZW5jZUxpbmtDb250ZW50ID0gd2Vic2l0ZVN0YXRzKHByb3BzLnJsKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmZXJlbmNlTGluay13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmZXJlbmNlTGluay1jb250YWluZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcmVmZXJlbmNlTGlua0NvbnRlbnQuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWZlcmVuY2VMaW5rQ29udGVudC5pY29ufSBjbGFzc05hbWU9XCJSTC1pY29uXCIgYWx0PXtyZWZlcmVuY2VMaW5rQ29udGVudC50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLnJsfSBjbGFzc05hbWU9XCJSTC1saW5rIG5ldXRyYWxpemUtbGlua1wiIHN0eWxlPXt7Y29sb3I6IHJlZmVyZW5jZUxpbmtDb250ZW50LmNvbG9yfX0+PGRpdiBzdHlsZT17e21hcmdpbjogJ2F1dG8nLCBmb250V2VpZ2h0OiAnYm9sZCd9fT57cHJvcHMucmx9PC9kaXY+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKFJlZmVyZW5jZUxpbmspIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IFNLSUxMX1NFQVJDSCB9IGZyb20gJy4uLy4uL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcclxuXHJcbmNvbnN0IFNraWxsU3VnZyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgc3BsaXRRdWVyeSA9IHByb3BzLnF1ZXJ5LnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKVxyXG4gICAgY29uc3QgbGFzdFdvcmQgPSBzcGxpdFF1ZXJ5LnNsaWNlKC0xKSA9PT0gJycgPyBzcGxpdFF1ZXJ5LnNsaWNlKC0yLCAtMSlbMF0gOiBzcGxpdFF1ZXJ5LnNsaWNlKC0xKVswXVxyXG4gICAgY29uc3QgW3NraWxscywgc2V0U2tpbGxzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3Qgc2tpbGxTZWFyY2hRdWVyeSA9IHVzZVF1ZXJ5KFNLSUxMX1NFQVJDSCwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge2ZpbHRlcjogbGFzdFdvcmR9XHJcbiAgICB9KVxyXG4gICAgY29uc3Qgc2tpbGxDb25kaXRpb25zID0gKHF1ZXJ5LCByZWR1Y2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFxdWVyeSkgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAoIXF1ZXJ5LnNraWxsU2VhcmNoKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIHJldHVybiBxdWVyeS5za2lsbFNlYXJjaFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNraWxsc0xpc3QgPSBza2lsbENvbmRpdGlvbnMoc2tpbGxTZWFyY2hRdWVyeS5kYXRhLCBza2lsbHMpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChza2lsbHNMaXN0KSB7XHJcbiAgICAgICAgICAgIHNldFNraWxscyhza2lsbHNMaXN0KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtza2lsbHNMaXN0LCBza2lsbHNdKVxyXG5cclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zVG9TaG93ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChza2lsbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHNraWxscy5tYXAocyA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uU3VnZ2VzdGlvbkNsaWNrZWQocy5uYW1lKX0gY2xhc3NOYW1lPVwic2VhcmNoLXN1Z2dlc3Rpb25cIiBrZXk9e2BTUyR7cy5uYW1lfWB9PntzLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2dyaWRDb2x1bW46ICcxLzMnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnNXZoJ319Lz5cclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWdnZXN0aW9uc1N0eWxlID0gc2tpbGxzLmxlbmd0aCAhPT0gMCAmJiBwcm9wcy5xdWVyeSAhPT0gJycgJiYgbGFzdFdvcmQgIT09ICcnID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXN1Z2dlc3Rpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1zdWdnZXN0aW9uc1wiIHN0eWxlPXtzdWdnZXN0aW9uc1N0eWxlfT5cclxuICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9uc1RvU2hvdygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKFNraWxsU3VnZykiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBDUkVBVEVfVVNFUiwgTE9HSU4gfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IElucHV0SGVhZGVyIGZyb20gJy4uLy4uL3RleHQtZmllbGQvSW5wdXRIZWFkZXInXHJcbmltcG9ydCB7IHVzZUZpZWxkLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB1c2VGaWVsZCgncGFzc3dvcmQnKVxyXG4gICAgY29uc3QgcmVQYXNzd29yZCA9IHVzZUZpZWxkKCdwYXNzd29yZCcpXHJcbiAgICBjb25zdCBlbWFpbCA9IHVzZUZpZWxkKCdlbWFpbCcpXHJcbiAgICBjb25zdCByZWZlcmVuY2VMaW5rID0gdXNlRmllbGQoJ3VybCcpXHJcblxyXG4gICAgY29uc3Qgb25FcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsZWFuZWRNZXNzYWdlID0gZS5tZXNzYWdlXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVmZXJlbmNlTGluay5maWVsZHMudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxyXG4gICAgICAgIGlmIChjbGVhbmVkTWVzc2FnZS5pbmNsdWRlcygndXNlcm5hbWUnKSkgY2xlYW5lZE1lc3NhZ2UgPSBgdXNlcm5hbWUkOiAke3VzZXJuYW1lLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIGlmIChjbGVhbmVkTWVzc2FnZS5pbmNsdWRlcygncmVmZXJlbmNlTGluaycpKSBjbGVhbmVkTWVzc2FnZSA9IGByZWZlcmVuY2UgbGluayQ6ICR7cmVmZXJlbmNlTGluay5maWVsZHMudmFsdWV9IGlzIGFscmVhZHkgYmVpbmcgdXNlZGBcclxuICAgICAgICBpZiAoY2xlYW5lZE1lc3NhZ2UuaW5jbHVkZXMoJ2VtYWlsJykpIGNsZWFuZWRNZXNzYWdlID0gYGVtYWlsJDogJHtlbWFpbC5maWVsZHMudmFsdWV9IGlzIGFscmVhZHkgYmVpbmcgdXNlZGBcclxuICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCBjbGVhbmVkTWVzc2FnZSwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkxvZ2luRXJyb3IgPSAoZSkgPT4gY29uc29sZS5sb2coZSlcclxuXHJcbiAgICBjb25zdCBbcmVnaXN0ZXJNdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihDUkVBVEVfVVNFUiwgeyBvbkVycm9yIH0pXHJcbiAgICBjb25zdCBbbG9naW5NdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihMT0dJTiwge29uRXJyb3I6IG9uTG9naW5FcnJvcn0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1bWJpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmZpZWxkcy52YWx1ZSAhPT0gcmVQYXNzd29yZC5maWVsZHMudmFsdWUpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ3Bhc3N3b3JkJDogcGFzc3dvcmQgYW5kIHJlLXBhc3N3b3JkIGRpZCBub3QgbWF0Y2gnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF1c2VybmFtZS5maWVsZHMudmFsdWUubGVuZ3RoIHx8ICFwYXNzd29yZC5maWVsZHMudmFsdWUubGVuZ3RoIHx8ICFyZVBhc3N3b3JkLmZpZWxkcy52YWx1ZS5sZW5ndGggfHwgIXJlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnYWxsJDogYWxsIGZpZWxkcyBtdXN0IGJlIGZpbGxlZCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWdpc3Rlck11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUxpbms6IHJlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jaGFuZ2VNZW51SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlTWVudUl0ZW0obnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBsb2dpblJlc3VsdCA9IGF3YWl0IGxvZ2luTXV0YXRpb24oe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQuZmllbGRzLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9naW5SZXN1bHQuZGF0YS5sb2dpbi52YWx1ZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUuZmllbGRzLnZhbHVlKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRUb2tlbih0b2tlbilcclxuICAgICAgICAgICAgdXNlcm5hbWUucmVzZXQoKVxyXG4gICAgICAgICAgICBwYXNzd29yZC5yZXNldCgpXHJcbiAgICAgICAgICAgIHJlUGFzc3dvcmQucmVzZXQoKVxyXG4gICAgICAgICAgICBlbWFpbC5yZXNldCgpXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmsucmVzZXQoKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCAncmVnaXN0ZXJlZCQ6IGFjY291bnQgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuIHNpZ25pbmcgeW91IGluIG5vdy4nLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmdTdHlsZSA9IHByb3BzLm5vQkcgPyB7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9IDogbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJGb3JtQ29udGFpbmVyfSBzdHlsZT17YmdTdHlsZX0+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17VVIudXNlckZvcm19IG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VtYml0KGUpfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXVzZXJuYW1lXCIgaW5mbz17ZmFsc2V9IHRpdGxlPVwidXNlcm5hbWVcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnVzZXJuYW1lLmZpZWxkc30gaWQ9XCJTSS11c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1wYXNzd29yZFwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInBhc3N3b3JkXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5wYXNzd29yZC5maWVsZHN9IGlkPVwiU0ktcGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcmVQYXNzd29yZFwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInJlLXR5cGUgcGFzc3dvcmRcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnJlUGFzc3dvcmQuZmllbGRzfSBpZD1cIlNJLXJlUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLWVtYWlsXCIgaW5mbz17dHJ1ZX0gdGl0bGU9XCJlbWFpbFwiIGNvbG9yPVwiZGFya1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXJnaW46IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnVudGlsbCBmdXJ0aGVyIHBvbGljeSBjaGFuZ2VzIG5vIGVtYWlscyBhcmUgc2VudCB5b3VyIHdheTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5vbmx5IHNob3duIHRvIHVzZXJzIHdobyB5b3UgYWNjZXB0IGFmdGVyIGNvbnRhY3RpbmcgeW91IGRpcmVjdGx5IChub3QgdGhyb3VnaCBwb3N0KTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4uZW1haWwuZmllbGRzfSBpZD1cIlNJLWVtYWlsXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1yZWZlcmVuY2VMaW5rXCIgaW5mbz17dHJ1ZX0gdGl0bGU9XCJyZXN1bWUgbGlua1wiIGNvbG9yPVwiZGFya1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbjogMCwgbWFyZ2luQm90dG9tOiAnNXB4J319Pmxpbmsgb24geW91ciB1c2VyIHBhZ2UgdXNlZCBhcyBhIHJlc3VtZSB0byBkZW1vbnN0cmF0ZSB5b3VyIGFiaWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW46IDAsIG1hcmdpbkJvdHRvbTogJzVweCd9fT48c3Ryb25nPmFsd2F5cyB2aWV3IGFub3RoZXIgdXNlcnMgcG9ydGFmb2xpbyBsaW5rIGJlZm9yZSB3b3JraW5nIHdpdGggdGhlbTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXJnaW46IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnNpdGVzIHJlY29tbWVuZGVkOiA8c3Ryb25nPkxpbmtlZEluPC9zdHJvbmc+LCA8c3Ryb25nPkluZGVlZDwvc3Ryb25nPiwgPHN0cm9uZz5HaXRIdWI8L3N0cm9uZz4sIG9yIDxzdHJvbmc+RmFjZWJvb2s8L3N0cm9uZz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+dG8gZnVydGhlciBlbnN1cmUgeW91ciBwb3J0YWZvbGlvIGxpbmsgaXMgdHJ1c3R3b3J0aHksIGxpbmsgeW91ciBVbmlsb3VzIGFjY291dCBmcm9tIHlvdXIgcG9ydGFmb2xpbyBsaW5rPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5yZWZlcmVuY2VMaW5rLmZpZWxkc30gaWQ9XCJTSS1yZWZlcmVuY2VMaW5rXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtVUi5VRlN1Ym1pdH0gdHlwZT1cInN1Ym1pdFwiPjxoMz5yZWdpc3RlcjwvaDM+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy9cdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vXHR9XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbCxcclxuICAgIHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQsIHNldFRva2VuIH1cclxuKShSZWdpc3RlcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBMT0dJTiB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyB1c2VGaWVsZCwgdHJpZ2dlckFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vc3JjL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdG9rZW4nXHJcbmltcG9ydCBJbnB1dEhlYWRlciBmcm9tICcuLi8uLi90ZXh0LWZpZWxkL0lucHV0SGVhZGVyJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB1c2VGaWVsZCgncGFzc3dvcmQnKVxyXG5cclxuICAgIGNvbnN0IG9uRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBjbGVhbmVkTWVzc2FnZSA9IGUubWVzc2FnZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNsZWFuZWRNZXNzYWdlKVxyXG4gICAgICAgIGNsZWFuZWRNZXNzYWdlID0gY2xlYW5lZE1lc3NhZ2Uuc3BsaXQoJzonKVxyXG4gICAgICAgIGNsZWFuZWRNZXNzYWdlID0gY2xlYW5lZE1lc3NhZ2Uuc2xpY2UoMSwgY2xlYW5lZE1lc3NhZ2UubGVuZ3RoKS5qb2luKCckOicpXHJcbiAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgY2xlYW5lZE1lc3NhZ2UsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3NpZ25Jbk11dGF0aW9uXSA9IHVzZU11dGF0aW9uKExPR0lOLCB7IG9uRXJyb3IgfSlcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtYml0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW5NdXRhdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC5maWVsZHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuY2hhbmdlTWVudUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZU1lbnVJdGVtKG51bGwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXN1bHQuZGF0YS5sb2dpbi52YWx1ZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUuZmllbGRzLnZhbHVlKVxyXG4gICAgICAgICAgICB1c2VybmFtZS5yZXNldCgpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLnJlc2V0KClcclxuICAgICAgICAgICAgcHJvcHMuc2V0VG9rZW4odG9rZW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJnU3R5bGUgPSBwcm9wcy5ub0JHID8ge2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfSA6IG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyRm9ybUNvbnRhaW5lcn0gc3R5bGU9e2JnU3R5bGV9PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1VSLnVzZXJGb3JtfSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1bWJpdChlKX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS11c2VybmFtZVwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInVzZXJuYW1lXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi51c2VybmFtZS5maWVsZHN9IGlkPVwiU0ktdXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJwYXNzd29yZFwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucGFzc3dvcmQuZmllbGRzfSBpZD1cIlNJLXBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtVUi5VRlN1Ym1pdH0gdHlwZT1cInN1Ym1pdFwiPjxoMz5zaWduIGluPC9oMz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy8gXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vLyBcdH1cclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbCxcclxuICAgIHsgc2V0VG9rZW4sIHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShTaWduSW4pIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IEZJTkRfVVNFUiB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgY2xlYXJUb2tlbiB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgVXNlck5vdGlmTGlzdCBmcm9tICcuLi91dGlsaXRpZXMvVXNlck5vdGlmTGlzdCdcclxuaW1wb3J0IFVzZXJTUCBmcm9tICcuLi91dGlsaXRpZXMvVXNlclNQJ1xyXG5pbXBvcnQgVVUgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlclV0aWxpdGllcy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IExvZ2dlZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dVdGlsaXRpZXMsIHNldFNob3dVdGlsaXRpZXNdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFt1dGlsaXR5U2hvd24sIHNldFV0aWxpdHlTaG93bl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VXNlclVOID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSA6ICdmYWtlVXNlcidcclxuICAgIGNvbnN0IHVzZXJRdWVyeSA9IHVzZVF1ZXJ5KEZJTkRfVVNFUiwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBjdXJyZW50VXNlclVOfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHVzZXJRdWVyeUNvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB1c2VyUXVlcnkuZGF0YVxyXG4gICAgICAgIGNvbnN0IHJlZHVjZXIgPSBwcm9wcy5jdXJyZW50VXNlclxyXG4gICAgICAgIGlmICghcXVlcnkpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIGlmICghcXVlcnkuZmluZFVzZXIpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIGlmIChyZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeS5maW5kVXNlci51c2VybmFtZSA9PT0gcmVkdWNlci51c2VybmFtZSkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBxdWVyeS5maW5kVXNlclxyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlclJlc3VsdCA9IHVzZXJRdWVyeUNvbmRpdGlvbnMoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJSZXN1bHQpIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXIodXNlclJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMsIHByb3BzLmN1cnJlbnRVc2VyLCB1c2VyUmVzdWx0XSlcclxuXHJcbiAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1VSLnVzZXJDb250YWluZXJ9ICR7VVIuTEdEVXNlckNvbnRhaW5lcn1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyT3B0aW9uc1NwbGl0dGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIudXNlckljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCIvc3ZnL3VzZXJXLnN2Z1wiIGNsYXNzTmFtZT1cInVzZXItaWNvblwiIGFsdD1cInVzZXJcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJCYW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICAgICAgcHJvcHMuY2xlYXJUb2tlbigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVXRpbGl0eVNob3duID0gKGNoYW5nZVRvKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYW5nZVRvID09PSB1dGlsaXR5U2hvd24pIHtcclxuICAgICAgICAgICAgc2V0VXRpbGl0eVNob3duKG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRVdGlsaXR5U2hvd24oY2hhbmdlVG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNob3dVdGlsaXRpZXModHJ1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVNob3dVdGlsaXRpZXMgPSAoY2hhbmdlVG8pID0+IHtcclxuICAgICAgICBpZiAoIWNoYW5nZVRvKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dVdGlsaXRpZXMoY2hhbmdlVG8pXHJcbiAgICAgICAgICAgIHNldFV0aWxpdHlTaG93bihudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2hvd1V0aWxpdGllcyhjaGFuZ2VUbylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VybmFtZUljb24gPSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKVxyXG5cclxuICAgIGNvbnN0IGljb25Ub1Nob3cgPSBzaG93VXRpbGl0aWVzID9cclxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7VVIudXNlckljb25Db250YWluZXJ9ICR7VVIuVUlDSH0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtVUi51c2VyVXNlcm5hbWVJY29ufSAke1VSLnVzZXJJY29uSG92ZXJ9YH0+e3VzZXJuYW1lSWNvbn08L2gxPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1c2VyLWljb24tY29udGFpbmVyIFVJQ0hcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyVy5zdmdcIiBjbGFzc05hbWU9e2Ake1VSLnVzZXJJY29ufSAke1VSLnVzZXJJY29uSG92ZXJ9YH0gYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgY29uc3QgYmFzaWNTdHlsZXMgPSB7dXNlcjoge2NsYXNzTmFtZTogJycsIGljb246IFwiL3N2Zy91c2VyU0Iuc3ZnXCJ9LCBub3RpZmljYXRpb25zOiB7Y2xhc3NOYW1lOiAnJywgaWNvbjogXCIvc3ZnL2JlbGxCLnN2Z1wifSwgZm9sbG93aW5nOiB7Y2xhc3NOYW1lOiAnJywgaWNvbjogXCIvc3ZnL2hlYXJ0Qi5zdmdcIn19XHJcbiAgICBpZiAodXRpbGl0eVNob3duID09PSAndXNlcicpIHsgYmFzaWNTdHlsZXMudXNlciA9IHtjbGFzc05hbWU6IFVSLlVVT1NlbGVjdGVkLCBpY29uOiBcIi9zdmcvdXNlclcuc3ZnXCJ9fVxyXG4gICAgaWYgKHV0aWxpdHlTaG93biA9PT0gJ25vdGlmaWNhdGlvbnMnKSB7IGJhc2ljU3R5bGVzLm5vdGlmaWNhdGlvbnMgPSB7Y2xhc3NOYW1lOiBVUi5VVU9TZWxlY3RlZCwgaWNvbjogXCIvc3ZnL2JlbGxXLnN2Z1wifX1cclxuICAgIGlmICh1dGlsaXR5U2hvd24gPT09ICdmb2xsb3dpbmcnKSB7IGJhc2ljU3R5bGVzLmZvbGxvd2luZyA9IHtjbGFzc05hbWU6IFVSLlVVT1NlbGVjdGVkLCBpY29uOiBcIi9zdmcvaGVhcnRXLnN2Z1wifX1cclxuICAgIFxyXG4gICAgY29uc3QgcGVuZGluZ05vdGlmU3RhdHMgPSBwcm9wcy5jdXJyZW50VXNlciAmJiBwcm9wcy5jdXJyZW50VXNlci5wZW5kaW5nTm90aWZpY2F0aW9ucyA+IDAgP1xyXG4gICAgICAgIFtVUi5QTkJ1YmJsZSwgcHJvcHMuY3VycmVudFVzZXIucGVuZGluZ05vdGlmaWNhdGlvbnNdIDogW251bGwsIG51bGxdXHJcblxyXG4gICAgY29uc3Qgc2hvd0luQmFubmVyID0gc2hvd1V0aWxpdGllcyA/XHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3Rmb3JtcGFnZVwiID5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7VVIuVVVBZGRQb3N0fSAke1VSLnVzZXJVdGlsaXR5T3B0aW9ufSBuZXV0cmFsaXplLWxpbmtgfSBzdHlsZT17e2dyaWRDb2x1bW46ICcxLzMnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3BsdXNCLnN2Z1wiIGNsYXNzTmFtZT17VVIuVVVBUEljb259IGFsdD1cImFkZCBwb3N0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1VSLlVVQVBUZXh0fT5hZGQgcG9zdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7cHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWV9YH0gPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtVUi51c2VyVXRpbGl0eU9wdGlvbn0gJHtiYXNpY1N0eWxlcy51c2VyLmNsYXNzTmFtZX1gfT48aW1nIHNyYz17YmFzaWNTdHlsZXMudXNlci5pY29ufSBjbGFzc05hbWU9e1VSLlVVSWNvbn0gYWx0PVwidXNlclwiIC8+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eVNob3duKCdub3RpZmljYXRpb25zJyl9IGNsYXNzTmFtZT17YCR7VVIudXNlclV0aWxpdHlPcHRpb259ICR7VVIuUE5Db250YWluZXJ9ICR7YmFzaWNTdHlsZXMubm90aWZpY2F0aW9ucy5jbGFzc05hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmFzaWNTdHlsZXMubm90aWZpY2F0aW9ucy5pY29ufSBjbGFzc05hbWU9e1VSLlVVSWNvbn0gYWx0PVwibm90aWZpY2F0aW9uc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGVuZGluZ05vdGlmU3RhdHNbMF19PntwZW5kaW5nTm90aWZTdGF0c1sxXX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eVNob3duKCdmb2xsb3dpbmcnKX0gY2xhc3NOYW1lPXtgJHtVUi51c2VyVXRpbGl0eU9wdGlvbn0gJHtiYXNpY1N0eWxlcy5mb2xsb3dpbmcuY2xhc3NOYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jhc2ljU3R5bGVzLmZvbGxvd2luZy5pY29ufSBjbGFzc05hbWU9e1VSLlVVSWNvbn0gYWx0PVwiZm9sbG93XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9IGNsYXNzTmFtZT17YCR7VVIudXNlclV0aWxpdHlPcHRpb259ICR7VVIuVVVMb2dvdXR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvZXhpdEIuc3ZnXCIgY2xhc3NOYW1lPXtVUi5VVUxvZ291dEljb259IGFsdD1cImxvZyBvdXRcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZVNob3dVdGlsaXRpZXMoIXNob3dVdGlsaXRpZXMpfSBjbGFzc05hbWU9e2Ake1VSLnVzZXJVc2VybmFtZUNvbnRhaW5lcn0gJHtVUi5TVUh9YH0+PGgyIGNsYXNzTmFtZT1cInVzZXItdXNlcm5hbWVcIj57cHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWV9PC9oMj48L2Rpdj5cclxuXHJcbiAgICBjb25zdCBzaG93QnViYmxlID0gc2hvd1V0aWxpdGllcyA/XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZVV0aWxpdHlTaG93bignbm90aWZpY2F0aW9ucycpfSBjbGFzc05hbWU9e1VSLnVzZXJOb3RpZmljYXRpb25CdWJibGV9PjQ8L2Rpdj5cclxuXHJcblxyXG4gICAgY29uc3Qgc2hvd1V0aWxpdHlDb250ZW50ID0gdXRpbGl0eVNob3duID8gXHJcbiAgICAgICAge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuXHJcbiAgICBjb25zdCB1dGlsaXR5Q29udGVudCA9ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAodXRpbGl0eVNob3duID09PSAndXNlcicpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIDxkaXY+PFVzZXJJbmZvIC8+PC9kaXY+XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh1dGlsaXR5U2hvd24gPT09ICdub3RpZmljYXRpb25zJykge1xyXG4gICAgICAgICAgICByZXR1cm4gPFVzZXJOb3RpZkxpc3QgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHV0aWxpdHlTaG93biA9PT0gJ2ZvbGxvd2luZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxVc2VyU1AgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7VVIudXNlckNvbnRhaW5lcn0gJHtVUi5MR0RVc2VyQ29udGFpbmVyfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIudXNlck9wdGlvbnNTcGxpdHRlcn0+XHJcbiAgICAgICAgICAgICAgICB7aWNvblRvU2hvd31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyQmFubmVyfT5cclxuICAgICAgICAgICAgICAgIHtzaG93SW5CYW5uZXJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0J1YmJsZX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLlVVVXRpbGl0aWVzU3BsaXR0ZXJ9IHN0eWxlPXtzaG93VXRpbGl0eUNvbnRlbnR9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLlVVQ29udGVudENvbnRhaW5lcn0gc3R5bGU9e3Nob3dVdGlsaXR5Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3V0aWxpdHlTaG93bn08L2gzPlxyXG4gICAgICAgICAgICAgICAge3V0aWxpdHlDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXIsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExvZ2dlZCkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG4vLyBpbXBvcnQgdXNlckljb24gZnJvbSAnLi4vLi4vLi4vc3RhdGljL3N2Zy91c2VyVy5zdmcnXHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi4vZm9ybS9TaWduSW4nXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9mb3JtL1JlZ2lzdGVyJ1xyXG5cclxuXHJcbmNvbnN0IE5vdExvZ2dlZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJPcHRpb24sIHNldFVzZXJPcHRpb25dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICBjb25zdCBvcHRpb25TdHlsZSA9IHVzZXJPcHRpb24gPyBcclxuICAgICAgICB1c2VyT3B0aW9uID09PSAnc2lnbiBpbicgP1xyXG4gICAgICAgICAgICB7c2lnbkluOiB7YmFja2dyb3VuZENvbG9yOiAnIzQ4NDg0OCcsIGNvbG9yOiAnd2hpdGUnfSwgcmVnaXN0ZXI6IG51bGx9XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAge3NpZ25JbjogbnVsbCwgcmVnaXN0ZXI6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjNDg0ODQ4JywgY29sb3I6ICd3aGl0ZSd9fVxyXG4gICAgICAgIDoge3NpZ25JbjogbnVsbCwgcmVnaXN0ZXI6IG51bGx9XHJcblxyXG4gICAgY29uc3QgZm9ybVRvU2hvdyA9IHVzZXJPcHRpb24gPyBcclxuICAgICAgICB1c2VyT3B0aW9uID09PSAnc2lnbiBpbicgP1xyXG4gICAgICAgICAgICA8U2lnbkluIC8+IDogPFJlZ2lzdGVyIC8+XHJcbiAgICAgICAgOiBudWxsXHJcblxyXG4gICAgY29uc3QgY2hhbmdlT3B0aW9uID0gKGNoYW5nZVRvKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJPcHRpb24gPT09IGNoYW5nZVRvKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJPcHRpb24obnVsbClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRVc2VyT3B0aW9uKGNoYW5nZVRvKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1VSLnVzZXJDb250YWluZXJ9ICR7VVIuTkxVc2VyQ29udGFpbmVyfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU9wdGlvbignc2lnbiBpbicpfSBjbGFzc05hbWU9e1VSLnVzZXJPcHRpb25Db250YWluZXJ9IHN0eWxlPXtvcHRpb25TdHlsZS5zaWduSW59PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17VVIudXNlck9wdGlvbnN9IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAnMTBweCd9fT5zaWduIGluPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyT3B0aW9uc1NwbGl0dGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VySWNvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJXLnN2Z1wiIGNsYXNzTmFtZT17VVIudXNlckljb259IGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU9wdGlvbigncmVnaXN0ZXInKX0gY2xhc3NOYW1lPXtVUi51c2VyT3B0aW9uQ29udGFpbmVyfSBzdHlsZT17b3B0aW9uU3R5bGUucmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17VVIudXNlck9wdGlvbnN9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6ICcxMHB4J319PnJlZ2lzdGVyPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmb3JtVG9TaG93fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoTm90TG9nZ2VkKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQb3N0U21hbGwgZnJvbSAnLi4vLi4vcG9zdC9Qb3N0U21hbGwnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgQUNDRVBUX05PVElGSUNBVElPTiwgREVDTElORV9OT1RJRklDQVRJT04sIEFOU1dFUl9RVUVTVElPTiB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgeyB1c2VGaWVsZCwgd2Vic2l0ZVN0YXRzLCB0cmlnZ2VyQWxlcnQgfSBmcm9tICcuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucydcclxuXHJcbmNvbnN0IE5vdGlmID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbYWNjZXB0Tm90aWZdID0gdXNlTXV0YXRpb24oQUNDRVBUX05PVElGSUNBVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2RlY2xpbmVOb3RpZl0gPSB1c2VNdXRhdGlvbihERUNMSU5FX05PVElGSUNBVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Fuc3dlclF1ZXN0aW9uXSA9IHVzZU11dGF0aW9uKEFOU1dFUl9RVUVTVElPTiwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGFuc3dlciA9IHVzZUZpZWxkKCd0ZXh0JylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBbnN3ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYW5zd2VyUXVlc3Rpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbklkOiBwcm9wcy5ub3RpZi5faWQsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZTogYW5zd2VyLmZpZWxkcy52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkID09PSBwcm9wcy5ub3RpZi5faWQgPyByZXN1bHQuZGF0YS5hbnN3ZXJRdWVzdGlvbiA6IG4pXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhuZXdOb3RpZmljYXRpb25zKVxyXG4gICAgICAgICAgICBhbnN3ZXIucmVzZXQoKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCBgcmVwbGllZCQ6IHlvdSBoYXZlIHJlcGxpZWQgdG8gJHtwcm9wcy5ub3RpZi51c2VyRnJvbS51c2VybmFtZX0ncyBxdWVzdGlvbmAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWNjZXB0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjY2VwdCA9IGF3YWl0IGFjY2VwdE5vdGlmKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uSWQ6IHByb3BzLm5vdGlmLl9pZH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChhY2NlcHQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Tm90aWZpY2F0aW9ucyA9IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQgPT09IHByb3BzLm5vdGlmLl9pZCA/IGFjY2VwdC5kYXRhLmFjY2VwdE5vdGlmaWNhdGlvbiA6IG4pXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhuZXdOb3RpZmljYXRpb25zKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCBgYWNjZXB0ZWQkOiB5b3UgaGF2ZSBhY2NlcHRlZCAke3Byb3BzLm5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfSB0byB5b3VyIHRlYW1gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVEZWNsaW5lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlY2xpbmUgPSBhd2FpdCBkZWNsaW5lTm90aWYoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25JZDogcHJvcHMubm90aWYuX2lkfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChkZWNsaW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkID09PSBwcm9wcy5ub3RpZi5faWQgPyBkZWNsaW5lLmRhdGEuZGVjbGluZU5vdGlmaWNhdGlvbiA6IG4pXHJcbiAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhuZXdOb3RpZmljYXRpb25zKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ2RhbmdlcicsIGBkZWNsaW5lZCQ6IHlvdSBoYXZlIGRlY2xpbmVkICR7cHJvcHMubm90aWYudXNlckZyb20udXNlcm5hbWV9J3MgcmVxdWVzdCB0byBqb2luYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBub3RpZiA9IHByb3BzLm5vdGlmXHJcbiAgICBjb25zdCBub3RpZlN0YXR1c0NvbG9yID0gbm90aWYuYWNjZXB0ZWQgPT09IG51bGwgPyBcclxuICAgICAgICAncmdiKDIyNiwxODQsNTkpJyA6XHJcbiAgICAgICAgbm90aWYuYWNjZXB0ZWQgP1xyXG4gICAgICAgICAgICBub3RpZi5wb3N0ID9cclxuICAgICAgICAgICAgICAgICdyZ2IoNTIsMTY2LDk1KScgOiAnIzhiOGI4YicgXHJcbiAgICAgICAgICAgIDogJ3JnYigyNTQsNTIsNzcpJ1xyXG4gICAgaWYgKG5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lID09PSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSl7XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+YW5zd2VyZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub3RpZi5wb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBHQ0xpbmtTdGF0cyA9IHdlYnNpdGVTdGF0cyhub3RpZi5wb3N0LmNvbnRhY3RMaW5rKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5lZExpbmsgPSBub3RpZi5wb3N0LmNvbnRhY3RMaW5rLnNwbGl0KCcvJylbMl1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pmdyb3VwL2NvbnRhY3QgbGluazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtub3RpZi5wb3N0LmNvbnRhY3RMaW5rfSBjbGFzc05hbWU9XCJuLWpvaW4tbGluayBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IEdDTGlua1N0YXRzLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0dDTGlua1N0YXRzLmljb259IGNsYXNzTmFtZT1cIm4tSkwtaWNvblwiIGFsdD17R0NMaW5rU3RhdHMudGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NsZWFuZWRMaW5rfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IG1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5tZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnNlbnQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAobm90aWYuYWNjZXB0ZWQpIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+YW5zd2VyZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub3RpZi5wb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBHQ0xpbmtTdGF0cyA9IHdlYnNpdGVTdGF0cyhub3RpZi5wb3N0LmNvbnRhY3RMaW5rKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5lZExpbmsgPSBub3RpZi5wb3N0LmNvbnRhY3RMaW5rLnNwbGl0KCcvJylbMl1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5zZW50IGdyb3VwL2NvbnRhY3QgbGluazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtub3RpZi5wb3N0LmNvbnRhY3RMaW5rfSBjbGFzc05hbWU9XCJuLWpvaW4tbGluayBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IEdDTGlua1N0YXRzLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0dDTGlua1N0YXRzLmljb259IGNsYXNzTmFtZT1cIm4tSkwtaWNvblwiIGFsdD17R0NMaW5rU3RhdHMudGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NsZWFuZWRMaW5rfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBtZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1yZXBseVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIj5yZXBseTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwibi1ub3RpZi1yZXBseS1maWVsZFwiIHsuLi5hbnN3ZXIuZmllbGRzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyKCl9IGNsYXNzTmFtZT1cIm4tQW9ELW9wdGlvbiBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9fT5hbnN3ZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEpcIj5za2lsbCB0byBqb2luOiA8c3Ryb25nPntza2lsbFRvSm9pbn08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pm1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PmFjY2VwdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1Bb0RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNsaW5lKCl9IGNsYXNzTmFtZT1cIm4tQW9ELW9wdGlvbiBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU0LDUyLDc3KSd9fT5kZWNsaW5lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY2NlcHQoKX0gY2xhc3NOYW1lPVwibi1Bb0Qtb3B0aW9uIG4tU0hcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYig1MiwxNjYsOTUpJ319PmFjY2VwdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBxdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxUb0pvaW4gPSBub3RpZi5wb3N0LnNraWxsTmFtZXNbbm90aWYucHJvcG9zZWRDb250cmlidXRpb24uaW5kZXhPZigxKV1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgam9pbiByZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7bm90aWYudXNlclRvLnVzZXJuYW1lfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlclxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShOb3RpZilcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IExJU1RfT0ZfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIH0gZnJvbScuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IE5vdGlmIGZyb20gJy4vTm90aWYnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL0xvYWRpbmcnXHJcbmltcG9ydCBhcG9sbG8sIHthcG9sbG9DbGllbnR9IGZyb20gJy4uLy4uLy4uL2xpYi9hcG9sbG8nXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IFVSIGZyb20gJy4uLy4uLy4uL3N0eWxlcy91c2VyL3VzZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IFVVIGZyb20gJy4uLy4uLy4uL3N0eWxlcy91c2VyL3VzZXJVdGlsaXRpZXMubW9kdWxlLmNzcydcclxuXHJcblxyXG5cclxuY29uc3QgVXNlck5vdGlmTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCBub3RpZnNMaXN0UXVlcnkgPSB1c2VRdWVyeShMSVNUX09GX05PVElGSUNBVElPTlMsIHtcclxuICAgIC8vICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25zOiBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkKX1cclxuICAgIC8vIH0pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhub3RpZnNMaXN0UXVlcnkpXHJcbiAgICAvLyBjb25zdCBub3RpZnNMaXN0UXVlcnkgPSBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgLy8gICAgIHF1ZXJ5OiBMSVNUX09GX05PVElGSUNBVElPTlMsXHJcbiAgICAvLyAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uczogcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCl9XHJcbiAgICAvLyB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgICBjb25zdCBbc2VudEZpbHRlciwgc2V0U2VudEZpbHRlcl0gPSB1c2VTdGF0ZSgndG8geW91JylcclxuICAgIGNvbnN0IFtzaG93U0ZERCwgc2V0U2hvd1NGRERdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3RhdHVzRmlsdGVyLCBzZXRTdGF0dXNGaWx0ZXJdID0gdXNlU3RhdGUoJ3BlbmRpbmcnKVxyXG4gICAgY29uc3QgW3Nob3dTdGF0dXNERCwgc2V0U2hvd1N0YXR1c0REXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3RDb25kaXRpb25zID0gKHF1ZXJ5LCByZWR1Y2VyKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKCFxdWVyeSkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAvLyAgICAgaWYgKHJlZHVjZXIubGVuZ3RoID09PSAwKSB7IHJldHVybiBudWxsIH1cclxuICAgIC8vICAgICBpZiAocmVkdWNlclswXS51c2VyVG8pIHtcclxuICAgIC8vICAgICAgICAgaWYgKHF1ZXJ5Ll9pZCA9PT0gcmVkdWNlclswXS5faWQgKSB7IHJldHVybiBudWxsIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHF1ZXJ5XHJcbiAgICAvLyB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBjb25zdCBub3RpZnNMaXN0ID0gbm90aWZzTGlzdENvbmRpdGlvbnMobm90aWZzTGlzdFF1ZXJ5LmRhdGEubGlzdE9mTm90aWZpY2F0aW9ucywgcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucylcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChub3RpZnNMaXN0KSB7XHJcbiAgICAvLyAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhub3RpZnNMaXN0KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIFtub3RpZnNMaXN0LCBwcm9wcywgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zXSlcclxuXHJcbiAgICBpZiAocHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zWzBdLnVzZXJUbykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2dyaWRDb2x1bW46ICcxLzMnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzV2aCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VudE9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBbJ2Zyb20geW91JywgJ3RvIHlvdSddXHJcbiAgICAgICAgICAgIGNvbnN0IG9uT3B0aW9uQ2xpY2sgPSAob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZW50RmlsdGVyKG9wdGlvbilcclxuICAgICAgICAgICAgICAgIHNldFNob3dTRkREKCFzaG93U0ZERClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWxsT3B0aW9ucy5tYXAobyA9PiBvICE9PSBzZW50RmlsdGVyID8gPGRpdiBvbkNsaWNrPXsoKSA9PiBvbk9wdGlvbkNsaWNrKG8pfSBjbGFzc05hbWU9e1VVLk5GRERPcHRpb259IGtleT17YFNGREQke299YH0+e299PC9kaXY+IDogbnVsbClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VudEREID0gc2hvd1NGREQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZTcGxpdHRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7c2VudE9wdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApOiBudWxsXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXNPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IFsnYWxsJywgJ2FjY2VwdGVkJywgJ2RlY2xpbmVkJywgJ3BlbmRpbmcnLCAnbWVzc2FnZXMnXVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25PcHRpb25DbGljayA9IChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXNGaWx0ZXIob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dTdGF0dXNERCghc2hvd1N0YXR1c0REKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbE9wdGlvbnMubWFwKG8gPT4gbyAhPT0gc3RhdHVzRmlsdGVyID8gPGRpdiBvbkNsaWNrPXsoKSA9PiBvbk9wdGlvbkNsaWNrKG8pfSBjbGFzc05hbWU9e2Ake299LW9wdGlvbiAke1VVLk5GRERPcHRpb259YH0ga2V5PXtgU3RhdHVzREQke299YH0+e299PC9kaXY+IDogbnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXNERCA9IHNob3dTdGF0dXNERCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORlNwbGl0dGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzT3B0aW9ucygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTogbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLm5vdGlmRmlsdGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZDcmVhdG9yQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17VVUuTkZMYWJlbH0+c3RhdHVzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GT3B0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2hvd1N0YXR1c0REKCFzaG93U3RhdHVzREQpfSBjbGFzc05hbWU9e2Ake3N0YXR1c0ZpbHRlcn0tb3B0aW9uICR7VVUuTkZPcHRpb259YH0+e3N0YXR1c0ZpbHRlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNERH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZDcmVhdG9yQ29udGFpbmVyfSBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1VVLk5GTGFiZWx9PnNlbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORk9wdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2hvd1NGREQoIXNob3dTRkREKX0gY2xhc3NOYW1lPXtVVS5ORk9wdGlvbn0+e3NlbnRGaWx0ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZW50RER9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXR1c0NvbmRpdGlvbnMgPSAobm90aWYpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzRmlsdGVyID09PSAnYWxsJykgcmV0dXJuIHRydWVcclxuICAgICAgICBjb25zdCBub3RpZlN0YXR1cyA9IG5vdGlmLmFjY2VwdGVkID09PSBudWxsID9cclxuICAgICAgICAgICAgJ3BlbmRpbmcnIDogXHJcbiAgICAgICAgICAgIG5vdGlmLmFjY2VwdGVkID9cclxuICAgICAgICAgICAgbm90aWYucG9zdCA/XHJcbiAgICAgICAgICAgICAgICAnYWNjZXB0ZWQnIDogJ21lc3NhZ2VzJ1xyXG4gICAgICAgICAgICA6ICdkZWNsaW5lZCdcclxuICAgICAgICBpZiAoc3RhdHVzRmlsdGVyID09PSBub3RpZlN0YXR1cykgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbnRDb25kaXRpb25zID0gKG5vdGlmKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbnRGaWx0ZXIgPT09ICdhbGwnKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGNvbnN0IHNlbnRTdGF0dXMgPSBub3RpZi51c2VyRnJvbS51c2VybmFtZSA9PT0gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUgP1xyXG4gICAgICAgICAgICAnZnJvbSB5b3UnIDogJ3RvIHlvdSdcclxuICAgICAgICBpZiAoc2VudEZpbHRlciA9PT0gc2VudFN0YXR1cykgcmV0dXJuIHRydWVcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dOb3RpZmljYXRpb25zID0gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1c0NvbmRpdGlvbnMobikgJiYgc2VudENvbmRpdGlvbnMobikpe1xyXG4gICAgICAgICAgICByZXR1cm4gPE5vdGlmIG5vdGlmPXtufSBrZXk9e2BVTiR7bi5faWR9YH0vPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfSkucmV2ZXJzZSgpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclV0aWwtbm90aWZcIj5cclxuICAgICAgICAgICAgPEZpbHRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTBweCd9fSAvPlxyXG4gICAgICAgICAgICB7c2hvd05vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxMHB4J319IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVc2VyTm90aWZMaXN0KSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IExJU1RfT0ZfUE9TVFMgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyU1AgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IFBvc3RTbWFsbCBmcm9tICcuLi8uLi9wb3N0L1Bvc3RTbWFsbCdcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vTG9hZGluZydcclxuXHJcblxyXG5jb25zdCBVc2VyU1AgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGlkX2xpc3QgPSBwcm9wcy5jdXJyZW50VXNlci5zYXZlZFBvc3RzLm1hcChwID0+IHAuX2lkKVxyXG4gICAgY29uc3QgcG9zdExpc3RRdWVyeSA9IHVzZVF1ZXJ5KExJU1RfT0ZfUE9TVFMsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtpZF9saXN0fVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHF1ZXJ5Q29uZGl0aW9ucyA9IChxdWVyeSwgcmVkdWNlcikgPT4ge1xyXG4gICAgICAgIGlmICghcXVlcnkpIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKCFxdWVyeS5nZXRMaXN0T2ZQb3N0cykgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAoIXJlZHVjZXIpIHJldHVybiBxdWVyeS5nZXRMaXN0T2ZQb3N0c1xyXG4gICAgICAgIGlmIChyZWR1Y2VyICYmIHJlZHVjZXIubGVuZ3RoID4gMCAmJiAhcmVkdWNlclswXS50aXRsZSkgcmV0dXJuIHF1ZXJ5LmdldExpc3RPZlBvc3RzXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3N0TGlzdCA9IHF1ZXJ5Q29uZGl0aW9ucyhwb3N0TGlzdFF1ZXJ5LmRhdGEsIHByb3BzLmN1cnJlbnRVc2VyLnNhdmVkUG9zdHMpXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgaWYgKHBvc3RMaXN0KSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3N0TGlzdCA9IFtdXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kIGluIHBvc3RMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3N0TGlzdC5wdXNoKHsuLi5wb3N0TGlzdFtpbmRdLCBfaWQ6IGlkX2xpc3RbaW5kXX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJTUChuZXdQb3N0TGlzdClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcG9zdExpc3QsIHByb3BzLnNldEN1cnJlbnRVc2VyU1AsIHByb3BzLCBpZF9saXN0XSlcclxuXHJcbiAgICBpZiAocHJvcHMuY3VycmVudFVzZXIuc2F2ZWRQb3N0cy5sZW5ndGggPiAwICYmICFwcm9wcy5jdXJyZW50VXNlci5zYXZlZFBvc3RzWzBdLnVzZXIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc1dmgnfX0vPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbGxTUCA9IHByb3BzLmN1cnJlbnRVc2VyLnNhdmVkUG9zdHMubWFwKHAgPT4gPFBvc3RTbWFsbCBwb3N0PXtwfSB1c2VyPXtwLnVzZXIudXNlcm5hbWV9IHR5cGU9XCJzYXZlZFwiIGtleT17YFNQJHtwLnRpdGxlfWB9IC8+KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTBweCd9fSAvPlxyXG4gICAgICAgICAgICB7YWxsU1B9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7IHNldEN1cnJlbnRVc2VyU1AgfVxyXG4pKFVzZXJTUCkiLCJpbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIm5leHQtYXBvbGxvXCJcclxuLy8gaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIlxyXG5cclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCdcclxuaW1wb3J0IHsgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJ1xyXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5J1xyXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCdcclxuLy8gaHR0cHM6Ly91bmlsb3VzLWdyYXBocWwtYmFja2VuZC5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuXHJcbi8vIGh0dHBzOi8vdW5pbG91cy1iYWNrLWVuZC1kZXYuaGVyb2t1YXBwLmNvbS9ncmFwaHFsXHJcbi8vIGh0dHBzOi8vcHJvamVjdHUtYmFjay1lbmQtMjAyMC5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuLy8gaHR0cHM6Ly91bmlsb3VzLWJhY2stZW5kLW5leHRqcy5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuXHJcbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xyXG4gIHVyaTogJ2h0dHBzOi8vdW5pbG91cy1iYWNrLWVuZC1uZXh0anMuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJyxcclxufSlcclxuXHJcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcclxuICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYFVuaWxvdXMqMjAwMCAke3Rva2VufWAgOiBudWxsLFxyXG4gICAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pXHJcblxyXG4vLyBjb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuLy8gICB1cmk6ICdodHRwczovL3Byb2plY3R1LWJhY2stZW5kLTIwMjAuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJyxcclxuLy8gICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxuLy8gICBzc3JNb2RlOiB0cnVlXHJcbi8vIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKGFwb2xsb0NsaWVudClcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBNQUtFX05PVElGSUNBVElPTiB9IGZyb20gJy4uLy4uL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBGSU5EX1VTRVIsIEFMTF9VU0VSUywgTElTVF9PRl9QT1NUUyB9IGZyb20gJy4uLy4uL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgVVAgZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL3VzZXJQYWdlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUG9zdFNtYWxsTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvUG9zdFNtYWxsTGlzdCdcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xyXG5pbXBvcnQgRm9ybUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtZmllbGQvRm9ybUNvbnRhaW5lcidcclxuaW1wb3J0IFJlZmVyZW5jZUxpbmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWZpZWxkL1JlZmVyZW5jZUxpbmsnXHJcbmltcG9ydCB7IHBhbGxldHRlR2VuZXJhdG9yLCB1c2VGaWVsZCwgdHJpZ2dlckFsZXJ0IH0gZnJvbSAnLi4vLi4vc3JjL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHthcG9sbG9DbGllbnR9IGZyb20gJy4uLy4uL2xpYi9hcG9sbG8nXHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgVXNlclBhZ2UgPSB3aXRoUm91dGVyKChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gcHJvcHMudXNlclxyXG4gIGNvbnN0IG1lc3NhZ2UgPSB1c2VGaWVsZCgndGV4dCcpXHJcbiAgY29uc3Qgb25FcnJvciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBlTWVzc2FnZSA9IGUubWVzc2FnZVxyXG4gICAgaWYgKGVNZXNzYWdlLmluY2x1ZGVzKCdQYXRoIGBtZXNzYWdlYCAoJykpIHtcclxuICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgYG1lc3NhZ2UkOiBtZXNzYWdlIG9mICR7bWVzc2FnZS5maWVsZHMudmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzIGNhbm5vdCBiZSBtb3JlIHRoYW4gODAwIGNoYXJhY3RlcnNgLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3NlbmRNZXNzYWdlXSA9IHVzZU11dGF0aW9uKE1BS0VfTk9USUZJQ0FUSU9OLCB7XHJcbiAgICBvbkVycm9yXHJcbiAgfSlcclxuICBjb25zdCBoYW5kbGVNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFtZXNzYWdlLmZpZWxkcy52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgYG1lc3NhZ2UkOiBtZXNzYWdlIGZpZWxkIGlzIHJlcXVpcmVkYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgIHVzZXJGcm9tSWQ6IHByb3BzLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICAgICAgdXNlclRvSWQ6IGN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBtZXNzYWdlLnJlc2V0KClcclxuICAgICAgICB0cmlnZ2VyQWxlcnQoJ3N1Y2Nlc3MnLCBgc2VudDogbWVzc2FnZSBoYXMgYmVlbiBzZW50IHRvICR7Y3VycmVudFVzZXIudXNlcm5hbWV9YCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHBhbGxldHRlID0gcGFsbGV0dGVHZW5lcmF0b3IoXCJyZ2IoNDAsNDAsNDApXCIpLmNvbG9yUGFsbGV0dGVcclxuICBcclxuICBjb25zdCBkZXNjcmlwdGlvblRvU2hvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFtdE9mUG9zdHMgPSBjdXJyZW50VXNlci5wb3N0cy5sZW5ndGhcclxuICAgIGxldCBkRmluYWwgPSBgJHtjdXJyZW50VXNlci51c2VybmFtZX0gYFxyXG4gICAgaWYgKGFtdE9mUG9zdHMpIHtcclxuICAgICAgaWYgKGFtdE9mUG9zdHMgPT09IDEpIGRGaW5hbCA9IGRGaW5hbCArIGBoYXMgJHthbXRPZlBvc3RzfSBhd2Vzb21lIHByb2plY3QgdGhhdCBuZWVkcyBhIHRlYW0uYFxyXG4gICAgICBlbHNlIGRGaW5hbCA9IGRGaW5hbCArIGBoYXMgJHthbXRPZlBvc3RzfSBhd2Vzb21lIHByb2plY3RzIHRoYXQgbmVlZCB0ZWFtcy5gXHJcbiAgICB9XHJcbiAgICBlbHNlIGRGaW5hbCA9IGRGaW5hbCArICdpcyBsb29raW5nIGZyZXNoIGFuZCByZWFkeSB0byB3b3JrIG9uIGEgcHJvamVjdCEnXHJcblxyXG4gICAgcmV0dXJuIGRGaW5hbFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntgJHtjdXJyZW50VXNlci51c2VybmFtZX0gfCBVbmlsb3VzIHVzZXJgfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb25Ub1Nob3coKX0ga2V5PVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUC5VUENvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgc3R5bGU9e3tncmlkQ29sdW1uOiAnMS8zJ319IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VQLlVQQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVAuVVBUaXRsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtVUC5VUFRpdGxlSWNvbn0gc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBhbHQ9XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17VVAuVVBUaXRsZX0+e2N1cnJlbnRVc2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1VQLlVQVGl0bGV9IHN0eWxlPXt7b3BhY2l0eTogJzAuOCd9fT5wcm9maWxlIGxpbms8L2gzPlxyXG4gICAgICAgICAgPFJlZmVyZW5jZUxpbmsgcmw9e2N1cnJlbnRVc2VyLnJlZmVyZW5jZUxpbmt9IC8+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtVUC5VUFRpdGxlfT5wb3N0czwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVAuVVBQb3N0c0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxQb3N0U21hbGxMaXN0IHBvc3RzPXtwcm9wcy51c2VyUG9zdHN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IHByb3BzLmN1cnJlbnRVc2VyICE9PSBjdXJyZW50VXNlci51c2VybmFtZSAmJlxyXG4gICAgICAgIDxGb3JtQ29udGFpbmVyIHBhbGxldHRlPXtwYWxsZXR0ZX0gPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+Y29udGFjdCB7Y3VycmVudFVzZXIudXNlcm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9ybS10aXRsZS1zZWNvbmRhcnlcIj5tZXNzYWdlPC9oND5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiIHsuLi5tZXNzYWdlLmZpZWxkc30gLz5cclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXN1Ym1pdC1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8aDQgb25DbGljaz17KCkgPT4gaGFuZGxlTWVzc2FnZSgpfSBjbGFzc05hbWU9XCJmb3JtLXN1Ym1pdC1idXR0b25cIj5zZW5kPC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm1Db250YWluZXI+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lc1F1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtxdWVyeTogQUxMX1VTRVJTfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICBjb25zdCBwYXRocyA9IHVzZXJuYW1lc1F1ZXJ5LmRhdGEuYWxsVXNlcnMubWFwKHUgPT4gYC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHUudXNlcm5hbWUpfWApXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICBjb25zdCB1c2VyUXVlcnkgPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgcXVlcnk6IEZJTkRfVVNFUixcclxuICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBwYXJhbXMudXNlcm5hbWV9XHJcbiAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgXHJcbiAgY29uc3QgdXNlclBvc3RzUXVlcnkgPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgICBxdWVyeTogTElTVF9PRl9QT1NUUyxcclxuICAgICAgdmFyaWFibGVzOiB7aWRfbGlzdDogdXNlclF1ZXJ5LmRhdGEuZmluZFVzZXIucG9zdHMubWFwKHAgPT4gcC5faWQpfVxyXG4gIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdXNlcjogdXNlclF1ZXJ5LmRhdGEuZmluZFVzZXIsXHJcbiAgICAgIHVzZXJQb3N0czogdXNlclBvc3RzUXVlcnkuZGF0YS5nZXRMaXN0T2ZQb3N0c1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWYsXHJcbiAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuICB9XHJcbn1cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0QWxlcnQsIGRpc3BhdGNoKSxcclxuICAgIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVc2VyUGFnZSlcclxuXHJcbi8vIHVzZXMgZm9ybUNvbnRhaW5lci5jc3MiLCJleHBvcnQgY29uc3Qgc2V0QWxlcnQgPSAoaW5mbykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQUxFUlQnLFxyXG4gICAgICAgICAgICBkYXRhOiBpbmZvXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0QWxlcnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1JFU0VUX0FMRVJUJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFsZXJ0Tm90aWYgPSAoc3RhdGUgPSB7Y29sb3I6IG51bGwsIHRleHRDb2xvcjogbnVsbCwgbWVzc2FnZTogbnVsbH0sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9BTEVSVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdSRVNFVF9BTEVSVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4ge2NvbG9yOiBudWxsLCB0ZXh0Q29sb3I6IG51bGwsIG1lc3NhZ2U6IG51bGx9XHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGVydE5vdGlmIiwiZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsXHJcbiAgICAgICAgICAgIGRhdGE6IHVzZXJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXJQb3N0cyA9IChwb3N0cykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfUE9TVFMnLFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0c1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlclNQID0gKHBvc3RzKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9TUCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3RzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyA9IChub3RpZmljYXRpb25zKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9OT1RJRklDQVRJT05TJyxcclxuICAgICAgICAgICAgZGF0YTogbm90aWZpY2F0aW9uc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQZW5kaW5nTm90aWZpY2F0aW9ucyA9IChhbXQpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX1BOJyxcclxuICAgICAgICAgICAgZGF0YTogYW10XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY3VycmVudFVzZXIgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfQ1VfUE4nOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwZW5kaW5nTm90aWZpY2F0aW9uczogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVUlJFTlRfVVNFUicgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdTRVRfQ1VfUE9TVFMnIDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9TUCcgOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNhdmVkUG9zdHM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9OT1RJRklDQVRJT05TJyA6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5vdGlmaWNhdGlvbnM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFVzZXIiLCJleHBvcnQgY29uc3Qgc2V0VG9rZW4gPSAodG9rZW4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ1NFVF9UT0tFTicsXHJcbiAgICAgICAgZGF0YTogdG9rZW5cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhclRva2VuID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnQ0xFQVJfVE9LRU4nXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCB0b2tlbiA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX1RPS0VOJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIGNhc2UgJ0NMRUFSX1RPS0VOJyA6XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRva2VuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFkZFBvc3QoXHJcbiAgICAkdGl0bGU6IFN0cmluZyEsXHJcbiAgICAkdXNlcjogSUQhLFxyXG4gICAgJGNvbnRhY3RMaW5rOiBTdHJpbmchXHJcbiAgICAkc2tpbGxOYW1lczogW1N0cmluZyFdISxcclxuICAgICRza2lsbENhcGFjaXRpZXM6IFtJbnQhXSEsXHJcbiAgICAkc2tpbGxGaWxsczogW0ludCFdISxcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nISxcclxuICAgICRjb2xvcjogU3RyaW5nISxcclxuICAgICRpbWFnZUxpbmtzOiBbU3RyaW5nIV0sXHJcbiAgICAkcmVmZXJlbmNlTGlua3M6IFtTdHJpbmchXVxyXG4gICl7XHJcbiAgICBhZGRQb3N0KFxyXG4gICAgICB0aXRsZTokdGl0bGUsXHJcbiAgICAgIHVzZXI6JHVzZXIsXHJcbiAgICAgIGNvbnRhY3RMaW5rOiAkY29udGFjdExpbmssXHJcbiAgICAgIHNraWxsTmFtZXM6JHNraWxsTmFtZXMsXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllczokc2tpbGxDYXBhY2l0aWVzLFxyXG4gICAgICBza2lsbEZpbGxzOiAkc2tpbGxGaWxscyxcclxuICAgICAgZGVzY3JpcHRpb246JGRlc2NyaXB0aW9uLFxyXG4gICAgICBjb2xvcjokY29sb3IsXHJcbiAgICAgIGltYWdlTGlua3M6JGltYWdlTGlua3MsXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtzOiRyZWZlcmVuY2VMaW5rc1xyXG4gICAgKXtcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiBkZWxldGVQb3N0IChcclxuICAgICRwb3N0SWQ6IElEIVxyXG4gICkge1xyXG4gICAgZGVsZXRlUG9zdCAocG9zdElkOiAkcG9zdElkKVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1BS0VfTk9USUZJQ0FUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIG1ha2VOb3RpZmljYXRpb24oXHJcbiAgICAkdXNlckZyb21JZDogSUQhLFxyXG4gICAgJHVzZXJUb0lkOiBJRCEsXHJcbiAgICAkbWVzc2FnZTogU3RyaW5nISxcclxuICAgICRwb3N0SWQ6IElELFxyXG4gICAgJHByb3Bvc2VkQ29udHJpYnV0aW9uOiBbSW50IV1cclxuICApe1xyXG4gICAgbWFrZU5vdGlmaWNhdGlvbihcclxuICAgICAgdXNlckZyb21JZDogJHVzZXJGcm9tSWQsXHJcbiAgICAgIHVzZXJUb0lkOiAkdXNlclRvSWQsXHJcbiAgICAgIG1lc3NhZ2U6ICRtZXNzYWdlLFxyXG4gICAgICBwb3N0SWQ6ICRwb3N0SWQsXHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uOiAkcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICl7XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFDQ0VQVF9OT1RJRklDQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gYWNjZXB0Tm90aWZpY2F0aW9uKCRub3RpZmljYXRpb25JZDogSUQhKSB7XHJcbiAgICBhY2NlcHROb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6ICRub3RpZmljYXRpb25JZCkge1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IERFQ0xJTkVfTk9USUZJQ0FUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGRlY2xpbmVOb3RpZmljYXRpb24oJG5vdGlmaWNhdGlvbklkOiBJRCEpIHtcclxuICAgIGRlY2xpbmVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6ICRub3RpZmljYXRpb25JZCkge1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9VU0VSID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVVzZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEsICRyZWZlcmVuY2VMaW5rOiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVVc2VyKFxyXG4gICAgICB1c2VybmFtZTogJHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogJHBhc3N3b3JkLFxyXG4gICAgICByZWZlcmVuY2VMaW5rOiAkcmVmZXJlbmNlTGlua1xyXG4gICAgKXtcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgcGFzc3dvcmRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IGdxbGBcclxuICBtdXRhdGlvbiBsb2dpbigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISl7XHJcbiAgICBsb2dpbihcclxuICAgICAgdXNlcm5hbWU6ICR1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZFxyXG4gICAgKXtcclxuICAgICAgdmFsdWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTQVZFX1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gc2F2ZVBvc3RUb1VzZXIgKFxyXG4gICAgJHVzZXI6IElEISxcclxuICAgICRwb3N0SWQ6IElEIVxyXG4gICkge1xyXG4gICAgc2F2ZVBvc3RUb1VzZXIgKHVzZXI6ICR1c2VyLCBwb3N0SWQ6ICRwb3N0SWQpIHtcclxuICAgICAgdXNlcm5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9TQVZFRF9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIHJlbW92ZVNhdmVkUG9zdCAoXHJcbiAgICAkdXNlcjogSUQhLFxyXG4gICAgJHBvc3RJZDogSUQhXHJcbiAgKSB7XHJcbiAgICByZW1vdmVTYXZlZFBvc3QgKHVzZXI6ICR1c2VyLCBwb3N0SWQ6ICRwb3N0SWQpXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQVNLX1FVRVNUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFza1F1ZXN0aW9uIChcclxuICAgICR1c2VyRnJvbUlkOiBJRCEsXHJcbiAgICAkdXNlclRvSWQ6IElEISxcclxuICAgICRwb3N0SWQ6IElEISxcclxuICAgICRxdWVzdGlvbjogU3RyaW5nIVxyXG4gICl7XHJcbiAgICBhc2tRdWVzdGlvbiAoXHJcbiAgICAgIHVzZXJGcm9tSWQ6ICR1c2VyRnJvbUlkLFxyXG4gICAgICB1c2VyVG9JZDogJHVzZXJUb0lkLFxyXG4gICAgICBwb3N0SWQ6ICRwb3N0SWQsXHJcbiAgICAgIHF1ZXN0aW9uOiAkcXVlc3Rpb25cclxuICAgICl7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFOU1dFUl9RVUVTVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBhbnN3ZXJRdWVzdGlvbiAoXHJcbiAgICAkbm90aWZpY2F0aW9uSWQ6IElEISxcclxuICAgICRyZXNwb25zZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgYW5zd2VyUXVlc3Rpb24gKFxyXG4gICAgICBub3RpZmljYXRpb25JZDogJG5vdGlmaWNhdGlvbklkLFxyXG4gICAgICByZXNwb25zZTogJHJlc3BvbnNlXHJcbiAgICApe1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIHF1ZXN0aW9uXHJcbiAgICAgIGFuc3dlclxyXG4gICAgICBhY2NlcHRlZFxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmAiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgTElTVF9PRl9OT1RJRklDQVRJT05TID0gZ3FsYFxyXG4gIHF1ZXJ5IGxpc3RPZk5vdGlmaWNhdGlvbnMoJG5vdGlmaWNhdGlvbnM6IFtTdHJpbmchXSkge1xyXG4gICAgbGlzdE9mTm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zOiAkbm90aWZpY2F0aW9ucykge1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBjb250YWN0TGlua1xyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNLSUxMX1NFQVJDSCA9IGdxbGBcclxuICBxdWVyeSBza2lsbFNlYXJjaCgkZmlsdGVyOiBTdHJpbmchKSB7XHJcbiAgICBza2lsbFNlYXJjaChmaWx0ZXI6ICRmaWx0ZXIpIHtcclxuICAgICAgbmFtZVxyXG4gICAgICB1c2VzXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTUUgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgbWV7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtcclxuICAgICAgcHJpbWFyeVNraWxsc3tcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgICAgc2Vjb25kYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBpbnRlcmVzdHNcclxuICAgICAgcG9zdHN7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdGlmaWNhdGlvbnN7XHJcbiAgICAgICAgdXNlckZyb217XHJcbiAgICAgICAgICBfaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlclRve1xyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgICBwb3N0e1xyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICAgIGFjY2VwdGVkXHJcbiAgICAgIH1cclxuICAgICAgX2lkXHJcblxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExJU1RfT0ZfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnkgZ2V0TGlzdE9mUG9zdHMoJGlkX2xpc3Q6IFtTdHJpbmddKSB7XHJcbiAgICBnZXRMaXN0T2ZQb3N0cyhpZExpc3Q6ICRpZF9saXN0KXtcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlcntcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbG9yXHJcbiAgICAgIHNraWxsRmlsbHNcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZJTkRfUE9TVCA9IGdxbGBcclxuICBxdWVyeSBmaW5kUG9zdCgkdGl0bGU6IFN0cmluZyEpe1xyXG4gICAgZmluZFBvc3QodGl0bGU6ICR0aXRsZSl7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICB0ZWFtXHJcbiAgICAgIHRpbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgY29sb3JcclxuICAgICAgaW1hZ2VMaW5rc1xyXG4gICAgICByZWZlcmVuY2VMaW5rc1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGSU5EX1VTRVIgPSBncWxgXHJcbiAgcXVlcnkgZmluZFVzZXIoJHVzZXJuYW1lOiBTdHJpbmchKXtcclxuICAgIGZpbmRVc2VyKHVzZXJuYW1lOiAkdXNlcm5hbWUpIHtcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgcGFzc3dvcmRcclxuICAgICAgcmVmZXJlbmNlTGlua1xyXG4gICAgICBwcmltYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBzZWNvbmRhcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGludGVyZXN0c1xyXG4gICAgICBwb3N0c3tcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBub3RpZmljYXRpb25zIHtcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBzYXZlZFBvc3RzIHtcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfVVNFUlMgPSBncWxgXHJcbiAgcXVlcnl7XHJcbiAgICBhbGxVc2Vyc3tcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU09NRV9VU0VSUyA9IGdxbGBcclxuICBxdWVyeSBzb21lVXNlcnMoJHNraXA6IEludCEsICRmaXJzdDogSW50ISl7XHJcbiAgICBzb21lVXNlcnMoc2tpcDogJHNraXAsIGZpcnN0OiAkZmlyc3Qpe1xyXG4gICAgICB1c2VybmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QT1NUUyA9IGdxbGBcclxuICBxdWVyeXtcclxuICAgIGFsbFBvc3Rze1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1c2Vye1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICB0aW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbG9yXHJcbiAgICAgIGltYWdlTGlua3NcclxuICAgICAgcmVmZXJlbmNlTGlua3NcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfVElUTEVTID0gZ3FsYFxyXG4gIHF1ZXJ5e1xyXG4gICAgYWxsUG9zdHN7XHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU1RTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNlYXJjaFBvc3RzKCRmaWx0ZXJTdHJpbmc6IFN0cmluZyEsICRwb3N0SWRzOiBbU3RyaW5nIV0sICRldmVudFF1ZXJ5OiBTdHJpbmcpe1xyXG4gICAgc2VhcmNoUG9zdHMoZmlsdGVyU3RyaW5nOiAkZmlsdGVyU3RyaW5nLCBwb3N0SWRzOiAkcG9zdElkcywgZXZlbnRRdWVyeTogJGV2ZW50UXVlcnkpe1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1c2VyIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHNraWxsTmFtZXNcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgIHNraWxsRmlsbHNcclxuICAgICAgdGltZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBjb2xvclxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQRU5ESU5HX05PVElGUyA9IGdxbGBcclxuICBxdWVyeSBzZWFyY2hBd2FpdGluZ05vdGlmcygkdXNlcklkOiBJRCEpIHtcclxuICAgIHNlYXJjaEF3YWl0aW5nTm90aWZzKHVzZXJJZDogJHVzZXJJZClcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBRX0FORF9BX05PVElGUyA9IGdxbGBcclxuICBxdWVyeSBzZWFyY2hBbnN3ZXJlZFFUb1Bvc3QgKCAkdGl0bGU6IFN0cmluZyEgKSB7XHJcbiAgICBzZWFyY2hBbnN3ZXJlZFFUb1Bvc3QgKFxyXG4gICAgICB0aXRsZTogJHRpdGxlXHJcbiAgICApe1xyXG4gICAgICB1c2VyRnJvbXtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBxdWVzdGlvblxyXG4gICAgICBhbnN3ZXJcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgdHJpZ2dlckFsZXJ0ID0gKHR5cGUsIG1lc3NhZ2UsIHNldEFsZXJ0LCByZXNldEFsZXJ0KSA9PiB7XHJcbiAgICAvLyB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnc3VjY2VzczogYWxlcnQgYmFyIGlzIHdvcmtpbmcnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIGNvbnN0IGNsZWFuZWRNZXNzYWdlID0gPHAgc3R5bGU9e3ttYXJnaW46IDB9fT48c3Ryb25nPnttZXNzYWdlLnNwbGl0KCckOicpWzBdfTwvc3Ryb25nPjoge21lc3NhZ2Uuc3BsaXQoJyQ6JylbMV19PC9wPlxyXG4gICAgaWYgKHR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgIHNldEFsZXJ0KHtjb2xvcjogJ3JnYig1MiwxNjYsOTUpJywgdGV4dENvbG9yOiAnd2hpdGUnLCBtZXNzYWdlOiBjbGVhbmVkTWVzc2FnZX0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoe2NvbG9yOiAncmdiKDIyNiwxODQsNTkpJywgdGV4dENvbG9yOiAnd2hpdGUnLCBtZXNzYWdlOiBjbGVhbmVkTWVzc2FnZX0pXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ2RhbmdlcicpIHtcclxuICAgICAgICBzZXRBbGVydCh7Y29sb3I6ICdyZ2IoMjU0LDUyLDc3KScsIHRleHRDb2xvcjogJ3doaXRlJywgbWVzc2FnZTogY2xlYW5lZE1lc3NhZ2V9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2Vic2l0ZVN0YXRzID0gKHVybCkgPT4ge1xyXG4gICAgaWYgKHVybC5zcGxpdCgnLycpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2lucHV0LnN2ZycsIGNvbG9yOiAnIzQ4NDg0OCcsdGl0bGU6ICd1bmtub3duIHVybCd9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydCA9IHVybC5zcGxpdCgnLycpWzJdXHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3VuaWxvdXMnKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvbG9nby9sb2dvVy5zdmcnLCBjb2xvcjogJyMyODI4MjgnLCB0aXRsZTogJ1VuaWxvdXMnfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdkaXNjb3JkJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2Rpc2NvcmQuc3ZnJywgY29sb3I6ICcjNzI4OURBJywgdGl0bGU6ICdEaXNjb3JkJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygndHJlbGxvJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGUvdHJlbGxvLnN2ZycsIGNvbG9yOiAnIzAwNzlCRicsIHRpdGxlOiAnVHJlbGxvJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnd2hhdHNhcHAnKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvd2hhdHNhcHAuc3ZnJywgY29sb3I6ICcjMjVEMzY2JywgdGl0bGU6ICdXaGF0c0FwcCd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ21vbmRheScpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9iZ2FRWmM5LnBuZycsIGNvbG9yOiAnIzMzMzMzMycsIHRpdGxlOiAnTW9uZGF5J31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnc2xhY2snKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvc2xhY2suc3ZnJywgY29sb3I6ICcjNEExNTRCJywgdGl0bGU6ICdTbGFjayd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2xpbmtlZGluJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2xpbmtlZGluLnN2ZycsIGNvbG9yOiAncmdiKDQwLDEwMywxNzgpJywgdGl0bGU6ICdMaW5rZWRJbid9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2ZhY2Vib29rJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL2ZhY2Vib29rLnN2ZycsIGNvbG9yOiAncmdiKDY2LDEwMywxNzgpJywgdGl0bGU6ICdGYWNlYm9vayd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2luZGVlZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGZ29oaXJlLXdlYnNpdGUuczMuYW1hem9uYXdzLmNvbSUyRmltZyUyRmludGVncmF0aW9uLWxvZ29zJTJGaW5kZWVkLWljb24uanBnJmY9MSZub2ZiPTEnLCBjb2xvcjogJyMyODI4MjgnLCB0aXRsZTogJ0luZGVlZCd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ2dpdGh1YicpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9naXRIdWIuc3ZnJywgY29sb3I6ICcjMzMzJywgdGl0bGU6ICdHaXRIdWInfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtpY29uOiAnc3ZnL3dlYnNpdGVzL2ludGVybmV0LnN2ZycsIGNvbG9yOiAnIzI4MjgyOCcsdGl0bGU6ICd1bmtub3duIHVybCd9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGaWVsZCA9ICh0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBvbkNoYW5nZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhbGxldHRlR2VuZXJhdG9yID0gKHByaW1hcnlDb2xvcikgPT4ge1xyXG4gICAgY29uc3QgY29sb3IgPSBwcmltYXJ5Q29sb3JcclxuICAgIGNvbnN0IGNvbG9ycyA9IGNvbG9yLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcChjID0+IE51bWJlcihjKSlcclxuICAgIGNvbnN0IGhpZ2hlckNvbG9yID0gYHJnYigke2NvbG9ycy5tYXAoYyA9PiBjICsgMzApLmpvaW4oJywnKX0pYFxyXG4gICAgbGV0IGlzRGFyayA9ICgoY29sb3JzWzBdICsgY29sb3JzWzFdICsgY29sb3JzWzJdKSAvIDMpIDwgMTI3ID9cclxuICAgICAgICB0cnVlIDogZmFsc2VcclxuICAgIC8vIGNvbnN0IGlzRGFyayA9IGZhbHNlXHJcbiAgICBjb25zdCBjb2xvclBhbGxldHRlID0gaXNEYXJrID8gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICBoaWdoZXJDb2xvcixcclxuICAgICAgICAgICAgLy8gdXNlckljb246IHVzZXJJY29uVyxcclxuICAgICAgICAgICAgLy8gaGFuZHNoYWtlSWNvbjogaGFuZHNoYWtlSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHBsdXNJY29uOiBwbHVzSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHNoYXJlSWNvbjogc2hhcmVJY29uVyxcclxuICAgICAgICAgICAgLy8gc2hyaW5rSWNvbjogc2hyaW5rVyxcclxuICAgICAgICAgICAgLy8gY29sb3JlZDoge1xyXG4gICAgICAgICAgICAvLyAgICAgaGVhcnRJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjggNTEyLjAwMDAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQ3MS4zODI4MTIgNDQuNTc4MTI1Yy0yNi41MDM5MDYtMjguNzQ2MDk0LTYyLjg3MTA5My00NC41NzgxMjUtMTAyLjQxMDE1Ni00NC41NzgxMjUtMjkuNTU0Njg3IDAtNTYuNjIxMDk0IDkuMzQzNzUtODAuNDQ5MjE4IDI3Ljc2OTUzMS0xMi4wMjM0MzggOS4zMDA3ODEtMjIuOTE3OTY5IDIwLjY3OTY4OC0zMi41MjM0MzggMzMuOTYwOTM4LTkuNjAxNTYyLTEzLjI3NzM0NC0yMC41LTI0LjY2MDE1Ny0zMi41MjczNDQtMzMuOTYwOTM4LTIzLjgyNDIxOC0xOC40MjU3ODEtNTAuODkwNjI1LTI3Ljc2OTUzMS04MC40NDUzMTItMjcuNzY5NTMxLTM5LjUzOTA2MyAwLTc1LjkxMDE1NiAxNS44MzIwMzEtMTAyLjQxNDA2MyA0NC41NzgxMjUtMjYuMTg3NSAyOC40MTAxNTYtNDAuNjEzMjgxIDY3LjIyMjY1Ni00MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MSAxNi4xMzY3MTkgODIuOTM3NSA1MC43ODEyNSAxMjQuNzQyMTg3IDMwLjk5MjE4OCAzNy4zOTQ1MzEgNzUuNTM1MTU2IDc1LjM1NTQ2OSAxMjcuMTE3MTg4IDExOS4zMTI1IDE3LjYxMzI4MSAxNS4wMTE3MTkgMzcuNTc4MTI0IDMyLjAyNzM0NCA1OC4zMDg1OTMgNTAuMTUyMzQ0IDUuNDc2NTYzIDQuNzk2ODc1IDEyLjUwMzkwNyA3LjQzNzUgMTkuNzkyOTY5IDcuNDM3NSA3LjI4NTE1NiAwIDE0LjMxNjQwNi0yLjY0MDYyNSAxOS43ODUxNTYtNy40Mjk2ODcgMjAuNzMwNDY5LTE4LjEyODkwNyA0MC43MDcwMzItMzUuMTUyMzQ0IDU4LjMyODEyNS01MC4xNzE4NzYgNTEuNTc0MjE5LTQzLjk0OTIxOCA5Ni4xMTcxODgtODEuOTA2MjUgMTI3LjEwOTM3NS0xMTkuMzA0Njg3IDM0LjY0NDUzMi00MS44MDA3ODEgNTAuNzc3MzQ0LTgxLjQzNzUgNTAuNzc3MzQ0LTEyNC43NDIxODcgMC00Mi4wNjY0MDctMTQuNDI1NzgxLTgwLjg3ODkwNy00MC42MTcxODgtMTA5LjI4OTA2M3ptMCAwXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gICAgIHNoYXJlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gdmlld0JveD1cIjAgLTIyIDUxMiA1MTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm01MTIgMjMzLjgyMDMxMi0yMTIuNzc3MzQ0LTIzMy4zMjAzMTJ2MTM5LjIwMzEyNWgtNDUuMjM4MjgxYy0xNDAuMjczNDM3IDAtMjUzLjk4NDM3NSAxMTMuNzEwOTM3LTI1My45ODQzNzUgMjUzLjk4NDM3NXY3My43Njk1MzFsMjAuMDkzNzUtMjIuMDE5NTMxYzY4LjMxNjQwNi03NC44NTE1NjIgMTY0Ljk4MDQ2OS0xMTcuNSAyNjYuMzI0MjE5LTExNy41aDEyLjgwNDY4N3YxMzkuMjAzMTI1em0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgaGFuZHNoYWtlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnPjxwYXRoIGQ9XCJtMzg2LjE1OCA4LjczM2MtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0zNi40NzggMzYuNDc4Yy0xOS45MjMtMTAuNzY5LTQ1LjM4Ni03Ljc0OC02Mi4xOTkgOS4wNjVsLTY5LjQxNiA2OS40MTZjLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDBsMjUuMDktMjUuMDljMzguOTEyIDMyLjQ0OCA5Mi4yNzMgNDIuNiAxNDAuNTkxIDI2LjI1Mmw2Ni44MiA2Ni44MmM4LjM3Ni0xOC4xOTIgNS44MzQtNDAuMjE2LTcuNjUtNTYuMDY5bDM1LjA1OC0zNS4wNThjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzLS4xMDEtLjEwMS0uMjExLS4xODctLjMxNS0uMjg0bC4wMTUtLjAxNXpcIi8+PHBhdGggZD1cIm0yNzYuNDU5IDQwMC4wMTFjLTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ2IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMGwtNDYuMjcyIDQ2LjI3MmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGw0Ni4yNzItNDYuMjcyYzE0LjA0NC0xNC4wNDMgMTQuMDQ0LTM2LjgwNy4wMDMtNTAuODQ4elwiLz48cGF0aCBkPVwibTI3Ni4xNiAxODguNTA0LTcuMjQ4IDcuMjQ4Yy0yNS43MTUgMjUuNzE1LTY3LjU1OCAyNS43MTUtOTMuMjczIDBzLTI1LjcxNS02Ny41NTggMC05My4yNzNsNTcuNTE0LTU3LjUxNGMtMTYuMTU3LTYuMTg4LTM0LjU0Ny00Ljg5MS00OS43NjggMy44OTJsLTM2LjMyOS0zNi4zMjljLTUuODU4LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMTIxLjQ1IDEyMS40NDljLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxM2wzNi4zMjkgMzYuMzI5Yy04Ljc4MyAxNS4yMjEtMTAuMDggMzMuNjExLTMuODkyIDQ5Ljc2OGwxNS4wMjktMTUuMDI5YzI1LjcxNS0yNS43MTUgNjcuNTU4LTI1LjcxNSA5My4yNzMgMCA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NHMxNS4zMTQgMjAuODk1IDE3Ljg1NCAzMi45OTNjMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1MyA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NCAyNS43MTUgMjUuNzE1IDI1LjcxNSA2Ny41NTggMCA5My4yNzNsLTE4LjU2MiAxOC41NjIgNi40OTcgNi40OTdjMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0N2wtODQuNDc1LTg0LjQ3NWMtNDMuOTk2IDkuNzA3LTg5Ljk5MiAyLjA5Ny0xMjguMzU4LTIwLjc2MXpcIi8+PC9nPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICA6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6ICcjMjgyODI4JyxcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIGhpZ2hlckNvbG9yLFxyXG4gICAgICAgICAgICAvLyB1c2VySWNvbjogdXNlckljb25CLFxyXG4gICAgICAgICAgICAvLyBoYW5kc2hha2VJY29uOiBoYW5kc2hha2VJY29uQixcclxuICAgICAgICAgICAgLy8gcGx1c0ljb246IHBsdXNJY29uQixcclxuICAgICAgICAgICAgLy8gc2hhcmVJY29uOiBzaGFyZUljb25CLFxyXG4gICAgICAgICAgICAvLyBzaHJpbmtJY29uOiBzaHJpbmtCLFxyXG4gICAgICAgICAgICAvLyBjb2xvcmVkOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBoZWFydEljb246IDxzdmcgZmlsbD17Y29sb3J9IHZpZXdCb3g9XCIwIC0yOCA1MTIuMDAwMDIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNDcxLjM4MjgxMiA0NC41NzgxMjVjLTI2LjUwMzkwNi0yOC43NDYwOTQtNjIuODcxMDkzLTQ0LjU3ODEyNS0xMDIuNDEwMTU2LTQ0LjU3ODEyNS0yOS41NTQ2ODcgMC01Ni42MjEwOTQgOS4zNDM3NS04MC40NDkyMTggMjcuNzY5NTMxLTEyLjAyMzQzOCA5LjMwMDc4MS0yMi45MTc5NjkgMjAuNjc5Njg4LTMyLjUyMzQzOCAzMy45NjA5MzgtOS42MDE1NjItMTMuMjc3MzQ0LTIwLjUtMjQuNjYwMTU3LTMyLjUyNzM0NC0zMy45NjA5MzgtMjMuODI0MjE4LTE4LjQyNTc4MS01MC44OTA2MjUtMjcuNzY5NTMxLTgwLjQ0NTMxMi0yNy43Njk1MzEtMzkuNTM5MDYzIDAtNzUuOTEwMTU2IDE1LjgzMjAzMS0xMDIuNDE0MDYzIDQ0LjU3ODEyNS0yNi4xODc1IDI4LjQxMDE1Ni00MC42MTMyODEgNjcuMjIyNjU2LTQwLjYxMzI4MSAxMDkuMjkyOTY5IDAgNDMuMzAwNzgxIDE2LjEzNjcxOSA4Mi45Mzc1IDUwLjc4MTI1IDEyNC43NDIxODcgMzAuOTkyMTg4IDM3LjM5NDUzMSA3NS41MzUxNTYgNzUuMzU1NDY5IDEyNy4xMTcxODggMTE5LjMxMjUgMTcuNjEzMjgxIDE1LjAxMTcxOSAzNy41NzgxMjQgMzIuMDI3MzQ0IDU4LjMwODU5MyA1MC4xNTIzNDQgNS40NzY1NjMgNC43OTY4NzUgMTIuNTAzOTA3IDcuNDM3NSAxOS43OTI5NjkgNy40Mzc1IDcuMjg1MTU2IDAgMTQuMzE2NDA2LTIuNjQwNjI1IDE5Ljc4NTE1Ni03LjQyOTY4NyAyMC43MzA0NjktMTguMTI4OTA3IDQwLjcwNzAzMi0zNS4xNTIzNDQgNTguMzI4MTI1LTUwLjE3MTg3NiA1MS41NzQyMTktNDMuOTQ5MjE4IDk2LjExNzE4OC04MS45MDYyNSAxMjcuMTA5Mzc1LTExOS4zMDQ2ODcgMzQuNjQ0NTMyLTQxLjgwMDc4MSA1MC43NzczNDQtODEuNDM3NSA1MC43NzczNDQtMTI0Ljc0MjE4NyAwLTQyLjA2NjQwNy0xNC40MjU3ODEtODAuODc4OTA3LTQwLjYxNzE4OC0xMDkuMjg5MDYzem0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgc2hhcmVJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjIgNTEyIDUxMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTUxMiAyMzMuODIwMzEyLTIxMi43NzczNDQtMjMzLjMyMDMxMnYxMzkuMjAzMTI1aC00NS4yMzgyODFjLTE0MC4yNzM0MzcgMC0yNTMuOTg0Mzc1IDExMy43MTA5MzctMjUzLjk4NDM3NSAyNTMuOTg0Mzc1djczLjc2OTUzMWwyMC4wOTM3NS0yMi4wMTk1MzFjNjguMzE2NDA2LTc0Ljg1MTU2MiAxNjQuOTgwNDY5LTExNy41IDI2Ni4zMjQyMTktMTE3LjVoMTIuODA0Njg3djEzOS4yMDMxMjV6bTAgMFwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vICAgICBoYW5kc2hha2VJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSBpZD1cIkNhcGFfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGc+PHBhdGggZD1cIm0zODYuMTU4IDguNzMzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTM2LjQ3OCAzNi40NzhjLTE5LjkyMy0xMC43NjktNDUuMzg2LTcuNzQ4LTYyLjE5OSA5LjA2NWwtNjkuNDE2IDY5LjQxNmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGwyNS4wOS0yNS4wOWMzOC45MTIgMzIuNDQ4IDkyLjI3MyA0Mi42IDE0MC41OTEgMjYuMjUybDY2LjgyIDY2LjgyYzguMzc2LTE4LjE5MiA1LjgzNC00MC4yMTYtNy42NS01Ni4wNjlsMzUuMDU4LTM1LjA1OGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTMtLjEwMS0uMTAxLS4yMTEtLjE4Ny0uMzE1LS4yODRsLjAxNS0uMDE1elwiLz48cGF0aCBkPVwibTI3Ni40NTkgNDAwLjAxMWMtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDYgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwbC00Ni4yNzIgNDYuMjcyYy0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwbDQ2LjI3Mi00Ni4yNzJjMTQuMDQ0LTE0LjA0MyAxNC4wNDQtMzYuODA3LjAwMy01MC44NDh6XCIvPjxwYXRoIGQ9XCJtMjc2LjE2IDE4OC41MDQtNy4yNDggNy4yNDhjLTI1LjcxNSAyNS43MTUtNjcuNTU4IDI1LjcxNS05My4yNzMgMHMtMjUuNzE1LTY3LjU1OCAwLTkzLjI3M2w1Ny41MTQtNTcuNTE0Yy0xNi4xNTctNi4xODgtMzQuNTQ3LTQuODkxLTQ5Ljc2OCAzLjg5MmwtMzYuMzI5LTM2LjMyOWMtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0xMjEuNDUgMTIxLjQ0OWMtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzbDM2LjMyOSAzNi4zMjljLTguNzgzIDE1LjIyMS0xMC4wOCAzMy42MTEtMy44OTIgNDkuNzY4bDE1LjAyOS0xNS4wMjljMjUuNzE1LTI1LjcxNSA2Ny41NTgtMjUuNzE1IDkzLjI3MyAwIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0czE1LjMxNCAyMC44OTUgMTcuODU0IDMyLjk5M2MxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODUzIDkuMzc0IDkuMzc0IDE1LjMxNSAyMC44OTUgMTcuODU0IDMyLjk5MiAxMi4wOTggMi41NCAyMy42MTggOC40OCAzMi45OTIgMTcuODU0IDI1LjcxNSAyNS43MTUgMjUuNzE1IDY3LjU1OCAwIDkzLjI3M2wtMTguNTYyIDE4LjU2MiA2LjQ5NyA2LjQ5N2MxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3bC04NC40NzUtODQuNDc1Yy00My45OTYgOS43MDctODkuOTkyIDIuMDk3LTEyOC4zNTgtMjAuNzYxelwiLz48L2c+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb2xvclBhbGxldHRlXHJcbiAgICB9XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtSW5mb0NvbnRhaW5lclwiOiBcImlucHV0SGVhZGVyX2Zvcm1JbmZvQ29udGFpbmVyX195UWJrYVwiLFxuXHRcImluZm9IZWFkZXJDb250YWluZXJcIjogXCJpbnB1dEhlYWRlcl9pbmZvSGVhZGVyQ29udGFpbmVyX19oUS1Ja1wiLFxuXHRcImluZm9UaXRsZVRleHRcIjogXCJpbnB1dEhlYWRlcl9pbmZvVGl0bGVUZXh0X18zeGxqbFwiLFxuXHRcImluZm9JY29uQ29udGFpbmVyXCI6IFwiaW5wdXRIZWFkZXJfaW5mb0ljb25Db250YWluZXJfXzNNeFgzXCIsXG5cdFwiaW5mb0ljb25cIjogXCJpbnB1dEhlYWRlcl9pbmZvSWNvbl9fM2JUT3pcIixcblx0XCJpbmZvQ29udGVudFwiOiBcImlucHV0SGVhZGVyX2luZm9Db250ZW50X18xd09ud1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSFdNXCI6IFwibmF2QmFyX0hXTV9fRnU2Vk1cIixcblx0XCJTV01cIjogXCJuYXZCYXJfU1dNX18xNEhaN1wiLFxuXHRcImFsZXJ0QmFyQ29udGFpbmVyXCI6IFwibmF2QmFyX2FsZXJ0QmFyQ29udGFpbmVyX18yMVhWSlwiLFxuXHRcIm1lc3NhZ2VcIjogXCJuYXZCYXJfbWVzc2FnZV9fMjhJcXZcIixcblx0XCJjbG9zZVwiOiBcIm5hdkJhcl9jbG9zZV9fM1IwakZcIixcblx0XCJuYXZDb250YWluZXJcIjogXCJuYXZCYXJfbmF2Q29udGFpbmVyX18yNEFaYVwiLFxuXHRcIm5hdkJhckNvbnRhaW5lclwiOiBcIm5hdkJhcl9uYXZCYXJDb250YWluZXJfX244ZWVWXCIsXG5cdFwiaWNvbkNvbnRhaW5lclwiOiBcIm5hdkJhcl9pY29uQ29udGFpbmVyX18zQURNLVwiLFxuXHRcIm5hdkJhckljb25cIjogXCJuYXZCYXJfbmF2QmFySWNvbl9fMU9xYm5cIixcblx0XCJzZWFyY2hCYXJcIjogXCJuYXZCYXJfc2VhcmNoQmFyX19LaUlZMFwiLFxuXHRcIlNCU2VwYXJhdG9yXCI6IFwibmF2QmFyX1NCU2VwYXJhdG9yX18ybjlvTlwiLFxuXHRcImVudGVyU2VhcmNoXCI6IFwibmF2QmFyX2VudGVyU2VhcmNoX18zTXpNeFwiLFxuXHRcInNlYXJjaEhyXCI6IFwibmF2QmFyX3NlYXJjaEhyX18xel9PLVwiLFxuXHRcInNlYXJjaEljb25cIjogXCJuYXZCYXJfc2VhcmNoSWNvbl9fMUVVQkNcIixcblx0XCJzZWFyY2hpbmdGb3JcIjogXCJuYXZCYXJfc2VhcmNoaW5nRm9yX19RN212c1wiLFxuXHRcInNlYXJjaEhvdmVyXCI6IFwibmF2QmFyX3NlYXJjaEhvdmVyX192Sy1zclwiLFxuXHRcInNlYXJjaElucHV0XCI6IFwibmF2QmFyX3NlYXJjaElucHV0X18xS29YTFwiLFxuXHRcInNlYXJjaERlc2NyaXB0aW9uXCI6IFwibmF2QmFyX3NlYXJjaERlc2NyaXB0aW9uX18zdWU1NlwiLFxuXHRcInNlYXJjaFN1Z2dlc3Rpb25cIjogXCJuYXZCYXJfc2VhcmNoU3VnZ2VzdGlvbl9fT1NWcTdcIixcblx0XCJmaWx0ZXJERFwiOiBcIm5hdkJhcl9maWx0ZXJERF9fM3VsRkhcIixcblx0XCJmaWx0ZXJPcHRpb25cIjogXCJuYXZCYXJfZmlsdGVyT3B0aW9uX18zZU9FN1wiLFxuXHRcIm5hdkNvbnRhaW5lck1cIjogXCJuYXZCYXJfbmF2Q29udGFpbmVyTV9fMzRTN09cIixcblx0XCJuYXZCYXJDb250YWluZXJNXCI6IFwibmF2QmFyX25hdkJhckNvbnRhaW5lck1fXzJlTURwXCIsXG5cdFwiTkJCcmFuZFwiOiBcIm5hdkJhcl9OQkJyYW5kX18yZHU5UFwiLFxuXHRcIk5CTG9nb1wiOiBcIm5hdkJhcl9OQkxvZ29fXzIzWVBhXCIsXG5cdFwiTkJQcmltYXJ5VXRpbGl0aWVzXCI6IFwibmF2QmFyX05CUHJpbWFyeVV0aWxpdGllc19fclVEVU5cIixcblx0XCJQVVNlYXJjaFwiOiBcIm5hdkJhcl9QVVNlYXJjaF9fMTFyck5cIixcblx0XCJQVUhhbWJ1cmdlckNvbnRhaW5lclwiOiBcIm5hdkJhcl9QVUhhbWJ1cmdlckNvbnRhaW5lcl9fMzVYLUNcIixcblx0XCJQVUhhbWJ1cmdlclwiOiBcIm5hdkJhcl9QVUhhbWJ1cmdlcl9fMVpmdnFcIixcblx0XCJuYXZCYXJTdWJDb250YWluZXJcIjogXCJuYXZCYXJfbmF2QmFyU3ViQ29udGFpbmVyX18xTUFDS1wiLFxuXHRcIm5hdkJhclN1YkNvbnRhaW5lck1cIjogXCJuYXZCYXJfbmF2QmFyU3ViQ29udGFpbmVyTV9fMzJyclFcIixcblx0XCJsb2dpbkJhclwiOiBcIm5hdkJhcl9sb2dpbkJhcl9fM1VaRm5cIixcblx0XCJQTkNvbnRhaW5lclwiOiBcIm5hdkJhcl9QTkNvbnRhaW5lcl9fMnhyWWdcIixcblx0XCJub3RpZmljYXRpb25JdGVtXCI6IFwibmF2QmFyX25vdGlmaWNhdGlvbkl0ZW1fXzJkZ0VOXCIsXG5cdFwiUE5CdWJibGVcIjogXCJuYXZCYXJfUE5CdWJibGVfXzJEb1UyXCIsXG5cdFwiUE5CdWJibGVIYW1idXJnZXJcIjogXCJuYXZCYXJfUE5CdWJibGVIYW1idXJnZXJfXzFDVjk4XCIsXG5cdFwibWVudUl0ZW1cIjogXCJuYXZCYXJfbWVudUl0ZW1fX1dTSG1UXCIsXG5cdFwibWVudUl0ZW1TZWxlY3RlZFwiOiBcIm5hdkJhcl9tZW51SXRlbVNlbGVjdGVkX19TVGtuNlwiLFxuXHRcIm1lbnVJdGVtTG9nb3V0XCI6IFwibmF2QmFyX21lbnVJdGVtTG9nb3V0X18yUVQtZlwiLFxuXHRcIm1lbnVNb2RhbENvbnRhaW5lclwiOiBcIm5hdkJhcl9tZW51TW9kYWxDb250YWluZXJfXzM4VlVMXCIsXG5cdFwibW9yZUxpbmtcIjogXCJuYXZCYXJfbW9yZUxpbmtfXzJiM2ZhXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJVUENvbnRhaW5lclwiOiBcInVzZXJQYWdlX1VQQ29udGFpbmVyX18zUl84TlwiLFxuXHRcIlVQUG9zdHNDb250YWluZXJcIjogXCJ1c2VyUGFnZV9VUFBvc3RzQ29udGFpbmVyX19rYVlidlwiLFxuXHRcIlVQVGl0bGVDb250YWluZXJcIjogXCJ1c2VyUGFnZV9VUFRpdGxlQ29udGFpbmVyX19qMGNzaVwiLFxuXHRcIlVQVGl0bGVJY29uXCI6IFwidXNlclBhZ2VfVVBUaXRsZUljb25fXzMtOGRvXCIsXG5cdFwiVVBUaXRsZVwiOiBcInVzZXJQYWdlX1VQVGl0bGVfXzJIT1pzXCIsXG5cdFwiVVBSTENvbnRhaW5lclwiOiBcInVzZXJQYWdlX1VQUkxDb250YWluZXJfXzNyVzV4XCIsXG5cdFwiVVBSTFwiOiBcInVzZXJQYWdlX1VQUkxfXzF2SWVyXCIsXG5cdFwiVVBSTEljb25Db250YWluZXJcIjogXCJ1c2VyUGFnZV9VUFJMSWNvbkNvbnRhaW5lcl9fM3A1SjlcIixcblx0XCJVUFJMaWNvblwiOiBcInVzZXJQYWdlX1VQUkxpY29uX18yclpIalwiLFxuXHRcIlVQUkxMaW5rXCI6IFwidXNlclBhZ2VfVVBSTExpbmtfXzEtNVcyXCIsXG5cdFwidGVzdFwiOiBcInVzZXJQYWdlX3Rlc3RfXzFyTnBsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0V3JhcHBlclwiOiBcInBvc3RfcG9zdFdyYXBwZXJfX3FOeXlRXCIsXG5cdFwicG9zdEhvdmVyXCI6IFwicG9zdF9wb3N0SG92ZXJfX1Vpam5QXCIsXG5cdFwicG9zdENvbG9ySW5kaWNhdG9yXCI6IFwicG9zdF9wb3N0Q29sb3JJbmRpY2F0b3JfXzNyNnRoXCIsXG5cdFwicG9zdENvbnRhaW5lclwiOiBcInBvc3RfcG9zdENvbnRhaW5lcl9fMlc2XzBcIixcblx0XCJwb3N0SGVhZGVyV3JhcHBlclwiOiBcInBvc3RfcG9zdEhlYWRlcldyYXBwZXJfXzFsR0wtXCIsXG5cdFwicG9zdEhlYWRlclN0cmV0Y2hcIjogXCJwb3N0X3Bvc3RIZWFkZXJTdHJldGNoX18xbTB5QVwiLFxuXHRcInBvc3RIZWFkZXJcIjogXCJwb3N0X3Bvc3RIZWFkZXJfXzNXcmFGXCIsXG5cdFwiUEhVc2VyU3RyZXRjaFwiOiBcInBvc3RfUEhVc2VyU3RyZXRjaF9fMWl1VzVcIixcblx0XCJQSFVzZXJcIjogXCJwb3N0X1BIVXNlcl9fRkw3T2NcIixcblx0XCJQSFVJY29uXCI6IFwicG9zdF9QSFVJY29uX18xV0NnN1wiLFxuXHRcIlBIRGF0ZVwiOiBcInBvc3RfUEhEYXRlX18ydFFuX1wiLFxuXHRcInBvc3RUaXRsZVwiOiBcInBvc3RfcG9zdFRpdGxlX18xMlJDRVwiLFxuXHRcInBvc3REZXNjcmlwdGlvblwiOiBcInBvc3RfcG9zdERlc2NyaXB0aW9uX18zVkNaMVwiLFxuXHRcInBvc3RTa2lsbHNDb250YWluZXJcIjogXCJwb3N0X3Bvc3RTa2lsbHNDb250YWluZXJfXzMzanR0XCIsXG5cdFwicG9zdFNraWxsSW5zQ29udGFpbmVyXCI6IFwicG9zdF9wb3N0U2tpbGxJbnNDb250YWluZXJfXzNLaUJEXCIsXG5cdFwiUFNJTmFtZVwiOiBcInBvc3RfUFNJTmFtZV9fbk9DNThcIixcblx0XCJQU0lTdGF0c1wiOiBcInBvc3RfUFNJU3RhdHNfXzM2R0RJXCIsXG5cdFwicG9zdFV0aWxpdGllc0NvbnRhaW5lclwiOiBcInBvc3RfcG9zdFV0aWxpdGllc0NvbnRhaW5lcl9fMTFjaV9cIixcblx0XCJQVUljb25Db250YWluZXJcIjogXCJwb3N0X1BVSWNvbkNvbnRhaW5lcl9fMVJvT1ZcIixcblx0XCJQVUljb25cIjogXCJwb3N0X1BVSWNvbl9fMkRYZjNcIixcblx0XCJwb3N0V3JhcHBlclNtXCI6IFwicG9zdF9wb3N0V3JhcHBlclNtX18yeWZUN1wiLFxuXHRcInBvc3RTbVJlbW92ZVwiOiBcInBvc3RfcG9zdFNtUmVtb3ZlX18xVlNCcFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXNlcldyYXBwZXJcIjogXCJ1c2VyX3VzZXJXcmFwcGVyX18zSzN6aFwiLFxuXHRcInVzZXJDb250YWluZXJcIjogXCJ1c2VyX3VzZXJDb250YWluZXJfXzFyTG5JXCIsXG5cdFwidXNlck9wdGlvbnNTcGxpdHRlclwiOiBcInVzZXJfdXNlck9wdGlvbnNTcGxpdHRlcl9fMnJxWlpcIixcblx0XCJ1c2VySWNvbkNvbnRhaW5lclwiOiBcInVzZXJfdXNlckljb25Db250YWluZXJfXzIzNGlqXCIsXG5cdFwiU1VIXCI6IFwidXNlcl9TVUhfXzFNcmUwXCIsXG5cdFwiVUlDSFwiOiBcInVzZXJfVUlDSF9fM2pSSXhcIixcblx0XCJMR0RVc2VyQ29udGFpbmVyXCI6IFwidXNlcl9MR0RVc2VyQ29udGFpbmVyX18zd2NhbFwiLFxuXHRcInVzZXJCYW5uZXJcIjogXCJ1c2VyX3VzZXJCYW5uZXJfXzFBeHdsXCIsXG5cdFwidXNlclVzZXJuYW1lQ29udGFpbmVyXCI6IFwidXNlcl91c2VyVXNlcm5hbWVDb250YWluZXJfXzFoQThIXCIsXG5cdFwidXNlclVzZXJuYW1lXCI6IFwidXNlcl91c2VyVXNlcm5hbWVfXzlwcmluXCIsXG5cdFwidXNlclVzZXJuYW1lSWNvblwiOiBcInVzZXJfdXNlclVzZXJuYW1lSWNvbl9fM084cXRcIixcblx0XCJQTkNvbnRhaW5lclwiOiBcInVzZXJfUE5Db250YWluZXJfXzIyTHlUXCIsXG5cdFwiUE5CdWJibGVcIjogXCJ1c2VyX1BOQnViYmxlX19KVlVPQlwiLFxuXHRcInVzZXJVdGlsaXR5T3B0aW9uXCI6IFwidXNlcl91c2VyVXRpbGl0eU9wdGlvbl9fMVZ1Z0JcIixcblx0XCJVVU9TZWxlY3RlZFwiOiBcInVzZXJfVVVPU2VsZWN0ZWRfXzN2dlFrXCIsXG5cdFwiVVVBZGRQb3N0XCI6IFwidXNlcl9VVUFkZFBvc3RfXzIzQXQ3XCIsXG5cdFwiVVVBUEljb25cIjogXCJ1c2VyX1VVQVBJY29uX18zX1M4aFwiLFxuXHRcIlVVQVBUZXh0XCI6IFwidXNlcl9VVUFQVGV4dF9fMWIzRjJcIixcblx0XCJVVUljb25cIjogXCJ1c2VyX1VVSWNvbl9feDFJQnJcIixcblx0XCJVVUxvZ291dFwiOiBcInVzZXJfVVVMb2dvdXRfXzJfRGJIXCIsXG5cdFwiVVVMb2dvdXRJY29uXCI6IFwidXNlcl9VVUxvZ291dEljb25fXzJHUENFXCIsXG5cdFwidXNlck5vdGlmaWNhdGlvbkJ1YmJsZVwiOiBcInVzZXJfdXNlck5vdGlmaWNhdGlvbkJ1YmJsZV9fM2gxTldcIixcblx0XCJVVVV0aWxpdGllc1NwbGl0dGVyXCI6IFwidXNlcl9VVVV0aWxpdGllc1NwbGl0dGVyX18zWktCUFwiLFxuXHRcIlVVQ29udGVudENvbnRhaW5lclwiOiBcInVzZXJfVVVDb250ZW50Q29udGFpbmVyX18xR0tCX1wiLFxuXHRcIk5MVXNlckNvbnRhaW5lclwiOiBcInVzZXJfTkxVc2VyQ29udGFpbmVyX18zWjVMd1wiLFxuXHRcInVzZXJPcHRpb25Db250YWluZXJcIjogXCJ1c2VyX3VzZXJPcHRpb25Db250YWluZXJfXzMzOFJtXCIsXG5cdFwidXNlck9wdGlvbnNcIjogXCJ1c2VyX3VzZXJPcHRpb25zX19rdGVzZ1wiLFxuXHRcInVzZXJJY29uXCI6IFwidXNlcl91c2VySWNvbl9fMjB0NTVcIixcblx0XCJ1c2VyRm9ybUNvbnRhaW5lclwiOiBcInVzZXJfdXNlckZvcm1Db250YWluZXJfX0FoSmx1XCIsXG5cdFwidXNlckZvcm1cIjogXCJ1c2VyX3VzZXJGb3JtX19yeENkUlwiLFxuXHRcIlVGTGFiZWxcIjogXCJ1c2VyX1VGTGFiZWxfXzJ0XzF1XCIsXG5cdFwiVUZJbnB1dFwiOiBcInVzZXJfVUZJbnB1dF9fM3dPVTZcIixcblx0XCJVRlN1Ym1pdFwiOiBcInVzZXJfVUZTdWJtaXRfX3RTdkxkXCIsXG5cdFwibm90aWZpY2F0aW9uQ29udGFpbmVyXCI6IFwidXNlcl9ub3RpZmljYXRpb25Db250YWluZXJfXzJ4eU1tXCIsXG5cdFwibm90aWZpY2F0aW9uSGVhZGVyXCI6IFwidXNlcl9ub3RpZmljYXRpb25IZWFkZXJfXzFxOE4tXCIsXG5cdFwiTlVzZXJDb250YWluZXJcIjogXCJ1c2VyX05Vc2VyQ29udGFpbmVyX18zd0ZyLVwiLFxuXHRcIk5Vc2VySWNvblwiOiBcInVzZXJfTlVzZXJJY29uX19aRU4zdFwiLFxuXHRcIk5Vc2VyXCI6IFwidXNlcl9OVXNlcl9fMzkyTlVcIixcblx0XCJOVXNlckxhYmVsXCI6IFwidXNlcl9OVXNlckxhYmVsX18zaGFtZlwiLFxuXHRcIk5Ta2lsbENvbnRyaWJ1dGlvbnNcIjogXCJ1c2VyX05Ta2lsbENvbnRyaWJ1dGlvbnNfX2hoWUQtXCIsXG5cdFwiTlByb3Bvc2VkSGVscFwiOiBcInVzZXJfTlByb3Bvc2VkSGVscF9fM2hGNlFcIixcblx0XCJOU2tpbGxJbnNcIjogXCJ1c2VyX05Ta2lsbEluc19fMmE5U1VcIixcblx0XCJOU2tpbGxQcm9wXCI6IFwidXNlcl9OU2tpbGxQcm9wX18yYVJSMVwiLFxuXHRcIm5vdGlmaWNhdGlvbkNob2ljZVwiOiBcInVzZXJfbm90aWZpY2F0aW9uQ2hvaWNlX19semRWWFwiLFxuXHRcIm5vdGlmaWNhdGlvbk9wdGlvblwiOiBcInVzZXJfbm90aWZpY2F0aW9uT3B0aW9uX18zdzdYSFwiLFxuXHRcIm5vdGlmaWNhdGlvbkVtYWlsXCI6IFwidXNlcl9ub3RpZmljYXRpb25FbWFpbF9fZ3JMX1lcIixcblx0XCJOTWVzc2FnZVwiOiBcInVzZXJfTk1lc3NhZ2VfXzJOMjljXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyVXRpbEluZm9cIjogXCJ1c2VyVXRpbGl0aWVzX3VzZXJVdGlsSW5mb19fMS1XMWJcIixcblx0XCJzaW1wbGVQb3N0QmFubmVyXCI6IFwidXNlclV0aWxpdGllc19zaW1wbGVQb3N0QmFubmVyX18zNTZsZVwiLFxuXHRcInVzZXJVdGlsTm90aWZcIjogXCJ1c2VyVXRpbGl0aWVzX3VzZXJVdGlsTm90aWZfX3hSMjVVXCIsXG5cdFwibm90aWZpY2F0aW9uQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25Db250YWluZXJfXzVzbnVXXCIsXG5cdFwibm90aWZDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmQ29udGFpbmVyX18yRGdlZVwiLFxuXHRcIm5vdGlmU2VuZGVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZlNlbmRlcl9fMmVSMkdcIixcblx0XCJub3RpZk1lc3NhZ2VcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmTWVzc2FnZV9fMWV6X1hcIixcblx0XCJub3RpZkFjY2VwdGVkXCI6IFwidXNlclV0aWxpdGllc19ub3RpZkFjY2VwdGVkX18yOGw5ZVwiLFxuXHRcIm5vdGlmRGVjbGluZWRcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmRGVjbGluZWRfXy1na3dHXCIsXG5cdFwibm90aWZpY2F0aW9uT3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25PcHRpb25fXzNucmFKXCIsXG5cdFwic3RhbmRhcmRIb3ZlclwiOiBcInVzZXJVdGlsaXRpZXNfc3RhbmRhcmRIb3Zlcl9fMWNtQmtcIixcblx0XCJOQW5zd2VySW5wdXRcIjogXCJ1c2VyVXRpbGl0aWVzX05BbnN3ZXJJbnB1dF9fMmhuZlRcIixcblx0XCJkZWNpZGVcIjogXCJ1c2VyVXRpbGl0aWVzX2RlY2lkZV9fVklER2FcIixcblx0XCJvcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX29wdGlvbl9fQVNMLUtcIixcblx0XCJlbWFpbFwiOiBcInVzZXJVdGlsaXRpZXNfZW1haWxfXzJ1LXZlXCIsXG5cdFwic2tpbGxsXCI6IFwidXNlclV0aWxpdGllc19za2lsbGxfXzFJTHhEXCIsXG5cdFwibm90aWZGaWx0ZXJDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmRmlsdGVyQ29udGFpbmVyX18xVXJ5NVwiLFxuXHRcIk5GQ3JlYXRvckNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfTkZDcmVhdG9yQ29udGFpbmVyX18yYzRTNlwiLFxuXHRcIm1lc3NhZ2VzT3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19tZXNzYWdlc09wdGlvbl9fZVJrNVFcIixcblx0XCJORkxhYmVsXCI6IFwidXNlclV0aWxpdGllc19ORkxhYmVsX18zM1ZJRVwiLFxuXHRcIk5GT3B0aW9uQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ORk9wdGlvbkNvbnRhaW5lcl9fMjk3NktcIixcblx0XCJORk9wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfTkZPcHRpb25fXzJsXzdDXCIsXG5cdFwiTkZTcGxpdHRlclwiOiBcInVzZXJVdGlsaXRpZXNfTkZTcGxpdHRlcl9fMVVrQW9cIixcblx0XCJORkRET3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19ORkRET3B0aW9uX18zWEhXSlwiLFxuXHRcIm5vdGlmaWNhdGlvbkNMQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25DTENvbnRhaW5lcl9fbFVTdkFcIixcblx0XCJub3RpZmljYXRpb25TdWNlc3NJY29uXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25TdWNlc3NJY29uX18xY3ZxclwiLFxuXHRcIm5vdGlmaWNhdGlvbkNsXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25DbF9fMi1fM05cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWNvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=