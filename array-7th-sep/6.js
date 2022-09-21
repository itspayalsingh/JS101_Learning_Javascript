str="Donald"; //Donald to Ronald
//str are immutable(not changeble)
//step 1 str to arr
arr=[];
for(i=0;i<=str.length-1;i++) {
  arr.push(str[i]);
}
arr[0]="R"; //replacing "D" TO "R"
//converting arr to str
bag="";
for(j=0;j<=arr.length-1;j++){
  bag=bag+arr[j];
}
console.log(bag);
// second method on another page