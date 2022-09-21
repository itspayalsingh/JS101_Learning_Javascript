//Print Prime Numbers from 1 to given limit
for(i=1;i<=27;i++){
  count=0;
  for(j=0;j<=i;j++){
    if(i%j==0){
      count++;
    }
  }
  if(count==2){
    console.log(i,"prime number");
  }
}