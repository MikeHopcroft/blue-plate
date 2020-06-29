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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");
/* harmony import */ var _history_item_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./history-item-control */ "./components/history-item-control.tsx");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_14__);









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
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.historyGroup,
        key: index.toString(),
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }
      }, group[0].timestamp.toLocaleDateString(), group.map(function (item, index) {
        return __jsx(_history_item_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
    key: "renderCart",
    // renderHistoryItem = (item: HistoryItem, index: number) => {
    //   return (
    //     <div className={styles.historyItem} key={'x' + index} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
    //       <div className={styles.historyItemHeader}>
    //         { renderCorrectness(item.correctness) }
    //         { renderSource(item.source ) }
    //         <b>{`${item.timestamp.toLocaleTimeString()}: `}</b>
    //         <span style={{paddingLeft: '6px'}}><i>{item.text}</i></span>
    //         {/* <div style={{flexGrow: 1}}></div> */}
    //         { renderNote(item.note)}
    //       </div>
    //       {this.renderCart(item.cart)}
    //     </div>
    //   );
    // }
    value: function renderCart(cart) {
      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.historyCart,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 7
        }
      }, this.renderItemList(cart.items));
    }
  }, {
    key: "renderItemList",
    value: function renderItemList(items) {
      var _this2 = this;

      var renderItem = function renderItem(item) {
        var specific = _this2.props.world.catalog.getSpecific(item.key);

        return __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.cartItem,
          key: item.uid,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 9
          }
        }, "".concat(item.quantity, " ").concat(specific.name, " (").concat(specific.sku, ")"), _this2.renderItemList(item.children));
      };

      return items.map(renderItem);
    }
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      this.panelEndRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
  }]);

  return HistoryControl;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

function renderSource(source) {
  return __jsx("span", {
    className: _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.historySource,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, renderSourceIcon(source));
}

function renderSourceIcon(source) {
  switch (source) {
    case _actions__WEBPACK_IMPORTED_MODULE_12__["TextSource"].KEYBOARD:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaKeyboard"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 14
        }
      });

    case _actions__WEBPACK_IMPORTED_MODULE_12__["TextSource"].MICROPHONE:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaMicrophone"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 14
        }
      });

    default:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaQuestionCircle"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 14
        }
      });
  }
}

function renderCorrectness(correctness) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, renderCorrectnessIcon(correctness));
}

function renderCorrectnessIcon(correctness) {
  switch (correctness) {
    case _actions__WEBPACK_IMPORTED_MODULE_12__["Correctness"].CORRECT:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaThumbsUp"], {
        style: {
          color: 'green'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 14
        }
      });

    case _actions__WEBPACK_IMPORTED_MODULE_12__["Correctness"].INCORRECT:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaThumbsDown"], {
        style: {
          color: 'red'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 14
        }
      });

    default:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaQuestionCircle"], {
        style: {
          color: 'lightgray'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 14
        }
      });
  }
}

