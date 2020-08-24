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
  console.log("applySetSpeechSupport(".concat(speechSupport, ")"));
  return _objectSpread(_objectSpread({}, appState), {}, {
    speechConfig: _objectSpread(_objectSpread({}, appState.speechConfig), {}, {
      speechSupport: speechSupport
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3JlZHVjZXJzLnRzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQWN0aW9uVHlwZSIsIkFQUEVORF9ISVNUT1JZIiwiYXBwbHlBcHBlbmRIaXN0b3J5IiwiQ0xFQVJfQ0FSVCIsImFwcGx5Q2xlYXJDYXJ0IiwiQ0xFQVJfSElTVE9SWSIsImFwcGx5Q2xlYXJIaXN0b3J5IiwiUFJPQ0VTUyIsImFwcGx5UHJvY2VzcyIsIlJFQ09SRCIsImFwcGx5UmVjb3JkIiwiUkVTRVQiLCJhcHBseVJlc2V0IiwiU0VUX0NBUlQiLCJhcHBseVNldENhcnQiLCJTRVRfTU9ERSIsImFwcGx5U2V0TW9kZSIsIlNFVF9TUEVFQ0hfQ09ORklHIiwiYXBwbHlTZXRTcGVlY2hDb25maWciLCJTRVRfU1BFRUNIX1NVUFBPUlQiLCJhcHBseVNldFNwZWVjaFN1cHBvcnQiLCJTRVRfV09STEQiLCJhcHBseVNldFdvcmxkIiwiVU5ETyIsImFwcGx5VW5kbyIsIlVQREFURV9ISVNUT1JZX0lURU0iLCJhcHBseVVwZGF0ZUhpc3RvcnlJdGVtIiwiaGlzdG9yeUlkcyIsIklkR2VuZXJhdG9yIiwiYXBwU3RhdGUiLCJjYXJ0Iiwic291cmNlIiwidGV4dCIsIml0ZW0iLCJjb3JyZWN0bmVzcyIsIkNvcnJlY3RuZXNzIiwiVU5LTk9XTiIsImlkIiwibmV4dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJoaXN0b3J5IiwidW5kb1N0YWNrIiwic2xpY2UiLCJwdXNoIiwiaXRlbXMiLCJmaW5hbCIsInRyYW5zY3JpcHRpb24iLCJzcGVlY2hUb1RleHRGaWx0ZXIiLCJpc1JlY29yZGluZyIsIm1vZGUiLCJzcGVlY2hDb25maWciLCJjb25zb2xlIiwibG9nIiwic3BlZWNoU3VwcG9ydCIsImJsdWVQbGF0ZVdvcmxkIiwibGFuZ3VhZ2UiLCJsZW5ndGgiLCJUZXh0U291cmNlIiwi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QVMsQ0FBQ0EsU0FBUyxDQUFDZSxNQUFWLEdBQW1CLENBQXBCLENBQXRCO0FBQ0FmLGFBQVMsR0FBR0EsU0FBUyxDQUFDQyxLQUFWLENBQWdCLENBQWhCLEVBQW1CLENBQUMsQ0FBcEIsQ0FBWjtBQUVBLFFBQU1WLElBQWlCLEdBQ3ZCO0FBQ0VILFVBQUksRUFBSkEsSUFERjtBQUVFSSxpQkFBVyxFQUFFQyw4REFBVyxDQUFDQyxPQUYzQjtBQUdFQyxRQUFFLEVBQUVWLFVBQVUsQ0FBQ1csSUFBWCxFQUhOO0FBSUVQLFlBQU0sRUFBRTJCLDZEQUFVLENBQUNDLE9BSnJCO0FBS0VwQixlQUFTLEVBQUUsSUFBSUMsSUFBSixFQUxiO0FBTUVSLFVBQUksRUFBRTtBQU5SLEtBREE7QUFVQSxRQUFNUyxPQUFPLDBHQUFPWixRQUFRLENBQUNZLE9BQWhCLElBQXlCUixJQUF6QixFQUFiO0FBRUEsMkNBQ0tKLFFBREw7QUFFRUMsVUFBSSxFQUFKQSxJQUZGO0FBR0VXLGFBQU8sRUFBUEEsT0FIRjtBQUlFQyxlQUFTLEVBQVRBO0FBSkY7QUFNRDs7QUFFRCxTQUFPYixRQUFQO0FBQ0Q7O0FBRUQsU0FBU0gsc0JBQVQsQ0FDRUcsUUFERixTQUdvQjtBQUFBLE1BRGhCUSxFQUNnQixTQURoQkEsRUFDZ0I7QUFBQSxNQURadUIsT0FDWSxTQURaQSxPQUNZO0FBQ2xCLE1BQU1uQixPQUFPLEdBQUdaLFFBQVEsQ0FBQ1ksT0FBVCxDQUFpQm9CLEdBQWpCLENBQXFCLFVBQUE1QixJQUFJO0FBQUEsV0FDdENJLEVBQUUsS0FBS0osSUFBSSxDQUFDSSxFQUFiLG1DQUF3QkosSUFBeEIsR0FBaUMyQixPQUFqQyxJQUE2QzNCLElBRE47QUFBQSxHQUF6QixDQUFoQjtBQUlBLHlDQUNLSixRQURMO0FBRUVZLFdBQU8sRUFBUEE7QUFGRjtBQUlEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zMzM1OGI5YjllODY0OGNiZmZiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWRHZW5lcmF0b3IsIHNwZWVjaFRvVGV4dEZpbHRlciB9IGZyb20gJ3ByaXgtZml4ZSc7XHJcbmltcG9ydCB7IFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFjdGlvblR5cGUsXHJcbiAgQW55QWN0aW9uLFxyXG4gIEFwcGVuZEhpc3RvcnlBY3Rpb24sXHJcbiAgQ2xlYXJDYXJ0QWN0aW9uLFxyXG4gIENsZWFySGlzdG9yeUFjdGlvbixcclxuICBQcm9jZXNzQWN0aW9uLFxyXG4gIFJlY29yZEFjdGlvbixcclxuICBSZXNldEFjdGlvbixcclxuICBTZXRDYXJ0QWN0aW9uLFxyXG4gIFNldE1vZGVBY3Rpb24sXHJcbiAgU2V0V29ybGRBY3Rpb24sXHJcbiAgU2V0U3BlZWNoQ29uZmlnQWN0aW9uLFxyXG4gIFNldFNwZWVjaFN1cHBvcnRBY3Rpb24sXHJcbiAgVW5kb0FjdGlvbixcclxuICBVcGRhdGVIaXN0b3J5SXRlbUFjdGlvbixcclxufSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBIaXN0b3J5SXRlbSxcclxuICBDb3JyZWN0bmVzcyxcclxuICBUZXh0U291cmNlLFxyXG59IGZyb20gJy4vYXBwbGljYXRpb24tc3RhdGUnO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZWR1Y2VyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aW9uU3RhdGVSZWR1Y2VyOiBSZWR1Y2VyPEFwcGxpY2F0aW9uU3RhdGUsIEFueUFjdGlvbj4gPVxyXG4gIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSA9IGluaXRpYWxTdGF0ZSgpLCBhY3Rpb24pOiBBcHBsaWNhdGlvblN0YXRlID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLkFQUEVORF9ISVNUT1JZOlxyXG4gICAgICAgIHJldHVybiBhcHBseUFwcGVuZEhpc3Rvcnkoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5DTEVBUl9DQVJUOlxyXG4gICAgICAgIHJldHVybiBhcHBseUNsZWFyQ2FydChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLkNMRUFSX0hJU1RPUlk6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5Q2xlYXJIaXN0b3J5KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUFJPQ0VTUzpcclxuICAgICAgICByZXR1cm4gYXBwbHlQcm9jZXNzKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUkVDT1JEOlxyXG4gICAgICAgIHJldHVybiBhcHBseVJlY29yZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlJFU0VUOlxyXG4gICAgICAgIHJldHVybiBhcHBseVJlc2V0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX0NBUlQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0Q2FydChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9NT0RFOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldE1vZGUoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfU1BFRUNIX0NPTkZJRzpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRTcGVlY2hDb25maWcoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfU1BFRUNIX1NVUFBPUlQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0U3BlZWNoU3VwcG9ydChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9XT1JMRDpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRXb3JsZChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlVORE86XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5VW5kbyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlVQREFURV9ISVNUT1JZX0lURU06XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5VXBkYXRlSGlzdG9yeUl0ZW0oc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGhpc3RvcnlJZHMgPSBuZXcgSWRHZW5lcmF0b3IoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5QXBwZW5kSGlzdG9yeShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IGNhcnQsIHNvdXJjZSwgdGV4dCB9OiBBcHBlbmRIaXN0b3J5QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIGNvbnN0IGl0ZW06IEhpc3RvcnlJdGVtID0ge1xyXG4gICAgY2FydCxcclxuICAgIGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcy5VTktOT1dOLFxyXG4gICAgaWQ6IGhpc3RvcnlJZHMubmV4dCgpLFxyXG4gICAgc291cmNlLFxyXG4gICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgdGV4dFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGlzdG9yeSA9IFsuLi5hcHBTdGF0ZS5oaXN0b3J5LCBpdGVtXTtcclxuICBjb25zdCB1bmRvU3RhY2sgPSBhcHBTdGF0ZS51bmRvU3RhY2suc2xpY2UoLTIwKTtcclxuICB1bmRvU3RhY2sucHVzaChjYXJ0KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgaGlzdG9yeSxcclxuICAgIHVuZG9TdGFjayxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5Q2xlYXJDYXJ0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIGFjdGlvbjogQ2xlYXJDYXJ0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGNhcnQ6IHsgaXRlbXM6IFtdIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5Q2xlYXJIaXN0b3J5KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIGFjdGlvbjogQ2xlYXJIaXN0b3J5QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIGhpc3Rvcnk6IFtdXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVByb2Nlc3MoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyB0ZXh0LCBmaW5hbCB9OiBQcm9jZXNzQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIC8vIEp1c3QgdXBkYXRlIHRoZSB0cmFuc2NyaXB0aW9uLlxyXG4gIC8vIFRoZSByZWFsIHdvcmsgaXMgZG9uZSBpbiBhIHNhZ2EuXHJcblxyXG4gIC8vIFRPRE86IGNhbGwgdG8gc3BlZWNoVG9UZXh0RmlsdGVyKCkgc2hvdWxkIG5vdCBiZSBkdXBsaWNhdGVkXHJcbiAgLy8gaW4gcHJvY2Vzc1NhZ2EoKS5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICB0cmFuc2NyaXB0aW9uOiBzcGVlY2hUb1RleHRGaWx0ZXIodGV4dCksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlSZWNvcmQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBpc1JlY29yZGluZyB9OiBSZWNvcmRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgaXNSZWNvcmRpbmdcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVJlc2V0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIGFjdGlvbjogUmVzZXRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgdHJhbnNjcmlwdGlvbjogJycsXHJcbiAgICBjYXJ0OiB7XHJcbiAgICAgIGl0ZW1zOiBbXVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldENhcnQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBjYXJ0IH06IFNldENhcnRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgY2FydFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0TW9kZShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IG1vZGUgfTogU2V0TW9kZUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBtb2RlXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRTcGVlY2hDb25maWcoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBzcGVlY2hDb25maWcgfTogU2V0U3BlZWNoQ29uZmlnQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIGNvbnNvbGUubG9nKCdhcHBseVNwZWVjaENvbmZpZycpO1xyXG4gIGNvbnNvbGUubG9nKHNwZWVjaENvbmZpZyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgc3BlZWNoQ29uZmlnOiB7IC4uLmFwcFN0YXRlLnNwZWVjaENvbmZpZywgLi4uc3BlZWNoQ29uZmlnIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRTcGVlY2hTdXBwb3J0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgc3BlZWNoU3VwcG9ydCB9OiBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIGNvbnNvbGUubG9nKGBhcHBseVNldFNwZWVjaFN1cHBvcnQoJHtzcGVlY2hTdXBwb3J0fSlgKTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBzcGVlY2hDb25maWc6IHtcclxuICAgICAgLi4uYXBwU3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBzcGVlY2hTdXBwb3J0XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRXb3JsZChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IGJsdWVQbGF0ZVdvcmxkLCBoaXN0b3J5LCBsYW5ndWFnZSB9OiBTZXRXb3JsZEFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBibHVlUGxhdGVXb3JsZCxcclxuICAgIGhpc3RvcnksXHJcbiAgICBsYW5ndWFnZSxcclxuICAgIHVuZG9TdGFjazogW3sgaXRlbXM6IFtdIH1dLFxyXG4gICAgY2FydDogeyBpdGVtczogW10gfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVVuZG8oXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgYWN0aW9uOiBVbmRvQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIGxldCB1bmRvU3RhY2sgPSBhcHBTdGF0ZS51bmRvU3RhY2s7XHJcbiAgaWYgKHVuZG9TdGFjay5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBjYXJ0ID0gdW5kb1N0YWNrW3VuZG9TdGFjay5sZW5ndGggLSAyXTtcclxuICAgIHVuZG9TdGFjayA9IHVuZG9TdGFjay5zbGljZSgwLCAtMSk7XHJcblxyXG4gICAgY29uc3QgaXRlbTogSGlzdG9yeUl0ZW0gPVxyXG4gICAge1xyXG4gICAgICBjYXJ0LFxyXG4gICAgICBjb3JyZWN0bmVzczogQ29ycmVjdG5lc3MuVU5LTk9XTixcclxuICAgICAgaWQ6IGhpc3RvcnlJZHMubmV4dCgpLFxyXG4gICAgICBzb3VyY2U6IFRleHRTb3VyY2UuQ09NTUFORCxcclxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB0ZXh0OiAndW5kbydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaXN0b3J5ID0gWy4uLmFwcFN0YXRlLmhpc3RvcnksIGl0ZW1dO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgICBjYXJ0LFxyXG4gICAgICBoaXN0b3J5LFxyXG4gICAgICB1bmRvU3RhY2tcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcHBTdGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlVcGRhdGVIaXN0b3J5SXRlbShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IGlkLCBjaGFuZ2VzIH06IFVwZGF0ZUhpc3RvcnlJdGVtQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIGNvbnN0IGhpc3RvcnkgPSBhcHBTdGF0ZS5oaXN0b3J5Lm1hcChpdGVtID0+XHJcbiAgICAoaWQgPT09IGl0ZW0uaWQpID8geyAuLi5pdGVtLCAuLi5jaGFuZ2VzIH0gOiBpdGVtXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgaGlzdG9yeVxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==