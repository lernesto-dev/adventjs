/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    // Code here
    const regex = /(.)\1/
    while(regex.test(s)){
      s = s.replace(regex, '')
    }
    return s;
}
  