//Print the average of even numbers from 1 to 100 (both included)
i=1;
sum = 0;
let count = 0;
while(i<=100){
  if(i%2==0){
    sum = sum+i;
    count++;
  }
   i++;
}
avrg = sum/count;
console.log(avrg);