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
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls.module.css */ "./components/controls.module.css");
/* harmony import */ var _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_controls_module_css__WEBPACK_IMPORTED_MODULE_13__);








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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onSelect", function (pid) {
      _this.props.selectionChanged(pid);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderGenericLink", function (item) {
      return __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__["default"].Link, {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.nested,
        key: item.pid,
        onClick: function onClick() {
          return _this.onSelect(item.pid);
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 7
        }
      }, item.name, " (", item.pid, ")");
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductDetailControl, [{
    key: "render",
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
          lineNumber: 36,
          columnNumber: 7
        }
      }, this.renderGeneric(this.props.world));
    }
  }, {
    key: "renderGeneric",
    value: function renderGeneric(world) {
      var catalog = world.catalog;
      var pid = this.props.currentPID;

      if (this.props.optionPID !== undefined) {
        pid = this.props.optionPID;
      }

      if (!catalog.hasPID(pid)) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 14
          }
        }, "Unknown PID ", pid);
      } else {
        var item = catalog.getGeneric(pid);
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 9
          }
        }, __jsx("h1", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }
        }, item.name, " (", item.pid, ")"), pid === this.props.optionPID ? 'option' : 'product', __jsx("div", {
          style: {
            display: 'flex',
            flexDirection: 'row'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
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
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.menuDetailColumn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
          lineNumber: 86,
          columnNumber: 9
        }
      }, "Options for ", __jsx("span", {
        style: {
          backgroundColor: 'lightgray'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 23
        }
      }, specific.name, " (", specific.key, ", ", specific.sku, ")")), items.map(this.renderGenericLink));
    }
  }, {
    key: "renderExlusionSets",
    value: function renderExlusionSets(world, item) {
      var _this2 = this;

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
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.nested,
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 9
          }
        }, __jsx("div", {
          style: {
            fontWeight: 'bold'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, "Set ", index), items.map(_this2.renderGenericLink));
      };

      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.menuDetailColumn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          fontWeight: 'bold'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }
      }, "Exclusion Sets"), sets.map(renderOneExlusionSet));

      function renderOnePID(pid, index) {
        var child = catalog.getGeneric(pid);
        return __jsx("div", {
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.nested,
          key: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
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
    className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.menuDetailColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, "Attributes"), tensor.dimensions.map(renderDimension));

  function renderDimension(dimension, index) {
    return __jsx("div", {
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.nested,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }, dimension.name), dimension.attributes.map(renderAttribute));
  }

  function renderAttribute(attribute, index) {
    return __jsx("div", {
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.nested,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }
    }, attribute.name), renderAliases(attribute.aliases));
  }
}

function renderProductAliases(item) {
  return __jsx("div", {
    className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.menuDetailColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, "Aliases"), renderAliases(item.aliases));
}

function renderAliases(aliases) {
  var _this3 = this;

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
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.nested,
      key: index,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 5
      }
    }, alias);
  });
}

