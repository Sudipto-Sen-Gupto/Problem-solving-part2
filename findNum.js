// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

let numbers=[5,6,11,12,98,5,5];
// let str=[];
// let count=0;
// function find(repeat){
//   for(const item of repeat){
//  if(repeat.includes(5)===true){
//         count ++;
//      }
//   }
    
//            return count;
// }
// const num=find(numbers);
// console.log(num);
for(const item of numbers){
if(numbers.includes(5)===true){
    console.log("true");
   
}
else
    console.log("false");
}
