webpackHotUpdate(5,{

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// The second set of parenthesis means the function is invoked
// immediately after it is declared.
var routes = __webpack_require__(968)();

// add a new route mapping

routes
// We need this route so new is  not accepted as a wildcard for :address
.add('/campaigns/new', '/campaigns/new')
// a colon indicates a wildcard
// the second parameter is the file that gets executed.
.add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EsSUFBTSxTQUFTLEFBQWY7O0FBRUE7O0FBRUE7QUFDSSxBQURKO0NBRUssQUFGTCxJQUVTLEFBRlQsa0JBRTJCLEFBRjNCO0FBR0k7QUFDQSxBQUpKO0NBS0ssQUFMTCxJQUtTLEFBTFQsdUJBS2dDLEFBTGhDLG1CQU1LLEFBTkwsSUFNUyxBQU5ULGdDQU13QyxBQU54Qyw2QkFPSyxBQVBMLElBT1MsQUFQVCxvQ0FPNEMsQUFQNUM7O0FBV0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9jbWNhYm95L0Ryb3Bib3gvR2l0SHViL3JlYWN0L2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\cmcaboy\\Dropbox\\GitHub\\react\\kickstart\\routes.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\cmcaboy\\Dropbox\\GitHub\\react\\kickstart\\routes.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40N2M0N2ZmNWQwNTQ1Y2FmODdiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzP2U4YTMxZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHNlY29uZCBzZXQgb2YgcGFyZW50aGVzaXMgbWVhbnMgdGhlIGZ1bmN0aW9uIGlzIGludm9rZWRcclxuLy8gaW1tZWRpYXRlbHkgYWZ0ZXIgaXQgaXMgZGVjbGFyZWQuXHJcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJ25leHQtcm91dGVzJykoKTtcclxuXHJcbi8vIGFkZCBhIG5ldyByb3V0ZSBtYXBwaW5nXHJcblxyXG5yb3V0ZXNcclxuICAgIC8vIFdlIG5lZWQgdGhpcyByb3V0ZSBzbyBuZXcgaXMgIG5vdCBhY2NlcHRlZCBhcyBhIHdpbGRjYXJkIGZvciA6YWRkcmVzc1xyXG4gICAgLmFkZCgnL2NhbXBhaWducy9uZXcnLCAnL2NhbXBhaWducy9uZXcnKVxyXG4gICAgLy8gYSBjb2xvbiBpbmRpY2F0ZXMgYSB3aWxkY2FyZFxyXG4gICAgLy8gdGhlIHNlY29uZCBwYXJhbWV0ZXIgaXMgdGhlIGZpbGUgdGhhdCBnZXRzIGV4ZWN1dGVkLlxyXG4gICAgLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcycsICcvY2FtcGFpZ25zL3Nob3cnKVxyXG4gICAgLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcy9yZXF1ZXN0cycsJy9jYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXgnKVxyXG4gICAgLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcy9yZXF1ZXN0cy9uZXcnLCcvY2FtcGFpZ25zL3JlcXVlc3RzL25ldycpXHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcm91dGVzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==