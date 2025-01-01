var a=[10,20,50,20,30]
var n=0;
for(let i=0;i<a.length;i++){
    if(n<a[i]){
        n=a[i];
    }
}
console.log(n);