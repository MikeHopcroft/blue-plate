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
} // Chrome detection now handled by ChromeDetect component.
// export function* chromeDetectSaga(action: ChromeDetectAction) {
//   // NOTE that window === undefined during server-side rendering.
//   if (window !== undefined) {
//     console.log(`Window=${window}`);
//     const b = Bowser.parse(window.navigator.userAgent);
//     // TODO: use browser.satisfies() for Chrome detection.
//     const isChrome = b.browser.name === 'Chrome';
//     console.log(`setSpeechSupport(${isChrome}, (name=${b.browser.name}))`);
//     yield put(setSpeechSupport(isChrome));
//   }
// }


function loadWorldSaga(action) {
  var loader, lexiconSpec, spec, prixFixeWorld, shortOrderWorld, expected, testResults, tokenizer, postings, bluePlateWorld, history;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadWorldSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          loader = getLoader(action.language);
          lexiconSpec = getLexicon(action.language);
          _context.next = 4;
          return Object(prix_fixe__WEBPACK_IMPORTED_MODULE_1__["loadCatalogSpec"])(loader, '/samples/menu/menu.yaml');

        case 4:
          spec = _context.sent;
          prixFixeWorld = Object(prix_fixe__WEBPACK_IMPORTED_MODULE_1__["createWorld3"])(spec);
          shortOrderWorld = Object(short_order__WEBPACK_IMPORTED_MODULE_3__["createShortOrderWorld2"])(prixFixeWorld, lexiconSpec, action.language === 'es-US' ? 'snowball-es' : 'snowball', false); // Sort for display by LexiconControl.

          lexiconSpec.lexicon.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          }); // Validate regression suite.

          console.log('before validation'); // logicalValidationSuite is not in core because of better-ajv-erros.
          // const expected = logicalValidationSuite<TextTurn>(regressionSuite);

          expected = getRegressionSuite(action.language);
          _context.next = 12;
          return Object(_logic__WEBPACK_IMPORTED_MODULE_5__["runTests"])(prixFixeWorld, shortOrderWorld, expected);

        case 12:
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
          _context.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setWorld"])(bluePlateWorld, history, action.language));

        case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NhZ2FzLnRzeCJdLCJuYW1lcyI6WyJsb2FkV29ybGRTYWdhIiwicHJvY2Vzc1NhZ2EiLCJiYWtlcnlFTiIsInJlcXVpcmUiLCJjb2ZmZWVFTiIsIm1lbnVFTiIsImxleGljb25TcGVjRU4iLCJyZWdyZXNzaW9uU3VpdGVFTiIsImJha2VyeUVTIiwiY29mZmVlRVMiLCJtZW51RVMiLCJsZXhpY29uU3BlY0VTIiwicmVncmVzc2lvblN1aXRlRVMiLCJnZXRMb2FkZXIiLCJsYW5ndWFnZSIsIk9iamVjdExvYWRlciIsImdldExleGljb24iLCJnZXRSZWdyZXNzaW9uU3VpdGUiLCJhY3Rpb24iLCJsb2FkZXIiLCJsZXhpY29uU3BlYyIsImxvYWRDYXRhbG9nU3BlYyIsInNwZWMiLCJwcml4Rml4ZVdvcmxkIiwiY3JlYXRlV29ybGQzIiwic2hvcnRPcmRlcldvcmxkIiwiY3JlYXRlU2hvcnRPcmRlcldvcmxkMiIsImxleGljb24iLCJzb3J0IiwiYSIsImIiLCJuYW1lIiwibG9jYWxlQ29tcGFyZSIsImNvbnNvbGUiLCJsb2ciLCJleHBlY3RlZCIsInJ1blRlc3RzIiwidGVzdFJlc3VsdHMiLCJ0b2tlbml6ZXIiLCJsZXhlciIsInBvc3RpbmdzIiwiZ2V0UG9zdGluZ3MiLCJibHVlUGxhdGVXb3JsZCIsImhpc3RvcnkiLCJnZXRTYW1wbGVIaXN0b3J5RVMiLCJnZXRTYW1wbGVIaXN0b3J5IiwicHV0Iiwic2V0V29ybGQiLCJnZXRBcHBTdGF0ZSIsImFwcFN0YXRlIiwic291cmNlIiwidGV4dCIsImZpbmFsIiwic2VsZWN0IiwiZmlsdGVyZWQiLCJzcGVlY2hUb1RleHRGaWx0ZXIiLCJzdGF0ZTAiLCJjYXJ0IiwicHJvY2Vzc29yIiwic3RhdGUxIiwic2V0Q2FydCIsImFwcGVuZEhpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQXlGaUJBLGE7bUdBcURBQyxXOztBQTVJakI7QUFXQTtB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a0JBTEg7QUFNSDtBQUNNSyxrQkFQSCxHQU9jQyxvRUFBa0IsQ0FBQ0osSUFBRCxDQVBoQyxFQVFIOztBQUNNSyxnQkFUSCxHQVNtQjtBQUFFQyxnQkFBSSxFQUFFUixRQUFRLENBQUNRO0FBQWpCLFdBVG5CO0FBQUE7QUFXRCxpQkFBTVIsUUFBUSxDQUFDUCxjQUFULENBQXdCakIsZUFBeEIsQ0FBd0NpQyxTQUF4QyxDQUNKSixRQURJLEVBRUpFLE1BRkksQ0FBTjs7QUFYQztBQVVHRyxnQkFWSDtBQUFBO0FBZUgsaUJBQU1iLDhEQUFHLENBQUNjLHdEQUFPLENBQUNELE1BQU0sQ0FBQ0YsSUFBUixDQUFSLENBQVQ7O0FBZkc7QUFBQTtBQWdCSCxpQkFBTVgsOERBQUcsQ0FBQ2UsOERBQWEsQ0FBQ0YsTUFBTSxDQUFDRixJQUFSLEVBQWNQLE1BQWQsRUFBc0JDLElBQXRCLENBQWQsQ0FBVDs7QUFoQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmE5ZjM1NmNkOTUzMTJiMDU2ZThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm93c2VyIGZyb20gXCJib3dzZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2F0YWxvZ1NwZWMsXHJcbiAgY3JlYXRlV29ybGQzLFxyXG4gIGxvYWRDYXRhbG9nU3BlYyxcclxuICBMb2dpY2FsVmFsaWRhdGlvblN1aXRlLFxyXG4gIE9iamVjdExvYWRlcixcclxuICBzcGVlY2hUb1RleHRGaWx0ZXIsXHJcbiAgU3RhdGUsXHJcbiAgVGV4dFR1cm4sXHJcbn0gZnJvbSAncHJpeC1maXhlJztcclxuXHJcbmltcG9ydCB7IHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgY3JlYXRlU2hvcnRPcmRlcldvcmxkMiwgTGV4aWNvblNwZWMgfSBmcm9tICdzaG9ydC1vcmRlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGFwcGVuZEhpc3RvcnksXHJcbiAgQ2hyb21lRGV0ZWN0QWN0aW9uLFxyXG4gIExvYWRXb3JsZEFjdGlvbixcclxuICBQcm9jZXNzQWN0aW9uLFxyXG4gIHNldENhcnQsXHJcbiAgc2V0U3BlZWNoU3VwcG9ydCxcclxuICBzZXRXb3JsZFxyXG59IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgcnVuVGVzdHMgfSBmcm9tICcuLi9sb2dpYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCBCbHVlUGxhdGVXb3JsZCB9IGZyb20gJy4vYXBwbGljYXRpb24tc3RhdGUnO1xyXG5pbXBvcnQgeyBnZXRTYW1wbGVIaXN0b3J5IH0gZnJvbSAnLi9zYW1wbGUtaGlzdG9yeSc7XHJcbmltcG9ydCB7IGdldFNhbXBsZUhpc3RvcnlFUyB9IGZyb20gJy4vc2FtcGxlLWhpc3RvcnktZXMnO1xyXG5cclxuY29uc3QgYmFrZXJ5RU4gPSByZXF1aXJlKCcuLi9kYXRhL2Jha2VyeS55YW1sJyk7XHJcbmNvbnN0IGNvZmZlZUVOID0gcmVxdWlyZSgnLi4vZGF0YS9jb2ZmZWUueWFtbCcpO1xyXG5jb25zdCBtZW51RU4gPSByZXF1aXJlKCcuLi9kYXRhL21lbnUueWFtbCcpO1xyXG5jb25zdCBsZXhpY29uU3BlY0VOID0gcmVxdWlyZSgnLi4vZGF0YS9sZXhpY29uLnlhbWwnKTtcclxuY29uc3QgcmVncmVzc2lvblN1aXRlRU4gPSByZXF1aXJlKCcuLi9kYXRhL3JlZ3Jlc3Npb24ueWFtbCcpO1xyXG5cclxuY29uc3QgYmFrZXJ5RVMgPSByZXF1aXJlKCcuLi9kYXRhL2Jha2VyeS1lcy55YW1sJyk7XHJcbmNvbnN0IGNvZmZlZUVTID0gcmVxdWlyZSgnLi4vZGF0YS9jb2ZmZWUtZXMueWFtbCcpO1xyXG5jb25zdCBtZW51RVMgPSByZXF1aXJlKCcuLi9kYXRhL21lbnUtZXMueWFtbCcpO1xyXG5jb25zdCBsZXhpY29uU3BlY0VTID0gcmVxdWlyZSgnLi4vZGF0YS9sZXhpY29uLWVzLnlhbWwnKTtcclxuY29uc3QgcmVncmVzc2lvblN1aXRlRVMgPSByZXF1aXJlKCcuLi9kYXRhL3JlZ3Jlc3Npb24tZXMueWFtbCcpO1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9hZGVyKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICBpZiAobGFuZ3VhZ2UgPT09ICdlcy1VUycpIHtcclxuICAgIHJldHVybiBuZXcgT2JqZWN0TG9hZGVyKFtcclxuICAgICAgWycvc2FtcGxlcy9tZW51L21lbnUueWFtbCcsIG1lbnVFU10sXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9iYWtlcnktZXMueWFtbCcsIGJha2VyeUVTXSxcclxuICAgICAgWycvc2FtcGxlcy9tZW51L2NvZmZlZS1lcy55YW1sJywgY29mZmVlRVNdLFxyXG4gICAgXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBuZXcgT2JqZWN0TG9hZGVyKFtcclxuICAgICAgWycvc2FtcGxlcy9tZW51L21lbnUueWFtbCcsIG1lbnVFTl0sXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9iYWtlcnkueWFtbCcsIGJha2VyeUVOXSxcclxuICAgICAgWycvc2FtcGxlcy9tZW51L2NvZmZlZS55YW1sJywgY29mZmVlRU5dLFxyXG4gICAgXSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMZXhpY29uKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICBpZiAobGFuZ3VhZ2UgPT09ICdlcy1VUycpIHtcclxuICAgIHJldHVybiBsZXhpY29uU3BlY0VTO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbGV4aWNvblNwZWNFTjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlZ3Jlc3Npb25TdWl0ZShsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgaWYgKGxhbmd1YWdlID09PSAnZXMtVVMnKSB7XHJcbiAgICByZXR1cm4gcmVncmVzc2lvblN1aXRlRVM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByZWdyZXNzaW9uU3VpdGVFTjtcclxuICB9XHJcbn1cclxuXHJcbi8vIENocm9tZSBkZXRlY3Rpb24gbm93IGhhbmRsZWQgYnkgQ2hyb21lRGV0ZWN0IGNvbXBvbmVudC5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uKiBjaHJvbWVEZXRlY3RTYWdhKGFjdGlvbjogQ2hyb21lRGV0ZWN0QWN0aW9uKSB7XHJcbi8vICAgLy8gTk9URSB0aGF0IHdpbmRvdyA9PT0gdW5kZWZpbmVkIGR1cmluZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXHJcbi8vICAgaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgV2luZG93PSR7d2luZG93fWApO1xyXG4vLyAgICAgY29uc3QgYiA9IEJvd3Nlci5wYXJzZSh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbi8vICAgICAvLyBUT0RPOiB1c2UgYnJvd3Nlci5zYXRpc2ZpZXMoKSBmb3IgQ2hyb21lIGRldGVjdGlvbi5cclxuLy8gICAgIGNvbnN0IGlzQ2hyb21lID0gYi5icm93c2VyLm5hbWUgPT09ICdDaHJvbWUnO1xyXG4vLyAgICAgY29uc29sZS5sb2coYHNldFNwZWVjaFN1cHBvcnQoJHtpc0Nocm9tZX0sIChuYW1lPSR7Yi5icm93c2VyLm5hbWV9KSlgKTtcclxuLy8gICAgIHlpZWxkIHB1dChzZXRTcGVlY2hTdXBwb3J0KGlzQ2hyb21lKSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvYWRXb3JsZFNhZ2EoYWN0aW9uOiBMb2FkV29ybGRBY3Rpb24pIHtcclxuICBjb25zdCBsb2FkZXIgPSBnZXRMb2FkZXIoYWN0aW9uLmxhbmd1YWdlKTtcclxuICBjb25zdCBsZXhpY29uU3BlYyA9IGdldExleGljb24oYWN0aW9uLmxhbmd1YWdlKTtcclxuXHJcbiAgY29uc3Qgc3BlYzogQ2F0YWxvZ1NwZWMgPSB5aWVsZCBsb2FkQ2F0YWxvZ1NwZWMoXHJcbiAgICBsb2FkZXIsXHJcbiAgICAnL3NhbXBsZXMvbWVudS9tZW51LnlhbWwnXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcHJpeEZpeGVXb3JsZCA9IGNyZWF0ZVdvcmxkMyhzcGVjKTtcclxuICBjb25zdCBzaG9ydE9yZGVyV29ybGQgPSBjcmVhdGVTaG9ydE9yZGVyV29ybGQyKFxyXG4gICAgcHJpeEZpeGVXb3JsZCxcclxuICAgIGxleGljb25TcGVjLFxyXG4gICAgYWN0aW9uLmxhbmd1YWdlID09PSAnZXMtVVMnID8gJ3Nub3diYWxsLWVzJyA6ICdzbm93YmFsbCcsXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcblxyXG4gIC8vIFNvcnQgZm9yIGRpc3BsYXkgYnkgTGV4aWNvbkNvbnRyb2wuXHJcbiAgKGxleGljb25TcGVjIGFzIExleGljb25TcGVjKS5sZXhpY29uLnNvcnQoKGEsYikgPT4gXHJcbiAgICBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpXHJcbiAgKTtcclxuXHJcbiAgLy8gVmFsaWRhdGUgcmVncmVzc2lvbiBzdWl0ZS5cclxuICBjb25zb2xlLmxvZygnYmVmb3JlIHZhbGlkYXRpb24nKTtcclxuICAvLyBsb2dpY2FsVmFsaWRhdGlvblN1aXRlIGlzIG5vdCBpbiBjb3JlIGJlY2F1c2Ugb2YgYmV0dGVyLWFqdi1lcnJvcy5cclxuICAvLyBjb25zdCBleHBlY3RlZCA9IGxvZ2ljYWxWYWxpZGF0aW9uU3VpdGU8VGV4dFR1cm4+KHJlZ3Jlc3Npb25TdWl0ZSk7XHJcbiAgY29uc3QgZXhwZWN0ZWQgPSBnZXRSZWdyZXNzaW9uU3VpdGUoYWN0aW9uLmxhbmd1YWdlKSBhcyBMb2dpY2FsVmFsaWRhdGlvblN1aXRlPFRleHRUdXJuPlxyXG5cclxuICBjb25zdCB0ZXN0UmVzdWx0cyA9IHlpZWxkIHJ1blRlc3RzKHByaXhGaXhlV29ybGQsIHNob3J0T3JkZXJXb3JsZCwgZXhwZWN0ZWQpO1xyXG5cclxuICBjb25zdCB0b2tlbml6ZXIgPSBzaG9ydE9yZGVyV29ybGQubGV4ZXIudG9rZW5pemVyO1xyXG4gIGNvbnN0IHBvc3RpbmdzID0gdG9rZW5pemVyLmdldFBvc3RpbmdzKCk7XHJcblxyXG4gIGNvbnN0IGJsdWVQbGF0ZVdvcmxkOiBCbHVlUGxhdGVXb3JsZCA9IHtcclxuICAgIHByaXhGaXhlV29ybGQsXHJcbiAgICBsZXhpY29uU3BlYzogbGV4aWNvblNwZWMsXHJcbiAgICBwb3N0aW5ncyxcclxuICAgIHNob3J0T3JkZXJXb3JsZCxcclxuICAgIHRlc3RSZXN1bHRzLFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGlzdG9yeSA9IGFjdGlvbi5sYW5ndWFnZSA9PT0gJ2VzLVVTJyA/XHJcbiAgICBnZXRTYW1wbGVIaXN0b3J5RVMoKSA6IFxyXG4gICAgZ2V0U2FtcGxlSGlzdG9yeSgpO1xyXG5cclxuICB5aWVsZCBwdXQoc2V0V29ybGQoYmx1ZVBsYXRlV29ybGQsIGhpc3RvcnksIGFjdGlvbi5sYW5ndWFnZSkpO1xyXG59XHJcblxyXG4vLyBUT0RPOiBjbGVhbiB0aGlzIHVwLlxyXG5mdW5jdGlvbiBnZXRBcHBTdGF0ZShhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSk6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiBhcHBTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBwcm9jZXNzU2FnYSh7IHNvdXJjZSwgdGV4dCwgZmluYWwgfTogUHJvY2Vzc0FjdGlvbikge1xyXG4gIC8vIFRPRE86IHJlbW92ZSBmaW5hbCBjaGVjayBmb3IgaW50ZXJpbSBjYXJ0cy5cclxuICBpZiAoZmluYWwpIHtcclxuICAgIC8vIFRPRE86IGNhbGwgdG8gc3BlZWNoVG9UZXh0RmlsdGVyKCkgc2hvdWxkIG5vdCBiZSBkdXBsaWNhdGVkXHJcbiAgICAvLyBpbiBhcHBseVByb2Nlc3MoKS5cclxuICAgIGNvbnN0IGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlID0geWllbGQoc2VsZWN0KGdldEFwcFN0YXRlKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgcmF3IHRleHQ6IFwiJHt0ZXh0fVwiYCk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHNwZWVjaFRvVGV4dEZpbHRlcih0ZXh0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBmaWx0ZXJlZCB0ZXh0OiBcIiR7ZmlsdGVyZWR9XCJgKTtcclxuICAgIGNvbnN0IHN0YXRlMDogU3RhdGUgPSB7IGNhcnQ6IGFwcFN0YXRlLmNhcnQgfTtcclxuICAgIGNvbnN0IHN0YXRlMTogU3RhdGUgPSBcclxuICAgICAgeWllbGQgYXBwU3RhdGUuYmx1ZVBsYXRlV29ybGQuc2hvcnRPcmRlcldvcmxkLnByb2Nlc3NvcihcclxuICAgICAgICBmaWx0ZXJlZCxcclxuICAgICAgICBzdGF0ZTBcclxuICAgICAgKTtcclxuICAgIHlpZWxkKHB1dChzZXRDYXJ0KHN0YXRlMS5jYXJ0KSkpO1xyXG4gICAgeWllbGQocHV0KGFwcGVuZEhpc3Rvcnkoc3RhdGUxLmNhcnQsIHNvdXJjZSwgdGV4dCkpKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==