let userScore = 0;
let computerScore = 0;
let consecutiveWins = 0;
let consecutiveLosses = 0;
let consecutiveDraws = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const user = document.querySelector('#user')
const computer = document.querySelector('#computer')

const reset = document.querySelector('#reset');


const computerChoice = () =>{
    // rock , papper, scissors
    let options = ['rock','paper','scissors'];
   const random_number =  Math.floor(Math.random() * 3);

   return options[random_number];

}

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    consecutiveWins = 0;
    consecutiveLosses = 0;
    consecutiveDraws = 0;
    user.innerHTML = userScore;
    computer.innerHTML = computerScore;
    msg.innerHTML = 'New Game';
    msg.style.backgroundColor = '#081b31';

}

const draw = (userChoice,computer_choice) =>{
    msg.innerHTML = `Draw! ${userChoice} is same as ${computer_choice}`
    msg.style.backgroundColor = "#081b31";
    consecutiveDraws++;
        consecutiveLosses = 0;
        consecutiveWins = 0;
        if(consecutiveDraws > 1 ){
            msg.innerHTML += `,again!`
        }
}

const showWinner = (userwin,userChoice,computer_choice) => {
    if(userwin){
        userScore++;
        computerScore = 0;
        user.innerHTML = userScore;
        msg.innerHTML = `You win! Your${userChoice} beats ${computer_choice}`
        msg.style.backgroundColor = "green";
        consecutiveWins++;
        consecutiveLosses = 0;
        consecutiveDraws = 0;
        if(consecutiveWins > 1 ){
            msg.innerHTML += `, again!`
        }
    }else{
        computerScore++;
        userScore = 0;
        computer.innerHTML = computerScore;
        msg.innerHTML = `You Lose!  ${computer_choice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
        consecutiveLosses++;
        consecutiveWins = 0;
        consecutiveDraws = 0;
        if(consecutiveLosses > 1 ){
            msg.innerHTML += `,again!`
        }
    }
}


const playGame = (userChoice) =>{
    console.log(` user choice = ${userChoice}`)

    //generate computer choice
    const computer_choice
     = computerChoice();
     console.log(`computer choice =  ${computer_choice}`)

     if (userChoice === computer_choice) {
        draw(userChoice,computer_choice);
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin =  computer_choice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userwin = computer_choice === "scissors" ? false : true;
        } else {
            userwin = computer_choice === "rock" ? false : true;
        }
        showWinner(userwin,userChoice,computer_choice);
    }
     


}


choices.forEach((choice)=>{
    choice.addEventListener(("click"), () =>{
        
        const userChoice = choice.getAttribute("id")
       
       playGame(userChoice);
       
    })
})

reset.addEventListener('click',resetGame);
