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
          lineNumber: 154,
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
          lineNumber: 40,
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
        variant: "outline-light",
        onClick: function onClick() {
          return _this2.props.optionChanged(undefined);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaArrowCircleLeft"], {
        style: {
          color: '#007bff',
          width: "30px",
          height: "30px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }));

      if (!catalog.hasPID(pid)) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 14
          }
        }, "Unknown PID ", pid);
      } else {
        var item = catalog.getGeneric(pid);
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
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
            lineNumber: 69,
            columnNumber: 11
          }
        }, pid === this.props.optionPID ? closeButton : null, __jsx("h1", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }
        }, item.name, " (", item.pid, ")")), __jsx("div", {
          style: {
            display: 'flex',
            flexDirection: 'row'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
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
          lineNumber: 100,
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
          lineNumber: 101,
          columnNumber: 9
        }
      }, "Options for ", __jsx("span", {
        style: {
          backgroundColor: 'lightgray'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
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
            lineNumber: 123,
            columnNumber: 9
          }
        }, __jsx("div", {
          style: {
            fontWeight: 'bold'
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }
        }, "Set ", index), items.map(_this3.renderGenericLink));
      };

      return __jsx("div", {
        className: _controls_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.menuDetailColumn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          fontWeight: 'bold'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
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
            lineNumber: 140,
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
      lineNumber: 171,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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
        lineNumber: 179,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
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
        lineNumber: 188,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: {
        fontWeight: 'bold'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
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
      lineNumber: 198,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
        lineNumber: 216,
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
      lineNumber: 224,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
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
        lineNumber: 236,
        columnNumber: 7
      }
    }, name, " (", key, ", ", sku, ")", defaultMark ? __jsx("span", {
      style: {
        paddingLeft: '1ex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 23
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaCheckCircle"], {
      title: "default form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsLWNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxDb250cm9sIiwiaXRlbSIsInN0eWxlcyIsIm5lc3RlZCIsInBpZCIsInByb3BzIiwib3B0aW9uQ2hhbmdlZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwicmVuZGVyR2VuZXJpYyIsIndvcmxkIiwiY2F0YWxvZyIsImN1cnJlbnRQSUQiLCJvcHRpb25QSUQiLCJ1bmRlZmluZWQiLCJjbG9zZUJ1dHRvbiIsImNvbG9yIiwiaGFzUElEIiwiZ2V0R2VuZXJpYyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwicmVuZGVyUHJvZHVjdEFsaWFzZXMiLCJyZW5kZXJQcm9kdWN0QXR0cmlidXRlcyIsInJlbmRlckxlZ2FsU3BlY2lmaWNzIiwicmVuZGVyTGVnYWxPcHRpb25zIiwicmVuZGVyRXhsdXNpb25TZXRzIiwicnVsZXMiLCJydWxlQ2hlY2tlciIsInNwZWNpZmljIiwiZ2V0U3BlY2lmaWMiLCJkZWZhdWx0S2V5IiwiaXRlbXMiLCJnZXRWYWxpZENoaWxkcmVuIiwiY2hpbGRQSUQiLCJjaGlsZCIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwibWVudURldGFpbENvbHVtbiIsImZvbnRXZWlnaHQiLCJ3aGl0ZVNwYWNlIiwiYmFja2dyb3VuZENvbG9yIiwia2V5Iiwic2t1IiwibWFwIiwicmVuZGVyR2VuZXJpY0xpbmsiLCJzZXRzIiwiZ2V0RXhjbHVzaW9uR3JvdXBzIiwicmVuZGVyT25lRXhsdXNpb25TZXQiLCJncm91cCIsImluZGV4IiwicGlkcyIsInZhbHVlcyIsInJlbmRlck9uZVBJRCIsIlJlYWN0IiwiQ29tcG9uZW50IiwidGVuc29yIiwiYXR0cmlidXRlSW5mbyIsImdldFRlbnNvciIsImRpbWVuc2lvbnMiLCJyZW5kZXJEaW1lbnNpb24iLCJkaW1lbnNpb24iLCJhdHRyaWJ1dGVzIiwicmVuZGVyQXR0cmlidXRlIiwiYXR0cmlidXRlIiwicmVuZGVyQWxpYXNlcyIsImFsaWFzZXMiLCJvdXRwdXQiLCJhbGlhcyIsInBhdHRlcm4iLCJwYXR0ZXJuRnJvbUV4cHJlc3Npb24iLCJhbGlhc2VzRnJvbVBhdHRlcm4iLCJ0ZXh0Iiwia2V5cyIsImdldFNwZWNpZmljc0ZvckdlbmVyaWMiLCJyZW5kZXJTcGVjaWZpYyIsImRlZmF1bHRNYXJrIiwicyIsInBhZGRpbmdMZWZ0IiwibWFwU3RhdGVUb1Byb3BzIiwiYXBwbGljYXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldE9wdGlvblBJRCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUdBO0FBRUE7QUFPQzs7SUFFS0Esb0I7Ozs7Ozs7Ozs7Ozs7Ozs7NE5BbUhnQixVQUFDQyxJQUFELEVBQThCO0FBQ2hELGFBQ0UsTUFBQyw0REFBRCxDQUFLLElBQUw7QUFDRSxpQkFBUyxFQUFFQyw0REFBTSxDQUFDQyxNQURwQjtBQUVFLFdBQUcsRUFBRUYsSUFBSSxDQUFDRyxHQUZaO0FBR0UsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBS0MsS0FBTCxDQUFXQyxhQUFYLENBQXlCTCxJQUFJLENBQUNHLEdBQTlCLENBQU47QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLR0gsSUFBSSxDQUFDTSxJQUxSLFFBS2dCTixJQUFJLENBQUNHLEdBTHJCLE1BREY7QUFTRCxLOzs7Ozs7OzZCQTVIUTtBQUNQLGFBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRUksZUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGdCQUFNLEVBQUUsTUFBekI7QUFBaUNDLGtCQUFRLEVBQUU7QUFBM0MsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUNEO0FBSEksR0FBUDtBQUtEOztBQUVjb0YsMkhBQU8sQ0FDcEJMLGVBRG9CLEVBRXBCRSxrQkFGb0IsQ0FBUCxDQUdickYsb0JBSGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjcyNjkwNjRiMzVhZjM4NDc4Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYWxpYXNlc0Zyb21QYXR0ZXJuLFxyXG4gIEF0dHJpYnV0ZURlc2NyaXB0aW9uLFxyXG4gIEtleSxcclxuICBQSUQsXHJcbiAgcGF0dGVybkZyb21FeHByZXNzaW9uLFxyXG4gIFdvcmxkLFxyXG4gIEdlbmVyaWNUeXBlZEVudGl0eSxcclxuICBEaW1lbnNpb25cclxufSBmcm9tICdwcml4LWZpeGUnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuXHJcbmltcG9ydCB7IFxyXG4gIEZhQXJyb3dDaXJjbGVMZWZ0LFxyXG4gIEZhQ2hlY2tDaXJjbGUsXHJcbiAgRmFUaW1lcyxcclxuICBGYVdpbmRvd0Nsb3NlXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IHsgQW55QWN0aW9uLCBBcHBsaWNhdGlvblN0YXRlLCBzZXRPcHRpb25QSUQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2xzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB3b3JsZDogV29ybGQ7XHJcbiAgY3VycmVudFBJRDogUElEO1xyXG4gIG9wdGlvblBJRDogUElEO1xyXG4gIG9wdGlvbkNoYW5nZWQ6IChwaWQ6IFBJRCB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNsYXNzIFByb2R1Y3REZXRhaWxDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckdlbmVyaWModGhpcy5wcm9wcy53b3JsZCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckdlbmVyaWMod29ybGQ6IFdvcmxkKSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuXHJcbiAgICBsZXQgcGlkID0gdGhpcy5wcm9wcy5jdXJyZW50UElEO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9uUElEICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGlkID0gdGhpcy5wcm9wcy5vcHRpb25QSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PSdvdXRsaW5lLWxpZ2h0J1xyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3B0aW9uQ2hhbmdlZCh1bmRlZmluZWQpfVxyXG4gICAgICAgID5cclxuICAgICAgICA8RmFBcnJvd0NpcmNsZUxlZnQgc3R5bGU9e3tjb2xvcjogJyMwMDdiZmYnLCB3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCJ9fS8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIWNhdGFsb2cuaGFzUElEKHBpZCkpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+VW5rbm93biBQSUQge3BpZH08L2Rpdj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpdGVtID0gY2F0YWxvZy5nZXRHZW5lcmljKHBpZCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcbiAgICAgICAgICAgIHtwaWQgPT09IHRoaXMucHJvcHMub3B0aW9uUElEID8gY2xvc2VCdXR0b24gOiBudWxsIH1cclxuICAgICAgICAgICAgPGgxPntpdGVtLm5hbWV9ICh7aXRlbS5waWR9KTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJQcm9kdWN0QWxpYXNlcyhpdGVtKX1cclxuICAgICAgICAgICAge3JlbmRlclByb2R1Y3RBdHRyaWJ1dGVzKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgICAge3JlbmRlckxlZ2FsU3BlY2lmaWNzKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyTGVnYWxPcHRpb25zKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyRXhsdXNpb25TZXRzKHdvcmxkLCBpdGVtKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGVnYWxPcHRpb25zKHdvcmxkOiBXb3JsZCwgaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gd29ybGQuY2F0YWxvZztcclxuICAgIGNvbnN0IHJ1bGVzID0gd29ybGQucnVsZUNoZWNrZXI7XHJcbiAgXHJcbiAgICBjb25zdCBzcGVjaWZpYyA9IGNhdGFsb2cuZ2V0U3BlY2lmaWMoaXRlbS5kZWZhdWx0S2V5KTtcclxuICAgIGNvbnN0IGl0ZW1zOiBHZW5lcmljVHlwZWRFbnRpdHlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaGlsZFBJRCBvZiBydWxlcy5nZXRWYWxpZENoaWxkcmVuKGl0ZW0uZGVmYXVsdEtleSkpIHtcclxuICAgICAgaWYgKGNhdGFsb2cuaGFzUElEKGNoaWxkUElEKSkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2F0YWxvZy5nZXRHZW5lcmljKGNoaWxkUElEKTtcclxuICAgICAgICBpdGVtcy5wdXNoKGNoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXRlbXMuc29ydCgoYSxiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnfX0+XHJcbiAgICAgICAgICBPcHRpb25zIGZvciA8c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheSd9fT5cclxuICAgICAgICAgICAge3NwZWNpZmljLm5hbWV9ICh7c3BlY2lmaWMua2V5fSwge3NwZWNpZmljLnNrdX0pXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2l0ZW1zLm1hcCh0aGlzLnJlbmRlckdlbmVyaWNMaW5rKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApOyAgXHJcbiAgfVxyXG5cclxuICByZW5kZXJFeGx1c2lvblNldHMod29ybGQ6IFdvcmxkLCBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHkpIHtcclxuICAgIGNvbnN0IGNhdGFsb2cgPSB3b3JsZC5jYXRhbG9nO1xyXG4gICAgY29uc3QgcnVsZXMgPSB3b3JsZC5ydWxlQ2hlY2tlcjtcclxuICAgIGNvbnN0IHNldHMgPSBbLi4ucnVsZXMuZ2V0RXhjbHVzaW9uR3JvdXBzKGl0ZW0ucGlkKV07XHJcblxyXG4gIFxyXG4gICAgY29uc3QgcmVuZGVyT25lRXhsdXNpb25TZXQgPSAoZ3JvdXA6IFNldDxQSUQ+LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBpZHMgPSBbLi4uZ3JvdXAudmFsdWVzKCldO1xyXG4gICAgICBjb25zdCBpdGVtcyA9IHBpZHMubWFwKHBpZCA9PiBjYXRhbG9nLmdldEdlbmVyaWMocGlkKSk7XHJcbiAgICAgIGl0ZW1zLnNvcnQoKGEsYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5TZXQge2luZGV4fTwvZGl2PlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCh0aGlzLnJlbmRlckdlbmVyaWNMaW5rKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PkV4Y2x1c2lvbiBTZXRzPC9kaXY+XHJcbiAgICAgICAge3NldHMubWFwKHJlbmRlck9uZUV4bHVzaW9uU2V0KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyT25lUElEKHBpZDogUElELCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gY2F0YWxvZy5nZXRHZW5lcmljKHBpZCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAge2NoaWxkLm5hbWV9ICh7Y2hpbGQucGlkfSlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU29ydGVkR2VuZXJpY3MoaXRlbXM6IEdlbmVyaWNUeXBlZEVudGl0eVtdKSB7XHJcbiAgICBpdGVtcy5zb3J0KChhLGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xyXG4gICAgcmV0dXJuIGl0ZW1zLm1hcCh0aGlzLnJlbmRlckdlbmVyaWNMaW5rKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckdlbmVyaWNMaW5rID0gKGl0ZW06IEdlbmVyaWNUeXBlZEVudGl0eSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfVxyXG4gICAgICAgIGtleT17aXRlbS5waWR9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcHRpb25DaGFuZ2VkKGl0ZW0ucGlkKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpdGVtLm5hbWV9ICh7aXRlbS5waWR9KVxyXG4gICAgICA8L05hdi5MaW5rPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2R1Y3RBdHRyaWJ1dGVzKFxyXG4gIHdvcmxkOiBXb3JsZCxcclxuICBpdGVtOiBHZW5lcmljVHlwZWRFbnRpdHlcclxuKSB7XHJcbiAgY29uc3QgdGVuc29yID0gd29ybGQuYXR0cmlidXRlSW5mby5nZXRUZW5zb3IoaXRlbS50ZW5zb3IpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVEZXRhaWxDb2x1bW59PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+QXR0cmlidXRlczwvZGl2PlxyXG4gICAgICB7dGVuc29yLmRpbWVuc2lvbnMubWFwKHJlbmRlckRpbWVuc2lvbil9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXJEaW1lbnNpb24oZGltZW5zaW9uOiBEaW1lbnNpb24sIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+e2RpbWVuc2lvbi5uYW1lfTwvZGl2PlxyXG4gICAgICAgIHtkaW1lbnNpb24uYXR0cmlidXRlcy5tYXAocmVuZGVyQXR0cmlidXRlKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJBdHRyaWJ1dGUoYXR0cmlidXRlOiBBdHRyaWJ1dGVEZXNjcmlwdGlvbiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT57YXR0cmlidXRlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgeyByZW5kZXJBbGlhc2VzKGF0dHJpYnV0ZS5hbGlhc2VzKSB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdEFsaWFzZXMoaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudURldGFpbENvbHVtbn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5BbGlhc2VzPC9kaXY+XHJcbiAgICAgIHtyZW5kZXJBbGlhc2VzKGl0ZW0uYWxpYXNlcyl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFsaWFzZXMoYWxpYXNlczogc3RyaW5nW10pIHtcclxuICBjb25zdCBvdXRwdXQ6IHN0cmluZ1tdID0gW107XHJcbiAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XHJcbiAgICBjb25zdCBwYXR0ZXJuID0gcGF0dGVybkZyb21FeHByZXNzaW9uKGFsaWFzKTtcclxuICAgIGZvciAoY29uc3QgdGV4dCBvZiBhbGlhc2VzRnJvbVBhdHRlcm4ocGF0dGVybikpIHtcclxuICAgICAgb3V0cHV0LnB1c2godGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG91dHB1dC5zb3J0KCk7XHJcblxyXG4gIHJldHVybiBvdXRwdXQubWFwKChhbGlhcywgaW5kZXgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmVzdGVkfSBrZXk9e2luZGV4fT57YWxpYXN9PC9kaXY+XHJcbiAgKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxlZ2FsU3BlY2lmaWNzKHdvcmxkOiBXb3JsZCwgaXRlbTogR2VuZXJpY1R5cGVkRW50aXR5KSB7XHJcbiAgY29uc3QgY2F0YWxvZyA9IHdvcmxkLmNhdGFsb2c7XHJcbiAgY29uc3Qga2V5cyA9IFsuLi5jYXRhbG9nLmdldFNwZWNpZmljc0ZvckdlbmVyaWMoaXRlbS5waWQpXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51RGV0YWlsQ29sdW1ufT5cclxuICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PlNwZWNpZmljIEZvcm1zPC9kaXY+XHJcbiAgICAgIHtrZXlzLm1hcChyZW5kZXJTcGVjaWZpYyl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXJTcGVjaWZpYyhrZXk6IEtleSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgZGVmYXVsdE1hcmsgPSBpdGVtLmRlZmF1bHRLZXkgPT09IGtleSA/ICcgPD09IGRlZmF1bHQnIDogJyc7XHJcbiAgICBjb25zdCBzID0gY2F0YWxvZy5nZXRTcGVjaWZpYyhrZXkpO1xyXG4gICAgY29uc3QgbmFtZSA9IHMubmFtZTtcclxuICAgIGNvbnN0IHNrdSA9IHMuc2t1O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXN0ZWR9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIHtuYW1lfSAoe2tleX0sIHtza3V9KVxyXG4gICAgICAgIHtkZWZhdWx0TWFyaz8gPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogJzFleCd9fT5cclxuICAgICAgICAgIDxGYUNoZWNrQ2lyY2xlIHRpdGxlPVwiZGVmYXVsdCBmb3JtXCIvPlxyXG4gICAgICAgIDwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhhcHBsaWNhdGlvbjogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB3b3JsZDogYXBwbGljYXRpb24ud29ybGQsXHJcbiAgICBjdXJyZW50UElEOiBhcHBsaWNhdGlvbi5jdXJyZW50UElELFxyXG4gICAgb3B0aW9uUElEOiBhcHBsaWNhdGlvbi5vcHRpb25QSUQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9wdGlvbkNoYW5nZWQ6IChwaWQ6IFBJRCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRPcHRpb25QSUQocGlkKSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFByb2R1Y3REZXRhaWxDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==