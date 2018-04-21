// The second set of parenthesis means the function is invoked
// immediately after it is declared.
const routes = require('next-routes')();

// add a new route mapping

// We need this route so new is  not accepted as a wildcard for :address
routes.add('/campaigns/new', '/campaigns/new');
// a colon indicates a wildcard
// the second parameter is the file that gets executed.
routes.add('/campaigns/:address', '/campaigns/show');

module.exports = routes;

