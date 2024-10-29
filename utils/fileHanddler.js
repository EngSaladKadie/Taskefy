const fs= require('fs');
const path= require('path');

const filePath= '.data/tasks.json';
const writeTask=(task)=>{
    fs.writeFileSync(filePath,JSON.stringify(task));
    
}
const readTask=()=>{
    if (!fs.existsSync(filePath)) {
        writeTask([]);
        
    }
}