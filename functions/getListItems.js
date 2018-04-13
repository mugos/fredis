// Redis stuff
import { smembers } from './../functional'

//
import { listItemsKey } from './../keys'

//
import getListItem from './getListItem'

/**
 * Get the list items
 * @param {String} tenant Tenant slug
 * @param {String/Number} l List "id"
 * @param {Function} cb Callback function it could recieve an Array[String] or undefined
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async (tenant, l) => {
  // Get the items
  const items = await smembers(listItemsKey(l, tenant))(client)

  // Return the items
  return Promise.all(items.map(async i => await getListItem(client)(tenant, l, i)))
}
