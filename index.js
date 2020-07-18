// console.log('Im Working. Im JS. Im Beautiful. Im worth it');
// alert('Im Working. Im JS. Im Beautiful. Im worth it');

/*
const a = 10;
let b = a - 5;
a = 4
console.log(b, a);
*/
/* String
const what = "Hello";
*/
//true, false
//number float
// const wat = 55.1;
/*
const something = "Something"
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 54, something];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);
*/
// const leeInfo = {
//     name: "kiki",
//     age: 33,
//     gender: "Male",
//     isHandsome: true,
//     favMovies: ["Along the gods", "Oldboy"],
//     favFood: [
//       {name:"Cheese", fatty:false}, {name:"Cheeseburger", fatty:true}
//       ]
//   };

// leeInfo.gender = "Female";
  
// console.log(leeInfo);
// console.log(leeInfo.favFood[0].name);

/*
const kInfo = {name: "kk", work: "cook", cats: ["DD", "ruru", "coco", "chuchu", "lala", "momo", "TT"], favFood: {hamburger:"Cheese", fatty:true}};

console.log(kInfo);
console.log(kInfo.name);
console.log(kInfo.cats[0]);
console.log(kInfo.favFood.hamburger);
kInfo.cats[1]="Ruru";
console.log(kInfo.cats);
*/

// console.log(console);

/*
function sayHi(name, favFood){
  console.log(`Hello ${name} I like ${favFood}`);
  return favFood;
}

const greeting = sayHi("sb", "chicken");

console.log(greeting);
*/
/*
const calculator = {
  plus: function(m,n){
    return m + n;
  }, 
  minus: function(m,n){
    return m - n;
  }, 
  multiply: function(m,n){
    return m * n;
  }
}

const plus = calculator.plus(5, 4);
const minus = calculator.minus(5, 4);
const multiply = calculator.multiply(5, 4);

console.log(plus, minus, multiply);
*/
//const title = document.getElementById("title"); 
const title = document.querySelector("#title"); //If it's a class name, use . instead of #
// console.error("hohoho");
// console.log(title);
// console.dir(title);
// title.style.color = "MistyRose";
// document.title = "This is mine";
// title.innerHTML = "Hi! From JS"; 

/*
function handleResize(event) {
  console.log(event);
}

window.addEventListener("resize", handleResize);
*/

/*
const BASE_COLOR = "rgb(60, 84, 81)";
const OTHER_COLOR = "#c7d4e3";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}


*/

/*
const age = prompt("How old are you");

if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age < 18) {
  console.log("too young");
} else {
  console.log("go ahead");
}
*/

const CLICKED_CLASS = "clicked";

function handleClick() {
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();