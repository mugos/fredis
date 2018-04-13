// Redis stuff
import { composeRedis, deleteNamespace, srem } from './../functional'

// Dependent commands
import hasTenant from './hasTenant'

//
import { listCountKey, tenantsKey } from './../keys'

/**
 *
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async tenant => {
  //
  if ( !await hasTenant(client)(tenant) ) { return }

  // Remove from the main SET
  await srem(tenantsKey, tenant)(client)

  // Remove all the namespace
  return deleteNamespace(client)(tenant)
}
