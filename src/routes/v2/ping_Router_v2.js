const express = require('express');
const pingRouterV2 = express.Router();
const {pingControllerV2}= require('../../controllers/ping_controller')

pingRouterV2.get('/',pingControllerV2);

module.exports = pingRouterV2;

