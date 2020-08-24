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
        placeholder: "enter region (e.g. westus2)",
        onChange: this.onRegionChange // ref={this.region}
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
          lineNumber: 167,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2F2ZSIsInN0YXRlIiwic3BlZWNoQ29uZmlnIiwiY2xvc2UiLCJhcHBsaWNhdGlvbiIsIm9uTW9kZUNoYW5nZSIsImJpbmQiLCJtb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImF6dXJlU3Vic2NyaXB0aW9uS2V5IiwiYXp1cmVSZWdpb24iLCJzcGVlY2hTdXBwb3J0IiwiYXp1cmVFbmFibGVkIiwid2ViU3BlZWNoRW5hYmxlZCIsInNob3ciLCJTcGVlY2hNb2RlIiwiVEVYVCIsIldFQl9TUEVFQ0giLCJBWlVSRSIsIm9uU3Vic2NyaXB0aW9uQ2hhbmdlIiwib25SZWdpb25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29uZmlnIiwiY29uc29sZSIsImxvZyIsInNldFNwZWVjaENvbmZpZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFnQkM7O0lBTUtBLG1COzs7OztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBRUEsK0JBQVlDLEtBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEJBQU1BLEtBQU47O0FBRHdCLCtNQWdDbkIsVUFBQ0MsQ0FBRCxFQUF5QztBQUM5Q0EsT0FBQyxDQUFDQyxjQUFGLEdBRDhDLENBRzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQUtGLEtBQUwsQ0FBV0csSUFBWCxDQUFnQixNQUFLQyxLQUFMLENBQVdDLFlBQTNCOztBQUNBLFlB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OiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2UyMjNmZDA5M2I3ZmE3ODA3ODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIEFueUFjdGlvbixcclxuICBzZXRTcGVlY2hDb25maWcsXHJcbiAgU3BlZWNoQ29uZmlnLFxyXG4gIFNwZWVjaE1vZGVcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZTtcclxuICBzYXZlOiAoY29uZmlnOiBQYXJ0aWFsPFNwZWVjaENvbmZpZz4pID0+IHZvaWQ7XHJcblxyXG4gIGNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIHNob3c6IGJvb2xlYW47XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIHNwZWVjaENvbmZpZzogU3BlZWNoQ29uZmlnO1xyXG59XHJcblxyXG5jbGFzcyBTcGVlY2hDb25maWdDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIC8vIHVzZUF6dXJlID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcbiAgLy8gdXNlV2ViU3BlZWNoID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcbiAgLy8gc3Vic2NyaXB0aW9uID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcbiAgLy8gcmVnaW9uID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3BlZWNoQ29uZmlnOiBwcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWdcclxuICAgIH1cclxuICAgIHRoaXMub25Nb2RlQ2hhbmdlID0gdGhpcy5vbk1vZGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uTW9kZUNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3Qgc3BlZWNoQ29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgICAgbW9kZTogZS50YXJnZXQudmFsdWUgYXMgU3BlZWNoTW9kZVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3BlZWNoQ29uZmlnfSk7XHJcbiAgfVxyXG5cclxuICBvblN1YnNjcmlwdGlvbkNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3Qgc3BlZWNoQ29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgICAgYXp1cmVTdWJzY3JpcHRpb25LZXk6IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgb25SZWdpb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIGF6dXJlUmVnaW9uOiBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIHNhdmUgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBjb25zdCBtb2RlID0gdGhpcy51c2VBenVyZS5jdXJyZW50LmNoZWNrZWQgP1xyXG4gICAgLy8gICBTcGVlY2hNb2RlLkFaVVJFIDogXHJcbiAgICAvLyAgIHRoaXMudXNlV2ViU3BlZWNoLmN1cnJlbnQuY2hlY2tlZCA/XHJcbiAgICAvLyAgIFNwZWVjaE1vZGUuV0VCX1NQRUVDSCA6XHJcbiAgICAvLyAgIFNwZWVjaE1vZGUuVEVYVDtcclxuXHJcbiAgICAvLyBjb25zdCBjb25maWc6IFBhcnRpYWw8U3BlZWNoQ29uZmlnPiA9IHtcclxuICAgIC8vICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAvLyAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5OiB0aGlzLnN1YnNjcmlwdGlvbi5jdXJyZW50LnZhbHVlLFxyXG4gICAgLy8gICBhenVyZVJlZ2lvbjogdGhpcy5yZWdpb24uY3VycmVudC52YWx1ZVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHRoaXMucHJvcHMuc2F2ZSh0aGlzLnN0YXRlLnNwZWVjaENvbmZpZyk7XHJcbiAgICB0aGlzLnByb3BzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICBhenVyZVJlZ2lvbixcclxuICAgICAgc3BlZWNoU3VwcG9ydFxyXG4gICAgfSA9IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnO1xyXG5cclxuICAgIGNvbnN0IGF6dXJlRW5hYmxlZCA9ICEhKGF6dXJlUmVnaW9uICYmIGF6dXJlU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgIGNvbnN0IHdlYlNwZWVjaEVuYWJsZWQgPSBzcGVlY2hTdXBwb3J0O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHNob3c9e3RoaXMucHJvcHMuc2hvd31cclxuICAgICAgICBvbkhpZGU9e3RoaXMucHJvcHMuY2xvc2V9XHJcbiAgICAgICAgYmFja2Ryb3A9XCJzdGF0aWNcIlxyXG4gICAgICAgIGtleWJvYXJkPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnNhdmV9PlxyXG4gICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlNwZWVjaCBTZXR0aW5nczwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtV2ViU3BlZWNoMVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5URVhUfVxyXG4gICAgICAgICAgICAgICAgLy8gbmFtZT1cInNwZWVjaFJhZGlvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZSBzcGVlY2hcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLlRFWFR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVdlYlNwZWVjaDJcIj4gKi99XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIC8vIG5hbWU9XCJzcGVlY2hSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF3ZWJTcGVlY2hFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgV2ViIFNwZWVjaCBBUEkgKENocm9tZSBicm93c2VyIG9ubHkpXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17U3BlZWNoTW9kZS5XRUJfU1BFRUNIfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Nb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLy8gcmVmPXt0aGlzLnVzZVdlYlNwZWVjaH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQXp1cmVTcGVlY2gzXCI+ICovfVxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAvLyBuYW1lPVwic3BlZWNoUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFhenVyZUVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5BWlVSRX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlIEF6dXJlIFNwZWVjaCBBUElcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLkFaVVJFfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Nb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLy8gcmVmPXt0aGlzLnVzZUF6dXJlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1TdWJzY3JpcHRpb25LZXlcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BenVyZSBTdWJzY3JpcHRpb24gS2V5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVTdWJzY3JpcHRpb25LZXl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHN1YnNjcmlwdGlvbiBrZXlcIlxyXG4gICAgICAgICAgICAgICAgLy8gcmVmPXt0aGlzLnN1YnNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN1YnNjcmlwdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtUmVnaW9uXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXp1cmUgUmVnaW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVSZWdpb259XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHJlZ2lvbiAoZS5nLiB3ZXN0dXMyKVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJlZ2lvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8vIHJlZj17dGhpcy5yZWdpb259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2F2ZTogKGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzYXZlJyk7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyhjb25maWcpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3BlZWNoQ29uZmlnQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=