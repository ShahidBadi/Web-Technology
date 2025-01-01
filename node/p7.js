let n=6;
let flag=0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        flag+=1;
    }
}
if(flag==2){
    console.log("prime number")
}
else{
    console.log("not prime number")
}