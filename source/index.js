//
import redis from 'redis'

// Start client
const client = redis.createClient({ host: 'redis' })

//
import { flushall as createFlushAll } from './fredis'

const flushall = createFlushAll(client)

export {
  flushall
}
