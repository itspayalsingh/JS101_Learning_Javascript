 //Given a string count the number of words in that string
str="hey payal this side";
count=0;
for(i=0;i<=str.length-1;i++){
  if(str[i]==" "){
    count++;
  } 
}
console.log(count+1);//to count the number of words first we have counted the gap then +1