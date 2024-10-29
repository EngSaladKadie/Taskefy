const http= require('http');
const  taskRoute= require('./routes/taskRoute');

const HOSTNMAE= "Localhost";
const PORT= 9000;
const server= http.createServer((req,res)=>{
    if (req.url.startsWith('/taske')) {
        taskRoute(req,res);
        
    } else{
        res.writeHead(404,"Not Found", {"Content-type":"Application/json"});
        res.end(JSON.stringify({
            message:"Route not found"
        }))
    }

})


server.listen(PORT,HOSTNMAE ,()=>{
    console.log(`Server is running on ${PORT}`)
})