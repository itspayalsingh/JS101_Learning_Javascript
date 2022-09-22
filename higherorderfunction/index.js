//Problem 1: Find the average of elements present at odd index of the following array.
let arr = [10, 24, 56, 72, -10, -88, 100, 564];
sum=0;
arr.map(function(item,index){
  sum+=item;
} )
console.log(sum/arr.length);