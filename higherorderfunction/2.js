//Problem 3: Taking the following array into consideration get the output as given below:
arr = [3,4,5,6,7]
//Output ==> 3 - 5 - 7
//Hint: You have to use forEach and conditional statement over here.

 bag="";
arr.forEach(function(item,index){
  if(index==arr.length-1){
    bag+=item;
  }else if(item%2!=0){
    bag+=item+" - ";
  }
} );
console.log(bag);