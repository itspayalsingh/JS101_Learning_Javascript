// Write a function to replace spaces in a given string with - .
//str="hey payal this side";
function space(str){
bag="";
for(i=0;i<str.length;i++){
  if(str[i]==" "){
    bag+="-";
  }else {
    bag+=str[i];
  }
}
console.log(bag);
}
space("hey payal this side");
