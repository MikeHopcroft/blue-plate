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
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }
        }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaUndo"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }
        })), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "outline-primary",
          style: {
            border: 'none'
          },
          onClick: this.props.onClearCart,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }
        }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaRegTrashAlt"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
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
        lineNumber: 62,
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(CartControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQtY29udHJvbC50c3giXSwibmFtZXMiOlsiQ2FydENvbnRyb2wiLCJ3b3JsZCIsInByb3BzIiwiYXBwbGljYXRpb24iLCJjYXJ0IiwiaXRlbXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJjYXJ0V2VsY29tZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleEdyb3ciLCJib3JkZXIiLCJvbkNsZWFyQ2FydCIsInJlbmRlckl0ZW1MaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXJJdGVtIiwiaXRlbSIsInNwZWNpZmljIiwiY2F0YWxvZyIsImdldFNwZWNpZmljIiwia2V5IiwiY2FydEl0ZW0iLCJ1aWQiLCJxdWFudGl0eSIsIm5hbWUiLCJza3UiLCJjaGlsZHJlbiIsIm1hcCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2xlYXJDYXJ0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBS0M7O0lBRUtBLFc7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxVQUFNQyxLQUFLLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCRixLQUFyQztBQUNBLFVBQU1HLElBQUksR0FBRyxLQUFLRixLQUFMLENBQVdDLFdBQVgsQ0FBdUJDLElBQXBDOztBQUNBLFVBQUlBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQzNCLGVBQ0U7QUFBSyxtQkFBUyxFQUFFQyw0REFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRUFERixDQURGO0FBUUQsT0FURCxNQVNPO0FBQ0wsZUFDRTtBQUFLLG1CQUFTLEVBQUVELDREQUFNLENBQUNILElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLGVBQUssRUFBRTtBQUFDSyxtQkFBTyxFQUFFLE1BQVY7QUFBa0JDLHlCQUFhLEVBQUU7QUFBakMsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQUssZUFBSyxFQUFFO0FBQUNDLG9CQUFRLEVBQUU7QUFBWCxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixFQUdFLE1BQUMsOERBQUQ7QUFDRSxpQkFBTyxFQUFDLGlCQURWO0FBRUUsZUFBSyxFQUFFO0FBQUNDLGtCQUFNLEVBQUU7QUFBVCxXQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKRixDQUhGLEVBU0UsTUFBQyw4REFBRDtBQUNFLGlCQUFPLEVBQUMsaUJBRFY7QUFFRSxlQUFLLEVBQUU7QUFBQ0Esa0JBQU0sRUFBRTtBQUFULFdBRlQ7QUFHRSxpQkFBTyxFQUFFLEtBQUtWLEtBQUwsQ0FBV1csV0FIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUtFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUxGLENBVEYsQ0FERixFQWtCR0MsY0FBYyxDQUFDYixLQUFELEVBQVFHLElBQUksQ0FBQ0MsS0FBYixDQWxCakIsQ0FERjtBQXVCRDtBQUNGOzs7O0VBdEN1QlUsNENBQUssQ0FBQ0MsUzs7QUF5Q2hDLFNBQVNGLGNBQVQsQ0FBd0JiLEtBQXhCLEVBQXNDSSxLQUF0QyxFQUE2RDtBQUMzRCxXQUFTWSxVQUFULENBQW9CQyxJQUFwQixFQUF3QztBQUN0QyxRQUFNQyxRQUFRLEdBQUdsQixLQUFLLENBQUNtQixPQUFOLENBQWNDLFdBQWQsQ0FBMEJILElBQUksQ0FBQ0ksR0FBL0IsQ0FBakI7QUFDQSxXQUNFO0FBQUssZUFBUyxFQUFFZiw0REFBTSxDQUFDZ0IsUUFBdkI7QUFBaUMsU0FBRyxFQUFFTCxJQUFJLENBQUNNLEdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ01OLElBQUksQ0FBQ08sUUFEWCxjQUN1Qk4sUUFBUSxDQUFDTyxJQURoQyxlQUN5Q1AsUUFBUSxDQUFDUSxHQURsRCxRQUVHYixjQUFjLENBQUNiLEtBQUQsRUFBUWlCLElBQUksQ0FBQ1UsUUFBYixDQUZqQixDQURGO0FBTUQ7O0FBRUQsU0FBT3ZCLEtBQUssQ0FBQ3dCLEdBQU4sQ0FBVVosVUFBVixDQUFQO0FBQ0Q7O0FBRUQsU0FBU2EsZUFBVCxDQUF5QjNCLFdBQXpCLEVBQXdEO0FBQ3RELFNBQU87QUFBRUEsZUFBVyxFQUFYQTtBQUFGLEdBQVA7QUFDRDs7QUFFRCxTQUFTNEIsa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQTJEO0FBQ3pELFNBQU87QUFDTG5CLGVBQVcsRUFBRSx1QkFBTTtBQUNqQm1CLGNBQVEsQ0FBQ0MsMERBQVMsRUFBVixDQUFSO0FBQ0Q7QUFISSxHQUFQO0FBS0Q7O0FBRWNDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDL0IsV0FBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOWJlYmM5NDRmZmUwOTg4MWZiNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1JbnN0YW5jZSwgV29ybGQgfSBmcm9tICdwcml4LWZpeGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgeyBGYVJlZ1RyYXNoQWx0LCBGYVVuZG8gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7IEFueUFjdGlvbiwgQXBwbGljYXRpb25TdGF0ZSwgY2xlYXJDYXJ0IH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGU7XHJcbiAgb25DbGVhckNhcnQ6ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jbGFzcyBDYXJ0Q29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHdvcmxkID0gdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi53b3JsZCE7XHJcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi5jYXJ0O1xyXG4gICAgaWYgKGNhcnQuaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0V2VsY29tZX0+XHJcbiAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAgV2VsY29tZSB0byBTaG9ydC1PcmRlciFcclxuICAgICAgICAgICAgV2hhdCBjYW4gSSBnZXQgc3RhcnRlZCBmb3IgeW91P1xyXG4gICAgICAgICAgPC9iPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnR9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3Jvdyd9fT5cclxuICAgICAgICAgICAgPGI+U2hvcHBpbmcgQ2FydDwvYj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhHcm93OiAxfX0vPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZS1wcmltYXJ5J1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiAnbm9uZSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZhVW5kby8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZS1wcmltYXJ5J1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiAnbm9uZSd9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGVhckNhcnR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RmFSZWdUcmFzaEFsdC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cmVuZGVySXRlbUxpc3Qod29ybGQsIGNhcnQuaXRlbXMpfVxyXG4gICAgICAgICAgey8qIEJ1dCBkbyB0aHkgd29yc3QgdG8gc3RlYWwgdGh5c2VsZiBhd2F5LCBGb3IgdGVybSBvZiBsaWZlIHRob3UgYXJ0IGFzc3VyZWQgbWluZTsgQW5kIGxpZmUgbm8gbG9uZ2VyIHRoYW4gdGh5IGxvdmUgd2lsbCBzdGF5LCBGb3IgaXQgZGVwZW5kcyB1cG9uIHRoYXQgbG92ZSBvZiB0aGluZS4gVGhlbiBuZWVkIEkgbm90IHRvIGZlYXIgdGhlIHdvcnN0IG9mIHdyb25ncywgV2hlbiBpbiB0aGUgbGVhc3Qgb2YgdGhlbSBteSBsaWZlIGhhdGggZW5kLiBJIHNlZSBhIGJldHRlciBzdGF0ZSB0byBtZSBiZWxvbmdzIFRoYW4gdGhhdCB3aGljaCBvbiB0aHkgaHVtb3VyIGRvdGggZGVwZW5kOiBUaG91IGNhbnN0IG5vdCB2ZXggbWUgd2l0aCBpbmNvbnN0YW50IG1pbmQsIFNpbmNlIHRoYXQgbXkgbGlmZSBvbiB0aHkgcmV2b2x0IGRvdGggbGllLiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckl0ZW1MaXN0KHdvcmxkOiBXb3JsZCwgaXRlbXM6IEl0ZW1JbnN0YW5jZVtdKSB7XHJcbiAgZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtOiBJdGVtSW5zdGFuY2UpIHtcclxuICAgIGNvbnN0IHNwZWNpZmljID0gd29ybGQuY2F0YWxvZy5nZXRTcGVjaWZpYyhpdGVtLmtleSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnRJdGVtfSBrZXk9e2l0ZW0udWlkfT5cclxuICAgICAgICB7YCR7aXRlbS5xdWFudGl0eX0gJHtzcGVjaWZpYy5uYW1lfSAoJHtzcGVjaWZpYy5za3V9KWB9XHJcbiAgICAgICAge3JlbmRlckl0ZW1MaXN0KHdvcmxkLCBpdGVtLmNoaWxkcmVuKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXRlbXMubWFwKHJlbmRlckl0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgb25DbGVhckNhcnQ6ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goY2xlYXJDYXJ0KCkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0Q29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=