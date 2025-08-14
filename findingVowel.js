
// Task-3:
// Write a function to count the number of vowels in a string.

function vowels(str){
    let count=0;
     let item;
    for(const x of str){

         item=x.toLowerCase();
           if(item.includes("a")||item.includes("e")||item.includes("i")||item.includes("o")||item.includes("u")){
           
        count ++;
    }
    }
   
    return count;
}
const vow=vowels("GaurAv");
console.log(vow);
