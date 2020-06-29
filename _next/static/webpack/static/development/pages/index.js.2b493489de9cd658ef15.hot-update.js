webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/reducers.ts":
/*!*****************************!*\
  !*** ./actions/reducers.ts ***!
  \*****************************/
/*! exports provided: ApplicationStateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationStateReducer", function() { return ApplicationStateReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./actions/actions.ts");
/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-state */ "./actions/application-state.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 ///////////////////////////////////////////////////////////////////////////////
//
// Reducer
//
///////////////////////////////////////////////////////////////////////////////

var ApplicationStateReducer = function ApplicationStateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(_application_state__WEBPACK_IMPORTED_MODULE_3__["initialState"])();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].APPEND_HISTORY:
      return applyAppendHistory(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].CLEAR_HISTORY:
      return applyClearHistory(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].PROCESS:
      return applyProcess(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].RECORD:
      return applyRecord(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].RESET:
      return applyReset(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].SET_CART:
      return applySetCart(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].SET_MODE:
      return applySetMode(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].SET_OPTION_PID:
      return applySetOptionPID(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].SET_PID:
      return applySetPID(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].SET_SPEECH_SUPPORT:
      return applySetSpeechSupport(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionType"].SET_WORLD:
      return applySetWorld(state, action);

    default:
      return state;
  }
};
_c = ApplicationStateReducer;

function applyAppendHistory(appState, _ref) {
  var cart = _ref.cart,
      source = _ref.source,
      text = _ref.text;
  var item = {
    cart: cart,
    source: source,
    timestamp: new Date(),
    text: text
  };
  var history = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(appState.history), [item]);
  return _objectSpread(_objectSpread({}, appState), {}, {
    history: history
  });
}

function applyClearHistory(appState, action) {
  return _objectSpread(_objectSpread({}, appState), {}, {
    history: []
  });
}

function applyProcess(appState, _ref2) {
  var text = _ref2.text,
      _final = _ref2["final"];
  // Just update the transcription.
  // The real work is done in a saga.
  return _objectSpread(_objectSpread({}, appState), {}, {
    transcription: text
  });
}

function applyRecord(appState, _ref3) {
  var isRecording = _ref3.isRecording;
  return _objectSpread(_objectSpread({}, appState), {}, {
    isRecording: isRecording
  });
}

function applyReset(appState, action) {
  return _objectSpread(_objectSpread({}, appState), {}, {
    transcription: '',
    cart: {
      items: []
    }
  });
}

function applySetCart(appState, _ref4) {
  var cart = _ref4.cart;
  return _objectSpread(_objectSpread({}, appState), {}, {
    cart: cart
  });
}

function applySetMode(appState, _ref5) {
  var mode = _ref5.mode;
  return _objectSpread(_objectSpread({}, appState), {}, {
    mode: mode
  });
}

function applySetPID(appState, _ref6) {
  var pid = _ref6.pid;
  return _objectSpread(_objectSpread({}, appState), {}, {
    currentPID: pid
  });
}

function applySetSpeechSupport(appState, _ref7) {
  var speechSupport = _ref7.speechSupport;
  return _objectSpread(_objectSpread({}, appState), {}, {
    speechSupport: speechSupport
  });
}

function applySetWorld(appState, _ref8) {
  var world = _ref8.world,
      shortOrderWorld = _ref8.shortOrderWorld,
      lexiconSpec = _ref8.lexiconSpec;
  return _objectSpread(_objectSpread({}, appState), {}, {
    world: world,
    shortOrderWorld: shortOrderWorld,
    lexiconSpec: lexiconSpec,
    cart: {
      items: []
    }
  });
}

var _c;

