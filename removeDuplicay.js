
let touristPlace=["Sundarban","Coxesbazar","Rangamati","Sajek","Sundarban","Bandarban","Rangamati"];
let num=[2,10,2,8,28,8,4,10];

function duplicate(list){
     let str=[];
     for(const item of list){
        if(str.includes(item)===false){
            str.push(item);
        }
     }
     return str.sort();
     
}
const arr=duplicate(touristPlace);
console.log(arr);