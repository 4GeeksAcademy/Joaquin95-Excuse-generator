/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector(".btn").addEventListener("click", function() {
    generateExcuse();
  });
};

const generateExcuse = () => {
  let who = ["The dog", "The Police", "Lucifer", "My Fish"];
  let action = ["late", "didnt make it", "damaged", "ripped"];
  let what = ["My Ipad", "my phone", "My shoes", "My swimming pool"];
  let when = [
    "before work",
    "when I was sleeping",
    "while I was hiking",
    "during my zumba class",
    "Playing video games"
  ];

  let whoindex = math.floor(math.random * who.length);
  let actionindex = math.floor(math.random * action.length);
  let whatindex = math.floor(math.random * what.length);
  let whenindex = math.floor(math.random * when.length);

  console.log(
    who[whoindex],
    action[actionindex],
    what[whatindex],
    when[whenindex]
  );

  let excuse =
    who[whoindex] + action[actionindex] + what[whatindex] + when[whenindex];
  document.querySelector("#excuse").innerHTML = excuse;
};
