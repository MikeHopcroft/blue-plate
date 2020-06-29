webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/actions.ts":
/*!****************************!*\
  !*** ./actions/actions.ts ***!
  \****************************/
/*! exports provided: ActionType, appendHistory, clearCart, clearHistory, loadWorld, process, record, reset, setCart, setMode, setOptionPID, setPID, setWorld, setSpeechSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendHistory", function() { return appendHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
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
  ActionType["CLEAR_CART"] = "CLEAR_CART";
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
/*! exports provided: ActionType, appendHistory, clearCart, clearHistory, loadWorld, process, record, reset, setCart, setMode, setOptionPID, setPID, setWorld, setSpeechSupport, ApplicationMode, TextSource, Correctness, initialState, ApplicationStateReducer, loadWorldSaga, processSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./actions/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendHistory", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["appendHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["clearCart"]; });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6WyJBY3Rpb25UeXBlIiwiYXBwZW5kSGlzdG9yeSIsImNhcnQiLCJzb3VyY2UiLCJ0ZXh0IiwidHlwZSIsIkFQUEVORF9ISVNUT1JZIiwiY2xlYXJDYXJ0IiwiQ0xFQVJfQ0FSVCIsImNsZWFySGlzdG9yeSIsIkNMRUFSX0hJU1RPUlkiLCJsb2FkV29ybGQiLCJMT0FEX1dPUkxEIiwicHJvY2VzcyIsImZpbmFsIiwiUFJPQ0VTUyIsInJlY29yZCIsImlzUmVjb3JkaW5nIiwiUkVDT1JEIiwicmVzZXQiLCJSRVNFVCIsInNldENhcnQiLCJTRVRfQ0FSVCIsInNldE1vZGUiLCJtb2RlIiwiU0VUX01PREUiLCJzZXRPcHRpb25QSUQiLCJwaWQiLCJTRVRfT1BUSU9OX1BJRCIsInNldFBJRCIsIlNFVF9QSUQiLCJzZXRXb3JsZCIsIndvcmxkIiwic2hvcnRPcmRlcldvcmxkIiwibGV4aWNvblNwZWMiLCJTRVRfV09STEQiLCJzZXRTcGVlY2hTdXBwb3J0Iiwic3BlZWNoU3VwcG9ydCIsIlNFVF9TUEVFQ0hfU1VQUE9SVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQUtBLFVBQVo7O1dBQVlBLFU7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtHQUFBQSxVLEtBQUFBLFU7O0FBY1g7QUFPQTtBQUVNLFNBQVNDLGFBQVQsQ0FDTEMsSUFESyxFQUVMQyxNQUZLLEVBR0xDLElBSEssRUFJZ0I7QUFDckIsU0FBTztBQUNMQyxRQUFJLEVBQUVMLFVBQVUs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QTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNmY1ZDg4ZWQ2NDExZmU1MjdmYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQsIFBJRCwgV29ybGQgfSBmcm9tICdwcml4LWZpeGUnO1xyXG5pbXBvcnQgeyBMZXhpY29uU3BlYywgU2hvcnRPcmRlcldvcmxkIH0gZnJvbSAnc2hvcnQtb3JkZXInO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25Nb2RlLCBUZXh0U291cmNlIH0gZnJvbSBcIi4vYXBwbGljYXRpb24tc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEFjdGlvblR5cGUge1xyXG4gIEFQUEVORF9ISVNUT1JZID0gJ0FQUEVORF9ISVNUT1JZJyxcclxuICBDTEVBUl9DQVJUID0gJ0NMRUFSX0NBUlQnLFxyXG4gIENMRUFSX0hJU1RPUlkgPSAnQ0xFQVJfSElTVE9SWScsXHJcbiAgTE9BRF9XT1JMRCA9ICdMT0FEX1dPUkxEJyxcclxuICBQUk9DRVNTID0gJ1BST0NFU1MnLFxyXG4gIFJFQ09SRCA9ICdSRUNPUkQnLFxyXG4gIFJFU0VUID0gJ1JFU0VUJyxcclxuICBTRVRfQ0FSVCA9ICdTRVRfQ0FSVCcsXHJcbiAgU0VUX01PREUgPSAnU0VUX01PREUnLFxyXG4gIFNFVF9PUFRJT05fUElEID0gJ1NFVF9PUFRJT05fUElEJyxcclxuICBTRVRfUElEID0gJ1NFVF9QSUQnLFxyXG4gIFNFVF9TUEVFQ0hfU1VQUE9SVCA9ICdTRVRfU1BFRUNIX1NVUFBPUlQnLFxyXG4gIFNFVF9XT1JMRCA9ICdTRVRfV09STEQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBlbmRIaXN0b3J5QWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLkFQUEVORF9ISVNUT1JZO1xyXG4gIGNhcnQ6IENhcnQ7XHJcbiAgc291cmNlOiBUZXh0U291cmNlLFxyXG4gIHRleHQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRIaXN0b3J5KFxyXG4gIGNhcnQ6IENhcnQsXHJcbiAgc291cmNlOiBUZXh0U291cmNlLFxyXG4gIHRleHQ6IHN0cmluZ1xyXG4pOiBBcHBlbmRIaXN0b3J5QWN0aW9uIHtcclxuICByZXR1cm4geyBcclxuICAgIHR5cGU6IEFjdGlvblR5cGUuQVBQRU5EX0hJU1RPUlksXHJcbiAgICBjYXJ0LFxyXG4gICAgc291cmNlLFxyXG4gICAgdGV4dFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJDYXJ0QWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLkNMRUFSX0NBUlQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDYXJ0KCk6IENsZWFyQ2FydEFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5DTEVBUl9DQVJUIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJIaXN0b3J5QWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLkNMRUFSX0hJU1RPUlk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJIaXN0b3J5KCk6IENsZWFySGlzdG9yeUFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5DTEVBUl9ISVNUT1JZIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9hZFdvcmxkQWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLkxPQURfV09STEQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdvcmxkKCk6IExvYWRXb3JsZEFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5MT0FEX1dPUkxEIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc0FjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5QUk9DRVNTO1xyXG4gIHNvdXJjZTogVGV4dFNvdXJjZSxcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgZmluYWw6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzcyhzb3VyY2U6IFRleHRTb3VyY2UsIHRleHQ6IHN0cmluZywgZmluYWw6IGJvb2xlYW4pOiBQcm9jZXNzQWN0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgc291cmNlLFxyXG4gICAgdHlwZTogQWN0aW9uVHlwZS5QUk9DRVNTLFxyXG4gICAgdGV4dCxcclxuICAgIGZpbmFsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuUkVDT1JEO1xyXG4gIGlzUmVjb3JkaW5nOiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZChpc1JlY29yZGluZzogYm9vbGVhbik6IFJlY29yZEFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5SRUNPUkQsIGlzUmVjb3JkaW5nIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzZXRBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuUkVTRVQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKTogUmVzZXRBY3Rpb24ge1xyXG4gIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGUuUkVTRVQgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRDYXJ0QWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9DQVJUO1xyXG4gIGNhcnQ6IENhcnQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FydChjYXJ0OiBDYXJ0KTogU2V0Q2FydEFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5TRVRfQ0FSVCwgY2FydCB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldE1vZGVBY3Rpb24ge1xyXG4gIHR5cGU6IEFjdGlvblR5cGUuU0VUX01PREU7XHJcbiAgbW9kZTogQXBwbGljYXRpb25Nb2RlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vZGUobW9kZTogQXBwbGljYXRpb25Nb2RlKTogU2V0TW9kZUFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5TRVRfTU9ERSwgbW9kZSB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldE9wdGlvblBJREFjdGlvbiB7XHJcbiAgdHlwZTogQWN0aW9uVHlwZS5TRVRfT1BUSU9OX1BJRDtcclxuICBwaWQ/OiBQSUQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0T3B0aW9uUElEKHBpZD86IFBJRCk6IFNldE9wdGlvblBJREFjdGlvbiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQWN0aW9uVHlwZS5TRVRfT1BUSU9OX1BJRCwgcGlkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0UElEQWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9QSUQ7XHJcbiAgcGlkOiBQSUQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UElEKHBpZDogUElEKTogU2V0UElEQWN0aW9uIHtcclxuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlLlNFVF9QSUQsIHBpZCB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldFdvcmxkQWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9XT1JMRDtcclxuICB3b3JsZDogV29ybGQ7XHJcbiAgc2hvcnRPcmRlcldvcmxkOiBTaG9ydE9yZGVyV29ybGQ7XHJcbiAgbGV4aWNvblNwZWM6IExleGljb25TcGVjO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFdvcmxkKFxyXG4gIHdvcmxkOiBXb3JsZCxcclxuICBzaG9ydE9yZGVyV29ybGQ6IFNob3J0T3JkZXJXb3JsZCxcclxuICBsZXhpY29uU3BlYzogTGV4aWNvblNwZWNcclxuKTogU2V0V29ybGRBY3Rpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9XT1JMRCxcclxuICAgIHdvcmxkLFxyXG4gICAgc2hvcnRPcmRlcldvcmxkLFxyXG4gICAgbGV4aWNvblNwZWMsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uIHtcclxuICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9TUEVFQ0hfU1VQUE9SVDtcclxuICBzcGVlY2hTdXBwb3J0OiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNwZWVjaFN1cHBvcnQoc3BlZWNoU3VwcG9ydDogYm9vbGVhbik6IFNldFNwZWVjaFN1cHBvcnRBY3Rpb24ge1xyXG4gIHJldHVybiB7IHR5cGU6IEFjdGlvblR5cGUuU0VUX1NQRUVDSF9TVVBQT1JULCBzcGVlY2hTdXBwb3J0IH07XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFueUFjdGlvbiA9XHJcbiAgQXBwZW5kSGlzdG9yeUFjdGlvbiB8XHJcbiAgQ2xlYXJDYXJ0QWN0aW9uIHxcclxuICBDbGVhckhpc3RvcnlBY3Rpb24gfFxyXG4gIExvYWRXb3JsZEFjdGlvbiB8XHJcbiAgUHJvY2Vzc0FjdGlvbiB8XHJcbiAgUmVjb3JkQWN0aW9uIHxcclxuICBSZXNldEFjdGlvbiB8XHJcbiAgU2V0Q2FydEFjdGlvbiB8XHJcbiAgU2V0TW9kZUFjdGlvbiB8XHJcbiAgU2V0T3B0aW9uUElEQWN0aW9uIHxcclxuICBTZXRQSURBY3Rpb24gfFxyXG4gIFNldFdvcmxkQWN0aW9uIHxcclxuICBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2FjdGlvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2FnYXMnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9