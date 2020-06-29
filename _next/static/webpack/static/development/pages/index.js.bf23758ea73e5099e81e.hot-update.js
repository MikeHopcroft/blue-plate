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

  if (true) {
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
      cols: 20,
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
  } else {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnktaXRlbS1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJIaXN0b3J5SXRlbUNvbnRyb2wiLCJwcm9wcyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwib25Nb3VzZUVudGVyIiwiYmluZCIsIm9uTW91c2VMZWF2ZSIsInN0YXRlIiwiaG92ZXIiLCJ4Iiwic2V0U3RhdGUiLCJpdGVtIiwiaGlzdG9yeSIsInN0eWxlcyIsImhpc3RvcnlJdGVtIiwiaGlzdG9yeUl0ZW1IZWFkZXIiLCJyZW5kZXJDb3JyZWN0bmVzcyIsImNvcnJlY3RuZXNzIiwicmVuZGVyU291cmNlIiwic291cmNlIiwidGltZXN0YW1wIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwicGFkZGluZ0xlZnQiLCJ0ZXh0IiwicmVuZGVyTm90ZSIsIm5vdGUiLCJyZW5kZXJDYXJ0IiwiY2FydCIsImhpc3RvcnlDYXJ0IiwicmVuZGVySXRlbUxpc3QiLCJpdGVtcyIsInJlbmRlckl0ZW0iLCJzcGVjaWZpYyIsIndvcmxkIiwiY2F0YWxvZyIsImdldFNwZWNpZmljIiwia2V5IiwiY2FydEl0ZW0iLCJ1aWQiLCJxdWFudGl0eSIsIm5hbWUiLCJza3UiLCJjaGlsZHJlbiIsIm1hcCIsInBhbmVsRW5kUmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJDb21wb25lbnQiLCJoaXN0b3J5U291cmNlIiwicmVuZGVyU291cmNlSWNvbiIsIlRleHRTb3VyY2UiLCJLRVlCT0FSRCIsIk1JQ1JPUEhPTkUiLCJDdXN0b21Ub2dnbGUiLCJmb3J3YXJkUmVmIiwicmVmIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlckNvcnJlY3RuZXNzSWNvbiIsIm1pbldpZHRoIiwicGFkZGluZyIsImNvbG9yIiwiQ29ycmVjdG5lc3MiLCJDT1JSRUNUIiwiSU5DT1JSRUNUIiwic3R5bGUiLCJpY29uIiwicG9wb3ZlciIsIm1hcFN0YXRlVG9Q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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELElBREgsQ0FERjtBQUtELEdBakJELE1BaUJPLEVBSU47QUFDRjs7QUFFRCxTQUFTRSxlQUFULENBQXlCQyxXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUV0QyxTQUFLLEVBQUVzQyxXQUFXLENBQUN0QztBQUFyQixHQUFQO0FBQ0Q7O0FBRWN1QywySEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJ0RSxrQkFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYmYyMzc1OGVhNzNlNTA5OWU4MWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQsIEl0ZW1JbnN0YW5jZSwgV29ybGQgfSBmcm9tICdwcml4LWZpeGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duJztcclxuaW1wb3J0IE92ZXJsYXlUcmlnZ2VyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9PdmVybGF5VHJpZ2dlcic7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Qb3BvdmVyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRmFDb21tZW50LFxyXG4gIEZhS2V5Ym9hcmQsXHJcbiAgRmFNaWNyb3Bob25lLFxyXG4gIEZhUXVlc3Rpb25DaXJjbGUsXHJcbiAgRmFSZWdDb21tZW50LFxyXG4gIEZhU3RpY2t5Tm90ZSxcclxuICBGYVRodW1ic0Rvd24sXHJcbiAgRmFUaHVtYnNVcFxyXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIEhpc3RvcnlJdGVtLCBUZXh0U291cmNlLCBDb3JyZWN0bmVzcyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGhpc3Rvcnk6IEhpc3RvcnlJdGVtO1xyXG4gIHdvcmxkOiBXb3JsZDtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgaG92ZXI6IGJvb2xlYW5cclxufVxyXG5cclxuY2xhc3MgSGlzdG9yeUl0ZW1Db250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIHBhbmVsRW5kUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIGl0ZW1Db3VudCA9IDA7XHJcbiAgc2Nyb2xsT25VcGRhdGUgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMub25Nb3VzZUVudGVyID0gdGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGhvdmVyOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zdGF0ZSA9IHtcclxuICAgIC8vICAgaXNIb3ZlcmluZzogZmFsc2UsXHJcbiAgICAvLyB9O1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUVudGVyKHg6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgZW50ZXJgKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGxlYXZlYCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXI6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMuaGlzdG9yeTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5SXRlbX1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub25Nb3VzZUVudGVyfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5vbk1vdXNlTGVhdmV9XHJcbiAgICAgIC8vIHN0eWxlPXt0aGlzLnN0YXRlLmhvdmVyP3tiYWNrZ3JvdW5kQ29sb3I6ICdncmF5J306e319XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpc3RvcnlJdGVtSGVhZGVyfT5cclxuICAgICAgICAgIHtyZW5kZXJDb3JyZWN0bmVzcyh0aGlzLnN0YXRlLmhvdmVyLCBpdGVtLmNvcnJlY3RuZXNzKX1cclxuICAgICAgICAgIHtyZW5kZXJTb3VyY2UoaXRlbS5zb3VyY2UpfVxyXG4gICAgICAgICAgPGI+e2Ake2l0ZW0udGltZXN0YW1wLnRvTG9jYWxlVGltZVN0cmluZygpfTogYH08L2I+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzZweCcgfX0+PGk+e2l0ZW0udGV4dH08L2k+PC9zcGFuPlxyXG4gICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tmbGV4R3JvdzogMX19PjwvZGl2PiAqL31cclxuICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5ob3ZlciB8fCBpdGVtLm5vdGUgPyByZW5kZXJOb3RlKGl0ZW0ubm90ZSkgOiBudWxsfSAqL31cclxuICAgICAgICAgIHsgcmVuZGVyTm90ZSh0aGlzLnN0YXRlLmhvdmVyLCBpdGVtLm5vdGUpIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5yZW5kZXJDYXJ0KGl0ZW0uY2FydCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNhcnQoY2FydDogQ2FydCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5Q2FydH0+XHJcbiAgICAgICAge3RoaXMucmVuZGVySXRlbUxpc3QoY2FydC5pdGVtcyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbUxpc3QoaXRlbXM6IEl0ZW1JbnN0YW5jZVtdKSB7XHJcbiAgICBjb25zdCByZW5kZXJJdGVtID0gKGl0ZW06IEl0ZW1JbnN0YW5jZSkgPT4ge1xyXG4gICAgICBjb25zdCBzcGVjaWZpYyA9IHRoaXMucHJvcHMud29ybGQuY2F0YWxvZy5nZXRTcGVjaWZpYyhpdGVtLmtleSk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SXRlbX0ga2V5PXtpdGVtLnVpZH0+XHJcbiAgICAgICAgICB7YCR7aXRlbS5xdWFudGl0eX0gJHtzcGVjaWZpYy5uYW1lfSAoJHtzcGVjaWZpYy5za3V9KWB9XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtTGlzdChpdGVtLmNoaWxkcmVuKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVtcy5tYXAocmVuZGVySXRlbSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0JvdHRvbSgpIHtcclxuICAgIHRoaXMucGFuZWxFbmRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcImF1dG9cIiB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNvdXJjZShzb3VyY2U6IFRleHRTb3VyY2UpIHtcclxuICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhpc3RvcnlTb3VyY2V9PlxyXG4gICAge3JlbmRlclNvdXJjZUljb24oc291cmNlKX1cclxuICA8L3NwYW4+KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTb3VyY2VJY29uKHNvdXJjZTogVGV4dFNvdXJjZSkge1xyXG4gIHN3aXRjaCAoc291cmNlKSB7XHJcbiAgICBjYXNlIFRleHRTb3VyY2UuS0VZQk9BUkQ6XHJcbiAgICAgIHJldHVybiA8RmFLZXlib2FyZCAvPjtcclxuICAgIGNhc2UgVGV4dFNvdXJjZS5NSUNST1BIT05FOlxyXG4gICAgICByZXR1cm4gPEZhTWljcm9waG9uZSAvPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiA8RmFRdWVzdGlvbkNpcmNsZSAvPlxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgQ3VzdG9tVG9nZ2xlID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBIVE1MQW5jaG9yRWxlbWVudCxcclxuICB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlLFxyXG4gICAgb25DbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWRcclxuICB9XHJcbj4oKHsgY2hpbGRyZW4sIG9uQ2xpY2sgfSwgcmVmKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIGhyZWY9XCJcIlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb25DbGljayhlKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gIClcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb3JyZWN0bmVzcyhob3ZlcjogYm9vbGVhbiwgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzKSB7XHJcbiAgaWYgKGhvdmVyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJvcGRvd24+XHJcbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17Q3VzdG9tVG9nZ2xlfSBpZD1cImRyb3Bkb3duLWJhc2ljXCI+XHJcbiAgICAgICAgICB7cmVuZGVyQ29ycmVjdG5lc3NJY29uKGhvdmVyLCBjb3JyZWN0bmVzcyl9XHJcbiAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcblxyXG4gICAgICAgIDxEcm9wZG93bi5NZW51IHN0eWxlPXt7IG1pbldpZHRoOiAnMXJlbScsIHBhZGRpbmc6ICcwcHggMnB4JyB9fT5cclxuICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0xXCIgc3R5bGU9e3sgcGFkZGluZzogJzFweCAxZXgnIH19PjxGYVRodW1ic1VwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19IC8+PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIiBzdHlsZT17eyBwYWRkaW5nOiAnMXB4IDFleCcgfX0+PEZhVGh1bWJzRG93biBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0gLz48L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tM1wiIHN0eWxlPXt7IHBhZGRpbmc6ICcxcHggMWV4JyB9fT48RmFRdWVzdGlvbkNpcmNsZSBzdHlsZT17eyBjb2xvcjogJ2xpZ2h0Z3JheScgfX0gLz48L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bic+e3JlbmRlckNvcnJlY3RuZXNzSWNvbihob3ZlciwgY29ycmVjdG5lc3MpfTwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvcnJlY3RuZXNzSWNvbihob3ZlcjogYm9vbGVhbiwgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzKSB7XHJcbiAgc3dpdGNoIChjb3JyZWN0bmVzcykge1xyXG4gICAgY2FzZSBDb3JyZWN0bmVzcy5DT1JSRUNUOlxyXG4gICAgICByZXR1cm4gPEZhVGh1bWJzVXAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0gLz47XHJcbiAgICBjYXNlIENvcnJlY3RuZXNzLklOQ09SUkVDVDpcclxuICAgICAgcmV0dXJuIDxGYVRodW1ic0Rvd24gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19IC8+O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDxGYVF1ZXN0aW9uQ2lyY2xlIHN0eWxlPXtob3ZlciA/IHsgY29sb3I6ICdsaWdodGdyYXknIH0gOiB7IGNvbG9yOiAnd2hpdGUnIH19IC8+O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTm90ZShob3ZlcjogYm9vbGVhbiwgbm90ZT86IHN0cmluZykge1xyXG4gIGNvbnN0IHN0eWxlID0gbm90ZSA/IHsgY29sb3I6ICcjZmZkNjk5JyB9IDogeyBjb2xvcjogJ2xpZ2h0Z3JheSd9O1xyXG4gIGNvbnN0IGljb24gPSBub3RlID8gPEZhQ29tbWVudCBzdHlsZT17c3R5bGV9Lz4gOiA8RmFSZWdDb21tZW50IHN0eWxlPXtzdHlsZX0vPjtcclxuXHJcbiAgaWYgKHRydWUpIHtcclxuICAgIGNvbnN0IHBvcG92ZXIgPSAoXHJcbiAgICAgIDxQb3BvdmVyIGlkPVwicG9wb3Zlci1iYXNpY1wiPlxyXG4gICAgICAgIHsvKiA8UG9wb3Zlci5UaXRsZSBhcz1cImgzXCI+Q29tbWVudCBoZXJlPC9Qb3BvdmVyLlRpdGxlPiAqL31cclxuICAgICAgICA8UG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9ezV9IGNvbHM9ezIwfT5cclxuICAgICAgICAgICAgV3JvbmcgbnVtYmVyIG9mIGxhdHRlcy5cclxuICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgIDwvUG9wb3Zlcj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE92ZXJsYXlUcmlnZ2VyIHRyaWdnZXI9XCJjbGlja1wiIHBsYWNlbWVudD1cInJpZ2h0XCIgb3ZlcmxheT17cG9wb3Zlcn0+XHJcbiAgICAgICAge2ljb259XHJcbiAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICApXHJcbiAgfSBlbHNlIGlmIChub3RlKSB7XHJcbiAgICByZXR1cm4gaWNvbjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4geyB3b3JsZDogYXBwbGljYXRpb24ud29ybGQgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhpc3RvcnlJdGVtQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=