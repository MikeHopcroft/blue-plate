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
      throw new TypeError('No speechConfig in local storage');
    }

    var speechConfig = JSON.parse(text);
    return _objectSpread(_objectSpread({}, speechConfig), {}, {
      // In an abundance of caution, set speechSupport to false and then
      // let the Chrome-detect component set it and mode, as necessary.
      speechSupport: false,
      mode: _application_state__WEBPACK_IMPORTED_MODULE_1__["SpeechMode"].TEXT
    });
  } catch (e) {
    console.log('No speechConfig in local storage');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3NwZWVjaC1jb25maWcudHMiXSwibmFtZXMiOlsibG9hZFNwZWVjaENvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlR5cGVFcnJvciIsInNwZWVjaENvbmZpZyIsIkpTT04iLCJwYXJzZSIsInNwZWVjaFN1cHBvcnQiLCJtb2RlIiwiU3BlZWNoTW9kZSIsIlRFWFQiLCJlIiwicGVyc2lzdGVkTW9kZSIsImF6dXJlU3Vic2NyaXB0aW9uS2V5IiwiYXp1cmVSZWdpb24iLCJzYXZlU3BlZWNoQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnMiIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsZ0JBQVQsR0FBMEM7QUFDL0MsTUFBSTtBQUNGQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBLFFBQU1DLElBQUksR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQWI7O0FBQ0EsUUFBSUYsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsWUFBTSxJQUFJRyxTQUFKLENBQWMsa0NBQWQsQ0FBTjtBQUNEOztBQUNELFFBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLElBQVgsQ0FBckI7QUFDQSwyQ0FDS0ksWUFETDtBQUdFO0FBQ0E7QUFDQUcsbUJBQWEsRUFBRSxLQUxqQjtBQU1FQyxVQUFJLEVBQUVDLDZEQUFVLENBQUNDO0FBTm5CO0FBUUQsR0FmRCxDQWVFLE9BQU9DLENBQVAsRUFBVTtBQUNWYixXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUVBLFdBQU87QUFDTFEsbUJBQWEsRUFBRSxLQURWO0FBRUxLLG1CQUFhLEVBQUVILDZEQUFVLENBQUNDLElBRnJCO0FBR0xGLFVBQUksRUFBRUMsNkRBQVUsQ0FBQ0MsSUFIWjtBQUlMRywwQkFBb0IsRUFBRSxFQUpqQjtBQUtMQyxpQkFBVyxFQUFFO0FBTFIsS0FBUDtBQU9EO0FBQ0Y7QUFFTSxTQUFTQyxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBZ0Q7QUFDckRsQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsK0JBQW1DaUIsTUFBTSxDQUFDVCxhQUExQztBQUNBVCxTQUFPLENBQUNDLEdBQVIsbUJBQXVCaUIsTUFBTSxDQUFDUixJQUE5QjtBQUNBVixTQUFPLENBQUNDLEdBQVIscUNBQXlDaUIsTUFBTSxDQUFDSCxvQkFBaEQ7QUFDQWYsU0FBTyxDQUFDQyxHQUFSLDJCQUErQmlCLE1BQU0sQ0FBQ0YsV0FBdEM7O0FBRUEsTUFBTUcsT0FBTyxtQ0FDUkQsTUFEUTtBQUVYSixpQkFBYSxFQUFFSSxNQUFNLENBQUNSO0FBRlgsSUFBYjs7QUFLQVAsY0FBWSxDQUFDaUIsT0FBYixDQUFxQixjQUFyQixFQUFxQ2IsSUFBSSxDQUFDYyxTQUFMLENBQWVGLE9BQWYsQ0FBckM7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZGU3YzY3ZDEzNzlhMzM1MmIzNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwZWVjaENvbmZpZywgU3BlZWNoTW9kZSB9IGZyb20gJy4vYXBwbGljYXRpb24tc3RhdGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTcGVlY2hDb25maWcoKTogU3BlZWNoQ29uZmlnIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gbG9hZCBzcGVlY2ggY29uZmlnJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NwZWVjaENvbmZpZycpO1xyXG4gICAgaWYgKHRleHQgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTm8gc3BlZWNoQ29uZmlnIGluIGxvY2FsIHN0b3JhZ2UnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNwZWVjaENvbmZpZyA9IEpTT04ucGFyc2UodGV4dCkgYXMgU3BlZWNoQ29uZmlnO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3BlZWNoQ29uZmlnLFxyXG5cclxuICAgICAgLy8gSW4gYW4gYWJ1bmRhbmNlIG9mIGNhdXRpb24sIHNldCBzcGVlY2hTdXBwb3J0IHRvIGZhbHNlIGFuZCB0aGVuXHJcbiAgICAgIC8vIGxldCB0aGUgQ2hyb21lLWRldGVjdCBjb21wb25lbnQgc2V0IGl0IGFuZCBtb2RlLCBhcyBuZWNlc3NhcnkuXHJcbiAgICAgIHNwZWVjaFN1cHBvcnQ6IGZhbHNlLFxyXG4gICAgICBtb2RlOiBTcGVlY2hNb2RlLlRFWFQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ05vIHNwZWVjaENvbmZpZyBpbiBsb2NhbCBzdG9yYWdlJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3BlZWNoU3VwcG9ydDogZmFsc2UsXHJcbiAgICAgIHBlcnNpc3RlZE1vZGU6IFNwZWVjaE1vZGUuVEVYVCxcclxuICAgICAgbW9kZTogU3BlZWNoTW9kZS5URVhULFxyXG4gICAgICBhenVyZVN1YnNjcmlwdGlvbktleTogJycsXHJcbiAgICAgIGF6dXJlUmVnaW9uOiAnJyxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3BlZWNoQ29uZmlnKGNvbmZpZzogU3BlZWNoQ29uZmlnKSB7XHJcbiAgY29uc29sZS5sb2coJ1NhdmluZyBzcGVlY2ggY29uZmlnJyk7XHJcbiAgY29uc29sZS5sb2coYCAgU3BlZWNoIHN1cHBvcnRlZDogJHtjb25maWcuc3BlZWNoU3VwcG9ydH1gKTtcclxuICBjb25zb2xlLmxvZyhgICBNb2RlOiAke2NvbmZpZy5tb2RlfWApO1xyXG4gIGNvbnNvbGUubG9nKGAgIEF6dXJlIFN1YnNjcmlwdGlvbiBLZXk6ICR7Y29uZmlnLmF6dXJlU3Vic2NyaXB0aW9uS2V5fWApO1xyXG4gIGNvbnNvbGUubG9nKGAgIEF6dXJlIFJlZ2lvbjogJHtjb25maWcuYXp1cmVSZWdpb259YCk7XHJcblxyXG4gIGNvbnN0IGNvbmZpZzIgPSB7XHJcbiAgICAuLi5jb25maWcsXHJcbiAgICBwZXJzaXN0ZWRNb2RlOiBjb25maWcubW9kZVxyXG4gIH1cclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NwZWVjaENvbmZpZycsIEpTT04uc3RyaW5naWZ5KGNvbmZpZzIpKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9