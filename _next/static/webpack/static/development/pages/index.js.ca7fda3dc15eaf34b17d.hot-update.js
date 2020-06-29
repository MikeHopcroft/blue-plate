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
} // const Example = () => (
//   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//     <Button variant="success">Click me to see</Button>
//   </OverlayTrigger>
// )


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

  if (hover || note) {
    var popover = __jsx(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "popover-basic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
      as: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }
    }, "Comment"), __jsx(react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_10__["default"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
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
        lineNumber: 196,
        columnNumber: 7
      }
    }, icon);
  } else {
    return null;
  }
} // const THRESHOLD = 1000*60;  // 60 seconds
// function* groupHistoryItems(
//   items: HistoryItem[]
// ): IterableIterator<HistoryItem[]> {
//   if (items.length > 0) {
//     let grouped: HistoryItem[] = [];
//     for (const item of items) {
//       item.timestamp
//       if (grouped.length === 0) {
//         grouped.push(item);
//       } else {
//         const x = item.timestamp.getTime() - grouped[0].timestamp.getTime();
//         if (x <= THRESHOLD) {
//           grouped.push(item);
//         } else {
//           yield grouped;
//           grouped = [item];
//         }
//       }
//     }
//     if (grouped.length > 0) {
//       yield grouped;
//     }
//   }
// }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnktaXRlbS1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJIaXN0b3J5SXRlbUNvbnRyb2wiLCJwcm9wcyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwib25Nb3VzZUVudGVyIiwiYmluZCIsIm9uTW91c2VMZWF2ZSIsInN0YXRlIiwiaG92ZXIiLCJ4Iiwic2V0U3RhdGUiLCJpdGVtIiwiaGlzdG9yeSIsInN0eWxlcyIsImhpc3RvcnlJdGVtIiwiaGlzdG9yeUl0ZW1IZWFkZXIiLCJyZW5kZXJDb3JyZWN0bmVzcyIsImNvcnJlY3RuZXNzIiwicmVuZGVyU291cmNlIiwic291cmNlIiwidGltZXN0YW1wIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwicGFkZGluZ0xlZnQiLCJ0ZXh0IiwicmVuZGVyTm90ZSIsIm5vdGUiLCJyZW5kZXJDYXJ0IiwiY2FydCIsImhpc3RvcnlDYXJ0IiwicmVuZGVySXRlbUxpc3QiLCJpdGVtcyIsInJlbmRlckl0ZW0iLCJzcGVjaWZpYyIsIndvcmxkIiwiY2F0YWxvZyIsImdldFNwZWNpZmljIiwia2V5IiwiY2FydEl0ZW0iLCJ1aWQiLCJxdWFudGl0eSIsIm5hbWUiLCJza3UiLCJjaGlsZHJlbiIsIm1hcCIsInBhbmVsRW5kUmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJDb21wb25lbnQiLCJoaXN0b3J5U291cmNlIiwicmVuZGVyU291cmNlSWNvbiIsIlRleHRTb3VyY2UiLCJLRVlCT0FSRCIsIk1JQ1JPUEhPTkUiLCJDdXN0b21Ub2dnbGUiLCJmb3J3YXJkUmVmIiwicmVmIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlckNvcnJlY3RuZXNzSWNvbiIsIm1pbldpZHRoIiwicGFkZGluZyIsImNvbG9yIiwiQ29ycmVjdG5lc3MiLCJDT1JSRUNUIiwiSU5DT1JSRUNUIiwic3R5bGUiLCJpY29uIiwicG9wb3ZlciIsIm1hcFN0YXRlVG9Q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QTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRSxlQUFULENBQXlCQyxXQUF6QixFQUF3RDtBQUN0RCxTQUFPO0FBQUV0QyxTQUFLLEVBQUVzQyxXQUFXLENBQUN0QztBQUFyQixHQUFQO0FBQ0Q7O0FBRWN1QywySEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJ0RSxrQkFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuY2E3ZmRhM2RjMTVlYWYzNGIxN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQsIEl0ZW1JbnN0YW5jZSwgV29ybGQgfSBmcm9tICdwcml4LWZpeGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duJztcclxuaW1wb3J0IE92ZXJsYXlUcmlnZ2VyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9PdmVybGF5VHJpZ2dlcic7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Qb3BvdmVyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRmFDb21tZW50LFxyXG4gIEZhS2V5Ym9hcmQsXHJcbiAgRmFNaWNyb3Bob25lLFxyXG4gIEZhUXVlc3Rpb25DaXJjbGUsXHJcbiAgRmFSZWdDb21tZW50LFxyXG4gIEZhU3RpY2t5Tm90ZSxcclxuICBGYVRodW1ic0Rvd24sXHJcbiAgRmFUaHVtYnNVcFxyXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIEhpc3RvcnlJdGVtLCBUZXh0U291cmNlLCBDb3JyZWN0bmVzcyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udHJvbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGhpc3Rvcnk6IEhpc3RvcnlJdGVtO1xyXG4gIHdvcmxkOiBXb3JsZDtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgaG92ZXI6IGJvb2xlYW5cclxufVxyXG5cclxuY2xhc3MgSGlzdG9yeUl0ZW1Db250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIHBhbmVsRW5kUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIGl0ZW1Db3VudCA9IDA7XHJcbiAgc2Nyb2xsT25VcGRhdGUgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMub25Nb3VzZUVudGVyID0gdGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGhvdmVyOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zdGF0ZSA9IHtcclxuICAgIC8vICAgaXNIb3ZlcmluZzogZmFsc2UsXHJcbiAgICAvLyB9O1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUVudGVyKHg6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgZW50ZXJgKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGxlYXZlYCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXI6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMuaGlzdG9yeTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5SXRlbX1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub25Nb3VzZUVudGVyfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5vbk1vdXNlTGVhdmV9XHJcbiAgICAgIC8vIHN0eWxlPXt0aGlzLnN0YXRlLmhvdmVyP3tiYWNrZ3JvdW5kQ29sb3I6ICdncmF5J306e319XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpc3RvcnlJdGVtSGVhZGVyfT5cclxuICAgICAgICAgIHtyZW5kZXJDb3JyZWN0bmVzcyh0aGlzLnN0YXRlLmhvdmVyLCBpdGVtLmNvcnJlY3RuZXNzKX1cclxuICAgICAgICAgIHtyZW5kZXJTb3VyY2UoaXRlbS5zb3VyY2UpfVxyXG4gICAgICAgICAgPGI+e2Ake2l0ZW0udGltZXN0YW1wLnRvTG9jYWxlVGltZVN0cmluZygpfTogYH08L2I+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzZweCcgfX0+PGk+e2l0ZW0udGV4dH08L2k+PC9zcGFuPlxyXG4gICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tmbGV4R3JvdzogMX19PjwvZGl2PiAqL31cclxuICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5ob3ZlciB8fCBpdGVtLm5vdGUgPyByZW5kZXJOb3RlKGl0ZW0ubm90ZSkgOiBudWxsfSAqL31cclxuICAgICAgICAgIHsgcmVuZGVyTm90ZSh0aGlzLnN0YXRlLmhvdmVyLCBpdGVtLm5vdGUpIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5yZW5kZXJDYXJ0KGl0ZW0uY2FydCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNhcnQoY2FydDogQ2FydCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaXN0b3J5Q2FydH0+XHJcbiAgICAgICAge3RoaXMucmVuZGVySXRlbUxpc3QoY2FydC5pdGVtcyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbUxpc3QoaXRlbXM6IEl0ZW1JbnN0YW5jZVtdKSB7XHJcbiAgICBjb25zdCByZW5kZXJJdGVtID0gKGl0ZW06IEl0ZW1JbnN0YW5jZSkgPT4ge1xyXG4gICAgICBjb25zdCBzcGVjaWZpYyA9IHRoaXMucHJvcHMud29ybGQuY2F0YWxvZy5nZXRTcGVjaWZpYyhpdGVtLmtleSk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SXRlbX0ga2V5PXtpdGVtLnVpZH0+XHJcbiAgICAgICAgICB7YCR7aXRlbS5xdWFudGl0eX0gJHtzcGVjaWZpYy5uYW1lfSAoJHtzcGVjaWZpYy5za3V9KWB9XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtTGlzdChpdGVtLmNoaWxkcmVuKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVtcy5tYXAocmVuZGVySXRlbSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0JvdHRvbSgpIHtcclxuICAgIHRoaXMucGFuZWxFbmRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcImF1dG9cIiB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNvdXJjZShzb3VyY2U6IFRleHRTb3VyY2UpIHtcclxuICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhpc3RvcnlTb3VyY2V9PlxyXG4gICAge3JlbmRlclNvdXJjZUljb24oc291cmNlKX1cclxuICA8L3NwYW4+KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTb3VyY2VJY29uKHNvdXJjZTogVGV4dFNvdXJjZSkge1xyXG4gIHN3aXRjaCAoc291cmNlKSB7XHJcbiAgICBjYXNlIFRleHRTb3VyY2UuS0VZQk9BUkQ6XHJcbiAgICAgIHJldHVybiA8RmFLZXlib2FyZCAvPjtcclxuICAgIGNhc2UgVGV4dFNvdXJjZS5NSUNST1BIT05FOlxyXG4gICAgICByZXR1cm4gPEZhTWljcm9waG9uZSAvPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiA8RmFRdWVzdGlvbkNpcmNsZSAvPlxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgQ3VzdG9tVG9nZ2xlID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBIVE1MQW5jaG9yRWxlbWVudCxcclxuICB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUsIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkIH1cclxuPigoeyBjaGlsZHJlbiwgb25DbGljayB9LCByZWYpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj1cIlwiXHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBvbkNsaWNrKGUpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvcnJlY3RuZXNzKGhvdmVyOiBib29sZWFuLCBjb3JyZWN0bmVzczogQ29ycmVjdG5lc3MpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duPlxyXG4gICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtDdXN0b21Ub2dnbGV9IGlkPVwiZHJvcGRvd24tYmFzaWNcIj5cclxuICAgICAgICB7cmVuZGVyQ29ycmVjdG5lc3NJY29uKGhvdmVyLCBjb3JyZWN0bmVzcyl9XHJcbiAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG5cclxuICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6ICcxcmVtJywgcGFkZGluZzogJzBweCAycHgnIH19PlxyXG4gICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0xXCIgc3R5bGU9e3sgcGFkZGluZzogJzFweCAxZXgnIH19PjxGYVRodW1ic1VwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19IC8+PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0yXCIgc3R5bGU9e3sgcGFkZGluZzogJzFweCAxZXgnIH19PjxGYVRodW1ic0Rvd24gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19IC8+PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCIgc3R5bGU9e3sgcGFkZGluZzogJzFweCAxZXgnIH19PjxGYVF1ZXN0aW9uQ2lyY2xlIHN0eWxlPXt7IGNvbG9yOiAnbGlnaHRncmF5JyB9fSAvPjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgPC9Ecm9wZG93bj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb3JyZWN0bmVzc0ljb24oaG92ZXI6IGJvb2xlYW4sIGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcykge1xyXG4gIHN3aXRjaCAoY29ycmVjdG5lc3MpIHtcclxuICAgIGNhc2UgQ29ycmVjdG5lc3MuQ09SUkVDVDpcclxuICAgICAgcmV0dXJuIDxGYVRodW1ic1VwIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19IC8+O1xyXG4gICAgY2FzZSBDb3JyZWN0bmVzcy5JTkNPUlJFQ1Q6XHJcbiAgICAgIHJldHVybiA8RmFUaHVtYnNEb3duIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fSAvPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiA8RmFRdWVzdGlvbkNpcmNsZSBzdHlsZT17aG92ZXIgPyB7IGNvbG9yOiAnbGlnaHRncmF5JyB9IDogeyBjb2xvcjogJ3doaXRlJyB9fSAvPjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBjb25zdCBFeGFtcGxlID0gKCkgPT4gKFxyXG4vLyAgIDxPdmVybGF5VHJpZ2dlciB0cmlnZ2VyPVwiY2xpY2tcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIG92ZXJsYXk9e3BvcG92ZXJ9PlxyXG4vLyAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiPkNsaWNrIG1lIHRvIHNlZTwvQnV0dG9uPlxyXG4vLyAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbi8vIClcclxuXHJcbmZ1bmN0aW9uIHJlbmRlck5vdGUoaG92ZXI6IGJvb2xlYW4sIG5vdGU/OiBzdHJpbmcpIHtcclxuICBjb25zdCBzdHlsZSA9IG5vdGUgPyB7IGNvbG9yOiAnI2ZmZDY5OScgfSA6IHsgY29sb3I6ICdsaWdodGdyYXknfTtcclxuICBjb25zdCBpY29uID0gbm90ZSA/IDxGYUNvbW1lbnQgc3R5bGU9e3N0eWxlfS8+IDogPEZhUmVnQ29tbWVudCBzdHlsZT17c3R5bGV9Lz47XHJcblxyXG4gIGlmIChob3ZlciB8fCBub3RlKSB7XHJcbiAgICBjb25zdCBwb3BvdmVyID0gKFxyXG4gICAgICA8UG9wb3ZlciBpZD1cInBvcG92ZXItYmFzaWNcIj5cclxuICAgICAgICA8UG9wb3Zlci5UaXRsZSBhcz1cImgzXCI+Q29tbWVudDwvUG9wb3Zlci5UaXRsZT5cclxuICAgICAgICA8UG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgV3JvbmcgbnVtYmVyIG9mIGxhdHRlcy5cclxuICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8T3ZlcmxheVRyaWdnZXIgdHJpZ2dlcj1cImNsaWNrXCIgcGxhY2VtZW50PVwicmlnaHRcIiBvdmVybGF5PXtwb3BvdmVyfT5cclxuICAgICAgICB7aWNvbn1cclxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBUSFJFU0hPTEQgPSAxMDAwKjYwOyAgLy8gNjAgc2Vjb25kc1xyXG4vLyBmdW5jdGlvbiogZ3JvdXBIaXN0b3J5SXRlbXMoXHJcbi8vICAgaXRlbXM6IEhpc3RvcnlJdGVtW11cclxuLy8gKTogSXRlcmFibGVJdGVyYXRvcjxIaXN0b3J5SXRlbVtdPiB7XHJcbi8vICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuLy8gICAgIGxldCBncm91cGVkOiBIaXN0b3J5SXRlbVtdID0gW107XHJcblxyXG4vLyAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbi8vICAgICAgIGl0ZW0udGltZXN0YW1wXHJcbi8vICAgICAgIGlmIChncm91cGVkLmxlbmd0aCA9PT0gMCkge1xyXG4vLyAgICAgICAgIGdyb3VwZWQucHVzaChpdGVtKTtcclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBjb25zdCB4ID0gaXRlbS50aW1lc3RhbXAuZ2V0VGltZSgpIC0gZ3JvdXBlZFswXS50aW1lc3RhbXAuZ2V0VGltZSgpO1xyXG4vLyAgICAgICAgIGlmICh4IDw9IFRIUkVTSE9MRCkge1xyXG4vLyAgICAgICAgICAgZ3JvdXBlZC5wdXNoKGl0ZW0pO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICB5aWVsZCBncm91cGVkO1xyXG4vLyAgICAgICAgICAgZ3JvdXBlZCA9IFtpdGVtXTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGlmIChncm91cGVkLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgeWllbGQgZ3JvdXBlZDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7IHdvcmxkOiBhcHBsaWNhdGlvbi53b3JsZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGlzdG9yeUl0ZW1Db250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==