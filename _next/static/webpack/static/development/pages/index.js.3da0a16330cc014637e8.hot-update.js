webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/sagas.tsx":
/*!***************************!*\
  !*** ./actions/sagas.tsx ***!
  \***************************/
/*! exports provided: chromeDetectSaga, loadWorldSaga, processSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chromeDetectSaga", function() { return chromeDetectSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWorldSaga", function() { return loadWorldSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processSaga", function() { return processSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prix-fixe */ "./node_modules/prix-fixe/build/src/bindex.js");
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prix_fixe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var short_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! short-order */ "./node_modules/short-order/build/src/index.js");
/* harmony import */ var short_order__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(short_order__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logic */ "./logic/index.ts");
/* harmony import */ var _sample_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sample-history */ "./actions/sample-history.ts");
/* harmony import */ var _sample_history_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sample-history-es */ "./actions/sample-history-es.ts");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(chromeDetectSaga),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadWorldSaga),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(processSaga);










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
    return new prix_fixe__WEBPACK_IMPORTED_MODULE_2__["ObjectLoader"]([['/samples/menu/menu.yaml', menuES], ['/samples/menu/bakery-es.yaml', bakeryES], ['/samples/menu/coffee-es.yaml', coffeeES]]);
  } else {
    return new prix_fixe__WEBPACK_IMPORTED_MODULE_2__["ObjectLoader"]([['/samples/menu/menu.yaml', menuEN], ['/samples/menu/bakery.yaml', bakeryEN], ['/samples/menu/coffee.yaml', coffeeEN]]);
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

function chromeDetectSaga(action) {
  var b, isChrome;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function chromeDetectSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Window=".concat(window));
          b = bowser__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.navigator.userAgent); // TODO: use browser.satisfies() for Chrome detection.

          isChrome = b.browser.name === 'Chrome';
          console.log("setSpeechSupport(".concat(isChrome, ", (name=").concat(b.browser.name, "))"));
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setSpeechSupport"])(isChrome));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function loadWorldSaga(action) {
  var loader, lexiconSpec, spec, prixFixeWorld, shortOrderWorld, expected, testResults, tokenizer, postings, bluePlateWorld, history;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadWorldSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          loader = getLoader(action.language);
          lexiconSpec = getLexicon(action.language);
          _context2.next = 4;
          return Object(prix_fixe__WEBPACK_IMPORTED_MODULE_2__["loadCatalogSpec"])(loader, '/samples/menu/menu.yaml');

        case 4:
          spec = _context2.sent;
          prixFixeWorld = Object(prix_fixe__WEBPACK_IMPORTED_MODULE_2__["createWorld3"])(spec);
          shortOrderWorld = Object(short_order__WEBPACK_IMPORTED_MODULE_4__["createShortOrderWorld2"])(prixFixeWorld, lexiconSpec, action.language === 'es-US' ? 'snowball-es' : 'snowball', false); // Sort for display by LexiconControl.

          lexiconSpec.lexicon.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          }); // Validate regression suite.

          console.log('before validation'); // logicalValidationSuite is not in core because of better-ajv-erros.
          // const expected = logicalValidationSuite<TextTurn>(regressionSuite);

          expected = getRegressionSuite(action.language);
          _context2.next = 12;
          return Object(_logic__WEBPACK_IMPORTED_MODULE_6__["runTests"])(prixFixeWorld, shortOrderWorld, expected);

        case 12:
          testResults = _context2.sent;
          tokenizer = shortOrderWorld.lexer.tokenizer;
          postings = tokenizer.getPostings();
          bluePlateWorld = {
            prixFixeWorld: prixFixeWorld,
            lexiconSpec: lexiconSpec,
            postings: postings,
            shortOrderWorld: shortOrderWorld,
            testResults: testResults
          };
          history = action.language === 'es-US' ? Object(_sample_history_es__WEBPACK_IMPORTED_MODULE_8__["getSampleHistoryES"])() : Object(_sample_history__WEBPACK_IMPORTED_MODULE_7__["getSampleHistory"])();
          _context2.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setWorld"])(bluePlateWorld, history, action.language));

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} // TODO: clean this up.

