webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/reducers.ts":
/*!*****************************!*\
  !*** ./actions/reducers.ts ***!
  \*****************************/
/*! exports provided: ApplicationStateReducer, historyIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationStateReducer", function() { return ApplicationStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyIds", function() { return historyIds; });
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

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].SET_SPEECH_CONFIG:
      return applySetSpeechConfig(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].SET_SPEECH_SUPPORT:
      return applySetSpeechSupport(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].SET_WORLD:
      return applySetWorld(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].UNDO:
      return applyUndo(state, action);

    case _actions__WEBPACK_IMPORTED_MODULE_3__["ActionType"].UPDATE_HISTORY_ITEM:
      return applyUpdateHistoryItem(state, action);

    default:
      return state;
  }
};
_c = ApplicationStateReducer;
var historyIds = new prix_fixe__WEBPACK_IMPORTED_MODULE_2__["IdGenerator"]();

function applyAppendHistory(appState, _ref) {
  var cart = _ref.cart,
      source = _ref.source,
      text = _ref.text;
  var item = {
    cart: cart,
    correctness: _application_state__WEBPACK_IMPORTED_MODULE_4__["Correctness"].UNKNOWN,
    id: historyIds.next(),
    source: source,
    timestamp: new Date(),
    text: text
  };
  var history = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(appState.history), [item]);
  var undoStack = appState.undoStack.slice(-20);
  undoStack.push(cart);
  return _objectSpread(_objectSpread({}, appState), {}, {
    history: history,
    undoStack: undoStack
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

function applySetSpeechConfig(appState, _ref6) {
  var speechConfig = _ref6.speechConfig;
  console.log('applySpeechConfig');
  console.log(speechConfig);
  return _objectSpread(_objectSpread({}, appState), {}, {
    speechConfig: _objectSpread(_objectSpread({}, appState.speechConfig), speechConfig)
  });
}

function applySetSpeechSupport(appState, _ref7) {
  var speechSupport = _ref7.speechSupport;
  // By default, start up in WEB_SPEECH mode if possible.
  var mode = appState.speechConfig.mode;

  if (speechSupport && mode === _application_state__WEBPACK_IMPORTED_MODULE_4__["SpeechMode"].TEXT) {
    mode = _application_state__WEBPACK_IMPORTED_MODULE_4__["SpeechMode"].WEB_SPEECH;
  } // When we're booting up, the speech mode is set to TEXT until we know
  // whether Web Speech API is supported.


  var speechConfig = _objectSpread(_objectSpread({}, appState.speechConfig), {}, {
    speechSupport: speechSupport
  });

  if (speechConfig.persistedMode !== _application_state__WEBPACK_IMPORTED_MODULE_4__["SpeechMode"].WEB_SPEECH || speechSupport) {
    speechConfig.mode = speechConfig.persistedMode;
  }

  return _objectSpread(_objectSpread({}, appState), {}, {
    speechConfig: speechConfig // speechConfig: {
    //   ...appState.speechConfig,
    //   speechSupport
    // }

  });
}

function applySetWorld(appState, _ref8) {
  var bluePlateWorld = _ref8.bluePlateWorld,
      history = _ref8.history,
      language = _ref8.language;
  return _objectSpread(_objectSpread({}, appState), {}, {
    bluePlateWorld: bluePlateWorld,
    history: history,
    language: language,
    undoStack: [{
      items: []
    }],
    cart: {
      items: []
    }
  });
}

function applyUndo(appState, action) {
  var undoStack = appState.undoStack;

  if (undoStack.length > 1) {
    var cart = undoStack[undoStack.length - 2];
    undoStack = undoStack.slice(0, -1);
    var item = {
      cart: cart,
      correctness: _application_state__WEBPACK_IMPORTED_MODULE_4__["Correctness"].UNKNOWN,
      id: historyIds.next(),
      source: _application_state__WEBPACK_IMPORTED_MODULE_4__["TextSource"].COMMAND,
      timestamp: new Date(),
      text: 'undo'
    };
    var history = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(appState.history), [item]);
    return _objectSpread(_objectSpread({}, appState), {}, {
      cart: cart,
      history: history,
      undoStack: undoStack
    });
  }

  return appState;
}

function applyUpdateHistoryItem(appState, _ref9) {
  var id = _ref9.id,
      changes = _ref9.changes;
  var history = appState.history.map(function (item) {
    return id === item.id ? _objectSpread(_objectSpread({}, item), changes) : item;
  });
  return _objectSpread(_objectSpread({}, appState), {}, {
    history: history
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3JlZHVjZXJzLnRzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQWN0aW9uVHlwZSIsIkFQUEVORF9ISVNUT1JZIiwiYXBwbHlBcHBlbmRIaXN0b3J5IiwiQ0xFQVJfQ0FSVCIsImFwcGx5Q2xlYXJDYXJ0IiwiQ0xFQVJfSElTVE9SWSIsImFwcGx5Q2xlYXJIaXN0b3J5IiwiUFJPQ0VTUyIsImFwcGx5UHJvY2VzcyIsIlJFQ09SRCIsImFwcGx5UmVjb3JkIiwiUkVTRVQiLCJhcHBseVJlc2V0IiwiU0VUX0NBUlQiLCJhcHBseVNldENhcnQiLCJTRVRfTU9ERSIsImFwcGx5U2V0TW9kZSIsIlNFVF9TUEVFQ0hfQ09ORklHIiwiYXBwbHlTZXRTcGVlY2hDb25maWciLCJTRVRfU1BFRUNIX1NVUFBPUlQiLCJhcHBseVNldFNwZWVjaFN1cHBvcnQiLCJTRVRfV09STEQiLCJhcHBseVNldFdvcmxkIiwiVU5ETyIsImFwcGx5VW5kbyIsIlVQREFURV9ISVNUT1JZX0lURU0iLCJhcHBseVVwZGF0ZUhpc3RvcnlJdGVtIiwiaGlzdG9yeUlkcyIsIklkR2VuZXJhdG9yIiwiYXBwU3RhdGUiLCJjYXJ0Iiwic291cmNlIiwidGV4dCIsIml0ZW0iLCJjb3JyZWN0bmVzcyIsIkNvcnJlY3RuZXNzIiwiVU5LTk9XTiIsImlkIiwibmV4dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJoaXN0b3J5IiwidW5kb1N0YWNrIiwic2xpY2UiLCJwdXNoIiwiaXRlbXMiLCJmaW5hbCIsInRyYW5zY3JpcHRpb24iLCJzcGVlY2hUb1RleHRGaWx0ZXIiLCJpc1JlY29yZGluZyIsIm1vZGUiLCJzcGVlY2hDb25maWciLCJjb25zb2xlIiwibG9nIiwic3BlZWNoU3VwcG9ydCIsIlNwZWVjaE1vZGUiLCJURVhUIiwiV0VCX1NQRUVDSCIsInBlcnNpc3RlZE1vZGUiLCJibHVlUGxhdGVXb3JsZCIsImxhbmd1YWdlIiwibGVuZ3RoIiwiVGV4dFNvdXJjZSIsIkNPTU1BTkQiLCJjaGFuZ2VzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7Q0EyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSx1QkFBNkQsR0FDeEUsU0FEV0EsdUJBQ1gsR0FBd0U7QUFBQSxNQUF2RUMsS0FBdUUsdUVBQTdDQyx1RUFBWSxFQUFpQztBQUFBLE1BQTdCQyxNQUE2Qjs7QUFDdEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsbURBQVUsQ0FBQ0MsY0FBaEI7QUFDRSxhQUFPQyxrQkFBa0IsQ0FBQ04sS0FBRCxFQUFRRSxNQUFSLENBQXpCOztBQUNGLFNBQUtFLG1EQUFVLENBQUNHLFVBQWhCO0FBQ0UsYUFBT0MsY0FBYyxDQUFDUixLQUFELEVBQVFFLE1BQVIsQ0FBckI7O0FBQ0YsU0FBS0UsbURBQVUsQ0FBQ0ssYUFBaEI7QUFDRSxhQUFPQyxpQkFBaUIsQ0FBQ1YsS0FBRCxFQUFRRSxNQUFSLENBQXhCOztBQUNGLFNBQUtFLG1EQUFVLENBQUNPLE9BQWhCO0FBQ0UsYUFBT0MsWUFBWSxDQUFDWixLQUFELEVBQVFFLE1BQVIsQ0FBbkI7O0FBQ0YsU0FBS0UsbURBQVUsQ0FBQ1MsTUFBaEI7QUFDRSxhQUFPQyxXQUFXLENBQUNkLEtBQUQsRUFBUUUsTUFBUixDQUFsQjs7QUFDRixTQUFLRSxtREFBVSxDQUFDVyxLQUFoQjtBQUNFLGFBQU9DLFVBQVUsQ0FBQ2hCLEtBQUQsRUFBUUUsTUFBUixDQUFqQjs7QUFDRixTQUFLRSxtREFBVSxDQUFDYSxRQUFoQjtBQUNFLGFBQU9DLFlBQVksQ0FBQ2xCLEtBQUQsRUFBUUUsTUFBUixDQUFuQjs7QUFDRixTQUFLRSxtREFBVSxDQUFDZSxRQUFoQjtBQUNFLGFBQU9DLFlBQVksQ0FBQ3BCLEtBQUQsRUFBUUUsTUFBUixDQUFuQjs7QUFDRixTQUFLRSxtREFBVSxDQUFDaUIs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LFNBR29CO0FBQUEsTUFEaEJRLEVBQ2dCLFNBRGhCQSxFQUNnQjtBQUFBLE1BRFoyQixPQUNZLFNBRFpBLE9BQ1k7QUFDbEIsTUFBTXZCLE9BQU8sR0FBR1osUUFBUSxDQUFDWSxPQUFULENBQWlCd0IsR0FBakIsQ0FBcUIsVUFBQWhDLElBQUk7QUFBQSxXQUN0Q0ksRUFBRSxLQUFLSixJQUFJLENBQUNJLEVBQWIsbUNBQXdCSixJQUF4QixHQUFpQytCLE9BQWpDLElBQTZDL0IsSUFETjtBQUFBLEdBQXpCLENBQWhCO0FBSUEseUNBQ0tKLFFBREw7QUFFRVksV0FBTyxFQUFQQTtBQUZGO0FBSUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjNkZjVhYzg2MGQ5OWI1MmYxYTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZEdlbmVyYXRvciwgc3BlZWNoVG9UZXh0RmlsdGVyIH0gZnJvbSAncHJpeC1maXhlJztcclxuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBBbnlBY3Rpb24sXHJcbiAgQXBwZW5kSGlzdG9yeUFjdGlvbixcclxuICBDbGVhckNhcnRBY3Rpb24sXHJcbiAgQ2xlYXJIaXN0b3J5QWN0aW9uLFxyXG4gIFByb2Nlc3NBY3Rpb24sXHJcbiAgUmVjb3JkQWN0aW9uLFxyXG4gIFJlc2V0QWN0aW9uLFxyXG4gIFNldENhcnRBY3Rpb24sXHJcbiAgU2V0TW9kZUFjdGlvbixcclxuICBTZXRXb3JsZEFjdGlvbixcclxuICBTZXRTcGVlY2hDb25maWdBY3Rpb24sXHJcbiAgU2V0U3BlZWNoU3VwcG9ydEFjdGlvbixcclxuICBVbmRvQWN0aW9uLFxyXG4gIFVwZGF0ZUhpc3RvcnlJdGVtQWN0aW9uLFxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIEhpc3RvcnlJdGVtLFxyXG4gIENvcnJlY3RuZXNzLFxyXG4gIFRleHRTb3VyY2UsXHJcbiAgU3BlZWNoTW9kZSxcclxufSBmcm9tICcuL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVkdWNlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvblN0YXRlUmVkdWNlcjogUmVkdWNlcjxBcHBsaWNhdGlvblN0YXRlLCBBbnlBY3Rpb24+ID1cclxuICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUgPSBpbml0aWFsU3RhdGUoKSwgYWN0aW9uKTogQXBwbGljYXRpb25TdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5BUFBFTkRfSElTVE9SWTpcclxuICAgICAgICByZXR1cm4gYXBwbHlBcHBlbmRIaXN0b3J5KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuQ0xFQVJfQ0FSVDpcclxuICAgICAgICByZXR1cm4gYXBwbHlDbGVhckNhcnQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5DTEVBUl9ISVNUT1JZOlxyXG4gICAgICAgIHJldHVybiBhcHBseUNsZWFySGlzdG9yeShzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlBST0NFU1M6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5UHJvY2VzcyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlJFQ09SRDpcclxuICAgICAgICByZXR1cm4gYXBwbHlSZWNvcmQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5SRVNFVDpcclxuICAgICAgICByZXR1cm4gYXBwbHlSZXNldChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9DQVJUOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldENhcnQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfTU9ERTpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRNb2RlKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1NQRUVDSF9DT05GSUc6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0U3BlZWNoQ29uZmlnKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1NQRUVDSF9TVVBQT1JUOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldFNwZWVjaFN1cHBvcnQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfV09STEQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0V29ybGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5VTkRPOlxyXG4gICAgICAgIHJldHVybiBhcHBseVVuZG8oc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5VUERBVEVfSElTVE9SWV9JVEVNOlxyXG4gICAgICAgIHJldHVybiBhcHBseVVwZGF0ZUhpc3RvcnlJdGVtKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBoaXN0b3J5SWRzID0gbmV3IElkR2VuZXJhdG9yKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseUFwcGVuZEhpc3RvcnkoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBjYXJ0LCBzb3VyY2UsIHRleHQgfTogQXBwZW5kSGlzdG9yeUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICBjb25zdCBpdGVtOiBIaXN0b3J5SXRlbSA9IHtcclxuICAgIGNhcnQsXHJcbiAgICBjb3JyZWN0bmVzczogQ29ycmVjdG5lc3MuVU5LTk9XTixcclxuICAgIGlkOiBoaXN0b3J5SWRzLm5leHQoKSxcclxuICAgIHNvdXJjZSxcclxuICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcclxuICAgIHRleHRcclxuICB9XHJcblxyXG4gIGNvbnN0IGhpc3RvcnkgPSBbLi4uYXBwU3RhdGUuaGlzdG9yeSwgaXRlbV07XHJcbiAgY29uc3QgdW5kb1N0YWNrID0gYXBwU3RhdGUudW5kb1N0YWNrLnNsaWNlKC0yMCk7XHJcbiAgdW5kb1N0YWNrLnB1c2goY2FydCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGhpc3RvcnksXHJcbiAgICB1bmRvU3RhY2ssXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsZWFyQ2FydChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICBhY3Rpb246IENsZWFyQ2FydEFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBjYXJ0OiB7IGl0ZW1zOiBbXSB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsZWFySGlzdG9yeShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICBhY3Rpb246IENsZWFySGlzdG9yeUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBoaXN0b3J5OiBbXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlQcm9jZXNzKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgdGV4dCwgZmluYWwgfTogUHJvY2Vzc0FjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAvLyBKdXN0IHVwZGF0ZSB0aGUgdHJhbnNjcmlwdGlvbi5cclxuICAvLyBUaGUgcmVhbCB3b3JrIGlzIGRvbmUgaW4gYSBzYWdhLlxyXG5cclxuICAvLyBUT0RPOiBjYWxsIHRvIHNwZWVjaFRvVGV4dEZpbHRlcigpIHNob3VsZCBub3QgYmUgZHVwbGljYXRlZFxyXG4gIC8vIGluIHByb2Nlc3NTYWdhKCkuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgdHJhbnNjcmlwdGlvbjogc3BlZWNoVG9UZXh0RmlsdGVyKHRleHQpLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5UmVjb3JkKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgaXNSZWNvcmRpbmcgfTogUmVjb3JkQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGlzUmVjb3JkaW5nXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlSZXNldChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICBhY3Rpb246IFJlc2V0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHRyYW5zY3JpcHRpb246ICcnLFxyXG4gICAgY2FydDoge1xyXG4gICAgICBpdGVtczogW11cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRDYXJ0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgY2FydCB9OiBTZXRDYXJ0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGNhcnRcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldE1vZGUoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBtb2RlIH06IFNldE1vZGVBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgbW9kZVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0U3BlZWNoQ29uZmlnKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgc3BlZWNoQ29uZmlnIH06IFNldFNwZWVjaENvbmZpZ0FjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICBjb25zb2xlLmxvZygnYXBwbHlTcGVlY2hDb25maWcnKTtcclxuICBjb25zb2xlLmxvZyhzcGVlY2hDb25maWcpO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHNwZWVjaENvbmZpZzogeyAuLi5hcHBTdGF0ZS5zcGVlY2hDb25maWcsIC4uLnNwZWVjaENvbmZpZyB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0U3BlZWNoU3VwcG9ydChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IHNwZWVjaFN1cHBvcnQgfTogU2V0U3BlZWNoU3VwcG9ydEFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAvLyBCeSBkZWZhdWx0LCBzdGFydCB1cCBpbiBXRUJfU1BFRUNIIG1vZGUgaWYgcG9zc2libGUuXHJcbiAgbGV0IG1vZGUgPSBhcHBTdGF0ZS5zcGVlY2hDb25maWcubW9kZTtcclxuICBpZiAoc3BlZWNoU3VwcG9ydCAmJiBtb2RlID09PSBTcGVlY2hNb2RlLlRFWFQpIHtcclxuICAgIG1vZGUgPSBTcGVlY2hNb2RlLldFQl9TUEVFQ0g7XHJcbiAgfVxyXG5cclxuICAvLyBXaGVuIHdlJ3JlIGJvb3RpbmcgdXAsIHRoZSBzcGVlY2ggbW9kZSBpcyBzZXQgdG8gVEVYVCB1bnRpbCB3ZSBrbm93XHJcbiAgLy8gd2hldGhlciBXZWIgU3BlZWNoIEFQSSBpcyBzdXBwb3J0ZWQuXHJcbiAgY29uc3Qgc3BlZWNoQ29uZmlnID0gey4uLmFwcFN0YXRlLnNwZWVjaENvbmZpZywgc3BlZWNoU3VwcG9ydH07XHJcbiAgaWYgKHNwZWVjaENvbmZpZy5wZXJzaXN0ZWRNb2RlICE9PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0ggfHwgc3BlZWNoU3VwcG9ydCkge1xyXG4gICAgc3BlZWNoQ29uZmlnLm1vZGUgPSBzcGVlY2hDb25maWcucGVyc2lzdGVkTW9kZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHNwZWVjaENvbmZpZ1xyXG4gICAgLy8gc3BlZWNoQ29uZmlnOiB7XHJcbiAgICAvLyAgIC4uLmFwcFN0YXRlLnNwZWVjaENvbmZpZyxcclxuICAgIC8vICAgc3BlZWNoU3VwcG9ydFxyXG4gICAgLy8gfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0V29ybGQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBibHVlUGxhdGVXb3JsZCwgaGlzdG9yeSwgbGFuZ3VhZ2UgfTogU2V0V29ybGRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgYmx1ZVBsYXRlV29ybGQsXHJcbiAgICBoaXN0b3J5LFxyXG4gICAgbGFuZ3VhZ2UsXHJcbiAgICB1bmRvU3RhY2s6IFt7IGl0ZW1zOiBbXSB9XSxcclxuICAgIGNhcnQ6IHsgaXRlbXM6IFtdIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlVbmRvKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIGFjdGlvbjogVW5kb0FjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICBsZXQgdW5kb1N0YWNrID0gYXBwU3RhdGUudW5kb1N0YWNrO1xyXG4gIGlmICh1bmRvU3RhY2subGVuZ3RoID4gMSkge1xyXG4gICAgY29uc3QgY2FydCA9IHVuZG9TdGFja1t1bmRvU3RhY2subGVuZ3RoIC0gMl07XHJcbiAgICB1bmRvU3RhY2sgPSB1bmRvU3RhY2suc2xpY2UoMCwgLTEpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW06IEhpc3RvcnlJdGVtID1cclxuICAgIHtcclxuICAgICAgY2FydCxcclxuICAgICAgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzLlVOS05PV04sXHJcbiAgICAgIGlkOiBoaXN0b3J5SWRzLm5leHQoKSxcclxuICAgICAgc291cmNlOiBUZXh0U291cmNlLkNPTU1BTkQsXHJcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcclxuICAgICAgdGV4dDogJ3VuZG8nXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGlzdG9yeSA9IFsuLi5hcHBTdGF0ZS5oaXN0b3J5LCBpdGVtXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5hcHBTdGF0ZSxcclxuICAgICAgY2FydCxcclxuICAgICAgaGlzdG9yeSxcclxuICAgICAgdW5kb1N0YWNrXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXBwU3RhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VXBkYXRlSGlzdG9yeUl0ZW0oXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBpZCwgY2hhbmdlcyB9OiBVcGRhdGVIaXN0b3J5SXRlbUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICBjb25zdCBoaXN0b3J5ID0gYXBwU3RhdGUuaGlzdG9yeS5tYXAoaXRlbSA9PlxyXG4gICAgKGlkID09PSBpdGVtLmlkKSA/IHsgLi4uaXRlbSwgLi4uY2hhbmdlcyB9IDogaXRlbVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGhpc3RvcnlcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=