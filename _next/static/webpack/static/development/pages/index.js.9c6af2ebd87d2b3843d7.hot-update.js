webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/actions.ts":
/*!****************************!*\
  !*** ./actions/actions.ts ***!
  \****************************/
/*! exports provided: ActionType, appendHistory, chromeDetect, clearCart, clearHistory, loadWorld, process, record, reset, setCart, setMode, setWorld, setSpeechConfig, setSpeechSupport, undo, updateHistoryItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendHistory", function() { return appendHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chromeDetect", function() { return chromeDetect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHistory", function() { return clearHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWorld", function() { return loadWorld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "record", function() { return record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCart", function() { return setCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMode", function() { return setMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWorld", function() { return setWorld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSpeechConfig", function() { return setSpeechConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSpeechSupport", function() { return setSpeechSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return undo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistoryItem", function() { return updateHistoryItem; });
var ActionType;

(function (ActionType) {
  ActionType["APPEND_HISTORY"] = "APPEND_HISTORY";
  ActionType["CHROME_DETECT"] = "CHROME_DETECT";
  ActionType["CLEAR_CART"] = "CLEAR_CART";
  ActionType["CLEAR_HISTORY"] = "CLEAR_HISTORY";
  ActionType["LOAD_WORLD"] = "LOAD_WORLD";
  ActionType["PROCESS"] = "PROCESS";
  ActionType["RECORD"] = "RECORD";
  ActionType["RESET"] = "RESET";
  ActionType["SET_CART"] = "SET_CART";
  ActionType["SET_MODE"] = "SET_MODE";
  ActionType["SET_SPEECH_CONFIG"] = "SET_SPEECH_CONFIG";
  ActionType["SET_SPEECH_SUPPORT"] = "SET_SPEECH_SUPPORT";
  ActionType["SET_WORLD"] = "SET_WORLD";
  ActionType["UNDO"] = "UNDO";
  ActionType["UPDATE_HISTORY_ITEM"] = "UPDATE_HISTORY";
})(ActionType || (ActionType = {}));

;
;
function appendHistory(cart, source, text) {
  return {
    type: ActionType.APPEND_HISTORY,
    cart: cart,
    source: source,
    text: text
  };
}
;
function chromeDetect() {
  return {
    type: ActionType.CHROME_DETECT
  };
}
;
function clearCart() {
  return {
    type: ActionType.CLEAR_CART
  };
}
;
function clearHistory() {
  return {
    type: ActionType.CLEAR_HISTORY
  };
}
;
function loadWorld(language) {
  return {
    type: ActionType.LOAD_WORLD,
    language: language
  };
}
;
function process(source, text, _final) {
  return {
    source: source,
    type: ActionType.PROCESS,
    text: text,
    "final": _final
  };
}
;
function record(isRecording) {
  return {
    type: ActionType.RECORD,
    isRecording: isRecording
  };
}
;
function reset() {
  return {
    type: ActionType.RESET
  };
}
;
function setCart(cart) {
  return {
    type: ActionType.SET_CART,
    cart: cart
  };
}
;
function setMode(mode) {
  return {
    type: ActionType.SET_MODE,
    mode: mode
  };
}
;
function setWorld(bluePlateWorld, history, language) {
  console.log('setWorld');
  return {
    type: ActionType.SET_WORLD,
    bluePlateWorld: bluePlateWorld,
    history: history,
    language: language
  };
}
;
function setSpeechConfig(speechConfig) {
  return {
    type: ActionType.SET_SPEECH_CONFIG,
    speechConfig: speechConfig
  };
}
;
function setSpeechSupport(speechSupport) {
  return {
    type: ActionType.SET_SPEECH_SUPPORT,
    speechSupport: speechSupport
  };
}
;
function undo() {
  return {
    type: ActionType.UNDO
  };
}
;
function updateHistoryItem(id, changes) {
  return {
    type: ActionType.UPDATE_HISTORY_ITEM,
    id: id,
    changes: changes
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

/***/ }),

/***/ "./actions/index.ts":
/*!**************************!*\
  !*** ./actions/index.ts ***!
  \**************************/
