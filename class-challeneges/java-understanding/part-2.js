
let animals = [
  ['zebra', 'elephant', 'woodchuck', 'horse'],
  ['alligator', 'giraffe', 'ostrich']
  ];
  animals [0] [1] = 'ape';
  animals [1] [2] = 'thunder';
  
console.log(animals);
animals [1] [3] = 'rhino';
console.log (animals);

let x = animals[1].length;
animals [1] [x] = 'pig';
console.log(animals);
animals [1] [5] = 'monkey';
console.log(animals);
let z = animals[1].length;
animals [1] [z] = 'salamander';
console.log(animals);
//let y = animals[0].length
//animals [0] [y + y] = 'fly';
animals [0] [animals[0].length] = 'ducks';
console.log(animals);
animals [1] [animals [1].length] = 'moron';
console.log(animals);

let idk = ['mary', 'joseph', 'tom', 'tammy', 'fred', 'salina'];
idk [idk.length] = 'frank';
console.log(idk);  //still on arrays

let meSee = ['one', 'two','three', 'four', 'five'];
meSee [meSee.length] = 6  //shortcut array added
console.log(meSee);

let math = ['one', 'two','three', 'four', 'five'];
math [math.length] = 6
console.log(math);   // this is a for loop

for(let i = 0; i<6; i= i + 1){
  console.log(math[i]);
}

// this is a do loop
 let sense = ['cigars', 'tamales', 'doritos', 'clams', 'pop', 'bread'];
  
  let counter = 0;
  
  do{
    console.log(sense[counter]);
    counter = counter + 1;
  } while(counter<7);
   
  let counter2 = 6;
  do{
    console.log(counter2);
    counter2 = counter2 +5;
  } while (counter2<60);



let fish = ['bait', 'pole', 'line', 'hooks'];

let hat = 0;
do{
  console.log(hat);
  console.log(fish [hat]);

  hat = hat + 1;
} while (hat <fish.length);
console.log(hat);