function renderLegalSpecifics(world, item) {
  var catalog = world.catalog;

  var keys = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(catalog.getSpecificsForGeneric(item.pid));

  return __jsx("div", {
    className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.menuDetailColumn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, "Specific Forms"), keys.map(renderSpecific));

  function renderSpecific(key, index) {
    var defaultMark = item.defaultKey === key ? ' <== default' : '';
    var s = catalog.getSpecific(key);
    var name = s.name;
    var sku = s.sku;
    return __jsx("div", {
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.nested,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 7
      }
    }, name, " (", key, ", ", sku, ")", defaultMark ? __jsx("span", {
      style: {
        paddingLeft: '1ex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 23
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaCheckCircle"], {
      title: "default form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
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
      dispatch(setOptionPID(pid));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(ProductDetailControl));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsLWNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxDb250cm9sIiwicGlkIiwicHJvcHMiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiaXRlbSIsInN0eWxlcyIsIm5lc3RlZCIsIm9uU2VsZWN0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJyZW5kZXJHZW5lcmljIiwid29ybGQiLCJjYXRhbG9nIiwiY3VycmVudFBJRCIsIm9wdGlvblBJRCIsInVuZGVmaW5lZCIsImhhc1BJRCIsImdldEdlbmVyaWMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInJlbmRlclByb2R1Y3RBbGlhc2VzIiwicmVuZGVyUHJvZHVjdEF0dHJpYnV0ZXMiLCJyZW5kZXJMZWdhbFNwZWNpZmljcyIsInJlbmRlckxlZ2FsT3B0aW9ucyIsInJlbmRlckV4bHVzaW9uU2V0cyIsInJ1bGVzIiwicnVsZUNoZWNrZXIiLCJzcGVjaWZpYyIsImdldFNwZWNpZmljIiwiZGVmYXVsdEtleSIsIml0ZW1zIiwiZ2V0VmFsaWRDaGlsZHJlbiIsImNoaWxkUElEIiwiY2hpbGQiLCJwdXNoIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIm1lbnVEZXRhaWxDb2x1bW4iLCJmb250V2VpZ2h0Iiwid2hpdGVTcGFjZSIsImJhY2tncm91bmRDb2xvciIsImtleSIsInNrdSIsIm1hcCIsInJlbmRlckdlbmVyaWNMaW5rIiwic2V0cyIsImdldEV4Y2x1c2lvbkdyb3VwcyIsInJlbmRlck9uZUV4bHVzaW9uU2V0IiwiZ3JvdXAiLCJpbmRleCIsInBpZHMiLCJ2YWx1ZXMiLCJyZW5kZXJPbmVQSUQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInRlbnNvciIsImF0dHJpYnV0ZUluZm8iLCJnZXRUZW5zb3IiLCJkaW1lbnNpb25zIiwicmVuZGVyRGltZW5zaW9uIiwiZGltZW5zaW9uIiwiYXR0cmlidXRlcyIsInJlbmRlckF0dHJpYnV0ZSIsImF0dHJpYnV0ZSIsInJlbmRlckFsaWFzZXMiLCJhbGlhc2VzIiwib3V0cHV0IiwiYWxpYXMiLCJwYXR0ZXJuIiwicGF0dGVybkZyb21FeHByZXNzaW9uIiwiYWxpYXNlc0Zyb21QYXR0ZXJuIiwidGV4dCIsImtleXMiLCJnZXRTcGVjaWZpY3NGb3JHZW5lcmljIiwicmVuZGVyU3BlY2lmaWMiLCJkZWZhdWx0TWFyayIsInMiLCJwYWRkaW5nTGVmdCIsIm1hcFN0YXRlVG9Qcm9wcyIsImFwcGxpY2F0aW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZXRPcHRpb25QSUQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBT0M7O0lBRUtBLG9COzs7Ozs7Ozs7Ozs7Ozs7O21OQUNPLFVBQUNDLEdBQUQsRUFBYztBQUN2QixZQUFLQyxLQUFMLENBQVdDLGdCQUFYLENBQTRCRixHQUE1QjtBQUNELEs7OzROQXlHbUIsVUFBQ0csSUFBRCxFQUE4QjtBQUNoRCxhQUNFLE1BQUMsNERBQUQsQ0FBSyxJQUFMO0FBQ0UsaUJBQVMsRUFBRUMsNERBQU0sQ0FBQ0MsTUFEcEI7QUFFRSxXQUFHLEVBQUVGLElBQUksQ0FBQ0gsR0FGWjtBQUdFLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUtNLFFBQUwsQ0FBY0gsSUFBSSxDQUFDSCxHQUFuQixDQUFOO0FBQUEsU0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0dHLElBQUksQ0FBQ0ksSUFMUixRQUtnQkosSUFBSSxDQUFDSCxHQUxyQixNQURGO0FBU0QsSzs7Ozs7Ozs2QkFqSFE7QUFDUCxhQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVRLGVBQUssRUFBRSxNQUFUO0FBQWlCQyxnQkFBTSxFQUFFLE1BQXpCO0FBQWlDQyxrQkFBUSxFQUFFO0FBQTND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R2lDLFdBQVcsR0FBRTtBQUFNLFdBQUssRUFBRTtBQUFDRSxtQkFBVyxFQUFFO0FBQWQsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ1osTUFBQyw2REFBRDtBQUFlLFdBQUssRUFBQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFksQ0FBRixHQUVGLElBSlosQ0FERjtBQVFEO0FBQ0Y7O0FBRUQsU0FBU0MsZUFBVCxDQUF5QkMsV0FBekIsRUFBd0Q7QUFDdEQsU0FBTztBQUNMdEUsU0FBSyxFQUFFc0UsV0FBVyxDQUFDdEUsS0FEZDtBQUVMRSxjQUFVLEVBQUVvRSxXQUFXLENBQUNwRSxVQUZuQjtBQUdMQyxhQUFTLEVBQUVtRSxXQUFXLENBQUNuRTtBQUhsQixHQUFQO0FBS0Q7O0FBRUQsU0FBU29FLGtCQUFULENBQTRCQyxRQUE1QixFQUEyRDtBQUN6RCxTQUFPO0FBQ0xsRixvQkFBZ0IsRUFBRSwwQkFBQ0YsR0FBRCxFQUFjO0FBQzlCb0YsY0FBUSxDQUFDQyxZQUFZLENBQUNyRixHQUFELENBQWIsQ0FBUjtBQUNEO0FBSEksR0FBUDtBQUtEOztBQUVjc0YsMkhBQU8sQ0FDcEJMLGVBRG9CLEVBRXBCRSxrQkFGb0IsQ0FBUCxDQUdicEYsb0JBSGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjc3MGI1ZjA0YTY1MzZkYWEyNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYWxpYXNlc0Zyb21QYXR0ZXJuLFxyXG4gIEF0dHJpYnV0ZURlc2NyaXB0aW9uLFxyXG4gIEtleSxcclxuICBQSUQsXHJcbiAgcGF0dGVybkZyb21FeHByZXNzaW9uLFxyXG4gIFdvcmxkLFxyXG4gIEdlbmVyaWNUeXBlZEVudGl0eSxcclxuICBEaW1lbnNpb25cclxufSBmcm9tICdwcml4LWZpeGUnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IHsgRmFDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHsgQW55QWN0aW9uLCBBcHBsaWNhdGlvblN0YXRlLCBzZXRQSUQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB3b3JsZDogV29ybGQ7XHJcbiAgY3VycmVudFBJRDogUElEO1xyXG4gIG9wdGlvblBJRDogUElEO1xyXG4gIHNlbGVjdGlvbkNoYW5nZWQ6IChwaWQ6IFBJRCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNsYXNzIFByb2R1Y3REZXRhaWxDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgb25TZWxlY3QgPSAocGlkOiBQSUQpID0+IHtcclxuICAgIHRoaXMucHJvcHMuc2VsZWN0aW9uQ2hhbmdlZChwaWQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckdlbmVyaWModGhpcy5wcm9wcy53b3JsZCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckdlbmVyaWMod29ybGQ6IFdvcmxkKSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuXHJcbiAgICBsZXQgcGlkID0gdGhpcy5wcm9wcy5jdXJyZW50UElEO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9uUElEICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGlkID0gdGhpcy5wcm9wcy5vcHRpb25QSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjYXRhbG9nLmhhc1BJRChwaWQpKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PlVua25vd24gUElEIHtwaWR9PC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGNhdGFsb2cuZ2V0R2VuZXJpYyhwaWQpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+e2l0ZW0ubmFtZX0gKHtpdGVtLnBpZH0pPC9oMT5cclxuICAgICAgICAgIHtwaWQgPT09IHRoaXMucHJvcHMub3B0aW9uUElEID8gJ29wdGlvbicgOiAncHJvZHVjdCd9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93J319PlxyXG4gICAgICAgICAgICB7cmVuZGVyUHJvZHVjdEFsaWFzZXMoaXRlbSl9XHJcbiAgICAgICAgICAgIHtyZW5kZXJQcm9kdWN0QXR0cmlidXRlcyh3b3JsZCwgaXRlbSl9XHJcbiAgICAgICAgICAgIHtyZW5kZXJMZWdhbFNwZWNpZmljcyh3b3JsZCwgaXRlbSl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckxlZ2FsT3B0aW9ucyh3b3JsZCwgaXRlbSl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckV4bHVzaW9uU2V0cyh3b3JsZCwgaXRlbSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckxlZ2FsT3B0aW9ucyh3b3JsZDogV29ybGQsIGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eSkge1xyXG4gICAgY29uc3QgY2F0YWxvZyA9IHdvcmxkLmNhdGFsb2c7XHJcbiAgICBjb25zdCBydWxlcyA9IHdvcmxkLnJ1bGVDaGVja2VyO1xyXG4gIFxyXG4gICAgY29uc3Qgc3BlY2lmaWMgPSBjYXRhbG9nLmdldFNwZWNpZmljKGl0ZW0uZGVmYXVsdEtleSk7XHJcbiAgICBjb25zdCBpdGVtczogR2VuZXJpY1R5cGVkRW50aXR5W10gPSBbXTtcclxuICAgIGZvciAoY29uc3QgY2hpbGRQSUQgb2YgcnVsZXMuZ2V0VmFsaWRDaGlsZHJlbihpdGVtLmRlZmF1bHRLZXkpKSB7XHJcbiAgICAgIGlmIChjYXRhbG9nLmhhc1BJRChjaGlsZFBJRCkpIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IGNhdGFsb2cuZ2V0R2VuZXJpYyhjaGlsZFBJRCk7XHJcbiAgICAgICAgaXRlbXMucHVzaChjaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGl0ZW1zLnNvcnQoKGEsYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51RGV0YWlsQ29sdW1ufT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJ319PlxyXG4gICAgICAgICAgT3B0aW9ucyBmb3IgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknfX0+XHJcbiAgICAgICAgICAgIHtzcGVjaWZpYy5uYW1lfSAoe3NwZWNpZmljLmtleX0sIHtzcGVjaWZpYy5za3V9KVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpdGVtcy5tYXAodGhpcy5yZW5kZXJHZW5lcmljTGluayl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTsgIFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyRXhsdXNpb25TZXRzKHdvcmxkOiBXb3JsZCwgaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuICAgIGNvbnN0IHJ1bGVzID0gd29ybGQucnVsZUNoZWNrZXI7XHJcbiAgICBjb25zdCBzZXRzID0gWy4uLnJ1bGVzLmdldEV4Y2x1c2lvbkdyb3VwcyhpdGVtLnBpZCldO1xyXG5cclxuICBcclxuICAgIGNvbnN0IHJlbmRlck9uZUV4bHVzaW9uU2V0ID0gKGdyb3VwOiBTZXQ8UElEPiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zdCBwaWRzID0gWy4uLmdyb3VwLnZhbHVlcygpXTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBwaWRzLm1hcChwaWQgPT4gY2F0YWxvZy5nZXRHZW5lcmljKHBpZCkpO1xyXG4gICAgICBpdGVtcy5zb3J0KChhLGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+U2V0IHtpbmRleH08L2Rpdj5cclxuICAgICAgICAgIHtpdGVtcy5tYXAodGhpcy5yZW5kZXJHZW5lcmljTGluayl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5FeGNsdXNpb24gU2V0czwvZGl2PlxyXG4gICAgICAgIHtzZXRzLm1hcChyZW5kZXJPbmVFeGx1c2lvblNldCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlck9uZVBJRChwaWQ6IFBJRCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGNhdGFsb2cuZ2V0R2VuZXJpYyhwaWQpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIHtjaGlsZC5uYW1lfSAoe2NoaWxkLnBpZH0pXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclNvcnRlZEdlbmVyaWNzKGl0ZW1zOiBHZW5lcmljVHlwZWRFbnRpdHlbXSkge1xyXG4gICAgaXRlbXMuc29ydCgoYSxiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcclxuICAgIHJldHVybiBpdGVtcy5tYXAodGhpcy5yZW5kZXJHZW5lcmljTGluayk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJHZW5lcmljTGluayA9IChpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxOYXYuTGlua1xyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH1cclxuICAgICAgICBrZXk9e2l0ZW0ucGlkfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3QoaXRlbS5waWQpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2l0ZW0ubmFtZX0gKHtpdGVtLnBpZH0pXHJcbiAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdEF0dHJpYnV0ZXMoXHJcbiAgd29ybGQ6IFdvcmxkLFxyXG4gIGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eVxyXG4pIHtcclxuICBjb25zdCB0ZW5zb3IgPSB3b3JsZC5hdHRyaWJ1dGVJbmZvLmdldFRlbnNvcihpdGVtLnRlbnNvcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5BdHRyaWJ1dGVzPC9kaXY+XHJcbiAgICAgIHt0ZW5zb3IuZGltZW5zaW9ucy5tYXAocmVuZGVyRGltZW5zaW9uKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckRpbWVuc2lvbihkaW1lbnNpb246IERpbWVuc2lvbiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT57ZGltZW5zaW9uLm5hbWV9PC9kaXY+XHJcbiAgICAgICAge2RpbWVuc2lvbi5hdHRyaWJ1dGVzLm1hcChyZW5kZXJBdHRyaWJ1dGUpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckF0dHJpYnV0ZShhdHRyaWJ1dGU6IEF0dHJpYnV0ZURlc2NyaXB0aW9uLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PnthdHRyaWJ1dGUubmFtZX08L2Rpdj5cclxuICAgICAgICB7IHJlbmRlckFsaWFzZXMoYXR0cmlidXRlLmFsaWFzZXMpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9kdWN0QWxpYXNlcyhpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51RGV0YWlsQ29sdW1ufT5cclxuICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PkFsaWFzZXM8L2Rpdj5cclxuICAgICAge3JlbmRlckFsaWFzZXMoaXRlbS5hbGlhc2VzKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQWxpYXNlcyhhbGlhc2VzOiBzdHJpbmdbXSkge1xyXG4gIGNvbnN0IG91dHB1dDogc3RyaW5nW10gPSBbXTtcclxuICBmb3IgKGNvbnN0IGFsaWFzIG9mIGFsaWFzZXMpIHtcclxuICAgIGNvbnN0IHBhdHRlcm4gPSBwYXR0ZXJuRnJvbUV4cHJlc3Npb24oYWxpYXMpO1xyXG4gICAgZm9yIChjb25zdCB0ZXh0IG9mIGFsaWFzZXNGcm9tUGF0dGVybihwYXR0ZXJuKSkge1xyXG4gICAgICBvdXRwdXQucHVzaCh0ZXh0KTtcclxuICAgIH1cclxuICB9XHJcbiAgb3V0cHV0LnNvcnQoKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dC5tYXAoKGFsaWFzLCBpbmRleCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PnthbGlhc308L2Rpdj5cclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGVnYWxTcGVjaWZpY3Mod29ybGQ6IFdvcmxkLCBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuICBjb25zdCBrZXlzID0gWy4uLmNhdGFsb2cuZ2V0U3BlY2lmaWNzRm9yR2VuZXJpYyhpdGVtLnBpZCldO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+U3BlY2lmaWMgRm9ybXM8L2Rpdj5cclxuICAgICAge2tleXMubWFwKHJlbmRlclNwZWNpZmljKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlclNwZWNpZmljKGtleTogS2V5LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0TWFyayA9IGl0ZW0uZGVmYXVsdEtleSA9PT0ga2V5ID8gJyA8PT0gZGVmYXVsdCcgOiAnJztcclxuICAgIGNvbnN0IHMgPSBjYXRhbG9nLmdldFNwZWNpZmljKGtleSk7XHJcbiAgICBjb25zdCBuYW1lID0gcy5uYW1lO1xyXG4gICAgY29uc3Qgc2t1ID0gcy5za3U7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAge25hbWV9ICh7a2V5fSwge3NrdX0pXHJcbiAgICAgICAge2RlZmF1bHRNYXJrPyA8c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnMWV4J319PlxyXG4gICAgICAgICAgPEZhQ2hlY2tDaXJjbGUgdGl0bGU9XCJkZWZhdWx0IGZvcm1cIi8+XHJcbiAgICAgICAgPC9zcGFuPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdvcmxkOiBhcHBsaWNhdGlvbi53b3JsZCxcclxuICAgIGN1cnJlbnRQSUQ6IGFwcGxpY2F0aW9uLmN1cnJlbnRQSUQsXHJcbiAgICBvcHRpb25QSUQ6IGFwcGxpY2F0aW9uLm9wdGlvblBJRCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0aW9uQ2hhbmdlZDogKHBpZDogUElEKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldE9wdGlvblBJRChwaWQpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoUHJvZHVjdERldGFpbENvbnRyb2wpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9