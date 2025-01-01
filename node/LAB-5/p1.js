const fs=require('fs')
a=[{
    name:'shahid',
    rollno:102,
    branch:'CSE'

}]
let output = a.map(obj => `name: '${obj.name}', rollno: ${obj.rollno}, branch: '${obj.branch}'`).join('\n');
fs.writeFile("demo.txt",output,(err,data)=>{
    if(err){
        throw err;
    }
    else{
        console.log("successfully entered")
    }
})