let boxes = document.querySelectorAll(".slot");
let resetBtn = document.querySelector("#resetBtn");
let msg = document.querySelector("#msg");
let turnO = true;
const winningPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

function updateStatus() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        if (turnO) {
            msg.innerText = "Let's play agian. PlayerO's turn.";
        } else {
            msg.innerText = "Let's play agian. PlayerX's turn.";
        }
    })
}


resetBtn.addEventListener("click", () => {updateStatus()});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            msg.innerText = "PlayerX's turn.";
        } else {
            box.innerText = "X";
            turnO = true;
            msg.innerText = "PlayerO's turn.";
        }
        box.disabled = true;
        checkWinner();
    });
});

function checkWinner () {
    for (let pattern of winningPatterns) {
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if ((pos1val === pos2val) && (pos2val === pos3val)) {
                let winner = pos1val;
                msg.innerText = `Player${winner} won the game.`;
                boxes.forEach((box) => {
                    box.disabled = true;
                    changeBC();
                })
                if (winner == 'O') {
                    turnO = true;
                } else {
                    turnO = false;
                }
            }
        }
        function changeBC() {
            boxes[pattern[0]].style.backgound = "green";
            boxes[pattern[1]].style.backgound = "green";
            boxes[pattern[2]].style.backgound = "green";
            return;
        }
    }
}