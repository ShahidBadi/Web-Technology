const cp=require('child_process');

// without error
cp.exec("echo hello world",(err,stdout,stderr)=>{
    if(err){
        throw err
    }
    console.log(stdout);
})

//with  error
cp.exec("ec hello world",(err,stdout,stderr)=>{
    if(err){
        throw err
    }
    console.log(stdout);
})

// //error with stderr
cp.exec("ec hello world",(err,stdout,stderr)=>{
   console.log(stderr);
   
})
