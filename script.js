
let humanScore=0;
let computerScore=0;
function game_over(){
if (computerScore==5){
    message.textContent=`Game Over, Computer Wins`;
    finalscore.textContent=`${humanScore} - ${computerScore}`;
    computerScore=0;
    humanScore=0;
    yourscore.textContent=``;
    cpuscore.textContent= ``;
    updateScore();        
}
else if(humanScore==5){
    message.textContent=`Game Over, You Win`;
    finalscore.textContent=`${humanScore} - ${computerScore}`;
    humanScore=0;
    computerScore=0;
    yourscore.textContent=``;
    cpuscore.textContent= ``;
    updateScore();    
}}

/*ComputerChoice*/
function updateScore(){
    yourscore.textContent=`Your score:  ${humanScore}`;
    cpuscore.textContent= `Computer's score: ${computerScore}`;
}

let computer_choice;
let ComputerChoice;
function getComputerChoice(){
    computer_choice=Math.random();
    if (computer_choice >=0 && computer_choice<1/3){
        return "Rock";
    }
    else if (computer_choice >=1/3 && computer_choice<2/3){
        return "Paper";
    }
    else {return "Scissors"}
}

let humanChoice;
const div = document.querySelector('#container');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const yourscore = document.createElement("p");
const cpuscore = document.createElement("p");
const message = document.createElement("p");
const vs = document.createElement("p");
const finalscore = document.createElement("p");

yourscore.textContent=`Your score:  ${humanScore}`;
cpuscore.textContent= `Compute's score: ${computerScore}`;
message.textContent= ` `;
finalscore.textContent=` `;

div.append(yourscore,cpuscore,vs,message,finalscore);


rock.addEventListener("click",()=>{
    message.textContent= ` `;
    humanChoice="Rock";
    playRound(humanChoice,ComputerChoice);
    updateScore();
    game_over(computerScore,humanScore);
})
paper.addEventListener("click",()=>{
    message.textContent= ` `;
    humanChoice="Paper";
    playRound(humanChoice,ComputerChoice);
    updateScore();
    game_over(computerScore,humanScore);
})
scissors.addEventListener("click",()=>{
    message.textContent= ` `;
    humanChoice="Scissors";
    playRound(humanChoice,ComputerChoice);
    updateScore();
    game_over(computerScore,humanScore);
})
        

function playRound(humanChoice,ComputerChoice){
    finalscore.textContent=``;
    ComputerChoice=getComputerChoice();
    vs.textContent=`You: ${humanChoice} CPU: ${ComputerChoice}`;
    if (humanChoice=="Rock"){
        if (ComputerChoice=="Rock"){
            message.textContent=`Tie!`;
        }
        else if (ComputerChoice=="Scissors"){
            message.textContent=`You Win! Rock beats Scissors`;
            humanScore ++;
        }
         else if (ComputerChoice=="Paper"){ 
            message.textContent=`You Lose! Paper beats Rock`;
            computerScore ++;}
    }
    if (humanChoice=="Paper"){
        if (ComputerChoice=="Paper"){
            message.textContent=`Tie!`;
        }
        else if (ComputerChoice=="Scissors"){
            message.textContent=`You Lose! Scissors beats Paper`;
            computerScore ++;
        }
        else if (ComputerChoice=="Rock"){
            message.textContent=`You Win! Paper beats Rock`;
            humanScore ++;
        }
    }
    if (humanChoice=="Scissors"){
        if (ComputerChoice=="Scissors"){
            message.textContent=`Tie!`;
        }
        else if (ComputerChoice=="Rock"){
            message.textContent=`You Lose! Rock beats Scissors`;
            computerScore ++;
        }
        else if (ComputerChoice=="Paper"){
            message.textContent=`You Win! Scissors beats Paper`;
            humanScore ++;}
    }
}

function playGame(){
    
        console.log("Round: " ,1)
        console.log("Your Choice: " ,humanChoice);
        console.log("Computer's Choice: " ,ComputerChoice);
        playRound(humanChoice,ComputerChoice)
    
        console.log("Your Total Score: ", humanScore);
        console.log("Computer Total Score: ",computerScore);

        console.log("Round: " ,2)
        ComputerChoice=getComputerChoice()
        console.log("Your Choice: " ,humanChoice);
        console.log("Computer's Choice: " ,ComputerChoice);
        playRound(humanChoice,ComputerChoice)
    
        console.log("Your Total Score: ", humanScore);
        console.log("Computer Total Score: ",computerScore);

    if (computerScore>humanScore){
        console.log("Computer Wins!")
    }
    else if(humanScore>computerScore){
        console.log("You Win!")
    }
    else {console.log("Tie!")}
}
