import {
  takeLeft,
  takeLeftWhile,
  takeRight,
  dropLeft,
  dropLeftWhile,
  dropRight,
  foldLeft,
  foldRight,
  reduce,
  reduceWithIndex,
  reduceRight,
  reduceRightWithIndex,
  makeBy,
  range,
  replicate,
  head,
  last
} from 'fp-ts/es6/Array'

const cond = (n: number) => n < 3

// Array - takeLeft / takeLeftWhile / takeRight
console.log(takeLeft(2)([1, 2, 3, 4, 5]))
console.log(takeRight(2)([1, 2, 3, 4, 5]))
console.log(takeLeftWhile(cond)([1, 2, 3, 2, 1]))

// Array - dropLeft / dropLeftWhile / dropRight
console.log(dropLeft(2)([1, 2, 3, 4, 5]))
console.log(dropRight(2)([1, 2, 3, 4, 5]))
console.log(dropLeftWhile(cond)([1, 2, 3, 2, 1]))

// Array - foldLeft / foldRight
const foldLeftFunc: (as: number[]) => number = foldLeft(
  () => 0,
  (_n, tail) => tail.length
)
console.log(foldLeftFunc([1, 2, 3, 4, 5]))
console.log(foldLeftFunc([]))

const foldRightFunc: (as: number[]) => number = foldRight(
  () => 0,
  (_init, n) => n
)
console.log(foldRightFunc([]))
console.log(foldRightFunc([1, 2, 3, 4, 5]))

// Array - reduce / reduceWithIndex
const reduceFunc = reduce(0, (acc, a: number) => acc + a)
const reduceWithIndexFunc = reduceWithIndex('', (i, acc, a) => `${acc}${i}:${a}`)
console.log(reduceFunc([1, 2, 3, 4, 5]))
console.log(reduceWithIndexFunc(['foo', 'bar', 'baz']))

// Array - reduceRight / reduceRightWithIndex
const reduceRightFunc = reduceRight(0, (a: number, acc) => acc + a)
const reduceRightWithIndexFunc = reduceRightWithIndex('', (i, a, acc) => `${acc}${i}${a}`)

console.log(reduceRightFunc([1, 2, 3, 4, 5]))
console.log(reduceRightWithIndexFunc(['foo', 'bar', 'baz']))

// Array - makeBy
const squareFunc = (n: number) => n * n

console.log(makeBy(5, squareFunc))

// Array - range
console.log(range(1, 5))

// Array - replicate
console.log(replicate(3, 'foobar'))

// Array - head / last
console.log(head([1, 2, 3]))
console.log(last([1, 2, 3]))
console.log(head([]))