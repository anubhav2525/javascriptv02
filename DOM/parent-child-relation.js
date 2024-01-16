// let element;

// parentNode parentElement

// element = document.getElementById("parent").firstChild;
// console.log(element); // #text beacuse html file has space

// element = document.getElementById("parent").firstElementChild;
// console.log(element); // div.child beacuse this return only html valid elements (tags)

// element = document.querySelector(".child")
// let parent =element.parentElement;
// console.log(parent); // div#parent
// parent =element.parentNode;
// console.log(parent); // div#parent

// // firstChild firstElementChild
// element = document.querySelector("#parent");
// let firstChild = element.firstChild;
// console.log(firstChild) //#text
// let firstElementChild = element.firstElementChild;
// console.log(firstElementChild) // div.child1

// // lastChild lastElementChild
// element = document.querySelector("#parent");
// let lastChild = element.lastChild;
// console.log(lastChild) //#text
// let lastElementChild = element.lastElementChild;
// console.log(lastElementChild) // div.child4

// children
// element = document.querySelector('#parent');
// let children = element.children;
// console.log(children)// HTMLCollection(4) [div.child1, div.child2, div.child3, div.child4]

// console.log(children.length)// 4

// children = element.childElementCount;
// console.log(children)// 4

// children = element.childNodes;
// console.log(children)// NodeList(9) [text, div.child1, text, div.child2, text, div.child3, text, div.child4, text]
// console.log(children.length) // 9 include text, comment and element

// siblings (nextSibling previousSibling)
// element = document.querySelector('.child2').nextElementSibling
// console.log(element)// div.child3
// element = document.querySelector('.child2').nextSibling
// console.log(element)// #text

// element = document.querySelector(".child2").previousElementSibling;
// console.log(element); // div.child1
// element = document.querySelector(".child2").previousElementSibling;
// console.log(element); // div.child1
