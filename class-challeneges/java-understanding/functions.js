function sayHello(num1){
  console.log(num1 * 10);
}

for(let i = 0; i <5; i++){
  sayHello(i);
}

for (let i = 10; i <15; i++){
 sayHello (i); 
}

function tax(stateTax){
  console.log(stateTax*0.07);
}

tax(5000);


function rf(x,y){
  return x*y;
}
function df(x,y){
  return x/y;
}
function af(x,y){
  return x + y;
}
function sf(x,y){
  return x - y;
}

let d = rf(22,33);
d = df(d, 45);
d = af(d,72);
d = sf(d,8);




let z = rf(6,8);
let a = df(2,9);
let b = af(3,7);
let c = sf(5,8);


function cd(x,y=0){
  if (x === 0){
    return y;
  }
  y = y+x;
  x--;
  return cd(x,y);
}

let g = cd(3);

function calculateTax(x){
  if(x<11925){
    return x*.1;
  }else if (x<48475){
    return x*.12;
  }else if (x<103350){
    return x*.22;
  }else if (x<197300){
    return x*.24;
  }else if (x<250525){
    return x*.32;
  }else if (x<626350){
    return x*.35;
  }else{
    return x*.37;
  }
}

let stolenMoney = calculateTax(35000);

let dog = {
  name: "Hunter",
  age: 13,
  breed: "Lab"
};


console.log(dog.name);
console.log(dog.age);
console.log(dog.breed);
console.log(dog);

dog.name = "Zuki";
dog.age = 8;
dog.breed = "Akita";

console.log(dog.name);
console.log(dog.age);
console.log(dog.breed);
console.log(dog);

let dog1 = {
  name: "Hunter",
  age: 13,
  breed: "Lab"
};

let x = 1;
let y = x;
let dog2 = dog1;

y = 7;
dog1.name = "Maggie";
console.log(dog2.name);