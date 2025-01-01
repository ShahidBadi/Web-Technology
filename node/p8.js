let n=121;
let n2=n;
let ans=0;
while(n!=0){
    ans=(ans*10)+(n%10);
    console.log(ans);
    n=parseInt(n/10);
}
if(ans==n2){
    console.log("palidrome")
}
else{
    console.log("not palidrome")
}