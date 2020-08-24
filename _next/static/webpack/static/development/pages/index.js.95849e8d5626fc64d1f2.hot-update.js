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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Nocm9tZS1kZXRlY3QudHN4Il0sIm5hbWVzIjpbIkNocm9tZURldGVjdCIsImF0dGVtcGVkQ2hyb21lRGV0ZWN0IiwiY29uc29sZSIsImxvZyIsImlzQ2hyb21lIiwidyIsIndpbmRvdyIsImIiLCJCb3dzZXIiLCJwYXJzZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImJyb3dzZXIiLCJuYW1lIiwicHJvcHMiLCJzcGVlY2hTdXBwb3J0ZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3BlZWNoU3VwcG9ydCIsInNldFNwZWVjaFN1cHBvcnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUlDOztJQUVLQSxZOzs7Ozs7Ozs7Ozs7Ozs7OytOQUNtQixLOzs7Ozs7OzZCQUVkO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBSSxDQUFDLEtBQUtDLG9CQUFWLEVBQWdDO0FBQzlCLGFBQUtBLG9CQUFMLEdBQTRCLElBQTVCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0EsWUFBSUMsUUFBUSxHQUFHLEtBQWYsQ0FIOEIsQ0FJOUI7O0FBQ0EsWUFBTUMsQ0FBQyxHQUFHQyxNQUFWO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHQyw2Q0FBTSxDQUFDQyxLQUFQLENBQWFILE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsU0FBOUIsQ0FBVixDQU44QixDQU85Qjs7QUFDQVAsZ0JBQVEsR0FBR0csQ0FBQyxDQUFDSyxPQUFGLENBQVVDLElBQVYsS0FBbUIsUUFBOUIsQ0FSOEIsQ0FTOUI7QUFDQTs7QUFDQVgsZUFBTyxDQUFDQyxHQUFSLENBQVksc0NBQVo7QUFDQSxhQUFLVyxLQUFMLENBQVdDLGVBQVgsQ0FBMkJYLFFBQTNCLEVBWjhCLENBYTlCO0FBQ0Q7QUFDRjs7OztFQXZCd0JZLDRDQUFLLENBQUNDLFM7O0FBMEJqQyxTQUFTQyxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBMkQ7QUFDekQsU0FBTztBQUNMSixtQkFBZSxFQUFFLHlCQUFDSyxhQUFELEVBQTRCO0FBQzNDRCxjQUFRLENBQUNFLGtFQUFnQixDQUFDRCxhQUFELENBQWpCLENBQVI7QUFDRDtBQUhJLEdBQVA7QUFLRDs7QUFFY0UsMEhBQU8sQ0FBQyxJQUFELEVBQU9KLGtCQUFQLENBQVAsQ0FBa0NsQixZQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45NTg0OWU4ZDU2MjZmYzY0ZDFmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvd3NlciBmcm9tIFwiYm93c2VyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHsgQW55QWN0aW9uLCBzZXRTcGVlY2hTdXBwb3J0IH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgc3BlZWNoU3VwcG9ydGVkOiAoaXNSZWNvcmRpbmc6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jbGFzcyBDaHJvbWVEZXRlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICBhdHRlbXBlZENocm9tZURldGVjdCA9IGZhbHNlO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYgKCF0aGlzLmF0dGVtcGVkQ2hyb21lRGV0ZWN0KSB7XHJcbiAgICAgIHRoaXMuYXR0ZW1wZWRDaHJvbWVEZXRlY3QgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBkZXRlY3QgY2hyb21lJyk7XHJcbiAgICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgICAvLyBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgdyA9IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAgIGNvbnN0IGIgPSBCb3dzZXIucGFyc2Uod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICAvLyBUT0RPOiB1c2UgYnJvd3Nlci5zYXRpc2ZpZXMoKSBmb3IgQ2hyb21lIGRldGVjdGlvbi5cclxuICAgICAgaXNDaHJvbWUgPSBiLmJyb3dzZXIubmFtZSA9PT0gJ0Nocm9tZSc7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gaWYgKGlzQ2hyb21lKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnByb3BzLnNwZWVjaFN1cHBvcnRlZChpc0Nocm9tZSknKTtcclxuICAgICAgdGhpcy5wcm9wcy5zcGVlY2hTdXBwb3J0ZWQoaXNDaHJvbWUpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc3BlZWNoU3VwcG9ydGVkOiAoc3BlZWNoU3VwcG9ydDogYm9vbGVhbikgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRTcGVlY2hTdXBwb3J0KHNwZWVjaFN1cHBvcnQpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENocm9tZURldGVjdCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=