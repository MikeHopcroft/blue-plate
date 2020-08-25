webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/chrome-detect.tsx":
/*!**************************************!*\
  !*** ./components/chrome-detect.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





;

var ChromeDetect = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ChromeDetect, _React$Component);

  var _super = _createSuper(ChromeDetect);

  function ChromeDetect() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChromeDetect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "attempedChromeDetect", false);

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChromeDetect, [{
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.attempedChromeDetect) {
        this.attempedChromeDetect = true;
        console.log('Attempting to detect chrome');
        var isChrome = false; // if (typeof window !== 'undefined') {

        var w = window;
        var b = bowser__WEBPACK_IMPORTED_MODULE_7___default.a.parse(window.navigator.userAgent); // TODO: use browser.satisfies() for Chrome detection.

        isChrome = b.browser.name === 'Chrome'; // }
        // if (isChrome) {

        console.log('this.props.speechSupported(isChrome)');
        this.props.speechSupported(isChrome); // }
      }
    }
  }]);

  return ChromeDetect;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

function mapDispatchToProps(dispatch) {
  return {
    speechSupported: function speechSupported(speechSupport) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setSpeechSupport"])(speechSupport));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(ChromeDetect));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/frame-control.tsx":
/*!**************************************!*\
  !*** ./components/frame-control.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_split_pane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-split-pane */ "./node_modules/react-split-pane/dist/index.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");
/* harmony import */ var _cart_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart-control */ "./components/cart-control.tsx");
/* harmony import */ var _chrome_detect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chrome-detect */ "./components/chrome-detect.tsx");
/* harmony import */ var _graph_panel_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graph-panel-control */ "./components/graph-panel-control.tsx");
/* harmony import */ var _hamburger_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hamburger-control */ "./components/hamburger-control.tsx");
/* harmony import */ var _history_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./history-control */ "./components/history-control.tsx");
/* harmony import */ var _info_control__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info-control */ "./components/info-control.tsx");
/* harmony import */ var _language_control__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./language-control */ "./components/language-control.tsx");
/* harmony import */ var _lexicon_control__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lexicon-control */ "./components/lexicon-control.tsx");
/* harmony import */ var _loading_control__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./loading-control */ "./components/loading-control.tsx");
/* harmony import */ var _menu_control__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./menu-control */ "./components/menu-control.tsx");
/* harmony import */ var _posting_list_control__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./posting-list-control */ "./components/posting-list-control.tsx");
/* harmony import */ var _recorder_control__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./recorder-control */ "./components/recorder-control.tsx");
/* harmony import */ var _speech_control__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./speech-control */ "./components/speech-control.tsx");
/* harmony import */ var _tests_control__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tests-control */ "./components/tests-control.tsx");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_25__);





var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\frame-control.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






















;

var FrameControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(FrameControl, _React$Component);

  var _super = _createSuper(FrameControl);

  function FrameControl() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FrameControl);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FrameControl, [{
    key: "render",
    value: function render() {
      if (this.props.application.bluePlateWorld) {
        return __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_25___default.a.frame,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 9
          }
        }, __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }
        }, __jsx(react_split_pane__WEBPACK_IMPORTED_MODULE_9__["default"], {
          split: "horizontal",
          minSize: 100,
          defaultSize: 600,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_25___default.a.frameUpperPanel,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }
        }, this.renderTabs()), __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_25___default.a.frameLowerPanel,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }
        }, __jsx(_recorder_control__WEBPACK_IMPORTED_MODULE_22__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }
        }), __jsx(_cart_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }
        })))), __jsx(_chrome_detect__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }
        }));
      } else {
        return __jsx(_loading_control__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 14
          }
        });
      }
    } // DESIGN NOTE: mountOnEnter and unmountOnExit are necessary for the
    // GraphControl layout algorithm. It turns out the getBBox() returns
    // an empty bounding box for svg text elements that aren't currently
    // visible.
    //   https://stackoverflow.com/questions/21387965/getbbox-width-and-height-returns-0
    //   https://stackoverflow.com/questions/40744176/getbbox-and-getcomputedtextlength-once-working-once-not
    //   https://github.com/DmitryBaranovskiy/raphael/issues/760
    //   https://stackoverflow.com/questions/28282295/getbbox-of-svg-when-hidden

  }, {
    key: "renderTabs",
    value: function renderTabs() {
      return __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"].Container, {
        id: "left-tabs-example",
        defaultActiveKey: "info",
        mountOnEnter: true,
        unmountOnExit: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "tabs",
        className: "flex-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
        eventKey: "info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }
      }, "Info")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
        eventKey: "menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }, "Menu")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
        eventKey: "lexicon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }
      }, "Lexicon")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
        eventKey: "postings",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 15
        }
      }, "Postings")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
        eventKey: "graph",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }
      }, "Graph")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
        eventKey: "tests",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }
      }, "Tests")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
        eventKey: "history",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 15
        }
      }, "History")), __jsx("div", {
        style: {
          flexGrow: 1
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }), __jsx(_speech_control__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }), __jsx(_language_control__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }), __jsx(_hamburger_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }
      })), __jsx("div", {
        style: {
          flexGrow: 1,
          overflow: 'hidden'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"].Content, {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_25___default.a.frameTab,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"].Pane, {
        eventKey: "info",
        style: {
          height: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }
      }, __jsx(_info_control__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"].Pane, {
        eventKey: "menu",
        style: {
          height: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }
      }, __jsx(_menu_control__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"].Pane, {
        eventKey: "lexicon",
        style: {
          height: '100%',
          overflow: 'auto'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }
      }, __jsx(_lexicon_control__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"].Pane, {
        eventKey: "postings",
        style: {
          height: '100%',
          overflow: 'auto'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }
      }, __jsx(_posting_list_control__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"].Pane, {
        eventKey: "graph",
        style: {
          height: '100%',
          overflow: 'auto'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 15
        }
      }, __jsx(_graph_panel_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"].Pane, {
        eventKey: "history",
        style: {
          height: '100%',
          overflow: 'auto'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 15
        }
      }, __jsx(_history_control__WEBPACK_IMPORTED_MODULE_15__["default"], {
        history: this.props.application.history,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_7__["default"].Pane, {
        eventKey: "tests",
        style: {
          height: '100%',
          overflow: 'auto'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 15
        }
      }, __jsx(_tests_control__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }))))));
    }
  }]);

  return FrameControl;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function mapStateToProps(application) {
  return {
    application: application
  };
}

