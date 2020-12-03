// javascript

const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");

console.log(player1);
console.log(player2);

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

let path1 = `./img/dice${randomNumber1}.png`;

let path2 = `./img/dice${randomNumber2}.png`;

let player = document.querySelectorAll("img");

player[0].setAttribute("src", path1);
player[1].setAttribute("src", path2);
//🤜

if (randomNumber1 > randomNumber2) {
  player1.firstElementChild.innerHTML = "Player 1 🤜 win";
  player1.firstElementChild.style.color = "#61b15a";
} else if (randomNumber2 > randomNumber1) {
  player2.firstElementChild.innerHTML = "Player 2 🤜 win";
  player2.firstElementChild.style.color = "#61b15a";
} else {
  player1.firstElementChild.innerHTML = "Match Draw 🤜";
  player2.firstElementChild.innerHTML = "Match Draw 🤜";
}
