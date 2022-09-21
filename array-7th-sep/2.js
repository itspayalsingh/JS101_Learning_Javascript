//spread operator
//(...)       //spread operator syntax is 3 dots 
arr=[1,2,3];
arr2=[...arr,4,5,6];
arr3=[9,8,...arr2,7];// we can also add spread operator between numbers

arr4=[...arr,...arr2,...arr3];//concatination
console.log(arr4);