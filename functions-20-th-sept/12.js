// Write a function to convert a character to lower case Use this function to convert a given word to lower case Use that function to convert an array of strings to array of lower case strings
name= ["MA", "SA", "I", "SCH", "OOL"]
  //Sample Output ["ma", "sa", "i", "sch", "ool"]


convert(name);

function convert(arr){ 
upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lower="abcdefghijklmnopqrstuvwxyz";
arr1=[];
for(i=0;i<=arr.length-1;i++){
  bag="";
  for(j=0;j<=arr[i].length;j++){
    for(k=0;k<lower.length;k++){
      if(arr[i][j]==upper[k]){
        bag+=lower[k];
      }
    }
  }
  arr1.push(bag);
}
console.log(arr1);
}
