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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Ik6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CREATE_POST; });
/* unused harmony export DELETE_POST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MAKE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCEPT_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DECLINE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SAVE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REMOVE_SAVED_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ASK_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ANSWER_QUESTION; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YvTO");
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

/***/ "/WwN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0J1E");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VFWX");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SkillSugg = props => {
  const splitQuery = props.query.toLowerCase().split(' ');
  const lastWord = splitQuery.slice(-1) === '' ? splitQuery.slice(-2, -1)[0] : splitQuery.slice(-1)[0];
  const {
    0: skills,
    1: setSkills
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const skillSearchQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_3__[/* SKILL_SEARCH */ "h"], {
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
        key: `SS${s.name}`
      }, s.name));
    }

    return __jsx("div", {
      style: {
        gridColumn: '1/3'
      }
    }, __jsx("div", {
      style: {
        height: '5vh'
      }
    }), __jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));
  };

  const suggestionsStyle = skills.length !== 0 && props.query !== '' && lastWord !== '' ? {
    display: 'block'
  } : {
    display: 'none'
  };
  return __jsx("div", {
    className: "search-suggestions-container"
  }, __jsx("div", {
    className: "search-suggestions",
    style: suggestionsStyle
  }, suggestionsToShow()));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(SkillSugg));

/***/ }),

/***/ "/jkW":
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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0J1E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LIST_OF_NOTIFICATIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SKILL_SEARCH; });
/* unused harmony export ME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LIST_OF_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FIND_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FIND_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_POST_TITLES; });
/* unused harmony export SEARCH_POSTS */
/* unused harmony export PENDING_NOTIFS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Q_AND_A_NOTIFS; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YvTO");
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

/***/ "0zQs":
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "2E1m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setEventSearch; });
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

/* harmony default export */ __webpack_exports__["a"] = (eventSearch);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5PY3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearToken; });
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

/* harmony default export */ __webpack_exports__["b"] = (token);

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./redux/reducers/currentUser.js
var currentUser = __webpack_require__("mIJh");

// EXTERNAL MODULE: ./redux/reducers/token.js
var token = __webpack_require__("5PY3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./styles/user/user.module.css
var user_module = __webpack_require__("fYlc");
var user_module_default = /*#__PURE__*/__webpack_require__.n(user_module);

// EXTERNAL MODULE: ./src/schemas/mutations.js
var mutations = __webpack_require__("+Ik6");

// EXTERNAL MODULE: ./src/functions/functions.js
var functions = __webpack_require__("BkJp");

// EXTERNAL MODULE: ./components/text-field/InputHeader.js
var InputHeader = __webpack_require__("KPOt");

// EXTERNAL MODULE: ./redux/reducers/alertNotif.js
var alertNotif = __webpack_require__("iD+C");

// CONCATENATED MODULE: ./components/user/form/SignIn.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const SignIn = props => {
  const username = Object(functions["c" /* useField */])('text');
  const password = Object(functions["c" /* useField */])('password');

  const onError = e => {
    let cleanedMessage = e.message;
    console.log(cleanedMessage);
    cleanedMessage = cleanedMessage.split(':');
    cleanedMessage = cleanedMessage.slice(1, cleanedMessage.length).join('$:');
    Object(functions["b" /* triggerAlert */])('warning', cleanedMessage, props.setAlert, props.resetAlert);
  };

  const [signInMutation] = Object(react_hooks_["useMutation"])(mutations["g" /* LOGIN */], {
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
    className: user_module_default.a.userFormContainer,
    style: bgStyle
  }, __jsx("form", {
    className: user_module_default.a.userForm,
    onSubmit: e => handleSumbit(e)
  }, __jsx(InputHeader["a" /* default */], {
    inputFor: "SI-username",
    info: false,
    title: "username",
    color: "dark"
  }), __jsx("input", _extends({
    className: user_module_default.a.UFInput
  }, username.fields, {
    id: "SI-username"
  })), __jsx(InputHeader["a" /* default */], {
    inputFor: "SI-password",
    info: false,
    title: "password",
    color: "dark"
  }), __jsx("input", _extends({
    className: user_module_default.a.UFInput
  }, password.fields, {
    id: "SI-password"
  })), __jsx("button", {
    className: user_module_default.a.UFSubmit,
    type: "submit"
  }, __jsx("h3", null, "sign in"))));
}; // const mapStateToProps = (state) => {
// 	return {
// 	}
// }


/* harmony default export */ var form_SignIn = (Object(external_react_redux_["connect"])(null, {
  setToken: token["c" /* setToken */],
  setAlert: alertNotif["c" /* setAlert */],
  resetAlert: alertNotif["b" /* resetAlert */]
})(SignIn));
// CONCATENATED MODULE: ./components/user/form/Register.js
var Register_jsx = external_react_default.a.createElement;

function Register_extends() { Register_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Register_extends.apply(this, arguments); }










