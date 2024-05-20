const express = require('express');
const v1Router = express.Router();
const pingRouter = require('./ping_router');
const productRouter = require('./product_router');
const categoryRouter = require('./category_router')

//Any new api if we have introduce we just register here 
//if it s for V1

v1Router.use('/ping',pingRouter);
v1Router.use('/products',productRouter);
v1Router.use('/categories',categoryRouter);


module.exports = v1Router;