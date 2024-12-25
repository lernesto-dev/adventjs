/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    const currentNumbers = new Set(nums)
    const maxNumber = Math.max(...nums)
    const allNumbers = new Set(Array.from({length: maxNumber}, (_, i) => i + 1))
    return Array.from(allNumbers.difference(currentNumbers))
}
    