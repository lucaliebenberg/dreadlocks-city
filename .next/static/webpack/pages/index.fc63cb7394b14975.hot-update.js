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

/***/ "./components/Team/Team.jsx":
/*!**********************************!*\
  !*** ./components/Team/Team.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Team; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SectionTitle */ \"./components/SectionTitle.jsx\");\n/* harmony import */ var _TeamMember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TeamMember */ \"./components/Team/TeamMember.jsx\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _members_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./members.js */ \"./components/Team/members.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n // requires a loader\n\n\nfunction Team() {\n    _s();\n    // carousel controls\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const lastSlide = _members_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length - 1;\n    const next = ()=>{\n        if (currentSlide >= lastSlide && isMobile == false) {\n            setCurrentSlide(1);\n        } else if (currentSlide >= lastSlide && isMobile == true) {\n            setCurrentSlide(0);\n        } else {\n            isMobile ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(currentSlide + 3);\n        }\n    };\n    const prev = ()=>{\n        if (currentSlide === 1 && isMobile == false) {\n            setCurrentSlide(lastSlide);\n        } else if (currentSlide === 0 && isMobile == true) {\n            setCurrentSlide(lastSlide);\n        } else {\n            isMobile ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(currentSlide - 3);\n        }\n    };\n    // members\n    const mapMembers = _members_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].map((member)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TeamMember__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            name: member.name,\n            title: member.title,\n            description: member.description,\n            photo: member.photo,\n            link: member.link\n        }, member.id, false, {\n            fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n            lineNumber: 36,\n            columnNumber: 5\n        }, this));\n    // responsive carousel\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function mqChange(mq) {\n        setIsMobile(mq.matches);\n        mq.matches ? setCurrentSlide(0) : setCurrentSlide(1);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const mq = window.matchMedia(\"screen and (max-width: 960px)\");\n        mq.addListener(mqChange);\n        mqChange(mq);\n        return ()=>{\n            mq.removeListener(mqChange);\n        };\n    }, []);\n    const mobileSize = ()=>isMobile ? false : true;\n    const mobileWidth = ()=>isMobile ? \"250px\" : \"823px\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Meet our team\"\n            }, void 0, false, {\n                fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"flex flex-wrap flex-row justify-center relative team mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"w-11/12 header-color sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-80 mb-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"mt-4\",\n                            children: \"Copy about the team needs to put here. Copy about the team needs to put here. Copy about the team needs to put here. Copy about the team needs to put here. Cool.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"flex mr-auto ml-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"inline-block my-auto min-w-content\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"picture\", {\n                                    className: \"jsx-9e3f01d40dc9359f\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                            type: \"image/webp\",\n                                            srcSet: \"left.webp\",\n                                            className: \"jsx-9e3f01d40dc9359f\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                            type: \"image/png\",\n                                            srcSet: \"left.png\",\n                                            className: \"jsx-9e3f01d40dc9359f\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            onClick: prev,\n                                            src: \"left.png\",\n                                            alt: \"Previous team member\",\n                                            className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"w-5 cursor-pointer mr-2 inline-block\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"inline-block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {\n                                    showThumbs: false,\n                                    showArrows: false,\n                                    infiniteLoop: false,\n                                    showIndicators: false,\n                                    autoPlay: false,\n                                    showStatus: false,\n                                    swipeable: true,\n                                    centerMode: mobileSize(),\n                                    centerSlidePercentage: 33,\n                                    width: mobileWidth(),\n                                    selectedItem: currentSlide,\n                                    children: mapMembers\n                                }, void 0, false, {\n                                    fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"inline-block my-auto min-w-content\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"picture\", {\n                                    className: \"jsx-9e3f01d40dc9359f\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                            type: \"image/webp\",\n                                            srcSet: \"right.webp\",\n                                            className: \"jsx-9e3f01d40dc9359f\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                            type: \"image/png\",\n                                            srcSet: \"right.png\",\n                                            className: \"jsx-9e3f01d40dc9359f\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            onClick: next,\n                                            src: \"right.png\",\n                                            alt: \"Next team member\",\n                                            className: \"jsx-9e3f01d40dc9359f\" + \" \" + \"w-5 cursor-pointer ml-2 inline-block\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"9e3f01d40dc9359f\",\n                children: \"@media screen and (max-width:1400px){.team.jsx-9e3f01d40dc9359f{max-width:90%}}@media screen and (max-width:400px){.team.jsx-9e3f01d40dc9359f{max-width:100%}}.min-w-content.jsx-9e3f01d40dc9359f{min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/_lucaliebenberg/Desktop/Coding/dreadlocks-city-website/components/Team/Team.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Team, \"ssnpfaLteZv0jft1YtUk3OmOMzA=\");\n_c = Team;\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs0Q0FBYUMsUUFBTzs7Ozs7OztzREFDakMsOERBQUNGOzRDQUFPQyxNQUFLOzRDQUFZQyxRQUFPOzs7Ozs7O3NEQUNoQyw4REFBQ0M7NENBQ0NDLFNBQVM3Qjs0Q0FFVDhCLEtBQUk7NENBQ0pDLEtBQUk7c0ZBRk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCMUI7R0EvSHdCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtL1RlYW0uanN4Pzg5ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgVGVhbU1lbWJlciBmcm9tIFwiLi9UZWFtTWVtYmVyXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IG1lbWJlcnMgZnJvbSBcIi4vbWVtYmVycy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbSgpIHtcbiAgLy8gY2Fyb3VzZWwgY29udHJvbHNcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBsYXN0U2xpZGUgPSBtZW1iZXJzLmxlbmd0aCAtIDE7XG5cbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNsaWRlID49IGxhc3RTbGlkZSAmJiBpc01vYmlsZSA9PSBmYWxzZSkge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDEpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFNsaWRlID49IGxhc3RTbGlkZSAmJiBpc01vYmlsZSA9PSB0cnVlKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzTW9iaWxlXG4gICAgICAgID8gc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpXG4gICAgICAgIDogc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJldiA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNsaWRlID09PSAxICYmIGlzTW9iaWxlID09IGZhbHNlKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUobGFzdFNsaWRlKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMCAmJiBpc01vYmlsZSA9PSB0cnVlKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUobGFzdFNsaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNNb2JpbGVcbiAgICAgICAgPyBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSlcbiAgICAgICAgOiBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMyk7XG4gICAgfVxuICB9O1xuICAvLyBtZW1iZXJzXG4gIGNvbnN0IG1hcE1lbWJlcnMgPSBtZW1iZXJzLm1hcCgobWVtYmVyKSA9PiAoXG4gICAgPFRlYW1NZW1iZXJcbiAgICAgIGtleT17bWVtYmVyLmlkfVxuICAgICAgbmFtZT17bWVtYmVyLm5hbWV9XG4gICAgICB0aXRsZT17bWVtYmVyLnRpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e21lbWJlci5kZXNjcmlwdGlvbn1cbiAgICAgIHBob3RvPXttZW1iZXIucGhvdG99XG4gICAgICBsaW5rPXttZW1iZXIubGlua31cbiAgICAvPlxuICApKTtcbiAgLy8gcmVzcG9uc2l2ZSBjYXJvdXNlbFxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgZnVuY3Rpb24gbXFDaGFuZ2UobXEpIHtcbiAgICBzZXRJc01vYmlsZShtcS5tYXRjaGVzKTtcbiAgICBtcS5tYXRjaGVzID8gc2V0Q3VycmVudFNsaWRlKDApIDogc2V0Q3VycmVudFNsaWRlKDEpO1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcInNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpXCIpO1xuICAgIG1xLmFkZExpc3RlbmVyKG1xQ2hhbmdlKTtcbiAgICBtcUNoYW5nZShtcSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbXEucmVtb3ZlTGlzdGVuZXIobXFDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgY29uc3QgbW9iaWxlU2l6ZSA9ICgpID0+IChpc01vYmlsZSA/IGZhbHNlIDogdHJ1ZSk7XG4gIGNvbnN0IG1vYmlsZVdpZHRoID0gKCkgPT4gKGlzTW9iaWxlID8gXCIyNTBweFwiIDogXCI4MjNweFwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPXtcIk1lZXQgb3VyIHRlYW1cIn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgdGVhbSBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMS8xMiBoZWFkZXItY29sb3Igc206dy0zLzQgbWQ6dy0yLzQgbGc6dy0yLzQgeGw6dy04MCBtYi02XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgQ29weSBhYm91dCB0aGUgdGVhbSBuZWVkcyB0byBwdXQgaGVyZS4gQ29weSBhYm91dCB0aGUgdGVhbSBuZWVkcyB0byBwdXQgaGVyZS4gQ29weSBhYm91dCB0aGUgdGVhbSBuZWVkcyB0byBwdXQgaGVyZS4gQ29weSBhYm91dCB0aGUgdGVhbSBuZWVkcyB0byBwdXQgaGVyZS4gQ29vbC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtci1hdXRvIG1sLWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBteS1hdXRvIG1pbi13LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgICA8c291cmNlIHR5cGU9XCJpbWFnZS93ZWJwXCIgc3JjU2V0PVwibGVmdC53ZWJwXCIgLz5cbiAgICAgICAgICAgICAgPHNvdXJjZSB0eXBlPVwiaW1hZ2UvcG5nXCIgc3JjU2V0PVwibGVmdC5wbmdcIiAvPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJldn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgY3Vyc29yLXBvaW50ZXIgbXItMiBpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgIHNyYz1cImxlZnQucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQcmV2aW91cyB0ZWFtIG1lbWJlclwiXG4gICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgIDwvcGljdHVyZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cbiAgICAgICAgICAgICAgaW5maW5pdGVMb29wPXtmYWxzZX1cbiAgICAgICAgICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxuICAgICAgICAgICAgICBhdXRvUGxheT17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxuICAgICAgICAgICAgICBzd2lwZWFibGU9e3RydWV9XG4gICAgICAgICAgICAgIGNlbnRlck1vZGU9e21vYmlsZVNpemUoKX1cbiAgICAgICAgICAgICAgY2VudGVyU2xpZGVQZXJjZW50YWdlPXszM31cbiAgICAgICAgICAgICAgd2lkdGg9e21vYmlsZVdpZHRoKCl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17Y3VycmVudFNsaWRlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bWFwTWVtYmVyc31cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBteS1hdXRvIG1pbi13LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgICA8c291cmNlIHR5cGU9XCJpbWFnZS93ZWJwXCIgc3JjU2V0PVwicmlnaHQud2VicFwiIC8+XG4gICAgICAgICAgICAgIDxzb3VyY2UgdHlwZT1cImltYWdlL3BuZ1wiIHNyY1NldD1cInJpZ2h0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBjdXJzb3ItcG9pbnRlciBtbC0yIGlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgc3JjPVwicmlnaHQucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJOZXh0IHRlYW0gbWVtYmVyXCJcbiAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICAgICAgICAudGVhbSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAgICAgICAudGVhbSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5taW4tdy1jb250ZW50IHtcbiAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlY3Rpb25UaXRsZSIsIlRlYW1NZW1iZXIiLCJDYXJvdXNlbCIsIm1lbWJlcnMiLCJUZWFtIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwibGFzdFNsaWRlIiwibGVuZ3RoIiwibmV4dCIsImlzTW9iaWxlIiwicHJldiIsIm1hcE1lbWJlcnMiLCJtYXAiLCJtZW1iZXIiLCJuYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBob3RvIiwibGluayIsImlkIiwic2V0SXNNb2JpbGUiLCJtcUNoYW5nZSIsIm1xIiwibWF0Y2hlcyIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwibW9iaWxlU2l6ZSIsIm1vYmlsZVdpZHRoIiwiZGl2IiwicCIsInBpY3R1cmUiLCJzb3VyY2UiLCJ0eXBlIiwic3JjU2V0IiwiaW1nIiwib25DbGljayIsInNyYyIsImFsdCIsInNob3dUaHVtYnMiLCJzaG93QXJyb3dzIiwiaW5maW5pdGVMb29wIiwic2hvd0luZGljYXRvcnMiLCJhdXRvUGxheSIsInNob3dTdGF0dXMiLCJzd2lwZWFibGUiLCJjZW50ZXJNb2RlIiwiY2VudGVyU2xpZGVQZXJjZW50YWdlIiwid2lkdGgiLCJzZWxlY3RlZEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Team/Team.jsx\n"));

/***/ })

});