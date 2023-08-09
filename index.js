import RockPaperScissors from "./game.js";
import { createInterface } from "readline";

const moves = process.argv.slice(2);

if (moves.length < 3 || moves.length % 2 === 0 || new Set(moves).size !== moves.length) {
  console.error('Invalid input! Please provide an odd number >= 3 of non-repeating strings.');
  console.error('Example: node game.js rock paper scissors');
  process.exit(1);
}

const game = new RockPaperScissors(moves);
game.showTable();

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});


function askUserMove() {
  game.showMenu();  
  readline.question('Enter your move: ', (userMove) => {
    if (userMove === '0') {
      console.log('Exiting the game.');
      readline.close();
      process.exit(0);
    } else if (userMove === '?') {
      console.log(game.showTable()); 
    } else {
      game.playGame(moves[parseInt(userMove) - 1]);
    }
    askUserMove();
  });
}

  
  
  

askUserMove();
