let num:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];

for(let i=0; i<num.length; i++){
  let originalNo:string;

  if(num[i]===1){
    originalNo = "one";
  }
  else if(num[i]===2){
    originalNo = "two";
  }
  else if(num[i]===3){
    originalNo = "three";
  }
  else if(num[i]===4){
    originalNo = "four";
  }
  else if(num[i]===5){
    originalNo = "five";
  }
  else if(num[i]===6){
    originalNo = "six";
  }
  else if(num[i]===7){
    originalNo = "seven";
  }
  else if(num[i]===8){
    originalNo = "eight";
  }
  else if(num[i]===9){
    originalNo = "nine";
  }
  else if(num[i]===10){
    originalNo = "ten";
  } 
  else if(num[i]===11){
    originalNo = "eleven";
  }
  else if(num[i]===12){
    originalNo = "twelve";
  }
  else{
    originalNo = "None";
  }
  console.log(num[i] + originalNo);
}