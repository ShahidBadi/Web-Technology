const fs=require('fs');
//check file exist or not
fs.exists("demo.txt",(exists)=>{
    console.log(exists);
})

//for file stat
fs.stat("demo.txt",(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})
 
//for file rename
//convert demo.txt to demo2.txt
fs.rename("demo.txt","demo2.txt",(err)=>{
    if(err){
        throw err;
    }
})

//delete file
fs.unlink("demo2.txt",(err)=>{
    if(err){
        throw err;
    }
})

//file write
fs.writeFileSync("demo.txt","hello world",(err)=>{
    if(err){
        throw err;
    }
})

//read file
fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})

//append file
fs.appendFile("demo.txt","demo2.txt",(err)=>{
    if(err){
        throw err;
    }
})

//copy file
fs.copyFile("demo.txt","demo2.txt",(err)=>{
    if(err){
        throw err;
    }
    console.log("done")
})