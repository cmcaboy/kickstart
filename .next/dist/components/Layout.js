'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\cmcaboy\\Dropbox\\GitHub\\react\\kickstart\\components\\Layout.js';
// Head moves its children to the parent component.

exports.default = function (props) {
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkhlYWQiLCJDb250YWluZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU87Ozs7QUFDUCxBQUFRLEFBRVI7Ozs7O0FBSkE7O2tCQUllLFVBQUEsQUFBQyxPQUFVLEFBQ3RCOzJCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUE7YUFDSSxBQUNRLEFBQ0o7Y0FGSixBQUVTOztzQkFGVDt3QkFGUixBQUNJLEFBQ0ksQUFLSjtBQUxJO0FBQ0kseUJBSVIsQUFBQzs7c0JBQUQ7d0JBUEosQUFPSSxBQUNDO0FBREQ7QUFBQSxjQVJSLEFBQ0ksQUFRVyxBQUdsQjtBQWJEIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9jbWNhYm95L0Ryb3Bib3gvR2l0SHViL3JlYWN0L2tpY2tzdGFydCJ9