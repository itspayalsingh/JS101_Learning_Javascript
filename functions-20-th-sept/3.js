//Write a function to check if the char is a small case or not.
let lower="a";
small(lower);
function small(lower){
  if(lower==lower.toLowerCase()){
    console.log("true");
  }else {
    console.log("false");
  }
}