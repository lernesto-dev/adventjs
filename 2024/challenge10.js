/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    const values = {}
    const operations = {
      INC: 1,
      DEC: -1,
    }
    let position = 0
    while(instructions[position]){
      const [instruction, x, y] = instructions[position].split(" ")
      position++
      if(instruction === 'MOV'){
        values[y] = values[x] || parseInt(x)
        continue
      }
      const valueX = values[x] || 0
      if(operations[instruction]){
        values[x] = valueX + operations[instruction]
        continue
      }
      if(valueX === 0){
        position = parseInt(y)
      }
    }
    return values.A
}