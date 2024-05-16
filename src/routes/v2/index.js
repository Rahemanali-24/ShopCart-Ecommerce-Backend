const express = require('express');
const v2Router = express.Router();
const pingRouterV2 = require('./pingRoutesV2');


//Any new api if we have introduce we just register here 
//if it s for V1

v2Router.use('/ping',pingRouterV2);



module.exports = v2Router;