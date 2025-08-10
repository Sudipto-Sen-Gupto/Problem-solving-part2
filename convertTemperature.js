// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

let c=37;

function far(celcius){
    let farhenheit;
    // celcius/5=(farhenheit-32)/9;
    //9celcius=5(farhenheit-32);
    //(farhenheit-32)=9*celcius/5;
    //farhenheit=(9*celcius/5)+32;
    farhenheit=(9*celcius/5)+32;
    
    return farhenheit;
}
const result=far(c);
console.log(result);
