function pingController(request,response){
    console.log("pingController hit")
    return response.json({message:"v1 for ping"});
}

function pingControllerV2(request,response){
    return response.json({message:"v2 for ping"});
}
module.exports = {
    pingController,
    pingControllerV2
};