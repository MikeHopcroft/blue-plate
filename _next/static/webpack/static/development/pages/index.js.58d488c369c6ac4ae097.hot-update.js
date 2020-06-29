webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/history-control.tsx":
/*!****************************************!*\
  !*** ./components/history-control.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _history_item_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./history-item-control */ "./components/history-item-control.tsx");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\history-control.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(groupHistoryItems);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





;

var HistoryControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HistoryControl, _React$Component);

  var _super = _createSuper(HistoryControl);

  function HistoryControl() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HistoryControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "panelEndRef", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "itemCount", 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollOnUpdate", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderHistoryGroup", function (group, index) {
      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.historyGroup,
        key: index.toString(),
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }
      }, group[0].timestamp.toLocaleDateString(), group.map(function (item, index) {
        return __jsx(_history_item_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
          history: item,
          key: index,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 38
          }
        });
      }));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(HistoryControl, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }
      }, this.renderHistory(this.props.history), __jsx("div", {
        ref: this.panelEndRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToBottom();
      this.scrollOnUpdate = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.scrollOnUpdate) {
        this.scrollToBottom();
        this.scrollOnUpdate = false;
      }
    }
  }, {
    key: "renderHistory",
    value: function renderHistory(history) {
      if (this.itemCount !== history.length) {
        this.itemCount = history.length;
        this.scrollOnUpdate = true;
      }

      var groups = groupHistoryItems(history);
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(groups).map(this.renderHistoryGroup);
    }
  }, {
    key: "scrollToBottom",
    // renderCart(cart: Cart) {
    //   return (
    //     <div className={styles.historyCart}>
    //       {this.renderItemList(cart.items)}
    //     </div>
    //   )
    // }
    // renderItemList(items: ItemInstance[]) {
    //   const renderItem = (item: ItemInstance) => {
    //     const specific = this.props.world.catalog.getSpecific(item.key);
    //     return (
    //       <div className={styles.cartItem} key={item.uid}>
    //         {`${item.quantity} ${specific.name} (${specific.sku})`}
    //         {this.renderItemList(item.children)}
    //       </div>
    //     )
    //   }
    //   return items.map(renderItem);
    // }
    value: function scrollToBottom() {
      this.panelEndRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
  }]);

  return HistoryControl;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component); // function renderSource(source: TextSource) {
//   return (<span className={styles.historySource}>
//     { renderSourceIcon(source)}
//   </span>)
// }
// function renderSourceIcon(source: TextSource) {
//   switch (source) {
//     case TextSource.KEYBOARD:
//       return <FaKeyboard/>;
//     case TextSource.MICROPHONE:
//       return <FaMicrophone/>;
//     default:
//       return <FaQuestionCircle/>
//   }
// }
// function renderCorrectness(correctness: Correctness) {
//   return (<div>{renderCorrectnessIcon(correctness)}</div>);
// }
// function renderCorrectnessIcon(correctness: Correctness) {
//   switch (correctness) {
//     case Correctness.CORRECT:
//       return <FaThumbsUp style={{color: 'green'}}/>;
//     case Correctness.INCORRECT:
//       return <FaThumbsDown style={{color: 'red'}}/>;
//     default:
//       return <FaQuestionCircle style={{color: 'lightgray'}}/>;
//   }
// }
// function renderNote(note?: string) {
//   if (note) {
//     return <div style={{paddingLeft: '4px'}}><FaComment style={{color: '#ffd699'}}/></div>;
//   } else {
//     return null;
//   }
// }


var THRESHOLD = 1000 * 60; // 60 seconds

