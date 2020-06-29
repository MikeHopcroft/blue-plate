webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/product-detail-control.tsx":
/*!***********************************************!*\
  !*** ./components/product-detail-control.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prix-fixe */ "./node_modules/prix-fixe/build/src/bindex.js");
/* harmony import */ var prix_fixe__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prix_fixe__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_15__);








var _jsxFileName = "D:\\git\\menubot\\blue-plate\\components\\product-detail-control.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









;

var ProductDetailControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductDetailControl, _React$Component);

  var _super = _createSuper(ProductDetailControl);

  function ProductDetailControl() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProductDetailControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderGenericLink", function (item) {
      return __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"].Link, {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
        key: item.pid,
        onClick: function onClick() {
          return _this.props.selectionChanged(item.pid);
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 7
        }
      }, item.name, " (", item.pid, ")");
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductDetailControl, [{
    key: "render",
    // onSelect = (pid: PID) => {
    //   this.props.selectionChanged(pid);
    // }
    value: function render() {
      return __jsx("div", {
        style: {
          width: '100%',
          height: '100%',
          overflow: 'auto'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, this.renderGeneric(this.props.world));
    }
  }, {
    key: "renderGeneric",
    value: function renderGeneric(world) {
      var _this2 = this;

      var catalog = world.catalog;
      var pid = this.props.currentPID;

      if (this.props.optionPID !== undefined) {
        pid = this.props.optionPID;
      }

      var closeButton = [__jsx("div", {
        style: {
          flexGrow: 1
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "light",
        onClick: function onClick() {
          return _this2.props.selectionChanged(undefined);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaTimes"], {
        style: {
          color: 'blue'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }))];

      if (!catalog.hasPID(pid)) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 14
          }
        }, "Unknown PID ", pid);
      } else {
        var item = catalog.getGeneric(pid);
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
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
            lineNumber: 67,
            columnNumber: 11
          }
        }, __jsx("h1", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }
        }, item.name, " (", item.pid, ")"), pid === this.props.optionPID ? closeButton : null), __jsx("div", {
          style: {
            display: 'flex',
            flexDirection: 'row'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 11
          }
        }, renderProductAliases(item), renderProductAttributes(world, item), renderLegalSpecifics(world, item), this.renderLegalOptions(world, item), this.renderExlusionSets(world, item)));
      }
    }
  }, {
    key: "renderLegalOptions",
    value: function renderLegalOptions(world, item) {
      var catalog = world.catalog;
      var rules = world.ruleChecker;
      var specific = catalog.getSpecific(item.defaultKey);
      var items = [];

      var _iterator = _createForOfIteratorHelper(rules.getValidChildren(item.defaultKey)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var childPID = _step.value;

          if (catalog.hasPID(childPID)) {
            var child = catalog.getGeneric(childPID);
            items.push(child);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      items.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.menuDetailColumn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          fontWeight: 'bold',
          whiteSpace: 'nowrap'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }
      }, "Options for ", __jsx("span", {
        style: {
          backgroundColor: 'lightgray'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 23
        }
      }, specific.name, " (", specific.key, ", ", specific.sku, ")")), items.map(this.renderGenericLink));
    }
  }, {
    key: "renderExlusionSets",
    value: function renderExlusionSets(world, item) {
      var _this3 = this;

      var catalog = world.catalog;
      var rules = world.ruleChecker;

      var sets = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rules.getExclusionGroups(item.pid));

      var renderOneExlusionSet = function renderOneExlusionSet(group, index) {
        var pids = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(group.values());

        var items = pids.map(function (pid) {
          return catalog.getGeneric(pid);
        });
        items.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
        return __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
          key: index,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 9
          }
        }, __jsx("div", {
          style: {
            fontWeight: 'bold'
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 11
          }
        }, "Set ", index), items.map(_this3.renderGenericLink));
      };

      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.menuDetailColumn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          fontWeight: 'bold'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      }, "Exclusion Sets"), sets.map(renderOneExlusionSet));

      function renderOnePID(pid, index) {
        var child = catalog.getGeneric(pid);
        return __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
          key: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 9
          }
        }, child.name, " (", child.pid, ")");
      }
    }
  }, {
    key: "renderSortedGenerics",
    value: function renderSortedGenerics(items) {
      items.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      return items.map(this.renderGenericLink);
    }
  }]);

  return ProductDetailControl;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