const Register = props => {
  const username = Object(functions["c" /* useField */])('text');
  const password = Object(functions["c" /* useField */])('password');
  const rePassword = Object(functions["c" /* useField */])('password');
  const email = Object(functions["c" /* useField */])('email');
  const referenceLink = Object(functions["c" /* useField */])('url');

  const onError = e => {
    let cleanedMessage = e.message;
    console.log(referenceLink.fields.value);
    console.log(e.message);
    if (cleanedMessage.includes('username')) cleanedMessage = `username$: ${username.fields.value} is already being used`;
    if (cleanedMessage.includes('referenceLink')) cleanedMessage = `reference link$: ${referenceLink.fields.value} is already being used`;
    if (cleanedMessage.includes('email')) cleanedMessage = `email$: ${email.fields.value} is already being used`;
    Object(functions["b" /* triggerAlert */])('warning', cleanedMessage, props.setAlert, props.resetAlert);
  };

  const [registerMutation] = Object(react_hooks_["useMutation"])(mutations["e" /* CREATE_USER */], {
    onError
  });

  const handleSumbit = async e => {
    e.preventDefault();

    if (password.fields.value !== rePassword.fields.value) {
      Object(functions["b" /* triggerAlert */])('warning', 'password$: password and re-password did not match', props.setAlert, props.resetAlert);
      return null;
    }

    if (!username.fields.value.length || !password.fields.value.length || !rePassword.fields.value.length || !referenceLink.fields.value.length) {
      Object(functions["b" /* triggerAlert */])('warning', 'all$: all fields must be filled', props.setAlert, props.resetAlert);
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
      Object(functions["b" /* triggerAlert */])('success', 'registered$: account successfully created', props.setAlert, props.resetAlert);
      console.log('registered');
    }
  };

  const bgStyle = props.noBG ? {
    backgroundColor: '#282828'
  } : null;
  return Register_jsx("div", {
    className: user_module_default.a.userFormContainer,
    style: bgStyle
  }, Register_jsx("form", {
    className: user_module_default.a.userForm,
    onSubmit: e => handleSumbit(e)
  }, Register_jsx(InputHeader["a" /* default */], {
    inputFor: "SI-username",
    info: false,
    title: "username",
    color: "dark"
  }), Register_jsx("input", Register_extends({
    className: user_module_default.a.UFInput
  }, username.fields, {
    id: "SI-username"
  })), Register_jsx(InputHeader["a" /* default */], {
    inputFor: "SI-password",
    info: false,
    title: "password",
    color: "dark"
  }), Register_jsx("input", Register_extends({
    className: user_module_default.a.UFInput
  }, password.fields, {
    id: "SI-password"
  })), Register_jsx(InputHeader["a" /* default */], {
    inputFor: "SI-rePassword",
    info: false,
    title: "re-type password",
    color: "dark"
  }), Register_jsx("input", Register_extends({
    className: user_module_default.a.UFInput
  }, rePassword.fields, {
    id: "SI-rePassword"
  })), Register_jsx(InputHeader["a" /* default */], {
    inputFor: "SI-referenceLink",
    info: true,
    title: "portafolio link",
    color: "dark"
  }, Register_jsx("p", {
    style: {
      margin: 0,
      marginBottom: '5px'
    }
  }, "link on your user page used as a resume to demonstrate your ability"), Register_jsx("p", {
    style: {
      margin: 0,
      marginBottom: '5px'
    }
  }, Register_jsx("strong", null, "always view another users portafolio link before working with them")), Register_jsx("ul", {
    style: {
      margin: 0
    }
  }, Register_jsx("li", null, "sites recommended: ", Register_jsx("strong", null, "LinkedIn"), ", ", Register_jsx("strong", null, "Indeed"), ", ", Register_jsx("strong", null, "GitHub"), ", or ", Register_jsx("strong", null, "Facebook")), Register_jsx("li", null, "to further ensure your portafolio link is trustworthy, link your Unilous accout from your portafolio link"))), Register_jsx("input", Register_extends({
    className: user_module_default.a.UFInput
  }, referenceLink.fields, {
    id: "SI-referenceLink"
  })), Register_jsx("button", {
    className: user_module_default.a.UFSubmit,
    type: "submit"
  }, Register_jsx("h3", null, "register"))));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ var form_Register = (Object(external_react_redux_["connect"])(null, {
  setAlert: alertNotif["c" /* setAlert */],
  resetAlert: alertNotif["b" /* resetAlert */]
})(Register));
// CONCATENATED MODULE: ./components/user/structure/NotLogged.js
var NotLogged_jsx = external_react_default.a.createElement;


 // import userIcon from '../../../static/svg/userW.svg'




const NotLogged = props => {
  const {
    0: userOption,
    1: setUserOption
  } = Object(external_react_["useState"])(null);
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
  const formToShow = userOption ? userOption === 'sign in' ? NotLogged_jsx(form_SignIn, null) : NotLogged_jsx(form_Register, null) : null;

  const changeOption = changeTo => {
    if (userOption === changeTo) {
      setUserOption(null);
    } else {
      setUserOption(changeTo);
    }
  };

  return NotLogged_jsx("div", {
    className: `${user_module_default.a.userContainer} ${user_module_default.a.NLUserContainer}`
  }, NotLogged_jsx("div", {
    onClick: () => changeOption('sign in'),
    className: user_module_default.a.userOptionContainer,
    style: optionStyle.signIn
  }, NotLogged_jsx("h3", {
    className: user_module_default.a.userOptions,
    style: {
      paddingRight: '10px'
    }
  }, "sign in")), NotLogged_jsx("div", {
    className: user_module_default.a.userOptionsSplitter
  }, NotLogged_jsx("div", {
    className: user_module_default.a.userIconContainer
  }, NotLogged_jsx("img", {
    src: "/svg/userW.svg",
    className: user_module_default.a.userIcon,
    alt: "user"
  }))), NotLogged_jsx("div", {
    onClick: () => changeOption('register'),
    className: user_module_default.a.userOptionContainer,
    style: optionStyle.register
  }, NotLogged_jsx("h3", {
    className: user_module_default.a.userOptions,
    style: {
      paddingLeft: '10px'
    }
  }, "register")), formToShow);
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ var structure_NotLogged = (Object(external_react_redux_["connect"])(null)(NotLogged));
// EXTERNAL MODULE: ./src/schemas/queries.js
var queries = __webpack_require__("0J1E");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/post/PostSmall.js
var PostSmall = __webpack_require__("gTKk");

// CONCATENATED MODULE: ./components/user/utilities/Notif.js
var Notif_jsx = external_react_default.a.createElement;

function Notif_extends() { Notif_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Notif_extends.apply(this, arguments); }











const Notif = props => {
  const handleError = e => {
    console.log(e);
  };

  const [acceptNotif] = Object(react_hooks_["useMutation"])(mutations["a" /* ACCEPT_NOTIFICATION */], {
    onError: handleError
  });
  const [declineNotif] = Object(react_hooks_["useMutation"])(mutations["f" /* DECLINE_NOTIFICATION */], {
    onError: handleError
  });
  const [answerQuestion] = Object(react_hooks_["useMutation"])(mutations["b" /* ANSWER_QUESTION */], {
    onError: handleError
  });
  const answer = Object(functions["c" /* useField */])('text');

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
      Object(functions["b" /* triggerAlert */])('success', `replied$: you have replied to ${props.notif.userFrom.username}'s question`, props.setAlert, props.resetAlert);
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
      Object(functions["b" /* triggerAlert */])('success', `accepted$: you have accepted ${props.notif.userFrom.username} to your team`, props.setAlert, props.resetAlert);
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
      Object(functions["b" /* triggerAlert */])('danger', `declined$: you have declined ${props.notif.userFrom.username}'s request to join`, props.setAlert, props.resetAlert);
    }
  };

  const notif = props.notif;
  const notifStatusColor = notif.accepted === null ? 'rgb(226,184,59)' : notif.accepted ? notif.post ? 'rgb(52,166,95)' : '#8b8b8b' : 'rgb(254,52,77)';

  if (notif.userFrom.username === props.currentUser.username) {
    if (notif.accepted) {
      if (notif.question) {
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "sent question"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "to:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userTo.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          }
        }), Notif_jsx("div", {
          className: "n-notif-content-secondary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "question"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.question)), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "answered"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.answer)));
      }

      if (notif.post) {
        const GCLinkStats = Object(functions["d" /* websiteStats */])(notif.post.contactLink);
        const cleanedLink = notif.post.contactLink.split('/')[2];
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "sent join request"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "to:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userTo.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username
        }), Notif_jsx("div", {
          className: "n-notif-STJ-container"
        }, Notif_jsx("div", {
          className: "n-notif-STJ"
        }, "skill to join: ", Notif_jsx("strong", null, skillToJoin))), Notif_jsx("div", {
          className: "n-notif-content-secondary"
        }, Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.message)), Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "group/contact link"), Notif_jsx("div", {
          className: "n-button-container"
        }, Notif_jsx("a", {
          href: notif.post.contactLink,
          className: "n-join-link n-SH",
          style: {
            backgroundColor: GCLinkStats.color
          }
        }, Notif_jsx("img", {
          src: GCLinkStats.icon,
          className: "n-JL-icon",
          alt: GCLinkStats.title
        }), Notif_jsx("h3", null, cleanedLink))));
      } else {
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "sent message"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "to:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userTo.username))), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "message"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.message)));
      }
    }

    if (notif.accepted === null) {
      if (notif.question) {
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "sent question"), Notif_jsx("div", {
          className: "n-notif-user"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "to:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userTo.username)), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          }
        }), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "question"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.question)));
      } else {
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "sent join request"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "to:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userTo.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username
        }), Notif_jsx("div", {
          className: "n-notif-STJ-container"
        }, Notif_jsx("div", {
          className: "n-notif-STJ"
        }, "skill to join: ", Notif_jsx("strong", null, skillToJoin))), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.message)));
      }
    } else {
      if (notif.question) {
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "sent question"), Notif_jsx("div", {
          className: "n-notif-user"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "to:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userTo.username)), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          }
        }), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "question"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.question)));
      } else {
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "sent join request"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "to:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userTo.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username
        }), Notif_jsx("div", {
          className: "n-notif-STJ-container"
        }, Notif_jsx("div", {
          className: "n-notif-STJ"
        }, "skill to join: ", Notif_jsx("strong", null, skillToJoin))), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.message)));
      }
    }
  } else {
    if (notif.accepted) {
      if (notif.question) {
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "recieved question"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "from:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userFrom.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          }
        }), Notif_jsx("div", {
          className: "n-notif-content-secondary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "question"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.question)), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "answered"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.answer)));
      }

      if (notif.post) {
        const GCLinkStats = Object(functions["d" /* websiteStats */])(notif.post.contactLink);
        const cleanedLink = notif.post.contactLink.split('/')[2];
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "recieved join request"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "from:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userFrom.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username
        }), Notif_jsx("div", {
          className: "n-notif-STJ-container"
        }, Notif_jsx("div", {
          className: "n-notif-STJ"
        }, "skill to join: ", Notif_jsx("strong", null, skillToJoin))), Notif_jsx("div", {
          className: "n-notif-content-secondary"
        }, Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.message)), Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "sent group/contact link"), Notif_jsx("div", {
          className: "n-button-container"
        }, Notif_jsx("a", {
          href: notif.post.contactLink,
          className: "n-join-link n-SH",
          style: {
            backgroundColor: GCLinkStats.color
          }
        }, Notif_jsx("img", {
          src: GCLinkStats.icon,
          className: "n-JL-icon",
          alt: GCLinkStats.title
        }), Notif_jsx("h3", null, cleanedLink))));
      } else {
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "recieved message"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "from:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userFrom.username))), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "message"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.message)));
      }
    }

    if (notif.accepted === null) {
      if (notif.question) {
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "recieved question"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "from:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userFrom.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          }
        }), Notif_jsx("div", {
          className: "n-notif-content-secondary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "question"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.question)), Notif_jsx("div", {
          className: "n-notif-reply"
        }, Notif_jsx("h3", {
          className: "n-notif-title"
        }, "reply"), Notif_jsx("textarea", Notif_extends({
          className: "n-notif-reply-field"
        }, answer.fields)), Notif_jsx("div", {
          className: "n-button-container"
        }, Notif_jsx("h3", {
          onClick: () => handleAnswer(),
          className: "n-AoD-option n-SH",
          style: {
            backgroundColor: 'rgb(52,166,95)'
          }
        }, "answer"))));
      } else {
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "recieved join request"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "from:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userFrom.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username
        }), Notif_jsx("div", {
          className: "n-notif-STJ-container"
        }, Notif_jsx("div", {
          className: "n-notif-STJ"
        }, "skill to join: ", Notif_jsx("strong", null, skillToJoin))), Notif_jsx("div", {
          className: "n-notif-content-secondary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "message"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.message)), Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "accept"), Notif_jsx("div", {
          className: "n-notif-AoD"
        }, Notif_jsx("h3", {
          onClick: () => handleDecline(),
          className: "n-AoD-option n-SH",
          style: {
            backgroundColor: 'rgb(254,52,77)'
          }
        }, "decline"), Notif_jsx("h3", {
          onClick: () => handleAccept(),
          className: "n-AoD-option n-SH",
          style: {
            backgroundColor: 'rgb(52,166,95)'
          }
        }, "accept")));
      }
    } else {
      if (notif.question) {
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "recieved question"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${encodeURIComponent(notif.userTo.username)}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "from:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userFrom.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username,
          style: {
            margin: 0,
            padding: 0
          }
        }), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "question"), Notif_jsx("p", {
          className: "n-notif-message"
        }, notif.question)));
      } else {
        const skillToJoin = notif.post.skillNames[notif.proposedContribution.indexOf(1)];
        return Notif_jsx("div", {
          className: "n-notif-container",
          style: {
            borderBottom: `5px solid ${notifStatusColor}`
          }
        }, Notif_jsx("h3", {
          className: "n-notif-header",
          style: {
            backgroundColor: notifStatusColor
          }
        }, "recieved join request"), Notif_jsx(link_default.a, {
          href: "/user/[username]",
          as: `/user/${notif.userTo.username}`
        }, Notif_jsx("a", {
          className: "n-notif-user neutralize-link"
        }, Notif_jsx("div", {
          className: "NU-label"
        }, "to:"), Notif_jsx("img", {
          src: "/svg/userB.svg",
          className: "NU-icon",
          alt: "user"
        }), Notif_jsx("div", {
          className: "NU-username"
        }, notif.userTo.username))), Notif_jsx(PostSmall["a" /* default */], {
          post: notif.post,
          user: notif.userTo.username
        }), Notif_jsx("div", {
          className: "n-notif-STJ-container"
        }, Notif_jsx("div", {
          className: "n-notif-STJ"
        }, "skill to join: ", Notif_jsx("strong", null, skillToJoin))), Notif_jsx("div", {
          className: "n-notif-content-primary"
        }, Notif_jsx("h3", {
          className: "n-notif-title",
          style: {
            marginLeft: '15px'
          }
        }, "message"), Notif_jsx("p", {
          className: "n-notif-message"
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

/* harmony default export */ var utilities_Notif = (Object(external_react_redux_["connect"])(mapStateToProps, {
  setCurrentUserNotifications: currentUser["c" /* setCurrentUserNotifications */],
  setAlert: alertNotif["c" /* setAlert */],
  resetAlert: alertNotif["b" /* resetAlert */]
})(Notif));
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__("VFWX");

// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__("B/3u");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./styles/user/userUtilities.module.css
var userUtilities_module = __webpack_require__("NV7s");
var userUtilities_module_default = /*#__PURE__*/__webpack_require__.n(userUtilities_module);

// CONCATENATED MODULE: ./components/user/utilities/UserNotifList.js
var UserNotifList_jsx = external_react_default.a.createElement;












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
  } = Object(external_react_["useState"])('to you');
  const {
    0: showSFDD,
    1: setShowSFDD
  } = Object(external_react_["useState"])(false);
  const {
    0: statusFilter,
    1: setStatusFilter
  } = Object(external_react_["useState"])('pending');
  const {
    0: showStatusDD,
    1: setShowStatusDD
  } = Object(external_react_["useState"])(false); // const notifsListConditions = (query, reducer) => {
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
      return UserNotifList_jsx("div", {
        style: {
          gridColumn: '1/3'
        }
      }, UserNotifList_jsx("div", {
        style: {
          height: '5vh'
        }
      }), UserNotifList_jsx(Loading["a" /* default */], {
        color: "white"
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

      return allOptions.map(o => o !== sentFilter ? UserNotifList_jsx("div", {
        onClick: () => onOptionClick(o),
        className: userUtilities_module_default.a.NFDDOption,
        key: `SFDD${o}`
      }, o) : null);
    };

    const sentDD = showSFDD ? UserNotifList_jsx("div", {
      className: userUtilities_module_default.a.NFropdown
    }, UserNotifList_jsx("div", {
      className: userUtilities_module_default.a.NFSplitter
    }), sentOptions()) : null;

    const statusOptions = () => {
      const allOptions = ['all', 'accepted', 'declined', 'pending', 'messages'];

      const onOptionClick = option => {
        setStatusFilter(option);
        setShowStatusDD(!showStatusDD);
      };

      return allOptions.map(o => o !== statusFilter ? UserNotifList_jsx("div", {
        onClick: () => onOptionClick(o),
        className: `${o}-option ${userUtilities_module_default.a.NFDDOption}`,
        key: `StatusDD${o}`
      }, o) : null);
    };

    const statusDD = showStatusDD ? UserNotifList_jsx("div", {
      className: userUtilities_module_default.a.NFDropdown
    }, UserNotifList_jsx("div", {
      className: userUtilities_module_default.a.NFSplitter
    }), statusOptions()) : null;
    return UserNotifList_jsx("div", {
      className: userUtilities_module_default.a.notifFilterContainer
    }, UserNotifList_jsx("div", {
      className: userUtilities_module_default.a.NFCreatorContainer
    }, UserNotifList_jsx("h4", {
      className: userUtilities_module_default.a.NFLabel
    }, "status"), UserNotifList_jsx("div", {
      className: userUtilities_module_default.a.NFOptionContainer
    }, UserNotifList_jsx("div", {
      onClick: () => setShowStatusDD(!showStatusDD),
      className: `${statusFilter}-option ${userUtilities_module_default.a.NFOption}`
    }, statusFilter), statusDD)), UserNotifList_jsx("div", {
      className: userUtilities_module_default.a.NFCreatorContainer,
      style: {
        marginLeft: '15px'
      }
    }, UserNotifList_jsx("h4", {
      className: userUtilities_module_default.a.NFLabel
    }, "sent"), UserNotifList_jsx("div", {
      className: userUtilities_module_default.a.NFOptionContainer
    }, UserNotifList_jsx("div", {
      onClick: () => setShowSFDD(!showSFDD),
      className: userUtilities_module_default.a.NFOption
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
      return UserNotifList_jsx(utilities_Notif, {
        notif: n,
        key: `UN${n._id}`
      });
    }

    return null;
  }).reverse();
  return UserNotifList_jsx("div", {
    className: "userUtil-notif"
  }, UserNotifList_jsx(Filter, null), UserNotifList_jsx("div", {
    style: {
      height: '10px'
    }
  }), showNotifications, UserNotifList_jsx("div", {
    style: {
      height: '10px'
    }
  }));
};

const UserNotifList_mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUserNotifications: Object(external_redux_["bindActionCreators"])(currentUser["c" /* setCurrentUserNotifications */], dispatch)
  };
};

/* harmony default export */ var utilities_UserNotifList = (Object(external_react_redux_["connect"])(UserNotifList_mapStateToProps, mapDispatchToProps)(UserNotifList));
// CONCATENATED MODULE: ./components/user/utilities/UserSP.js
var UserSP_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const UserSP = props => {
  const id_list = props.currentUser.savedPosts.map(p => p._id);
  const postListQuery = Object(react_hooks_["useQuery"])(queries["f" /* LIST_OF_POSTS */], {
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
  Object(external_react_["useEffect"])(() => {
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
    return UserSP_jsx("div", {
      style: {
        gridColumn: '1/3'
      }
    }, UserSP_jsx("div", {
      style: {
        height: '5vh'
      }
    }), UserSP_jsx(Loading["a" /* default */], {
      color: "white"
    }));
  }

  const allSP = props.currentUser.savedPosts.map(p => UserSP_jsx(PostSmall["a" /* default */], {
    post: p,
    user: p.user.username,
    type: "saved",
    key: `SP${p.title}`
  }));
  return UserSP_jsx("div", null, UserSP_jsx("div", {
    style: {
      height: '10px'
    }
  }), allSP);
};

const UserSP_mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

/* harmony default export */ var utilities_UserSP = (Object(external_react_redux_["connect"])(UserSP_mapStateToProps, {
  setCurrentUserSP: currentUser["e" /* setCurrentUserSP */]
})(UserSP));
// CONCATENATED MODULE: ./components/user/structure/Logged.js
var Logged_jsx = external_react_default.a.createElement;













const Logged = props => {
  const {
    0: showUtilities,
    1: setShowUtilities
  } = Object(external_react_["useState"])(true);
  const {
    0: utilityShown,
    1: setUtilityShown
  } = Object(external_react_["useState"])('');
  const currentUserUN = localStorage.getItem('username') ? localStorage.getItem('username') : 'fakeUser';
  const userQuery = Object(react_hooks_["useQuery"])(queries["d" /* FIND_USER */], {
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
  Object(external_react_["useEffect"])(() => {
    if (userResult) {
      props.setCurrentUser(userResult);
    }
  }, [props, props.currentUser, userResult]);

  if (!props.currentUser) {
    return Logged_jsx("div", {
      className: `${user_module_default.a.userContainer} ${user_module_default.a.LGDUserContainer}`
    }, Logged_jsx("div", {
      className: user_module_default.a.userOptionsSplitter
    }, Logged_jsx("div", {
      className: user_module_default.a.userIconContainer
    })), Logged_jsx("div", {
      className: user_module_default.a.userBanner
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
  const iconToShow = showUtilities ? Logged_jsx(link_default.a, {
    href: "/user/[username",
    as: `/user/${encodeURIComponent(props.currentUser.username)}`
  }, Logged_jsx("a", {
    className: `${user_module_default.a.userIconContainer} ${user_module_default.a.UICH} neutralize-link`
  }, Logged_jsx("h1", {
    className: `${user_module_default.a.userUsernameIcon} ${user_module_default.a.userIconHover}`
  }, usernameIcon))) : Logged_jsx(link_default.a, {
    href: "/user/[username]",
    as: `/user/${encodeURIComponent(props.currentUser.username)}`
  }, Logged_jsx("a", {
    className: "user-icon-container UICH"
  }, Logged_jsx("img", {
    src: "/svg/userW.svg",
    className: `${user_module_default.a.userIcon} ${user_module_default.a.userIconHover}`,
    alt: "user"
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
      className: user_module_default.a.UUOSelected,
      icon: "/svg/userW.svg"
    };
  }

  if (utilityShown === 'notifications') {
    basicStyles.notifications = {
      className: user_module_default.a.UUOSelected,
      icon: "/svg/bellW.svg"
    };
  }

  if (utilityShown === 'following') {
    basicStyles.following = {
      className: user_module_default.a.UUOSelected,
      icon: "/svg/heartW.svg"
    };
  }

  const pendingNotifStats = props.currentUser && props.currentUser.pendingNotifications > 0 ? [user_module_default.a.PNBubble, props.currentUser.pendingNotifications] : [null, null];
  const showInBanner = showUtilities ? Logged_jsx(external_react_default.a.Fragment, null, Logged_jsx(link_default.a, {
    href: "/postformpage/"
  }, Logged_jsx("a", {
    className: `${user_module_default.a.UUAddPost} ${user_module_default.a.userUtilityOption} neutralize-link`,
    style: {
      gridColumn: '1/3'
    }
  }, Logged_jsx("img", {
    src: "/svg/plusB.svg",
    className: user_module_default.a.UUAPIcon,
    alt: "add post"
  }), Logged_jsx("h4", {
    className: user_module_default.a.UUAPText
  }, "add post"))), Logged_jsx(link_default.a, {
    href: "/user/[username]",
    as: `/user/${props.currentUser.username}`
  }, Logged_jsx("a", {
    className: `${user_module_default.a.userUtilityOption} ${basicStyles.user.className}`
  }, Logged_jsx("img", {
    src: basicStyles.user.icon,
    className: user_module_default.a.UUIcon,
    alt: "user"
  }))), Logged_jsx("div", {
    onClick: () => changeUtilityShown('notifications'),
    className: `${user_module_default.a.userUtilityOption} ${user_module_default.a.PNContainer} ${basicStyles.notifications.className}`
  }, Logged_jsx("img", {
    src: basicStyles.notifications.icon,
    className: user_module_default.a.UUIcon,
    alt: "notifications"
  }), Logged_jsx("div", {
    className: pendingNotifStats[0]
  }, pendingNotifStats[1])), Logged_jsx("div", {
    onClick: () => changeUtilityShown('following'),
    className: `${user_module_default.a.userUtilityOption} ${basicStyles.following.className}`
  }, Logged_jsx("img", {
    src: basicStyles.following.icon,
    className: user_module_default.a.UUIcon,
    alt: "follow"
  })), Logged_jsx("div", {
    onClick: () => logout(),
    className: `${user_module_default.a.userUtilityOption} ${user_module_default.a.UULogout}`
  }, Logged_jsx("img", {
    src: "/svg/exitB.svg",
    className: user_module_default.a.UULogoutIcon,
    alt: "log out"
  }))) : Logged_jsx("div", {
    onClick: () => changeShowUtilities(!showUtilities),
    className: `${user_module_default.a.userUsernameContainer} ${user_module_default.a.SUH}`
  }, Logged_jsx("h2", {
    className: "user-username"
  }, props.currentUser.username));
  const showBubble = showUtilities ? Logged_jsx("div", null) : Logged_jsx("div", {
    onClick: () => changeUtilityShown('notifications'),
    className: user_module_default.a.userNotificationBubble
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
      return Logged_jsx(utilities_UserNotifList, null);
    }

    if (utilityShown === 'following') {
      return Logged_jsx(utilities_UserSP, null);
    }

    return null;
  };

  return Logged_jsx("div", {
    className: `${user_module_default.a.userContainer} ${user_module_default.a.LGDUserContainer}`
  }, Logged_jsx("div", {
    className: user_module_default.a.userOptionsSplitter
  }, iconToShow), Logged_jsx("div", {
    className: user_module_default.a.userBanner
  }, showInBanner), showBubble, Logged_jsx("div", {
    className: user_module_default.a.UUUtilitiesSplitter,
    style: showUtilityContent
  }), Logged_jsx("div", {
    className: user_module_default.a.UUContentContainer,
    style: showUtilityContent
  }, Logged_jsx("h3", null, utilityShown), utilityContent()));
};

const Logged_mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const Logged_mapDispatchToProps = dispatch => {
  return {
    clearToken: Object(external_redux_["bindActionCreators"])(token["a" /* clearToken */], dispatch),
    setCurrentUser: Object(external_redux_["bindActionCreators"])(currentUser["b" /* setCurrentUser */], dispatch)
  };
};

/* harmony default export */ var structure_Logged = (Object(external_react_redux_["connect"])(Logged_mapStateToProps, Logged_mapDispatchToProps)(Logged));
// CONCATENATED MODULE: ./components/navBar/UserContainer.js
var UserContainer_jsx = external_react_default.a.createElement;






const UserContainer = props => {
  const logStateToShow = props.token ? UserContainer_jsx(structure_Logged, null) : UserContainer_jsx(structure_NotLogged, null);
  return UserContainer_jsx("div", {
    className: user_module_default.a.userWrapper
  }, logStateToShow);
};

const UserContainer_mapStateToProps = state => {
  return {
    token: state.token
  };
};

/* harmony default export */ var navBar_UserContainer = (Object(external_react_redux_["connect"])(UserContainer_mapStateToProps)(UserContainer));
// EXTERNAL MODULE: ./styles/navBar.module.css
var navBar_module = __webpack_require__("I5N4");
var navBar_module_default = /*#__PURE__*/__webpack_require__.n(navBar_module);

// EXTERNAL MODULE: ./components/text-field/SkillSugg.js
var SkillSugg = __webpack_require__("/WwN");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/navBar/NavBar.js
var NavBar_jsx = external_react_default.a.createElement;















const NavBar = props => {
  const {
    0: utilityShown,
    1: setUtilityShown
  } = Object(external_react_["useState"])(null);
  const {
    0: menuItemShown,
    1: setMenuItemShown
  } = Object(external_react_["useState"])(null);

  const changeUtility = name => {
    setMenuItemShown(null);
    if (name === utilityShown) setUtilityShown(null);else setUtilityShown(name);
  };

  const changeMenuItem = item => {
    if (item === menuItemShown) setMenuItemShown(null);else setMenuItemShown(item);
  };

  const linkToPush = `/results/${encodeURIComponent(props.query)}`;

  const enterQuery = () => {
    router_default.a.push(linkToPush);
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
  const pendingNotifStats = props.currentUser && props.currentUser.pendingNotifications > 0 ? [navBar_module_default.a.PNBubble, props.currentUser.pendingNotifications] : [null, null];

  const ShowInSubNav = () => {
    const moreItemButton = menuItemShown === 'more' ? NavBar_jsx("img", {
      src: "/svg/moreW.svg",
      onClick: () => changeMenuItem('more'),
      className: navBar_module_default.a.menuItemSelected,
      alt: "more"
    }) : NavBar_jsx("img", {
      src: "/svg/moreSB.svg",
      onClick: () => changeMenuItem('more'),
      className: navBar_module_default.a.menuItem,
      alt: "more"
    });

    if (utilityShown === 'menu') {
      if (props.token) {
        // const allItems = [
        //     {name: 'notifications', iconB: bellIconB, iconW: bellIconW},
        //     {name: 'following', iconB: heartIconB, iconW: heartIconW},
        // ]
        const notifItemButton = menuItemShown === 'notifications' ? NavBar_jsx("div", {
          onClick: () => changeMenuItem('notifications'),
          className: `${navBar_module_default.a.menuItemSelected} ${navBar_module_default.a.PNContainer}`
        }, NavBar_jsx("img", {
          src: bellIconW,
          className: navBar_module_default.a.notificationItem,
          alt: 'notifications',
          key: `UO${'notifications'}`
        }), NavBar_jsx("div", {
          className: pendingNotifStats[0]
        }, pendingNotifStats[1])) : NavBar_jsx("div", {
          onClick: () => changeMenuItem('notifications'),
          className: `${navBar_module_default.a.menuItem} ${navBar_module_default.a.PNContainer}`
        }, NavBar_jsx("img", {
          src: "/svg/bellB.svg",
          className: navBar_module_default.a.notificationItem,
          alt: 'notifications',
          key: `UO${'notifications'}`
        }), NavBar_jsx("div", {
          className: pendingNotifStats[0]
        }, pendingNotifStats[1]));
        const followingItemButton = menuItemShown === 'following' ? NavBar_jsx("img", {
          src: "/svg/heartW.svg",
          onClick: () => changeMenuItem('following'),
          className: navBar_module_default.a.menuItemSelected,
          alt: 'following',
          key: `UO${'following'}`
        }) : NavBar_jsx("img", {
          src: "/svg/heartB.svg",
          onClick: () => changeMenuItem('following'),
          className: navBar_module_default.a.menuItem,
          alt: 'following',
          key: `UO${'following'}`
        });
        return NavBar_jsx("div", {
          className: navBar_module_default.a.navBarSubContainerM,
          style: menuStyle
        }, NavBar_jsx(link_default.a, {
          href: "/post-form/",
          onClick: () => changeMenuItem(null)
        }, NavBar_jsx("a", {
          className: navBar_module_default.a.menuItem,
          style: {
            padding: 0,
            margin: 0
          }
        }, NavBar_jsx("img", {
          src: "/svg/plusB.svg",
          className: navBar_module_default.a.menuItem,
          alt: "add project"
        }))), NavBar_jsx(link_default.a, {
          href: "user/[username]",
          as: `/user/${props.currentUser.username}`,
          onClick: () => changeMenuItem(null)
        }, NavBar_jsx("a", {
          className: navBar_module_default.a.menuItem,
          style: {
            padding: 0,
            margin: 0
          }
        }, NavBar_jsx("img", {
          src: userIcon,
          className: "menu-item",
          alt: "user page"
        }))), notifItemButton, followingItemButton, NavBar_jsx("img", {
          src: exitIcon,
          onClick: () => handleLogout(),
          className: navBar_module_default.a.menuItem,
          alt: "log out"
        }), moreItemButton);
      }

      const allItems = ['sign in', 'register'];
      const modalItemButtons = allItems.map(i => menuItemShown === i ? NavBar_jsx("h3", {
        onClick: () => changeMenuItem(i),
        className: navBar_module_default.a.menuItemSelected,
        key: `MI${i}`
      }, i) : NavBar_jsx("h3", {
        onClick: () => changeMenuItem(i),
        className: navBar_module_default.a.menuItem,
        key: `MI${i}`
      }, i));
      return NavBar_jsx("div", {
        className: `${navBar_module_default.a.navBarSubContainerM} ${navBar_module_default.a.loginBar}`,
        style: menuStyle
      }, modalItemButtons, moreItemButton);
    }

    return null;
  };

  const MenuItemToShow = () => {
    if (menuItemShown === 'sign in') {
      return NavBar_jsx("div", {
        className: navBar_module_default.a.menuModalContainer
      }, NavBar_jsx(form_SignIn, {
        noBG: true,
        changeMenuItem: changeMenuItem
      }));
    }

    if (menuItemShown === 'register') {
      return NavBar_jsx("div", {
        className: navBar_module_default.a.menuModalContainer
      }, NavBar_jsx(form_Register, {
        noBG: true,
        changeMenuItem: changeMenuItem
      }));
    }

    if (menuItemShown === 'notifications') {
      return NavBar_jsx("div", {
        className: navBar_module_default.a.menuModalContainer
      }, NavBar_jsx("h2", null, "notifications"), NavBar_jsx(utilities_UserNotifList, null));
    }

    if (menuItemShown === 'following') {
      return NavBar_jsx("div", {
        className: navBar_module_default.a.menuModalContainer
      }, NavBar_jsx("h2", null, "saved posts"), NavBar_jsx(utilities_UserSP, null));
    }

    if (menuItemShown === 'more') {
      return NavBar_jsx("div", {
        className: navBar_module_default.a.menuModalContainer
      }, NavBar_jsx(link_default.a, {
        href: "/contact/"
      }, NavBar_jsx("a", {
        className: "neutralize-link"
      }, NavBar_jsx("h1", {
        className: navBar_module_default.a.moreLink
      }, "contact us"))));
    }

    return null;
  };

  const showWhenSB = utilityShown === 'search' ? {
    display: 'block'
  } : {
    display: 'none'
  };
  const alertBarStyle = props.alertNotif.color ? {
    backgroundColor: props.alertNotif.color,
    color: props.alertNotif.textColor
  } : {
    display: 'none',
    backgroundColor: props.alertNotif.color,
    color: props.alertNotif.textColor
  };
  return NavBar_jsx("div", null, NavBar_jsx("div", {
    className: `${navBar_module_default.a.navContainer} HWM`
  }, NavBar_jsx("div", {
    className: navBar_module_default.a.navBarContainer
  }, NavBar_jsx(link_default.a, {
    href: "/"
  }, NavBar_jsx("a", {
    className: navBar_module_default.a.iconContainer
  }, NavBar_jsx("img", {
    src: "/svg/logo/logoB.svg",
    alt: "icon",
    className: navBar_module_default.a.navBarIcon
  }))), NavBar_jsx("div", {
    className: navBar_module_default.a.searchBar
  }, NavBar_jsx(link_default.a, {
    href: linkToPush,
    onClick: () => enterQuery()
  }, NavBar_jsx("a", {
    className: `neutralize-link ${navBar_module_default.a.enterSearch} ${navBar_module_default.a.searchHover}`
  }, NavBar_jsx("img", {
    src: "/svg/searchW.svg",
    className: navBar_module_default.a.searchIcon,
    alt: "search"
  }))), NavBar_jsx("div", {
    className: navBar_module_default.a.searchHr,
    style: {
      backgroundColor: 'white'
    }
  }), NavBar_jsx("input", {
    value: props.query,
    className: navBar_module_default.a.searchInput,
    type: "text",
    onChange: e => props.onQueryChange(e),
    onKeyPress: e => handleKeyPress(e),
    placeholder: "search or enter nothing for all results"
  }), NavBar_jsx("div", {
    className: navBar_module_default.a.SBSeparator
  }), NavBar_jsx(SkillSugg["a" /* default */], {
    query: props.query,
    onSuggestionClicked: onSuggestionClicked
  })), NavBar_jsx(navBar_UserContainer, null)), NavBar_jsx("div", {
    className: navBar_module_default.a.alertBarContainer,
    style: alertBarStyle
  }, NavBar_jsx("div", {
    className: navBar_module_default.a.message
  }, props.alertNotif.message), NavBar_jsx("h2", {
    onClick: () => props.resetAlert(),
    className: navBar_module_default.a.close
  }, "x"))), NavBar_jsx("div", {
    className: `${navBar_module_default.a.navContainerM} SWM`
  }, NavBar_jsx("div", {
    className: navBar_module_default.a.navBarContainerM
  }, NavBar_jsx(link_default.a, {
    href: "/"
  }, NavBar_jsx("a", {
    className: `${navBar_module_default.a.NBBrand} neutralize-link`
  }, NavBar_jsx("img", {
    src: "/svg/logo/logoB.svg",
    className: navBar_module_default.a.NBLogo,
    alt: "logo"
  }), NavBar_jsx("h2", null, "Unilous"))), NavBar_jsx("div", {
    className: navBar_module_default.a.NBPrimaryUtilities
  }, NavBar_jsx("img", {
    src: "/svg/searchSB.svg",
    onClick: () => changeUtility('search'),
    className: navBar_module_default.a.PUSearch,
    alt: "search"
  }), NavBar_jsx("div", {
    onClick: () => changeUtility('menu'),
    className: `${navBar_module_default.a.PUHamburgerContainer} ${navBar_module_default.a.PNContainer}`
  }, NavBar_jsx("img", {
    src: "/svg/hamburger.svg",
    className: navBar_module_default.a.PUHamburger,
    alt: "menu"
  }), NavBar_jsx("div", {
    className: `${pendingNotifStats[0]} ${navBar_module_default.a.PNBubbleHamburger}`
  }, pendingNotifStats[1])))), NavBar_jsx("div", {
    onClick: () => props.resetAlert(),
    className: navBar_module_default.a.alertBarContainer,
    style: alertBarStyle
  }, NavBar_jsx("div", {
    className: navBar_module_default.a.message
  }, props.alertNotif.message), NavBar_jsx("h2", {
    className: navBar_module_default.a.close
  }, "x")), NavBar_jsx("div", {
    className: navBar_module_default.a.navBarSubContainer,
    style: showWhenSB
  }, NavBar_jsx("div", {
    className: navBar_module_default.a.searchBar
  }, NavBar_jsx(link_default.a, {
    href: linkToPush,
    onClick: () => enterQuery()
  }, NavBar_jsx("a", {
    className: `neutralize-link ${navBar_module_default.a.enterSearch} ${navBar_module_default.a.searchHover}`
  }, NavBar_jsx("img", {
    src: "/svg/searchW.svg",
    className: navBar_module_default.a.searchIcon,
    alt: "search"
  }))), NavBar_jsx("div", {
    className: navBar_module_default.a.searchHr,
    style: {
      backgroundColor: 'white',
      height: '0'
    }
  }), NavBar_jsx("input", {
    value: props.query,
    className: navBar_module_default.a.searchInput,
    type: "text",
    onChange: e => props.onQueryChange(e),
    onKeyPress: e => handleKeyPress(e),
    placeholder: "search or enter nothing for all results"
  }), NavBar_jsx(SkillSugg["a" /* default */], {
    query: props.query,
    onSuggestionClicked: onSuggestionClicked
  }))), NavBar_jsx(ShowInSubNav, null), NavBar_jsx(MenuItemToShow, null)));
}; // NavBar = withRouter(NavBar)


const NavBar_mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token,
    alertNotif: state.alertNotif
  };
};

const NavBar_mapDispatchToProps = dispatch => {
  return {
    clearToken: Object(external_redux_["bindActionCreators"])(token["a" /* clearToken */], dispatch),
    resetAlert: Object(external_redux_["bindActionCreators"])(alertNotif["b" /* resetAlert */], dispatch)
  };
};

token["a" /* clearToken */];
alertNotif["b" /* resetAlert */];
/* harmony default export */ var navBar_NavBar = (Object(external_react_redux_["connect"])(NavBar_mapStateToProps, NavBar_mapDispatchToProps)(NavBar));
// CONCATENATED MODULE: ./components/Layout.js
var Layout_jsx = external_react_default.a.createElement;










const Layout = props => {
  if (true) return Layout_jsx("h1", null, "Rendering");else {}
};

const Layout_mapStateToProps = state => {
  return {
    token: state.token,
    currentUser: state.currentUser
  };
};

const Layout_mapDispatchToProps = dispatch => {
  return {
    setToken: Object(external_redux_["bindActionCreators"])(token["c" /* setToken */], dispatch),
    setCurrentUser: Object(external_redux_["bindActionCreators"])(currentUser["b" /* setCurrentUser */], dispatch),
    setPendingNotifications: Object(external_redux_["bindActionCreators"])(currentUser["f" /* setPendingNotifications */], dispatch),
    setCurrentUserNotifications: Object(external_redux_["bindActionCreators"])(currentUser["c" /* setCurrentUserNotifications */], dispatch)
  };
};

currentUser["b" /* setCurrentUser */];
currentUser["f" /* setPendingNotifications */];
/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(Layout_mapStateToProps, Layout_mapDispatchToProps)(Layout));

/***/ }),

/***/ "6Ysq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initializePosts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addPosts; });
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

/* harmony default export */ __webpack_exports__["b"] = (posts);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("S6mx");


/***/ }),

/***/ "B/3u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apolloClient; });
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0zQs");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TG1l");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LvlT");
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

/* harmony default export */ __webpack_exports__["b"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_0__["withApollo"])(apolloClient));

/***/ }),

/***/ "BkJp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return triggerAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return websiteStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return palletteGenerator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const triggerAlert = (type, message, setAlert, resetAlert) => {
  // triggerAlert('warning', 'success: alert bar is working', props.setAlert, props.resetAlert)
  const cleanedMessage = __jsx("p", {
    style: {
      margin: 0
    }
  }, __jsx("strong", null, message.split('$:')[0]), ": ", message.split('$:')[1]);

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

/***/ "FYTF":
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

/***/ "I5N4":
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

/***/ "KPOt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rs92");
/* harmony import */ var _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const InputHeader = props => {
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  if (!props.info) {
    return __jsx("label", {
      htmlFor: props.inputFor
    }, __jsx("h3", {
      className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoTitleText
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
    }
  }, __jsx("div", {
    className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoHeaderContainer
  }, __jsx("label", {
    htmlFor: props.inputFor
  }, __jsx("h3", {
    className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoTitleText
  }, props.title)), __jsx("img", {
    onClick: () => setExpanded(!expanded),
    src: colorInfo.icon,
    className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoIcon,
    alt: "info"
  })), __jsx("div", {
    className: _styles_inputHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoContent,
    style: showInfo
  }, props.children));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(InputHeader));

/***/ }),

/***/ "LvlT":
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "NV7s":
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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "S6mx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_results_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("beb+");
/* harmony import */ var _styles_pages_results_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_results_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_post_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uYsV");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0J1E");
/* harmony import */ var _redux_reducers_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6Ysq");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("VFWX");
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("BkJp");
/* harmony import */ var _redux_reducers_stretchLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("gH2n");
/* harmony import */ var _redux_reducers_eventSearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("2E1m");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("5Yp1");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const Results = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(props => {
  if (true) return __jsx("h1", {
    className: _styles_pages_results_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.test
  }, "rendering");else {}
}); // const mapStateToProps = (state) => {
// 	return {
//         posts: state.posts,
//         search: state.search,
//         stretchLayout: state.stretchLayout,
//         eventSearch: state.eventSearch,
// 	}
// }
// export default connect(
//     mapStateToProps,
//     { addPosts, toggleStretchLayout, setEventSearch }
// )(Results)

const mapStateToProps = state => {
  return {
    posts: state.posts,
    stretchLayout: state.stretchLayout,
    eventSearch: state.eventSearch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPosts: Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])(_redux_reducers_posts__WEBPACK_IMPORTED_MODULE_6__[/* addPosts */ "a"], dispatch),
    toggleStretchLayout: Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])(_redux_reducers_stretchLayout__WEBPACK_IMPORTED_MODULE_10__[/* toggleStretchLayout */ "b"], dispatch),
    setEventSearch: Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])(_redux_reducers_eventSearch__WEBPACK_IMPORTED_MODULE_11__[/* setEventSearch */ "b"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Results));

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "VFWX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import logoB from '../static/svg/logo/logoB.svg'
// import logoW from '../static/svg/logo/logoW.svg'

