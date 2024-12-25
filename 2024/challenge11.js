/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    const firstIndex = filename.indexOf('_')
    const lastIndex = filename.lastIndexOf('.')
    return filename.slice(firstIndex + 1, lastIndex)
}