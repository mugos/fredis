// Redis stuff
import { composeRedis, del, srem } from './../functional'

//
import { listItemsKey, listItemKey } from './../keys'

/**
 * Delete a list item
 * @param {Redis}
 * @param {String} tenant Tenant slug
 * @param {String/Number} lId The List "id"
 * @param {Object} item
 *                 - {Number} variant Variant ID
 *                 - {Number} qty Quantity of the item in the list
 */
export default client => async (tenant, lId, variant) => {
  // Remove from the list and delete the hash
  return composeRedis(client)(
    del(listItemKey(lId, variant, tenant)),
    srem(listItemsKey(lId, tenant), variant),
  )
}