function renderProductAttributes(world, item) {
  var tensor = world.attributeInfo.getTensor(item.tensor);
  return __jsx("div", {
    className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.menuDetailColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, "Attributes"), tensor.dimensions.map(renderDimension));

  function renderDimension(dimension, index) {
    return __jsx("div", {
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }
    }, dimension.name), dimension.attributes.map(renderAttribute));
  }

  function renderAttribute(attribute, index) {
    return __jsx("div", {
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, attribute.name), renderAliases(attribute.aliases));
  }
}

function renderProductAliases(item) {
  return __jsx("div", {
    className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.menuDetailColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, "Aliases"), renderAliases(item.aliases));
}

function renderAliases(aliases) {
  var _this4 = this;

  var output = [];

  var _iterator2 = _createForOfIteratorHelper(aliases),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var alias = _step2.value;
      var pattern = Object(prix_fixe__WEBPACK_IMPORTED_MODULE_8__["patternFromExpression"])(alias);

      var _iterator3 = _createForOfIteratorHelper(Object(prix_fixe__WEBPACK_IMPORTED_MODULE_8__["aliasesFromPattern"])(pattern)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var text = _step3.value;
          output.push(text);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  output.sort();
  return output.map(function (alias, index) {
    return __jsx("div", {
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
      key: index,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 5
      }
    }, alias);
  });
}

function renderLegalSpecifics(world, item) {
  var catalog = world.catalog;

  var keys = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(catalog.getSpecificsForGeneric(item.pid));

  return __jsx("div", {
    className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.menuDetailColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, "Specific Forms"), keys.map(renderSpecific));

  function renderSpecific(key, index) {
    var defaultMark = item.defaultKey === key ? ' <== default' : '';
    var s = catalog.getSpecific(key);
    var name = s.name;
    var sku = s.sku;
    return __jsx("div", {
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 7
      }
    }, name, " (", key, ", ", sku, ")", defaultMark ? __jsx("span", {
      style: {
        paddingLeft: '1ex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 23
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaCheckCircle"], {
      title: "default form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 11
      }
    })) : null);
  }
}

