/** @param {string[]} box
 * @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const regex = /^#.*\*.*#$/
  for (let i = 0; i < box.length; i++) {
    if (box[i].match(regex)) {
      return i !== 0 && i !== box.length - 1
    }
  }
  return false
}