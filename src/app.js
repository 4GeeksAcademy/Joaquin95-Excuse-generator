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
  let who = [
    "My dog",
    "The Police",
    "Lucifer",
    "My Fish",
    "UPS Driver",
    "neighbor"
  ];
  let action = ["wet", "pooped", "damaged", "ate", "stole", "hid"];
  let what = [
    "My Ipad",
    "my car",
    "my arm",
    " in my swimming pool",
    "my mailbox"
  ];
  let when = [
    "While I was on vacation",
    "when I was sleeping",
    "while I was at the gym",
    "during my coding class",
    "when I was playing video games"
  ];

  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  console.log(
    who[whoindex],
    action[actionindex],
    what[whatindex],
    when[whenindex]
  );

  let excuse =
    who[whoindex] +
    " " +
    " " +
    action[actionindex] +
    " " +
    what[whatindex] +
    " " +
    when[whenindex];
  document.querySelector(".excuse").innerHTML = excuse;
};
