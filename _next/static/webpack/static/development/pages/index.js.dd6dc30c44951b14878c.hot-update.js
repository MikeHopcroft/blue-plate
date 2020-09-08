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
        var isChrome = false;
        var w = window;
        var b = bowser__WEBPACK_IMPORTED_MODULE_7___default.a.parse(window.navigator.userAgent); // TODO: use browser.satisfies() for Chrome detection.

        isChrome = b.browser.name === 'Chrome';
        console.log("this.props.speechSupported(".concat(isChrome, ")"));
        this.props.speechSupported(isChrome);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Nocm9tZS1kZXRlY3QudHN4Il0sIm5hbWVzIjpbIkNocm9tZURldGVjdCIsImF0dGVtcGVkQ2hyb21lRGV0ZWN0IiwiY29uc29sZSIsImxvZyIsImlzQ2hyb21lIiwidyIsIndpbmRvdyIsImIiLCJCb3dzZXIiLCJwYXJzZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImJyb3dzZXIiLCJuYW1lIiwicHJvcHMiLCJzcGVlY2hTdXBwb3J0ZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3BlZWNoU3VwcG9ydCIsInNldFNwZWVjaFN1cHBvcnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUlDOztJQUVLQSxZOzs7Ozs7Ozs7Ozs7Ozs7OytOQUNtQixLOzs7Ozs7OzZCQUVkO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBSSxDQUFDLEtBQUtDLG9CQUFWLEVBQWdDO0FBQzlCLGFBQUtBLG9CQUFMLEdBQTRCLElBQTVCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0EsWUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxZQUFNQyxDQUFDLEdBQUdDLE1BQVY7QUFDQSxZQUFNQyxDQUFDLEdBQUdDLDZDQUFNLENBQUNDLEtBQVAsQ0FBYUgsTUFBTSxDQUFDSSxTQUFQLENBQWlCQyxTQUE5QixDQUFWLENBTDhCLENBTTlCOztBQUNBUCxnQkFBUSxHQUFHRyxDQUFDLENBQUNLLE9BQUYsQ0FBVUMsSUFBVixLQUFtQixRQUE5QjtBQUNBWCxlQUFPLENBQUNDLEdBQVIsc0NBQTBDQyxRQUExQztBQUNBLGFBQUtVLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQlgsUUFBM0I7QUFDRDtBQUNGOzs7O0VBbkJ3QlksNENBQUssQ0FBQ0MsUzs7QUFzQmpDLFNBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUEyRDtBQUN6RCxTQUFPO0FBQ0xKLG1CQUFlLEVBQUUseUJBQUNLLGFBQUQsRUFBNEI7QUFDM0NELGNBQVEsQ0FBQ0Usa0VBQWdCLENBQUNELGFBQUQsQ0FBakIsQ0FBUjtBQUNEO0FBSEksR0FBUDtBQUtEOztBQUVjRSwwSEFBTyxDQUFDLElBQUQsRUFBT0osa0JBQVAsQ0FBUCxDQUFrQ2xCLFlBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmRkNmRjMzBjNDQ5NTFiMTQ4NzhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm93c2VyIGZyb20gXCJib3dzZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQgeyBBbnlBY3Rpb24sIHNldFNwZWVjaFN1cHBvcnQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBzcGVlY2hTdXBwb3J0ZWQ6IChpc1JlY29yZGluZzogYm9vbGVhbikgPT4gdm9pZDtcclxufTtcclxuXHJcbmNsYXNzIENocm9tZURldGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIGF0dGVtcGVkQ2hyb21lRGV0ZWN0ID0gZmFsc2U7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYXR0ZW1wZWRDaHJvbWVEZXRlY3QpIHtcclxuICAgICAgdGhpcy5hdHRlbXBlZENocm9tZURldGVjdCA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIGRldGVjdCBjaHJvbWUnKTtcclxuICAgICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICAgIGNvbnN0IHcgPSB3aW5kb3cgYXMgYW55O1xyXG4gICAgICBjb25zdCBiID0gQm93c2VyLnBhcnNlKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgICAgLy8gVE9ETzogdXNlIGJyb3dzZXIuc2F0aXNmaWVzKCkgZm9yIENocm9tZSBkZXRlY3Rpb24uXHJcbiAgICAgIGlzQ2hyb21lID0gYi5icm93c2VyLm5hbWUgPT09ICdDaHJvbWUnO1xyXG4gICAgICBjb25zb2xlLmxvZyhgdGhpcy5wcm9wcy5zcGVlY2hTdXBwb3J0ZWQoJHtpc0Nocm9tZX0pYCk7XHJcbiAgICAgIHRoaXMucHJvcHMuc3BlZWNoU3VwcG9ydGVkKGlzQ2hyb21lKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xyXG4gIHJldHVybiB7XHJcbiAgICBzcGVlY2hTdXBwb3J0ZWQ6IChzcGVlY2hTdXBwb3J0OiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaFN1cHBvcnQoc3BlZWNoU3VwcG9ydCkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hyb21lRGV0ZWN0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==