// Redis stuff
import { composeRedis, hmset, sadd } from './../functional'

//
import { listItemsKey, listItemKey } from './../keys'

// Contracts
import { getItemVariant, getItemInfos } from './../../contracts'

/**
 * Save a list item
 * @param {Redis}
 * @param {String} tenant Tenant slug
 * @param {String/Number} lId The List "id"
 * @param {Object} item
 *                 - {Number} variant Variant ID
 *                 - {Number} qty Quantity of the item in the list
 */
export default client => async (tenant, lId, item) => {
  // Add to the list and create the hash
  return composeRedis(client)(
    sadd(listItemsKey(lId, tenant), getItemVariant(item)),
    hmset(listItemKey(lId, getItemVariant(item), tenant), getItemInfos(item))
  )
}
