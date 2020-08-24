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

  // useAzure = React.createRef<HTMLInputElement>();
  // useWebSpeech = React.createRef<HTMLInputElement>();
  // subscription = React.createRef<HTMLInputElement>();
  // region = React.createRef<HTMLInputElement>();
  function SpeechConfigControl(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SpeechConfigControl);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "save", function (e) {
      e.preventDefault(); // const mode = this.useAzure.current.checked ?
      //   SpeechMode.AZURE : 
      //   this.useWebSpeech.current.checked ?
      //   SpeechMode.WEB_SPEECH :
      //   SpeechMode.TEXT;
      // const config: Partial<SpeechConfig> = {
      //   ...this.state.speechConfig,
      //   azureSubscriptionKey: this.subscription.current.value,
      //   azureRegion: this.region.current.value
      // }

      _this.props.save(_this.state.speechConfig);

      _this.props.close();
    });

    _this.state = {
      speechConfig: props.application.speechConfig
    };
    _this.onModeChange = _this.onModeChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
      var speechConfig = _objectSpread(_objectSpread({}, this.state.speechConfig), {}, {
        azureSubscriptionKey: e.target.value
      });

      this.setState({
        speechConfig: speechConfig
      });
    }
  }, {
    key: "onRegionChange",
    value: function onRegionChange(e) {
      var speechConfig = _objectSpread(_objectSpread({}, this.state.speechConfig), {}, {
        azureRegion: e.target.value
      });

      this.setState({
        speechConfig: speechConfig
      });
    }
  }, {
    key: "render",
    value: function render() {
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
          lineNumber: 99,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        defaultChecked: mode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT // name="speechRadio"
        ,
        label: "Disable speech",
        type: "radio",
        value: _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT,
        onChange: this.onModeChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }
      }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        // name="speechRadio"
        defaultChecked: mode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].WEB_SPEECH,
        disabled: !webSpeechEnabled,
        label: "Use Web Speech API (Chrome browser only)",
        type: "radio",
        value: _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].WEB_SPEECH,
        onChange: this.onModeChange // ref={this.useWebSpeech}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 15
        }
      }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        // name="speechRadio"
        disabled: !azureEnabled,
        defaultChecked: mode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].AZURE,
        label: "Use Azure Speech API",
        type: "radio",
        value: _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].AZURE,
        onChange: this.onModeChange // ref={this.useAzure}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 15
        }
      }, "Azure Subscription Key"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
        defaultValue: this.state.speechConfig.azureSubscriptionKey,
        placeholder: "enter subscription key" // ref={this.subscription}
        ,
        type: "password",
        onChange: this.onSubscriptionChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }, "Azure Region"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
        defaultValue: this.state.speechConfig.azureRegion,
        type: "text",
        placeholder: "enter region (e.g. westus2)" // ref={this.region}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2F2ZSIsInN0YXRlIiwic3BlZWNoQ29uZmlnIiwiY2xvc2UiLCJhcHBsaWNhdGlvbiIsIm9uTW9kZUNoYW5nZSIsImJpbmQiLCJtb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImF6dXJlU3Vic2NyaXB0aW9uS2V5IiwiYXp1cmVSZWdpb24iLCJzcGVlY2hTdXBwb3J0IiwiYXp1cmVFbmFibGVkIiwid2ViU3BlZWNoRW5hYmxlZCIsInNob3ciLCJTcGVlY2hNb2RlIiwiVEVYVCIsIldFQl9TUEVFQ0giLCJBWlVSRSIsIm9uU3Vic2NyaXB0aW9uQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTcGVlY2hDb25maWciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBZ0JDOztJQU1LQSxtQjs7Ozs7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUVBLCtCQUFZQyxLQUFaLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3hCLDhCQUFNQSxLQUFOOztBQUR3QiwrTUFnQ25CLFVBQUNDLENBQUQsRUFBeUM7QUFDOUNBLE9BQUMsQ0FBQ0MsY0FBRixHQUQ4QyxDQUc5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFLRixLQUFMLENBQVdHLElBQVgsQ0FBZ0IsTUFBS0MsS0FBTCxDQUFXQyxZQUEzQjs7QUFDQSxZQUFLTCxLQUFMLENBQVdNLEtB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bmRleC5qcy5jNDhiNGJkYmYyYmM0ZTI5NzNhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgQW55QWN0aW9uLFxyXG4gIHNldFNwZWVjaENvbmZpZyxcclxuICBTcGVlY2hDb25maWcsXHJcbiAgU3BlZWNoTW9kZVxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG4gIHNhdmU6IChjb25maWc6IFBhcnRpYWw8U3BlZWNoQ29uZmlnPikgPT4gdm9pZDtcclxuXHJcbiAgY2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgc2hvdzogYm9vbGVhbjtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgc3BlZWNoQ29uZmlnOiBTcGVlY2hDb25maWc7XHJcbn1cclxuXHJcbmNsYXNzIFNwZWVjaENvbmZpZ0NvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgLy8gdXNlQXp1cmUgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuICAvLyB1c2VXZWJTcGVlY2ggPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuICAvLyBzdWJzY3JpcHRpb24gPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuICAvLyByZWdpb24gPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcGVlY2hDb25maWc6IHByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZ1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbk1vZGVDaGFuZ2UgPSB0aGlzLm9uTW9kZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBtb2RlOiBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uU3Vic2NyaXB0aW9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBhenVyZVN1YnNjcmlwdGlvbktleTogZS50YXJnZXQudmFsdWUgYXMgU3BlZWNoTW9kZVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3BlZWNoQ29uZmlnfSk7XHJcbiAgfVxyXG5cclxuICBvblJlZ2lvbkNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3Qgc3BlZWNoQ29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgICAgYXp1cmVSZWdpb246IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIGNvbnN0IG1vZGUgPSB0aGlzLnVzZUF6dXJlLmN1cnJlbnQuY2hlY2tlZCA/XHJcbiAgICAvLyAgIFNwZWVjaE1vZGUuQVpVUkUgOiBcclxuICAgIC8vICAgdGhpcy51c2VXZWJTcGVlY2guY3VycmVudC5jaGVja2VkID9cclxuICAgIC8vICAgU3BlZWNoTW9kZS5XRUJfU1BFRUNIIDpcclxuICAgIC8vICAgU3BlZWNoTW9kZS5URVhUO1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+ID0ge1xyXG4gICAgLy8gICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgIC8vICAgYXp1cmVTdWJzY3JpcHRpb25LZXk6IHRoaXMuc3Vic2NyaXB0aW9uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIGF6dXJlUmVnaW9uOiB0aGlzLnJlZ2lvbi5jdXJyZW50LnZhbHVlXHJcbiAgICAvLyB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5zYXZlKHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnKTtcclxuICAgIHRoaXMucHJvcHMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbW9kZSxcclxuICAgICAgYXp1cmVTdWJzY3JpcHRpb25LZXksXHJcbiAgICAgIGF6dXJlUmVnaW9uLFxyXG4gICAgICBzcGVlY2hTdXBwb3J0XHJcbiAgICB9ID0gdGhpcy5zdGF0ZS5zcGVlY2hDb25maWc7XHJcblxyXG4gICAgY29uc3QgYXp1cmVFbmFibGVkID0gISEoYXp1cmVSZWdpb24gJiYgYXp1cmVTdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgY29uc3Qgd2ViU3BlZWNoRW5hYmxlZCA9IHNwZWVjaFN1cHBvcnQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zaG93fVxyXG4gICAgICAgIG9uSGlkZT17dGhpcy5wcm9wcy5jbG9zZX1cclxuICAgICAgICBiYWNrZHJvcD1cInN0YXRpY1wiXHJcbiAgICAgICAga2V5Ym9hcmQ9e2ZhbHNlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuc2F2ZX0+XHJcbiAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwuVGl0bGU+U3BlZWNoIFNldHRpbmdzPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1XZWJTcGVlY2gxXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLlRFWFR9XHJcbiAgICAgICAgICAgICAgICAvLyBuYW1lPVwic3BlZWNoUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlIHNwZWVjaFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuVEVYVH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtV2ViU3BlZWNoMlwiPiAqL31cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgLy8gbmFtZT1cInNwZWVjaFJhZGlvXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0h9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXdlYlNwZWVjaEVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZSBXZWIgU3BlZWNoIEFQSSAoQ2hyb21lIGJyb3dzZXIgb25seSlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLldFQl9TUEVFQ0h9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvLyByZWY9e3RoaXMudXNlV2ViU3BlZWNofVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1BenVyZVNwZWVjaDNcIj4gKi99XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIC8vIG5hbWU9XCJzcGVlY2hSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWF6dXJlRW5hYmxlZH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLkFaVVJFfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgQXp1cmUgU3BlZWNoIEFQSVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuQVpVUkV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvLyByZWY9e3RoaXMudXNlQXp1cmV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVN1YnNjcmlwdGlvbktleVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF6dXJlIFN1YnNjcmlwdGlvbiBLZXk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5henVyZVN1YnNjcmlwdGlvbktleX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgc3Vic2NyaXB0aW9uIGtleVwiXHJcbiAgICAgICAgICAgICAgICAvLyByZWY9e3RoaXMuc3Vic2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU3Vic2NyaXB0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1SZWdpb25cIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BenVyZSBSZWdpb248L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5henVyZVJlZ2lvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgcmVnaW9uIChlLmcuIHdlc3R1czIpXCJcclxuICAgICAgICAgICAgICAgIC8vIHJlZj17dGhpcy5yZWdpb259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2F2ZTogKGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzYXZlJyk7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyhjb25maWcpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3BlZWNoQ29uZmlnQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=