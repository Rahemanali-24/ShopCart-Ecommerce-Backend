const express = require('express');

const {PORT} = require('./config/serverConfig')

const app = express();








const PORT = 3000;
app.listen(PORT,function(){
    console.log(`server is running in port ${PORT}`);
});