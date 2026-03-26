let someArrayName = [];//set up an empty array
let counter = 0;//set up the loop counter starting at 0

console.log('the array before the loop: ' + someArrayName); //print the vales of the array before the loop

do{//start the loop
    someArrayName[counter] = counter*7;//add a value to the array of 7 * whatever the counter is
    console.log('The value of i is: '+counter + ' --- The value of array[i] is: ' + someArrayName[counter])//print to the console the values of the counter and the array
    counter = counter +1; // add one to the counter
}while (counter<10); //check to see if the counter is less than 10 (determines the number of times the loop is executed)

console.log('The value of the array after the loop: ' + someArrayName); //print the value of the array after the loop

counter=0;
do{//start the loop
    someArrayName[someArrayName.length] = counter*707 + 'word';//add a value to the array of 7 * whatever the counter is
    console.log('The value of i is: '+counter + ' --- The value of array[i] is: ' + someArrayName[someArrayName.length-1])//print to the console the values of the counter and the array
    counter = counter +1; // add one to the counter
}while (counter<10); //check to see if the counter is less than 10 (determines the number of times the loop is executed)

console.log('The value of the array after the loop: ' + someArrayName); //print the value of the array after the loop




let someArrayName2 = [];
let counter2 = 10;


do{
    someArrayName2[someArrayName2.length] = counter2*7;
    counter2 = counter2 +1; 
}while (counter2<20); 

let Hunter = '';
let counter3 = 10;


do{
    Hunter= Hunter + 'zuki' + counter3*7;
    counter3 = counter3 +1; 
}while (counter3<10);


let myArray = [];
let math=30

do{
  myArray[myArray.length] = math +20
  math = math +10
}while(math <120);
  let myArray2 =[];
  let math2 =0
  
  do{
    myArray2[myArray2.length]= math2 *5;
    math2 = math2 + 10
  }while (math2 <30);
  
  math2 = 0;
  do{
    myArray2[math2]= math2 + 10;
     console.log(myArray2 [math2]);
    math2 = math2 + 1;
  } while (math2 < myArray2.length);
  console.log(myArray2);
