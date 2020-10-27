/**
 * This is an implementation of Fisher–Yates shuffle
 * @param {number[]} array
 *
 * @returns {number[]}
 */
function shuffle(array) {
  let a = array
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default shuffle
