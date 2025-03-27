let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let point = 0;
let result = document.getElementsByClassName("text")[0];
let result_ans = "";
let round = 0;
let ans = "";

function playGame(user) {
  if (round >= 10) {
    result.innerHTML = "Game Over... refresh to play again...";
    return;
  }
  var com = Math.floor(Math.random() * 3 + 1);
  round++;
//   console.log(com)   // Use to view computer choice
  if (user == com) {
    result_ans = "Tie...";
  } else if (user == 1 && com == 2) {
    result_ans = "You Lost...";
  } else if (user == 1 && com == 3) {
    result_ans = "You Won...";
    point++;
  } else if (user == 2 && com == 1) {
    result_ans = "You Won...";
    point++;
  } else if (user == 2 && com == 3) {
    result_ans = "You Lost...";
  } else if (user == 3 && com == 1) {
    result_ans = "You Lost...";
  } else if (user == 3 && com == 2) {
    result_ans = "You Won...";
    point++;
  } else {
    result_ans = "Invalid...";
  }
  result.innerHTML = `${result_ans} : Round = ${round+1}/10`;
  document.getElementsByClassName("point")[0].innerHTML = `Point = ${point}/10`;
  if (round == 10){
    result.innerHTML= "Game Over... refresh to play again...";
  }
}

rock.addEventListener("click",()=>playGame(1));
paper.addEventListener("click",()=>playGame(2));
scissor.addEventListener("click",()=>playGame(3));


