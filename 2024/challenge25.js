/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    const values = {'+': 1,'-': -1,'>': 0,'[': 0,']': 0,'{': 0,'}': 0}
    const oppositesStart = {'[': ']','{': '}'}
    const oppositesEnd = {']': '[','}': '{'}
    const strOperators = '[]{}'
    const operators = {}
    let currentPosition = 0
    let value = 0
    while (currentPosition < code.length) {
      value += values[code[currentPosition]]
      if(strOperators.includes(code[currentPosition])) {
        operators[code[currentPosition]] = currentPosition
        if('[{'.includes(code[currentPosition]) && value === 0) {
          currentPosition = code.indexOf(oppositesStart[code[currentPosition]], currentPosition)
        }else if(code[currentPosition] === ']' && value !== 0) {
          currentPosition = operators[oppositesEnd[code[currentPosition]]]
        }
      }
      currentPosition++
    }
    return value
  }
  