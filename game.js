import HmacGenerator from "./hmacGenerator.js";
import GameRules from "./gameRules.js";
import TableGenerator from "./tableGenerator.js";

export default class RockPaperScissors {
  constructor(moves) {
    this.moves = moves;
    this.hmacGenerator = new HmacGenerator();
    this.gameRules = new GameRules(moves);
    this.tableGenerator = new TableGenerator(moves, this.gameRules); 
  }

  playGame(userMove) {
    if (!this.moves.includes(userMove)) {
      console.log('Invalid move! Please select a move from the available moves.');
      this.showMenu();
      return;
    }

    const computerMove = this.moves[Math.floor(Math.random() * this.moves.length)];
    const hmac = this.hmacGenerator.generateHmac(userMove);
    const result = this.gameRules.determineWinner(userMove, computerMove);
    const key = this.hmacGenerator.getKey();

    console.log(`Your move: ${userMove}`);
    console.log(`Computer move: ${computerMove}`);
    console.log(`HMAC: ${hmac}`);
    console.log(`HMAC key: ${key}`);

    if (result === 'win') {
      console.log('You win!');
    } else if (result === 'lose') {
      console.log('You lose!');
    } else {
      console.log('It\'s a draw!');
    }
  }

  showMenu() {
    console.log('Available moves:');
    this.moves.forEach((move, index) => {
      console.log(`${index + 1} - ${move}`);
    });
    console.log('0 - Exit');
    console.log('? - Help');
  }

  showTable() {
    const table = this.tableGenerator.generateTable();
    console.log('Game Rules:');
    this.moves.forEach((move, index) => {
      console.log(`${index + 1} - ${move}`);
    });

    console.log('Table:');
    console.log('    ' + this.moves.map((move, index) => `${index + 1}`).join('   '));
    for (let i = 0; i < table.length; i++) {
      console.log(`${i + 1} - ${this.moves[i]}  ${table[i].join('   ')}`);
    }
  }
}
