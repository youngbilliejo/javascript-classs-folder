let num = 66;
num = num - 60;
console.log ( num);

let banana = 55;
banana = banana - 50;
console.log( num + banana);

let x = 17;
x = x + 1;
console.log (x + 1 );

let q = 18;
q = q * 9;
console.log( q);

let list = 'rice, beans, pudding, valium, ammo, and coffee';
list = list + ", tylenol";
console.log (list);  // string
 // string this cannot call out a specific item
// unlike an array where you can pick out a specific item as its 
//related to the item.


let awesome = 'mike';
awesome = awesome + ' is the best man ever.';
console.log ( awesome);

let v = 'camera';
v = v + ' , and film, and carrying bag.';
console. log ( v );  // this is a string

let list2 = "sheets, dog food, and fish";
list2 = list2 + ', socks and screens';
list2 = list2 + ', toys';  // this is a string
console.log (list2);


let tackList = ' bridle, snaffle, blanket';
tackList = tackList + ' saddle, spurs, and riding crop';
console.log ( tackList);

let sentance = 'maggie ';
sentance = sentance + 'is ';
sentance = sentance + 'a ';
sentance = sentance + 'dog.';  // this is a string
console.log (sentance);
// all of the below are strings
let sam = 'what a good boy';
sam = sam + ' , he loved Canada.'
console.log (sam);

let money = 'cents';
money = money + ' are not certs.'
console.log (money + ', as certs are good');



let horseSense = 'horsemanship';
horseSense += ", is a great skill to have."
console.log (horseSense);

let boating = ' sunny day';
boating += ', are great for fishing.';
console. log (boating + 'for northern Pike,')

let myList = ['leashes', 'dog collar', 'food', 'toys', 'treats'];
myList[5]='beer';
console.log(myList);
console.log(myList[3]);  // THIS IS AN ARRAY

let mySchedule = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(mySchedule[3]);

let myNeeds = ['bath', 'shampoo', 'razor', 'towel'];
console.log(myNeeds[0],myNeeds[3]);

let want =['new car.', 'boat', 'rods', 'bobber'];
console.log(want[1], want[3]); //arrays
want [4] = 5;
want [4] += 10;

let thisNum= 25;
thisNum= thisNum + 50;
console.log(thisNum);

want [4] += thisNum;

let something = ['tools', 'plims', 'smoke', 'lighter'];
something [1] = 'plums';
console.log (something [2], something [3]);

let idea = ['thoughts', 'paper', 'pen', 'ink', 'notes'];
idea [0] = 'thinking';
console.log(idea [3], idea [4]); // array

let num2 = [1,2,'a',3,4,5,6,7,8,9];
num2 [7] = 'b';
console.log (num2); // array plus the single 
//letters are quoted as if in a string.  
// therefore this is a number and a string combo.

let animals = [
  ['zebra', 'elephant', 'woodchuck', 'horse'],
  ['alligator', 'giraffe', 'ostrich']
  ];
  animals [0] [1] = 'ape';
  animals [1] [2] = 'thunder';
  
console.log(animals); //array within an array
  