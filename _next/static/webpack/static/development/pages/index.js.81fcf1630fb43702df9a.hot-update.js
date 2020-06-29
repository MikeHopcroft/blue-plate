webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/history-item-control.tsx":
/*!*********************************************!*\
  !*** ./components/history-item-control.tsx ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Popover */ "./node_modules/react-bootstrap/esm/Popover.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\history-item-control.tsx",
    _this3 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









;

var HistoryItemControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(HistoryItemControl, _React$Component);

  var _super = _createSuper(HistoryItemControl);

  function HistoryItemControl(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HistoryItemControl);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "panelEndRef", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "itemCount", 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "scrollOnUpdate", false);

    _this.onMouseEnter = _this.onMouseEnter.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onMouseLeave = _this.onMouseLeave.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      hover: false
    }; // this.state = {
    //   isHovering: false,
    // };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HistoryItemControl, [{
    key: "onMouseEnter",
    value: function onMouseEnter(x) {
      // console.log(`enter`);
      // console.log(this);
      this.setState({
        hover: true
      });
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      // console.log(`leave`);
      this.setState({
        hover: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.props.history;
      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.historyItem,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave // style={this.state.hover?{backgroundColor: 'gray'}:{}}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.historyItemHeader,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }, renderCorrectness(this.state.hover, item.correctness), renderSource(item.source), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      }, "".concat(item.timestamp.toLocaleTimeString(), ": ")), __jsx("span", {
        style: {
          paddingLeft: '6px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, __jsx("i", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 48
        }
      }, item.text)), renderNote(this.state.hover, item.note)), this.renderCart(item.cart));
    }
  }, {
    key: "renderCart",
    value: function renderCart(cart) {
      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.historyCart,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
            lineNumber: 97,
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

  return HistoryItemControl;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

function renderSource(source) {
  return __jsx("span", {
    className: _controls_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.historySource,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, renderSourceIcon(source));
}

function renderSourceIcon(source) {
  switch (source) {
    case _actions__WEBPACK_IMPORTED_MODULE_13__["TextSource"].KEYBOARD:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaKeyboard"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 14
        }
      });

    case _actions__WEBPACK_IMPORTED_MODULE_13__["TextSource"].MICROPHONE:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaMicrophone"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 14
        }
      });

    default:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaQuestionCircle"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 14
        }
      });
  }
}

var CustomToggle = react__WEBPACK_IMPORTED_MODULE_7___default.a.forwardRef(_c = function _c(_ref, ref) {
  var children = _ref.children,
      _onClick = _ref.onClick;
  return __jsx("a", {
    href: "",
    ref: ref,
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick(e);
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, children);
});
_c2 = CustomToggle;

function renderCorrectness(hover, correctness) {
  if (hover) {
    return __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Toggle, {
      as: CustomToggle,
      id: "dropdown-basic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }, renderCorrectnessIcon(hover, correctness)), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Menu, {
      style: {
        minWidth: '1rem',
        padding: '0px 2px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
      href: "#/action-1",
      style: {
        padding: '1px 1ex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaThumbsUp"], {
      style: {
        color: 'green'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 75
      }
    })), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
      href: "#/action-2",
      style: {
        padding: '1px 1ex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaThumbsDown"], {
      style: {
        color: 'red'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 75
      }
    })), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
      href: "#/action-3",
      style: {
        padding: '1px 1ex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaQuestionCircle"], {
      style: {
        color: 'lightgray'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 75
      }
    }))));
  } else {
    return __jsx("div", {
      className: "dropdown",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 12
      }
    }, renderCorrectnessIcon(hover, correctness));
  }
}

function renderCorrectnessIcon(hover, correctness) {
  switch (correctness) {
    case _actions__WEBPACK_IMPORTED_MODULE_13__["Correctness"].CORRECT:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaThumbsUp"], {
        style: {
          color: 'green'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 14
        }
      });

    case _actions__WEBPACK_IMPORTED_MODULE_13__["Correctness"].INCORRECT:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaThumbsDown"], {
        style: {
          color: 'red'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 14
        }
      });

    default:
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaQuestionCircle"], {
        style: hover ? {
          color: 'lightgray'
        } : {
          color: 'white'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 14
        }
      });
  }
}

