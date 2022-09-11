//1st Function
// add FUNCTION getComputerChoice to randomly return values of either 'Rock', 'Paper','Scissors', 'Lizard', and 'Spock' CONSOLE FIRST
    // add FUNCTION with two PARAMETERS: 'playerSelection' and 'computerSelection'
        //PARAMETER should be case-insensitive rock Rock ROCK
    // RETURN a STRING to declare that you either win,lose, and draw & how
    // RETURN of value of function call not console.log() it

function getComputerChoice (choice) {
   choice = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
   let randomChoice = choice[Math.floor(Math.random() * choice.length)];
   console.log(randomChoice);
   
}
getComputerChoice();



//2nd Function 
//create FUNCTION game()
//create a FUNCTION playroom() inside FUNCTION game()
    //Plays 5 rounds FOR loops

        // your code here!

        
    //Keeps score with console.log()
    //Reports winner and loser at the end  


