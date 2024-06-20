// array=============
const myArray = [23, 22, 45, 32, 34];
// const numbers = new Array(24, 35, 34, 33, 67);
// console.log(numbers[3]);

// array methods=========

myArray.push(132, 234);
myArray.pop();

myArray.unshift(221, 243);
myArray.shift();

// console.log(myArray.includes(222));
// console.log(myArray.indexOf(45));

// const newArr=myArray.join()
// console.log(typeof newArr);

// slice (copy array), splice(remove main array) =========

const a = myArray.slice(0, 3);
const b = myArray.splice(0, 3);

// concat & spread(...)

const num1 = [13, 21, 45, 32];
const num2 = [54, 34, 56, 43];
const allNum = num1.concat(num2);
const newNum = [...num1, ...num2, 431];

const friends = [
  "alif",
  ["toha", "asif"],
  "chop",
  ["sohid", ["emon", ["emran"]]],
];
const newFriends = friends.flat(Infinity);

console.log(Array.isArray("abcd"));

// create array (from, of)

console.log(Array.from("abcd"));
// console.log(Array.from({name:'df'}));

const score1 = 22;
const score2 = 34;
const score3 = 54;
console.log(Array.of(score1, score2, score3));
