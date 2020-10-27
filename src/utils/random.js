/**
 * returns a number between 1 and {len}
 * @param {number} len - upperlimit (inclusive)
 *
 * @returns {number}
 */
function random(len) {
  return Math.floor(Math.random() * len) + 1
}

export default random
