const express = require("express");
const serviceName = require('../services/serviceName/network');

const routes = function (app){
  app.use('/serviceroute', serviceName);
}

module.exports = routes;