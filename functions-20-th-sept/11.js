// Write code to calculate the average of an array If there are no items in the array it should return 0 NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

let str=[1,2,3,4,5];
x=sum(str);
console.log(x/str.length);

function sum(arr){
  sum=0;
for(let i=0;i<=arr.length-1;i++){
  sum+=arr[i];
}
  return sum;
}

