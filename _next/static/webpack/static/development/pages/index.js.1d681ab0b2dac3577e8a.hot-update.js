webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/speech-control.tsx":
/*!***************************************!*\
  !*** ./components/speech-control.tsx ***!
  \***************************************/
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
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");





var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\speech-control.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






;

var SpeechControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SpeechControl, _React$Component);

  var _super = _createSuper(SpeechControl);

  function SpeechControl() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SpeechControl);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SpeechControl, [{
    key: "render",
    value: function render() {
      var config = this.props.application.speechConfig;
      var mode = config.mode;
      var speech = mode === _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].AZURE ? 'Azure Speech' : mode === _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].WEB_SPEECH ? 'Google Speech' : 'Text';
      var azureEnabled = !!(config.azureRegion && config.azureSubscriptionKey);
      var webSpeechEnabled = config.speechSupport;
      console.log("Azure: ".concat(azureEnabled, ", WebSpeech: ").concat(webSpeechEnabled));
      return __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Toggle, {
        variant: "light",
        id: "dropdown-basic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaMicrophone"], {
        style: {
          width: '1.2em',
          height: '1.2em',
          paddingRight: '4px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }), speech), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        disabled: !azureEnabled,
        onSelect: this.props.setAzure,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, "Azure Speech"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        disabled: !webSpeechEnabled,
        onSelect: this.props.setWebSpeech,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, "Google Speech"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        onSelect: this.props.setText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, "Text")));
    }
  }]);

  return SpeechControl;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function mapStateToProps(application) {
  return {
    application: application
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAzure: function setAzure() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setSpeechConfig"])({
        mode: _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].AZURE
      }));
    },
    setText: function setText() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setSpeechConfig"])({
        mode: _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].TEXT
      }));
    },
    setWebSpeech: function setWebSpeech() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["setSpeechConfig"])({
        mode: _actions__WEBPACK_IMPORTED_MODULE_9__["SpeechMode"].WEB_SPEECH
      }));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(SpeechControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJTcGVlY2hDb250cm9sIiwiY29uZmlnIiwicHJvcHMiLCJhcHBsaWNhdGlvbiIsInNwZWVjaENvbmZpZyIsIm1vZGUiLCJzcGVlY2giLCJTcGVlY2hNb2RlIiwiQVpVUkUiLCJXRUJfU1BFRUNIIiwiYXp1cmVFbmFibGVkIiwiYXp1cmVSZWdpb24iLCJhenVyZVN1YnNjcmlwdGlvbktleSIsIndlYlNwZWVjaEVuYWJsZWQiLCJzcGVlY2hTdXBwb3J0IiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1JpZ2h0Iiwic2V0QXp1cmUiLCJzZXRXZWJTcGVlY2giLCJzZXRUZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldFNwZWVjaENvbmZpZyIsIlRFWFQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQWNDOztJQUVLQSxhOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkMsWUFBdEM7QUFDQSxVQUFNQyxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBcEI7QUFDQSxVQUFNQyxNQUFNLEdBQUlELElBQUksS0FBS0UsbURBQVUsQ0FBQ0MsS0FBcEIsR0FDZCxjQURjLEdBRWRILElBQUksS0FBS0UsbURBQVUsQ0FBQ0UsVUFBcEIsR0FDQSxlQURBLEdBQ2tCLE1BSHBCO0FBS0EsVUFBTUMsWUFBWSxHQUFHLENBQUMsRUFBRVQsTUFBTSxDQUFDVSxXQUFQLElBQXNCVixNQUFNLENBQUNXLG9CQUEvQixDQUF0QjtBQUNBLFVBQU1DLGdCQUFnQixHQUFHWixNQUFNLENBQUNhLGFBQWhDO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixrQkFBc0JOLFlBQXRCLDBCQUFrREcsZ0JBQWxEO0FBRUEsYUFDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdFQUFELENBQVUsTUFBVjtBQUFpQixlQUFPLEVBQUMsT0FBekI7QUFBaUMsVUFBRSxFQUFDLGdCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywyREFBRDtBQUFjLGFBQUssRUFBRTtBQUFDSSxlQUFLLEVBQUUsT0FBUjtBQUFpQkMsZ0JBQU0sRUFBRSxPQUF6QjtBQUFrQ0Msc0JBQVksRUFBRTtBQUFoRCxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFSWIsTUFGSixDQURGLEVBTUUsTUFBQyxnRUFBRCxDQUFVLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0VBQUQsQ0FBVSxJQUFWO0FBQ0UsZ0JBQVEsRUFBRSxDQUFDSSxZQURiO0FBRUUsZ0JBQVEsRUFBRSxLQUFLUixLQUFMLENBQVdrQixRQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBT0UsTUFBQyxnRUFBRCxDQUFVLElBQVY7QUFDRSxnQkFBUSxFQUFFLENBQUNQLGdCQURiO0FBRUUsZ0JBQVEsRUFBRSxLQUFLWCxLQUFMLENBQVdtQixZQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGLEVBYUUsTUFBQyxnRUFBRCxDQUFVLElBQVY7QUFBZSxnQkFBUSxFQUFFLEtBQUtuQixLQUFMLENBQVdvQixPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGLENBTkYsQ0FERjtBQXdCRDs7OztFQXJDeUJDLDRDQUFLLENBQUNDLFM7O0FBd0NsQyxTQUFTQyxlQUFULENBQXlCdEIsV0FBekIsRUFBd0Q7QUFDdEQsU0FBTztBQUFFQSxlQUFXLEVBQVhBO0FBQUYsR0FBUDtBQUNEOztBQUVELFNBQVN1QixrQkFBVCxDQUE0QkMsUUFBNUIsRUFBMkQ7QUFDekQsU0FBTztBQUNMUCxZQUFRLEVBQUUsb0JBQU07QUFDZE8sY0FBUSxDQUFDQyxnRUFBZSxDQUFDO0FBQUN2QixZQUFJLEVBQUVFLG1EQUFVLENBQUNDO0FBQWxCLE9BQUQsQ0FBaEIsQ0FBUjtBQUNELEtBSEk7QUFJTGMsV0FBTyxFQUFFLG1CQUFNO0FBQ2JLLGNBQVEsQ0FBQ0MsZ0VBQWUsQ0FBQztBQUFDdkIsWUFBSSxFQUFFRSxtREFBVSxDQUFDc0I7QUFBbEIsT0FBRCxDQUFoQixDQUFSO0FBQ0QsS0FOSTtBQU9MUixnQkFBWSxFQUFFLHdCQUFNO0FBQ2xCTSxjQUFRLENBQUNDLGdFQUFlLENBQUM7QUFBQ3ZCLFlBQUksRUFBRUUsbURBQVUsQ0FBQ0U7QUFBbEIsT0FBRCxDQUFoQixDQUFSO0FBQ0Q7QUFUSSxHQUFQO0FBV0Q7O0FBRWNxQiwwSEFBTyxDQUFDTCxlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2QzFCLGFBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjFkNjgxYWIwYjJkYWMzNTc3ZThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xyXG5pbXBvcnQgeyBGYU1pY3JvcGhvbmUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25TdGF0ZSxcclxuICBBbnlBY3Rpb24sXHJcbiAgc2V0U3BlZWNoQ29uZmlnLFxyXG4gIFNwZWVjaE1vZGUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGU7XHJcbiAgc2V0QXp1cmU6ICgpID0+IHZvaWQ7XHJcbiAgc2V0V2ViU3BlZWNoOiAoKSA9PiB2b2lkO1xyXG4gIHNldFRleHQ6ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jbGFzcyBTcGVlY2hDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5zcGVlY2hDb25maWc7XHJcbiAgICBjb25zdCBtb2RlID0gY29uZmlnLm1vZGU7XHJcbiAgICBjb25zdCBzcGVlY2ggPSAgbW9kZSA9PT0gU3BlZWNoTW9kZS5BWlVSRSA/IFxyXG4gICAgICAnQXp1cmUgU3BlZWNoJyA6XHJcbiAgICAgIG1vZGUgPT09IFNwZWVjaE1vZGUuV0VCX1NQRUVDSCA/XHJcbiAgICAgICdHb29nbGUgU3BlZWNoJyA6ICdUZXh0JztcclxuXHJcbiAgICBjb25zdCBhenVyZUVuYWJsZWQgPSAhIShjb25maWcuYXp1cmVSZWdpb24gJiYgY29uZmlnLmF6dXJlU3Vic2NyaXB0aW9uS2V5KTtcclxuICAgIGNvbnN0IHdlYlNwZWVjaEVuYWJsZWQgPSBjb25maWcuc3BlZWNoU3VwcG9ydDtcclxuICAgIGNvbnNvbGUubG9nKGBBenVyZTogJHthenVyZUVuYWJsZWR9LCBXZWJTcGVlY2g6ICR7d2ViU3BlZWNoRW5hYmxlZH1gKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJvcGRvd24+XHJcbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwibGlnaHRcIiBpZD1cImRyb3Bkb3duLWJhc2ljXCI+XHJcbiAgICAgICAgICA8RmFNaWNyb3Bob25lIHN0eWxlPXt7d2lkdGg6ICcxLjJlbScsIGhlaWdodDogJzEuMmVtJywgcGFkZGluZ1JpZ2h0OiAnNHB4J319Lz5cclxuICAgICAgICAgIHsgc3BlZWNoIH1cclxuICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuXHJcbiAgICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICA8RHJvcGRvd24uSXRlbVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWF6dXJlRW5hYmxlZH1cclxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMucHJvcHMuc2V0QXp1cmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQXp1cmUgU3BlZWNoXHJcbiAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8RHJvcGRvd24uSXRlbVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXdlYlNwZWVjaEVuYWJsZWR9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnByb3BzLnNldFdlYlNwZWVjaH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR29vZ2xlIFNwZWVjaFxyXG4gICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25TZWxlY3Q9e3RoaXMucHJvcHMuc2V0VGV4dH0+VGV4dDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgIDwvRHJvcGRvd24+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2V0QXp1cmU6ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0U3BlZWNoQ29uZmlnKHttb2RlOiBTcGVlY2hNb2RlLkFaVVJFfSkpO1xyXG4gICAgfSxcclxuICAgIHNldFRleHQ6ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0U3BlZWNoQ29uZmlnKHttb2RlOiBTcGVlY2hNb2RlLlRFWFR9KSk7XHJcbiAgICB9LFxyXG4gICAgc2V0V2ViU3BlZWNoOiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyh7bW9kZTogU3BlZWNoTW9kZS5XRUJfU1BFRUNIfSkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTcGVlY2hDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==