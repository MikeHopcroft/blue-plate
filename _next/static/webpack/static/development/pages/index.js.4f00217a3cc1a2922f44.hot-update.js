webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/azure-warning.tsx":
/*!**************************************!*\
  !*** ./components/azure-warning.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\azure-warning.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





;

var AzureWarning = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AzureWarning, _React$Component);

  var _super = _createSuper(AzureWarning);

  function AzureWarning() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AzureWarning);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AzureWarning, [{
    key: "render",
    value: function render() {
      var _this$props$speechCon = this.props.speechConfig,
          azureSubscriptionKey = _this$props$speechCon.azureSubscriptionKey,
          azureRegion = _this$props$speechCon.azureRegion;
      var azureEnabled = !!(azureRegion && azureSubscriptionKey);
      console.log("AzureWarning: ".concat(azureEnabled));

      if (azureEnabled) {
        return null;
      } else {
        return __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.warning,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 9
          }
        }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
          source: this.props.text,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }
        }));
      }
    }
  }]);

  return AzureWarning;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function mapStateToProps(_ref) {
  var speechConfig = _ref.speechConfig;
  return {
    speechConfig: speechConfig
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(AzureWarning));

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

/***/ "./components/info-control.tsx":
/*!*************************************!*\
  !*** ./components/info-control.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _azure_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./azure-warning */ "./components/azure-warning.tsx");
/* harmony import */ var _chrome_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chrome-warning */ "./components/chrome-warning.tsx");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_10__);






var _this = undefined,
    _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\info-control.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var markdown = __webpack_require__(/*! ./info.md */ "./components/info.md")["default"].toString();

;
var renderers = {
  code: function code(_ref) {
    var language = _ref.language,
        value = _ref.value;

    if (language === 'warning-chrome') {
      return __jsx(_chrome_warning__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: value,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      });
    } else if (language === 'warning-azure') {
      return __jsx(_azure_warning__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: value,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      });
    } else {
      return __jsx("pre", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }, __jsx("code", {
        className: language && "language-".concat(language),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }, value));
    }
  }
};

var InfoControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(InfoControl, _React$Component);

  var _super = _createSuper(InfoControl);

  function InfoControl() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InfoControl);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InfoControl, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "InfoControl",
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.infoPane,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }
      }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        source: markdown,
        renderers: renderers,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }));
    }
  }]);

  return InfoControl;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function mapStateToProps(application) {
  return {
    application: application
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(InfoControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F6dXJlLXdhcm5pbmcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5mby1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJBenVyZVdhcm5pbmciLCJwcm9wcyIsInNwZWVjaENvbmZpZyIsImF6dXJlU3Vic2NyaXB0aW9uS2V5IiwiYXp1cmVSZWdpb24iLCJhenVyZUVuYWJsZWQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwid2FybmluZyIsInRleHQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJtYXJrZG93biIsInJlcXVpcmUiLCJ0b1N0cmluZyIsInJlbmRlcmVycyIsImNvZGUiLCJsYW5ndWFnZSIsInZhbHVlIiwiSW5mb0NvbnRyb2wiLCJpbmZvUGFuZSIsImFwcGxpY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBS0M7O0lBRUtBLFk7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSxrQ0FJSCxLQUFLQyxLQUFMLENBQVdDLFlBSlI7QUFBQSxVQUVMQyxvQkFGSyx5QkFFTEEsb0JBRks7QUFBQSxVQUdMQyxXQUhLLHlCQUdMQSxXQUhLO0FBTVAsVUFBTUMsWUFBWSxHQUFHLENBQUMsRUFBRUQsV0FBVyxJQUFJRCxvQkFBakIsQ0FBdEI7QUFFQUcsYUFBTyxDQUFDQyxHQUFSLHlCQUE2QkYsWUFBN0I7O0FBQ0EsVUFBSUEsWUFBSixFQUFrQjtBQUNoQixlQUFPLElBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUNFO0FBQUssbUJBQVMsRUFBRUcsMkRBQU0sQ0FBQ0MsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMscURBQUQ7QUFBZSxnQkFBTSxFQUFFLEtBQUtSLEtBQUwsQ0FBV1MsSUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBREY7QUFLRDtBQUNGOzs7O0VBbkJ3QkMsNENBQUssQ0FBQ0MsUzs7QUFzQmpDLFNBQVNDLGVBQVQsT0FBMkQ7QUFBQSxNQUFqQ1gsWUFBaUMsUUFBakNBLFlBQWlDO0FBQ3pELFNBQU87QUFBRUEsZ0JBQVksRUFBWkE7QUFBRixHQUFQO0FBQ0Q7O0FBRWNZLDBIQUFPLENBQUNELGVBQUQsQ0FBUCxDQUF5QmIsWUFBekIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNZSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUCxZQUE2QkMsUUFBN0IsRUFBakI7O0FBSUM7QUFFRCxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLE1BQUksRUFBRSxvQkFBeUI7QUFBQSxRQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsUUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUM3QixRQUFJRCxRQUFRLEtBQUssZ0JBQWpCLEVBQW1DO0FBQ2pDLGFBQ0UsTUFBQyx1REFBRDtBQUFlLFlBQUksRUFBRUMsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBR0QsS0FKRCxNQUlPLElBQUlELFFBQVEsS0FBSyxlQUFqQixFQUFrQztBQUN2QyxhQUNFLE1BQUMsc0RBQUQ7QUFBYyxZQUFJLEVBQUVDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUdELEtBSk0sTUFJQTtBQUNMLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBRUQsUUFBUSx1QkFBZ0JBLFFBQWhCLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0MsS0FESCxDQURGLENBREY7QUFPRDtBQUNGO0FBbkJlLENBQWxCOztJQXNCTUMsVzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxVQUFFLEVBQUMsYUFBUjtBQUFzQixpQkFBUyxFQUFFZCw0REFBTSxDQUFDZSxRQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxxREFBRDtBQUFlLGNBQU0sRUFBRVIsUUFBdkI7QUFBaUMsaUJBQVMsRUFBRUcsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREY7QUFNRDs7OztFQVJ1QlAsNENBQUssQ0FBQ0MsUzs7QUFXaEMsU0FBU0MsZUFBVCxDQUF5QlcsV0FBekIsRUFBd0Q7QUFDdEQsU0FBTztBQUFFQSxlQUFXLEVBQVhBO0FBQUYsR0FBUDtBQUNEOztBQUVjViwwSEFBTyxDQUFDRCxlQUFELENBQVAsQ0FBeUJTLFdBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjRmMDAyMTdhM2NjMWEyOTIyZjQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgU3BlZWNoQ29uZmlnIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgc3BlZWNoQ29uZmlnOiBTcGVlY2hDb25maWdcclxuICB0ZXh0OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jbGFzcyBBenVyZVdhcm5pbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGF6dXJlU3Vic2NyaXB0aW9uS2V5LFxyXG4gICAgICBhenVyZVJlZ2lvbixcclxuICAgIH0gPSB0aGlzLnByb3BzLnNwZWVjaENvbmZpZztcclxuXHJcbiAgICBjb25zdCBhenVyZUVuYWJsZWQgPSAhIShhenVyZVJlZ2lvbiAmJiBhenVyZVN1YnNjcmlwdGlvbktleSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYEF6dXJlV2FybmluZzogJHthenVyZUVuYWJsZWR9YCk7XHJcbiAgICBpZiAoYXp1cmVFbmFibGVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhcm5pbmd9PlxyXG4gICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXt0aGlzLnByb3BzLnRleHR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7c3BlZWNoQ29uZmlnfTogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IHNwZWVjaENvbmZpZyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXp1cmVXYXJuaW5nKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgQXp1cmVXYXJuaW5nIGZyb20gJy4vYXp1cmUtd2FybmluZyc7XHJcbmltcG9ydCBDaHJvbWVXYXJuaW5nIGZyb20gJy4vY2hyb21lLXdhcm5pbmcnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5jb25zdCBtYXJrZG93biA9IHJlcXVpcmUoJy4vaW5mby5tZCcpLmRlZmF1bHQudG9TdHJpbmcoKTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJlcnMgPSB7XHJcbiAgY29kZTogKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcclxuICAgIGlmIChsYW5ndWFnZSA9PT0gJ3dhcm5pbmctY2hyb21lJykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaHJvbWVXYXJuaW5nIHRleHQ9e3ZhbHVlfS8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKGxhbmd1YWdlID09PSAnd2FybmluZy1henVyZScpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QXp1cmVXYXJuaW5nIHRleHQ9e3ZhbHVlfS8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwcmU+XHJcbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e2xhbmd1YWdlICYmIGBsYW5ndWFnZS0ke2xhbmd1YWdlfWB9PlxyXG4gICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgPC9wcmU+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEluZm9Db250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD0nSW5mb0NvbnRyb2wnIGNsYXNzTmFtZT17c3R5bGVzLmluZm9QYW5lfT5cclxuICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e21hcmtkb3dufSByZW5kZXJlcnM9e3JlbmRlcmVyc30vPlxyXG4gICAgICAgIHsvKiBCdXQgZG8gdGh5IHdvcnN0IHRvIHN0ZWFsIHRoeXNlbGYgYXdheSwgRm9yIHRlcm0gb2YgbGlmZSB0aG91IGFydCBhc3N1cmVkIG1pbmU7IEFuZCBsaWZlIG5vIGxvbmdlciB0aGFuIHRoeSBsb3ZlIHdpbGwgc3RheSwgRm9yIGl0IGRlcGVuZHMgdXBvbiB0aGF0IGxvdmUgb2YgdGhpbmUuIFRoZW4gbmVlZCBJIG5vdCB0byBmZWFyIHRoZSB3b3JzdCBvZiB3cm9uZ3MsIFdoZW4gaW4gdGhlIGxlYXN0IG9mIHRoZW0gbXkgbGlmZSBoYXRoIGVuZC4gSSBzZWUgYSBiZXR0ZXIgc3RhdGUgdG8gbWUgYmVsb25ncyBUaGFuIHRoYXQgd2hpY2ggb24gdGh5IGh1bW91ciBkb3RoIGRlcGVuZDogVGhvdSBjYW5zdCBub3QgdmV4IG1lIHdpdGggaW5jb25zdGFudCBtaW5kLCBTaW5jZSB0aGF0IG15IGxpZmUgb24gdGh5IHJldm9sdCBkb3RoIGxpZS4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IGFwcGxpY2F0aW9uIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbmZvQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=