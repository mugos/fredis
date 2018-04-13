// Redis stuff
import { composeRedis, set, sadd } from './../functional'

//
import { listsCountKey, tenantsKey } from './../keys'

// Dependent commands
import hasTenant from './hasTenant'

/**
 *
 */
export default client => async tenant => {
  // Check if the tenant already exists
  if ( await hasTenant(client)(tenant) ) { return false }

  //
  const res = await composeRedis(client)(
    set(listsCountKey(tenant), 0),
    sadd(tenantsKey, tenant)
  )

  // Check any error
  return res[1] === 1
}
