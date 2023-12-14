import { reverse, sortBy, identity, join, split, transpose, sum, pipe, map, addIndex } from 'ramda'

// import input from './test.js'
import input from './real.js'

pipe(
  transpose,
  map(
    pipe(
      join(''),
      split('#'),
      map((s) => join('')(reverse(sortBy(identity, s)))),
      join('#')
    )
  ),
  transpose,
  map(join('')),
  addIndex(map)((s, i) => [s.split('O').length - 1, input.length - i]),
  map(([a, b]) => a * b),
  sum,
  console.log
)(input)
