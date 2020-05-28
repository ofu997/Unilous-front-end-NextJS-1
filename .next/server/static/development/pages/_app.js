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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/*! exports provided: apolloClient, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apolloClient", function() { return apolloClient; });
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import ApolloClient, { HttpLink, InMemoryCache } from "apollo-boost"




 // https://unilous-back-end-dev.herokuapp.com/graphql
// https://projectu-back-end-2020.herokuapp.com/graphql
// https://unilous-back-end-nextjs.herokuapp.com/graphql

const httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["createHttpLink"])({
  uri: 'https://unilous-back-end-nextjs.herokuapp.com/graphql'
});
const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])((_, {
  headers
}) => {
  let token = null;

  if (false) {}

  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      // authorization: token ? `Unilous*2000 ${token}` : null,
      authorization: token ? `berySecret ${token}` : null
    })
  };
});
const apolloClient = new apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  link: authLink.concat(httpLink),
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]()
}); // const apolloClient = new ApolloClient({
//   uri: 'https://projectu-back-end-2020.herokuapp.com/graphql',
//   cache: new InMemoryCache(),
//   ssrMode: true
// })

/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_4__["withApollo"])(apolloClient));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/base.css */ "./styles/base.css");
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_base_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_notifs_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/notifs.css */ "./styles/notifs.css");
/* harmony import */ var _styles_notifs_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_notifs_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/oliver/Documents/projects/UnilousFE/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const MyApp = ({
  Component,
  pageProps,
  store
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  if (Object.keys(pageProps).length > 0) {
    return {
      pageProps
    };
  } else {
    return {};
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(_redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_5__["default"])({
  ssr: true
}))(MyApp));

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

/***/ "./redux/reducers/eventSearch.js":
/*!***************************************!*\
  !*** ./redux/reducers/eventSearch.js ***!
  \***************************************/
/*! exports provided: setEventSearch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEventSearch", function() { return setEventSearch; });
const setEventSearch = event => {
  return async dispatch => {
    dispatch({
      type: 'SET_EVENT',
      data: event
    });
  };
};

const eventSearch = (state = null, action) => {
  switch (action.type) {
    case 'SET_EVENT':
      return action.data;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (eventSearch);

/***/ }),

/***/ "./redux/reducers/posts.js":
/*!*********************************!*\
  !*** ./redux/reducers/posts.js ***!
  \*********************************/
/*! exports provided: initializePosts, addPosts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializePosts", function() { return initializePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPosts", function() { return addPosts; });
const initializePosts = posts => {
  return async dispatch => {
    dispatch({
      type: 'INIT_POSTS',
      data: posts
    });
  };
};
const addPosts = posts => {
  return async dispatch => {
    dispatch({
      type: 'ADD_POSTS',
      data: posts
    });
  };
};

const posts = (state = null, action) => {
  switch (action.type) {
    case 'INIT_POSTS':
      return action.data;

    case 'ADD_POSTS':
      if (state === null) {
        return action.data;
      }

      return state.concat(action.data);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (posts);

/***/ }),

/***/ "./redux/reducers/stretchLayout.js":
/*!*****************************************!*\
  !*** ./redux/reducers/stretchLayout.js ***!
  \*****************************************/
/*! exports provided: toggleStretchLayout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleStretchLayout", function() { return toggleStretchLayout; });
const toggleStretchLayout = () => {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_SL'
    });
  };
};

const stretchLayout = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_SL':
      return !state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (stretchLayout);

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

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/token */ "./redux/reducers/token.js");
/* harmony import */ var _reducers_currentUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/currentUser */ "./redux/reducers/currentUser.js");
/* harmony import */ var _reducers_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/posts */ "./redux/reducers/posts.js");
/* harmony import */ var _reducers_alertNotif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/alertNotif */ "./redux/reducers/alertNotif.js");
/* harmony import */ var _reducers_stretchLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/stretchLayout */ "./redux/reducers/stretchLayout.js");
/* harmony import */ var _reducers_eventSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/eventSearch */ "./redux/reducers/eventSearch.js");









const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  token: _reducers_token__WEBPACK_IMPORTED_MODULE_2__["default"],
  currentUser: _reducers_currentUser__WEBPACK_IMPORTED_MODULE_3__["default"],
  posts: _reducers_posts__WEBPACK_IMPORTED_MODULE_4__["default"],
  alertNotif: _reducers_alertNotif__WEBPACK_IMPORTED_MODULE_5__["default"],
  stretchLayout: _reducers_stretchLayout__WEBPACK_IMPORTED_MODULE_6__["default"],
  eventSearch: _reducers_eventSearch__WEBPACK_IMPORTED_MODULE_7__["default"]
});

