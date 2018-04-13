// Redis stuff
import { sadd, srem } from './../functional'

//
import { officialListsKey } from './../keys'

/**
 *
 * @param {Redis}
 * @param {String} tenant Tenant slug
 * @param {String/Number} lId The List "id"
 */
export default client => async (tenant, l, official) => {
  // Add it as official
  if (official) { return await sadd(officialListsKey(tenant), l)(client) }

  // Remove it
  return await srem(officialListsKey(tenant), l)(client)
}
