// Redis stuff
import { composeRedis, sadd } from './../functional'

//
import { listOwnersKey, userListsKey } from './../keys'

//
import { getUser } from './../../contracts'

/**
 *
 * @param {Redis}
 * @param {String} tenant Tenant slug
 * @param {String/Number} lId The List "id"
 * @param {String/Number} owner The owner that will be saved
 */
export default client => async (tenant, lId, owner) => {
  //
  const ref = getUser(owner)

  // Add to the list and create the hash
  return composeRedis(client)(
    sadd(listOwnersKey(lId, tenant), ref),
    sadd(userListsKey(ref, tenant), lId),
  )
}
