const fs=require('fs')
fs.copyFile('demo.txt','abc.txt',(err)=>{
    if(err){
        throw err
    }
})