const Loading = props => {
  if (props.size === 'small') {
    return __jsx("div", {
      className: "loading-container"
    }, __jsx("img", {
      src: "/svg/logo/logoB.svg",
      className: "loading-logo",
      alt: "loading logo"
    }), __jsx("h1", null, "loading"));
  }

  if (props.color === 'white') {
    return __jsx("div", {
      className: "loading-container",
      style: {
        color: 'white'
      }
    }, __jsx("div", {
      className: "navbar-height"
    }), __jsx("img", {
      src: "/svg/logo/logoW.svg",
      className: "loading-logo-l",
      alt: "loading logo"
    }), __jsx("h1", {
      className: "loading-title"
    }, "loading"));
  }

  return __jsx("div", {
    className: "loading-container"
  }, __jsx("div", {
    className: "navbar-height"
  }), __jsx("img", {
    src: "/svg/logo/logoB.svg",
    className: "loading-logo-l",
    alt: "loading logo"
  }), __jsx("h1", {
    className: "loading-title"
  }, "loading"));
}; //const mapStateToProps = (state) => {
//	return {
//	}
//}


/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null)(Loading));

/***/ }),

/***/ "WxHd":
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "beb+":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"test": "results_test__1utfm",
	"mainTitle": "results_mainTitle__1g6nG",
	"secondaryTitle": "results_secondaryTitle__fabdv",
	"eventsContainer": "results_eventsContainer__3kfs0",
	"ECActive": "results_ECActive__1Yefy",
	"event": "results_event__2OXNO",
	"eventSelected": "results_eventSelected__2pjkQ",
	"eventImage": "results_eventImage__2U_nd",
	"eventText": "results_eventText__1FkKv",
	"titleImage": "results_titleImage__2vUqd",
	"homeWrapper": "results_homeWrapper__2ZZVo",
	"resultsContainer": "results_resultsContainer__1ZOL-",
	"layoutWrapper": "results_layoutWrapper__1uiv8",
	"layoutContainer": "results_layoutContainer__3HuJp",
	"layoutButtonGrid": "results_layoutButtonGrid__10wqr",
	"layoutButtonStretch": "results_layoutButtonStretch__3pll9",
	"layoutBox": "results_layoutBox__1sndq",
	"resultsContentGrid": "results_resultsContentGrid__1XLSJ",
	"resultsContentStretch": "results_resultsContentStretch__2Rjmn",
	"usersContent": "results_usersContent__2P0Ns",
	"homeUsersContainer": "results_homeUsersContainer__2sRVt",
	"formContainerExpand": "results_formContainerExpand__sPd2h",
	"formExpandIcon": "results_formExpandIcon__3jrC2"
};