function renderNote(note) {
  if (note) {
    return __jsx("div", {
      style: {
        paddingLeft: '4px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 12
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaComment"], {
      style: {
        color: '#ffd699'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 46
      }
    }));
  } else {
    return null;
  }
}

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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps)(HistoryControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnktY29udHJvbC50c3giXSwibmFtZXMiOlsiZ3JvdXBIaXN0b3J5SXRlbXMiLCJIaXN0b3J5Q29udHJvbCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZ3JvdXAiLCJpbmRleCIsInN0eWxlcyIsImhpc3RvcnlHcm91cCIsInRvU3RyaW5nIiwidGltZXN0YW1wIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibWFwIiwiaXRlbSIsInJlbmRlckhpc3RvcnkiLCJwcm9wcyIsImhpc3RvcnkiLCJwYW5lbEVuZFJlZiIsInNjcm9sbFRvQm90dG9tIiwic2Nyb2xsT25VcGRhdGUiLCJpdGVtQ291bnQiLCJsZW5ndGgiLCJncm91cHMiLCJyZW5kZXJIaXN0b3J5R3JvdXAiLCJjYXJ0IiwiaGlzdG9yeUNhcnQiLCJyZW5kZXJJdGVtTGlzdCIsIml0ZW1zIiwicmVuZGVySXRlbSIsInNwZWNpZmljIiwid29ybGQiLCJjYXRhbG9nIiwiZ2V0U3BlY2lmaWMiLCJrZXkiLCJjYXJ0SXRlbSIsInVpZCIsInF1YW50aXR5IiwibmFtZSIsInNrdSIsImNoaWxkcmVuIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJDb21wb25lbnQiLCJyZW5kZXJTb3VyY2UiLCJzb3VyY2UiLCJoaXN0b3J5U291cmNlIiwicmVuZGVyU291cmNlSWNvbiIsIlRleHRTb3VyY2UiLCJLRVlCT0FSRCIsIk1JQ1JPUEhPTkUiLCJyZW5kZXJDb3JyZWN0bmVzcyIsImNvcnJlY3RuZXNzIiwicmVuZGVyQ29ycmVjdG5lc3NJY29uIiwiQ29ycmVjdG5lc3MiLCJDT1JSRUNUIiwiY29sb3IiLCJJTkNPUlJFQ1QiLCJyZW5kZXJOb3RlIiwibm90ZSIsInBhZGRpbmdMZWZ0IiwiVEhSRVNIT0xEIiwiZ3JvdXBlZCIsInB1c2giLCJ4IiwiZ2V0VGltZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImFwcGxpY2F0aW9uIiwiY29ubmVjdCJdLCJtYXBw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TixnQkFRVW9ELE9BQU8sQ0FBQ3pDLE1BQVIsS0FBbUIsQ0FSN0I7QUFBQTtBQUFBO0FBQUE7O0FBU1F5QyxpQkFBTyxDQUFDQyxJQUFSLENBQWFsRCxJQUFiO0FBVFI7QUFBQTs7QUFBQTtBQVdjbUQsV0FYZCxHQVdrQm5ELElBQUksQ0FBQ0gsU0FBTCxDQUFldUQsT0FBZixLQUEyQkgsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXcEQsU0FBWCxDQUFxQnVELE9BQXJCLEVBWDdDOztBQUFBLGdCQVlZRCxDQUFDLElBQUlILFNBWmpCO0FBQUE7QUFBQTtBQUFBOztBQWFVQyxpQkFBTyxDQUFDQyxJQUFSLENBQWFsRCxJQUFiO0FBYlY7QUFBQTs7QUFBQTtBQUFBO0FBZVUsaUJBQU1pRCxPQUFOOztBQWZWO0FBZ0JVQSxpQkFBTyxHQUFHLENBQUNqRCxJQUFELENBQVY7O0FBaEJWO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxnQkFvQlFpRCxPQUFPLENBQUN6QyxNQUFSLEdBQWlCLENBcEJ6QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQXFCTSxpQkFBTXlDLE9BQU47O0FBckJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTBCQSxTQUFTSSxlQUFULENBQXlCQyxXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUVyQyxTQUFLLEVBQUVxQyxXQUFXLENBQUNyQztBQUFyQixHQUFQO0FBQ0Q7O0FBRWNzQywySEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJoRSxjQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNjI1NTNmZTkwMTkxM2I5MDJkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCwgSXRlbUluc3RhbmNlLCBXb3JsZCB9IGZyb20gJ3ByaXgtZml4ZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEZhQ29tbWVudCxcclxuICBGYUtleWJvYXJkLFxyXG4gIEZhTWljcm9waG9uZSxcclxuICBGYVF1ZXN0aW9uQ2lyY2xlLFxyXG4gIEZhU3RpY2t5Tm90ZSxcclxuICBGYVRodW1ic0Rvd24sXHJcbiAgRmFUaHVtYnNVcFxyXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIEhpc3RvcnlJdGVtLCBUZXh0U291cmNlLCBDb3JyZWN0bmVzcyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgSGlzdG9yeUl0ZW1Db250cm9sIGZyb20gJy4vaGlzdG9yeS1pdGVtLWNvbnRyb2wnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBoaXN0b3J5OiBIaXN0b3J5SXRlbVtdO1xyXG4gIHdvcmxkOiBXb3JsZDtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgaG92ZXI6IGJvb2xlYW5cclxufVxyXG5cclxuY2xhc3MgSGlzdG9yeUNvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgcGFuZWxFbmRSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgaXRlbUNvdW50ID0gMDtcclxuICBzY3JvbGxPblVwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckhpc3RvcnkodGhpcy5wcm9wcy5oaXN0b3J5KX1cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5wYW5lbEVuZFJlZn0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgIHRoaXMuc2Nyb2xsT25VcGRhdGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnNjcm9sbE9uVXBkYXRlKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgdGhpcy5zY3JvbGxPblVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVySGlzdG9yeShoaXN0b3J5OiBIaXN0b3J5SXRlbVtdKSB7XHJcbiAgICBpZiAodGhpcy5pdGVtQ291bnQgIT09IGhpc3RvcnkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuaXRlbUNvdW50ID0gaGlzdG9yeS5sZW5ndGg7XHJcbiAgICAgIHRoaXMuc2Nyb2xsT25VcGRhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ3JvdXBzID0gZ3JvdXBIaXN0b3J5SXRlbXMoaGlzdG9yeSk7XHJcbiAgICByZXR1cm4gWy4uLmdyb3Vwc10ubWFwKHRoaXMucmVuZGVySGlzdG9yeUdyb3VwKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckhpc3RvcnlHcm91cCA9IChncm91cDogSGlzdG9yeUl0ZW1bXSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5R3JvdXB9IGtleT17aW5kZXgudG9TdHJpbmcoKX0+XHJcbiAgICAgICAge2dyb3VwWzBdLnRpbWVzdGFtcC50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICB7IGdyb3VwLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxIaXN0b3J5SXRlbUNvbnRyb2wgaGlzdG9yeT17aXRlbX0ga2V5PXtpbmRleH0vPil9XHJcbiAgICAgICAgey8qIHtncm91cC5tYXAodGhpcy5yZW5kZXJIaXN0b3J5SXRlbSl9ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgLy8gcmVuZGVySGlzdG9yeUl0ZW0gPSAoaXRlbTogSGlzdG9yeUl0ZW0sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGlzdG9yeUl0ZW19IGtleT17J3gnICsgaW5kZXh9IG9uTW91c2VFbnRlcj17dGhpcy5vbk1vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17dGhpcy5vbk1vdXNlTGVhdmV9PlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGlzdG9yeUl0ZW1IZWFkZXJ9PlxyXG4gIC8vICAgICAgICAgeyByZW5kZXJDb3JyZWN0bmVzcyhpdGVtLmNvcnJlY3RuZXNzKSB9XHJcbiAgLy8gICAgICAgICB7IHJlbmRlclNvdXJjZShpdGVtLnNvdXJjZSApIH1cclxuICAvLyAgICAgICAgIDxiPntgJHtpdGVtLnRpbWVzdGFtcC50b0xvY2FsZVRpbWVTdHJpbmcoKX06IGB9PC9iPlxyXG4gIC8vICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogJzZweCd9fT48aT57aXRlbS50ZXh0fTwvaT48L3NwYW4+XHJcbiAgLy8gICAgICAgICB7LyogPGRpdiBzdHlsZT17e2ZsZXhHcm93OiAxfX0+PC9kaXY+ICovfVxyXG4gIC8vICAgICAgICAgeyByZW5kZXJOb3RlKGl0ZW0ubm90ZSl9XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAge3RoaXMucmVuZGVyQ2FydChpdGVtLmNhcnQpfVxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICByZW5kZXJDYXJ0KGNhcnQ6IENhcnQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGlzdG9yeUNhcnR9PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckl0ZW1MaXN0KGNhcnQuaXRlbXMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlckl0ZW1MaXN0KGl0ZW1zOiBJdGVtSW5zdGFuY2VbXSkge1xyXG4gICAgY29uc3QgcmVuZGVySXRlbSA9IChpdGVtOiBJdGVtSW5zdGFuY2UpID0+IHtcclxuICAgICAgY29uc3Qgc3BlY2lmaWMgPSB0aGlzLnByb3BzLndvcmxkLmNhdGFsb2cuZ2V0U3BlY2lmaWMoaXRlbS5rZXkpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEl0ZW19IGtleT17aXRlbS51aWR9PlxyXG4gICAgICAgICAge2Ake2l0ZW0ucXVhbnRpdHl9ICR7c3BlY2lmaWMubmFtZX0gKCR7c3BlY2lmaWMuc2t1fSlgfVxyXG4gICAgICAgICAge3RoaXMucmVuZGVySXRlbUxpc3QoaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBpdGVtcy5tYXAocmVuZGVySXRlbSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0JvdHRvbSgpIHtcclxuICAgIHRoaXMucGFuZWxFbmRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcImF1dG9cIiB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNvdXJjZShzb3VyY2U6IFRleHRTb3VyY2UpIHtcclxuICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhpc3RvcnlTb3VyY2V9PlxyXG4gICAgeyByZW5kZXJTb3VyY2VJY29uKHNvdXJjZSl9XHJcbiAgPC9zcGFuPilcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU291cmNlSWNvbihzb3VyY2U6IFRleHRTb3VyY2UpIHtcclxuICBzd2l0Y2ggKHNvdXJjZSkge1xyXG4gICAgY2FzZSBUZXh0U291cmNlLktFWUJPQVJEOlxyXG4gICAgICByZXR1cm4gPEZhS2V5Ym9hcmQvPjtcclxuICAgIGNhc2UgVGV4dFNvdXJjZS5NSUNST1BIT05FOlxyXG4gICAgICByZXR1cm4gPEZhTWljcm9waG9uZS8+O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDxGYVF1ZXN0aW9uQ2lyY2xlLz5cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvcnJlY3RuZXNzKGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcykge1xyXG4gIHJldHVybiAoPGRpdj57cmVuZGVyQ29ycmVjdG5lc3NJY29uKGNvcnJlY3RuZXNzKX08L2Rpdj4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb3JyZWN0bmVzc0ljb24oY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzKSB7XHJcbiAgc3dpdGNoIChjb3JyZWN0bmVzcykge1xyXG4gICAgY2FzZSBDb3JyZWN0bmVzcy5DT1JSRUNUOlxyXG4gICAgICByZXR1cm4gPEZhVGh1bWJzVXAgc3R5bGU9e3tjb2xvcjogJ2dyZWVuJ319Lz47XHJcbiAgICBjYXNlIENvcnJlY3RuZXNzLklOQ09SUkVDVDpcclxuICAgICAgcmV0dXJuIDxGYVRodW1ic0Rvd24gc3R5bGU9e3tjb2xvcjogJ3JlZCd9fS8+O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDxGYVF1ZXN0aW9uQ2lyY2xlIHN0eWxlPXt7Y29sb3I6ICdsaWdodGdyYXknfX0vPjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck5vdGUobm90ZT86IHN0cmluZykge1xyXG4gIGlmIChub3RlKSB7XHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnNHB4J319PjxGYUNvbW1lbnQgc3R5bGU9e3tjb2xvcjogJyNmZmQ2OTknfX0vPjwvZGl2PjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBUSFJFU0hPTEQgPSAxMDAwKjYwOyAgLy8gNjAgc2Vjb25kc1xyXG5mdW5jdGlvbiogZ3JvdXBIaXN0b3J5SXRlbXMoXHJcbiAgaXRlbXM6IEhpc3RvcnlJdGVtW11cclxuKTogSXRlcmFibGVJdGVyYXRvcjxIaXN0b3J5SXRlbVtdPiB7XHJcbiAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgIGxldCBncm91cGVkOiBIaXN0b3J5SXRlbVtdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgIGl0ZW0udGltZXN0YW1wXHJcbiAgICAgIGlmIChncm91cGVkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGdyb3VwZWQucHVzaChpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB4ID0gaXRlbS50aW1lc3RhbXAuZ2V0VGltZSgpIC0gZ3JvdXBlZFswXS50aW1lc3RhbXAuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmICh4IDw9IFRIUkVTSE9MRCkge1xyXG4gICAgICAgICAgZ3JvdXBlZC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB5aWVsZCBncm91cGVkO1xyXG4gICAgICAgICAgZ3JvdXBlZCA9IFtpdGVtXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChncm91cGVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgeWllbGQgZ3JvdXBlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IHdvcmxkOiBhcHBsaWNhdGlvbi53b3JsZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGlzdG9yeUNvbnRyb2wpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9