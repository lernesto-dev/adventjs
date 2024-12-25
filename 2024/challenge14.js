/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
    reindeer.sort()
    stables.sort()
    let totalMoves = 0
    reindeer.forEach(($reindeer, i) => {
      totalMoves += Math.abs($reindeer - stables[i])
    })
    return totalMoves
}
  