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
          lineNumber: 110,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
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
          lineNumber: 122,
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
          lineNumber: 132,
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
          lineNumber: 144,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
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
      }, "Azure Subscription Key"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
        defaultValue: this.state.speechConfig.azureSubscriptionKey,
        placeholder: "enter subscription key" // ref={this.subscription}
        ,
        type: "password",
        onChange: this.onSubscriptionChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
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
          lineNumber: 169,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2F2ZSIsInN0YXRlIiwic3BlZWNoQ29uZmlnIiwiY2xvc2UiLCJhcHBsaWNhdGlvbiIsIm9uTW9kZUNoYW5nZSIsImJpbmQiLCJvblJlZ2lvbkNoYW5nZSIsIm9uU3Vic2NyaXB0aW9uQ2hhbmdlIiwibW9kZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhenVyZVN1YnNjcmlwdGlvbktleSIsIlNwZWVjaE1vZGUiLCJURVhUIiwiYXp1cmVSZWdpb24iLCJjb25zb2xlIiwibG9nIiwic3BlZWNoU3VwcG9ydCIsImF6dXJlRW5hYmxlZCIsIndlYlNwZWVjaEVuYWJsZWQiLCJzaG93IiwiV0VCX1NQRUVDSCIsIkFaVVJFIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbmZpZyIsInNldFNwZWVjaENvbmZpZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFnQkM7O0lBTUtBLG1COzs7OztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBRUEsK0JBQVlDLEtBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEJBQU1BLEtBQU47O0FBRHdCLCtNQTBDbkIsVUFBQ0MsQ0FBRCxFQUF5QztBQUM5Q0EsT0FBQyxDQUFDQyxjQUFGLEdBRDhDLENBRzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQUtGLEtBQUwsQ0FBV0csSUFBWCxDQUFnQixNQUFLQyxLQUFMLENBQVdDLFlBQTNCOztBQUNBLFlB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUUsTUFBQyw4REFBRDtBQUFRLGVBQU8sRUFBQyxTQUFoQjtBQUEwQixZQUFJLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixDQTlERixDQU5GLENBREY7QUFnRkQ7Ozs7RUEvSitCc0IsNENBQUssQ0FBQ0MsUzs7QUFrS3hDLFNBQVNDLGVBQVQsQ0FBeUJ2QixXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUVBLGVBQVcsRUFBWEE7QUFBRixHQUFQO0FBQ0Q7O0FBRUQsU0FBU3dCLGtCQUFULENBQTRCQyxRQUE1QixFQUEyRDtBQUN6RCxTQUFPO0FBQ0w3QixRQUFJLEVBQUUsY0FBQzhCLE1BQUQsRUFBbUM7QUFDdkNiLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQVcsY0FBUSxDQUFDRSxpRUFBZSxDQUFDRCxNQUFELENBQWhCLENBQVI7QUFDRDtBQUpJLEdBQVA7QUFNRDs7QUFFY0UsMkhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNoQyxtQkFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMWI1NzA2OGNiZDY0N2FmNjk1YTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIEFueUFjdGlvbixcclxuICBzZXRTcGVlY2hDb25maWcsXHJcbiAgU3BlZWNoQ29uZmlnLFxyXG4gIFNwZWVjaE1vZGVcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZTtcclxuICBzYXZlOiAoY29uZmlnOiBQYXJ0aWFsPFNwZWVjaENvbmZpZz4pID0+IHZvaWQ7XHJcblxyXG4gIGNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIHNob3c6IGJvb2xlYW47XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIHNwZWVjaENvbmZpZzogU3BlZWNoQ29uZmlnO1xyXG59XHJcblxyXG5jbGFzcyBTcGVlY2hDb25maWdDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIC8vIHVzZUF6dXJlID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcbiAgLy8gdXNlV2ViU3BlZWNoID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcbiAgLy8gc3Vic2NyaXB0aW9uID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcbiAgLy8gcmVnaW9uID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3BlZWNoQ29uZmlnOiBwcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWdcclxuICAgIH1cclxuICAgIHRoaXMub25Nb2RlQ2hhbmdlID0gdGhpcy5vbk1vZGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25SZWdpb25DaGFuZ2UgPSB0aGlzLm9uUmVnaW9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uU3Vic2NyaXB0aW9uQ2hhbmdlID0gdGhpcy5vblN1YnNjcmlwdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBtb2RlOiBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uU3Vic2NyaXB0aW9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBhenVyZVN1YnNjcmlwdGlvbktleSA9IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGU7XHJcbiAgICBjb25zdCBtb2RlID0gYXp1cmVTdWJzY3JpcHRpb25LZXkgPyB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5tb2RlIDogU3BlZWNoTW9kZS5URVhUO1xyXG4gICAgY29uc3Qgc3BlZWNoQ29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgICAgYXp1cmVTdWJzY3JpcHRpb25LZXksXHJcbiAgICAgIG1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgb25SZWdpb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IGF6dXJlUmVnaW9uID0gZS50YXJnZXQudmFsdWUgYXMgU3BlZWNoTW9kZTtcclxuICAgIGNvbnN0IG1vZGUgPSBhenVyZVJlZ2lvbiA/IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLm1vZGUgOiBTcGVlY2hNb2RlLlRFWFQ7XHJcbiAgICBjb25zb2xlLmxvZyhgcmVnaW9uPVwiJHthenVyZVJlZ2lvbn1cImApO1xyXG4gICAgY29uc29sZS5sb2coYG1vZGU9JHttb2RlfWApO1xyXG4gICAgY29uc3Qgc3BlZWNoQ29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgICAgYXp1cmVSZWdpb24sXHJcbiAgICAgIG1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIGNvbnN0IG1vZGUgPSB0aGlzLnVzZUF6dXJlLmN1cnJlbnQuY2hlY2tlZCA/XHJcbiAgICAvLyAgIFNwZWVjaE1vZGUuQVpVUkUgOiBcclxuICAgIC8vICAgdGhpcy51c2VXZWJTcGVlY2guY3VycmVudC5jaGVja2VkID9cclxuICAgIC8vICAgU3BlZWNoTW9kZS5XRUJfU1BFRUNIIDpcclxuICAgIC8vICAgU3BlZWNoTW9kZS5URVhUO1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+ID0ge1xyXG4gICAgLy8gICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgIC8vICAgYXp1cmVTdWJzY3JpcHRpb25LZXk6IHRoaXMuc3Vic2NyaXB0aW9uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIGF6dXJlUmVnaW9uOiB0aGlzLnJlZ2lvbi5jdXJyZW50LnZhbHVlXHJcbiAgICAvLyB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5zYXZlKHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnKTtcclxuICAgIHRoaXMucHJvcHMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdyZW5kZXInKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbW9kZSxcclxuICAgICAgYXp1cmVTdWJzY3JpcHRpb25LZXksXHJcbiAgICAgIGF6dXJlUmVnaW9uLFxyXG4gICAgICBzcGVlY2hTdXBwb3J0XHJcbiAgICB9ID0gdGhpcy5zdGF0ZS5zcGVlY2hDb25maWc7XHJcblxyXG4gICAgY29uc3QgYXp1cmVFbmFibGVkID0gISEoYXp1cmVSZWdpb24gJiYgYXp1cmVTdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgY29uc3Qgd2ViU3BlZWNoRW5hYmxlZCA9IHNwZWVjaFN1cHBvcnQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zaG93fVxyXG4gICAgICAgIG9uSGlkZT17dGhpcy5wcm9wcy5jbG9zZX1cclxuICAgICAgICBiYWNrZHJvcD1cInN0YXRpY1wiXHJcbiAgICAgICAga2V5Ym9hcmQ9e2ZhbHNlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuc2F2ZX0+XHJcbiAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwuVGl0bGU+U3BlZWNoIFNldHRpbmdzPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1XZWJTcGVlY2gxXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLlRFWFR9XHJcbiAgICAgICAgICAgICAgICAvLyBuYW1lPVwic3BlZWNoUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlIHNwZWVjaFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuVEVYVH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtV2ViU3BlZWNoMlwiPiAqL31cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgLy8gbmFtZT1cInNwZWVjaFJhZGlvXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0h9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXdlYlNwZWVjaEVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZSBXZWIgU3BlZWNoIEFQSSAoQ2hyb21lIGJyb3dzZXIgb25seSlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLldFQl9TUEVFQ0h9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvLyByZWY9e3RoaXMudXNlV2ViU3BlZWNofVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1BenVyZVNwZWVjaDNcIj4gKi99XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIC8vIG5hbWU9XCJzcGVlY2hSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWF6dXJlRW5hYmxlZH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLkFaVVJFfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgQXp1cmUgU3BlZWNoIEFQSVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuQVpVUkV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvLyByZWY9e3RoaXMudXNlQXp1cmV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVN1YnNjcmlwdGlvbktleVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF6dXJlIFN1YnNjcmlwdGlvbiBLZXk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5henVyZVN1YnNjcmlwdGlvbktleX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgc3Vic2NyaXB0aW9uIGtleVwiXHJcbiAgICAgICAgICAgICAgICAvLyByZWY9e3RoaXMuc3Vic2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU3Vic2NyaXB0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1SZWdpb25cIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BenVyZSBSZWdpb248L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5henVyZVJlZ2lvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgcmVnaW9uIChlLmcuIHdlc3R1czIpXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUmVnaW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLy8gcmVmPXt0aGlzLnJlZ2lvbn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IGFwcGxpY2F0aW9uIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xyXG4gIHJldHVybiB7XHJcbiAgICBzYXZlOiAoY29uZmlnOiBQYXJ0aWFsPFNwZWVjaENvbmZpZz4pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3NhdmUnKTtcclxuICAgICAgZGlzcGF0Y2goc2V0U3BlZWNoQ29uZmlnKGNvbmZpZykpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTcGVlY2hDb25maWdDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==