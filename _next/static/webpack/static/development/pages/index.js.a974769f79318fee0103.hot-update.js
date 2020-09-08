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
      var azureSubscriptionKey = e.target.value;
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
      var azureRegion = e.target.value;
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
          lineNumber: 137,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
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
          lineNumber: 150,
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
          lineNumber: 157,
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
          lineNumber: 165,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
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
          lineNumber: 177,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
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
          lineNumber: 187,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb25maWctY29udHJvbC50c3giXSwibmFtZXMiOlsiU3BlZWNoQ29uZmlnQ29udHJvbCIsInByb3BzIiwic3RhdGUiLCJzcGVlY2hDb25maWciLCJhcHBsaWNhdGlvbiIsImdldE1vZGUiLCJiaW5kIiwib25Nb2RlQ2hhbmdlIiwib25SZWdpb25DaGFuZ2UiLCJvblN1YnNjcmlwdGlvbkNoYW5nZSIsIm9uU2hvdyIsInNhdmUiLCJhenVyZVN1YnNjcmlwdGlvbktleSIsImF6dXJlUmVnaW9uIiwiYXp1cmVDb25maWd1cmVkIiwidHJpbSIsImN1cnJlbnRNb2RlIiwibW9kZSIsIm5ld01vZGUiLCJzcGVlY2hTdXBwb3J0IiwiU3BlZWNoTW9kZSIsIkFaVVJFIiwiVEVYVCIsIldFQl9TUEVFQ0giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlIiwiYXp1cmVFbmFibGVkIiwid2ViU3BlZWNoRW5hYmxlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbmZpZyIsInNldFNwZWVjaENvbmZpZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFnQkM7O0lBTUtBLG1COzs7OztBQUNKLCtCQUFZQyxLQUFaLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3hCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBQUVGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQ7QUFEckIsS0FBYjtBQUlBLFVBQUtFLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFD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LDhEQUFEO0FBQVEsZUFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQU8sRUFBRSxLQUFLUCxLQUFMLENBQVc4QixLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUUsTUFBQyw4REFBRDtBQUFRLGVBQU8sRUFBQyxTQUFoQjtBQUEwQixZQUFJLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixDQW5ERixDQVBGLENBREY7QUFzRUQ7Ozs7RUFoTCtCTSw0Q0FBSyxDQUFDQyxTOztBQW1MeEMsU0FBU0MsZUFBVCxDQUF5Qm5DLFdBQXpCLEVBQXdEO0FBQ3RELFNBQU87QUFBRUEsZUFBVyxFQUFYQTtBQUFGLEdBQVA7QUFDRDs7QUFFRCxTQUFTb0Msa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQTJEO0FBQ3pELFNBQU87QUFDTDlCLFFBQUksRUFBRSxjQUFDK0IsTUFBRCxFQUFtQztBQUN2Q2QsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBWSxjQUFRLENBQUNFLGlFQUFlLENBQUNELE1BQUQsQ0FBaEIsQ0FBUjtBQUNEO0FBSkksR0FBUDtBQU1EOztBQUVjRSwySEFBTyxDQUFDTCxlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q3hDLG1CQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hOTc0NzY5Zjc5MzE4ZmVlMDEwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgQW55QWN0aW9uLFxyXG4gIHNldFNwZWVjaENvbmZpZyxcclxuICBTcGVlY2hDb25maWcsXHJcbiAgU3BlZWNoTW9kZVxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG4gIHNhdmU6IChjb25maWc6IFBhcnRpYWw8U3BlZWNoQ29uZmlnPikgPT4gdm9pZDtcclxuXHJcbiAgY2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgc2hvdzogYm9vbGVhbjtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgc3BlZWNoQ29uZmlnOiBTcGVlY2hDb25maWc7XHJcbn1cclxuXHJcbmNsYXNzIFNwZWVjaENvbmZpZ0NvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcGVlY2hDb25maWc6IHByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZ1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0TW9kZSA9IHRoaXMuZ2V0TW9kZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vZGVDaGFuZ2UgPSB0aGlzLm9uTW9kZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblJlZ2lvbkNoYW5nZSA9IHRoaXMub25SZWdpb25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TdWJzY3JpcHRpb25DaGFuZ2UgPSB0aGlzLm9uU3Vic2NyaXB0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uU2hvdyA9IHRoaXMub25TaG93LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldE1vZGUoYXp1cmVTdWJzY3JpcHRpb25LZXk6IHN0cmluZywgYXp1cmVSZWdpb246IHN0cmluZyk6IFNwZWVjaE1vZGUge1xyXG4gICAgY29uc3QgYXp1cmVDb25maWd1cmVkID0gISFhenVyZVN1YnNjcmlwdGlvbktleS50cmltKCkgJiYgISFhenVyZVJlZ2lvbi50cmltKCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudE1vZGUgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZy5tb2RlO1xyXG4gICAgY29uc3QgbmV3TW9kZSA9IHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLm1vZGU7XHJcbiAgICBjb25zdCBzcGVlY2hTdXBwb3J0ID0gdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWcuc3BlZWNoU3VwcG9ydDtcclxuXHJcbiAgICBpZiAobmV3TW9kZSA9PT0gU3BlZWNoTW9kZS5BWlVSRSAmJiAhYXp1cmVDb25maWd1cmVkKSB7XHJcbiAgICAgIGlmIChjdXJyZW50TW9kZSAhPT0gU3BlZWNoTW9kZS5BWlVSRSkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50TW9kZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gU3BlZWNoTW9kZS5URVhUXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3TW9kZSA9PT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIICYmICFzcGVlY2hTdXBwb3J0KSB7XHJcbiAgICAgIGlmIChjdXJyZW50TW9kZSAhPT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNb2RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBTcGVlY2hNb2RlLlRFWFRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBtb2RlOiBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzcGVlY2hDb25maWd9KTtcclxuICB9XHJcblxyXG4gIG9uU3Vic2NyaXB0aW9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBhenVyZVN1YnNjcmlwdGlvbktleSA9IGUudGFyZ2V0LnZhbHVlIGFzIFNwZWVjaE1vZGU7XHJcbiAgICBjb25zdCBtb2RlID0gdGhpcy5nZXRNb2RlKFxyXG4gICAgICBhenVyZVN1YnNjcmlwdGlvbktleSxcclxuICAgICAgdGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVSZWdpb25cclxuICAgICk7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBhenVyZVN1YnNjcmlwdGlvbktleSxcclxuICAgICAgbW9kZVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3BlZWNoQ29uZmlnfSk7XHJcbiAgfVxyXG5cclxuICBvblJlZ2lvbkNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3QgYXp1cmVSZWdpb24gPSBlLnRhcmdldC52YWx1ZSBhcyBTcGVlY2hNb2RlO1xyXG4gICAgY29uc3QgbW9kZSA9IHRoaXMuZ2V0TW9kZShcclxuICAgICAgdGhpcy5zdGF0ZS5zcGVlY2hDb25maWcuYXp1cmVTdWJzY3JpcHRpb25LZXksXHJcbiAgICAgIGF6dXJlUmVnaW9uXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coYG9uUmVnaW9uQ2hhbmdlOiByZWdpb249XCIke2F6dXJlUmVnaW9ufVwiYCk7XHJcbiAgICBjb25zb2xlLmxvZyhgbW9kZT0ke21vZGV9YCk7XHJcbiAgICBjb25zdCBzcGVlY2hDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBhenVyZVJlZ2lvbixcclxuICAgICAgbW9kZVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3BlZWNoQ29uZmlnfSk7XHJcbiAgfVxyXG5cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3BlZWNoQ29uZmlnOiB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5zYXZlKHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnKTtcclxuICAgIHRoaXMucHJvcHMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbW9kZSxcclxuICAgICAgYXp1cmVTdWJzY3JpcHRpb25LZXksXHJcbiAgICAgIGF6dXJlUmVnaW9uLFxyXG4gICAgICBzcGVlY2hTdXBwb3J0XHJcbiAgICB9ID0gdGhpcy5zdGF0ZS5zcGVlY2hDb25maWc7XHJcblxyXG4gICAgY29uc3QgYXp1cmVFbmFibGVkID0gISEoYXp1cmVSZWdpb24gJiYgYXp1cmVTdWJzY3JpcHRpb25LZXkpO1xyXG4gICAgY29uc3Qgd2ViU3BlZWNoRW5hYmxlZCA9IHNwZWVjaFN1cHBvcnQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1NwZWVjaENvbmZpZ0NvbnRyb2wucmVuZGVyKCknKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuc3BlZWNoQ29uZmlnKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc2hvdz17dGhpcy5wcm9wcy5zaG93fVxyXG4gICAgICAgIG9uSGlkZT17dGhpcy5wcm9wcy5jbG9zZX1cclxuICAgICAgICBvblNob3c9e3RoaXMub25TaG93fVxyXG4gICAgICAgIGJhY2tkcm9wPVwic3RhdGljXCJcclxuICAgICAgICBrZXlib2FyZD17ZmFsc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5zYXZlfT5cclxuICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5TcGVlY2ggU2V0dGluZ3M8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVdlYlNwZWVjaDFcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5URVhUfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlIHNwZWVjaFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuVEVYVH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTW9kZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0h9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXdlYlNwZWVjaEVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZSBXZWIgU3BlZWNoIEFQSSAoQ2hyb21lIGJyb3dzZXIgb25seSlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTcGVlY2hNb2RlLldFQl9TUEVFQ0h9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bW9kZSA9PT0gU3BlZWNoTW9kZS5BWlVSRX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshYXp1cmVFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgQXp1cmUgU3BlZWNoIEFQSVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1NwZWVjaE1vZGUuQVpVUkV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVN1YnNjcmlwdGlvbktleVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF6dXJlIFN1YnNjcmlwdGlvbiBLZXk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNwZWVjaENvbmZpZy5henVyZVN1YnNjcmlwdGlvbktleX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgc3Vic2NyaXB0aW9uIGtleVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TdWJzY3JpcHRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybVJlZ2lvblwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkF6dXJlIFJlZ2lvbjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc3BlZWNoQ29uZmlnLmF6dXJlUmVnaW9ufVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciByZWdpb24gKGUuZy4gd2VzdHVzMilcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25SZWdpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2F2ZTogKGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzYXZlJyk7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyhjb25maWcpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3BlZWNoQ29uZmlnQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=