
function match(str1,str2){
   if(typeof str1 !=="string" || typeof str2 !=="string"){
    return "Invalid";
   }
    if(str1.includes(str2)){
        return true;
    }
    else
        return false;
}
const result=match('Peter Parker','eter P');
console.log(result);