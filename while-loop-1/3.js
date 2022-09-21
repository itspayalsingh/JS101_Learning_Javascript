//Print the average of even numbers from 1 to 100 (both included)

bag=0;
count=0;
for(i=1;i<=100;i++){
  if(i%2==0){
    bag=bag+i;
    count++;
  }
}
console.log(bag/count)