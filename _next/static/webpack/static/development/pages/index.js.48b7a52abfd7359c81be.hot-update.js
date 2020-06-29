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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./actions/actions.ts");
/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application-state */ "./actions/application-state.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
  var history = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(appState.history), [item]);
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

  var optionPID = appState.optionPID,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(appState, ["optionPID"]);

  return _objectSpread(_objectSpread({}, rest), {}, {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvblN0YXRlUmVkdWNlciIsInN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFjdGlvblR5cGUiLCJBUFBFTkRfSElTVE9SWSIsImFwcGx5QXBwZW5kSGlzdG9yeSIsIkNMRUFSX0hJU1RPUlkiLCJhcHBseUNsZWFySGlzdG9yeSIsIlBST0NFU1MiLCJhcHBseVByb2Nlc3MiLCJSRUNPUkQiLCJhcHBseVJlY29yZCIsIlJFU0VUIiwiYXBwbHlSZXNldCIsIlNFVF9DQVJUIiwiYXBwbHlTZXRDYXJ0IiwiU0VUX01PREUiLCJhcHBseVNldE1vZGUiLCJTRVRfT1BUSU9OX1BJRCIsImFwcGx5U2V0T3B0aW9uUElEIiwiU0VUX1BJRCIsImFwcGx5U2V0UElEIiwiU0VUX1NQRUVDSF9TVVBQT1JUIiwiYXBwbHlTZXRTcGVlY2hTdXBwb3J0IiwiU0VUX1dPUkxEIiwiYXBwbHlTZXRXb3JsZCIsImFwcFN0YXRlIiwiY2FydCIsInNvdXJjZSIsInRleHQiLCJpdGVtIiwidGltZXN0YW1wIiwiRGF0ZSIsImhpc3RvcnkiLCJmaW5hbCIsInRyYW5zY3JpcHRpb24iLCJpc1JlY29yZGluZyIsIml0ZW1zIiwibW9kZSIsInBpZCIsIm9wdGlvblBJRCIsInJlc3QiLCJjdXJyZW50UElEIiwidW5kZWZpbmVkIiwic3BlZWNoU3VwcG9ydCIsIndvcmxkIiwic2hvcnRPcmRlcldvcmxkIiwibGV4aWNvblNwZWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtDQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLHVCQUE2RCxHQUN4RSxTQURXQSx1QkFDWCxHQUF3RTtBQUFBLE1BQXZFQyxLQUF1RSx1RUFBN0NDLHVFQUFZLEVBQWlDO0FBQUEsTUFBN0JDLE1BQTZCOztBQUN0RSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxtREFBVSxDQUFDQyxjQUFoQjtBQUNFLGFBQU9DLGtCQUFrQixDQUFDTixLQUFELEVBQVFFLE1BQVIsQ0FBekI7O0FBQ0YsU0FBS0UsbURBQVUsQ0FBQ0csYUFBaEI7QUFDRSxhQUFPQyxpQkFBaUIsQ0FBQ1IsS0FBRCxFQUFRRSxNQUFSLENBQXhCOztBQUNGLFNBQUtFLG1EQUFVLENBQUNLLE9BQWhCO0FBQ0UsYUFBT0MsWUFBWSxDQUFDVixLQUFELEVBQVFFLE1BQVIsQ0FBbkI7O0FBQ0YsU0FBS0UsbURBQVUsQ0FBQ08sTUFBaEI7QUFDRSxhQUFPQyxXQUFXLENBQUNaLEtBQUQsRUFBUUUsTUFBUixDQUFsQjs7QUFDRixTQUFLRSxtREFBVSxDQUFDUyxLQUFoQjtBQUNFLGFBQU9DLFVBQVUsQ0FBQ2QsS0FBRCxFQUFRRSxNQUFSLENBQWpCOztBQUNGLFNBQUtFLG1EQUFVLENBQUNXLFFBQWhCO0FBQ0UsYUFBT0MsWUFBWSxDQUFDaEIsS0FBRCxFQUFRRSxNQUFSLENBQW5COztBQUNGLFNBQUtFLG1EQUFVLENBQUNhLFFBQWhCO0FBQ0UsYUFBT0MsWUFBWSxDQUFDbEIsS0FBRCxFQUFRRSxNQUFSLENBQW5COztBQUNGLFNBQUtFLG1EQUFVLENBQUNlLGNBQWhCO0FBQ0UsYUFBT0MsaUJBQWlCLENBQUNwQixLQUFELEVBQVFFLE1BQVIsQ0FBeEI7O0FBQ0YsU0FBS0UsbURBQVUsQ0FBQ2lCLE9BQWhCO0FBQ0UsYUFBT0MsV0FBVyxDQUFDdEIsS0FBRCxFQUFRRSxNQUFSLENBQWxCOztBQUNGLFNBQUtFLG1EQUFVLENBQUNtQixrQkFBaEI7QUFDRSxhQUFPQyxxQkFBcUIsQ0FBQ3hCLEtBQUQsRUFBUUUsTUFBUixDQUE1Qjs7QUFDRixTQUFLRSxtREFBVSxDQUFDcUIsU0FBaEI7QUFDRSxhQUFPQyxhQUFhLENBQUMxQixLQUFELEVBQVFFLE1BQVIsQ0FBcEI7O0FBQ0Y7QUFDRSxhQUFPRixLQUFQO0FBeEJKO0FBMEJELENBNUJJO0tBQU1ELHVCOztBQThCYixTQUFTTyxrQkFBVCxDQUNFcUIsUUFERixRQUdvQjtBQUFBLE1BRGhCQyxJQUNnQixRQURoQkEsSUFDZ0I7QUFBQSxNQURWQyxNQUNVLFFBRFZBLE1BQ1U7QUFBQSxNQURGQyxJQUNFLFFBREZBLElBQ0U7QUFDbEIsTUFBTUMsSUFBaUIsR0FBRztBQUN4QkgsUUFBSSxFQUFKQSxJQUR3QjtBQUV4QkMsVUFBTSxFQUFOQSxNQUZ3QjtBQUd4QkcsYUFBUyxFQUFFLElBQUlDLElBQUosRUFIYTtBQUl4QkgsUUFBSSxFQUFKQTtBQUp3QixHQUExQjtBQU9BLE1BQU1JLE9BQU8sMEdBQU9QLFFBQVEsQ0FBQ08sT0FBaEIsSUFBeUJILElBQXpCLEVBQWI7QUFFQSx5Q0FDS0osUUFETDtBQUVFTyxXQUFPLEVBQVBBO0FBRkY7QUFJRDs7QUFFRCxTQUFTMUIsaUJBQVQsQ0FDRW1CLFFBREYsRUFFRXpCLE1BRkYsRUFHb0I7QUFDbEIseUNBQ0t5QixRQURMO0FBRUVPLFdBQU8sRUFBRTtBQUZYO0FBSUQ7O0FBRUQsU0FBU3hCLFlBQVQsQ0FDRWlCLFFBREYsU0FHb0I7QUFBQSxNQURoQkcsSUFDZ0IsU0FEaEJBLElBQ2dCO0FBQUEsTUFEVkssTUFDVTtBQUNsQjtBQUNBO0FBQ0EseUNBQ0tSLFFBREw7QUFFRVMsaUJBQWEsRUFBRU47QUFGakI7QUFJRDs7QUFFRCxTQUFTbEIsV0FBVCxDQUNFZSxRQURGLFNBR29CO0FBQUEsTUFEaEJVLFdBQ2dCLFNBRGhCQSxXQUNnQjtBQUNsQix5Q0FDS1YsUUFETDtBQUVFVSxlQUFXLEVBQVhBO0FBRkY7QUFJRDs7QUFFRCxTQUFTdkIsVUFBVCxDQUNFYSxRQURGLEVBRUV6QixNQUZGLEVBR29CO0FBQ2xCLHlDQUNLeUIsUUFETDtBQUVFUyxpQkFBYSxFQUFFLEVBRmpCO0FBR0VSLFFBQUksRUFBRTtBQUNKVSxXQUFLLEVBQUU7QUFESDtBQUhSO0FBT0Q7O0FBRUQsU0FBU3RCLFlBQVQsQ0FDRVcsUUFERixTQUdvQjtBQUFBLE1BRGhCQyxJQUNnQixTQURoQkEsSUFDZ0I7QUFDbEIseUNBQ0tELFFBREw7QUFFRUMsUUFBSSxFQUFKQTtBQUZGO0FBSUQ7O0FBRUQsU0FBU1YsWUFBVCxDQUNFUyxRQURGLFNBR29CO0FBQUEsTUFEaEJZLElBQ2dCLFNBRGhCQSxJQUNnQjtBQUNsQix5Q0FDS1osUUFETDtBQUVFWSxRQUFJLEVBQUpBO0FBRkY7QUFJRDs7QUFFRCxTQUFTbkIsaUJBQVQsQ0FDRU8sUUFERixTQUdvQjtBQUFBLE1BRGhCYSxHQUNnQixTQURoQkEsR0FDZ0I7QUFDbEIseUNBQ0tiLFFBREw7QUFFRWMsYUFBUyxFQUFFRDtBQUZiO0FBSUQ7O0FBRUQsU0FBU2xCLFdBQVQsQ0FDRUssUUFERixTQUdvQjtBQUFBLE1BRGhCYSxHQUNnQixTQURoQkEsR0FDZ0I7O0FBQUEsTUFDWEMsU0FEVyxHQUNXZCxRQURYLENBQ1hjLFNBRFc7QUFBQSxNQUNHQyxJQURILHNHQUNXZixRQURYOztBQUVsQix5Q0FDS2UsSUFETDtBQUVFQyxjQUFVLEVBQUVILEdBRmQ7QUFHRUMsYUFBUyxFQUFFRztBQUhiO0FBS0Q7O0FBRUQsU0FBU3BCLHFCQUFULENBQ0VHLFFBREYsU0FHb0I7QUFBQSxNQURoQmtCLGFBQ2dCLFNBRGhCQSxhQUNnQjtBQUNsQix5Q0FDS2xCLFFBREw7QUFFRWtCLGlCQUFhLEVBQWJBO0FBRkY7QUFJRDs7QUFFRCxTQUFTbkIsYUFBVCxDQUNFQyxRQURGLFNBR29CO0FBQUEsTUFEaEJtQixLQUNnQixTQURoQkEsS0FDZ0I7QUFBQSxNQURUQyxlQUNTLFNBRFRBLGVBQ1M7QUFBQSxNQURRQyxXQUNSLFNBRFFBLFdBQ1I7QUFDbEIseUNBQ0tyQixRQURMO0FBRUVtQixTQUFLLEVBQUxBLEtBRkY7QUFHRUMsbUJBQWUsRUFBZkEsZUFIRjtBQUlFQyxlQUFXLEVBQVhBLFdBSkY7QUFLRXBCLFFBQUksRUFBRTtBQUFFVSxXQUFLLEVBQUU7QUFBVDtBQUxSO0FBT0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTEQ7QUFBQTtBQUFBO0FBQTBFO0FBQzNEO0FBQ2Y7QUFDQSxlQUFlLDZFQUE0QjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ4YjdhNTJhYmZkNzM1OWM4MWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIEFueUFjdGlvbixcclxuICBBcHBlbmRIaXN0b3J5QWN0aW9uLFxyXG4gIENsZWFySGlzdG9yeUFjdGlvbixcclxuICBQcm9jZXNzQWN0aW9uLFxyXG4gIFJlY29yZEFjdGlvbixcclxuICBSZXNldEFjdGlvbixcclxuICBTZXRDYXJ0QWN0aW9uLFxyXG4gIFNldE1vZGVBY3Rpb24sXHJcbiAgU2V0T3B0aW9uUElEQWN0aW9uLFxyXG4gIFNldFBJREFjdGlvbixcclxuICBTZXRXb3JsZEFjdGlvbixcclxuICBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uLFxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIEhpc3RvcnlJdGVtLFxyXG4gIFRleHRTb3VyY2VcclxufSBmcm9tICcuL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVkdWNlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvblN0YXRlUmVkdWNlcjogUmVkdWNlcjxBcHBsaWNhdGlvblN0YXRlLCBBbnlBY3Rpb24+ID1cclxuICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUgPSBpbml0aWFsU3RhdGUoKSwgYWN0aW9uKTogQXBwbGljYXRpb25TdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5BUFBFTkRfSElTVE9SWTpcclxuICAgICAgICByZXR1cm4gYXBwbHlBcHBlbmRIaXN0b3J5KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuQ0xFQVJfSElTVE9SWTpcclxuICAgICAgICByZXR1cm4gYXBwbHlDbGVhckhpc3Rvcnkoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5QUk9DRVNTOlxyXG4gICAgICAgIHJldHVybiBhcHBseVByb2Nlc3Moc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5SRUNPUkQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5UmVjb3JkKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUkVTRVQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5UmVzZXQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfQ0FSVDpcclxuICAgICAgICByZXR1cm4gYXBwbHlTZXRDYXJ0KHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX01PREU6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0TW9kZShzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9PUFRJT05fUElEOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldE9wdGlvblBJRChzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9QSUQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0UElEKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1NQRUVDSF9TVVBQT1JUOlxyXG4gICAgICAgIHJldHVybiBhcHBseVNldFNwZWVjaFN1cHBvcnQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfV09STEQ6XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5U2V0V29ybGQoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5mdW5jdGlvbiBhcHBseUFwcGVuZEhpc3RvcnkoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBjYXJ0LCBzb3VyY2UsIHRleHQgfTogQXBwZW5kSGlzdG9yeUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICBjb25zdCBpdGVtOiBIaXN0b3J5SXRlbSA9IHtcclxuICAgIGNhcnQsXHJcbiAgICBzb3VyY2UsXHJcbiAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICB0ZXh0XHJcbiAgfVxyXG5cclxuICBjb25zdCBoaXN0b3J5ID0gWy4uLmFwcFN0YXRlLmhpc3RvcnksIGl0ZW1dO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBoaXN0b3J5XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsZWFySGlzdG9yeShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICBhY3Rpb246IENsZWFySGlzdG9yeUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBoaXN0b3J5OiBbXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlQcm9jZXNzKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgdGV4dCwgZmluYWwgfTogUHJvY2Vzc0FjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAvLyBKdXN0IHVwZGF0ZSB0aGUgdHJhbnNjcmlwdGlvbi5cclxuICAvLyBUaGUgcmVhbCB3b3JrIGlzIGRvbmUgaW4gYSBzYWdhLlxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHRyYW5zY3JpcHRpb246IHRleHQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlSZWNvcmQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBpc1JlY29yZGluZyB9OiBSZWNvcmRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgaXNSZWNvcmRpbmdcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVJlc2V0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIGFjdGlvbjogUmVzZXRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgdHJhbnNjcmlwdGlvbjogJycsXHJcbiAgICBjYXJ0OiB7XHJcbiAgICAgIGl0ZW1zOiBbXVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldENhcnQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBjYXJ0IH06IFNldENhcnRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgY2FydFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0TW9kZShcclxuICBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSxcclxuICB7IG1vZGUgfTogU2V0TW9kZUFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwU3RhdGUsXHJcbiAgICBtb2RlXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRPcHRpb25QSUQoXHJcbiAgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgeyBwaWQgfTogU2V0T3B0aW9uUElEQWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIG9wdGlvblBJRDogcGlkLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U2V0UElEKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgcGlkIH06IFNldFBJREFjdGlvblxyXG4pOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICBjb25zdCB7b3B0aW9uUElELCAuLi5yZXN0fSA9IGFwcFN0YXRlO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5yZXN0LFxyXG4gICAgY3VycmVudFBJRDogcGlkLFxyXG4gICAgb3B0aW9uUElEOiB1bmRlZmluZWQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTZXRTcGVlY2hTdXBwb3J0KFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgc3BlZWNoU3VwcG9ydCB9OiBTZXRTcGVlY2hTdXBwb3J0QWN0aW9uXHJcbik6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBTdGF0ZSxcclxuICAgIHNwZWVjaFN1cHBvcnRcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVNldFdvcmxkKFxyXG4gIGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlLFxyXG4gIHsgd29ybGQsIHNob3J0T3JkZXJXb3JsZCwgbGV4aWNvblNwZWMgfTogU2V0V29ybGRBY3Rpb25cclxuKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFN0YXRlLFxyXG4gICAgd29ybGQsXHJcbiAgICBzaG9ydE9yZGVyV29ybGQsXHJcbiAgICBsZXhpY29uU3BlYyxcclxuICAgIGNhcnQ6IHsgaXRlbXM6IFtdIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==