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
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(_components_frame_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiaW5pdFNhZ2FzIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImluaXRpYWwiLCJpbml0aWFsU3RhdGUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiQXBwbGljYXRpb25TdGF0ZVJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJzcGVlY2hDb25maWciLCJzdWJzY3JpYmUiLCJjb25maWciLCJnZXRTdGF0ZSIsInNhdmVTcGVlY2hDb25maWciLCJydW4iLCJkaXNwYXRjaCIsImxvYWRXb3JsZCIsImNocm9tZURldGVjdCIsInRha2VMYXRlc3QiLCJBY3Rpb25UeXBlIiwiTE9BRF9XT1JMRCIsImxvYWRXb3JsZFNhZ2EiLCJQUk9DRVNTIiwicHJvY2Vzc1NhZ2EiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBMkNVQSxTOztBQTNDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBRUEsSUFBTUMsY0FBYyxHQUFHQywwREFBb0IsRUFBM0M7QUFFQSxJQUFNQyxPQUFPLEdBQUdDLDZEQUFZLEVBQTVCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUN2QkMseUVBRHVCLEVBRXZCSixPQUZ1QixFQUd2QkssNkRBQWUsQ0FBQ1AsY0FBRCxDQUhRLENBQXpCLEMsQ0FNQTs7QUFDQSxJQUFJUSxZQUFZLEdBQUdOLE9BQU8sQ0FBQ00sWUFBM0I7QUFDQUosS0FBSyxDQUFDSyxTQUFOLENBQWdCLFlBQU07QUFDcEIsTUFBTUMsTUFBTSxHQUFHTixLQUFLLENBQUNPLFFBQU4sR0FBaUJILFlBQWhDOztBQUNBLE1BQUlFLE1BQU0sS0FBS0YsWUFBZixFQUE2QjtBQUMzQkEsZ0JBQVksR0FBR0UsTUFBZjtBQUNBRSxxRUFBZ0IsQ0FBQ0osWUFBRCxDQUFoQjtBQUNEO0FBQ0YsQ0FORDtBQVFBUixjQUFjLENBQUNhLEdBQWYsQ0FBbUJkLFNBQW5CO0FBQ0FLLEtBQUssQ0FBQ1UsUUFBTixDQUFlQywwREFBUyxDQUFDLE9BQUQsQ0FBeEI7QUFDQVgsS0FBSyxDQUFDVSxRQUFOLENBQWVFLDZEQUFZLEVBQTNCOztBQUVBLFNBQVVqQixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLGlCQUFNa0IscUVBQVUsQ0FBQ0MsbURBQVUsQ0FBQ0MsVUFBWixFQUF3QkMsc0RBQXhCLENBQWhCOztBQUZGO0FBQUE7QUFHRSxpQkFBTUgscUVBQVUsQ0FBQ0MsbURBQVUsQ0FBQ0csT0FBWixFQUFxQkMsb0RBQXJCLENBQWhCOztBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFbkIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREY7QUFLRDtLQU51Qm1CLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjA0MDQ2NjYwNzlkYjg2MGJkMzFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgeyB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBjaHJvbWVEZXRlY3QsXHJcbiAgLy8gY2hyb21lRGV0ZWN0U2FnYSxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgbG9hZFdvcmxkLFxyXG4gIGxvYWRXb3JsZFNhZ2EsXHJcbiAgcHJvY2Vzc1NhZ2EsXHJcbiAgc2F2ZVNwZWVjaENvbmZpZyxcclxufSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGVSZWR1Y2VyIH0gZnJvbSAnLi4vYWN0aW9ucy9yZWR1Y2VycydcclxuaW1wb3J0IEZyYW1lQ29udHJvbCBmcm9tICcuLi9jb21wb25lbnRzL2ZyYW1lLWNvbnRyb2wnO1xyXG5cclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXHJcblxyXG5jb25zdCBpbml0aWFsID0gaW5pdGlhbFN0YXRlKCk7XHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgQXBwbGljYXRpb25TdGF0ZVJlZHVjZXIsXHJcbiAgaW5pdGlhbCxcclxuICBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpXHJcbik7XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTMwNTY2MS93aGVyZS10by13cml0ZS10by1sb2NhbHN0b3JhZ2UtaW4tYS1yZWR1eC1hcHBcclxubGV0IHNwZWVjaENvbmZpZyA9IGluaXRpYWwuc3BlZWNoQ29uZmlnO1xyXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gIGNvbnN0IGNvbmZpZyA9IHN0b3JlLmdldFN0YXRlKCkuc3BlZWNoQ29uZmlnO1xyXG4gIGlmIChjb25maWcgIT09IHNwZWVjaENvbmZpZykge1xyXG4gICAgc3BlZWNoQ29uZmlnID0gY29uZmlnO1xyXG4gICAgc2F2ZVNwZWVjaENvbmZpZyhzcGVlY2hDb25maWcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5zYWdhTWlkZGxld2FyZS5ydW4oaW5pdFNhZ2FzKVxyXG5zdG9yZS5kaXNwYXRjaChsb2FkV29ybGQoJ2VuLVVTJykpO1xyXG5zdG9yZS5kaXNwYXRjaChjaHJvbWVEZXRlY3QoKSk7XHJcblxyXG5mdW5jdGlvbiogaW5pdFNhZ2FzKCkge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdpbml0U2FnYXMoKScpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQWN0aW9uVHlwZS5MT0FEX1dPUkxELCBsb2FkV29ybGRTYWdhKTtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFjdGlvblR5cGUuUFJPQ0VTUywgcHJvY2Vzc1NhZ2EpO1xyXG5cclxuICAvLyBDaHJvbWUgZGV0ZWN0aW9uIG5vdyBoYW5kbGVkIGJ5IENocm9tZURldGVjdCBjb21wb25lbnQuXHJcbiAgLy8geWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlLkNIUk9NRV9ERVRFQ1QsIGNocm9tZURldGVjdFNhZ2EpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8RnJhbWVDb250cm9sLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9