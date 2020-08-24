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
          if (!(window !== undefined)) {
            _context.next = 7;
            break;
          }

          console.log("Window=".concat(window));
          b = bowser__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.navigator.userAgent); // TODO: use browser.satisfies() for Chrome detection.

          isChrome = b.browser.name === 'Chrome';
          console.log("setSpeechSupport(".concat(isChrome, ", (name=").concat(b.browser.name, "))"));
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setSpeechSupport"])(isChrome));

        case 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NhZ2FzLnRzeCJdLCJuYW1lcyI6WyJjaHJvbWVEZXRlY3RTYWdhIiwibG9hZFdvcmxkU2FnYSIsInByb2Nlc3NTYWdhIiwiYmFrZXJ5RU4iLCJyZXF1aXJlIiwiY29mZmVlRU4iLCJtZW51RU4iLCJsZXhpY29uU3BlY0VOIiwicmVncmVzc2lvblN1aXRlRU4iLCJiYWtlcnlFUyIsImNvZmZlZUVTIiwibWVudUVTIiwibGV4aWNvblNwZWNFUyIsInJlZ3Jlc3Npb25TdWl0ZUVTIiwiZ2V0TG9hZGVyIiwibGFuZ3VhZ2UiLCJPYmplY3RMb2FkZXIiLCJnZXRMZXhpY29uIiwiZ2V0UmVncmVzc2lvblN1aXRlIiwiYWN0aW9uIiwid2luZG93IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImIiLCJCb3dzZXIiLCJwYXJzZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzQ2hyb21lIiwiYnJvd3NlciIsIm5hbWUiLCJwdXQiLCJzZXRTcGVlY2hTdXBwb3J0IiwibG9hZGVyIiwibGV4aWNvblNwZWMiLCJsb2FkQ2F0YWxvZ1NwZWMiLCJzcGVjIiwicHJpeEZpeGVXb3JsZCIsImNyZWF0ZVdvcmxkMyIsInNob3J0T3JkZXJXb3JsZCIsImNyZWF0ZVNob3J0T3JkZXJXb3JsZDIiLCJsZXhpY29uIiwic29ydCIsImEiLCJsb2NhbGVDb21wYXJlIiwiZXhwZWN0ZWQiLCJydW5UZXN0cyIsInRlc3RSZXN1bHRzIiwidG9rZW5pemVyIiwibGV4ZXIiLCJwb3N0aW5ncyIsImdldFBvc3RpbmdzIiwiYmx1ZVBsYXRlV29ybGQiLCJoaXN0b3J5IiwiZ2V0U2FtcGxlSGlzdG9yeUVTIiwiZ2V0U2FtcGxlSGlzdG9yeSIsInNldFdvcmxkIiwiZ2V0QXBwU3RhdGUiLCJhcHBTdGF0ZSIsInNvdXJjZSIsInRleHQiLCJmaW5hbCIsInNlbGVjdCIsImZpbHRlcmVkIiwic3BlZWNoVG9UZXh0RmlsdGVyIiwic3RhdGUwIiwiY2FydCIs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QXNCQyxJQUF0QixDQUFkLENBQVQ7O0FBaEJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41ZDFmMDdkMDBmYjg0N2ZhNTg5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvd3NlciBmcm9tIFwiYm93c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENhdGFsb2dTcGVjLFxyXG4gIGNyZWF0ZVdvcmxkMyxcclxuICBsb2FkQ2F0YWxvZ1NwZWMsXHJcbiAgTG9naWNhbFZhbGlkYXRpb25TdWl0ZSxcclxuICBPYmplY3RMb2FkZXIsXHJcbiAgc3BlZWNoVG9UZXh0RmlsdGVyLFxyXG4gIFN0YXRlLFxyXG4gIFRleHRUdXJuLFxyXG59IGZyb20gJ3ByaXgtZml4ZSc7XHJcblxyXG5pbXBvcnQgeyBwdXQsIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IGNyZWF0ZVNob3J0T3JkZXJXb3JsZDIsIExleGljb25TcGVjIH0gZnJvbSAnc2hvcnQtb3JkZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBhcHBlbmRIaXN0b3J5LFxyXG4gIENocm9tZURldGVjdEFjdGlvbixcclxuICBMb2FkV29ybGRBY3Rpb24sXHJcbiAgUHJvY2Vzc0FjdGlvbixcclxuICBzZXRDYXJ0LFxyXG4gIHNldFNwZWVjaFN1cHBvcnQsXHJcbiAgc2V0V29ybGRcclxufSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IHJ1blRlc3RzIH0gZnJvbSAnLi4vbG9naWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgQmx1ZVBsYXRlV29ybGQgfSBmcm9tICcuL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuaW1wb3J0IHsgZ2V0U2FtcGxlSGlzdG9yeSB9IGZyb20gJy4vc2FtcGxlLWhpc3RvcnknO1xyXG5pbXBvcnQgeyBnZXRTYW1wbGVIaXN0b3J5RVMgfSBmcm9tICcuL3NhbXBsZS1oaXN0b3J5LWVzJztcclxuXHJcbmNvbnN0IGJha2VyeUVOID0gcmVxdWlyZSgnLi4vZGF0YS9iYWtlcnkueWFtbCcpO1xyXG5jb25zdCBjb2ZmZWVFTiA9IHJlcXVpcmUoJy4uL2RhdGEvY29mZmVlLnlhbWwnKTtcclxuY29uc3QgbWVudUVOID0gcmVxdWlyZSgnLi4vZGF0YS9tZW51LnlhbWwnKTtcclxuY29uc3QgbGV4aWNvblNwZWNFTiA9IHJlcXVpcmUoJy4uL2RhdGEvbGV4aWNvbi55YW1sJyk7XHJcbmNvbnN0IHJlZ3Jlc3Npb25TdWl0ZUVOID0gcmVxdWlyZSgnLi4vZGF0YS9yZWdyZXNzaW9uLnlhbWwnKTtcclxuXHJcbmNvbnN0IGJha2VyeUVTID0gcmVxdWlyZSgnLi4vZGF0YS9iYWtlcnktZXMueWFtbCcpO1xyXG5jb25zdCBjb2ZmZWVFUyA9IHJlcXVpcmUoJy4uL2RhdGEvY29mZmVlLWVzLnlhbWwnKTtcclxuY29uc3QgbWVudUVTID0gcmVxdWlyZSgnLi4vZGF0YS9tZW51LWVzLnlhbWwnKTtcclxuY29uc3QgbGV4aWNvblNwZWNFUyA9IHJlcXVpcmUoJy4uL2RhdGEvbGV4aWNvbi1lcy55YW1sJyk7XHJcbmNvbnN0IHJlZ3Jlc3Npb25TdWl0ZUVTID0gcmVxdWlyZSgnLi4vZGF0YS9yZWdyZXNzaW9uLWVzLnlhbWwnKTtcclxuXHJcbmZ1bmN0aW9uIGdldExvYWRlcihsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgaWYgKGxhbmd1YWdlID09PSAnZXMtVVMnKSB7XHJcbiAgICByZXR1cm4gbmV3IE9iamVjdExvYWRlcihbXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9tZW51LnlhbWwnLCBtZW51RVNdLFxyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvYmFrZXJ5LWVzLnlhbWwnLCBiYWtlcnlFU10sXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9jb2ZmZWUtZXMueWFtbCcsIGNvZmZlZUVTXSxcclxuICAgIF0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbmV3IE9iamVjdExvYWRlcihbXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9tZW51LnlhbWwnLCBtZW51RU5dLFxyXG4gICAgICBbJy9zYW1wbGVzL21lbnUvYmFrZXJ5LnlhbWwnLCBiYWtlcnlFTl0sXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9jb2ZmZWUueWFtbCcsIGNvZmZlZUVOXSxcclxuICAgIF0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGV4aWNvbihsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgaWYgKGxhbmd1YWdlID09PSAnZXMtVVMnKSB7XHJcbiAgICByZXR1cm4gbGV4aWNvblNwZWNFUztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGxleGljb25TcGVjRU47XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWdyZXNzaW9uU3VpdGUobGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gIGlmIChsYW5ndWFnZSA9PT0gJ2VzLVVTJykge1xyXG4gICAgcmV0dXJuIHJlZ3Jlc3Npb25TdWl0ZUVTO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcmVncmVzc2lvblN1aXRlRU47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNocm9tZURldGVjdFNhZ2EoYWN0aW9uOiBDaHJvbWVEZXRlY3RBY3Rpb24pIHtcclxuICAvLyBOT1RFIHRoYXQgd2luZG93ID09PSB1bmRlZmluZWQgZHVyaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cclxuICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKGBXaW5kb3c9JHt3aW5kb3d9YCk7XHJcbiAgICBjb25zdCBiID0gQm93c2VyLnBhcnNlKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIC8vIFRPRE86IHVzZSBicm93c2VyLnNhdGlzZmllcygpIGZvciBDaHJvbWUgZGV0ZWN0aW9uLlxyXG4gICAgY29uc3QgaXNDaHJvbWUgPSBiLmJyb3dzZXIubmFtZSA9PT0gJ0Nocm9tZSc7XHJcbiAgICBjb25zb2xlLmxvZyhgc2V0U3BlZWNoU3VwcG9ydCgke2lzQ2hyb21lfSwgKG5hbWU9JHtiLmJyb3dzZXIubmFtZX0pKWApO1xyXG4gICAgeWllbGQgcHV0KHNldFNwZWVjaFN1cHBvcnQoaXNDaHJvbWUpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogbG9hZFdvcmxkU2FnYShhY3Rpb246IExvYWRXb3JsZEFjdGlvbikge1xyXG4gIGNvbnN0IGxvYWRlciA9IGdldExvYWRlcihhY3Rpb24ubGFuZ3VhZ2UpO1xyXG4gIGNvbnN0IGxleGljb25TcGVjID0gZ2V0TGV4aWNvbihhY3Rpb24ubGFuZ3VhZ2UpO1xyXG5cclxuICBjb25zdCBzcGVjOiBDYXRhbG9nU3BlYyA9IHlpZWxkIGxvYWRDYXRhbG9nU3BlYyhcclxuICAgIGxvYWRlcixcclxuICAgICcvc2FtcGxlcy9tZW51L21lbnUueWFtbCdcclxuICApO1xyXG5cclxuICBjb25zdCBwcml4Rml4ZVdvcmxkID0gY3JlYXRlV29ybGQzKHNwZWMpO1xyXG4gIGNvbnN0IHNob3J0T3JkZXJXb3JsZCA9IGNyZWF0ZVNob3J0T3JkZXJXb3JsZDIoXHJcbiAgICBwcml4Rml4ZVdvcmxkLFxyXG4gICAgbGV4aWNvblNwZWMsXHJcbiAgICBhY3Rpb24ubGFuZ3VhZ2UgPT09ICdlcy1VUycgPyAnc25vd2JhbGwtZXMnIDogJ3Nub3diYWxsJyxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgLy8gU29ydCBmb3IgZGlzcGxheSBieSBMZXhpY29uQ29udHJvbC5cclxuICAobGV4aWNvblNwZWMgYXMgTGV4aWNvblNwZWMpLmxleGljb24uc29ydCgoYSxiKSA9PiBcclxuICAgIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSlcclxuICApO1xyXG5cclxuICAvLyBWYWxpZGF0ZSByZWdyZXNzaW9uIHN1aXRlLlxyXG4gIGNvbnNvbGUubG9nKCdiZWZvcmUgdmFsaWRhdGlvbicpO1xyXG4gIC8vIGxvZ2ljYWxWYWxpZGF0aW9uU3VpdGUgaXMgbm90IGluIGNvcmUgYmVjYXVzZSBvZiBiZXR0ZXItYWp2LWVycm9zLlxyXG4gIC8vIGNvbnN0IGV4cGVjdGVkID0gbG9naWNhbFZhbGlkYXRpb25TdWl0ZTxUZXh0VHVybj4ocmVncmVzc2lvblN1aXRlKTtcclxuICBjb25zdCBleHBlY3RlZCA9IGdldFJlZ3Jlc3Npb25TdWl0ZShhY3Rpb24ubGFuZ3VhZ2UpIGFzIExvZ2ljYWxWYWxpZGF0aW9uU3VpdGU8VGV4dFR1cm4+XHJcblxyXG4gIGNvbnN0IHRlc3RSZXN1bHRzID0geWllbGQgcnVuVGVzdHMocHJpeEZpeGVXb3JsZCwgc2hvcnRPcmRlcldvcmxkLCBleHBlY3RlZCk7XHJcblxyXG4gIGNvbnN0IHRva2VuaXplciA9IHNob3J0T3JkZXJXb3JsZC5sZXhlci50b2tlbml6ZXI7XHJcbiAgY29uc3QgcG9zdGluZ3MgPSB0b2tlbml6ZXIuZ2V0UG9zdGluZ3MoKTtcclxuXHJcbiAgY29uc3QgYmx1ZVBsYXRlV29ybGQ6IEJsdWVQbGF0ZVdvcmxkID0ge1xyXG4gICAgcHJpeEZpeGVXb3JsZCxcclxuICAgIGxleGljb25TcGVjOiBsZXhpY29uU3BlYyxcclxuICAgIHBvc3RpbmdzLFxyXG4gICAgc2hvcnRPcmRlcldvcmxkLFxyXG4gICAgdGVzdFJlc3VsdHMsXHJcbiAgfVxyXG5cclxuICBjb25zdCBoaXN0b3J5ID0gYWN0aW9uLmxhbmd1YWdlID09PSAnZXMtVVMnID9cclxuICAgIGdldFNhbXBsZUhpc3RvcnlFUygpIDogXHJcbiAgICBnZXRTYW1wbGVIaXN0b3J5KCk7XHJcblxyXG4gIHlpZWxkIHB1dChzZXRXb3JsZChibHVlUGxhdGVXb3JsZCwgaGlzdG9yeSwgYWN0aW9uLmxhbmd1YWdlKSk7XHJcbn1cclxuXHJcbi8vIFRPRE86IGNsZWFuIHRoaXMgdXAuXHJcbmZ1bmN0aW9uIGdldEFwcFN0YXRlKGFwcFN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKTogQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgcmV0dXJuIGFwcFN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHByb2Nlc3NTYWdhKHsgc291cmNlLCB0ZXh0LCBmaW5hbCB9OiBQcm9jZXNzQWN0aW9uKSB7XHJcbiAgLy8gVE9ETzogcmVtb3ZlIGZpbmFsIGNoZWNrIGZvciBpbnRlcmltIGNhcnRzLlxyXG4gIGlmIChmaW5hbCkge1xyXG4gICAgLy8gVE9ETzogY2FsbCB0byBzcGVlY2hUb1RleHRGaWx0ZXIoKSBzaG91bGQgbm90IGJlIGR1cGxpY2F0ZWRcclxuICAgIC8vIGluIGFwcGx5UHJvY2VzcygpLlxyXG4gICAgY29uc3QgYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUgPSB5aWVsZChzZWxlY3QoZ2V0QXBwU3RhdGUpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGByYXcgdGV4dDogXCIke3RleHR9XCJgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkID0gc3BlZWNoVG9UZXh0RmlsdGVyKHRleHQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYGZpbHRlcmVkIHRleHQ6IFwiJHtmaWx0ZXJlZH1cImApO1xyXG4gICAgY29uc3Qgc3RhdGUwOiBTdGF0ZSA9IHsgY2FydDogYXBwU3RhdGUuY2FydCB9O1xyXG4gICAgY29uc3Qgc3RhdGUxOiBTdGF0ZSA9IFxyXG4gICAgICB5aWVsZCBhcHBTdGF0ZS5ibHVlUGxhdGVXb3JsZC5zaG9ydE9yZGVyV29ybGQucHJvY2Vzc29yKFxyXG4gICAgICAgIGZpbHRlcmVkLFxyXG4gICAgICAgIHN0YXRlMFxyXG4gICAgICApO1xyXG4gICAgeWllbGQocHV0KHNldENhcnQoc3RhdGUxLmNhcnQpKSk7XHJcbiAgICB5aWVsZChwdXQoYXBwZW5kSGlzdG9yeShzdGF0ZTEuY2FydCwgc291cmNlLCB0ZXh0KSkpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9