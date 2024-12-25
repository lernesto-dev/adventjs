/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const result = [];
    function getCombination(subarray, inicio) {
      if (subarray.length !== 0) result.push(subarray); 
      for (let i = inicio; i < gifts.length; i++) {
        getCombination([...subarray, gifts[i]], i + 1);
      }
    }
  
    getCombination([], 0); 
    return result.sort((a, b) => a.length - b.length);
}
      