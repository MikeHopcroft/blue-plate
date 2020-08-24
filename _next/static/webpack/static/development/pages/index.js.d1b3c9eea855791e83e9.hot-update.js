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

    var speechConfig = JSON.parse(text); // console.log('speechConfig');
    // console.log(text);
    // console.log(speechConfig);

    return _objectSpread({
      speechSupport: false
    }, speechConfig);
  } catch (e) {
    console.log('no speechConfig in local storage');
    return {
      speechSupport: false,
      mode: _application_state__WEBPACK_IMPORTED_MODULE_1__["SpeechMode"].TEXT,
      azureSubscriptionKey: '',
      azureRegion: ''
    };
  }
}
function saveSpeechConfig(config) {
  console.log('Saving speech config');
  console.log("  Speech supported: ".concat(config.speechSupport));
  console.log("  Mode: ".concat(config.mode));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NwZWVjaC1jb25maWcudHMiXSwibmFtZXMiOlsibG9hZFNwZWVjaENvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlR5cGVFcnJvciIsInNwZWVjaENvbmZpZyIsIkpTT04iLCJwYXJzZSIsInNwZWVjaFN1cHBvcnQiLCJlIiwibW9kZSIsIlNwZWVjaE1vZGUiLCJURVhUIiwiYXp1cmVTdWJzY3JpcHRpb25LZXkiLCJhenVyZVJlZ2lvbiIsInNhdmVTcGVlY2hDb25maWciLCJjb25maWciLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLGdCQUFULEdBQTBDO0FBQy9DLE1BQUk7QUFDRkMsV0FBTyxDQUFDQyxHQUFSLENBQVksa0NBQVo7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQixDQUFiOztBQUNBLFFBQUlGLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU0sSUFBSUcsU0FBSixDQUFjLGtDQUFkLENBQU47QUFDRDs7QUFDRCxRQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixJQUFYLENBQXJCLENBTkUsQ0FPRjtBQUNBO0FBQ0E7O0FBQ0E7QUFDRU8sbUJBQWEsRUFBRTtBQURqQixPQUVLSCxZQUZMO0FBSUQsR0FkRCxDQWNFLE9BQU9JLENBQVAsRUFBVTtBQUNWVixXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUVBLFdBQU87QUFDTFEsbUJBQWEsRUFBRSxLQURWO0FBRUxFLFVBQUksRUFBRUMsNkRBQVUsQ0FBQ0MsSUFGWjtBQUdMQywwQkFBb0IsRUFBRSxFQUhqQjtBQUlMQyxpQkFBVyxFQUFFO0FBSlIsS0FBUDtBQU1EO0FBQ0Y7QUFFTSxTQUFTQyxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBZ0Q7QUFDckRqQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsK0JBQW1DZ0IsTUFBTSxDQUFDUixhQUExQztBQUNBVCxTQUFPLENBQUNDLEdBQVIsbUJBQXVCZ0IsTUFBTSxDQUFDTixJQUE5QjtBQUNBWCxTQUFPLENBQUNDLEdBQVIscUNBQXlDZ0IsTUFBTSxDQUFDSCxvQkFBaEQ7QUFDQWQsU0FBTyxDQUFDQyxHQUFSLDJCQUErQmdCLE1BQU0sQ0FBQ0YsV0FBdEM7QUFFQVosY0FBWSxDQUFDZSxPQUFiLENBQXFCLGNBQXJCLEVBQXFDWCxJQUFJLENBQUNZLFNBQUwsQ0FBZUYsTUFBZixDQUFyQztBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kMWIzYzllZWE4NTU3OTFlODNlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BlZWNoQ29uZmlnLCBTcGVlY2hNb2RlIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi1zdGF0ZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNwZWVjaENvbmZpZygpOiBTcGVlY2hDb25maWcge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBsb2FkIHNwZWVjaCBjb25maWcnKTtcclxuICAgIGNvbnN0IHRleHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3BlZWNoQ29uZmlnJyk7XHJcbiAgICBpZiAodGV4dCA9PT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdubyBzcGVlY2hDb25maWcgaW4gbG9jYWwgc3RvcmFnZScpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BlZWNoQ29uZmlnID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdzcGVlY2hDb25maWcnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3BlZWNoQ29uZmlnKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNwZWVjaFN1cHBvcnQ6IGZhbHNlLFxyXG4gICAgICAuLi5zcGVlY2hDb25maWcgYXMgU3BlZWNoQ29uZmlnXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ25vIHNwZWVjaENvbmZpZyBpbiBsb2NhbCBzdG9yYWdlJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3BlZWNoU3VwcG9ydDogZmFsc2UsXHJcbiAgICAgIG1vZGU6IFNwZWVjaE1vZGUuVEVYVCxcclxuICAgICAgYXp1cmVTdWJzY3JpcHRpb25LZXk6ICcnLFxyXG4gICAgICBhenVyZVJlZ2lvbjogJycsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNwZWVjaENvbmZpZyhjb25maWc6IFNwZWVjaENvbmZpZykge1xyXG4gIGNvbnNvbGUubG9nKCdTYXZpbmcgc3BlZWNoIGNvbmZpZycpO1xyXG4gIGNvbnNvbGUubG9nKGAgIFNwZWVjaCBzdXBwb3J0ZWQ6ICR7Y29uZmlnLnNwZWVjaFN1cHBvcnR9YCk7XHJcbiAgY29uc29sZS5sb2coYCAgTW9kZTogJHtjb25maWcubW9kZX1gKTtcclxuICBjb25zb2xlLmxvZyhgICBBenVyZSBTdWJzY3JpcHRpb24gS2V5OiAke2NvbmZpZy5henVyZVN1YnNjcmlwdGlvbktleX1gKTtcclxuICBjb25zb2xlLmxvZyhgICBBenVyZSBSZWdpb246ICR7Y29uZmlnLmF6dXJlUmVnaW9ufWApO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3BlZWNoQ29uZmlnJywgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==