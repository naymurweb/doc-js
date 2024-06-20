const mySym = Symbol("key1");

const user = {
  name: "asif",
  fullName: "asif alom",
  [mySym]: "myKey1",
  age: 25,
  location: "alipur,satkhira",
  email: "asif@google.com",
  isLogIn: false,
  lastLoginDays: ["mon", "thu"],
};

// console.log(user.location);
// console.log(user['email']);
// console.log(user.fullName);
// console.log(user['fullName']);
// console.log( user[mySym]);

// user.email='nr@gmail.com'
// Object.freeze(user)
// user.email='tonmoy32@gmail.com'

user.greeting = function () {
  console.log("hello world");
};
user.greeting2 = function () {
  console.log(`user ${this.name}`);
};

// console.log(user);

// console.log(user.greeting2());

// const student={}
const student = new Object();
student.name = "pranto";
student.roll = 43;
console.log(student);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = Object.assign(obj1, obj2);
// const obj4={...obj1,...obj2}
console.log(obj3);
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty("a"));

// object de-structure===============

const course = {
  name: "js hindi",
  duration: "1h.50m",
  courseInstructor: "hakem uddin",
};

console.log(course.duration);

const { name, courseInstructor: instructor } = course;
console.log(name, instructor);
