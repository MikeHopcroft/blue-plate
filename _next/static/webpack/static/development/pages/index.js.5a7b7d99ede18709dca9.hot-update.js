webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/speech-config-control.tsx":
/*!**********************************************!*\
  !*** ./components/speech-config-control.tsx ***!
  \**********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");







var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\speech-config-control.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







;

var SpeechConfigControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SpeechConfigControl, _React$Component);

  var _super = _createSuper(SpeechConfigControl);

  function SpeechConfigControl(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SpeechConfigControl);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "save", function (e) {
      e.preventDefault();

      _this.props.save(_this.state.speechConfig);

      _this.props.close();
    });

    _this.state = {
      speechConfig: props.application.speechConfig
    };
    _this.onModeChange = _this.onModeChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onRegionChange = _this.onRegionChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onSubscriptionChange = _this.onSubscriptionChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SpeechConfigControl, [{
    key: "onModeChange",
    value: function onModeChange(e) {
      var speechConfig = _objectSpread(_objectSpread({}, this.state.speechConfig), {}, {
        mode: e.target.value
      });

      this.setState({
        speechConfig: speechConfig
      });
    }
  }, {
    key: "onSubscriptionChange",
    value: function onSubscriptionChange(e) {
      var azureSubscriptionKey = e.target.value;
      var mode = azureSubscriptionKey ? this.state.speechConfig.mode : _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT;

      var speechConfig = _objectSpread(_objectSpread({}, this.state.speechConfig), {}, {
        azureSubscriptionKey: azureSubscriptionKey,
        mode: mode
      });

      this.setState({
        speechConfig: speechConfig
      });
    }
  }, {
    key: "onRegionChange",
    value: function onRegionChange(e) {
      var azureRegion = e.target.value;
      var mode = azureRegion ? this.state.speechConfig.mode : _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT;
      console.log("region=\"".concat(azureRegion, "\""));
      console.log("mode=".concat(mode));

      var speechConfig = _objectSpread(_objectSpread({}, this.state.speechConfig), {}, {
        azureRegion: azureRegion,
        mode: mode
      });

      this.setState({
        speechConfig: speechConfig
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render');
      var _this$state$speechCon = this.state.speechConfig,
          mode = _this$state$speechCon.mode,
          azureSubscriptionKey = _this$state$speechCon.azureSubscriptionKey,
          azureRegion = _this$state$speechCon.azureRegion,
          speechSupport = _this$state$speechCon.speechSupport;
      var azureEnabled = !!(azureRegion && azureSubscriptionKey);
      var webSpeechEnabled = speechSupport;
      return __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        show: this.props.show,
        onHide: this.props.close,
        backdrop: "static",
        keyboard: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        checked: mode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT,
        label: "Disable speech",
        type: "radio",
        value: _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT,
        onChange: this.onModeChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 15
        }
      }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        checked: mode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].WEB_SPEECH,
        disabled: !webSpeechEnabled,
        label: "Use Web Speech API (Chrome browser only)",
        type: "radio",
        value: _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].WEB_SPEECH,
        onChange: this.onModeChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 15
        }
      }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        checked: mode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].AZURE,
        disabled: !azureEnabled,
        label: "Use Azure Speech API",
        type: "radio",
        value: _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].AZURE,
        onChange: this.onModeChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 15
        }
      }, "Azure Subscription Key"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
        defaultValue: this.state.speechConfig.azureSubscriptionKey,
        placeholder: "enter subscription key",
        type: "password",
        onChange: this.onSubscriptionChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 15
        }
      }, "Azure Region"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
        defaultValue: this.state.speechConfig.azureRegion,
        type: "text",
        placeholder: "enter region (e.g. westus2)",
        onChange: this.onRegionChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 13
        }
      }, "Save"))));
    }
  }]);

  return SpeechConfigControl;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

function mapStateToProps(application) {
  return {
    application: application
  };
}

function mapDispatchToProps(dispatch) {
  return {
    save: function save(config) {
      console.log('save');
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["setSpeechConfig"])(config));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(SpeechConfigControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2F2ZSIsInN0YXRlIiwic3BlZWNoQ29uZmlnIiwiY2xvc2UiLCJhcHBsaWNhdGlvbiIsIm9uTW9kZUNoYW5nZSIsImJpbmQiLCJvblJlZ2lvbkNoYW5nZSIsIm9uU3Vic2NyaXB0aW9uQ2hhbmdlIiwibW9kZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhenVyZVN1YnNjcmlwdGlvbktleSIsIlNwZWVjaE1vZGUiLCJURVhUIiwiYXp1cmVSZWdpb24iLCJjb25zb2xlIiwibG9nIiwic3BlZWNoU3VwcG9ydCIsImF6dXJlRW5hYmxlZCIsIndlYlNwZWVjaEVuYWJsZWQiLCJzaG93IiwiV0VCX1NQRUVDSCIsIkFaVVJFIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbmZpZyIsInNldFNwZWVjaENvbmZpZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFnQkM7O0lBTUtBLG1COzs7OztBQUNKLCtCQUFZQyxLQUFaLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3hCLDhCQUFNQSxLQUFOOztBQUR3QiwrTUEwQ25CLFVBQUNDLENBQUQsRUFBeUM7QUFDOUNBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFFQSxZQUFLRixLQUFMLENBQVdHLElBQVgsQ0FBZ0IsTUFBS0MsS0FBTCxDQUFXQyxZQUEzQjs7QUFDQSxZQUFLTCxLQUFMLENBQVdNLEtBQVg7QUFDRCxLQS9DeUI7O0FBRXhCLFVBQUtGLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUFFTCxLQUFL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LENBREY7QUFxRUQ7Ozs7RUFuSStCc0IsNENBQUssQ0FBQ0MsUzs7QUFzSXhDLFNBQVNDLGVBQVQsQ0FBeUJ2QixXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUVBLGVBQVcsRUFBWEE7QUFBRixHQUFQO0FBQ0Q7O0FBRUQsU0FBU3dCLGtCQUFULENBQTRCQyxRQUE1QixFQUEyRDtBQUN6RCxTQUFPO0FBQ0w3QixRQUFJLEVBQUUsY0FBQzhCLE1BQUQsRUFBbUM7QUFDdkNiLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQVcsY0FBUSxDQUFDRSxpRUFBZSxDQUFDRCxNQUFELENBQWhCLENBQVI7QUFDRDtBQUpJLEdBQVA7QUFNRDs7QUFFY0UsMkhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNoQyxtQkFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNWE3YjdkOTllZGUxODcwOWRjYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIEFueUFjdGlvbixcclxuICBzZXRTcGVlY2hDb25maWcsXHJcbiAgU3BlZWNoQ29uZmlnLFxyXG4gIFNwZWVjaE1vZGVcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZTtcclxuICBzYXZlOiAoY29uZmlnOiBQYXJ0aWFsPFNwZWVjaENvbmZpZz4pID0+IHZvaWQ7XHJcblxyXG4gIGNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIHNob3c6IGJvb2xlYW47XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIHNwZWVjaENvbmZpZzogU3BlZWNoQ29uZmlnO1xyXG59XHJcblxyXG5jbGFzcyBTcGVlY2hDb25maWdDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3BlZWNoQ29uZmlnOiBwcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWdcclxuICAgIH1cclxuICAgIHRoaXMub25Nb2RlQ2hhbmdlID0gdGhpcy5vbk1vZGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25SZWdpb25DaGFuZ2UgPSB0aGlzLm9uUmVnaW9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uU3Vic2NyaXB0aW9uQ2hhbmdlID0gdGhpcy5vblN1YnNjcmlwdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBtb2RlOiBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uU3Vic2NyaXB0aW9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBhenVyZVN1YnNjcmlwdGlvbktleSA9IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGU7XHJcbiAgICBjb25zdCBtb2RlID0gYXp1cmVTdWJzY3JpcHRpb25LZXkgPyB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5tb2RlIDogU3BlZWNoTW9kZS5URVhUO1xyXG4gICAgY29uc3Qgc3BlZWNoQ29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgICAgYXp1cmVTdWJzY3JpcHRpb25LZXksXHJcbiAgICAgIG1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgb25SZWdpb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IGF6dXJlUmVnaW9uID0gZS50YXJnZXQudmFsdWUgYXMgU3BlZWNoTW9kZTtcclxuICAgIGNvbnN0IG1vZGUgPSBhenVyZVJlZ2lvbiA/IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLm1vZGUgOiBTcGVlY2hNb2RlLlRFWFQ7XHJcbiAgICBjb25zb2xlLmxvZyhgcmVnaW9uPVwiJHthenVyZVJlZ2lvbn1cImApO1xyXG4gICAgY29uc29sZS5sb2coYG1vZGU9JHttb2RlfWApO1xyXG4gICAgY29uc3Qgc3BlZWNoQ29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgICAgYXp1cmVSZWdpb24sXHJcbiAgICAgIG1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMucHJvcHMuc2F2ZSh0aGlzLnN0YXRlLnNwZWVjaENvbmZpZyk7XHJcbiAgICB0aGlzLnByb3BzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVuZGVyJyk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICBhenVyZVJlZ2lvbixcclxuICAgICAgc3BlZWNoU3VwcG9ydFxyXG4gICAgfSA9IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnO1xyXG5cclxuICAgIGNvbnN0IGF6dXJlRW5hYmxlZCA9ICEhKGF6dXJlUmVnaW9uICYmIGF6dXJlU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgIGNvbnN0IHdlYlNwZWVjaEVuYWJsZWQgPSBzcGVlY2hTdXBwb3J0O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHNob3c9e3RoaXMucHJvcHMuc2hvd31cclxuICAgICAgICBvbkhpZGU9e3RoaXMucHJvcHMuY2xvc2V9XHJcbiAgICAgICAgYmFja2Ryb3A9XCJzdGF0aWNcIlxyXG4gICAgICAgIGtleWJvYXJkPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnNhdmV9PlxyXG4gICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlNwZWVjaCBTZXR0aW5nczwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtV2ViU3BlZWNoMVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLlRFWFR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2FibGUgc3BlZWNoXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17U3BlZWNoTW9kZS5URVhUfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Nb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21vZGUgPT09IFNwZWVjaE1vZGUuV0VCX1NQRUVDSH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshd2ViU3BlZWNoRW5hYmxlZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlIFdlYiBTcGVlY2ggQVBJIChDaHJvbWUgYnJvd3NlciBvbmx5KVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuV0VCX1NQRUVDSH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLkFaVVJFfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFhenVyZUVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZSBBenVyZSBTcGVlY2ggQVBJXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17U3BlZWNoTW9kZS5BWlVSRX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtU3Vic2NyaXB0aW9uS2V5XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXp1cmUgU3Vic2NyaXB0aW9uIEtleTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLmF6dXJlU3Vic2NyaXB0aW9uS2V5fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBzdWJzY3JpcHRpb24ga2V5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN1YnNjcmlwdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtUmVnaW9uXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXp1cmUgUmVnaW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVSZWdpb259XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHJlZ2lvbiAoZS5nLiB3ZXN0dXMyKVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJlZ2lvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IGFwcGxpY2F0aW9uIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xyXG4gIHJldHVybiB7XHJcbiAgICBzYXZlOiAoY29uZmlnOiBQYXJ0aWFsPFNwZWVjaENvbmZpZz4pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3NhdmUnKTtcclxuICAgICAgZGlzcGF0Y2goc2V0U3BlZWNoQ29uZmlnKGNvbmZpZykpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTcGVlY2hDb25maWdDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==