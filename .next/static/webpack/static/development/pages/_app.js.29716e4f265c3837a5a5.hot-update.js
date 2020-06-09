webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _reducers_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/token */ \"./redux/reducers/token.js\");\n/* harmony import */ var _reducers_currentUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/currentUser */ \"./redux/reducers/currentUser.js\");\n/* harmony import */ var _reducers_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/posts */ \"./redux/reducers/posts.js\");\n/* harmony import */ var _reducers_alertNotif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/alertNotif */ \"./redux/reducers/alertNotif.js\");\n/* harmony import */ var _reducers_stretchLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/stretchLayout */ \"./redux/reducers/stretchLayout.js\");\n/* harmony import */ var _reducers_eventSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/eventSearch */ \"./redux/reducers/eventSearch.js\");\n/* harmony import */ var _reducers_userDD__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/userDD */ \"./redux/reducers/userDD.js\");\n\n\n\n\n\n\n\n\n\n\nconst bindMiddleware = middleware => {\n  if (true) {\n    const {\n      composeWithDevTools\n    } = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n\n    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware));\n  }\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware);\n};\n\nconst reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  token: _reducers_token__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  currentUser: _reducers_currentUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  posts: _reducers_posts__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  alertNotif: _reducers_alertNotif__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  stretchLayout: _reducers_stretchLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  eventSearch: _reducers_eventSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  userDD: _reducers_userDD__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n});\n\nconst store = () => Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz82NTI0Il0sIm5hbWVzIjpbImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJyZXF1aXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwicmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJ0b2tlbiIsImN1cnJlbnRVc2VyIiwicG9zdHMiLCJhbGVydE5vdGlmIiwic3RyZXRjaExheW91dCIsImV2ZW50U2VhcmNoIiwidXNlckREIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInRodW5rTWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxVQUFVLElBQUk7QUFDakMsWUFBMkM7QUFDekMsVUFBTTtBQUFFQztBQUFGLFFBQTBCQyxtQkFBTyxDQUFDLGtGQUFELENBQXZDOztBQUNBLFdBQU9ELG1CQUFtQixDQUFDRSw2REFBZSxDQUFDLEdBQUdILFVBQUosQ0FBaEIsQ0FBMUI7QUFDRDs7QUFDRCxTQUFPRyw2REFBZSxDQUFDLEdBQUdILFVBQUosQ0FBdEI7QUFDRCxDQU5IOztBQVFBLE1BQU1JLFFBQVEsR0FBR0MsNkRBQWUsQ0FBQztBQUM3QkMsZ0VBRDZCO0FBRTdCQyw0RUFGNkI7QUFHN0JDLGdFQUg2QjtBQUk3QkMsMEVBSjZCO0FBSzdCQyxnRkFMNkI7QUFNN0JDLDRFQU42QjtBQU83QkMsa0VBQU1BO0FBUHVCLENBQUQsQ0FBaEM7O0FBVUEsTUFBTUMsS0FBSyxHQUFHLE1BQU1DLHlEQUFXLENBQUNWLFFBQUQsRUFBV0wsY0FBYyxDQUFDLENBQUNnQixtREFBRCxDQUFELENBQXpCLENBQS9COztBQUVlRixvRUFBZiIsImZpbGUiOiIuL3JlZHV4L3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCB0b2tlbiBmcm9tICcuL3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgY3VycmVudFVzZXIgZnJvbSAnLi9yZWR1Y2Vycy9jdXJyZW50VXNlcidcclxuaW1wb3J0IHBvc3RzIGZyb20gJy4vcmVkdWNlcnMvcG9zdHMnXHJcbmltcG9ydCBhbGVydE5vdGlmIGZyb20gJy4vcmVkdWNlcnMvYWxlcnROb3RpZidcclxuaW1wb3J0IHN0cmV0Y2hMYXlvdXQgZnJvbSAnLi9yZWR1Y2Vycy9zdHJldGNoTGF5b3V0J1xyXG5pbXBvcnQgZXZlbnRTZWFyY2ggZnJvbSAnLi9yZWR1Y2Vycy9ldmVudFNlYXJjaCdcclxuaW1wb3J0IHVzZXJERCBmcm9tICcuL3JlZHVjZXJzL3VzZXJERCdcclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gbWlkZGxld2FyZSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpXHJcbiAgICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcclxuICAgIH1cclxuICAgIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcclxuICB9XHJcblxyXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICB0b2tlbixcclxuICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgcG9zdHMsXHJcbiAgICBhbGVydE5vdGlmLFxyXG4gICAgc3RyZXRjaExheW91dCxcclxuICAgIGV2ZW50U2VhcmNoLFxyXG4gICAgdXNlckREXHJcbn0pXHJcblxyXG5jb25zdCBzdG9yZSA9ICgpID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBiaW5kTWlkZGxld2FyZShbdGh1bmtNaWRkbGV3YXJlXSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ })

})