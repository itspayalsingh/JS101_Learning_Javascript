let n=10;
prime(n);
function prime(n){
  for(let i=2;i<n;i++){
  let count=0;
    for(let j=2;j<=i;j++){
      if(i%j==0 && i!=j){
      count++;
        break;
      }
    }
    if(count>0){
      console.log(i);
    }
  }
}