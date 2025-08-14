// Task-4:
// Write a function to find the longest word in a given string.

let sentence= "I am learning Programming to become a programmer";
 function largestWord(input){
   input= input.split(" ");
   let max=input[0];
   for(const item of input){
    
    if(item.length>max.length){
        max=item;
    }
   }
    return max;
 }
 const result=largestWord(sentence);
 console.log(result);