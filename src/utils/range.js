/**
 * returns a range of numbers
 * @param {number} size the size of the range
 * @param {number} startAt starting number of the range
 */
export function range(size, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt)
}