function mapStateToProps(application) {
  return {
    world: application.world,
    currentPID: application.currentPID,
    optionPID: application.optionPID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectionChanged: function selectionChanged(pid) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_14__["setOptionPID"])(pid));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(ProductDetailControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsLWNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxDb250cm9sIiwiaXRlbSIsInN0eWxlcyIsIm5lc3RlZCIsInBpZCIsInByb3BzIiwic2VsZWN0aW9uQ2hhbmdlZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwicmVuZGVyR2VuZXJpYyIsIndvcmxkIiwiY2F0YWxvZyIsImN1cnJlbnRQSUQiLCJvcHRpb25QSUQiLCJ1bmRlZmluZWQiLCJjbG9zZUJ1dHRvbiIsImZsZXhHcm93IiwiY29sb3IiLCJoYXNQSUQiLCJnZXRHZW5lcmljIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJyZW5kZXJQcm9kdWN0QWxpYXNlcyIsInJlbmRlclByb2R1Y3RBdHRyaWJ1dGVzIiwicmVuZGVyTGVnYWxTcGVjaWZpY3MiLCJyZW5kZXJMZWdhbE9wdGlvbnMiLCJyZW5kZXJFeGx1c2lvblNldHMiLCJydWxlcyIsInJ1bGVDaGVja2VyIiwic3BlY2lmaWMiLCJnZXRTcGVjaWZpYyIsImRlZmF1bHRLZXkiLCJpdGVtcyIsImdldFZhbGlkQ2hpbGRyZW4iLCJjaGlsZFBJRCIsImNoaWxkIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtZW51RGV0YWlsQ29sdW1uIiwiZm9udFdlaWdodCIsIndoaXRlU3BhY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJrZXkiLCJza3UiLCJtYXAiLCJyZW5kZXJHZW5lcmljTGluayIsInNldHMiLCJnZXRFeGNsdXNpb25Hcm91cHMiLCJyZW5kZXJPbmVFeGx1c2lvblNldCIsImdyb3VwIiwiaW5kZXgiLCJwaWRzIiwidmFsdWVzIiwicmVuZGVyT25lUElEIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0ZW5zb3IiLCJhdHRyaWJ1dGVJbmZvIiwiZ2V0VGVuc29yIiwiZGltZW5zaW9ucyIsInJlbmRlckRpbWVuc2lvbiIsImRpbWVuc2lvbiIsImF0dHJpYnV0ZXMiLCJyZW5kZXJBdHRyaWJ1dGUiLCJhdHRyaWJ1dGUiLCJyZW5kZXJBbGlhc2VzIiwiYWxpYXNlcyIsIm91dHB1dCIsImFsaWFzIiwicGF0dGVybiIsInBhdHRlcm5Gcm9tRXhwcmVzc2lvbiIsImFsaWFzZXNGcm9tUGF0dGVybiIsInRleHQiLCJrZXlzIiwiZ2V0U3BlY2lmaWNzRm9yR2VuZXJpYyIsInJlbmRlclNwZWNpZmljIiwiZGVmYXVsdE1hcmsiLCJzIiwicGFkZGluZ0xlZnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhcHBsaWNhdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2V0T3B0aW9uUElEIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQU9DOztJQUVLQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs0TkF3SGdCLFVBQUNDLElBQUQsRUFBOEI7QUFDaEQsYUFDRSxNQUFDLDREQUFELENBQUssSUFBTDtBQUNFLGlCQUFTLEVBQUVDLDREQUFNLENBQUNDLE1BRHBCO0FBRUUsV0FBRyxFQUFFRixJQUFJLENBQUNHLEdBRlo7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFLQyxLQUFMLENBQVdDLGdCQUFYLENBQTRCTCxJQUFJLENBQUNHLEdBQWpDLENBQU47QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLR0gsSUFBSSxDQUFDTSxJQUxSLFFBS2dCTixJQUFJLENBQUNHLEdBTHJCLE1BREY7QUFTRCxLOzs7Ozs7O0FBaklEO0FBQ0E7QUFDQTs2QkFFUztBQUNQLGFBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRUksZUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGdCQUFNLEVBQUUsTUFBekI7QUFBaUNDLGtCQUFRLEVBQUU7QUFBM0MsU0FBWjtBQUFB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QUFPO0FBQ0xqRixvQkFBZ0IsRUFBRSwwQkFBQ0YsR0FBRCxFQUFjO0FBQzlCbUYsY0FBUSxDQUFDQyw4REFBWSxDQUFDcEYsR0FBRCxDQUFiLENBQVI7QUFDRDtBQUhJLEdBQVA7QUFLRDs7QUFFY3FGLDJIQUFPLENBQ3BCTCxlQURvQixFQUVwQkUsa0JBRm9CLENBQVAsQ0FHYnRGLG9CQUhhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjZkMGViOWNjMTUzYjljZjM0MGY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFsaWFzZXNGcm9tUGF0dGVybixcclxuICBBdHRyaWJ1dGVEZXNjcmlwdGlvbixcclxuICBLZXksXHJcbiAgUElELFxyXG4gIHBhdHRlcm5Gcm9tRXhwcmVzc2lvbixcclxuICBXb3JsZCxcclxuICBHZW5lcmljVHlwZWRFbnRpdHksXHJcbiAgRGltZW5zaW9uXHJcbn0gZnJvbSAncHJpeC1maXhlJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCB7IEZhQ2hlY2tDaXJjbGUsIEZhVGltZXMsIEZhV2luZG93Q2xvc2UgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7IEFueUFjdGlvbiwgQXBwbGljYXRpb25TdGF0ZSwgc2V0T3B0aW9uUElEIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgd29ybGQ6IFdvcmxkO1xyXG4gIGN1cnJlbnRQSUQ6IFBJRDtcclxuICBvcHRpb25QSUQ6IFBJRDtcclxuICBzZWxlY3Rpb25DaGFuZ2VkOiAocGlkOiBQSUQgfCB1bmRlZmluZWQpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jbGFzcyBQcm9kdWN0RGV0YWlsQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIC8vIG9uU2VsZWN0ID0gKHBpZDogUElEKSA9PiB7XHJcbiAgLy8gICB0aGlzLnByb3BzLnNlbGVjdGlvbkNoYW5nZWQocGlkKTtcclxuICAvLyB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnYXV0byd9fT5cclxuICAgICAgICB7dGhpcy5yZW5kZXJHZW5lcmljKHRoaXMucHJvcHMud29ybGQpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJHZW5lcmljKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgY29uc3QgY2F0YWxvZyA9IHdvcmxkLmNhdGFsb2c7XHJcblxyXG4gICAgbGV0IHBpZCA9IHRoaXMucHJvcHMuY3VycmVudFBJRDtcclxuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvblBJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBpZCA9IHRoaXMucHJvcHMub3B0aW9uUElEO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gW1xyXG4gICAgICA8ZGl2IHN0eWxlPXt7ZmxleEdyb3c6IDF9fT48L2Rpdj4sXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PSdsaWdodCdcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNlbGVjdGlvbkNoYW5nZWQodW5kZWZpbmVkKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGYVRpbWVzIHN0eWxlPXt7Y29sb3I6ICdibHVlJ319Lz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICBdO1xyXG5cclxuICAgIGlmICghY2F0YWxvZy5oYXNQSUQocGlkKSkge1xyXG4gICAgICByZXR1cm4gPGRpdj5Vbmtub3duIFBJRCB7cGlkfTwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBjYXRhbG9nLmdldEdlbmVyaWMocGlkKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3Jvdyd9fT5cclxuICAgICAgICAgICAgPGgxPntpdGVtLm5hbWV9ICh7aXRlbS5waWR9KTwvaDE+XHJcbiAgICAgICAgICAgIHtwaWQgPT09IHRoaXMucHJvcHMub3B0aW9uUElEID8gY2xvc2VCdXR0b24gOiBudWxsIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3Jvdyd9fT5cclxuICAgICAgICAgICAge3JlbmRlclByb2R1Y3RBbGlhc2VzKGl0ZW0pfVxyXG4gICAgICAgICAgICB7cmVuZGVyUHJvZHVjdEF0dHJpYnV0ZXMod29ybGQsIGl0ZW0pfVxyXG4gICAgICAgICAgICB7cmVuZGVyTGVnYWxTcGVjaWZpY3Mod29ybGQsIGl0ZW0pfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJMZWdhbE9wdGlvbnMod29ybGQsIGl0ZW0pfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJFeGx1c2lvblNldHMod29ybGQsIGl0ZW0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJMZWdhbE9wdGlvbnMod29ybGQ6IFdvcmxkLCBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICAgIGNvbnN0IGNhdGFsb2cgPSB3b3JsZC5jYXRhbG9nO1xyXG4gICAgY29uc3QgcnVsZXMgPSB3b3JsZC5ydWxlQ2hlY2tlcjtcclxuICBcclxuICAgIGNvbnN0IHNwZWNpZmljID0gY2F0YWxvZy5nZXRTcGVjaWZpYyhpdGVtLmRlZmF1bHRLZXkpO1xyXG4gICAgY29uc3QgaXRlbXM6IEdlbmVyaWNUeXBlZEVudGl0eVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkUElEIG9mIHJ1bGVzLmdldFZhbGlkQ2hpbGRyZW4oaXRlbS5kZWZhdWx0S2V5KSkge1xyXG4gICAgICBpZiAoY2F0YWxvZy5oYXNQSUQoY2hpbGRQSUQpKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjYXRhbG9nLmdldEdlbmVyaWMoY2hpbGRQSUQpO1xyXG4gICAgICAgIGl0ZW1zLnB1c2goY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpdGVtcy5zb3J0KChhLGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJywgd2hpdGVTcGFjZTogJ25vd3JhcCd9fT5cclxuICAgICAgICAgIE9wdGlvbnMgZm9yIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmF5J319PlxyXG4gICAgICAgICAgICB7c3BlY2lmaWMubmFtZX0gKHtzcGVjaWZpYy5rZXl9LCB7c3BlY2lmaWMuc2t1fSlcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXRlbXMubWFwKHRoaXMucmVuZGVyR2VuZXJpY0xpbmspfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7ICBcclxuICB9XHJcblxyXG4gIHJlbmRlckV4bHVzaW9uU2V0cyh3b3JsZDogV29ybGQsIGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eSkge1xyXG4gICAgY29uc3QgY2F0YWxvZyA9IHdvcmxkLmNhdGFsb2c7XHJcbiAgICBjb25zdCBydWxlcyA9IHdvcmxkLnJ1bGVDaGVja2VyO1xyXG4gICAgY29uc3Qgc2V0cyA9IFsuLi5ydWxlcy5nZXRFeGNsdXNpb25Hcm91cHMoaXRlbS5waWQpXTtcclxuXHJcbiAgXHJcbiAgICBjb25zdCByZW5kZXJPbmVFeGx1c2lvblNldCA9IChncm91cDogU2V0PFBJRD4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgcGlkcyA9IFsuLi5ncm91cC52YWx1ZXMoKV07XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gcGlkcy5tYXAocGlkID0+IGNhdGFsb2cuZ2V0R2VuZXJpYyhwaWQpKTtcclxuICAgICAgaXRlbXMuc29ydCgoYSxiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PlNldCB7aW5kZXh9PC9kaXY+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKHRoaXMucmVuZGVyR2VuZXJpY0xpbmspfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51RGV0YWlsQ29sdW1ufT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+RXhjbHVzaW9uIFNldHM8L2Rpdj5cclxuICAgICAgICB7c2V0cy5tYXAocmVuZGVyT25lRXhsdXNpb25TZXQpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJPbmVQSUQocGlkOiBQSUQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSBjYXRhbG9nLmdldEdlbmVyaWMocGlkKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICB7Y2hpbGQubmFtZX0gKHtjaGlsZC5waWR9KVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJTb3J0ZWRHZW5lcmljcyhpdGVtczogR2VuZXJpY1R5cGVkRW50aXR5W10pIHtcclxuICAgIGl0ZW1zLnNvcnQoKGEsYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XHJcbiAgICByZXR1cm4gaXRlbXMubWFwKHRoaXMucmVuZGVyR2VuZXJpY0xpbmspO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyR2VuZXJpY0xpbmsgPSAoaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TmF2LkxpbmtcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9XHJcbiAgICAgICAga2V5PXtpdGVtLnBpZH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNlbGVjdGlvbkNoYW5nZWQoaXRlbS5waWQpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2l0ZW0ubmFtZX0gKHtpdGVtLnBpZH0pXHJcbiAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdEF0dHJpYnV0ZXMoXHJcbiAgd29ybGQ6IFdvcmxkLFxyXG4gIGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eVxyXG4pIHtcclxuICBjb25zdCB0ZW5zb3IgPSB3b3JsZC5hdHRyaWJ1dGVJbmZvLmdldFRlbnNvcihpdGVtLnRlbnNvcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5BdHRyaWJ1dGVzPC9kaXY+XHJcbiAgICAgIHt0ZW5zb3IuZGltZW5zaW9ucy5tYXAocmVuZGVyRGltZW5zaW9uKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckRpbWVuc2lvbihkaW1lbnNpb246IERpbWVuc2lvbiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT57ZGltZW5zaW9uLm5hbWV9PC9kaXY+XHJcbiAgICAgICAge2RpbWVuc2lvbi5hdHRyaWJ1dGVzLm1hcChyZW5kZXJBdHRyaWJ1dGUpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckF0dHJpYnV0ZShhdHRyaWJ1dGU6IEF0dHJpYnV0ZURlc2NyaXB0aW9uLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PnthdHRyaWJ1dGUubmFtZX08L2Rpdj5cclxuICAgICAgICB7IHJlbmRlckFsaWFzZXMoYXR0cmlidXRlLmFsaWFzZXMpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9kdWN0QWxpYXNlcyhpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51RGV0YWlsQ29sdW1ufT5cclxuICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PkFsaWFzZXM8L2Rpdj5cclxuICAgICAge3JlbmRlckFsaWFzZXMoaXRlbS5hbGlhc2VzKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQWxpYXNlcyhhbGlhc2VzOiBzdHJpbmdbXSkge1xyXG4gIGNvbnN0IG91dHB1dDogc3RyaW5nW10gPSBbXTtcclxuICBmb3IgKGNvbnN0IGFsaWFzIG9mIGFsaWFzZXMpIHtcclxuICAgIGNvbnN0IHBhdHRlcm4gPSBwYXR0ZXJuRnJvbUV4cHJlc3Npb24oYWxpYXMpO1xyXG4gICAgZm9yIChjb25zdCB0ZXh0IG9mIGFsaWFzZXNGcm9tUGF0dGVybihwYXR0ZXJuKSkge1xyXG4gICAgICBvdXRwdXQucHVzaCh0ZXh0KTtcclxuICAgIH1cclxuICB9XHJcbiAgb3V0cHV0LnNvcnQoKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dC5tYXAoKGFsaWFzLCBpbmRleCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PnthbGlhc308L2Rpdj5cclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGVnYWxTcGVjaWZpY3Mod29ybGQ6IFdvcmxkLCBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuICBjb25zdCBrZXlzID0gWy4uLmNhdGFsb2cuZ2V0U3BlY2lmaWNzRm9yR2VuZXJpYyhpdGVtLnBpZCldO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+U3BlY2lmaWMgRm9ybXM8L2Rpdj5cclxuICAgICAge2tleXMubWFwKHJlbmRlclNwZWNpZmljKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlclNwZWNpZmljKGtleTogS2V5LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0TWFyayA9IGl0ZW0uZGVmYXVsdEtleSA9PT0ga2V5ID8gJyA8PT0gZGVmYXVsdCcgOiAnJztcclxuICAgIGNvbnN0IHMgPSBjYXRhbG9nLmdldFNwZWNpZmljKGtleSk7XHJcbiAgICBjb25zdCBuYW1lID0gcy5uYW1lO1xyXG4gICAgY29uc3Qgc2t1ID0gcy5za3U7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAge25hbWV9ICh7a2V5fSwge3NrdX0pXHJcbiAgICAgICAge2RlZmF1bHRNYXJrPyA8c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnMWV4J319PlxyXG4gICAgICAgICAgPEZhQ2hlY2tDaXJjbGUgdGl0bGU9XCJkZWZhdWx0IGZvcm1cIi8+XHJcbiAgICAgICAgPC9zcGFuPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdvcmxkOiBhcHBsaWNhdGlvbi53b3JsZCxcclxuICAgIGN1cnJlbnRQSUQ6IGFwcGxpY2F0aW9uLmN1cnJlbnRQSUQsXHJcbiAgICBvcHRpb25QSUQ6IGFwcGxpY2F0aW9uLm9wdGlvblBJRCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0aW9uQ2hhbmdlZDogKHBpZDogUElEKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldE9wdGlvblBJRChwaWQpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoUHJvZHVjdERldGFpbENvbnRyb2wpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9