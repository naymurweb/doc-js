// for of for in and forEach, filter, map, reduce
// _____________________________________________________________________________

// array key index and value array element
// for in loop key
// for of loop value

// const numbers = [33, 22, 55, 33, 67, 32, 55];
// for(const number of numbers){
//     console.log(number);
// }

// const map=new Map();
// map.set('IN','india');
// map.set('BD','bangladesh');
// map.set('FR','france');

// for(const [key,value] of map){
//     console.log(`${key} =>: ${value}`);
// }

// const courses = {
//   js: "javascript",
//   py: "phython",
//   rb: "ruby",
// };

// for(const course in courses){
//     console.log(`${course}:: ${courses[course]}`);
// }

// const numbers=[22,33,22,45,32,670];
// for(const number in numbers){
//     console.log(numbers[number]);
//     // console.log(typeof number);
// }

// const coding=['js','ruby','cpp','java'];
// coding.forEach((v,i,arr)=>{
//     console.log(v,i,arr);

// })
// console.log(coding);

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "roby",
    languageFileName: "rabay",
  },
  {
    languageName: "py",
    languageFileName: "phonthon",
  },
];

// for(const coding of myCoding){
//     console.log(coding.languageFileName);
// }

// myCoding.forEach((coding)=>{
//     console.log(coding.languageName);

// })

// ===================================================================================================

// filter

const numbers = [33, 22, 54, 32, 67, 43];

// const big=numbers.filter((n)=>n>40)
// console.log(big);

// map

const change = numbers.map((n) => n + 20);

const ff = numbers
  .map((n) => n + 10)
  .filter((n) => n > 50)
  .map((n) => n + 100);
// console.log(ff);

// const totalSum = numbers.reduce((accumulator, currentValue) => {
//   console.log(accumulator, currentValue);

//   return accumulator + currentValue;
// }, 0);
// console.log("total ::", totalSum);

// const total=numbers.reduce((acc,curr)=>acc+curr,0)
// console.log(total);