function renderNote(hover, note) {
  var style = note ? {
    color: '#ffd699'
  } : {
    color: 'lightgray'
  };
  var icon = note ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaComment"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 23
    }
  }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaRegComment"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 52
    }
  });

  if (hover) {
    var popover = __jsx(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "popover-basic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_10__["default"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }
    }, __jsx("textarea", {
      rows: 5,
      cols: 50,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    }, "Wrong number of lattes.")));

    return __jsx(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9__["default"], {
      trigger: "click",
      placement: "right",
      overlay: popover,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 7
      }
    }, icon);
  } else if (note) {
    return icon;
  } else {
    return null;
  }
}

function mapStateToProps(application) {
  return {
    world: application.world
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(HistoryItemControl));

var _c, _c2;

$RefreshReg$(_c, "CustomToggle$React.forwardRef");
$RefreshReg$(_c2, "CustomToggle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnktaXRlbS1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJIaXN0b3J5SXRlbUNvbnRyb2wiLCJwcm9wcyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwib25Nb3VzZUVudGVyIiwiYmluZCIsIm9uTW91c2VMZWF2ZSIsInN0YXRlIiwiaG92ZXIiLCJ4Iiwic2V0U3RhdGUiLCJpdGVtIiwiaGlzdG9yeSIsInN0eWxlcyIsImhpc3RvcnlJdGVtIiwiaGlzdG9yeUl0ZW1IZWFkZXIiLCJyZW5kZXJDb3JyZWN0bmVzcyIsImNvcnJlY3RuZXNzIiwicmVuZGVyU291cmNlIiwic291cmNlIiwidGltZXN0YW1wIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwicGFkZGluZ0xlZnQiLCJ0ZXh0IiwicmVuZGVyTm90ZSIsIm5vdGUiLCJyZW5kZXJDYXJ0IiwiY2FydCIsImhpc3RvcnlDYXJ0IiwicmVuZGVySXRlbUxpc3QiLCJpdGVtcyIsInJlbmRlckl0ZW0iLCJzcGVjaWZpYyIsIndvcmxkIiwiY2F0YWxvZyIsImdldFNwZWNpZmljIiwia2V5IiwiY2FydEl0ZW0iLCJ1aWQiLCJxdWFudGl0eSIsIm5hbWUiLCJza3UiLCJjaGlsZHJlbiIsIm1hcCIsInBhbmVsRW5kUmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJDb21wb25lbnQiLCJoaXN0b3J5U291cmNlIiwicmVuZGVyU291cmNlSWNvbiIsIlRleHRTb3VyY2UiLCJLRVlCT0FSRCIsIk1JQ1JPUEhPTkUiLCJDdXN0b21Ub2dnbGUiLCJmb3J3YXJkUmVmIiwicmVmIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlckNvcnJlY3RuZXNzSWNvbiIsIm1pbldpZHRoIiwicGFkZGluZyIsImNvbG9yIiwiQ29ycmVjdG5lc3MiLCJDT1JSRUNUIiwiSU5DT1JSRUNUIiwic3R5bGUiLCJpY29uIiwicG9wb3ZlciIsIm1hcFN0YXRlVG9Qcm9wcyIsImFwcGxpY2F0aW9uIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBRUE7QUFFQTtBQUtDOztJQU1LQSxrQjs7Ozs7QUFLSiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsc05BSkxDLDRDQUFLLENBQUNDLFNBQU4sRUFJSzs7QUFBQSxvTkFIUCxDQUdPOztBQUFBLHlOQUZGLEtBRUU7O0FBRWpCLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQix5R0FBcEI7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFFO0FBREksS0FBYixDQUppQixDQU9qQjtBQUNBO0FBQ0E7O0FBVGlCO0FBVWxCOzs7O2lDQUVZQyxDLEVBQWlEO0FBQzVEO0FBQ0E7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFBRUYsYUFBSyxFQUFFO0FBQVQsT0FBZDtBQUNEOzs7bUNBRWM7QUFDYjtBQUNBLFdBQUtFLFFBQUwsQ0FBYztBQUFFRixhQUFLLEVBQUU7QUFBVCxPQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1HLElBQUksR0FBRyxLQUFLVixLQUFMLENBQVdXLE9BQXhCO0FBQ0EsYUFDRTtBQUNFLGlCQUFTLEVBQUVDLDREQUFNLENBQUNDLFdBRHBCO0FBRUUsb0JBQVksRUFBRSxLQUFLVixZQUZyQjtBQUdFLG9CQUFZLEVBQUUsS0FBS0UsWUFIckIsQ0FJQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNRTtBQUFLLGlCQUFTLEVBQUVPLDREQUFNLENBQUNFLGlCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dDLGlCQUFpQixDQUFDLEtBQUtULEtBQUwsQ0FBV0MsS0FBWixFQUFtQkcsSUFBSSxDQUFDTSxXQUF4QixDQURwQixFQUVHQyxZQUFZLENBQUNQLElBQUksQ0FBQ1EsTUFBTixDQUZmLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBT1IsSUFBSSxDQUFDUyxTQUFMLENBQWVDLGtCQUFmLEVBQVAsUUFIRixFQUlFO0FBQU0sYUFBSyxFQUFFO0FBQUVDLHFCQUFXLEVBQUU7QUFBZixTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJWCxJQUFJLENBQUNZLElBQVQsQ0FBckMsQ0FKRixFQU9JQyxVQUFVLENBQUMsS0FBS2pCLEtBQUwsQ0FBV0MsS0FBWixFQUFtQkcsSUFBSSxDQUFDYyxJQUF4QixDQVBkLENBTkYsRUFlRyxLQUFLQyxVQUFMLENBQWdCZixJQUFJLENBQUNnQixJQUFyQixDQWZILENBREY7QUFtQkQ7OzsrQkFFVUEsSSxFQUFZO0FBQ3JCLGFBQ0U7QUFBSyxpQkFBUyxFQUFFZCw0REFBTSxDQUFDZSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS0MsY0FBTCxDQUFvQkYsSUFBSSxDQUFDRyxLQUF6QixDQURILENBREY7QUFLRDs7O21DQUVjQSxLLEVBQXVCO0FBQUE7O0FBQ3BDLFVBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNwQixJQUFELEVBQXdCO0FBQ3pDLFlBQU1xQixRQUFRLEdBQUcsTUFBSSxDQUFDL0IsS0FBTCxDQUFXZ0MsS0FBWCxDQUFpQkMsT0FBakIsQ0FBeUJDLFdBQXpCLENBQXFDeEIsSUFBSSxDQUFDeUIsR0FBMUMsQ0FBakI7O0FBQ0EsZUFDRTtBQUFLLG1CQUFTLEVBQUV2Qiw0REFBTSxDQUFDd0IsUUFBdkI7QUFBaUMsYUFBRyxFQUFFMUIsSUFBSSxDQUFDMkIsR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTTNCLElBQUksQ0FBQzRCLFFBRFgsY0FDdUJQLFFBQVEsQ0FBQ1EsSUFEaEMsZUFDeUNSLFFBQVEsQ0FBQ1MsR0FEbEQsUUFFRyxNQUFJLENBQUNaLGNBQUwsQ0FBb0JsQixJQUFJLENBQUMrQixRQUF6QixDQUZILENBREY7QUFNRCxPQVJEOztBQVVBLGFBQU9aLEtBQUssQ0FBQ2EsR0FBTixDQUFVWixVQUFWLENBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUthLFdBQUwsQ0FBaUJDLE9BQWpCLENBQXlCQyxjQUF6QixDQUF3QztBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBeEM7QUFDRDs7OztFQTNFOEI3Qyw0Q0FBSyxDQUFDOEMsUzs7QUE4RXZDLFNBQVM5QixZQUFULENBQXNCQyxNQUF0QixFQUEwQztBQUN4QyxTQUFRO0FBQU0sYUFBUyxFQUFFTiw0REFBTSxDQUFDb0MsYUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMQyxnQkFBZ0IsQ0FBQy9CLE1BQUQsQ0FEWCxDQUFSO0FBR0Q7O0FBRUQsU0FBUytCLGdCQUFULENBQTBCL0IsTUFBMUIsRUFBOEM7QUFDNUMsVUFBUUEsTUFBUjtBQUNFLFNBQUtnQyxvREFBVSxDQUFDQyxRQUFoQjtBQUNFLGFBQU8sTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0YsU0FBS0Qsb0RBQVUsQ0FBQ0UsVUFBaEI7QUFDRSxhQUFPLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUNGO0FBQ0UsYUFBTyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQU5KO0FBUUQ7O0FBRUQsSUFBTUMsWUFBWSxHQUFHcEQsNENBQUssQ0FBQ3FELFVBQU4sTUFNbkIsa0JBQXdCQyxHQUF4QixFQUFnQztBQUFBLE1BQTdCZCxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxNQUFuQmUsUUFBbUIsUUFBbkJBLE9BQW1CO0FBQ2hDLFNBQ0U7QUFDRSxRQUFJLEVBQUMsRUFEUDtBQUVFLE9BQUcsRUFBRUQsR0FGUDtBQUdFLFdBQU8sRUFBRSxpQkFBQ0UsQ0FBRCxFQUFPO0FBQ2RBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQUYsY0FBTyxDQUFDQyxDQUFELENBQVA7QUFDRCxLQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR2hCLFFBUkgsQ0FERjtBQVlELENBbkJvQixDQUFyQjtNQUFNWSxZOztBQXFCTixTQUFTdEMsaUJBQVQsQ0FBMkJSLEtBQTNCLEVBQTJDUyxXQUEzQyxFQUFxRTtBQUNuRSxNQUFJVCxLQUFKLEVBQVc7QUFDVCxXQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0VBQUQsQ0FBVSxNQUFWO0FBQWlCLFFBQUUsRUFBRThDLFlBQXJCO0FBQW1DLFFBQUUsRUFBQyxnQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHTSxxQkFBcUIsQ0FBQ3BELEtBQUQsRUFBUVMsV0FBUixDQUR4QixDQURGLEVBS0UsTUFBQyxnRUFBRCxDQUFVLElBQVY7QUFBZSxXQUFLLEVBQUU7QUFBRTRDLGdCQUFRLEVBQUUsTUFBWjtBQUFvQkMsZUFBTyxFQUFFO0FBQTdCLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdFQUFELENBQVUsSUFBVjtBQUFlLFVBQUksRUFBQyxZQUFwQjtBQUFpQyxXQUFLLEVBQUU7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnRSxNQUFDLDBEQUFEO0FBQVksV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBaEUsQ0FERixFQUVFLE1BQUMsZ0VBQUQsQ0FBVSxJQUFWO0FBQWUsVUFBSSxFQUFDLFlBQXBCO0FBQWlDLFdBQUssRUFBRTtBQUFFRCxlQUFPLEVBQUU7QUFBWCxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdFLE1BQUMsNERBQUQ7QUFBYyxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoRSxDQUZGLEVBR0UsTUFBQyxnRUFBRCxDQUFVLElBQVY7QUFBZSxVQUFJLEVBQUMsWUFBcEI7QUFBaUMsV0FBSyxFQUFFO0FBQUVELGVBQU8sRUFBRTtBQUFYLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0UsTUFBQyxnRUFBRDtBQUFrQixXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoRSxDQUhGLENBTEYsQ0FERjtBQWFELEdBZEQsTUFjTztBQUNMLFdBQU87QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCSCxxQkFBcUIsQ0FBQ3BELEtBQUQsRUFBUVMsV0FBUixDQUFoRCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTMkMscUJBQVQsQ0FBK0JwRCxLQUEvQixFQUErQ1MsV0FBL0MsRUFBeUU7QUFDdkUsVUFBUUEsV0FBUjtBQUNFLFNBQUsrQyxxREFBVyxDQUFDQyxPQUFqQjtBQUNFLGFBQU8sTUFBQywwREFBRDtBQUFZLGFBQUssRUFBRTtBQUFFRixlQUFLLEVBQUU7QUFBVCxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0YsU0FBS0MscURBQVcsQ0FBQ0UsU0FBakI7QUFDRSxhQUFPLE1BQUMsNERBQUQ7QUFBYyxhQUFLLEVBQUU7QUFBRUgsZUFBSyxFQUFFO0FBQVQsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUNGO0FBQ0UsYUFBTyxNQUFDLGdFQUFEO0FBQWtCLGFBQUssRUFBRXZELEtBQUssR0FBRztBQUFFdUQsZUFBSyxFQUFFO0FBQVQsU0FBSCxHQUE0QjtBQUFFQSxlQUFLLEVBQUU7QUFBVCxTQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFOSjtBQVFEOztBQUVELFNBQVN2QyxVQUFULENBQW9CaEIsS0FBcEIsRUFBb0NpQixJQUFwQyxFQUFtRDtBQUNqRCxNQUFNMEMsS0FBSyxHQUFHMUMsSUFBSSxHQUFHO0FBQUVzQyxTQUFLLEVBQUU7QUFBVCxHQUFILEdBQTBCO0FBQUVBLFNBQUssRUFBRTtBQUFULEdBQTVDO0FBQ0EsTUFBTUssSUFBSSxHQUFHM0MsSUFBSSxHQUFHLE1BQUMseURBQUQ7QUFBVyxTQUFLLEVBQUUwQyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBZ0MsTUFBQyw0REFBRDtBQUFjLFNBQUssRUFBRUEsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFqRDs7QUFFQSxNQUFJM0QsS0FBSixFQUFXO0FBQ1QsUUFBTTZELE9BQU8sR0FDWCxNQUFDLGdFQUFEO0FBQVMsUUFBRSxFQUFDLGVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFLE1BQUMsZ0VBQUQsQ0FBUyxPQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFVLFVBQUksRUFBRSxDQUFoQjtBQUFtQixVQUFJLEVBQUUsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixDQUZGLENBREY7O0FBV0EsV0FDRSxNQUFDLHNFQUFEO0FBQWdCLGFBQU8sRUFBQyxPQUF4QjtBQUFnQyxlQUFTLEVBQUMsT0FBMUM7QUFBa0QsYUFBTyxFQUFFQSxPQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELElBREgsQ0FERjtBQUtELEdBakJELE1BaUJPLElBQUkzQyxJQUFKLEVBQVU7QUFDZixXQUFPMkMsSUFBUDtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0UsZUFBVCxDQUF5QkMsV0FBekIsRUFBd0Q7QUFDdEQsU0FBTztBQUFFdEMsU0FBSyxFQUFFc0MsV0FBVyxDQUFDdEM7QUFBckIsR0FBUDtBQUNEOztBQUVjdUMsMkhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCdEUsa0JBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjgxZmNmMTYzMGZiNDM3MDJkZjlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0LCBJdGVtSW5zdGFuY2UsIFdvcmxkIH0gZnJvbSAncHJpeC1maXhlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bic7XHJcbmltcG9ydCBPdmVybGF5VHJpZ2dlciBmcm9tICdyZWFjdC1ib290c3RyYXAvT3ZlcmxheVRyaWdnZXInO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tICdyZWFjdC1ib290c3RyYXAvUG9wb3Zlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIEZhQ29tbWVudCxcclxuICBGYUtleWJvYXJkLFxyXG4gIEZhTWljcm9waG9uZSxcclxuICBGYVF1ZXN0aW9uQ2lyY2xlLFxyXG4gIEZhUmVnQ29tbWVudCxcclxuICBGYVN0aWNreU5vdGUsXHJcbiAgRmFUaHVtYnNEb3duLFxyXG4gIEZhVGh1bWJzVXBcclxufSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCBIaXN0b3J5SXRlbSwgVGV4dFNvdXJjZSwgQ29ycmVjdG5lc3MgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBoaXN0b3J5OiBIaXN0b3J5SXRlbTtcclxuICB3b3JsZDogV29ybGQ7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGhvdmVyOiBib29sZWFuXHJcbn1cclxuXHJcbmNsYXNzIEhpc3RvcnlJdGVtQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBwYW5lbEVuZFJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBpdGVtQ291bnQgPSAwO1xyXG4gIHNjcm9sbE9uVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLm9uTW91c2VFbnRlciA9IHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VMZWF2ZSA9IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBob3ZlcjogZmFsc2VcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAvLyAgIGlzSG92ZXJpbmc6IGZhbHNlLFxyXG4gICAgLy8gfTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VFbnRlcih4OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50Pikge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGVudGVyYCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBsZWF2ZWApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnByb3BzLmhpc3Rvcnk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGlzdG9yeUl0ZW19XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLm9uTW91c2VFbnRlcn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMub25Nb3VzZUxlYXZlfVxyXG4gICAgICAvLyBzdHlsZT17dGhpcy5zdGF0ZS5ob3Zlcj97YmFja2dyb3VuZENvbG9yOiAnZ3JheSd9Ont9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5SXRlbUhlYWRlcn0+XHJcbiAgICAgICAgICB7cmVuZGVyQ29ycmVjdG5lc3ModGhpcy5zdGF0ZS5ob3ZlciwgaXRlbS5jb3JyZWN0bmVzcyl9XHJcbiAgICAgICAgICB7cmVuZGVyU291cmNlKGl0ZW0uc291cmNlKX1cclxuICAgICAgICAgIDxiPntgJHtpdGVtLnRpbWVzdGFtcC50b0xvY2FsZVRpbWVTdHJpbmcoKX06IGB9PC9iPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICc2cHgnIH19PjxpPntpdGVtLnRleHR9PC9pPjwvc3Bhbj5cclxuICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7ZmxleEdyb3c6IDF9fT48L2Rpdj4gKi99XHJcbiAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUuaG92ZXIgfHwgaXRlbS5ub3RlID8gcmVuZGVyTm90ZShpdGVtLm5vdGUpIDogbnVsbH0gKi99XHJcbiAgICAgICAgICB7IHJlbmRlck5vdGUodGhpcy5zdGF0ZS5ob3ZlciwgaXRlbS5ub3RlKSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RoaXMucmVuZGVyQ2FydChpdGVtLmNhcnQpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDYXJ0KGNhcnQ6IENhcnQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGlzdG9yeUNhcnR9PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckl0ZW1MaXN0KGNhcnQuaXRlbXMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlckl0ZW1MaXN0KGl0ZW1zOiBJdGVtSW5zdGFuY2VbXSkge1xyXG4gICAgY29uc3QgcmVuZGVySXRlbSA9IChpdGVtOiBJdGVtSW5zdGFuY2UpID0+IHtcclxuICAgICAgY29uc3Qgc3BlY2lmaWMgPSB0aGlzLnByb3BzLndvcmxkLmNhdGFsb2cuZ2V0U3BlY2lmaWMoaXRlbS5rZXkpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEl0ZW19IGtleT17aXRlbS51aWR9PlxyXG4gICAgICAgICAge2Ake2l0ZW0ucXVhbnRpdHl9ICR7c3BlY2lmaWMubmFtZX0gKCR7c3BlY2lmaWMuc2t1fSlgfVxyXG4gICAgICAgICAge3RoaXMucmVuZGVySXRlbUxpc3QoaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbXMubWFwKHJlbmRlckl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9Cb3R0b20oKSB7XHJcbiAgICB0aGlzLnBhbmVsRW5kUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJhdXRvXCIgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTb3VyY2Uoc291cmNlOiBUZXh0U291cmNlKSB7XHJcbiAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5U291cmNlfT5cclxuICAgIHtyZW5kZXJTb3VyY2VJY29uKHNvdXJjZSl9XHJcbiAgPC9zcGFuPilcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU291cmNlSWNvbihzb3VyY2U6IFRleHRTb3VyY2UpIHtcclxuICBzd2l0Y2ggKHNvdXJjZSkge1xyXG4gICAgY2FzZSBUZXh0U291cmNlLktFWUJPQVJEOlxyXG4gICAgICByZXR1cm4gPEZhS2V5Ym9hcmQgLz47XHJcbiAgICBjYXNlIFRleHRTb3VyY2UuTUlDUk9QSE9ORTpcclxuICAgICAgcmV0dXJuIDxGYU1pY3JvcGhvbmUgLz47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gPEZhUXVlc3Rpb25DaXJjbGUgLz5cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEN1c3RvbVRvZ2dsZSA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgSFRNTEFuY2hvckVsZW1lbnQsXHJcbiAge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSxcclxuICAgIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkXHJcbiAgfVxyXG4+KCh7IGNoaWxkcmVuLCBvbkNsaWNrIH0sIHJlZikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPVwiXCJcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9uQ2xpY2soZSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYT5cclxuICApXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29ycmVjdG5lc3MoaG92ZXI6IGJvb2xlYW4sIGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcykge1xyXG4gIGlmIChob3Zlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e0N1c3RvbVRvZ2dsZX0gaWQ9XCJkcm9wZG93bi1iYXNpY1wiPlxyXG4gICAgICAgICAge3JlbmRlckNvcnJlY3RuZXNzSWNvbihob3ZlciwgY29ycmVjdG5lc3MpfVxyXG4gICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG5cclxuICAgICAgICA8RHJvcGRvd24uTWVudSBzdHlsZT17eyBtaW5XaWR0aDogJzFyZW0nLCBwYWRkaW5nOiAnMHB4IDJweCcgfX0+XHJcbiAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiIHN0eWxlPXt7IHBhZGRpbmc6ICcxcHggMWV4JyB9fT48RmFUaHVtYnNVcCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fSAvPjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0yXCIgc3R5bGU9e3sgcGFkZGluZzogJzFweCAxZXgnIH19PjxGYVRodW1ic0Rvd24gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19IC8+PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIiBzdHlsZT17eyBwYWRkaW5nOiAnMXB4IDFleCcgfX0+PEZhUXVlc3Rpb25DaXJjbGUgc3R5bGU9e3sgY29sb3I6ICdsaWdodGdyYXknIH19IC8+PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgPC9Ecm9wZG93bj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24nPntyZW5kZXJDb3JyZWN0bmVzc0ljb24oaG92ZXIsIGNvcnJlY3RuZXNzKX08L2Rpdj47XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb3JyZWN0bmVzc0ljb24oaG92ZXI6IGJvb2xlYW4sIGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcykge1xyXG4gIHN3aXRjaCAoY29ycmVjdG5lc3MpIHtcclxuICAgIGNhc2UgQ29ycmVjdG5lc3MuQ09SUkVDVDpcclxuICAgICAgcmV0dXJuIDxGYVRodW1ic1VwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19IC8+O1xyXG4gICAgY2FzZSBDb3JyZWN0bmVzcy5JTkNPUlJFQ1Q6XHJcbiAgICAgIHJldHVybiA8RmFUaHVtYnNEb3duIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fSAvPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiA8RmFRdWVzdGlvbkNpcmNsZSBzdHlsZT17aG92ZXIgPyB7IGNvbG9yOiAnbGlnaHRncmF5JyB9IDogeyBjb2xvcjogJ3doaXRlJyB9fSAvPjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck5vdGUoaG92ZXI6IGJvb2xlYW4sIG5vdGU/OiBzdHJpbmcpIHtcclxuICBjb25zdCBzdHlsZSA9IG5vdGUgPyB7IGNvbG9yOiAnI2ZmZDY5OScgfSA6IHsgY29sb3I6ICdsaWdodGdyYXknfTtcclxuICBjb25zdCBpY29uID0gbm90ZSA/IDxGYUNvbW1lbnQgc3R5bGU9e3N0eWxlfS8+IDogPEZhUmVnQ29tbWVudCBzdHlsZT17c3R5bGV9Lz47XHJcblxyXG4gIGlmIChob3Zlcikge1xyXG4gICAgY29uc3QgcG9wb3ZlciA9IChcclxuICAgICAgPFBvcG92ZXIgaWQ9XCJwb3BvdmVyLWJhc2ljXCI+XHJcbiAgICAgICAgey8qIDxQb3BvdmVyLlRpdGxlIGFzPVwiaDNcIj5Db21tZW50IGhlcmU8L1BvcG92ZXIuVGl0bGU+ICovfVxyXG4gICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgcm93cz17NX0gY29scz17NTB9PlxyXG4gICAgICAgICAgICBXcm9uZyBudW1iZXIgb2YgbGF0dGVzLlxyXG4gICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8T3ZlcmxheVRyaWdnZXIgdHJpZ2dlcj1cImNsaWNrXCIgcGxhY2VtZW50PVwicmlnaHRcIiBvdmVybGF5PXtwb3BvdmVyfT5cclxuICAgICAgICB7aWNvbn1cclxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgIClcclxuICB9IGVsc2UgaWYgKG5vdGUpIHtcclxuICAgIHJldHVybiBpY29uO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IHdvcmxkOiBhcHBsaWNhdGlvbi53b3JsZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGlzdG9yeUl0ZW1Db250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==