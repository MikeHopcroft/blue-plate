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
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prix-fixe */ "./node_modules/prix-fixe/build/src/bindex.js");
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prix_fixe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./actions/actions.ts");
/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application-state */ "./actions/application-state.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 ///////////////////////////////////////////////////////////////////////////////
//
// Reducer
//
///////////////////////////////////////////////////////////////////////////////

var ApplicationStateReducer = function ApplicationStateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(_application_state__WEBPACK_IMPORTED_MODULE_4__["initialState"])();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].APPEND_HISTORY:
      return applyAppendHistory(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].CLEAR_CART:
      return applyClearCart(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].CLEAR_HISTORY:
      return applyClearHistory(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].PROCESS:
      return applyProcess(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].RECORD:
      return applyRecord(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].RESET:
      return applyReset(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].SET_CART:
      return applySetCart(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].SET_MODE:
      return applySetMode(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].SET_OPTION_PID:
      return applySetOptionPID(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].SET_PID:
      return applySetPID(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].SET_SPEECH_SUPPORT:
      return applySetSpeechSupport(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].SET_WORLD:
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

function applyClearCart(appState, action) {
  return _objectSpread(_objectSpread({}, appState), {}, {
    cart: {
      items: []
    }
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
  // TODO: call to speechToTextFilter() should not be duplicated
  // in processSaga().
  return _objectSpread(_objectSpread({}, appState), {}, {
    transcription: Object(prix_fixe__WEBPACK_IMPORTED_MODULE_2__["speechToTextFilter"])(text)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3JlZHVjZXJzLnRzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQWN0aW9uVHlwZSIsIkFQUEVORF9ISVNUT1JZIiwiYXBwbHlBcHBlbmRIaXN0b3J5IiwiQ0xFQVJfQ0FSVCIsImFwcGx5Q2xlYXJDYXJ0IiwiQ0xFQVJfSElTVE9SWSIsImFwcGx5Q2xlYXJIaXN0b3J5IiwiUFJPQ0VTUyIsImFwcGx5UHJvY2VzcyIsIlJFQ09SRCIsImFwcGx5UmVjb3JkIiwiUkVTRVQiLCJhcHBseVJlc2V0IiwiU0VUX0NBUlQiLCJhcHBseVNldENhcnQiLCJTRVRfTU9ERSIsImFwcGx5U2V0TW9kZSIsIlNFVF9PUFRJT05fUElEIiwiYXBwbHlTZXRPcHRpb25QSUQiLCJTRVRfUElEIiwiYXBwbHlTZXRQSUQiLCJTRVRfU1BFRUNIX1NVUFBPUlQiLCJhcHBseVNldFNwZWVjaFN1cHBvcnQiLCJTRVRfV09STEQiLCJhcHBseVNldFdvcmxkIiwiYXBwU3RhdGUiLCJjYXJ0Iiwic291cmNlIiwidGV4dCIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJEYXRlIiwiaGlzdG9yeSIsIml0ZW1zIiwiZmluYWwiLCJ0cmFuc2NyaXB0aW9uIiwic3BlZWNoVG9UZXh0RmlsdGVyIiwiaXNSZWNvcmRpbmciLCJtb2RlIiwicGlkIiwib3B0aW9uUElEIiwiY3VycmVudFBJRCIsInVuZGVmaW5lZCIsInNwZWVjaFN1cHBvcnQiLCJ3b3JsZCIsInNob3J0T3JkZXJXb3JsZCIsImxleGljb25TcGVjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtDQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLHVCQUE2RCxHQUN4RSxTQURXQSx1QkFDWCxHQUF3RTtBQUFBLE1BQXZFQyxLQUF1RSx1RUFBN0NDLHVFQUFZLEVB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QUNLckIsUUFETDtBQUVFbUIsU0FBSyxFQUFMQSxLQUZGO0FBR0VDLG1CQUFlLEVBQWZBLGVBSEY7QUFJRUMsZUFBVyxFQUFYQSxXQUpGO0FBS0VwQixRQUFJLEVBQUU7QUFBRU8sV0FBSyxFQUFFO0FBQVQ7QUFMUjtBQU9EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42YWY4YjNjNGU2M2YwYmZlZWFkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3BlZWNoVG9UZXh0RmlsdGVyIH0gZnJvbSAncHJpeC1maXhlJztcclxuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBBbnlBY3Rpb24sXHJcbiAgQXBwZW5kSGlzdG9yeUFjdGlvbixcclxuICBDbGVhckNhcnRBY3Rpb24sXHJcbiAgQ2xlYXJIaXN0b3J5QWN0aW9uLFxyXG4gIFByb2Nlc3NBY3Rpb24sXHJcbiAgUmVjb3JkQWN0aW9uLFxyXG4gIFJlc2V0QWN0aW9uLFxyXG4gIFNldENhcnRBY3Rpb24sXHJcbiAgU2V0TW9kZUFjdGlvbixcclxuICBTZXRPcHRpb25QSURBY3Rpb24sXHJcbiAgU2V0UElEQWN0aW9uLFxyXG4gIFNldFdvcmxkQWN0aW9uLFxyXG4gIFNldFNwZWVjaFN1cHBvcnRBY3Rpb24sXHJcbn0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25TdGF0ZSxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgSGlzdG9yeUl0ZW0sXHJcbn0gZnJvbSAnLi9hcHBsaWNhdGlvbi1zdGF0ZSc7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZHVjZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgQXBwbGljYXRpb25TdGF0ZVJlZHVjZXI6IFJlZHVjZXI8QXBwbGljYXRpb25TdGF0ZSwgQW55QWN0aW9uPiA9XHJcbiAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlID0gaW5pdGlhbFN0YXRlKCksIGFjdGlvbik6IEFwcGxpY2F0aW9uU3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuQVBQRU5EX0hJU1RPUlk6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5QXBwZW5kSGlzdG9yeShzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLkNMRUFSX0NBUlQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5Q2xlYXJDYXJ0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuQ0xFQVJfSElTVE9SWTpcclxuICAgICAgICByZXR1cm4gYXBwbHlDbGVhckhpc3Rvcnkoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5QUk9DRVNTOlxyXG4gICAgICAgIHJldHVybiBhcHBseVByb2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5SRUNPUkQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5UmVjb3JkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUkVTRVQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5UmVzZXQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfQ0FSVDpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRDYXJ0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX01PREU6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0TW9kZShzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9PUFRJT05fUElEOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldE9wdGlvblBJRChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9QSUQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0UElEKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1NQRUVDSF9TVVBQT1JUOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldFNwZWVjaFN1cHBvcnQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfV09STEQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0V29ybGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5mdW5jdGlvbiBhcHBseUFwcGVuZEhpc3RvcnkoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBjYXJ0LCBzb3VyY2UsIHRleHQgfTogQXBwZW5kSGlzdG9yeUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICBjb25zdCBpdGVtOiBIaXN0b3J5SXRlbSA9IHtcclxuICAgIGNhcnQsXHJcbiAgICBzb3VyY2UsXHJcbiAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICB0ZXh0XHJcbiAgfVxyXG5cclxuICBjb25zdCBoaXN0b3J5ID0gWy4uLmFwcFN0YXRlLmhpc3RvcnksIGl0ZW1dO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBoaXN0b3J5XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsZWFyQ2FydChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICBhY3Rpb246IENsZWFyQ2FydEFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBjYXJ0OiB7IGl0ZW1zOiBbXSB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsZWFySGlzdG9yeShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICBhY3Rpb246IENsZWFySGlzdG9yeUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBoaXN0b3J5OiBbXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlQcm9jZXNzKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgdGV4dCwgZmluYWwgfTogUHJvY2Vzc0FjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAvLyBKdXN0IHVwZGF0ZSB0aGUgdHJhbnNjcmlwdGlvbi5cclxuICAvLyBUaGUgcmVhbCB3b3JrIGlzIGRvbmUgaW4gYSBzYWdhLlxyXG5cclxuICAvLyBUT0RPOiBjYWxsIHRvIHNwZWVjaFRvVGV4dEZpbHRlcigpIHNob3VsZCBub3QgYmUgZHVwbGljYXRlZFxyXG4gIC8vIGluIHByb2Nlc3NTYWdhKCkuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgdHJhbnNjcmlwdGlvbjogc3BlZWNoVG9UZXh0RmlsdGVyKHRleHQpLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5UmVjb3JkKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgaXNSZWNvcmRpbmcgfTogUmVjb3JkQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGlzUmVjb3JkaW5nXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlSZXNldChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICBhY3Rpb246IFJlc2V0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHRyYW5zY3JpcHRpb246ICcnLFxyXG4gICAgY2FydDoge1xyXG4gICAgICBpdGVtczogW11cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRDYXJ0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgY2FydCB9OiBTZXRDYXJ0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGNhcnRcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldE1vZGUoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBtb2RlIH06IFNldE1vZGVBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgbW9kZVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0T3B0aW9uUElEKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgcGlkIH06IFNldE9wdGlvblBJREFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBvcHRpb25QSUQ6IHBpZCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldFBJRChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IHBpZCB9OiBTZXRQSURBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgY3VycmVudFBJRDogcGlkLFxyXG4gICAgb3B0aW9uUElEOiB1bmRlZmluZWQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRTcGVlY2hTdXBwb3J0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgc3BlZWNoU3VwcG9ydCB9OiBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHNwZWVjaFN1cHBvcnRcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldFdvcmxkKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgd29ybGQsIHNob3J0T3JkZXJXb3JsZCwgbGV4aWNvblNwZWMgfTogU2V0V29ybGRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgd29ybGQsXHJcbiAgICBzaG9ydE9yZGVyV29ybGQsXHJcbiAgICBsZXhpY29uU3BlYyxcclxuICAgIGNhcnQ6IHsgaXRlbXM6IFtdIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9