let n=6;
let ans=0;
for(let i=1;i<n;i++){
    if(n%i==0){
        ans+=i;
    }
}
if(n==ans){
    console.log("perfect number")
}
else{
    console.log("not perfect")
}