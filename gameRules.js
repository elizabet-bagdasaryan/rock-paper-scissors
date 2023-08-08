export default class GameRules {
    constructor(moves) {
      this.moves = moves;
    }
  
    determineWinner(userMove, computerMove) {
      const half = this.moves.length / 2;
      const userIndex = this.moves.indexOf(userMove);
      const computerIndex = this.moves.indexOf(computerMove);
  
      if (userIndex === computerIndex) {
        return 'draw';
      } else if (
        (userIndex < computerIndex && computerIndex - userIndex <= half) ||
        (userIndex > computerIndex && userIndex - computerIndex > half)
      ) {
        return 'win';
      } else {
        return 'lose';
      }
    }
  }
  