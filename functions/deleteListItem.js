// Redis stuff
import { composeRedis, del, srem } from './../functional'

//
import { listItemKey, listItemsKey } from './../keys'

/**
 * Delete list item
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async (tenant, lId, variant) => {
  // Remove from the list and delete the hash
  return composeRedis(client)(
    del(listItemKey(lId, variant, tenant)),
    srem(listItemsKey(lId, tenant), variant),
  )
}
