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

    return _objectSpread(_objectSpread({}, speechConfig), {}, {
      speechSupport: false
    });
  } catch (e) {
    console.log('no speechConfig in local storage');
    return {
      speechSupport: false,
      persistedMode: _application_state__WEBPACK_IMPORTED_MODULE_1__["SpeechMode"].TEXT,
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

  var config2 = _objectSpread(_objectSpread({}, config), {}, {
    persistedMode: config.mode
  });

  localStorage.setItem('speechConfig', JSON.stringify(config2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NwZWVjaC1jb25maWcudHMiXSwibmFtZXMiOlsibG9hZFNwZWVjaENvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlR5cGVFcnJvciIsInNwZWVjaENvbmZpZyIsIkpTT04iLCJwYXJzZSIsInNwZWVjaFN1cHBvcnQiLCJlIiwicGVyc2lzdGVkTW9kZSIsIlNwZWVjaE1vZGUiLCJURVhUIiwibW9kZSIsImF6dXJlU3Vic2NyaXB0aW9uS2V5IiwiYXp1cmVSZWdpb24iLCJzYXZlU3BlZWNoQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnMiIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsZ0JBQVQsR0FBMEM7QUFDL0MsTUFBSTtBQUNGQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBLFFBQU1DLElBQUksR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQWI7O0FBQ0EsUUFBSUYsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsWUFBTSxJQUFJRyxTQUFKLENBQWMsa0NBQWQsQ0FBTjtBQUNEOztBQUNELFFBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLElBQVgsQ0FBckIsQ0FORSxDQU9GO0FBQ0E7QUFDQTs7QUFDQSwyQ0FDS0ksWUFETDtBQUVFRyxtQkFBYSxFQUFFO0FBRmpCO0FBSUQsR0FkRCxDQWNFLE9BQU9DLENBQVAsRUFBVTtBQUNWVixXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUVBLFdBQU87QUFDTFEsbUJBQWEsRUFBRSxLQURWO0FBRUxFLG1CQUFhLEVBQUVDLDZEQUFVLENBQUNDLElBRnJCO0FBR0xDLFVBQUksRUFBRUYsNkRBQVUsQ0FBQ0MsSUFIWjtBQUlMRSwwQkFBb0IsRUFBRSxFQUpqQjtBQUtMQyxpQkFBVyxFQUFFO0FBTFIsS0FBUDtBQU9EO0FBQ0Y7QUFFTSxTQUFTQyxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBZ0Q7QUFDckRsQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsK0JBQW1DaUIsTUFBTSxDQUFDVCxhQUExQztBQUNBVCxTQUFPLENBQUNDLEdBQVIsbUJBQXVCaUIsTUFBTSxDQUFDSixJQUE5QjtBQUNBZCxTQUFPLENBQUNDLEdBQVIscUNBQXlDaUIsTUFBTSxDQUFDSCxvQkFBaEQ7QUFDQWYsU0FBTyxDQUFDQyxHQUFSLDJCQUErQmlCLE1BQU0sQ0FBQ0YsV0FBdEM7O0FBRUEsTUFBTUcsT0FBTyxtQ0FDUkQsTUFEUTtBQUVYUCxpQkFBYSxFQUFFTyxNQUFNLENBQUNKO0FBRlgsSUFBYjs7QUFLQVgsY0FBWSxDQUFDaUIsT0FBYixDQUFxQixjQUFyQixFQUFxQ2IsSUFBSSxDQUFDYyxTQUFMLENBQWVGLE9BQWYsQ0FBckM7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuY2ZhNGMwMGQ3ZjU0NDU1MTllZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwZWVjaENvbmZpZywgU3BlZWNoTW9kZSB9IGZyb20gJy4vYXBwbGljYXRpb24tc3RhdGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTcGVlY2hDb25maWcoKTogU3BlZWNoQ29uZmlnIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gbG9hZCBzcGVlY2ggY29uZmlnJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NwZWVjaENvbmZpZycpO1xyXG4gICAgaWYgKHRleHQgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbm8gc3BlZWNoQ29uZmlnIGluIGxvY2FsIHN0b3JhZ2UnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnc3BlZWNoQ29uZmlnJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNwZWVjaENvbmZpZyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zcGVlY2hDb25maWcgYXMgU3BlZWNoQ29uZmlnLFxyXG4gICAgICBzcGVlY2hTdXBwb3J0OiBmYWxzZSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbm8gc3BlZWNoQ29uZmlnIGluIGxvY2FsIHN0b3JhZ2UnKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcGVlY2hTdXBwb3J0OiBmYWxzZSxcclxuICAgICAgcGVyc2lzdGVkTW9kZTogU3BlZWNoTW9kZS5URVhULFxyXG4gICAgICBtb2RlOiBTcGVlY2hNb2RlLlRFWFQsXHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5OiAnJyxcclxuICAgICAgYXp1cmVSZWdpb246ICcnLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTcGVlY2hDb25maWcoY29uZmlnOiBTcGVlY2hDb25maWcpIHtcclxuICBjb25zb2xlLmxvZygnU2F2aW5nIHNwZWVjaCBjb25maWcnKTtcclxuICBjb25zb2xlLmxvZyhgICBTcGVlY2ggc3VwcG9ydGVkOiAke2NvbmZpZy5zcGVlY2hTdXBwb3J0fWApO1xyXG4gIGNvbnNvbGUubG9nKGAgIE1vZGU6ICR7Y29uZmlnLm1vZGV9YCk7XHJcbiAgY29uc29sZS5sb2coYCAgQXp1cmUgU3Vic2NyaXB0aW9uIEtleTogJHtjb25maWcuYXp1cmVTdWJzY3JpcHRpb25LZXl9YCk7XHJcbiAgY29uc29sZS5sb2coYCAgQXp1cmUgUmVnaW9uOiAke2NvbmZpZy5henVyZVJlZ2lvbn1gKTtcclxuXHJcbiAgY29uc3QgY29uZmlnMiA9IHtcclxuICAgIC4uLmNvbmZpZyxcclxuICAgIHBlcnNpc3RlZE1vZGU6IGNvbmZpZy5tb2RlXHJcbiAgfVxyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3BlZWNoQ29uZmlnJywgSlNPTi5zdHJpbmdpZnkoY29uZmlnMikpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=