/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function myfunction() {
  //write your code here

  let pintas = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palo = Math.floor(Math.random() * pintas.length);
  let numerito = Math.floor(Math.random() * numeros.length);

  let aleatorias = pintas[palo] + " " + numeros[numerito];

  console.log(aleatorias);
  document.getElementsByTagName("body").innerHTML = aleatorias;
};
var boton = document.getElementById("myBtn");
