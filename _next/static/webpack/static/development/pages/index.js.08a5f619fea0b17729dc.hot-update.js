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
  x;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3JlZHVjZXJzLnRzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQWN0aW9uVHlwZSIsIkFQUEVORF9ISVNUT1JZIiwiYXBwbHlBcHBlbmRIaXN0b3J5IiwiQ0xFQVJfQ0FSVCIsImFwcGx5Q2xlYXJDYXJ0IiwiQ0xFQVJfSElTVE9SWSIsImFwcGx5Q2xlYXJIaXN0b3J5IiwiUFJPQ0VTUyIsImFwcGx5UHJvY2VzcyIsIlJFQ09SRCIsImFwcGx5UmVjb3JkIiwiUkVTRVQiLCJhcHBseVJlc2V0IiwiU0VUX0NBUlQiLCJhcHBseVNldENhcnQiLCJTRVRfTU9ERSIsImFwcGx5U2V0TW9kZSIsIlNFVF9TUEVFQ0hfQ09ORklHIiwiYXBwbHlTZXRTcGVlY2hDb25maWciLCJTRVRfU1BFRUNIX1NVUFBPUlQiLCJhcHBseVNldFNwZWVjaFN1cHBvcnQiLCJTRVRfV09STEQiLCJhcHBseVNldFdvcmxkIiwiVU5ETyIsImFwcGx5VW5kbyIsIlVQREFURV9ISVNUT1JZX0lURU0iLCJhcHBseVVwZGF0ZUhpc3RvcnlJdGVtIiwiaGlzdG9yeUlkcyIsIklkR2VuZXJhdG9yIiwiYXBwU3RhdGUiLCJjYXJ0Iiwic291cmNlIiwidGV4dCIsIml0ZW0iLCJjb3JyZWN0bmVzcyIsIkNvcnJlY3RuZXNzIiwiVU5LTk9XTiIsImlkIiwibmV4dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJoaXN0b3J5IiwidW5kb1N0YWNrIiwic2xpY2UiLCJwdXNoIiwiaXRlbXMiLCJmaW5hbCIsInRyYW5zY3JpcHRpb24iLCJzcGVlY2hUb1RleHRGaWx0ZXIiLCJpc1JlY29yZGluZyIsIm1vZGUiLCJzcGVlY2hDb25maWciLCJjb25zb2xlIiwibG9nIiwic3BlZWNoU3VwcG9ydCIsIngiLCJibHVlUGxhdGVXb3JsZCIsImxhbmd1YWdlIiwibGVuZ3RoIiwiVGV4dFNvdXJj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QU01QixJQUFJLEdBQUdZLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDZ0IsTUFBVixHQUFtQixDQUFwQixDQUF0QjtBQUNBaEIsYUFBUyxHQUFHQSxTQUFTLENBQUNDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBQyxDQUFwQixDQUFaO0FBRUEsUUFBTVYsSUFBaUIsR0FDdkI7QUFDRUgsVUFBSSxFQUFKQSxJQURGO0FBRUVJLGlCQUFXLEVBQUVDLDhEQUFXLENBQUNDLE9BRjNCO0FBR0VDLFFBQUUsRUFBRVYsVUFBVSxDQUFDVyxJQUFYLEVBSE47QUFJRVAsWUFBTSxFQUFFNEIsNkRBQVUsQ0FBQ0MsT0FKckI7QUFLRXJCLGVBQVMsRUFBRSxJQUFJQyxJQUFKLEVBTGI7QUFNRVIsVUFBSSxFQUFFO0FBTlIsS0FEQTtBQVVBLFFBQU1TLE9BQU8sMEdBQU9aLFFBQVEsQ0FBQ1ksT0FBaEIsSUFBeUJSLElBQXpCLEVBQWI7QUFFQSwyQ0FDS0osUUFETDtBQUVFQyxVQUFJLEVBQUpBLElBRkY7QUFHRVcsYUFBTyxFQUFQQSxPQUhGO0FBSUVDLGVBQVMsRUFBVEE7QUFKRjtBQU1EOztBQUVELFNBQU9iLFFBQVA7QUFDRDs7QUFFRCxTQUFTSCxzQkFBVCxDQUNFRyxRQURGLFNBR29CO0FBQUEsTUFEaEJRLEVBQ2dCLFNBRGhCQSxFQUNnQjtBQUFBLE1BRFp3QixPQUNZLFNBRFpBLE9BQ1k7QUFDbEIsTUFBTXBCLE9BQU8sR0FBR1osUUFBUSxDQUFDWSxPQUFULENBQWlCcUIsR0FBakIsQ0FBcUIsVUFBQTdCLElBQUk7QUFBQSxXQUN0Q0ksRUFBRSxLQUFLSixJQUFJLENBQUNJLEVBQWIsbUNBQXdCSixJQUF4QixHQUFpQzRCLE9BQWpDLElBQTZDNUIsSUFETjtBQUFBLEdBQXpCLENBQWhCO0FBSUEseUNBQ0tKLFFBREw7QUFFRVksV0FBTyxFQUFQQTtBQUZGO0FBSUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjA4YTVmNjE5ZmVhMGIxNzcyOWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZEdlbmVyYXRvciwgc3BlZWNoVG9UZXh0RmlsdGVyIH0gZnJvbSAncHJpeC1maXhlJztcclxuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBBbnlBY3Rpb24sXHJcbiAgQXBwZW5kSGlzdG9yeUFjdGlvbixcclxuICBDbGVhckNhcnRBY3Rpb24sXHJcbiAgQ2xlYXJIaXN0b3J5QWN0aW9uLFxyXG4gIFByb2Nlc3NBY3Rpb24sXHJcbiAgUmVjb3JkQWN0aW9uLFxyXG4gIFJlc2V0QWN0aW9uLFxyXG4gIFNldENhcnRBY3Rpb24sXHJcbiAgU2V0TW9kZUFjdGlvbixcclxuICBTZXRXb3JsZEFjdGlvbixcclxuICBTZXRTcGVlY2hDb25maWdBY3Rpb24sXHJcbiAgU2V0U3BlZWNoU3VwcG9ydEFjdGlvbixcclxuICBVbmRvQWN0aW9uLFxyXG4gIFVwZGF0ZUhpc3RvcnlJdGVtQWN0aW9uLFxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIEhpc3RvcnlJdGVtLFxyXG4gIENvcnJlY3RuZXNzLFxyXG4gIFRleHRTb3VyY2UsXHJcbn0gZnJvbSAnLi9hcHBsaWNhdGlvbi1zdGF0ZSc7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZHVjZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgQXBwbGljYXRpb25TdGF0ZVJlZHVjZXI6IFJlZHVjZXI8QXBwbGljYXRpb25TdGF0ZSwgQW55QWN0aW9uPiA9XHJcbiAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlID0gaW5pdGlhbFN0YXRlKCksIGFjdGlvbik6IEFwcGxpY2F0aW9uU3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuQVBQRU5EX0hJU1RPUlk6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5QXBwZW5kSGlzdG9yeShzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLkNMRUFSX0NBUlQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5Q2xlYXJDYXJ0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuQ0xFQVJfSElTVE9SWTpcclxuICAgICAgICByZXR1cm4gYXBwbHlDbGVhckhpc3Rvcnkoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5QUk9DRVNTOlxyXG4gICAgICAgIHJldHVybiBhcHBseVByb2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5SRUNPUkQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5UmVjb3JkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUkVTRVQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5UmVzZXQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfQ0FSVDpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRDYXJ0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX01PREU6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0TW9kZShzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9TUEVFQ0hfQ09ORklHOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldFNwZWVjaENvbmZpZyhzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9TUEVFQ0hfU1VQUE9SVDpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRTcGVlY2hTdXBwb3J0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1dPUkxEOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldFdvcmxkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuVU5ETzpcclxuICAgICAgICByZXR1cm4gYXBwbHlVbmRvKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuVVBEQVRFX0hJU1RPUllfSVRFTTpcclxuICAgICAgICByZXR1cm4gYXBwbHlVcGRhdGVIaXN0b3J5SXRlbShzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaGlzdG9yeUlkcyA9IG5ldyBJZEdlbmVyYXRvcigpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlBcHBlbmRIaXN0b3J5KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgY2FydCwgc291cmNlLCB0ZXh0IH06IEFwcGVuZEhpc3RvcnlBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgY29uc3QgaXRlbTogSGlzdG9yeUl0ZW0gPSB7XHJcbiAgICBjYXJ0LFxyXG4gICAgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzLlVOS05PV04sXHJcbiAgICBpZDogaGlzdG9yeUlkcy5uZXh0KCksXHJcbiAgICBzb3VyY2UsXHJcbiAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICB0ZXh0XHJcbiAgfVxyXG5cclxuICBjb25zdCBoaXN0b3J5ID0gWy4uLmFwcFN0YXRlLmhpc3RvcnksIGl0ZW1dO1xyXG4gIGNvbnN0IHVuZG9TdGFjayA9IGFwcFN0YXRlLnVuZG9TdGFjay5zbGljZSgtMjApO1xyXG4gIHVuZG9TdGFjay5wdXNoKGNhcnQpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBoaXN0b3J5LFxyXG4gICAgdW5kb1N0YWNrLFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDbGVhckNhcnQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgYWN0aW9uOiBDbGVhckNhcnRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgY2FydDogeyBpdGVtczogW10gfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDbGVhckhpc3RvcnkoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgYWN0aW9uOiBDbGVhckhpc3RvcnlBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgaGlzdG9yeTogW11cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5UHJvY2VzcyhcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IHRleHQsIGZpbmFsIH06IFByb2Nlc3NBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgLy8gSnVzdCB1cGRhdGUgdGhlIHRyYW5zY3JpcHRpb24uXHJcbiAgLy8gVGhlIHJlYWwgd29yayBpcyBkb25lIGluIGEgc2FnYS5cclxuXHJcbiAgLy8gVE9ETzogY2FsbCB0byBzcGVlY2hUb1RleHRGaWx0ZXIoKSBzaG91bGQgbm90IGJlIGR1cGxpY2F0ZWRcclxuICAvLyBpbiBwcm9jZXNzU2FnYSgpLlxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHRyYW5zY3JpcHRpb246IHNwZWVjaFRvVGV4dEZpbHRlcih0ZXh0KSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVJlY29yZChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IGlzUmVjb3JkaW5nIH06IFJlY29yZEFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBpc1JlY29yZGluZ1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5UmVzZXQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgYWN0aW9uOiBSZXNldEFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICB0cmFuc2NyaXB0aW9uOiAnJyxcclxuICAgIGNhcnQ6IHtcclxuICAgICAgaXRlbXM6IFtdXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0Q2FydChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IGNhcnQgfTogU2V0Q2FydEFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBjYXJ0XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRNb2RlKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgbW9kZSB9OiBTZXRNb2RlQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIG1vZGVcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldFNwZWVjaENvbmZpZyhcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IHNwZWVjaENvbmZpZyB9OiBTZXRTcGVlY2hDb25maWdBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgY29uc29sZS5sb2coJ2FwcGx5U3BlZWNoQ29uZmlnJyk7XHJcbiAgY29uc29sZS5sb2coc3BlZWNoQ29uZmlnKTtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBzcGVlY2hDb25maWc6IHsgLi4uYXBwU3RhdGUuc3BlZWNoQ29uZmlnLCAuLi5zcGVlY2hDb25maWcgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldFNwZWVjaFN1cHBvcnQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBzcGVlY2hTdXBwb3J0IH06IFNldFNwZWVjaFN1cHBvcnRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgY29uc29sZS5sb2coYGFwcGx5U2V0U3BlZWNoU3VwcG9ydCgke3NwZWVjaFN1cHBvcnR9KWApO1xyXG4gIHhcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBzcGVlY2hDb25maWc6IHtcclxuICAgICAgLi4uYXBwU3RhdGUuc3BlZWNoQ29uZmlnLFxyXG4gICAgICBzcGVlY2hTdXBwb3J0XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRXb3JsZChcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IGJsdWVQbGF0ZVdvcmxkLCBoaXN0b3J5LCBsYW5ndWFnZSB9OiBTZXRXb3JsZEFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBibHVlUGxhdGVXb3JsZCxcclxuICAgIGhpc3RvcnksXHJcbiAgICBsYW5ndWFnZSxcclxuICAgIHVuZG9TdGFjazogW3sgaXRlbXM6IFtdIH1dLFxyXG4gICAgY2FydDogeyBpdGVtczogW10gfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVVuZG8oXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgYWN0aW9uOiBVbmRvQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIGxldCB1bmRvU3RhY2sgPSBhcHBTdGF0ZS51bmRvU3RhY2s7XHJcbiAgaWYgKHVuZG9TdGFjay5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBjYXJ0ID0gdW5kb1N0YWNrW3VuZG9TdGFjay5sZW5ndGggLSAyXTtcclxuICAgIHVuZG9TdGFjayA9IHVuZG9TdGFjay5zbGljZSgwLCAtMSk7XHJcblxyXG4gICAgY29uc3QgaXRlbTogSGlzdG9yeUl0ZW0gPVxyXG4gICAge1xyXG4gICAgICBjYXJ0LFxyXG4gICAgICBjb3JyZWN0bmVzczogQ29ycmVjdG5lc3MuVU5LTk9XTixcclxuICAgICAgaWQ6IGhpc3RvcnlJZHMubmV4dCgpLFxyXG4gICAgICBzb3VyY2U6IFRleHRTb3VyY2UuQ09NTUFORCxcclxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB0ZXh0OiAndW5kbydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaXN0b3J5ID0gWy4uLmFwcFN0YXRlLmhpc3RvcnksIGl0ZW1dO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgICBjYXJ0LFxyXG4gICAgICBoaXN0b3J5LFxyXG4gICAgICB1bmRvU3RhY2tcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcHBTdGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlVcGRhdGVIaXN0b3J5SXRlbShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IGlkLCBjaGFuZ2VzIH06IFVwZGF0ZUhpc3RvcnlJdGVtQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIGNvbnN0IGhpc3RvcnkgPSBhcHBTdGF0ZS5oaXN0b3J5Lm1hcChpdGVtID0+XHJcbiAgICAoaWQgPT09IGl0ZW0uaWQpID8geyAuLi5pdGVtLCAuLi5jaGFuZ2VzIH0gOiBpdGVtXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgaGlzdG9yeVxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==