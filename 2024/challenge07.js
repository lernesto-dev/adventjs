/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    let result = [...packages]
    while (result.lastIndexOf('(') !== -1) {
      const init = result.lastIndexOf('(')
      const end = result.indexOf(')',init) - init
      const reversed = result.slice(init + 1, init + end).reverse()
      result.splice(init, end + 1, ...reversed) 
    }
    return result.join('')
}
  