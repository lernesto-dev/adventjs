/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    let result = '|'
    let lines = '--------------------------------------------'
    const headers = Object.keys(data[0])
    const maxValues = headers.map(header => {
      return data.map(row => `${row[header]}`.length).
        reduce((a, b) => Math.max(a, b, header.length))
    })
    let horizontalLine = '+'
    headers.forEach((header, index)=>{
      horizontalLine += lines.slice(0,maxValues[index] + 2) + '+'
      result += ' ' + header.at(0).toUpperCase() + header.slice(1) 
      result += ' '.repeat(maxValues[index] - header.length) + ' |'
    })
    result += '\n' + horizontalLine + '\n'
    data.forEach(row=>{
      result += '|'
      Object.values(row).forEach((value, index)=>{
        result += ` ${value}`
        result += ' '.repeat(maxValues[index] - `${value}`.length) + ' |'
      })
      result += '\n'
    })
    result = `${horizontalLine}\n${result}${horizontalLine}`
    return result
}
  