webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/recognizers.ts":
/*!***********************************!*\
  !*** ./components/recognizers.ts ***!
  \***********************************/
/*! exports provided: CreateRecognizer, WebSpeechRecognizer, AzureSpeechRecognizer, NopSpeechRecognizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecognizer", function() { return CreateRecognizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSpeechRecognizer", function() { return WebSpeechRecognizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureSpeechRecognizer", function() { return AzureSpeechRecognizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NopSpeechRecognizer", function() { return NopSpeechRecognizer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! microsoft-cognitiveservices-speech-sdk */ "./node_modules/microsoft-cognitiveservices-speech-sdk/distrib/es2015/microsoft.cognitiveservices.speech.sdk.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");





function CreateRecognizer(window, config, language) {
  try {
    if (config.mode === _actions__WEBPACK_IMPORTED_MODULE_4__["SpeechMode"].AZURE) {
      console.log('AzureSpeechRecognizer');
      return new AzureSpeechRecognizer(config.azureSubscriptionKey, config.azureRegion, language);
    } else if (config.mode === _actions__WEBPACK_IMPORTED_MODULE_4__["SpeechMode"].WEB_SPEECH) {
      console.log('WebSpeechRecognizer');
      return new WebSpeechRecognizer(window, language);
    } else {
      return new NopSpeechRecognizer();
    }
  } catch (e) {
    console.log('Error: using NopSpeechRecognizer');
    return new NopSpeechRecognizer();
  }
}
_c = CreateRecognizer;
var WebSpeechRecognizer = /*#__PURE__*/function () {
  function WebSpeechRecognizer(window, language) {
    var _this = this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WebSpeechRecognizer);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onerror", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onresult", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onspeechend", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "recognition", void 0);

    this.onerror = function () {};

    this.onresult = function () {};

    this.onspeechend = function () {};

    var SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = language;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;

    this.recognition.onresult = function (event) {
      var transcription = event.results[0][0].transcript;

      _this.onresult(transcription, event.results[0].isFinal);
    };

    this.recognition.onspeechend = function () {
      _this.recognition.stop();

      _this.onspeechend();
    };

    this.recognition.onerror = function (event) {
      _this.onerror();
    };
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WebSpeechRecognizer, [{
    key: "start",
    value: function start() {
      this.recognition.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.recognition.stop();
    }
  }, {
    key: "enabled",
    value: function enabled() {
      return true;
    }
  }]);

  return WebSpeechRecognizer;
}();
var AzureSpeechRecognizer = /*#__PURE__*/function () {
  function AzureSpeechRecognizer(subscriptionKey, region, language) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AzureSpeechRecognizer);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onerror", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onresult", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onspeechend", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "recognizer", void 0);

    this.onerror = function () {};

    this.onresult = function () {};

    this.onspeechend = function () {};

    var speechConfig = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_3__["SpeechConfig"].fromSubscription(subscriptionKey, region);
    speechConfig.speechRecognitionLanguage = language;
    var audioConfig = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_3__["AudioConfig"].fromDefaultMicrophoneInput();
    this.recognizer = new microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognizer"](speechConfig, audioConfig);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AzureSpeechRecognizer, [{
    key: "start",
    value: function start() {
      var onresult = this.onresult;
      var onerror = this.onerror;
      var onspeechend = this.onspeechend;
      var recognizer = this.recognizer;

      try {
        recognizer.recognized = function (sender, event) {
          console.log('================ final result =================');

          if (event.result.text !== undefined) {
            // Azure seems to return undefined when it encounters an error.
            // Seems like it shouldn't invoke this callback on error.
            onresult(event.result.text, true);
          }
        };

        recognizer.recognizing = function (sender, event) {
          console.log('================ interim result =================');

          if (event.result.text !== undefined) {
            // Azure seems to return undefined when it encounters an error.
            // Seems like it shouldn't invoke this callback on error.
            onresult(event.result.text, false);
          }
        };

        recognizer.recognizeOnceAsync(function (result) {
          console.log('================ recognizeOnceAsync callback ================='); // if (result.text !== undefined) {
          //   // Azure seems to return undefined when it encounters an error.
          //   // Seems like it shouldn't invoke this callback on error.
          //   onresult(result.text, true);
          // }

          onspeechend();
          recognizer.close();
        }, function (err) {
          console.log('================ recognizeOnceAsync error =================');
          console.log(err);
          onerror();
          onspeechend();
          recognizer.close(); // recognizer = undefined;
        });
      } catch (e) {
        console.log('caught exception in recognizer.recognizeOnceAsync()');
      }
    }
  }, {
    key: "stop",
    value: function stop() {// throw new Error("Method not implemented.");
    }
  }, {
    key: "enabled",
    value: function enabled() {
      return true;
    }
  }]);

  return AzureSpeechRecognizer;
}();
var NopSpeechRecognizer = /*#__PURE__*/function () {
  function NopSpeechRecognizer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NopSpeechRecognizer);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onerror", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onresult", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onspeechend", void 0);

    this.onerror = function () {};

    this.onresult = function () {};

    this.onspeechend = function () {};
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NopSpeechRecognizer, [{
    key: "start",
    value: function start() {}
  }, {
    key: "stop",
    value: function stop() {}
  }, {
    key: "enabled",
    value: function enabled() {
      return false;
    }
  }]);

  return NopSpeechRecognizer;
}();

