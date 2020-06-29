webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/cart-control.tsx":
/*!*************************************!*\
  !*** ./components/cart-control.tsx ***!
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
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\cart-control.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






;

var CartControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CartControl, _React$Component);

  var _super = _createSuper(CartControl);

  function CartControl() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CartControl);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CartControl, [{
    key: "render",
    value: function render() {
      var world = this.props.application.world;
      var cart = this.props.application.cart;

      if (cart.items.length === 0) {
        return __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.cartWelcome,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 9
          }
        }, __jsx("b", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }
        }, "Welcome to Short-Order! What can I get started for you?"));
      } else {
        return __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.cart,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
          }
        }, __jsx("div", {
          style: {
            display: 'flex',
            flexDirection: 'row'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }
        }, __jsx("b", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }
        }, "Shopping Cart"), __jsx("div", {
          style: {
            flexGrow: 1
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }
        }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "outline-primary",
          style: {
            border: 'none'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }
        }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaRegTrashAlt"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 72
          }
        }))), renderItemList(world, cart.items));
      }
    }
  }]);

  return CartControl;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function renderItemList(world, items) {
  function renderItem(item) {
    var specific = world.catalog.getSpecific(item.key);
    return __jsx("div", {
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.cartItem,
      key: item.uid,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, "".concat(item.quantity, " ").concat(specific.name, " (").concat(specific.sku, ")"), renderItemList(world, item.children));
  }

  return items.map(renderItem);
}

function mapStateToProps(application) {
  return {
    application: application
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(CartControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQtY29udHJvbC50c3giXSwibmFtZXMiOlsiQ2FydENvbnRyb2wiLCJ3b3JsZCIsInByb3BzIiwiYXBwbGljYXRpb24iLCJjYXJ0IiwiaXRlbXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJjYXJ0V2VsY29tZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleEdyb3ciLCJib3JkZXIiLCJyZW5kZXJJdGVtTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVySXRlbSIsIml0ZW0iLCJzcGVjaWZpYyIsImNhdGFsb2ciLCJnZXRTcGVjaWZpYyIsImtleSIsImNhcnRJdGVtIiwidWlkIiwicXVhbnRpdHkiLCJuYW1lIiwic2t1IiwiY2hpbGRyZW4iLCJtYXAiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQzs7SUFFS0EsVzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxLQUFMLENBQVdDLFdBQVgsQ0FBdUJGLEtBQXJDO0FBQ0EsVUFBTUcsSUFBSSxHQUFHLEtBQUtGLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkMsSUFBcEM7O0FBQ0EsVUFBSUEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsZUFDRTtBQUFLLG1CQUFTLEVBQUVDLDJEQUFNLENBQUNDLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFFQURGLENBREY7QUFRRCxPQVRELE1BU087QUFDTCxlQUNFO0FBQUssbUJBQVMsRUFBRUQsMkRBQU0sQ0FBQ0gsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssZUFBSyxFQUFFO0FBQUNLLG1CQUFPLEVBQUUsTUFBVjtBQUFrQkMseUJBQWEsRUFBRTtBQUFqQyxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLEVBRUU7QUFBSyxlQUFLLEVBQUU7QUFBQ0Msb0JBQVEsRUFBRTtBQUFYLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLEVBR0UsTUFBQyw4REFBRDtBQUFRLGlCQUFPLEVBQUMsaUJBQWhCO0FBQWtDLGVBQUssRUFBRTtBQUFDQyxrQkFBTSxFQUFFO0FBQVQsV0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEyRCxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBM0QsQ0FIRixDQURGLEVBTUdDLGNBQWMsQ0FBQ1osS0FBRCxFQUFRRyxJQUFJLENBQUNDLEtBQWIsQ0FOakIsQ0FERjtBQVdEO0FBQ0Y7Ozs7RUExQnVCUyw0Q0FBSyxDQUFDQyxTOztBQTZCaEMsU0FBU0YsY0FBVCxDQUF3QlosS0FBeEIsRUFBc0NJLEtBQXRDLEVBQTZEO0FBQzNELFdBQVNXLFVBQVQsQ0FBb0JDLElBQXBCLEVBQXdDO0FBQ3RDLFFBQU1DLFFBQVEsR0FBR2pCLEtBQUssQ0FBQ2tCLE9BQU4sQ0FBY0MsV0FBZCxDQUEwQkgsSUFBSSxDQUFDSSxHQUEvQixDQUFqQjtBQUNBLFdBQ0U7QUFBSyxlQUFTLEVBQUVkLDJEQUFNLENBQUNlLFFBQXZCO0FBQWlDLFNBQUcsRUFBRUwsSUFBSSxDQUFDTSxHQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNNTixJQUFJLENBQUNPLFFBRFgsY0FDdUJOLFFBQVEsQ0FBQ08sSUFEaEMsZUFDeUNQLFFBQVEsQ0FBQ1EsR0FEbEQsUUFFR2IsY0FBYyxDQUFDWixLQUFELEVBQVFnQixJQUFJLENBQUNVLFFBQWIsQ0FGakIsQ0FERjtBQU1EOztBQUVELFNBQU90QixLQUFLLENBQUN1QixHQUFOLENBQVVaLFVBQVYsQ0FBUDtBQUNEOztBQUVELFNBQVNhLGVBQVQsQ0FBeUIxQixXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUVBLGVBQVcsRUFBWEE7QUFBRixHQUFQO0FBQ0Q7O0FBRWMyQiwwSEFBTyxDQUFDRCxlQUFELENBQVAsQ0FBeUI3QixXQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jNmZmNDg5ZGRiZWQwOTg3OGU1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbUluc3RhbmNlLCBXb3JsZCB9IGZyb20gJ3ByaXgtZml4ZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7IEZhUmVnVHJhc2hBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZTtcclxufTtcclxuXHJcbmNsYXNzIENhcnRDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgd29ybGQgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLndvcmxkITtcclxuICAgIGNvbnN0IGNhcnQgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmNhcnQ7XHJcbiAgICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnRXZWxjb21lfT5cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICBXZWxjb21lIHRvIFNob3J0LU9yZGVyIVxyXG4gICAgICAgICAgICBXaGF0IGNhbiBJIGdldCBzdGFydGVkIGZvciB5b3U/XHJcbiAgICAgICAgICA8L2I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydH0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93J319PlxyXG4gICAgICAgICAgICA8Yj5TaG9wcGluZyBDYXJ0PC9iPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleEdyb3c6IDF9fS8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZS1wcmltYXJ5JyBzdHlsZT17e2JvcmRlcjogJ25vbmUnfX0+PEZhUmVnVHJhc2hBbHQvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cmVuZGVySXRlbUxpc3Qod29ybGQsIGNhcnQuaXRlbXMpfVxyXG4gICAgICAgICAgey8qIEJ1dCBkbyB0aHkgd29yc3QgdG8gc3RlYWwgdGh5c2VsZiBhd2F5LCBGb3IgdGVybSBvZiBsaWZlIHRob3UgYXJ0IGFzc3VyZWQgbWluZTsgQW5kIGxpZmUgbm8gbG9uZ2VyIHRoYW4gdGh5IGxvdmUgd2lsbCBzdGF5LCBGb3IgaXQgZGVwZW5kcyB1cG9uIHRoYXQgbG92ZSBvZiB0aGluZS4gVGhlbiBuZWVkIEkgbm90IHRvIGZlYXIgdGhlIHdvcnN0IG9mIHdyb25ncywgV2hlbiBpbiB0aGUgbGVhc3Qgb2YgdGhlbSBteSBsaWZlIGhhdGggZW5kLiBJIHNlZSBhIGJldHRlciBzdGF0ZSB0byBtZSBiZWxvbmdzIFRoYW4gdGhhdCB3aGljaCBvbiB0aHkgaHVtb3VyIGRvdGggZGVwZW5kOiBUaG91IGNhbnN0IG5vdCB2ZXggbWUgd2l0aCBpbmNvbnN0YW50IG1pbmQsIFNpbmNlIHRoYXQgbXkgbGlmZSBvbiB0aHkgcmV2b2x0IGRvdGggbGllLiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckl0ZW1MaXN0KHdvcmxkOiBXb3JsZCwgaXRlbXM6IEl0ZW1JbnN0YW5jZVtdKSB7XHJcbiAgZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtOiBJdGVtSW5zdGFuY2UpIHtcclxuICAgIGNvbnN0IHNwZWNpZmljID0gd29ybGQuY2F0YWxvZy5nZXRTcGVjaWZpYyhpdGVtLmtleSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnRJdGVtfSBrZXk9e2l0ZW0udWlkfT5cclxuICAgICAgICB7YCR7aXRlbS5xdWFudGl0eX0gJHtzcGVjaWZpYy5uYW1lfSAoJHtzcGVjaWZpYy5za3V9KWB9XHJcbiAgICAgICAge3JlbmRlckl0ZW1MaXN0KHdvcmxkLCBpdGVtLmNoaWxkcmVuKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXRlbXMubWFwKHJlbmRlckl0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2FydENvbnRyb2wpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9