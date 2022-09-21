//Problem 1: Print the Calendar date in the below format
//nested loop 1st iw question

for(month=1;month<=12;month++){
  let days=31;
  if(month==2){
    days=28;
  } else if(month==6 || month==4 || month==5 || month==9 || month==11) {
    days=30; // first we will take condition for j then only we will run a 2nd loop because in j we are changing the condition(2)
  } 
  for(j=1;j<=days;j++){
    console.log(j,"-",month);
  }
}