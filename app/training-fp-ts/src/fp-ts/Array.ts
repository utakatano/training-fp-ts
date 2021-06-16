import {
  takeLeft,
  takeLeftWhile,
  takeRight
} from 'fp-ts/es6/Array'

// Array - takeLeft / takeLeftWhile / takeRight
const cond = (n: number) => n < 3
console.log(takeLeft(2)([1, 2, 3, 4, 5]))
console.log(takeRight(2)([1, 2, 3, 4, 5]))
console.log(takeLeftWhile(cond)([1, 2, 3, 2, 1]))