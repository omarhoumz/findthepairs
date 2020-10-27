/**
 * returns a range of numbers
 * @param {number} size the size of the range
 * @param {number} startAt starting number of the range
 *
 * @returns {number[]}
 */
function range(size, startAt = 0) {
  return Array.from(Array(size).keys(), (i) => i + startAt)
}

export default range
