export default class TableGenerator {
    constructor(moves, gameRules) {
      this.moves = moves;
      this.gameRules = gameRules;
    }
  
    generateTable() {
      const tableSize = this.moves.length;
      const table = new Array(tableSize);
  
      for (let i = 0; i < tableSize; i++) {
        table[i] = new Array(tableSize);
      }
  
      for (let i = 0; i < tableSize; i++) {
        for (let j = 0; j < tableSize; j++) {
          const result = this.gameRules.determineWinner(this.moves[i], this.moves[j]);
          if (result === 'win') {
            table[i][j] = 'Win';
          } else if (result === 'lose') {
            table[i][j] = 'Lose';
          } else {
            table[i][j] = 'Draw';
          }
        }
      }
  
      return table;
    }
  }
  