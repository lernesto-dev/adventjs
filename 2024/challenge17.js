/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    const numberGrid = []
    const values = {
      true: 1,
      false: 0,
      undefined: 0
    }
    let rowCurrent = []
    grid.forEach((row, y) => {
      numberGrid[y] = []
      row.forEach((_cell, x) => {
        numberGrid[y][x] = 0
        rowCurrent = grid[y-1] ?? []
        numberGrid[y][x] += values[`${rowCurrent[x-1]}`]
        numberGrid[y][x] += values[`${rowCurrent[x]}`]
        numberGrid[y][x] += values[`${rowCurrent[x+1]}`]
        rowCurrent = grid[y]
        numberGrid[y][x] += values[`${rowCurrent[x-1]}`]
        numberGrid[y][x] += values[`${rowCurrent[x+1]}`]
        rowCurrent = grid[y+1] ?? []
        numberGrid[y][x] += values[`${rowCurrent[x-1]}`]
        numberGrid[y][x] += values[`${rowCurrent[x]}`]
        numberGrid[y][x] += values[`${rowCurrent[x+1]}`]
      })
    })
    return numberGrid
}
    