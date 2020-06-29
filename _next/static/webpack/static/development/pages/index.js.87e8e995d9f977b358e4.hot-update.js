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
        }, __jsx("b", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }
        }, "Shopping Cart"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "outline-dark",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }
        }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaTrash"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 42
          }
        })), renderItemList(world, cart.items));
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
        lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQtY29udHJvbC50c3giXSwibmFtZXMiOlsiQ2FydENvbnRyb2wiLCJ3b3JsZCIsInByb3BzIiwiYXBwbGljYXRpb24iLCJjYXJ0IiwiaXRlbXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJjYXJ0V2VsY29tZSIsInJlbmRlckl0ZW1MaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJJdGVtIiwiaXRlbSIsInNwZWNpZmljIiwiY2F0YWxvZyIsImdldFNwZWNpZmljIiwia2V5IiwiY2FydEl0ZW0iLCJ1aWQiLCJxdWFudGl0eSIsIm5hbWUiLCJza3UiLCJjaGlsZHJlbiIsIm1hcCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlDOztJQUVLQSxXOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkYsS0FBckM7QUFDQSxVQUFNRyxJQUFJLEdBQUcsS0FBS0YsS0FBTCxDQUFXQyxXQUFYLENBQXVCQyxJQUFwQzs7QUFDQSxVQUFJQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUMzQixlQUNFO0FBQUssbUJBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBREYsQ0FERjtBQVFELE9BVEQsTUFTTztBQUNMLGVBQ0U7QUFBSyxtQkFBUyxFQUFFRCwyREFBTSxDQUFDSCxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFLE1BQUMsOERBQUQ7QUFBUSxpQkFBTyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBK0IsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQS9CLENBRkYsRUFHR0ssY0FBYyxDQUFDUixLQUFELEVBQVFHLElBQUksQ0FBQ0MsS0FBYixDQUhqQixDQURGO0FBUUQ7QUFDRjs7OztFQXZCdUJLLDRDQUFLLENBQUNDLFM7O0FBMEJoQyxTQUFTRixjQUFULENBQXdCUixLQUF4QixFQUFzQ0ksS0FBdEMsRUFBNkQ7QUFDM0QsV0FBU08sVUFBVCxDQUFvQkMsSUFBcEIsRUFBd0M7QUFDdEMsUUFBTUMsUUFBUSxHQUFHYixLQUFLLENBQUNjLE9BQU4sQ0FBY0MsV0FBZCxDQUEwQkgsSUFBSSxDQUFDSSxHQUEvQixDQUFqQjtBQUNBLFdBQ0U7QUFBSyxlQUFTLEVBQUVWLDJEQUFNLENBQUNXLFFBQXZCO0FBQWlDLFNBQUcsRUFBRUwsSUFBSSxDQUFDTSxHQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNNTixJQUFJLENBQUNPLFFBRFgsY0FDdUJOLFFBQVEsQ0FBQ08sSUFEaEMsZUFDeUNQLFFBQVEsQ0FBQ1EsR0FEbEQsUUFFR2IsY0FBYyxDQUFDUixLQUFELEVBQVFZLElBQUksQ0FBQ1UsUUFBYixDQUZqQixDQURGO0FBTUQ7O0FBRUQsU0FBT2xCLEtBQUssQ0FBQ21CLEdBQU4sQ0FBVVosVUFBVixDQUFQO0FBQ0Q7O0FBRUQsU0FBU2EsZUFBVCxDQUF5QnRCLFdBQXpCLEVBQXdEO0FBQ3RELFNBQU87QUFBRUEsZUFBVyxFQUFYQTtBQUFGLEdBQVA7QUFDRDs7QUFFY3VCLDBIQUFPLENBQUNELGVBQUQsQ0FBUCxDQUF5QnpCLFdBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjg3ZThlOTk1ZDlmOTc3YjM1OGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtSW5zdGFuY2UsIFdvcmxkIH0gZnJvbSAncHJpeC1maXhlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IHsgRmFUcmFzaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlO1xyXG59O1xyXG5cclxuY2xhc3MgQ2FydENvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB3b3JsZCA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24ud29ybGQhO1xyXG4gICAgY29uc3QgY2FydCA9IHRoaXMucHJvcHMuYXBwbGljYXRpb24uY2FydDtcclxuICAgIGlmIChjYXJ0Lml0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydFdlbGNvbWV9PlxyXG4gICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgdG8gU2hvcnQtT3JkZXIhXHJcbiAgICAgICAgICAgIFdoYXQgY2FuIEkgZ2V0IHN0YXJ0ZWQgZm9yIHlvdT9cclxuICAgICAgICAgIDwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0fT5cclxuICAgICAgICAgIDxiPlNob3BwaW5nIENhcnQ8L2I+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmUtZGFyayc+PEZhVHJhc2gvPjwvQnV0dG9uPlxyXG4gICAgICAgICAge3JlbmRlckl0ZW1MaXN0KHdvcmxkLCBjYXJ0Lml0ZW1zKX1cclxuICAgICAgICAgIHsvKiBCdXQgZG8gdGh5IHdvcnN0IHRvIHN0ZWFsIHRoeXNlbGYgYXdheSwgRm9yIHRlcm0gb2YgbGlmZSB0aG91IGFydCBhc3N1cmVkIG1pbmU7IEFuZCBsaWZlIG5vIGxvbmdlciB0aGFuIHRoeSBsb3ZlIHdpbGwgc3RheSwgRm9yIGl0IGRlcGVuZHMgdXBvbiB0aGF0IGxvdmUgb2YgdGhpbmUuIFRoZW4gbmVlZCBJIG5vdCB0byBmZWFyIHRoZSB3b3JzdCBvZiB3cm9uZ3MsIFdoZW4gaW4gdGhlIGxlYXN0IG9mIHRoZW0gbXkgbGlmZSBoYXRoIGVuZC4gSSBzZWUgYSBiZXR0ZXIgc3RhdGUgdG8gbWUgYmVsb25ncyBUaGFuIHRoYXQgd2hpY2ggb24gdGh5IGh1bW91ciBkb3RoIGRlcGVuZDogVGhvdSBjYW5zdCBub3QgdmV4IG1lIHdpdGggaW5jb25zdGFudCBtaW5kLCBTaW5jZSB0aGF0IG15IGxpZmUgb24gdGh5IHJldm9sdCBkb3RoIGxpZS4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJJdGVtTGlzdCh3b3JsZDogV29ybGQsIGl0ZW1zOiBJdGVtSW5zdGFuY2VbXSkge1xyXG4gIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbTogSXRlbUluc3RhbmNlKSB7XHJcbiAgICBjb25zdCBzcGVjaWZpYyA9IHdvcmxkLmNhdGFsb2cuZ2V0U3BlY2lmaWMoaXRlbS5rZXkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SXRlbX0ga2V5PXtpdGVtLnVpZH0+XHJcbiAgICAgICAge2Ake2l0ZW0ucXVhbnRpdHl9ICR7c3BlY2lmaWMubmFtZX0gKCR7c3BlY2lmaWMuc2t1fSlgfVxyXG4gICAgICAgIHtyZW5kZXJJdGVtTGlzdCh3b3JsZCwgaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGl0ZW1zLm1hcChyZW5kZXJJdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgYXBwbGljYXRpb24gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENhcnRDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==