/*! exports provided: ActionType, appendHistory, chromeDetect, clearCart, clearHistory, loadWorld, process, record, reset, setCart, setMode, setWorld, setSpeechConfig, setSpeechSupport, undo, updateHistoryItem, ApplicationMode, TextSource, Correctness, SpeechMode, initialState, ApplicationStateReducer, historyIds, chromeDetectSaga, loadWorldSaga, processSaga, loadSpeechConfig, saveSpeechConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./actions/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendHistory", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["appendHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chromeDetect", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["chromeDetect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["clearCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearHistory", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["clearHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadWorld", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["loadWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "process", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["process"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["record"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["reset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMode", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWorld", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSpeechConfig", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setSpeechConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSpeechSupport", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setSpeechSupport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["undo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateHistoryItem", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["updateHistoryItem"]; });

/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-state */ "./actions/application-state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMode", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["ApplicationMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextSource", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["TextSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Correctness", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["Correctness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechMode", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["SpeechMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./actions/reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationStateReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "historyIds", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["historyIds"]; });

/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./actions/sagas.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chromeDetectSaga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_3__["chromeDetectSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadWorldSaga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_3__["loadWorldSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processSaga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_3__["processSaga"]; });

/* harmony import */ var _speech_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speech-config */ "./actions/speech-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSpeechConfig", function() { return _speech_config__WEBPACK_IMPORTED_MODULE_4__["loadSpeechConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSpeechConfig", function() { return _speech_config__WEBPACK_IMPORTED_MODULE_4__["saveSpeechConfig"]; });







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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6WyJBY3Rpb25UeXBlIiwiYXBwZW5kSGlzdG9yeSIsImNhcnQiLCJzb3VyY2UiLCJ0ZXh0IiwidHlwZSIsIkFQUEVORF9ISVNUT1JZIiwiY2hyb21lRGV0ZWN0IiwiQ0hST01FX0RFVEVDVCIsImNsZWFyQ2FydCIsIkNMRUFSX0NBUlQiLCJjbGVhckhpc3RvcnkiLCJDTEVBUl9ISVNUT1JZIiwibG9hZFdvcmxkIiwibGFuZ3VhZ2UiLCJMT0FEX1dPUkxEIiwicHJvY2VzcyIsImZpbmFsIiwiUFJPQ0VTUyIsInJlY29yZCIsImlzUmVjb3JkaW5nIiwiUkVDT1JEIiwicmVzZXQiLCJSRVNFVCIsInNldENhcnQiLCJTRVRfQ0FSVCIsInNldE1vZGUiLCJtb2RlIiwiU0VUX01PREUiLCJzZXRXb3JsZCIsImJsdWVQbGF0ZVdvcmxkIiwiaGlzdG9yeSIsImNvbnNvbGUiLCJsb2ciLCJTRVRfV09STEQiLCJzZXRTcGVlY2hDb25maWciLCJzcGVlY2hDb25maWciLCJTRVRfU1BFRUNIX0NPTkZJRyIsInNldFNwZWVjaFN1cHBvcnQiLCJzcGVlY2hTdXBwb3J0IiwiU0VUX1NQRUVDSF9TVVBQT1JUIiwidW5kbyIsIlVORE8iLCJ1cGRhdGVIaXN0b3J5SXRlbSIsImlkIiwiY2hhbmdlcyIsIlVQREFURV9ISVNUT1JZX0lURU0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBS0EsVUFBWjs7V0FBWUEsVTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtB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SyxFQUdvQjtBQUN6QixTQUFPO0FBQ0x4QyxRQUFJLEVBQUVMLFVBQVUsQ0FBQzhDLG1CQURaO0FBRUxGLE1BQUUsRUFBRkEsRUFGSztBQUdMQyxXQUFPLEVBQVBBO0FBSEssR0FBUDtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjljNmFmMmViZDg3ZDJiMzg0M2Q3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0IH0gZnJvbSAncHJpeC1maXhlJztcclxuXHJcbmltcG9ydCB7XHJcbiBBcHBsaWNhdGlvbk1vZGUsXHJcbiBCbHVlUGxhdGVXb3JsZCxcclxuIEhpc3RvcnlJdGVtLFxyXG4gU3BlZWNoQ29uZmlnLFxyXG4gVGV4dFNvdXJjZVxyXG59IGZyb20gXCIuL2FwcGxpY2F0aW9uLXN0YXRlXCI7XHJcblxyXG5leHBvcnQgZW51bSBBY3Rpb25UeXBlIHtcclxuICBBUFBFTkRfSElTVE9SWSA9ICdBUFBFTkRfSElTVE9SWScsXHJcbiAgQ0hST01FX0RFVEVDVCA9ICdDSFJPTUVfREVURUNUJyxcclxuICBDTEVBUl9DQVJUID0gJ0NMRUFSX0NBUlQnLFxyXG4gIENMRUFSX0hJU1RPUlkgPSAnQ0xFQVJfSElTVE9SWScsXHJcbiAgTE9BRF9XT1JMRCA9ICdMT0FEX1dPUkxEJyxcclxuICBQUk9DRVNTID0gJ1BST0NFU1MnLFxyXG4gIFJFQ09SRCA9ICdSRUNPUkQnLFxyXG4gIFJFU0VUID0gJ1JFU0VUJyxcclxuICBTRVRfQ0FSVCA9ICdTRVRfQ0FSVCcsXHJcbiAgU0VUX01PREUgPSAnU0VUX01PREUnLFxyXG4gIFNFVF9TUEVFQ0hfQ09ORklHID0gJ1NFVF9TUEVFQ0hfQ09ORklHJyxcclxuICBTRVRfU1BFRUNIX1NVUFBPUlQgPSAnU0VUX1NQRUVDSF9TVVBQT1JUJyxcclxuICBTRVRfV09STEQgPSAnU0VUX1dPUkxEJyxcclxuICBVTkRPID0gJ1VORE8nLFxyXG4gIFVQREFURV9ISVNUT1JZX0lURU0gPSAnVVBEQVRFX0hJU1RPUlknXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGVuZEhpc3RvcnlBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuQVBQRU5EX0hJU1RPUlk7XHJcbiAgY2FydDogQ2FydDtcclxuICBzb3VyY2U6IFRleHRTb3VyY2UsXHJcbiAgdGV4dDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEhpc3RvcnkoXHJcbiAgY2FydDogQ2FydCxcclxuICBzb3VyY2U6IFRleHRTb3VyY2UsXHJcbiAgdGV4dDogc3RyaW5nXHJcbik6IEFwcGVuZEhpc3RvcnlBY3Rpb24ge1xyXG4gIHJldHVybiB7IFxyXG4gICAgdHlwZTogQWN0aW9uVHlwZS5BUFBFTkRfSElTVE9SWSxcclxuICAgIGNhcnQsXHJcbiAgICBzb3VyY2UsXHJcbiAgICB0ZXh0XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaHJvbWVEZXRlY3RBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuQ0hST01FX0RFVEVDVDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaHJvbWVEZXRlY3QoKTogQ2hyb21lRGV0ZWN0QWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLkNIUk9NRV9ERVRFQ1QgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbGVhckNhcnRBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuQ0xFQVJfQ0FSVDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNhcnQoKTogQ2xlYXJDYXJ0QWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLkNMRUFSX0NBUlQgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbGVhckhpc3RvcnlBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuQ0xFQVJfSElTVE9SWTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckhpc3RvcnkoKTogQ2xlYXJIaXN0b3J5QWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLkNMRUFSX0hJU1RPUlkgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2FkV29ybGRBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuTE9BRF9XT1JMRDtcclxuICBsYW5ndWFnZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXb3JsZChsYW5ndWFnZTogc3RyaW5nKTogTG9hZFdvcmxkQWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLkxPQURfV09STEQsIGxhbmd1YWdlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc0FjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5QUk9DRVNTO1xyXG4gIHNvdXJjZTogVGV4dFNvdXJjZSxcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgZmluYWw6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VzcyhcclxuICBzb3VyY2U6IFRleHRTb3VyY2UsXHJcbiAgdGV4dDogc3RyaW5nLFxyXG4gIGZpbmFsOiBib29sZWFuXHJcbik6IFByb2Nlc3NBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzb3VyY2UsXHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlLlBST0NFU1MsXHJcbiAgICB0ZXh0LFxyXG4gICAgZmluYWxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29yZEFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5SRUNPUkQ7XHJcbiAgaXNSZWNvcmRpbmc6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkKGlzUmVjb3JkaW5nOiBib29sZWFuKTogUmVjb3JkQWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLlJFQ09SRCwgaXNSZWNvcmRpbmcgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXNldEFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5SRVNFVDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiBSZXNldEFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5SRVNFVCB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldENhcnRBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuU0VUX0NBUlQ7XHJcbiAgY2FydDogQ2FydDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDYXJ0KGNhcnQ6IENhcnQpOiBTZXRDYXJ0QWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLlNFVF9DQVJULCBjYXJ0IH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0TW9kZUFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5TRVRfTU9ERTtcclxuICBtb2RlOiBBcHBsaWNhdGlvbk1vZGU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TW9kZShtb2RlOiBBcHBsaWNhdGlvbk1vZGUpOiBTZXRNb2RlQWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLlNFVF9NT0RFLCBtb2RlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0V29ybGRBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuU0VUX1dPUkxEO1xyXG4gIGJsdWVQbGF0ZVdvcmxkOiBCbHVlUGxhdGVXb3JsZDtcclxuICBoaXN0b3J5OiBIaXN0b3J5SXRlbVtdO1xyXG4gIGxhbmd1YWdlOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0V29ybGQoXHJcbiAgYmx1ZVBsYXRlV29ybGQ6IEJsdWVQbGF0ZVdvcmxkLFxyXG4gIGhpc3Rvcnk6IEhpc3RvcnlJdGVtW10sXHJcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xyXG4pOiBTZXRXb3JsZEFjdGlvbiB7XHJcbiAgY29uc29sZS5sb2coJ3NldFdvcmxkJyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1dPUkxELFxyXG4gICAgYmx1ZVBsYXRlV29ybGQsXHJcbiAgICBoaXN0b3J5LFxyXG4gICAgbGFuZ3VhZ2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRTcGVlY2hDb25maWdBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuU0VUX1NQRUVDSF9DT05GSUc7XHJcbiAgc3BlZWNoQ29uZmlnOiBQYXJ0aWFsPFNwZWVjaENvbmZpZz47XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3BlZWNoQ29uZmlnKFxyXG4gIHNwZWVjaENvbmZpZzogUGFydGlhbDxTcGVlY2hDb25maWc+XHJcbik6IFNldFNwZWVjaENvbmZpZ0FjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5TRVRfU1BFRUNIX0NPTkZJRywgc3BlZWNoQ29uZmlnIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0U3BlZWNoU3VwcG9ydEFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5TRVRfU1BFRUNIX1NVUFBPUlQ7XHJcbiAgc3BlZWNoU3VwcG9ydDogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTcGVlY2hTdXBwb3J0KHNwZWVjaFN1cHBvcnQ6IGJvb2xlYW4pOiBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLlNFVF9TUEVFQ0hfU1VQUE9SVCwgc3BlZWNoU3VwcG9ydCB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVuZG9BY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuVU5ETztcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmRvKCk6IFVuZG9BY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlLlVORE8sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVIaXN0b3J5SXRlbUFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5VUERBVEVfSElTVE9SWV9JVEVNO1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgY2hhbmdlczogUGFydGlhbDxIaXN0b3J5SXRlbT47XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSGlzdG9yeUl0ZW0oXHJcbiAgaWQ6IG51bWJlcixcclxuICBjaGFuZ2VzOiBQYXJ0aWFsPEhpc3RvcnlJdGVtPlxyXG4pOiBVcGRhdGVIaXN0b3J5SXRlbUFjdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFjdGlvblR5cGUuVVBEQVRFX0hJU1RPUllfSVRFTSxcclxuICAgIGlkLFxyXG4gICAgY2hhbmdlc1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFueUFjdGlvbiA9XHJcbiAgQXBwZW5kSGlzdG9yeUFjdGlvbiB8XHJcbiAgQ2hyb21lRGV0ZWN0QWN0aW9uIHxcclxuICBDbGVhckNhcnRBY3Rpb24gfFxyXG4gIENsZWFySGlzdG9yeUFjdGlvbiB8XHJcbiAgTG9hZFdvcmxkQWN0aW9uIHxcclxuICBQcm9jZXNzQWN0aW9uIHxcclxuICBSZWNvcmRBY3Rpb24gfFxyXG4gIFJlc2V0QWN0aW9uIHxcclxuICBTZXRDYXJ0QWN0aW9uIHxcclxuICBTZXRNb2RlQWN0aW9uIHxcclxuICBTZXRXb3JsZEFjdGlvbiB8XHJcbiAgU2V0U3BlZWNoQ29uZmlnQWN0aW9uIHxcclxuICBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uIHxcclxuICBVbmRvQWN0aW9uIHxcclxuICBVcGRhdGVIaXN0b3J5SXRlbUFjdGlvbjtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9hY3Rpb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9hcHBsaWNhdGlvbi1zdGF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVkdWNlcnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NhZ2FzJztcclxuZXhwb3J0ICogZnJvbSAnLi9zcGVlY2gtY29uZmlnJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==