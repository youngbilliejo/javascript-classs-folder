  let myArray2 =[];
  let math2 =0
  
  while (math2 <30){
    myArray2[myArray2.length]= math2 *5;
    math2 = math2 + 10
  };
  
  math2 = 0;
  do{
    myArray2[math2]= math2 + 10;
     console.log(myArray2 [math2]);
    math2 = math2 + 1;
  } while (math2 < myArray2.length);

  
  math2 = 0
while (math2 <5)   {
  myArray2 [myArray2.length] = math2 + 10
  math2 = math2 + 1;
}

let total = 0;
math2 = 0;
while (math2 <myArray2.length){
  total = total + myArray2[math2];
  math2 = math2 + 1;
};
console.log(' The average of the values in the array is '+ total /myArray2.length);



  math2 = 0
  while (math2 <myArray2.length) {
    myArray2[math2] = math2 + 'Hunter';
  math2 = math2 + 2;
  }
  console.log(myArray2);
  
  for(let i = 0; i<myArray2.length; i++) {
    myArray2[i] = 'Zuki';
  }
  console.log(myArray2);
  
  for( let i = 9;i>=0; i--){
    myArray2[i] = 'strange';
  }
  
  // both of the following mean the same thing:
  //math2 = math2 + 1
  //math2++
  
  // math = math + 2
  //math += 2
  
  
  for(let i = 0; i<myArray2.length; i++) {
    myArray2[i] = i*i;
  }
  