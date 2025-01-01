let n=153;
let n2=n;
let n3=n;
let ans=0;
let sum=1;
while(n!=0){
    ans=ans+1;
    n=n/10;
}
while(n2!=0){
    let a=n*10;
    for(let i=1;i<=ans;i++){
        sum=sum+(a*i);
    }
    n2=n2/10;
}
if(sum==n3){
    console.log("number")
}
else{
    console.log("numebr is not armstrong")
}