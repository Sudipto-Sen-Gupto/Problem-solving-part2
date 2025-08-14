// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// find: 5
 
let numbers = [5,6,11,12,98, 5];

function repeated(arr){
    let count=0;
    for(const item of arr){
        if(item===5){
             
            count ++;
        }
    }
    return count;
}
const result=repeated(numbers);
console.log(result);

