/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
    const [hw, mw, sw] = timeWorked.split(':')
    const [ht, mt, st] = totalTime.split(':')
    const timeWorkedSeconds = hw * 3600 + mw * 60 + sw * 1
    const  totalTimeSeconds = ht * 3600 + mt * 60 + st * 1
    return `${Math.round((timeWorkedSeconds / totalTimeSeconds) * 100)}%`
}
  