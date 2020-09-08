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
    value: function getMode(azureConfigured) {
      var region = this.state.speechConfig.azureRegion;
      console.log("getMode: ".concat(region ? 'true' : 'false'));
      console.log("region=\"".concat(region, "\""));
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

      var mode = this.getMode(!!azureSubscriptionKey.trim());

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

      var mode = this.getMode(!!azureRegion.trim());
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
          lineNumber: 135,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
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
          lineNumber: 148,
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
          lineNumber: 155,
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
          lineNumber: 163,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
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
          lineNumber: 175,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
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
      }, "Azure Region"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
        defaultValue: this.state.speechConfig.azureRegion,
        type: "text",
        placeholder: "enter region (e.g. westus2)",
        onChange: this.onRegionChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwic3RhdGUiLCJzcGVlY2hDb25maWciLCJhcHBsaWNhdGlvbiIsImdldE1vZGUiLCJiaW5kIiwib25Nb2RlQ2hhbmdlIiwib25SZWdpb25DaGFuZ2UiLCJvblN1YnNjcmlwdGlvbkNoYW5nZSIsIm9uU2hvdyIsInNhdmUiLCJhenVyZUNvbmZpZ3VyZWQiLCJyZWdpb24iLCJhenVyZVJlZ2lvbiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50TW9kZSIsIm1vZGUiLCJuZXdNb2RlIiwic3BlZWNoU3VwcG9ydCIsIlNwZWVjaE1vZGUiLCJBWlVSRSIsIlRFWFQiLCJXRUJfU1BFRUNIIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhenVyZVN1YnNjcmlwdGlvbktleSIsInRyaW0iLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlIiwiYXp1cmVFbmFibGVkIiwid2ViU3BlZWNoRW5hYmxlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbmZpZyIsInNldFNwZWVjaENvbmZpZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFnQkM7O0lBTUtBLG1COzs7OztBQUNKLCtCQUFZQyxLQUFaLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3hCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBQUVGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQ7QUFEckIsS0FBYjtBQUlBLFVBQUtFLE9BQUwsR0FBZSxNQUFLQSxP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OERBQUQsQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDhEQUFEO0FBQVEsZUFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQU8sRUFBRSxLQUFLUCxLQUFMLENBQVcrQixLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUUsTUFBQyw4REFBRDtBQUFRLGVBQU8sRUFBQyxTQUFoQjtBQUEwQixZQUFJLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixDQW5ERixDQVBGLENBREY7QUFzRUQ7Ozs7RUE5SytCTSw0Q0FBSyxDQUFDQyxTOztBQWlMeEMsU0FBU0MsZUFBVCxDQUF5QnBDLFdBQXpCLEVBQXdEO0FBQ3RELFNBQU87QUFBRUEsZUFBVyxFQUFYQTtBQUFGLEdBQVA7QUFDRDs7QUFFRCxTQUFTcUMsa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQTJEO0FBQ3pELFNBQU87QUFDTC9CLFFBQUksRUFBRSxjQUFDZ0MsTUFBRCxFQUFtQztBQUN2QzVCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQTBCLGNBQVEsQ0FBQ0UsaUVBQWUsQ0FBQ0QsTUFBRCxDQUFoQixDQUFSO0FBQ0Q7QUFKSSxHQUFQO0FBTUQ7O0FBRWNFLDJIQUFPLENBQUNMLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDekMsbUJBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjk2OWM2NjM1NmVhOTI3Y2NiYWYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25TdGF0ZSxcclxuICBBbnlBY3Rpb24sXHJcbiAgc2V0U3BlZWNoQ29uZmlnLFxyXG4gIFNwZWVjaENvbmZpZyxcclxuICBTcGVlY2hNb2RlXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGU7XHJcbiAgc2F2ZTogKGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+KSA9PiB2b2lkO1xyXG5cclxuICBjbG9zZTogKCkgPT4gdm9pZDtcclxuICBzaG93OiBib29sZWFuO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBzcGVlY2hDb25maWc6IFNwZWVjaENvbmZpZztcclxufVxyXG5cclxuY2xhc3MgU3BlZWNoQ29uZmlnQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNwZWVjaENvbmZpZzogcHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRNb2RlID0gdGhpcy5nZXRNb2RlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW9kZUNoYW5nZSA9IHRoaXMub25Nb2RlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUmVnaW9uQ2hhbmdlID0gdGhpcy5vblJlZ2lvbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblN1YnNjcmlwdGlvbkNoYW5nZSA9IHRoaXMub25TdWJzY3JpcHRpb25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TaG93ID0gdGhpcy5vblNob3cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9kZShhenVyZUNvbmZpZ3VyZWQ6IGJvb2xlYW4pOiBTcGVlY2hNb2RlIHtcclxuICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLmF6dXJlUmVnaW9uO1xyXG4gICAgY29uc29sZS5sb2coYGdldE1vZGU6ICR7cmVnaW9uPyd0cnVlJzonZmFsc2UnfWApO1xyXG4gICAgY29uc29sZS5sb2coYHJlZ2lvbj1cIiR7cmVnaW9ufVwiYCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudE1vZGUgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZy5tb2RlO1xyXG4gICAgY29uc3QgbmV3TW9kZSA9IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLm1vZGU7XHJcbiAgICBjb25zdCBzcGVlY2hTdXBwb3J0ID0gdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWcuc3BlZWNoU3VwcG9ydDtcclxuXHJcbiAgICBpZiAobmV3TW9kZSA9PT0gU3BlZWNoTW9kZS5BWlVSRSAmJiAhYXp1cmVDb25maWd1cmVkKSB7XHJcbiAgICAgIGlmIChjdXJyZW50TW9kZSAhPT0gU3BlZWNoTW9kZS5BWlVSRSkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50TW9kZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gU3BlZWNoTW9kZS5URVhUXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3TW9kZSA9PT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIICYmICFzcGVlY2hTdXBwb3J0KSB7XHJcbiAgICAgIGlmIChjdXJyZW50TW9kZSAhPT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNb2RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBTcGVlY2hNb2RlLlRFWFRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBtb2RlOiBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uU3Vic2NyaXB0aW9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBhenVyZVN1YnNjcmlwdGlvbktleSA9IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGU7XHJcbiAgICAvLyBjb25zdCBtb2RlID0gYXp1cmVTdWJzY3JpcHRpb25LZXkgPyB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5tb2RlIDogU3BlZWNoTW9kZS5URVhUO1xyXG4gICAgY29uc3QgbW9kZSA9IHRoaXMuZ2V0TW9kZSghIWF6dXJlU3Vic2NyaXB0aW9uS2V5LnRyaW0oKSk7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBhenVyZVN1YnNjcmlwdGlvbktleSxcclxuICAgICAgbW9kZVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3BlZWNoQ29uZmlnfSk7XHJcbiAgfVxyXG5cclxuICBvblJlZ2lvbkNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3QgYXp1cmVSZWdpb24gPSBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlO1xyXG4gICAgLy8gY29uc3QgbW9kZSA9IGF6dXJlUmVnaW9uID8gdGhpcy5zdGF0ZS5zcGVlY2hDb25maWcubW9kZSA6IFNwZWVjaE1vZGUuVEVYVDtcclxuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmdldE1vZGUoISFhenVyZVJlZ2lvbi50cmltKCkpO1xyXG4gICAgY29uc29sZS5sb2coYHJlZ2lvbj1cIiR7YXp1cmVSZWdpb259XCJgKTtcclxuICAgIGNvbnNvbGUubG9nKGBtb2RlPSR7bW9kZX1gKTtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIGF6dXJlUmVnaW9uLFxyXG4gICAgICBtb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzcGVlY2hDb25maWc6IHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLnNhdmUodGhpcy5zdGF0ZS5zcGVlY2hDb25maWcpO1xyXG4gICAgdGhpcy5wcm9wcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtb2RlLFxyXG4gICAgICBhenVyZVN1YnNjcmlwdGlvbktleSxcclxuICAgICAgYXp1cmVSZWdpb24sXHJcbiAgICAgIHNwZWVjaFN1cHBvcnRcclxuICAgIH0gPSB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZztcclxuXHJcbiAgICBjb25zdCBhenVyZUVuYWJsZWQgPSAhIShhenVyZVJlZ2lvbiAmJiBhenVyZVN1YnNjcmlwdGlvbktleSk7XHJcbiAgICBjb25zdCB3ZWJTcGVlY2hFbmFibGVkID0gc3BlZWNoU3VwcG9ydDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnU3BlZWNoQ29uZmlnQ29udHJvbC5yZW5kZXIoKScpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5zcGVlY2hDb25maWcpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBzaG93PXt0aGlzLnByb3BzLnNob3d9XHJcbiAgICAgICAgb25IaWRlPXt0aGlzLnByb3BzLmNsb3NlfVxyXG4gICAgICAgIG9uU2hvdz17dGhpcy5vblNob3d9XHJcbiAgICAgICAgYmFja2Ryb3A9XCJzdGF0aWNcIlxyXG4gICAgICAgIGtleWJvYXJkPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnNhdmV9PlxyXG4gICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlNwZWVjaCBTZXR0aW5nczwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtV2ViU3BlZWNoMVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLlRFWFR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2FibGUgc3BlZWNoXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17U3BlZWNoTW9kZS5URVhUfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Nb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21vZGUgPT09IFNwZWVjaE1vZGUuV0VCX1NQRUVDSH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshd2ViU3BlZWNoRW5hYmxlZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlIFdlYiBTcGVlY2ggQVBJIChDaHJvbWUgYnJvd3NlciBvbmx5KVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuV0VCX1NQRUVDSH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLkFaVVJFfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFhenVyZUVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZSBBenVyZSBTcGVlY2ggQVBJXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17U3BlZWNoTW9kZS5BWlVSRX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtU3Vic2NyaXB0aW9uS2V5XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXp1cmUgU3Vic2NyaXB0aW9uIEtleTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLmF6dXJlU3Vic2NyaXB0aW9uS2V5fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBzdWJzY3JpcHRpb24ga2V5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN1YnNjcmlwdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtUmVnaW9uXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXp1cmUgUmVnaW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVSZWdpb259XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHJlZ2lvbiAoZS5nLiB3ZXN0dXMyKVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJlZ2lvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IGFwcGxpY2F0aW9uIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xyXG4gIHJldHVybiB7XHJcbiAgICBzYXZlOiAoY29uZmlnOiBQYXJ0aWFsPFNwZWVjaENvbmZpZz4pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3NhdmUnKTtcclxuICAgICAgZGlzcGF0Y2goc2V0U3BlZWNoQ29uZmlnKGNvbmZpZykpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTcGVlY2hDb25maWdDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==