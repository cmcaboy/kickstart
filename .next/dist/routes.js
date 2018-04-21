'use strict';

// The second set of parenthesis means the function is invoked
// immediately after it is declared.
var routes = require('next-routes')();

// add a new route mapping

// We need this route so new is  not accepted as a wildcard for :address
routes.add('/campaigns/new', '/campaigns/new');
// a colon indicates a wildcard
// the second parameter is the file that gets executed.
routes.add('/campaigns/:address', '/campaigns/show');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EsSUFBTSxTQUFTLEFBQWY7O0FBRUE7O0FBRUE7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE2QixBQUE3QjtBQUNBO0FBQ0E7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLHVCQUFrQyxBQUFsQzs7QUFFQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2NtY2Fib3kvRHJvcGJveC9HaXRIdWIvcmVhY3Qva2lja3N0YXJ0In0=