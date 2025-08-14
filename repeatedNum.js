// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// find: 5
 
// let numbers = [5,6,11,12,98, 5];

// function repeated(arr){
//     let count=0;
//     for(const item of arr){
//         if(item===5){
             
//             count ++;
//         }
//     }
//     return count;
// }
// const result=repeated(numbers);
// console.log(result);


let numbers = [5, 6, 11, 12, 98, 5];

const repeated = (arr, target) => arr.filter(item => item === target).length;

console.log(repeated(numbers, 25));   // 2
console.log(repeated(numbers, 5));  // 1

