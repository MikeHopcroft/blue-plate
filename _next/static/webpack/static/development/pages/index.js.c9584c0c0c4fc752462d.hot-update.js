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
          variant: "outline-primary",
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
            columnNumber: 45
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQtY29udHJvbC50c3giXSwibmFtZXMiOlsiQ2FydENvbnRyb2wiLCJ3b3JsZCIsInByb3BzIiwiYXBwbGljYXRpb24iLCJjYXJ0IiwiaXRlbXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJjYXJ0V2VsY29tZSIsInJlbmRlckl0ZW1MaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJJdGVtIiwiaXRlbSIsInNwZWNpZmljIiwiY2F0YWxvZyIsImdldFNwZWNpZmljIiwia2V5IiwiY2FydEl0ZW0iLCJ1aWQiLCJxdWFudGl0eSIsIm5hbWUiLCJza3UiLCJjaGlsZHJlbiIsIm1hcCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlDOztJQUVLQSxXOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkYsS0FBckM7QUFDQSxVQUFNRyxJQUFJLEdBQUcsS0FBS0YsS0FBTCxDQUFXQyxXQUFYLENBQXVCQyxJQUFwQzs7QUFDQSxVQUFJQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUMzQixlQUNFO0FBQUssbUJBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBREYsQ0FERjtBQVFELE9BVEQsTUFTTztBQUNMLGVBQ0U7QUFBSyxtQkFBUyxFQUFFRCwyREFBTSxDQUFDSCxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFLE1BQUMsOERBQUQ7QUFBUSxpQkFBTyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWtDLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFsQyxDQUZGLEVBR0dLLGNBQWMsQ0FBQ1IsS0FBRCxFQUFRRyxJQUFJLENBQUNDLEtBQWIsQ0FIakIsQ0FERjtBQVFEO0FBQ0Y7Ozs7RUF2QnVCSyw0Q0FBSyxDQUFDQyxTOztBQTBCaEMsU0FBU0YsY0FBVCxDQUF3QlIsS0FBeEIsRUFBc0NJLEtBQXRDLEVBQTZEO0FBQzNELFdBQVNPLFVBQVQsQ0FBb0JDLElBQXBCLEVBQXdDO0FBQ3RDLFFBQU1DLFFBQVEsR0FBR2IsS0FBSyxDQUFDYyxPQUFOLENBQWNDLFdBQWQsQ0FBMEJILElBQUksQ0FBQ0ksR0FBL0IsQ0FBakI7QUFDQSxXQUNFO0FBQUssZUFBUyxFQUFFViwyREFBTSxDQUFDVyxRQUF2QjtBQUFpQyxTQUFHLEVBQUVMLElBQUksQ0FBQ00sR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTU4sSUFBSSxDQUFDTyxRQURYLGNBQ3VCTixRQUFRLENBQUNPLElBRGhDLGVBQ3lDUCxRQUFRLENBQUNRLEdBRGxELFFBRUdiLGNBQWMsQ0FBQ1IsS0FBRCxFQUFRWSxJQUFJLENBQUNVLFFBQWIsQ0FGakIsQ0FERjtBQU1EOztBQUVELFNBQU9sQixLQUFLLENBQUNtQixHQUFOLENBQVVaLFVBQVYsQ0FBUDtBQUNEOztBQUVELFNBQVNhLGVBQVQsQ0FBeUJ0QixXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUVBLGVBQVcsRUFBWEE7QUFBRixHQUFQO0FBQ0Q7O0FBRWN1QiwwSEFBTyxDQUFDRCxlQUFELENBQVAsQ0FBeUJ6QixXQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jOTU4NGMwYzBjNGZjNzUyNDYyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbUluc3RhbmNlLCBXb3JsZCB9IGZyb20gJ3ByaXgtZml4ZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7IEZhVHJhc2ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZTtcclxufTtcclxuXHJcbmNsYXNzIENhcnRDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgd29ybGQgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLndvcmxkITtcclxuICAgIGNvbnN0IGNhcnQgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmNhcnQ7XHJcbiAgICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnRXZWxjb21lfT5cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICBXZWxjb21lIHRvIFNob3J0LU9yZGVyIVxyXG4gICAgICAgICAgICBXaGF0IGNhbiBJIGdldCBzdGFydGVkIGZvciB5b3U/XHJcbiAgICAgICAgICA8L2I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydH0+XHJcbiAgICAgICAgICA8Yj5TaG9wcGluZyBDYXJ0PC9iPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lLXByaW1hcnknPjxGYVRyYXNoLz48L0J1dHRvbj5cclxuICAgICAgICAgIHtyZW5kZXJJdGVtTGlzdCh3b3JsZCwgY2FydC5pdGVtcyl9XHJcbiAgICAgICAgICB7LyogQnV0IGRvIHRoeSB3b3JzdCB0byBzdGVhbCB0aHlzZWxmIGF3YXksIEZvciB0ZXJtIG9mIGxpZmUgdGhvdSBhcnQgYXNzdXJlZCBtaW5lOyBBbmQgbGlmZSBubyBsb25nZXIgdGhhbiB0aHkgbG92ZSB3aWxsIHN0YXksIEZvciBpdCBkZXBlbmRzIHVwb24gdGhhdCBsb3ZlIG9mIHRoaW5lLiBUaGVuIG5lZWQgSSBub3QgdG8gZmVhciB0aGUgd29yc3Qgb2Ygd3JvbmdzLCBXaGVuIGluIHRoZSBsZWFzdCBvZiB0aGVtIG15IGxpZmUgaGF0aCBlbmQuIEkgc2VlIGEgYmV0dGVyIHN0YXRlIHRvIG1lIGJlbG9uZ3MgVGhhbiB0aGF0IHdoaWNoIG9uIHRoeSBodW1vdXIgZG90aCBkZXBlbmQ6IFRob3UgY2Fuc3Qgbm90IHZleCBtZSB3aXRoIGluY29uc3RhbnQgbWluZCwgU2luY2UgdGhhdCBteSBsaWZlIG9uIHRoeSByZXZvbHQgZG90aCBsaWUuICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVySXRlbUxpc3Qod29ybGQ6IFdvcmxkLCBpdGVtczogSXRlbUluc3RhbmNlW10pIHtcclxuICBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW06IEl0ZW1JbnN0YW5jZSkge1xyXG4gICAgY29uc3Qgc3BlY2lmaWMgPSB3b3JsZC5jYXRhbG9nLmdldFNwZWNpZmljKGl0ZW0ua2V5KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEl0ZW19IGtleT17aXRlbS51aWR9PlxyXG4gICAgICAgIHtgJHtpdGVtLnF1YW50aXR5fSAke3NwZWNpZmljLm5hbWV9ICgke3NwZWNpZmljLnNrdX0pYH1cclxuICAgICAgICB7cmVuZGVySXRlbUxpc3Qod29ybGQsIGl0ZW0uY2hpbGRyZW4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiBpdGVtcy5tYXAocmVuZGVySXRlbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IGFwcGxpY2F0aW9uIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDYXJ0Q29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=