//Given a string swap the case and print the output
//  Sample Input - Test
//Sample Output - tEST
//NOTE: Use multiple functions to achieve the result, NOT one single code block

ul("Test");
function ul(str){ 
lower="abcdefghijklmnopqrstuvwxyz";
upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
bag="";
for(i=0;i<str.length;i++){
  for(j=0;j<lower.length;j++){
    if(str[i]==lower[j]){
      bag+=upper[j];
    }else if(str[i]==upper[j]) {
      bag+=lower[j];
    }
  }
 
}
console.log(bag);
}
