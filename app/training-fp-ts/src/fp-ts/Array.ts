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
  last,
  tail,
  lookup,
  isEmpty,
  isNonEmpty,
  rotate,
  reverse,
  union,
  uniq,
  intersection,
  difference,
  sort,
  sortBy
} from 'fp-ts/es6/Array'

import {
  Eq,
  Ord as OrdNumber
} from 'fp-ts/es6/number'

import {
  Ord as OrdString
} from 'fp-ts/es6/string'

import {
  Contravariant,
} from 'fp-ts/es6/Ord'

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

// Array - tail
console.log(tail([1, 2, 3]))
console.log(tail([1]))
console.log(tail([]))

// Array - lookup
console.log(lookup(1, [1, 2, 3]))
console.log(lookup(4, [1, 2, 3]))

// Array - isEmpty / isNonEmpty
const a = [1, 2, 3]
console.log(isEmpty([]))
console.log(isEmpty(a))
console.log(isNonEmpty([]))
console.log(isNonEmpty(a))

// if (isNonEmpty(a)) {
//   a
// }

// Array - rotate
console.log(rotate(2)([1, 2, 3, 4, 5]))
console.log(rotate(-2)([1, 2, 3, 4, 5]))

// Array - reverse
console.log(reverse([1, 2, 3]))

// Array - union
console.log(union(Eq)([1, 2], [2, 3]))

// Array - uniq
console.log(uniq(Eq)([1, 2, 2, 3]))

// Array - intersection
console.log(intersection(Eq)([1, 2, 2], [2, 3]))
console.log(intersection(Eq)([1, 2], [2, 2, 3]))

// Array - difference
console.log(difference(Eq)([1, 2], [2, 3]))
console.log(difference(Eq)([1, 1, 2], [2, 3]))
console.log(difference(Eq)([1, 2], [1, 2, 3]))

// Array - sort / sortBy
console.log(sort(OrdNumber)([1, 5, 2, 4, 3]))

interface User {
  id: number
  kind: string
  name: string
}

const sortCond = ([
  Contravariant.contramap(OrdString, (user: User) => user.kind),
  Contravariant.contramap(OrdNumber, (user: User) => user.id)
])

const users: User[] = [
  {id: 2, kind: 'A', name: 'tanaka'},
  {id: 5, kind: 'A', name: 'suzuki'},
  {id: 4, kind: 'B', name: 'yamada'},
  {id: 3, kind: 'B', name: 'sakurai'},
  {id: 1, kind: 'A', name: 'sato'}
]

console.log(sortBy(sortCond)(users))