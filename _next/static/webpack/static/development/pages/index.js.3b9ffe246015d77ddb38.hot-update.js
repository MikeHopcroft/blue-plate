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
      lineNumber: 134,
      columnNumber: 5
    }
  }, children);
});
_c2 = CustomToggle;

function renderCorrectness(hover, correctness) {
  return __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Toggle, {
    as: CustomToggle,
    id: "dropdown-basic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, renderCorrectnessIcon(hover, correctness)), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Menu, {
    style: {
      minWidth: '1rem',
      padding: '0px 2px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
    href: "#/action-1",
    style: {
      padding: '1px 1ex'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaThumbsUp"], {
    style: {
      color: 'green'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 73
    }
  })), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
    href: "#/action-2",
    style: {
      padding: '1px 1ex'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaThumbsDown"], {
    style: {
      color: 'red'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 73
    }
  })), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
    href: "#/action-3",
    style: {
      padding: '1px 1ex'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaQuestionCircle"], {
    style: {
      color: 'lightgray'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 73
    }
  }))));
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
          lineNumber: 166,
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
          lineNumber: 168,
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
          lineNumber: 170,
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
      lineNumber: 176,
      columnNumber: 23
    }
  }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaRegComment"], {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 52
    }
  });

  if (hover) {
    var popover = __jsx(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "popover-basic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
      as: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }
    }, "Comment here"), __jsx(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_10__["default"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }
    }, "Wrong number of lattes."));

    return __jsx(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_9__["default"], {
      trigger: "click",
      placement: "right",
      overlay: popover,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnktaXRlbS1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJIaXN0b3J5SXRlbUNvbnRyb2wiLCJwcm9wcyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwib25Nb3VzZUVudGVyIiwiYmluZCIsIm9uTW91c2VMZWF2ZSIsInN0YXRlIiwiaG92ZXIiLCJ4Iiwic2V0U3RhdGUiLCJpdGVtIiwiaGlzdG9yeSIsInN0eWxlcyIsImhpc3RvcnlJdGVtIiwiaGlzdG9yeUl0ZW1IZWFkZXIiLCJyZW5kZXJDb3JyZWN0bmVzcyIsImNvcnJlY3RuZXNzIiwicmVuZGVyU291cmNlIiwic291cmNlIiwidGltZXN0YW1wIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwicGFkZGluZ0xlZnQiLCJ0ZXh0IiwicmVuZGVyTm90ZSIsIm5vdGUiLCJyZW5kZXJDYXJ0IiwiY2FydCIsImhpc3RvcnlDYXJ0IiwicmVuZGVySXRlbUxpc3QiLCJpdGVtcyIsInJlbmRlckl0ZW0iLCJzcGVjaWZpYyIsIndvcmxkIiwiY2F0YWxvZyIsImdldFNwZWNpZmljIiwia2V5IiwiY2FydEl0ZW0iLCJ1aWQiLCJxdWFudGl0eSIsIm5hbWUiLCJza3UiLCJjaGlsZHJlbiIsIm1hcCIsInBhbmVsRW5kUmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJDb21wb25lbnQiLCJoaXN0b3J5U291cmNlIiwicmVuZGVyU291cmNlSWNvbiIsIlRleHRTb3VyY2UiLCJLRVlCT0FSRCIsIk1JQ1JPUEhPTkUiLCJDdXN0b21Ub2dnbGUiLCJmb3J3YXJkUmVmIiwicmVmIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlckNvcnJlY3RuZXNzSWNvbiIsIm1pbldpZHRoIiwicGFkZGluZyIsImNvbG9yIiwiQ29ycmVjdG5lc3MiLCJDT1JSRUNUIiwiSU5DT1JSRUNUIiwic3R5bGUiLCJpY29uIiwicG9wb3ZlciIsIm1hcFN0YXRlVG9Q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LFdBQXpCLEVBQXdEO0FBQ3RELFNBQU87QUFBRXRDLFNBQUssRUFBRXNDLFdBQVcsQ0FBQ3RDO0FBQXJCLEdBQVA7QUFDRDs7QUFFY3VDLDJIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QnRFLGtCQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zYjlmZmUyNDYwMTVkNzdkZGIzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCwgSXRlbUluc3RhbmNlLCBXb3JsZCB9IGZyb20gJ3ByaXgtZml4ZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xyXG5pbXBvcnQgT3ZlcmxheVRyaWdnZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyJztcclxuaW1wb3J0IFBvcG92ZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1BvcG92ZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBGYUNvbW1lbnQsXHJcbiAgRmFLZXlib2FyZCxcclxuICBGYU1pY3JvcGhvbmUsXHJcbiAgRmFRdWVzdGlvbkNpcmNsZSxcclxuICBGYVJlZ0NvbW1lbnQsXHJcbiAgRmFTdGlja3lOb3RlLFxyXG4gIEZhVGh1bWJzRG93bixcclxuICBGYVRodW1ic1VwXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgSGlzdG9yeUl0ZW0sIFRleHRTb3VyY2UsIENvcnJlY3RuZXNzIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaGlzdG9yeTogSGlzdG9yeUl0ZW07XHJcbiAgd29ybGQ6IFdvcmxkO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBob3ZlcjogYm9vbGVhblxyXG59XHJcblxyXG5jbGFzcyBIaXN0b3J5SXRlbUNvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgcGFuZWxFbmRSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgaXRlbUNvdW50ID0gMDtcclxuICBzY3JvbGxPblVwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaG92ZXI6IGZhbHNlXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnN0YXRlID0ge1xyXG4gICAgLy8gICBpc0hvdmVyaW5nOiBmYWxzZSxcclxuICAgIC8vIH07XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlRW50ZXIoeDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4pIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBlbnRlcmApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXI6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgbGVhdmVgKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5wcm9wcy5oaXN0b3J5O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhpc3RvcnlJdGVtfVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbk1vdXNlRW50ZXJ9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLm9uTW91c2VMZWF2ZX1cclxuICAgICAgLy8gc3R5bGU9e3RoaXMuc3RhdGUuaG92ZXI/e2JhY2tncm91bmRDb2xvcjogJ2dyYXknfTp7fX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGlzdG9yeUl0ZW1IZWFkZXJ9PlxyXG4gICAgICAgICAge3JlbmRlckNvcnJlY3RuZXNzKHRoaXMuc3RhdGUuaG92ZXIsIGl0ZW0uY29ycmVjdG5lc3MpfVxyXG4gICAgICAgICAge3JlbmRlclNvdXJjZShpdGVtLnNvdXJjZSl9XHJcbiAgICAgICAgICA8Yj57YCR7aXRlbS50aW1lc3RhbXAudG9Mb2NhbGVUaW1lU3RyaW5nKCl9OiBgfTwvYj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnNnB4JyB9fT48aT57aXRlbS50ZXh0fTwvaT48L3NwYW4+XHJcbiAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e2ZsZXhHcm93OiAxfX0+PC9kaXY+ICovfVxyXG4gICAgICAgICAgey8qIHt0aGlzLnN0YXRlLmhvdmVyIHx8IGl0ZW0ubm90ZSA/IHJlbmRlck5vdGUoaXRlbS5ub3RlKSA6IG51bGx9ICovfVxyXG4gICAgICAgICAgeyByZW5kZXJOb3RlKHRoaXMuc3RhdGUuaG92ZXIsIGl0ZW0ubm90ZSkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckNhcnQoaXRlbS5jYXJ0KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FydChjYXJ0OiBDYXJ0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpc3RvcnlDYXJ0fT5cclxuICAgICAgICB7dGhpcy5yZW5kZXJJdGVtTGlzdChjYXJ0Lml0ZW1zKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtTGlzdChpdGVtczogSXRlbUluc3RhbmNlW10pIHtcclxuICAgIGNvbnN0IHJlbmRlckl0ZW0gPSAoaXRlbTogSXRlbUluc3RhbmNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNwZWNpZmljID0gdGhpcy5wcm9wcy53b3JsZC5jYXRhbG9nLmdldFNwZWNpZmljKGl0ZW0ua2V5KTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnRJdGVtfSBrZXk9e2l0ZW0udWlkfT5cclxuICAgICAgICAgIHtgJHtpdGVtLnF1YW50aXR5fSAke3NwZWNpZmljLm5hbWV9ICgke3NwZWNpZmljLnNrdX0pYH1cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckl0ZW1MaXN0KGl0ZW0uY2hpbGRyZW4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1zLm1hcChyZW5kZXJJdGVtKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvQm90dG9tKCkge1xyXG4gICAgdGhpcy5wYW5lbEVuZFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwiYXV0b1wiIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU291cmNlKHNvdXJjZTogVGV4dFNvdXJjZSkge1xyXG4gIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGlzdG9yeVNvdXJjZX0+XHJcbiAgICB7cmVuZGVyU291cmNlSWNvbihzb3VyY2UpfVxyXG4gIDwvc3Bhbj4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNvdXJjZUljb24oc291cmNlOiBUZXh0U291cmNlKSB7XHJcbiAgc3dpdGNoIChzb3VyY2UpIHtcclxuICAgIGNhc2UgVGV4dFNvdXJjZS5LRVlCT0FSRDpcclxuICAgICAgcmV0dXJuIDxGYUtleWJvYXJkIC8+O1xyXG4gICAgY2FzZSBUZXh0U291cmNlLk1JQ1JPUEhPTkU6XHJcbiAgICAgIHJldHVybiA8RmFNaWNyb3Bob25lIC8+O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDxGYVF1ZXN0aW9uQ2lyY2xlIC8+XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBDdXN0b21Ub2dnbGUgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxBbmNob3JFbGVtZW50LFxyXG4gIHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSwgb25DbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQgfVxyXG4+KCh7IGNoaWxkcmVuLCBvbkNsaWNrIH0sIHJlZikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPVwiXCJcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9uQ2xpY2soZSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYT5cclxuICApXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29ycmVjdG5lc3MoaG92ZXI6IGJvb2xlYW4sIGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd24+XHJcbiAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e0N1c3RvbVRvZ2dsZX0gaWQ9XCJkcm9wZG93bi1iYXNpY1wiPlxyXG4gICAgICAgIHtyZW5kZXJDb3JyZWN0bmVzc0ljb24oaG92ZXIsIGNvcnJlY3RuZXNzKX1cclxuICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcblxyXG4gICAgICA8RHJvcGRvd24uTWVudSBzdHlsZT17eyBtaW5XaWR0aDogJzFyZW0nLCBwYWRkaW5nOiAnMHB4IDJweCcgfX0+XHJcbiAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTFcIiBzdHlsZT17eyBwYWRkaW5nOiAnMXB4IDFleCcgfX0+PEZhVGh1bWJzVXAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0gLz48L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIiBzdHlsZT17eyBwYWRkaW5nOiAnMXB4IDFleCcgfX0+PEZhVGh1bWJzRG93biBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0gLz48L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIiBzdHlsZT17eyBwYWRkaW5nOiAnMXB4IDFleCcgfX0+PEZhUXVlc3Rpb25DaXJjbGUgc3R5bGU9e3sgY29sb3I6ICdsaWdodGdyYXknIH19IC8+PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICA8L0Ryb3Bkb3duPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvcnJlY3RuZXNzSWNvbihob3ZlcjogYm9vbGVhbiwgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzKSB7XHJcbiAgc3dpdGNoIChjb3JyZWN0bmVzcykge1xyXG4gICAgY2FzZSBDb3JyZWN0bmVzcy5DT1JSRUNUOlxyXG4gICAgICByZXR1cm4gPEZhVGh1bWJzVXAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0gLz47XHJcbiAgICBjYXNlIENvcnJlY3RuZXNzLklOQ09SUkVDVDpcclxuICAgICAgcmV0dXJuIDxGYVRodW1ic0Rvd24gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19IC8+O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDxGYVF1ZXN0aW9uQ2lyY2xlIHN0eWxlPXtob3ZlciA/IHsgY29sb3I6ICdsaWdodGdyYXknIH0gOiB7IGNvbG9yOiAnd2hpdGUnIH19IC8+O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTm90ZShob3ZlcjogYm9vbGVhbiwgbm90ZT86IHN0cmluZykge1xyXG4gIGNvbnN0IHN0eWxlID0gbm90ZSA/IHsgY29sb3I6ICcjZmZkNjk5JyB9IDogeyBjb2xvcjogJ2xpZ2h0Z3JheSd9O1xyXG4gIGNvbnN0IGljb24gPSBub3RlID8gPEZhQ29tbWVudCBzdHlsZT17c3R5bGV9Lz4gOiA8RmFSZWdDb21tZW50IHN0eWxlPXtzdHlsZX0vPjtcclxuXHJcbiAgaWYgKGhvdmVyKSB7XHJcbiAgICBjb25zdCBwb3BvdmVyID0gKFxyXG4gICAgICA8UG9wb3ZlciBpZD1cInBvcG92ZXItYmFzaWNcIj5cclxuICAgICAgICA8UG9wb3Zlci5UaXRsZSBhcz1cImgzXCI+Q29tbWVudCBoZXJlPC9Qb3BvdmVyLlRpdGxlPlxyXG4gICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICBXcm9uZyBudW1iZXIgb2YgbGF0dGVzLlxyXG4gICAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgICA8L1BvcG92ZXI+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxPdmVybGF5VHJpZ2dlciB0cmlnZ2VyPVwiY2xpY2tcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIG92ZXJsYXk9e3BvcG92ZXJ9PlxyXG4gICAgICAgIHtpY29ufVxyXG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgKVxyXG4gIH0gZWxzZSBpZiAobm90ZSkge1xyXG4gICAgcmV0dXJuIGljb247XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgd29ybGQ6IGFwcGxpY2F0aW9uLndvcmxkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIaXN0b3J5SXRlbUNvbnRyb2wpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9