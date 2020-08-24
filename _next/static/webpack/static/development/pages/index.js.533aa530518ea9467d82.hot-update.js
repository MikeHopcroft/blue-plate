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
        azureSubscriptionKey: azureSubscriptionKey
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

      var speechConfig = _objectSpread(_objectSpread({}, this.state.speechConfig), {}, {
        azureRegion: azureRegion
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
          lineNumber: 105,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
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
          lineNumber: 117,
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
          lineNumber: 127,
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
          lineNumber: 139,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
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
          lineNumber: 153,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
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
          lineNumber: 164,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2F2ZSIsInN0YXRlIiwic3BlZWNoQ29uZmlnIiwiY2xvc2UiLCJhcHBsaWNhdGlvbiIsIm9uTW9kZUNoYW5nZSIsImJpbmQiLCJvblJlZ2lvbkNoYW5nZSIsIm9uU3Vic2NyaXB0aW9uQ2hhbmdlIiwibW9kZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhenVyZVN1YnNjcmlwdGlvbktleSIsIlNwZWVjaE1vZGUiLCJURVhUIiwiYXp1cmVSZWdpb24iLCJzcGVlY2hTdXBwb3J0IiwiYXp1cmVFbmFibGVkIiwid2ViU3BlZWNoRW5hYmxlZCIsInNob3ciLCJXRUJfU1BFRUNIIiwiQVpVUkUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29uZmlnIiwiY29uc29sZSIsImxvZyIsInNldFNwZWVjaENvbmZpZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFnQkM7O0lBTUtBLG1COzs7OztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBRUEsK0JBQVlDLEtBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEJBQU1BLEtBQU47O0FBRHdCLCtNQXNDbkIsVUFBQ0MsQ0FBRCxFQUF5QztBQUM5Q0EsT0FBQyxDQUFDQyxjQUFGLEdBRDhDLENBRzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQUtGLEtBQUwsQ0FBV0csSUFBWCxDQUFnQixNQUFLQyxLQUFMLENBQVdDLFlBQTNCOztBQUNBLFlB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OztFQTFKK0JvQiw0Q0FBSyxDQUFDQyxTOztBQTZKeEMsU0FBU0MsZUFBVCxDQUF5QnJCLFdBQXpCLEVBQXdEO0FBQ3RELFNBQU87QUFBRUEsZUFBVyxFQUFYQTtBQUFGLEdBQVA7QUFDRDs7QUFFRCxTQUFTc0Isa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQTJEO0FBQ3pELFNBQU87QUFDTDNCLFFBQUksRUFBRSxjQUFDNEIsTUFBRCxFQUFtQztBQUN2Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBSCxjQUFRLENBQUNJLGlFQUFlLENBQUNILE1BQUQsQ0FBaEIsQ0FBUjtBQUNEO0FBSkksR0FBUDtBQU1EOztBQUVjSSwySEFBTyxDQUFDUCxlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2QzlCLG1CQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41MzNhYTUzMDUxOGVhOTQ2N2Q4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgQW55QWN0aW9uLFxyXG4gIHNldFNwZWVjaENvbmZpZyxcclxuICBTcGVlY2hDb25maWcsXHJcbiAgU3BlZWNoTW9kZVxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG4gIHNhdmU6IChjb25maWc6IFBhcnRpYWw8U3BlZWNoQ29uZmlnPikgPT4gdm9pZDtcclxuXHJcbiAgY2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgc2hvdzogYm9vbGVhbjtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgc3BlZWNoQ29uZmlnOiBTcGVlY2hDb25maWc7XHJcbn1cclxuXHJcbmNsYXNzIFNwZWVjaENvbmZpZ0NvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgLy8gdXNlQXp1cmUgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuICAvLyB1c2VXZWJTcGVlY2ggPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuICAvLyBzdWJzY3JpcHRpb24gPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuICAvLyByZWdpb24gPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcGVlY2hDb25maWc6IHByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZ1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbk1vZGVDaGFuZ2UgPSB0aGlzLm9uTW9kZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblJlZ2lvbkNoYW5nZSA9IHRoaXMub25SZWdpb25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TdWJzY3JpcHRpb25DaGFuZ2UgPSB0aGlzLm9uU3Vic2NyaXB0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVDaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIG1vZGU6IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgb25TdWJzY3JpcHRpb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IGF6dXJlU3Vic2NyaXB0aW9uS2V5ID0gZS50YXJnZXQudmFsdWUgYXMgU3BlZWNoTW9kZTtcclxuICAgIGNvbnN0IG1vZGUgPSBhenVyZVN1YnNjcmlwdGlvbktleSA/IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLm1vZGUgOiBTcGVlY2hNb2RlLlRFWFQ7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBhenVyZVN1YnNjcmlwdGlvbktleVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3BlZWNoQ29uZmlnfSk7XHJcbiAgfVxyXG5cclxuICBvblJlZ2lvbkNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3QgYXp1cmVSZWdpb24gPSBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlO1xyXG4gICAgY29uc3QgbW9kZSA9IGF6dXJlUmVnaW9uID8gdGhpcy5zdGF0ZS5zcGVlY2hDb25maWcubW9kZSA6IFNwZWVjaE1vZGUuVEVYVDtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIGF6dXJlUmVnaW9uXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIHNhdmUgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBjb25zdCBtb2RlID0gdGhpcy51c2VBenVyZS5jdXJyZW50LmNoZWNrZWQgP1xyXG4gICAgLy8gICBTcGVlY2hNb2RlLkFaVVJFIDogXHJcbiAgICAvLyAgIHRoaXMudXNlV2ViU3BlZWNoLmN1cnJlbnQuY2hlY2tlZCA/XHJcbiAgICAvLyAgIFNwZWVjaE1vZGUuV0VCX1NQRUVDSCA6XHJcbiAgICAvLyAgIFNwZWVjaE1vZGUuVEVYVDtcclxuXHJcbiAgICAvLyBjb25zdCBjb25maWc6IFBhcnRpYWw8U3BlZWNoQ29uZmlnPiA9IHtcclxuICAgIC8vICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAvLyAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5OiB0aGlzLnN1YnNjcmlwdGlvbi5jdXJyZW50LnZhbHVlLFxyXG4gICAgLy8gICBhenVyZVJlZ2lvbjogdGhpcy5yZWdpb24uY3VycmVudC52YWx1ZVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHRoaXMucHJvcHMuc2F2ZSh0aGlzLnN0YXRlLnNwZWVjaENvbmZpZyk7XHJcbiAgICB0aGlzLnByb3BzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICBhenVyZVJlZ2lvbixcclxuICAgICAgc3BlZWNoU3VwcG9ydFxyXG4gICAgfSA9IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnO1xyXG5cclxuICAgIGNvbnN0IGF6dXJlRW5hYmxlZCA9ICEhKGF6dXJlUmVnaW9uICYmIGF6dXJlU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgIGNvbnN0IHdlYlNwZWVjaEVuYWJsZWQgPSBzcGVlY2hTdXBwb3J0O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHNob3c9e3RoaXMucHJvcHMuc2hvd31cclxuICAgICAgICBvbkhpZGU9e3RoaXMucHJvcHMuY2xvc2V9XHJcbiAgICAgICAgYmFja2Ryb3A9XCJzdGF0aWNcIlxyXG4gICAgICAgIGtleWJvYXJkPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnNhdmV9PlxyXG4gICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlNwZWVjaCBTZXR0aW5nczwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtV2ViU3BlZWNoMVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5URVhUfVxyXG4gICAgICAgICAgICAgICAgLy8gbmFtZT1cInNwZWVjaFJhZGlvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZSBzcGVlY2hcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLlRFWFR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVdlYlNwZWVjaDJcIj4gKi99XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIC8vIG5hbWU9XCJzcGVlY2hSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF3ZWJTcGVlY2hFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgV2ViIFNwZWVjaCBBUEkgKENocm9tZSBicm93c2VyIG9ubHkpXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17U3BlZWNoTW9kZS5XRUJfU1BFRUNIfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Nb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLy8gcmVmPXt0aGlzLnVzZVdlYlNwZWVjaH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQXp1cmVTcGVlY2gzXCI+ICovfVxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAvLyBuYW1lPVwic3BlZWNoUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFhenVyZUVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5BWlVSRX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlIEF6dXJlIFNwZWVjaCBBUElcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLkFaVVJFfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Nb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLy8gcmVmPXt0aGlzLnVzZUF6dXJlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1TdWJzY3JpcHRpb25LZXlcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BenVyZSBTdWJzY3JpcHRpb24gS2V5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVTdWJzY3JpcHRpb25LZXl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHN1YnNjcmlwdGlvbiBrZXlcIlxyXG4gICAgICAgICAgICAgICAgLy8gcmVmPXt0aGlzLnN1YnNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN1YnNjcmlwdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtUmVnaW9uXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXp1cmUgUmVnaW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVSZWdpb259XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHJlZ2lvbiAoZS5nLiB3ZXN0dXMyKVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJlZ2lvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8vIHJlZj17dGhpcy5yZWdpb259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2F2ZTogKGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzYXZlJyk7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyhjb25maWcpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3BlZWNoQ29uZmlnQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=