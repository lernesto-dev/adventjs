function createFrame(names) {
    let maxLength = [...names].sort((a, b) => b.length - a.length)[0].length
    const repeatString = '*'.repeat(maxLength + 4)
    const spaces = ' '.repeat(maxLength + 4)
    let frame = repeatString + '\n'
    let spaceNumber = 0
    names.forEach(name => {
      spaceNumber = maxLength - name.length 
      frame += '* ' + name + spaces.slice(0, spaceNumber)
      frame += ' *' + '\n'
    })
    frame += repeatString
    return frame
  }