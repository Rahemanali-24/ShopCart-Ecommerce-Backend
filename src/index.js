const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const {PORT} = require('./config/server_config')


const ApiRouter = require('./routes/api_router');
const app = express();

app.use(responseTime());
app.use(bodyParser.json());
app.use('/api',ApiRouter) //if any request come with /api we are going to map api routes

app.listen(PORT,function(){
    console.log(`server is running in port ${PORT}`);
});