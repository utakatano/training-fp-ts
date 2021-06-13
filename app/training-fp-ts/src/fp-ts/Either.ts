import {
  left,
  right,
  isLeft,
  isRight,
  fromNullable,
  fromPredicate
} from 'fp-ts/es6/Either'

const isEven = (n: number) => n % 2 === 0

console.info('// Either')

// Either - left, right, fromNullable, and fromPredicate
console.log(left(1))
console.log(right(1))
console.log(fromNullable('default')(null))
console.log(fromNullable('default')(undefined))
console.log(fromNullable('default')('foobar'))
console.log(fromPredicate(isEven, n => `is Odd: ${n}`)(1))
console.log(fromPredicate(isEven, n => `is Odd: ${n}`)(2))

// Either - isLeft / isRight
console.log(isLeft(right(1)))
console.log(isLeft(left(1)))
console.log(isRight(right(1)))
console.log(isRight(left(1)))