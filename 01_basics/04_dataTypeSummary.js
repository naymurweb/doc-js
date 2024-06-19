// Primitive 7============================
// number, string, boolean, null, undefined, symbol, bigint

const age = 32;
// number return type number
const name = "rana";
// sting return type string

const isRain = false;
// boolean return type boolean

const outSideTamp = null;
// null return type obj

let userEmail;
// undefined return type undefined

const unique1 = Symbol("123");
const unique2 = Symbol("123");

// symbol return type symbol

const bigNum = BigInt("3583457345645347353333");
// bigInt return type bigint

// non-primitive (reference)========================
// array, object, function

const students = ["rana", "samim", "asif"];
// array return type obj

const student = {
  name: "asif",
  age: 32,
  school: "alipur high school",
};
// object return type obj

function myFun() {
  console.log(myFun);
}
// function return type function obj

// Mamory(stack,heap)============================

// stack(primitive)-copy heap(not primitive)-reference

const youtubeName = "prantodot";
let anatherYoutube = youtubeName;
anatherYoutube = "tonmoyFb";
// console.log(youtubeName,anatherYoutube);

const user = {
  email: "np@gmail.com",
};

user.email = "tonmoy@gmail.com";
console.log(user.email);
