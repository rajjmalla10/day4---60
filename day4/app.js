let boxes = document.getElementsByClassName("box")
let reset = document.getElementById("reset")
let newGameBtn = document.getElementById("new-btn")

let msgContainer = document.querySelector(".msg-container ")
let msg = document.querySelector("#message")

let turn0 = true;

const showWinner = (winner) => {
    msg.innerHTML = `Congratulation the winner is : ${winner}`
    msgContainer.classList.remove("hide");
}

const resetGame = () => {
    turn0 = true;
    enableButton();
    msgContainer.classList.add("hide")

}





const disableButton = () => {
    for(let box of boxes){
        box.disabled = true
    }
}

const enableButton = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerHTML = ""
    }
}

const winPatter = []

//when user clicks on 1 row, 0th index which is 0 the result will be i*3 = 0, for this case 
for (let i = 0; i < 3; i++) {
    winPatter.push([i * 3, i * 3 + 1, i * 3 + 2])
}

for (let i = 0; i < 3; i++) {
    winPatter.push([i , i + 3,i + 6 ])
}

// Generate win pattern for diagonal from top-left to bottom-right
winPatter.push([0, 4, 8]);

// Generate win pattern for diagonal from top-right to bottom-left
winPatter.push([2, 4, 6]);

const checkWinner = () =>{
    for (let patterns of winPatter){
        let val1 = boxes[patterns[0]].innerText
        let val2 = boxes[patterns[1]].innerText
        let val3 = boxes[patterns[2]].innerText

        if(val1 != "" && val2 != "" && val3 != "" ){
            if(val1===val2 && val2===val3 && val3===val1 ){
                console.log("winner")
                showWinner(val1);
                disableButton()
            }
        }
    }
}

Array.from(boxes).forEach((box)=>{
   box.addEventListener('click', () =>{
    if(turn0){
        box.innerText = "O"
        turn0 = false;
        box.disabled = true
    }else {
        box.innerText = "X";
        turn0 = true
        box.disabled = true
        box.style.color = "#ff0000";
    }
    console.log("button was click")
   
   checkWinner(); 
})
})

reset.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
