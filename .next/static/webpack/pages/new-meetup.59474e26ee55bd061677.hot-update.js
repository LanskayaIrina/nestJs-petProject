webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup.js":
/*!*****************************!*\
  !*** ./pages/new-meetup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_projects_06_onwards_to_a_bigger_nextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_projects_06_onwards_to_a_bigger_nextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_projects_06_onwards_to_a_bigger_nextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_projects_06_onwards_to_a_bigger_nextJs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");




var _jsxFileName = "D:\\projects\\06-onwards-to-a-bigger-nextJs\\pages\\new-meetup.js",
    _this = undefined;



var NewMeetupPage = function NewMeetupPage() {
  var addMeetupHandler = /*#__PURE__*/function () {
    var _ref = Object(D_projects_06_onwards_to_a_bigger_nextJs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_projects_06_onwards_to_a_bigger_nextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(meetupData) {
      var res, data;
      return D_projects_06_onwards_to_a_bigger_nextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/new-meetup", {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }
              });

            case 2:
              res = _context.sent;
              console.log("res", res);
              _context.next = 6;
              return res.json();

            case 6:
              data = _context.sent;
              console.log("data", data);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addMeetupHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onAddMeetup: addMeetupHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 10
  }, _this);
};

_c = NewMeetupPage;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupPage);

var _c;

$RefreshReg$(_c, "NewMeetupPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwiYWRkTWVldHVwSGFuZGxlciIsIm1lZXR1cERhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkFjY2VwdCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLE1BQU1DLGdCQUFnQjtBQUFBLDBTQUFHLGlCQUFPQyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0xDLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUN6Q0Msc0JBQU0sRUFBRSxNQURpQztBQUV6Q0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLFVBQWYsQ0FGbUM7QUFHekNNLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0Isa0JBRFQ7QUFFUEMsd0JBQU0sRUFBRTtBQUZEO0FBSGdDLGVBQXBCLENBREE7O0FBQUE7QUFDakJDLGlCQURpQjtBQVV2QkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJGLEdBQW5CO0FBVnVCO0FBQUEscUJBV0pBLEdBQUcsQ0FBQ0csSUFBSixFQVhJOztBQUFBO0FBV2pCQyxrQkFYaUI7QUFhdkJILHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRSxJQUFwQjs7QUFidUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJiLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFnQkEsc0JBQU8scUVBQUMseUVBQUQ7QUFBZSxlQUFXLEVBQUVBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBbEJEOztLQUFNRCxhO0FBb0JTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLjU5NDc0ZTI2ZWU1NWJkMDYxNjc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm1cIjtcblxuY29uc3QgTmV3TWVldHVwUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgYWRkTWVldHVwSGFuZGxlciA9IGFzeW5jIChtZWV0dXBEYXRhKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL25ldy1tZWV0dXBcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lZXR1cERhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiA8TmV3TWVldHVwRm9ybSBvbkFkZE1lZXR1cD17YWRkTWVldHVwSGFuZGxlcn0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0dXBQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==