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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsLWNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxDb250cm9sIiwiaXRlbSIsInN0eWxlcyIsIm5lc3RlZCIsInBpZCIsInByb3BzIiwib3B0aW9uQ2hhbmdlZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwicmVuZGVyR2VuZXJpYyIsIndvcmxkIiwiY2F0YWxvZyIsImN1cnJlbnRQSUQiLCJvcHRpb25QSUQiLCJ1bmRlZmluZWQiLCJjbG9zZUJ1dHRvbiIsImNvbG9yIiwiaGFzUElEIiwiZ2V0R2VuZXJpYyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleEdyb3ciLCJyZW5kZXJQcm9kdWN0QWxpYXNlcyIsInJlbmRlclByb2R1Y3RBdHRyaWJ1dGVzIiwicmVuZGVyTGVnYWxTcGVjaWZpY3MiLCJyZW5kZXJMZWdhbE9wdGlvbnMiLCJyZW5kZXJFeGx1c2lvblNldHMiLCJydWxlcyIsInJ1bGVDaGVja2VyIiwic3BlY2lmaWMiLCJnZXRTcGVjaWZpYyIsImRlZmF1bHRLZXkiLCJpdGVtcyIsImdldFZhbGlkQ2hpbGRyZW4iLCJjaGlsZFBJRCIsImNoaWxkIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtZW51RGV0YWlsQ29sdW1uIiwiZm9udFdlaWdodCIsIndoaXRlU3BhY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJrZXkiLCJza3UiLCJtYXAiLCJyZW5kZXJHZW5lcmljTGluayIsInNldHMiLCJnZXRFeGNsdXNpb25Hcm91cHMiLCJyZW5kZXJPbmVFeGx1c2lvblNldCIsImdyb3VwIiwiaW5kZXgiLCJwaWRzIiwidmFsdWVzIiwicmVuZGVyT25lUElEIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0ZW5zb3IiLCJhdHRyaWJ1dGVJbmZvIiwiZ2V0VGVuc29yIiwiZGltZW5zaW9ucyIsInJlbmRlckRpbWVuc2lvbiIsImRpbWVuc2lvbiIsImF0dHJpYnV0ZXMiLCJyZW5kZXJBdHRyaWJ1dGUiLCJhdHRyaWJ1dGUiLCJyZW5kZXJBbGlhc2VzIiwiYWxpYXNlcyIsIm91dHB1dCIsImFsaWFzIiwicGF0dGVybiIsInBhdHRlcm5Gcm9tRXhwcmVzc2lvbiIsImFsaWFzZXNGcm9tUGF0dGVybiIsInRleHQiLCJrZXlzIiwiZ2V0U3BlY2lmaWNzRm9yR2VuZXJpYyIsInJlbmRlclNwZWNpZmljIiwiZGVmYXVsdE1hcmsiLCJzIiwicGFkZGluZ0xlZnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhcHBsaWNhdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2VsZWN0aW9uQ2hhbmdlZCIsInNldE9wdGlvblBJRCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFPQzs7SUFFS0Esb0I7Ozs7Ozs7Ozs7Ozs7Ozs7NE5Bd0hnQixVQUFDQyxJQUFELEVBQThCO0FBQ2hELGFBQ0UsTUFBQyw0REFBRCxDQUFLLElBQUw7QUFDRSxpQkFBUyxFQUFFQyw0REFBTSxDQUFDQyxNQURwQjtBQUVFLFdBQUcsRUFBRUYsSUFBSSxDQUFDRyxHQUZaO0FBR0UsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBS0MsS0FBTCxDQUFXQyxhQUFYLENBQXlCTCxJQUFJLENBQUNHLEdBQTlCLENBQU47QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLR0gsSUFBSSxDQUFDTSxJQUxSLFFBS2dCTixJQUFJLENBQUNHLEdBTHJCLE1BREY7QUFTRCxLOzs7Ozs7O0FBaklEO0FBQ0E7QUFDQTs2QkFFUztBQUNQLGFBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRUksZUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGdCQUFNLEVBQUUsTUFBekI7QUFBaUNDLGtCQUFRLEVBQUU7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LFNBQU87QUFDTEMsb0JBQWdCLEVBQUUsMEJBQUNwRixHQUFELEVBQWM7QUFDOUJtRixjQUFRLENBQUNFLDhEQUFZLENBQUNyRixHQUFELENBQWIsQ0FBUjtBQUNEO0FBSEksR0FBUDtBQUtEOztBQUVjc0YsMkhBQU8sQ0FDcEJOLGVBRG9CLEVBRXBCRSxrQkFGb0IsQ0FBUCxDQUdidEYsb0JBSGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjdkMTk5NmM3MDhjNjQ2OTY3NWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYWxpYXNlc0Zyb21QYXR0ZXJuLFxyXG4gIEF0dHJpYnV0ZURlc2NyaXB0aW9uLFxyXG4gIEtleSxcclxuICBQSUQsXHJcbiAgcGF0dGVybkZyb21FeHByZXNzaW9uLFxyXG4gIFdvcmxkLFxyXG4gIEdlbmVyaWNUeXBlZEVudGl0eSxcclxuICBEaW1lbnNpb25cclxufSBmcm9tICdwcml4LWZpeGUnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IHsgRmFDaGVja0NpcmNsZSwgRmFUaW1lcywgRmFXaW5kb3dDbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHsgQW55QWN0aW9uLCBBcHBsaWNhdGlvblN0YXRlLCBzZXRPcHRpb25QSUQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB3b3JsZDogV29ybGQ7XHJcbiAgY3VycmVudFBJRDogUElEO1xyXG4gIG9wdGlvblBJRDogUElEO1xyXG4gIG9wdGlvbkNoYW5nZWQ6IChwaWQ6IFBJRCB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNsYXNzIFByb2R1Y3REZXRhaWxDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgLy8gb25TZWxlY3QgPSAocGlkOiBQSUQpID0+IHtcclxuICAvLyAgIHRoaXMucHJvcHMuc2VsZWN0aW9uQ2hhbmdlZChwaWQpO1xyXG4gIC8vIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckdlbmVyaWModGhpcy5wcm9wcy53b3JsZCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckdlbmVyaWMod29ybGQ6IFdvcmxkKSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuXHJcbiAgICBsZXQgcGlkID0gdGhpcy5wcm9wcy5jdXJyZW50UElEO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9uUElEICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGlkID0gdGhpcy5wcm9wcy5vcHRpb25QSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PSdsaWdodCdcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wdGlvbkNoYW5nZWQodW5kZWZpbmVkKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgPEZhVGltZXMgc3R5bGU9e3tjb2xvcjogJ2JsdWUnfX0vPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFjYXRhbG9nLmhhc1BJRChwaWQpKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PlVua25vd24gUElEIHtwaWR9PC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGNhdGFsb2cuZ2V0R2VuZXJpYyhwaWQpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93J319PlxyXG4gICAgICAgICAgICA8aDE+e2l0ZW0ubmFtZX0gKHtpdGVtLnBpZH0pPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhHcm93OiAxfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIHtwaWQgPT09IHRoaXMucHJvcHMub3B0aW9uUElEID8gY2xvc2VCdXR0b24gOiBudWxsIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3Jvdyd9fT5cclxuICAgICAgICAgICAge3JlbmRlclByb2R1Y3RBbGlhc2VzKGl0ZW0pfVxyXG4gICAgICAgICAgICB7cmVuZGVyUHJvZHVjdEF0dHJpYnV0ZXMod29ybGQsIGl0ZW0pfVxyXG4gICAgICAgICAgICB7cmVuZGVyTGVnYWxTcGVjaWZpY3Mod29ybGQsIGl0ZW0pfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJMZWdhbE9wdGlvbnMod29ybGQsIGl0ZW0pfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJFeGx1c2lvblNldHMod29ybGQsIGl0ZW0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJMZWdhbE9wdGlvbnMod29ybGQ6IFdvcmxkLCBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICAgIGNvbnN0IGNhdGFsb2cgPSB3b3JsZC5jYXRhbG9nO1xyXG4gICAgY29uc3QgcnVsZXMgPSB3b3JsZC5ydWxlQ2hlY2tlcjtcclxuICBcclxuICAgIGNvbnN0IHNwZWNpZmljID0gY2F0YWxvZy5nZXRTcGVjaWZpYyhpdGVtLmRlZmF1bHRLZXkpO1xyXG4gICAgY29uc3QgaXRlbXM6IEdlbmVyaWNUeXBlZEVudGl0eVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkUElEIG9mIHJ1bGVzLmdldFZhbGlkQ2hpbGRyZW4oaXRlbS5kZWZhdWx0S2V5KSkge1xyXG4gICAgICBpZiAoY2F0YWxvZy5oYXNQSUQoY2hpbGRQSUQpKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjYXRhbG9nLmdldEdlbmVyaWMoY2hpbGRQSUQpO1xyXG4gICAgICAgIGl0ZW1zLnB1c2goY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpdGVtcy5zb3J0KChhLGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJywgd2hpdGVTcGFjZTogJ25vd3JhcCd9fT5cclxuICAgICAgICAgIE9wdGlvbnMgZm9yIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmF5J319PlxyXG4gICAgICAgICAgICB7c3BlY2lmaWMubmFtZX0gKHtzcGVjaWZpYy5rZXl9LCB7c3BlY2lmaWMuc2t1fSlcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXRlbXMubWFwKHRoaXMucmVuZGVyR2VuZXJpY0xpbmspfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7ICBcclxuICB9XHJcblxyXG4gIHJlbmRlckV4bHVzaW9uU2V0cyh3b3JsZDogV29ybGQsIGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eSkge1xyXG4gICAgY29uc3QgY2F0YWxvZyA9IHdvcmxkLmNhdGFsb2c7XHJcbiAgICBjb25zdCBydWxlcyA9IHdvcmxkLnJ1bGVDaGVja2VyO1xyXG4gICAgY29uc3Qgc2V0cyA9IFsuLi5ydWxlcy5nZXRFeGNsdXNpb25Hcm91cHMoaXRlbS5waWQpXTtcclxuXHJcbiAgXHJcbiAgICBjb25zdCByZW5kZXJPbmVFeGx1c2lvblNldCA9IChncm91cDogU2V0PFBJRD4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgcGlkcyA9IFsuLi5ncm91cC52YWx1ZXMoKV07XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gcGlkcy5tYXAocGlkID0+IGNhdGFsb2cuZ2V0R2VuZXJpYyhwaWQpKTtcclxuICAgICAgaXRlbXMuc29ydCgoYSxiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PlNldCB7aW5kZXh9PC9kaXY+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKHRoaXMucmVuZGVyR2VuZXJpY0xpbmspfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51RGV0YWlsQ29sdW1ufT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+RXhjbHVzaW9uIFNldHM8L2Rpdj5cclxuICAgICAgICB7c2V0cy5tYXAocmVuZGVyT25lRXhsdXNpb25TZXQpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJPbmVQSUQocGlkOiBQSUQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSBjYXRhbG9nLmdldEdlbmVyaWMocGlkKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICB7Y2hpbGQubmFtZX0gKHtjaGlsZC5waWR9KVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJTb3J0ZWRHZW5lcmljcyhpdGVtczogR2VuZXJpY1R5cGVkRW50aXR5W10pIHtcclxuICAgIGl0ZW1zLnNvcnQoKGEsYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XHJcbiAgICByZXR1cm4gaXRlbXMubWFwKHRoaXMucmVuZGVyR2VuZXJpY0xpbmspO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyR2VuZXJpY0xpbmsgPSAoaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TmF2LkxpbmtcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9XHJcbiAgICAgICAga2V5PXtpdGVtLnBpZH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wdGlvbkNoYW5nZWQoaXRlbS5waWQpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2l0ZW0ubmFtZX0gKHtpdGVtLnBpZH0pXHJcbiAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdEF0dHJpYnV0ZXMoXHJcbiAgd29ybGQ6IFdvcmxkLFxyXG4gIGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eVxyXG4pIHtcclxuICBjb25zdCB0ZW5zb3IgPSB3b3JsZC5hdHRyaWJ1dGVJbmZvLmdldFRlbnNvcihpdGVtLnRlbnNvcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5BdHRyaWJ1dGVzPC9kaXY+XHJcbiAgICAgIHt0ZW5zb3IuZGltZW5zaW9ucy5tYXAocmVuZGVyRGltZW5zaW9uKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckRpbWVuc2lvbihkaW1lbnNpb246IERpbWVuc2lvbiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT57ZGltZW5zaW9uLm5hbWV9PC9kaXY+XHJcbiAgICAgICAge2RpbWVuc2lvbi5hdHRyaWJ1dGVzLm1hcChyZW5kZXJBdHRyaWJ1dGUpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckF0dHJpYnV0ZShhdHRyaWJ1dGU6IEF0dHJpYnV0ZURlc2NyaXB0aW9uLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PnthdHRyaWJ1dGUubmFtZX08L2Rpdj5cclxuICAgICAgICB7IHJlbmRlckFsaWFzZXMoYXR0cmlidXRlLmFsaWFzZXMpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9kdWN0QWxpYXNlcyhpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51RGV0YWlsQ29sdW1ufT5cclxuICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PkFsaWFzZXM8L2Rpdj5cclxuICAgICAge3JlbmRlckFsaWFzZXMoaXRlbS5hbGlhc2VzKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQWxpYXNlcyhhbGlhc2VzOiBzdHJpbmdbXSkge1xyXG4gIGNvbnN0IG91dHB1dDogc3RyaW5nW10gPSBbXTtcclxuICBmb3IgKGNvbnN0IGFsaWFzIG9mIGFsaWFzZXMpIHtcclxuICAgIGNvbnN0IHBhdHRlcm4gPSBwYXR0ZXJuRnJvbUV4cHJlc3Npb24oYWxpYXMpO1xyXG4gICAgZm9yIChjb25zdCB0ZXh0IG9mIGFsaWFzZXNGcm9tUGF0dGVybihwYXR0ZXJuKSkge1xyXG4gICAgICBvdXRwdXQucHVzaCh0ZXh0KTtcclxuICAgIH1cclxuICB9XHJcbiAgb3V0cHV0LnNvcnQoKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dC5tYXAoKGFsaWFzLCBpbmRleCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PnthbGlhc308L2Rpdj5cclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGVnYWxTcGVjaWZpY3Mod29ybGQ6IFdvcmxkLCBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuICBjb25zdCBrZXlzID0gWy4uLmNhdGFsb2cuZ2V0U3BlY2lmaWNzRm9yR2VuZXJpYyhpdGVtLnBpZCldO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+U3BlY2lmaWMgRm9ybXM8L2Rpdj5cclxuICAgICAge2tleXMubWFwKHJlbmRlclNwZWNpZmljKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlclNwZWNpZmljKGtleTogS2V5LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0TWFyayA9IGl0ZW0uZGVmYXVsdEtleSA9PT0ga2V5ID8gJyA8PT0gZGVmYXVsdCcgOiAnJztcclxuICAgIGNvbnN0IHMgPSBjYXRhbG9nLmdldFNwZWNpZmljKGtleSk7XHJcbiAgICBjb25zdCBuYW1lID0gcy5uYW1lO1xyXG4gICAgY29uc3Qgc2t1ID0gcy5za3U7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAge25hbWV9ICh7a2V5fSwge3NrdX0pXHJcbiAgICAgICAge2RlZmF1bHRNYXJrPyA8c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnMWV4J319PlxyXG4gICAgICAgICAgPEZhQ2hlY2tDaXJjbGUgdGl0bGU9XCJkZWZhdWx0IGZvcm1cIi8+XHJcbiAgICAgICAgPC9zcGFuPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdvcmxkOiBhcHBsaWNhdGlvbi53b3JsZCxcclxuICAgIGN1cnJlbnRQSUQ6IGFwcGxpY2F0aW9uLmN1cnJlbnRQSUQsXHJcbiAgICBvcHRpb25QSUQ6IGFwcGxpY2F0aW9uLm9wdGlvblBJRCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0aW9uQ2hhbmdlZDogKHBpZDogUElEKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldE9wdGlvblBJRChwaWQpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoUHJvZHVjdERldGFpbENvbnRyb2wpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9