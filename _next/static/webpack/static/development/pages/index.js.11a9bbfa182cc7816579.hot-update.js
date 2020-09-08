webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/application-state.ts":
/*!**************************************!*\
  !*** ./actions/application-state.ts ***!
  \**************************************/
/*! exports provided: ApplicationMode, TextSource, Correctness, SpeechMode, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMode", function() { return ApplicationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSource", function() { return TextSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Correctness", function() { return Correctness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechMode", function() { return SpeechMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _sample_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-history */ "./actions/sample-history.ts");
/* harmony import */ var _speech_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speech-config */ "./actions/speech-config.ts");


var ApplicationMode;

(function (ApplicationMode) {
  ApplicationMode["INSTRUCTIONS"] = "INSTRUCTIONS";
  ApplicationMode["MENU"] = "MENU";
  ApplicationMode["GRAPH"] = "GRAPH";
})(ApplicationMode || (ApplicationMode = {}));

;
var TextSource;

(function (TextSource) {
  TextSource["COMMAND"] = "COMMAND";
  TextSource["KEYBOARD"] = "KEYBOARD";
  TextSource["MICROPHONE"] = "MICROPHONE";
})(TextSource || (TextSource = {}));

var Correctness;

(function (Correctness) {
  Correctness["CORRECT"] = "CORRECT";
  Correctness["INCORRECT"] = "INCORRECT";
  Correctness["UNKNOWN"] = "UNKNOWN";
})(Correctness || (Correctness = {}));

;
;
var SpeechMode;

(function (SpeechMode) {
  SpeechMode["AZURE"] = "AZURE";
  SpeechMode["TEXT"] = "TEXT";
  SpeechMode["WEB_SPEECH"] = "WEB_SPEECH";
})(SpeechMode || (SpeechMode = {}));