/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

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

    if (false) {}

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
      if (false) {}
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

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
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

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

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

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (false) {}

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
            if (false) {}

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

        if (false) {}

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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

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

/***/ "fYlc":
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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gH2n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toggleStretchLayout; });
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

/* harmony default export */ __webpack_exports__["a"] = (stretchLayout);

/***/ }),

/***/ "gTKk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+Ik6");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mIJh");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("iD+C");
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("BkJp");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FYTF");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const PostSmall = props => {
  const handleError = e => {
    console.log(e);
  }; // const [ deletePostMutation ] = useMutation(DELETE_POST, {
  //     onError: handleError
  // })


  const [removeSPMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__[/* REMOVE_SAVED_POST */ "i"], {
    onError: handleError
  });
  const p = props.post;
  const user = props.post.user ? props.post.user.username : props.user;
  const pallette = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_7__[/* palletteGenerator */ "a"])(p.color).colorPallette; // const handleRemove = async () => {
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_7__[/* triggerAlert */ "b"])('danger', `unfollowed$: unfollowed post '${p.title}'`, props.setAlert, props.resetAlert);
    }
  };

  if (props.type === 'saved') {
    return __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postWrapperSm
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postColorIndicator,
      style: {
        backgroundColor: pallette.color
      }
    }), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postContainer
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postHeader
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/user/[username]",
      as: `/user/${encodeURIComponent(user)}`
    }, __jsx("a", {
      className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUser} neutralize-link`
    }, __jsx("img", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUIcon,
      src: "/svg/userB.svg",
      alt: "user"
    }), __jsx("div", null, user)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[title]",
      as: `/post/${encodeURIComponent(p.title)}`
    }, __jsx("a", {
      className: "neutralize-link"
    }, __jsx("h3", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postTitle,
      style: {
        marginBottom: '7px'
      }
    }, p.title)))), __jsx("div", {
      onClick: () => handleSaveRemove(),
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postSmRemove
    }, "x"));
  }

  if (props.currentUser) {
    if (user === props.currentUser.username) {
      return __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postWrapperSm
      }, __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postColorIndicator,
        style: {
          backgroundColor: pallette.color
        }
      }), __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postContainer
      }, __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postHeader
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/user/[username]",
        as: `/user/${encodeURIComponent(user)}`
      }, __jsx("a", {
        className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUser} neutralize-link`
      }, __jsx("img", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUIcon,
        src: "/svg/userB.svg",
        alt: "user"
      }), __jsx("div", null, user)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/post/[title]",
        as: `/post/${encodeURIComponent(p.title)}`
      }, __jsx("a", {
        className: "neutralize-link"
      }, __jsx("h3", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postTitle,
        style: {
          marginBottom: '7px'
        }
      }, p.title)))));
    }
  }

  return __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postWrapperSm,
    style: {
      gridTemplateColumns: '8px auto'
    }
  }, __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postColorIndicator,
    style: {
      backgroundColor: pallette.color
    }
  }), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postContainer
  }, __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postHeader
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/user/[username]",
    as: `/user/${encodeURIComponent(user)}`
  }, __jsx("a", {
    className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUser} neutralize-link`
  }, __jsx("img", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.PHUIcon,
    src: "/svg/userB.svg",
    alt: "user"
  }), __jsx("div", null, user)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[title]",
    as: `/post/${encodeURIComponent(p.title)}`
  }, __jsx("a", {
    className: "neutralize-link"
  }, __jsx("h3", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postTitle,
    style: {
      marginBottom: '7px'
    }
  }, p.title)))));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setCurrentUserPosts: _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__[/* setCurrentUserPosts */ "d"],
  setCurrentUserSP: _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__[/* setCurrentUserSP */ "e"],
  setAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__[/* setAlert */ "c"],
  resetAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_6__[/* resetAlert */ "b"]
})(PostSmall));

/***/ }),

/***/ "gguc":
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iD+C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetAlert; });
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

/* harmony default export */ __webpack_exports__["a"] = (alertNotif);

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mIJh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCurrentUserPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setCurrentUserSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCurrentUserNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setPendingNotifications; });
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

/* harmony default export */ __webpack_exports__["a"] = (currentUser);

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rs92":
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

/***/ "uYsV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+Ik6");
/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mIJh");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FYTF");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("BkJp");
/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("iD+C");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("WxHd");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Post = props => {
  const post = props.post;
  const color = post.color;
  const colorPalette = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_7__[/* palletteGenerator */ "a"])(color).colorPallette;

  const handleError = e => {// console.log(e)
  };

  const [savePostMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__[/* SAVE_POST */ "j"], {
    onError: handleError
  });

  const handleSavePost = async () => {
    if (!props.token) {
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_7__[/* triggerAlert */ "b"])('warning', 'sign in$: must be signed in to perform this action', props.setAlert, props.resetAlert);
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
      Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_7__[/* triggerAlert */ "b"])('success', 'followed$: you are now following this post', props.setAlert, props.resetAlert);
    }
  };

  const handleShare = () => {
    Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_7__[/* triggerAlert */ "b"])('success', 'copied url$: copied url to dashboard', props.setAlert, props.resetAlert);
  };

  const mappedSkills = () => {
    let allSkills = [];

    for (const ind in post.skillNames) {
      allSkills.push(__jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/results/[searchQuery]",
        as: `/results/${encodeURIComponent(post.skillNames[ind])}`
      }, __jsx("a", {
        className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postSkillInsContainer} neutralize-link`
      }, __jsx("h4", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PSIName
      }, post.skillNames[ind]), __jsx("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PSIStats
      }, `${post.skillFills[ind]} / ${post.skillCapacities[ind]}`))));
    }

    return allSkills;
  };

  let cleanedTime = new Date(Number(post.time));
  cleanedTime = cleanedTime.toString().split(' '); // cleanedTime = cleanedTime.slice(1,4).join(' ') + ' ' + cleanedTime[4].split(':').slice(0,2).join(':')

  cleanedTime = cleanedTime.slice(1, 3).join(' ') + ', ' + cleanedTime[3];

  if (props.stretch) {
    return __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postWrapper
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postColorIndicator,
      style: {
        backgroundColor: colorPalette.color
      }
    }), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postContainer
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHeaderWrapper
    }, __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postUtilitiesContainer
    }, __jsx("div", {
      onClick: () => handleSavePost(),
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIconContainer
    }, __jsx("svg", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIcon,
      fill: colorPalette.color,
      viewBox: "0 -28 512.00002 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, __jsx("path", {
      d: "m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
    }))), __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__["CopyToClipboard"], {
      onCopy: () => handleShare(),
      text: `http://localhost:3000/post/${encodeURIComponent(post.title)}`,
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIconContainer
    }, __jsx("svg", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIcon,
      style: {
        width: '20px',
        paddingRight: '5px',
        paddingLeft: '5px'
      },
      fill: colorPalette.color,
      viewBox: "0 -22 512 511",
      xmlns: "http://www.w3.org/2000/svg"
    }, __jsx("path", {
      d: "m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0"
    })))), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHeaderStretch
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/user/[username]",
      as: `/user/${encodeURIComponent(post.user.username)}`
    }, __jsx("a", {
      className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHUserStretch} neutralize-link ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`
    }, __jsx("img", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHUIcon,
      src: "/svg/userB.svg",
      alt: "user"
    }), __jsx("div", null, post.user.username))), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHDate
    }, cleanedTime))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[title]",
      as: `/post/${encodeURIComponent(post.title)}`
    }, __jsx("a", {
      className: "neutralize-link"
    }, __jsx("h3", {
      className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postTitle} ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`
    }, post.title))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[title]",
      as: `/post/${encodeURIComponent(post.title)}`
    }, __jsx("a", {
      className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postDescription} neutralize-link ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`
    }, post.description)), __jsx("div", {
      className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postSkillsContainer
    }, mappedSkills())));
  }

  return __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postWrapper
  }, __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postColorIndicator,
    style: {
      backgroundColor: colorPalette.color
    }
  }), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postContainer
  }, __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHeader
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/user/${encodeURIComponent(post.user.username)}`
  }, __jsx("a", {
    className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHUser} neutralize-link ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`
  }, __jsx("img", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHUIcon,
    src: "/svg/userB.svg",
    alt: "user"
  }), __jsx("div", null, post.user.username))), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PHDate
  }, cleanedTime)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[title]",
    as: `/post/${encodeURIComponent(post.title)}`
  }, __jsx("a", {
    className: "neutralize-link"
  }, __jsx("h3", {
    className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postTitle} ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`
  }, post.title))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[title]",
    as: `/post/${encodeURIComponent(post.title)}`
  }, __jsx("a", {
    className: `${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postDescription} neutralize-link ${_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postHover}`
  }, post.description)), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postSkillsContainer
  }, mappedSkills()), __jsx("div", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.postUtilitiesContainer
  }, __jsx("div", {
    onClick: () => handleSavePost(),
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIconContainer
  }, __jsx("svg", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIcon,
    fill: colorPalette.color,
    viewBox: "0 -28 512.00002 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
  }))), __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__["CopyToClipboard"], {
    onCopy: () => handleShare(),
    text: `http://localhost:3000/post/${encodeURIComponent(post.title)}`,
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIconContainer
  }, __jsx("svg", {
    className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.PUIcon,
    style: {
      width: '20px',
      paddingRight: '5px',
      paddingLeft: '5px'
    },
    fill: colorPalette.color,
    viewBox: "0 -22 512 511",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0"
  }))))));
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    token: state.token
  };
};

/* unused harmony default export */ var _unused_webpack_default_export = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setCurrentUserSP: _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_5__[/* setCurrentUserSP */ "e"],
  setAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_8__[/* setAlert */ "c"],
  resetAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_8__[/* resetAlert */ "b"]
})(Post));

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });