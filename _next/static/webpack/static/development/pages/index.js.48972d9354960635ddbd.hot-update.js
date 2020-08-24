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
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logic */ "./logic/index.ts");
/* harmony import */ var _sample_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sample-history */ "./actions/sample-history.ts");
/* harmony import */ var _sample_history_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sample-history-es */ "./actions/sample-history-es.ts");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadWorldSaga),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(processSaga);









var bakeryEN = __webpack_require__(/*! ../data/bakery.yaml */ "./data/bakery.yaml");

var coffeeEN = __webpack_require__(/*! ../data/coffee.yaml */ "./data/coffee.yaml");

var menuEN = __webpack_require__(/*! ../data/menu.yaml */ "./data/menu.yaml");

var lexiconSpecEN = __webpack_require__(/*! ../data/lexicon.yaml */ "./data/lexicon.yaml");

var regressionSuiteEN = __webpack_require__(/*! ../data/regression.yaml */ "./data/regression.yaml");

var bakeryES = __webpack_require__(/*! ../data/bakery-es.yaml */ "./data/bakery-es.yaml");

var coffeeES = __webpack_require__(/*! ../data/coffee-es.yaml */ "./data/coffee-es.yaml");

var menuES = __webpack_require__(/*! ../data/menu-es.yaml */ "./data/menu-es.yaml");

var lexiconSpecES = __webpack_require__(/*! ../data/lexicon-es.yaml */ "./data/lexicon-es.yaml");

var regressionSuiteES = __webpack_require__(/*! ../data/regression-es.yaml */ "./data/regression-es.yaml");

function getLoader(language) {
  if (language === 'es-US') {
    return new prix_fixe__WEBPACK_IMPORTED_MODULE_1__["ObjectLoader"]([['/samples/menu/menu.yaml', menuES], ['/samples/menu/bakery-es.yaml', bakeryES], ['/samples/menu/coffee-es.yaml', coffeeES]]);
  } else {
    return new prix_fixe__WEBPACK_IMPORTED_MODULE_1__["ObjectLoader"]([['/samples/menu/menu.yaml', menuEN], ['/samples/menu/bakery.yaml', bakeryEN], ['/samples/menu/coffee.yaml', coffeeEN]]);
  }
}

function getLexicon(language) {
  if (language === 'es-US') {
    return lexiconSpecES;
  } else {
    return lexiconSpecEN;
  }
}

function getRegressionSuite(language) {
  if (language === 'es-US') {
    return regressionSuiteES;
  } else {
    return regressionSuiteEN;
  }
}

function loadWorldSaga(action) {
  var loader, lexiconSpec, spec, prixFixeWorld, shortOrderWorld, expected, testResults, tokenizer, postings, bluePlateWorld, history;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadWorldSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Window=".concat(window));
          loader = getLoader(action.language);
          lexiconSpec = getLexicon(action.language);
          _context.next = 5;
          return Object(prix_fixe__WEBPACK_IMPORTED_MODULE_1__["loadCatalogSpec"])(loader, '/samples/menu/menu.yaml');

        case 5:
          spec = _context.sent;
          prixFixeWorld = Object(prix_fixe__WEBPACK_IMPORTED_MODULE_1__["createWorld3"])(spec);
          shortOrderWorld = Object(short_order__WEBPACK_IMPORTED_MODULE_3__["createShortOrderWorld2"])(prixFixeWorld, lexiconSpec, action.language === 'es-US' ? 'snowball-es' : 'snowball', false); // Sort for display by LexiconControl.

          lexiconSpec.lexicon.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          }); // Validate regression suite.

          console.log('before validation'); // logicalValidationSuite is not in core because of better-ajv-erros.
          // const expected = logicalValidationSuite<TextTurn>(regressionSuite);

          expected = getRegressionSuite(action.language);
          _context.next = 13;
          return Object(_logic__WEBPACK_IMPORTED_MODULE_5__["runTests"])(prixFixeWorld, shortOrderWorld, expected);

        case 13:
          testResults = _context.sent;
          tokenizer = shortOrderWorld.lexer.tokenizer;
          postings = tokenizer.getPostings();
          bluePlateWorld = {
            prixFixeWorld: prixFixeWorld,
            lexiconSpec: lexiconSpec,
            postings: postings,
            shortOrderWorld: shortOrderWorld,
            testResults: testResults
          };
          history = action.language === 'es-US' ? Object(_sample_history_es__WEBPACK_IMPORTED_MODULE_7__["getSampleHistoryES"])() : Object(_sample_history__WEBPACK_IMPORTED_MODULE_6__["getSampleHistory"])();
          _context.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setWorld"])(bluePlateWorld, history, action.language));

        case 20:
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
  var source, text, _final, appState, filtered, state0, state1;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function processSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          source = _ref.source, text = _ref.text, _final = _ref["final"];

          if (!_final) {
            _context2.next = 14;
            break;
          }

          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getAppState);

        case 4:
          appState = _context2.sent;
          // console.log(`raw text: "${text}"`);
          filtered = Object(prix_fixe__WEBPACK_IMPORTED_MODULE_1__["speechToTextFilter"])(text); // console.log(`filtered text: "${filtered}"`);

          state0 = {
            cart: appState.cart
          };
          _context2.next = 9;
          return appState.bluePlateWorld.shortOrderWorld.processor(filtered, state0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NhZ2FzLnRzeCJdLCJuYW1lcyI6WyJsb2FkV29ybGRTYWdhIiwicHJvY2Vzc1NhZ2EiLCJiYWtlcnlFTiIsInJlcXVpcmUiLCJjb2ZmZWVFTiIsIm1lbnVFTiIsImxleGljb25TcGVjRU4iLCJyZWdyZXNzaW9uU3VpdGVFTiIsImJha2VyeUVTIiwiY29mZmVlRVMiLCJtZW51RVMiLCJsZXhpY29uU3BlY0VTIiwicmVncmVzc2lvblN1aXRlRVMiLCJnZXRMb2FkZXIiLCJsYW5ndWFnZSIsIk9iamVjdExvYWRlciIsImdldExleGljb24iLCJnZXRSZWdyZXNzaW9uU3VpdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9hZGVyIiwibGV4aWNvblNwZWMiLCJsb2FkQ2F0YWxvZ1NwZWMiLCJzcGVjIiwicHJpeEZpeGVXb3JsZCIsImNyZWF0ZVdvcmxkMyIsInNob3J0T3JkZXJXb3JsZCIsImNyZWF0ZVNob3J0T3JkZXJXb3JsZDIiLCJsZXhpY29uIiwic29ydCIsImEiLCJiIiwibmFtZSIsImxvY2FsZUNvbXBhcmUiLCJleHBlY3RlZCIsInJ1blRlc3RzIiwidGVzdFJlc3VsdHMiLCJ0b2tlbml6ZXIiLCJsZXhlciIsInBvc3RpbmdzIiwiZ2V0UG9zdGluZ3MiLCJibHVlUGxhdGVXb3JsZCIsImhpc3RvcnkiLCJnZXRTYW1wbGVIaXN0b3J5RVMiLCJnZXRTYW1wbGVIaXN0b3J5IiwicHV0Iiwic2V0V29ybGQiLCJnZXRBcHBTdGF0ZSIsImFwcFN0YXRlIiwic291cmNlIiwidGV4dCIsImZpbmFsIiwic2VsZWN0IiwiZmlsdGVyZWQiLCJzcGVlY2hUb1RleHRGaWx0ZXIiLCJzdGF0ZTAiLCJjYXJ0IiwicHJvY2Vzc29yIiwic3RhdGUxIiwic2V0Q2FydCIsImFwcGVuZEhpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQXVFaUJBLGE7bUdBc0RBQyxXOztBQTdI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LGtCQVBILEdBT2NDLG9FQUFrQixDQUFDSixJQUFELENBUGhDLEVBUUg7O0FBQ01LLGdCQVRILEdBU21CO0FBQUVDLGdCQUFJLEVBQUVSLFFBQVEsQ0FBQ1E7QUFBakIsV0FUbkI7QUFBQTtBQVdELGlCQUFNUixRQUFRLENBQUNQLGNBQVQsQ0FBd0JmLGVBQXhCLENBQXdDK0IsU0FBeEMsQ0FDSkosUUFESSxFQUVKRSxNQUZJLENBQU47O0FBWEM7QUFVR0csZ0JBVkg7QUFBQTtBQWVILGlCQUFNYiw4REFBRyxDQUFDYyx3REFBTyxDQUFDRCxNQUFNLENBQUNGLElBQVIsQ0FBUixDQUFUOztBQWZHO0FBQUE7QUFnQkgsaUJBQU1YLDhEQUFHLENBQUNlLDhEQUFhLENBQUNGLE1BQU0sQ0FBQ0YsSUFBUixFQUFjUCxNQUFkLEVBQXNCQyxJQUF0QixDQUFkLENBQVQ7O0FBaEJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40ODk3MmQ5MzU0OTYwNjM1ZGRiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYXRhbG9nU3BlYyxcclxuICBjcmVhdGVXb3JsZDMsXHJcbiAgbG9hZENhdGFsb2dTcGVjLFxyXG4gIExvZ2ljYWxWYWxpZGF0aW9uU3VpdGUsXHJcbiAgT2JqZWN0TG9hZGVyLFxyXG4gIHNwZWVjaFRvVGV4dEZpbHRlcixcclxuICBTdGF0ZSxcclxuICBUZXh0VHVybixcclxufSBmcm9tICdwcml4LWZpeGUnO1xyXG5cclxuaW1wb3J0IHsgcHV0LCBzZWxlY3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVTaG9ydE9yZGVyV29ybGQyLCBMZXhpY29uU3BlYyB9IGZyb20gJ3Nob3J0LW9yZGVyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgYXBwZW5kSGlzdG9yeSxcclxuICBMb2FkV29ybGRBY3Rpb24sXHJcbiAgUHJvY2Vzc0FjdGlvbixcclxuICBzZXRDYXJ0LFxyXG4gIHNldFdvcmxkXHJcbn0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBydW5UZXN0cyB9IGZyb20gJy4uL2xvZ2ljJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIEJsdWVQbGF0ZVdvcmxkIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi1zdGF0ZSc7XHJcbmltcG9ydCB7IGdldFNhbXBsZUhpc3RvcnkgfSBmcm9tICcuL3NhbXBsZS1oaXN0b3J5JztcclxuaW1wb3J0IHsgZ2V0U2FtcGxlSGlzdG9yeUVTIH0gZnJvbSAnLi9zYW1wbGUtaGlzdG9yeS1lcyc7XHJcblxyXG5jb25zdCBiYWtlcnlFTiA9IHJlcXVpcmUoJy4uL2RhdGEvYmFrZXJ5LnlhbWwnKTtcclxuY29uc3QgY29mZmVlRU4gPSByZXF1aXJlKCcuLi9kYXRhL2NvZmZlZS55YW1sJyk7XHJcbmNvbnN0IG1lbnVFTiA9IHJlcXVpcmUoJy4uL2RhdGEvbWVudS55YW1sJyk7XHJcbmNvbnN0IGxleGljb25TcGVjRU4gPSByZXF1aXJlKCcuLi9kYXRhL2xleGljb24ueWFtbCcpO1xyXG5jb25zdCByZWdyZXNzaW9uU3VpdGVFTiA9IHJlcXVpcmUoJy4uL2RhdGEvcmVncmVzc2lvbi55YW1sJyk7XHJcblxyXG5jb25zdCBiYWtlcnlFUyA9IHJlcXVpcmUoJy4uL2RhdGEvYmFrZXJ5LWVzLnlhbWwnKTtcclxuY29uc3QgY29mZmVlRVMgPSByZXF1aXJlKCcuLi9kYXRhL2NvZmZlZS1lcy55YW1sJyk7XHJcbmNvbnN0IG1lbnVFUyA9IHJlcXVpcmUoJy4uL2RhdGEvbWVudS1lcy55YW1sJyk7XHJcbmNvbnN0IGxleGljb25TcGVjRVMgPSByZXF1aXJlKCcuLi9kYXRhL2xleGljb24tZXMueWFtbCcpO1xyXG5jb25zdCByZWdyZXNzaW9uU3VpdGVFUyA9IHJlcXVpcmUoJy4uL2RhdGEvcmVncmVzc2lvbi1lcy55YW1sJyk7XHJcblxyXG5mdW5jdGlvbiBnZXRMb2FkZXIobGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gIGlmIChsYW5ndWFnZSA9PT0gJ2VzLVVTJykge1xyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RMb2FkZXIoW1xyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvbWVudS55YW1sJywgbWVudUVTXSxcclxuICAgICAgWycvc2FtcGxlcy9tZW51L2Jha2VyeS1lcy55YW1sJywgYmFrZXJ5RVNdLFxyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvY29mZmVlLWVzLnlhbWwnLCBjb2ZmZWVFU10sXHJcbiAgICBdKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RMb2FkZXIoW1xyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvbWVudS55YW1sJywgbWVudUVOXSxcclxuICAgICAgWycvc2FtcGxlcy9tZW51L2Jha2VyeS55YW1sJywgYmFrZXJ5RU5dLFxyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvY29mZmVlLnlhbWwnLCBjb2ZmZWVFTl0sXHJcbiAgICBdKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExleGljb24obGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gIGlmIChsYW5ndWFnZSA9PT0gJ2VzLVVTJykge1xyXG4gICAgcmV0dXJuIGxleGljb25TcGVjRVM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBsZXhpY29uU3BlY0VOO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVncmVzc2lvblN1aXRlKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICBpZiAobGFuZ3VhZ2UgPT09ICdlcy1VUycpIHtcclxuICAgIHJldHVybiByZWdyZXNzaW9uU3VpdGVFUztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJlZ3Jlc3Npb25TdWl0ZUVOO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24qIGxvYWRXb3JsZFNhZ2EoYWN0aW9uOiBMb2FkV29ybGRBY3Rpb24pIHtcclxuICBjb25zb2xlLmxvZyhgV2luZG93PSR7d2luZG93fWApO1xyXG4gIGNvbnN0IGxvYWRlciA9IGdldExvYWRlcihhY3Rpb24ubGFuZ3VhZ2UpO1xyXG4gIGNvbnN0IGxleGljb25TcGVjID0gZ2V0TGV4aWNvbihhY3Rpb24ubGFuZ3VhZ2UpO1xyXG5cclxuICBjb25zdCBzcGVjOiBDYXRhbG9nU3BlYyA9IHlpZWxkIGxvYWRDYXRhbG9nU3BlYyhcclxuICAgIGxvYWRlcixcclxuICAgICcvc2FtcGxlcy9tZW51L21lbnUueWFtbCdcclxuICApO1xyXG5cclxuICBjb25zdCBwcml4Rml4ZVdvcmxkID0gY3JlYXRlV29ybGQzKHNwZWMpO1xyXG4gIGNvbnN0IHNob3J0T3JkZXJXb3JsZCA9IGNyZWF0ZVNob3J0T3JkZXJXb3JsZDIoXHJcbiAgICBwcml4Rml4ZVdvcmxkLFxyXG4gICAgbGV4aWNvblNwZWMsXHJcbiAgICBhY3Rpb24ubGFuZ3VhZ2UgPT09ICdlcy1VUycgPyAnc25vd2JhbGwtZXMnIDogJ3Nub3diYWxsJyxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgLy8gU29ydCBmb3IgZGlzcGxheSBieSBMZXhpY29uQ29udHJvbC5cclxuICAobGV4aWNvblNwZWMgYXMgTGV4aWNvblNwZWMpLmxleGljb24uc29ydCgoYSxiKSA9PiBcclxuICAgIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSlcclxuICApO1xyXG5cclxuICAvLyBWYWxpZGF0ZSByZWdyZXNzaW9uIHN1aXRlLlxyXG4gIGNvbnNvbGUubG9nKCdiZWZvcmUgdmFsaWRhdGlvbicpO1xyXG4gIC8vIGxvZ2ljYWxWYWxpZGF0aW9uU3VpdGUgaXMgbm90IGluIGNvcmUgYmVjYXVzZSBvZiBiZXR0ZXItYWp2LWVycm9zLlxyXG4gIC8vIGNvbnN0IGV4cGVjdGVkID0gbG9naWNhbFZhbGlkYXRpb25TdWl0ZTxUZXh0VHVybj4ocmVncmVzc2lvblN1aXRlKTtcclxuICBjb25zdCBleHBlY3RlZCA9IGdldFJlZ3Jlc3Npb25TdWl0ZShhY3Rpb24ubGFuZ3VhZ2UpIGFzIExvZ2ljYWxWYWxpZGF0aW9uU3VpdGU8VGV4dFR1cm4+XHJcblxyXG4gIGNvbnN0IHRlc3RSZXN1bHRzID0geWllbGQgcnVuVGVzdHMocHJpeEZpeGVXb3JsZCwgc2hvcnRPcmRlcldvcmxkLCBleHBlY3RlZCk7XHJcblxyXG4gIGNvbnN0IHRva2VuaXplciA9IHNob3J0T3JkZXJXb3JsZC5sZXhlci50b2tlbml6ZXI7XHJcbiAgY29uc3QgcG9zdGluZ3MgPSB0b2tlbml6ZXIuZ2V0UG9zdGluZ3MoKTtcclxuXHJcbiAgY29uc3QgYmx1ZVBsYXRlV29ybGQ6IEJsdWVQbGF0ZVdvcmxkID0ge1xyXG4gICAgcHJpeEZpeGVXb3JsZCxcclxuICAgIGxleGljb25TcGVjOiBsZXhpY29uU3BlYyxcclxuICAgIHBvc3RpbmdzLFxyXG4gICAgc2hvcnRPcmRlcldvcmxkLFxyXG4gICAgdGVzdFJlc3VsdHMsXHJcbiAgfVxyXG5cclxuICBjb25zdCBoaXN0b3J5ID0gYWN0aW9uLmxhbmd1YWdlID09PSAnZXMtVVMnID9cclxuICAgIGdldFNhbXBsZUhpc3RvcnlFUygpIDogXHJcbiAgICBnZXRTYW1wbGVIaXN0b3J5KCk7XHJcblxyXG4gIHlpZWxkKHB1dChzZXRXb3JsZChibHVlUGxhdGVXb3JsZCwgaGlzdG9yeSwgYWN0aW9uLmxhbmd1YWdlKSkpO1xyXG59XHJcblxyXG4vLyBUT0RPOiBjbGVhbiB0aGlzIHVwLlxyXG5mdW5jdGlvbiBnZXRBcHBTdGF0ZShhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSk6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiBhcHBTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBwcm9jZXNzU2FnYSh7IHNvdXJjZSwgdGV4dCwgZmluYWwgfTogUHJvY2Vzc0FjdGlvbikge1xyXG4gIC8vIFRPRE86IHJlbW92ZSBmaW5hbCBjaGVjayBmb3IgaW50ZXJpbSBjYXJ0cy5cclxuICBpZiAoZmluYWwpIHtcclxuICAgIC8vIFRPRE86IGNhbGwgdG8gc3BlZWNoVG9UZXh0RmlsdGVyKCkgc2hvdWxkIG5vdCBiZSBkdXBsaWNhdGVkXHJcbiAgICAvLyBpbiBhcHBseVByb2Nlc3MoKS5cclxuICAgIGNvbnN0IGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlID0geWllbGQoc2VsZWN0KGdldEFwcFN0YXRlKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgcmF3IHRleHQ6IFwiJHt0ZXh0fVwiYCk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHNwZWVjaFRvVGV4dEZpbHRlcih0ZXh0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBmaWx0ZXJlZCB0ZXh0OiBcIiR7ZmlsdGVyZWR9XCJgKTtcclxuICAgIGNvbnN0IHN0YXRlMDogU3RhdGUgPSB7IGNhcnQ6IGFwcFN0YXRlLmNhcnQgfTtcclxuICAgIGNvbnN0IHN0YXRlMTogU3RhdGUgPSBcclxuICAgICAgeWllbGQgYXBwU3RhdGUuYmx1ZVBsYXRlV29ybGQuc2hvcnRPcmRlcldvcmxkLnByb2Nlc3NvcihcclxuICAgICAgICBmaWx0ZXJlZCxcclxuICAgICAgICBzdGF0ZTBcclxuICAgICAgKTtcclxuICAgIHlpZWxkKHB1dChzZXRDYXJ0KHN0YXRlMS5jYXJ0KSkpO1xyXG4gICAgeWllbGQocHV0KGFwcGVuZEhpc3Rvcnkoc3RhdGUxLmNhcnQsIHNvdXJjZSwgdGV4dCkpKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==