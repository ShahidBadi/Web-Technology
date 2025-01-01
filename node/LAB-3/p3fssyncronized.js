const { log } = require("console");
//read file using read file syncronized
const fs=require("fs");
const data=fs.readFileSync("demo.txt","utf-8")
console.log(data);
console.log("hello world");

//write file  using write file syncronized
// fs.writeFileSync("demo3.txt","badi",(err)=>{
//             if(err){
//                 throw err;
//             }
// });

//append file using append file sync
fs.appendFileSync("demo.txt","badi",()=>{
    if(err){
        throw err;
    }
})
console.log("hello world");




