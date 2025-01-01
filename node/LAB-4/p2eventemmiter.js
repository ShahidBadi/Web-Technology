const em=require("events");

class myemitter extends em{}

const ticker=new myemitter();

ticker.on("video",()=>{
    console.log("notification");
})
let i=0;
let a;
a=setInterval(()=>{
    ticker.emit("video")
    i++;
    if (i==5) {
        clearInterval(a);
    }
},1000)



