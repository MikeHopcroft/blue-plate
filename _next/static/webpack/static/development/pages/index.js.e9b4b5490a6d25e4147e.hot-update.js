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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _sample_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-history */ "./actions/sample-history.ts");
/* harmony import */ var _speech_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speech-config */ "./actions/speech-config.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



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
  var azureConfig = Object(_speech_config__WEBPACK_IMPORTED_MODULE_2__["loadSpeechConfig"])();
  return {
    mode: ApplicationMode.INSTRUCTIONS,
    isRecording: false,
    transcription: '',
    cart: {
      items: []
    },
    history: Object(_sample_history__WEBPACK_IMPORTED_MODULE_1__["getSampleHistory"])(),
    undoStack: [{
      items: []
    }],
    language: 'en-US',
    speechConfig: _objectSpread(_objectSpread({}, azureConfig), {}, {
      // App boots up with speechSupport false.
      // Then chromeDetectSaga may change the value
      // once the window object is available.
      speechSupport: false
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FwcGxpY2F0aW9uLXN0YXRlLnRzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uTW9kZSIsIlRleHRTb3VyY2UiLCJDb3JyZWN0bmVzcyIsIlNwZWVjaE1vZGUiLCJpbml0aWFsU3RhdGUiLCJhenVyZUNvbmZpZyIsImxvYWRTcGVlY2hDb25maWciLCJtb2RlIiwiSU5TVFJVQ1RJT05TIiwiaXNSZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwiY2FydCIsIml0ZW1zIiwiaGlzdG9yeSIsImdldFNhbXBsZUhpc3RvcnkiLCJ1bmRvU3RhY2siLCJsYW5ndWFnZSIsInNwZWVjaENvbmZpZyIsInNwZWVjaFN1cHBvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBRU8sSUFBS0EsZUFBWjs7V0FBWUEsZTtBQUFBQSxpQjtBQUFBQSxpQjtBQUFBQSxpQjtHQUFBQSxlLEtBQUFBLGU7O0FBSVg7QUFFTSxJQUFLQyxVQUFaOztXQUFZQSxVO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0dBQUFBLFUsS0FBQUEsVTs7QUFNTCxJQUFLQyxXQUFaOztXQUFZQSxXO0FBQUFBLGE7QUFBQUEsYTtBQUFBQSxhO0dBQUFBLFcsS0FBQUEsVzs7QUFjWDtBQVFBO0FBRU0sSUFBS0MsVUFBWjs7V0FBWUEsVTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtHQUFBQSxVLEtBQUFBLFU7O0FBV1g7QUFjTSxTQUFTQyxZQUFULEdBQTBDO0FBQy9DLE1BQU1DLFdBQVcsR0FBR0MsdUVBQWdCLEVBQXBDO0FBRUEsU0FBTztBQUNMQyxRQUFJLEVBQUVQLGVBQWUsQ0FBQ1EsWUFEakI7QUFFTEMsZUFBVyxFQUFFLEtBRlI7QUFHTEMsaUJBQWEsRUFBRSxFQUhWO0FBSUxDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUU7QUFESCxLQUpEO0FBT0xDLFdBQU8sRUFBRUMsd0VBQWdCLEVBUHBCO0FBUUxDLGFBQVMsRUFBRSxDQUFFO0FBQUVILFdBQUssRUFBRTtBQUFULEtBQUYsQ0FSTjtBQVNMSSxZQUFRLEVBQUUsT0FUTDtBQVVMQyxnQkFBWSxrQ0FDUFosV0FETztBQUVWO0FBQ0E7QUFDQTtBQUNBYSxtQkFBYSxFQUFFO0FBTEw7QUFWUCxHQUFQO0FBa0JEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lOWI0YjU0OTBhNmQyNWU0MTQ3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCwgV29ybGQgfSBmcm9tICdwcml4LWZpeGUnO1xyXG5pbXBvcnQgeyBMZXhpY29uU3BlYywgU2hvcnRPcmRlcldvcmxkIH0gZnJvbSAnc2hvcnQtb3JkZXInO1xyXG5pbXBvcnQgeyBJbnZlcnRlZEluZGV4IH0gZnJvbSAndG9rZW4tZmxvdyc7XHJcblxyXG5pbXBvcnQgeyBBbGxUZXN0UmVzdWx0cyB9IGZyb20gJy4uL2xvZ2ljJztcclxuXHJcbmltcG9ydCB7IGdldFNhbXBsZUhpc3RvcnkgfSBmcm9tICcuL3NhbXBsZS1oaXN0b3J5JztcclxuaW1wb3J0IHsgbG9hZFNwZWVjaENvbmZpZyB9IGZyb20gJy4vc3BlZWNoLWNvbmZpZyc7XHJcblxyXG5leHBvcnQgZW51bSBBcHBsaWNhdGlvbk1vZGUge1xyXG4gIElOU1RSVUNUSU9OUyA9ICdJTlNUUlVDVElPTlMnLFxyXG4gIE1FTlUgPSAnTUVOVScsXHJcbiAgR1JBUEggPSAnR1JBUEgnLFxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVGV4dFNvdXJjZSB7XHJcbiAgQ09NTUFORCA9ICdDT01NQU5EJyxcclxuICBLRVlCT0FSRCA9ICdLRVlCT0FSRCcsXHJcbiAgTUlDUk9QSE9ORSA9ICdNSUNST1BIT05FJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29ycmVjdG5lc3Mge1xyXG4gIENPUlJFQ1QgPSAnQ09SUkVDVCcsXHJcbiAgSU5DT1JSRUNUID0gJ0lOQ09SUkVDVCcsXHJcbiAgVU5LTk9XTiA9ICdVTktOT1dOJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5SXRlbSB7XHJcbiAgY2FydDogQ2FydDtcclxuICBpZDogbnVtYmVyO1xyXG4gIHNvdXJjZTogVGV4dFNvdXJjZTtcclxuICB0aW1lc3RhbXA6IERhdGU7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcztcclxuICBub3RlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbHVlUGxhdGVXb3JsZCB7XHJcbiAgcHJpeEZpeGVXb3JsZDogV29ybGQ7XHJcbiAgbGV4aWNvblNwZWM6IExleGljb25TcGVjO1xyXG4gIHBvc3RpbmdzOiBJbnZlcnRlZEluZGV4O1xyXG4gIHNob3J0T3JkZXJXb3JsZDogU2hvcnRPcmRlcldvcmxkO1xyXG4gIHRlc3RSZXN1bHRzOiBBbGxUZXN0UmVzdWx0cztcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFNwZWVjaE1vZGUge1xyXG4gIEFaVVJFID0gJ0FaVVJFJyxcclxuICBURVhUID0gJ1RFWFQnLFxyXG4gIFdFQl9TUEVFQ0ggPSAnV0VCX1NQRUVDSCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGVlY2hDb25maWcge1xyXG4gIHNwZWVjaFN1cHBvcnQ6IGJvb2xlYW47XHJcbiAgbW9kZTogU3BlZWNoTW9kZTtcclxuICBhenVyZVN1YnNjcmlwdGlvbktleTogc3RyaW5nO1xyXG4gIGF6dXJlUmVnaW9uOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIG1vZGU6IEFwcGxpY2F0aW9uTW9kZTtcclxuICBpc1JlY29yZGluZzogYm9vbGVhbjtcclxuICB0cmFuc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgY2FydDogQ2FydDtcclxuICBoaXN0b3J5OiBIaXN0b3J5SXRlbVtdO1xyXG4gIHVuZG9TdGFjazogQ2FydFtdO1xyXG4gIGJsdWVQbGF0ZVdvcmxkPzogQmx1ZVBsYXRlV29ybGQ7XHJcbiAgbGFuZ3VhZ2U6IHN0cmluZztcclxuICBzcGVlY2hDb25maWc6IFNwZWVjaENvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxTdGF0ZSgpOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICBjb25zdCBhenVyZUNvbmZpZyA9IGxvYWRTcGVlY2hDb25maWcoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1vZGU6IEFwcGxpY2F0aW9uTW9kZS5JTlNUUlVDVElPTlMsXHJcbiAgICBpc1JlY29yZGluZzogZmFsc2UsXHJcbiAgICB0cmFuc2NyaXB0aW9uOiAnJyxcclxuICAgIGNhcnQ6IHtcclxuICAgICAgaXRlbXM6IFtdXHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeTogZ2V0U2FtcGxlSGlzdG9yeSgpLFxyXG4gICAgdW5kb1N0YWNrOiBbIHsgaXRlbXM6IFtdIH1dLFxyXG4gICAgbGFuZ3VhZ2U6ICdlbi1VUycsXHJcbiAgICBzcGVlY2hDb25maWc6IHtcclxuICAgICAgLi4uYXp1cmVDb25maWcsXHJcbiAgICAgIC8vIEFwcCBib290cyB1cCB3aXRoIHNwZWVjaFN1cHBvcnQgZmFsc2UuXHJcbiAgICAgIC8vIFRoZW4gY2hyb21lRGV0ZWN0U2FnYSBtYXkgY2hhbmdlIHRoZSB2YWx1ZVxyXG4gICAgICAvLyBvbmNlIHRoZSB3aW5kb3cgb2JqZWN0IGlzIGF2YWlsYWJsZS5cclxuICAgICAgc3BlZWNoU3VwcG9ydDogZmFsc2UsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=