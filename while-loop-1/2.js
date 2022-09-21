//Print the sum of all the multiples of 3 from 0 to the given limit
bag=0;
for(i=0;i<=20;i++){
  if(i%3==0){
    bag=bag+i;
  }
}
console.log(bag);