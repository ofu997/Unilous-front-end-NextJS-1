webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/user/form/SignIn.js":
/*!****************************************!*\
  !*** ./components/user/form/SignIn.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/schemas/mutations */ \"./src/schemas/mutations.js\");\n/* harmony import */ var _src_functions_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/functions/functions */ \"./src/functions/functions.js\");\n/* harmony import */ var _redux_reducers_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/reducers/token */ \"./redux/reducers/token.js\");\n/* harmony import */ var _text_field_InputHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../text-field/InputHeader */ \"./components/text-field/InputHeader.js\");\n/* harmony import */ var _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/reducers/alertNotif */ \"./redux/reducers/alertNotif.js\");\n/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/user/user.module.css */ \"./styles/user/user.module.css\");\n/* harmony import */ var _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"C:\\\\Code\\\\Projects\\\\projectU\\\\projectu\\\\components\\\\user\\\\form\\\\SignIn.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nconst SignIn = props => {\n  _s();\n\n  const username = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__[\"useField\"])('text');\n  const password = Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__[\"useField\"])('password');\n\n  const onError = e => {\n    let cleanedMessage = e.message;\n    console.log(cleanedMessage);\n    cleanedMessage = cleanedMessage.split(':');\n    cleanedMessage = cleanedMessage.slice(1, cleanedMessage.length).join('$:');\n    Object(_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__[\"triggerAlert\"])('warning', cleanedMessage, props.setAlert, props.resetAlert);\n  };\n\n  const [signInMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_src_schemas_mutations__WEBPACK_IMPORTED_MODULE_4__[\"LOGIN\"], {\n    onError\n  });\n\n  const handleSumbit = async e => {\n    e.preventDefault();\n    const result = await signInMutation({\n      variables: {\n        username: username.fields.value,\n        password: password.fields.value\n      }\n    });\n\n    if (result) {\n      if (props.changeMenuItem) {\n        props.changeMenuItem(null);\n      }\n\n      const token = result.data.login.value;\n      localStorage.setItem('token', token);\n      localStorage.setItem('username', username.fields.value);\n      username.reset();\n      password.reset();\n      props.setToken(token);\n    }\n  };\n\n  const bgStyle = props.noBG ? {\n    backgroundColor: '#282828'\n  } : null;\n  return __jsx(\"div\", {\n    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userFormContainer,\n    style: bgStyle,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userForm,\n    onSubmit: e => handleSumbit(e),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    inputFor: \"SI-username\",\n    info: false,\n    title: \"username\",\n    color: \"dark\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UFInput\n  }, username.fields, {\n    id: \"SI-username\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  })), __jsx(_text_field_InputHeader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    inputFor: \"SI-password\",\n    info: false,\n    title: \"password\",\n    color: \"dark\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UFInput\n  }, password.fields, {\n    id: \"SI-password\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  })), __jsx(\"button\", {\n    className: _styles_user_user_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.UFSubmit,\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 63\n    }\n  }, \"sign in\"))));\n}; // const mapStateToProps = (state) => {\n// \treturn {\n// \t}\n// }\n\n\n_s(SignIn, \"DE3f20dFYZoPoYHVPTH5vI3Paek=\", false, function () {\n  return [_src_functions_functions__WEBPACK_IMPORTED_MODULE_5__[\"useField\"], _src_functions_functions__WEBPACK_IMPORTED_MODULE_5__[\"useField\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"]];\n});\n\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(null, {\n  setToken: _redux_reducers_token__WEBPACK_IMPORTED_MODULE_6__[\"setToken\"],\n  setAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_8__[\"setAlert\"],\n  resetAlert: _redux_reducers_alertNotif__WEBPACK_IMPORTED_MODULE_8__[\"resetAlert\"]\n})(SignIn));\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXIvZm9ybS9TaWduSW4uanM/MGZiZCJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInVzZXJuYW1lIiwidXNlRmllbGQiLCJwYXNzd29yZCIsIm9uRXJyb3IiLCJlIiwiY2xlYW5lZE1lc3NhZ2UiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNwbGl0Iiwic2xpY2UiLCJsZW5ndGgiLCJqb2luIiwidHJpZ2dlckFsZXJ0Iiwic2V0QWxlcnQiLCJyZXNldEFsZXJ0Iiwic2lnbkluTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsIkxPR0lOIiwiaGFuZGxlU3VtYml0IiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJ2YXJpYWJsZXMiLCJmaWVsZHMiLCJ2YWx1ZSIsImNoYW5nZU1lbnVJdGVtIiwidG9rZW4iLCJkYXRhIiwibG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVzZXQiLCJzZXRUb2tlbiIsImJnU3R5bGUiLCJub0JHIiwiYmFja2dyb3VuZENvbG9yIiwiVVIiLCJ1c2VyRm9ybUNvbnRhaW5lciIsInVzZXJGb3JtIiwiVUZJbnB1dCIsIlVGU3VibWl0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUFBOztBQUN0QixRQUFNQyxRQUFRLEdBQUdDLHlFQUFRLENBQUMsTUFBRCxDQUF6QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0QseUVBQVEsQ0FBQyxVQUFELENBQXpCOztBQUVBLFFBQU1FLE9BQU8sR0FBSUMsQ0FBRCxJQUFPO0FBQ25CLFFBQUlDLGNBQWMsR0FBR0QsQ0FBQyxDQUFDRSxPQUF2QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsY0FBWjtBQUNBQSxrQkFBYyxHQUFHQSxjQUFjLENBQUNJLEtB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QjtBQUFnQyxRQUFJLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlDLENBTEosQ0FESixDQURKO0FBV0gsQ0FoREQsQyxDQWtEQTtBQUNBO0FBRUE7QUFDQTs7O0dBdERNMUMsTTtVQUNlRyxpRSxFQUNBQSxpRSxFQVNRZ0IsK0Q7OztLQVh2Qm5CLE07QUF1RFMyQywwSEFBTyxDQUNsQixJQURrQixFQUVsQjtBQUFFVCwwRUFBRjtBQUFZbEIsK0VBQVo7QUFBc0JDLG1GQUFVQTtBQUFoQyxDQUZrQixDQUFQLENBR2JqQixNQUhhLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvZm9ybS9TaWduSW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBMT0dJTiB9IGZyb20gJy4uLy4uLy4uL3NyYy9zY2hlbWFzL211dGF0aW9ucydcclxuaW1wb3J0IHsgdXNlRmllbGQsIHRyaWdnZXJBbGVydCB9IGZyb20gJy4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL3Rva2VuJ1xyXG5pbXBvcnQgSW5wdXRIZWFkZXIgZnJvbSAnLi4vLi4vdGV4dC1maWVsZC9JbnB1dEhlYWRlcidcclxuaW1wb3J0IHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9hbGVydE5vdGlmJ1xyXG5pbXBvcnQgVVIgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3VzZXIvdXNlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZUZpZWxkKCd0ZXh0JylcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gdXNlRmllbGQoJ3Bhc3N3b3JkJylcclxuXHJcbiAgICBjb25zdCBvbkVycm9yID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW5lZE1lc3NhZ2UgPSBlLm1lc3NhZ2VcclxuICAgICAgICBjb25zb2xlLmxvZyhjbGVhbmVkTWVzc2FnZSlcclxuICAgICAgICBjbGVhbmVkTWVzc2FnZSA9IGNsZWFuZWRNZXNzYWdlLnNwbGl0KCc6JylcclxuICAgICAgICBjbGVhbmVkTWVzc2FnZSA9IGNsZWFuZWRNZXNzYWdlLnNsaWNlKDEsIGNsZWFuZWRNZXNzYWdlLmxlbmd0aCkuam9pbignJDonKVxyXG4gICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGNsZWFuZWRNZXNzYWdlLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcclxuICAgIH1cclxuICAgIGNvbnN0IFtzaWduSW5NdXRhdGlvbl0gPSB1c2VNdXRhdGlvbihMT0dJTiwgeyBvbkVycm9yIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1bWJpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluTXV0YXRpb24oe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS5maWVsZHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQuZmllbGRzLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmNoYW5nZU1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VNZW51SXRlbShudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzdWx0LmRhdGEubG9naW4udmFsdWVcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHVzZXJuYW1lLmZpZWxkcy52YWx1ZSlcclxuICAgICAgICAgICAgdXNlcm5hbWUucmVzZXQoKVxyXG4gICAgICAgICAgICBwYXNzd29yZC5yZXNldCgpXHJcblxyXG4gICAgICAgICAgICBwcm9wcy5zZXRUb2tlbih0b2tlbilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmdTdHlsZSA9IHByb3BzLm5vQkcgPyB7YmFja2dyb3VuZENvbG9yOiAnIzI4MjgyOCd9IDogbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VSLnVzZXJGb3JtQ29udGFpbmVyfSBzdHlsZT17YmdTdHlsZX0+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17VVIudXNlckZvcm19IG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VtYml0KGUpfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlciBpbnB1dEZvcj1cIlNJLXVzZXJuYW1lXCIgaW5mbz17ZmFsc2V9IHRpdGxlPVwidXNlcm5hbWVcIiBjb2xvcj1cImRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17VVIuVUZJbnB1dH0gey4uLnVzZXJuYW1lLmZpZWxkc30gaWQ9XCJTSS11c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5wdXRGb3I9XCJTSS1wYXNzd29yZFwiIGluZm89e2ZhbHNlfSB0aXRsZT1cInBhc3N3b3JkXCIgY29sb3I9XCJkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1VSLlVGSW5wdXR9IHsuLi5wYXNzd29yZC5maWVsZHN9IGlkPVwiU0ktcGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1VSLlVGU3VibWl0fSB0eXBlPVwic3VibWl0XCI+PGgzPnNpZ24gaW48L2gzPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4vLyBcdHJldHVybiB7XHJcbiAgICAgICAgXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBudWxsLFxyXG4gICAgeyBzZXRUb2tlbiwgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfVxyXG4pKFNpZ25JbikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/form/SignIn.js\n");

/***/ })

})