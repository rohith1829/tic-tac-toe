let boxes = document.querySelectorAll(".boxes");
let tophead = document.querySelector(".new-game");
let win = document.querySelector("#win");
let newgamebtn = document.querySelector("#nwgame");
let reset = document.querySelector("#reset");
let turnO = false;
let count = 0;

console.log("object");
const winCases = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      turnO = false;
      box.innerText = "O";
    } else {
      turnO = true;
      box.innerText = "X";
    }
    box.disabled = true;
    count++;

    let ck = checkWinner();
    if (count === 9 && !ck) {
      win.innerText = `Game was a Draw.`;
      tophead.classList.remove("hide");
    }
  });
});

const checkWinner = () => {
  for (let pattern of winCases) {
    let v1 = boxes[pattern[0]].innerText;
    let v2 = boxes[pattern[1]].innerText;
    let v3 = boxes[pattern[2]].innerText;
    if (v1 != "" && v2 != "" && v3 != "") {
      if (v1 === v2 && v2 === v3) {
        showWinner(v1);
        return true;
      }
    }
  }
};

const showWinner = (v1) => {
  win.innerText = `Winner is ${v1}`;
  tophead.classList.remove("hide");
  disableboxes();
};

const disableboxes = () => {
  for (box of boxes) box.disabled = true;
};

const resetgame = () => {
  tophead.classList.add("hide");
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
