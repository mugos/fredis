//
import redis from 'redis'

// Start client
const client = redis.createClient({ host: 'redis' })

//
import { flushall } from './fredis'

const flushall = flushall(client)

export {
  flushall
}
