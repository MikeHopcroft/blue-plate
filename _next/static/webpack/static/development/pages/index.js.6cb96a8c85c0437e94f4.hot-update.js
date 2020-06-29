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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onSelect", function (pid) {
      _this.props.selectionChanged(pid);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderGenericLink", function (item) {
      return __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"].Link, {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
        key: item.pid,
        onClick: function onClick() {
          return _this.onSelect(item.pid);
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
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
          lineNumber: 37,
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaWindowClose"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 31
        }
      }))];

      if (!catalog.hasPID(pid)) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 14
          }
        }, "Unknown PID ", pid);
      } else {
        var item = catalog.getGeneric(pid);
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
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
            lineNumber: 62,
            columnNumber: 11
          }
        }, __jsx("h1", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
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
            lineNumber: 66,
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
          lineNumber: 93,
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
          lineNumber: 94,
          columnNumber: 9
        }
      }, "Options for ", __jsx("span", {
        style: {
          backgroundColor: 'lightgray'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
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
          className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 9
          }
        }, __jsx("div", {
          style: {
            fontWeight: 'bold'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }
        }, "Set ", index), items.map(_this2.renderGenericLink));
      };

      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.menuDetailColumn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          fontWeight: 'bold'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
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
            lineNumber: 133,
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
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
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
        lineNumber: 172,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
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
        lineNumber: 181,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
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
      lineNumber: 191,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
      className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.nested,
      key: index,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
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
      lineNumber: 217,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
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
        lineNumber: 229,
        columnNumber: 7
      }
    }, name, " (", key, ", ", sku, ")", defaultMark ? __jsx("span", {
      style: {
        paddingLeft: '1ex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 23
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaCheckCircle"], {
      title: "default form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsLWNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxDb250cm9sIiwicGlkIiwicHJvcHMiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiaXRlbSIsInN0eWxlcyIsIm5lc3RlZCIsIm9uU2VsZWN0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJyZW5kZXJHZW5lcmljIiwid29ybGQiLCJjYXRhbG9nIiwiY3VycmVudFBJRCIsIm9wdGlvblBJRCIsInVuZGVmaW5lZCIsImNsb3NlQnV0dG9uIiwiZmxleEdyb3ciLCJoYXNQSUQiLCJnZXRHZW5lcmljIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJyZW5kZXJQcm9kdWN0QWxpYXNlcyIsInJlbmRlclByb2R1Y3RBdHRyaWJ1dGVzIiwicmVuZGVyTGVnYWxTcGVjaWZpY3MiLCJyZW5kZXJMZWdhbE9wdGlvbnMiLCJyZW5kZXJFeGx1c2lvblNldHMiLCJydWxlcyIsInJ1bGVDaGVja2VyIiwic3BlY2lmaWMiLCJnZXRTcGVjaWZpYyIsImRlZmF1bHRLZXkiLCJpdGVtcyIsImdldFZhbGlkQ2hpbGRyZW4iLCJjaGlsZFBJRCIsImNoaWxkIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtZW51RGV0YWlsQ29sdW1uIiwiZm9udFdlaWdodCIsIndoaXRlU3BhY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJrZXkiLCJza3UiLCJtYXAiLCJyZW5kZXJHZW5lcmljTGluayIsInNldHMiLCJnZXRFeGNsdXNpb25Hcm91cHMiLCJyZW5kZXJPbmVFeGx1c2lvblNldCIsImdyb3VwIiwiaW5kZXgiLCJwaWRzIiwidmFsdWVzIiwicmVuZGVyT25lUElEIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0ZW5zb3IiLCJhdHRyaWJ1dGVJbmZvIiwiZ2V0VGVuc29yIiwiZGltZW5zaW9ucyIsInJlbmRlckRpbWVuc2lvbiIsImRpbWVuc2lvbiIsImF0dHJpYnV0ZXMiLCJyZW5kZXJBdHRyaWJ1dGUiLCJhdHRyaWJ1dGUiLCJyZW5kZXJBbGlhc2VzIiwiYWxpYXNlcyIsIm91dHB1dCIsImFsaWFzIiwicGF0dGVybiIsInBhdHRlcm5Gcm9tRXhwcmVzc2lvbiIsImFsaWFzZXNGcm9tUGF0dGVybiIsInRleHQiLCJrZXlzIiwiZ2V0U3BlY2lmaWNzRm9yR2VuZXJpYyIsInJlbmRlclNwZWNpZmljIiwiZGVmYXVsdE1hcmsiLCJzIiwicGFkZGluZ0xlZnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhcHBsaWNhdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2V0T3B0aW9uUElEIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQU9DOztJQUVLQSxvQjs7Ozs7Ozs7Ozs7Ozs7OzttTkFDTyxVQUFDQyxHQUFELEVBQWM7QUFDdkIsWUFBS0MsS0FBTCxDQUFXQyxnQkFBWCxDQUE0QkYsR0FBNUI7QUFDRCxLOzs0TkFnSG1CLFVBQUNHLElBQUQsRUFBOEI7QUFDaEQsYUFDRSxNQUFDLDREQUFELENBQUssSUFBTDtBQUNFLGlCQUFTLEVBQUVDLDREQUFNLENBQUNDLE1BRHBCO0FBRUUsV0FBRyxFQUFFRixJQUFJLENBQUNILEdBRlo7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFLTSxRQUFMLENBQWNILElBQUksQ0FBQ0gsR0FBbkIsQ0FBTjtBQUFBLFNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtHRyxJQUFJLENBQUNJLElBTFIsUUFLZ0JKLElBQUksQ0FBQ0gsR0FMckIsTUFERjtBQVNELEs7Ozs7Ozs7NkJBeEhRO0FBQ1AsYUFDRTtBQUFLLGFBQUssRUFBRTtBQUFFUSxlQUFLLEVBQUUsTUFBVDtBQUFpQkMsZ0JB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Q0FBUjtBQUNEO0FBSEksR0FBUDtBQUtEOztBQUVjd0YsMkhBQU8sQ0FDcEJMLGVBRG9CLEVBRXBCRSxrQkFGb0IsQ0FBUCxDQUdidEYsb0JBSGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNmNiOTZhOGM4NWMwNDM3ZTk0ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYWxpYXNlc0Zyb21QYXR0ZXJuLFxyXG4gIEF0dHJpYnV0ZURlc2NyaXB0aW9uLFxyXG4gIEtleSxcclxuICBQSUQsXHJcbiAgcGF0dGVybkZyb21FeHByZXNzaW9uLFxyXG4gIFdvcmxkLFxyXG4gIEdlbmVyaWNUeXBlZEVudGl0eSxcclxuICBEaW1lbnNpb25cclxufSBmcm9tICdwcml4LWZpeGUnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IHsgRmFDaGVja0NpcmNsZSwgRmFXaW5kb3dDbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHsgQW55QWN0aW9uLCBBcHBsaWNhdGlvblN0YXRlLCBzZXRPcHRpb25QSUQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB3b3JsZDogV29ybGQ7XHJcbiAgY3VycmVudFBJRDogUElEO1xyXG4gIG9wdGlvblBJRDogUElEO1xyXG4gIHNlbGVjdGlvbkNoYW5nZWQ6IChwaWQ6IFBJRCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNsYXNzIFByb2R1Y3REZXRhaWxDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgb25TZWxlY3QgPSAocGlkOiBQSUQpID0+IHtcclxuICAgIHRoaXMucHJvcHMuc2VsZWN0aW9uQ2hhbmdlZChwaWQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckdlbmVyaWModGhpcy5wcm9wcy53b3JsZCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckdlbmVyaWMod29ybGQ6IFdvcmxkKSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuXHJcbiAgICBsZXQgcGlkID0gdGhpcy5wcm9wcy5jdXJyZW50UElEO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9uUElEICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGlkID0gdGhpcy5wcm9wcy5vcHRpb25QSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBbXHJcbiAgICAgIDxkaXYgc3R5bGU9e3tmbGV4R3JvdzogMX19PjwvZGl2PixcclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PSdsaWdodCc+PEZhV2luZG93Q2xvc2UvPjwvQnV0dG9uPlxyXG4gICAgXTtcclxuXHJcbiAgICBpZiAoIWNhdGFsb2cuaGFzUElEKHBpZCkpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+VW5rbm93biBQSUQge3BpZH08L2Rpdj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpdGVtID0gY2F0YWxvZy5nZXRHZW5lcmljKHBpZCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcbiAgICAgICAgICAgIDxoMT57aXRlbS5uYW1lfSAoe2l0ZW0ucGlkfSk8L2gxPlxyXG4gICAgICAgICAgICB7cGlkID09PSB0aGlzLnByb3BzLm9wdGlvblBJRCA/IGNsb3NlQnV0dG9uIDogbnVsbCB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJQcm9kdWN0QWxpYXNlcyhpdGVtKX1cclxuICAgICAgICAgICAge3JlbmRlclByb2R1Y3RBdHRyaWJ1dGVzKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgICAge3JlbmRlckxlZ2FsU3BlY2lmaWNzKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyTGVnYWxPcHRpb25zKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyRXhsdXNpb25TZXRzKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGVnYWxPcHRpb25zKHdvcmxkOiBXb3JsZCwgaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuICAgIGNvbnN0IHJ1bGVzID0gd29ybGQucnVsZUNoZWNrZXI7XHJcbiAgXHJcbiAgICBjb25zdCBzcGVjaWZpYyA9IGNhdGFsb2cuZ2V0U3BlY2lmaWMoaXRlbS5kZWZhdWx0S2V5KTtcclxuICAgIGNvbnN0IGl0ZW1zOiBHZW5lcmljVHlwZWRFbnRpdHlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaGlsZFBJRCBvZiBydWxlcy5nZXRWYWxpZENoaWxkcmVuKGl0ZW0uZGVmYXVsdEtleSkpIHtcclxuICAgICAgaWYgKGNhdGFsb2cuaGFzUElEKGNoaWxkUElEKSkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2F0YWxvZy5nZXRHZW5lcmljKGNoaWxkUElEKTtcclxuICAgICAgICBpdGVtcy5wdXNoKGNoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXRlbXMuc29ydCgoYSxiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnfX0+XHJcbiAgICAgICAgICBPcHRpb25zIGZvciA8c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheSd9fT5cclxuICAgICAgICAgICAge3NwZWNpZmljLm5hbWV9ICh7c3BlY2lmaWMua2V5fSwge3NwZWNpZmljLnNrdX0pXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2l0ZW1zLm1hcCh0aGlzLnJlbmRlckdlbmVyaWNMaW5rKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApOyAgXHJcbiAgfVxyXG5cclxuICByZW5kZXJFeGx1c2lvblNldHMod29ybGQ6IFdvcmxkLCBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICAgIGNvbnN0IGNhdGFsb2cgPSB3b3JsZC5jYXRhbG9nO1xyXG4gICAgY29uc3QgcnVsZXMgPSB3b3JsZC5ydWxlQ2hlY2tlcjtcclxuICAgIGNvbnN0IHNldHMgPSBbLi4ucnVsZXMuZ2V0RXhjbHVzaW9uR3JvdXBzKGl0ZW0ucGlkKV07XHJcblxyXG4gIFxyXG4gICAgY29uc3QgcmVuZGVyT25lRXhsdXNpb25TZXQgPSAoZ3JvdXA6IFNldDxQSUQ+LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBpZHMgPSBbLi4uZ3JvdXAudmFsdWVzKCldO1xyXG4gICAgICBjb25zdCBpdGVtcyA9IHBpZHMubWFwKHBpZCA9PiBjYXRhbG9nLmdldEdlbmVyaWMocGlkKSk7XHJcbiAgICAgIGl0ZW1zLnNvcnQoKGEsYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5TZXQge2luZGV4fTwvZGl2PlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCh0aGlzLnJlbmRlckdlbmVyaWNMaW5rKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PkV4Y2x1c2lvbiBTZXRzPC9kaXY+XHJcbiAgICAgICAge3NldHMubWFwKHJlbmRlck9uZUV4bHVzaW9uU2V0KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyT25lUElEKHBpZDogUElELCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gY2F0YWxvZy5nZXRHZW5lcmljKHBpZCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAge2NoaWxkLm5hbWV9ICh7Y2hpbGQucGlkfSlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU29ydGVkR2VuZXJpY3MoaXRlbXM6IEdlbmVyaWNUeXBlZEVudGl0eVtdKSB7XHJcbiAgICBpdGVtcy5zb3J0KChhLGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xyXG4gICAgcmV0dXJuIGl0ZW1zLm1hcCh0aGlzLnJlbmRlckdlbmVyaWNMaW5rKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckdlbmVyaWNMaW5rID0gKGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfVxyXG4gICAgICAgIGtleT17aXRlbS5waWR9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblNlbGVjdChpdGVtLnBpZCl9XHJcbiAgICAgID5cclxuICAgICAgICB7aXRlbS5uYW1lfSAoe2l0ZW0ucGlkfSlcclxuICAgICAgPC9OYXYuTGluaz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9kdWN0QXR0cmlidXRlcyhcclxuICB3b3JsZDogV29ybGQsXHJcbiAgaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5XHJcbikge1xyXG4gIGNvbnN0IHRlbnNvciA9IHdvcmxkLmF0dHJpYnV0ZUluZm8uZ2V0VGVuc29yKGl0ZW0udGVuc29yKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51RGV0YWlsQ29sdW1ufT5cclxuICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PkF0dHJpYnV0ZXM8L2Rpdj5cclxuICAgICAge3RlbnNvci5kaW1lbnNpb25zLm1hcChyZW5kZXJEaW1lbnNpb24pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyRGltZW5zaW9uKGRpbWVuc2lvbjogRGltZW5zaW9uLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PntkaW1lbnNpb24ubmFtZX08L2Rpdj5cclxuICAgICAgICB7ZGltZW5zaW9uLmF0dHJpYnV0ZXMubWFwKHJlbmRlckF0dHJpYnV0ZSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyQXR0cmlidXRlKGF0dHJpYnV0ZTogQXR0cmlidXRlRGVzY3JpcHRpb24sIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+e2F0dHJpYnV0ZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgIHsgcmVuZGVyQWxpYXNlcyhhdHRyaWJ1dGUuYWxpYXNlcykgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2R1Y3RBbGlhc2VzKGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+QWxpYXNlczwvZGl2PlxyXG4gICAgICB7cmVuZGVyQWxpYXNlcyhpdGVtLmFsaWFzZXMpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBbGlhc2VzKGFsaWFzZXM6IHN0cmluZ1tdKSB7XHJcbiAgY29uc3Qgb3V0cHV0OiBzdHJpbmdbXSA9IFtdO1xyXG4gIGZvciAoY29uc3QgYWxpYXMgb2YgYWxpYXNlcykge1xyXG4gICAgY29uc3QgcGF0dGVybiA9IHBhdHRlcm5Gcm9tRXhwcmVzc2lvbihhbGlhcyk7XHJcbiAgICBmb3IgKGNvbnN0IHRleHQgb2YgYWxpYXNlc0Zyb21QYXR0ZXJuKHBhdHRlcm4pKSB7XHJcbiAgICAgIG91dHB1dC5wdXNoKHRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvdXRwdXQuc29ydCgpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0Lm1hcCgoYWxpYXMsIGluZGV4KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lc3RlZH0ga2V5PXtpbmRleH0+e2FsaWFzfTwvZGl2PlxyXG4gICkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMZWdhbFNwZWNpZmljcyh3b3JsZDogV29ybGQsIGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eSkge1xyXG4gIGNvbnN0IGNhdGFsb2cgPSB3b3JsZC5jYXRhbG9nO1xyXG4gIGNvbnN0IGtleXMgPSBbLi4uY2F0YWxvZy5nZXRTcGVjaWZpY3NGb3JHZW5lcmljKGl0ZW0ucGlkKV07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5TcGVjaWZpYyBGb3JtczwvZGl2PlxyXG4gICAgICB7a2V5cy5tYXAocmVuZGVyU3BlY2lmaWMpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyU3BlY2lmaWMoa2V5OiBLZXksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRNYXJrID0gaXRlbS5kZWZhdWx0S2V5ID09PSBrZXkgPyAnIDw9PSBkZWZhdWx0JyA6ICcnO1xyXG4gICAgY29uc3QgcyA9IGNhdGFsb2cuZ2V0U3BlY2lmaWMoa2V5KTtcclxuICAgIGNvbnN0IG5hbWUgPSBzLm5hbWU7XHJcbiAgICBjb25zdCBza3UgPSBzLnNrdTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT5cclxuICAgICAgICB7bmFtZX0gKHtrZXl9LCB7c2t1fSlcclxuICAgICAgICB7ZGVmYXVsdE1hcms/IDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6ICcxZXgnfX0+XHJcbiAgICAgICAgICA8RmFDaGVja0NpcmNsZSB0aXRsZT1cImRlZmF1bHQgZm9ybVwiLz5cclxuICAgICAgICA8L3NwYW4+IDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgd29ybGQ6IGFwcGxpY2F0aW9uLndvcmxkLFxyXG4gICAgY3VycmVudFBJRDogYXBwbGljYXRpb24uY3VycmVudFBJRCxcclxuICAgIG9wdGlvblBJRDogYXBwbGljYXRpb24ub3B0aW9uUElELFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZWxlY3Rpb25DaGFuZ2VkOiAocGlkOiBQSUQpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0T3B0aW9uUElEKHBpZCkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShQcm9kdWN0RGV0YWlsQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=