function groupHistoryItems(items) {
  var grouped, _iterator, _step, item, x;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function groupHistoryItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(items.length > 0)) {
            _context.next = 33;
            break;
          }

          grouped = [];
          _iterator = _createForOfIteratorHelper(items);
          _context.prev = 3;

          _iterator.s();

        case 5:
          if ((_step = _iterator.n()).done) {
            _context.next = 22;
            break;
          }

          item = _step.value;
          item.timestamp;

          if (!(grouped.length === 0)) {
            _context.next = 12;
            break;
          }

          grouped.push(item);
          _context.next = 20;
          break;

        case 12:
          x = item.timestamp.getTime() - grouped[0].timestamp.getTime();

          if (!(x <= THRESHOLD)) {
            _context.next = 17;
            break;
          }

          grouped.push(item);
          _context.next = 20;
          break;

        case 17:
          _context.next = 19;
          return grouped;

        case 19:
          grouped = [item];

        case 20:
          _context.next = 5;
          break;

        case 22:
          _context.next = 27;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](3);

          _iterator.e(_context.t0);

        case 27:
          _context.prev = 27;

          _iterator.f();

          return _context.finish(27);

        case 30:
          if (!(grouped.length > 0)) {
            _context.next = 33;
            break;
          }

          _context.next = 33;
          return grouped;

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 24, 27, 30]]);
}

