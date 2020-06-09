webpackHotUpdate("static\\development\\pages\\homePage.js",{

/***/ "./components/newNavBar/signed/NotSigned.js":
/*!**************************************************!*\
  !*** ./components/newNavBar/signed/NotSigned.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ \"./styles/newNavBar.module.css\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _user_form_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/form/Register */ \"./components/user/form/Register.js\");\n/* harmony import */ var _user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/form/SignIn */ \"./components/user/form/SignIn.js\");\n/* harmony import */ var _redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/userDD */ \"./redux/reducers/userDD.js\");\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\newNavBar\\\\signed\\\\NotSigned.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst NotSigned = props => {\n  _s();\n\n  const {\n    0: userState,\n    1: setUserState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleUserState = state => {\n    if (state === userState) {\n      setUserState(false);\n    } else {\n      setUserState(state);\n    }\n  };\n\n  const showUserDD = userState ? {\n    display: 'block'\n  } : {\n    display: 'none'\n  };\n  const showInDD = userState ? userState === 'register' ? __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 36\n    }\n  }) : __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 51\n    }\n  }) : null;\n  return __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userWrapper,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,\n    onClick: () => handleUserState('signin'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, \"sign in\"), __jsx(\"button\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,\n    onClick: () => handleUserState('register'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \"register\")), __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userDD,\n    style: showUserDD,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"custom-hr\",\n    style: {\n      backgroundColor: '#282828'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }), showInDD));\n};\n\n_s(NotSigned, \"nO6LbD8Uv9I3kvQbWjVez6I5k/k=\");\n\n_c = NotSigned;\n\nconst mapStateToProps = state => {\n  return {\n    currentUser: state.currentUser,\n    token: state.token,\n    userDD: state.userDD // alertNotif: state.alertNotif\n\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"bindActionCreators\"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__[\"setUserDD\"], dispatch) // resetAlert: bindActionCreators(resetAlert, dispatch),\n\n  };\n};\n\n_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__[\"setUserDD\"];\n_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__[\"resetUserDD\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(NotSigned));\n\nvar _c;\n\n$RefreshReg$(_c, \"NotSigned\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci9zaWduZWQvTm90U2lnbmVkLmpzPzM0NGQiXSwibmFtZXMiOlsiTm90U2lnbmVkIiwicHJvcHMiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJ1c2VTdGF0ZSIsImhhbmRsZVVzZXJTdGF0ZSIsInN0YXRlIiwic2hvd1VzZXJERCIsImRpc3BsYXkiLCJzaG93SW5ERCIsIk5CIiwidXNlcldyYXBwZXIiLCJ1c2VyQ29udGFpbmVyIiwic2lnbk9wdGlvbiIsInVzZXJERCIsImJhY2tncm91bmRDb2xvciIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwidG9rZW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldFVzZXJERCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInJlc2V0VXNlckREIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDekIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7O0FBQ0EsUUFBTUMsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFDL0IsUUFBSUEsS0FBSyxLQUFLSixTQUFkLEVBQXlCO0FBQUNDLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQW9CLEtBQTlDLE1BQ0s7QUFBQ0Esa0JBQVksQ0FBQ0csS0FBRCxDQUFaO0FBQW9CO0FBQzdCLEdBSEQ7O0FBS0EsUUFBTUMsVUFBVSxHQUFHTCxTQUFTLEdBQUc7QUFBQ00sV0FBTyxFQUFFO0FBQVYsR0FBSCxHQUF3QjtBQUFDQSxXQUFPLEVBQUU7QUFBVixHQUFwRDtBQUNBLFFBQU1DLFFBQVEsR0FBR1AsU0FBUyxHQUN0QkEsU0FBUyxLQUFLLFVBQWQsR0FBMkIsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTNCLEdBQTBDLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURwQixHQUV4QixJQUZGO0FBSUEsU0FDSTtBQUFLLGFBQVMsRUFBRVEsbUVBQUUsQ0FBQ0MsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCxtRUFBRSxDQUFDRSxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUVGLG1FQUFFLENBQUNHLFVBQXRCO0FBQWtDLFdBQU8sRUFBRSxNQUFNUixlQUFlLENBQUMsUUFBRCxDQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUFRLGFBQVMsRUFBRUssbUVBQUUsQ0FBQ0csVUFBdEI7QUFBa0MsV0FBTyxFQUFFLE1BQU1SLGVBQWUsQ0FBQyxVQUFELENBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosQ0FESixFQUtJO0FBQUssYUFBUyxFQUFFSyxtRUFBRSxDQUFDSSxNQUFuQjtBQUEyQixTQUFLLEVBQUVQLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUssRUFBRTtBQUFDUSxxQkFBZSxFQUFFO0FBQWxCLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLTixRQUZMLENBTEosQ0FESjtBQVlILENBeEJEOztHQUFNVCxTOztLQUFBQSxTOztBQTBCTixNQUFNZ0IsZUFBZSxHQUFJVixLQUFELElBQVc7QUFDbEMsU0FBTztBQUNBVyxlQUFXLEVBQUVYLEtBQUssQ0FBQ1csV0FEbkI7QUFFQUMsU0FBSyxFQUFFWixLQUFLLENBQUNZLEtBRmI7QUFHQUosVUFBTSxFQUFFUixLQUFLLENBQUNRLE1BSGQsQ0FJQTs7QUFKQSxHQUFQO0FBTUEsQ0FQRDs7QUFTQSxNQUFNSyxrQkFBa0IsR0FBSUMsUUFBRCxJQUFjO0FBQ3JDLFNBQU87QUFDSEMsYUFBUyxFQUFFQyxnRUFBa0IsQ0FBQ0QsZ0VBQUQsRUFBWUQsUUFBWixDQUQxQixDQUVIOztBQUZHLEdBQVA7QUFJSCxDQUxEOztBQU1BQyxnRUFBUztBQUNURSxrRUFBVztBQUVJQywwSEFBTyxDQUNsQlIsZUFEa0IsRUFFbEJHLGtCQUZrQixDQUFQLENBR2JuQixTQUhhLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld05hdkJhci9zaWduZWQvTm90U2lnbmVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vLi4vdXNlci9mb3JtL1JlZ2lzdGVyJ1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uLy4uL3VzZXIvZm9ybS9TaWduSW4nXHJcbmltcG9ydCB7c2V0VXNlckRELCByZXNldFVzZXJERH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdXNlckREJ1xyXG5cclxuY29uc3QgTm90U2lnbmVkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHVzZXJTdGF0ZSkge3NldFVzZXJTdGF0ZShmYWxzZSl9XHJcbiAgICAgICAgZWxzZSB7c2V0VXNlclN0YXRlKHN0YXRlKX1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VXNlckREID0gdXNlclN0YXRlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gdXNlclN0YXRlID8gXHJcbiAgICAgICAgdXNlclN0YXRlID09PSAncmVnaXN0ZXInID8gPFJlZ2lzdGVyIC8+IDogPFNpZ25JbiAvPlxyXG4gICAgOiBudWxsXHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlcldyYXBwZXJ9ICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5zaWduT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ3NpZ25pbicpfSA+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnNpZ25PcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVVzZXJTdGF0ZSgncmVnaXN0ZXInKX0gPnJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlckREfSBzdHlsZT17c2hvd1VzZXJERH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1oclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9fSAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbkREfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIHVzZXJERDogc3RhdGUudXNlckRELFxyXG4gICAgICAgIC8vIGFsZXJ0Tm90aWY6IHN0YXRlLmFsZXJ0Tm90aWZcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRVc2VyREQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgICAgICAvLyByZXNldEFsZXJ0OiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRBbGVydCwgZGlzcGF0Y2gpLFxyXG4gICAgfVxyXG59XHJcbnNldFVzZXJERFxyXG5yZXNldFVzZXJERFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKE5vdFNpZ25lZCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/newNavBar/signed/NotSigned.js\n");

/***/ })

})