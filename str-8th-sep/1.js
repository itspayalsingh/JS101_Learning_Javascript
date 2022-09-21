// Given an array of string count the overall total number of characters
arr=["payal","kajal","reema","seema"];
count=0;
for(i=0;i<=arr.length-1;i++){
  count=count+arr[i].length;
}
console.log(count);