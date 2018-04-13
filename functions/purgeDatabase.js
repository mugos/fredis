import { cond, T, equals } from 'ramda'
import { rawFlushall } from './../functional'

const err = new TypeError('Incorrect Environment')

export default client => env => cond([
  [equals("test"), env => rawFlushall()],
  [T, () => { throw err }]
])(env)(client)
