function pingController(request,response){
    return response.json({message:"v1 for ping"});
}

function pingControllerV2(request,response){
    return response.json({message:"v2 for ping"});
}
module.exports = {
    pingController,
    pingControllerV2
};