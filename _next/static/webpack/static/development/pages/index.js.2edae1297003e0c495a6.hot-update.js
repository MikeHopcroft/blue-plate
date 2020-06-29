webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/product-list-control.tsx":
/*!*********************************************!*\
  !*** ./components/product-list-control.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prix-fixe */ "./node_modules/prix-fixe/build/src/bindex.js");
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prix_fixe__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");







var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\product-list-control.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






;

var ProductListControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductListControl, _React$Component);

  var _super = _createSuper(ProductListControl);

  function ProductListControl() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductListControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onSelect", function (eventKey) {
      _this.props.selectionChanged(Number(eventKey));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductListControl, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, this.renderCatalog());
    }
  }, {
    key: "renderCatalog",
    value: function renderCatalog() {
      var catalog = this.props.application.world.catalog;
      var currentPID = this.props.application.currentPID;
      var products = [];
      var options = [];

      var _iterator = _createForOfIteratorHelper(catalog.genericEntities()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (item.kind === prix_fixe__WEBPACK_IMPORTED_MODULE_7__["MENUITEM"]) {
            products.push(item);
          } else {
            options.push(item);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      products.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      options.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      return __jsx("div", {
        style: {
          width: '100%',
          height: '100%',
          overflow: 'auto'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "flex-column",
        activeKey: currentPID,
        onSelect: this.onSelect,
        variant: "pills",
        style: {
          paddingTop: '0',
          paddingBottom: '0'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx("div", {
        style: {
          fontWeight: 'bold'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, "Productsxxx:"), products.map(renderItem), __jsx("div", {
        style: {
          fontWeight: 'bold'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, "Options:"), options.map(renderItem)));

      function renderItem(item) {
        return __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__["default"].Item, {
          key: item.pid,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 9
          }
        }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__["default"].Link, {
          style: {
            whiteSpace: 'nowrap'
          },
          eventKey: item.pid,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }
        }, item.name, " (", item.pid, ")"));
      } // function renderItem2(item: GenericTypedEntity) {
      //   // TODO: do this with styling or correct boostrap component
      //   // that already handles selection.
      //   if (item.pid === currentPID) {
      //     return (
      //       <div className={styles.nested + ' ' + styles.selected} key={item.pid}>
      //         {item.name} ({item.pid})
      //       </div>
      //     );
      //   } else {
      //     return (
      //       <div className={styles.nested} key={item.pid}>
      //         {item.name} ({item.pid})
      //       </div>
      //     );
      //   }
      // }

    }
  }]);

  return ProductListControl;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

function mapStateToProps(application) {
  return {
    application: application
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectionChanged: function selectionChanged(pid) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["setPID"])(pid));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(ProductListControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdENvbnRyb2wiLCJldmVudEtleSIsInByb3BzIiwic2VsZWN0aW9uQ2hhbmdlZCIsIk51bWJlciIsInJlbmRlckNhdGFsb2ciLCJjYXRhbG9nIiwiYXBwbGljYXRpb24iLCJ3b3JsZCIsImN1cnJlbnRQSUQiLCJwcm9kdWN0cyIsIm9wdGlvbnMiLCJnZW5lcmljRW50aXRpZXMiLCJpdGVtIiwia2luZCIsIk1FTlVJVEVNIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIm5hbWUiLCJsb2NhbGVDb21wYXJlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm9uU2VsZWN0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJmb250V2VpZ2h0IiwibWFwIiwicmVuZGVySXRlbSIsInBpZCIsIndoaXRlU3BhY2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2V0UElEIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU9DOztJQUVLQSxrQjs7Ozs7Ozs7Ozs7Ozs7OzttTkFDTyxVQUFDQyxRQUFELEVBQXNCO0FBQy9CLFlBQUtDLEtBQUwsQ0FBV0MsZ0JBQVgsQ0FBNEJDLE1BQU0sQ0FBQ0gsUUFBRCxDQUFsQztBQUNELEs7Ozs7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxLQUFLSSxhQUFMLEVBREosQ0FERjtBQUtEOzs7b0NBRWU7QUFDZCxVQUFNQyxPQUFPLEdBQUcsS0FBS0osS0FBTCxDQUFXSyxXQUFYLENBQXVCQyxLQUF2QixDQUE4QkYsT0FBOUM7QUFD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QUN6RCxTQUFPO0FBQ0xsQyxvQkFBZ0IsRUFBRSwwQkFBQzRCLEdBQUQsRUFBYztBQUM5Qk0sY0FBUSxDQUFDQyx3REFBTSxDQUFDUCxHQUFELENBQVAsQ0FBUjtBQUNEO0FBSEksR0FBUDtBQUtEOztBQUVjUSwySEFBTyxDQUFDSixlQUFELEVBQWlCQyxrQkFBakIsQ0FBUCxDQUE0Q3BDLGtCQUE1QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yZWRhZTEyOTcwMDNlMGM0OTVhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY1R5cGVkRW50aXR5LCBNRU5VSVRFTSwgUElEIH0gZnJvbSAncHJpeC1maXhlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHsgQW55QWN0aW9uLCBBcHBsaWNhdGlvblN0YXRlLCBzZXRQSUQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZTtcclxuICBzZWxlY3Rpb25DaGFuZ2VkOiAocGlkOiBQSUQpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jbGFzcyBQcm9kdWN0TGlzdENvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICBvblNlbGVjdCA9IChldmVudEtleTogc3RyaW5nKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnNlbGVjdGlvbkNoYW5nZWQoTnVtYmVyKGV2ZW50S2V5KSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHsgdGhpcy5yZW5kZXJDYXRhbG9nKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNhdGFsb2coKSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gdGhpcy5wcm9wcy5hcHBsaWNhdGlvbi53b3JsZCEuY2F0YWxvZztcclxuICAgIGNvbnN0IGN1cnJlbnRQSUQgPSB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLmN1cnJlbnRQSUQ7XHJcbiAgICBjb25zdCBwcm9kdWN0czogR2VuZXJpY1R5cGVkRW50aXR5W10gPSBbXTtcclxuICAgIGNvbnN0IG9wdGlvbnM6IEdlbmVyaWNUeXBlZEVudGl0eVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2F0YWxvZy5nZW5lcmljRW50aXRpZXMoKSkge1xyXG4gICAgICBpZiAoaXRlbS5raW5kID09PSBNRU5VSVRFTSkge1xyXG4gICAgICAgIHByb2R1Y3RzLnB1c2goaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3B0aW9ucy5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwcm9kdWN0cy5zb3J0KChhLGIpID0+IChhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKSk7XHJcbiAgICBvcHRpb25zLnNvcnQoKGEsYikgPT4gKGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnYXV0byd9fT5cclxuICAgICAgICA8TmF2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWNvbHVtblwiXHJcbiAgICAgICAgICBhY3RpdmVLZXk9e2N1cnJlbnRQSUR9XHJcbiAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJwaWxsc1wiXHJcbiAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6ICcwJywgcGFkZGluZ0JvdHRvbTogJzAnfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+UHJvZHVjdHN4eHg6PC9kaXY+XHJcbiAgICAgICAgICB7cHJvZHVjdHMubWFwKHJlbmRlckl0ZW0pfVxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319Pk9wdGlvbnM6PC9kaXY+XHJcbiAgICAgICAgICB7b3B0aW9ucy5tYXAocmVuZGVySXRlbSl9XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICBcclxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdi5JdGVtIGtleT17aXRlbS5waWR9PlxyXG4gICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7d2hpdGVTcGFjZTogJ25vd3JhcCd9fSBldmVudEtleT17aXRlbS5waWR9PlxyXG4gICAgICAgICAgICB7aXRlbS5uYW1lfSAoe2l0ZW0ucGlkfSlcclxuICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiByZW5kZXJJdGVtMihpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICAgIC8vICAgLy8gVE9ETzogZG8gdGhpcyB3aXRoIHN0eWxpbmcgb3IgY29ycmVjdCBib29zdHJhcCBjb21wb25lbnRcclxuICAgIC8vICAgLy8gdGhhdCBhbHJlYWR5IGhhbmRsZXMgc2VsZWN0aW9uLlxyXG4gICAgLy8gICBpZiAoaXRlbS5waWQgPT09IGN1cnJlbnRQSUQpIHtcclxuICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWQgKyAnICcgKyBzdHlsZXMuc2VsZWN0ZWR9IGtleT17aXRlbS5waWR9PlxyXG4gICAgLy8gICAgICAgICB7aXRlbS5uYW1lfSAoe2l0ZW0ucGlkfSlcclxuICAgIC8vICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIChcclxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2l0ZW0ucGlkfT5cclxuICAgIC8vICAgICAgICAge2l0ZW0ubmFtZX0gKHtpdGVtLnBpZH0pXHJcbiAgICAvLyAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyBhcHBsaWNhdGlvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0aW9uQ2hhbmdlZDogKHBpZDogUElEKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFBJRChwaWQpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9kdWN0TGlzdENvbnRyb2wpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9