webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/recorder-control.tsx":
/*!*****************************************!*\
  !*** ./components/recorder-control.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");
/* harmony import */ var _recognizers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recognizers */ "./components/recognizers.ts");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_15__);









var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\recorder-control.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








;

var RecorderControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RecorderControl, _React$Component);

  var _super = _createSuper(RecorderControl);

  function RecorderControl(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RecorderControl);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "recognizer", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "input", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "historyIndex", 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "newText", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "startRecognition", function () {
      if (!_this.props.application.isRecording) {
        console.log('startRecognition');

        _this.props.recording(true);

        _this.recognizer.onresult = function (transcription, isFinal) {
          console.log("Transcription: \"".concat(transcription, "\""));

          _this.props.transcriptionReady(_actions__WEBPACK_IMPORTED_MODULE_13__["TextSource"].MICROPHONE, transcription, isFinal);
        };

        _this.recognizer.onspeechend = function () {
          _this.props.recording(false);

          _this.recognizer.stop();
        };

        _this.recognizer.onerror = function () {
          _this.props.recording(false);
        };

        _this.recognizer.start();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "endRecognition", function () {
      console.log('endRecognition');

      _this.props.recording(false);

      _this.recognizer.stop();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onKeyDown", function (e) {
      var input = _this.input.current;
      var history = _this.props.application.history;

      if (e.key === 'Enter') {
        console.log('submitText');

        _this.props.transcriptionReady(_actions__WEBPACK_IMPORTED_MODULE_13__["TextSource"].KEYBOARD, _this.input.current.value, true);

        input.value = '';
        _this.historyIndex = 0;
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        if (_this.historyIndex < history.length) {
          if (_this.historyIndex === 0) {
            _this.newText = input.value;
          }

          ++_this.historyIndex;
          var text = history[history.length - _this.historyIndex].text;
          input.value = text;
          setCaretPosition(input, text.length);
          e.preventDefault();
        } else {
          e.preventDefault();
        }
      } else if (e.key === 'ArrowDown') {
        var _history = _this.props.application.history;

        if (_this.historyIndex > 1) {
          --_this.historyIndex;
          var _text = _history[_history.length - _this.historyIndex].text;
          input.value = _text;
          setCaretPosition(input, _text.length);
          e.preventDefault();
        } else {
          _this.historyIndex = 0;
          input.value = _this.newText;
          setCaretPosition(input, _this.newText.length);
          e.preventDefault();
        }
      }
    });

    _this.input = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RecorderControl, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('record-control: componentDidMount');
                this.recognizer = Object(_recognizers__WEBPACK_IMPORTED_MODULE_14__["CreateRecognizer"])(window, this.props.application.speechConfig, this.props.application.language);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('record-control: componentDidUpdate');
      this.recognizer = Object(_recognizers__WEBPACK_IMPORTED_MODULE_14__["CreateRecognizer"])(window, this.props.application.speechConfig, this.props.application.language);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.recorder,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.recorderInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "btn btn-success btn-sm",
        disabled: this.props.application.speechConfig.mode === _actions__WEBPACK_IMPORTED_MODULE_13__["SpeechMode"].TEXT || this.props.application.isRecording,
        onClick: this.startRecognition,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaMicrophone"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 13
        }
      }), "Start Recording"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "btn btn-danger btn-sm",
        disabled: !this.props.application.speechConfig.mode === _actions__WEBPACK_IMPORTED_MODULE_13__["SpeechMode"].TEXT || !this.props.application.isRecording,
        onClick: this.endRecognition,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaMicrophoneSlash"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }
      }), "Stop Recording"), __jsx("input", {
        style: {
          flexGrow: 1,
          marginLeft: '2em'
        },
        type: "text",
        placeholder: "enter text",
        ref: this.input,
        onKeyDown: this.onKeyDown,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 9
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }
      }, "Transcription: "), __jsx("i", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }
      }, this.props.application.transcription)));
    }
  }]);

  return RecorderControl;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

function setCaretPosition(input, position) {
  input.focus();
  input.setSelectionRange(position, position);
  input.selectionStart = position;
  input.selectionEnd = position;
}

function mapStateToProps(application) {
  return {
    application: application
  };
}

