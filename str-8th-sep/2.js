//count the name start from A
arr=["Aman","Lala","Ahmad","Lman","Amir"];
count=0;
for(i=0;i<=arr.length-1;i++){
  if(arr[i][0]=="L"){
    count++;
  }
}
console.log(count);