
function leapyear(year){

    if(year%100!==0 && year%4===0){
        return true;
    }
    else if(year%400===0){
        return true
    }
    else{
        return false;
    }
}

const leap=leapyear(2022);
const leap2=leapyear(2000);
const leap3=leapyear(1945);
const leape4=leapyear(1892);
const leap5=leapyear(2024);
console.log(leap,leap2,leap3,leape4,leap5);