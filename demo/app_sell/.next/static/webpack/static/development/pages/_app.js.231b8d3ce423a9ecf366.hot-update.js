webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/app.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./style/app.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../static/radnikanext-medium-webfont.woff2 */ "./static/radnikanext-medium-webfont.woff2");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ":root {\n  --color-grey: #112233;\n  --color-primary: #ff0000;\n  --color-primary-light: #ffffff;\n  --color-primary-dark:#BA265D;\n  --color-white: #ffffff;\n  --color-black: #000; }\n\n@font-face {\n  font-family: 'radnika_next';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n* {\n  margin: 0;\n  padding: 0; }\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit; }\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62,5%; }\n\nbody {\n  font-family: 'Open Sans',sans-serif;\n  font-weight: 400;\n  line-height: 1.6; }\n", "",{"version":3,"sources":["C:/Users/B350M/Desktop/App/app_sell/style/app.scss"],"names":[],"mappings":"AAEA;EACI,qBAAa;EACb,wBAAgB;EAChB,8BAAsB;EACtB,4BAAqB;EAErB,sBAAc;EACd,mBAAc,EAAA;;AAKlB;EACI,2BAA2B;EAC3B,4CAAsD,EAAA;;AAG1D;EACI,SAAS;EACT,UAAU,EAAA;;AAGd;;;EAGI,mBAAmB,EAAA;;AAGvB;EACI,sBAAsB;EACtB,gBAAgB,EAAA;;AAGpB;EACI,mCAAmC;EACnC,gBAAgB;EAChB,gBAAgB,EAAA","file":"app.scss","sourcesContent":["\r\n\r\n:root {\r\n    --color-grey: #112233;\r\n    --color-primary: #ff0000;\r\n    --color-primary-light: #ffffff;\r\n    --color-primary-dark:#BA265D;\r\n\r\n    --color-white: #ffffff;\r\n    --color-black: #000;\r\n    \r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'radnika_next';\r\n    src: url('../static/radnikanext-medium-webfont.woff2')\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n    box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n    font-size: 62,5%; // 1rem = 16px\r\n}\r\n\r\nbody {\r\n    font-family: 'Open Sans',sans-serif;\r\n    font-weight: 400;\r\n    line-height: 1.6;\r\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./static/radnikanext-medium-webfont.woff2":
/*!*************************************************!*\
  !*** ./static/radnikanext-medium-webfont.woff2 ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/radnikanext-medium-webfont.62ca5fdcd8af3bd53666dd3f7e56afa0.woff2");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZS9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9yYWRuaWthbmV4dC1tZWRpdW0td2ViZm9udC53b2ZmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRixzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBbUQ7QUFDakcsb0NBQW9DLG1CQUFPLENBQUMsNkZBQTRDO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxVQUFVLDBCQUEwQiw2QkFBNkIsbUNBQW1DLGlDQUFpQywyQkFBMkIsd0JBQXdCLEVBQUUsZ0JBQWdCLGdDQUFnQyx5REFBeUQsRUFBRSxPQUFPLGNBQWMsZUFBZSxFQUFFLDhCQUE4Qix3QkFBd0IsRUFBRSxVQUFVLDJCQUEyQixxQkFBcUIsRUFBRSxVQUFVLHdDQUF3QyxxQkFBcUIscUJBQXFCLEVBQUUsU0FBUyx5R0FBeUcsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLGlCQUFpQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxnQkFBZ0IsT0FBTyxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSx1RUFBdUUsOEJBQThCLGlDQUFpQyx1Q0FBdUMscUNBQXFDLG1DQUFtQyw0QkFBNEIsaUJBQWlCLG9CQUFvQixvQ0FBb0MsbUVBQW1FLFdBQVcsa0JBQWtCLG1CQUFtQixLQUFLLHNDQUFzQyw0QkFBNEIsS0FBSyxjQUFjLCtCQUErQix5QkFBeUIsb0JBQW9CLGNBQWMsNENBQTRDLHlCQUF5Qix5QkFBeUIsS0FBSyxHQUFHO0FBQzduRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBZSxvRkFBdUIsbUZBQW1GLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMjMxYjhkM2NlNDIzYTllY2YzNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vc3RhdGljL3JhZG5pa2FuZXh0LW1lZGl1bS13ZWJmb250LndvZmYyXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY29sb3ItZ3JleTogIzExMjIzMztcXG4gIC0tY29sb3ItcHJpbWFyeTogI2ZmMDAwMDtcXG4gIC0tY29sb3ItcHJpbWFyeS1saWdodDogI2ZmZmZmZjtcXG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiNCQTI2NUQ7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1jb2xvci1ibGFjazogIzAwMDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogNjIsNSU7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJyxzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9CMzUwTS9EZXNrdG9wL0FwcC9hcHBfc2VsbC9zdHlsZS9hcHAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLHFCQUFhO0VBQ2Isd0JBQWdCO0VBQ2hCLDhCQUFzQjtFQUN0Qiw0QkFBcUI7RUFFckIsc0JBQWM7RUFDZCxtQkFBYyxFQUFBOztBQUtsQjtFQUNJLDJCQUEyQjtFQUMzQiw0Q0FBc0QsRUFBQTs7QUFHMUQ7RUFDSSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdkOzs7RUFHSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQVwiLFwiZmlsZVwiOlwiYXBwLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWNvbG9yLWdyZXk6ICMxMTIyMzM7XFxyXFxuICAgIC0tY29sb3ItcHJpbWFyeTogI2ZmMDAwMDtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5LWxpZ2h0OiAjZmZmZmZmO1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnktZGFyazojQkEyNjVEO1xcclxcblxcclxcbiAgICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcclxcbiAgICAtLWNvbG9yLWJsYWNrOiAjMDAwO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9yYWRuaWthbmV4dC1tZWRpdW0td2ViZm9udC53b2ZmMicpXFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIsNSU7IC8vIDFyZW0gPSAxNnB4XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucycsc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9yYWRuaWthbmV4dC1tZWRpdW0td2ViZm9udC42MmNhNWZkY2Q4YWYzYmQ1MzY2NmRkM2Y3ZTU2YWZhMC53b2ZmMlwiOyJdLCJzb3VyY2VSb290IjoiIn0=