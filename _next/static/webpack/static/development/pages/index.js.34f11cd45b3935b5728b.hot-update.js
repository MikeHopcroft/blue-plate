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
      var azureEnabled = config.azureRegion && config.azureSubscriptionKey;
      var webSpeechEnabled = config.speechSupport;
      return __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Toggle, {
        variant: "light",
        id: "dropdown-basic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
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
          lineNumber: 38,
          columnNumber: 11
        }
      }), speech), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        disabled: !azureEnabled,
        onSelect: this.props.setAzure,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, "Azure Speech"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        disabled: !webSpeechEnabled,
        onSelect: this.props.setWebSpeech,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, "Google Speech"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
        onSelect: this.props.setText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwZWVjaC1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJTcGVlY2hDb250cm9sIiwiY29uZmlnIiwicHJvcHMiLCJhcHBsaWNhdGlvbiIsInNwZWVjaENvbmZpZyIsIm1vZGUiLCJzcGVlY2giLCJTcGVlY2hNb2RlIiwiQVpVUkUiLCJXRUJfU1BFRUNIIiwiYXp1cmVFbmFibGVkIiwiYXp1cmVSZWdpb24iLCJhenVyZVN1YnNjcmlwdGlvbktleSIsIndlYlNwZWVjaEVuYWJsZWQiLCJzcGVlY2hTdXBwb3J0Iiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nUmlnaHQiLCJzZXRBenVyZSIsInNldFdlYlNwZWVjaCIsInNldFRleHQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2V0U3BlZWNoQ29uZmlnIiwiVEVYVCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBY0M7O0lBRUtBLGE7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxVQUFNQyxNQUFNLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCQyxZQUF0QztBQUNBLFVBQU1DLElBQUksR0FBR0osTUFBTSxDQUFDSSxJQUFwQjtBQUNBLFVBQU1DLE1BQU0sR0FBSUQsSUFBSSxLQUFLRSxtREFBVSxDQUFDQyxLQUFwQixHQUNkLGNBRGMsR0FFZEgsSUFBSSxLQUFLRSxtREFBVSxDQUFDRSxVQUFwQixHQUNBLGVBREEsR0FDa0IsTUFIcEI7QUFLQSxVQUFNQyxZQUFZLEdBQUdULE1BQU0sQ0FBQ1UsV0FBUCxJQUFzQlYsTUFBTSxDQUFDVyxvQkFBbEQ7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBR1osTUFBTSxDQUFDYSxhQUFoQztBQUVBLGFBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnRUFBRCxDQUFVLE1BQVY7QUFBaUIsZUFBTyxFQUFDLE9BQXpCO0FBQWlDLFVBQUUsRUFBQyxnQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsMkRBQUQ7QUFBYyxhQUFLLEVBQUU7QUFBQ0MsZUFBSyxFQUFFLE9BQVI7QUFBaUJDLGdCQUFNLEVBQUUsT0FBekI7QUFBa0NDLHNCQUFZLEVBQUU7QUFBaEQsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUlYLE1BRkosQ0FERixFQU1FLE1BQUMsZ0VBQUQsQ0FBVSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdFQUFELENBQVUsSUFBVjtBQUNFLGdCQUFRLEVBQUUsQ0FBQ0ksWUFEYjtBQUVFLGdCQUFRLEVBQUUsS0FBS1IsS0FBTCxDQUFXZ0IsUUFGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQU9FLE1BQUMsZ0VBQUQsQ0FBVSxJQUFWO0FBQ0UsZ0JBQVEsRUFBRSxDQUFDTCxnQkFEYjtBQUVFLGdCQUFRLEVBQUUsS0FBS1gsS0FBTCxDQUFXaUIsWUFGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixFQWFFLE1BQUMsZ0VBQUQsQ0FBVSxJQUFWO0FBQWUsZ0JBQVEsRUFBRSxLQUFLakIsS0FBTCxDQUFXa0IsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRixDQU5GLENBREY7QUF3QkQ7Ozs7RUFwQ3lCQyw0Q0FBSyxDQUFDQyxTOztBQXVDbEMsU0FBU0MsZUFBVCxDQUF5QnBCLFdBQXpCLEVBQXdEO0FBQ3RELFNBQU87QUFBRUEsZUFBVyxFQUFYQTtBQUFGLEdBQVA7QUFDRDs7QUFFRCxTQUFTcUIsa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQTJEO0FBQ3pELFNBQU87QUFDTFAsWUFBUSxFQUFFLG9CQUFNO0FBQ2RPLGNBQVEsQ0FBQ0MsZ0VBQWUsQ0FBQztBQUFDckIsWUFBSSxFQUFFRSxtREFBVSxDQUFDQztBQUFsQixPQUFELENBQWhCLENBQVI7QUFDRCxLQUhJO0FBSUxZLFdBQU8sRUFBRSxtQkFBTTtBQUNiSyxjQUFRLENBQUNDLGdFQUFlLENBQUM7QUFBQ3JCLFlBQUksRUFBRUUsbURBQVUsQ0FBQ29CO0FBQWxCLE9BQUQsQ0FBaEIsQ0FBUjtBQUNELEtBTkk7QUFPTFIsZ0JBQVksRUFBRSx3QkFBTTtBQUNsQk0sY0FBUSxDQUFDQyxnRUFBZSxDQUFDO0FBQUNyQixZQUFJLEVBQUVFLG1EQUFVLENBQUNFO0FBQWxCLE9BQUQsQ0FBaEIsQ0FBUjtBQUNEO0FBVEksR0FBUDtBQVdEOztBQUVjbUIsMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkN4QixhQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNGYxMWNkNDViMzkzNWI1NzI4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duJztcclxuaW1wb3J0IHsgRmFNaWNyb3Bob25lIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uU3RhdGUsXHJcbiAgQW55QWN0aW9uLFxyXG4gIHNldFNwZWVjaENvbmZpZyxcclxuICBTcGVlY2hNb2RlLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG4gIHNldEF6dXJlOiAoKSA9PiB2b2lkO1xyXG4gIHNldFdlYlNwZWVjaDogKCkgPT4gdm9pZDtcclxuICBzZXRUZXh0OiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY2xhc3MgU3BlZWNoQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uc3BlZWNoQ29uZmlnO1xyXG4gICAgY29uc3QgbW9kZSA9IGNvbmZpZy5tb2RlO1xyXG4gICAgY29uc3Qgc3BlZWNoID0gIG1vZGUgPT09IFNwZWVjaE1vZGUuQVpVUkUgPyBcclxuICAgICAgJ0F6dXJlIFNwZWVjaCcgOlxyXG4gICAgICBtb2RlID09PSBTcGVlY2hNb2RlLldFQl9TUEVFQ0ggP1xyXG4gICAgICAnR29vZ2xlIFNwZWVjaCcgOiAnVGV4dCc7XHJcblxyXG4gICAgY29uc3QgYXp1cmVFbmFibGVkID0gY29uZmlnLmF6dXJlUmVnaW9uICYmIGNvbmZpZy5henVyZVN1YnNjcmlwdGlvbktleTtcclxuICAgIGNvbnN0IHdlYlNwZWVjaEVuYWJsZWQgPSBjb25maWcuc3BlZWNoU3VwcG9ydDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJvcGRvd24+XHJcbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwibGlnaHRcIiBpZD1cImRyb3Bkb3duLWJhc2ljXCI+XHJcbiAgICAgICAgICA8RmFNaWNyb3Bob25lIHN0eWxlPXt7d2lkdGg6ICcxLjJlbScsIGhlaWdodDogJzEuMmVtJywgcGFkZGluZ1JpZ2h0OiAnNHB4J319Lz5cclxuICAgICAgICAgIHsgc3BlZWNoIH1cclxuICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuXHJcbiAgICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICA8RHJvcGRvd24uSXRlbVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWF6dXJlRW5hYmxlZH1cclxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMucHJvcHMuc2V0QXp1cmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQXp1cmUgU3BlZWNoXHJcbiAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8RHJvcGRvd24uSXRlbVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXdlYlNwZWVjaEVuYWJsZWR9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnByb3BzLnNldFdlYlNwZWVjaH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR29vZ2xlIFNwZWVjaFxyXG4gICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25TZWxlY3Q9e3RoaXMucHJvcHMuc2V0VGV4dH0+VGV4dDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgIDwvRHJvcGRvd24+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2V0QXp1cmU6ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0U3BlZWNoQ29uZmlnKHttb2RlOiBTcGVlY2hNb2RlLkFaVVJFfSkpO1xyXG4gICAgfSxcclxuICAgIHNldFRleHQ6ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0U3BlZWNoQ29uZmlnKHttb2RlOiBTcGVlY2hNb2RlLlRFWFR9KSk7XHJcbiAgICB9LFxyXG4gICAgc2V0V2ViU3BlZWNoOiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNwZWVjaENvbmZpZyh7bW9kZTogU3BlZWNoTW9kZS5XRUJfU1BFRUNIfSkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTcGVlY2hDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==