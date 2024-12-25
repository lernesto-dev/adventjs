/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    const movsX = {
      'L': -1,
      'R': 1,
      'U': 0,
      'D': 0,
    }
    const movsY = {
      'U': -1,
      'D': 1,
      'L': 0,
      'R': 0,
    }
    const results = {
      '*': 'eat',
      'o': 'crash',
      '·': 'none',
      undefined: 'crash'
    }
    let row = board.findIndex(row => row.includes('@'))
    let col = board[row].indexOf('@')
    row = row + movsY[mov]
    col = col + movsX[mov]
    const key = board[row]?.at(col)
    
    return results[key] 
}