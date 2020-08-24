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
        disabled: this.props.application.speechConfig.mode === _actions__WEBPACK_IMPORTED_MODULE_13__["SpeechMode"].TEXT || !this.props.application.isRecording,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlY29yZGVyLWNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIlJlY29yZGVyQ29udHJvbCIsInByb3BzIiwiYXBwbGljYXRpb24iLCJpc1JlY29yZGluZyIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRpbmciLCJyZWNvZ25pemVyIiwib25yZXN1bHQiLCJ0cmFuc2NyaXB0aW9uIiwiaXNGaW5hbCIsInRyYW5zY3JpcHRpb25SZWFkeSIsIlRleHRTb3VyY2UiLCJNSUNST1BIT05FIiwib25zcGVlY2hlbmQiLCJzdG9wIiwib25lcnJvciIsInN0YXJ0IiwiZSIsImlucHV0IiwiY3VycmVudCIsImhpc3RvcnkiLCJrZXkiLCJLRVlCT0FSRCIsInZhbHVlIiwiaGlzdG9yeUluZGV4IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJuZXdUZXh0IiwidGV4dCIsInNldENhcmV0UG9zaXRpb24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNyZWF0ZVJlY29nbml6ZXIiLCJ3aW5kb3ciLCJzcGVlY2hDb25maWciLCJsYW5ndWFnZSIsInN0eWxlcyIsInJlY29yZGVyIiwicmVjb3JkZXJJbnB1dCIsIm1vZGUiLCJTcGVlY2hNb2RlIiwiVEVYVCIsInN0YXJ0UmVjb2duaXRpb24iLCJlbmRSZWNvZ25pdGlvbiIsImZsZXhHcm93IiwibWFyZ2luTGVmdCIsIm9uS2V5RG93biIsIkNvbXBvbmVudCIsInBvc2l0aW9uIiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJyZWNvcmQiLCJzb3VyY2UiLCJmaW5hbCIsInByb2Nlc3MiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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Q0FBNkN2RCxlQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hZWE3MzA0MTgyMzU3OWM3NWU0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgeyBGYU1pY3JvcGhvbmUsIEZhTWljcm9waG9uZVNsYXNoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgQW55QWN0aW9uLFxyXG4gIHByb2Nlc3MsXHJcbiAgcmVjb3JkLFxyXG4gIFRleHRTb3VyY2UsXHJcbiAgU3BlZWNoTW9kZVxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBDcmVhdGVSZWNvZ25pemVyLCBJUmVjb2duaXplciB9IGZyb20gJy4vcmVjb2duaXplcnMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZTtcclxuICByZWNvcmRpbmc6IChpc1JlY29yZGluZzogYm9vbGVhbikgPT4gdm9pZDtcclxuICB0cmFuc2NyaXB0aW9uUmVhZHk6IChcclxuICAgIHNvdXJjZTogVGV4dFNvdXJjZSxcclxuICAgIHRyYW5zY3JpcHRpb246IHN0cmluZyxcclxuICAgIGZpbmFsOiBib29sZWFuXHJcbiAgKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY2xhc3MgUmVjb3JkZXJDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcHJpdmF0ZSByZWNvZ25pemVyOiBJUmVjb2duaXplcjtcclxuXHJcbiAgcHJpdmF0ZSBpbnB1dDogUmVhY3QuUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuICBwcml2YXRlIGhpc3RvcnlJbmRleCA9IDA7XHJcbiAgcHJpdmF0ZSBuZXdUZXh0OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLmlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coJ3JlY29yZC1jb250cm9sOiBjb21wb25lbnREaWRNb3VudCcpO1xyXG4gICAgdGhpcy5yZWNvZ25pemVyID0gQ3JlYXRlUmVjb2duaXplcihcclxuICAgICAgd2luZG93LFxyXG4gICAgICB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZyxcclxuICAgICAgdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5sYW5ndWFnZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdyZWNvcmQtY29udHJvbDogY29tcG9uZW50RGlkVXBkYXRlJyk7XHJcbiAgICB0aGlzLnJlY29nbml6ZXIgPSBDcmVhdGVSZWNvZ25pemVyKFxyXG4gICAgICB3aW5kb3csXHJcbiAgICAgIHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnLFxyXG4gICAgICB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmxhbmd1YWdlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0UmVjb2duaXRpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuYXBwbGljYXRpb24uaXNSZWNvcmRpbmcpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3N0YXJ0UmVjb2duaXRpb24nKTtcclxuICAgICAgdGhpcy5wcm9wcy5yZWNvcmRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLnJlY29nbml6ZXIub25yZXN1bHQgPSAodHJhbnNjcmlwdGlvbjogc3RyaW5nLCBpc0ZpbmFsOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFRyYW5zY3JpcHRpb246IFwiJHt0cmFuc2NyaXB0aW9ufVwiYCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy50cmFuc2NyaXB0aW9uUmVhZHkoXHJcbiAgICAgICAgICBUZXh0U291cmNlLk1JQ1JPUEhPTkUsXHJcbiAgICAgICAgICB0cmFuc2NyaXB0aW9uLFxyXG4gICAgICAgICAgaXNGaW5hbFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVjb2duaXplci5vbnNwZWVjaGVuZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnJlY29yZGluZyhmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5yZWNvZ25pemVyLnN0b3AoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZWNvZ25pemVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZWNvcmRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJlY29nbml6ZXIuc3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbmRSZWNvZ25pdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdlbmRSZWNvZ25pdGlvbicpO1xyXG4gICAgdGhpcy5wcm9wcy5yZWNvcmRpbmcoZmFsc2UpO1xyXG4gICAgdGhpcy5yZWNvZ25pemVyLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbktleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0LmN1cnJlbnQ7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5oaXN0b3J5O1xyXG5cclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VibWl0VGV4dCcpO1xyXG4gICAgICB0aGlzLnByb3BzLnRyYW5zY3JpcHRpb25SZWFkeShcclxuICAgICAgICBUZXh0U291cmNlLktFWUJPQVJELFxyXG4gICAgICAgIHRoaXMuaW5wdXQuY3VycmVudC52YWx1ZSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICk7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMuaGlzdG9yeUluZGV4ID0gMDtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgaWYgKHRoaXMuaGlzdG9yeUluZGV4IDwgaGlzdG9yeS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAodGhpcy5oaXN0b3J5SW5kZXggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMubmV3VGV4dCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICArK3RoaXMuaGlzdG9yeUluZGV4O1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBoaXN0b3J5W1xyXG4gICAgICAgICAgaGlzdG9yeS5sZW5ndGggLSB0aGlzLmhpc3RvcnlJbmRleFxyXG4gICAgICAgIF0udGV4dDtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbihpbnB1dCwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmhpc3Rvcnk7XHJcbiAgICAgIGlmICh0aGlzLmhpc3RvcnlJbmRleCA+IDEpIHtcclxuICAgICAgICAtLXRoaXMuaGlzdG9yeUluZGV4O1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBoaXN0b3J5W1xyXG4gICAgICAgICAgaGlzdG9yeS5sZW5ndGggLSB0aGlzLmhpc3RvcnlJbmRleFxyXG4gICAgICAgIF0udGV4dDtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbihpbnB1dCwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnlJbmRleCA9IDA7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLm5ld1RleHQ7XHJcbiAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbihpbnB1dCwgdGhpcy5uZXdUZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlY29yZGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlY29yZGVySW5wdXR9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnLm1vZGUgPT09IFNwZWVjaE1vZGUuVEVYVCB8fFxyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbGljYXRpb24uaXNSZWNvcmRpbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXJ0UmVjb2duaXRpb259XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGYU1pY3JvcGhvbmUgLz5cclxuICAgICAgICAgICAgU3RhcnQgUmVjb3JkaW5nXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnLm1vZGUgPT09IFNwZWVjaE1vZGUuVEVYVCB8fFxyXG4gICAgICAgICAgICAgICF0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmlzUmVjb3JkaW5nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5lbmRSZWNvZ25pdGlvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZhTWljcm9waG9uZVNsYXNoIC8+XHJcbiAgICAgICAgICAgIFN0b3AgUmVjb3JkaW5nXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgbWFyZ2luTGVmdDogJzJlbScgfX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHRleHRcIlxyXG4gICAgICAgICAgICByZWY9e3RoaXMuaW5wdXR9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGI+VHJhbnNjcmlwdGlvbjogPC9iPlxyXG4gICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnRyYW5zY3JpcHRpb259XHJcbiAgICAgICAgICA8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENhcmV0UG9zaXRpb24oaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICBpbnB1dC5mb2N1cygpO1xyXG4gIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKHBvc2l0aW9uLCBwb3NpdGlvbik7XHJcbiAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcclxuICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgYXBwbGljYXRpb24gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlY29yZGluZzogKGlzUmVjb3JkaW5nOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHJlY29yZChpc1JlY29yZGluZykpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0cmFuc2NyaXB0aW9uUmVhZHk6IChzb3VyY2U6IFRleHRTb3VyY2UsIHRleHQ6IHN0cmluZywgZmluYWw6IGJvb2xlYW4pID0+IHtcclxuICAgICAgZGlzcGF0Y2gocHJvY2Vzcyhzb3VyY2UsIHRleHQsIGZpbmFsKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmVjb3JkZXJDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==