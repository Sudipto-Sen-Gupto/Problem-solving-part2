
function average(list){
    let avg;
     let sum=0;
    let list2=[];
    for(const item of list){
           
        if(item%2!==0){
            list2.push(item);
            sum +=item;  
        }
    }
     avg=sum/list2.length;
     console.log(list2);
      console.log(sum);
    return avg;
}
const arr=average([34,45,33,56,79,105])
console.log(arr);