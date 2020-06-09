webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/newNavBar/signed/NotSigned.js":
/*!**************************************************!*\
  !*** ./components/newNavBar/signed/NotSigned.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ \"./styles/newNavBar.module.css\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _user_form_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/form/Register */ \"./components/user/form/Register.js\");\n/* harmony import */ var _user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/form/SignIn */ \"./components/user/form/SignIn.js\");\n/* harmony import */ var _redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/userDD */ \"./redux/reducers/userDD.js\");\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\newNavBar\\\\signed\\\\NotSigned.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst NotSigned = props => {\n  const handleUserState = state => {\n    if (state === userState) {\n      props.ResetUserDD();\n    } else {\n      setUserState(state);\n    }\n  };\n\n  const showUserDD = userState ? {\n    display: 'block'\n  } : {\n    display: 'none'\n  };\n  const showInDD = userState ? userState === 'register' ? __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 36\n    }\n  }) : __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 51\n    }\n  }) : null;\n  return __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userWrapper,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,\n    onClick: () => handleUserState('signin'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"sign in\"), __jsx(\"button\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,\n    onClick: () => handleUserState('register'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, \"register\")), __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userDD,\n    style: showUserDD,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"custom-hr\",\n    style: {\n      backgroundColor: '#282828'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }), showInDD));\n};\n\n_c = NotSigned;\n\nconst mapStateToProps = state => {\n  return {\n    currentUser: state.currentUser,\n    token: state.token,\n    userDD: state.userDD\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"bindActionCreators\"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__[\"setUserDD\"], dispatch),\n    resetUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"bindActionCreators\"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__[\"resetUserDD\"], dispatch)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(NotSigned));\n\nvar _c;\n\n$RefreshReg$(_c, \"NotSigned\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci9zaWduZWQvTm90U2lnbmVkLmpzPzM0NGQiXSwibmFtZXMiOlsiTm90U2lnbmVkIiwicHJvcHMiLCJoYW5kbGVVc2VyU3RhdGUiLCJzdGF0ZSIsInVzZXJTdGF0ZSIsIlJlc2V0VXNlckREIiwic2V0VXNlclN0YXRlIiwic2hvd1VzZXJERCIsImRpc3BsYXkiLCJzaG93SW5ERCIsIk5CIiwidXNlcldyYXBwZXIiLCJ1c2VyQ29udGFpbmVyIiwic2lnbk9wdGlvbiIsInVzZXJERCIsImJhY2tncm91bmRDb2xvciIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwidG9rZW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldFVzZXJERCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInJlc2V0VXNlckREIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQ3pCLFFBQU1DLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQy9CLFFBQUlBLEtBQUssS0FBS0MsU0FBZCxFQUF5QjtBQUFDSCxXQUFLLENBQUNJLFdBQU47QUFBb0IsS0FBOUMsTUFDSztBQUFDQyxrQkFBWSxDQUFDSCxLQUFELENBQVo7QUFBb0I7QUFDN0IsR0FIRDs7QUFLQSxRQUFNSSxVQUFVLEdBQUdILFNBQVMsR0FBRztBQUFDSSxXQUFPLEVBQUU7QUFBVixHQUFILEdBQXdCO0FBQUNBLFdBQU8sRUFBRTtBQUFWLEdBQXBEO0FBQ0EsUUFBTUMsUUFBUSxHQUFHTCxTQUFTLEdBQ3RCQSxTQUFTLEtBQUssVUFBZCxHQUEyQixNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBM0IsR0FBMEMsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHBCLEdBRXhCLElBRkY7QUFJQSxTQUNJO0FBQUssYUFBUyxFQUFFTSxtRUFBRSxDQUFDQyxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVELG1FQUFFLENBQUNFLGFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBRUYsbUVBQUUsQ0FBQ0csVUFBdEI7QUFBa0MsV0FBTyxFQUFFLE1BQU1YLGVBQWUsQ0FBQyxRQUFELENBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJO0FBQVEsYUFBUyxFQUFFUSxtRUFBRSxDQUFDRyxVQUF0QjtBQUFrQyxXQUFPLEVBQUUsTUFBTVgsZUFBZSxDQUFDLFVBQUQsQ0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUVRLG1FQUFFLENBQUNJLE1BQW5CO0FBQTJCLFNBQUssRUFBRVAsVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsU0FBSyxFQUFFO0FBQUNRLHFCQUFlLEVBQUU7QUFBbEIsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUtOLFFBRkwsQ0FMSixDQURKO0FBWUgsQ0F2QkQ7O0tBQU1ULFM7O0FBeUJOLE1BQU1nQixlQUFlLEdBQUliLEtBQUQsSUFBVztBQUNsQyxTQUFPO0FBQ0FjLGVBQVcsRUFBRWQsS0FBSyxDQUFDYyxXQURuQjtBQUVBQyxTQUFLLEVBQUVmLEtBQUssQ0FBQ2UsS0FGYjtBQUdBSixVQUFNLEVBQUVYLEtBQUssQ0FBQ1c7QUFIZCxHQUFQO0FBS0EsQ0FORDs7QUFRQSxNQUFNSyxrQkFBa0IsR0FBSUMsUUFBRCxJQUFjO0FBQ3JDLFNBQU87QUFDSEMsYUFBUyxFQUFFQyxnRUFBa0IsQ0FBQ0QsZ0VBQUQsRUFBWUQsUUFBWixDQUQxQjtBQUVIRyxlQUFXLEVBQUVELGdFQUFrQixDQUFDQyxrRUFBRCxFQUFjSCxRQUFkO0FBRjVCLEdBQVA7QUFJSCxDQUxEOztBQU9lSSwwSEFBTyxDQUNsQlIsZUFEa0IsRUFFbEJHLGtCQUZrQixDQUFQLENBR2JuQixTQUhhLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld05hdkJhci9zaWduZWQvTm90U2lnbmVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBOQiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmV3TmF2QmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vLi4vdXNlci9mb3JtL1JlZ2lzdGVyJ1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uLy4uL3VzZXIvZm9ybS9TaWduSW4nXHJcbmltcG9ydCB7c2V0VXNlckRELCByZXNldFVzZXJERH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvdXNlckREJ1xyXG5cclxuY29uc3QgTm90U2lnbmVkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU3RhdGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHVzZXJTdGF0ZSkge3Byb3BzLlJlc2V0VXNlckREKCl9XHJcbiAgICAgICAgZWxzZSB7c2V0VXNlclN0YXRlKHN0YXRlKX1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VXNlckREID0gdXNlclN0YXRlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ31cclxuICAgIGNvbnN0IHNob3dJbkREID0gdXNlclN0YXRlID8gXHJcbiAgICAgICAgdXNlclN0YXRlID09PSAncmVnaXN0ZXInID8gPFJlZ2lzdGVyIC8+IDogPFNpZ25JbiAvPlxyXG4gICAgOiBudWxsXHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlcldyYXBwZXJ9ICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtOQi51c2VyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5zaWduT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ3NpZ25pbicpfSA+c2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e05CLnNpZ25PcHRpb259IG9uQ2xpY2s9eygpID0+IGhhbmRsZVVzZXJTdGF0ZSgncmVnaXN0ZXInKX0gPnJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlckREfSBzdHlsZT17c2hvd1VzZXJERH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1oclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9fSAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbkREfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50VXNlcjogc3RhdGUuY3VycmVudFVzZXIsXHJcbiAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxyXG4gICAgICAgIHVzZXJERDogc3RhdGUudXNlckRELFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFVzZXJERDogYmluZEFjdGlvbkNyZWF0b3JzKHNldFVzZXJERCwgZGlzcGF0Y2gpLFxyXG4gICAgICAgIHJlc2V0VXNlckREOiBiaW5kQWN0aW9uQ3JlYXRvcnMocmVzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKE5vdFNpZ25lZCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/newNavBar/signed/NotSigned.js\n");

/***/ })

})