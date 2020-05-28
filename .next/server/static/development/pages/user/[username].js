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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/schemas/queries */ "./src/schemas/queries.js");
/* harmony import */ var _post_PostSmall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post/PostSmall */ "./components/post/PostSmall.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
var _jsxFileName = "C:\\Code\\Projects\\projectU\\projectu\\components\\post\\PostSmallList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const PostSmallList = props => {
  const postListReady = props.posts.map(p => __jsx(_post_PostSmall__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: p,
    user: p.user.username,
    key: `PSL${p.title}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 48
    }
  }));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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
    title: "resume link",
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
/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/schemas/mutations */ "./src/schemas/mutations.js");
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/schemas/queries */ "./src/schemas/queries.js");
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

  const [sendMessage] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_3__["MAKE_NOTIFICATION"], {
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
    query: _src_schemas_queries__WEBPACK_IMPORTED_MODULE_4__["ALL_USERS"]
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
    query: _src_schemas_queries__WEBPACK_IMPORTED_MODULE_4__["FIND_USER"],
    variables: {
      username: params.username
    }
  }).catch(err => console.log(err));
  const userPostsQuery = await _lib_apollo__WEBPACK_IMPORTED_MODULE_13__["apolloClient"].query({
    query: _src_schemas_queries__WEBPACK_IMPORTED_MODULE_4__["LIST_OF_POSTS"],
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

/***/ 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2QmFyL1VzZXJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L1Bvc3RTbWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvUG9zdFNtYWxsTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHQtZmllbGQvRm9ybUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHQtZmllbGQvSW5wdXRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LWZpZWxkL1JlZmVyZW5jZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LWZpZWxkL1NraWxsU3VnZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvZm9ybS9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvZm9ybS9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3N0cnVjdHVyZS9Mb2dnZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3N0cnVjdHVyZS9Ob3RMb2dnZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3V0aWxpdGllcy9Ob3RpZi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvdXRpbGl0aWVzL1VzZXJOb3RpZkxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyL3V0aWxpdGllcy9Vc2VyU1AuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXIvW3VzZXJuYW1lXS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3Rva2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9xdWVyaWVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9pbnB1dEhlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9uYXZCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvcGFnZXMvdXNlclBhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy91c2VyL3VzZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXNlci91c2VyVXRpbGl0aWVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwicXVlcnkiLCJzZXRRdWVyeSIsInVzZVN0YXRlIiwib25RdWVyeUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjaGlsZHJlbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidG9rZW4iLCJjdXJyZW50VXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2V0VG9rZW4iLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJzZXRDdXJyZW50VXNlciIsInNldFBlbmRpbmdOb3RpZmljYXRpb25zIiwic2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIiwiY29ubmVjdCIsIkxvYWRpbmciLCJzaXplIiwiY29sb3IiLCJOYXZCYXIiLCJ1dGlsaXR5U2hvd24iLCJzZXRVdGlsaXR5U2hvd24iLCJtZW51SXRlbVNob3duIiwic2V0TWVudUl0ZW1TaG93biIsImNoYW5nZVV0aWxpdHkiLCJuYW1lIiwiY2hhbmdlTWVudUl0ZW0iLCJpdGVtIiwibGlua1RvUHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImVudGVyUXVlcnkiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlS2V5UHJlc3MiLCJrZXkiLCJvblN1Z2dlc3Rpb25DbGlja2VkIiwic2tpbGwiLCJzcGxpdFF1ZXJ5Iiwic3BsaXQiLCJuZXdRdWVyeSIsImxlbmd0aCIsInNsaWNlIiwiam9pbiIsImhhbmRsZUxvZ291dCIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwiY2xlYXJUb2tlbiIsIm1lbnVTdHlsZSIsImJvcmRlckJvdHRvbUNvbG9yIiwiYWxlcnRCYXJTdHlsZSIsImFsZXJ0Tm90aWYiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJkaXNwbGF5Iiwibm9Vc2VyIiwiTkIiLCJuYXZDb250YWluZXIiLCJuYXZCYXJDb250YWluZXIiLCJpY29uQ29udGFpbmVyIiwibmF2QmFySWNvbiIsInNlYXJjaEJhciIsImVudGVyU2VhcmNoIiwic2VhcmNoSG92ZXIiLCJzZWFyY2hJY29uIiwic2VhcmNoSHIiLCJzZWFyY2hJbnB1dCIsImUiLCJTQlNlcGFyYXRvciIsImFsZXJ0QmFyQ29udGFpbmVyIiwibWVzc2FnZSIsInJlc2V0QWxlcnQiLCJjbG9zZSIsIm5hdkNvbnRhaW5lck0iLCJuYXZCYXJDb250YWluZXJNIiwiTkJCcmFuZCIsIk5CTG9nbyIsIk5CUHJpbWFyeVV0aWxpdGllcyIsIlBVU2VhcmNoIiwiUFVIYW1idXJnZXJDb250YWluZXIiLCJQTkNvbnRhaW5lciIsIlBVSGFtYnVyZ2VyIiwicGVuZGluZ05vdGlmU3RhdHMiLCJwZW5kaW5nTm90aWZpY2F0aW9ucyIsIlBOQnViYmxlIiwiU2hvd0luU3ViTmF2IiwibW9yZUl0ZW1CdXR0b24iLCJtZW51SXRlbVNlbGVjdGVkIiwibWVudUl0ZW0iLCJub3RpZkl0ZW1CdXR0b24iLCJiZWxsSWNvblciLCJub3RpZmljYXRpb25JdGVtIiwiZm9sbG93aW5nSXRlbUJ1dHRvbiIsIm5hdkJhclN1YkNvbnRhaW5lck0iLCJwYWRkaW5nIiwibWFyZ2luIiwidXNlcm5hbWUiLCJhbGxJdGVtcyIsIm1vZGFsSXRlbUJ1dHRvbnMiLCJtYXAiLCJpIiwibG9naW5CYXIiLCJNZW51SXRlbVRvU2hvdyIsIm1lbnVNb2RhbENvbnRhaW5lciIsIm1vcmVMaW5rIiwic2hvd1doZW5TQiIsIlBOQnViYmxlSGFtYnVyZ2VyIiwibmF2QmFyU3ViQ29udGFpbmVyIiwiaGVpZ2h0IiwiVXNlckNvbnRhaW5lciIsImxvZ1N0YXRlVG9TaG93IiwiVUMiLCJ1c2VyV3JhcHBlciIsIlBvc3RTbWFsbCIsImhhbmRsZUVycm9yIiwiY29uc29sZSIsImxvZyIsInJlbW92ZVNQTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsIlJFTU9WRV9TQVZFRF9QT1NUIiwib25FcnJvciIsInAiLCJwb3N0IiwidXNlciIsInBhbGxldHRlIiwicGFsbGV0dGVHZW5lcmF0b3IiLCJjb2xvclBhbGxldHRlIiwiaGFuZGxlU2F2ZVJlbW92ZSIsInJlc3VsdCIsInZhcmlhYmxlcyIsIl9pZCIsInBvc3RJZCIsIm5ld1NhdmVkUG9zdHMiLCJzYXZlZFBvc3RzIiwiZmlsdGVyIiwic2V0Q3VycmVudFVzZXJTUCIsInRyaWdnZXJBbGVydCIsInRpdGxlIiwic2V0QWxlcnQiLCJ0eXBlIiwiUFQiLCJwb3N0V3JhcHBlclNtIiwicG9zdENvbG9ySW5kaWNhdG9yIiwicG9zdENvbnRhaW5lciIsInBvc3RIZWFkZXIiLCJQSFVzZXIiLCJQSFVJY29uIiwicG9zdFRpdGxlIiwibWFyZ2luQm90dG9tIiwicG9zdFNtUmVtb3ZlIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInNldEN1cnJlbnRVc2VyUG9zdHMiLCJQb3N0U21hbGxMaXN0IiwicG9zdExpc3RSZWFkeSIsInBvc3RzIiwiRm9ybUNvbnRhaW5lciIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJzaWduSW5XYXJuaW5nIiwiYm9yZGVyVG9wQ29sb3IiLCJzaHJpbmtJY29uIiwiaGFuZHNoYWtlSWNvbiIsIklucHV0SGVhZGVyIiwiaW5mbyIsImlucHV0Rm9yIiwiSUgiLCJpbmZvVGl0bGVUZXh0Iiwic2hvd0luZm8iLCJjb2xvckluZm8iLCJpY29uIiwiZm9ybUluZm9Db250YWluZXIiLCJpbmZvSGVhZGVyQ29udGFpbmVyIiwiaW5mb0ljb24iLCJpbmZvQ29udGVudCIsIlJlZmVyZW5jZUxpbmsiLCJyZWZlcmVuY2VMaW5rQ29udGVudCIsIndlYnNpdGVTdGF0cyIsInJsIiwiZm9udFdlaWdodCIsIlNraWxsU3VnZyIsInRvTG93ZXJDYXNlIiwibGFzdFdvcmQiLCJza2lsbHMiLCJzZXRTa2lsbHMiLCJza2lsbFNlYXJjaFF1ZXJ5IiwidXNlUXVlcnkiLCJTS0lMTF9TRUFSQ0giLCJza2lsbENvbmRpdGlvbnMiLCJyZWR1Y2VyIiwic2tpbGxTZWFyY2giLCJza2lsbHNMaXN0IiwiZGF0YSIsInVzZUVmZmVjdCIsInN1Z2dlc3Rpb25zVG9TaG93IiwicyIsImdyaWRDb2x1bW4iLCJzdWdnZXN0aW9uc1N0eWxlIiwiUmVnaXN0ZXIiLCJ1c2VGaWVsZCIsInBhc3N3b3JkIiwicmVQYXNzd29yZCIsImVtYWlsIiwicmVmZXJlbmNlTGluayIsImNsZWFuZWRNZXNzYWdlIiwiZmllbGRzIiwiaW5jbHVkZXMiLCJyZWdpc3Rlck11dGF0aW9uIiwiQ1JFQVRFX1VTRVIiLCJoYW5kbGVTdW1iaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwiYmdTdHlsZSIsIm5vQkciLCJVUiIsInVzZXJGb3JtQ29udGFpbmVyIiwidXNlckZvcm0iLCJVRklucHV0IiwiVUZTdWJtaXQiLCJTaWduSW4iLCJzaWduSW5NdXRhdGlvbiIsIkxPR0lOIiwibG9naW4iLCJzZXRJdGVtIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJMb2dnZWQiLCJzaG93VXRpbGl0aWVzIiwic2V0U2hvd1V0aWxpdGllcyIsImN1cnJlbnRVc2VyVU4iLCJnZXRJdGVtIiwidXNlclF1ZXJ5IiwiRklORF9VU0VSIiwidXNlclF1ZXJ5Q29uZGl0aW9ucyIsImZpbmRVc2VyIiwidXNlclJlc3VsdCIsInVzZXJDb250YWluZXIiLCJMR0RVc2VyQ29udGFpbmVyIiwidXNlck9wdGlvbnNTcGxpdHRlciIsInVzZXJJY29uQ29udGFpbmVyIiwidXNlckJhbm5lciIsImxvZ291dCIsImNoYW5nZVV0aWxpdHlTaG93biIsImNoYW5nZVRvIiwiY2hhbmdlU2hvd1V0aWxpdGllcyIsInVzZXJuYW1lSWNvbiIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwiaWNvblRvU2hvdyIsIlVJQ0giLCJ1c2VyVXNlcm5hbWVJY29uIiwidXNlckljb25Ib3ZlciIsInVzZXJJY29uIiwiYmFzaWNTdHlsZXMiLCJjbGFzc05hbWUiLCJub3RpZmljYXRpb25zIiwiZm9sbG93aW5nIiwiVVVPU2VsZWN0ZWQiLCJzaG93SW5CYW5uZXIiLCJVVUFkZFBvc3QiLCJ1c2VyVXRpbGl0eU9wdGlvbiIsIlVVQVBJY29uIiwiVVVBUFRleHQiLCJVVUljb24iLCJVVUxvZ291dCIsIlVVTG9nb3V0SWNvbiIsInVzZXJVc2VybmFtZUNvbnRhaW5lciIsIlNVSCIsInNob3dCdWJibGUiLCJ1c2VyTm90aWZpY2F0aW9uQnViYmxlIiwic2hvd1V0aWxpdHlDb250ZW50IiwidXRpbGl0eUNvbnRlbnQiLCJVVVV0aWxpdGllc1NwbGl0dGVyIiwiVVVDb250ZW50Q29udGFpbmVyIiwiTm90TG9nZ2VkIiwidXNlck9wdGlvbiIsInNldFVzZXJPcHRpb24iLCJvcHRpb25TdHlsZSIsInNpZ25JbiIsInJlZ2lzdGVyIiwiZm9ybVRvU2hvdyIsImNoYW5nZU9wdGlvbiIsIk5MVXNlckNvbnRhaW5lciIsInVzZXJPcHRpb25Db250YWluZXIiLCJ1c2VyT3B0aW9ucyIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwiTm90aWYiLCJhY2NlcHROb3RpZiIsIkFDQ0VQVF9OT1RJRklDQVRJT04iLCJkZWNsaW5lTm90aWYiLCJERUNMSU5FX05PVElGSUNBVElPTiIsImFuc3dlclF1ZXN0aW9uIiwiQU5TV0VSX1FVRVNUSU9OIiwiYW5zd2VyIiwiaGFuZGxlQW5zd2VyIiwibm90aWZpY2F0aW9uSWQiLCJub3RpZiIsInJlc3BvbnNlIiwibmV3Tm90aWZpY2F0aW9ucyIsIm4iLCJ1c2VyRnJvbSIsImhhbmRsZUFjY2VwdCIsImFjY2VwdCIsImFjY2VwdE5vdGlmaWNhdGlvbiIsImhhbmRsZURlY2xpbmUiLCJkZWNsaW5lIiwiZGVjbGluZU5vdGlmaWNhdGlvbiIsIm5vdGlmU3RhdHVzQ29sb3IiLCJhY2NlcHRlZCIsInF1ZXN0aW9uIiwiYm9yZGVyQm90dG9tIiwidXNlclRvIiwibWFyZ2luTGVmdCIsIkdDTGlua1N0YXRzIiwiY29udGFjdExpbmsiLCJjbGVhbmVkTGluayIsInNraWxsVG9Kb2luIiwic2tpbGxOYW1lcyIsInByb3Bvc2VkQ29udHJpYnV0aW9uIiwiaW5kZXhPZiIsIlVzZXJOb3RpZkxpc3QiLCJzZW50RmlsdGVyIiwic2V0U2VudEZpbHRlciIsInNob3dTRkREIiwic2V0U2hvd1NGREQiLCJzdGF0dXNGaWx0ZXIiLCJzZXRTdGF0dXNGaWx0ZXIiLCJzaG93U3RhdHVzREQiLCJzZXRTaG93U3RhdHVzREQiLCJGaWx0ZXIiLCJzZW50T3B0aW9ucyIsImFsbE9wdGlvbnMiLCJvbk9wdGlvbkNsaWNrIiwib3B0aW9uIiwibyIsIlVVIiwiTkZERE9wdGlvbiIsInNlbnRERCIsIk5Gcm9wZG93biIsIk5GU3BsaXR0ZXIiLCJzdGF0dXNPcHRpb25zIiwic3RhdHVzREQiLCJORkRyb3Bkb3duIiwibm90aWZGaWx0ZXJDb250YWluZXIiLCJORkNyZWF0b3JDb250YWluZXIiLCJORkxhYmVsIiwiTkZPcHRpb25Db250YWluZXIiLCJORk9wdGlvbiIsInN0YXR1c0NvbmRpdGlvbnMiLCJub3RpZlN0YXR1cyIsInNlbnRDb25kaXRpb25zIiwic2VudFN0YXR1cyIsInNob3dOb3RpZmljYXRpb25zIiwicmV2ZXJzZSIsIlVzZXJTUCIsImlkX2xpc3QiLCJwb3N0TGlzdFF1ZXJ5IiwiTElTVF9PRl9QT1NUUyIsInF1ZXJ5Q29uZGl0aW9ucyIsImdldExpc3RPZlBvc3RzIiwicG9zdExpc3QiLCJuZXdQb3N0TGlzdCIsImluZCIsImFsbFNQIiwiaHR0cExpbmsiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJjb25jYXQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ3aXRoQXBvbGxvIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwicmVzb2x2ZSIsInNjcm9sbCIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiUHJvbWlzZSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIlVzZXJQYWdlIiwiZU1lc3NhZ2UiLCJzZW5kTWVzc2FnZSIsIk1BS0VfTk9USUZJQ0FUSU9OIiwiaGFuZGxlTWVzc2FnZSIsInVzZXJGcm9tSWQiLCJ1c2VyVG9JZCIsImRlc2NyaXB0aW9uVG9TaG93IiwiYW10T2ZQb3N0cyIsImRGaW5hbCIsIlVQIiwiVVBDb250YWluZXIiLCJVUENvbnRlbnQiLCJVUFRpdGxlQ29udGFpbmVyIiwiVVBUaXRsZUljb24iLCJVUFRpdGxlIiwib3BhY2l0eSIsIlVQUG9zdHNDb250YWluZXIiLCJ1c2VyUG9zdHMiLCJnZXRTdGF0aWNQYXRocyIsInVzZXJuYW1lc1F1ZXJ5IiwiQUxMX1VTRVJTIiwiYWxsVXNlcnMiLCJ1IiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInVzZXJQb3N0c1F1ZXJ5IiwiYWN0aW9uIiwiYW10Iiwic3RhcnQiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwicHJpbWFyeUNvbG9yIiwiY29sb3JzIiwiYyIsIk51bWJlciIsImhpZ2hlckNvbG9yIiwiaXNEYXJrIiwiQ1JFQVRFX1BPU1QiLCJncWwiLCJERUxFVEVfUE9TVCIsIlNBVkVfUE9TVCIsIkFTS19RVUVTVElPTiIsIkxJU1RfT0ZfTk9USUZJQ0FUSU9OUyIsIk1FIiwiRklORF9QT1NUIiwiQUxMX1BPU1RTIiwiR0VUX1BPU1RfVElUTEVTIiwiU0VBUkNIX1BPU1RTIiwiUEVORElOR19OT1RJRlMiLCJRX0FORF9BX05PVElGUyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlclxcW3VzZXJuYW1lXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlciwgc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IEZJTkRfVVNFUiwgUEVORElOR19OT1RJRlMsIExJU1RfT0ZfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4uL3NyYy9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IG9uUXVlcnlDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPE5hdkJhciBxdWVyeT17cXVlcnl9IG9uUXVlcnlDaGFuZ2U9e29uUXVlcnlDaGFuZ2V9IG5vVXNlciAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgJiYgcHJvcHMudG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICBwcm9wcy5zZXRUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIuX2lkIDogJ3RoaXNpc2Zha2UnXHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmc1F1ZXJ5ID0gdXNlUXVlcnkoUEVORElOR19OT1RJRlMsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiAge3VzZXJJZDogY3VycmVudFVzZXJJZH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyVU4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpIDogJ3RoaXNpc2Zha2UnXHJcbiAgICAgICAgY29uc3QgdXNlclF1ZXJ5ID0gdXNlUXVlcnkoRklORF9VU0VSLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBjdXJyZW50VXNlclVOfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgdXNlck5vdGlmcyA9IHByb3BzLmN1cnJlbnRVc2VyID8gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCkgOiBbXVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc1F1ZXJ5ID0gdXNlUXVlcnkoTElTVF9PRl9OT1RJRklDQVRJT05TLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbnM6IHVzZXJOb3RpZnN9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBub3RpZnNRdWVyeUNvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbm90aWZzUXVlcnkuZGF0YSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKG5vdGlmc1F1ZXJ5LmxvYWRpbmcpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChub3RpZnNRdWVyeS5kYXRhLmxpc3RPZk5vdGlmaWNhdGlvbnMubGVuZ3RoIDwgMSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKCFwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLmxlbmd0aCkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnNbMF0udXNlckZyb20pIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiBub3RpZnNRdWVyeS5kYXRhLmxpc3RPZk5vdGlmaWNhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGVuZGluZ05vdGlmc0NvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcGVuZGluZ05vdGlmc1F1ZXJ5LmRhdGEpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jdXJyZW50VXNlciAmJiBwcm9wcy5jdXJyZW50VXNlci5wZW5kaW5nTm90aWZpY2F0aW9ucykgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIHBlbmRpbmdOb3RpZnNRdWVyeS5kYXRhLnNlYXJjaEF3YWl0aW5nTm90aWZzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXJDb25kaXRpb25zID0gKHF1ZXJ5LCByZWR1Y2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcXVlcnkuZGF0YSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKCFxdWVyeS5kYXRhLmZpbmRVc2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocmVkdWNlcikgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5LmRhdGEuZmluZFVzZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm90aWZzRmlsbGVkID0gbm90aWZzUXVlcnlDb25kaXRpb25zKClcclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzID0gcGVuZGluZ05vdGlmc0NvbmRpdGlvbnMoKVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2VyQ29uZGl0aW9ucyh1c2VyUXVlcnksIHByb3BzLmN1cnJlbnRVc2VyKVxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlcih1c2VyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwZW5kaW5nTm90aWZzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRQZW5kaW5nTm90aWZpY2F0aW9ucyhwZW5kaW5nTm90aWZzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub3RpZnNGaWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyhub3RpZnNGaWxsZWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbbm90aWZzRmlsbGVkLCBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIHVzZXIsIHByb3BzLnNldEN1cnJlbnRVc2VyLCBwZW5kaW5nTm90aWZzLCBwcm9wcy5zZXRQZW5kaW5nTm90aWZpY2F0aW9ucywgcHJvcHNdKVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2QmFyIHF1ZXJ5PXtxdWVyeX0gb25RdWVyeUNoYW5nZT17b25RdWVyeUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0VG9rZW4sIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRDdXJyZW50VXNlcjogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0UGVuZGluZ05vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRQZW5kaW5nTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcbnNldEN1cnJlbnRVc2VyXHJcbnNldFBlbmRpbmdOb3RpZmljYXRpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoTGF5b3V0KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4vLyBpbXBvcnQgbG9nb0IgZnJvbSAnLi4vc3RhdGljL3N2Zy9sb2dvL2xvZ29CLnN2ZydcclxuLy8gaW1wb3J0IGxvZ29XIGZyb20gJy4uL3N0YXRpYy9zdmcvbG9nby9sb2dvVy5zdmcnXHJcblxyXG5jb25zdCBMb2FkaW5nID0gKHByb3BzKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuc2l6ZSA9PT0gJ3NtYWxsJykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29CLnN2Z1wiIGNsYXNzTmFtZT1cImxvYWRpbmctbG9nb1wiIGFsdD1cImxvYWRpbmcgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+bG9hZGluZzwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy5jb2xvciA9PT0gJ3doaXRlJykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb1cuc3ZnXCIgY2xhc3NOYW1lPVwibG9hZGluZy1sb2dvLWxcIiBhbHQ9XCJsb2FkaW5nIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9hZGluZy10aXRsZVwiPmxvYWRpbmc8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvQi5zdmdcIiBjbGFzc05hbWU9XCJsb2FkaW5nLWxvZ28tbFwiIGFsdD1cImxvYWRpbmcgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2FkaW5nLXRpdGxlXCI+bG9hZGluZzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShMb2FkaW5nKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFVzZXJDb250YWluZXIgZnJvbSAnLi9Vc2VyQ29udGFpbmVyJ1xuaW1wb3J0IE5CIGZyb20gJy4uLy4uL3N0eWxlcy9uYXZCYXIubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBTa2lsbFN1Z2cgZnJvbSAnLi4vdGV4dC1maWVsZC9Ta2lsbFN1Z2cnXG5pbXBvcnQgVXNlck5vdGlmTGlzdCBmcm9tICcuLi91c2VyL3V0aWxpdGllcy9Vc2VyTm90aWZMaXN0J1xuaW1wb3J0IFVzZXJTUCBmcm9tICcuLi91c2VyL3V0aWxpdGllcy9Vc2VyU1AnXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uL3VzZXIvZm9ybS9TaWduSW4nXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vdXNlci9mb3JtL1JlZ2lzdGVyJ1xuaW1wb3J0IHsgY2xlYXJUb2tlbiB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xuaW1wb3J0IHsgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdXRpbGl0eVNob3duLCBzZXRVdGlsaXR5U2hvd25dID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbbWVudUl0ZW1TaG93biwgc2V0TWVudUl0ZW1TaG93bl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgY2hhbmdlVXRpbGl0eSA9IChuYW1lKSA9PiB7XG4gICAgICAgIHNldE1lbnVJdGVtU2hvd24obnVsbClcbiAgICAgICAgaWYgKG5hbWUgPT09IHV0aWxpdHlTaG93bikgc2V0VXRpbGl0eVNob3duKG51bGwpXG4gICAgICAgIGVsc2Ugc2V0VXRpbGl0eVNob3duKG5hbWUpXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlTWVudUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbSA9PT0gbWVudUl0ZW1TaG93bikgc2V0TWVudUl0ZW1TaG93bihudWxsKVxuICAgICAgICBlbHNlIHNldE1lbnVJdGVtU2hvd24oaXRlbSlcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rVG9QdXNoID0gcHJvcHMucXVlcnkgPyBgL3Jlc3VsdHMvJHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMucXVlcnkpfWAgOiAnL3Jlc3VsdHMvYWxsJ1xuICAgIFxuICAgIGNvbnN0IGVudGVyUXVlcnkgPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKGxpbmtUb1B1c2gpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgICAgICBlbnRlclF1ZXJ5KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uU3VnZ2VzdGlvbkNsaWNrZWQgPSAoc2tpbGwpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRRdWVyeSA9IHByb3BzLnF1ZXJ5LnNwbGl0KCcgJylcbiAgICAgICAgY29uc3QgbmV3UXVlcnkgPSBzcGxpdFF1ZXJ5Lmxlbmd0aCA9PT0gMSA/IGAke3NraWxsfSBgIDogYCR7c3BsaXRRdWVyeS5zbGljZSgwLCAtMSkuam9pbignICcpfSAke3NraWxsfSBgXG4gICAgICAgIHByb3BzLm9uUXVlcnlDaGFuZ2Uoe3RhcmdldDoge3ZhbHVlOiBuZXdRdWVyeX19KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgcHJvcHMuY2xlYXJUb2tlbigpXG4gICAgfVxuXG4gICAgY29uc3QgbWVudVN0eWxlID0gbWVudUl0ZW1TaG93biA/IHtib3JkZXJCb3R0b21Db2xvcjogJyMyODI4MjgnfSA6IG51bGxcbiAgICBjb25zdCBhbGVydEJhclN0eWxlID0gcHJvcHMuYWxlcnROb3RpZi5jb2xvciA/XG4gICAgICAgIHtiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmFsZXJ0Tm90aWYuY29sb3IsIGNvbG9yOiBwcm9wcy5hbGVydE5vdGlmLnRleHRDb2xvcn1cbiAgICAgICAgOlxuICAgICAgICB7ZGlzcGxheTogJ25vbmUnLCBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmFsZXJ0Tm90aWYuY29sb3IsIGNvbG9yOiBwcm9wcy5hbGVydE5vdGlmLnRleHRDb2xvcn1cblxuICAgIGlmIChwcm9wcy5ub1VzZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake05CLm5hdkNvbnRhaW5lcn0gSFdNYH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZCYXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIuaWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9sb2dvL2xvZ29CLnN2Z1wiIGFsdD1cImljb25cIiBjbGFzc05hbWU9e05CLm5hdkJhckljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Jlc3VsdHMvW3NlYXJjaFF1ZXJ5XScgYXM9e2xpbmtUb1B1c2h9ICBvbkNsaWNrPXsoKSA9PiBlbnRlclF1ZXJ5KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuZXV0cmFsaXplLWxpbmsgJHtOQi5lbnRlclNlYXJjaH0gJHtOQi5zZWFyY2hIb3Zlcn1gfT48aW1nIHNyYz1cIi9zdmcvc2VhcmNoVy5zdmdcIiBjbGFzc05hbWU9e05CLnNlYXJjaEljb259IGFsdD1cInNlYXJjaFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc2VhcmNoSHJ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnF1ZXJ5fSBjbGFzc05hbWU9e05CLnNlYXJjaElucHV0fSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25RdWVyeUNoYW5nZShlKX0gb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleVByZXNzKGUpfSBwbGFjZWhvbGRlcj1cInNlYXJjaCBvciBlbnRlciBub3RoaW5nIGZvciBhbGwgcmVzdWx0c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLlNCU2VwYXJhdG9yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFN1Z2cgcXVlcnk9e3Byb3BzLnF1ZXJ5fSBvblN1Z2dlc3Rpb25DbGlja2VkPXtvblN1Z2dlc3Rpb25DbGlja2VkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuYWxlcnRCYXJDb250YWluZXJ9IHN0eWxlPXthbGVydEJhclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZXNzYWdlfT57cHJvcHMuYWxlcnROb3RpZi5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IHByb3BzLnJlc2V0QWxlcnQoKX0gY2xhc3NOYW1lPXtOQi5jbG9zZX0+eDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtOQi5uYXZDb250YWluZXJNfSBTV01gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkJhckNvbnRhaW5lck19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake05CLk5CQnJhbmR9IG5ldXRyYWxpemUtbGlua2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvbG9nby9sb2dvQi5zdmdcIiBjbGFzc05hbWU9e05CLk5CTG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Vbmlsb3VzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuTkJQcmltYXJ5VXRpbGl0aWVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvc2VhcmNoU0Iuc3ZnXCIgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eSgnc2VhcmNoJyl9IGNsYXNzTmFtZT17TkIuUFVTZWFyY2h9IGFsdD1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVdGlsaXR5KCdtZW51Jyl9IGNsYXNzTmFtZT17YCR7TkIuUFVIYW1idXJnZXJDb250YWluZXJ9ICR7TkIuUE5Db250YWluZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9oYW1idXJnZXIuc3ZnXCIgY2xhc3NOYW1lPXtOQi5QVUhhbWJ1cmdlcn0gYWx0PVwibWVudVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMucmVzZXRBbGVydCgpfSBjbGFzc05hbWU9e05CLmFsZXJ0QmFyQ29udGFpbmVyfSBzdHlsZT17YWxlcnRCYXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVzc2FnZX0+e3Byb3BzLmFsZXJ0Tm90aWYubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e05CLmNsb3NlfT54PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHBlbmRpbmdOb3RpZlN0YXRzID0gcHJvcHMuY3VycmVudFVzZXIgJiYgcHJvcHMuY3VycmVudFVzZXIucGVuZGluZ05vdGlmaWNhdGlvbnMgPiAwID9cbiAgICAgICAgW05CLlBOQnViYmxlLCBwcm9wcy5jdXJyZW50VXNlci5wZW5kaW5nTm90aWZpY2F0aW9uc10gOiBbbnVsbCwgbnVsbF1cbiAgICBcbiAgICBjb25zdCBTaG93SW5TdWJOYXYgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vcmVJdGVtQnV0dG9uID0gbWVudUl0ZW1TaG93biA9PT0gJ21vcmUnID9cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9tb3JlVy5zdmdcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbSgnbW9yZScpfSBjbGFzc05hbWU9e05CLm1lbnVJdGVtU2VsZWN0ZWR9IGFsdD1cIm1vcmVcIiAvPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL21vcmVTQi5zdmdcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbSgnbW9yZScpfSBjbGFzc05hbWU9e05CLm1lbnVJdGVtfSBhbHQ9XCJtb3JlXCIgLz5cbiAgICAgICAgaWYgKHV0aWxpdHlTaG93biA9PT0gJ21lbnUnKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBhbGxJdGVtcyA9IFtcbiAgICAgICAgICAgICAgICAvLyAgICAge25hbWU6ICdub3RpZmljYXRpb25zJywgaWNvbkI6IGJlbGxJY29uQiwgaWNvblc6IGJlbGxJY29uV30sXG4gICAgICAgICAgICAgICAgLy8gICAgIHtuYW1lOiAnZm9sbG93aW5nJywgaWNvbkI6IGhlYXJ0SWNvbkIsIGljb25XOiBoZWFydEljb25XfSxcbiAgICAgICAgICAgICAgICAvLyBdXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90aWZJdGVtQnV0dG9uID0gbWVudUl0ZW1TaG93biA9PT0gJ25vdGlmaWNhdGlvbnMnID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbSgnbm90aWZpY2F0aW9ucycpfSBjbGFzc05hbWU9e2Ake05CLm1lbnVJdGVtU2VsZWN0ZWR9ICR7TkIuUE5Db250YWluZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmVsbEljb25XfSAgY2xhc3NOYW1lPXtOQi5ub3RpZmljYXRpb25JdGVtfSBhbHQ9eydub3RpZmljYXRpb25zJ30ga2V5PXtgVU8keydub3RpZmljYXRpb25zJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BlbmRpbmdOb3RpZlN0YXRzWzBdfSA+e3BlbmRpbmdOb3RpZlN0YXRzWzFdfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKCdub3RpZmljYXRpb25zJyl9IGNsYXNzTmFtZT17YCR7TkIubWVudUl0ZW19ICR7TkIuUE5Db250YWluZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvYmVsbEIuc3ZnXCIgY2xhc3NOYW1lPXtOQi5ub3RpZmljYXRpb25JdGVtfSBhbHQ9eydub3RpZmljYXRpb25zJ30ga2V5PXtgVU8keydub3RpZmljYXRpb25zJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BlbmRpbmdOb3RpZlN0YXRzWzBdfSA+e3BlbmRpbmdOb3RpZlN0YXRzWzFdfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGxvd2luZ0l0ZW1CdXR0b24gPSBtZW51SXRlbVNob3duID09PSAnZm9sbG93aW5nJyA/IFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvaGVhcnRXLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKCdmb2xsb3dpbmcnKX0gY2xhc3NOYW1lPXtOQi5tZW51SXRlbVNlbGVjdGVkfSBhbHQ9eydmb2xsb3dpbmcnfSBrZXk9e2BVTyR7J2ZvbGxvd2luZyd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvaGVhcnRCLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKCdmb2xsb3dpbmcnKX0gY2xhc3NOYW1lPXtOQi5tZW51SXRlbX0gYWx0PXsnZm9sbG93aW5nJ30ga2V5PXtgVU8keydmb2xsb3dpbmcnfWB9IC8+XG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkJhclN1YkNvbnRhaW5lck19IHN0eWxlPXttZW51U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0Zm9ybXBhZ2VcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbShudWxsKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIubWVudUl0ZW19IHN0eWxlPXt7cGFkZGluZzogMCwgbWFyZ2luOiAwfX0+PGltZyBzcmM9XCIvc3ZnL3BsdXNCLnN2Z1wiIGNsYXNzTmFtZT17TkIubWVudUl0ZW19IGFsdD1cImFkZCBwcm9qZWN0XCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwidXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke3Byb3BzLmN1cnJlbnRVc2VyLnVzZXJuYW1lfWB9IG9uQ2xpY2s9eygpID0+IGNoYW5nZU1lbnVJdGVtKG51bGwpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtOQi5tZW51SXRlbX0gc3R5bGU9e3twYWRkaW5nOiAwLCBtYXJnaW46IDB9fT48aW1nIHNyYz1cIi9zdmcvdXNlclNCLnN2Z1wiIGNsYXNzTmFtZT17TkIubWVudUl0ZW19IGFsdD1cInVzZXIgcGFnZVwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vdGlmSXRlbUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xsb3dpbmdJdGVtQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2V4aXRCLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ291dCgpfSBjbGFzc05hbWU9e05CLm1lbnVJdGVtfSBhbHQ9XCJsb2cgb3V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3JlSXRlbUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBbJ3NpZ24gaW4nLCAncmVnaXN0ZXInXVxuICAgICAgICAgICAgY29uc3QgbW9kYWxJdGVtQnV0dG9ucyA9IGFsbEl0ZW1zLm1hcChpID0+IG1lbnVJdGVtU2hvd24gPT09IGkgPyBcbiAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gY2hhbmdlTWVudUl0ZW0oaSl9IGNsYXNzTmFtZT17TkIubWVudUl0ZW1TZWxlY3RlZH0ga2V5PXtgTUkke2l9YH0gPntpfTwvaDM+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxoMyBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VNZW51SXRlbShpKX0gY2xhc3NOYW1lPXtOQi5tZW51SXRlbX0ga2V5PXtgTUkke2l9YH0gPntpfTwvaDM+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtOQi5uYXZCYXJTdWJDb250YWluZXJNfSAke05CLmxvZ2luQmFyfWB9IHN0eWxlPXttZW51U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7bW9kYWxJdGVtQnV0dG9uc31cbiAgICAgICAgICAgICAgICAgICAge21vcmVJdGVtQnV0dG9ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cblxuICAgIGNvbnN0IE1lbnVJdGVtVG9TaG93ID0gKCkgPT4ge1xuICAgICAgICBpZiAobWVudUl0ZW1TaG93biA9PT0gJ3NpZ24gaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZW51TW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8U2lnbkluIG5vQkc9e3RydWV9IGNoYW5nZU1lbnVJdGVtPXtjaGFuZ2VNZW51SXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVudUl0ZW1TaG93biA9PT0gJ3JlZ2lzdGVyJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudU1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFJlZ2lzdGVyIG5vQkc9e3RydWV9IGNoYW5nZU1lbnVJdGVtPXtjaGFuZ2VNZW51SXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVudUl0ZW1TaG93biA9PT0gJ25vdGlmaWNhdGlvbnMnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZW51TW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+bm90aWZpY2F0aW9uczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxVc2VyTm90aWZMaXN0IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lbnVJdGVtU2hvd24gPT09ICdmb2xsb3dpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZW51TW9kYWxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+c2F2ZWQgcG9zdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8VXNlclNQIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lbnVJdGVtU2hvd24gPT09ICdtb3JlJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVudU1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0L1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPjxoMSBjbGFzc05hbWU9e05CLm1vcmVMaW5rfT5jb250YWN0IHVzPC9oMT48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCBzaG93V2hlblNCID0gdXRpbGl0eVNob3duID09PSAnc2VhcmNoJyA/IHtkaXNwbGF5OiAnYmxvY2snfSA6IHtkaXNwbGF5OiAnbm9uZSd9XG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake05CLm5hdkNvbnRhaW5lcn0gSFdNYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLm5hdkJhckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17TkIuaWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgYWx0PVwiaWNvblwiIGNsYXNzTmFtZT17TkIubmF2QmFySWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc2VhcmNoQmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9yZXN1bHRzL1tzZWFyY2hRdWVyeV0nIGFzPXtsaW5rVG9QdXNofSAgb25DbGljaz17KCkgPT4gZW50ZXJRdWVyeSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuZXV0cmFsaXplLWxpbmsgJHtOQi5lbnRlclNlYXJjaH0gJHtOQi5zZWFyY2hIb3Zlcn1gfT48aW1nIHNyYz1cIi9zdmcvc2VhcmNoVy5zdmdcIiBjbGFzc05hbWU9e05CLnNlYXJjaEljb259IGFsdD1cInNlYXJjaFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaEhyfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3doaXRlJ319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnF1ZXJ5fSBjbGFzc05hbWU9e05CLnNlYXJjaElucHV0fSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25RdWVyeUNoYW5nZShlKX0gb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleVByZXNzKGUpfSBwbGFjZWhvbGRlcj1cInNlYXJjaCBvciBlbnRlciBub3RoaW5nIGZvciBhbGwgcmVzdWx0c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuU0JTZXBhcmF0b3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxTdWdnIHF1ZXJ5PXtwcm9wcy5xdWVyeX0gb25TdWdnZXN0aW9uQ2xpY2tlZD17b25TdWdnZXN0aW9uQ2xpY2tlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxVc2VyQ29udGFpbmVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLmFsZXJ0QmFyQ29udGFpbmVyfSBzdHlsZT17YWxlcnRCYXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5tZXNzYWdlfT57cHJvcHMuYWxlcnROb3RpZi5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgb25DbGljaz17KCkgPT4gcHJvcHMucmVzZXRBbGVydCgpfSBjbGFzc05hbWU9e05CLmNsb3NlfT54PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake05CLm5hdkNvbnRhaW5lck19IFNXTWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZCYXJDb250YWluZXJNfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7TkIuTkJCcmFuZH0gbmV1dHJhbGl6ZS1saW5rYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2xvZ28vbG9nb0Iuc3ZnXCIgY2xhc3NOYW1lPXtOQi5OQkxvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Vbmlsb3VzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuTkJQcmltYXJ5VXRpbGl0aWVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9zZWFyY2hTQi5zdmdcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVdGlsaXR5KCdzZWFyY2gnKX0gY2xhc3NOYW1lPXtOQi5QVVNlYXJjaH0gYWx0PVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eSgnbWVudScpfSBjbGFzc05hbWU9e2Ake05CLlBVSGFtYnVyZ2VyQ29udGFpbmVyfSAke05CLlBOQ29udGFpbmVyfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9oYW1idXJnZXIuc3ZnXCIgY2xhc3NOYW1lPXtOQi5QVUhhbWJ1cmdlcn0gYWx0PVwibWVudVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3BlbmRpbmdOb3RpZlN0YXRzWzBdfSAke05CLlBOQnViYmxlSGFtYnVyZ2VyfWB9PntwZW5kaW5nTm90aWZTdGF0c1sxXX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLnJlc2V0QWxlcnQoKX0gY2xhc3NOYW1lPXtOQi5hbGVydEJhckNvbnRhaW5lcn0gc3R5bGU9e2FsZXJ0QmFyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIubWVzc2FnZX0+e3Byb3BzLmFsZXJ0Tm90aWYubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17TkIuY2xvc2V9Png8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi5uYXZCYXJTdWJDb250YWluZXJ9IHN0eWxlPXtzaG93V2hlblNCfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnNlYXJjaEJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVzdWx0cy9bc2VhcmNoUXVlcnldJyBhcz17bGlua1RvUHVzaH0gIG9uQ2xpY2s9eygpID0+IGVudGVyUXVlcnkoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbmV1dHJhbGl6ZS1saW5rICR7TkIuZW50ZXJTZWFyY2h9ICR7TkIuc2VhcmNoSG92ZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9zZWFyY2hXLnN2Z1wiIGNsYXNzTmFtZT17TkIuc2VhcmNoSWNvbn0gYWx0PVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIuc2VhcmNoSHJ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBoZWlnaHQ6ICcwJ319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnF1ZXJ5fSBjbGFzc05hbWU9e05CLnNlYXJjaElucHV0fSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMub25RdWVyeUNoYW5nZShlKX0gb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleVByZXNzKGUpfSBwbGFjZWhvbGRlcj1cInNlYXJjaCBvciBlbnRlciBub3RoaW5nIGZvciBhbGwgcmVzdWx0c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxTdWdnIHF1ZXJ5PXtwcm9wcy5xdWVyeX0gb25TdWdnZXN0aW9uQ2xpY2tlZD17b25TdWdnZXN0aW9uQ2xpY2tlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNob3dJblN1Yk5hdiAvPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVRvU2hvdyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy8gTmF2QmFyID0gd2l0aFJvdXRlcihOYXZCYXIpXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXHRyZXR1cm4ge1xuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcbiAgICAgICAgYWxlcnROb3RpZjogc3RhdGUuYWxlcnROb3RpZlxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyVG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhjbGVhclRva2VuLCBkaXNwYXRjaCksXG4gICAgICAgIHJlc2V0QWxlcnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldEFsZXJ0LCBkaXNwYXRjaCksXG4gICAgfVxufVxuXG5jbGVhclRva2VuXG5yZXNldEFsZXJ0XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShOYXZCYXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBVQyBmcm9tICcuLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBOb3RMb2dnZWQgZnJvbSAnLi4vdXNlci9zdHJ1Y3R1cmUvTm90TG9nZ2VkJ1xyXG5pbXBvcnQgTG9nZ2VkIGZyb20gJy4uL3VzZXIvc3RydWN0dXJlL0xvZ2dlZCdcclxuXHJcblxyXG5jb25zdCBVc2VyQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBsb2dTdGF0ZVRvU2hvdyA9IHByb3BzLnRva2VuID8gPExvZ2dlZCAvPiA6IDxOb3RMb2dnZWQgLz5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VUMudXNlcldyYXBwZXJ9PlxyXG4gICAgICAgICAgICB7bG9nU3RhdGVUb1Nob3d9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHNcclxuKShVc2VyQ29udGFpbmVyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgUkVNT1ZFX1NBVkVEX1BPU1QgfSBmcm9tICcuLi8uLi9zcmMvc2NoZW1hcy9tdXRhdGlvbnMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyUG9zdHMsIHNldEN1cnJlbnRVc2VyU1AgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgeyB0cmlnZ2VyQWxlcnQsIHBhbGxldHRlR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vc3JjL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcbmltcG9ydCBQVCBmcm9tICcuLi8uLi9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUG9zdFNtYWxsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IFsgZGVsZXRlUG9zdE11dGF0aW9uIF0gPSB1c2VNdXRhdGlvbihERUxFVEVfUE9TVCwge1xyXG4gICAgLy8gICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICAvLyB9KVxyXG4gICAgY29uc3QgWyByZW1vdmVTUE11dGF0aW9uIF0gPSB1c2VNdXRhdGlvbihSRU1PVkVfU0FWRURfUE9TVCwge1xyXG4gICAgICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcCA9IHByb3BzLnBvc3RcclxuICAgIGNvbnN0IHVzZXIgPSBwcm9wcy5wb3N0LnVzZXIgPyBwcm9wcy5wb3N0LnVzZXIudXNlcm5hbWUgOiBwcm9wcy51c2VyXHJcbiAgICBjb25zdCBwYWxsZXR0ZSA9IHBhbGxldHRlR2VuZXJhdG9yKHAuY29sb3IpLmNvbG9yUGFsbGV0dGVcclxuICAgIC8vIGNvbnN0IGhhbmRsZVJlbW92ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWxldGVQb3N0TXV0YXRpb24oe1xyXG4gICAgLy8gICAgICAgICB2YXJpYWJsZXM6IHtwb3N0SWQ6IHByb3BzLnBvc3QuX2lkfVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgLy8gICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlclBvc3RzKHByb3BzLmN1cnJlbnRVc2VyLnBvc3RzLmZpbHRlcihwID0+IHAuX2lkICE9PSBwcm9wcy5wb3N0Ll9pZCkpXHJcbiAgICAvLyAgICAgICAgIHRyaWdnZXJBbGVydCgnZGFuZ2VyJywgYGRlbGV0ZWQgJDogZGVsZXRlZCBwb3N0ICcke3AudGl0bGV9J2AsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIGNvbnN0IGhhbmRsZVNhdmVSZW1vdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtb3ZlU1BNdXRhdGlvbih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogcHJvcHMuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgcG9zdElkOiBwLl9pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NhdmVkUG9zdHMgPSBwcm9wcy5jdXJyZW50VXNlci5zYXZlZFBvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QuX2lkICE9PSBwLl9pZClcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJTUChuZXdTYXZlZFBvc3RzKVxyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ2RhbmdlcicsIGB1bmZvbGxvd2VkJDogdW5mb2xsb3dlZCBwb3N0ICcke3AudGl0bGV9J2AsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHByb3BzLnR5cGUgPT09ICdzYXZlZCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdFdyYXBwZXJTbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbG9ySW5kaWNhdG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcGFsbGV0dGUuY29sb3J9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXIpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtQVC5QSFVzZXJ9IG5ldXRyYWxpemUtbGlua2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQVC5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3RpdGxlXVwiIGFzPXtgL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocC50aXRsZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e1BULnBvc3RUaXRsZX0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc3cHgnfX0+e3AudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlUmVtb3ZlKCl9IGNsYXNzTmFtZT17UFQucG9zdFNtUmVtb3ZlfT54PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcHMuY3VycmVudFVzZXIpIHtcclxuICAgICAgICBpZiAodXNlciA9PT0gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0V3JhcHBlclNtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdENvbG9ySW5kaWNhdG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcGFsbGV0dGUuY29sb3J9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BULnBvc3RIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXIpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake1BULlBIVXNlcn0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQVC5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bdGl0bGVdXCIgYXM9e2AvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwLnRpdGxlKX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQVC5wb3N0VGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnN3B4J319PntwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUoKX0gY2xhc3NOYW1lPVwicG9zdC1zbS1yZW1vdmVcIj54PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UFQucG9zdFdyYXBwZXJTbX0gc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOiAnOHB4IGF1dG8nfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29sb3JJbmRpY2F0b3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwYWxsZXR0ZS5jb2xvcn19IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQVC5wb3N0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQodXNlcil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7UFQuUEhVc2VyfSBuZXV0cmFsaXplLWxpbmtgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQVC5QSFVJY29ufSBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1t0aXRsZV1cIiBhcz17YC9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHAudGl0bGUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtQVC5wb3N0VGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnN3B4J319PntwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7IHNldEN1cnJlbnRVc2VyUG9zdHMsIHNldEN1cnJlbnRVc2VyU1AsIHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShQb3N0U21hbGwpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IExJU1RfT0ZfUE9TVFMgfSBmcm9tICcuLi8uLi9zcmMvc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgUG9zdFNtYWxsIGZyb20gJy4uL3Bvc3QvUG9zdFNtYWxsJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xyXG5cclxuY29uc3QgUG9zdFNtYWxsTGlzdCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHBvc3RMaXN0UmVhZHkgPSBwcm9wcy5wb3N0cy5tYXAocCA9PiA8UG9zdFNtYWxsIHBvc3Q9e3B9IHVzZXI9e3AudXNlci51c2VybmFtZX0ga2V5PXtgUFNMJHtwLnRpdGxlfWB9IC8+KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7cG9zdExpc3RSZWFkeX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy8gXHRyZXR1cm4ge1xyXG4vLyAgICAgICAgIFxyXG4vLyBcdH1cclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbnVsbFxyXG4pKFBvc3RTbWFsbExpc3QpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNvbnN0IEZvcm1Db250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qgc2lnbkluV2FybmluZyA9IHByb3BzLnRva2VuID8gbnVsbCA6IChcclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwid2FybmluZy1jb250YWluZXJcIj5tdXN0IGJlIHNpZ25lZCB0byBwZXJmb3JtIHRoZSB0aGVzZSBhY3Rpb25zPC9oMz5cclxuICAgIClcclxuICAgIGlmIChleHBhbmRlZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJUb3BDb2xvcjogcHJvcHMucGFsbGV0dGUuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IGNsYXNzTmFtZT1cImV4cGFuZGVkLW92ZXJsYXkgU1dNXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLnBhbGxldHRlLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wYWxsZXR0ZS5zaHJpbmtJY29ufSBjbGFzc05hbWU9XCJvdmVybGF5LWltYWdlLWV4cGFuZGVkXCIgYWx0PVwic2hyaW5rIGZvcm1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaWduSW5XYXJuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlciBIV01cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlclRvcENvbG9yOiBwcm9wcy5wYWxsZXR0ZS5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaWduSW5XYXJuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXItbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfSBjbGFzc05hbWU9XCJleHBhbmQtb3ZlcmxheSBTV01cIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcHJvcHMucGFsbGV0dGUuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMucGFsbGV0dGUuaGFuZHNoYWtlSWNvbn0gY2xhc3NOYW1lPVwib3ZlcmxheS1pbWFnZVwiIGFsdD1cImV4cGFuZCBmb3JtXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW5cclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wc1xyXG4pKEZvcm1Db250YWluZXIpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IElIIGZyb20gJy4uLy4uL3N0eWxlcy9pbnB1dEhlYWRlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgSW5wdXRIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgaWYgKCFwcm9wcy5pbmZvKSB7XHJcbiAgICAgICAgcmV0dXJuIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5pbnB1dEZvcn0+PGgzIGNsYXNzTmFtZT17SUguaW5mb1RpdGxlVGV4dH0+e3Byb3BzLnRpdGxlfTwvaDM+PC9sYWJlbD5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93SW5mbyA9IGV4cGFuZGVkID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ30gXHJcbiAgICBjb25zdCBjb2xvckluZm8gPSBwcm9wcy5jb2xvciA9PT0gJ3doaXRlJyA/XHJcbiAgICAgICAge3RleHRDb2xvcjogJyMyODI4MjgnLCBpY29uOiAnL3N2Zy9pbmZvQi5zdmcnfSA6IHt0ZXh0Q29sb3I6ICd3aGl0ZScsIGljb246ICcvc3ZnL2luZm9XLnN2Zyd9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtJSC5mb3JtSW5mb0NvbnRhaW5lcn0gc3R5bGU9e3tjb2xvcjogY29sb3JJbmZvLnRleHRDb2xvcn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SUguaW5mb0hlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMuaW5wdXRGb3J9PjxoMyBjbGFzc05hbWU9e0lILmluZm9UaXRsZVRleHR9Pntwcm9wcy50aXRsZX08L2gzPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IHNyYz17Y29sb3JJbmZvLmljb259IGNsYXNzTmFtZT17SUguaW5mb0ljb259IGFsdD1cImluZm9cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0lILmluZm9Db250ZW50fSBzdHlsZT17c2hvd0luZm99PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShJbnB1dEhlYWRlcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgd2Vic2l0ZVN0YXRzIH0gZnJvbSAnLi4vLi4vc3JjL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcblxyXG5jb25zdCBSZWZlcmVuY2VMaW5rID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByZWZlcmVuY2VMaW5rQ29udGVudCA9IHdlYnNpdGVTdGF0cyhwcm9wcy5ybClcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZmVyZW5jZUxpbmstd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZmVyZW5jZUxpbmstY29udGFpbmVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHJlZmVyZW5jZUxpbmtDb250ZW50LmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVmZXJlbmNlTGlua0NvbnRlbnQuaWNvbn0gY2xhc3NOYW1lPVwiUkwtaWNvblwiIGFsdD17cmVmZXJlbmNlTGlua0NvbnRlbnQudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5ybH0gY2xhc3NOYW1lPVwiUkwtbGluayBuZXV0cmFsaXplLWxpbmtcIiBzdHlsZT17e2NvbG9yOiByZWZlcmVuY2VMaW5rQ29udGVudC5jb2xvcn19PjxkaXYgc3R5bGU9e3ttYXJnaW46ICdhdXRvJywgZm9udFdlaWdodDogJ2JvbGQnfX0+e3Byb3BzLnJsfTwvZGl2PjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGxcclxuKShSZWZlcmVuY2VMaW5rKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBTS0lMTF9TRUFSQ0ggfSBmcm9tICcuLi8uLi9zcmMvc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xyXG5cclxuY29uc3QgU2tpbGxTdWdnID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBzcGxpdFF1ZXJ5ID0gcHJvcHMucXVlcnkudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpXHJcbiAgICBjb25zdCBsYXN0V29yZCA9IHNwbGl0UXVlcnkuc2xpY2UoLTEpID09PSAnJyA/IHNwbGl0UXVlcnkuc2xpY2UoLTIsIC0xKVswXSA6IHNwbGl0UXVlcnkuc2xpY2UoLTEpWzBdXHJcbiAgICBjb25zdCBbc2tpbGxzLCBzZXRTa2lsbHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBza2lsbFNlYXJjaFF1ZXJ5ID0gdXNlUXVlcnkoU0tJTExfU0VBUkNILCB7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7ZmlsdGVyOiBsYXN0V29yZH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBza2lsbENvbmRpdGlvbnMgPSAocXVlcnksIHJlZHVjZXIpID0+IHtcclxuICAgICAgICBpZiAoIXF1ZXJ5KSByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmICghcXVlcnkuc2tpbGxTZWFyY2gpIHJldHVybiBudWxsXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5LnNraWxsU2VhcmNoXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzTGlzdCA9IHNraWxsQ29uZGl0aW9ucyhza2lsbFNlYXJjaFF1ZXJ5LmRhdGEsIHNraWxscylcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNraWxsc0xpc3QpIHtcclxuICAgICAgICAgICAgc2V0U2tpbGxzKHNraWxsc0xpc3QpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NraWxsc0xpc3QsIHNraWxsc10pXHJcblxyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnNUb1Nob3cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNraWxscykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgc2tpbGxzLm1hcChzID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMub25TdWdnZXN0aW9uQ2xpY2tlZChzLm5hbWUpfSBjbGFzc05hbWU9XCJzZWFyY2gtc3VnZ2VzdGlvblwiIGtleT17YFNTJHtzLm5hbWV9YH0+e3MubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc1dmgnfX0vPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zU3R5bGUgPSBza2lsbHMubGVuZ3RoICE9PSAwICYmIHByb3BzLnF1ZXJ5ICE9PSAnJyAmJiBsYXN0V29yZCAhPT0gJycgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtc3VnZ2VzdGlvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXN1Z2dlc3Rpb25zXCIgc3R5bGU9e3N1Z2dlc3Rpb25zU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zVG9TaG93KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoU2tpbGxTdWdnKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IENSRUFURV9VU0VSIH0gZnJvbSAnLi4vLi4vLi4vc3JjL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgSW5wdXRIZWFkZXIgZnJvbSAnLi4vLi4vdGV4dC1maWVsZC9JbnB1dEhlYWRlcidcclxuaW1wb3J0IHsgdXNlRmllbGQsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBzZXRBbGVydCwgcmVzZXRBbGVydCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCBVUiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXNlci91c2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBSZWdpc3RlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VGaWVsZCgndGV4dCcpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZUZpZWxkKCdwYXNzd29yZCcpXHJcbiAgICBjb25zdCByZVBhc3N3b3JkID0gdXNlRmllbGQoJ3Bhc3N3b3JkJylcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlRmllbGQoJ2VtYWlsJylcclxuICAgIGNvbnN0IHJlZmVyZW5jZUxpbmsgPSB1c2VGaWVsZCgndXJsJylcclxuXHJcbiAgICBjb25zdCBvbkVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW5lZE1lc3NhZ2UgPSBlLm1lc3NhZ2VcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpXHJcbiAgICAgICAgaWYgKGNsZWFuZWRNZXNzYWdlLmluY2x1ZGVzKCd1c2VybmFtZScpKSBjbGVhbmVkTWVzc2FnZSA9IGB1c2VybmFtZSQ6ICR7dXNlcm5hbWUuZmllbGRzLnZhbHVlfSBpcyBhbHJlYWR5IGJlaW5nIHVzZWRgXHJcbiAgICAgICAgaWYgKGNsZWFuZWRNZXNzYWdlLmluY2x1ZGVzKCdyZWZlcmVuY2VMaW5rJykpIGNsZWFuZWRNZXNzYWdlID0gYHJlZmVyZW5jZSBsaW5rJDogJHtyZWZlcmVuY2VMaW5rLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIGlmIChjbGVhbmVkTWVzc2FnZS5pbmNsdWRlcygnZW1haWwnKSkgY2xlYW5lZE1lc3NhZ2UgPSBgZW1haWwkOiAke2VtYWlsLmZpZWxkcy52YWx1ZX0gaXMgYWxyZWFkeSBiZWluZyB1c2VkYFxyXG4gICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGNsZWFuZWRNZXNzYWdlLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcmVnaXN0ZXJNdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihDUkVBVEVfVVNFUiwgeyBvbkVycm9yIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1bWJpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmZpZWxkcy52YWx1ZSAhPT0gcmVQYXNzd29yZC5maWVsZHMudmFsdWUpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ3Bhc3N3b3JkJDogcGFzc3dvcmQgYW5kIHJlLXBhc3N3b3JkIGRpZCBub3QgbWF0Y2gnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF1c2VybmFtZS5maWVsZHMudmFsdWUubGVuZ3RoIHx8ICFwYXNzd29yZC5maWVsZHMudmFsdWUubGVuZ3RoIHx8ICFyZVBhc3N3b3JkLmZpZWxkcy52YWx1ZS5sZW5ndGggfHwgIXJlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnYWxsJDogYWxsIGZpZWxkcyBtdXN0IGJlIGZpbGxlZCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWdpc3Rlck11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLmZpZWxkcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUxpbms6IHJlZmVyZW5jZUxpbmsuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jaGFuZ2VNZW51SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlTWVudUl0ZW0obnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1c2VybmFtZS5yZXNldCgpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLnJlc2V0KClcclxuICAgICAgICAgICAgcmVQYXNzd29yZC5yZXNldCgpXHJcbiAgICAgICAgICAgIGVtYWlsLnJlc2V0KClcclxuICAgICAgICAgICAgcmVmZXJlbmNlTGluay5yZXNldCgpXHJcbiAgICAgICAgICAgIHRyaWdnZXJBbGVydCgnc3VjY2VzcycsICdyZWdpc3RlcmVkJDogYWNjb3VudCBzdWNjZXNzZnVsbHkgY3JlYXRlZCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXJlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJnU3R5bGUgPSBwcm9wcy5ub0JHID8ge2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfSA6IG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyRm9ybUNvbnRhaW5lcn0gc3R5bGU9e2JnU3R5bGV9PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1VSLnVzZXJGb3JtfSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1bWJpdChlKX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS11c2VybmFtZVwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInVzZXJuYW1lXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi51c2VybmFtZS5maWVsZHN9IGlkPVwiU0ktdXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJwYXNzd29yZFwiIGNvbG9yPVwiZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucGFzc3dvcmQuZmllbGRzfSBpZD1cIlNJLXBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXJlUGFzc3dvcmRcIiBpbmZvPXtmYWxzZX0gdGl0bGU9XCJyZS10eXBlIHBhc3N3b3JkXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5yZVBhc3N3b3JkLmZpZWxkc30gaWQ9XCJTSS1yZVBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1lbWFpbFwiIGluZm89e3RydWV9IHRpdGxlPVwiZW1haWxcIiBjb2xvcj1cImRhcmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51bnRpbGwgZnVydGhlciBwb2xpY3kgY2hhbmdlcyBubyBlbWFpbHMgYXJlIHNlbnQgeW91ciB3YXk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+b25seSBzaG93biB0byB1c2VycyB3aG8geW91IGFjY2VwdCBhZnRlciBjb250YWN0aW5nIHlvdSBkaXJlY3RseSAobm90IHRocm91Z2ggcG9zdCk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLmVtYWlsLmZpZWxkc30gaWQ9XCJTSS1lbWFpbFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPElucHV0SGVhZGVyIGlucHV0Rm9yPVwiU0ktcmVmZXJlbmNlTGlua1wiIGluZm89e3RydWV9IHRpdGxlPVwicmVzdW1lIGxpbmtcIiBjb2xvcj1cImRhcmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW46IDAsIG1hcmdpbkJvdHRvbTogJzVweCd9fT5saW5rIG9uIHlvdXIgdXNlciBwYWdlIHVzZWQgYXMgYSByZXN1bWUgdG8gZGVtb25zdHJhdGUgeW91ciBhYmlsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luOiAwLCBtYXJnaW5Cb3R0b206ICc1cHgnfX0+PHN0cm9uZz5hbHdheXMgdmlldyBhbm90aGVyIHVzZXJzIHBvcnRhZm9saW8gbGluayBiZWZvcmUgd29ya2luZyB3aXRoIHRoZW08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5zaXRlcyByZWNvbW1lbmRlZDogPHN0cm9uZz5MaW5rZWRJbjwvc3Ryb25nPiwgPHN0cm9uZz5JbmRlZWQ8L3N0cm9uZz4sIDxzdHJvbmc+R2l0SHViPC9zdHJvbmc+LCBvciA8c3Ryb25nPkZhY2Vib29rPC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnRvIGZ1cnRoZXIgZW5zdXJlIHlvdXIgcG9ydGFmb2xpbyBsaW5rIGlzIHRydXN0d29ydGh5LCBsaW5rIHlvdXIgVW5pbG91cyBhY2NvdXQgZnJvbSB5b3VyIHBvcnRhZm9saW8gbGluazwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtVUi5VRklucHV0fSB7Li4ucmVmZXJlbmNlTGluay5maWVsZHN9IGlkPVwiU0ktcmVmZXJlbmNlTGlua1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17VVIuVUZTdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj48aDM+cmVnaXN0ZXI8L2gzPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbi8vXHRyZXR1cm4ge1xyXG4gICAgICAgIFxyXG4vL1x0fVxyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGwsXHJcbiAgICB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH1cclxuKShSZWdpc3RlcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBMT0dJTiB9IGZyb20gJy4uLy4uLy4uL3NyYy9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgdXNlRmllbGQsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgSW5wdXRIZWFkZXIgZnJvbSAnLi4vLi4vdGV4dC1maWVsZC9JbnB1dEhlYWRlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZUZpZWxkKCd0ZXh0JylcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gdXNlRmllbGQoJ3Bhc3N3b3JkJylcclxuXHJcbiAgICBjb25zdCBvbkVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW5lZE1lc3NhZ2UgPSBlLm1lc3NhZ2VcclxuICAgICAgICBjb25zb2xlLmxvZyhjbGVhbmVkTWVzc2FnZSlcclxuICAgICAgICBjbGVhbmVkTWVzc2FnZSA9IGNsZWFuZWRNZXNzYWdlLnNwbGl0KCc6JylcclxuICAgICAgICBjbGVhbmVkTWVzc2FnZSA9IGNsZWFuZWRNZXNzYWdlLnNsaWNlKDEsIGNsZWFuZWRNZXNzYWdlLmxlbmd0aCkuam9pbignJDonKVxyXG4gICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGNsZWFuZWRNZXNzYWdlLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIH1cclxuICAgIGNvbnN0IFtzaWduSW5NdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihMT0dJTiwgeyBvbkVycm9yIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1bWJpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQuZmllbGRzLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmNoYW5nZU1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VNZW51SXRlbShudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzdWx0LmRhdGEubG9naW4udmFsdWVcclxuICAgICAgICAgICAgdXNlcm5hbWUucmVzZXQoKVxyXG4gICAgICAgICAgICBwYXNzd29yZC5yZXNldCgpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB1c2VybmFtZS5maWVsZHMudmFsdWUpXHJcbiAgICAgICAgICAgIHByb3BzLnNldFRva2VuKHRva2VuKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmdTdHlsZSA9IHByb3BzLm5vQkcgPyB7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9IDogbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJGb3JtQ29udGFpbmVyfSBzdHlsZT17YmdTdHlsZX0+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17VVIudXNlckZvcm19IG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VtYml0KGUpfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXVzZXJuYW1lXCIgaW5mbz17ZmFsc2V9IHRpdGxlPVwidXNlcm5hbWVcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnVzZXJuYW1lLmZpZWxkc30gaWQ9XCJTSS11c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1wYXNzd29yZFwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInBhc3N3b3JkXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5wYXNzd29yZC5maWVsZHN9IGlkPVwiU0ktcGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1VSLlVGU3VibWl0fSB0eXBlPVwic3VibWl0XCI+PGgzPnNpZ24gaW48L2gzPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vLyBcdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsLFxyXG4gICAgeyBzZXRUb2tlbiwgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfVxyXG4pKFNpZ25JbikiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgRklORF9VU0VSIH0gZnJvbSAnLi4vLi4vLi4vc3JjL3NjaGVtYXMvcXVlcmllcydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHsgY2xlYXJUb2tlbiB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgVXNlck5vdGlmTGlzdCBmcm9tICcuLi91dGlsaXRpZXMvVXNlck5vdGlmTGlzdCdcclxuaW1wb3J0IFVzZXJTUCBmcm9tICcuLi91dGlsaXRpZXMvVXNlclNQJ1xyXG5pbXBvcnQgVVUgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlclV0aWxpdGllcy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IExvZ2dlZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dVdGlsaXRpZXMsIHNldFNob3dVdGlsaXRpZXNdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFt1dGlsaXR5U2hvd24sIHNldFV0aWxpdHlTaG93bl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VXNlclVOID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSA6ICdmYWtlVXNlcidcclxuICAgIGNvbnN0IHVzZXJRdWVyeSA9IHVzZVF1ZXJ5KEZJTkRfVVNFUiwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge3VzZXJuYW1lOiBjdXJyZW50VXNlclVOfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHVzZXJRdWVyeUNvbmRpdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB1c2VyUXVlcnkuZGF0YVxyXG4gICAgICAgIGNvbnN0IHJlZHVjZXIgPSBwcm9wcy5jdXJyZW50VXNlclxyXG4gICAgICAgIGlmICghcXVlcnkpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIGlmICghcXVlcnkuZmluZFVzZXIpIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgICAgIGlmIChyZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeS5maW5kVXNlci51c2VybmFtZSA9PT0gcmVkdWNlci51c2VybmFtZSkgeyByZXR1cm4gbnVsbCB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBxdWVyeS5maW5kVXNlclxyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlclJlc3VsdCA9IHVzZXJRdWVyeUNvbmRpdGlvbnMoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJSZXN1bHQpIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXIodXNlclJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMsIHByb3BzLmN1cnJlbnRVc2VyLCB1c2VyUmVzdWx0XSlcclxuXHJcbiAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1VSLnVzZXJDb250YWluZXJ9ICR7VVIuTEdEVXNlckNvbnRhaW5lcn1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyT3B0aW9uc1NwbGl0dGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIudXNlckljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCIvc3ZnL3VzZXJXLnN2Z1wiIGNsYXNzTmFtZT1cInVzZXItaWNvblwiIGFsdD1cInVzZXJcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJCYW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICAgICAgcHJvcHMuY2xlYXJUb2tlbigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVXRpbGl0eVNob3duID0gKGNoYW5nZVRvKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYW5nZVRvID09PSB1dGlsaXR5U2hvd24pIHtcclxuICAgICAgICAgICAgc2V0VXRpbGl0eVNob3duKG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRVdGlsaXR5U2hvd24oY2hhbmdlVG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNob3dVdGlsaXRpZXModHJ1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVNob3dVdGlsaXRpZXMgPSAoY2hhbmdlVG8pID0+IHtcclxuICAgICAgICBpZiAoIWNoYW5nZVRvKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dVdGlsaXRpZXMoY2hhbmdlVG8pXHJcbiAgICAgICAgICAgIHNldFV0aWxpdHlTaG93bihudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2hvd1V0aWxpdGllcyhjaGFuZ2VUbylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VybmFtZUljb24gPSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKVxyXG5cclxuICAgIGNvbnN0IGljb25Ub1Nob3cgPSBzaG93VXRpbGl0aWVzID9cclxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7VVIudXNlckljb25Db250YWluZXJ9ICR7VVIuVUlDSH0gbmV1dHJhbGl6ZS1saW5rYH0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtVUi51c2VyVXNlcm5hbWVJY29ufSAke1VSLnVzZXJJY29uSG92ZXJ9YH0+e3VzZXJuYW1lSWNvbn08L2gxPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQocHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1c2VyLWljb24tY29udGFpbmVyIFVJQ0hcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyVy5zdmdcIiBjbGFzc05hbWU9e2Ake1VSLnVzZXJJY29ufSAke1VSLnVzZXJJY29uSG92ZXJ9YH0gYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgY29uc3QgYmFzaWNTdHlsZXMgPSB7dXNlcjoge2NsYXNzTmFtZTogJycsIGljb246IFwiL3N2Zy91c2VyU0Iuc3ZnXCJ9LCBub3RpZmljYXRpb25zOiB7Y2xhc3NOYW1lOiAnJywgaWNvbjogXCIvc3ZnL2JlbGxCLnN2Z1wifSwgZm9sbG93aW5nOiB7Y2xhc3NOYW1lOiAnJywgaWNvbjogXCIvc3ZnL2hlYXJ0Qi5zdmdcIn19XHJcbiAgICBpZiAodXRpbGl0eVNob3duID09PSAndXNlcicpIHsgYmFzaWNTdHlsZXMudXNlciA9IHtjbGFzc05hbWU6IFVSLlVVT1NlbGVjdGVkLCBpY29uOiBcIi9zdmcvdXNlclcuc3ZnXCJ9fVxyXG4gICAgaWYgKHV0aWxpdHlTaG93biA9PT0gJ25vdGlmaWNhdGlvbnMnKSB7IGJhc2ljU3R5bGVzLm5vdGlmaWNhdGlvbnMgPSB7Y2xhc3NOYW1lOiBVUi5VVU9TZWxlY3RlZCwgaWNvbjogXCIvc3ZnL2JlbGxXLnN2Z1wifX1cclxuICAgIGlmICh1dGlsaXR5U2hvd24gPT09ICdmb2xsb3dpbmcnKSB7IGJhc2ljU3R5bGVzLmZvbGxvd2luZyA9IHtjbGFzc05hbWU6IFVSLlVVT1NlbGVjdGVkLCBpY29uOiBcIi9zdmcvaGVhcnRXLnN2Z1wifX1cclxuICAgIFxyXG4gICAgY29uc3QgcGVuZGluZ05vdGlmU3RhdHMgPSBwcm9wcy5jdXJyZW50VXNlciAmJiBwcm9wcy5jdXJyZW50VXNlci5wZW5kaW5nTm90aWZpY2F0aW9ucyA+IDAgP1xyXG4gICAgICAgIFtVUi5QTkJ1YmJsZSwgcHJvcHMuY3VycmVudFVzZXIucGVuZGluZ05vdGlmaWNhdGlvbnNdIDogW251bGwsIG51bGxdXHJcblxyXG4gICAgY29uc3Qgc2hvd0luQmFubmVyID0gc2hvd1V0aWxpdGllcyA/XHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3Rmb3JtcGFnZVwiID5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7VVIuVVVBZGRQb3N0fSAke1VSLnVzZXJVdGlsaXR5T3B0aW9ufSBuZXV0cmFsaXplLWxpbmtgfSBzdHlsZT17e2dyaWRDb2x1bW46ICcxLzMnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3BsdXNCLnN2Z1wiIGNsYXNzTmFtZT17VVIuVVVBUEljb259IGFsdD1cImFkZCBwb3N0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1VSLlVVQVBUZXh0fT5hZGQgcG9zdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7cHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWV9YH0gPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtVUi51c2VyVXRpbGl0eU9wdGlvbn0gJHtiYXNpY1N0eWxlcy51c2VyLmNsYXNzTmFtZX1gfT48aW1nIHNyYz17YmFzaWNTdHlsZXMudXNlci5pY29ufSBjbGFzc05hbWU9e1VSLlVVSWNvbn0gYWx0PVwidXNlclwiIC8+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eVNob3duKCdub3RpZmljYXRpb25zJyl9IGNsYXNzTmFtZT17YCR7VVIudXNlclV0aWxpdHlPcHRpb259ICR7VVIuUE5Db250YWluZXJ9ICR7YmFzaWNTdHlsZXMubm90aWZpY2F0aW9ucy5jbGFzc05hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmFzaWNTdHlsZXMubm90aWZpY2F0aW9ucy5pY29ufSBjbGFzc05hbWU9e1VSLlVVSWNvbn0gYWx0PVwibm90aWZpY2F0aW9uc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGVuZGluZ05vdGlmU3RhdHNbMF19PntwZW5kaW5nTm90aWZTdGF0c1sxXX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlVXRpbGl0eVNob3duKCdmb2xsb3dpbmcnKX0gY2xhc3NOYW1lPXtgJHtVUi51c2VyVXRpbGl0eU9wdGlvbn0gJHtiYXNpY1N0eWxlcy5mb2xsb3dpbmcuY2xhc3NOYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jhc2ljU3R5bGVzLmZvbGxvd2luZy5pY29ufSBjbGFzc05hbWU9e1VSLlVVSWNvbn0gYWx0PVwiZm9sbG93XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9IGNsYXNzTmFtZT17YCR7VVIudXNlclV0aWxpdHlPcHRpb259ICR7VVIuVVVMb2dvdXR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvZXhpdEIuc3ZnXCIgY2xhc3NOYW1lPXtVUi5VVUxvZ291dEljb259IGFsdD1cImxvZyBvdXRcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZVNob3dVdGlsaXRpZXMoIXNob3dVdGlsaXRpZXMpfSBjbGFzc05hbWU9e2Ake1VSLnVzZXJVc2VybmFtZUNvbnRhaW5lcn0gJHtVUi5TVUh9YH0+PGgyIGNsYXNzTmFtZT1cInVzZXItdXNlcm5hbWVcIj57cHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWV9PC9oMj48L2Rpdj5cclxuXHJcbiAgICBjb25zdCBzaG93QnViYmxlID0gc2hvd1V0aWxpdGllcyA/XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZVV0aWxpdHlTaG93bignbm90aWZpY2F0aW9ucycpfSBjbGFzc05hbWU9e1VSLnVzZXJOb3RpZmljYXRpb25CdWJibGV9PjQ8L2Rpdj5cclxuXHJcblxyXG4gICAgY29uc3Qgc2hvd1V0aWxpdHlDb250ZW50ID0gdXRpbGl0eVNob3duID8gXHJcbiAgICAgICAge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuXHJcbiAgICBjb25zdCB1dGlsaXR5Q29udGVudCA9ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAodXRpbGl0eVNob3duID09PSAndXNlcicpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIDxkaXY+PFVzZXJJbmZvIC8+PC9kaXY+XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh1dGlsaXR5U2hvd24gPT09ICdub3RpZmljYXRpb25zJykge1xyXG4gICAgICAgICAgICByZXR1cm4gPFVzZXJOb3RpZkxpc3QgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHV0aWxpdHlTaG93biA9PT0gJ2ZvbGxvd2luZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxVc2VyU1AgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7VVIudXNlckNvbnRhaW5lcn0gJHtVUi5MR0RVc2VyQ29udGFpbmVyfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVIudXNlck9wdGlvbnNTcGxpdHRlcn0+XHJcbiAgICAgICAgICAgICAgICB7aWNvblRvU2hvd31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyQmFubmVyfT5cclxuICAgICAgICAgICAgICAgIHtzaG93SW5CYW5uZXJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0J1YmJsZX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLlVVVXRpbGl0aWVzU3BsaXR0ZXJ9IHN0eWxlPXtzaG93VXRpbGl0eUNvbnRlbnR9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLlVVQ29udGVudENvbnRhaW5lcn0gc3R5bGU9e3Nob3dVdGlsaXR5Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3V0aWxpdHlTaG93bn08L2gzPlxyXG4gICAgICAgICAgICAgICAge3V0aWxpdHlDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGVhclRva2VuOiBiaW5kQWN0aW9uQ3JlYXRvcnMoY2xlYXJUb2tlbiwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Q3VycmVudFVzZXIsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExvZ2dlZCkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG4vLyBpbXBvcnQgdXNlckljb24gZnJvbSAnLi4vLi4vLi4vc3RhdGljL3N2Zy91c2VyVy5zdmcnXHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi4vZm9ybS9TaWduSW4nXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9mb3JtL1JlZ2lzdGVyJ1xyXG5cclxuXHJcbmNvbnN0IE5vdExvZ2dlZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJPcHRpb24sIHNldFVzZXJPcHRpb25dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICBjb25zdCBvcHRpb25TdHlsZSA9IHVzZXJPcHRpb24gPyBcclxuICAgICAgICB1c2VyT3B0aW9uID09PSAnc2lnbiBpbicgP1xyXG4gICAgICAgICAgICB7c2lnbkluOiB7YmFja2dyb3VuZENvbG9yOiAnIzQ4NDg0OCcsIGNvbG9yOiAnd2hpdGUnfSwgcmVnaXN0ZXI6IG51bGx9XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAge3NpZ25JbjogbnVsbCwgcmVnaXN0ZXI6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjNDg0ODQ4JywgY29sb3I6ICd3aGl0ZSd9fVxyXG4gICAgICAgIDoge3NpZ25JbjogbnVsbCwgcmVnaXN0ZXI6IG51bGx9XHJcblxyXG4gICAgY29uc3QgZm9ybVRvU2hvdyA9IHVzZXJPcHRpb24gPyBcclxuICAgICAgICB1c2VyT3B0aW9uID09PSAnc2lnbiBpbicgP1xyXG4gICAgICAgICAgICA8U2lnbkluIC8+IDogPFJlZ2lzdGVyIC8+XHJcbiAgICAgICAgOiBudWxsXHJcblxyXG4gICAgY29uc3QgY2hhbmdlT3B0aW9uID0gKGNoYW5nZVRvKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJPcHRpb24gPT09IGNoYW5nZVRvKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJPcHRpb24obnVsbClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRVc2VyT3B0aW9uKGNoYW5nZVRvKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1VSLnVzZXJDb250YWluZXJ9ICR7VVIuTkxVc2VyQ29udGFpbmVyfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU9wdGlvbignc2lnbiBpbicpfSBjbGFzc05hbWU9e1VSLnVzZXJPcHRpb25Db250YWluZXJ9IHN0eWxlPXtvcHRpb25TdHlsZS5zaWduSW59PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17VVIudXNlck9wdGlvbnN9IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAnMTBweCd9fT5zaWduIGluPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VyT3B0aW9uc1NwbGl0dGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUi51c2VySWNvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJXLnN2Z1wiIGNsYXNzTmFtZT17VVIudXNlckljb259IGFsdD1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZU9wdGlvbigncmVnaXN0ZXInKX0gY2xhc3NOYW1lPXtVUi51c2VyT3B0aW9uQ29udGFpbmVyfSBzdHlsZT17b3B0aW9uU3R5bGUucmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17VVIudXNlck9wdGlvbnN9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6ICcxMHB4J319PnJlZ2lzdGVyPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmb3JtVG9TaG93fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vL1x0cmV0dXJuIHtcclxuICAgICAgICBcclxuLy9cdH1cclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsXHJcbikoTm90TG9nZ2VkKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQb3N0U21hbGwgZnJvbSAnLi4vLi4vcG9zdC9Qb3N0U21hbGwnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgQUNDRVBUX05PVElGSUNBVElPTiwgREVDTElORV9OT1RJRklDQVRJT04sIEFOU1dFUl9RVUVTVElPTiB9IGZyb20gJy4uLy4uLy4uL3NyYy9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IHsgdXNlRmllbGQsIHdlYnNpdGVTdGF0cywgdHJpZ2dlckFsZXJ0IH0gZnJvbSAnLi4vLi4vLi4vc3JjL2Z1bmN0aW9ucy9mdW5jdGlvbnMnXHJcblxyXG5jb25zdCBOb3RpZiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2FjY2VwdE5vdGlmXSA9IHVzZU11dGF0aW9uKEFDQ0VQVF9OT1RJRklDQVRJT04sIHtcclxuICAgICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtkZWNsaW5lTm90aWZdID0gdXNlTXV0YXRpb24oREVDTElORV9OT1RJRklDQVRJT04sIHtcclxuICAgICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgfSlcclxuICAgIGNvbnN0IFthbnN3ZXJRdWVzdGlvbl0gPSB1c2VNdXRhdGlvbihBTlNXRVJfUVVFU1RJT04sIHtcclxuICAgICAgICBvbkVycm9yOiBoYW5kbGVFcnJvclxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBhbnN3ZXIgPSB1c2VGaWVsZCgndGV4dCcpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQW5zd2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFuc3dlclF1ZXN0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25JZDogcHJvcHMubm90aWYuX2lkLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGFuc3dlci5maWVsZHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb25zID0gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCA9PT0gcHJvcHMubm90aWYuX2lkID8gcmVzdWx0LmRhdGEuYW5zd2VyUXVlc3Rpb24gOiBuKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobmV3Tm90aWZpY2F0aW9ucylcclxuICAgICAgICAgICAgYW5zd2VyLnJlc2V0KClcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgYHJlcGxpZWQkOiB5b3UgaGF2ZSByZXBsaWVkIHRvICR7cHJvcHMubm90aWYudXNlckZyb20udXNlcm5hbWV9J3MgcXVlc3Rpb25gLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFjY2VwdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBhY2NlcHQgPSBhd2FpdCBhY2NlcHROb3RpZih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbklkOiBwcm9wcy5ub3RpZi5faWR9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoYWNjZXB0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkID09PSBwcm9wcy5ub3RpZi5faWQgPyBhY2NlcHQuZGF0YS5hY2NlcHROb3RpZmljYXRpb24gOiBuKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobmV3Tm90aWZpY2F0aW9ucylcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgYGFjY2VwdGVkJDogeW91IGhhdmUgYWNjZXB0ZWQgJHtwcm9wcy5ub3RpZi51c2VyRnJvbS51c2VybmFtZX0gdG8geW91ciB0ZWFtYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVjbGluZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBkZWNsaW5lID0gYXdhaXQgZGVjbGluZU5vdGlmKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uSWQ6IHByb3BzLm5vdGlmLl9pZH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoZGVjbGluZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOb3RpZmljYXRpb25zID0gcHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9ucy5tYXAobiA9PiBuLl9pZCA9PT0gcHJvcHMubm90aWYuX2lkID8gZGVjbGluZS5kYXRhLmRlY2xpbmVOb3RpZmljYXRpb24gOiBuKVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMobmV3Tm90aWZpY2F0aW9ucylcclxuICAgICAgICAgICAgdHJpZ2dlckFsZXJ0KCdkYW5nZXInLCBgZGVjbGluZWQkOiB5b3UgaGF2ZSBkZWNsaW5lZCAke3Byb3BzLm5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfSdzIHJlcXVlc3QgdG8gam9pbmAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgbm90aWYgPSBwcm9wcy5ub3RpZlxyXG4gICAgY29uc3Qgbm90aWZTdGF0dXNDb2xvciA9IG5vdGlmLmFjY2VwdGVkID09PSBudWxsID8gXHJcbiAgICAgICAgJ3JnYigyMjYsMTg0LDU5KScgOlxyXG4gICAgICAgIG5vdGlmLmFjY2VwdGVkID9cclxuICAgICAgICAgICAgbm90aWYucG9zdCA/XHJcbiAgICAgICAgICAgICAgICAncmdiKDUyLDE2Niw5NSknIDogJyM4YjhiOGInIFxyXG4gICAgICAgICAgICA6ICdyZ2IoMjU0LDUyLDc3KSdcclxuICAgIGlmIChub3RpZi51c2VyRnJvbS51c2VybmFtZSA9PT0gcHJvcHMuY3VycmVudFVzZXIudXNlcm5hbWUpe1xyXG4gICAgICAgIGlmIChub3RpZi5hY2NlcHRlZCkge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PmFuc3dlcmVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5hbnN3ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm90aWYucG9zdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgR0NMaW5rU3RhdHMgPSB3ZWJzaXRlU3RhdHMobm90aWYucG9zdC5jb250YWN0TGluaylcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuZWRMaW5rID0gbm90aWYucG9zdC5jb250YWN0TGluay5zcGxpdCgnLycpWzJdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5ncm91cC9jb250YWN0IGxpbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bm90aWYucG9zdC5jb250YWN0TGlua30gY2xhc3NOYW1lPVwibi1qb2luLWxpbmsgbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBHQ0xpbmtTdGF0cy5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtHQ0xpbmtTdGF0cy5pY29ufSBjbGFzc05hbWU9XCJuLUpMLWljb25cIiBhbHQ9e0dDTGlua1N0YXRzLnRpdGxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjbGVhbmVkTGlua308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+c2VudCBtZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJUby51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+bWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3RpZi5hY2NlcHRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihub3RpZi5xdWVzdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj50bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+cXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5zZW50IGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+dG86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyVG8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKG5vdGlmLmFjY2VwdGVkKSB7XHJcbiAgICAgICAgICAgIGlmKG5vdGlmLnF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIHF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL1t1c2VybmFtZV1cIiBhcz17YC91c2VyLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5vdGlmLnVzZXJUby51c2VybmFtZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPmZyb206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL3VzZXJCLnN2Z1wiIGNsYXNzTmFtZT1cIk5VLWljb25cIiBhbHQ9J3VzZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS11c2VybmFtZVwiPntub3RpZi51c2VyRnJvbS51c2VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFNtYWxsIHBvc3Q9e25vdGlmLnBvc3R9IHVzZXI9e25vdGlmLnVzZXJUby51c2VybmFtZX0gc3R5bGU9e3ttYXJnaW46IDAsIHBhZGRpbmc6IDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PmFuc3dlcmVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5hbnN3ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm90aWYucG9zdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgR0NMaW5rU3RhdHMgPSB3ZWJzaXRlU3RhdHMobm90aWYucG9zdC5jb250YWN0TGluaylcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuZWRMaW5rID0gbm90aWYucG9zdC5jb250YWN0TGluay5zcGxpdCgnLycpWzJdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbFRvSm9pbiA9IG5vdGlmLnBvc3Quc2tpbGxOYW1lc1tub3RpZi5wcm9wb3NlZENvbnRyaWJ1dGlvbi5pbmRleE9mKDEpXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b206IGA1cHggc29saWQgJHtub3RpZlN0YXR1c0NvbG9yfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG5vdGlmU3RhdHVzQ29sb3J9fT5yZWNpZXZlZCBqb2luIHJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi10aXRsZVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+c2VudCBncm91cC9jb250YWN0IGxpbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bm90aWYucG9zdC5jb250YWN0TGlua30gY2xhc3NOYW1lPVwibi1qb2luLWxpbmsgbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBHQ0xpbmtTdGF0cy5jb2xvcn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtHQ0xpbmtTdGF0cy5pY29ufSBjbGFzc05hbWU9XCJuLUpMLWljb25cIiBhbHQ9e0dDTGlua1N0YXRzLnRpdGxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjbGVhbmVkTGlua308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgbWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pm1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm90aWYuYWNjZXB0ZWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PnF1ZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtcmVwbHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCI+cmVwbHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm4tbm90aWYtcmVwbHktZmllbGRcIiB7Li4uYW5zd2VyLmZpZWxkc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcigpfSBjbGFzc05hbWU9XCJuLUFvRC1vcHRpb24gbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiKDUyLDE2Niw5NSknfX0+YW5zd2VyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudChub3RpZi51c2VyVG8udXNlcm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibi1ub3RpZi11c2VyIG5ldXRyYWxpemUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtbGFiZWxcIj5mcm9tOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlckZyb20udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTbWFsbCBwb3N0PXtub3RpZi5wb3N0fSB1c2VyPXtub3RpZi51c2VyVG8udXNlcm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1TVEotY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKXCI+c2tpbGwgdG8gam9pbjogPHN0cm9uZz57c2tpbGxUb0pvaW59PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtY29udGVudC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5tZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm4tbm90aWYtbWVzc2FnZVwiPntub3RpZi5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5hY2NlcHQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtQW9EXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gaGFuZGxlRGVjbGluZSgpfSBjbGFzc05hbWU9XCJuLUFvRC1vcHRpb24gbi1TSFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiKDI1NCw1Miw3NyknfX0+ZGVjbGluZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgb25DbGljaz17KCkgPT4gaGFuZGxlQWNjZXB0KCl9IGNsYXNzTmFtZT1cIm4tQW9ELW9wdGlvbiBuLVNIXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTIsMTY2LDk1KSd9fT5hY2NlcHQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYobm90aWYucXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBgNXB4IHNvbGlkICR7bm90aWZTdGF0dXNDb2xvcn1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBub3RpZlN0YXR1c0NvbG9yfX0+cmVjaWV2ZWQgcXVlc3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvW3VzZXJuYW1lXVwiIGFzPXtgL3VzZXIvJHtlbmNvZGVVUklDb21wb25lbnQobm90aWYudXNlclRvLnVzZXJuYW1lKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm4tbm90aWYtdXNlciBuZXV0cmFsaXplLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLWxhYmVsXCI+ZnJvbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgY2xhc3NOYW1lPVwiTlUtaWNvblwiIGFsdD0ndXNlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5VLXVzZXJuYW1lXCI+e25vdGlmLnVzZXJGcm9tLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250ZW50LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuLW5vdGlmLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5xdWVzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuLW5vdGlmLW1lc3NhZ2VcIj57bm90aWYucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsVG9Kb2luID0gbm90aWYucG9zdC5za2lsbE5hbWVzW25vdGlmLnByb3Bvc2VkQ29udHJpYnV0aW9uLmluZGV4T2YoMSldXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibi1ub3RpZi1jb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke25vdGlmU3RhdHVzQ29sb3J9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibi1ub3RpZi1oZWFkZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbm90aWZTdGF0dXNDb2xvcn19PnJlY2lldmVkIGpvaW4gcmVxdWVzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9bdXNlcm5hbWVdXCIgYXM9e2AvdXNlci8ke25vdGlmLnVzZXJUby51c2VybmFtZX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuLW5vdGlmLXVzZXIgbmV1dHJhbGl6ZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOVS1sYWJlbFwiPnRvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N2Zy91c2VyQi5zdmdcIiBjbGFzc05hbWU9XCJOVS1pY29uXCIgYWx0PSd1c2VyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTlUtdXNlcm5hbWVcIj57bm90aWYudXNlclRvLnVzZXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0U21hbGwgcG9zdD17bm90aWYucG9zdH0gdXNlcj17bm90aWYudXNlclRvLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm4tbm90aWYtU1RKLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLVNUSlwiPnNraWxsIHRvIGpvaW46IDxzdHJvbmc+e3NraWxsVG9Kb2lufTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuLW5vdGlmLWNvbnRlbnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm4tbm90aWYtdGl0bGVcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319Pm1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibi1ub3RpZi1tZXNzYWdlXCI+e25vdGlmLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIHsgc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zLCBzZXRBbGVydCwgcmVzZXRBbGVydCB9XHJcbikoTm90aWYpXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBMSVNUX09GX05PVElGSUNBVElPTlMgfSBmcm9tICcuLi8uLi8uLi9zcmMvc2NoZW1hcy9xdWVyaWVzJ1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgfSBmcm9tJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgTm90aWYgZnJvbSAnLi9Ob3RpZidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vTG9hZGluZydcclxuaW1wb3J0IGFwb2xsbywge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vLi4vLi4vbGliL2Fwb2xsbydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgVVUgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlclV0aWxpdGllcy5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcblxyXG5jb25zdCBVc2VyTm90aWZMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3RRdWVyeSA9IHVzZVF1ZXJ5KExJU1RfT0ZfTk9USUZJQ0FUSU9OUywge1xyXG4gICAgLy8gICAgIHZhcmlhYmxlczoge25vdGlmaWNhdGlvbnM6IHByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubWFwKG4gPT4gbi5faWQpfVxyXG4gICAgLy8gfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKG5vdGlmc0xpc3RRdWVyeSlcclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3RRdWVyeSA9IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICAvLyAgICAgcXVlcnk6IExJU1RfT0ZfTk9USUZJQ0FUSU9OUyxcclxuICAgIC8vICAgICB2YXJpYWJsZXM6IHtub3RpZmljYXRpb25zOiBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkKX1cclxuICAgIC8vIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxuICAgIGNvbnN0IFtzZW50RmlsdGVyLCBzZXRTZW50RmlsdGVyXSA9IHVzZVN0YXRlKCd0byB5b3UnKVxyXG4gICAgY29uc3QgW3Nob3dTRkRELCBzZXRTaG93U0ZERF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdGF0dXNGaWx0ZXIsIHNldFN0YXR1c0ZpbHRlcl0gPSB1c2VTdGF0ZSgncGVuZGluZycpXHJcbiAgICBjb25zdCBbc2hvd1N0YXR1c0RELCBzZXRTaG93U3RhdHVzRERdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gY29uc3Qgbm90aWZzTGlzdENvbmRpdGlvbnMgPSAocXVlcnksIHJlZHVjZXIpID0+IHtcclxuICAgIC8vICAgICBpZiAoIXF1ZXJ5KSB7IHJldHVybiBudWxsIH1cclxuICAgIC8vICAgICBpZiAocmVkdWNlci5sZW5ndGggPT09IDApIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgLy8gICAgIGlmIChyZWR1Y2VyWzBdLnVzZXJUbykge1xyXG4gICAgLy8gICAgICAgICBpZiAocXVlcnkuX2lkID09PSByZWR1Y2VyWzBdLl9pZCApIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gcXVlcnlcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuICAgIC8vIGNvbnN0IG5vdGlmc0xpc3QgPSBub3RpZnNMaXN0Q29uZGl0aW9ucyhub3RpZnNMaXN0UXVlcnkuZGF0YS5saXN0T2ZOb3RpZmljYXRpb25zLCBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKG5vdGlmc0xpc3QpIHtcclxuICAgIC8vICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5vdGlmc0xpc3QpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW25vdGlmc0xpc3QsIHByb3BzLCBwcm9wcy5zZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnNdKVxyXG5cclxuICAgIGlmIChwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnNbMF0udXNlclRvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnNXZoJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZpbHRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZW50T3B0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IFsnZnJvbSB5b3UnLCAndG8geW91J11cclxuICAgICAgICAgICAgY29uc3Qgb25PcHRpb25DbGljayA9IChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlbnRGaWx0ZXIob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd1NGREQoIXNob3dTRkREKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxPcHRpb25zLm1hcChvID0+IG8gIT09IHNlbnRGaWx0ZXIgPyA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uT3B0aW9uQ2xpY2sobyl9IGNsYXNzTmFtZT17VVUuTkZERE9wdGlvbn0ga2V5PXtgU0ZERCR7b31gfT57b308L2Rpdj4gOiBudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZW50REQgPSBzaG93U0ZERCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORnJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORlNwbGl0dGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZW50T3B0aW9ucygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk6IG51bGxcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c09wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxPcHRpb25zID0gWydhbGwnLCAnYWNjZXB0ZWQnLCAnZGVjbGluZWQnLCAncGVuZGluZycsICdtZXNzYWdlcyddXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbk9wdGlvbkNsaWNrID0gKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXR1c0ZpbHRlcihvcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1N0YXR1c0REKCFzaG93U3RhdHVzREQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsT3B0aW9ucy5tYXAobyA9PiBvICE9PSBzdGF0dXNGaWx0ZXIgPyA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uT3B0aW9uQ2xpY2sobyl9IGNsYXNzTmFtZT17YCR7b30tb3B0aW9uICR7VVUuTkZERE9wdGlvbn1gfSBrZXk9e2BTdGF0dXNERCR7b31gfT57b308L2Rpdj4gOiBudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0REID0gc2hvd1N0YXR1c0REID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORkRyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GU3BsaXR0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNPcHRpb25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApOiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUubm90aWZGaWx0ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORkNyZWF0b3JDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtVVS5ORkxhYmVsfT5zdGF0dXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VVUuTkZPcHRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U3RhdHVzREQoIXNob3dTdGF0dXNERCl9IGNsYXNzTmFtZT17YCR7c3RhdHVzRmlsdGVyfS1vcHRpb24gJHtVVS5ORk9wdGlvbn1gfT57c3RhdHVzRmlsdGVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c0REfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVVS5ORkNyZWF0b3JDb250YWluZXJ9IHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17VVUuTkZMYWJlbH0+c2VudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VVLk5GT3B0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U0ZERCghc2hvd1NGREQpfSBjbGFzc05hbWU9e1VVLk5GT3B0aW9ufT57c2VudEZpbHRlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbnRERH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzQ29uZGl0aW9ucyA9IChub3RpZikgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXNGaWx0ZXIgPT09ICdhbGwnKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGNvbnN0IG5vdGlmU3RhdHVzID0gbm90aWYuYWNjZXB0ZWQgPT09IG51bGwgP1xyXG4gICAgICAgICAgICAncGVuZGluZycgOiBcclxuICAgICAgICAgICAgbm90aWYuYWNjZXB0ZWQgP1xyXG4gICAgICAgICAgICBub3RpZi5wb3N0ID9cclxuICAgICAgICAgICAgICAgICdhY2NlcHRlZCcgOiAnbWVzc2FnZXMnXHJcbiAgICAgICAgICAgIDogJ2RlY2xpbmVkJ1xyXG4gICAgICAgIGlmIChzdGF0dXNGaWx0ZXIgPT09IG5vdGlmU3RhdHVzKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VudENvbmRpdGlvbnMgPSAobm90aWYpID0+IHtcclxuICAgICAgICBpZiAoc2VudEZpbHRlciA9PT0gJ2FsbCcpIHJldHVybiB0cnVlXHJcbiAgICAgICAgY29uc3Qgc2VudFN0YXR1cyA9IG5vdGlmLnVzZXJGcm9tLnVzZXJuYW1lID09PSBwcm9wcy5jdXJyZW50VXNlci51c2VybmFtZSA/XHJcbiAgICAgICAgICAgICdmcm9tIHlvdScgOiAndG8geW91J1xyXG4gICAgICAgIGlmIChzZW50RmlsdGVyID09PSBzZW50U3RhdHVzKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd05vdGlmaWNhdGlvbnMgPSBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzQ29uZGl0aW9ucyhuKSAmJiBzZW50Q29uZGl0aW9ucyhuKSl7XHJcbiAgICAgICAgICAgIHJldHVybiA8Tm90aWYgbm90aWY9e259IGtleT17YFVOJHtuLl9pZH1gfS8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9KS5yZXZlcnNlKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyVXRpbC1ub3RpZlwiPlxyXG4gICAgICAgICAgICA8RmlsdGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxMHB4J319IC8+XHJcbiAgICAgICAgICAgIHtzaG93Tm90aWZpY2F0aW9uc31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzEwcHgnfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXJcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVzZXJOb3RpZkxpc3QpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgTElTVF9PRl9QT1NUUyB9IGZyb20gJy4uLy4uLy4uL3NyYy9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRVc2VyU1AgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IFBvc3RTbWFsbCBmcm9tICcuLi8uLi9wb3N0L1Bvc3RTbWFsbCdcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vTG9hZGluZydcclxuXHJcblxyXG5jb25zdCBVc2VyU1AgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGlkX2xpc3QgPSBwcm9wcy5jdXJyZW50VXNlci5zYXZlZFBvc3RzLm1hcChwID0+IHAuX2lkKVxyXG4gICAgY29uc3QgcG9zdExpc3RRdWVyeSA9IHVzZVF1ZXJ5KExJU1RfT0ZfUE9TVFMsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtpZF9saXN0fVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHF1ZXJ5Q29uZGl0aW9ucyA9IChxdWVyeSwgcmVkdWNlcikgPT4ge1xyXG4gICAgICAgIGlmICghcXVlcnkpIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKCFxdWVyeS5nZXRMaXN0T2ZQb3N0cykgcmV0dXJuIG51bGxcclxuICAgICAgICBpZiAoIXJlZHVjZXIpIHJldHVybiBxdWVyeS5nZXRMaXN0T2ZQb3N0c1xyXG4gICAgICAgIGlmIChyZWR1Y2VyICYmIHJlZHVjZXIubGVuZ3RoID4gMCAmJiAhcmVkdWNlclswXS50aXRsZSkgcmV0dXJuIHF1ZXJ5LmdldExpc3RPZlBvc3RzXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3N0TGlzdCA9IHF1ZXJ5Q29uZGl0aW9ucyhwb3N0TGlzdFF1ZXJ5LmRhdGEsIHByb3BzLmN1cnJlbnRVc2VyLnNhdmVkUG9zdHMpXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgaWYgKHBvc3RMaXN0KSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3N0TGlzdCA9IFtdXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kIGluIHBvc3RMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3N0TGlzdC5wdXNoKHsuLi5wb3N0TGlzdFtpbmRdLCBfaWQ6IGlkX2xpc3RbaW5kXX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJTUChuZXdQb3N0TGlzdClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcG9zdExpc3QsIHByb3BzLnNldEN1cnJlbnRVc2VyU1AsIHByb3BzLCBpZF9saXN0XSlcclxuXHJcbiAgICBpZiAocHJvcHMuY3VycmVudFVzZXIuc2F2ZWRQb3N0cy5sZW5ndGggPiAwICYmICFwcm9wcy5jdXJyZW50VXNlci5zYXZlZFBvc3RzWzBdLnVzZXIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc1dmgnfX0vPlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbGxTUCA9IHByb3BzLmN1cnJlbnRVc2VyLnNhdmVkUG9zdHMubWFwKHAgPT4gPFBvc3RTbWFsbCBwb3N0PXtwfSB1c2VyPXtwLnVzZXIudXNlcm5hbWV9IHR5cGU9XCJzYXZlZFwiIGtleT17YFNQJHtwLnRpdGxlfWB9IC8+KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTBweCd9fSAvPlxyXG4gICAgICAgICAgICB7YWxsU1B9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7IHNldEN1cnJlbnRVc2VyU1AgfVxyXG4pKFVzZXJTUCkiLCJpbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIm5leHQtYXBvbGxvXCJcclxuLy8gaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIlxyXG5cclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCdcclxuaW1wb3J0IHsgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJ1xyXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5J1xyXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCdcclxuLy8gaHR0cHM6Ly91bmlsb3VzLWJhY2stZW5kLWRldi5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuLy8gaHR0cHM6Ly9wcm9qZWN0dS1iYWNrLWVuZC0yMDIwLmhlcm9rdWFwcC5jb20vZ3JhcGhxbFxyXG4vLyBodHRwczovL3VuaWxvdXMtYmFjay1lbmQtbmV4dGpzLmhlcm9rdWFwcC5jb20vZ3JhcGhxbFxyXG5cclxuY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgdXJpOiAnaHR0cHM6Ly91bmlsb3VzLWJhY2stZW5kLW5leHRqcy5oZXJva3VhcHAuY29tL2dyYXBocWwnLFxyXG59KVxyXG5cclxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IG51bGxcclxuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgVW5pbG91cyoyMDAwICR7dG9rZW59YCA6IG51bGwsXHJcbiAgICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcclxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxufSlcclxuXHJcbi8vIGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4vLyAgIHVyaTogJ2h0dHBzOi8vcHJvamVjdHUtYmFjay1lbmQtMjAyMC5oZXJva3VhcHAuY29tL2dyYXBocWwnLFxyXG4vLyAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4vLyAgIHNzck1vZGU6IHRydWVcclxuLy8gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oYXBvbGxvQ2xpZW50KVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IE1BS0VfTk9USUZJQ0FUSU9OIH0gZnJvbSAnLi4vLi4vc3JjL3NjaGVtYXMvbXV0YXRpb25zJ1xyXG5pbXBvcnQgeyBGSU5EX1VTRVIsIEFMTF9VU0VSUywgTElTVF9PRl9QT1NUUyB9IGZyb20gJy4uLy4uL3NyYy9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7IHNldEFsZXJ0LCByZXNldEFsZXJ0IH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IFVQIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlcy91c2VyUGFnZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFBvc3RTbWFsbExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L1Bvc3RTbWFsbExpc3QnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZydcclxuaW1wb3J0IEZvcm1Db250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWZpZWxkL0Zvcm1Db250YWluZXInXHJcbmltcG9ydCBSZWZlcmVuY2VMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1maWVsZC9SZWZlcmVuY2VMaW5rJ1xyXG5pbXBvcnQgeyBwYWxsZXR0ZUdlbmVyYXRvciwgdXNlRmllbGQsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7YXBvbGxvQ2xpZW50fSBmcm9tICcuLi8uLi9saWIvYXBvbGxvJ1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IFVzZXJQYWdlID0gd2l0aFJvdXRlcigocHJvcHMpID0+IHtcclxuICBjb25zdCBjdXJyZW50VXNlciA9IHByb3BzLnVzZXJcclxuICBjb25zdCBtZXNzYWdlID0gdXNlRmllbGQoJ3RleHQnKVxyXG4gIGNvbnN0IG9uRXJyb3IgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZU1lc3NhZ2UgPSBlLm1lc3NhZ2VcclxuICAgIGlmIChlTWVzc2FnZS5pbmNsdWRlcygnUGF0aCBgbWVzc2FnZWAgKCcpKSB7XHJcbiAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBtZXNzYWdlJDogbWVzc2FnZSBvZiAke21lc3NhZ2UuZmllbGRzLnZhbHVlLmxlbmd0aH0gY2hhcmFjdGVycyBjYW5ub3QgYmUgbW9yZSB0aGFuIDgwMCBjaGFyYWN0ZXJzYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzZW5kTWVzc2FnZV0gPSB1c2VNdXRhdGlvbihNQUtFX05PVElGSUNBVElPTiwge1xyXG4gICAgb25FcnJvclxyXG4gIH0pXHJcbiAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghbWVzc2FnZS5maWVsZHMudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBtZXNzYWdlJDogbWVzc2FnZSBmaWVsZCBpcyByZXF1aXJlZGAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICB1c2VyRnJvbUlkOiBwcm9wcy5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgICAgIHVzZXJUb0lkOiBjdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UuZmllbGRzLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgbWVzc2FnZS5yZXNldCgpXHJcbiAgICAgICAgdHJpZ2dlckFsZXJ0KCdzdWNjZXNzJywgYHNlbnQ6IG1lc3NhZ2UgaGFzIGJlZW4gc2VudCB0byAke2N1cnJlbnRVc2VyLnVzZXJuYW1lfWAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBwYWxsZXR0ZSA9IHBhbGxldHRlR2VuZXJhdG9yKFwicmdiKDQwLDQwLDQwKVwiKS5jb2xvclBhbGxldHRlXHJcbiAgXHJcbiAgY29uc3QgZGVzY3JpcHRpb25Ub1Nob3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbXRPZlBvc3RzID0gY3VycmVudFVzZXIucG9zdHMubGVuZ3RoXHJcbiAgICBsZXQgZEZpbmFsID0gYCR7Y3VycmVudFVzZXIudXNlcm5hbWV9IGBcclxuICAgIGlmIChhbXRPZlBvc3RzKSB7XHJcbiAgICAgIGlmIChhbXRPZlBvc3RzID09PSAxKSBkRmluYWwgPSBkRmluYWwgKyBgaGFzICR7YW10T2ZQb3N0c30gYXdlc29tZSBwcm9qZWN0IHRoYXQgbmVlZHMgYSB0ZWFtLmBcclxuICAgICAgZWxzZSBkRmluYWwgPSBkRmluYWwgKyBgaGFzICR7YW10T2ZQb3N0c30gYXdlc29tZSBwcm9qZWN0cyB0aGF0IG5lZWQgdGVhbXMuYFxyXG4gICAgfVxyXG4gICAgZWxzZSBkRmluYWwgPSBkRmluYWwgKyAnaXMgbG9va2luZyBmcmVzaCBhbmQgcmVhZHkgdG8gd29yayBvbiBhIHByb2plY3QhJ1xyXG5cclxuICAgIHJldHVybiBkRmluYWxcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57YCR7Y3VycmVudFVzZXIudXNlcm5hbWV9IHwgVW5pbG91cyB1c2VyYH08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uVG9TaG93KCl9IGtleT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17VVAuVVBDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlaWdodFwiIHN0eWxlPXt7Z3JpZENvbHVtbjogJzEvMyd9fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVUC5VUENvbnRlbnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VQLlVQVGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17VVAuVVBUaXRsZUljb259IHNyYz1cIi9zdmcvdXNlckIuc3ZnXCIgYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1VQLlVQVGl0bGV9PntjdXJyZW50VXNlci51c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtVUC5VUFRpdGxlfSBzdHlsZT17e29wYWNpdHk6ICcwLjgnfX0+cHJvZmlsZSBsaW5rPC9oMz5cclxuICAgICAgICAgIDxSZWZlcmVuY2VMaW5rIHJsPXtjdXJyZW50VXNlci5yZWZlcmVuY2VMaW5rfSAvPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17VVAuVVBUaXRsZX0+cG9zdHM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VQLlVQUG9zdHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8UG9zdFNtYWxsTGlzdCBwb3N0cz17cHJvcHMudXNlclBvc3RzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyBwcm9wcy5jdXJyZW50VXNlciAhPT0gY3VycmVudFVzZXIudXNlcm5hbWUgJiZcclxuICAgICAgICA8Rm9ybUNvbnRhaW5lciBwYWxsZXR0ZT17cGFsbGV0dGV9ID5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9ybS10aXRsZVwiPmNvbnRhY3Qge2N1cnJlbnRVc2VyLnVzZXJuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvcm0tdGl0bGUtc2Vjb25kYXJ5XCI+bWVzc2FnZTwvaDQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIiB7Li4ubWVzc2FnZS5maWVsZHN9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdWJtaXQtYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lc3NhZ2UoKX0gY2xhc3NOYW1lPVwiZm9ybS1zdWJtaXQtYnV0dG9uXCI+c2VuZDwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn0pXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCB1c2VybmFtZXNRdWVyeSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7cXVlcnk6IEFMTF9VU0VSU30pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgY29uc3QgcGF0aHMgPSB1c2VybmFtZXNRdWVyeS5kYXRhLmFsbFVzZXJzLm1hcCh1ID0+IGAvdXNlci8ke2VuY29kZVVSSUNvbXBvbmVudCh1LnVzZXJuYW1lKX1gKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcbiAgY29uc3QgdXNlclF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBGSU5EX1VTRVIsXHJcbiAgICB2YXJpYWJsZXM6IHt1c2VybmFtZTogcGFyYW1zLnVzZXJuYW1lfVxyXG4gIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIFxyXG4gIGNvbnN0IHVzZXJQb3N0c1F1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IExJU1RfT0ZfUE9TVFMsXHJcbiAgICAgIHZhcmlhYmxlczoge2lkX2xpc3Q6IHVzZXJRdWVyeS5kYXRhLmZpbmRVc2VyLnBvc3RzLm1hcChwID0+IHAuX2lkKX1cclxuICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHVzZXI6IHVzZXJRdWVyeS5kYXRhLmZpbmRVc2VyLFxyXG4gICAgICB1c2VyUG9zdHM6IHVzZXJQb3N0c1F1ZXJ5LmRhdGEuZ2V0TGlzdE9mUG9zdHNcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBhbGVydE5vdGlmOiBzdGF0ZS5hbGVydE5vdGlmLFxyXG4gICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcbiAgfVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXRBbGVydDogYmluZEFjdGlvbkNyZWF0b3JzKHNldEFsZXJ0LCBkaXNwYXRjaCksXHJcbiAgICByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVXNlclBhZ2UpXHJcblxyXG4vLyB1c2VzIGZvcm1Db250YWluZXIuY3NzIiwiZXhwb3J0IGNvbnN0IHNldEFsZXJ0ID0gKGluZm8pID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0FMRVJUJyxcclxuICAgICAgICAgICAgZGF0YTogaW5mb1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXNldEFsZXJ0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdSRVNFVF9BTEVSVCdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhbGVydE5vdGlmID0gKHN0YXRlID0ge2NvbG9yOiBudWxsLCB0ZXh0Q29sb3I6IG51bGwsIG1lc3NhZ2U6IG51bGx9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfQUxFUlQnIDpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICAgICAgY2FzZSAnUkVTRVRfQUxFUlQnIDpcclxuICAgICAgICAgICAgcmV0dXJuIHtjb2xvcjogbnVsbCwgdGV4dENvbG9yOiBudWxsLCBtZXNzYWdlOiBudWxsfVxyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxlcnROb3RpZiIsImV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlciA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVVJSRU5UX1VTRVInLFxyXG4gICAgICAgICAgICBkYXRhOiB1c2VyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyUG9zdHMgPSAocG9zdHMpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX1BPU1RTJyxcclxuICAgICAgICAgICAgZGF0YTogcG9zdHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXJTUCA9IChwb3N0cykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfU1AnLFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0c1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMgPSAobm90aWZpY2F0aW9ucykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfTk9USUZJQ0FUSU9OUycsXHJcbiAgICAgICAgICAgIGRhdGE6IG5vdGlmaWNhdGlvbnNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMgPSAoYW10KSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9QTicsXHJcbiAgICAgICAgICAgIGRhdGE6IGFtdFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGN1cnJlbnRVc2VyID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVX1BOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGVuZGluZ05vdGlmaWNhdGlvbnM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVVJSRU5UX1VTRVInIDpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgICAgICAgY2FzZSAnU0VUX0NVX1BPU1RTJyA6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBvc3RzOiBhY3Rpb24uZGF0YX1cclxuICAgICAgICBjYXNlICdTRVRfQ1VfU1AnIDpcclxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzYXZlZFBvc3RzOiBhY3Rpb24uZGF0YX1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICBjYXNlICdTRVRfQ1VfTk9USUZJQ0FUSU9OUycgOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBub3RpZmljYXRpb25zOiBhY3Rpb24uZGF0YX1cclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRVc2VyIiwiZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHRva2VuKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdTRVRfVE9LRU4nLFxyXG4gICAgICAgIGRhdGE6IHRva2VuXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJUb2tlbiA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0NMRUFSX1RPS0VOJ1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgdG9rZW4gPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9UT0tFTicgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdDTEVBUl9UT0tFTicgOlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2tlbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyaWdnZXJBbGVydCA9ICh0eXBlLCBtZXNzYWdlLCBzZXRBbGVydCwgcmVzZXRBbGVydCkgPT4ge1xyXG4gICAgLy8gdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ3N1Y2Nlc3M6IGFsZXJ0IGJhciBpcyB3b3JraW5nJywgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXHJcbiAgICBjb25zdCBjbGVhbmVkTWVzc2FnZSA9IDxwIHN0eWxlPXt7bWFyZ2luOiAwfX0+PHN0cm9uZz57bWVzc2FnZS5zcGxpdCgnJDonKVswXX08L3N0cm9uZz46IHttZXNzYWdlLnNwbGl0KCckOicpWzFdfTwvcD5cclxuICAgIGlmICh0eXBlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICBzZXRBbGVydCh7Y29sb3I6ICdyZ2IoNTIsMTY2LDk1KScsIHRleHRDb2xvcjogJ3doaXRlJywgbWVzc2FnZTogY2xlYW5lZE1lc3NhZ2V9KVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICd3YXJuaW5nJykge1xyXG4gICAgICAgIHNldEFsZXJ0KHtjb2xvcjogJ3JnYigyMjYsMTg0LDU5KScsIHRleHRDb2xvcjogJ3doaXRlJywgbWVzc2FnZTogY2xlYW5lZE1lc3NhZ2V9KVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdkYW5nZXInKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoe2NvbG9yOiAncmdiKDI1NCw1Miw3NyknLCB0ZXh0Q29sb3I6ICd3aGl0ZScsIG1lc3NhZ2U6IGNsZWFuZWRNZXNzYWdlfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdlYnNpdGVTdGF0cyA9ICh1cmwpID0+IHtcclxuICAgIGlmICh1cmwuc3BsaXQoJy8nKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9pbnB1dC5zdmcnLCBjb2xvcjogJyM0ODQ4NDgnLHRpdGxlOiAndW5rbm93biB1cmwnfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnQgPSB1cmwuc3BsaXQoJy8nKVsyXVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCd1bmlsb3VzJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL2xvZ28vbG9nb1cuc3ZnJywgY29sb3I6ICcjMjgyODI4JywgdGl0bGU6ICdVbmlsb3VzJ31cclxuICAgIH1cclxuICAgIGlmIChzdGFydC5pbmNsdWRlcygnZGlzY29yZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9kaXNjb3JkLnN2ZycsIGNvbG9yOiAnIzcyODlEQScsIHRpdGxlOiAnRGlzY29yZCd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3RyZWxsbycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlL3RyZWxsby5zdmcnLCBjb2xvcjogJyMwMDc5QkYnLCB0aXRsZTogJ1RyZWxsbyd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3doYXRzYXBwJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL3doYXRzYXBwLnN2ZycsIGNvbG9yOiAnIzI1RDM2NicsIHRpdGxlOiAnV2hhdHNBcHAnfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdtb25kYXknKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJ2h0dHBzOi8vaS5pbWd1ci5jb20vYmdhUVpjOS5wbmcnLCBjb2xvcjogJyMzMzMzMzMnLCB0aXRsZTogJ01vbmRheSd9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhcnQuaW5jbHVkZXMoJ3NsYWNrJykpIHtcclxuICAgICAgICByZXR1cm4ge2ljb246ICcvc3ZnL3dlYnNpdGVzL3NsYWNrLnN2ZycsIGNvbG9yOiAnIzRBMTU0QicsIHRpdGxlOiAnU2xhY2snfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdsaW5rZWRpbicpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9saW5rZWRpbi5zdmcnLCBjb2xvcjogJ3JnYig0MCwxMDMsMTc4KScsIHRpdGxlOiAnTGlua2VkSW4nfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdmYWNlYm9vaycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpY29uOiAnL3N2Zy93ZWJzaXRlcy9mYWNlYm9vay5zdmcnLCBjb2xvcjogJ3JnYig2NiwxMDMsMTc4KScsIHRpdGxlOiAnRmFjZWJvb2snfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdpbmRlZWQnKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJ2h0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRmdvaGlyZS13ZWJzaXRlLnMzLmFtYXpvbmF3cy5jb20lMkZpbWclMkZpbnRlZ3JhdGlvbi1sb2dvcyUyRmluZGVlZC1pY29uLmpwZyZmPTEmbm9mYj0xJywgY29sb3I6ICcjMjgyODI4JywgdGl0bGU6ICdJbmRlZWQnfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0LmluY2x1ZGVzKCdnaXRodWInKSkge1xyXG4gICAgICAgIHJldHVybiB7aWNvbjogJy9zdmcvd2Vic2l0ZXMvZ2l0SHViLnN2ZycsIGNvbG9yOiAnIzMzMycsIHRpdGxlOiAnR2l0SHViJ31cclxuICAgIH1cclxuICAgIHJldHVybiB7aWNvbjogJ3N2Zy93ZWJzaXRlcy9pbnRlcm5ldC5zdmcnLCBjb2xvcjogJyMyODI4MjgnLHRpdGxlOiAndW5rbm93biB1cmwnfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmllbGQgPSAodHlwZSkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgb25DaGFuZ2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYWxsZXR0ZUdlbmVyYXRvciA9IChwcmltYXJ5Q29sb3IpID0+IHtcclxuICAgIGNvbnN0IGNvbG9yID0gcHJpbWFyeUNvbG9yXHJcbiAgICBjb25zdCBjb2xvcnMgPSBjb2xvci5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoYyA9PiBOdW1iZXIoYykpXHJcbiAgICBjb25zdCBoaWdoZXJDb2xvciA9IGByZ2IoJHtjb2xvcnMubWFwKGMgPT4gYyArIDMwKS5qb2luKCcsJyl9KWBcclxuICAgIGxldCBpc0RhcmsgPSAoKGNvbG9yc1swXSArIGNvbG9yc1sxXSArIGNvbG9yc1syXSkgLyAzKSA8IDEyNyA/XHJcbiAgICAgICAgdHJ1ZSA6IGZhbHNlXHJcbiAgICAvLyBjb25zdCBpc0RhcmsgPSBmYWxzZVxyXG4gICAgY29uc3QgY29sb3JQYWxsZXR0ZSA9IGlzRGFyayA/IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgaGlnaGVyQ29sb3IsXHJcbiAgICAgICAgICAgIC8vIHVzZXJJY29uOiB1c2VySWNvblcsXHJcbiAgICAgICAgICAgIC8vIGhhbmRzaGFrZUljb246IGhhbmRzaGFrZUljb25XLFxyXG4gICAgICAgICAgICAvLyBwbHVzSWNvbjogcGx1c0ljb25XLFxyXG4gICAgICAgICAgICAvLyBzaGFyZUljb246IHNoYXJlSWNvblcsXHJcbiAgICAgICAgICAgIC8vIHNocmlua0ljb246IHNocmlua1csXHJcbiAgICAgICAgICAgIC8vIGNvbG9yZWQ6IHtcclxuICAgICAgICAgICAgLy8gICAgIGhlYXJ0SWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gdmlld0JveD1cIjAgLTI4IDUxMi4wMDAwMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm00NzEuMzgyODEyIDQ0LjU3ODEyNWMtMjYuNTAzOTA2LTI4Ljc0NjA5NC02Mi44NzEwOTMtNDQuNTc4MTI1LTEwMi40MTAxNTYtNDQuNTc4MTI1LTI5LjU1NDY4NyAwLTU2LjYyMTA5NCA5LjM0Mzc1LTgwLjQ0OTIxOCAyNy43Njk1MzEtMTIuMDIzNDM4IDkuMzAwNzgxLTIyLjkxNzk2OSAyMC42Nzk2ODgtMzIuNTIzNDM4IDMzLjk2MDkzOC05LjYwMTU2Mi0xMy4yNzczNDQtMjAuNS0yNC42NjAxNTctMzIuNTI3MzQ0LTMzLjk2MDkzOC0yMy44MjQyMTgtMTguNDI1NzgxLTUwLjg5MDYyNS0yNy43Njk1MzEtODAuNDQ1MzEyLTI3Ljc2OTUzMS0zOS41MzkwNjMgMC03NS45MTAxNTYgMTUuODMyMDMxLTEwMi40MTQwNjMgNDQuNTc4MTI1LTI2LjE4NzUgMjguNDEwMTU2LTQwLjYxMzI4MSA2Ny4yMjI2NTYtNDAuNjEzMjgxIDEwOS4yOTI5NjkgMCA0My4zMDA3ODEgMTYuMTM2NzE5IDgyLjkzNzUgNTAuNzgxMjUgMTI0Ljc0MjE4NyAzMC45OTIxODggMzcuMzk0NTMxIDc1LjUzNTE1NiA3NS4zNTU0NjkgMTI3LjExNzE4OCAxMTkuMzEyNSAxNy42MTMyODEgMTUuMDExNzE5IDM3LjU3ODEyNCAzMi4wMjczNDQgNTguMzA4NTkzIDUwLjE1MjM0NCA1LjQ3NjU2MyA0Ljc5Njg3NSAxMi41MDM5MDcgNy40Mzc1IDE5Ljc5Mjk2OSA3LjQzNzUgNy4yODUxNTYgMCAxNC4zMTY0MDYtMi42NDA2MjUgMTkuNzg1MTU2LTcuNDI5Njg3IDIwLjczMDQ2OS0xOC4xMjg5MDcgNDAuNzA3MDMyLTM1LjE1MjM0NCA1OC4zMjgxMjUtNTAuMTcxODc2IDUxLjU3NDIxOS00My45NDkyMTggOTYuMTE3MTg4LTgxLjkwNjI1IDEyNy4xMDkzNzUtMTE5LjMwNDY4NyAzNC42NDQ1MzItNDEuODAwNzgxIDUwLjc3NzM0NC04MS40Mzc1IDUwLjc3NzM0NC0xMjQuNzQyMTg3IDAtNDIuMDY2NDA3LTE0LjQyNTc4MS04MC44Nzg5MDctNDAuNjE3MTg4LTEwOS4yODkwNjN6bTAgMFwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vICAgICBzaGFyZUljb246IDxzdmcgZmlsbD17Y29sb3J9IHZpZXdCb3g9XCIwIC0yMiA1MTIgNTExXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNTEyIDIzMy44MjAzMTItMjEyLjc3NzM0NC0yMzMuMzIwMzEydjEzOS4yMDMxMjVoLTQ1LjIzODI4MWMtMTQwLjI3MzQzNyAwLTI1My45ODQzNzUgMTEzLjcxMDkzNy0yNTMuOTg0Mzc1IDI1My45ODQzNzV2NzMuNzY5NTMxbDIwLjA5Mzc1LTIyLjAxOTUzMWM2OC4zMTY0MDYtNzQuODUxNTYyIDE2NC45ODA0NjktMTE3LjUgMjY2LjMyNDIxOS0xMTcuNWgxMi44MDQ2ODd2MTM5LjIwMzEyNXptMCAwXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gICAgIGhhbmRzaGFrZUljb246IDxzdmcgZmlsbD17Y29sb3J9IGlkPVwiQ2FwYV8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Zz48cGF0aCBkPVwibTM4Ni4xNTggOC43MzNjLTUuODU4LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMzYuNDc4IDM2LjQ3OGMtMTkuOTIzLTEwLjc2OS00NS4zODYtNy43NDgtNjIuMTk5IDkuMDY1bC02OS40MTYgNjkuNDE2Yy0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwbDI1LjA5LTI1LjA5YzM4LjkxMiAzMi40NDggOTIuMjczIDQyLjYgMTQwLjU5MSAyNi4yNTJsNjYuODIgNjYuODJjOC4zNzYtMTguMTkyIDUuODM0LTQwLjIxNi03LjY1LTU2LjA2OWwzNS4wNTgtMzUuMDU4YzUuODU4LTUuODU4IDUuODU4LTE1LjM1NSAwLTIxLjIxMy0uMTAxLS4xMDEtLjIxMS0uMTg3LS4zMTUtLjI4NGwuMDE1LS4wMTV6XCIvPjxwYXRoIGQ9XCJtMjc2LjQ1OSA0MDAuMDExYy0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NiAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ3IDBsLTQ2LjI3MiA0Ni4yNzJjLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDBsNDYuMjcyLTQ2LjI3MmMxNC4wNDQtMTQuMDQzIDE0LjA0NC0zNi44MDcuMDAzLTUwLjg0OHpcIi8+PHBhdGggZD1cIm0yNzYuMTYgMTg4LjUwNC03LjI0OCA3LjI0OGMtMjUuNzE1IDI1LjcxNS02Ny41NTggMjUuNzE1LTkzLjI3MyAwcy0yNS43MTUtNjcuNTU4IDAtOTMuMjczbDU3LjUxNC01Ny41MTRjLTE2LjE1Ny02LjE4OC0zNC41NDctNC44OTEtNDkuNzY4IDMuODkybC0zNi4zMjktMzYuMzI5Yy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTEyMS40NSAxMjEuNDQ5Yy01Ljg1OCA1Ljg1OC01Ljg1OCAxNS4zNTUgMCAyMS4yMTNsMzYuMzI5IDM2LjMyOWMtOC43ODMgMTUuMjIxLTEwLjA4IDMzLjYxMS0zLjg5MiA0OS43NjhsMTUuMDI5LTE1LjAyOWMyNS43MTUtMjUuNzE1IDY3LjU1OC0yNS43MTUgOTMuMjczIDAgOS4zNzQgOS4zNzQgMTUuMzE1IDIwLjg5NSAxNy44NTQgMzIuOTkyIDEyLjA5OCAyLjU0IDIzLjYxOCA4LjQ4IDMyLjk5MiAxNy44NTRzMTUuMzE0IDIwLjg5NSAxNy44NTQgMzIuOTkzYzEyLjA5OCAyLjU0IDIzLjYxOCA4LjQ4IDMyLjk5MiAxNy44NTMgOS4zNzQgOS4zNzQgMTUuMzE1IDIwLjg5NSAxNy44NTQgMzIuOTkyIDEyLjA5OCAyLjU0IDIzLjYxOCA4LjQ4IDMyLjk5MiAxNy44NTQgMjUuNzE1IDI1LjcxNSAyNS43MTUgNjcuNTU4IDAgOTMuMjczbC0xOC41NjIgMTguNTYyIDYuNDk3IDYuNDk3YzE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDdsLTg0LjQ3NS04NC40NzVjLTQzLjk5NiA5LjcwNy04OS45OTIgMi4wOTctMTI4LjM1OC0yMC43NjF6XCIvPjwvZz48L3N2Zz4sXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dENvbG9yOiAnIzI4MjgyOCcsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICBoaWdoZXJDb2xvcixcclxuICAgICAgICAgICAgLy8gdXNlckljb246IHVzZXJJY29uQixcclxuICAgICAgICAgICAgLy8gaGFuZHNoYWtlSWNvbjogaGFuZHNoYWtlSWNvbkIsXHJcbiAgICAgICAgICAgIC8vIHBsdXNJY29uOiBwbHVzSWNvbkIsXHJcbiAgICAgICAgICAgIC8vIHNoYXJlSWNvbjogc2hhcmVJY29uQixcclxuICAgICAgICAgICAgLy8gc2hyaW5rSWNvbjogc2hyaW5rQixcclxuICAgICAgICAgICAgLy8gY29sb3JlZDoge1xyXG4gICAgICAgICAgICAvLyAgICAgaGVhcnRJY29uOiA8c3ZnIGZpbGw9e2NvbG9yfSB2aWV3Qm94PVwiMCAtMjggNTEyLjAwMDAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQ3MS4zODI4MTIgNDQuNTc4MTI1Yy0yNi41MDM5MDYtMjguNzQ2MDk0LTYyLjg3MTA5My00NC41NzgxMjUtMTAyLjQxMDE1Ni00NC41NzgxMjUtMjkuNTU0Njg3IDAtNTYuNjIxMDk0IDkuMzQzNzUtODAuNDQ5MjE4IDI3Ljc2OTUzMS0xMi4wMjM0MzggOS4zMDA3ODEtMjIuOTE3OTY5IDIwLjY3OTY4OC0zMi41MjM0MzggMzMuOTYwOTM4LTkuNjAxNTYyLTEzLjI3NzM0NC0yMC41LTI0LjY2MDE1Ny0zMi41MjczNDQtMzMuOTYwOTM4LTIzLjgyNDIxOC0xOC40MjU3ODEtNTAuODkwNjI1LTI3Ljc2OTUzMS04MC40NDUzMTItMjcuNzY5NTMxLTM5LjUzOTA2MyAwLTc1LjkxMDE1NiAxNS44MzIwMzEtMTAyLjQxNDA2MyA0NC41NzgxMjUtMjYuMTg3NSAyOC40MTAxNTYtNDAuNjEzMjgxIDY3LjIyMjY1Ni00MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MSAxNi4xMzY3MTkgODIuOTM3NSA1MC43ODEyNSAxMjQuNzQyMTg3IDMwLjk5MjE4OCAzNy4zOTQ1MzEgNzUuNTM1MTU2IDc1LjM1NTQ2OSAxMjcuMTE3MTg4IDExOS4zMTI1IDE3LjYxMzI4MSAxNS4wMTE3MTkgMzcuNTc4MTI0IDMyLjAyNzM0NCA1OC4zMDg1OTMgNTAuMTUyMzQ0IDUuNDc2NTYzIDQuNzk2ODc1IDEyLjUwMzkwNyA3LjQzNzUgMTkuNzkyOTY5IDcuNDM3NSA3LjI4NTE1NiAwIDE0LjMxNjQwNi0yLjY0MDYyNSAxOS43ODUxNTYtNy40Mjk2ODcgMjAuNzMwNDY5LTE4LjEyODkwNyA0MC43MDcwMzItMzUuMTUyMzQ0IDU4LjMyODEyNS01MC4xNzE4NzYgNTEuNTc0MjE5LTQzLjk0OTIxOCA5Ni4xMTcxODgtODEuOTA2MjUgMTI3LjEwOTM3NS0xMTkuMzA0Njg3IDM0LjY0NDUzMi00MS44MDA3ODEgNTAuNzc3MzQ0LTgxLjQzNzUgNTAuNzc3MzQ0LTEyNC43NDIxODcgMC00Mi4wNjY0MDctMTQuNDI1NzgxLTgwLjg3ODkwNy00MC42MTcxODgtMTA5LjI4OTA2M3ptMCAwXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gICAgIHNoYXJlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gdmlld0JveD1cIjAgLTIyIDUxMiA1MTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm01MTIgMjMzLjgyMDMxMi0yMTIuNzc3MzQ0LTIzMy4zMjAzMTJ2MTM5LjIwMzEyNWgtNDUuMjM4MjgxYy0xNDAuMjczNDM3IDAtMjUzLjk4NDM3NSAxMTMuNzEwOTM3LTI1My45ODQzNzUgMjUzLjk4NDM3NXY3My43Njk1MzFsMjAuMDkzNzUtMjIuMDE5NTMxYzY4LjMxNjQwNi03NC44NTE1NjIgMTY0Ljk4MDQ2OS0xMTcuNSAyNjYuMzI0MjE5LTExNy41aDEyLjgwNDY4N3YxMzkuMjAzMTI1em0wIDBcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICAvLyAgICAgaGFuZHNoYWtlSWNvbjogPHN2ZyBmaWxsPXtjb2xvcn0gaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnPjxwYXRoIGQ9XCJtMzg2LjE1OCA4LjczM2MtNS44NTgtNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC0zNi40NzggMzYuNDc4Yy0xOS45MjMtMTAuNzY5LTQ1LjM4Ni03Ljc0OC02Mi4xOTkgOS4wNjVsLTY5LjQxNiA2OS40MTZjLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NiAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDBsMjUuMDktMjUuMDljMzguOTEyIDMyLjQ0OCA5Mi4yNzMgNDIuNiAxNDAuNTkxIDI2LjI1Mmw2Ni44MiA2Ni44MmM4LjM3Ni0xOC4xOTIgNS44MzQtNDAuMjE2LTcuNjUtNTYuMDY5bDM1LjA1OC0zNS4wNThjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzLS4xMDEtLjEwMS0uMjExLS4xODctLjMxNS0uMjg0bC4wMTUtLjAxNXpcIi8+PHBhdGggZD1cIm0yNzYuNDU5IDQwMC4wMTFjLTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDYtMTQuMDQxLTE0LjA0MS0zNi44MDYtMTQuMDQxLTUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0Ni0xNC4wNDEtMTQuMDQxLTM2LjgwNi0xNC4wNDEtNTAuODQ2IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ2LTE0LjA0MS0xNC4wNDEtMzYuODA2LTE0LjA0MS01MC44NDcgMGwtNDYuMjcyIDQ2LjI3MmMtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMC0xNC4wNDEgMTQuMDQxLTE0LjA0MSAzNi44MDYgMCA1MC44NDYgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NiAwLTE0LjA0MSAxNC4wNDEtMTQuMDQxIDM2LjgwNiAwIDUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ2IDAtMTQuMDQxIDE0LjA0MS0xNC4wNDEgMzYuODA2IDAgNTAuODQ2IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDYgMGw0Ni4yNzItNDYuMjcyYzE0LjA0NC0xNC4wNDMgMTQuMDQ0LTM2LjgwNy4wMDMtNTAuODQ4elwiLz48cGF0aCBkPVwibTI3Ni4xNiAxODguNTA0LTcuMjQ4IDcuMjQ4Yy0yNS43MTUgMjUuNzE1LTY3LjU1OCAyNS43MTUtOTMuMjczIDBzLTI1LjcxNS02Ny41NTggMC05My4yNzNsNTcuNTE0LTU3LjUxNGMtMTYuMTU3LTYuMTg4LTM0LjU0Ny00Ljg5MS00OS43NjggMy44OTJsLTM2LjMyOS0zNi4zMjljLTUuODU4LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMgMGwtMTIxLjQ1IDEyMS40NDljLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxM2wzNi4zMjkgMzYuMzI5Yy04Ljc4MyAxNS4yMjEtMTAuMDggMzMuNjExLTMuODkyIDQ5Ljc2OGwxNS4wMjktMTUuMDI5YzI1LjcxNS0yNS43MTUgNjcuNTU4LTI1LjcxNSA5My4yNzMgMCA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NHMxNS4zMTQgMjAuODk1IDE3Ljg1NCAzMi45OTNjMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1MyA5LjM3NCA5LjM3NCAxNS4zMTUgMjAuODk1IDE3Ljg1NCAzMi45OTIgMTIuMDk4IDIuNTQgMjMuNjE4IDguNDggMzIuOTkyIDE3Ljg1NCAyNS43MTUgMjUuNzE1IDI1LjcxNSA2Ny41NTggMCA5My4yNzNsLTE4LjU2MiAxOC41NjIgNi40OTcgNi40OTdjMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0NyAxNC4wNDEgMTQuMDQxIDM2LjgwNiAxNC4wNDEgNTAuODQ3IDAgMTQuMDQxLTE0LjA0MSAxNC4wNDEtMzYuODA2IDAtNTAuODQ3IDE0LjA0MSAxNC4wNDEgMzYuODA2IDE0LjA0MSA1MC44NDcgMCAxNC4wNDEtMTQuMDQxIDE0LjA0MS0zNi44MDYgMC01MC44NDcgMTQuMDQxIDE0LjA0MSAzNi44MDYgMTQuMDQxIDUwLjg0NyAwIDE0LjA0MS0xNC4wNDEgMTQuMDQxLTM2LjgwNiAwLTUwLjg0N2wtODQuNDc1LTg0LjQ3NWMtNDMuOTk2IDkuNzA3LTg5Ljk5MiAyLjA5Ny0xMjguMzU4LTIwLjc2MXpcIi8+PC9nPjwvc3ZnPixcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29sb3JQYWxsZXR0ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFkZFBvc3QoXHJcbiAgICAkdGl0bGU6IFN0cmluZyEsXHJcbiAgICAkdXNlcjogSUQhLFxyXG4gICAgJGNvbnRhY3RMaW5rOiBTdHJpbmchXHJcbiAgICAkc2tpbGxOYW1lczogW1N0cmluZyFdISxcclxuICAgICRza2lsbENhcGFjaXRpZXM6IFtJbnQhXSEsXHJcbiAgICAkc2tpbGxGaWxsczogW0ludCFdISxcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nISxcclxuICAgICRjb2xvcjogU3RyaW5nISxcclxuICAgICRpbWFnZUxpbmtzOiBbU3RyaW5nIV0sXHJcbiAgICAkcmVmZXJlbmNlTGlua3M6IFtTdHJpbmchXVxyXG4gICl7XHJcbiAgICBhZGRQb3N0KFxyXG4gICAgICB0aXRsZTokdGl0bGUsXHJcbiAgICAgIHVzZXI6JHVzZXIsXHJcbiAgICAgIGNvbnRhY3RMaW5rOiAkY29udGFjdExpbmssXHJcbiAgICAgIHNraWxsTmFtZXM6JHNraWxsTmFtZXMsXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllczokc2tpbGxDYXBhY2l0aWVzLFxyXG4gICAgICBza2lsbEZpbGxzOiAkc2tpbGxGaWxscyxcclxuICAgICAgZGVzY3JpcHRpb246JGRlc2NyaXB0aW9uLFxyXG4gICAgICBjb2xvcjokY29sb3IsXHJcbiAgICAgIGltYWdlTGlua3M6JGltYWdlTGlua3MsXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtzOiRyZWZlcmVuY2VMaW5rc1xyXG4gICAgKXtcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiBkZWxldGVQb3N0IChcclxuICAgICRwb3N0SWQ6IElEIVxyXG4gICkge1xyXG4gICAgZGVsZXRlUG9zdCAocG9zdElkOiAkcG9zdElkKVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1BS0VfTk9USUZJQ0FUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIG1ha2VOb3RpZmljYXRpb24oXHJcbiAgICAkdXNlckZyb21JZDogSUQhLFxyXG4gICAgJHVzZXJUb0lkOiBJRCEsXHJcbiAgICAkbWVzc2FnZTogU3RyaW5nISxcclxuICAgICRwb3N0SWQ6IElELFxyXG4gICAgJHByb3Bvc2VkQ29udHJpYnV0aW9uOiBbSW50IV1cclxuICApe1xyXG4gICAgbWFrZU5vdGlmaWNhdGlvbihcclxuICAgICAgdXNlckZyb21JZDogJHVzZXJGcm9tSWQsXHJcbiAgICAgIHVzZXJUb0lkOiAkdXNlclRvSWQsXHJcbiAgICAgIG1lc3NhZ2U6ICRtZXNzYWdlLFxyXG4gICAgICBwb3N0SWQ6ICRwb3N0SWQsXHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uOiAkcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICl7XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFDQ0VQVF9OT1RJRklDQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gYWNjZXB0Tm90aWZpY2F0aW9uKCRub3RpZmljYXRpb25JZDogSUQhKSB7XHJcbiAgICBhY2NlcHROb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6ICRub3RpZmljYXRpb25JZCkge1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IERFQ0xJTkVfTk9USUZJQ0FUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGRlY2xpbmVOb3RpZmljYXRpb24oJG5vdGlmaWNhdGlvbklkOiBJRCEpIHtcclxuICAgIGRlY2xpbmVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6ICRub3RpZmljYXRpb25JZCkge1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9VU0VSID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVVzZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEsICRyZWZlcmVuY2VMaW5rOiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVVc2VyKFxyXG4gICAgICB1c2VybmFtZTogJHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogJHBhc3N3b3JkLFxyXG4gICAgICByZWZlcmVuY2VMaW5rOiAkcmVmZXJlbmNlTGlua1xyXG4gICAgKXtcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgcGFzc3dvcmRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IGdxbGBcclxuICBtdXRhdGlvbiBsb2dpbigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISl7XHJcbiAgICBsb2dpbihcclxuICAgICAgdXNlcm5hbWU6ICR1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZFxyXG4gICAgKXtcclxuICAgICAgdmFsdWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTQVZFX1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gc2F2ZVBvc3RUb1VzZXIgKFxyXG4gICAgJHVzZXI6IElEISxcclxuICAgICRwb3N0SWQ6IElEIVxyXG4gICkge1xyXG4gICAgc2F2ZVBvc3RUb1VzZXIgKHVzZXI6ICR1c2VyLCBwb3N0SWQ6ICRwb3N0SWQpIHtcclxuICAgICAgdXNlcm5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9TQVZFRF9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIHJlbW92ZVNhdmVkUG9zdCAoXHJcbiAgICAkdXNlcjogSUQhLFxyXG4gICAgJHBvc3RJZDogSUQhXHJcbiAgKSB7XHJcbiAgICByZW1vdmVTYXZlZFBvc3QgKHVzZXI6ICR1c2VyLCBwb3N0SWQ6ICRwb3N0SWQpXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQVNLX1FVRVNUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFza1F1ZXN0aW9uIChcclxuICAgICR1c2VyRnJvbUlkOiBJRCEsXHJcbiAgICAkdXNlclRvSWQ6IElEISxcclxuICAgICRwb3N0SWQ6IElEISxcclxuICAgICRxdWVzdGlvbjogU3RyaW5nIVxyXG4gICl7XHJcbiAgICBhc2tRdWVzdGlvbiAoXHJcbiAgICAgIHVzZXJGcm9tSWQ6ICR1c2VyRnJvbUlkLFxyXG4gICAgICB1c2VyVG9JZDogJHVzZXJUb0lkLFxyXG4gICAgICBwb3N0SWQ6ICRwb3N0SWQsXHJcbiAgICAgIHF1ZXN0aW9uOiAkcXVlc3Rpb25cclxuICAgICl7XHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJUbyB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICBtZXNzYWdlXHJcbiAgICAgIHBvc3R7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBjb2xvclxyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFOU1dFUl9RVUVTVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBhbnN3ZXJRdWVzdGlvbiAoXHJcbiAgICAkbm90aWZpY2F0aW9uSWQ6IElEISxcclxuICAgICRyZXNwb25zZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgYW5zd2VyUXVlc3Rpb24gKFxyXG4gICAgICBub3RpZmljYXRpb25JZDogJG5vdGlmaWNhdGlvbklkLFxyXG4gICAgICByZXNwb25zZTogJHJlc3BvbnNlXHJcbiAgICApe1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBza2lsbE5hbWVzXHJcbiAgICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIHByb3Bvc2VkQ29udHJpYnV0aW9uXHJcbiAgICAgIHF1ZXN0aW9uXHJcbiAgICAgIGFuc3dlclxyXG4gICAgICBhY2NlcHRlZFxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmAiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgTElTVF9PRl9OT1RJRklDQVRJT05TID0gZ3FsYFxyXG4gIHF1ZXJ5IGxpc3RPZk5vdGlmaWNhdGlvbnMoJG5vdGlmaWNhdGlvbnM6IFtTdHJpbmchXSkge1xyXG4gICAgbGlzdE9mTm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zOiAkbm90aWZpY2F0aW9ucykge1xyXG4gICAgICB1c2VyRnJvbSB7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgfVxyXG4gICAgICB1c2VyVG8ge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBwb3N0e1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgICBjb250YWN0TGlua1xyXG4gICAgICAgIHNraWxsTmFtZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgcHJvcG9zZWRDb250cmlidXRpb25cclxuICAgICAgcXVlc3Rpb25cclxuICAgICAgYW5zd2VyXHJcbiAgICAgIGFjY2VwdGVkXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNLSUxMX1NFQVJDSCA9IGdxbGBcclxuICBxdWVyeSBza2lsbFNlYXJjaCgkZmlsdGVyOiBTdHJpbmchKSB7XHJcbiAgICBza2lsbFNlYXJjaChmaWx0ZXI6ICRmaWx0ZXIpIHtcclxuICAgICAgbmFtZVxyXG4gICAgICB1c2VzXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTUUgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgbWV7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICAgIHJlZmVyZW5jZUxpbmtcclxuICAgICAgcHJpbWFyeVNraWxsc3tcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgICAgc2Vjb25kYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBpbnRlcmVzdHNcclxuICAgICAgcG9zdHN7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgICBza2lsbEZpbGxzXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdGlmaWNhdGlvbnN7XHJcbiAgICAgICAgdXNlckZyb217XHJcbiAgICAgICAgICBfaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlclRve1xyXG4gICAgICAgICAgX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgICBwb3N0e1xyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIF9pZFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wb3NlZENvbnRyaWJ1dGlvblxyXG4gICAgICAgIGFjY2VwdGVkXHJcbiAgICAgIH1cclxuICAgICAgX2lkXHJcblxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExJU1RfT0ZfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnkgZ2V0TGlzdE9mUG9zdHMoJGlkX2xpc3Q6IFtTdHJpbmddKSB7XHJcbiAgICBnZXRMaXN0T2ZQb3N0cyhpZExpc3Q6ICRpZF9saXN0KXtcclxuICAgICAgdGl0bGVcclxuICAgICAgdXNlcntcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgIF9pZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbG9yXHJcbiAgICAgIHNraWxsRmlsbHNcclxuICAgICAgc2tpbGxDYXBhY2l0aWVzXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZJTkRfUE9TVCA9IGdxbGBcclxuICBxdWVyeSBmaW5kUG9zdCgkdGl0bGU6IFN0cmluZyEpe1xyXG4gICAgZmluZFBvc3QodGl0bGU6ICR0aXRsZSl7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICB0ZWFtXHJcbiAgICAgIHRpbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgY29sb3JcclxuICAgICAgaW1hZ2VMaW5rc1xyXG4gICAgICByZWZlcmVuY2VMaW5rc1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGSU5EX1VTRVIgPSBncWxgXHJcbiAgcXVlcnkgZmluZFVzZXIoJHVzZXJuYW1lOiBTdHJpbmchKXtcclxuICAgIGZpbmRVc2VyKHVzZXJuYW1lOiAkdXNlcm5hbWUpIHtcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgcGFzc3dvcmRcclxuICAgICAgcmVmZXJlbmNlTGlua1xyXG4gICAgICBwcmltYXJ5U2tpbGxze1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgICBzZWNvbmRhcnlTa2lsbHN7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGludGVyZXN0c1xyXG4gICAgICBwb3N0c3tcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBub3RpZmljYXRpb25zIHtcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBzYXZlZFBvc3RzIHtcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfVVNFUlMgPSBncWxgXHJcbiAgcXVlcnl7XHJcbiAgICBhbGxVc2Vyc3tcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQUxMX1BPU1RTID0gZ3FsYFxyXG4gIHF1ZXJ5e1xyXG4gICAgYWxsUG9zdHN7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXJ7XHJcbiAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICBfaWRcclxuICAgICAgfVxyXG4gICAgICBza2lsbE5hbWVzXHJcbiAgICAgIHNraWxsQ2FwYWNpdGllc1xyXG4gICAgICBza2lsbEZpbGxzXHJcbiAgICAgIHRpbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgY29sb3JcclxuICAgICAgaW1hZ2VMaW5rc1xyXG4gICAgICByZWZlcmVuY2VMaW5rc1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9USVRMRVMgPSBncWxgXHJcbiAgcXVlcnl7XHJcbiAgICBhbGxQb3N0c3tcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnkgc2VhcmNoUG9zdHMoJGZpbHRlclN0cmluZzogU3RyaW5nISwgJHBvc3RJZHM6IFtTdHJpbmchXSwgJGV2ZW50UXVlcnk6IFN0cmluZyl7XHJcbiAgICBzZWFyY2hQb3N0cyhmaWx0ZXJTdHJpbmc6ICRmaWx0ZXJTdHJpbmcsIHBvc3RJZHM6ICRwb3N0SWRzLCBldmVudFF1ZXJ5OiAkZXZlbnRRdWVyeSl7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgX2lkXHJcbiAgICAgIH1cclxuICAgICAgc2tpbGxOYW1lc1xyXG4gICAgICBza2lsbENhcGFjaXRpZXNcclxuICAgICAgc2tpbGxGaWxsc1xyXG4gICAgICB0aW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbG9yXHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBFTkRJTkdfTk9USUZTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNlYXJjaEF3YWl0aW5nTm90aWZzKCR1c2VySWQ6IElEISkge1xyXG4gICAgc2VhcmNoQXdhaXRpbmdOb3RpZnModXNlcklkOiAkdXNlcklkKVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFFfQU5EX0FfTk9USUZTID0gZ3FsYFxyXG4gIHF1ZXJ5IHNlYXJjaEFuc3dlcmVkUVRvUG9zdCAoICR0aXRsZTogU3RyaW5nISApIHtcclxuICAgIHNlYXJjaEFuc3dlcmVkUVRvUG9zdCAoXHJcbiAgICAgIHRpdGxlOiAkdGl0bGVcclxuICAgICl7XHJcbiAgICAgIHVzZXJGcm9te1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgICAgdXNlclRvIHtcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHF1ZXN0aW9uXHJcbiAgICAgIGFuc3dlclxyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmAiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtSW5mb0NvbnRhaW5lclwiOiBcImlucHV0SGVhZGVyX2Zvcm1JbmZvQ29udGFpbmVyX195UWJrYVwiLFxuXHRcImluZm9IZWFkZXJDb250YWluZXJcIjogXCJpbnB1dEhlYWRlcl9pbmZvSGVhZGVyQ29udGFpbmVyX19oUS1Ja1wiLFxuXHRcImluZm9UaXRsZVRleHRcIjogXCJpbnB1dEhlYWRlcl9pbmZvVGl0bGVUZXh0X18zeGxqbFwiLFxuXHRcImluZm9JY29uQ29udGFpbmVyXCI6IFwiaW5wdXRIZWFkZXJfaW5mb0ljb25Db250YWluZXJfXzNNeFgzXCIsXG5cdFwiaW5mb0ljb25cIjogXCJpbnB1dEhlYWRlcl9pbmZvSWNvbl9fM2JUT3pcIixcblx0XCJpbmZvQ29udGVudFwiOiBcImlucHV0SGVhZGVyX2luZm9Db250ZW50X18xd09ud1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSFdNXCI6IFwibmF2QmFyX0hXTV9fRnU2Vk1cIixcblx0XCJTV01cIjogXCJuYXZCYXJfU1dNX18xNEhaN1wiLFxuXHRcImFsZXJ0QmFyQ29udGFpbmVyXCI6IFwibmF2QmFyX2FsZXJ0QmFyQ29udGFpbmVyX18yMVhWSlwiLFxuXHRcIm1lc3NhZ2VcIjogXCJuYXZCYXJfbWVzc2FnZV9fMjhJcXZcIixcblx0XCJjbG9zZVwiOiBcIm5hdkJhcl9jbG9zZV9fM1IwakZcIixcblx0XCJuYXZDb250YWluZXJcIjogXCJuYXZCYXJfbmF2Q29udGFpbmVyX18yNEFaYVwiLFxuXHRcIm5hdkJhckNvbnRhaW5lclwiOiBcIm5hdkJhcl9uYXZCYXJDb250YWluZXJfX244ZWVWXCIsXG5cdFwiaWNvbkNvbnRhaW5lclwiOiBcIm5hdkJhcl9pY29uQ29udGFpbmVyX18zQURNLVwiLFxuXHRcIm5hdkJhckljb25cIjogXCJuYXZCYXJfbmF2QmFySWNvbl9fMU9xYm5cIixcblx0XCJzZWFyY2hCYXJcIjogXCJuYXZCYXJfc2VhcmNoQmFyX19LaUlZMFwiLFxuXHRcIlNCU2VwYXJhdG9yXCI6IFwibmF2QmFyX1NCU2VwYXJhdG9yX18ybjlvTlwiLFxuXHRcImVudGVyU2VhcmNoXCI6IFwibmF2QmFyX2VudGVyU2VhcmNoX18zTXpNeFwiLFxuXHRcInNlYXJjaEhyXCI6IFwibmF2QmFyX3NlYXJjaEhyX18xel9PLVwiLFxuXHRcInNlYXJjaEljb25cIjogXCJuYXZCYXJfc2VhcmNoSWNvbl9fMUVVQkNcIixcblx0XCJzZWFyY2hpbmdGb3JcIjogXCJuYXZCYXJfc2VhcmNoaW5nRm9yX19RN212c1wiLFxuXHRcInNlYXJjaEhvdmVyXCI6IFwibmF2QmFyX3NlYXJjaEhvdmVyX192Sy1zclwiLFxuXHRcInNlYXJjaElucHV0XCI6IFwibmF2QmFyX3NlYXJjaElucHV0X18xS29YTFwiLFxuXHRcInNlYXJjaERlc2NyaXB0aW9uXCI6IFwibmF2QmFyX3NlYXJjaERlc2NyaXB0aW9uX18zdWU1NlwiLFxuXHRcInNlYXJjaFN1Z2dlc3Rpb25cIjogXCJuYXZCYXJfc2VhcmNoU3VnZ2VzdGlvbl9fT1NWcTdcIixcblx0XCJmaWx0ZXJERFwiOiBcIm5hdkJhcl9maWx0ZXJERF9fM3VsRkhcIixcblx0XCJmaWx0ZXJPcHRpb25cIjogXCJuYXZCYXJfZmlsdGVyT3B0aW9uX18zZU9FN1wiLFxuXHRcIm5hdkNvbnRhaW5lck1cIjogXCJuYXZCYXJfbmF2Q29udGFpbmVyTV9fMzRTN09cIixcblx0XCJuYXZCYXJDb250YWluZXJNXCI6IFwibmF2QmFyX25hdkJhckNvbnRhaW5lck1fXzJlTURwXCIsXG5cdFwiTkJCcmFuZFwiOiBcIm5hdkJhcl9OQkJyYW5kX18yZHU5UFwiLFxuXHRcIk5CTG9nb1wiOiBcIm5hdkJhcl9OQkxvZ29fXzIzWVBhXCIsXG5cdFwiTkJQcmltYXJ5VXRpbGl0aWVzXCI6IFwibmF2QmFyX05CUHJpbWFyeVV0aWxpdGllc19fclVEVU5cIixcblx0XCJQVVNlYXJjaFwiOiBcIm5hdkJhcl9QVVNlYXJjaF9fMTFyck5cIixcblx0XCJQVUhhbWJ1cmdlckNvbnRhaW5lclwiOiBcIm5hdkJhcl9QVUhhbWJ1cmdlckNvbnRhaW5lcl9fMzVYLUNcIixcblx0XCJQVUhhbWJ1cmdlclwiOiBcIm5hdkJhcl9QVUhhbWJ1cmdlcl9fMVpmdnFcIixcblx0XCJuYXZCYXJTdWJDb250YWluZXJcIjogXCJuYXZCYXJfbmF2QmFyU3ViQ29udGFpbmVyX18xTUFDS1wiLFxuXHRcIm5hdkJhclN1YkNvbnRhaW5lck1cIjogXCJuYXZCYXJfbmF2QmFyU3ViQ29udGFpbmVyTV9fMzJyclFcIixcblx0XCJsb2dpbkJhclwiOiBcIm5hdkJhcl9sb2dpbkJhcl9fM1VaRm5cIixcblx0XCJQTkNvbnRhaW5lclwiOiBcIm5hdkJhcl9QTkNvbnRhaW5lcl9fMnhyWWdcIixcblx0XCJub3RpZmljYXRpb25JdGVtXCI6IFwibmF2QmFyX25vdGlmaWNhdGlvbkl0ZW1fXzJkZ0VOXCIsXG5cdFwiUE5CdWJibGVcIjogXCJuYXZCYXJfUE5CdWJibGVfXzJEb1UyXCIsXG5cdFwiUE5CdWJibGVIYW1idXJnZXJcIjogXCJuYXZCYXJfUE5CdWJibGVIYW1idXJnZXJfXzFDVjk4XCIsXG5cdFwibWVudUl0ZW1cIjogXCJuYXZCYXJfbWVudUl0ZW1fX1dTSG1UXCIsXG5cdFwibWVudUl0ZW1TZWxlY3RlZFwiOiBcIm5hdkJhcl9tZW51SXRlbVNlbGVjdGVkX19TVGtuNlwiLFxuXHRcIm1lbnVJdGVtTG9nb3V0XCI6IFwibmF2QmFyX21lbnVJdGVtTG9nb3V0X18yUVQtZlwiLFxuXHRcIm1lbnVNb2RhbENvbnRhaW5lclwiOiBcIm5hdkJhcl9tZW51TW9kYWxDb250YWluZXJfXzM4VlVMXCIsXG5cdFwibW9yZUxpbmtcIjogXCJuYXZCYXJfbW9yZUxpbmtfXzJiM2ZhXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJVUENvbnRhaW5lclwiOiBcInVzZXJQYWdlX1VQQ29udGFpbmVyX18zUl84TlwiLFxuXHRcIlVQUG9zdHNDb250YWluZXJcIjogXCJ1c2VyUGFnZV9VUFBvc3RzQ29udGFpbmVyX19rYVlidlwiLFxuXHRcIlVQVGl0bGVDb250YWluZXJcIjogXCJ1c2VyUGFnZV9VUFRpdGxlQ29udGFpbmVyX19qMGNzaVwiLFxuXHRcIlVQVGl0bGVJY29uXCI6IFwidXNlclBhZ2VfVVBUaXRsZUljb25fXzMtOGRvXCIsXG5cdFwiVVBUaXRsZVwiOiBcInVzZXJQYWdlX1VQVGl0bGVfXzJIT1pzXCIsXG5cdFwiVVBSTENvbnRhaW5lclwiOiBcInVzZXJQYWdlX1VQUkxDb250YWluZXJfXzNyVzV4XCIsXG5cdFwiVVBSTFwiOiBcInVzZXJQYWdlX1VQUkxfXzF2SWVyXCIsXG5cdFwiVVBSTEljb25Db250YWluZXJcIjogXCJ1c2VyUGFnZV9VUFJMSWNvbkNvbnRhaW5lcl9fM3A1SjlcIixcblx0XCJVUFJMaWNvblwiOiBcInVzZXJQYWdlX1VQUkxpY29uX18yclpIalwiLFxuXHRcIlVQUkxMaW5rXCI6IFwidXNlclBhZ2VfVVBSTExpbmtfXzEtNVcyXCIsXG5cdFwidGVzdFwiOiBcInVzZXJQYWdlX3Rlc3RfXzFyTnBsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0V3JhcHBlclwiOiBcInBvc3RfcG9zdFdyYXBwZXJfX3FOeXlRXCIsXG5cdFwicG9zdEhvdmVyXCI6IFwicG9zdF9wb3N0SG92ZXJfX1Vpam5QXCIsXG5cdFwicG9zdENvbG9ySW5kaWNhdG9yXCI6IFwicG9zdF9wb3N0Q29sb3JJbmRpY2F0b3JfXzNyNnRoXCIsXG5cdFwicG9zdENvbnRhaW5lclwiOiBcInBvc3RfcG9zdENvbnRhaW5lcl9fMlc2XzBcIixcblx0XCJwb3N0SGVhZGVyV3JhcHBlclwiOiBcInBvc3RfcG9zdEhlYWRlcldyYXBwZXJfXzFsR0wtXCIsXG5cdFwicG9zdEhlYWRlclN0cmV0Y2hcIjogXCJwb3N0X3Bvc3RIZWFkZXJTdHJldGNoX18xbTB5QVwiLFxuXHRcInBvc3RIZWFkZXJcIjogXCJwb3N0X3Bvc3RIZWFkZXJfXzNXcmFGXCIsXG5cdFwiUEhVc2VyU3RyZXRjaFwiOiBcInBvc3RfUEhVc2VyU3RyZXRjaF9fMWl1VzVcIixcblx0XCJQSFVzZXJcIjogXCJwb3N0X1BIVXNlcl9fRkw3T2NcIixcblx0XCJQSFVJY29uXCI6IFwicG9zdF9QSFVJY29uX18xV0NnN1wiLFxuXHRcIlBIRGF0ZVwiOiBcInBvc3RfUEhEYXRlX18ydFFuX1wiLFxuXHRcInBvc3RUaXRsZVwiOiBcInBvc3RfcG9zdFRpdGxlX18xMlJDRVwiLFxuXHRcInBvc3REZXNjcmlwdGlvblwiOiBcInBvc3RfcG9zdERlc2NyaXB0aW9uX18zVkNaMVwiLFxuXHRcInBvc3RTa2lsbHNDb250YWluZXJcIjogXCJwb3N0X3Bvc3RTa2lsbHNDb250YWluZXJfXzMzanR0XCIsXG5cdFwicG9zdFNraWxsSW5zQ29udGFpbmVyXCI6IFwicG9zdF9wb3N0U2tpbGxJbnNDb250YWluZXJfXzNLaUJEXCIsXG5cdFwiUFNJTmFtZVwiOiBcInBvc3RfUFNJTmFtZV9fbk9DNThcIixcblx0XCJQU0lTdGF0c1wiOiBcInBvc3RfUFNJU3RhdHNfXzM2R0RJXCIsXG5cdFwicG9zdFV0aWxpdGllc0NvbnRhaW5lclwiOiBcInBvc3RfcG9zdFV0aWxpdGllc0NvbnRhaW5lcl9fMTFjaV9cIixcblx0XCJQVUljb25Db250YWluZXJcIjogXCJwb3N0X1BVSWNvbkNvbnRhaW5lcl9fMVJvT1ZcIixcblx0XCJQVUljb25cIjogXCJwb3N0X1BVSWNvbl9fMkRYZjNcIixcblx0XCJwb3N0V3JhcHBlclNtXCI6IFwicG9zdF9wb3N0V3JhcHBlclNtX18yeWZUN1wiLFxuXHRcInBvc3RTbVJlbW92ZVwiOiBcInBvc3RfcG9zdFNtUmVtb3ZlX18xVlNCcFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXNlcldyYXBwZXJcIjogXCJ1c2VyX3VzZXJXcmFwcGVyX18zSzN6aFwiLFxuXHRcInVzZXJDb250YWluZXJcIjogXCJ1c2VyX3VzZXJDb250YWluZXJfXzFyTG5JXCIsXG5cdFwidXNlck9wdGlvbnNTcGxpdHRlclwiOiBcInVzZXJfdXNlck9wdGlvbnNTcGxpdHRlcl9fMnJxWlpcIixcblx0XCJ1c2VySWNvbkNvbnRhaW5lclwiOiBcInVzZXJfdXNlckljb25Db250YWluZXJfXzIzNGlqXCIsXG5cdFwiU1VIXCI6IFwidXNlcl9TVUhfXzFNcmUwXCIsXG5cdFwiVUlDSFwiOiBcInVzZXJfVUlDSF9fM2pSSXhcIixcblx0XCJMR0RVc2VyQ29udGFpbmVyXCI6IFwidXNlcl9MR0RVc2VyQ29udGFpbmVyX18zd2NhbFwiLFxuXHRcInVzZXJCYW5uZXJcIjogXCJ1c2VyX3VzZXJCYW5uZXJfXzFBeHdsXCIsXG5cdFwidXNlclVzZXJuYW1lQ29udGFpbmVyXCI6IFwidXNlcl91c2VyVXNlcm5hbWVDb250YWluZXJfXzFoQThIXCIsXG5cdFwidXNlclVzZXJuYW1lXCI6IFwidXNlcl91c2VyVXNlcm5hbWVfXzlwcmluXCIsXG5cdFwidXNlclVzZXJuYW1lSWNvblwiOiBcInVzZXJfdXNlclVzZXJuYW1lSWNvbl9fM084cXRcIixcblx0XCJQTkNvbnRhaW5lclwiOiBcInVzZXJfUE5Db250YWluZXJfXzIyTHlUXCIsXG5cdFwiUE5CdWJibGVcIjogXCJ1c2VyX1BOQnViYmxlX19KVlVPQlwiLFxuXHRcInVzZXJVdGlsaXR5T3B0aW9uXCI6IFwidXNlcl91c2VyVXRpbGl0eU9wdGlvbl9fMVZ1Z0JcIixcblx0XCJVVU9TZWxlY3RlZFwiOiBcInVzZXJfVVVPU2VsZWN0ZWRfXzN2dlFrXCIsXG5cdFwiVVVBZGRQb3N0XCI6IFwidXNlcl9VVUFkZFBvc3RfXzIzQXQ3XCIsXG5cdFwiVVVBUEljb25cIjogXCJ1c2VyX1VVQVBJY29uX18zX1M4aFwiLFxuXHRcIlVVQVBUZXh0XCI6IFwidXNlcl9VVUFQVGV4dF9fMWIzRjJcIixcblx0XCJVVUljb25cIjogXCJ1c2VyX1VVSWNvbl9feDFJQnJcIixcblx0XCJVVUxvZ291dFwiOiBcInVzZXJfVVVMb2dvdXRfXzJfRGJIXCIsXG5cdFwiVVVMb2dvdXRJY29uXCI6IFwidXNlcl9VVUxvZ291dEljb25fXzJHUENFXCIsXG5cdFwidXNlck5vdGlmaWNhdGlvbkJ1YmJsZVwiOiBcInVzZXJfdXNlck5vdGlmaWNhdGlvbkJ1YmJsZV9fM2gxTldcIixcblx0XCJVVVV0aWxpdGllc1NwbGl0dGVyXCI6IFwidXNlcl9VVVV0aWxpdGllc1NwbGl0dGVyX18zWktCUFwiLFxuXHRcIlVVQ29udGVudENvbnRhaW5lclwiOiBcInVzZXJfVVVDb250ZW50Q29udGFpbmVyX18xR0tCX1wiLFxuXHRcIk5MVXNlckNvbnRhaW5lclwiOiBcInVzZXJfTkxVc2VyQ29udGFpbmVyX18zWjVMd1wiLFxuXHRcInVzZXJPcHRpb25Db250YWluZXJcIjogXCJ1c2VyX3VzZXJPcHRpb25Db250YWluZXJfXzMzOFJtXCIsXG5cdFwidXNlck9wdGlvbnNcIjogXCJ1c2VyX3VzZXJPcHRpb25zX19rdGVzZ1wiLFxuXHRcInVzZXJJY29uXCI6IFwidXNlcl91c2VySWNvbl9fMjB0NTVcIixcblx0XCJ1c2VyRm9ybUNvbnRhaW5lclwiOiBcInVzZXJfdXNlckZvcm1Db250YWluZXJfX0FoSmx1XCIsXG5cdFwidXNlckZvcm1cIjogXCJ1c2VyX3VzZXJGb3JtX19yeENkUlwiLFxuXHRcIlVGTGFiZWxcIjogXCJ1c2VyX1VGTGFiZWxfXzJ0XzF1XCIsXG5cdFwiVUZJbnB1dFwiOiBcInVzZXJfVUZJbnB1dF9fM3dPVTZcIixcblx0XCJVRlN1Ym1pdFwiOiBcInVzZXJfVUZTdWJtaXRfX3RTdkxkXCIsXG5cdFwibm90aWZpY2F0aW9uQ29udGFpbmVyXCI6IFwidXNlcl9ub3RpZmljYXRpb25Db250YWluZXJfXzJ4eU1tXCIsXG5cdFwibm90aWZpY2F0aW9uSGVhZGVyXCI6IFwidXNlcl9ub3RpZmljYXRpb25IZWFkZXJfXzFxOE4tXCIsXG5cdFwiTlVzZXJDb250YWluZXJcIjogXCJ1c2VyX05Vc2VyQ29udGFpbmVyX18zd0ZyLVwiLFxuXHRcIk5Vc2VySWNvblwiOiBcInVzZXJfTlVzZXJJY29uX19aRU4zdFwiLFxuXHRcIk5Vc2VyXCI6IFwidXNlcl9OVXNlcl9fMzkyTlVcIixcblx0XCJOVXNlckxhYmVsXCI6IFwidXNlcl9OVXNlckxhYmVsX18zaGFtZlwiLFxuXHRcIk5Ta2lsbENvbnRyaWJ1dGlvbnNcIjogXCJ1c2VyX05Ta2lsbENvbnRyaWJ1dGlvbnNfX2hoWUQtXCIsXG5cdFwiTlByb3Bvc2VkSGVscFwiOiBcInVzZXJfTlByb3Bvc2VkSGVscF9fM2hGNlFcIixcblx0XCJOU2tpbGxJbnNcIjogXCJ1c2VyX05Ta2lsbEluc19fMmE5U1VcIixcblx0XCJOU2tpbGxQcm9wXCI6IFwidXNlcl9OU2tpbGxQcm9wX18yYVJSMVwiLFxuXHRcIm5vdGlmaWNhdGlvbkNob2ljZVwiOiBcInVzZXJfbm90aWZpY2F0aW9uQ2hvaWNlX19semRWWFwiLFxuXHRcIm5vdGlmaWNhdGlvbk9wdGlvblwiOiBcInVzZXJfbm90aWZpY2F0aW9uT3B0aW9uX18zdzdYSFwiLFxuXHRcIm5vdGlmaWNhdGlvbkVtYWlsXCI6IFwidXNlcl9ub3RpZmljYXRpb25FbWFpbF9fZ3JMX1lcIixcblx0XCJOTWVzc2FnZVwiOiBcInVzZXJfTk1lc3NhZ2VfXzJOMjljXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyVXRpbEluZm9cIjogXCJ1c2VyVXRpbGl0aWVzX3VzZXJVdGlsSW5mb19fMS1XMWJcIixcblx0XCJzaW1wbGVQb3N0QmFubmVyXCI6IFwidXNlclV0aWxpdGllc19zaW1wbGVQb3N0QmFubmVyX18zNTZsZVwiLFxuXHRcInVzZXJVdGlsTm90aWZcIjogXCJ1c2VyVXRpbGl0aWVzX3VzZXJVdGlsTm90aWZfX3hSMjVVXCIsXG5cdFwibm90aWZpY2F0aW9uQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25Db250YWluZXJfXzVzbnVXXCIsXG5cdFwibm90aWZDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmQ29udGFpbmVyX18yRGdlZVwiLFxuXHRcIm5vdGlmU2VuZGVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZlNlbmRlcl9fMmVSMkdcIixcblx0XCJub3RpZk1lc3NhZ2VcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmTWVzc2FnZV9fMWV6X1hcIixcblx0XCJub3RpZkFjY2VwdGVkXCI6IFwidXNlclV0aWxpdGllc19ub3RpZkFjY2VwdGVkX18yOGw5ZVwiLFxuXHRcIm5vdGlmRGVjbGluZWRcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmRGVjbGluZWRfXy1na3dHXCIsXG5cdFwibm90aWZpY2F0aW9uT3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25PcHRpb25fXzNucmFKXCIsXG5cdFwic3RhbmRhcmRIb3ZlclwiOiBcInVzZXJVdGlsaXRpZXNfc3RhbmRhcmRIb3Zlcl9fMWNtQmtcIixcblx0XCJOQW5zd2VySW5wdXRcIjogXCJ1c2VyVXRpbGl0aWVzX05BbnN3ZXJJbnB1dF9fMmhuZlRcIixcblx0XCJkZWNpZGVcIjogXCJ1c2VyVXRpbGl0aWVzX2RlY2lkZV9fVklER2FcIixcblx0XCJvcHRpb25cIjogXCJ1c2VyVXRpbGl0aWVzX29wdGlvbl9fQVNMLUtcIixcblx0XCJlbWFpbFwiOiBcInVzZXJVdGlsaXRpZXNfZW1haWxfXzJ1LXZlXCIsXG5cdFwic2tpbGxsXCI6IFwidXNlclV0aWxpdGllc19za2lsbGxfXzFJTHhEXCIsXG5cdFwibm90aWZGaWx0ZXJDb250YWluZXJcIjogXCJ1c2VyVXRpbGl0aWVzX25vdGlmRmlsdGVyQ29udGFpbmVyX18xVXJ5NVwiLFxuXHRcIk5GQ3JlYXRvckNvbnRhaW5lclwiOiBcInVzZXJVdGlsaXRpZXNfTkZDcmVhdG9yQ29udGFpbmVyX18yYzRTNlwiLFxuXHRcIm1lc3NhZ2VzT3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19tZXNzYWdlc09wdGlvbl9fZVJrNVFcIixcblx0XCJORkxhYmVsXCI6IFwidXNlclV0aWxpdGllc19ORkxhYmVsX18zM1ZJRVwiLFxuXHRcIk5GT3B0aW9uQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ORk9wdGlvbkNvbnRhaW5lcl9fMjk3NktcIixcblx0XCJORk9wdGlvblwiOiBcInVzZXJVdGlsaXRpZXNfTkZPcHRpb25fXzJsXzdDXCIsXG5cdFwiTkZTcGxpdHRlclwiOiBcInVzZXJVdGlsaXRpZXNfTkZTcGxpdHRlcl9fMVVrQW9cIixcblx0XCJORkRET3B0aW9uXCI6IFwidXNlclV0aWxpdGllc19ORkRET3B0aW9uX18zWEhXSlwiLFxuXHRcIm5vdGlmaWNhdGlvbkNMQ29udGFpbmVyXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25DTENvbnRhaW5lcl9fbFVTdkFcIixcblx0XCJub3RpZmljYXRpb25TdWNlc3NJY29uXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25TdWNlc3NJY29uX18xY3ZxclwiLFxuXHRcIm5vdGlmaWNhdGlvbkNsXCI6IFwidXNlclV0aWxpdGllc19ub3RpZmljYXRpb25DbF9fMi1fM05cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWNvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=