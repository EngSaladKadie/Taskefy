const taskRoute=(req, res)=>{
    if(req.method=="GET"){
        GetTask(req,res);
    } else if(req.method=="POST"){
        CreatTask(req,res);
    }else if(req.method=="PUT"){
        UpdateTask(req,res);
    }else if(req.method=="DELETE"){
        DeleteTask(req,res);
    }else{
        res.writeHead(404,"Not Found", {"Content-type":"Application/json"});
        res.end(JSON.stringify({
            message:"unknown method not found"
        }))
    }

}
module.exports = taskRoute;