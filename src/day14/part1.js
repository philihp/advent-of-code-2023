import { reverse, sortBy, identity, join, split, tap, transpose, reduce, pipe, map, addIndex } from 'ramda'

import testInput from './test'
import realInput from './real'

console.log(
  pipe(
    transpose,
    map((chars) =>
      pipe(
        join(''),
        split('#'),
        map((s) => join('', reverse(sortBy(identity, s)))),
        join('#')
      )(chars)
    ),
    transpose,
    map(join('')),
    addIndex(map)((s, i) => [s, s.split('O').length - 1, input.length - i]),
    map(([s, a, b]) => [s, a, b, a * b]),
    reduce(([list, total], [s, count, weight, load]) => [[...list, s, load, total + load], total + load], [[], 0])
  )(realInput)
)
