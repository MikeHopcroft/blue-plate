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
          lineNumber: 57,
          columnNumber: 7
        }
      }, group[0].timestamp.toLocaleDateString(), group.map(function (item, index) {
        return __jsx(_history_item_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
          history: item,
          key: index,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
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
          lineNumber: 27,
          columnNumber: 7
        }
      }, this.renderHistory(this.props.history), __jsx("div", {
        ref: this.panelEndRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
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
    value: function scrollToBottom() {
      this.panelEndRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
  }]);

  return HistoryControl;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnktY29udHJvbC50c3giXSwibmFtZXMiOlsiZ3JvdXBIaXN0b3J5SXRlbXMiLCJIaXN0b3J5Q29udHJvbCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZ3JvdXAiLCJpbmRleCIsInN0eWxlcyIsImhpc3RvcnlHcm91cCIsInRvU3RyaW5nIiwidGltZXN0YW1wIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibWFwIiwiaXRlbSIsInJlbmRlckhpc3RvcnkiLCJwcm9wcyIsImhpc3RvcnkiLCJwYW5lbEVuZFJlZiIsInNjcm9sbFRvQm90dG9tIiwic2Nyb2xsT25VcGRhdGUiLCJpdGVtQ291bnQiLCJsZW5ndGgiLCJncm91cHMiLCJyZW5kZXJIaXN0b3J5R3JvdXAiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkNvbXBvbmVudCIsIlRIUkVTSE9MRCIsIml0ZW1zIiwiZ3JvdXBlZCIsInB1c2giLCJ4IiwiZ2V0VGltZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImFwcGxpY2F0aW9uIiwid29ybGQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBcUVVQSxpQjs7Ozs7Ozs7Ozs7O0FBcEVWO0FBQ0E7QUFJQTtBQUVBO0FBS0M7O0lBTUtDLGM7Ozs7Ozs7Ozs7Ozs7Ozs7c05BQ1VDLDRDQUFLLENBQUNDLFNBQU4sRTs7b05BQ0YsQzs7eU5BQ0ssSzs7Nk5BZ0NJLFVBQUNDLEtBQUQsRUFBdUJDLEtBQXZCLEVBQXlDO0FBQzVELGFBQ0U7QUFBSyxpQkFBUyxFQUFFQyw0REFBTSxDQUFDQyxZQUF2QjtBQUFxQyxXQUFHLEVBQUVGLEtBQUssQ0FBQ0csUUFBTixFQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dKLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssU0FBVCxDQUFtQkMsa0JBQW5CLEVBREgs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LFNBQUssRUFBRUQsV0FBVyxDQUFDQztBQUFyQixHQUFQO0FBQ0Q7O0FBRWNDLDJIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QmhDLGNBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjcyMzY4NjlhNzEyOWI1ODgxNGVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JsZCB9IGZyb20gJ3ByaXgtZml4ZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIEhpc3RvcnlJdGVtIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBIaXN0b3J5SXRlbUNvbnRyb2wgZnJvbSAnLi9oaXN0b3J5LWl0ZW0tY29udHJvbCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGhpc3Rvcnk6IEhpc3RvcnlJdGVtW107XHJcbiAgd29ybGQ6IFdvcmxkO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBob3ZlcjogYm9vbGVhblxyXG59XHJcblxyXG5jbGFzcyBIaXN0b3J5Q29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBwYW5lbEVuZFJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBpdGVtQ291bnQgPSAwO1xyXG4gIHNjcm9sbE9uVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucmVuZGVySGlzdG9yeSh0aGlzLnByb3BzLmhpc3RvcnkpfVxyXG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLnBhbmVsRW5kUmVmfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgdGhpcy5zY3JvbGxPblVwZGF0ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsT25VcGRhdGUpIHtcclxuICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICB0aGlzLnNjcm9sbE9uVXBkYXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJIaXN0b3J5KGhpc3Rvcnk6IEhpc3RvcnlJdGVtW10pIHtcclxuICAgIGlmICh0aGlzLml0ZW1Db3VudCAhPT0gaGlzdG9yeS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5pdGVtQ291bnQgPSBoaXN0b3J5Lmxlbmd0aDtcclxuICAgICAgdGhpcy5zY3JvbGxPblVwZGF0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBncm91cHMgPSBncm91cEhpc3RvcnlJdGVtcyhoaXN0b3J5KTtcclxuICAgIHJldHVybiBbLi4uZ3JvdXBzXS5tYXAodGhpcy5yZW5kZXJIaXN0b3J5R3JvdXApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySGlzdG9yeUdyb3VwID0gKGdyb3VwOiBIaXN0b3J5SXRlbVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpc3RvcnlHcm91cH0ga2V5PXtpbmRleC50b1N0cmluZygpfT5cclxuICAgICAgICB7Z3JvdXBbMF0udGltZXN0YW1wLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgIHsgZ3JvdXAubWFwKChpdGVtLCBpbmRleCkgPT4gPEhpc3RvcnlJdGVtQ29udHJvbCBoaXN0b3J5PXtpdGVtfSBrZXk9e2luZGV4fS8+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0JvdHRvbSgpIHtcclxuICAgIHRoaXMucGFuZWxFbmRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcImF1dG9cIiB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFRIUkVTSE9MRCA9IDEwMDAqNjA7ICAvLyA2MCBzZWNvbmRzXHJcbmZ1bmN0aW9uKiBncm91cEhpc3RvcnlJdGVtcyhcclxuICBpdGVtczogSGlzdG9yeUl0ZW1bXVxyXG4pOiBJdGVyYWJsZUl0ZXJhdG9yPEhpc3RvcnlJdGVtW10+IHtcclxuICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgbGV0IGdyb3VwZWQ6IEhpc3RvcnlJdGVtW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgaXRlbS50aW1lc3RhbXBcclxuICAgICAgaWYgKGdyb3VwZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZ3JvdXBlZC5wdXNoKGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHggPSBpdGVtLnRpbWVzdGFtcC5nZXRUaW1lKCkgLSBncm91cGVkWzBdLnRpbWVzdGFtcC5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKHggPD0gVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICBncm91cGVkLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHlpZWxkIGdyb3VwZWQ7XHJcbiAgICAgICAgICBncm91cGVkID0gW2l0ZW1dO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGdyb3VwZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICB5aWVsZCBncm91cGVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgd29ybGQ6IGFwcGxpY2F0aW9uLndvcmxkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIaXN0b3J5Q29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=