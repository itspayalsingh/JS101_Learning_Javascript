// Write a function isOdd which returns a boolean value based on the number is odd or not  Use this function to print the odd numbers from 0 to a given limit(included)

function odd(num){
  if(num%2!=0){
    return true;
  }
}
 
for(let i=2;i<=28;i++){
  let x=odd(i);
  if(x==true){
    console.log(i);
  }
}
