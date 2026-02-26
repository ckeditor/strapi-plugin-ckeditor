'use strict';

const register = require( './register' );

const routes = require("./routes");
const controllers = require("./controllers");

module.exports = {
  register,

  controllers,
  routes,
};
