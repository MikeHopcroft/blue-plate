webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/speech-config-control.tsx":
/*!**********************************************!*\
  !*** ./components/speech-config-control.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







;

var SpeechConfigControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SpeechConfigControl, _React$Component);

  var _super = _createSuper(SpeechConfigControl);

  function SpeechConfigControl(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SpeechConfigControl);

    _this = _super.call(this, props);
    _this.state = {
      speechConfig: props.application.speechConfig
    };
    _this.getMode = _this.getMode.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onModeChange = _this.onModeChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onRegionChange = _this.onRegionChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onSubscriptionChange = _this.onSubscriptionChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onShow = _this.onShow.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.save = _this.save.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SpeechConfigControl, [{
    key: "getMode",
    value: function getMode(azureSubscriptionKey, azureRegion) {
      var azureConfigured = !!azureSubscriptionKey.trim() && !!azureRegion.trim();
      console.log("getMode(azureConfigured=".concat(azureConfigured, ")")); // const region = this.state.speechConfig.azureRegion;
      // console.log(`getMode: ${region?'true':'false'}`);
      // console.log(`region="${region}"`);

      var currentMode = this.props.application.speechConfig.mode;
      var newMode = this.state.speechConfig.mode;
      var speechSupport = this.props.application.speechConfig.speechSupport;

      if (newMode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].AZURE && !azureConfigured) {
        if (currentMode !== _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].AZURE) {
          return currentMode;
        } else {
          return _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT;
        }
      }

      if (newMode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].WEB_SPEECH && !speechSupport) {
        if (currentMode !== _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].WEB_SPEECH) {
          return currentMode;
        } else {
          return _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT;
        }
      }

      return newMode;
    }
  }, {
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
      var azureSubscriptionKey = e.target.value; // const mode = azureSubscriptionKey ? this.state.speechConfig.mode : SpeechMode.TEXT;
      // const mode = this.getMode(!!azureSubscriptionKey.trim());

      var mode = this.getMode(azureSubscriptionKey, this.state.speechConfig.azureRegion);

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
      var azureRegion = e.target.value; // const mode = azureRegion ? this.state.speechConfig.mode : SpeechMode.TEXT;
      // const mode = this.getMode(!!azureRegion.trim());

      var mode = this.getMode(this.state.speechConfig.azureSubscriptionKey, azureRegion);
      console.log("onRegionChange: region=\"".concat(azureRegion, "\""));
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
    key: "onShow",
    value: function onShow() {
      this.setState({
        speechConfig: this.props.application.speechConfig
      });
    }
  }, {
    key: "save",
    value: function save(e) {
      e.preventDefault();
      this.props.save(this.state.speechConfig);
      this.props.close();
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
      console.log('SpeechConfigControl.render()');
      console.log(JSON.stringify(this.state.speechConfig));
      return __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        show: this.props.show,
        onHide: this.props.close,
        onShow: this.onShow,
        backdrop: "static",
        keyboard: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
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
          lineNumber: 158,
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
          lineNumber: 165,
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
          lineNumber: 173,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
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
          lineNumber: 185,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
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
          lineNumber: 195,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwic3RhdGUiLCJzcGVlY2hDb25maWciLCJhcHBsaWNhdGlvbiIsImdldE1vZGUiLCJiaW5kIiwib25Nb2RlQ2hhbmdlIiwib25SZWdpb25DaGFuZ2UiLCJvblN1YnNjcmlwdGlvbkNoYW5nZSIsIm9uU2hvdyIsInNhdmUiLCJhenVyZVN1YnNjcmlwdGlvbktleSIsImF6dXJlUmVnaW9uIiwiYXp1cmVDb25maWd1cmVkIiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50TW9kZSIsIm1vZGUiLCJuZXdNb2RlIiwic3BlZWNoU3VwcG9ydCIsIlNwZWVjaE1vZGUiLCJBWlVSRSIsIlRFWFQiLCJXRUJfU1BFRUNIIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlIiwiYXp1cmVFbmFibGVkIiwid2ViU3BlZWNoRW5hYmxlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbmZpZyIsInNldFNwZWVjaENvbmZpZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFnQkM7O0lBTUtBLG1COzs7OztBQUNKLCtCQUFZQyxLQUFaLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3hCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBQUVGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQ7QUFEckIsS0FBYjtBQUlBLFVBQUtFLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFD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O0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FyQ0YsQ0FKRixFQW1ERSxNQUFDLDhEQUFELENBQU8sTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw4REFBRDtBQUFRLGVBQU8sRUFBQyxXQUFoQjtBQUE0QixlQUFPLEVBQUUsS0FBS1AsS0FBTCxDQUFXOEIsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUlFLE1BQUMsOERBQUQ7QUFBUSxlQUFPLEVBQUMsU0FBaEI7QUFBMEIsWUFBSSxFQUFDLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsQ0FuREYsQ0FQRixDQURGO0FBc0VEOzs7O0VBeEwrQk0sNENBQUssQ0FBQ0MsUzs7QUEyTHhDLFNBQVNDLGVBQVQsQ0FBeUJuQyxXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUVBLGVBQVcsRUFBWEE7QUFBRixHQUFQO0FBQ0Q7O0FBRUQsU0FBU29DLGtCQUFULENBQTRCQyxRQUE1QixFQUEyRDtBQUN6RCxTQUFPO0FBQ0w5QixRQUFJLEVBQUUsY0FBQytCLE1BQUQsRUFBbUM7QUFDdkMxQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0F3QixjQUFRLENBQUNFLGlFQUFlLENBQUNELE1BQUQsQ0FBaEIsQ0FBUjtBQUNEO0FBSkksR0FBUDtBQU1EOztBQUVjRSwySEFBTyxDQUFDTCxlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q3hDLG1CQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43ZjMyNDRlMzA5MWNhNTk4MzI4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgQW55QWN0aW9uLFxyXG4gIHNldFNwZWVjaENvbmZpZyxcclxuICBTcGVlY2hDb25maWcsXHJcbiAgU3BlZWNoTW9kZVxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG4gIHNhdmU6IChjb25maWc6IFBhcnRpYWw8U3BlZWNoQ29uZmlnPikgPT4gdm9pZDtcclxuXHJcbiAgY2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgc2hvdzogYm9vbGVhbjtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgc3BlZWNoQ29uZmlnOiBTcGVlY2hDb25maWc7XHJcbn1cclxuXHJcbmNsYXNzIFNwZWVjaENvbmZpZ0NvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcGVlY2hDb25maWc6IHByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZ1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0TW9kZSA9IHRoaXMuZ2V0TW9kZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vZGVDaGFuZ2UgPSB0aGlzLm9uTW9kZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblJlZ2lvbkNoYW5nZSA9IHRoaXMub25SZWdpb25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TdWJzY3JpcHRpb25DaGFuZ2UgPSB0aGlzLm9uU3Vic2NyaXB0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uU2hvdyA9IHRoaXMub25TaG93LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldE1vZGUoYXp1cmVTdWJzY3JpcHRpb25LZXk6IHN0cmluZywgYXp1cmVSZWdpb246IHN0cmluZyk6IFNwZWVjaE1vZGUge1xyXG4gICAgY29uc3QgYXp1cmVDb25maWd1cmVkID0gISFhenVyZVN1YnNjcmlwdGlvbktleS50cmltKCkgJiYgISFhenVyZVJlZ2lvbi50cmltKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgZ2V0TW9kZShhenVyZUNvbmZpZ3VyZWQ9JHthenVyZUNvbmZpZ3VyZWR9KWApO1xyXG4gICAgLy8gY29uc3QgcmVnaW9uID0gdGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVSZWdpb247XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgZ2V0TW9kZTogJHtyZWdpb24/J3RydWUnOidmYWxzZSd9YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgcmVnaW9uPVwiJHtyZWdpb259XCJgKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50TW9kZSA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnLm1vZGU7XHJcbiAgICBjb25zdCBuZXdNb2RlID0gdGhpcy5zdGF0ZS5zcGVlY2hDb25maWcubW9kZTtcclxuICAgIGNvbnN0IHNwZWVjaFN1cHBvcnQgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZy5zcGVlY2hTdXBwb3J0O1xyXG5cclxuICAgIGlmIChuZXdNb2RlID09PSBTcGVlY2hNb2RlLkFaVVJFICYmICFhenVyZUNvbmZpZ3VyZWQpIHtcclxuICAgICAgaWYgKGN1cnJlbnRNb2RlICE9PSBTcGVlY2hNb2RlLkFaVVJFKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNb2RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBTcGVlY2hNb2RlLlRFWFRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdNb2RlID09PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0ggJiYgIXNwZWVjaFN1cHBvcnQpIHtcclxuICAgICAgaWYgKGN1cnJlbnRNb2RlICE9PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0gpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudE1vZGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFNwZWVjaE1vZGUuVEVYVFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld01vZGU7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVDaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIG1vZGU6IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgb25TdWJzY3JpcHRpb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IGF6dXJlU3Vic2NyaXB0aW9uS2V5ID0gZS50YXJnZXQudmFsdWUgYXMgU3BlZWNoTW9kZTtcclxuICAgIC8vIGNvbnN0IG1vZGUgPSBhenVyZVN1YnNjcmlwdGlvbktleSA/IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLm1vZGUgOiBTcGVlY2hNb2RlLlRFWFQ7XHJcbiAgICAvLyBjb25zdCBtb2RlID0gdGhpcy5nZXRNb2RlKCEhYXp1cmVTdWJzY3JpcHRpb25LZXkudHJpbSgpKTtcclxuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmdldE1vZGUoXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5henVyZVJlZ2lvblxyXG4gICAgKTtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICBtb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uUmVnaW9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBhenVyZVJlZ2lvbiA9IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGU7XHJcbiAgICAvLyBjb25zdCBtb2RlID0gYXp1cmVSZWdpb24gPyB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5tb2RlIDogU3BlZWNoTW9kZS5URVhUO1xyXG4gICAgLy8gY29uc3QgbW9kZSA9IHRoaXMuZ2V0TW9kZSghIWF6dXJlUmVnaW9uLnRyaW0oKSk7XHJcbiAgICBjb25zdCBtb2RlID0gdGhpcy5nZXRNb2RlKFxyXG4gICAgICB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5henVyZVN1YnNjcmlwdGlvbktleSxcclxuICAgICAgYXp1cmVSZWdpb25cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhgb25SZWdpb25DaGFuZ2U6IHJlZ2lvbj1cIiR7YXp1cmVSZWdpb259XCJgKTtcclxuICAgIGNvbnNvbGUubG9nKGBtb2RlPSR7bW9kZX1gKTtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIGF6dXJlUmVnaW9uLFxyXG4gICAgICBtb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzcGVlY2hDb25maWc6IHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLnNhdmUodGhpcy5zdGF0ZS5zcGVlY2hDb25maWcpO1xyXG4gICAgdGhpcy5wcm9wcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtb2RlLFxyXG4gICAgICBhenVyZVN1YnNjcmlwdGlvbktleSxcclxuICAgICAgYXp1cmVSZWdpb24sXHJcbiAgICAgIHNwZWVjaFN1cHBvcnRcclxuICAgIH0gPSB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZztcclxuXHJcbiAgICBjb25zdCBhenVyZUVuYWJsZWQgPSAhIShhenVyZVJlZ2lvbiAmJiBhenVyZVN1YnNjcmlwdGlvbktleSk7XHJcbiAgICBjb25zdCB3ZWJTcGVlY2hFbmFibGVkID0gc3BlZWNoU3VwcG9ydDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnU3BlZWNoQ29uZmlnQ29udHJvbC5yZW5kZXIoKScpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5zcGVlY2hDb25maWcpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBzaG93PXt0aGlzLnByb3BzLnNob3d9XHJcbiAgICAgICAgb25IaWRlPXt0aGlzLnByb3BzLmNsb3NlfVxyXG4gICAgICAgIG9uU2hvdz17dGhpcy5vblNob3d9XHJcbiAgICAgICAgYmFja2Ryb3A9XCJzdGF0aWNcIlxyXG4gICAgICAgIGtleWJvYXJkPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnNhdmV9PlxyXG4gICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlNwZWVjaCBTZXR0aW5nczwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtV2ViU3BlZWNoMVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLlRFWFR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2FibGUgc3BlZWNoXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17U3BlZWNoTW9kZS5URVhUfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Nb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21vZGUgPT09IFNwZWVjaE1vZGUuV0VCX1NQRUVDSH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshd2ViU3BlZWNoRW5hYmxlZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlIFdlYiBTcGVlY2ggQVBJIChDaHJvbWUgYnJvd3NlciBvbmx5KVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuV0VCX1NQRUVDSH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLkFaVVJFfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFhenVyZUVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZSBBenVyZSBTcGVlY2ggQVBJXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17U3BlZWNoTW9kZS5BWlVSRX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtU3Vic2NyaXB0aW9uS2V5XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXp1cmUgU3Vic2NyaXB0aW9uIEtleTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLmF6dXJlU3Vic2NyaXB0aW9uS2V5fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBzdWJzY3JpcHRpb24ga2V5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN1YnNjcmlwdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtUmVnaW9uXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXp1cmUgUmVnaW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVSZWdpb259XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHJlZ2lvbiAoZS5nLiB3ZXN0dXMyKVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJlZ2lvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IGFwcGxpY2F0aW9uIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xyXG4gIHJldHVybiB7XHJcbiAgICBzYXZlOiAoY29uZmlnOiBQYXJ0aWFsPFNwZWVjaENvbmZpZz4pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3NhdmUnKTtcclxuICAgICAgZGlzcGF0Y2goc2V0U3BlZWNoQ29uZmlnKGNvbmZpZykpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTcGVlY2hDb25maWdDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==