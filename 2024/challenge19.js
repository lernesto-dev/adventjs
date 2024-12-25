/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    let result = ''
    const boxRepresentations = [
      {
        value: 10,
        representation: [" _________ ", "|         |", "|_________|"],
      },
      {
        value: 5,
        representation: [" _____ ", "|     |", "|_____|"],
      },
      {
        value: 2,
        representation: [" ___ ", "|___|"],
      },
      {
        value: 1,
        representation: [" _ ", "|_|"],
      }
      
    ]
    let boxes = []
    while (weight > 0) {
      const currentBox = boxRepresentations.find(box => box.value <= weight)
      boxes.push(currentBox)
      weight -= currentBox.value
    }
    boxes = boxes.reverse()
    let lastLength = 0
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].representation[0] = boxes[i].representation[0].trimEnd().slice(lastLength)
       boxes[i].representation[0] += (i === 0 ? ' ' : '')
      result += boxes[i].representation.join('\n')
      lastLength = boxes[i].representation.at(-1).length
    }
    return result
}