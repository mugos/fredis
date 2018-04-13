// TODO: Move to other file maybe
// redis-mock.js
// import redis from 'redis-mock'
import redis from 'redis'

//
export default () => redis.createClient({ host: 'lists-db' })

