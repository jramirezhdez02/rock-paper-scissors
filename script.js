let humanScore=0;
let computerScore=0;

/*ComputerChoice*/
let computer_choice;
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
ComputerChoice=getComputerChoice();
        

/*HumanChoice*/
let humanChoice;
function getHumanChoice(){
    humanChoice=prompt("Rock, Paper or Scissors?")
    humanChoice=humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1,humanChoice.length).toLowerCase();
    if (humanChoice=="Paper"||humanChoice=="Rock"||humanChoice=="Scissors"){
        return humanChoice;}
    else {
        console.log("Please introduce a valid option")
        getHumanChoice()
    }
    humanChoice=getHumanChoice();
}


function playRound(humanChoice,ComputerChoice){
    if (humanChoice=="Rock"){
        if (ComputerChoice=="Rock"){
            console.log("Tie!")
        }
        else if (ComputerChoice=="Scissors"){
            console.log("You Win! Rock beats Scissors")
            humanScore ++;
        }
         else if (ComputerChoice=="Paper"){ console.log("You Lose! Paper beats Rock")
        computerScore ++;}
    }
    if (humanChoice=="Paper"){
        if (ComputerChoice=="Paper"){
            console.log("Tie!")
        }
        else if (ComputerChoice=="Scissors"){
            console.log("You Lose! Scissors beats Paper")
            computerScore ++;
        }
        else if (ComputerChoice=="Rock"){console.log("You Win! Paper beats Rock")
            humanScore ++;
        }
    }
    if (humanChoice=="Scissors"){
        if (ComputerChoice=="Scissors"){
            console.log("Tie!")
        }
        else if (ComputerChoice=="Rock"){
            console.log("You Lose! Rock beats Scissors")
            computerScore ++;
        }
        else if (ComputerChoice=="Paper"){console.log("You Win! Scissors beats Paper")
            humanScore ++;}
    }
    /*console.log("Your Score: ", humanScore);
    console.log("Computer Score: ",computerScore);*/
}

function playGame(){
    
        console.log("Round: " ,1)
        console.log("Your Choice: " ,getHumanChoice());
        console.log("Computer's Choice: " ,ComputerChoice);
        playRound(humanChoice,ComputerChoice)
    
        console.log("Your Total Score: ", humanScore);
        console.log("Computer Total Score: ",computerScore);

        console.log("Round: " ,2)
        ComputerChoice=getComputerChoice()
        console.log("Your Choice: " ,getHumanChoice());
        console.log("Computer's Choice: " ,ComputerChoice);
        playRound(humanChoice,ComputerChoice)
    
        console.log("Your Total Score: ", humanScore);
        console.log("Computer Total Score: ",computerScore);

        console.log("Round: " ,3)
        ComputerChoice=getComputerChoice()
        console.log("Your Choice: " ,getHumanChoice());
        console.log("Computer's Choice: " ,ComputerChoice);
        playRound(humanChoice,ComputerChoice)
    
        console.log("Your Total Score: ", humanScore);
        console.log("Computer Total Score: ",computerScore);

        console.log("Round: " ,4)
        ComputerChoice=getComputerChoice()
        console.log("Your Choice: " ,getHumanChoice());
        console.log("Computer's Choice: " ,ComputerChoice);
        playRound(humanChoice,ComputerChoice)
    
        console.log("Your Total Score: ", humanScore);
        console.log("Computer Total Score: ",computerScore);

        console.log("Round: " ,5)
        ComputerChoice=getComputerChoice()
        console.log("Your Choice: " ,getHumanChoice());
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

playGame();
if (computerScore==humanScore){
    playGame()
}
/*console.log("Your Choice: " ,getHumanChoice());
console.log("Computer's Choice: " ,getComputerChoice());*/