function mapDispatchToProps(dispatch) {
  return {
    speechSupported: function speechSupported(speechSupport) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setSpeechSupport"])(speechSupport));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(FrameControl));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Nocm9tZS1kZXRlY3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZnJhbWUtY29udHJvbC50c3giXSwibmFtZXMiOlsiQ2hyb21lRGV0ZWN0IiwiYXR0ZW1wZWRDaHJvbWVEZXRlY3QiLCJjb25zb2xlIiwibG9nIiwiaXNDaHJvbWUiLCJ3Iiwid2luZG93IiwiYiIsIkJvd3NlciIsInBhcnNlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYnJvd3NlciIsIm5hbWUiLCJwcm9wcyIsInNwZWVjaFN1cHBvcnRlZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzcGVlY2hTdXBwb3J0Iiwic2V0U3BlZWNoU3VwcG9ydCIsImNvbm5lY3QiLCJGcmFtZUNvbnRyb2wiLCJhcHBsaWNhdGlvbiIsImJsdWVQbGF0ZVdvcmxkIiwic3R5bGVzIiwiZnJhbWUiLCJmcmFtZVVwcGVyUGFuZWwiLCJyZW5kZXJUYWJzIiwiZnJhbWVMb3dlclBhbmVsIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsImZsZXhHcm93Iiwib3ZlcmZsb3ciLCJmcmFtZVRhYiIsImhpc3RvcnkiLCJtYXBTdGF0ZVRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBSUM7O0lBRUtBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7K05BQ21CLEs7Ozs7Ozs7NkJBRWQ7QUFDUCxhQUFPLElBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFJLENBQUMsS0FBS0Msb0JBQVYsRUFBZ0M7QUFDOUIsYUFBS0Esb0JBQUwsR0FBNEIsSUFBNUI7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQSxZQUFJQyxRQUFRLEdBQUcsS0FBZixDQUg4QixDQUk5Qjs7QUFDQSxZQUFNQyxDQUFD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ZGV4LmpzLmVhYjJjYTYxYWE1NDA0NDg2ZDU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm93c2VyIGZyb20gXCJib3dzZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQgeyBBbnlBY3Rpb24sIHNldFNwZWVjaFN1cHBvcnQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBzcGVlY2hTdXBwb3J0ZWQ6IChpc1JlY29yZGluZzogYm9vbGVhbikgPT4gdm9pZDtcclxufTtcclxuXHJcbmNsYXNzIENocm9tZURldGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIGF0dGVtcGVkQ2hyb21lRGV0ZWN0ID0gZmFsc2U7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYXR0ZW1wZWRDaHJvbWVEZXRlY3QpIHtcclxuICAgICAgdGhpcy5hdHRlbXBlZENocm9tZURldGVjdCA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIGRldGVjdCBjaHJvbWUnKTtcclxuICAgICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICAgIC8vIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCB3ID0gd2luZG93IGFzIGFueTtcclxuICAgICAgY29uc3QgYiA9IEJvd3Nlci5wYXJzZSh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBicm93c2VyLnNhdGlzZmllcygpIGZvciBDaHJvbWUgZGV0ZWN0aW9uLlxyXG4gICAgICBpc0Nocm9tZSA9IGIuYnJvd3Nlci5uYW1lID09PSAnQ2hyb21lJztcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBpZiAoaXNDaHJvbWUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3RoaXMucHJvcHMuc3BlZWNoU3VwcG9ydGVkKGlzQ2hyb21lKScpO1xyXG4gICAgICB0aGlzLnByb3BzLnNwZWVjaFN1cHBvcnRlZChpc0Nocm9tZSk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xyXG4gIHJldHVybiB7XHJcbiAgICBzcGVlY2hTdXBwb3J0ZWQ6IChzcGVlY2hTdXBwb3J0OiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaFN1cHBvcnQoc3BlZWNoU3VwcG9ydCkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hyb21lRGV0ZWN0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UYWInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIEFueUFjdGlvbiwgc2V0U3BlZWNoU3VwcG9ydCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgQ2FydENvbnRyb2wgZnJvbSAnLi9jYXJ0LWNvbnRyb2wnO1xyXG5pbXBvcnQgQ2hyb21lRGV0ZWN0IGZyb20gJy4vY2hyb21lLWRldGVjdCc7XHJcbmltcG9ydCBHcmFwaFBhbmVsQ29udHJvbCBmcm9tICcuL2dyYXBoLXBhbmVsLWNvbnRyb2wnO1xyXG5pbXBvcnQgSGFtYnVyZ2VyQ29udHJvbCBmcm9tICcuL2hhbWJ1cmdlci1jb250cm9sJztcclxuaW1wb3J0IEhpc3RvcnlDb250cm9sIGZyb20gJy4vaGlzdG9yeS1jb250cm9sJztcclxuaW1wb3J0IEluZm9Db250cm9sIGZyb20gJy4vaW5mby1jb250cm9sJztcclxuaW1wb3J0IExhbmd1YWdlQ29udHJvbCBmcm9tICcuL2xhbmd1YWdlLWNvbnRyb2wnO1xyXG5pbXBvcnQgTGV4aWNvbkNvbnRyb2wgZnJvbSAnLi9sZXhpY29uLWNvbnRyb2wnO1xyXG5pbXBvcnQgTG9hZGluZ0NvbnRyb2wgZnJvbSAnLi9sb2FkaW5nLWNvbnRyb2wnO1xyXG5pbXBvcnQgTWVudUNvbnRyb2wgZnJvbSAnLi9tZW51LWNvbnRyb2wnO1xyXG5pbXBvcnQgUG9zdGluZ0xpc3RDb250cm9sIGZyb20gJy4vcG9zdGluZy1saXN0LWNvbnRyb2wnO1xyXG5pbXBvcnQgUmVjb3JkZXJDb250cm9sIGZyb20gJy4vcmVjb3JkZXItY29udHJvbCc7XHJcbmltcG9ydCBTcGVlY2hDb250cm9sIGZyb20gJy4vc3BlZWNoLWNvbnRyb2wnO1xyXG5pbXBvcnQgVGVzdHNDb250cm9sIGZyb20gJy4vdGVzdHMtY29udHJvbCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG4gIHNwZWVjaFN1cHBvcnRlZDogKGlzUmVjb3JkaW5nOiBib29sZWFuKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY2xhc3MgRnJhbWVDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYXBwbGljYXRpb24uYmx1ZVBsYXRlV29ybGQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyYW1lfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgbWluU2l6ZT17MTAwfSBkZWZhdWx0U2l6ZT17NjAwfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZyYW1lVXBwZXJQYW5lbH0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWJzKCl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmFtZUxvd2VyUGFuZWx9PlxyXG4gICAgICAgICAgICAgICAgPFJlY29yZGVyQ29udHJvbCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcnRDb250cm9sIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3BsaXRQYW5lPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Q2hyb21lRGV0ZWN0Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8TG9hZGluZ0NvbnRyb2wgLz47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBERVNJR04gTk9URTogbW91bnRPbkVudGVyIGFuZCB1bm1vdW50T25FeGl0IGFyZSBuZWNlc3NhcnkgZm9yIHRoZVxyXG4gIC8vIEdyYXBoQ29udHJvbCBsYXlvdXQgYWxnb3JpdGhtLiBJdCB0dXJucyBvdXQgdGhlIGdldEJCb3goKSByZXR1cm5zXHJcbiAgLy8gYW4gZW1wdHkgYm91bmRpbmcgYm94IGZvciBzdmcgdGV4dCBlbGVtZW50cyB0aGF0IGFyZW4ndCBjdXJyZW50bHlcclxuICAvLyB2aXNpYmxlLlxyXG4gIC8vICAgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjEzODc5NjUvZ2V0YmJveC13aWR0aC1hbmQtaGVpZ2h0LXJldHVybnMtMFxyXG4gIC8vICAgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDA3NDQxNzYvZ2V0YmJveC1hbmQtZ2V0Y29tcHV0ZWR0ZXh0bGVuZ3RoLW9uY2Utd29ya2luZy1vbmNlLW5vdFxyXG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL0RtaXRyeUJhcmFub3Zza2l5L3JhcGhhZWwvaXNzdWVzLzc2MFxyXG4gIC8vICAgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjgyODIyOTUvZ2V0YmJveC1vZi1zdmctd2hlbi1oaWRkZW5cclxuICByZW5kZXJUYWJzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxUYWIuQ29udGFpbmVyIFxyXG4gICAgICAgICAgaWQ9XCJsZWZ0LXRhYnMtZXhhbXBsZVwiXHJcbiAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PVwiaW5mb1wiXHJcbiAgICAgICAgICBtb3VudE9uRW50ZXI9e3RydWV9XHJcbiAgICAgICAgICB1bm1vdW50T25FeGl0PXt0cnVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOYXYgdmFyaWFudD1cInRhYnNcIiBjbGFzc05hbWU9XCJmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiaW5mb1wiPkluZm88L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibWVudVwiPk1lbnU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGV4aWNvblwiPkxleGljb248L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwicG9zdGluZ3NcIj5Qb3N0aW5nczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJncmFwaFwiPkdyYXBoPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInRlc3RzXCI+VGVzdHM8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiaGlzdG9yeVwiPkhpc3Rvcnk8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleEdyb3c6IDF9fT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTcGVlY2hDb250cm9sLz5cclxuICAgICAgICAgICAgPExhbmd1YWdlQ29udHJvbC8+XHJcbiAgICAgICAgICAgIDxIYW1idXJnZXJDb250cm9sLz5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhHcm93OiAxLCBvdmVyZmxvdzogJ2hpZGRlbid9fT5cclxuICAgICAgICAgICAgPFRhYi5Db250ZW50IGNsYXNzTmFtZT17c3R5bGVzLmZyYW1lVGFifT5cclxuICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJpbmZvXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgPEluZm9Db250cm9sIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJtZW51XCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgPE1lbnVDb250cm9sIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJsZXhpY29uXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgICAgICAgICAgPExleGljb25Db250cm9sIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJwb3N0aW5nc1wiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnYXV0byd9fT5cclxuICAgICAgICAgICAgICAgIDxQb3N0aW5nTGlzdENvbnRyb2wgLz5cclxuICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cImdyYXBoXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyYXBoUGFuZWxDb250cm9sIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJoaXN0b3J5XCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgICAgICAgICAgPEhpc3RvcnlDb250cm9sIGhpc3Rvcnk9e3RoaXMucHJvcHMuYXBwbGljYXRpb24uaGlzdG9yeX0vPlxyXG4gICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwidGVzdHNcIiBzdHlsZT17e2hlaWdodDogJzEwMCUnLCBvdmVyZmxvdzogJ2F1dG8nfX0+XHJcbiAgICAgICAgICAgICAgICA8VGVzdHNDb250cm9sLz5cclxuICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICA8L1RhYi5Db250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UYWIuQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc3BlZWNoU3VwcG9ydGVkOiAoc3BlZWNoU3VwcG9ydDogYm9vbGVhbikgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRTcGVlY2hTdXBwb3J0KHNwZWVjaFN1cHBvcnQpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRnJhbWVDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==