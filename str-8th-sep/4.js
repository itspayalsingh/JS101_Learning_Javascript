 str=[7,2,7,4,7,7,2]
obj={};
for(i=0;i<str.length;i++){
  if(obj[str[i]] == undefined){
    obj[str[i]] =1;
  } else {
    obj[str[i]]++;
  }
}

console.log(obj)