function sumOfEven(start,end){
 
  if(typeof start < typeof end){

   var sum = 0;
  for(var i=start; i <end; i++){
    if(i%2===0){
      sum = sum + i;
    }
  }
  }
  return sum;
}
var getSum = sumOfEven(start<end);
console.log(getSum);