$RefreshReg$(_c, "ApplicationStateReducer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3JlZHVjZXJzLnRzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQWN0aW9uVHlwZSIsIkFQUEVORF9ISVNUT1JZIiwiYXBwbHlBcHBlbmRIaXN0b3J5IiwiQ0xFQVJfSElTVE9SWSIsImFwcGx5Q2xlYXJIaXN0b3J5IiwiUFJPQ0VTUyIsImFwcGx5UHJvY2VzcyIsIlJFQ09SRCIsImFwcGx5UmVjb3JkIiwiUkVTRVQiLCJhcHBseVJlc2V0IiwiU0VUX0NBUlQiLCJhcHBseVNldENhcnQiLCJTRVRfTU9ERSIsImFwcGx5U2V0TW9kZSIsIlNFVF9PUFRJT05fUElEIiwiYXBwbHlTZXRPcHRpb25QSUQiLCJTRVRfUElEIiwiYXBwbHlTZXRQSUQiLCJTRVRfU1BFRUNIX1NVUFBPUlQiLCJhcHBseVNldFNwZWVjaFN1cHBvcnQiLCJTRVRfV09STEQiLCJhcHBseVNldFdvcmxkIiwiYXBwU3RhdGUiLCJjYXJ0Iiwic291cmNlIiwidGV4dCIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJEYXRlIiwiaGlzdG9yeSIsImZpbmFsIiwidHJhbnNjcmlwdGlvbiIsImlzUmVjb3JkaW5nIiwiaXRlbXMiLCJtb2RlIiwicGlkIiwiY3VycmVudFBJRCIsInNwZWVjaFN1cHBvcnQiLCJ3b3JsZCIsInNob3J0T3JkZXJXb3JsZCIsImxleGljb25TcGVjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0NBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsdUJBQTZELEdBQ3hFLFNBRFdBLHVCQUNYLEdBQXdFO0FBQUEsTUFBdkVDLEtBQXVFLHVFQUE3Q0MsdUVBQVksRUFBaUM7QUFBQSxNQUE3QkMsTUFBNkI7O0FBQ3RFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG1EQUFVLENBQUNDLGNBQWhCO0FB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QUFFRCxTQUFTVixZQUFULENBQ0VTLFFBREYsU0FHb0I7QUFBQSxNQURoQlksSUFDZ0IsU0FEaEJBLElBQ2dCO0FBQ2xCLHlDQUNLWixRQURMO0FBRUVZLFFBQUksRUFBSkE7QUFGRjtBQUlEOztBQUVELFNBQVNqQixXQUFULENBQ0VLLFFBREYsU0FHb0I7QUFBQSxNQURoQmEsR0FDZ0IsU0FEaEJBLEdBQ2dCO0FBQ2xCLHlDQUNLYixRQURMO0FBRUVjLGNBQVUsRUFBRUQ7QUFGZDtBQUlEOztBQUVELFNBQVNoQixxQkFBVCxDQUNFRyxRQURGLFNBR29CO0FBQUEsTUFEaEJlLGFBQ2dCLFNBRGhCQSxhQUNnQjtBQUNsQix5Q0FDS2YsUUFETDtBQUVFZSxpQkFBYSxFQUFiQTtBQUZGO0FBSUQ7O0FBRUQsU0FBU2hCLGFBQVQsQ0FDRUMsUUFERixTQUdvQjtBQUFBLE1BRGhCZ0IsS0FDZ0IsU0FEaEJBLEtBQ2dCO0FBQUEsTUFEVEMsZUFDUyxTQURUQSxlQUNTO0FBQUEsTUFEUUMsV0FDUixTQURRQSxXQUNSO0FBQ2xCLHlDQUNLbEIsUUFETDtBQUVFZ0IsU0FBSyxFQUFMQSxLQUZGO0FBR0VDLG1CQUFlLEVBQWZBLGVBSEY7QUFJRUMsZUFBVyxFQUFYQSxXQUpGO0FBS0VqQixRQUFJLEVBQUU7QUFBRVUsV0FBSyxFQUFFO0FBQVQ7QUFMUjtBQU9EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yYjQ5MzQ4OWRlOWNkNjU4ZWYxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBBbnlBY3Rpb24sXHJcbiAgQXBwZW5kSGlzdG9yeUFjdGlvbixcclxuICBDbGVhckhpc3RvcnlBY3Rpb24sXHJcbiAgUHJvY2Vzc0FjdGlvbixcclxuICBSZWNvcmRBY3Rpb24sXHJcbiAgUmVzZXRBY3Rpb24sXHJcbiAgU2V0Q2FydEFjdGlvbixcclxuICBTZXRNb2RlQWN0aW9uLFxyXG4gIFNldE9wdGlvblBJREFjdGlvbixcclxuICBTZXRQSURBY3Rpb24sXHJcbiAgU2V0V29ybGRBY3Rpb24sXHJcbiAgU2V0U3BlZWNoU3VwcG9ydEFjdGlvbixcclxufSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBIaXN0b3J5SXRlbSxcclxuICBUZXh0U291cmNlXHJcbn0gZnJvbSAnLi9hcHBsaWNhdGlvbi1zdGF0ZSc7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZHVjZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgQXBwbGljYXRpb25TdGF0ZVJlZHVjZXI6IFJlZHVjZXI8QXBwbGljYXRpb25TdGF0ZSwgQW55QWN0aW9uPiA9XHJcbiAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlID0gaW5pdGlhbFN0YXRlKCksIGFjdGlvbik6IEFwcGxpY2F0aW9uU3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuQVBQRU5EX0hJU1RPUlk6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5QXBwZW5kSGlzdG9yeShzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLkNMRUFSX0hJU1RPUlk6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5Q2xlYXJIaXN0b3J5KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUFJPQ0VTUzpcclxuICAgICAgICByZXR1cm4gYXBwbHlQcm9jZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUkVDT1JEOlxyXG4gICAgICAgIHJldHVybiBhcHBseVJlY29yZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlJFU0VUOlxyXG4gICAgICAgIHJldHVybiBhcHBseVJlc2V0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX0NBUlQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0Q2FydChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9NT0RFOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldE1vZGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfT1BUSU9OX1BJRDpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRPcHRpb25QSUQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfUElEOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldFBJRChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9TUEVFQ0hfU1VQUE9SVDpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRTcGVlY2hTdXBwb3J0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1dPUkxEOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldFdvcmxkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuZnVuY3Rpb24gYXBwbHlBcHBlbmRIaXN0b3J5KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgY2FydCwgc291cmNlLCB0ZXh0IH06IEFwcGVuZEhpc3RvcnlBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgY29uc3QgaXRlbTogSGlzdG9yeUl0ZW0gPSB7XHJcbiAgICBjYXJ0LFxyXG4gICAgc291cmNlLFxyXG4gICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgdGV4dFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGlzdG9yeSA9IFsuLi5hcHBTdGF0ZS5oaXN0b3J5LCBpdGVtXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgaGlzdG9yeVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDbGVhckhpc3RvcnkoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgYWN0aW9uOiBDbGVhckhpc3RvcnlBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgaGlzdG9yeTogW11cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5UHJvY2VzcyhcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IHRleHQsIGZpbmFsIH06IFByb2Nlc3NBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgLy8gSnVzdCB1cGRhdGUgdGhlIHRyYW5zY3JpcHRpb24uXHJcbiAgLy8gVGhlIHJlYWwgd29yayBpcyBkb25lIGluIGEgc2FnYS5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICB0cmFuc2NyaXB0aW9uOiB0ZXh0LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5UmVjb3JkKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgaXNSZWNvcmRpbmcgfTogUmVjb3JkQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGlzUmVjb3JkaW5nXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlSZXNldChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICBhY3Rpb246IFJlc2V0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHRyYW5zY3JpcHRpb246ICcnLFxyXG4gICAgY2FydDoge1xyXG4gICAgICBpdGVtczogW11cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRDYXJ0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgY2FydCB9OiBTZXRDYXJ0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGNhcnRcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldE1vZGUoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBtb2RlIH06IFNldE1vZGVBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgbW9kZVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0UElEKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgcGlkIH06IFNldFBJREFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBjdXJyZW50UElEOiBwaWQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRTcGVlY2hTdXBwb3J0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgc3BlZWNoU3VwcG9ydCB9OiBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHNwZWVjaFN1cHBvcnRcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldFdvcmxkKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgd29ybGQsIHNob3J0T3JkZXJXb3JsZCwgbGV4aWNvblNwZWMgfTogU2V0V29ybGRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgd29ybGQsXHJcbiAgICBzaG9ydE9yZGVyV29ybGQsXHJcbiAgICBsZXhpY29uU3BlYyxcclxuICAgIGNhcnQ6IHsgaXRlbXM6IFtdIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9