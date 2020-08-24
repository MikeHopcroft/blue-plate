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

    if (language === 'warning-chrome') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZm8tY29udHJvbC50c3giXSwibmFtZXMiOlsibWFya2Rvd24iLCJyZXF1aXJlIiwidG9TdHJpbmciLCJyZW5kZXJlcnMiLCJjb2RlIiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsIkluZm9Db250cm9sIiwic3R5bGVzIiwiaW5mb1BhbmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImFwcGxpY2F0aW9uIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFFQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUCxZQUE2QkMsUUFBN0IsRUFBakI7O0FBSUM7QUFFRCxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLE1BQUksRUFBRSxvQkFBeUI7QUFBQSxRQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsUUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUM3QixRQUFJRCxRQUFRLEtBQUssZ0JBQWpCLEVBQW1DO0FBQ2pDLGFBQ0UsTUFBQyx1REFBRDtBQUFlLFlBQUksRUFBRUMsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBR0QsS0FKRCxNQUlPO0FBQ0wsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTSxpQkFBUyxFQUFFRCxRQUFRLHVCQUFnQkEsUUFBaEIsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHQyxLQURILENBREYsQ0FERjtBQU9EO0FBQ0Y7QUFmZSxDQUFsQjs7SUFrQk1DLFc7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUNFO0FBQUssVUFBRSxFQUFDLGFBQVI7QUFBc0IsaUJBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscURBQUQ7QUFBZSxjQUFNLEVBQUVULFFBQXZCO0FBQWlDLGlCQUFTLEVBQUVHLFNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGO0FBTUQ7Ozs7RUFSdUJPLDRDQUFLLENBQUNDLFM7O0FBV2hDLFNBQVNDLGVBQVQsQ0FBeUJDLFdBQXpCLEVBQXdEO0FBQ3RELFNBQU87QUFBRUEsZUFBVyxFQUFYQTtBQUFGLEdBQVA7QUFDRDs7QUFFY0MsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCTCxXQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hN2E2ZDk0OGI3MmI2MDQ4YzhhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgQ2hyb21lV2FybmluZyBmcm9tICcuL2Nocm9tZS13YXJuaW5nJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuY29uc3QgbWFya2Rvd24gPSByZXF1aXJlKCcuL2luZm8ubWQnKS5kZWZhdWx0LnRvU3RyaW5nKCk7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyZXJzID0ge1xyXG4gIGNvZGU6ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICBpZiAobGFuZ3VhZ2UgPT09ICd3YXJuaW5nLWNocm9tZScpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hyb21lV2FybmluZyB0ZXh0PXt2YWx1ZX0vPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtsYW5ndWFnZSAmJiBgbGFuZ3VhZ2UtJHtsYW5ndWFnZX1gfT5cclxuICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgIDwvcHJlPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBJbmZvQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9J0luZm9Db250cm9sJyBjbGFzc05hbWU9e3N0eWxlcy5pbmZvUGFuZX0+XHJcbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXttYXJrZG93bn0gcmVuZGVyZXJzPXtyZW5kZXJlcnN9Lz5cclxuICAgICAgICB7LyogQnV0IGRvIHRoeSB3b3JzdCB0byBzdGVhbCB0aHlzZWxmIGF3YXksIEZvciB0ZXJtIG9mIGxpZmUgdGhvdSBhcnQgYXNzdXJlZCBtaW5lOyBBbmQgbGlmZSBubyBsb25nZXIgdGhhbiB0aHkgbG92ZSB3aWxsIHN0YXksIEZvciBpdCBkZXBlbmRzIHVwb24gdGhhdCBsb3ZlIG9mIHRoaW5lLiBUaGVuIG5lZWQgSSBub3QgdG8gZmVhciB0aGUgd29yc3Qgb2Ygd3JvbmdzLCBXaGVuIGluIHRoZSBsZWFzdCBvZiB0aGVtIG15IGxpZmUgaGF0aCBlbmQuIEkgc2VlIGEgYmV0dGVyIHN0YXRlIHRvIG1lIGJlbG9uZ3MgVGhhbiB0aGF0IHdoaWNoIG9uIHRoeSBodW1vdXIgZG90aCBkZXBlbmQ6IFRob3UgY2Fuc3Qgbm90IHZleCBtZSB3aXRoIGluY29uc3RhbnQgbWluZCwgU2luY2UgdGhhdCBteSBsaWZlIG9uIHRoeSByZXZvbHQgZG90aCBsaWUuICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5mb0NvbnRyb2wpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9