import random from './random'

function randomArray(len, max = 21) {
  let a = []
  for (let i = 0; a.length < len; ++i) {
    const r = random(max)
    if (a.indexOf(r) === -1) a.push(r)
  }

  return a
}

export default randomArray
