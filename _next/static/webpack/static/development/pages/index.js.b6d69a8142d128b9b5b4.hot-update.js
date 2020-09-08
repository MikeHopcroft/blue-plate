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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiaW5pdFNhZ2FzIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImluaXRpYWwiLCJpbml0aWFsU3RhdGUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiQXBwbGljYXRpb25TdGF0ZVJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJzcGVlY2hDb25maWciLCJzdWJzY3JpYmUiLCJjb25maWciLCJnZXRTdGF0ZSIsInNhdmVTcGVlY2hDb25maWciLCJydW4iLCJkaXNwYXRjaCIsImxvYWRXb3JsZCIsImNocm9tZURldGVjdCIsInRha2VMYXRlc3QiLCJBY3Rpb25UeXBlIiwiTE9BRF9XT1JMRCIsImxvYWRXb3JsZFNhZ2EiLCJQUk9DRVNTIiwicHJvY2Vzc1NhZ2EiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBMENVQSxTOztBQTFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBRUEsSUFBTUMsY0FBYyxHQUFHQywwREFBb0IsRUFBM0M7QUFFQSxJQUFNQyxPQUFPLEdBQUdDLDZEQUFZLEVBQTVCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUN2QkMseUVBRHVCLEVBRXZCSixPQUZ1QixFQUd2QkssNkRBQWUsQ0FBQ1AsY0FBRCxDQUhRLENBQXpCLEMsQ0FNQTs7QUFDQSxJQUFJUSxZQUFZLEdBQUdOLE9BQU8sQ0FBQ00sWUFBM0I7QUFDQUosS0FBSyxDQUFDSyxTQUFOLENBQWdCLFlBQU07QUFDcEIsTUFBTUMsTUFBTSxHQUFHTixLQUFLLENBQUNPLFFBQU4sR0FBaUJILFlBQWhDOztBQUNBLE1BQUlFLE1BQU0sS0FBS0YsWUFBZixFQUE2QjtBQUMzQkEsZ0JBQVksR0FBR0UsTUFBZjtBQUNBRSxxRUFBZ0IsQ0FBQ0osWUFBRCxDQUFoQjtBQUNEO0FBQ0YsQ0FORDtBQVFBUixjQUFjLENBQUNhLEdBQWYsQ0FBbUJkLFNBQW5CO0FBQ0FLLEtBQUssQ0FBQ1UsUUFBTixDQUFlQywwREFBUyxDQUFDLE9BQUQsQ0FBeEI7QUFDQVgsS0FBSyxDQUFDVSxRQUFOLENBQWVFLDZEQUFZLEVBQTNCOztBQUVBLFNBQVVqQixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNa0IscUVBQVUsQ0FBQ0MsbURBQVUsQ0FBQ0MsVUFBWixFQUF3QkMsc0RBQXhCLENBQWhCOztBQURGO0FBQUE7QUFFRSxpQkFBTUgscUVBQVUsQ0FBQ0MsbURBQVUsQ0FBQ0csT0FBWixFQUFxQkMsb0RBQXJCLENBQWhCOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFbkIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREY7QUFLRDtLQU51Qm1CLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmI2ZDY5YTgxNDJkMTI4YjliNWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBjaHJvbWVEZXRlY3QsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIGxvYWRXb3JsZCxcclxuICBsb2FkV29ybGRTYWdhLFxyXG4gIHByb2Nlc3NTYWdhLFxyXG4gIHNhdmVTcGVlY2hDb25maWcsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlUmVkdWNlciB9IGZyb20gJy4uL2FjdGlvbnMvcmVkdWNlcnMnXHJcbmltcG9ydCBGcmFtZUNvbnRyb2wgZnJvbSAnLi4vY29tcG9uZW50cy9mcmFtZS1jb250cm9sJztcclxuXHJcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxyXG5cclxuY29uc3QgaW5pdGlhbCA9IGluaXRpYWxTdGF0ZSgpO1xyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIEFwcGxpY2F0aW9uU3RhdGVSZWR1Y2VyLFxyXG4gIGluaXRpYWwsXHJcbiAgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKVxyXG4pO1xyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzUzMDU2NjEvd2hlcmUtdG8td3JpdGUtdG8tbG9jYWxzdG9yYWdlLWluLWEtcmVkdXgtYXBwXHJcbmxldCBzcGVlY2hDb25maWcgPSBpbml0aWFsLnNwZWVjaENvbmZpZztcclxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICBjb25zdCBjb25maWcgPSBzdG9yZS5nZXRTdGF0ZSgpLnNwZWVjaENvbmZpZztcclxuICBpZiAoY29uZmlnICE9PSBzcGVlY2hDb25maWcpIHtcclxuICAgIHNwZWVjaENvbmZpZyA9IGNvbmZpZztcclxuICAgIHNhdmVTcGVlY2hDb25maWcoc3BlZWNoQ29uZmlnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuc2FnYU1pZGRsZXdhcmUucnVuKGluaXRTYWdhcylcclxuc3RvcmUuZGlzcGF0Y2gobG9hZFdvcmxkKCdlbi1VUycpKTtcclxuc3RvcmUuZGlzcGF0Y2goY2hyb21lRGV0ZWN0KCkpO1xyXG5cclxuZnVuY3Rpb24qIGluaXRTYWdhcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFjdGlvblR5cGUuTE9BRF9XT1JMRCwgbG9hZFdvcmxkU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlLlBST0NFU1MsIHByb2Nlc3NTYWdhKTtcclxuXHJcbiAgLy8gQ2hyb21lIGRldGVjdGlvbiBub3cgaGFuZGxlZCBieSBDaHJvbWVEZXRlY3QgY29tcG9uZW50LlxyXG4gIC8vIHlpZWxkIHRha2VMYXRlc3QoQWN0aW9uVHlwZS5DSFJPTUVfREVURUNULCBjaHJvbWVEZXRlY3RTYWdhKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPEZyYW1lQ29udHJvbC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==