function mapDispatchToProps(dispatch) {
  return {
    recording: function recording(isRecording) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["record"])(isRecording));
    },
    transcriptionReady: function transcriptionReady(source, text, _final) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["process"])(source, text, _final));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(RecorderControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlY29yZGVyLWNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIlJlY29yZGVyQ29udHJvbCIsInByb3BzIiwiYXBwbGljYXRpb24iLCJpc1JlY29yZGluZyIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRpbmciLCJyZWNvZ25pemVyIiwib25yZXN1bHQiLCJ0cmFuc2NyaXB0aW9uIiwiaXNGaW5hbCIsInRyYW5zY3JpcHRpb25SZWFkeSIsIlRleHRTb3VyY2UiLCJNSUNST1BIT05FIiwib25zcGVlY2hlbmQiLCJzdG9wIiwib25lcnJvciIsInN0YXJ0IiwiZSIsImlucHV0IiwiY3VycmVudCIsImhpc3RvcnkiLCJrZXkiLCJLRVlCT0FSRCIsInZhbHVlIiwiaGlzdG9yeUluZGV4IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJuZXdUZXh0IiwidGV4dCIsInNldENhcmV0UG9zaXRpb24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNyZWF0ZVJlY29nbml6ZXIiLCJ3aW5kb3ciLCJzcGVlY2hDb25maWciLCJsYW5ndWFnZSIsInN0eWxlcyIsInJlY29yZGVyIiwicmVjb3JkZXJJbnB1dCIsIm1vZGUiLCJTcGVlY2hNb2RlIiwiVEVYVCIsInN0YXJ0UmVjb2duaXRpb24iLCJlbmRSZWNvZ25pdGlvbiIsImZsZXhHcm93IiwibWFyZ2luTGVmdCIsIm9uS2V5RG93biIsIkNvbXBvbmVudCIsInBvc2l0aW9uIiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJyZWNvcmQiLCJzb3VyY2UiLCJmaW5hbCIsInByb2Nlc3MiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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Q0FBUCxDQUE2Q3ZELGVBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmVkY2E1MTYxZTY4MWQ3MDg2OWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7IEZhTWljcm9waG9uZSwgRmFNaWNyb3Bob25lU2xhc2ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25TdGF0ZSxcclxuICBBbnlBY3Rpb24sXHJcbiAgcHJvY2VzcyxcclxuICByZWNvcmQsXHJcbiAgVGV4dFNvdXJjZSxcclxuICBTcGVlY2hNb2RlXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IENyZWF0ZVJlY29nbml6ZXIsIElSZWNvZ25pemVyIH0gZnJvbSAnLi9yZWNvZ25pemVycyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG4gIHJlY29yZGluZzogKGlzUmVjb3JkaW5nOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHRyYW5zY3JpcHRpb25SZWFkeTogKFxyXG4gICAgc291cmNlOiBUZXh0U291cmNlLFxyXG4gICAgdHJhbnNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgZmluYWw6IGJvb2xlYW5cclxuICApID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jbGFzcyBSZWNvcmRlckNvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICBwcml2YXRlIHJlY29nbml6ZXI6IElSZWNvZ25pemVyO1xyXG5cclxuICBwcml2YXRlIGlucHV0OiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gIHByaXZhdGUgaGlzdG9yeUluZGV4ID0gMDtcclxuICBwcml2YXRlIG5ld1RleHQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuaW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVjb3JkLWNvbnRyb2w6IGNvbXBvbmVudERpZE1vdW50Jyk7XHJcbiAgICB0aGlzLnJlY29nbml6ZXIgPSBDcmVhdGVSZWNvZ25pemVyKFxyXG4gICAgICB3aW5kb3csXHJcbiAgICAgIHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnLFxyXG4gICAgICB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmxhbmd1YWdlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3JlY29yZC1jb250cm9sOiBjb21wb25lbnREaWRVcGRhdGUnKTtcclxuICAgIHRoaXMucmVjb2duaXplciA9IENyZWF0ZVJlY29nbml6ZXIoXHJcbiAgICAgIHdpbmRvdyxcclxuICAgICAgdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWcsXHJcbiAgICAgIHRoaXMucHJvcHMuYXBwbGljYXRpb24ubGFuZ3VhZ2VcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRSZWNvZ25pdGlvbiA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5pc1JlY29yZGluZykge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3RhcnRSZWNvZ25pdGlvbicpO1xyXG4gICAgICB0aGlzLnByb3BzLnJlY29yZGluZyh0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMucmVjb2duaXplci5vbnJlc3VsdCA9ICh0cmFuc2NyaXB0aW9uOiBzdHJpbmcsIGlzRmluYWw6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNjcmlwdGlvbjogXCIke3RyYW5zY3JpcHRpb259XCJgKTtcclxuICAgICAgICB0aGlzLnByb3BzLnRyYW5zY3JpcHRpb25SZWFkeShcclxuICAgICAgICAgIFRleHRTb3VyY2UuTUlDUk9QSE9ORSxcclxuICAgICAgICAgIHRyYW5zY3JpcHRpb24sXHJcbiAgICAgICAgICBpc0ZpbmFsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZWNvZ25pemVyLm9uc3BlZWNoZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVjb3JkaW5nKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJlY29nbml6ZXIuc3RvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJlY29nbml6ZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnJlY29yZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVjb2duaXplci5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGVuZFJlY29nbml0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2VuZFJlY29nbml0aW9uJyk7XHJcbiAgICB0aGlzLnByb3BzLnJlY29yZGluZyhmYWxzZSk7XHJcbiAgICB0aGlzLnJlY29nbml6ZXIuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXQuY3VycmVudDtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmhpc3Rvcnk7XHJcblxyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRUZXh0Jyk7XHJcbiAgICAgIHRoaXMucHJvcHMudHJhbnNjcmlwdGlvblJlYWR5KFxyXG4gICAgICAgIFRleHRTb3VyY2UuS0VZQk9BUkQsXHJcbiAgICAgICAgdGhpcy5pbnB1dC5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5oaXN0b3J5SW5kZXggPSAwO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICBpZiAodGhpcy5oaXN0b3J5SW5kZXggPCBoaXN0b3J5Lmxlbmd0aCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpc3RvcnlJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5uZXdUZXh0ID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICsrdGhpcy5oaXN0b3J5SW5kZXg7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGhpc3RvcnlbXHJcbiAgICAgICAgICBoaXN0b3J5Lmxlbmd0aCAtIHRoaXMuaGlzdG9yeUluZGV4XHJcbiAgICAgICAgXS50ZXh0O1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gdGV4dDtcclxuICAgICAgICBzZXRDYXJldFBvc2l0aW9uKGlucHV0LCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uaGlzdG9yeTtcclxuICAgICAgaWYgKHRoaXMuaGlzdG9yeUluZGV4ID4gMSkge1xyXG4gICAgICAgIC0tdGhpcy5oaXN0b3J5SW5kZXg7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGhpc3RvcnlbXHJcbiAgICAgICAgICBoaXN0b3J5Lmxlbmd0aCAtIHRoaXMuaGlzdG9yeUluZGV4XHJcbiAgICAgICAgXS50ZXh0O1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gdGV4dDtcclxuICAgICAgICBzZXRDYXJldFBvc2l0aW9uKGlucHV0LCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeUluZGV4ID0gMDtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMubmV3VGV4dDtcclxuICAgICAgICBzZXRDYXJldFBvc2l0aW9uKGlucHV0LCB0aGlzLm5ld1RleHQubGVuZ3RoKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjb3JkZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjb3JkZXJJbnB1dH0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWcubW9kZSA9PT0gU3BlZWNoTW9kZS5URVhUIHx8XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5pc1JlY29yZGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhcnRSZWNvZ25pdGlvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZhTWljcm9waG9uZSAvPlxyXG4gICAgICAgICAgICBTdGFydCBSZWNvcmRpbmdcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgIXRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnLm1vZGUgPT09IFNwZWVjaE1vZGUuVEVYVCB8fFxyXG4gICAgICAgICAgICAgICF0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmlzUmVjb3JkaW5nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5lbmRSZWNvZ25pdGlvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZhTWljcm9waG9uZVNsYXNoIC8+XHJcbiAgICAgICAgICAgIFN0b3AgUmVjb3JkaW5nXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgbWFyZ2luTGVmdDogJzJlbScgfX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHRleHRcIlxyXG4gICAgICAgICAgICByZWY9e3RoaXMuaW5wdXR9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGI+VHJhbnNjcmlwdGlvbjogPC9iPlxyXG4gICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnRyYW5zY3JpcHRpb259XHJcbiAgICAgICAgICA8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENhcmV0UG9zaXRpb24oaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICBpbnB1dC5mb2N1cygpO1xyXG4gIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKHBvc2l0aW9uLCBwb3NpdGlvbik7XHJcbiAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcclxuICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgYXBwbGljYXRpb24gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlY29yZGluZzogKGlzUmVjb3JkaW5nOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHJlY29yZChpc1JlY29yZGluZykpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0cmFuc2NyaXB0aW9uUmVhZHk6IChzb3VyY2U6IFRleHRTb3VyY2UsIHRleHQ6IHN0cmluZywgZmluYWw6IGJvb2xlYW4pID0+IHtcclxuICAgICAgZGlzcGF0Y2gocHJvY2Vzcyhzb3VyY2UsIHRleHQsIGZpbmFsKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmVjb3JkZXJDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==