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
          lineNumber: 131,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
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
          lineNumber: 144,
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
          lineNumber: 151,
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
          lineNumber: 159,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
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
          lineNumber: 171,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
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
          lineNumber: 181,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwic3RhdGUiLCJzcGVlY2hDb25maWciLCJhcHBsaWNhdGlvbiIsImdldE1vZGUiLCJiaW5kIiwib25Nb2RlQ2hhbmdlIiwib25SZWdpb25DaGFuZ2UiLCJvblN1YnNjcmlwdGlvbkNoYW5nZSIsIm9uU2hvdyIsInNhdmUiLCJhenVyZUNvbmZpZ3VyZWQiLCJjdXJyZW50TW9kZSIsIm1vZGUiLCJuZXdNb2RlIiwic3BlZWNoU3VwcG9ydCIsIlNwZWVjaE1vZGUiLCJBWlVSRSIsIlRFWFQiLCJXRUJfU1BFRUNIIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhenVyZVN1YnNjcmlwdGlvbktleSIsInRyaW0iLCJhenVyZVJlZ2lvbiIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlIiwiYXp1cmVFbmFibGVkIiwid2ViU3BlZWNoRW5hYmxlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbmZpZyIsInNldFNwZWVjaENvbmZpZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFnQkM7O0lBTUtBLG1COzs7OztBQUNKLCtCQUFZQyxLQUFaLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3hCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBQUVGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQ7QUFEckIsS0FBYjtBQUlBLFVBQUtFLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIseUdBQWY7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLHlHQUFwQjtBQUNBLFVBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIseUdBQXRCO0FBQ0EsVUFBS0csb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJILElBQTFCLHlHQUE1QjtBQUNBLFVBQUtJLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlKLElBQVoseUdBQWQ7QUFDQSxVQUFLSyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVTCxJQUFWLHlHQUFaO0FBWHdCO0FBWXpCOzs7OzRCQUVPTSxlLEVBQXNDO0FBQzVDLFVBQU1DLFdBQVcsR0FBRyxLQUFLWixLQUFMLENBQVdHLFdBQVgsQ0FBdUJELFlBQXZCLENBQW9DVyxJQUF4RDtBQUNBLFVBQU1DLE9BQU8sR0FBRyxLQUFLYixLQUFMLENBQVdDLFlBQVgsQ0FBd0JXLElBQXhDO0FBQ0EsVUFBTUUsYUFBYSxHQUFHLEtBQUtmLEtBQUwsQ0FBV0csV0FBWCxDQUF1QkQsWUFBdkIsQ0FBb0NhLGFBQTFEOztBQUVBLFVBQUlELE9BQU8sS0FBS0Usb0RBQVUsQ0FBQ0MsS0FBdkIsSUFBZ0MsQ0FBQ04sZUFBckMsRUFBc0Q7QUFDcEQsWUFBSUMsV0FBVyxLQUFLSSxvREFBVSxDQUFDQyxLQUEvQixFQUFzQztBQUNwQyxpQkFBT0wsV0FBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPSSxvREFBVSxDQUFDRSxJQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUosT0FBTyxLQUFLRSxvREFBVSxDQUFDRyxVQUF2QixJQUFxQyxDQUFDSixhQUExQyxFQUF5RDtBQUN2RCxZQUFJSCxXQUFXLEtBQUtJLG9EQUFVLENBQUNHLFVBQS9CLEVBQTJDO0FBQ3pDLGlCQUFPUCxXQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU9JLG9EQUFVLENBQUNFLElBQWxCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSixPQUFQO0FBQ0Q7OztpQ0FFWU0sQyxFQUF3QztBQUNuRCxVQUFNbEIsWUFBWSxtQ0FDYixLQUFLRCxLQUFMLENBQVdDLFlBREU7QUFFaEJXLFlBQUksRUFBRU8sQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBRkMsUUFBbEI7O0FBSUEsV0FBS0MsUUFBTCxDQUFjO0FBQUNyQixvQkFBWSxFQUFaQTtBQUFELE9BQWQ7QUFDRDs7O3lDQUVvQmtCLEMsRUFBd0M7QUFDM0QsVUFBTUksb0JBQW9CLEdBQUdKLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF0QyxDQUQyRCxDQUUzRDs7QUFDQSxVQUFNVCxJQUFJLEdBQUcsS0FBS1QsT0FBTCxDQUFhLENBQUMsQ0FBQ29CLG9CQUFvQixDQUFDQyxJQUFyQixFQUFmLENBQWI7O0FBQ0EsVUFBTXZCLFlBQVksbUNBQ2IsS0FBS0QsS0FBTCxDQUFXQyxZQURFO0FBRWhCc0IsNEJBQW9CLEVBQXBCQSxvQkFGZ0I7QUFHaEJYLFlBQUksRUFBSkE7QUFIZ0IsUUFBbEI7O0FBS0EsV0FBS1UsUUFBTCxDQUFjO0FBQUNyQixvQkFBWSxFQUFaQTtBQUFELE9BQWQ7QUFDRDs7O21DQUVja0IsQyxFQUF3QztBQUNyRCxVQUFNTSxXQUFXLEdBQUdOLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUE3QixDQURxRCxDQUVyRDs7QUFDQSxVQUFNVCxJQUFJLEdBQUcsS0FBS1QsT0FBTCxDQUFhLENBQUMsQ0FBQ3NCLFdBQVcsQ0FBQ0QsSUFBWixFQUFmLENBQWI7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLG9CQUF1QkYsV0FBdkI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLGdCQUFvQmYsSUFBcEI7O0FBQ0EsVUFBTVgsWUFBWSxtQ0FDYixLQUFLRCxLQUFMLENBQVdDLFlBREU7QUFFaEJ3QixtQkFBVyxFQUFYQSxXQUZnQjtBQUdoQmIsWUFBSSxFQUFKQTtBQUhnQixRQUFsQjs7QUFLQSxXQUFLVSxRQUFMLENBQWM7QUFBQ3JCLG9CQUFZLEVBQVpBO0FBQUQsT0FBZDtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLcUIsUUFBTCxDQUFjO0FBQ1pyQixvQkFBWSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csV0FBWCxDQUF1QkQ7QUFEekIsT0FBZDtBQUdEOzs7eUJBRUlrQixDLEVBQXFDO0FBQ3hDQSxPQUFDLENBQUNTLGNBQUY7QUFFQSxXQUFLN0IsS0FBTCxDQUFXVSxJQUFYLENBQWdCLEtBQUtULEtBQUwsQ0FBV0MsWUFBM0I7QUFDQSxXQUFLRixLQUFMLENBQVc4QixLQUFYO0FBQ0Q7Ozs2QkFFUTtBQUFBLGtDQU1ILEtBQUs3QixLQUFMLENBQVdDLFlBTlI7QUFBQSxVQUVMVyxJQUZLLHlCQUVMQSxJQUZLO0FBQUEsVUFHTFcsb0JBSEsseUJBR0xBLG9CQUhLO0FBQUEsVUFJTEUsV0FKSyx5QkFJTEEsV0FKSztBQUFBLFVBS0xYLGFBTEsseUJBS0xBLGFBTEs7QUFRUCxVQUFNZ0IsWUFBWSxHQUFHLENBQUMsRUFBRUwsV0FBVyxJQUFJRixvQkFBakIsQ0FBdEI7QUFDQSxVQUFNUSxnQkFBZ0IsR0FBR2pCLGFBQXpCO0FBRUFZLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZSyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLakMsS0FBTCxDQUFXQyxZQUExQixDQUFaO0FBRUEsYUFDRSxNQUFDLDhEQUFEO0FBQ0UsWUFBSSxFQUFFLEtBQUtGLEtBQUwsQ0FBV21DLElBRG5CO0FBRUUsY0FBTSxFQUFFLEtBQUtuQyxLQUFMLENBQVc4QixLQUZyQjtBQUdFLGNBQU0sRUFBRSxLQUFLckIsTUFIZjtBQUlFLGdCQUFRLEVBQUMsUUFKWDtBQUtFLGdCQUFRLEVBQUUsS0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0UsTUFBQyw0REFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS0MsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsOERBQUQsQ0FBTyxNQUFQO0FBQWMsbUJBQVcsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsOERBQUQsQ0FBTyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0FERixFQUlFLE1BQUMsOERBQUQsQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDREQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUMsZ0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDREQUFELENBQU0sS0FBTjtBQUNFLGVBQU8sRUFBRUcsSUFBSSxLQUFLRyxvREFBVSxDQUFDRSxJQUQvQjtBQUVFLGFBQUssRUFBQyxnQkFGUjtBQUdFLFlBQUksRUFBQyxPQUhQO0FBSUUsYUFBSyxFQUFFRixvREFBVSxDQUFDRSxJQUpwQjtBQUtFLGdCQUFRLEVBQUUsS0FBS1osWUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBUUUsTUFBQyw0REFBRCxDQUFNLEtBQU47QUFDRSxlQUFPLEVBQUVPLElBQUksS0FBS0csb0RBQVUsQ0FBQ0csVUFEL0I7QUFFRSxnQkFBUSxFQUFFLENBQUNhLGdCQUZiO0FBR0UsYUFBSyxFQUFDLDBDQUhSO0FBSUUsWUFBSSxFQUFDLE9BSlA7QUFLRSxhQUFLLEVBQUVoQixvREFBVSxDQUFDRyxVQUxwQjtBQU1FLGdCQUFRLEVBQUUsS0FBS2IsWUFOakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJGLEVBZ0JFLE1BQUMsNERBQUQsQ0FBTSxLQUFOO0FBQ0UsZUFBTyxFQUFFTyxJQUFJLEtBQUtHLG9EQUFVLENBQUNDLEtBRC9CO0FBRUUsZ0JBQVEsRUFBRSxDQUFDYyxZQUZiO0FBR0UsYUFBSyxFQUFDLHNCQUhSO0FBSUUsWUFBSSxFQUFDLE9BSlA7QUFLRSxhQUFLLEVBQUVmLG9EQUFVLENBQUNDLEtBTHBCO0FBTUUsZ0JBQVEsRUFBRSxLQUFLWCxZQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBaEJGLENBREYsRUEyQkUsTUFBQyw0REFBRCxDQUFNLEtBQU47QUFBWSxpQkFBUyxFQUFDLHFCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0REFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixFQUVFLE1BQUMsNERBQUQsQ0FBTSxPQUFOO0FBQ0Usb0JBQVksRUFBRSxLQUFLTCxLQUFMLENBQVdDLFlBQVgsQ0FBd0JzQixvQkFEeEM7QUFFRSxtQkFBVyxFQUFDLHdCQUZkO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxnQkFBUSxFQUFFLEtBQUtoQixvQkFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBM0JGLEVBcUNFLE1BQUMsNERBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQVMsRUFBQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0REFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFLE1BQUMsNERBQUQsQ0FBTSxPQUFOO0FBQ0Usb0JBQVksRUFBRSxLQUFLUCxLQUFMLENBQVdDLFlBQVgsQ0FBd0J3QixXQUR4QztBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsbUJBQVcsRUFBQyw2QkFIZDtBQUlFLGdCQUFRLEVBQUUsS0FBS25CLGNBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQXJDRixDQUpGLEVBbURFLE1BQUMsOERBQUQsQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDhEQUFEO0FBQVEsZUFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQU8sRUFBRSxLQUFLUCxLQUFMLENBQVc4QixLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUUsTUFBQyw4REFBRDtBQUFRLGVBQU8sRUFBQyxTQUFoQjtBQUEwQixZQUFJLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixDQW5ERixDQVBGLENBREY7QUFzRUQ7Ozs7RUExSytCTSw0Q0FBSyxDQUFDQyxTOztBQTZLeEMsU0FBU0MsZUFBVCxDQUF5Qm5DLFdBQXpCLEVBQXdEO0FBQ3RELFNBQU87QUFBRUEsZUFBVyxFQUFYQTtBQUFGLEdBQVA7QUFDRDs7QUFFRCxTQUFTb0Msa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQTJEO0FBQ3pELFNBQU87QUFDTDlCLFFBQUksRUFBRSxjQUFDK0IsTUFBRCxFQUFtQztBQUN2Q2QsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBWSxjQUFRLENBQUNFLGlFQUFlLENBQUNELE1BQUQsQ0FBaEIsQ0FBUjtBQUNEO0FBSkksR0FBUDtBQU1EOztBQUVjRSwySEFBTyxDQUFDTCxlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q3hDLG1CQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45MWQ5NWIyNDM0YzQ1MWQ0YTIzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgQW55QWN0aW9uLFxyXG4gIHNldFNwZWVjaENvbmZpZyxcclxuICBTcGVlY2hDb25maWcsXHJcbiAgU3BlZWNoTW9kZVxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG4gIHNhdmU6IChjb25maWc6IFBhcnRpYWw8U3BlZWNoQ29uZmlnPikgPT4gdm9pZDtcclxuXHJcbiAgY2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgc2hvdzogYm9vbGVhbjtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgc3BlZWNoQ29uZmlnOiBTcGVlY2hDb25maWc7XHJcbn1cclxuXHJcbmNsYXNzIFNwZWVjaENvbmZpZ0NvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcGVlY2hDb25maWc6IHByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZ1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0TW9kZSA9IHRoaXMuZ2V0TW9kZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vZGVDaGFuZ2UgPSB0aGlzLm9uTW9kZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblJlZ2lvbkNoYW5nZSA9IHRoaXMub25SZWdpb25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TdWJzY3JpcHRpb25DaGFuZ2UgPSB0aGlzLm9uU3Vic2NyaXB0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uU2hvdyA9IHRoaXMub25TaG93LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldE1vZGUoYXp1cmVDb25maWd1cmVkOiBib29sZWFuKTogU3BlZWNoTW9kZSB7XHJcbiAgICBjb25zdCBjdXJyZW50TW9kZSA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnLm1vZGU7XHJcbiAgICBjb25zdCBuZXdNb2RlID0gdGhpcy5zdGF0ZS5zcGVlY2hDb25maWcubW9kZTtcclxuICAgIGNvbnN0IHNwZWVjaFN1cHBvcnQgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZy5zcGVlY2hTdXBwb3J0O1xyXG5cclxuICAgIGlmIChuZXdNb2RlID09PSBTcGVlY2hNb2RlLkFaVVJFICYmICFhenVyZUNvbmZpZ3VyZWQpIHtcclxuICAgICAgaWYgKGN1cnJlbnRNb2RlICE9PSBTcGVlY2hNb2RlLkFaVVJFKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNb2RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBTcGVlY2hNb2RlLlRFWFRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdNb2RlID09PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0ggJiYgIXNwZWVjaFN1cHBvcnQpIHtcclxuICAgICAgaWYgKGN1cnJlbnRNb2RlICE9PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0gpIHtcclxuICAgICAgICByZXR1cm4gY3VycmVudE1vZGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFNwZWVjaE1vZGUuVEVYVFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld01vZGU7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVDaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIG1vZGU6IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgb25TdWJzY3JpcHRpb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IGF6dXJlU3Vic2NyaXB0aW9uS2V5ID0gZS50YXJnZXQudmFsdWUgYXMgU3BlZWNoTW9kZTtcclxuICAgIC8vIGNvbnN0IG1vZGUgPSBhenVyZVN1YnNjcmlwdGlvbktleSA/IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLm1vZGUgOiBTcGVlY2hNb2RlLlRFWFQ7XHJcbiAgICBjb25zdCBtb2RlID0gdGhpcy5nZXRNb2RlKCEhYXp1cmVTdWJzY3JpcHRpb25LZXkudHJpbSgpKTtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICBtb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uUmVnaW9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBhenVyZVJlZ2lvbiA9IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGU7XHJcbiAgICAvLyBjb25zdCBtb2RlID0gYXp1cmVSZWdpb24gPyB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5tb2RlIDogU3BlZWNoTW9kZS5URVhUO1xyXG4gICAgY29uc3QgbW9kZSA9IHRoaXMuZ2V0TW9kZSghIWF6dXJlUmVnaW9uLnRyaW0oKSk7XHJcbiAgICBjb25zb2xlLmxvZyhgcmVnaW9uPVwiJHthenVyZVJlZ2lvbn1cImApO1xyXG4gICAgY29uc29sZS5sb2coYG1vZGU9JHttb2RlfWApO1xyXG4gICAgY29uc3Qgc3BlZWNoQ29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgICAgYXp1cmVSZWdpb24sXHJcbiAgICAgIG1vZGVcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NwZWVjaENvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNwZWVjaENvbmZpZzogdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMucHJvcHMuc2F2ZSh0aGlzLnN0YXRlLnNwZWVjaENvbmZpZyk7XHJcbiAgICB0aGlzLnByb3BzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICBhenVyZVJlZ2lvbixcclxuICAgICAgc3BlZWNoU3VwcG9ydFxyXG4gICAgfSA9IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnO1xyXG5cclxuICAgIGNvbnN0IGF6dXJlRW5hYmxlZCA9ICEhKGF6dXJlUmVnaW9uICYmIGF6dXJlU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgIGNvbnN0IHdlYlNwZWVjaEVuYWJsZWQgPSBzcGVlY2hTdXBwb3J0O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdTcGVlY2hDb25maWdDb250cm9sLnJlbmRlcigpJyk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnNwZWVjaENvbmZpZykpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHNob3c9e3RoaXMucHJvcHMuc2hvd31cclxuICAgICAgICBvbkhpZGU9e3RoaXMucHJvcHMuY2xvc2V9XHJcbiAgICAgICAgb25TaG93PXt0aGlzLm9uU2hvd31cclxuICAgICAgICBiYWNrZHJvcD1cInN0YXRpY1wiXHJcbiAgICAgICAga2V5Ym9hcmQ9e2ZhbHNlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuc2F2ZX0+XHJcbiAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwuVGl0bGU+U3BlZWNoIFNldHRpbmdzPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1XZWJTcGVlY2gxXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21vZGUgPT09IFNwZWVjaE1vZGUuVEVYVH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZSBzcGVlY2hcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLlRFWFR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF3ZWJTcGVlY2hFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgV2ViIFNwZWVjaCBBUEkgKENocm9tZSBicm93c2VyIG9ubHkpXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17U3BlZWNoTW9kZS5XRUJfU1BFRUNIfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Nb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21vZGUgPT09IFNwZWVjaE1vZGUuQVpVUkV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWF6dXJlRW5hYmxlZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlIEF6dXJlIFNwZWVjaCBBUElcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLkFaVVJFfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Nb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1TdWJzY3JpcHRpb25LZXlcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BenVyZSBTdWJzY3JpcHRpb24gS2V5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVTdWJzY3JpcHRpb25LZXl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHN1YnNjcmlwdGlvbiBrZXlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU3Vic2NyaXB0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1SZWdpb25cIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BenVyZSBSZWdpb248L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5henVyZVJlZ2lvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgcmVnaW9uIChlLmcuIHdlc3R1czIpXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUmVnaW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9PlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgYXBwbGljYXRpb24gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNhdmU6IChjb25maWc6IFBhcnRpYWw8U3BlZWNoQ29uZmlnPikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnc2F2ZScpO1xyXG4gICAgICBkaXNwYXRjaChzZXRTcGVlY2hDb25maWcoY29uZmlnKSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNwZWVjaENvbmZpZ0NvbnRyb2wpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9