function getAppState(appState) {
  return appState;
}

function processSaga(_ref) {
  var source, text, _final, appState, filtered, state0, state1;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function processSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          source = _ref.source, text = _ref.text, _final = _ref["final"];

          if (!_final) {
            _context3.next = 14;
            break;
          }

          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["select"])(getAppState);

        case 4:
          appState = _context3.sent;
          // console.log(`raw text: "${text}"`);
          filtered = Object(prix_fixe__WEBPACK_IMPORTED_MODULE_2__["speechToTextFilter"])(text); // console.log(`filtered text: "${filtered}"`);

          state0 = {
            cart: appState.cart
          };
          _context3.next = 9;
          return appState.bluePlateWorld.shortOrderWorld.processor(filtered, state0);

        case 9:
          state1 = _context3.sent;
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setCart"])(state1.cart));

        case 12:
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["appendHistory"])(state1.cart, source, text));

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NhZ2FzLnRzeCJdLCJuYW1lcyI6WyJjaHJvbWVEZXRlY3RTYWdhIiwibG9hZFdvcmxkU2FnYSIsInByb2Nlc3NTYWdhIiwiYmFrZXJ5RU4iLCJyZXF1aXJlIiwiY29mZmVlRU4iLCJtZW51RU4iLCJsZXhpY29uU3BlY0VOIiwicmVncmVzc2lvblN1aXRlRU4iLCJiYWtlcnlFUyIsImNvZmZlZUVTIiwibWVudUVTIiwibGV4aWNvblNwZWNFUyIsInJlZ3Jlc3Npb25TdWl0ZUVTIiwiZ2V0TG9hZGVyIiwibGFuZ3VhZ2UiLCJPYmplY3RMb2FkZXIiLCJnZXRMZXhpY29uIiwiZ2V0UmVncmVzc2lvblN1aXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImIiLCJCb3dzZXIiLCJwYXJzZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzQ2hyb21lIiwiYnJvd3NlciIsIm5hbWUiLCJwdXQiLCJzZXRTcGVlY2hTdXBwb3J0IiwibG9hZGVyIiwibGV4aWNvblNwZWMiLCJsb2FkQ2F0YWxvZ1NwZWMiLCJzcGVjIiwicHJpeEZpeGVXb3JsZCIsImNyZWF0ZVdvcmxkMyIsInNob3J0T3JkZXJXb3JsZCIsImNyZWF0ZVNob3J0T3JkZXJXb3JsZDIiLCJsZXhpY29uIiwic29ydCIsImEiLCJsb2NhbGVDb21wYXJlIiwiZXhwZWN0ZWQiLCJydW5UZXN0cyIsInRlc3RSZXN1bHRzIiwidG9rZW5pemVyIiwibGV4ZXIiLCJwb3N0aW5ncyIsImdldFBvc3RpbmdzIiwiYmx1ZVBsYXRlV29ybGQiLCJoaXN0b3J5IiwiZ2V0U2FtcGxlSGlzdG9yeUVTIiwiZ2V0U2FtcGxlSGlzdG9yeSIsInNldFdvcmxkIiwiZ2V0QXBwU3RhdGUiLCJhcHBTdGF0ZSIsInNvdXJjZSIsInRleHQiLCJmaW5hbCIsInNlbGVjdCIsImZpbHRlcmVkIiwic3BlZWNoVG9UZXh0RmlsdGVyIiwic3RhdGUwIiwiY2FydCIsInByb2Nlc3NvciIsInN0YXRlMSIsInNldENhcnQiLCJhcHBlbmRIaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0E0RWlCQSxnQjttR0FXQUMsYTttR0FxREFDLFc7O0FBNUlqQjtBQUVBO0FBV0E7QUFDQTtBQUVBO0FBVUE7QUFHQTtBQUNBOztBQUVBLElBQU1DLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywrQ0FBRCxDQUF4Qjs7QUFDQSxJQUFNQyxRQUFRLEdBQUdELG1CQUFPLENBQUMsK0NBQUQsQ0FBeEI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHRixtQkFBTyxDQUFDLDJDQUFELENBQXRCOztBQUNBLElBQU1HLGFBQWEsR0FBR0gsbUJBQU8sQ0FBQyxpREFBRCxDQUE3Qjs7QUFDQSxJQUFNSSxpQkFBaUIsR0FBR0osbUJBQU8sQ0FBQyx1REFBRCxDQUFqQzs7QUFFQSxJQUFNSyxRQUFRLEdBQUdMLG1CQUFPLENBQUMscURBQUQsQ0FBeEI7O0FBQ0EsSUFBTU0sUUFBUSxHQUFHTixtQkFBTyxDQUFDLHFEQUFELENBQXhCOztBQUNBLElBQU1PLE1BQU0sR0FBR1AsbUJBQU8sQ0FBQyxpREFBRCxDQUF0Qjs7QUFDQSxJQUFNUSxhQUFhLEdBQUdSLG1CQUFPLENBQUMsdURBQUQsQ0FBN0I7O0FBQ0EsSUFBTVMsaUJBQWlCLEdBQUdULG1CQUFPLENBQUMsNkRBQUQsQ0FBakM7O0FBRUEsU0FBU1UsU0FBVCxDQUFtQkMsUUFBbkIsRUFBcUM7QUFDbkMsTUFBSUEsUUFBUSxLQUFLLE9BQWpCLEVBQTBCO0FBQ3hCLFdBQU8sSUFBSUMsc0RBQUosQ0FBaUIsQ0FDdEIsQ0FBQyx5QkFBRCxFQUE0QkwsTUFBNUIsQ0FEc0IsRUFFdEIsQ0FBQyw4QkFBRCxFQUFpQ0YsUUFBakMsQ0FGc0IsRUFHdEIsQ0FBQyw4QkFBRCxFQUFpQ0MsUUFBakMsQ0FIc0IsQ0FBakIsQ0FBUDtBQUtELEdBTkQsTUFNTztBQUNMLFdBQU8sSUFBSU0sc0RBQUosQ0FBaUIsQ0FDdEIsQ0FBQyx5QkFBRCxFQUE0QlYsTUFBNUIsQ0FEc0IsRUFFdEIsQ0FBQywyQkFBRCxFQUE4QkgsUUFBOUIsQ0FGc0IsRUFHdEIsQ0FBQywyQkFBRCxFQUE4QkUsUUFBOUIsQ0FIc0IsQ0FBakIsQ0FBUDtBQUtEO0FBQ0Y7O0FBRUQsU0FBU1ksVUFBVCxDQUFvQkYsUUFBcEIsRUFBc0M7QUFDcEMsTUFBSUEsUUFBUSxLQUFLLE9BQWpCLEVBQTBCO0FBQ3hCLFdBQU9ILGFBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPTCxhQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTVyxrQkFBVCxDQUE0QkgsUUFBNUIsRUFBOEM7QUFDNUMsTUFBSUEsUUFBUSxLQUFLLE9BQWpCLEVBQTBCO0FBQ3hCLFdBQU9GLGlCQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0wsaUJBQVA7QUFDRDtBQUNGOztBQUVNLFNBQVVSLGdCQUFWLENBQTJCbUIsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xDLGlCQUFPLENBQUNDLEdBQVIsa0JBQXNCQyxNQUF0QjtBQUNNQyxXQUZELEdBRUtDLDZDQUFNLENBQUNDLEtBQVAsQ0FBYUgsTUFBTSxDQUFDSSxTQUFQLENBQWlCQyxTQUE5QixDQUZMLEVBR0w7O0FBQ01DLGtCQUpELEdBSVlMLENBQUMsQ0FBQ00sT0FBRixDQUFVQyxJQUFWLEtBQW1CLFFBSi9CO0FBS0xWLGlCQUFPLENBQUNDLEdBQVIsNEJBQWdDTyxRQUFoQyxxQkFBbURMLENBQUMsQ0FBQ00sT0FBRixDQUFVQyxJQUE3RDtBQUxLO0FBTUwsaUJBQU1DLDhEQUFHLENBQUNDLGlFQUFnQixDQUFDSixRQUFELENBQWpCLENBQVQ7O0FBTks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQSxTQUFVM0IsYUFBVixDQUF3QmtCLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDYyxnQkFERCxHQUNVbkIsU0FBUyxDQUFDSyxNQUFNLENBQUNKLFFBQVIsQ0FEbkI7QUFFQ21CLHFCQUZELEdBRWVqQixVQUFVLENBQUNFLE1BQU0sQ0FBQ0osUUFBUixDQUZ6QjtBQUFBO0FBSXFCLGlCQUFNb0IsaUVBQWUsQ0FDN0NGLE1BRDZDLEVBRTdDLHlCQUY2QyxDQUFyQjs7QUFKckI7QUFJQ0csY0FKRDtBQVNDQyx1QkFURCxHQVNpQkMsOERBQVksQ0FBQ0YsSUFBRCxDQVQ3QjtBQVVDRyx5QkFWRCxHQVVtQkMsMEVBQXNCLENBQzVDSCxhQUQ0QyxFQUU1Q0gsV0FGNEMsRUFHNUNmLE1BQU0sQ0FBQ0osUUFBUCxLQUFvQixPQUFwQixHQUE4QixhQUE5QixHQUE4QyxVQUhGLEVBSTVDLEtBSjRDLENBVnpDLEVBaUJMOztBQUNDbUIscUJBQUQsQ0FBNkJPLE9BQTdCLENBQXFDQyxJQUFyQyxDQUEwQyxVQUFDQyxDQUFELEVBQUdwQixDQUFIO0FBQUEsbUJBQ3hDb0IsQ0FBQyxDQUFDYixJQUFGLENBQU9jLGFBQVAsQ0FBcUJyQixDQUFDLENBQUNPLElBQXZCLENBRHdDO0FBQUEsV0FBMUMsRUFsQkssQ0FzQkw7O0FBQ0FWLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQXZCSyxDQXdCTDtBQUNBOztBQUNNd0Isa0JBMUJELEdBMEJZM0Isa0JBQWtCLENBQUNDLE1BQU0sQ0FBQ0osUUFBUixDQTFCOUI7QUFBQTtBQTRCZSxpQkFBTStCLHVEQUFRLENBQUNULGFBQUQsRUFBZ0JFLGVBQWhCLEVBQWlDTSxRQUFqQyxDQUFkOztBQTVCZjtBQTRCQ0UscUJBNUJEO0FBOEJDQyxtQkE5QkQsR0E4QmFULGVBQWUsQ0FBQ1UsS0FBaEIsQ0FBc0JELFNBOUJuQztBQStCQ0Usa0JBL0JELEdBK0JZRixTQUFTLENBQUNHLFdBQVYsRUEvQlo7QUFpQ0NDLHdCQWpDRCxHQWlDa0M7QUFDckNmLHlCQUFhLEVBQWJBLGFBRHFDO0FBRXJDSCx1QkFBVyxFQUFFQSxXQUZ3QjtBQUdyQ2dCLG9CQUFRLEVBQVJBLFFBSHFDO0FBSXJDWCwyQkFBZSxFQUFmQSxlQUpxQztBQUtyQ1EsdUJBQVcsRUFBWEE7QUFMcUMsV0FqQ2xDO0FBeUNDTSxpQkF6Q0QsR0F5Q1dsQyxNQUFNLENBQUNKLFFBQVAsS0FBb0IsT0FBcEIsR0FDZHVDLDZFQUFrQixFQURKLEdBRWRDLHdFQUFnQixFQTNDYjtBQUFBO0FBNkNMLGlCQUFNeEIsOERBQUcsQ0FBQ3lCLHlEQUFRLENBQUNKLGNBQUQsRUFBaUJDLE9BQWpCLEVBQTBCbEMsTUFBTSxDQUFDSixRQUFqQyxDQUFULENBQVQ7O0FBN0NLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FnRFA7O0FBQ0EsU0FBUzBDLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQW1FO0FBQ2pFLFNBQU9BLFFBQVA7QUFDRDs7QUFFTSxTQUFVeEQsV0FBVjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCeUQsZ0JBQXhCLFFBQXdCQSxNQUF4QixFQUFnQ0MsSUFBaEMsUUFBZ0NBLElBQWhDLEVBQXNDQyxNQUF0Qzs7QUFBQSxlQUVEQSxNQUZDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBS2dDLGlCQUFNQyxpRUFBTSxDQUFDTCxXQUFELENBQVo7O0FBTGhDO0FBS0dDLGtCQUxIO0FBTUg7QUFDTUssa0JBUEgsR0FPY0Msb0VBQWtCLENBQUNKLElBQUQsQ0FQaEMsRUFRSDs7QUFDTUssZ0JBVEgsR0FTbUI7QUFBRUMsZ0JBQUksRUFBRVIsUUFBUSxDQUFDUTtBQUFqQixXQVRuQjtBQUFBO0FBV0QsaUJBQU1SLFFBQVEsQ0FBQ04sY0FBVCxDQUF3QmIsZUFBeEIsQ0FBd0M0QixTQUF4QyxDQUNKSixRQURJLEVBRUpFLE1BRkksQ0FBTjs7QUFYQztBQVVHRyxnQkFWSDtBQUFBO0FBZUgsaUJBQU1yQyw4REFBRyxDQUFDc0Msd0RBQU8sQ0FBQ0QsTUFBTSxDQUFDRixJQUFSLENBQVIsQ0FBVDs7QUFmRztBQUFBO0FBZ0JILGlCQUFNbkMsOERBQUcsQ0FBQ3VDLDhEQUFhLENBQUNGLE1BQU0sQ0FBQ0YsSUFBUixFQUFjUCxNQUFkLEVBQXNCQyxJQUF0QixDQUFkLENBQVQ7O0FBaEJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zZGEwYTE2MzMwY2MwMTQ2MzdlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvd3NlciBmcm9tIFwiYm93c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENhdGFsb2dTcGVjLFxyXG4gIGNyZWF0ZVdvcmxkMyxcclxuICBsb2FkQ2F0YWxvZ1NwZWMsXHJcbiAgTG9naWNhbFZhbGlkYXRpb25TdWl0ZSxcclxuICBPYmplY3RMb2FkZXIsXHJcbiAgc3BlZWNoVG9UZXh0RmlsdGVyLFxyXG4gIFN0YXRlLFxyXG4gIFRleHRUdXJuLFxyXG59IGZyb20gJ3ByaXgtZml4ZSc7XHJcblxyXG5pbXBvcnQgeyBwdXQsIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IGNyZWF0ZVNob3J0T3JkZXJXb3JsZDIsIExleGljb25TcGVjIH0gZnJvbSAnc2hvcnQtb3JkZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBhcHBlbmRIaXN0b3J5LFxyXG4gIENocm9tZURldGVjdEFjdGlvbixcclxuICBMb2FkV29ybGRBY3Rpb24sXHJcbiAgUHJvY2Vzc0FjdGlvbixcclxuICBzZXRDYXJ0LFxyXG4gIHNldFNwZWVjaFN1cHBvcnQsXHJcbiAgc2V0V29ybGRcclxufSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IHJ1blRlc3RzIH0gZnJvbSAnLi4vbG9naWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgQmx1ZVBsYXRlV29ybGQgfSBmcm9tICcuL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuaW1wb3J0IHsgZ2V0U2FtcGxlSGlzdG9yeSB9IGZyb20gJy4vc2FtcGxlLWhpc3RvcnknO1xyXG5pbXBvcnQgeyBnZXRTYW1wbGVIaXN0b3J5RVMgfSBmcm9tICcuL3NhbXBsZS1oaXN0b3J5LWVzJztcclxuXHJcbmNvbnN0IGJha2VyeUVOID0gcmVxdWlyZSgnLi4vZGF0YS9iYWtlcnkueWFtbCcpO1xyXG5jb25zdCBjb2ZmZWVFTiA9IHJlcXVpcmUoJy4uL2RhdGEvY29mZmVlLnlhbWwnKTtcclxuY29uc3QgbWVudUVOID0gcmVxdWlyZSgnLi4vZGF0YS9tZW51LnlhbWwnKTtcclxuY29uc3QgbGV4aWNvblNwZWNFTiA9IHJlcXVpcmUoJy4uL2RhdGEvbGV4aWNvbi55YW1sJyk7XHJcbmNvbnN0IHJlZ3Jlc3Npb25TdWl0ZUVOID0gcmVxdWlyZSgnLi4vZGF0YS9yZWdyZXNzaW9uLnlhbWwnKTtcclxuXHJcbmNvbnN0IGJha2VyeUVTID0gcmVxdWlyZSgnLi4vZGF0YS9iYWtlcnktZXMueWFtbCcpO1xyXG5jb25zdCBjb2ZmZWVFUyA9IHJlcXVpcmUoJy4uL2RhdGEvY29mZmVlLWVzLnlhbWwnKTtcclxuY29uc3QgbWVudUVTID0gcmVxdWlyZSgnLi4vZGF0YS9tZW51LWVzLnlhbWwnKTtcclxuY29uc3QgbGV4aWNvblNwZWNFUyA9IHJlcXVpcmUoJy4uL2RhdGEvbGV4aWNvbi1lcy55YW1sJyk7XHJcbmNvbnN0IHJlZ3Jlc3Npb25TdWl0ZUVTID0gcmVxdWlyZSgnLi4vZGF0YS9yZWdyZXNzaW9uLWVzLnlhbWwnKTtcclxuXHJcbmZ1bmN0aW9uIGdldExvYWRlcihsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgaWYgKGxhbmd1YWdlID09PSAnZXMtVVMnKSB7XHJcbiAgICByZXR1cm4gbmV3IE9iamVjdExvYWRlcihbXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9tZW51LnlhbWwnLCBtZW51RVNdLFxyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvYmFrZXJ5LWVzLnlhbWwnLCBiYWtlcnlFU10sXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9jb2ZmZWUtZXMueWFtbCcsIGNvZmZlZUVTXSxcclxuICAgIF0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbmV3IE9iamVjdExvYWRlcihbXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9tZW51LnlhbWwnLCBtZW51RU5dLFxyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvYmFrZXJ5LnlhbWwnLCBiYWtlcnlFTl0sXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9jb2ZmZWUueWFtbCcsIGNvZmZlZUVOXSxcclxuICAgIF0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGV4aWNvbihsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgaWYgKGxhbmd1YWdlID09PSAnZXMtVVMnKSB7XHJcbiAgICByZXR1cm4gbGV4aWNvblNwZWNFUztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGxleGljb25TcGVjRU47XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWdyZXNzaW9uU3VpdGUobGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gIGlmIChsYW5ndWFnZSA9PT0gJ2VzLVVTJykge1xyXG4gICAgcmV0dXJuIHJlZ3Jlc3Npb25TdWl0ZUVTO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcmVncmVzc2lvblN1aXRlRU47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNocm9tZURldGVjdFNhZ2EoYWN0aW9uOiBDaHJvbWVEZXRlY3RBY3Rpb24pIHtcclxuICBjb25zb2xlLmxvZyhgV2luZG93PSR7d2luZG93fWApO1xyXG4gIGNvbnN0IGIgPSBCb3dzZXIucGFyc2Uod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gIC8vIFRPRE86IHVzZSBicm93c2VyLnNhdGlzZmllcygpIGZvciBDaHJvbWUgZGV0ZWN0aW9uLlxyXG4gIGNvbnN0IGlzQ2hyb21lID0gYi5icm93c2VyLm5hbWUgPT09ICdDaHJvbWUnO1xyXG4gIGNvbnNvbGUubG9nKGBzZXRTcGVlY2hTdXBwb3J0KCR7aXNDaHJvbWV9LCAobmFtZT0ke2IuYnJvd3Nlci5uYW1lfSkpYCk7XHJcbiAgeWllbGQgcHV0KHNldFNwZWVjaFN1cHBvcnQoaXNDaHJvbWUpKTtcclxuICAvLyB0aGlzLnByb3BzLnNwZWVjaFN1cHBvcnRlZChpc0Nocm9tZSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvYWRXb3JsZFNhZ2EoYWN0aW9uOiBMb2FkV29ybGRBY3Rpb24pIHtcclxuICBjb25zdCBsb2FkZXIgPSBnZXRMb2FkZXIoYWN0aW9uLmxhbmd1YWdlKTtcclxuICBjb25zdCBsZXhpY29uU3BlYyA9IGdldExleGljb24oYWN0aW9uLmxhbmd1YWdlKTtcclxuXHJcbiAgY29uc3Qgc3BlYzogQ2F0YWxvZ1NwZWMgPSB5aWVsZCBsb2FkQ2F0YWxvZ1NwZWMoXHJcbiAgICBsb2FkZXIsXHJcbiAgICAnL3NhbXBsZXMvbWVudS9tZW51LnlhbWwnXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcHJpeEZpeGVXb3JsZCA9IGNyZWF0ZVdvcmxkMyhzcGVjKTtcclxuICBjb25zdCBzaG9ydE9yZGVyV29ybGQgPSBjcmVhdGVTaG9ydE9yZGVyV29ybGQyKFxyXG4gICAgcHJpeEZpeGVXb3JsZCxcclxuICAgIGxleGljb25TcGVjLFxyXG4gICAgYWN0aW9uLmxhbmd1YWdlID09PSAnZXMtVVMnID8gJ3Nub3diYWxsLWVzJyA6ICdzbm93YmFsbCcsXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcblxyXG4gIC8vIFNvcnQgZm9yIGRpc3BsYXkgYnkgTGV4aWNvbkNvbnRyb2wuXHJcbiAgKGxleGljb25TcGVjIGFzIExleGljb25TcGVjKS5sZXhpY29uLnNvcnQoKGEsYikgPT4gXHJcbiAgICBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpXHJcbiAgKTtcclxuXHJcbiAgLy8gVmFsaWRhdGUgcmVncmVzc2lvbiBzdWl0ZS5cclxuICBjb25zb2xlLmxvZygnYmVmb3JlIHZhbGlkYXRpb24nKTtcclxuICAvLyBsb2dpY2FsVmFsaWRhdGlvblN1aXRlIGlzIG5vdCBpbiBjb3JlIGJlY2F1c2Ugb2YgYmV0dGVyLWFqdi1lcnJvcy5cclxuICAvLyBjb25zdCBleHBlY3RlZCA9IGxvZ2ljYWxWYWxpZGF0aW9uU3VpdGU8VGV4dFR1cm4+KHJlZ3Jlc3Npb25TdWl0ZSk7XHJcbiAgY29uc3QgZXhwZWN0ZWQgPSBnZXRSZWdyZXNzaW9uU3VpdGUoYWN0aW9uLmxhbmd1YWdlKSBhcyBMb2dpY2FsVmFsaWRhdGlvblN1aXRlPFRleHRUdXJuPlxyXG5cclxuICBjb25zdCB0ZXN0UmVzdWx0cyA9IHlpZWxkIHJ1blRlc3RzKHByaXhGaXhlV29ybGQsIHNob3J0T3JkZXJXb3JsZCwgZXhwZWN0ZWQpO1xyXG5cclxuICBjb25zdCB0b2tlbml6ZXIgPSBzaG9ydE9yZGVyV29ybGQubGV4ZXIudG9rZW5pemVyO1xyXG4gIGNvbnN0IHBvc3RpbmdzID0gdG9rZW5pemVyLmdldFBvc3RpbmdzKCk7XHJcblxyXG4gIGNvbnN0IGJsdWVQbGF0ZVdvcmxkOiBCbHVlUGxhdGVXb3JsZCA9IHtcclxuICAgIHByaXhGaXhlV29ybGQsXHJcbiAgICBsZXhpY29uU3BlYzogbGV4aWNvblNwZWMsXHJcbiAgICBwb3N0aW5ncyxcclxuICAgIHNob3J0T3JkZXJXb3JsZCxcclxuICAgIHRlc3RSZXN1bHRzLFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGlzdG9yeSA9IGFjdGlvbi5sYW5ndWFnZSA9PT0gJ2VzLVVTJyA/XHJcbiAgICBnZXRTYW1wbGVIaXN0b3J5RVMoKSA6IFxyXG4gICAgZ2V0U2FtcGxlSGlzdG9yeSgpO1xyXG5cclxuICB5aWVsZCBwdXQoc2V0V29ybGQoYmx1ZVBsYXRlV29ybGQsIGhpc3RvcnksIGFjdGlvbi5sYW5ndWFnZSkpO1xyXG59XHJcblxyXG4vLyBUT0RPOiBjbGVhbiB0aGlzIHVwLlxyXG5mdW5jdGlvbiBnZXRBcHBTdGF0ZShhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSk6IEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gIHJldHVybiBhcHBTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBwcm9jZXNzU2FnYSh7IHNvdXJjZSwgdGV4dCwgZmluYWwgfTogUHJvY2Vzc0FjdGlvbikge1xyXG4gIC8vIFRPRE86IHJlbW92ZSBmaW5hbCBjaGVjayBmb3IgaW50ZXJpbSBjYXJ0cy5cclxuICBpZiAoZmluYWwpIHtcclxuICAgIC8vIFRPRE86IGNhbGwgdG8gc3BlZWNoVG9UZXh0RmlsdGVyKCkgc2hvdWxkIG5vdCBiZSBkdXBsaWNhdGVkXHJcbiAgICAvLyBpbiBhcHBseVByb2Nlc3MoKS5cclxuICAgIGNvbnN0IGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlID0geWllbGQoc2VsZWN0KGdldEFwcFN0YXRlKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgcmF3IHRleHQ6IFwiJHt0ZXh0fVwiYCk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHNwZWVjaFRvVGV4dEZpbHRlcih0ZXh0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBmaWx0ZXJlZCB0ZXh0OiBcIiR7ZmlsdGVyZWR9XCJgKTtcclxuICAgIGNvbnN0IHN0YXRlMDogU3RhdGUgPSB7IGNhcnQ6IGFwcFN0YXRlLmNhcnQgfTtcclxuICAgIGNvbnN0IHN0YXRlMTogU3RhdGUgPSBcclxuICAgICAgeWllbGQgYXBwU3RhdGUuYmx1ZVBsYXRlV29ybGQuc2hvcnRPcmRlcldvcmxkLnByb2Nlc3NvcihcclxuICAgICAgICBmaWx0ZXJlZCxcclxuICAgICAgICBzdGF0ZTBcclxuICAgICAgKTtcclxuICAgIHlpZWxkKHB1dChzZXRDYXJ0KHN0YXRlMS5jYXJ0KSkpO1xyXG4gICAgeWllbGQocHV0KGFwcGVuZEhpc3Rvcnkoc3RhdGUxLmNhcnQsIHNvdXJjZSwgdGV4dCkpKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==