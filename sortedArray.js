
function sorted(arr1){
    let arr2=[];
for(const item of arr1){
    if(item<0){
    return "Invalid"
}
}
    arr2=arr1.sort(function(a,b){return b-a});
       return arr2;    
}
const result=sorted([1,2,-3]);
console.log(result);