const fs= require('fs');
const path= require('path');

const filePath= '.data/tasks.json';
exports.writeTask=(task)=>{
    fs.writeFileSync(filePath,JSON.stringify(task));
    
}
exports.readTask=()=>{
    if (!fs.existsSync(filePath)) {
        writeTask([]);
        
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}