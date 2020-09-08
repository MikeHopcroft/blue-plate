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

      var mode = this.getMode(!!azureSubscriptionKey);

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

      var mode = this.getMode(!!azureRegion);
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
          lineNumber: 130,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
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
          lineNumber: 143,
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
          lineNumber: 150,
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
          lineNumber: 158,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
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
          lineNumber: 170,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
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
          lineNumber: 180,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwic3RhdGUiLCJzcGVlY2hDb25maWciLCJhcHBsaWNhdGlvbiIsImdldE1vZGUiLCJiaW5kIiwib25Nb2RlQ2hhbmdlIiwib25SZWdpb25DaGFuZ2UiLCJvblN1YnNjcmlwdGlvbkNoYW5nZSIsIm9uU2hvdyIsInNhdmUiLCJhenVyZUNvbmZpZ3VyZWQiLCJjdXJyZW50TW9kZSIsIm1vZGUiLCJuZXdNb2RlIiwic3BlZWNoU3VwcG9ydCIsIlNwZWVjaE1vZGUiLCJBWlVSRSIsIlRFWFQiLCJXRUJfU1BFRUNIIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhenVyZVN1YnNjcmlwdGlvbktleSIsImF6dXJlUmVnaW9uIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiY2xvc2UiLCJhenVyZUVuYWJsZWQiLCJ3ZWJTcGVlY2hFbmFibGVkIiwiSlNPTiIsInN0cmluZ2lmeSIsInNob3ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29uZmlnIiwic2V0U3BlZWNoQ29uZmlnIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQWdCQzs7SUFNS0EsbUI7Ozs7O0FBQ0osK0JBQVlDLEtBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFBRUYsS0FBSyxDQUFDRyxXQUFOLENBQWtCRDtBQURyQixLQUFiO0FBSUEsVUFBS0UsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYix5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QWhCO0FBQTBCLFlBQUksRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLENBbkRGLENBUEYsQ0FERjtBQXNFRDs7OztFQXpLK0JNLDRDQUFLLENBQUNDLFM7O0FBNEt4QyxTQUFTQyxlQUFULENBQXlCbEMsV0FBekIsRUFBd0Q7QUFDdEQsU0FBTztBQUFFQSxlQUFXLEVBQVhBO0FBQUYsR0FBUDtBQUNEOztBQUVELFNBQVNtQyxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBMkQ7QUFDekQsU0FBTztBQUNMN0IsUUFBSSxFQUFFLGNBQUM4QixNQUFELEVBQW1DO0FBQ3ZDZCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FZLGNBQVEsQ0FBQ0UsaUVBQWUsQ0FBQ0QsTUFBRCxDQUFoQixDQUFSO0FBQ0Q7QUFKSSxHQUFQO0FBTUQ7O0FBRWNFLDJIQUFPLENBQUNMLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDdkMsbUJBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQzYzllZjc1Yzc5Zjk3ZDk3MGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25TdGF0ZSxcclxuICBBbnlBY3Rpb24sXHJcbiAgc2V0U3BlZWNoQ29uZmlnLFxyXG4gIFNwZWVjaENvbmZpZyxcclxuICBTcGVlY2hNb2RlXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGU7XHJcbiAgc2F2ZTogKGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+KSA9PiB2b2lkO1xyXG5cclxuICBjbG9zZTogKCkgPT4gdm9pZDtcclxuICBzaG93OiBib29sZWFuO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBzcGVlY2hDb25maWc6IFNwZWVjaENvbmZpZztcclxufVxyXG5cclxuY2xhc3MgU3BlZWNoQ29uZmlnQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNwZWVjaENvbmZpZzogcHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRNb2RlID0gdGhpcy5nZXRNb2RlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW9kZUNoYW5nZSA9IHRoaXMub25Nb2RlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUmVnaW9uQ2hhbmdlID0gdGhpcy5vblJlZ2lvbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblN1YnNjcmlwdGlvbkNoYW5nZSA9IHRoaXMub25TdWJzY3JpcHRpb25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TaG93ID0gdGhpcy5vblNob3cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9kZShhenVyZUNvbmZpZ3VyZWQ6IGJvb2xlYW4pOiBTcGVlY2hNb2RlIHtcclxuICAgIGNvbnN0IGN1cnJlbnRNb2RlID0gdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWcubW9kZTtcclxuICAgIGNvbnN0IG5ld01vZGUgPSB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5tb2RlO1xyXG4gICAgY29uc3Qgc3BlZWNoU3VwcG9ydCA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnLnNwZWVjaFN1cHBvcnQ7XHJcbiAgICBpZiAobmV3TW9kZSA9PT0gU3BlZWNoTW9kZS5BWlVSRSAmJiAhYXp1cmVDb25maWd1cmVkKSB7XHJcbiAgICAgIGlmIChjdXJyZW50TW9kZSAhPT0gU3BlZWNoTW9kZS5BWlVSRSkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50TW9kZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gU3BlZWNoTW9kZS5URVhUXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3TW9kZSA9PT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIICYmICFzcGVlY2hTdXBwb3J0KSB7XHJcbiAgICAgIGlmIChjdXJyZW50TW9kZSAhPT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNb2RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBTcGVlY2hNb2RlLlRFWFRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBtb2RlOiBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uU3Vic2NyaXB0aW9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBhenVyZVN1YnNjcmlwdGlvbktleSA9IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGU7XHJcbiAgICAvLyBjb25zdCBtb2RlID0gYXp1cmVTdWJzY3JpcHRpb25LZXkgPyB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5tb2RlIDogU3BlZWNoTW9kZS5URVhUO1xyXG4gICAgY29uc3QgbW9kZSA9IHRoaXMuZ2V0TW9kZSghIWF6dXJlU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zcGVlY2hDb25maWcsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICBtb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uUmVnaW9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBhenVyZVJlZ2lvbiA9IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGU7XHJcbiAgICAvLyBjb25zdCBtb2RlID0gYXp1cmVSZWdpb24gPyB0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5tb2RlIDogU3BlZWNoTW9kZS5URVhUO1xyXG4gICAgY29uc3QgbW9kZSA9IHRoaXMuZ2V0TW9kZSghIWF6dXJlUmVnaW9uKTtcclxuICAgIGNvbnNvbGUubG9nKGByZWdpb249XCIke2F6dXJlUmVnaW9ufVwiYCk7XHJcbiAgICBjb25zb2xlLmxvZyhgbW9kZT0ke21vZGV9YCk7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBhenVyZVJlZ2lvbixcclxuICAgICAgbW9kZVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3BlZWNoQ29uZmlnfSk7XHJcbiAgfVxyXG5cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3BlZWNoQ29uZmlnOiB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5zYXZlKHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnKTtcclxuICAgIHRoaXMucHJvcHMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbW9kZSxcclxuICAgICAgYXp1cmVTdWJzY3JpcHRpb25LZXksXHJcbiAgICAgIGF6dXJlUmVnaW9uLFxyXG4gICAgICBzcGVlY2hTdXBwb3J0XHJcbiAgICB9ID0gdGhpcy5zdGF0ZS5zcGVlY2hDb25maWc7XHJcblxyXG4gICAgY29uc3QgYXp1cmVFbmFibGVkID0gISEoYXp1cmVSZWdpb24gJiYgYXp1cmVTdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgY29uc3Qgd2ViU3BlZWNoRW5hYmxlZCA9IHNwZWVjaFN1cHBvcnQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1NwZWVjaENvbmZpZ0NvbnRyb2wucmVuZGVyKCknKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zaG93fVxyXG4gICAgICAgIG9uSGlkZT17dGhpcy5wcm9wcy5jbG9zZX1cclxuICAgICAgICBvblNob3c9e3RoaXMub25TaG93fVxyXG4gICAgICAgIGJhY2tkcm9wPVwic3RhdGljXCJcclxuICAgICAgICBrZXlib2FyZD17ZmFsc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5zYXZlfT5cclxuICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5TcGVlY2ggU2V0dGluZ3M8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVdlYlNwZWVjaDFcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5URVhUfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlIHNwZWVjaFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuVEVYVH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0h9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXdlYlNwZWVjaEVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZSBXZWIgU3BlZWNoIEFQSSAoQ2hyb21lIGJyb3dzZXIgb25seSlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLldFQl9TUEVFQ0h9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5BWlVSRX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshYXp1cmVFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgQXp1cmUgU3BlZWNoIEFQSVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuQVpVUkV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVN1YnNjcmlwdGlvbktleVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF6dXJlIFN1YnNjcmlwdGlvbiBLZXk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5henVyZVN1YnNjcmlwdGlvbktleX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgc3Vic2NyaXB0aW9uIGtleVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TdWJzY3JpcHRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVJlZ2lvblwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF6dXJlIFJlZ2lvbjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLmF6dXJlUmVnaW9ufVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciByZWdpb24gKGUuZy4gd2VzdHVzMilcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25SZWdpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2F2ZTogKGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzYXZlJyk7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyhjb25maWcpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3BlZWNoQ29uZmlnQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=