function mapStateToProps(application) {
  return {
    world: application.world
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(HistoryControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnktY29udHJvbC50c3giXSwibmFtZXMiOlsiZ3JvdXBIaXN0b3J5SXRlbXMiLCJIaXN0b3J5Q29udHJvbCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZ3JvdXAiLCJpbmRleCIsInN0eWxlcyIsImhpc3RvcnlHcm91cCIsInRvU3RyaW5nIiwidGltZXN0YW1wIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibWFwIiwiaXRlbSIsInJlbmRlckhpc3RvcnkiLCJwcm9wcyIsImhpc3RvcnkiLCJwYW5lbEVuZFJlZiIsInNjcm9sbFRvQm90dG9tIiwic2Nyb2xsT25VcGRhdGUiLCJpdGVtQ291bnQiLCJsZW5ndGgiLCJncm91cHMiLCJyZW5kZXJIaXN0b3J5R3JvdXAiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkNvbXBvbmVudCIsIlRIUkVTSE9MRCIsIml0ZW1zIiwiZ3JvdXBlZCIsInB1c2giLCJ4IiwiZ2V0VGltZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImFwcGxpY2F0aW9uIiwid29ybGQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBOElVQSxpQjs7Ozs7Ozs7Ozs7O0FBN0lWO0FBWUE7QUFJQTtBQUVBO0FBS0M7O0lBTUtDLGM7Ozs7Ozs7Ozs7Ozs7Ozs7c05BQ1VDLDRDQUFLLENBQUNDLFNBQU4sRTs7b05BQ0YsQzs7eU5BQ0ssSzs7Nk5BZ0NJLFVBQUNDLEtBQUQsRUFBdUJDLEtBQXZCLEVBQXlDO0FBQzVELGFBQ0U7QUFBSyxpQkFBUyxFQUFFQyw0REFBTSxDQUFDQyxZQUF2QjtBQUFxQyxXQUFHLEVBQUVGLEtBQUssQ0FBQ0csUUFBTixFQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dKLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssU0FBVCxDQUFtQkMsa0JBQW5CLEVBREgsRUFFSU4sS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPUCxLQUFQO0FBQUEsZUFBaUIsTUFBQyw4REFBRDtBQUFvQixpQkFBTyxFQUFFTyxJQUE3QjtBQUFtQyxhQUFHLEVBQUVQLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBakI7QUFBQSxPQUFWLENBRkosQ0FERjtBQU1ELEs7Ozs7Ozs7NkJBckNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS1EsYUFBTCxDQUFtQixLQUFLQyxLQUFMLENBQVdDLE9BQTlCLENBREgsRUFFRTtBQUFLLFdBQUcsRUFBRSxLQUFLQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGO0FBTUQ7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsY0FBTDtBQUNBLFdBQUtDLGNBQUwsR0FBc0IsS0FBdEI7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFJLEtBQUtBLGNBQVQsRUFBeUI7QUFDdkIsYUFBS0QsY0FBTDtBQUNBLGFBQUtDLGNBQUwsR0FBc0IsS0FBdEI7QUFDRDtBQUNGOzs7a0NBRWFILE8sRUFBd0I7QUFDcEMsVUFBSSxLQUFLSSxTQUFMLEtBQW1CSixPQUFPLENBQUNLLE1BQS9CLEVBQXVDO0FBQ3JDLGFBQUtELFNBQUwsR0FBaUJKLE9BQU8sQ0FBQ0ssTUFBekI7QUFDQSxhQUFLRixjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7O0FBQ0QsVUFBTUcsTUFBTSxHQUFHckIsaUJBQWlCLENBQUNlLE9BQUQsQ0FBaEM7QUFDQSxhQUFPLDZGQUFJTSxNQUFKLEVBQVlWLEdBQVosQ0FBZ0IsS0FBS1csa0JBQXJCLENBQVA7QUFDRDs7O0FBV0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7cUNBRWlCO0FBQ2YsV0FBS04sV0FBTCxDQUFpQk8sT0FBakIsQ0FBeUJDLGNBQXpCLENBQXdDO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUF4QztBQUNEOzs7O0VBcEUwQnZCLDRDQUFLLENBQUN3QixTLEdBdUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsT0FBSyxFQUF2QixDLENBQTRCOztBQUM1QixTQUFVM0IsaUJBQVYsQ0FDRTRCLEtBREY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUdNQSxLQUFLLENBQUNSLE1BQU4sR0FBZSxDQUhyQjtBQUFBO0FBQUE7QUFBQTs7QUFJUVMsaUJBSlIsR0FJaUMsRUFKakM7QUFBQSxpREFNdUJELEtBTnZCO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZWhCLGNBTmY7QUFPTUEsY0FBSSxDQUFDSCxTQUFMOztBQVBOLGdCQVFVb0IsT0FBTyxDQUFDVCxNQUFSLEtBQW1CLENBUjdCO0FBQUE7QUFBQTtBQUFBOztBQVNRUyxpQkFBTyxDQUFDQyxJQUFSLENBQWFsQixJQUFiO0FBVFI7QUFBQTs7QUFBQTtBQVdjbUIsV0FYZCxHQVdrQm5CLElBQUksQ0FBQ0gsU0FBTCxDQUFldUIsT0FBZixLQUEyQkgsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXcEIsU0FBWCxDQUFxQnVCLE9BQXJCLEVBWDdDOztBQUFBLGdCQVlZRCxDQUFDLElBQUlKLFNBWmpCO0FBQUE7QUFBQTtBQUFBOztBQWFVRSxpQkFBTyxDQUFDQyxJQUFSLENBQWFsQixJQUFiO0FBYlY7QUFBQTs7QUFBQTtBQUFBO0FBZVUsaUJBQU1pQixPQUFOOztBQWZWO0FBZ0JVQSxpQkFBTyxHQUFHLENBQUNqQixJQUFELENBQVY7O0FBaEJWO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxnQkFvQlFpQixPQUFPLENBQUNULE1BQVIsR0FBaUIsQ0FwQnpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBcUJNLGlCQUFNUyxPQUFOOztBQXJCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEwQkEsU0FBU0ksZUFBVCxDQUF5QkMsV0FBekIsRUFBd0Q7QUFDdEQsU0FBTztBQUFFQyxTQUFLLEVBQUVELFdBQVcsQ0FBQ0M7QUFBckIsR0FBUDtBQUNEOztBQUVjQywySEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJoQyxjQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41OGQ0ODhjMzY5YzZhYzRhZTA5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCwgSXRlbUluc3RhbmNlLCBXb3JsZCB9IGZyb20gJ3ByaXgtZml4ZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEZhQ29tbWVudCxcclxuICBGYUtleWJvYXJkLFxyXG4gIEZhTWljcm9waG9uZSxcclxuICBGYVF1ZXN0aW9uQ2lyY2xlLFxyXG4gIEZhU3RpY2t5Tm90ZSxcclxuICBGYVRodW1ic0Rvd24sXHJcbiAgRmFUaHVtYnNVcFxyXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIEhpc3RvcnlJdGVtLCBUZXh0U291cmNlLCBDb3JyZWN0bmVzcyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgSGlzdG9yeUl0ZW1Db250cm9sIGZyb20gJy4vaGlzdG9yeS1pdGVtLWNvbnRyb2wnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBoaXN0b3J5OiBIaXN0b3J5SXRlbVtdO1xyXG4gIHdvcmxkOiBXb3JsZDtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgaG92ZXI6IGJvb2xlYW5cclxufVxyXG5cclxuY2xhc3MgSGlzdG9yeUNvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgcGFuZWxFbmRSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgaXRlbUNvdW50ID0gMDtcclxuICBzY3JvbGxPblVwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckhpc3RvcnkodGhpcy5wcm9wcy5oaXN0b3J5KX1cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5wYW5lbEVuZFJlZn0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgIHRoaXMuc2Nyb2xsT25VcGRhdGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnNjcm9sbE9uVXBkYXRlKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgdGhpcy5zY3JvbGxPblVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVySGlzdG9yeShoaXN0b3J5OiBIaXN0b3J5SXRlbVtdKSB7XHJcbiAgICBpZiAodGhpcy5pdGVtQ291bnQgIT09IGhpc3RvcnkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuaXRlbUNvdW50ID0gaGlzdG9yeS5sZW5ndGg7XHJcbiAgICAgIHRoaXMuc2Nyb2xsT25VcGRhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ3JvdXBzID0gZ3JvdXBIaXN0b3J5SXRlbXMoaGlzdG9yeSk7XHJcbiAgICByZXR1cm4gWy4uLmdyb3Vwc10ubWFwKHRoaXMucmVuZGVySGlzdG9yeUdyb3VwKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckhpc3RvcnlHcm91cCA9IChncm91cDogSGlzdG9yeUl0ZW1bXSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5R3JvdXB9IGtleT17aW5kZXgudG9TdHJpbmcoKX0+XHJcbiAgICAgICAge2dyb3VwWzBdLnRpbWVzdGFtcC50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICB7IGdyb3VwLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxIaXN0b3J5SXRlbUNvbnRyb2wgaGlzdG9yeT17aXRlbX0ga2V5PXtpbmRleH0vPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLy8gcmVuZGVyQ2FydChjYXJ0OiBDYXJ0KSB7XHJcbiAgLy8gICByZXR1cm4gKFxyXG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpc3RvcnlDYXJ0fT5cclxuICAvLyAgICAgICB7dGhpcy5yZW5kZXJJdGVtTGlzdChjYXJ0Lml0ZW1zKX1cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApXHJcbiAgLy8gfVxyXG5cclxuICAvLyByZW5kZXJJdGVtTGlzdChpdGVtczogSXRlbUluc3RhbmNlW10pIHtcclxuICAvLyAgIGNvbnN0IHJlbmRlckl0ZW0gPSAoaXRlbTogSXRlbUluc3RhbmNlKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IHNwZWNpZmljID0gdGhpcy5wcm9wcy53b3JsZC5jYXRhbG9nLmdldFNwZWNpZmljKGl0ZW0ua2V5KTtcclxuICAvLyAgICAgcmV0dXJuIChcclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnRJdGVtfSBrZXk9e2l0ZW0udWlkfT5cclxuICAvLyAgICAgICAgIHtgJHtpdGVtLnF1YW50aXR5fSAke3NwZWNpZmljLm5hbWV9ICgke3NwZWNpZmljLnNrdX0pYH1cclxuICAvLyAgICAgICAgIHt0aGlzLnJlbmRlckl0ZW1MaXN0KGl0ZW0uY2hpbGRyZW4pfVxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICApXHJcbiAgLy8gICB9XHJcbiAgXHJcbiAgLy8gICByZXR1cm4gaXRlbXMubWFwKHJlbmRlckl0ZW0pO1xyXG4gIC8vIH1cclxuXHJcbiAgc2Nyb2xsVG9Cb3R0b20oKSB7XHJcbiAgICB0aGlzLnBhbmVsRW5kUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJhdXRvXCIgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiByZW5kZXJTb3VyY2Uoc291cmNlOiBUZXh0U291cmNlKSB7XHJcbi8vICAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5U291cmNlfT5cclxuLy8gICAgIHsgcmVuZGVyU291cmNlSWNvbihzb3VyY2UpfVxyXG4vLyAgIDwvc3Bhbj4pXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHJlbmRlclNvdXJjZUljb24oc291cmNlOiBUZXh0U291cmNlKSB7XHJcbi8vICAgc3dpdGNoIChzb3VyY2UpIHtcclxuLy8gICAgIGNhc2UgVGV4dFNvdXJjZS5LRVlCT0FSRDpcclxuLy8gICAgICAgcmV0dXJuIDxGYUtleWJvYXJkLz47XHJcbi8vICAgICBjYXNlIFRleHRTb3VyY2UuTUlDUk9QSE9ORTpcclxuLy8gICAgICAgcmV0dXJuIDxGYU1pY3JvcGhvbmUvPjtcclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiA8RmFRdWVzdGlvbkNpcmNsZS8+XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiByZW5kZXJDb3JyZWN0bmVzcyhjb3JyZWN0bmVzczogQ29ycmVjdG5lc3MpIHtcclxuLy8gICByZXR1cm4gKDxkaXY+e3JlbmRlckNvcnJlY3RuZXNzSWNvbihjb3JyZWN0bmVzcyl9PC9kaXY+KTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gcmVuZGVyQ29ycmVjdG5lc3NJY29uKGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcykge1xyXG4vLyAgIHN3aXRjaCAoY29ycmVjdG5lc3MpIHtcclxuLy8gICAgIGNhc2UgQ29ycmVjdG5lc3MuQ09SUkVDVDpcclxuLy8gICAgICAgcmV0dXJuIDxGYVRodW1ic1VwIHN0eWxlPXt7Y29sb3I6ICdncmVlbid9fS8+O1xyXG4vLyAgICAgY2FzZSBDb3JyZWN0bmVzcy5JTkNPUlJFQ1Q6XHJcbi8vICAgICAgIHJldHVybiA8RmFUaHVtYnNEb3duIHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0vPjtcclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiA8RmFRdWVzdGlvbkNpcmNsZSBzdHlsZT17e2NvbG9yOiAnbGlnaHRncmF5J319Lz47XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiByZW5kZXJOb3RlKG5vdGU/OiBzdHJpbmcpIHtcclxuLy8gICBpZiAobm90ZSkge1xyXG4vLyAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDogJzRweCd9fT48RmFDb21tZW50IHN0eWxlPXt7Y29sb3I6ICcjZmZkNjk5J319Lz48L2Rpdj47XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIHJldHVybiBudWxsO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgVEhSRVNIT0xEID0gMTAwMCo2MDsgIC8vIDYwIHNlY29uZHNcclxuZnVuY3Rpb24qIGdyb3VwSGlzdG9yeUl0ZW1zKFxyXG4gIGl0ZW1zOiBIaXN0b3J5SXRlbVtdXHJcbik6IEl0ZXJhYmxlSXRlcmF0b3I8SGlzdG9yeUl0ZW1bXT4ge1xyXG4gIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICBsZXQgZ3JvdXBlZDogSGlzdG9yeUl0ZW1bXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICBpdGVtLnRpbWVzdGFtcFxyXG4gICAgICBpZiAoZ3JvdXBlZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBncm91cGVkLnB1c2goaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGl0ZW0udGltZXN0YW1wLmdldFRpbWUoKSAtIGdyb3VwZWRbMF0udGltZXN0YW1wLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAoeCA8PSBUSFJFU0hPTEQpIHtcclxuICAgICAgICAgIGdyb3VwZWQucHVzaChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgeWllbGQgZ3JvdXBlZDtcclxuICAgICAgICAgIGdyb3VwZWQgPSBbaXRlbV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZ3JvdXBlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHlpZWxkIGdyb3VwZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyB3b3JsZDogYXBwbGljYXRpb24ud29ybGQgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhpc3RvcnlDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==