const express = require('express');
const v1Router = express.Router();
const pingRouter = require('./PingRouter');
const productRouter = require('./ProductRouter');


//Any new api if we have introduce we just register here 
//if it s for V1

v1Router.use('/ping',pingRouter);

v1Router.use('/products',productRouter)


module.exports = v1Router;