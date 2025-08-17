
function canPay(changeArray, totalDue) {

    let sum=0;
    for(const item of changeArray){
        sum +=item;
    }
    if(sum>=totalDue){
        return true;
    }
    else{
        return false;
    }


}
const result=canPay([1,5,5], 10);
console.log(result);

