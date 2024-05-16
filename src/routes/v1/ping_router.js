const express = require('express');
const router = express.Router();
const {pingController}= require('../../controllers/ping_controller')




function checkRequest(request,response,next){
    //next -> next middleware function in line

    console.log("checking the request");

    //if everything look good we call the next middleware
    next();//logger
    console.log("Ending the check request");

}


function logger(request,response,next){
    console.log("logging request");

    //if everything looks good thenn call the next middleware   
    next();//auth checker

    console.log("Ending the logger request");
}

function authChecker(request,response,next){
    console.log("Auth Checked");
   
    next();//pingController
    console.log("Ending the auth request");
}


router.get('/',[checkRequest,logger,authChecker],pingController);
module.exports = router;