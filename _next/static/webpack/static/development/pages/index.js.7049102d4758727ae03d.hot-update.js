webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");
/* harmony import */ var _actions_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/reducers */ "./actions/reducers.ts");
/* harmony import */ var _components_frame_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/frame-control */ "./components/frame-control.tsx");

var _jsxFileName = "D:\\git\\menubot\\blue-plate\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(initSagas);









var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_4__["default"])();
var initial = Object(_actions__WEBPACK_IMPORTED_MODULE_6__["initialState"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_actions_reducers__WEBPACK_IMPORTED_MODULE_7__["ApplicationStateReducer"], initial, Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(sagaMiddleware)); // https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app

var speechConfig = initial.speechConfig;
store.subscribe(function () {
  var config = store.getState().speechConfig;

  if (config !== speechConfig) {
    speechConfig = config;
    Object(_actions__WEBPACK_IMPORTED_MODULE_6__["saveSpeechConfig"])(speechConfig);
  }
});
sagaMiddleware.run(initSagas);
store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["loadWorld"])('en-US'));
store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["chromeDetect"])());

function initSagas() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function initSagas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_6__["ActionType"].LOAD_WORLD, _actions__WEBPACK_IMPORTED_MODULE_6__["loadWorldSaga"]);

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_6__["ActionType"].PROCESS, _actions__WEBPACK_IMPORTED_MODULE_6__["processSaga"]);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_6__["ActionType"].CHROME_DETECT, _actions__WEBPACK_IMPORTED_MODULE_6__["chromeDetectSaga"]);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function Home() {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(_components_frame_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiaW5pdFNhZ2FzIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImluaXRpYWwiLCJpbml0aWFsU3RhdGUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiQXBwbGljYXRpb25TdGF0ZVJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJzcGVlY2hDb25maWciLCJzdWJzY3JpYmUiLCJjb25maWciLCJnZXRTdGF0ZSIsInNhdmVTcGVlY2hDb25maWciLCJydW4iLCJkaXNwYXRjaCIsImxvYWRXb3JsZCIsImNocm9tZURldGVjdCIsInRha2VMYXRlc3QiLCJBY3Rpb25UeXBlIiwiTE9BRF9XT1JMRCIsImxvYWRXb3JsZFNhZ2EiLCJQUk9DRVNTIiwicHJvY2Vzc1NhZ2EiLCJDSFJPTUVfREVURUNUIiwiY2hyb21lRGV0ZWN0U2FnYSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0EyQ1VBLFM7O0FBM0NWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQSxJQUFNQyxjQUFjLEdBQUdDLDBEQUFvQixFQUEzQztBQUVBLElBQU1DLE9BQU8sR0FBR0MsNkRBQVksRUFBNUI7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQ3ZCQyx5RUFEdUIsRUFFdkJKLE9BRnVCLEVBR3ZCSyw2REFBZSxDQUFDUCxjQUFELENBSFEsQ0FBekIsQyxDQU1BOztBQUNBLElBQUlRLFlBQVksR0FBR04sT0FBTyxDQUFDTSxZQUEzQjtBQUNBSixLQUFLLENBQUNLLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixNQUFNQyxNQUFNLEdBQUdOLEtBQUssQ0FBQ08sUUFBTixHQUFpQkgsWUFBaEM7O0FBQ0EsTUFBSUUsTUFBTSxLQUFLRixZQUFmLEVBQTZCO0FBQzNCQSxnQkFBWSxHQUFHRSxNQUFmO0FBQ0FFLHFFQUFnQixDQUFDSixZQUFELENBQWhCO0FBQ0Q7QUFDRixDQU5EO0FBUUFSLGNBQWMsQ0FBQ2EsR0FBZixDQUFtQmQsU0FBbkI7QUFDQUssS0FBSyxDQUFDVSxRQUFOLENBQWVDLDBEQUFTLENBQUMsT0FBRCxDQUF4QjtBQUNBWCxLQUFLLENBQUNVLFFBQU4sQ0FBZUUsNkRBQVksRUFBM0I7O0FBRUEsU0FBVWpCLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUUsaUJBQU1rQixxRUFBVSxDQUFDQyxtREFBVSxDQUFDQyxVQUFaLEVBQXdCQyxzREFBeEIsQ0FBaEI7O0FBRkY7QUFBQTtBQUdFLGlCQUFNSCxxRUFBVSxDQUFDQyxtREFBVSxDQUFDRyxPQUFaLEVBQXFCQyxvREFBckIsQ0FBaEI7O0FBSEY7QUFBQTtBQUlFLGlCQUFNTCxxRUFBVSxDQUFDQyxtREFBVSxDQUFDSyxhQUFaLEVBQTJCQyx5REFBM0IsQ0FBaEI7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2UsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixTQUNFLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVyQixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FERjtBQUtEO0tBTnVCcUIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzA0OTEwMmQ0NzU4NzI3YWUwM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXHJcbmltcG9ydCB7IHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIGNocm9tZURldGVjdCxcclxuICBjaHJvbWVEZXRlY3RTYWdhLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBsb2FkV29ybGQsXHJcbiAgbG9hZFdvcmxkU2FnYSxcclxuICBwcm9jZXNzU2FnYSxcclxuICBzYXZlU3BlZWNoQ29uZmlnLFxyXG59IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZVJlZHVjZXIgfSBmcm9tICcuLi9hY3Rpb25zL3JlZHVjZXJzJ1xyXG5pbXBvcnQgRnJhbWVDb250cm9sIGZyb20gJy4uL2NvbXBvbmVudHMvZnJhbWUtY29udHJvbCc7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcclxuXHJcbmNvbnN0IGluaXRpYWwgPSBpbml0aWFsU3RhdGUoKTtcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICBBcHBsaWNhdGlvblN0YXRlUmVkdWNlcixcclxuICBpbml0aWFsLFxyXG4gIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSlcclxuKTtcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1MzA1NjYxL3doZXJlLXRvLXdyaXRlLXRvLWxvY2Fsc3RvcmFnZS1pbi1hLXJlZHV4LWFwcFxyXG5sZXQgc3BlZWNoQ29uZmlnID0gaW5pdGlhbC5zcGVlY2hDb25maWc7XHJcbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgY29uc3QgY29uZmlnID0gc3RvcmUuZ2V0U3RhdGUoKS5zcGVlY2hDb25maWc7XHJcbiAgaWYgKGNvbmZpZyAhPT0gc3BlZWNoQ29uZmlnKSB7XHJcbiAgICBzcGVlY2hDb25maWcgPSBjb25maWc7XHJcbiAgICBzYXZlU3BlZWNoQ29uZmlnKHNwZWVjaENvbmZpZyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnNhZ2FNaWRkbGV3YXJlLnJ1bihpbml0U2FnYXMpXHJcbnN0b3JlLmRpc3BhdGNoKGxvYWRXb3JsZCgnZW4tVVMnKSk7XHJcbnN0b3JlLmRpc3BhdGNoKGNocm9tZURldGVjdCgpKTtcclxuXHJcbmZ1bmN0aW9uKiBpbml0U2FnYXMoKSB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2luaXRTYWdhcygpJyk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlLkxPQURfV09STEQsIGxvYWRXb3JsZFNhZ2EpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQWN0aW9uVHlwZS5QUk9DRVNTLCBwcm9jZXNzU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlLkNIUk9NRV9ERVRFQ1QsIGNocm9tZURldGVjdFNhZ2EpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8RnJhbWVDb250cm9sLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9