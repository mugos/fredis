import { curry, map, isNil, cond, equals, T, concat } from 'ramda'

const defRedis = name => (...args) => ctx => {
  return new Promise((resolve, reject) => {
    const cb = curry((resolve, reject, e, r) => isNil(e) ? resolve(r) : reject(e))
    ctx[name](...args.concat(cb(resolve, reject)))
  })
}

const composeRedis = client => async (...args) => {
  const r = ctx => fn => {
    return fn(ctx)
  }
  const context = client.multi()
  map(r(context), args)

  return new Promise((resolve, reject) => {
    const cb = curry((resolve, reject, e, r) => isNil(e) ? resolve(r) : reject(e))
    context.exec(cb(resolve, reject))
  })
}

const del = defRedis('del')
const srem = defRedis('srem')
const sismember = defRedis('sismember')
const smembers = defRedis('smembers')
const sadd = defRedis('sadd')
const set = defRedis('set')
const hgetall = defRedis('hgetall')
const hmset = defRedis('hmset')
const scan = defRedis('scan')
const incr = defRedis('incr')
const exists = defRedis('exists')

//
const scanPattern = client => async (pattern, pointer, keys = []) => {
  // End of the pointer
  if (pointer === "0") { return keys }

  //
  const res = await scan(pointer || "0", 'MATCH', pattern)(client)

  //
  return await scanPattern(client)(pattern, res[0], concat(res[1], keys))
}

//
const deleteNamespace = client => async (ns) => {
  // Get all the keys
  const keys = await scanPattern(client)(`${ns}:*`)

  // Return the deletion execution
  return del(...keys)(client)
}

// TODO: export only method no logic
const flushall = client => env => cond([
  [equals("dev"), env => defRedis('flushall')()],
  [T, () => { throw new Error("Can't do dat here") }]
])(env)(client)

const rawFlushall = defRedis('flushall')

export {
  composeRedis,
  del,
  hgetall,
  srem,
  sismember,
  smembers,
  sadd,
  set,
  scan,
  scanPattern,
  deleteNamespace,
  hmset,
  incr,
  exists,
  flushall,
  rawFlushall
}

