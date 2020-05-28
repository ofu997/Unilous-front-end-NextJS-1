webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/reducers/currentUser */ \"./redux/reducers/currentUser.js\");\n/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/reducers/token */ \"./redux/reducers/token.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _navBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navBar/NavBar */ \"./components/navBar/NavBar.js\");\n/* harmony import */ var _src_schemas_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/schemas/queries */ \"./src/schemas/queries.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\Layout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nconst Layout = props => {\n  _s();\n\n  if (false) {}else {\n    if (localStorage.getItem('token') && props.token === null) {\n      props.setToken(localStorage.getItem('token'));\n    }\n\n    const currentUserId = props.currentUser ? props.currentUser._id : 'thisisfake';\n    const pendingNotifsQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"PENDING_NOTIFS\"], {\n      variables: {\n        userId: currentUserId\n      }\n    });\n    const currentUserUN = localStorage.getItem('username') ? localStorage.getItem('username') : 'thisisfake';\n    const userQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"FIND_USER\"], {\n      variables: {\n        username: currentUserUN\n      }\n    });\n    const userNotifs = props.currentUser ? props.currentUser.notifications.map(n => n._id) : [];\n    const notifsQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_src_schemas_queries__WEBPACK_IMPORTED_MODULE_7__[\"LIST_OF_NOTIFICATIONS\"], {\n      variables: {\n        notifications: userNotifs\n      }\n    });\n\n    const notifsQueryConditions = () => {\n      if (!notifsQuery.data) return null;\n      if (!props.currentUser) return null;\n      if (notifsQuery.loading) return null;\n      if (notifsQuery.data.listOfNotifications.length < 1) return null;\n      if (!props.currentUser.notifications.length) return null;\n      if (props.currentUser.notifications[0].userFrom) return null;\n      return notifsQuery.data.listOfNotifications;\n    };\n\n    const pendingNotifsConditions = () => {\n      if (!pendingNotifsQuery.data) return null;\n      if (props.currentUser && props.currentUser.pendingNotifications) return null;\n      return pendingNotifsQuery.data.searchAwaitingNotifs;\n    };\n\n    const userConditions = (query, reducer) => {\n      if (!query.data) return null;\n      if (!query.data.findUser) return null;\n      if (reducer) return null;\n      return query.data.findUser;\n    };\n\n    const notifsFilled = notifsQueryConditions();\n    const pendingNotifs = pendingNotifsConditions();\n    const user = userConditions(userQuery, props.currentUser);\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n      if (user) {\n        props.setCurrentUser(user);\n      }\n\n      if (pendingNotifs) {\n        props.setPendingNotifications(pendingNotifs);\n      }\n\n      if (notifsFilled) {\n        props.setCurrentUserNotifications(notifsFilled);\n      }\n    }, [notifsFilled, props.setCurrentUserNotifications, user, props.setCurrentUser, pendingNotifs, props.setPendingNotifications, props]);\n    return __jsx(\"div\", {\n      className: \"wrapper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }\n    }, __jsx(\"title\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 21\n      }\n    }, \"Unilous test\"), __jsx(\"meta\", {\n      name: \"og:title\",\n      content: \"Unilous test\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 21\n      }\n    })), __jsx(_navBar_NavBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      query: query,\n      onQueryChange: onQueryChange,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }\n    }), props.children);\n  }\n};\n\n_s(Layout, \"nmbHpugDcxTnoIiFW47Z14/biKI=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Layout;\n\nconst mapStateToProps = state => {\n  return {\n    token: state.token,\n    currentUser: state.currentUser\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setToken: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_token__WEBPACK_IMPORTED_MODULE_2__[\"setToken\"], dispatch),\n    setCurrentUser: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentUser\"], dispatch),\n    setPendingNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setPendingNotifications\"], dispatch),\n    setCurrentUserNotifications: Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"bindActionCreators\"])(_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentUserNotifications\"], dispatch)\n  };\n};\n\n_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentUser\"];\n_redux_reducers_currentUser__WEBPACK_IMPORTED_MODULE_1__[\"setPendingNotifications\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Layout));\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwic2V0VG9rZW4iLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJfaWQiLCJwZW5kaW5nTm90aWZzUXVlcnkiLCJ1c2VRdWVyeSIsIlBFTkRJTkdfTk9USUZTIiwidmFyaWFibGVzIiwidXNlcklkIiwiY3VycmVudFVzZXJVTiIsInVzZXJRdWVyeSIsIkZJTkRfVVNFUiIsInVzZXJuYW1lIiwidXNlck5vdGlmcyIsIm5vdGlmaWNhdGlvbnMiLCJtYXAiLCJuIiwibm90aWZzUXVlcnkiLCJMSVNUX09GX05PVElGSUNBVElPTlMiLCJub3RpZnNRdWVyeUNvbmRpdGlvbnMiLCJkYXRhIiwibG9hZGluZyIsImxpc3RPZk5vdGlmaWNhdGlvbnMiLCJsZW5ndGgiLCJ1c2VyRnJvbSIsInBlbmRpbmdOb3RpZnNDb25kaXRpb25zIiwicGVuZGluZ05vdGlmaWNhdGlvbnMiLCJzZWFyY2hBd2FpdGluZ05vdGlmcyIsInVzZXJDb25kaXRpb25zIiwicXVlcnkiLCJyZWR1Y2VyIiwiZmluZFVzZXIiLCJub3RpZnNGaWxsZWQiLCJwZW5kaW5nTm90aWZzIiwidXNlciIsInVzZUVmZmVjdCIsInNldEN1cnJlbnRVc2VyIiwic2V0UGVuZGluZ05vdGlmaWNhdGlvbnMiLCJzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMiLCJvblF1ZXJ5Q2hhbmdlIiwiY2hpbGRyZW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFN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QjZCVSw0RCxFQUlUQSw0RCxFQUlFQSw0RDs7O0tBeEJ0QlYsTTs7QUEyRU4sTUFBTThDLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDLFNBQU87QUFDQTNDLFNBQUssRUFBRTJDLEtBQUssQ0FBQzNDLEtBRGI7QUFFQUcsZUFBVyxFQUFFd0MsS0FBSyxDQUFDeEM7QUFGbkIsR0FBUDtBQUlBLENBTEQ7O0FBTUEsTUFBTXlDLGtCQUFrQixHQUFJQyxRQUFELElBQWM7QUFDckMsU0FBTztBQUNINUMsWUFBUSxFQUFFNkMsZ0VBQWtCLENBQUM3Qyw4REFBRCxFQUFXNEMsUUFBWCxDQUR6QjtBQUVIUixrQkFBYyxFQUFFUyxnRUFBa0IsQ0FBQ1QsMEVBQUQsRUFBaUJRLFFBQWpCLENBRi9CO0FBR0hQLDJCQUF1QixFQUFFUSxnRUFBa0IsQ0FBQ1IsbUZBQUQsRUFBMEJPLFFBQTFCLENBSHhDO0FBSUhOLCtCQUEyQixFQUFFTyxnRUFBa0IsQ0FBQ1AsdUZBQUQsRUFBOEJNLFFBQTlCO0FBSjVDLEdBQVA7QUFNSCxDQVBEOztBQVFBUiwwRUFBYztBQUNkQyxtRkFBdUI7QUFFUlMsMEhBQU8sQ0FDbEJMLGVBRGtCLEVBRWxCRSxrQkFGa0IsQ0FBUCxDQUdiaEQsTUFIYSxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlciwgc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIHNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2N1cnJlbnRVc2VyJ1xyXG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IEZJTkRfVVNFUiwgUEVORElOR19OT1RJRlMsIExJU1RfT0ZfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4uL3NyYy9zY2hlbWFzL3F1ZXJpZXMnXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlVuaWxvdXMgdGVzdDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PVwiVW5pbG91cyB0ZXN0XCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2QmFyIHF1ZXJ5PXtxdWVyeX0gb25RdWVyeUNoYW5nZT17b25RdWVyeUNoYW5nZX0gbm9Vc2VyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAmJiBwcm9wcy50b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHByb3BzLnNldFRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci5faWQgOiAndGhpc2lzZmFrZSdcclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzUXVlcnkgPSB1c2VRdWVyeShQRU5ESU5HX05PVElGUywge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6ICB7dXNlcklkOiBjdXJyZW50VXNlcklkfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJVTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgOiAndGhpc2lzZmFrZSdcclxuICAgICAgICBjb25zdCB1c2VyUXVlcnkgPSB1c2VRdWVyeShGSU5EX1VTRVIsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7dXNlcm5hbWU6IGN1cnJlbnRVc2VyVU59XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCB1c2VyTm90aWZzID0gcHJvcHMuY3VycmVudFVzZXIgPyBwcm9wcy5jdXJyZW50VXNlci5ub3RpZmljYXRpb25zLm1hcChuID0+IG4uX2lkKSA6IFtdXHJcbiAgICAgICAgY29uc3Qgbm90aWZzUXVlcnkgPSB1c2VRdWVyeShMSVNUX09GX05PVElGSUNBVElPTlMsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7bm90aWZpY2F0aW9uczogdXNlck5vdGlmc31cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG5vdGlmc1F1ZXJ5Q29uZGl0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub3RpZnNRdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAobm90aWZzUXVlcnkubG9hZGluZykgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKG5vdGlmc1F1ZXJ5LmRhdGEubGlzdE9mTm90aWZpY2F0aW9ucy5sZW5ndGggPCAxKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAoIXByb3BzLmN1cnJlbnRVc2VyLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAocHJvcHMuY3VycmVudFVzZXIubm90aWZpY2F0aW9uc1swXS51c2VyRnJvbSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIG5vdGlmc1F1ZXJ5LmRhdGEubGlzdE9mTm90aWZpY2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwZW5kaW5nTm90aWZzQ29uZGl0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwZW5kaW5nTm90aWZzUXVlcnkuZGF0YSkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgaWYgKHByb3BzLmN1cnJlbnRVc2VyICYmIHByb3BzLmN1cnJlbnRVc2VyLnBlbmRpbmdOb3RpZmljYXRpb25zKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gcGVuZGluZ05vdGlmc1F1ZXJ5LmRhdGEuc2VhcmNoQXdhaXRpbmdOb3RpZnNcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlckNvbmRpdGlvbnMgPSAocXVlcnksIHJlZHVjZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFxdWVyeS5kYXRhKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICBpZiAoIXF1ZXJ5LmRhdGEuZmluZFVzZXIpIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIGlmIChyZWR1Y2VyKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gcXVlcnkuZGF0YS5maW5kVXNlclxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBub3RpZnNGaWxsZWQgPSBub3RpZnNRdWVyeUNvbmRpdGlvbnMoKVxyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdOb3RpZnMgPSBwZW5kaW5nTm90aWZzQ29uZGl0aW9ucygpXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDb25kaXRpb25zKHVzZXJRdWVyeSwgcHJvcHMuY3VycmVudFVzZXIpXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldEN1cnJlbnRVc2VyKHVzZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBlbmRpbmdOb3RpZnMpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldFBlbmRpbmdOb3RpZmljYXRpb25zKHBlbmRpbmdOb3RpZnMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vdGlmc0ZpbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0Q3VycmVudFVzZXJOb3RpZmljYXRpb25zKG5vdGlmc0ZpbGxlZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtub3RpZnNGaWxsZWQsIHByb3BzLnNldEN1cnJlbnRVc2VyTm90aWZpY2F0aW9ucywgdXNlciwgcHJvcHMuc2V0Q3VycmVudFVzZXIsIHBlbmRpbmdOb3RpZnMsIHByb3BzLnNldFBlbmRpbmdOb3RpZmljYXRpb25zLCBwcm9wc10pXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Vbmlsb3VzIHRlc3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJVbmlsb3VzIHRlc3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPE5hdkJhciBxdWVyeT17cXVlcnl9IG9uUXVlcnlDaGFuZ2U9e29uUXVlcnlDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyXHJcblx0fVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRUb2tlbjogYmluZEFjdGlvbkNyZWF0b3JzKHNldFRva2VuLCBkaXNwYXRjaCksXHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXI6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlciwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHNldFBlbmRpbmdOb3RpZmljYXRpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0UGVuZGluZ05vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgICAgICBzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRDdXJyZW50VXNlck5vdGlmaWNhdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5zZXRDdXJyZW50VXNlclxyXG5zZXRQZW5kaW5nTm90aWZpY2F0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExheW91dCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})