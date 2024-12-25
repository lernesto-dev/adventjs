/** @param {string[]} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    const movesValuesX = {
      'R': 1,
      'L': -1,
      'U': 0,
      'D': 0,
    }
    const movesValuesY = {
      'R': 0,
      'L': 0,
      'U': 1,
      'D': -1,
    }
    const contrarios = {
      'R': 'L',
      'L': 'R',
      'U': 'D',
      'D': 'U',
    }
    const movesPass = {}
    let x = 0;
    let y = 0;
    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      switch(move) {
        case '*':
          x += movesValuesX[moves[i+1]]*2;
          y += movesValuesY[moves[i+1]]*2;
          movesPass[moves[i+1]] = true;
          i++
          break;
        case '?':
          if (!movesPass[moves[i+1]]) {
            x += movesValuesX[moves[i+1]];
            y += movesValuesY[moves[i+1]];
            movesPass[moves[i+1]] = true;
          }
          i++
          break;
        case '!':
          x += movesValuesX[moves[i+1]]*-1;
          y += movesValuesY[moves[i+1]]*-1;
          movesPass[contrarios[moves[i+1]]] = true;
          i++
          break;
        default:
          x += movesValuesX[move];
          y += movesValuesY[move];
          movesPass[move] = true;
          break;
      }
    }
    return x+y===0 ? true : [x,y]
}