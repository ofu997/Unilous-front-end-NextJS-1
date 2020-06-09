webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/newNavBar/signed/NotSigned.js":
/*!**************************************************!*\
  !*** ./components/newNavBar/signed/NotSigned.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ \"./styles/newNavBar.module.css\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _user_form_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/form/Register */ \"./components/user/form/Register.js\");\n/* harmony import */ var _user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/form/SignIn */ \"./components/user/form/SignIn.js\");\n/* harmony import */ var _redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/userDD */ \"./redux/reducers/userDD.js\");\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\newNavBar\\\\signed\\\\NotSigned.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst NotSigned = props => {\n  const handleUserState = state => {\n    if (state === props.userDD) {\n      props.resetUserDD();\n    } else {\n      props.setUserDD(state);\n    }\n  };\n\n  const showUserDD = props.userDD ? {\n    display: 'block'\n  } : {\n    display: 'none'\n  };\n  const showInDD = props.userDD ? props.userDD === 'register' ? __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 39\n    }\n  }) : props.userDD === 'signin' : null;\n  return __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userWrapper,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,\n    onClick: () => handleUserState('signin'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, \"sign in\"), __jsx(\"button\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,\n    onClick: () => handleUserState('register'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \"register\")), __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userDD,\n    style: showUserDD,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"custom-hr\",\n    style: {\n      backgroundColor: '#282828'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }), showInDD));\n};\n\n_c = NotSigned;\n\nconst mapStateToProps = state => {\n  return {\n    currentUser: state.currentUser,\n    token: state.token,\n    userDD: state.userDD\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"bindActionCreators\"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__[\"setUserDD\"], dispatch),\n    resetUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"bindActionCreators\"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__[\"resetUserDD\"], dispatch)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(NotSigned));\n\nvar _c;\n\n$RefreshReg$(_c, \"NotSigned\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci9zaWduZWQvTm90U2lnbmVkLmpzPzM0NGQiXSwibmFtZXMiOlsiTm90U2lnbmVkIiwicHJvcHMiLCJoYW5kbGVVc2VyU3RhdGUiLCJzdGF0ZSIsInVzZXJERCIsInJlc2V0VXNlckREIiwic2V0VXNlckREIiwic2hvd1VzZXJERCIsImRpc3BsYXkiLCJzaG93SW5ERCIsIk5CIiwidXNlcldyYXBwZXIiLCJ1c2VyQ29udGFpbmVyIiwic2lnbk9wdGlvbiIsImJhY2tncm91bmRDb2xvciIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwidG9rZW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUN6QixRQUFNQyxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUMvQixRQUFJQSxLQUFLLEtBQUtGLEtBQUssQ0FBQ0csTUFBcEIsRUFBNEI7QUFBQ0gsV0FBSyxDQUFDSSxXQUFOO0FBQW9CLEtBQWpELE1BQ0s7QUFBQ0osV0FBSyxDQUFDSyxTQUFOLENBQWdCSCxLQUFoQjtBQUF1QjtBQUNoQyxHQUhEOztBQUtBLFFBQU1JLFVBQVUsR0FBR04sS0FBSyxDQUFDRyxNQUFOLEdBQWU7QUFBQ0ksV0FBTyxFQUFFO0FBQVYsR0FBZixHQUFvQztBQUFDQSxXQUFPLEVBQUU7QUFBVixHQUF2RDtBQUNBLFFBQU1DLFFBQVEsR0FBR1IsS0FBSyxDQUFDRyxNQUFOLEdBQ2JILEtBQUssQ0FBQ0csTUFBTixLQUFpQixVQUFqQixHQUE4QixNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUIsR0FDQUgsS0FBSyxDQUFDRyxNQUFOLEtBQWlCLFFBRkosR0FHZixJQUhGO0FBS0EsU0FDSTtBQUFLLGFBQVMsRUFBRU0sbUVBQUUsQ0FBQ0MsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCxtRUFBRSxDQUFDRSxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUVGLG1FQUFFLENBQUNHLFVBQXRCO0FBQWtDLFdBQU8sRUFBRSxNQUFNWCxlQUFlLENBQUMsUUFBRCxDQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUFRLGFBQVMsRUFBRVEsbUVBQUUsQ0FBQ0csVUFBdEI7QUFBa0MsV0FBTyxFQUFFLE1BQU1YLGVBQWUsQ0FBQyxVQUFELENBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosQ0FESixFQUtJO0FBQUssYUFBUyxFQUFFUSxtRUFBRSxDQUFDTixNQUFuQjtBQUEyQixTQUFLLEVBQUVHLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUssRUFBRTtBQUFDTyxxQkFBZSxFQUFFO0FBQWxCLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLTCxRQUZMLENBTEosQ0FESjtBQVlILENBeEJEOztLQUFNVCxTOztBQTBCTixNQUFNZSxlQUFlLEdBQUlaLEtBQUQsSUFBVztBQUNsQyxTQUFPO0FBQ0FhLGVBQVcsRUFBRWIsS0FBSyxDQUFDYSxXQURuQjtBQUVBQyxTQUFLLEVBQUVkLEtBQUssQ0FBQ2MsS0FGYjtBQUdBYixVQUFNLEVBQUVELEtBQUssQ0FBQ0M7QUFIZCxHQUFQO0FBS0EsQ0FORDs7QUFRQSxNQUFNYyxrQkFBa0IsR0FBSUMsUUFBRCxJQUFjO0FBQ3JDLFNBQU87QUFDSGIsYUFBUyxFQUFFYyxnRUFBa0IsQ0FBQ2QsZ0VBQUQsRUFBWWEsUUFBWixDQUQxQjtBQUVIZCxlQUFXLEVBQUVlLGdFQUFrQixDQUFDZixrRUFBRCxFQUFjYyxRQUFkO0FBRjVCLEdBQVA7QUFJSCxDQUxEOztBQU9lRSwwSEFBTyxDQUNsQk4sZUFEa0IsRUFFbEJHLGtCQUZrQixDQUFQLENBR2JsQixTQUhhLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld05hdkJhci9zaWduZWQvTm90U2lnbmVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vLi4vdXNlci9mb3JtL1JlZ2lzdGVyJ1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uLy4uL3VzZXIvZm9ybS9TaWduSW4nXHJcbmltcG9ydCB7c2V0VXNlckRELCByZXNldFVzZXJERH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdXNlckREJ1xyXG5cclxuY29uc3QgTm90U2lnbmVkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHByb3BzLnVzZXJERCkge3Byb3BzLnJlc2V0VXNlckREKCl9XHJcbiAgICAgICAgZWxzZSB7cHJvcHMuc2V0VXNlckREKHN0YXRlKX1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VXNlckREID0gcHJvcHMudXNlckREID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gcHJvcHMudXNlckREID8gXHJcbiAgICAgICAgcHJvcHMudXNlckREID09PSAncmVnaXN0ZXInID8gPFJlZ2lzdGVyIC8+IDpcclxuICAgICAgICBwcm9wcy51c2VyREQgPT09ICdzaWduaW4nXHJcbiAgICA6IG51bGxcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyV3JhcHBlcn0gICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnNpZ25PcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVVzZXJTdGF0ZSgnc2lnbmluJyl9ID5zaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIuc2lnbk9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclN0YXRlKCdyZWdpc3RlcicpfSA+cmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyRER9IHN0eWxlPXtzaG93VXNlckREfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWhyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyODI4J319IC8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0luRER9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcclxuICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXHJcbiAgICAgICAgdXNlckREOiBzdGF0ZS51c2VyREQsXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0VXNlckREOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0VXNlckRELCBkaXNwYXRjaCksXHJcbiAgICAgICAgcmVzZXRVc2VyREQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhyZXNldFVzZXJERCwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoTm90U2lnbmVkKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/newNavBar/signed/NotSigned.js\n");

/***/ })

})