// The second set of parenthesis means the function is invoked
// immediately after it is declared.
const routes = require('next-routes')();

// add a new route mapping

routes
    // We need this route so new is  not accepted as a wildcard for :address
    .add('/campaigns/new', '/campaigns/new')
    // a colon indicates a wildcard
    // the second parameter is the file that gets executed.
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests','/campaigns/requests/index')
    .add('/campaigns/:address/requests/new','/campaigns/requests/new')



module.exports = routes;