var _c;

$RefreshReg$(_c, "CreateRecognizer");

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

/***/ }),

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "useAzure", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "useWebSpeech", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "subscription", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "region", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "save", function (e) {
      e.preventDefault();
      var mode = _this.useAzure.current.checked ? _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].AZURE : _this.useWebSpeech.current.checked ? _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].WEB_SPEECH : _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT;
      var config = {
        mode: mode,
        azureSubscriptionKey: _this.subscription.current.value,
        azureRegion: _this.region.current.value
      };

      _this.props.save(config);

      _this.props.close();
    });

    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SpeechConfigControl, [{
    key: "render",
    value: function render() {
      var _this$props$applicati = this.props.application.speechConfig,
          mode = _this$props$applicati.mode,
          azureSubscriptionKey = _this$props$applicati.azureSubscriptionKey,
          azureRegion = _this$props$applicati.azureRegion,
          speechSupport = _this$props$applicati.speechSupport;
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
          lineNumber: 72,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSubmit: this.save,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, "Speech Settings")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        name: "speechRadio",
        type: "radio",
        label: "Disable speech",
        defaultChecked: mode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].TEXT,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formWebSpeech2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        name: "speechRadio",
        type: "radio",
        label: "Use Web Speech API (Chrome browser only)",
        defaultChecked: mode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].WEB_SPEECH,
        disabled: !webSpeechEnabled,
        ref: this.useWebSpeech,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formAzureSpeech3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        name: "speechRadio",
        type: "radio",
        label: "Use Azure Speech API",
        defaultChecked: mode === _actions__WEBPACK_IMPORTED_MODULE_12__["SpeechMode"].AZURE,
        disabled: !azureEnabled,
        ref: this.useAzure,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formSubscriptionKey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }
      }, "Azure Subscription Key"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
        type: "password",
        placeholder: "enter subscription key",
        ref: this.subscription,
        defaultValue: azureSubscriptionKey,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
        controlId: "formRegion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 15
        }
      }, "Azure Region"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
        type: "text",
        placeholder: "enter region (e.g. westus2)",
        ref: this.region,
        defaultValue: azureRegion,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "secondary",
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }
      }, "Cancel"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "primary",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlY29nbml6ZXJzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3BlZWNoLWNvbmZpZy1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJDcmVhdGVSZWNvZ25pemVyIiwid2luZG93IiwiY29uZmlnIiwibGFuZ3VhZ2UiLCJtb2RlIiwiU3BlZWNoTW9kZSIsIkFaVVJFIiwiY29uc29sZSIsImxvZyIsIkF6dXJlU3BlZWNoUmVjb2duaXplciIsImF6dXJlU3Vic2NyaXB0aW9uS2V5IiwiYXp1cmVSZWdpb24iLCJXRUJfU1BFRUNIIiwiV2ViU3BlZWNoUmVjb2duaXplciIsIk5vcFNwZWVjaFJlY29nbml6ZXIiLCJlIiwib25lcnJvciIsIm9ucmVzdWx0Iiwib25zcGVlY2hlbmQiLCJTcGVlY2hSZWNvZ25pdGlvbiIsInNwZWVjaFJlY29nbml0aW9uIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJyZWNvZ25pdGlvbiIsImxhbmciLCJpbnRlcmltUmVzdWx0cyIsIm1heEFsdGVybmF0aXZlcyIsImV2ZW50IiwidHJhbnNjcmlwdGlvbiIsInJlc3VsdHMiLCJ0cmFuc2NyaXB0IiwiaXNGaW5hbCIsInN0b3AiLCJzdGFydCIsInN1YnNjcmlwdGlvbktleSIsInJlZ2lvbiIsInNwZWVjaENvbmZpZyIsIlNwZWVjaFNESyIsImZyb21TdWJzY3JpcHRpb24iLCJzcGVlY2hSZWNvZ25pdGlvbkxhbmd1YWdlIiwiYXVkaW9Db25maWciLCJmcm9tRGVmYXVsdE1pY3JvcGhvbmVJbnB1dCIsInJlY29nbml6ZXIiLCJyZWNvZ25pemVkIiwic2VuZGVyIiwicmVzdWx0IiwidGV4dCIsInVuZGVmaW5lZCIsInJlY29nbml6aW5nIiwicmVjb2duaXplT25jZUFzeW5jIiwiY2xvc2UiLCJlcnIiLCJTcGVlY2hDb25maWdDb250cm9sIiwicHJvcHMiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInByZXZlbnREZWZhdWx0IiwidXNlQXp1cmUiLCJjdXJyZW50IiwiY2hlY2tlZCIsInVzZVdlYlNwZWVjaCIsIlRFWFQiLCJzdWJzY3JpcHRpb24iLCJ2YWx1ZSIsInNhdmUiLCJzdGF0ZSIsImFwcGxpY2F0aW9uIiwic3BlZWNoU3VwcG9ydCIsImF6dXJlRW5hYmxlZCIsIndlYlNwZWVjaEVuYWJsZWQiLCJzaG93IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZXRTcGVlY2hDb25maWciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFhTyxTQUFTQSxnQkFBVCxDQUNMQyxNQURLLEVBRUxDLE1BRkssRUFHTEMsUUFISyxFQUlRO0FBQ2IsTUFBSTtBQUNGLFFBQUlELE1BQU0sQ0FBQ0UsSUFBUCxLQUFnQkMsbURBQVUsQ0FBQ0MsS0FBL0IsRUFBc0M7QUFDcENDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsYUFBTyxJQUFJQyxxQkFBSixDQUNMUCxNQUFNLENBQUNRLG9CQURGLEVBRUxSLE1BQU0sQ0FBQ1MsV0FGRixFQUdMUixRQUhLLENBQVA7QUFLRCxLQVBELE1BT08sSUFBSUQsTUFBTSxDQUFDRSxJQUFQLEtBQWdCQyxtREFBVSxDQUFDTyxVQUEvQixFQUEyQztBQUNoREwsYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQSxhQUFPLElBQUlLLG1CQUFKLENBQXdCWixNQUF4QixFQUFnQ0UsUUFBaEMsQ0FBUDtBQUNELEtBSE0sTUFHQTtBQUNMLGFBQU8sSUFBSVcsbUJBQUosRUFBUDtBQUNEO0FBQ0YsR0FkRCxDQWNFLE9BQU9DLENBQVAsRUFBVTtBQUNWUixXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBLFdBQU8sSUFBSU0sbUJBQUosRUFBUDtBQUNEO0FBQ0Y7S0F2QmVkLGdCO0FBeUJULElBQU1hLG1CQUFiO0FBT0UsK0JBQVlaLE1BQVosRUFBNEJFLFFBQTVCLEVBQThDO0FB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QURGO0FBd0VEOzs7O0VBbEgrQkksNENBQUssQ0FBQ2lCLFM7O0FBcUh4QyxTQUFTQyxlQUFULENBQXlCTixXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUVBLGVBQVcsRUFBWEE7QUFBRixHQUFQO0FBQ0Q7O0FBRUQsU0FBU08sa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQTJEO0FBQ3pELFNBQU87QUFDTFYsUUFBSSxFQUFFLGNBQUM3RCxNQUFELEVBQW1DO0FBQ3ZDSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FpRSxjQUFRLENBQUNDLGlFQUFlLENBQUN4RSxNQUFELENBQWhCLENBQVI7QUFDRDtBQUpJLEdBQVA7QUFNRDs7QUFFY3lFLDJIQUFPLENBQUNKLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDckIsbUJBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjNlMDYwM2NmZTdkOTliMjQ1MzYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTcGVlY2hTREsgZnJvbSAnbWljcm9zb2Z0LWNvZ25pdGl2ZXNlcnZpY2VzLXNwZWVjaC1zZGsnO1xyXG5cclxuaW1wb3J0IHsgU3BlZWNoQ29uZmlnLCBTcGVlY2hNb2RlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZWNvZ25pemVyIHtcclxuICBvbmVycm9yOiAoKSA9PiB2b2lkO1xyXG4gIG9ucmVzdWx0OiAodHJhbnNjcmlwdGlvbjogc3RyaW5nLCBpc0ZpbmFsOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIG9uc3BlZWNoZW5kOiAoKSA9PiB2b2lkO1xyXG5cclxuICBzdGFydCgpOiB2b2lkO1xyXG4gIHN0b3AoKTogdm9pZDtcclxuXHJcbiAgZW5hYmxlZCgpOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlUmVjb2duaXplcihcclxuICB3aW5kb3c6IFdpbmRvdyxcclxuICBjb25maWc6IFNwZWVjaENvbmZpZyxcclxuICBsYW5ndWFnZTogc3RyaW5nXHJcbik6IElSZWNvZ25pemVyIHtcclxuICB0cnkge1xyXG4gICAgaWYgKGNvbmZpZy5tb2RlID09PSBTcGVlY2hNb2RlLkFaVVJFKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBenVyZVNwZWVjaFJlY29nbml6ZXInKTtcclxuICAgICAgcmV0dXJuIG5ldyBBenVyZVNwZWVjaFJlY29nbml6ZXIoXHJcbiAgICAgICAgY29uZmlnLmF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICAgIGNvbmZpZy5henVyZVJlZ2lvbixcclxuICAgICAgICBsYW5ndWFnZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChjb25maWcubW9kZSA9PT0gU3BlZWNoTW9kZS5XRUJfU1BFRUNIKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJTcGVlY2hSZWNvZ25pemVyJyk7XHJcbiAgICAgIHJldHVybiBuZXcgV2ViU3BlZWNoUmVjb2duaXplcih3aW5kb3csIGxhbmd1YWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgTm9wU3BlZWNoUmVjb2duaXplcigpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdFcnJvcjogdXNpbmcgTm9wU3BlZWNoUmVjb2duaXplcicpO1xyXG4gICAgcmV0dXJuIG5ldyBOb3BTcGVlY2hSZWNvZ25pemVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2ViU3BlZWNoUmVjb2duaXplciBpbXBsZW1lbnRzIElSZWNvZ25pemVyIHtcclxuICBvbmVycm9yOiAoKSA9PiB2b2lkO1xyXG4gIG9ucmVzdWx0OiAodHJhbnNjcmlwdGlvbjogc3RyaW5nLCBpc0ZpbmFsOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIG9uc3BlZWNoZW5kOiAoKSA9PiB2b2lkO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHJlY29nbml0aW9uOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHdpbmRvdzogV2luZG93LCBsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm9uZXJyb3IgPSAoKSA9PiB7fTtcclxuICAgIHRoaXMub25yZXN1bHQgPSAoKSA9PiB7fTtcclxuICAgIHRoaXMub25zcGVlY2hlbmQgPSAoKSA9PiB7fTtcclxuXHJcbiAgICBjb25zdCBTcGVlY2hSZWNvZ25pdGlvbiA9XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5zcGVlY2hSZWNvZ25pdGlvbiB8fFxyXG4gICAgICAod2luZG93IGFzIGFueSkud2Via2l0U3BlZWNoUmVjb2duaXRpb247XHJcblxyXG4gICAgdGhpcy5yZWNvZ25pdGlvbiA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xyXG4gICAgdGhpcy5yZWNvZ25pdGlvbi5sYW5nID0gbGFuZ3VhZ2U7XHJcbiAgICB0aGlzLnJlY29nbml0aW9uLmludGVyaW1SZXN1bHRzID0gdHJ1ZTtcclxuICAgIHRoaXMucmVjb2duaXRpb24ubWF4QWx0ZXJuYXRpdmVzID0gMTtcclxuXHJcbiAgICB0aGlzLnJlY29nbml0aW9uLm9ucmVzdWx0ID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgdHJhbnNjcmlwdGlvbiA9IGV2ZW50LnJlc3VsdHNbMF1bMF0udHJhbnNjcmlwdCBhcyBzdHJpbmc7XHJcbiAgICAgIHRoaXMub25yZXN1bHQodHJhbnNjcmlwdGlvbiwgZXZlbnQucmVzdWx0c1swXS5pc0ZpbmFsKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlY29nbml0aW9uLm9uc3BlZWNoZW5kID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlY29nbml0aW9uLnN0b3AoKTtcclxuICAgICAgdGhpcy5vbnNwZWVjaGVuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVjb2duaXRpb24ub25lcnJvciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMub25lcnJvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlY29nbml0aW9uLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWNvZ25pdGlvbi5zdG9wKCk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXp1cmVTcGVlY2hSZWNvZ25pemVyIGltcGxlbWVudHMgSVJlY29nbml6ZXIge1xyXG4gIG9uZXJyb3I6ICgpID0+IHZvaWQ7XHJcbiAgb25yZXN1bHQ6ICh0cmFuc2NyaXB0aW9uOiBzdHJpbmcsIGlzRmluYWw6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgb25zcGVlY2hlbmQ6ICgpID0+IHZvaWQ7XHJcblxyXG4gIHJlY29nbml6ZXI6IFNwZWVjaFNESy5TcGVlY2hSZWNvZ25pemVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzdWJzY3JpcHRpb25LZXk6IHN0cmluZywgcmVnaW9uOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMub25lcnJvciA9ICgpID0+IHt9O1xyXG4gICAgdGhpcy5vbnJlc3VsdCA9ICgpID0+IHt9O1xyXG4gICAgdGhpcy5vbnNwZWVjaGVuZCA9ICgpID0+IHt9O1xyXG5cclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IFNwZWVjaFNESy5TcGVlY2hDb25maWcuZnJvbVN1YnNjcmlwdGlvbihcclxuICAgICAgc3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICByZWdpb25cclxuICAgICk7XHJcblxyXG4gICAgc3BlZWNoQ29uZmlnLnNwZWVjaFJlY29nbml0aW9uTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIGNvbnN0IGF1ZGlvQ29uZmlnICA9IFNwZWVjaFNESy5BdWRpb0NvbmZpZy5mcm9tRGVmYXVsdE1pY3JvcGhvbmVJbnB1dCgpO1xyXG4gICAgdGhpcy5yZWNvZ25pemVyID0gbmV3IFNwZWVjaFNESy5TcGVlY2hSZWNvZ25pemVyKHNwZWVjaENvbmZpZywgYXVkaW9Db25maWcpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvbnJlc3VsdCA9IHRoaXMub25yZXN1bHQ7XHJcbiAgICBjb25zdCBvbmVycm9yID0gdGhpcy5vbmVycm9yO1xyXG4gICAgY29uc3Qgb25zcGVlY2hlbmQgPSB0aGlzLm9uc3BlZWNoZW5kO1xyXG5cclxuICAgIGNvbnN0IHJlY29nbml6ZXIgPSB0aGlzLnJlY29nbml6ZXI7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcmVjb2duaXplci5yZWNvZ25pemVkID0gKFxyXG4gICAgICAgIHNlbmRlcjogU3BlZWNoU0RLLlJlY29nbml6ZXIsXHJcbiAgICAgICAgZXZlbnQ6IFNwZWVjaFNESy5TcGVlY2hSZWNvZ25pdGlvbkV2ZW50QXJnc1xyXG4gICAgICApID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PSBmaW5hbCByZXN1bHQgPT09PT09PT09PT09PT09PT0nKTtcclxuICAgICAgICBpZiAoZXZlbnQucmVzdWx0LnRleHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgLy8gQXp1cmUgc2VlbXMgdG8gcmV0dXJuIHVuZGVmaW5lZCB3aGVuIGl0IGVuY291bnRlcnMgYW4gZXJyb3IuXHJcbiAgICAgICAgICAvLyBTZWVtcyBsaWtlIGl0IHNob3VsZG4ndCBpbnZva2UgdGhpcyBjYWxsYmFjayBvbiBlcnJvci5cclxuICAgICAgICAgIG9ucmVzdWx0KGV2ZW50LnJlc3VsdC50ZXh0LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlY29nbml6ZXIucmVjb2duaXppbmcgPSAoXHJcbiAgICAgICAgc2VuZGVyOiBTcGVlY2hTREsuUmVjb2duaXplcixcclxuICAgICAgICBldmVudDogU3BlZWNoU0RLLlNwZWVjaFJlY29nbml0aW9uRXZlbnRBcmdzXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09IGludGVyaW0gcmVzdWx0ID09PT09PT09PT09PT09PT09Jyk7XHJcbiAgICAgICAgaWYgKGV2ZW50LnJlc3VsdC50ZXh0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vIEF6dXJlIHNlZW1zIHRvIHJldHVybiB1bmRlZmluZWQgd2hlbiBpdCBlbmNvdW50ZXJzIGFuIGVycm9yLlxyXG4gICAgICAgICAgLy8gU2VlbXMgbGlrZSBpdCBzaG91bGRuJ3QgaW52b2tlIHRoaXMgY2FsbGJhY2sgb24gZXJyb3IuXHJcbiAgICAgICAgICBvbnJlc3VsdChldmVudC5yZXN1bHQudGV4dCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmVjb2duaXplci5yZWNvZ25pemVPbmNlQXN5bmMoXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT0gcmVjb2duaXplT25jZUFzeW5jIGNhbGxiYWNrID09PT09PT09PT09PT09PT09Jyk7XHJcbiAgICAgICAgICAvLyBpZiAocmVzdWx0LnRleHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgLy8gICAvLyBBenVyZSBzZWVtcyB0byByZXR1cm4gdW5kZWZpbmVkIHdoZW4gaXQgZW5jb3VudGVycyBhbiBlcnJvci5cclxuICAgICAgICAgIC8vICAgLy8gU2VlbXMgbGlrZSBpdCBzaG91bGRuJ3QgaW52b2tlIHRoaXMgY2FsbGJhY2sgb24gZXJyb3IuXHJcbiAgICAgICAgICAvLyAgIG9ucmVzdWx0KHJlc3VsdC50ZXh0LCB0cnVlKTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIG9uc3BlZWNoZW5kKCk7XHJcbiAgICAgICAgICByZWNvZ25pemVyLmNsb3NlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PSByZWNvZ25pemVPbmNlQXN5bmMgZXJyb3IgPT09PT09PT09PT09PT09PT0nKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBvbmVycm9yKCk7XHJcbiAgICAgICAgICBvbnNwZWVjaGVuZCgpO1xyXG4gICAgICAgICAgcmVjb2duaXplci5jbG9zZSgpO1xyXG4gICAgICAgICAgLy8gcmVjb2duaXplciA9IHVuZGVmaW5lZDtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjYXVnaHQgZXhjZXB0aW9uIGluIHJlY29nbml6ZXIucmVjb2duaXplT25jZUFzeW5jKCknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3AoKTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3BTcGVlY2hSZWNvZ25pemVyIGltcGxlbWVudHMgSVJlY29nbml6ZXIge1xyXG4gIG9uZXJyb3I6ICgpID0+IHZvaWQ7XHJcbiAgb25yZXN1bHQ6ICh0cmFuc2NyaXB0aW9uOiBzdHJpbmcsIGlzRmluYWw6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgb25zcGVlY2hlbmQ6ICgpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5vbmVycm9yID0gKCkgPT4ge307XHJcbiAgICB0aGlzLm9ucmVzdWx0ID0gKCkgPT4ge307XHJcbiAgICB0aGlzLm9uc3BlZWNoZW5kID0gKCkgPT4ge307XHJcbiAgfVxyXG5cclxuICBzdGFydCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIHN0b3AoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBlbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25TdGF0ZSxcclxuICBBbnlBY3Rpb24sXHJcbiAgc2V0U3BlZWNoQ29uZmlnLFxyXG4gIFNwZWVjaENvbmZpZyxcclxuICBTcGVlY2hNb2RlXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGU7XHJcbiAgc2F2ZTogKGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+KSA9PiB2b2lkO1xyXG5cclxuICBjbG9zZTogKCkgPT4gdm9pZDtcclxuICBzaG93OiBib29sZWFuO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxufVxyXG5cclxuY2xhc3MgU3BlZWNoQ29uZmlnQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICB1c2VBenVyZSA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xyXG4gIHVzZVdlYlNwZWVjaCA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xyXG4gIHN1YnNjcmlwdGlvbiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xyXG4gIHJlZ2lvbiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmUgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBtb2RlID0gdGhpcy51c2VBenVyZS5jdXJyZW50LmNoZWNrZWQgP1xyXG4gICAgICBTcGVlY2hNb2RlLkFaVVJFIDogXHJcbiAgICAgIHRoaXMudXNlV2ViU3BlZWNoLmN1cnJlbnQuY2hlY2tlZCA/XHJcbiAgICAgIFNwZWVjaE1vZGUuV0VCX1NQRUVDSCA6XHJcbiAgICAgIFNwZWVjaE1vZGUuVEVYVDtcclxuXHJcbiAgICBjb25zdCBjb25maWc6IFBhcnRpYWw8U3BlZWNoQ29uZmlnPiA9IHtcclxuICAgICAgbW9kZSxcclxuICAgICAgYXp1cmVTdWJzY3JpcHRpb25LZXk6IHRoaXMuc3Vic2NyaXB0aW9uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGF6dXJlUmVnaW9uOiB0aGlzLnJlZ2lvbi5jdXJyZW50LnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5zYXZlKGNvbmZpZyk7XHJcbiAgICB0aGlzLnByb3BzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICBhenVyZVJlZ2lvbixcclxuICAgICAgc3BlZWNoU3VwcG9ydFxyXG4gICAgfSA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnO1xyXG5cclxuICAgIGNvbnN0IGF6dXJlRW5hYmxlZCA9ICEhKGF6dXJlUmVnaW9uICYmIGF6dXJlU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgIGNvbnN0IHdlYlNwZWVjaEVuYWJsZWQgPSBzcGVlY2hTdXBwb3J0O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHNob3c9e3RoaXMucHJvcHMuc2hvd31cclxuICAgICAgICBvbkhpZGU9e3RoaXMucHJvcHMuY2xvc2V9XHJcbiAgICAgICAgYmFja2Ryb3A9XCJzdGF0aWNcIlxyXG4gICAgICAgIGtleWJvYXJkPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnNhdmV9PlxyXG4gICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlNwZWVjaCBTZXR0aW5nczwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtV2ViU3BlZWNoMVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3BlZWNoUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZSBzcGVlY2hcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e21vZGUgPT09IFNwZWVjaE1vZGUuVEVYVH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1XZWJTcGVlY2gyXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVlY2hSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgV2ViIFNwZWVjaCBBUEkgKENocm9tZSBicm93c2VyIG9ubHkpXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXttb2RlID09PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0h9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXdlYlNwZWVjaEVuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMudXNlV2ViU3BlZWNofVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUF6dXJlU3BlZWNoM1wiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3BlZWNoUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlIEF6dXJlIFNwZWVjaCBBUElcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e21vZGUgPT09IFNwZWVjaE1vZGUuQVpVUkV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWF6dXJlRW5hYmxlZH1cclxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy51c2VBenVyZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtU3Vic2NyaXB0aW9uS2V5XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QXp1cmUgU3Vic2NyaXB0aW9uIEtleTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBzdWJzY3JpcHRpb24ga2V5XCJcclxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdWJzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2F6dXJlU3Vic2NyaXB0aW9uS2V5fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1SZWdpb25cIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BenVyZSBSZWdpb248L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciByZWdpb24gKGUuZy4gd2VzdHVzMilcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLnJlZ2lvbn1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YXp1cmVSZWdpb259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2F2ZTogKGNvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzYXZlJyk7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyhjb25maWcpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3BlZWNoQ29uZmlnQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=