const store = () => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a]));

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./styles/base.css":
/*!*************************!*\
  !*** ./styles/base.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/notifs.css":
/*!***************************!*\
  !*** ./styles/notifs.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0Tm90aWYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY3VycmVudFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvZXZlbnRTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcG9zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvc3RyZXRjaExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy90b2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rLWNvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hcG9sbG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbImh0dHBMaW5rIiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJfIiwiaGVhZGVycyIsInRva2VuIiwiYXV0aG9yaXphdGlvbiIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJjb25jYXQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ3aXRoQXBvbGxvIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb21wb3NlIiwid2l0aFJlZHV4IiwiaW5pdFN0b3JlIiwic3NyIiwic2V0QWxlcnQiLCJpbmZvIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZGF0YSIsInJlc2V0QWxlcnQiLCJhbGVydE5vdGlmIiwic3RhdGUiLCJjb2xvciIsInRleHRDb2xvciIsIm1lc3NhZ2UiLCJhY3Rpb24iLCJzZXRDdXJyZW50VXNlciIsInVzZXIiLCJzZXRDdXJyZW50VXNlclBvc3RzIiwicG9zdHMiLCJzZXRDdXJyZW50VXNlclNQIiwic2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9ucyIsInNldFBlbmRpbmdOb3RpZmljYXRpb25zIiwiYW10IiwiY3VycmVudFVzZXIiLCJwZW5kaW5nTm90aWZpY2F0aW9ucyIsInNhdmVkUG9zdHMiLCJzZXRFdmVudFNlYXJjaCIsImV2ZW50IiwiZXZlbnRTZWFyY2giLCJpbml0aWFsaXplUG9zdHMiLCJhZGRQb3N0cyIsInRvZ2dsZVN0cmV0Y2hMYXlvdXQiLCJzdHJldGNoTGF5b3V0Iiwic2V0VG9rZW4iLCJjbGVhclRva2VuIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJyZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVN0b3JlIiwidGh1bmtNaWRkbGV3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Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSdcclxuLy8gaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIlxyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50J1xyXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJ1xyXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIm5leHQtYXBvbGxvXCJcclxuLy8gaHR0cHM6Ly91bmlsb3VzLWJhY2stZW5kLWRldi5oZXJva3VhcHAuY29tL2dyYXBocWxcclxuLy8gaHR0cHM6Ly9wcm9qZWN0dS1iYWNrLWVuZC0yMDIwLmhlcm9rdWFwcC5jb20vZ3JhcGhxbFxyXG4vLyBodHRwczovL3VuaWxvdXMtYmFjay1lbmQtbmV4dGpzLmhlcm9rdWFwcC5jb20vZ3JhcGhxbFxyXG5cclxuY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgdXJpOiAnaHR0cHM6Ly91bmlsb3VzLWJhY2stZW5kLW5leHRqcy5oZXJva3VhcHAuY29tL2dyYXBocWwnLFxyXG59KVxyXG5cclxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IG51bGxcclxuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgICAgLy8gYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgVW5pbG91cyoyMDAwICR7dG9rZW59YCA6IG51bGwsXHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBiZXJ5U2VjcmV0ICR7dG9rZW59YCA6IG51bGwsXHJcbiAgICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcclxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxufSlcclxuXHJcbi8vIGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4vLyAgIHVyaTogJ2h0dHBzOi8vcHJvamVjdHUtYmFjay1lbmQtMjAyMC5oZXJva3VhcHAuY29tL2dyYXBocWwnLFxyXG4vLyAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4vLyAgIHNzck1vZGU6IHRydWVcclxuLy8gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oYXBvbGxvQ2xpZW50KVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQgaW5pdFN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJ1xyXG5pbXBvcnQge2NvbXBvc2V9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgd2l0aEFwb2xsbywge2Fwb2xsb0NsaWVudH0gZnJvbSAnLi4vbGliL2Fwb2xsbydcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiXHJcbmltcG9ydCAnLi4vc3R5bGVzL2Jhc2UuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9ub3RpZnMuY3NzJ1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtDb21wb25lbnQsIGN0eH0pID0+IHtcclxuICBjb25zdCBwYWdlUHJvcHMgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge307XHJcbiAgaWYgKE9iamVjdC5rZXlzKHBhZ2VQcm9wcykubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHtwYWdlUHJvcHN9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSh3aXRoUmVkdXgoaW5pdFN0b3JlKSwgd2l0aEFwb2xsbyh7c3NyOiB0cnVlfSkpKE15QXBwKVxyXG4iLCJleHBvcnQgY29uc3Qgc2V0QWxlcnQgPSAoaW5mbykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQUxFUlQnLFxyXG4gICAgICAgICAgICBkYXRhOiBpbmZvXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0QWxlcnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1JFU0VUX0FMRVJUJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFsZXJ0Tm90aWYgPSAoc3RhdGUgPSB7Y29sb3I6IG51bGwsIHRleHRDb2xvcjogbnVsbCwgbWVzc2FnZTogbnVsbH0sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9BTEVSVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdSRVNFVF9BTEVSVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4ge2NvbG9yOiBudWxsLCB0ZXh0Q29sb3I6IG51bGwsIG1lc3NhZ2U6IG51bGx9XHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGVydE5vdGlmIiwiZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsXHJcbiAgICAgICAgICAgIGRhdGE6IHVzZXJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXJQb3N0cyA9IChwb3N0cykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfQ1VfUE9TVFMnLFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0c1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlclNQID0gKHBvc3RzKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9TUCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3RzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyA9IChub3RpZmljYXRpb25zKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9DVV9OT1RJRklDQVRJT05TJyxcclxuICAgICAgICAgICAgZGF0YTogbm90aWZpY2F0aW9uc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQZW5kaW5nTm90aWZpY2F0aW9ucyA9IChhbXQpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0NVX1BOJyxcclxuICAgICAgICAgICAgZGF0YTogYW10XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY3VycmVudFVzZXIgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRVRfQ1VfUE4nOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwZW5kaW5nTm90aWZpY2F0aW9uczogYWN0aW9uLmRhdGF9XHJcbiAgICAgICAgY2FzZSAnU0VUX0NVUlJFTlRfVVNFUicgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdTRVRfQ1VfUE9TVFMnIDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcG9zdHM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9TUCcgOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNhdmVkUG9zdHM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIGNhc2UgJ1NFVF9DVV9OT1RJRklDQVRJT05TJyA6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5vdGlmaWNhdGlvbnM6IGFjdGlvbi5kYXRhfVxyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFVzZXIiLCJleHBvcnQgY29uc3Qgc2V0RXZlbnRTZWFyY2ggPSAoZXZlbnQpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX0VWRU5UJyxcclxuICAgICAgICAgICAgZGF0YTogZXZlbnRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBldmVudFNlYXJjaCA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9FVkVOVCcgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50U2VhcmNoIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxpemVQb3N0cyA9IChwb3N0cykgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdJTklUX1BPU1RTJyxcclxuICAgICAgICAgICAgZGF0YTogcG9zdHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdHMgPSAocG9zdHMpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnQUREX1BPU1RTJyxcclxuICAgICAgICAgICAgZGF0YTogcG9zdHNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwb3N0cyA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0lOSVRfUE9TVFMnOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdBRERfUE9TVFMnOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jb25jYXQoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzIiwiZXhwb3J0IGNvbnN0IHRvZ2dsZVN0cmV0Y2hMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1RPR0dMRV9TTCcsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3RyZXRjaExheW91dCA9IChzdGF0ZSA9IHRydWUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9TTCcgOlxyXG4gICAgICAgICAgICByZXR1cm4gIXN0YXRlXHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHJldGNoTGF5b3V0IiwiZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHRva2VuKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdTRVRfVE9LRU4nLFxyXG4gICAgICAgIGRhdGE6IHRva2VuXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJUb2tlbiA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0NMRUFSX1RPS0VOJ1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgdG9rZW4gPSAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVF9UT0tFTicgOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICAgICAgICBjYXNlICdDTEVBUl9UT0tFTicgOlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2tlbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgdG9rZW4gZnJvbSAnLi9yZWR1Y2Vycy90b2tlbidcclxuaW1wb3J0IGN1cnJlbnRVc2VyIGZyb20gJy4vcmVkdWNlcnMvY3VycmVudFVzZXInXHJcbmltcG9ydCBwb3N0cyBmcm9tICcuL3JlZHVjZXJzL3Bvc3RzJ1xyXG5pbXBvcnQgYWxlcnROb3RpZiBmcm9tICcuL3JlZHVjZXJzL2FsZXJ0Tm90aWYnXHJcbmltcG9ydCBzdHJldGNoTGF5b3V0IGZyb20gJy4vcmVkdWNlcnMvc3RyZXRjaExheW91dCdcclxuaW1wb3J0IGV2ZW50U2VhcmNoIGZyb20gJy4vcmVkdWNlcnMvZXZlbnRTZWFyY2gnXHJcblxyXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IG1pZGRsZXdhcmUgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKVxyXG4gICAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXHJcbiAgfVxyXG5cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgdG9rZW4sXHJcbiAgICBjdXJyZW50VXNlcixcclxuICAgIHBvc3RzLFxyXG4gICAgYWxlcnROb3RpZixcclxuICAgIHN0cmV0Y2hMYXlvdXQsXHJcbiAgICBldmVudFNlYXJjaCxcclxufSlcclxuXHJcbmNvbnN0IHN0b3JlID0gKCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmVdKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9