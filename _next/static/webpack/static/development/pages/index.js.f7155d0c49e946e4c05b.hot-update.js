webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/index.ts":
/*!**************************!*\
  !*** ./actions/index.ts ***!
  \**************************/
/*! exports provided: ActionType, appendHistory, chromeDetect, clearCart, clearHistory, loadWorld, process, record, reset, setCart, setMode, setWorld, setSpeechConfig, setSpeechSupport, undo, updateHistoryItem, ApplicationMode, TextSource, Correctness, SpeechMode, initialState, ApplicationStateReducer, historyIds, loadWorldSaga, processSaga, loadSpeechConfig, saveSpeechConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./actions/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendHistory", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["appendHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chromeDetect", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["chromeDetect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["clearCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearHistory", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["clearHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadWorld", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["loadWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "process", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["process"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["record"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["reset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMode", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWorld", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSpeechConfig", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setSpeechConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSpeechSupport", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["setSpeechSupport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["undo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateHistoryItem", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["updateHistoryItem"]; });

/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-state */ "./actions/application-state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMode", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["ApplicationMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextSource", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["TextSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Correctness", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["Correctness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechMode", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["SpeechMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _application_state__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./actions/reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationStateReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "historyIds", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["historyIds"]; });

/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./actions/sagas.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadWorldSaga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_3__["loadWorldSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processSaga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_3__["processSaga"]; });

/* harmony import */ var _speech_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speech-config */ "./actions/speech-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSpeechConfig", function() { return _speech_config__WEBPACK_IMPORTED_MODULE_4__["loadSpeechConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSpeechConfig", function() { return _speech_config__WEBPACK_IMPORTED_MODULE_4__["saveSpeechConfig"]; });







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
} // export function* chromeDetectSaga(action: ChromeDetectAction) {
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

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FjdGlvbnMvc2FnYXMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJsb2FkV29ybGRTYWdhIiwicHJvY2Vzc1NhZ2EiLCJiYWtlcnlFTiIsInJlcXVpcmUiLCJjb2ZmZWVFTiIsIm1lbnVFTiIsImxleGljb25TcGVjRU4iLCJyZWdyZXNzaW9uU3VpdGVFTiIsImJha2VyeUVTIiwiY29mZmVlRVMiLCJtZW51RVMiLCJsZXhpY29uU3BlY0VTIiwicmVncmVzc2lvblN1aXRlRVMiLCJnZXRMb2FkZXIiLCJsYW5ndWFnZSIsIk9iamVjdExvYWRlciIsImdldExleGljb24iLCJnZXRSZWdyZXNzaW9uU3VpdGUiLCJhY3Rpb24iLCJsb2FkZXIiLCJsZXhpY29uU3BlYyIsImxvYWRDYXRhbG9nU3BlYyIsInNwZWMiLCJwcml4Rml4ZVdvcmxkIiwiY3JlYXRlV29ybGQzIiwic2hvcnRPcmRlcldvcmxkIiwiY3JlYXRlU2hvcnRPcmRlcldvcmxkMiIsImxleGljb24iLCJzb3J0IiwiYSIsImIiLCJuYW1lIiwibG9jYWxlQ29tcGFyZSIsImNvbnNvbGUiLCJsb2ciLCJleHBlY3RlZCIsInJ1blRlc3RzIiwidGVzdFJlc3VsdHMiLCJ0b2tlbml6ZXIiLCJsZXhlciIsInBvc3RpbmdzIiwiZ2V0UG9zdGluZ3MiLCJibHVlUGxhdGVXb3JsZCIsImhpc3RvcnkiLCJnZXRTYW1wbGVIaXN0b3J5RVMiLCJnZXRTYW1wbGVIaXN0b3J5IiwicHV0Iiwic2V0V29ybGQiLCJnZXRBcHBTdGF0ZSIsImFwcFN0YXRlIiwic291cmNlIiwidGV4dCIsImZpbmFsIiwic2VsZWN0IiwiZmlsdGVyZWQiLCJzcGVlY2hUb1RleHRGaWx0ZXIiLCJzdGF0ZTAiLCJjYXJ0IiwicHJvY2Vzc29yIiwic3RhdGUxIiwic2V0Q2FydCIsImFwcGVuZEhpc3RvcnkiLCJpbml0U2FnYXMiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiaW5pdGlhbCIsImluaXRpYWxTdGF0ZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJBcHBsaWNhdGlvblN0YXRlUmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInNwZWVjaENvbmZpZyIsInN1YnNjcmliZSIsImNvbmZpZyIsImdldFN0YXRlIiwic2F2ZVNwZWVjaENvbmZpZyIsInJ1biIsImRpc3BhdGNoIiwibG9hZFdvcmxkIiwiY2hyb21lRGV0ZWN0IiwidGFrZUxhdGVzdCIsIkFjdGlvblR5cGUiLCJMT0FEX1dPUkxEIiwiUFJPQ0VTUyIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQ29GaUJBLGE7bUdBcURBQyxXOztBQTNJakI7QUFXQTtBQUNBO0FBRUE7QUFVQTtBQUdBO0FBQ0E7O0FBRUEsSUFBTUMsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQXhCOztBQUNBLElBQU1DLFFBQVEsR0FBR0QsbUJBQU8sQ0FBQywrQ0FBRCxDQUF4Qjs7QUFDQSxJQUFNRSxNQUFNLEdB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QjtBQUNBWCxLQUFLLENBQUNVLFFBQU4sQ0FBZUUsNkRBQVksRUFBM0I7O0FBRUEsU0FBVWpCLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUUsaUJBQU1rQixxRUFBVSxDQUFDQyxtREFBVSxDQUFDQyxVQUFaLEVBQXdCbEYsc0RBQXhCLENBQWhCOztBQUZGO0FBQUE7QUFHRSxpQkFBTWdGLHFFQUFVLENBQUNDLG1EQUFVLENBQUNFLE9BQVosRUFBcUJsRixvREFBckIsQ0FBaEI7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2UsU0FBU21GLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFakIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREY7QUFLRDtLQU51QmlCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmY3MTU1ZDBjNDllOTQ2ZTRjMDViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FjdGlvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2FnYXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NwZWVjaC1jb25maWcnO1xyXG4iLCJpbXBvcnQgQm93c2VyIGZyb20gXCJib3dzZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2F0YWxvZ1NwZWMsXHJcbiAgY3JlYXRlV29ybGQzLFxyXG4gIGxvYWRDYXRhbG9nU3BlYyxcclxuICBMb2dpY2FsVmFsaWRhdGlvblN1aXRlLFxyXG4gIE9iamVjdExvYWRlcixcclxuICBzcGVlY2hUb1RleHRGaWx0ZXIsXHJcbiAgU3RhdGUsXHJcbiAgVGV4dFR1cm4sXHJcbn0gZnJvbSAncHJpeC1maXhlJztcclxuXHJcbmltcG9ydCB7IHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgY3JlYXRlU2hvcnRPcmRlcldvcmxkMiwgTGV4aWNvblNwZWMgfSBmcm9tICdzaG9ydC1vcmRlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGFwcGVuZEhpc3RvcnksXHJcbiAgQ2hyb21lRGV0ZWN0QWN0aW9uLFxyXG4gIExvYWRXb3JsZEFjdGlvbixcclxuICBQcm9jZXNzQWN0aW9uLFxyXG4gIHNldENhcnQsXHJcbiAgc2V0U3BlZWNoU3VwcG9ydCxcclxuICBzZXRXb3JsZFxyXG59IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgcnVuVGVzdHMgfSBmcm9tICcuLi9sb2dpYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCBCbHVlUGxhdGVXb3JsZCB9IGZyb20gJy4vYXBwbGljYXRpb24tc3RhdGUnO1xyXG5pbXBvcnQgeyBnZXRTYW1wbGVIaXN0b3J5IH0gZnJvbSAnLi9zYW1wbGUtaGlzdG9yeSc7XHJcbmltcG9ydCB7IGdldFNhbXBsZUhpc3RvcnlFUyB9IGZyb20gJy4vc2FtcGxlLWhpc3RvcnktZXMnO1xyXG5cclxuY29uc3QgYmFrZXJ5RU4gPSByZXF1aXJlKCcuLi9kYXRhL2Jha2VyeS55YW1sJyk7XHJcbmNvbnN0IGNvZmZlZUVOID0gcmVxdWlyZSgnLi4vZGF0YS9jb2ZmZWUueWFtbCcpO1xyXG5jb25zdCBtZW51RU4gPSByZXF1aXJlKCcuLi9kYXRhL21lbnUueWFtbCcpO1xyXG5jb25zdCBsZXhpY29uU3BlY0VOID0gcmVxdWlyZSgnLi4vZGF0YS9sZXhpY29uLnlhbWwnKTtcclxuY29uc3QgcmVncmVzc2lvblN1aXRlRU4gPSByZXF1aXJlKCcuLi9kYXRhL3JlZ3Jlc3Npb24ueWFtbCcpO1xyXG5cclxuY29uc3QgYmFrZXJ5RVMgPSByZXF1aXJlKCcuLi9kYXRhL2Jha2VyeS1lcy55YW1sJyk7XHJcbmNvbnN0IGNvZmZlZUVTID0gcmVxdWlyZSgnLi4vZGF0YS9jb2ZmZWUtZXMueWFtbCcpO1xyXG5jb25zdCBtZW51RVMgPSByZXF1aXJlKCcuLi9kYXRhL21lbnUtZXMueWFtbCcpO1xyXG5jb25zdCBsZXhpY29uU3BlY0VTID0gcmVxdWlyZSgnLi4vZGF0YS9sZXhpY29uLWVzLnlhbWwnKTtcclxuY29uc3QgcmVncmVzc2lvblN1aXRlRVMgPSByZXF1aXJlKCcuLi9kYXRhL3JlZ3Jlc3Npb24tZXMueWFtbCcpO1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9hZGVyKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICBpZiAobGFuZ3VhZ2UgPT09ICdlcy1VUycpIHtcclxuICAgIHJldHVybiBuZXcgT2JqZWN0TG9hZGVyKFtcclxuICAgICAgWycvc2FtcGxlcy9tZW51L21lbnUueWFtbCcsIG1lbnVFU10sXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9iYWtlcnktZXMueWFtbCcsIGJha2VyeUVTXSxcclxuICAgICAgWycvc2FtcGxlcy9tZW51L2NvZmZlZS1lcy55YW1sJywgY29mZmVlRVNdLFxyXG4gICAgXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBuZXcgT2JqZWN0TG9hZGVyKFtcclxuICAgICAgWycvc2FtcGxlcy9tZW51L21lbnUueWFtbCcsIG1lbnVFTl0sXHJcbiAgICAgIFsnL3NhbXBsZXMvbWVudS9iYWtlcnkueWFtbCcsIGJha2VyeUVOXSxcclxuICAgICAgWycvc2FtcGxlcy9tZW51L2NvZmZlZS55YW1sJywgY29mZmVlRU5dLFxyXG4gICAgXSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMZXhpY29uKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICBpZiAobGFuZ3VhZ2UgPT09ICdlcy1VUycpIHtcclxuICAgIHJldHVybiBsZXhpY29uU3BlY0VTO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbGV4aWNvblNwZWNFTjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlZ3Jlc3Npb25TdWl0ZShsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgaWYgKGxhbmd1YWdlID09PSAnZXMtVVMnKSB7XHJcbiAgICByZXR1cm4gcmVncmVzc2lvblN1aXRlRVM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByZWdyZXNzaW9uU3VpdGVFTjtcclxuICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiogY2hyb21lRGV0ZWN0U2FnYShhY3Rpb246IENocm9tZURldGVjdEFjdGlvbikge1xyXG4vLyAgIC8vIE5PVEUgdGhhdCB3aW5kb3cgPT09IHVuZGVmaW5lZCBkdXJpbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLlxyXG4vLyAgIGlmICh3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coYFdpbmRvdz0ke3dpbmRvd31gKTtcclxuLy8gICAgIGNvbnN0IGIgPSBCb3dzZXIucGFyc2Uod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4vLyAgICAgLy8gVE9ETzogdXNlIGJyb3dzZXIuc2F0aXNmaWVzKCkgZm9yIENocm9tZSBkZXRlY3Rpb24uXHJcbi8vICAgICBjb25zdCBpc0Nocm9tZSA9IGIuYnJvd3Nlci5uYW1lID09PSAnQ2hyb21lJztcclxuLy8gICAgIGNvbnNvbGUubG9nKGBzZXRTcGVlY2hTdXBwb3J0KCR7aXNDaHJvbWV9LCAobmFtZT0ke2IuYnJvd3Nlci5uYW1lfSkpYCk7XHJcbi8vICAgICB5aWVsZCBwdXQoc2V0U3BlZWNoU3VwcG9ydChpc0Nocm9tZSkpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBsb2FkV29ybGRTYWdhKGFjdGlvbjogTG9hZFdvcmxkQWN0aW9uKSB7XHJcbiAgY29uc3QgbG9hZGVyID0gZ2V0TG9hZGVyKGFjdGlvbi5sYW5ndWFnZSk7XHJcbiAgY29uc3QgbGV4aWNvblNwZWMgPSBnZXRMZXhpY29uKGFjdGlvbi5sYW5ndWFnZSk7XHJcblxyXG4gIGNvbnN0IHNwZWM6IENhdGFsb2dTcGVjID0geWllbGQgbG9hZENhdGFsb2dTcGVjKFxyXG4gICAgbG9hZGVyLFxyXG4gICAgJy9zYW1wbGVzL21lbnUvbWVudS55YW1sJ1xyXG4gICk7XHJcblxyXG4gIGNvbnN0IHByaXhGaXhlV29ybGQgPSBjcmVhdGVXb3JsZDMoc3BlYyk7XHJcbiAgY29uc3Qgc2hvcnRPcmRlcldvcmxkID0gY3JlYXRlU2hvcnRPcmRlcldvcmxkMihcclxuICAgIHByaXhGaXhlV29ybGQsXHJcbiAgICBsZXhpY29uU3BlYyxcclxuICAgIGFjdGlvbi5sYW5ndWFnZSA9PT0gJ2VzLVVTJyA/ICdzbm93YmFsbC1lcycgOiAnc25vd2JhbGwnLFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICAvLyBTb3J0IGZvciBkaXNwbGF5IGJ5IExleGljb25Db250cm9sLlxyXG4gIChsZXhpY29uU3BlYyBhcyBMZXhpY29uU3BlYykubGV4aWNvbi5zb3J0KChhLGIpID0+IFxyXG4gICAgYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKVxyXG4gICk7XHJcblxyXG4gIC8vIFZhbGlkYXRlIHJlZ3Jlc3Npb24gc3VpdGUuXHJcbiAgY29uc29sZS5sb2coJ2JlZm9yZSB2YWxpZGF0aW9uJyk7XHJcbiAgLy8gbG9naWNhbFZhbGlkYXRpb25TdWl0ZSBpcyBub3QgaW4gY29yZSBiZWNhdXNlIG9mIGJldHRlci1hanYtZXJyb3MuXHJcbiAgLy8gY29uc3QgZXhwZWN0ZWQgPSBsb2dpY2FsVmFsaWRhdGlvblN1aXRlPFRleHRUdXJuPihyZWdyZXNzaW9uU3VpdGUpO1xyXG4gIGNvbnN0IGV4cGVjdGVkID0gZ2V0UmVncmVzc2lvblN1aXRlKGFjdGlvbi5sYW5ndWFnZSkgYXMgTG9naWNhbFZhbGlkYXRpb25TdWl0ZTxUZXh0VHVybj5cclxuXHJcbiAgY29uc3QgdGVzdFJlc3VsdHMgPSB5aWVsZCBydW5UZXN0cyhwcml4Rml4ZVdvcmxkLCBzaG9ydE9yZGVyV29ybGQsIGV4cGVjdGVkKTtcclxuXHJcbiAgY29uc3QgdG9rZW5pemVyID0gc2hvcnRPcmRlcldvcmxkLmxleGVyLnRva2VuaXplcjtcclxuICBjb25zdCBwb3N0aW5ncyA9IHRva2VuaXplci5nZXRQb3N0aW5ncygpO1xyXG5cclxuICBjb25zdCBibHVlUGxhdGVXb3JsZDogQmx1ZVBsYXRlV29ybGQgPSB7XHJcbiAgICBwcml4Rml4ZVdvcmxkLFxyXG4gICAgbGV4aWNvblNwZWM6IGxleGljb25TcGVjLFxyXG4gICAgcG9zdGluZ3MsXHJcbiAgICBzaG9ydE9yZGVyV29ybGQsXHJcbiAgICB0ZXN0UmVzdWx0cyxcclxuICB9XHJcblxyXG4gIGNvbnN0IGhpc3RvcnkgPSBhY3Rpb24ubGFuZ3VhZ2UgPT09ICdlcy1VUycgP1xyXG4gICAgZ2V0U2FtcGxlSGlzdG9yeUVTKCkgOiBcclxuICAgIGdldFNhbXBsZUhpc3RvcnkoKTtcclxuXHJcbiAgeWllbGQgcHV0KHNldFdvcmxkKGJsdWVQbGF0ZVdvcmxkLCBoaXN0b3J5LCBhY3Rpb24ubGFuZ3VhZ2UpKTtcclxufVxyXG5cclxuLy8gVE9ETzogY2xlYW4gdGhpcyB1cC5cclxuZnVuY3Rpb24gZ2V0QXBwU3RhdGUoYXBwU3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpOiBBcHBsaWNhdGlvblN0YXRlIHtcclxuICByZXR1cm4gYXBwU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcHJvY2Vzc1NhZ2EoeyBzb3VyY2UsIHRleHQsIGZpbmFsIH06IFByb2Nlc3NBY3Rpb24pIHtcclxuICAvLyBUT0RPOiByZW1vdmUgZmluYWwgY2hlY2sgZm9yIGludGVyaW0gY2FydHMuXHJcbiAgaWYgKGZpbmFsKSB7XHJcbiAgICAvLyBUT0RPOiBjYWxsIHRvIHNwZWVjaFRvVGV4dEZpbHRlcigpIHNob3VsZCBub3QgYmUgZHVwbGljYXRlZFxyXG4gICAgLy8gaW4gYXBwbHlQcm9jZXNzKCkuXHJcbiAgICBjb25zdCBhcHBTdGF0ZTogQXBwbGljYXRpb25TdGF0ZSA9IHlpZWxkKHNlbGVjdChnZXRBcHBTdGF0ZSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYHJhdyB0ZXh0OiBcIiR7dGV4dH1cImApO1xyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBzcGVlY2hUb1RleHRGaWx0ZXIodGV4dCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgZmlsdGVyZWQgdGV4dDogXCIke2ZpbHRlcmVkfVwiYCk7XHJcbiAgICBjb25zdCBzdGF0ZTA6IFN0YXRlID0geyBjYXJ0OiBhcHBTdGF0ZS5jYXJ0IH07XHJcbiAgICBjb25zdCBzdGF0ZTE6IFN0YXRlID0gXHJcbiAgICAgIHlpZWxkIGFwcFN0YXRlLmJsdWVQbGF0ZVdvcmxkLnNob3J0T3JkZXJXb3JsZC5wcm9jZXNzb3IoXHJcbiAgICAgICAgZmlsdGVyZWQsXHJcbiAgICAgICAgc3RhdGUwXHJcbiAgICAgICk7XHJcbiAgICB5aWVsZChwdXQoc2V0Q2FydChzdGF0ZTEuY2FydCkpKTtcclxuICAgIHlpZWxkKHB1dChhcHBlbmRIaXN0b3J5KHN0YXRlMS5jYXJ0LCBzb3VyY2UsIHRleHQpKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXHJcbmltcG9ydCB7IHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBY3Rpb25UeXBlLFxyXG4gIGNocm9tZURldGVjdCxcclxuICAvLyBjaHJvbWVEZXRlY3RTYWdhLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBsb2FkV29ybGQsXHJcbiAgbG9hZFdvcmxkU2FnYSxcclxuICBwcm9jZXNzU2FnYSxcclxuICBzYXZlU3BlZWNoQ29uZmlnLFxyXG59IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZVJlZHVjZXIgfSBmcm9tICcuLi9hY3Rpb25zL3JlZHVjZXJzJ1xyXG5pbXBvcnQgRnJhbWVDb250cm9sIGZyb20gJy4uL2NvbXBvbmVudHMvZnJhbWUtY29udHJvbCc7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcclxuXHJcbmNvbnN0IGluaXRpYWwgPSBpbml0aWFsU3RhdGUoKTtcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICBBcHBsaWNhdGlvblN0YXRlUmVkdWNlcixcclxuICBpbml0aWFsLFxyXG4gIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSlcclxuKTtcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1MzA1NjYxL3doZXJlLXRvLXdyaXRlLXRvLWxvY2Fsc3RvcmFnZS1pbi1hLXJlZHV4LWFwcFxyXG5sZXQgc3BlZWNoQ29uZmlnID0gaW5pdGlhbC5zcGVlY2hDb25maWc7XHJcbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgY29uc3QgY29uZmlnID0gc3RvcmUuZ2V0U3RhdGUoKS5zcGVlY2hDb25maWc7XHJcbiAgaWYgKGNvbmZpZyAhPT0gc3BlZWNoQ29uZmlnKSB7XHJcbiAgICBzcGVlY2hDb25maWcgPSBjb25maWc7XHJcbiAgICBzYXZlU3BlZWNoQ29uZmlnKHNwZWVjaENvbmZpZyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnNhZ2FNaWRkbGV3YXJlLnJ1bihpbml0U2FnYXMpXHJcbnN0b3JlLmRpc3BhdGNoKGxvYWRXb3JsZCgnZW4tVVMnKSk7XHJcbnN0b3JlLmRpc3BhdGNoKGNocm9tZURldGVjdCgpKTtcclxuXHJcbmZ1bmN0aW9uKiBpbml0U2FnYXMoKSB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2luaXRTYWdhcygpJyk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlLkxPQURfV09STEQsIGxvYWRXb3JsZFNhZ2EpO1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQWN0aW9uVHlwZS5QUk9DRVNTLCBwcm9jZXNzU2FnYSk7XHJcbiAgLy8geWllbGQgdGFrZUxhdGVzdChBY3Rpb25UeXBlLkNIUk9NRV9ERVRFQ1QsIGNocm9tZURldGVjdFNhZ2EpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8RnJhbWVDb250cm9sLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9