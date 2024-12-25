/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let result = ''
    let player = ''
    indices.forEach((position, index) =>  {
      const left = position < 0 ? length +position : position
      const right = length - left - 1
      player = position === 0 ? '~' : 'r'
      result += ' '.repeat(indices.length - index - 1)
      result += '~'.repeat(left)
      result += player
      result += '~'.repeat(right)
      result += ` /${1 + index}\n`
    })
    return result.slice(0, -1)
}