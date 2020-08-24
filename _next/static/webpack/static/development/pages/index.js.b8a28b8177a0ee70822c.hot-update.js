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
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





;

var ChromeDetect = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ChromeDetect, _React$Component);

  var _super = _createSuper(ChromeDetect);

  function ChromeDetect() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChromeDetect);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChromeDetect, [{
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('Attempting to detect chrome');
      var isChrome = false; // if (typeof window !== 'undefined') {

      var w = window;
      var b = bowser__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.navigator.userAgent); // TODO: use browser.satisfies() for Chrome detection.

      isChrome = b.browser.name === 'Chrome'; // }
      // if (isChrome) {

      console.log('this.props.speechSupported(isChrome)'); // this.props.speechSupported(isChrome);
      // }
    }
  }]);

  return ChromeDetect;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function mapDispatchToProps(dispatch) {
  return {
    speechSupported: function speechSupported(speechSupport) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["setSpeechSupport"])(speechSupport));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(null, mapDispatchToProps)(ChromeDetect));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Nocm9tZS1kZXRlY3QudHN4Il0sIm5hbWVzIjpbIkNocm9tZURldGVjdCIsImNvbnNvbGUiLCJsb2ciLCJpc0Nocm9tZSIsInciLCJ3aW5kb3ciLCJiIiwiQm93c2VyIiwicGFyc2UiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJicm93c2VyIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzcGVlY2hTdXBwb3J0ZWQiLCJzcGVlY2hTdXBwb3J0Iiwic2V0U3BlZWNoU3VwcG9ydCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFJQzs7SUFFS0EsWTs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQU8sSUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxLQUFmLENBRmtCLENBR2xCOztBQUNBLFVBQU1DLENBQUMsR0FBR0MsTUFBVjtBQUNBLFVBQU1DLENBQUMsR0FBR0MsNkNBQU0sQ0FBQ0MsS0FBUCxDQUFhSCxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLFNBQTlCLENBQVYsQ0FMa0IsQ0FNbEI7O0FBQ0FQLGNBQVEsR0FBR0csQ0FBQyxDQUFDSyxPQUFGLENBQVVDLElBQVYsS0FBbUIsUUFBOUIsQ0FQa0IsQ0FRbEI7QUFDQTs7QUFDQVgsYUFBTyxDQUFDQyxHQUFSLENBQVksc0NBQVosRUFWa0IsQ0FXbEI7QUFDQTtBQUNEOzs7O0VBbEJ3QlcsNENBQUssQ0FBQ0MsUzs7QUFxQmpDLFNBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUEyRDtBQUN6RCxTQUFPO0FBQ0xDLG1CQUFlLEVBQUUseUJBQUNDLGFBQUQsRUFBNEI7QUFDM0NGLGNBQVEsQ0FBQ0csaUVBQWdCLENBQUNELGFBQUQsQ0FBakIsQ0FBUjtBQUNEO0FBSEksR0FBUDtBQUtEOztBQUVjRSwwSEFBTyxDQUFDLElBQUQsRUFBT0wsa0JBQVAsQ0FBUCxDQUFrQ2YsWUFBbEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjhhMjhiODE3N2EwZWU3MDgyMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3dzZXIgZnJvbSBcImJvd3NlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7IEFueUFjdGlvbiwgc2V0U3BlZWNoU3VwcG9ydCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHNwZWVjaFN1cHBvcnRlZDogKGlzUmVjb3JkaW5nOiBib29sZWFuKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY2xhc3MgQ2hyb21lRGV0ZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIGRldGVjdCBjaHJvbWUnKTtcclxuICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgLy8gaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjb25zdCB3ID0gd2luZG93IGFzIGFueTtcclxuICAgIGNvbnN0IGIgPSBCb3dzZXIucGFyc2Uod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgLy8gVE9ETzogdXNlIGJyb3dzZXIuc2F0aXNmaWVzKCkgZm9yIENocm9tZSBkZXRlY3Rpb24uXHJcbiAgICBpc0Nocm9tZSA9IGIuYnJvd3Nlci5uYW1lID09PSAnQ2hyb21lJztcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChpc0Nocm9tZSkge1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMucHJvcHMuc3BlZWNoU3VwcG9ydGVkKGlzQ2hyb21lKScpO1xyXG4gICAgLy8gdGhpcy5wcm9wcy5zcGVlY2hTdXBwb3J0ZWQoaXNDaHJvbWUpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNwZWVjaFN1cHBvcnRlZDogKHNwZWVjaFN1cHBvcnQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0U3BlZWNoU3VwcG9ydChzcGVlY2hTdXBwb3J0KSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShDaHJvbWVEZXRlY3QpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9