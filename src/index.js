const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const {PORT} = require('./config/server_config')
const db = require('./config/db_config');
const ApiRouter = require('./routes/api_router');
const app = express();
// app.use(responseTime(function(req,res,time){
//     console.log(time)
//     res.setHeader('X-Response-Time',time);
// }));
app.use(responseTime());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',ApiRouter) //if any request come with /api we are going to map api routes
app.listen(PORT,async function(){ 
    console.log(`server is running in port ${PORT}`);
    await db.sync();
});