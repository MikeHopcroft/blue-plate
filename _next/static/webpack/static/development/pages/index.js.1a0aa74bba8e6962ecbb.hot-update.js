webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/speech-config.ts":
/*!**********************************!*\
  !*** ./actions/speech-config.ts ***!
  \**********************************/
/*! exports provided: loadSpeechConfig, saveSpeechConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSpeechConfig", function() { return loadSpeechConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSpeechConfig", function() { return saveSpeechConfig; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-state */ "./actions/application-state.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function loadSpeechConfig() {
  try {
    console.log('Attempting to load speech config');
    var text = localStorage.getItem('speechConfig');

    if (text === null) {
      throw new TypeError('no speechConfig in local storage');
    }

    var speechConfig = JSON.parse(text);
    console.log('speechConfig');
    console.log(text);
    console.log(speechConfig);
    return _objectSpread({
      speechSupport: false
    }, speechConfig);
  } catch (e) {
    // console.log('no speechConfig in local storage');
    // const w = window as any;
    // const b = Bowser.parse(window.navigator.userAgent);
    // // TODO: use browser.satisfies() for Chrome detection.
    // // isChrome = b.browser.name === 'Chrome';
    // console.log(`Browser is ${b.browser.name}`);
    return {
      speechSupport: false,
      mode: _application_state__WEBPACK_IMPORTED_MODULE_1__["SpeechMode"].TEXT,
      // useAzureSpeech: false,
      azureSubscriptionKey: '',
      azureRegion: ''
    };
  }
}
function saveSpeechConfig(config) {
  console.log('Saving speech config');
  console.log("  Speech supported: ".concat(config.speechSupport));
  console.log("  Mode: ".concat(config.mode)); // console.log(`  Use AzureSpeech: ${config.useAzureSpeech}`);

  console.log("  Azure Subscription Key: ".concat(config.azureSubscriptionKey));
  console.log("  Azure Region: ".concat(config.azureRegion));
  localStorage.setItem('speechConfig', JSON.stringify(config));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NwZWVjaC1jb25maWcudHMiXSwibmFtZXMiOlsibG9hZFNwZWVjaENvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlR5cGVFcnJvciIsInNwZWVjaENvbmZpZyIsIkpTT04iLCJwYXJzZSIsInNwZWVjaFN1cHBvcnQiLCJlIiwibW9kZSIsIlNwZWVjaE1vZGUiLCJURVhUIiwiYXp1cmVTdWJzY3JpcHRpb25LZXkiLCJhenVyZVJlZ2lvbiIsInNhdmVTcGVlY2hDb25maWciLCJjb25maWciLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVPLFNBQVNBLGdCQUFULEdBQTBDO0FBQy9DLE1BQUk7QUFDRkMsV0FBTyxDQUFDQyxHQUFSLENBQVksa0NBQVo7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQixDQUFiOztBQUNBLFFBQUlGLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU0sSUFBSUcsU0FBSixDQUFjLGtDQUFkLENBQU47QUFDRDs7QUFDRCxRQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixJQUFYLENBQXJCO0FBQ0FGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVo7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVlLLFlBQVo7QUFDQTtBQUNFRyxtQkFBYSxFQUFFO0FBRGpCLE9BRUtILFlBRkw7QUFJRCxHQWRELENBY0UsT0FBT0ksQ0FBUCxFQUFVO0FBQ1Y7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsV0FBTztBQUNMRCxtQkFBYSxFQUFFLEtBRFY7QUFFTEUsVUFBSSxFQUFFQyw2REFBVSxDQUFDQyxJQUZaO0FBR0w7QUFDQUMsMEJBQW9CLEVBQUUsRUFKakI7QUFLTEMsaUJBQVcsRUFBRTtBQUxSLEtBQVA7QUFPRDtBQUNGO0FBRU0sU0FBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWdEO0FBQ3JEakIsU0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLCtCQUFtQ2dCLE1BQU0sQ0FBQ1IsYUFBMUM7QUFDQVQsU0FBTyxDQUFDQyxHQUFSLG1CQUF1QmdCLE1BQU0sQ0FBQ04sSUFBOUIsR0FIcUQsQ0FJckQ7O0FBQ0FYLFNBQU8sQ0FBQ0MsR0FBUixxQ0FBeUNnQixNQUFNLENBQUNILG9CQUFoRDtBQUNBZCxTQUFPLENBQUNDLEdBQVIsMkJBQStCZ0IsTUFBTSxDQUFDRixXQUF0QztBQUVBWixjQUFZLENBQUNlLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUNYLElBQUksQ0FBQ1ksU0FBTCxDQUFlRixNQUFmLENBQXJDO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjFhMGFhNzRiYmE4ZTY5NjJlY2JiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm93c2VyIGZyb20gXCJib3dzZXJcIjtcclxuXHJcbmltcG9ydCB7IFNwZWVjaENvbmZpZywgU3BlZWNoTW9kZSB9IGZyb20gJy4vYXBwbGljYXRpb24tc3RhdGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTcGVlY2hDb25maWcoKTogU3BlZWNoQ29uZmlnIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gbG9hZCBzcGVlY2ggY29uZmlnJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NwZWVjaENvbmZpZycpO1xyXG4gICAgaWYgKHRleHQgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbm8gc3BlZWNoQ29uZmlnIGluIGxvY2FsIHN0b3JhZ2UnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZygnc3BlZWNoQ29uZmlnJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKHNwZWVjaENvbmZpZyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcGVlY2hTdXBwb3J0OiBmYWxzZSxcclxuICAgICAgLi4uc3BlZWNoQ29uZmlnIGFzIFNwZWVjaENvbmZpZ1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdubyBzcGVlY2hDb25maWcgaW4gbG9jYWwgc3RvcmFnZScpO1xyXG5cclxuICAgIC8vIGNvbnN0IHcgPSB3aW5kb3cgYXMgYW55O1xyXG4gICAgLy8gY29uc3QgYiA9IEJvd3Nlci5wYXJzZSh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAvLyAvLyBUT0RPOiB1c2UgYnJvd3Nlci5zYXRpc2ZpZXMoKSBmb3IgQ2hyb21lIGRldGVjdGlvbi5cclxuICAgIC8vIC8vIGlzQ2hyb21lID0gYi5icm93c2VyLm5hbWUgPT09ICdDaHJvbWUnO1xyXG4gICAgLy8gY29uc29sZS5sb2coYEJyb3dzZXIgaXMgJHtiLmJyb3dzZXIubmFtZX1gKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcGVlY2hTdXBwb3J0OiBmYWxzZSxcclxuICAgICAgbW9kZTogU3BlZWNoTW9kZS5URVhULFxyXG4gICAgICAvLyB1c2VBenVyZVNwZWVjaDogZmFsc2UsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5OiAnJyxcclxuICAgICAgYXp1cmVSZWdpb246ICcnLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTcGVlY2hDb25maWcoY29uZmlnOiBTcGVlY2hDb25maWcpIHtcclxuICBjb25zb2xlLmxvZygnU2F2aW5nIHNwZWVjaCBjb25maWcnKTtcclxuICBjb25zb2xlLmxvZyhgICBTcGVlY2ggc3VwcG9ydGVkOiAke2NvbmZpZy5zcGVlY2hTdXBwb3J0fWApO1xyXG4gIGNvbnNvbGUubG9nKGAgIE1vZGU6ICR7Y29uZmlnLm1vZGV9YCk7XHJcbiAgLy8gY29uc29sZS5sb2coYCAgVXNlIEF6dXJlU3BlZWNoOiAke2NvbmZpZy51c2VBenVyZVNwZWVjaH1gKTtcclxuICBjb25zb2xlLmxvZyhgICBBenVyZSBTdWJzY3JpcHRpb24gS2V5OiAke2NvbmZpZy5henVyZVN1YnNjcmlwdGlvbktleX1gKTtcclxuICBjb25zb2xlLmxvZyhgICBBenVyZSBSZWdpb246ICR7Y29uZmlnLmF6dXJlUmVnaW9ufWApO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3BlZWNoQ29uZmlnJywgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==