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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FwcGxpY2F0aW9uLXN0YXRlLnRzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uTW9kZSIsIlRleHRTb3VyY2UiLCJDb3JyZWN0bmVzcyIsIlNwZWVjaE1vZGUiLCJpbml0aWFsU3RhdGUiLCJhenVyZUNvbmZpZyIsImxvYWRTcGVlY2hDb25maWciLCJtb2RlIiwiSU5TVFJVQ1RJT05TIiwiaXNSZWNvcmRpbmciLCJ0cmFuc2NyaXB0aW9uIiwiY2FydCIsIml0ZW1zIiwiaGlzdG9yeSIsImdldFNhbXBsZUhpc3RvcnkiLCJ1bmRvU3RhY2siLCJsYW5ndWFnZSIsInNwZWVjaENvbmZpZyIsInNwZWVjaFN1cHBvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBRU8sSUFBS0EsZUFBWjs7V0FBWUEsZTtBQUFBQSxpQjtBQUFBQSxpQjtBQUFBQSxpQjtHQUFBQSxlLEtBQUFBLGU7O0FBSVg7QUFFTSxJQUFLQyxVQUFaOztXQUFZQSxVO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0dBQUFBLFUsS0FBQUEsVTs7QUFNTCxJQUFLQyxXQUFaOztXQUFZQSxXO0FBQUFBLGE7QUFBQUEsYTtBQUFBQSxhO0dBQUFBLFcsS0FBQUEsVzs7QUFjWDtBQVFBO0FBRU0sSUFBS0MsVUFBWjs7V0FBWUEsVTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtHQUFBQSxVLEtBQUFBLFU7O0FBWVg7QUFjTSxTQUFTQyxZQUFULEdBQTBDO0FBQy9DLE1BQU1DLFdBQVcsR0FBR0MsdUVBQWdCLEVBQXBDO0FBRUEsU0FBTztBQUNMQyxRQUFJLEVBQUVQLGVBQWUsQ0FBQ1EsWUFEakI7QUFFTEMsZUFBVyxFQUFFLEtBRlI7QUFHTEMsaUJBQWEsRUFBRSxFQUhWO0FBSUxDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUU7QUFESCxLQUpEO0FBT0xDLFdBQU8sRUFBRUMsd0VBQWdCLEVBUHBCO0FBUUxDLGFBQVMsRUFBRSxDQUFFO0FBQUVILFdBQUssRUFBRTtBQUFULEtBQUYsQ0FSTjtBQVNMSSxZQUFRLEVBQUUsT0FUTDtBQVVMQyxnQkFBWSxrQ0FDUFosV0FETztBQUVWYSxtQkFBYSxFQUFFO0FBRkw7QUFWUCxHQUFQO0FBZUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ1MWQ5YTU1MzYxNmU3NGJjZGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0LCBXb3JsZCB9IGZyb20gJ3ByaXgtZml4ZSc7XHJcbmltcG9ydCB7IExleGljb25TcGVjLCBTaG9ydE9yZGVyV29ybGQgfSBmcm9tICdzaG9ydC1vcmRlcic7XHJcbmltcG9ydCB7IEludmVydGVkSW5kZXggfSBmcm9tICd0b2tlbi1mbG93JztcclxuXHJcbmltcG9ydCB7IEFsbFRlc3RSZXN1bHRzIH0gZnJvbSAnLi4vbG9naWMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0U2FtcGxlSGlzdG9yeSB9IGZyb20gJy4vc2FtcGxlLWhpc3RvcnknO1xyXG5pbXBvcnQgeyBsb2FkU3BlZWNoQ29uZmlnIH0gZnJvbSAnLi9zcGVlY2gtY29uZmlnJztcclxuXHJcbmV4cG9ydCBlbnVtIEFwcGxpY2F0aW9uTW9kZSB7XHJcbiAgSU5TVFJVQ1RJT05TID0gJ0lOU1RSVUNUSU9OUycsXHJcbiAgTUVOVSA9ICdNRU5VJyxcclxuICBHUkFQSCA9ICdHUkFQSCcsXHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBUZXh0U291cmNlIHtcclxuICBDT01NQU5EID0gJ0NPTU1BTkQnLFxyXG4gIEtFWUJPQVJEID0gJ0tFWUJPQVJEJyxcclxuICBNSUNST1BIT05FID0gJ01JQ1JPUEhPTkUnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb3JyZWN0bmVzcyB7XHJcbiAgQ09SUkVDVCA9ICdDT1JSRUNUJyxcclxuICBJTkNPUlJFQ1QgPSAnSU5DT1JSRUNUJyxcclxuICBVTktOT1dOID0gJ1VOS05PV04nLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlJdGVtIHtcclxuICBjYXJ0OiBDYXJ0O1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgc291cmNlOiBUZXh0U291cmNlO1xyXG4gIHRpbWVzdGFtcDogRGF0ZTtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzO1xyXG4gIG5vdGU/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsdWVQbGF0ZVdvcmxkIHtcclxuICBwcml4Rml4ZVdvcmxkOiBXb3JsZDtcclxuICBsZXhpY29uU3BlYzogTGV4aWNvblNwZWM7XHJcbiAgcG9zdGluZ3M6IEludmVydGVkSW5kZXg7XHJcbiAgc2hvcnRPcmRlcldvcmxkOiBTaG9ydE9yZGVyV29ybGQ7XHJcbiAgdGVzdFJlc3VsdHM6IEFsbFRlc3RSZXN1bHRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gU3BlZWNoTW9kZSB7XHJcbiAgQVpVUkUgPSAnQVpVUkUnLFxyXG4gIFRFWFQgPSAnVEVYVCcsXHJcbiAgV0VCX1NQRUVDSCA9ICdXRUJfU1BFRUNIJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwZWVjaENvbmZpZyB7XHJcbiAgc3BlZWNoU3VwcG9ydDogYm9vbGVhbjtcclxuICBtb2RlOiBTcGVlY2hNb2RlO1xyXG4gIC8vIHVzZUF6dXJlU3BlZWNoOiBib29sZWFuO1xyXG4gIGF6dXJlU3Vic2NyaXB0aW9uS2V5OiBzdHJpbmc7XHJcbiAgYXp1cmVSZWdpb246IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgbW9kZTogQXBwbGljYXRpb25Nb2RlO1xyXG4gIGlzUmVjb3JkaW5nOiBib29sZWFuO1xyXG4gIHRyYW5zY3JpcHRpb246IHN0cmluZztcclxuICBjYXJ0OiBDYXJ0O1xyXG4gIGhpc3Rvcnk6IEhpc3RvcnlJdGVtW107XHJcbiAgdW5kb1N0YWNrOiBDYXJ0W107XHJcbiAgYmx1ZVBsYXRlV29ybGQ/OiBCbHVlUGxhdGVXb3JsZDtcclxuICBsYW5ndWFnZTogc3RyaW5nO1xyXG4gIHNwZWVjaENvbmZpZzogU3BlZWNoQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFN0YXRlKCk6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIGNvbnN0IGF6dXJlQ29uZmlnID0gbG9hZFNwZWVjaENvbmZpZygpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbW9kZTogQXBwbGljYXRpb25Nb2RlLklOU1RSVUNUSU9OUyxcclxuICAgIGlzUmVjb3JkaW5nOiBmYWxzZSxcclxuICAgIHRyYW5zY3JpcHRpb246ICcnLFxyXG4gICAgY2FydDoge1xyXG4gICAgICBpdGVtczogW11cclxuICAgIH0sXHJcbiAgICBoaXN0b3J5OiBnZXRTYW1wbGVIaXN0b3J5KCksXHJcbiAgICB1bmRvU3RhY2s6IFsgeyBpdGVtczogW10gfV0sXHJcbiAgICBsYW5ndWFnZTogJ2VuLVVTJyxcclxuICAgIHNwZWVjaENvbmZpZzoge1xyXG4gICAgICAuLi5henVyZUNvbmZpZyxcclxuICAgICAgc3BlZWNoU3VwcG9ydDogZmFsc2UsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=