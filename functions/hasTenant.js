//
import { sismember } from './../functional'

//
import { tenantsKey } from './../keys'

/**
 * Here will come a beautiful function description
 *
 * @func
 * @example
 *
 * import hasTenant from './has-tenant'
 * hasTenant(client)("tenant-name") // => true | false
 *
 */
export default client => async tenant => await sismember(tenantsKey, tenant)(client) === 1
