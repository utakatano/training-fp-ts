import {
  none,
  some,
  map,
  flatten,
  getOrElse,
  fold,
  exists,
  tryCatch,
  isNone,
  isSome,
  fromNullable,
  fromPredicate
} from 'fp-ts/es6/Option'

const isEven = (n: number) => n % 2 === 0

// Option - none, some, fromNullable, and fromPredicate
console.log(none)
console.log(some(1))

console.log(fromNullable(undefined))
console.log(fromNullable(null))
console.log(fromNullable(1))

console.log(fromPredicate(isEven)(1))
console.log(fromPredicate(isEven)(2))

// Option - isNone / isSome
console.log(isSome(some(1)))
console.log(isSome(none))
console.log(isNone(some(1)))
console.log(isNone(none))

// Option - map
const mapFunc = map((a: number) => a * 2)
console.log(mapFunc(some(5)))
console.log(mapFunc(none))

// Option - flatten
console.log(flatten(some(some(1))))
console.log(flatten(some(none)))

// Option - getOrElse
const getOrElseFunc = getOrElse(() => 0)
console.log(getOrElseFunc(none))
console.log(getOrElseFunc(some(1)))

// Option - fold
const foldFunc = fold(() => 'None', (a: number) => `Some(${a})`)
console.log(foldFunc(none))
console.log(foldFunc(some(1)))

// Option - exists
const existsFunc = exists((a: number) => a === 2)
console.log(existsFunc(none))
console.log(existsFunc(some(1)))
console.log(existsFunc(some(2)))

// Option - tryCatch
const tryCatchX = tryCatch(() => JSON.parse('{ "text": "test" }'))
console.log(tryCatchX)
const tryCatchY = tryCatch(() => { throw 0 })
console.log(tryCatchY)