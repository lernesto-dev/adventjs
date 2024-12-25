function createXmasTree(height, ornament) {
    /* Code here */
    let XmasTree = ''
    let sheets = -1
    for (let i = 1; i <= height; i++) {
      sheets += 2
      XmasTree = `${XmasTree}${'_'.repeat(height - i)}` 
      XmasTree = `${XmasTree}${ornament.repeat(sheets)}` 
      XmasTree = `${XmasTree}${'_'.repeat(height - i)}\n`
    }
    const land = '_'.repeat(height - 1)
    XmasTree = `${XmasTree}${land}#${land}\n`
    XmasTree = `${XmasTree}${land}#${land}`
    return XmasTree
}