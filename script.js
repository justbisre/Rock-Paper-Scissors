
    


    function getComputerChoice(){

    let randomnumber = Math.floor(Math.random() * 3) + 1;
    

    if (randomnumber = 1 ){
        return "rock";
    }

    else if (randomnumber = 2 ) {
        return "paper" ;
    }

    else {
        return "scissors";
    } 

    console.log(getComputerChoice);
}

function getHumanChoice(){
    let userchoice = prompt("please type Rock, Paper, Scissors");

    let choice = userchoice.toUpperCase();

    return choice;
}
console.log("human choice:", getHumanChoice());


function playGame() {

     let humanscore = 0;
     let computerscore = 0;

      function playRound(humanchoice , computerchoice) {
    let humanselection = (humanchoice.toUpperCase());
    let computerselection = computerchoice;

    if (humanselection === computerselection) {
        
         console.log("its a tie" + humanselection);

   } else if (
              (humanselection === "rocck" && computerselection === "scissors")
              (humanselection === "paper" && computerselection === "rock")
              (humanselection === "scissors" && computerselection === "paper") 
            
        ){
            console.log("you win !" + humanselection + "beats" + computerselection);
            humanscore = humanscore + 1 ;
        }
        else {
            console.log("you lose" + computerselection + "beats" + humanselection);
            computerscore = computerscore + 1 ;
        }
      
    }
   

         for (let i = 1;  i <= 5; i++) {
      
         console.log("---ROUND " + i + "---");

        const human = getHumanChoice();
        const computer = getComputerChoice();

        playRound(human , computer);
    
         }

   console.log("===========");
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
  playGame();
 }
