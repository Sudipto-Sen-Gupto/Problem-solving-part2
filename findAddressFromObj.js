
function address(detail){
  // return (detail.street +","+detail.house+","+detail.society)
  let strN="";
  let houseN="";
  let socN="";
  if(detail.street){
    strN=detail.street;
  }
  else{
    strN="__";
  }
  if(detail.house){
    houseN=detail.house;
  }
  else{
        houseN="__";
  }
  if(detail.society){
    socN=detail.society;
  }
  else{
    socN="__"
  }
  return `${strN},${houseN},${socN}`;
}
const result=address({house: "15A",society:"Earth Perfect"});
console.log(result);