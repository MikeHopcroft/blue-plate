webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/speech-control.tsx":
/*!***************************************!*\
  !*** ./components/speech-control.tsx ***!
  \***************************************/
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
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");





var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\speech-control.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






;

var SpeechControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SpeechControl, _React$Component);

  var _super = _createSuper(SpeechControl);

  function SpeechControl() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SpeechControl);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SpeechControl, [{
    key: "render",
    value: function render() {
      var config = this.props.application.speechConfig;
      var mode = config.mode;
      var speech = mode === _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].AZURE ? 'Azure Speech' : mode === _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].WEB_SPEECH ? 'Google Speech' : 'Text';
      var azureEnabled = config.azureRegion && config.azureSubscriptionKey;
      var webSpeechEnabled = config.speechSupport;
      console.log("Azure: ".concat(azureEnabled, ", WebSpeech: ").concat(webSpeechEnabled));
      return __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Toggle, {
        variant: "light",
        id: "dropdown-basic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaMicrophone"], {
        style: {
          width: '1.2em',
          height: '1.2em',
          paddingRight: '4px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }), speech), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        disabled: !azureEnabled,
        onSelect: this.props.setAzure,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, "Azure Speech"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        disabled: !webSpeechEnabled,
        onSelect: this.props.setWebSpeech,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, "Google Speech"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        onSelect: this.props.setText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, "Text")));
    }
  }]);

  return SpeechControl;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function mapStateToProps(application) {
  return {
    application: application
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAzure: function setAzure() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setSpeechConfig"])({
        mode: _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].AZURE
      }));
    },
    setText: function setText() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setSpeechConfig"])({
        mode: _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].TEXT
      }));
    },
    setWebSpeech: function setWebSpeech() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setSpeechConfig"])({
        mode: _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].WEB_SPEECH
      }));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(SpeechControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJTcGVlY2hDb250cm9sIiwiY29uZmlnIiwicHJvcHMiLCJhcHBsaWNhdGlvbiIsInNwZWVjaENvbmZpZyIsIm1vZGUiLCJzcGVlY2giLCJTcGVlY2hNb2RlIiwiQVpVUkUiLCJXRUJfU1BFRUNIIiwiYXp1cmVFbmFibGVkIiwiYXp1cmVSZWdpb24iLCJhenVyZVN1YnNjcmlwdGlvbktleSIsIndlYlNwZWVjaEVuYWJsZWQiLCJzcGVlY2hTdXBwb3J0IiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1JpZ2h0Iiwic2V0QXp1cmUiLCJzZXRXZWJTcGVlY2giLCJzZXRUZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldFNwZWVjaENvbmZpZyIsIlRFWFQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQWNDOztJQUVLQSxhOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkMsWUFBdEM7QUFDQSxVQUFNQyxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBcEI7QUFDQSxVQUFNQyxNQUFNLEdBQUlELElBQUksS0FBS0UsbURBQVUsQ0FBQ0MsS0FBcEIsR0FDZCxjQURjLEdBRWRILElBQUksS0FBS0UsbURBQVUsQ0FBQ0UsVUFBcEIsR0FDQSxlQURBLEdBQ2tCLE1BSHBCO0FBS0EsVUFBTUMsWUFBWSxHQUFHVCxNQUFNLENBQUNVLFdBQVAsSUFBc0JWLE1BQU0sQ0FBQ1csb0JBQWxEO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUdaLE1BQU0sQ0FBQ2EsYUFBaEM7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLGtCQUFzQk4sWUFBdEIsMEJBQWtERyxnQkFBbEQ7QUFFQSxhQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0VBQUQsQ0FBVSxNQUFWO0FBQWlCLGVBQU8sRUFBQyxPQUF6QjtBQUFpQyxVQUFFLEVBQUMsZ0JBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDJEQUFEO0FBQWMsYUFBSyxFQUFFO0FBQUNJLGVBQUssRUFBRSxPQUFSO0FBQWlCQyxnQkFBTSxFQUFFLE9BQXpCO0FBQWtDQyxzQkFBWSxFQUFFO0FBQWhELFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVJYixNQUZKLENBREYsRUFNRSxNQUFDLGdFQUFELENBQVUsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnRUFBRCxDQUFVLElBQVY7QUFDRSxnQkFBUSxFQUFFLENBQUNJLFlBRGI7QUFFRSxnQkFBUSxFQUFFLEtBQUtSLEtBQUwsQ0FBV2tCLFFBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFPRSxNQUFDLGdFQUFELENBQVUsSUFBVjtBQUNFLGdCQUFRLEVBQUUsQ0FBQ1AsZ0JBRGI7QUFFRSxnQkFBUSxFQUFFLEtBQUtYLEtBQUwsQ0FBV21CLFlBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEYsRUFhRSxNQUFDLGdFQUFELENBQVUsSUFBVjtBQUFlLGdCQUFRLEVBQUUsS0FBS25CLEtBQUwsQ0FBV29CLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsQ0FORixDQURGO0FBd0JEOzs7O0VBckN5QkMsNENBQUssQ0FBQ0MsUzs7QUF3Q2xDLFNBQVNDLGVBQVQsQ0FBeUJ0QixXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUVBLGVBQVcsRUFBWEE7QUFBRixHQUFQO0FBQ0Q7O0FBRUQsU0FBU3VCLGtCQUFULENBQTRCQyxRQUE1QixFQUEyRDtBQUN6RCxTQUFPO0FBQ0xQLFlBQVEsRUFBRSxvQkFBTTtBQUNkTyxjQUFRLENBQUNDLGdFQUFlLENBQUM7QUFBQ3ZCLFlBQUksRUFBRUUsbURBQVUsQ0FBQ0M7QUFBbEIsT0FBRCxDQUFoQixDQUFSO0FBQ0QsS0FISTtBQUlMYyxXQUFPLEVBQUUsbUJBQU07QUFDYkssY0FBUSxDQUFDQyxnRUFBZSxDQUFDO0FBQUN2QixZQUFJLEVBQUVFLG1EQUFVLENBQUNzQjtBQUFsQixPQUFELENBQWhCLENBQVI7QUFDRCxLQU5JO0FBT0xSLGdCQUFZLEVBQUUsd0JBQU07QUFDbEJNLGNBQVEsQ0FBQ0MsZ0VBQWUsQ0FBQztBQUFDdkIsWUFBSSxFQUFFRSxtREFBVSxDQUFDRTtBQUFsQixPQUFELENBQWhCLENBQVI7QUFDRDtBQVRJLEdBQVA7QUFXRDs7QUFFY3FCLDBIQUFPLENBQUNMLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDMUIsYUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzY5YzcyYjg0YmUwMTA4ZDQ4NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bic7XHJcbmltcG9ydCB7IEZhTWljcm9waG9uZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIEFueUFjdGlvbixcclxuICBzZXRTcGVlY2hDb25maWcsXHJcbiAgU3BlZWNoTW9kZSxcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZTtcclxuICBzZXRBenVyZTogKCkgPT4gdm9pZDtcclxuICBzZXRXZWJTcGVlY2g6ICgpID0+IHZvaWQ7XHJcbiAgc2V0VGV4dDogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNsYXNzIFNwZWVjaENvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZztcclxuICAgIGNvbnN0IG1vZGUgPSBjb25maWcubW9kZTtcclxuICAgIGNvbnN0IHNwZWVjaCA9ICBtb2RlID09PSBTcGVlY2hNb2RlLkFaVVJFID8gXHJcbiAgICAgICdBenVyZSBTcGVlY2gnIDpcclxuICAgICAgbW9kZSA9PT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIID9cclxuICAgICAgJ0dvb2dsZSBTcGVlY2gnIDogJ1RleHQnO1xyXG5cclxuICAgIGNvbnN0IGF6dXJlRW5hYmxlZCA9IGNvbmZpZy5henVyZVJlZ2lvbiAmJiBjb25maWcuYXp1cmVTdWJzY3JpcHRpb25LZXk7XHJcbiAgICBjb25zdCB3ZWJTcGVlY2hFbmFibGVkID0gY29uZmlnLnNwZWVjaFN1cHBvcnQ7XHJcbiAgICBjb25zb2xlLmxvZyhgQXp1cmU6ICR7YXp1cmVFbmFibGVkfSwgV2ViU3BlZWNoOiAke3dlYlNwZWVjaEVuYWJsZWR9YCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgdmFyaWFudD1cImxpZ2h0XCIgaWQ9XCJkcm9wZG93bi1iYXNpY1wiPlxyXG4gICAgICAgICAgPEZhTWljcm9waG9uZSBzdHlsZT17e3dpZHRoOiAnMS4yZW0nLCBoZWlnaHQ6ICcxLjJlbScsIHBhZGRpbmdSaWdodDogJzRweCd9fS8+XHJcbiAgICAgICAgICB7IHNwZWVjaCB9XHJcbiAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcblxyXG4gICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFhenVyZUVuYWJsZWR9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnByb3BzLnNldEF6dXJlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEF6dXJlIFNwZWVjaFxyXG4gICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF3ZWJTcGVlY2hFbmFibGVkfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5wcm9wcy5zZXRXZWJTcGVlY2h9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdvb2dsZSBTcGVlY2hcclxuICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uU2VsZWN0PXt0aGlzLnByb3BzLnNldFRleHR9PlRleHQ8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgYXBwbGljYXRpb24gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNldEF6dXJlOiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyh7bW9kZTogU3BlZWNoTW9kZS5BWlVSRX0pKTtcclxuICAgIH0sXHJcbiAgICBzZXRUZXh0OiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyh7bW9kZTogU3BlZWNoTW9kZS5URVhUfSkpO1xyXG4gICAgfSxcclxuICAgIHNldFdlYlNwZWVjaDogKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRTcGVlY2hDb25maWcoe21vZGU6IFNwZWVjaE1vZGUuV0VCX1NQRUVDSH0pKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3BlZWNoQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=