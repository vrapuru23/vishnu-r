"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/subComponents/PortfolioComponents/Works.js":
/*!***************************************************************!*\
  !*** ./components/subComponents/PortfolioComponents/Works.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Work */ \"./components/subComponents/PortfolioComponents/Work.js\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sanity */ \"./sanity.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\n\nfunction Works(param) {\n    let { myWorks } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {\n        initial: {\n            opacity: 0,\n            y: 100\n        },\n        whileInView: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 1\n        },\n        className: \"w-full mt-48 text-gray-400 md:-mt-24 body-font\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative z-20 flex w-full overflow-x-scroll overflow-y-hidden no-scrollbar snap-x snap-mandatory \",\n            children: myWorks.map((work, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Work__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    count: i + 1,\n                    name: work.title,\n                    href: work.linkToProject,\n                    content: work.description,\n                    img: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(work === null || work === void 0 ? void 0 : work.image).url(),\n                    length: myWorks.length\n                }, work._id, false, {\n                    fileName: \"/Users/vishnu/Documents/GitHub/vishnu-r/components/subComponents/PortfolioComponents/Works.js\",\n                    lineNumber: 15,\n                    columnNumber: 19\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/vishnu/Documents/GitHub/vishnu-r/components/subComponents/PortfolioComponents/Works.js\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vishnu/Documents/GitHub/vishnu-r/components/subComponents/PortfolioComponents/Works.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Works;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\nvar _c;\n$RefreshReg$(_c, \"Works\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvUG9ydGZvbGlvQ29tcG9uZW50cy9Xb3Jrcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNBO0FBQ2U7QUFDQztBQUUxQyxTQUFTSyxNQUFNLEtBQVc7UUFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDtJQUNiLHFCQUNFLDhEQUFDRixpREFBTUEsQ0FBQ0csT0FBTztRQUNiQyxTQUFTO1lBQUVDLFNBQVM7WUFBR0MsR0FBRztRQUFJO1FBQzlCQyxhQUFhO1lBQUVGLFNBQVM7WUFBR0MsR0FBRztRQUFFO1FBQ2hDRSxZQUFZO1lBQUVDLFVBQVU7UUFBRTtRQUMxQkMsV0FBVTtrQkFDUiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDVlIsUUFBUVUsR0FBRyxDQUFDLENBQUNDLE1BQU1DLGtCQUNkLDhEQUFDakIsNkNBQUlBO29CQUVEa0IsT0FBT0QsSUFBSTtvQkFDWEUsTUFBTUgsS0FBS0ksS0FBSztvQkFDaEJDLE1BQU1MLEtBQUtNLGFBQWE7b0JBQ3hCQyxTQUFTUCxLQUFLUSxXQUFXO29CQUN6QkMsS0FBS3hCLCtDQUFNQSxDQUFDZSxpQkFBQUEsMkJBQUFBLEtBQU1VLEtBQUssRUFBRUMsR0FBRztvQkFDNUJDLFFBQVF2QixRQUFRdUIsTUFBTTttQkFOakJaLEtBQUthLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQVluQztLQXRCU3pCO0FBd0JULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9Qb3J0Zm9saW9Db21wb25lbnRzL1dvcmtzLmpzP2ViZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXb3JrIGZyb20gXCIuL1dvcmtcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gJy4uLy4uLy4uL3Nhbml0eSc7XG5pbXBvcnQgeyBtLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZnVuY3Rpb24gV29ya3MoeyBteVdvcmtzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLnNlY3Rpb24gXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwMCB9fVxuICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTQ4IHRleHQtZ3JheS00MDAgbWQ6LW10LTI0IGJvZHktZm9udFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjAgZmxleCB3LWZ1bGwgb3ZlcmZsb3cteC1zY3JvbGwgb3ZlcmZsb3cteS1oaWRkZW4gbm8tc2Nyb2xsYmFyIHNuYXAteCBzbmFwLW1hbmRhdG9yeSBcIj5cbiAgICAgICAgICAgIHtteVdvcmtzLm1hcCgod29yaywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFdvcmtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3dvcmsuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtpICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt3b3JrLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3dvcmsubGlua1RvUHJvamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt3b3JrLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGltZz17dXJsRm9yKHdvcms/LmltYWdlKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg9e215V29ya3MubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgLz4gIFxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLnNlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJXb3JrIiwidXJsRm9yIiwibSIsIm1vdGlvbiIsIldvcmtzIiwibXlXb3JrcyIsInNlY3Rpb24iLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsIndvcmsiLCJpIiwiY291bnQiLCJuYW1lIiwidGl0bGUiLCJocmVmIiwibGlua1RvUHJvamVjdCIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImltZyIsImltYWdlIiwidXJsIiwibGVuZ3RoIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/subComponents/PortfolioComponents/Works.js\n"));

/***/ })

});