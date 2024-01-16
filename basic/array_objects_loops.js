/*
    There are six types of loop in js:
    1. for loop
    2. while loop
    3. do-while loop
    4. for-in loop
    5. for-of loop
    6. forEach loop
*/

// for loop
// for (let i = 1; i <= 10; i++) console.log(i);

// while loop
// let i=1;
// while(i<=10){
//     console.log(i)
//     i++;
// }

// do-while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// array
// method 1 to declare array
// let arr = [];
// for (let i = 0; i < 10; i++) arr[i] = Math.floor(Math.random() * 100);
// for (let i = 0; i < 10; i++) console.log(arr[i]);
// for(let key of arr) console.log(key)// for of loop
// for(let key in arr) console.log(arr[key])// for in loop
// foreach loop in array
// arr.forEach(element => {
//     console.log(element)
// });

// method 2 to declare array
// let newArray = new Array("1", "2", "3", "5", "6");
// for (let i = 0; i < newArray.length; i++) console.log(newArray[i]);

/* array methods
    1. push(element)
    2. pop()
    3. shift()
    4. unshift(element)
    5. indexOf(element)
    6. include(element)
    7. length
    8. toString()
    9. join(seprator)
    10. delete
    11. concat(array)
    12. sort()
*/

// push()
// let arr= [1,2,3,4,5]
// console.log(arr)
// arr.push(6)
// console.log(arr)

// pop()
// let arr= [1,2,3,4,5]
// console.log(arr)
// arr.pop()
// console.log(arr)

// shift()
// let arr= [1,2,3,4,5]
// console.log(arr)
// arr.shift()
// console.log(arr)

// unshift()
// let arr= [1,2,3,4,5]
// console.log(arr)
// arr.unshift(6)
// console.log(arr)

// indexOf(element)
// let arr= [1,2,3,4,5]
// console.log(arr)
// let element=arr.indexOf(4) // return index number if found
// console.log(element)

// includes(element)
// let arr= [1,2,3,4,5]
// console.log(arr)
// let element=arr.includes(4) // return true if found otherwise false
// console.log(element)

// length
// let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
// console.log(arr.length) // returns the length of array here 10 return

// toString()
// let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
// let str = arr.toString() // convert array into string
// console.log(str) // print string
// console.log(typeof str) // stype of variable

// join(seprator)
// let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
// let str = arr.join('*') // convert array into string with a seprator
// console.log(str) // print string
// console.log(typeof str) // stype of variable

// delete
// let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
// delete arr[5]
// console.log(arr)

// concat(array2)
// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8]
// console.log(arr1.concat(arr2))

// sort()
// let arr = [10,45,32,45,12,0,34,12,54,9];
// console.log(arr)
// arr.sort()
// console.log(arr)



// objects
// const obj = {
//   name: "Anubhav",
//   rid: "R42174",
//   age: 20,
//   state: "Bihar",
// };

// using for in loop to access all element
// for(let key in obj){
//     console.log(key,obj[key]);
// }
// access element using properties name
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.rid)
