/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    const result = {
      missing: {},
      extra: {}
    }
    const receivedGrouped = Object.groupBy(received, (gift) => gift)
    const expectedGrouped = Object.groupBy(expected, (gift) => gift)
    Object.keys(receivedGrouped).forEach((gift) => {
      result.extra[gift] = receivedGrouped[gift].length - (expectedGrouped[gift] || []).length
      if(result.extra[gift] <= 0) {
        delete result.extra[gift]
      }
    })
    Object.keys(expectedGrouped).forEach((gift) => {
      result.missing[gift] = expectedGrouped[gift].length - (receivedGrouped[gift] || []).length
      if(result.missing[gift] <= 0) {
        delete result.missing[gift]
      }
    })
    return result
}
    