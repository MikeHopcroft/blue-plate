webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/actions.ts":
/*!****************************!*\
  !*** ./actions/actions.ts ***!
  \****************************/
/*! exports provided: ActionType, appendHistory, clearHistory, loadWorld, process, record, reset, setCart, setMode, setOptionPID, setPID, setWorld, setSpeechSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendHistory", function() { return appendHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHistory", function() { return clearHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWorld", function() { return loadWorld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "record", function() { return record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCart", function() { return setCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMode", function() { return setMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptionPID", function() { return setOptionPID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPID", function() { return setPID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWorld", function() { return setWorld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSpeechSupport", function() { return setSpeechSupport; });
var ActionType;

(function (ActionType) {
  ActionType["APPEND_HISTORY"] = "APPEND_HISTORY";
  ActionType["CLEAR_HISTORY"] = "CLEAR_HISTORY";
  ActionType["LOAD_WORLD"] = "LOAD_WORLD";
  ActionType["PROCESS"] = "PROCESS";
  ActionType["RECORD"] = "RECORD";
  ActionType["RESET"] = "RESET";
  ActionType["SET_CART"] = "SET_CART";
  ActionType["SET_MODE"] = "SET_MODE";
  ActionType["SET_OPTION_PID"] = "SET_OPTION_PID";
  ActionType["SET_PID"] = "SET_PID";
  ActionType["SET_SPEECH_SUPPORT"] = "SET_SPEECH_SUPPORT";
  ActionType["SET_WORLD"] = "SET_WORLD";
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
function clearHistory() {
  return {
    type: ActionType.CLEAR_HISTORY
  };
}
;
function loadWorld() {
  return {
    type: ActionType.LOAD_WORLD
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
function setOptionPID(pid) {
  return {
    type: ActionType.SET_OPTION_PID,
    pid: pid
  };
}
;
function setPID(pid) {
  return {
    type: ActionType.SET_PID,
    pid: pid
  };
}
;
function setWorld(world, shortOrderWorld, lexiconSpec) {
  return {
    type: ActionType.SET_WORLD,
    world: world,
    shortOrderWorld: shortOrderWorld,
    lexiconSpec: lexiconSpec
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
/*! exports provided: ActionType, appendHistory, clearHistory, loadWorld, process, record, reset, setCart, setMode, setOptionPID, setPID, setWorld, setSpeechSupport, ApplicationMode, TextSource, Correctness, initialState, ApplicationStateReducer, loadWorldSaga, processSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./actions/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendHistory", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["appendHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearHistory", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["clearHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadWorld", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["loadWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "process", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["process"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["record"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["reset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMode", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setOptionPID", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setOptionPID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPID", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setPID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWorld", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSpeechSupport", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setSpeechSupport"]; });

/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-state */ "./actions/application-state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMode", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["ApplicationMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextSource", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["TextSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Correctness", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["Correctness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./actions/reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationStateReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateReducer"]; });

