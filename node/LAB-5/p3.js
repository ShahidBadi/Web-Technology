const fs=require('fs')
const a=fs. readFileSync('demo.txt','utf-8',()=>{})
console.log(a.split(/\s+/).length)