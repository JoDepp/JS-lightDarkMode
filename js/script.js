//add an event listen to h1
//access h1 with
const title = document.querySelector("h1");
//add the variable name and addEventListener
//inside the method add the action we're listening for
//then add the event handler(type of function)that runs code when the mouse pointer is over the h1 element)
title.addEventListener("mouseover", function () {
  //now we add statements(instructions to the program) inside the function body{}
  //these will change the h1 innertext and style properties when the mouse moves over it
  title.innerText = "Let's PARTY!";
  title.style.color = "maroon";
});

// we can use classList to apply mulitple styles at once classList.add()
//create a classs in CSS with the styles in .dark-palette
//use querySelctor() to target the button that the even will happen on
const darkModeButton = document.querySelector(".dark-mode");
//this variable selects the element that you want to change
const body = document.querySelector("body");
//add the event listener to listen for a click on the button, & event handler to designate what will happenwhen the even occurs
darkModeButton.addEventListener("click", function () {
  //inside this function body add the variable for the element that will change.
  //the add() method will apply styles to a designated element
  body.classList.add("dark-palette");
});
//reapply the light colors by removing the dark palette
const lightModeButton = document.querySelector(".light-mode");

lightModeButton.addEventListener("click", function () {
  body.classList.remove("dark-palette");
});