;
function initialState() {
  var speechConfig = Object(_speech_config__WEBPACK_IMPORTED_MODULE_1__["loadSpeechConfig"])();
  return {
    mode: ApplicationMode.INSTRUCTIONS,
    isRecording: false,
    transcription: '',
    cart: {
      items: []
    },
    history: Object(_sample_history__WEBPACK_IMPORTED_MODULE_0__["getSampleHistory"])(),
    undoStack: [{
      items: []
    }],
    language: 'en-US',
    speechConfig: speechConfig // speechConfig: {
    //   ...azureConfig,
    //   // App boots up with speechSupport false.
    //   // Then chromeDetectSaga may change the value
    //   // once the window object is available.
    //   speechSupport: false,
    // }

  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FwcGxpY2F0aW9uLXN0YXRlLnRzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uTW9kZSIsIlRleHRTb3VyY2UiLCJDb3JyZWN0bmVzcyIsIlNwZWVjaE1vZGUiLCJpbml0aWFsU3RhdGUiLCJzcGVlY2hDb25maWciLCJsb2FkU3BlZWNoQ29uZmlnIiwibW9kZSIsIklOU1RSVUNUSU9OUyIsImlzUmVjb3JkaW5nIiwidHJhbnNjcmlwdGlvbiIsImNhcnQiLCJpdGVtcyIsImhpc3RvcnkiLCJnZXRTYW1wbGVIaXN0b3J5IiwidW5kb1N0YWNrIiwibGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQUtBLGVBQVo7O1dBQVlBLGU7QUFBQUEsaUI7QUFBQUEsaUI7QUFBQUEsaUI7R0FBQUEsZSxLQUFBQSxlOztBQUlYO0FBRU0sSUFBS0MsVUFBWjs7V0FBWUEsVTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtHQUFBQSxVLEtBQUFBLFU7O0FBTUwsSUFBS0MsV0FBWjs7V0FBWUEsVztBQUFBQSxhO0FBQUFBLGE7QUFBQUEsYTtHQUFBQSxXLEtBQUFBLFc7O0FBY1g7QUFRQTtBQUVNLElBQUtDLFVBQVo7O1dBQVlBLFU7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7R0FBQUEsVSxLQUFBQSxVOztBQVlYO0FBY00sU0FBU0MsWUFBVCxHQUEwQztBQUMvQyxNQUFNQyxZQUFZLEdBQUdDLHVFQUFnQixFQUFyQztBQUVBLFNBQU87QUFDTEMsUUFBSSxFQUFFUCxlQUFlLENBQUNRLFlBRGpCO0FBRUxDLGVBQVcsRUFBRSxLQUZSO0FBR0xDLGlCQUFhLEVBQUUsRUFIVjtBQUlMQyxRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBREgsS0FKRDtBQU9MQyxXQUFPLEVBQUVDLHdFQUFnQixFQVBwQjtBQVFMQyxhQUFTLEVBQUUsQ0FBRTtBQUFFSCxXQUFLLEVBQUU7QUFBVCxLQUFGLENBUk47QUFTTEksWUFBUSxFQUFFLE9BVEw7QUFVTFgsZ0JBQVksRUFBWkEsWUFWSyxDQVdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWpCSyxHQUFQO0FBbUJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xMWE5YmJmYTE4MmNjNzgxNjU3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCwgV29ybGQgfSBmcm9tICdwcml4LWZpeGUnO1xyXG5pbXBvcnQgeyBMZXhpY29uU3BlYywgU2hvcnRPcmRlcldvcmxkIH0gZnJvbSAnc2hvcnQtb3JkZXInO1xyXG5pbXBvcnQgeyBJbnZlcnRlZEluZGV4IH0gZnJvbSAndG9rZW4tZmxvdyc7XHJcblxyXG5pbXBvcnQgeyBBbGxUZXN0UmVzdWx0cyB9IGZyb20gJy4uL2xvZ2ljJztcclxuXHJcbmltcG9ydCB7IGdldFNhbXBsZUhpc3RvcnkgfSBmcm9tICcuL3NhbXBsZS1oaXN0b3J5JztcclxuaW1wb3J0IHsgbG9hZFNwZWVjaENvbmZpZyB9IGZyb20gJy4vc3BlZWNoLWNvbmZpZyc7XHJcblxyXG5leHBvcnQgZW51bSBBcHBsaWNhdGlvbk1vZGUge1xyXG4gIElOU1RSVUNUSU9OUyA9ICdJTlNUUlVDVElPTlMnLFxyXG4gIE1FTlUgPSAnTUVOVScsXHJcbiAgR1JBUEggPSAnR1JBUEgnLFxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVGV4dFNvdXJjZSB7XHJcbiAgQ09NTUFORCA9ICdDT01NQU5EJyxcclxuICBLRVlCT0FSRCA9ICdLRVlCT0FSRCcsXHJcbiAgTUlDUk9QSE9ORSA9ICdNSUNST1BIT05FJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29ycmVjdG5lc3Mge1xyXG4gIENPUlJFQ1QgPSAnQ09SUkVDVCcsXHJcbiAgSU5DT1JSRUNUID0gJ0lOQ09SUkVDVCcsXHJcbiAgVU5LTk9XTiA9ICdVTktOT1dOJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5SXRlbSB7XHJcbiAgY2FydDogQ2FydDtcclxuICBpZDogbnVtYmVyO1xyXG4gIHNvdXJjZTogVGV4dFNvdXJjZTtcclxuICB0aW1lc3RhbXA6IERhdGU7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcztcclxuICBub3RlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbHVlUGxhdGVXb3JsZCB7XHJcbiAgcHJpeEZpeGVXb3JsZDogV29ybGQ7XHJcbiAgbGV4aWNvblNwZWM6IExleGljb25TcGVjO1xyXG4gIHBvc3RpbmdzOiBJbnZlcnRlZEluZGV4O1xyXG4gIHNob3J0T3JkZXJXb3JsZDogU2hvcnRPcmRlcldvcmxkO1xyXG4gIHRlc3RSZXN1bHRzOiBBbGxUZXN0UmVzdWx0cztcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFNwZWVjaE1vZGUge1xyXG4gIEFaVVJFID0gJ0FaVVJFJyxcclxuICBURVhUID0gJ1RFWFQnLFxyXG4gIFdFQl9TUEVFQ0ggPSAnV0VCX1NQRUVDSCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGVlY2hDb25maWcge1xyXG4gIHNwZWVjaFN1cHBvcnQ6IGJvb2xlYW47XHJcbiAgcGVyc2lzdGVkTW9kZTogU3BlZWNoTW9kZTtcclxuICBtb2RlOiBTcGVlY2hNb2RlO1xyXG4gIGF6dXJlU3Vic2NyaXB0aW9uS2V5OiBzdHJpbmc7XHJcbiAgYXp1cmVSZWdpb246IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgbW9kZTogQXBwbGljYXRpb25Nb2RlO1xyXG4gIGlzUmVjb3JkaW5nOiBib29sZWFuO1xyXG4gIHRyYW5zY3JpcHRpb246IHN0cmluZztcclxuICBjYXJ0OiBDYXJ0O1xyXG4gIGhpc3Rvcnk6IEhpc3RvcnlJdGVtW107XHJcbiAgdW5kb1N0YWNrOiBDYXJ0W107XHJcbiAgYmx1ZVBsYXRlV29ybGQ/OiBCbHVlUGxhdGVXb3JsZDtcclxuICBsYW5ndWFnZTogc3RyaW5nO1xyXG4gIHNwZWVjaENvbmZpZzogU3BlZWNoQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFN0YXRlKCk6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIGNvbnN0IHNwZWVjaENvbmZpZyA9IGxvYWRTcGVlY2hDb25maWcoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1vZGU6IEFwcGxpY2F0aW9uTW9kZS5JTlNUUlVDVElPTlMsXHJcbiAgICBpc1JlY29yZGluZzogZmFsc2UsXHJcbiAgICB0cmFuc2NyaXB0aW9uOiAnJyxcclxuICAgIGNhcnQ6IHtcclxuICAgICAgaXRlbXM6IFtdXHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeTogZ2V0U2FtcGxlSGlzdG9yeSgpLFxyXG4gICAgdW5kb1N0YWNrOiBbIHsgaXRlbXM6IFtdIH1dLFxyXG4gICAgbGFuZ3VhZ2U6ICdlbi1VUycsXHJcbiAgICBzcGVlY2hDb25maWdcclxuICAgIC8vIHNwZWVjaENvbmZpZzoge1xyXG4gICAgLy8gICAuLi5henVyZUNvbmZpZyxcclxuICAgIC8vICAgLy8gQXBwIGJvb3RzIHVwIHdpdGggc3BlZWNoU3VwcG9ydCBmYWxzZS5cclxuICAgIC8vICAgLy8gVGhlbiBjaHJvbWVEZXRlY3RTYWdhIG1heSBjaGFuZ2UgdGhlIHZhbHVlXHJcbiAgICAvLyAgIC8vIG9uY2UgdGhlIHdpbmRvdyBvYmplY3QgaXMgYXZhaWxhYmxlLlxyXG4gICAgLy8gICBzcGVlY2hTdXBwb3J0OiBmYWxzZSxcclxuICAgIC8vIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==