webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/sagas.tsx":
/*!***************************!*\
  !*** ./actions/sagas.tsx ***!
  \***************************/
/*! exports provided: loadWorldSaga, processSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWorldSaga", function() { return loadWorldSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processSaga", function() { return processSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prix-fixe */ "./node_modules/prix-fixe/build/src/bindex.js");
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prix_fixe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var short_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! short-order */ "./node_modules/short-order/build/src/index.js");
/* harmony import */ var short_order__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(short_order__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadWorldSaga),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(processSaga);






var bakery = __webpack_require__(/*! ../data/bakery.yaml */ "./data/bakery.yaml");

var coffee = __webpack_require__(/*! ../data/coffee.yaml */ "./data/coffee.yaml");

var menu = __webpack_require__(/*! ../data/menu.yaml */ "./data/menu.yaml");

var lexiconSpec = __webpack_require__(/*! ../data/lexicon.yaml */ "./data/lexicon.yaml");

function loadWorldSaga(action) {
  var loader, spec, world, shortOrderWorld;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadWorldSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          loader = new prix_fixe__WEBPACK_IMPORTED_MODULE_1__["ObjectLoader"]([['/samples/menu/menu.yaml', menu], ['/samples/menu/bakery.yaml', bakery], ['/samples/menu/coffee.yaml', coffee]]);
          _context.next = 3;
          return Object(prix_fixe__WEBPACK_IMPORTED_MODULE_1__["loadCatalogSpec"])(loader, '/samples/menu/menu.yaml');

        case 3:
          spec = _context.sent;
          world = Object(prix_fixe__WEBPACK_IMPORTED_MODULE_1__["createWorld3"])(spec);
          shortOrderWorld = Object(short_order__WEBPACK_IMPORTED_MODULE_3__["createShortOrderWorld2"])(world, lexiconSpec, undefined, true); // Sort for display by LexiconControl.

          lexiconSpec.lexicon.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          });
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setWorld"])(world, shortOrderWorld, lexiconSpec));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
} // TODO: clean this up.

function getAppState(appState) {
  return appState;
}

function processSaga(_ref) {
  var source, text, _final, filtered, appState, state0, state1;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function processSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          source = _ref.source, text = _ref.text, _final = _ref["final"];

          if (!_final) {
            _context2.next = 14;
            break;
          }

          // TODO: call to speechToTextFilter() should not be duplicated
          // in applyProcess().
          filtered = Object(prix_fixe__WEBPACK_IMPORTED_MODULE_1__["speechToTextFilter"])(text);
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getAppState);

        case 5:
          appState = _context2.sent;
          state0 = {
            cart: appState.cart
          };
          _context2.next = 9;
          return appState.shortOrderWorld.processor(filtered, state0);

        case 9:
          state1 = _context2.sent;
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setCart"])(state1.cart));

        case 12:
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["appendHistory"])(state1.cart, source, text));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NhZ2FzLnRzeCJdLCJuYW1lcyI6WyJsb2FkV29ybGRTYWdhIiwicHJvY2Vzc1NhZ2EiLCJiYWtlcnkiLCJyZXF1aXJlIiwiY29mZmVlIiwibWVudSIsImxleGljb25TcGVjIiwiYWN0aW9uIiwibG9hZGVyIiwiT2JqZWN0TG9hZGVyIiwibG9hZENhdGFsb2dTcGVjIiwic3BlYyIsIndvcmxkIiwiY3JlYXRlV29ybGQzIiwic2hvcnRPcmRlcldvcmxkIiwiY3JlYXRlU2hvcnRPcmRlcldvcmxkMiIsInVuZGVmaW5lZCIsImxleGljb24iLCJzb3J0IiwiYSIsImIiLCJuYW1lIiwibG9jYWxlQ29tcGFyZSIsInB1dCIsInNldFdvcmxkIiwiZ2V0QXBwU3RhdGUiLCJhcHBTdGF0ZSIsInNvdXJjZSIsInRleHQiLCJmaW5hbCIsImZpbHRlcmVkIiwic3BlZWNoVG9UZXh0RmlsdGVyIiwic2VsZWN0Iiwic3RhdGUwIiwiY2FydCIsInByb2Nlc3NvciIsInN0YXRlMSIsInNldENhcnQiLCJhcHBlbmRIaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0EyQmlCQSxhO21HQWdDQUMsVzs7QUEzRGpCO0FBU0E7QUFDQTtBQUVBOztBQVVBLElBQU1DLE1BQU0sR0FBRUMsbUJBQU8sQ0FBQywrQ0FBRCxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUVELG1CQUFPLENBQUMsK0NBQUQsQ0FBckI7O0FBQ0EsSUFBTUUsSUFBSSxHQUFHRixtQkFBTyxDQUFDLDJDQUFELENBQXBCOztBQUNBLElBQU1HLFdBQVcsR0FBR0gsbUJBQU8sQ0FBQyxpREFBRCxDQUEzQjs7QUFFTyxTQUFVSCxhQUFWLENBQXdCTyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0MsZ0JBREQsR0FDVSxJQUFJQyxzREFBSixDQUFpQixDQUM5QixDQUFDLHlCQUFELEVBQTRCSixJQUE1QixDQUQ4QixFQUU5QixDQUFDLDJCQUFELEVBQThCSCxNQUE5QixDQUY4QixFQUc5QixDQUFDLDJCQUFELEVBQThCRSxNQUE5QixDQUg4QixDQUFqQixDQURWO0FBQUE7QUFPcUIsaUJBQU1NLGlFQUFlLENBQzdDRixNQUQ2QyxFQUU3Qyx5QkFGNkMsQ0FBckI7O0FBUHJCO0FBT0NHLGNBUEQ7QUFXQ0MsZUFYRCxHQVdTQyw4REFBWSxDQUFDRixJQUFELENBWHJCO0FBWUNHLHlCQVpELEdBWW1CQywwRUFBc0IsQ0FDNUNILEtBRDRDLEVBRTVDTixXQUY0QyxFQUc1Q1UsU0FINEMsRUFJNUMsSUFKNEMsQ0FaekMsRUFtQkw7O0FBQ0NWLHFCQUFELENBQTZCVyxPQUE3QixDQUFxQ0MsSUFBckMsQ0FBMEMsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsbUJBQ3hDRCxDQUFDLENBQUNFLElBQUYsQ0FBT0MsYUFBUCxDQUFxQkYsQ0FBQyxDQUFDQyxJQUF2QixDQUR3QztBQUFBLFdBQTFDO0FBcEJLO0FBd0JMLGlCQUFNRSw4REFBRyxDQUFDQyx5REFBUSxDQUFDWixLQUFELEVBQVFFLGVBQVIsRUFBeUJSLFdBQXpCLENBQVQsQ0FBVDs7QUF4Qks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQTJCUDs7QUFDQSxTQUFTbUIsV0FBVCxDQUFxQkMsUUFBckIsRUFBbUU7QUFDakUsU0FBT0EsUUFBUDtBQUNEOztBQUVNLFNBQVV6QixXQUFWO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0IwQixnQkFBeEIsUUFBd0JBLE1BQXhCLEVBQWdDQyxJQUFoQyxRQUFnQ0EsSUFBaEMsRUFBc0NDLE1BQXRDOztBQUFBLGVBRURBLE1BRkM7QUFBQTtBQUFBO0FBQUE7O0FBR0g7QUFDQTtBQUNNQyxrQkFMSCxHQUtjQyxvRUFBa0IsQ0FBQ0gsSUFBRCxDQUxoQztBQUFBO0FBTWMsaUJBQU1JLGlFQUFNLENBQUNQLFdBQUQsQ0FBWjs7QUFOZDtBQU1HQyxrQkFOSDtBQU9HTyxnQkFQSCxHQU9tQjtBQUFFQyxnQkFBSSxFQUFFUixRQUFRLENBQUNRO0FBQWpCLFdBUG5CO0FBQUE7QUFRbUIsaUJBQU1SLFFBQVEsQ0FBQ1osZUFBVCxDQUF5QnFCLFNBQXpCLENBQzFCTCxRQUQwQixFQUUxQkcsTUFGMEIsQ0FBTjs7QUFSbkI7QUFRR0csZ0JBUkg7QUFBQTtBQVlILGlCQUFNYiw4REFBRyxDQUFDYyx3REFBTyxDQUFDRCxNQUFNLENBQUNGLElBQVIsQ0FBUixDQUFUOztBQVpHO0FBQUE7QUFhSCxpQkFBTVgsOERBQUcsQ0FBQ2UsOERBQWEsQ0FBQ0YsTUFBTSxDQUFDRixJQUFSLEVBQWNQLE1BQWQsRUFBc0JDLElBQXRCLENBQWQsQ0FBVDs7QUFiRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDljNmZlM2M2NjhkYjkzZTVkMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2F0YWxvZ1NwZWMsXHJcbiAgY3JlYXRlV29ybGQzLFxyXG4gIGxvYWRDYXRhbG9nU3BlYyxcclxuICBPYmplY3RMb2FkZXIsXHJcbiAgc3BlZWNoVG9UZXh0RmlsdGVyLFxyXG4gIFN0YXRlLFxyXG59IGZyb20gJ3ByaXgtZml4ZSc7XHJcblxyXG5pbXBvcnQgeyBwdXQsIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IGNyZWF0ZVNob3J0T3JkZXJXb3JsZDIsIExleGljb25TcGVjIH0gZnJvbSAnc2hvcnQtb3JkZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBhcHBlbmRIaXN0b3J5LFxyXG4gIExvYWRXb3JsZEFjdGlvbixcclxuICBQcm9jZXNzQWN0aW9uLFxyXG4gIHNldENhcnQsXHJcbiAgc2V0V29ybGRcclxufSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuXHJcbmNvbnN0IGJha2VyeT0gcmVxdWlyZSgnLi4vZGF0YS9iYWtlcnkueWFtbCcpO1xyXG5jb25zdCBjb2ZmZWU9IHJlcXVpcmUoJy4uL2RhdGEvY29mZmVlLnlhbWwnKTtcclxuY29uc3QgbWVudSA9IHJlcXVpcmUoJy4uL2RhdGEvbWVudS55YW1sJyk7XHJcbmNvbnN0IGxleGljb25TcGVjID0gcmVxdWlyZSgnLi4vZGF0YS9sZXhpY29uLnlhbWwnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogbG9hZFdvcmxkU2FnYShhY3Rpb246IExvYWRXb3JsZEFjdGlvbikge1xyXG4gIGNvbnN0IGxvYWRlciA9IG5ldyBPYmplY3RMb2FkZXIoW1xyXG4gICAgWycvc2FtcGxlcy9tZW51L21lbnUueWFtbCcsIG1lbnVdLFxyXG4gICAgWycvc2FtcGxlcy9tZW51L2Jha2VyeS55YW1sJywgYmFrZXJ5XSxcclxuICAgIFsnL3NhbXBsZXMvbWVudS9jb2ZmZWUueWFtbCcsIGNvZmZlZV0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IHNwZWM6IENhdGFsb2dTcGVjID0geWllbGQgbG9hZENhdGFsb2dTcGVjKFxyXG4gICAgbG9hZGVyLFxyXG4gICAgJy9zYW1wbGVzL21lbnUvbWVudS55YW1sJ1xyXG4gICk7XHJcbiAgY29uc3Qgd29ybGQgPSBjcmVhdGVXb3JsZDMoc3BlYyk7XHJcbiAgY29uc3Qgc2hvcnRPcmRlcldvcmxkID0gY3JlYXRlU2hvcnRPcmRlcldvcmxkMihcclxuICAgIHdvcmxkLFxyXG4gICAgbGV4aWNvblNwZWMsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICB0cnVlXHJcbiAgKTtcclxuXHJcbiAgLy8gU29ydCBmb3IgZGlzcGxheSBieSBMZXhpY29uQ29udHJvbC5cclxuICAobGV4aWNvblNwZWMgYXMgTGV4aWNvblNwZWMpLmxleGljb24uc29ydCgoYSxiKSA9PiBcclxuICAgIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSlcclxuICApO1xyXG5cclxuICB5aWVsZChwdXQoc2V0V29ybGQod29ybGQsIHNob3J0T3JkZXJXb3JsZCwgbGV4aWNvblNwZWMpKSk7XHJcbn1cclxuXHJcbi8vIFRPRE86IGNsZWFuIHRoaXMgdXAuXHJcbmZ1bmN0aW9uIGdldEFwcFN0YXRlKGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIGFwcFN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHByb2Nlc3NTYWdhKHsgc291cmNlLCB0ZXh0LCBmaW5hbCB9OiBQcm9jZXNzQWN0aW9uKSB7XHJcbiAgLy8gVE9ETzogcmVtb3ZlIGZpbmFsIGNoZWNrIGZvciBpbnRlcmltIGNhcnRzLlxyXG4gIGlmIChmaW5hbCkge1xyXG4gICAgLy8gVE9ETzogY2FsbCB0byBzcGVlY2hUb1RleHRGaWx0ZXIoKSBzaG91bGQgbm90IGJlIGR1cGxpY2F0ZWRcclxuICAgIC8vIGluIGFwcGx5UHJvY2VzcygpLlxyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBzcGVlY2hUb1RleHRGaWx0ZXIodGV4dCk7XHJcbiAgICBjb25zdCBhcHBTdGF0ZSA9IHlpZWxkKHNlbGVjdChnZXRBcHBTdGF0ZSkpO1xyXG4gICAgY29uc3Qgc3RhdGUwOiBTdGF0ZSA9IHsgY2FydDogYXBwU3RhdGUuY2FydCB9O1xyXG4gICAgY29uc3Qgc3RhdGUxOiBTdGF0ZSA9IHlpZWxkIGFwcFN0YXRlLnNob3J0T3JkZXJXb3JsZC5wcm9jZXNzb3IoXHJcbiAgICAgIGZpbHRlcmVkLFxyXG4gICAgICBzdGF0ZTBcclxuICAgICk7XHJcbiAgICB5aWVsZChwdXQoc2V0Q2FydChzdGF0ZTEuY2FydCkpKTtcclxuICAgIHlpZWxkKHB1dChhcHBlbmRIaXN0b3J5KHN0YXRlMS5jYXJ0LCBzb3VyY2UsIHRleHQpKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=