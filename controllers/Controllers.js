const {incomForm} = require("formidable");
const { readTask } = require("../utils/fileHanddler")


exports.GetTask = (req, res) => {
    const tasks= readTask()
    res.writeHead(200, "OK", {"Content-type":"Application/json"});
    res.send(JSON.stringify(tasks))

}
exports.CreatTask = (req, res) => {
   const form = new incomForm();
   form.parse(req, (err, fields, files) => {
       if (err) {
           res.writeHead(500, "Not Found", {"Content-type":"Application/json"});
           res.end(JSON.stringify({
               message:"Internal Server Error"
           }))
           return;
       }
     const tasks= readTask();
     const newTask={
        id:  Date.now(),
        title: fields.title,
        description: fields.description,
        status: fields?.status || 'pendding'
        
     }
   })
   
        
    

    
}





exports.UpdateTask = (req, res) => {
    
}
exports.DeleteTask = (req, res) => {
    
}