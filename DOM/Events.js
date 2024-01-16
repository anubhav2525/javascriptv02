let element = document.querySelector("#btn1");

function clickEvent() {
  console.log("you just click on btn1");
}
// element.addEventListener("click", clickEvent);

function MouseDownEvent() {
  console.log("Mouse pressed");
}
// element.addEventListener("mousedown", MouseDownEvent);

function MouseUpEvent() {
  console.log("Mouse released");
}
// element.addEventListener("mouseup", MouseUpEvent);
let prev;
element.addEventListener('mouseover',function(){
    console.log("mouse over")
    prev = element.innerHTML
    element.innerHTML = "OK"
})


element.addEventListener('mouseout',function(){
    console.log("mouse out")
    element.innerHTML = prev
})

document.addEventListener("keypress", function(event) {
    // Code to be executed when a key is pressed and released
    console.log("Key pressed:", event.key);
  });
  
console.log(element);
