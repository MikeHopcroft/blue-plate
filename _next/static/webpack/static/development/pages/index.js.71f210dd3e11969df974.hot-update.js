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
          console.log('this.props.speechSupported(isChrome)');
          _context.next = 6;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setSpeechSupport"])(isChrome);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NhZ2FzLnRzeCJdLCJuYW1lcyI6WyJjaHJvbWVEZXRlY3RTYWdhIiwibG9hZFdvcmxkU2FnYSIsInByb2Nlc3NTYWdhIiwiYmFrZXJ5RU4iLCJyZXF1aXJlIiwiY29mZmVlRU4iLCJtZW51RU4iLCJsZXhpY29uU3BlY0VOIiwicmVncmVzc2lvblN1aXRlRU4iLCJiYWtlcnlFUyIsImNvZmZlZUVTIiwibWVudUVTIiwibGV4aWNvblNwZWNFUyIsInJlZ3Jlc3Npb25TdWl0ZUVTIiwiZ2V0TG9hZGVyIiwibGFuZ3VhZ2UiLCJPYmplY3RMb2FkZXIiLCJnZXRMZXhpY29uIiwiZ2V0UmVncmVzc2lvblN1aXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImIiLCJCb3dzZXIiLCJwYXJzZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzQ2hyb21lIiwiYnJvd3NlciIsIm5hbWUiLCJzZXRTcGVlY2hTdXBwb3J0IiwibG9hZGVyIiwibGV4aWNvblNwZWMiLCJsb2FkQ2F0YWxvZ1NwZWMiLCJzcGVjIiwicHJpeEZpeGVXb3JsZCIsImNyZWF0ZVdvcmxkMyIsInNob3J0T3JkZXJXb3JsZCIsImNyZWF0ZVNob3J0T3JkZXJXb3JsZDIiLCJsZXhpY29uIiwic29ydCIsImEiLCJsb2NhbGVDb21wYXJlIiwiZXhwZWN0ZWQiLCJydW5UZXN0cyIsInRlc3RSZXN1bHRzIiwidG9rZW5pemVyIiwibGV4ZXIiLCJwb3N0aW5ncyIsImdldFBvc3RpbmdzIiwiYmx1ZVBsYXRlV29ybGQiLCJoaXN0b3J5IiwiZ2V0U2FtcGxlSGlzdG9yeUVTIiwiZ2V0U2FtcGxlSGlzdG9yeSIsInB1dCIsInNldFdvcmxkIiwiZ2V0QXBwU3RhdGUiLCJhcHBTdGF0ZSIsInNvdXJjZSIsInRleHQiLCJmaW5hbCIsInNlbGVjdCIsImZpbHRlcmVkIiwic3BlZWNoVG9UZXh0RmlsdGVyIiwic3RhdGUwIiwiY2FydCIsInByb2Nlc3NvciIs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NzFmMjEwZGQzZTExOTY5ZGY5NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3dzZXIgZnJvbSBcImJvd3NlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDYXRhbG9nU3BlYyxcclxuICBjcmVhdGVXb3JsZDMsXHJcbiAgbG9hZENhdGFsb2dTcGVjLFxyXG4gIExvZ2ljYWxWYWxpZGF0aW9uU3VpdGUsXHJcbiAgT2JqZWN0TG9hZGVyLFxyXG4gIHNwZWVjaFRvVGV4dEZpbHRlcixcclxuICBTdGF0ZSxcclxuICBUZXh0VHVybixcclxufSBmcm9tICdwcml4LWZpeGUnO1xyXG5cclxuaW1wb3J0IHsgcHV0LCBzZWxlY3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVTaG9ydE9yZGVyV29ybGQyLCBMZXhpY29uU3BlYyB9IGZyb20gJ3Nob3J0LW9yZGVyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgYXBwZW5kSGlzdG9yeSxcclxuICBDaHJvbWVEZXRlY3RBY3Rpb24sXHJcbiAgTG9hZFdvcmxkQWN0aW9uLFxyXG4gIFByb2Nlc3NBY3Rpb24sXHJcbiAgc2V0Q2FydCxcclxuICBzZXRTcGVlY2hTdXBwb3J0LFxyXG4gIHNldFdvcmxkXHJcbn0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBydW5UZXN0cyB9IGZyb20gJy4uL2xvZ2ljJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIEJsdWVQbGF0ZVdvcmxkIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi1zdGF0ZSc7XHJcbmltcG9ydCB7IGdldFNhbXBsZUhpc3RvcnkgfSBmcm9tICcuL3NhbXBsZS1oaXN0b3J5JztcclxuaW1wb3J0IHsgZ2V0U2FtcGxlSGlzdG9yeUVTIH0gZnJvbSAnLi9zYW1wbGUtaGlzdG9yeS1lcyc7XHJcblxyXG5jb25zdCBiYWtlcnlFTiA9IHJlcXVpcmUoJy4uL2RhdGEvYmFrZXJ5LnlhbWwnKTtcclxuY29uc3QgY29mZmVlRU4gPSByZXF1aXJlKCcuLi9kYXRhL2NvZmZlZS55YW1sJyk7XHJcbmNvbnN0IG1lbnVFTiA9IHJlcXVpcmUoJy4uL2RhdGEvbWVudS55YW1sJyk7XHJcbmNvbnN0IGxleGljb25TcGVjRU4gPSByZXF1aXJlKCcuLi9kYXRhL2xleGljb24ueWFtbCcpO1xyXG5jb25zdCByZWdyZXNzaW9uU3VpdGVFTiA9IHJlcXVpcmUoJy4uL2RhdGEvcmVncmVzc2lvbi55YW1sJyk7XHJcblxyXG5jb25zdCBiYWtlcnlFUyA9IHJlcXVpcmUoJy4uL2RhdGEvYmFrZXJ5LWVzLnlhbWwnKTtcclxuY29uc3QgY29mZmVlRVMgPSByZXF1aXJlKCcuLi9kYXRhL2NvZmZlZS1lcy55YW1sJyk7XHJcbmNvbnN0IG1lbnVFUyA9IHJlcXVpcmUoJy4uL2RhdGEvbWVudS1lcy55YW1sJyk7XHJcbmNvbnN0IGxleGljb25TcGVjRVMgPSByZXF1aXJlKCcuLi9kYXRhL2xleGljb24tZXMueWFtbCcpO1xyXG5jb25zdCByZWdyZXNzaW9uU3VpdGVFUyA9IHJlcXVpcmUoJy4uL2RhdGEvcmVncmVzc2lvbi1lcy55YW1sJyk7XHJcblxyXG5mdW5jdGlvbiBnZXRMb2FkZXIobGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gIGlmIChsYW5ndWFnZSA9PT0gJ2VzLVVTJykge1xyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RMb2FkZXIoW1xyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvbWVudS55YW1sJywgbWVudUVTXSxcclxuICAgICAgWycvc2FtcGxlcy9tZW51L2Jha2VyeS1lcy55YW1sJywgYmFrZXJ5RVNdLFxyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvY29mZmVlLWVzLnlhbWwnLCBjb2ZmZWVFU10sXHJcbiAgICBdKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RMb2FkZXIoW1xyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvbWVudS55YW1sJywgbWVudUVOXSxcclxuICAgICAgWycvc2FtcGxlcy9tZW51L2Jha2VyeS55YW1sJywgYmFrZXJ5RU5dLFxyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvY29mZmVlLnlhbWwnLCBjb2ZmZWVFTl0sXHJcbiAgICBdKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExleGljb24obGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gIGlmIChsYW5ndWFnZSA9PT0gJ2VzLVVTJykge1xyXG4gICAgcmV0dXJuIGxleGljb25TcGVjRVM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBsZXhpY29uU3BlY0VOO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVncmVzc2lvblN1aXRlKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICBpZiAobGFuZ3VhZ2UgPT09ICdlcy1VUycpIHtcclxuICAgIHJldHVybiByZWdyZXNzaW9uU3VpdGVFUztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJlZ3Jlc3Npb25TdWl0ZUVOO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjaHJvbWVEZXRlY3RTYWdhKGFjdGlvbjogQ2hyb21lRGV0ZWN0QWN0aW9uKSB7XHJcbiAgY29uc29sZS5sb2coYFdpbmRvdz0ke3dpbmRvd31gKTtcclxuICBjb25zdCBiID0gQm93c2VyLnBhcnNlKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAvLyBUT0RPOiB1c2UgYnJvd3Nlci5zYXRpc2ZpZXMoKSBmb3IgQ2hyb21lIGRldGVjdGlvbi5cclxuICBjb25zdCBpc0Nocm9tZSA9IGIuYnJvd3Nlci5uYW1lID09PSAnQ2hyb21lJztcclxuICBjb25zb2xlLmxvZygndGhpcy5wcm9wcy5zcGVlY2hTdXBwb3J0ZWQoaXNDaHJvbWUpJyk7XHJcbiAgeWllbGQgc2V0U3BlZWNoU3VwcG9ydChpc0Nocm9tZSk7XHJcbiAgLy8gdGhpcy5wcm9wcy5zcGVlY2hTdXBwb3J0ZWQoaXNDaHJvbWUpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBsb2FkV29ybGRTYWdhKGFjdGlvbjogTG9hZFdvcmxkQWN0aW9uKSB7XHJcbiAgY29uc3QgbG9hZGVyID0gZ2V0TG9hZGVyKGFjdGlvbi5sYW5ndWFnZSk7XHJcbiAgY29uc3QgbGV4aWNvblNwZWMgPSBnZXRMZXhpY29uKGFjdGlvbi5sYW5ndWFnZSk7XHJcblxyXG4gIGNvbnN0IHNwZWM6IENhdGFsb2dTcGVjID0geWllbGQgbG9hZENhdGFsb2dTcGVjKFxyXG4gICAgbG9hZGVyLFxyXG4gICAgJy9zYW1wbGVzL21lbnUvbWVudS55YW1sJ1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IHByaXhGaXhlV29ybGQgPSBjcmVhdGVXb3JsZDMoc3BlYyk7XHJcbiAgY29uc3Qgc2hvcnRPcmRlcldvcmxkID0gY3JlYXRlU2hvcnRPcmRlcldvcmxkMihcclxuICAgIHByaXhGaXhlV29ybGQsXHJcbiAgICBsZXhpY29uU3BlYyxcclxuICAgIGFjdGlvbi5sYW5ndWFnZSA9PT0gJ2VzLVVTJyA/ICdzbm93YmFsbC1lcycgOiAnc25vd2JhbGwnLFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICAvLyBTb3J0IGZvciBkaXNwbGF5IGJ5IExleGljb25Db250cm9sLlxyXG4gIChsZXhpY29uU3BlYyBhcyBMZXhpY29uU3BlYykubGV4aWNvbi5zb3J0KChhLGIpID0+IFxyXG4gICAgYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKVxyXG4gICk7XHJcblxyXG4gIC8vIFZhbGlkYXRlIHJlZ3Jlc3Npb24gc3VpdGUuXHJcbiAgY29uc29sZS5sb2coJ2JlZm9yZSB2YWxpZGF0aW9uJyk7XHJcbiAgLy8gbG9naWNhbFZhbGlkYXRpb25TdWl0ZSBpcyBub3QgaW4gY29yZSBiZWNhdXNlIG9mIGJldHRlci1hanYtZXJyb3MuXHJcbiAgLy8gY29uc3QgZXhwZWN0ZWQgPSBsb2dpY2FsVmFsaWRhdGlvblN1aXRlPFRleHRUdXJuPihyZWdyZXNzaW9uU3VpdGUpO1xyXG4gIGNvbnN0IGV4cGVjdGVkID0gZ2V0UmVncmVzc2lvblN1aXRlKGFjdGlvbi5sYW5ndWFnZSkgYXMgTG9naWNhbFZhbGlkYXRpb25TdWl0ZTxUZXh0VHVybj5cclxuXHJcbiAgY29uc3QgdGVzdFJlc3VsdHMgPSB5aWVsZCBydW5UZXN0cyhwcml4Rml4ZVdvcmxkLCBzaG9ydE9yZGVyV29ybGQsIGV4cGVjdGVkKTtcclxuXHJcbiAgY29uc3QgdG9rZW5pemVyID0gc2hvcnRPcmRlcldvcmxkLmxleGVyLnRva2VuaXplcjtcclxuICBjb25zdCBwb3N0aW5ncyA9IHRva2VuaXplci5nZXRQb3N0aW5ncygpO1xyXG5cclxuICBjb25zdCBibHVlUGxhdGVXb3JsZDogQmx1ZVBsYXRlV29ybGQgPSB7XHJcbiAgICBwcml4Rml4ZVdvcmxkLFxyXG4gICAgbGV4aWNvblNwZWM6IGxleGljb25TcGVjLFxyXG4gICAgcG9zdGluZ3MsXHJcbiAgICBzaG9ydE9yZGVyV29ybGQsXHJcbiAgICB0ZXN0UmVzdWx0cyxcclxuICB9XHJcblxyXG4gIGNvbnN0IGhpc3RvcnkgPSBhY3Rpb24ubGFuZ3VhZ2UgPT09ICdlcy1VUycgP1xyXG4gICAgZ2V0U2FtcGxlSGlzdG9yeUVTKCkgOiBcclxuICAgIGdldFNhbXBsZUhpc3RvcnkoKTtcclxuXHJcbiAgeWllbGQocHV0KHNldFdvcmxkKGJsdWVQbGF0ZVdvcmxkLCBoaXN0b3J5LCBhY3Rpb24ubGFuZ3VhZ2UpKSk7XHJcbn1cclxuXHJcbi8vIFRPRE86IGNsZWFuIHRoaXMgdXAuXHJcbmZ1bmN0aW9uIGdldEFwcFN0YXRlKGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIGFwcFN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHByb2Nlc3NTYWdhKHsgc291cmNlLCB0ZXh0LCBmaW5hbCB9OiBQcm9jZXNzQWN0aW9uKSB7XHJcbiAgLy8gVE9ETzogcmVtb3ZlIGZpbmFsIGNoZWNrIGZvciBpbnRlcmltIGNhcnRzLlxyXG4gIGlmIChmaW5hbCkge1xyXG4gICAgLy8gVE9ETzogY2FsbCB0byBzcGVlY2hUb1RleHRGaWx0ZXIoKSBzaG91bGQgbm90IGJlIGR1cGxpY2F0ZWRcclxuICAgIC8vIGluIGFwcGx5UHJvY2VzcygpLlxyXG4gICAgY29uc3QgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUgPSB5aWVsZChzZWxlY3QoZ2V0QXBwU3RhdGUpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGByYXcgdGV4dDogXCIke3RleHR9XCJgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkID0gc3BlZWNoVG9UZXh0RmlsdGVyKHRleHQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYGZpbHRlcmVkIHRleHQ6IFwiJHtmaWx0ZXJlZH1cImApO1xyXG4gICAgY29uc3Qgc3RhdGUwOiBTdGF0ZSA9IHsgY2FydDogYXBwU3RhdGUuY2FydCB9O1xyXG4gICAgY29uc3Qgc3RhdGUxOiBTdGF0ZSA9IFxyXG4gICAgICB5aWVsZCBhcHBTdGF0ZS5ibHVlUGxhdGVXb3JsZC5zaG9ydE9yZGVyV29ybGQucHJvY2Vzc29yKFxyXG4gICAgICAgIGZpbHRlcmVkLFxyXG4gICAgICAgIHN0YXRlMFxyXG4gICAgICApO1xyXG4gICAgeWllbGQocHV0KHNldENhcnQoc3RhdGUxLmNhcnQpKSk7XHJcbiAgICB5aWVsZChwdXQoYXBwZW5kSGlzdG9yeShzdGF0ZTEuY2FydCwgc291cmNlLCB0ZXh0KSkpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9