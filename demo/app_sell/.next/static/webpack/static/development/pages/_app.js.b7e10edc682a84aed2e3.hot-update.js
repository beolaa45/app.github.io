webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _style_header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/header.module.scss */ "./components/style/header.module.scss");
/* harmony import */ var _style_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_header_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\B350M\\Desktop\\App\\app_sell\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function () {
  N;
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function () {
  console.log('Start');
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function () {
  console.log('Start');
};

var Header = function Header() {
  return __jsx("div", {
    className: _style_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _style_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Header__bar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }, __jsx("h1", {
    className: _style_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Header__logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 14
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 14
    }
  }, __jsx("a", {
    className: _style_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Header__link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Sick Fist"))), __jsx("div", {
    className: _style_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Header__nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "sub-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Search"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Cart")));
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJOIiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiY29uc29sZSIsImxvZyIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkhlYWRlciIsInN0eWxlIiwiSGVhZGVyX19iYXIiLCJIZWFkZXJfX2xvZ28iLCJIZWFkZXJfX2xpbmsiLCJIZWFkZXJfX25hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQUEsa0RBQU0sQ0FBQ0Msa0JBQVAsR0FBNEIsWUFBTTtBQUM5QkMsR0FBQztBQUNKLENBRkQ7O0FBSUFGLGtEQUFNLENBQUNHLHFCQUFQLEdBQStCLFlBQU07QUFDakNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDSCxDQUZEOztBQUlBTCxrREFBTSxDQUFDTSxrQkFBUCxHQUE0QixZQUFNO0FBQzlCRixTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0gsQ0FGRDs7QUFNQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQ1g7QUFBSyxhQUFTLEVBQUVDLGdFQUFLLENBQUNELE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFLLGFBQVMsRUFBRUMsZ0VBQUssQ0FBQ0MsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFRCxnRUFBSyxDQUFDRSxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0EsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFHLGFBQVMsRUFBRUYsZ0VBQUssQ0FBQ0csWUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxDQUhBLENBREosRUFRRztBQUFLLGFBQVMsRUFBRUgsZ0VBQUssQ0FBQ0ksV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBUkgsQ0FETCxFQWNJO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixDQWRKLENBRFc7QUFBQSxDQUFmOztLQUFNTCxNO0FBdUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5iN2UxMGVkYzY4MmE4NGFlZDJlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlL2hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcblxyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IHtcclxuICAgIE5cclxufVxyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTdGFydCcpXHJcbn1cclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnU3RhcnQnKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5IZWFkZXJ9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuSGVhZGVyX19iYXJ9PlxyXG4gICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUuSGVhZGVyX19sb2dvfT5cclxuXHJcblxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlLkhlYWRlcl9fbGlua30+U2ljayBGaXN0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuSGVhZGVyX19uYXZ9PlxyXG4gICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ViLWJhcic+XHJcbiAgICAgICAgICAgIDxwPlNlYXJjaDwvcD5cclxuICAgICAgICAgICAgPHA+Q2FydDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICBcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=