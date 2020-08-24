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
      var mode = this.props.application.speechConfig.mode;
      var recordTitle = mode === _actions__WEBPACK_IMPORTED_MODULE_13__["SpeechMode"].TEXT ? "Recording disabled. To enable, select either Azure Speech or Google Speech from dropdown at top window." : "Start recording";
      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.recorder,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.recorderInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "btn btn-success btn-sm",
        disabled: this.props.application.speechConfig.mode === _actions__WEBPACK_IMPORTED_MODULE_13__["SpeechMode"].TEXT || this.props.application.isRecording,
        onClick: this.startRecognition,
        title: "record",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaMicrophone"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }
      }), "Start Recording"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "btn btn-danger btn-sm",
        disabled: this.props.application.speechConfig.mode === _actions__WEBPACK_IMPORTED_MODULE_13__["SpeechMode"].TEXT || !this.props.application.isRecording,
        onClick: this.endRecognition,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaMicrophoneSlash"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
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
          lineNumber: 174,
          columnNumber: 11
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }
      }, "Transcription: "), __jsx("i", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlY29yZGVyLWNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIlJlY29yZGVyQ29udHJvbCIsInByb3BzIiwiYXBwbGljYXRpb24iLCJpc1JlY29yZGluZyIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRpbmciLCJyZWNvZ25pemVyIiwib25yZXN1bHQiLCJ0cmFuc2NyaXB0aW9uIiwiaXNGaW5hbCIsInRyYW5zY3JpcHRpb25SZWFkeSIsIlRleHRTb3VyY2UiLCJNSUNST1BIT05FIiwib25zcGVlY2hlbmQiLCJzdG9wIiwib25lcnJvciIsInN0YXJ0IiwiZSIsImlucHV0IiwiY3VycmVudCIsImhpc3RvcnkiLCJrZXkiLCJLRVlCT0FSRCIsInZhbHVlIiwiaGlzdG9yeUluZGV4IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJuZXdUZXh0IiwidGV4dCIsInNldENhcmV0UG9zaXRpb24iLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNyZWF0ZVJlY29nbml6ZXIiLCJ3aW5kb3ciLCJzcGVlY2hDb25maWciLCJsYW5ndWFnZSIsIm1vZGUiLCJyZWNvcmRUaXRsZSIsIlNwZWVjaE1vZGUiLCJURVhUIiwic3R5bGVzIiwicmVjb3JkZXIiLCJyZWNvcmRlcklucHV0Iiwic3RhcnRSZWNvZ25pdGlvbiIsImVuZFJlY29nbml0aW9uIiwiZmxleEdyb3ciLCJtYXJnaW5MZWZ0Iiwib25LZXlEb3duIiwiQ29tcG9uZW50IiwicG9zaXRpb24iLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInJlY29yZCIsInNvdXJjZSIsImZpbmFsIiwicHJvY2VzcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtB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RSw0QkFBQ2dELE1BQUQsRUFBcUI5QixJQUFyQixFQUFtQytCLE1BQW5DLEVBQXNEO0FBQ3hFSCxjQUFRLENBQUNJLHlEQUFPLENBQUNGLE1BQUQsRUFBUzlCLElBQVQsRUFBZStCLE1BQWYsQ0FBUixDQUFSO0FBQ0Q7QUFQSSxHQUFQO0FBU0Q7O0FBRWNFLDJIQUFPLENBQUNQLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDeEQsZUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjFjYzBhODRlNzhiMDFlOTM3NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IHsgRmFNaWNyb3Bob25lLCBGYU1pY3JvcGhvbmVTbGFzaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIEFueUFjdGlvbixcclxuICBwcm9jZXNzLFxyXG4gIHJlY29yZCxcclxuICBUZXh0U291cmNlLFxyXG4gIFNwZWVjaE1vZGVcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgQ3JlYXRlUmVjb2duaXplciwgSVJlY29nbml6ZXIgfSBmcm9tICcuL3JlY29nbml6ZXJzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGU7XHJcbiAgcmVjb3JkaW5nOiAoaXNSZWNvcmRpbmc6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgdHJhbnNjcmlwdGlvblJlYWR5OiAoXHJcbiAgICBzb3VyY2U6IFRleHRTb3VyY2UsXHJcbiAgICB0cmFuc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICBmaW5hbDogYm9vbGVhblxyXG4gICkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNsYXNzIFJlY29yZGVyQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHByaXZhdGUgcmVjb2duaXplcjogSVJlY29nbml6ZXI7XHJcblxyXG4gIHByaXZhdGUgaW5wdXQ6IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcclxuXHJcbiAgcHJpdmF0ZSBoaXN0b3J5SW5kZXggPSAwO1xyXG4gIHByaXZhdGUgbmV3VGV4dDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5pbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdyZWNvcmQtY29udHJvbDogY29tcG9uZW50RGlkTW91bnQnKTtcclxuICAgIHRoaXMucmVjb2duaXplciA9IENyZWF0ZVJlY29nbml6ZXIoXHJcbiAgICAgIHdpbmRvdyxcclxuICAgICAgdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWcsXHJcbiAgICAgIHRoaXMucHJvcHMuYXBwbGljYXRpb24ubGFuZ3VhZ2VcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVjb3JkLWNvbnRyb2w6IGNvbXBvbmVudERpZFVwZGF0ZScpO1xyXG4gICAgdGhpcy5yZWNvZ25pemVyID0gQ3JlYXRlUmVjb2duaXplcihcclxuICAgICAgd2luZG93LFxyXG4gICAgICB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZyxcclxuICAgICAgdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5sYW5ndWFnZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydFJlY29nbml0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmlzUmVjb3JkaW5nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdGFydFJlY29nbml0aW9uJyk7XHJcbiAgICAgIHRoaXMucHJvcHMucmVjb3JkaW5nKHRydWUpO1xyXG5cclxuICAgICAgdGhpcy5yZWNvZ25pemVyLm9ucmVzdWx0ID0gKHRyYW5zY3JpcHRpb246IHN0cmluZywgaXNGaW5hbDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUcmFuc2NyaXB0aW9uOiBcIiR7dHJhbnNjcmlwdGlvbn1cImApO1xyXG4gICAgICAgIHRoaXMucHJvcHMudHJhbnNjcmlwdGlvblJlYWR5KFxyXG4gICAgICAgICAgVGV4dFNvdXJjZS5NSUNST1BIT05FLFxyXG4gICAgICAgICAgdHJhbnNjcmlwdGlvbixcclxuICAgICAgICAgIGlzRmluYWxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJlY29nbml6ZXIub25zcGVlY2hlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZWNvcmRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucmVjb2duaXplci5zdG9wKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVjb2duaXplci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVjb3JkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZWNvZ25pemVyLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW5kUmVjb2duaXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZW5kUmVjb2duaXRpb24nKTtcclxuICAgIHRoaXMucHJvcHMucmVjb3JkaW5nKGZhbHNlKTtcclxuICAgIHRoaXMucmVjb2duaXplci5zdG9wKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25LZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dC5jdXJyZW50O1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uaGlzdG9yeTtcclxuXHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdFRleHQnKTtcclxuICAgICAgdGhpcy5wcm9wcy50cmFuc2NyaXB0aW9uUmVhZHkoXHJcbiAgICAgICAgVGV4dFNvdXJjZS5LRVlCT0FSRCxcclxuICAgICAgICB0aGlzLmlucHV0LmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLmhpc3RvcnlJbmRleCA9IDA7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIGlmICh0aGlzLmhpc3RvcnlJbmRleCA8IGhpc3RvcnkubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGlzdG9yeUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLm5ld1RleHQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKyt0aGlzLmhpc3RvcnlJbmRleDtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gaGlzdG9yeVtcclxuICAgICAgICAgIGhpc3RvcnkubGVuZ3RoIC0gdGhpcy5oaXN0b3J5SW5kZXhcclxuICAgICAgICBdLnRleHQ7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgIHNldENhcmV0UG9zaXRpb24oaW5wdXQsIHRleHQubGVuZ3RoKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5oaXN0b3J5O1xyXG4gICAgICBpZiAodGhpcy5oaXN0b3J5SW5kZXggPiAxKSB7XHJcbiAgICAgICAgLS10aGlzLmhpc3RvcnlJbmRleDtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gaGlzdG9yeVtcclxuICAgICAgICAgIGhpc3RvcnkubGVuZ3RoIC0gdGhpcy5oaXN0b3J5SW5kZXhcclxuICAgICAgICBdLnRleHQ7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgIHNldENhcmV0UG9zaXRpb24oaW5wdXQsIHRleHQubGVuZ3RoKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5SW5kZXggPSAwO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5uZXdUZXh0O1xyXG4gICAgICAgIHNldENhcmV0UG9zaXRpb24oaW5wdXQsIHRoaXMubmV3VGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbW9kZSA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnLm1vZGU7XHJcbiAgICBjb25zdCByZWNvcmRUaXRsZSA9IG1vZGUgPT09IFNwZWVjaE1vZGUuVEVYVCA/XHJcbiAgICAgIFwiUmVjb3JkaW5nIGRpc2FibGVkLiBUbyBlbmFibGUsIHNlbGVjdCBlaXRoZXIgQXp1cmUgU3BlZWNoIG9yIEdvb2dsZSBTcGVlY2ggZnJvbSBkcm9wZG93biBhdCB0b3Agd2luZG93LlwiIDpcclxuICAgICAgXCJTdGFydCByZWNvcmRpbmdcIlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjb3JkZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjb3JkZXJJbnB1dH0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWcubW9kZSA9PT0gU3BlZWNoTW9kZS5URVhUIHx8XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5pc1JlY29yZGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhcnRSZWNvZ25pdGlvbn1cclxuICAgICAgICAgICAgdGl0bGU9XCJyZWNvcmRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmFNaWNyb3Bob25lIC8+XHJcbiAgICAgICAgICAgIFN0YXJ0IFJlY29yZGluZ1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLnNwZWVjaENvbmZpZy5tb2RlID09PSBTcGVlY2hNb2RlLlRFWFQgfHxcclxuICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5pc1JlY29yZGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZW5kUmVjb2duaXRpb259XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGYU1pY3JvcGhvbmVTbGFzaCAvPlxyXG4gICAgICAgICAgICBTdG9wIFJlY29yZGluZ1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIG1hcmdpbkxlZnQ6ICcyZW0nIH19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciB0ZXh0XCJcclxuICAgICAgICAgICAgcmVmPXt0aGlzLmlucHV0fSBvbktleURvd249e3RoaXMub25LZXlEb3dufVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxiPlRyYW5zY3JpcHRpb246IDwvYj5cclxuICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5hcHBsaWNhdGlvbi50cmFuc2NyaXB0aW9ufVxyXG4gICAgICAgICAgPC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDYXJldFBvc2l0aW9uKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBwb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgaW5wdXQuZm9jdXMoKTtcclxuICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiwgcG9zaXRpb24pO1xyXG4gIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XHJcbiAgaW5wdXQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IGFwcGxpY2F0aW9uIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xyXG4gIHJldHVybiB7XHJcbiAgICByZWNvcmRpbmc6IChpc1JlY29yZGluZzogYm9vbGVhbikgPT4ge1xyXG4gICAgICBkaXNwYXRjaChyZWNvcmQoaXNSZWNvcmRpbmcpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdHJhbnNjcmlwdGlvblJlYWR5OiAoc291cmNlOiBUZXh0U291cmNlLCB0ZXh0OiBzdHJpbmcsIGZpbmFsOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHByb2Nlc3Moc291cmNlLCB0ZXh0LCBmaW5hbCkpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFJlY29yZGVyQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=