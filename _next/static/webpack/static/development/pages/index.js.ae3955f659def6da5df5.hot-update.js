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
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_10__);





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
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.cartWelcome,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 9
          }
        }, __jsx("b", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }
        }, "Welcome to Short-Order! What can I get started for you?"));
      } else {
        return __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.cart,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
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
            lineNumber: 33,
            columnNumber: 11
          }
        }, __jsx("b", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }
        }, "Shopping Cart"), __jsx("div", {
          style: {
            flexGrow: 1
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }
        }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "outline-primary",
          style: {
            border: 'none'
          },
          onClick: this.props.onClearCart,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }
        }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaRegTrashAlt"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
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
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.cartItem,
      key: item.uid,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
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

function mapDispatchToProps(dispatch) {
  return {
    onClearCart: function onClearCart() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_9__["clearCart"])());
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQtY29udHJvbC50c3giXSwibmFtZXMiOlsiQ2FydENvbnRyb2wiLCJ3b3JsZCIsInByb3BzIiwiYXBwbGljYXRpb24iLCJjYXJ0IiwiaXRlbXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJjYXJ0V2VsY29tZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleEdyb3ciLCJib3JkZXIiLCJvbkNsZWFyQ2FydCIsInJlbmRlckl0ZW1MaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJJdGVtIiwiaXRlbSIsInNwZWNpZmljIiwiY2F0YWxvZyIsImdldFNwZWNpZmljIiwia2V5IiwiY2FydEl0ZW0iLCJ1aWQiLCJxdWFudGl0eSIsIm5hbWUiLCJza3UiLCJjaGlsZHJlbiIsIm1hcCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2xlYXJDYXJ0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBS0M7O0lBRUtBLFc7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxVQUFNQyxLQUFLLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCRixLQUFyQztBQUNBLFVBQU1HLElBQUksR0FBRyxLQUFLRixLQUFMLENBQVdDLFdBQVgsQ0FBdUJDLElBQXBDOztBQUNBLFVBQUlBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQzNCLGVBQ0U7QUFBSyxtQkFBUyxFQUFFQyw0REFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRUFERixDQURGO0FBUUQsT0FURCxNQVNPO0FBQ0wsZUFDRTtBQUFLLG1CQUFTLEVBQUVELDREQUFNLENBQUNILElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLGVBQUssRUFBRTtBQUFDSyxtQkFBTyxFQUFFLE1BQVY7QUFBa0JDLHlCQUFhLEVBQUU7QUFBakMsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQUssZUFBSyxFQUFFO0FBQUNDLG9CQUFRLEVBQUU7QUFBWCxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixFQUdFLE1BQUMsOERBQUQ7QUFDRSxpQkFBTyxFQUFDLGlCQURWO0FBRUUsZUFBSyxFQUFFO0FBQUNDLGtCQUFNLEVBQUU7QUFBVCxXQUZUO0FBR0UsaUJBQU8sRUFBRSxLQUFLVixLQUFMLENBQVdXLFdBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FLRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFMRixDQUhGLENBREYsRUFZR0MsY0FBYyxDQUFDYixLQUFELEVBQVFHLElBQUksQ0FBQ0MsS0FBYixDQVpqQixDQURGO0FBaUJEO0FBQ0Y7Ozs7RUFoQ3VCVSw0Q0FBSyxDQUFDQyxTOztBQW1DaEMsU0FBU0YsY0FBVCxDQUF3QmIsS0FBeEIsRUFBc0NJLEtBQXRDLEVBQTZEO0FBQzNELFdBQVNZLFVBQVQsQ0FBb0JDLElBQXBCLEVBQXdDO0FBQ3RDLFFBQU1DLFFBQVEsR0FBR2xCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsV0FBZCxDQUEwQkgsSUFBSSxDQUFDSSxHQUEvQixDQUFqQjtBQUNBLFdBQ0U7QUFBSyxlQUFTLEVBQUVmLDREQUFNLENBQUNnQixRQUF2QjtBQUFpQyxTQUFHLEVBQUVMLElBQUksQ0FBQ00sR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTU4sSUFBSSxDQUFDTyxRQURYLGNBQ3VCTixRQUFRLENBQUNPLElBRGhDLGVBQ3lDUCxRQUFRLENBQUNRLEdBRGxELFFBRUdiLGNBQWMsQ0FBQ2IsS0FBRCxFQUFRaUIsSUFBSSxDQUFDVSxRQUFiLENBRmpCLENBREY7QUFNRDs7QUFFRCxTQUFPdkIsS0FBSyxDQUFDd0IsR0FBTixDQUFVWixVQUFWLENBQVA7QUFDRDs7QUFFRCxTQUFTYSxlQUFULENBQXlCM0IsV0FBekIsRUFBd0Q7QUFDdEQsU0FBTztBQUFFQSxlQUFXLEVBQVhBO0FBQUYsR0FBUDtBQUNEOztBQUVELFNBQVM0QixrQkFBVCxDQUE0QkMsUUFBNUIsRUFBMkQ7QUFDekQsU0FBTztBQUNMbkIsZUFBVyxFQUFFLHVCQUFNO0FBQ2pCbUIsY0FBUSxDQUFDQywwREFBUyxFQUFWLENBQVI7QUFDRDtBQUhJLEdBQVA7QUFLRDs7QUFFY0MsMEhBQU8sQ0FBQ0osZUFBRCxDQUFQLENBQXlCOUIsV0FBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWUzOTU1ZjY1OWRlZjZkYTVkZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1JbnN0YW5jZSwgV29ybGQgfSBmcm9tICdwcml4LWZpeGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgeyBGYVJlZ1RyYXNoQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQgeyBBbnlBY3Rpb24sIEFwcGxpY2F0aW9uU3RhdGUsIGNsZWFyQ2FydCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG4gIG9uQ2xlYXJDYXJ0OiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY2xhc3MgQ2FydENvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB3b3JsZCA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24ud29ybGQhO1xyXG4gICAgY29uc3QgY2FydCA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uY2FydDtcclxuICAgIGlmIChjYXJ0Lml0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydFdlbGNvbWV9PlxyXG4gICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgdG8gU2hvcnQtT3JkZXIhXHJcbiAgICAgICAgICAgIFdoYXQgY2FuIEkgZ2V0IHN0YXJ0ZWQgZm9yIHlvdT9cclxuICAgICAgICAgIDwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcbiAgICAgICAgICAgIDxiPlNob3BwaW5nIENhcnQ8L2I+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4R3JvdzogMX19Lz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmUtcHJpbWFyeSdcclxuICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogJ25vbmUnfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xlYXJDYXJ0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZhUmVnVHJhc2hBbHQvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3JlbmRlckl0ZW1MaXN0KHdvcmxkLCBjYXJ0Lml0ZW1zKX1cclxuICAgICAgICAgIHsvKiBCdXQgZG8gdGh5IHdvcnN0IHRvIHN0ZWFsIHRoeXNlbGYgYXdheSwgRm9yIHRlcm0gb2YgbGlmZSB0aG91IGFydCBhc3N1cmVkIG1pbmU7IEFuZCBsaWZlIG5vIGxvbmdlciB0aGFuIHRoeSBsb3ZlIHdpbGwgc3RheSwgRm9yIGl0IGRlcGVuZHMgdXBvbiB0aGF0IGxvdmUgb2YgdGhpbmUuIFRoZW4gbmVlZCBJIG5vdCB0byBmZWFyIHRoZSB3b3JzdCBvZiB3cm9uZ3MsIFdoZW4gaW4gdGhlIGxlYXN0IG9mIHRoZW0gbXkgbGlmZSBoYXRoIGVuZC4gSSBzZWUgYSBiZXR0ZXIgc3RhdGUgdG8gbWUgYmVsb25ncyBUaGFuIHRoYXQgd2hpY2ggb24gdGh5IGh1bW91ciBkb3RoIGRlcGVuZDogVGhvdSBjYW5zdCBub3QgdmV4IG1lIHdpdGggaW5jb25zdGFudCBtaW5kLCBTaW5jZSB0aGF0IG15IGxpZmUgb24gdGh5IHJldm9sdCBkb3RoIGxpZS4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJJdGVtTGlzdCh3b3JsZDogV29ybGQsIGl0ZW1zOiBJdGVtSW5zdGFuY2VbXSkge1xyXG4gIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbTogSXRlbUluc3RhbmNlKSB7XHJcbiAgICBjb25zdCBzcGVjaWZpYyA9IHdvcmxkLmNhdGFsb2cuZ2V0U3BlY2lmaWMoaXRlbS5rZXkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SXRlbX0ga2V5PXtpdGVtLnVpZH0+XHJcbiAgICAgICAge2Ake2l0ZW0ucXVhbnRpdHl9ICR7c3BlY2lmaWMubmFtZX0gKCR7c3BlY2lmaWMuc2t1fSlgfVxyXG4gICAgICAgIHtyZW5kZXJJdGVtTGlzdCh3b3JsZCwgaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGl0ZW1zLm1hcChyZW5kZXJJdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgYXBwbGljYXRpb24gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9uQ2xlYXJDYXJ0OiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGNsZWFyQ2FydCgpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENhcnRDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==