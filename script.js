  let playerScore = 0;
  let computerScore = 0;
   const roundResult = document.querySelector("#round-result");
   const scoreDisplay = document.querySelector("#score");
   const rockBtn = document.querySelector("#rock");
   const paperBtn = document.querySelector("#paper");
   const scissorsBtn = document.querySelector("#scissor");

   rockBtn.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
   });

   paperBtn.addEventListener("click", function(){
     playRound("paper", getComputerChoice());
   })

   scissorsBtn.addEventListener("click" , function(){
    playRound("scissor", getComputerChoice());
   });




    function getComputerChoice(){

   
   const choice = ["rock", "paper", "scissor"];
   const randomIndex = Math.floor(Math.random() * choice.length);
   return choice[randomIndex];

    /*let randomnumber = Math.floor(Math.random() * 3) + 1;
    

    if (randomnumber = 1 ){
        return "rock";
    }

    else if (randomnumber = 2 ) {
        return "paper" ;
    }

    else {
        return "scissors";
    } */

    
    }

/*function getHumanChoice(){
    let userchoice = prompt("please type Rock, Paper, Scissors");

    let choice = userchoice.toUpperCase();

    return choice;
}

/*

function playGame() {

     let humanscore = 0;
     let computerscore = 0;*/

      function playRound(playerselection , computerselection) {
   /* let humanselection = (humanchoice.toUpperCase());*/
   /* let computerselection = computerchoice;*/

    if (playerselection === computerselection) {
        
         /*console.log("its a tie" + humanselection);*/

         roundResult.textContent = `It's a tie! ${playerselection}.`;
   } else if (
              (playerselection=== "rock" && computerselection === "scissors") || 
              (playerselection=== "paper" && computerselection === "rock") ||
              (playerselection=== "scissor" && computerselection === "paper") 
            
        ){
            /*console.log("you win !" + humanselection + "beats" + computerselection);
            humanscore = humanscore + 1 ;*/
            playerScore++;
            roundResult.textContent = `You win! ${playerselection} beats ${computerselection}`;
        }

        else {
            /*console.log("you lose" + computerselection + "beats" + humanselection);
            computerscore = computerscore + 1 ;*/
            computerScore++;
            roundResult.textContent = `you lose! ${computerselection} beats ${playerSelection}`;
        }
        scoreDisplay.textContent = `player: ${playerScore} | Computer: ${computerScore}`;
    }
   

        
    
    
    
    
    
    
    
    
    
    /*for (let i = 1;  i <= 5; i++) {
      
         console.log("---ROUND " + i + "---");

        const human = getHumanChoice();
        const computer = getComputerChoice();

        playRound(human , computer);
    
         } */

  /* console.log("===========");
   console.log("FINAL SCORE -> YOU: " + humanscore + "computer:" + computerscore);
   if(humanscore > computerscore) {
    console.log("CONGRADULATIONS! YOU WON THE ENTIRE GAME!");
   }
   else if(computerscore> humanscore){
    console.log("GAME OVER! The Computer Won The Entire Game!");
   }
   else (humanscore === computerscore) {
console.log("It is a Grand Tie Game!");

   }
  playGame();*/
 
