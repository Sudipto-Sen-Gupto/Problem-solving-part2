
//convert inch to feet

function convert(inch){
    let feet,remainder,result;
    feet=parseInt(inch/12);
     remainder=inch%12;

     result=`${feet} ft ${remainder} inch`;
    
          return result;    
}
 const unit=convert(65);
 console.log(unit);