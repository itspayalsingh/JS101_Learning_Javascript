//Print a box patterns using *
for(i=1;i<=10;i++){
  bag="";
  for(j=1;j<=10;j++){
   if(i==1 || i==10){ 
     bag=bag+"*";
   } else if(j==1 ||j==10){
     bag=bag+"*";
   } else {
     bag=bag+" ";
   }
        
  }
console.log(bag);    
}
