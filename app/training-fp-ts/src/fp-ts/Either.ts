import {
  left,
  right,
  isLeft,
  isRight,
  map,
  mapLeft,
  flatten,
  getOrElse,
  orElse,
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

// Either - map / mapLeft
const length = (s: string) => s.length

const mapFunc = map(length)
const mapLeftFunc = mapLeft(length)
console.log(mapFunc(left('foo')))
console.log(mapLeftFunc(right('bar')))
console.log((right('foo')))
console.log((left('bar')))

// Either - flatten
console.log(flatten(right(right(1))))
console.log(flatten(right(left(1))))
console.log(flatten(left(right(1))))
console.log(flatten(left(left(1))))

// Either - getOrElse
const getOrElseFunc = getOrElse(() => 0)
console.log(getOrElseFunc(left(1)))
console.log(getOrElseFunc(right(1)))

// Either - orElse
const orElseFunc = orElse(() => right(1))
console.log(orElseFunc(left(0)))
console.log(orElseFunc(right(2)))