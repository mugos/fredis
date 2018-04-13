// Redis stuff
import { composeRedis, srem } from './../functional'

//
import { listOwnersKey, userListsKey } from './../keys'

/**
 *
 * @param {Redis}
 * @param {String} tenant Tenant slug
 * @param {String/Number} lId The List "id"
 * @param {String/Number} owner The owner that will be saved
 */
export default client => async (tenant, lId, owner) => {
  // Add to the list and create the hash
  return composeRedis(client)(
    srem(listOwnersKey(lId, tenant), owner),
    srem(userListsKey(owner, tenant), lId),
  )
}
