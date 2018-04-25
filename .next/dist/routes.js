'use strict';

// The second set of parenthesis means the function is invoked
// immediately after it is declared.
var routes = require('next-routes')();

// add a new route mapping

routes
// We need this route so new is  not accepted as a wildcard for :address
.add('/campaigns/new', '/campaigns/new')
// a colon indicates a wildcard
// the second parameter is the file that gets executed.
.add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EsSUFBTSxTQUFTLEFBQWY7O0FBRUE7O0FBRUE7QUFDSSxBQURKO0NBRUssQUFGTCxJQUVTLEFBRlQsa0JBRTJCLEFBRjNCO0FBR0k7QUFDQSxBQUpKO0NBS0ssQUFMTCxJQUtTLEFBTFQsdUJBS2dDLEFBTGhDLG1CQU1LLEFBTkwsSUFNUyxBQU5ULGdDQU13QyxBQU54Qyw2QkFPSyxBQVBMLElBT1MsQUFQVCxvQ0FPNEMsQUFQNUM7O0FBV0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9jbWNhYm95L0Ryb3Bib3gvR2l0SHViL3JlYWN0L2tpY2tzdGFydCJ9