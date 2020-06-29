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
          return _this.props.optionChanged(item.pid);
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

      var closeButton = __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "light",
        onClick: function onClick() {
          return _this2.props.optionChanged(undefined);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaTimes"], {
        style: {
          color: 'blue'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }));

      if (!catalog.hasPID(pid)) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 14
          }
        }, "Unknown PID ", pid);
      } else {
        var item = catalog.getGeneric(pid);
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
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
            lineNumber: 66,
            columnNumber: 11
          }
        }, __jsx("h1", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }
        }, item.name, " (", item.pid, ")"), __jsx("div", {
          style: {
            flexGrow: 1
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }
        }), pid === this.props.optionPID ? closeButton : null), __jsx("div", {
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
    optionChanged: function optionChanged(pid) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsLWNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxDb250cm9sIiwiaXRlbSIsInN0eWxlcyIsIm5lc3RlZCIsInBpZCIsInByb3BzIiwib3B0aW9uQ2hhbmdlZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwicmVuZGVyR2VuZXJpYyIsIndvcmxkIiwiY2F0YWxvZyIsImN1cnJlbnRQSUQiLCJvcHRpb25QSUQiLCJ1bmRlZmluZWQiLCJjbG9zZUJ1dHRvbiIsImNvbG9yIiwiaGFzUElEIiwiZ2V0R2VuZXJpYyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleEdyb3ciLCJyZW5kZXJQcm9kdWN0QWxpYXNlcyIsInJlbmRlclByb2R1Y3RBdHRyaWJ1dGVzIiwicmVuZGVyTGVnYWxTcGVjaWZpY3MiLCJyZW5kZXJMZWdhbE9wdGlvbnMiLCJyZW5kZXJFeGx1c2lvblNldHMiLCJydWxlcyIsInJ1bGVDaGVja2VyIiwic3BlY2lmaWMiLCJnZXRTcGVjaWZpYyIsImRlZmF1bHRLZXkiLCJpdGVtcyIsImdldFZhbGlkQ2hpbGRyZW4iLCJjaGlsZFBJRCIsImNoaWxkIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtZW51RGV0YWlsQ29sdW1uIiwiZm9udFdlaWdodCIsIndoaXRlU3BhY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJrZXkiLCJza3UiLCJtYXAiLCJyZW5kZXJHZW5lcmljTGluayIsInNldHMiLCJnZXRFeGNsdXNpb25Hcm91cHMiLCJyZW5kZXJPbmVFeGx1c2lvblNldCIsImdyb3VwIiwiaW5kZXgiLCJwaWRzIiwidmFsdWVzIiwicmVuZGVyT25lUElEIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0ZW5zb3IiLCJhdHRyaWJ1dGVJbmZvIiwiZ2V0VGVuc29yIiwiZGltZW5zaW9ucyIsInJlbmRlckRpbWVuc2lvbiIsImRpbWVuc2lvbiIsImF0dHJpYnV0ZXMiLCJyZW5kZXJBdHRyaWJ1dGUiLCJhdHRyaWJ1dGUiLCJyZW5kZXJBbGlhc2VzIiwiYWxpYXNlcyIsIm91dHB1dCIsImFsaWFzIiwicGF0dGVybiIsInBhdHRlcm5Gcm9tRXhwcmVzc2lvbiIsImFsaWFzZXNGcm9tUGF0dGVybiIsInRleHQiLCJrZXlzIiwiZ2V0U3BlY2lmaWNzRm9yR2VuZXJpYyIsInJlbmRlclNwZWNpZmljIiwiZGVmYXVsdE1hcmsiLCJzIiwicGFkZGluZ0xlZnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhcHBsaWNhdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2V0T3B0aW9uUElEIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQU9DOztJQUVLQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs0TkF3SGdCLFVBQUNDLElBQUQsRUFBOEI7QUFDaEQsYUFDRSxNQUFDLDREQUFELENBQUssSUFBTDtBQUNFLGlCQUFTLEVBQUVDLDREQUFNLENBQUNDLE1BRHBCO0FBRUUsV0FBRyxFQUFFRixJQUFJLENBQUNHLEdBRlo7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFLQyxLQUFMLENBQVdDLGFBQVgsQ0FBeUJMLElBQUksQ0FBQ0csR0FBOUIsQ0FBTjtBQUFBLFNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtHSCxJQUFJLENBQUNNLElBTFIsUUFLZ0JOLElBQUksQ0FBQ0csR0FMckIsTUFERjtBQVNELEs7Ozs7Ozs7QUFqSUQ7QUFDQTtBQUNBOzZCQUVTO0FBQ1AsYUFDRTtBQUFLLGFBQUssRUFBRTtBQUFFSSxlQUFLLEVBQUUsTUFBVDtBQUFpQkMsZ0JBQU0sRUFBRSxNQUF6QjtBQUFpQ0Msa0JBQVEsRUFBRTtBQUEzQyxTQUFaO0FBQUE7QUFB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RUFBRSx1QkFBQ0YsR0FBRCxFQUFjO0FBQzNCbUYsY0FBUSxDQUFDQyw4REFBWSxDQUFDcEYsR0FBRCxDQUFiLENBQVI7QUFDRDtBQUhJLEdBQVA7QUFLRDs7QUFFY3FGLDJIQUFPLENBQ3BCTCxlQURvQixFQUVwQkUsa0JBRm9CLENBQVAsQ0FHYnRGLG9CQUhhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmYyMTFlZTZhZTgxZDQ3MTNkMzY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFsaWFzZXNGcm9tUGF0dGVybixcclxuICBBdHRyaWJ1dGVEZXNjcmlwdGlvbixcclxuICBLZXksXHJcbiAgUElELFxyXG4gIHBhdHRlcm5Gcm9tRXhwcmVzc2lvbixcclxuICBXb3JsZCxcclxuICBHZW5lcmljVHlwZWRFbnRpdHksXHJcbiAgRGltZW5zaW9uXHJcbn0gZnJvbSAncHJpeC1maXhlJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCB7IEZhQ2hlY2tDaXJjbGUsIEZhVGltZXMsIEZhV2luZG93Q2xvc2UgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCB7IEFueUFjdGlvbiwgQXBwbGljYXRpb25TdGF0ZSwgc2V0T3B0aW9uUElEIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9scy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgd29ybGQ6IFdvcmxkO1xyXG4gIGN1cnJlbnRQSUQ6IFBJRDtcclxuICBvcHRpb25QSUQ6IFBJRDtcclxuICBvcHRpb25DaGFuZ2VkOiAocGlkOiBQSUQgfCB1bmRlZmluZWQpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jbGFzcyBQcm9kdWN0RGV0YWlsQ29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIC8vIG9uU2VsZWN0ID0gKHBpZDogUElEKSA9PiB7XHJcbiAgLy8gICB0aGlzLnByb3BzLnNlbGVjdGlvbkNoYW5nZWQocGlkKTtcclxuICAvLyB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnYXV0byd9fT5cclxuICAgICAgICB7dGhpcy5yZW5kZXJHZW5lcmljKHRoaXMucHJvcHMud29ybGQpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJHZW5lcmljKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgY29uc3QgY2F0YWxvZyA9IHdvcmxkLmNhdGFsb2c7XHJcblxyXG4gICAgbGV0IHBpZCA9IHRoaXMucHJvcHMuY3VycmVudFBJRDtcclxuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvblBJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBpZCA9IHRoaXMucHJvcHMub3B0aW9uUElEO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD0nbGlnaHQnXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcHRpb25DaGFuZ2VkKHVuZGVmaW5lZCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxGYVRpbWVzIHN0eWxlPXt7Y29sb3I6ICdibHVlJ319Lz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApO1xyXG5cclxuICAgIGlmICghY2F0YWxvZy5oYXNQSUQocGlkKSkge1xyXG4gICAgICByZXR1cm4gPGRpdj5Vbmtub3duIFBJRCB7cGlkfTwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBjYXRhbG9nLmdldEdlbmVyaWMocGlkKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3Jvdyd9fT5cclxuICAgICAgICAgICAgPGgxPntpdGVtLm5hbWV9ICh7aXRlbS5waWR9KTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4R3JvdzogMX19PjwvZGl2PlxyXG4gICAgICAgICAgICB7cGlkID09PSB0aGlzLnByb3BzLm9wdGlvblBJRCA/IGNsb3NlQnV0dG9uIDogbnVsbCB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJQcm9kdWN0QWxpYXNlcyhpdGVtKX1cclxuICAgICAgICAgICAge3JlbmRlclByb2R1Y3RBdHRyaWJ1dGVzKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgICAge3JlbmRlckxlZ2FsU3BlY2lmaWNzKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyTGVnYWxPcHRpb25zKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyRXhsdXNpb25TZXRzKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGVnYWxPcHRpb25zKHdvcmxkOiBXb3JsZCwgaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuICAgIGNvbnN0IHJ1bGVzID0gd29ybGQucnVsZUNoZWNrZXI7XHJcbiAgXHJcbiAgICBjb25zdCBzcGVjaWZpYyA9IGNhdGFsb2cuZ2V0U3BlY2lmaWMoaXRlbS5kZWZhdWx0S2V5KTtcclxuICAgIGNvbnN0IGl0ZW1zOiBHZW5lcmljVHlwZWRFbnRpdHlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaGlsZFBJRCBvZiBydWxlcy5nZXRWYWxpZENoaWxkcmVuKGl0ZW0uZGVmYXVsdEtleSkpIHtcclxuICAgICAgaWYgKGNhdGFsb2cuaGFzUElEKGNoaWxkUElEKSkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2F0YWxvZy5nZXRHZW5lcmljKGNoaWxkUElEKTtcclxuICAgICAgICBpdGVtcy5wdXNoKGNoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXRlbXMuc29ydCgoYSxiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnfX0+XHJcbiAgICAgICAgICBPcHRpb25zIGZvciA8c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheSd9fT5cclxuICAgICAgICAgICAge3NwZWNpZmljLm5hbWV9ICh7c3BlY2lmaWMua2V5fSwge3NwZWNpZmljLnNrdX0pXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2l0ZW1zLm1hcCh0aGlzLnJlbmRlckdlbmVyaWNMaW5rKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApOyAgXHJcbiAgfVxyXG5cclxuICByZW5kZXJFeGx1c2lvblNldHMod29ybGQ6IFdvcmxkLCBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICAgIGNvbnN0IGNhdGFsb2cgPSB3b3JsZC5jYXRhbG9nO1xyXG4gICAgY29uc3QgcnVsZXMgPSB3b3JsZC5ydWxlQ2hlY2tlcjtcclxuICAgIGNvbnN0IHNldHMgPSBbLi4ucnVsZXMuZ2V0RXhjbHVzaW9uR3JvdXBzKGl0ZW0ucGlkKV07XHJcblxyXG4gIFxyXG4gICAgY29uc3QgcmVuZGVyT25lRXhsdXNpb25TZXQgPSAoZ3JvdXA6IFNldDxQSUQ+LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBpZHMgPSBbLi4uZ3JvdXAudmFsdWVzKCldO1xyXG4gICAgICBjb25zdCBpdGVtcyA9IHBpZHMubWFwKHBpZCA9PiBjYXRhbG9nLmdldEdlbmVyaWMocGlkKSk7XHJcbiAgICAgIGl0ZW1zLnNvcnQoKGEsYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5TZXQge2luZGV4fTwvZGl2PlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCh0aGlzLnJlbmRlckdlbmVyaWNMaW5rKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PkV4Y2x1c2lvbiBTZXRzPC9kaXY+XHJcbiAgICAgICAge3NldHMubWFwKHJlbmRlck9uZUV4bHVzaW9uU2V0KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyT25lUElEKHBpZDogUElELCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gY2F0YWxvZy5nZXRHZW5lcmljKHBpZCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAge2NoaWxkLm5hbWV9ICh7Y2hpbGQucGlkfSlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU29ydGVkR2VuZXJpY3MoaXRlbXM6IEdlbmVyaWNUeXBlZEVudGl0eVtdKSB7XHJcbiAgICBpdGVtcy5zb3J0KChhLGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xyXG4gICAgcmV0dXJuIGl0ZW1zLm1hcCh0aGlzLnJlbmRlckdlbmVyaWNMaW5rKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckdlbmVyaWNMaW5rID0gKGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfVxyXG4gICAgICAgIGtleT17aXRlbS5waWR9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcHRpb25DaGFuZ2VkKGl0ZW0ucGlkKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpdGVtLm5hbWV9ICh7aXRlbS5waWR9KVxyXG4gICAgICA8L05hdi5MaW5rPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2R1Y3RBdHRyaWJ1dGVzKFxyXG4gIHdvcmxkOiBXb3JsZCxcclxuICBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHlcclxuKSB7XHJcbiAgY29uc3QgdGVuc29yID0gd29ybGQuYXR0cmlidXRlSW5mby5nZXRUZW5zb3IoaXRlbS50ZW5zb3IpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+QXR0cmlidXRlczwvZGl2PlxyXG4gICAgICB7dGVuc29yLmRpbWVuc2lvbnMubWFwKHJlbmRlckRpbWVuc2lvbil9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXJEaW1lbnNpb24oZGltZW5zaW9uOiBEaW1lbnNpb24sIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+e2RpbWVuc2lvbi5uYW1lfTwvZGl2PlxyXG4gICAgICAgIHtkaW1lbnNpb24uYXR0cmlidXRlcy5tYXAocmVuZGVyQXR0cmlidXRlKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJBdHRyaWJ1dGUoYXR0cmlidXRlOiBBdHRyaWJ1dGVEZXNjcmlwdGlvbiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT57YXR0cmlidXRlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgeyByZW5kZXJBbGlhc2VzKGF0dHJpYnV0ZS5hbGlhc2VzKSB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdEFsaWFzZXMoaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5BbGlhc2VzPC9kaXY+XHJcbiAgICAgIHtyZW5kZXJBbGlhc2VzKGl0ZW0uYWxpYXNlcyl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFsaWFzZXMoYWxpYXNlczogc3RyaW5nW10pIHtcclxuICBjb25zdCBvdXRwdXQ6IHN0cmluZ1tdID0gW107XHJcbiAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XHJcbiAgICBjb25zdCBwYXR0ZXJuID0gcGF0dGVybkZyb21FeHByZXNzaW9uKGFsaWFzKTtcclxuICAgIGZvciAoY29uc3QgdGV4dCBvZiBhbGlhc2VzRnJvbVBhdHRlcm4ocGF0dGVybikpIHtcclxuICAgICAgb3V0cHV0LnB1c2godGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG91dHB1dC5zb3J0KCk7XHJcblxyXG4gIHJldHVybiBvdXRwdXQubWFwKChhbGlhcywgaW5kZXgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT57YWxpYXN9PC9kaXY+XHJcbiAgKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxlZ2FsU3BlY2lmaWNzKHdvcmxkOiBXb3JsZCwgaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSB7XHJcbiAgY29uc3QgY2F0YWxvZyA9IHdvcmxkLmNhdGFsb2c7XHJcbiAgY29uc3Qga2V5cyA9IFsuLi5jYXRhbG9nLmdldFNwZWNpZmljc0ZvckdlbmVyaWMoaXRlbS5waWQpXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51RGV0YWlsQ29sdW1ufT5cclxuICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PlNwZWNpZmljIEZvcm1zPC9kaXY+XHJcbiAgICAgIHtrZXlzLm1hcChyZW5kZXJTcGVjaWZpYyl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXJTcGVjaWZpYyhrZXk6IEtleSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgZGVmYXVsdE1hcmsgPSBpdGVtLmRlZmF1bHRLZXkgPT09IGtleSA/ICcgPD09IGRlZmF1bHQnIDogJyc7XHJcbiAgICBjb25zdCBzID0gY2F0YWxvZy5nZXRTcGVjaWZpYyhrZXkpO1xyXG4gICAgY29uc3QgbmFtZSA9IHMubmFtZTtcclxuICAgIGNvbnN0IHNrdSA9IHMuc2t1O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIHtuYW1lfSAoe2tleX0sIHtza3V9KVxyXG4gICAgICAgIHtkZWZhdWx0TWFyaz8gPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogJzFleCd9fT5cclxuICAgICAgICAgIDxGYUNoZWNrQ2lyY2xlIHRpdGxlPVwiZGVmYXVsdCBmb3JtXCIvPlxyXG4gICAgICAgIDwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB3b3JsZDogYXBwbGljYXRpb24ud29ybGQsXHJcbiAgICBjdXJyZW50UElEOiBhcHBsaWNhdGlvbi5jdXJyZW50UElELFxyXG4gICAgb3B0aW9uUElEOiBhcHBsaWNhdGlvbi5vcHRpb25QSUQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9wdGlvbkNoYW5nZWQ6IChwaWQ6IFBJRCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRPcHRpb25QSUQocGlkKSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFByb2R1Y3REZXRhaWxDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==