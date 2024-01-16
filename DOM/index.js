// Accessing content using class name
// let element  = document.getElementsByClassName('child');
// console.log(element[0])
// console.log(element[1])
// console.log(element[2])
// console.log(element[3])

// Accessing content using id
// let element = document.getElementById('parent')
// console.log(element) // return element
// console.log(element.innerHTML) // innerHTML text or elements
// console.log(element.innerText) // text content only no tags
// console.log(element.textContent) // text content include space

// Accessing content using tagname
// let element = document.getElementsByTagName("div");
// console.log(element); // all elements which have div tag
/*
    output-

    HTMLCollection(5) [div#parent, div.child, div.child, div.child, div.child, parent: div#parent]0: div#parent1: div.child2: div.child3: div.child4: div.childparent: div#parentlength: 5[[Prototype]]: HTMLCollection

*/

// accessing content using querySelector
// let element = document.querySelector("div");
// console.log(element); // returns the HTMLCollection of first div element
/*
    output- 
    div#parent
*/

// Accessing content using querySelectorAll
// let element = document.querySelectorAll("div");
// console.log(element); // returns the nodeList which have div elements

// Accessing content using querySelector id bases
// let element = document.querySelector('#parent');
// console.log(element); // returns the query first child

// Accessing content using querySelector id bases
// let element = document.querySelector('.child');
// console.log(element); // returns the query first child

// Accessing content using name attribute in input, button, etc
let element = document.getElementsByName("username");
console.log(element[0].value); // Anubhav Ranjan
console.log(element[0].nodeName); // INPUT
console.log(element[0].nodeValue); // null


