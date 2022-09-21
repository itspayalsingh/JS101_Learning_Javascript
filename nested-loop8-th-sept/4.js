// geeks for geeks
//Input: 3
//Output:
//3 3 3 2 2 2 1 1 1 $3 3 2 2 1 1 $3 2 1 $
//Note: Instead of printing a new line print a "$" without quotes.
bag="";
for(i=3;i>=1;i--){
  for(j=i;j>=3;j--){
    bag+=i;
  }
  console.log(bag);
}