/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./actions/sagas.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadWorldSaga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_3__["loadWorldSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processSaga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_3__["processSaga"]; });






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6WyJBY3Rpb25UeXBlIiwiYXBwZW5kSGlzdG9yeSIsImNhcnQiLCJzb3VyY2UiLCJ0ZXh0IiwidHlwZSIsIkFQUEVORF9ISVNUT1JZIiwiY2xlYXJIaXN0b3J5IiwiQ0xFQVJfSElTVE9SWSIsImxvYWRXb3JsZCIsIkxPQURfV09STEQiLCJwcm9jZXNzIiwiZmluYWwiLCJQUk9DRVNTIiwicmVjb3JkIiwiaXNSZWNvcmRpbmciLCJSRUNPUkQiLCJyZXNldCIsIlJFU0VUIiwic2V0Q2FydCIsIlNFVF9DQVJUIiwic2V0TW9kZSIsIm1vZGUiLCJTRVRfTU9ERSIsInNldE9wdGlvblBJRCIsInBpZCIsIlNFVF9PUFRJT05fUElEIiwic2V0UElEIiwiU0VUX1BJRCIsInNldFdvcmxkIiwid29ybGQiLCJzaG9ydE9yZGVyV29ybGQiLCJsZXhpY29uU3BlYyIsIlNFVF9XT1JMRCIsInNldFNwZWVjaFN1cHBvcnQiLCJzcGVlY2hTdXBwb3J0IiwiU0VUX1NQRUVDSF9TVVBQT1JUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQUtBLFVBQVo7O1dBQVlBLFU7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7R0FBQUEsVSxLQUFBQSxVOztBQWFYO0FBT0E7QUFFTSxTQUFTQyxhQUFULENBQ0xDLElBREssRUFFTEMsTUFGSyxFQUdMQyxJQUhLLEVBSWdCO0FBQ3JCLFNBQU87QUFDTEMsUUFBSSxFQUFFTCxVQUFVLENBQUNNLGNBRFo7QUFFTEosUUFBSSxFQUFKQSxJQUZLO0FBR0xDLFVBQU0sRUFBTkEsTUFISztBQUlMQyxRQUFJLEVBQUpBO0FBSkssR0FBUDtBQU1EO0FBSUE7QUFFTSxTQUFTRyxZQUFULEdBQTRDO0FBQ2pELFNBQU87QUFBRUYsUUFBSSxFQUFFTCxVQUFVLENBQUNRO0FBQW5CLEdBQVA7QUFDRDtBQUlBO0FBRU0sU0FBU0MsU0FBVCxHQUFzQztBQUMzQyxTQUFPO0FBQUVKLFFBQUksRUFBRUwsVUFBVSxDQUFDVTtBQUFuQixHQUFQO0FBQ0Q7QUFPQTtBQUVNLFNBQVNDLE9BQVQsQ0FBaUJSLE1BQWpCLEVBQXFDQyxJQUFyQyxFQUFtRFEsTUFBbkQsRUFBa0Y7QUFDdkYsU0FBTztBQUNMVCxVQUFNLEVBQU5BLE1BREs7QUFFTEUsUUFBSSxFQUFFTCxVQUFVLENBQUNhLE9BRlo7QUFHTFQsUUFBSSxFQUFKQSxJQUhLO0FBSUwsYUFBQVE7QUFKSyxHQUFQO0FBTUQ7QUFLQTtBQUVNLFNBQVNFLE1BQVQsQ0FBZ0JDLFdBQWhCLEVBQW9EO0FBQ3pELFNBQU87QUFBRVYsUUFBSSxFQUFFTCxVQUFVLENBQUNnQixNQUFuQjtBQUEyQkQsZUFBVyxFQUFYQTtBQUEzQixHQUFQO0FBQ0Q7QUFJQTtBQUVNLFNBQVNFLEtBQVQsR0FBOEI7QUFDbkMsU0FBTztBQUFFWixRQUFJLEVBQUVMLFVBQVUsQ0FBQ2tCO0FBQW5CLEdBQVA7QUFDRDtBQUtBO0FBRU0sU0FBU0MsT0FBVCxDQUFpQmpCLElBQWpCLEVBQTRDO0FBQ2pELFNBQU87QUFBRUcsUUFBSSxFQUFFTCxVQUFVLENBQUNvQixRQUFuQjtBQUE2QmxCLFFBQUksRUFBSkE7QUFBN0IsR0FBUDtBQUNEO0FBS0E7QUFFTSxTQUFTbUIsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUQ7QUFDNUQsU0FBTztBQUFFakIsUUFBSSxFQUFFTCxVQUFVLENBQUN1QixRQUFuQjtBQUE2QkQsUUFBSSxFQUFKQTtBQUE3QixHQUFQO0FBQ0Q7QUFLQTtBQUVNLFNBQVNFLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQW9EO0FBQ3pELFNBQU87QUFBRXBCLFFBQUksRUFBRUwsVUFBVSxDQUFDMEIsY0FBbkI7QUFBbUNELE9BQUcsRUFBSEE7QUFBbkMsR0FBUDtBQUNEO0FBS0E7QUFFTSxTQUFTRSxNQUFULENBQWdCRixHQUFoQixFQUF3QztBQUM3QyxTQUFPO0FBQUVwQixRQUFJLEVBQUVMLFVBQVUsQ0FBQzRCLE9BQW5CO0FBQTRCSCxPQUFHLEVBQUhBO0FBQTVCLEdBQVA7QUFDRDtBQU9BO0FBRU0sU0FBU0ksUUFBVCxDQUNMQyxLQURLLEVBRUxDLGVBRkssRUFHTEMsV0FISyxFQUlXO0FBQ2hCLFNBQU87QUFDTDNCLFFBQUksRUFBRUwsVUFBVSxDQUFDaUMsU0FEWjtBQUVMSCxTQUFLLEVBQUxBLEtBRks7QUFHTEMsbUJBQWUsRUFBZkEsZUFISztBQUlMQyxlQUFXLEVBQVhBO0FBSkssR0FBUDtBQU1EO0FBS0E7QUFFTSxTQUFTRSxnQkFBVCxDQUEwQkMsYUFBMUIsRUFBMEU7QUFDL0UsU0FBTztBQUFFOUIsUUFBSSxFQUFFTCxVQUFVLENBQUNvQyxrQkFBbkI7QUFBdUNELGlCQUFhLEVBQWJBO0FBQXZDLEdBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zMWFlZGY2MWU0ZmZlZGU5Nzk0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCwgUElELCBXb3JsZCB9IGZyb20gJ3ByaXgtZml4ZSc7XHJcbmltcG9ydCB7IExleGljb25TcGVjLCBTaG9ydE9yZGVyV29ybGQgfSBmcm9tICdzaG9ydC1vcmRlcic7XHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbk1vZGUsIFRleHRTb3VyY2UgfSBmcm9tIFwiLi9hcHBsaWNhdGlvbi1zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XHJcbiAgQVBQRU5EX0hJU1RPUlkgPSAnQVBQRU5EX0hJU1RPUlknLFxyXG4gIENMRUFSX0hJU1RPUlkgPSAnQ0xFQVJfSElTVE9SWScsXHJcbiAgTE9BRF9XT1JMRCA9ICdMT0FEX1dPUkxEJyxcclxuICBQUk9DRVNTID0gJ1BST0NFU1MnLFxyXG4gIFJFQ09SRCA9ICdSRUNPUkQnLFxyXG4gIFJFU0VUID0gJ1JFU0VUJyxcclxuICBTRVRfQ0FSVCA9ICdTRVRfQ0FSVCcsXHJcbiAgU0VUX01PREUgPSAnU0VUX01PREUnLFxyXG4gIFNFVF9PUFRJT05fUElEID0gJ1NFVF9PUFRJT05fUElEJyxcclxuICBTRVRfUElEID0gJ1NFVF9QSUQnLFxyXG4gIFNFVF9TUEVFQ0hfU1VQUE9SVCA9ICdTRVRfU1BFRUNIX1NVUFBPUlQnLFxyXG4gIFNFVF9XT1JMRCA9ICdTRVRfV09STEQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBlbmRIaXN0b3J5QWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLkFQUEVORF9ISVNUT1JZO1xyXG4gIGNhcnQ6IENhcnQ7XHJcbiAgc291cmNlOiBUZXh0U291cmNlLFxyXG4gIHRleHQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRIaXN0b3J5KFxyXG4gIGNhcnQ6IENhcnQsXHJcbiAgc291cmNlOiBUZXh0U291cmNlLFxyXG4gIHRleHQ6IHN0cmluZ1xyXG4pOiBBcHBlbmRIaXN0b3J5QWN0aW9uIHtcclxuICByZXR1cm4geyBcclxuICAgIHR5cGU6IEFjdGlvblR5cGUuQVBQRU5EX0hJU1RPUlksXHJcbiAgICBjYXJ0LFxyXG4gICAgc291cmNlLFxyXG4gICAgdGV4dFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJIaXN0b3J5QWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLkNMRUFSX0hJU1RPUlk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJIaXN0b3J5KCk6IENsZWFySGlzdG9yeUFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5DTEVBUl9ISVNUT1JZIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9hZFdvcmxkQWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLkxPQURfV09STEQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdvcmxkKCk6IExvYWRXb3JsZEFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5MT0FEX1dPUkxEIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc0FjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5QUk9DRVNTO1xyXG4gIHNvdXJjZTogVGV4dFNvdXJjZSxcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgZmluYWw6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzcyhzb3VyY2U6IFRleHRTb3VyY2UsIHRleHQ6IHN0cmluZywgZmluYWw6IGJvb2xlYW4pOiBQcm9jZXNzQWN0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgc291cmNlLFxyXG4gICAgdHlwZTogQWN0aW9uVHlwZS5QUk9DRVNTLFxyXG4gICAgdGV4dCxcclxuICAgIGZpbmFsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuUkVDT1JEO1xyXG4gIGlzUmVjb3JkaW5nOiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZChpc1JlY29yZGluZzogYm9vbGVhbik6IFJlY29yZEFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5SRUNPUkQsIGlzUmVjb3JkaW5nIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzZXRBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuUkVTRVQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKTogUmVzZXRBY3Rpb24ge1xyXG4gIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGUuUkVTRVQgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRDYXJ0QWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9DQVJUO1xyXG4gIGNhcnQ6IENhcnQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FydChjYXJ0OiBDYXJ0KTogU2V0Q2FydEFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5TRVRfQ0FSVCwgY2FydCB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldE1vZGVBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuU0VUX01PREU7XHJcbiAgbW9kZTogQXBwbGljYXRpb25Nb2RlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vZGUobW9kZTogQXBwbGljYXRpb25Nb2RlKTogU2V0TW9kZUFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5TRVRfTU9ERSwgbW9kZSB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldE9wdGlvblBJREFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5TRVRfT1BUSU9OX1BJRDtcclxuICBwaWQ6IFBJRDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPcHRpb25QSUQocGlkOiBQSUQpOiBTZXRPcHRpb25QSURBY3Rpb24ge1xyXG4gIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGUuU0VUX09QVElPTl9QSUQsIHBpZCB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldFBJREFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5TRVRfUElEO1xyXG4gIHBpZDogUElEO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBJRChwaWQ6IFBJRCk6IFNldFBJREFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5TRVRfUElELCBwaWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRXb3JsZEFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5TRVRfV09STEQ7XHJcbiAgd29ybGQ6IFdvcmxkO1xyXG4gIHNob3J0T3JkZXJXb3JsZDogU2hvcnRPcmRlcldvcmxkO1xyXG4gIGxleGljb25TcGVjOiBMZXhpY29uU3BlYztcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRXb3JsZChcclxuICB3b3JsZDogV29ybGQsXHJcbiAgc2hvcnRPcmRlcldvcmxkOiBTaG9ydE9yZGVyV29ybGQsXHJcbiAgbGV4aWNvblNwZWM6IExleGljb25TcGVjXHJcbik6IFNldFdvcmxkQWN0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZS5TRVRfV09STEQsXHJcbiAgICB3b3JsZCxcclxuICAgIHNob3J0T3JkZXJXb3JsZCxcclxuICAgIGxleGljb25TcGVjLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0U3BlZWNoU3VwcG9ydEFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5TRVRfU1BFRUNIX1NVUFBPUlQ7XHJcbiAgc3BlZWNoU3VwcG9ydDogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTcGVlY2hTdXBwb3J0KHNwZWVjaFN1cHBvcnQ6IGJvb2xlYW4pOiBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLlNFVF9TUEVFQ0hfU1VQUE9SVCwgc3BlZWNoU3VwcG9ydCB9O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBbnlBY3Rpb24gPVxyXG4gIEFwcGVuZEhpc3RvcnlBY3Rpb24gfFxyXG4gIENsZWFySGlzdG9yeUFjdGlvbiB8XHJcbiAgTG9hZFdvcmxkQWN0aW9uIHxcclxuICBQcm9jZXNzQWN0aW9uIHxcclxuICBSZWNvcmRBY3Rpb24gfFxyXG4gIFJlc2V0QWN0aW9uIHxcclxuICBTZXRDYXJ0QWN0aW9uIHxcclxuICBTZXRNb2RlQWN0aW9uIHxcclxuICBTZXRQSURBY3Rpb24gfFxyXG4gIFNldFdvcmxkQWN0aW9uIHxcclxuICBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2FjdGlvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2FnYXMnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9