webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/newNavBar/signed/NotSigned.js":
/*!**************************************************!*\
  !*** ./components/newNavBar/signed/NotSigned.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/newNavBar.module.css */ \"./styles/newNavBar.module.css\");\n/* harmony import */ var _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _user_form_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/form/Register */ \"./components/user/form/Register.js\");\n/* harmony import */ var _user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/form/SignIn */ \"./components/user/form/SignIn.js\");\n/* harmony import */ var _redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/userDD */ \"./redux/reducers/userDD.js\");\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\newNavBar\\\\signed\\\\NotSigned.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst NotSigned = props => {\n  const handleUserState = state => {\n    if (state === props.userState) {\n      props.resetUserDD();\n    } else {\n      props.setUserDD(state);\n    }\n  };\n\n  const showUserDD = userState ? {\n    display: 'block'\n  } : {\n    display: 'none'\n  };\n  const showInDD = userState ? userState === 'register' ? __jsx(_user_form_Register__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 36\n    }\n  }) : __jsx(_user_form_SignIn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 51\n    }\n  }) : null;\n  return __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userWrapper,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,\n    onClick: () => handleUserState('signin'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"sign in\"), __jsx(\"button\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.signOption,\n    onClick: () => handleUserState('register'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, \"register\")), __jsx(\"div\", {\n    className: _styles_newNavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userDD,\n    style: showUserDD,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"custom-hr\",\n    style: {\n      backgroundColor: '#282828'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }), showInDD));\n};\n\n_c = NotSigned;\n\nconst mapStateToProps = state => {\n  return {\n    currentUser: state.currentUser,\n    token: state.token,\n    userDD: state.userDD\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    setUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"bindActionCreators\"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__[\"setUserDD\"], dispatch),\n    resetUserDD: Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"bindActionCreators\"])(_redux_reducers_userDD__WEBPACK_IMPORTED_MODULE_7__[\"resetUserDD\"], dispatch)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(NotSigned));\n\nvar _c;\n\n$RefreshReg$(_c, \"NotSigned\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld05hdkJhci9zaWduZWQvTm90U2lnbmVkLmpzPzM0NGQiXSwibmFtZXMiOlsiTm90U2lnbmVkIiwicHJvcHMiLCJoYW5kbGVVc2VyU3RhdGUiLCJzdGF0ZSIsInVzZXJTdGF0ZSIsInJlc2V0VXNlckREIiwic2V0VXNlckREIiwic2hvd1VzZXJERCIsImRpc3BsYXkiLCJzaG93SW5ERCIsIk5CIiwidXNlcldyYXBwZXIiLCJ1c2VyQ29udGFpbmVyIiwic2lnbk9wdGlvbiIsInVzZXJERCIsImJhY2tncm91bmRDb2xvciIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnRVc2VyIiwidG9rZW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUN6QixRQUFNQyxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUMvQixRQUFJQSxLQUFLLEtBQUtGLEtBQUssQ0FBQ0csU0FBcEIsRUFBK0I7QUFBQ0gsV0FBSyxDQUFDSSxXQUFOO0FBQW9CLEtBQXBELE1BQ0s7QUFBQ0osV0FBSyxDQUFDSyxTQUFOLENBQWdCSCxLQUFoQjtBQUF1QjtBQUNoQyxHQUhEOztBQUtBLFFBQU1JLFVBQVUsR0FBR0gsU0FBUyxHQUFHO0FBQUNJLFdBQU8sRUFBRTtBQUFWLEdBQUgsR0FBd0I7QUFBQ0EsV0FBTyxFQUFFO0FBQVYsR0FBcEQ7QUFDQSxRQUFNQyxRQUFRLEdBQUdMLFNBQVMsR0FDdEJBLFNBQVMsS0FBSyxVQUFkLEdBQTJCLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEzQixHQUEwQyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEcEIsR0FFeEIsSUFGRjtBQUlBLFNBQ0k7QUFBSyxhQUFTLEVBQUVNLG1FQUFFLENBQUNDLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUQsbUVBQUUsQ0FBQ0UsYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFFRixtRUFBRSxDQUFDRyxVQUF0QjtBQUFrQyxXQUFPLEVBQUUsTUFBTVgsZUFBZSxDQUFDLFFBQUQsQ0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUk7QUFBUSxhQUFTLEVBQUVRLG1FQUFFLENBQUNHLFVBQXRCO0FBQWtDLFdBQU8sRUFBRSxNQUFNWCxlQUFlLENBQUMsVUFBRCxDQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLENBREosRUFLSTtBQUFLLGFBQVMsRUFBRVEsbUVBQUUsQ0FBQ0ksTUFBbkI7QUFBMkIsU0FBSyxFQUFFUCxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixTQUFLLEVBQUU7QUFBQ1EscUJBQWUsRUFBRTtBQUFsQixLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFS04sUUFGTCxDQUxKLENBREo7QUFZSCxDQXZCRDs7S0FBTVQsUzs7QUF5Qk4sTUFBTWdCLGVBQWUsR0FBSWIsS0FBRCxJQUFXO0FBQ2xDLFNBQU87QUFDQWMsZUFBVyxFQUFFZCxLQUFLLENBQUNjLFdBRG5CO0FBRUFDLFNBQUssRUFBRWYsS0FBSyxDQUFDZSxLQUZiO0FBR0FKLFVBQU0sRUFBRVgsS0FBSyxDQUFDVztBQUhkLEdBQVA7QUFLQSxDQU5EOztBQVFBLE1BQU1LLGtCQUFrQixHQUFJQyxRQUFELElBQWM7QUFDckMsU0FBTztBQUNIZCxhQUFTLEVBQUVlLGdFQUFrQixDQUFDZixnRUFBRCxFQUFZYyxRQUFaLENBRDFCO0FBRUhmLGVBQVcsRUFBRWdCLGdFQUFrQixDQUFDaEIsa0VBQUQsRUFBY2UsUUFBZDtBQUY1QixHQUFQO0FBSUgsQ0FMRDs7QUFPZUUsMEhBQU8sQ0FDbEJOLGVBRGtCLEVBRWxCRyxrQkFGa0IsQ0FBUCxDQUdibkIsU0FIYSxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uZXdOYXZCYXIvc2lnbmVkL05vdFNpZ25lZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTkIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL25ld05hdkJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uLy4uL3VzZXIvZm9ybS9SZWdpc3RlcidcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuLi8uLi91c2VyL2Zvcm0vU2lnbkluJ1xyXG5pbXBvcnQge3NldFVzZXJERCwgcmVzZXRVc2VyRER9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3VzZXJERCdcclxuXHJcbmNvbnN0IE5vdFNpZ25lZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlVXNlclN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBwcm9wcy51c2VyU3RhdGUpIHtwcm9wcy5yZXNldFVzZXJERCgpfVxyXG4gICAgICAgIGVsc2Uge3Byb3BzLnNldFVzZXJERChzdGF0ZSl9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1VzZXJERCA9IHVzZXJTdGF0ZSA/IHtkaXNwbGF5OiAnYmxvY2snfSA6IHtkaXNwbGF5OiAnbm9uZSd9XHJcbiAgICBjb25zdCBzaG93SW5ERCA9IHVzZXJTdGF0ZSA/IFxyXG4gICAgICAgIHVzZXJTdGF0ZSA9PT0gJ3JlZ2lzdGVyJyA/IDxSZWdpc3RlciAvPiA6IDxTaWduSW4gLz5cclxuICAgIDogbnVsbFxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJXcmFwcGVyfSAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17TkIudXNlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17TkIuc2lnbk9wdGlvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclN0YXRlKCdzaWduaW4nKX0gPnNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtOQi5zaWduT3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU3RhdGUoJ3JlZ2lzdGVyJyl9ID5yZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e05CLnVzZXJERH0gc3R5bGU9e3Nob3dVc2VyRER9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20taHJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyODI4MjgnfX0gLz5cclxuICAgICAgICAgICAgICAgIHtzaG93SW5ERH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudFVzZXI6IHN0YXRlLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcclxuICAgICAgICB1c2VyREQ6IHN0YXRlLnVzZXJERCxcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRVc2VyREQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VyREQsIGRpc3BhdGNoKSxcclxuICAgICAgICByZXNldFVzZXJERDogYmluZEFjdGlvbkNyZWF0b3JzKHJlc2V0VXNlckRELCBkaXNwYXRjaCksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShOb3RTaWduZWQpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/newNavBar/signed/NotSigned.js\n");

/***/ })

})