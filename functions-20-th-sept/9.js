//Write code to find the absolute difference of two numbers
//  Sample Input-1 12,4
//    Sample Output-1 8
//  Sample Input-2 4,18
//Sample Output-2 14
//NOTE: It must consist of two functions 1. To //find the difference 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value
function abs(a,b){
 let x=a-b;
  if(x<0){
  console.log(x*(-1));//because of absolute we are multiplying it by -1
  } else {
    console.log(x);
  }
}
abs(18,10);