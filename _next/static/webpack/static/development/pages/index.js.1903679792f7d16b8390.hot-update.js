webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/info-control.tsx":
/*!*************************************!*\
  !*** ./components/info-control.tsx ***!
  \*************************************/
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
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _chrome_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chrome-warning */ "./components/chrome-warning.tsx");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_9__);






var _this = undefined,
    _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\info-control.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var markdown = __webpack_require__(/*! ./info.md */ "./components/info.md")["default"].toString();

;
var renderers = {
  code: function code(_ref) {
    var language = _ref.language,
        value = _ref.value;

    if (language === 'warning') {
      return __jsx(_chrome_warning__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: value,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      });
    } else {
      return __jsx("pre", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, __jsx("code", {
        className: language && "language-".concat(language),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, value));
    }
  }
};

var InfoControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(InfoControl, _React$Component);

  var _super = _createSuper(InfoControl);

  function InfoControl() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InfoControl);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InfoControl, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "InfoControl",
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.infoPane,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        source: markdown,
        renderers: renderers,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }));
    }
  }]);

  return InfoControl;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function mapStateToProps(application) {
  return {
    application: application
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(InfoControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZm8tY29udHJvbC50c3giXSwibmFtZXMiOlsibWFya2Rvd24iLCJyZXF1aXJlIiwidG9TdHJpbmciLCJyZW5kZXJlcnMiLCJjb2RlIiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsIkluZm9Db250cm9sIiwic3R5bGVzIiwiaW5mb1BhbmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImFwcGxpY2F0aW9uIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFFQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUCxZQUE2QkMsUUFBN0IsRUFBakI7O0FBSUM7QUFFRCxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLE1BQUksRUFBRSxvQkFBeUI7QUFBQSxRQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsUUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUM3QixRQUFJRCxRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDMUIsYUFDRSxNQUFDLHVEQUFEO0FBQWUsWUFBSSxFQUFFQyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFHRCxLQUpELE1BSU87QUFDTCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFNLGlCQUFTLEVBQUVELFFBQVEsdUJBQWdCQSxRQUFoQixDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dDLEtBREgsQ0FERixDQURGO0FBT0Q7QUFDRjtBQWZlLENBQWxCOztJQWtCTUMsVzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxVQUFFLEVBQUMsYUFBUjtBQUFzQixpQkFBUyxFQUFFQywyREFBTSxDQUFDQyxRQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxxREFBRDtBQUFlLGNBQU0sRUFBRVQsUUFBdkI7QUFBaUMsaUJBQVMsRUFBRUcsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREY7QUFNRDs7OztFQVJ1Qk8sNENBQUssQ0FBQ0MsUzs7QUFXaEMsU0FBU0MsZUFBVCxDQUF5QkMsV0FBekIsRUFBd0Q7QUFDdEQsU0FBTztBQUFFQSxlQUFXLEVBQVhBO0FBQUYsR0FBUDtBQUNEOztBQUVjQywwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJMLFdBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjE5MDM2Nzk3OTJmN2QxNmI4MzkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCBDaHJvbWVXYXJuaW5nIGZyb20gJy4vY2hyb21lLXdhcm5pbmcnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5jb25zdCBtYXJrZG93biA9IHJlcXVpcmUoJy4vaW5mby5tZCcpLmRlZmF1bHQudG9TdHJpbmcoKTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJlcnMgPSB7XHJcbiAgY29kZTogKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcclxuICAgIGlmIChsYW5ndWFnZSA9PT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENocm9tZVdhcm5pbmcgdGV4dD17dmFsdWV9Lz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHByZT5cclxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17bGFuZ3VhZ2UgJiYgYGxhbmd1YWdlLSR7bGFuZ3VhZ2V9YH0+XHJcbiAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICA8L3ByZT5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgSW5mb0NvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPSdJbmZvQ29udHJvbCcgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1BhbmV9PlxyXG4gICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17bWFya2Rvd259IHJlbmRlcmVycz17cmVuZGVyZXJzfS8+XHJcbiAgICAgICAgey8qIEJ1dCBkbyB0aHkgd29yc3QgdG8gc3RlYWwgdGh5c2VsZiBhd2F5LCBGb3IgdGVybSBvZiBsaWZlIHRob3UgYXJ0IGFzc3VyZWQgbWluZTsgQW5kIGxpZmUgbm8gbG9uZ2VyIHRoYW4gdGh5IGxvdmUgd2lsbCBzdGF5LCBGb3IgaXQgZGVwZW5kcyB1cG9uIHRoYXQgbG92ZSBvZiB0aGluZS4gVGhlbiBuZWVkIEkgbm90IHRvIGZlYXIgdGhlIHdvcnN0IG9mIHdyb25ncywgV2hlbiBpbiB0aGUgbGVhc3Qgb2YgdGhlbSBteSBsaWZlIGhhdGggZW5kLiBJIHNlZSBhIGJldHRlciBzdGF0ZSB0byBtZSBiZWxvbmdzIFRoYW4gdGhhdCB3aGljaCBvbiB0aHkgaHVtb3VyIGRvdGggZGVwZW5kOiBUaG91IGNhbnN0IG5vdCB2ZXggbWUgd2l0aCBpbmNvbnN0YW50IG1pbmQsIFNpbmNlIHRoYXQgbXkgbGlmZSBvbiB0aHkgcmV2b2x0IGRvdGggbGllLiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgYXBwbGljYXRpb24gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEluZm9Db250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==