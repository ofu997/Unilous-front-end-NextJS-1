webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_blog_BlogPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/blog/BlogPost */ \"./components/blog/BlogPost.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\pages\\\\blog\\\\index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nconst blogs = [{\n  id: 1,\n  title: 'Converting a React application with Redux and Apollo to Next.JS (2020)',\n  image: 'https://i.imgur.com/mW3nk8o.jpg',\n  link: '/blog/react_to_nextjs',\n  author: 'SebastianSosa',\n  description: 'Although Next.JS is already built on the shoulders of React, there are still many challenges which need to be overcome before getting the application up and running. For this guide I will touch on the key changes I had to make when converting my React application with the centralized state management: Redux, and the GraphQL API: Apollo, to Next.JS.'\n}];\n\nconst BlogIndex = () => {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, \"Blog | Unilous\"), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Contact the Unilous team\",\n    key: \"description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"navbar-height\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }), blogs.map(item => __jsx(_components_blog_BlogPost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    key: item.id,\n    title: item.title,\n    description: item.description,\n    link: item.link,\n    image: item.image,\n    author: item.author,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  })));\n};\n\n_c = BlogIndex;\n\nconst mapStateToProps = state => {\n  return {// currentUser: state.currentUser,\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {// setUserDD: bindActionCreators(setUserDD, dispatch),\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(BlogIndex));\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogIndex\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2luZGV4LmpzP2ZmMjgiXSwibmFtZXMiOlsiYmxvZ3MiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJsaW5rIiwiYXV0aG9yIiwiZGVzY3JpcHRpb24iLCJCbG9nSW5kZXgiLCJtYXAiLCJpdGVtIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFDLENBQ1I7QUFDSUMsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFLHdFQUZYO0FBR0lDLE9BQUssRUFBRSxpQ0FIWDtBQUlJQyxNQUFJLEVBQUUsdUJBSlY7QUFLSUMsUUFBTSxFQUFFLGVBTFo7QUFNSUMsYUFBVyxFQUFFO0FBTmpCLENBRFEsQ0FBWjs7QUFXQSxNQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUNwQixTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFFSTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBQywwQkFBakM7QUFBNEQsT0FBRyxFQUFDLGFBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFNU1AsS0FBSyxDQUFDUSxHQUFOLENBQVVDLElBQUksSUFDWCxNQUFDLGlFQUFEO0FBQ0ksT0FBRyxFQUFFQSxJQUFJLENBQUNSLEVBRGQ7QUFFSSxTQUFLLEVBQUVRLElBQUksQ0FBQ1AsS0FGaEI7QUFHSSxlQUFXLEVBQUVPLElBQUksQ0FBQ0gsV0FIdEI7QUFJSSxRQUFJLEVBQUVHLElBQUksQ0FBQ0wsSUFKZjtBQUtJLFNBQUssRUFBRUssSUFBSSxDQUFDTixLQUxoQjtBQU1JLFVBQU0sRUFBRU0sSUFBSSxDQUFDSixNQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsQ0FOVCxDQURKO0FBbUJILENBcEJEOztLQUFNRSxTOztBQXNCTixNQUFNRyxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxTQUFPLENBQ0E7QUFEQSxHQUFQO0FBR0EsQ0FKRDs7QUFNQSxNQUFNQyxrQkFBa0IsR0FBSUMsUUFBRCxJQUFjO0FBQ3JDLFNBQU8sQ0FDSDtBQURHLEdBQVA7QUFHSCxDQUpEOztBQU1lQywwSEFBTyxDQUNsQkosZUFEa0IsRUFFbEJFLGtCQUZrQixDQUFQLENBR2JMLFNBSGEsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgQmxvZ1Bvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ibG9nL0Jsb2dQb3N0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuY29uc3QgYmxvZ3M9W1xyXG4gICAgeyAgICBcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogJ0NvbnZlcnRpbmcgYSBSZWFjdCBhcHBsaWNhdGlvbiB3aXRoIFJlZHV4IGFuZCBBcG9sbG8gdG8gTmV4dC5KUyAoMjAyMCknLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9tVzNuazhvLmpwZycsXHJcbiAgICAgICAgbGluazogJy9ibG9nL3JlYWN0X3RvX25leHRqcycsXHJcbiAgICAgICAgYXV0aG9yOiAnU2ViYXN0aWFuU29zYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbHRob3VnaCBOZXh0LkpTIGlzIGFscmVhZHkgYnVpbHQgb24gdGhlIHNob3VsZGVycyBvZiBSZWFjdCwgdGhlcmUgYXJlIHN0aWxsIG1hbnkgY2hhbGxlbmdlcyB3aGljaCBuZWVkIHRvIGJlIG92ZXJjb21lIGJlZm9yZSBnZXR0aW5nIHRoZSBhcHBsaWNhdGlvbiB1cCBhbmQgcnVubmluZy4gRm9yIHRoaXMgZ3VpZGUgSSB3aWxsIHRvdWNoIG9uIHRoZSBrZXkgY2hhbmdlcyBJIGhhZCB0byBtYWtlIHdoZW4gY29udmVydGluZyBteSBSZWFjdCBhcHBsaWNhdGlvbiB3aXRoIHRoZSBjZW50cmFsaXplZCBzdGF0ZSBtYW5hZ2VtZW50OiBSZWR1eCwgYW5kIHRoZSBHcmFwaFFMIEFQSTogQXBvbGxvLCB0byBOZXh0LkpTLicsXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCBCbG9nSW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCBVbmlsb3VzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb250YWN0IHRoZSBVbmlsb3VzIHRlYW1cIiBrZXk9XCJkZXNjcmlwdGlvblwiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAge2Jsb2dzLm1hcChpdGVtID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9nUG9zdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICAvLyBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gc2V0VXNlckREOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0VXNlckRELCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShCbG9nSW5kZXgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n");

/***/ })

})