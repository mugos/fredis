// Redis stuff
import { composeRedis, srem } from './../functional'

//
import { listCategoriesKey, categoryListsKey } from './../keys'

//
import { getCategory } from './../../contracts'

/**
 *
 * @param {Redis}
 * @param {String} tenant Tenant slug
 * @param {String/Number} lId The List "id"
 * @param {String/Number} owner The owner that will be saved
 */
export default client => async (tenant, lId, category) => {
  // Add to the list and create the hash
  return composeRedis(client)(
    srem(listCategoriesKey(lId, tenant), category),
    srem(categoryListsKey(category, tenant), lId),
  )
}
