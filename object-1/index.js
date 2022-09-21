str = "abc";
N=30;


let lower="abcdefghijklmnopqrstuvwxyz";
    sum=0;
    for(i=0;i<=lower.length-1;i++){
        
      for(j=0;j<=str.length-1;j++){
          if(lower[i]==str[j]){
              sum=sum+(N++);
          }
      }
    }
    console.log(sum);