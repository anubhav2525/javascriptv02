// 1. Create a variable of type string and try to add a number to it.
let str = "Anubhav";
str = str + " 1";
// console.log(str);

// 2. Use typeof operator to find the datatype of the string in last question.
// console.log(typeof str);

// 3. Create a const object in JavaScript. Can you change it to hold a number later?
// const obj = {
//   name: "Anubhav",
//   age: 21,
//   rid: "R42174",
// };
// console.log(obj);
// obj.name = "Ranjan";
// console.log(obj);
// yes, i can change the value of properties later.

// 4. Try to add a new key to the const object in Problem 3. Were you able to do it?
// obj.contact = "11111111";
// console.log(obj);
// yes, i can add new properties in constant object

// 5. Write a JS program to create a word-meaning dictionary of 5 words.
let obj = {
  value: "कीमत",
  time: "समय",
  dictionary: "शब्दकोष",
  information: "जानकारी",
  knowledge: "ज्ञान",
};

let input = prompt(
  "Enter the word what do you want, value, time, dictionary, information, knowledge"
);
// console.log(input)
for (let key in obj) {
  if (key == input) {
    console.log(obj[key]);
    alert(obj[key]);
  }
}

{{{{{{{{}}}}}}}}