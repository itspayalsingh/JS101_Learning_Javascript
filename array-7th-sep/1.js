// Given an array of numbers find the average of all the even numbers.
arr=[1,2,3,4,5,6,7,8,9,10,11];
sum=0;
count=0;
for(i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count++;
  }
}
console.log(sum/count);