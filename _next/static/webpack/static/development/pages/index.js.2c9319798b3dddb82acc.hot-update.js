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

function applySetOptionPID(appState, _ref6) {
  var pid = _ref6.pid;
  return _objectSpread(_objectSpread({}, appState), {}, {
    optionPID: pid
  });
}

function applySetPID(appState, _ref7) {
  var pid = _ref7.pid;
  return _objectSpread(_objectSpread({}, appState), {}, {
    currentPID: pid,
    optionPID: undefined
  });
}

function applySetSpeechSupport(appState, _ref8) {
  var speechSupport = _ref8.speechSupport;
  return _objectSpread(_objectSpread({}, appState), {}, {
    speechSupport: speechSupport
  });
}

function applySetWorld(appState, _ref9) {
  var world = _ref9.world,
      shortOrderWorld = _ref9.shortOrderWorld,
      lexiconSpec = _ref9.lexiconSpec;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3JlZHVjZXJzLnRzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQWN0aW9uVHlwZSIsIkFQUEVORF9ISVNUT1JZIiwiYXBwbHlBcHBlbmRIaXN0b3J5IiwiQ0xFQVJfSElTVE9SWSIsImFwcGx5Q2xlYXJIaXN0b3J5IiwiUFJPQ0VTUyIsImFwcGx5UHJvY2VzcyIsIlJFQ09SRCIsImFwcGx5UmVjb3JkIiwiUkVTRVQiLCJhcHBseVJlc2V0IiwiU0VUX0NBUlQiLCJhcHBseVNldENhcnQiLCJTRVRfTU9ERSIsImFwcGx5U2V0TW9kZSIsIlNFVF9PUFRJT05fUElEIiwiYXBwbHlTZXRPcHRpb25QSUQiLCJTRVRfUElEIiwiYXBwbHlTZXRQSUQiLCJTRVRfU1BFRUNIX1NVUFBPUlQiLCJhcHBseVNldFNwZWVjaFN1cHBvcnQiLCJTRVRfV09STEQiLCJhcHBseVNldFdvcmxkIiwiYXBwU3RhdGUiLCJjYXJ0Iiwic291cmNlIiwidGV4dCIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJEYXRlIiwiaGlzdG9yeSIsImZpbmFsIiwidHJhbnNjcmlwdGlvbiIsImlzUmVjb3JkaW5nIiwiaXRlbXMiLCJtb2RlIiwicGlkIiwib3B0aW9uUElEIiwiY3VycmVudFBJRCIsInVuZGVmaW5lZCIsInNwZWVjaFN1cHBvcnQiLCJ3b3JsZCIsInNob3J0T3JkZXJXb3JsZCIsImxleGljb25TcGVjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0NBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsdUJBQTZELEdBQ3hFLFNBRFdBLHVCQUNYLEdBQXdFO0FBQUEsTUFBdkVDLEtBQXVFLHVFQUE3Q0MsdUVBQVksRUFBaUM7QUFBQSxNQUE3QkMsTUFBNkI7O0FBQ3RFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNB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QyxRQUFJLEVBQUpBO0FBRkY7QUFJRDs7QUFFRCxTQUFTVixZQUFULENBQ0VTLFFBREYsU0FHb0I7QUFBQSxNQURoQlksSUFDZ0IsU0FEaEJBLElBQ2dCO0FBQ2xCLHlDQUNLWixRQURMO0FBRUVZLFFBQUksRUFBSkE7QUFGRjtBQUlEOztBQUVELFNBQVNuQixpQkFBVCxDQUNFTyxRQURGLFNBR29CO0FBQUEsTUFEaEJhLEdBQ2dCLFNBRGhCQSxHQUNnQjtBQUNsQix5Q0FDS2IsUUFETDtBQUVFYyxhQUFTLEVBQUVEO0FBRmI7QUFJRDs7QUFFRCxTQUFTbEIsV0FBVCxDQUNFSyxRQURGLFNBR29CO0FBQUEsTUFEaEJhLEdBQ2dCLFNBRGhCQSxHQUNnQjtBQUNsQix5Q0FDS2IsUUFETDtBQUVFZSxjQUFVLEVBQUVGLEdBRmQ7QUFHRUMsYUFBUyxFQUFFRTtBQUhiO0FBS0Q7O0FBRUQsU0FBU25CLHFCQUFULENBQ0VHLFFBREYsU0FHb0I7QUFBQSxNQURoQmlCLGFBQ2dCLFNBRGhCQSxhQUNnQjtBQUNsQix5Q0FDS2pCLFFBREw7QUFFRWlCLGlCQUFhLEVBQWJBO0FBRkY7QUFJRDs7QUFFRCxTQUFTbEIsYUFBVCxDQUNFQyxRQURGLFNBR29CO0FBQUEsTUFEaEJrQixLQUNnQixTQURoQkEsS0FDZ0I7QUFBQSxNQURUQyxlQUNTLFNBRFRBLGVBQ1M7QUFBQSxNQURRQyxXQUNSLFNBRFFBLFdBQ1I7QUFDbEIseUNBQ0twQixRQURMO0FBRUVrQixTQUFLLEVBQUxBLEtBRkY7QUFHRUMsbUJBQWUsRUFBZkEsZUFIRjtBQUlFQyxlQUFXLEVBQVhBLFdBSkY7QUFLRW5CLFFBQUksRUFBRTtBQUFFVSxXQUFLLEVBQUU7QUFBVDtBQUxSO0FBT0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjJjOTMxOTc5OGIzZGRkYjgyYWNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEFueUFjdGlvbixcclxuICBBcHBlbmRIaXN0b3J5QWN0aW9uLFxyXG4gIENsZWFySGlzdG9yeUFjdGlvbixcclxuICBQcm9jZXNzQWN0aW9uLFxyXG4gIFJlY29yZEFjdGlvbixcclxuICBSZXNldEFjdGlvbixcclxuICBTZXRDYXJ0QWN0aW9uLFxyXG4gIFNldE1vZGVBY3Rpb24sXHJcbiAgU2V0T3B0aW9uUElEQWN0aW9uLFxyXG4gIFNldFBJREFjdGlvbixcclxuICBTZXRXb3JsZEFjdGlvbixcclxuICBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uLFxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIEhpc3RvcnlJdGVtLFxyXG4gIFRleHRTb3VyY2VcclxufSBmcm9tICcuL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVkdWNlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvblN0YXRlUmVkdWNlcjogUmVkdWNlcjxBcHBsaWNhdGlvblN0YXRlLCBBbnlBY3Rpb24+ID1cclxuICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUgPSBpbml0aWFsU3RhdGUoKSwgYWN0aW9uKTogQXBwbGljYXRpb25TdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5BUFBFTkRfSElTVE9SWTpcclxuICAgICAgICByZXR1cm4gYXBwbHlBcHBlbmRIaXN0b3J5KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuQ0xFQVJfSElTVE9SWTpcclxuICAgICAgICByZXR1cm4gYXBwbHlDbGVhckhpc3Rvcnkoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5QUk9DRVNTOlxyXG4gICAgICAgIHJldHVybiBhcHBseVByb2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5SRUNPUkQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5UmVjb3JkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUkVTRVQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5UmVzZXQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfQ0FSVDpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRDYXJ0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX01PREU6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0TW9kZShzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9PUFRJT05fUElEOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldE9wdGlvblBJRChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9QSUQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0UElEKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1NQRUVDSF9TVVBQT1JUOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldFNwZWVjaFN1cHBvcnQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfV09STEQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0V29ybGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5mdW5jdGlvbiBhcHBseUFwcGVuZEhpc3RvcnkoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBjYXJ0LCBzb3VyY2UsIHRleHQgfTogQXBwZW5kSGlzdG9yeUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICBjb25zdCBpdGVtOiBIaXN0b3J5SXRlbSA9IHtcclxuICAgIGNhcnQsXHJcbiAgICBzb3VyY2UsXHJcbiAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICB0ZXh0XHJcbiAgfVxyXG5cclxuICBjb25zdCBoaXN0b3J5ID0gWy4uLmFwcFN0YXRlLmhpc3RvcnksIGl0ZW1dO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBoaXN0b3J5XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsZWFySGlzdG9yeShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICBhY3Rpb246IENsZWFySGlzdG9yeUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBoaXN0b3J5OiBbXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlQcm9jZXNzKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgdGV4dCwgZmluYWwgfTogUHJvY2Vzc0FjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAvLyBKdXN0IHVwZGF0ZSB0aGUgdHJhbnNjcmlwdGlvbi5cclxuICAvLyBUaGUgcmVhbCB3b3JrIGlzIGRvbmUgaW4gYSBzYWdhLlxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHRyYW5zY3JpcHRpb246IHRleHQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlSZWNvcmQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBpc1JlY29yZGluZyB9OiBSZWNvcmRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgaXNSZWNvcmRpbmdcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVJlc2V0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIGFjdGlvbjogUmVzZXRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgdHJhbnNjcmlwdGlvbjogJycsXHJcbiAgICBjYXJ0OiB7XHJcbiAgICAgIGl0ZW1zOiBbXVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldENhcnQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBjYXJ0IH06IFNldENhcnRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgY2FydFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0TW9kZShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IG1vZGUgfTogU2V0TW9kZUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBtb2RlXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRPcHRpb25QSUQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBwaWQgfTogU2V0T3B0aW9uUElEQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIG9wdGlvblBJRDogcGlkLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0UElEKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgcGlkIH06IFNldFBJREFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBjdXJyZW50UElEOiBwaWQsXHJcbiAgICBvcHRpb25QSUQ6IHVuZGVmaW5lZCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldFNwZWVjaFN1cHBvcnQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBzcGVlY2hTdXBwb3J0IH06IFNldFNwZWVjaFN1cHBvcnRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgc3BlZWNoU3VwcG9ydFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0V29ybGQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyB3b3JsZCwgc2hvcnRPcmRlcldvcmxkLCBsZXhpY29uU3BlYyB9OiBTZXRXb3JsZEFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICB3b3JsZCxcclxuICAgIHNob3J0T3JkZXJXb3JsZCxcclxuICAgIGxleGljb25TcGVjLFxyXG4gICAgY2FydDogeyBpdGVtczogW10gfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=