/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    const prices = {
      '*':1,
      'o':5,
      '^':10,
      '#':50,
      '@':100,
      undefined: 0
    }
    if(!/^[*o#@^]+$/.test(ornaments)) return undefined
    let total = 0
    let current = 0
    Array.from(ornaments,(char, index)=>{
      current = prices[char]
      if(prices[char] < prices[ornaments.at(index+1)]){
        total -= current
      }else{
        total += current
      }
    })
    return total
}