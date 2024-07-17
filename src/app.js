/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let excuse = `${randomElementFromArray(who)} ${randomElementFromArray(
    action
  )} ${randomElementFromArray(what)} ${randomElementFromArray(when)}`;
  document.getElementById("excuse").innerHTML = excuse;
  
  console.log("Hello Rigo from the console!");
};

function randomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

