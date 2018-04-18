//
import redis from 'redis'

// Start client
const client = redis.createClient({ host: 'redis' })

//
import { composeRedis as createComposeRedis } from './fredis'
import { del as createDel } from './fredis'
import { hgetall as createHgetall } from './fredis'
import { srem as createSrem } from './fredis'
import { sismember as createSismember } from './fredis'
import { smembers as createSmembers } from './fredis'
import { sadd as createSadd } from './fredis'
import { set as createSet } from './fredis'
import { scan as createScan } from './fredis'
import { scanPattern as createScanPattern } from './fredis'
import { deleteNamespace as createDeleteNamespace } from './fredis'
import { hmset as createHmset } from './fredis'
import { incr as createIncr } from './fredis'
import { exists as createExists } from './fredis'
import { flushall as createFlushall } from './fredis'
import { rawFlushall as createRawFlushall } from './fredis'

const composeRedis = createComposeRedis(client)
const del = createDel(client)
const hgetall = createHgetall(client)
const srem = createSrem(client)
const sismember = createSismember(client)
const smembers = createSmembers(client)
const sadd = createSadd(client)
const set = createSet(client)
const scan = createScan(client)
const scanPattern = createScanPattern(client)
const deleteNamespace = createDeleteNamespace(client)
const hmset = createHmset(client)
const incr = createIncr(client)
const exists = createExists(client)
const flushall = createFlushall(client)
const rawFlushall = createRawFlushall(client)

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