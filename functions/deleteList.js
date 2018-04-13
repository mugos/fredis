// Ramda
import { map } from 'ramda'

// Redis stuff
import { composeRedis, deleteNamespace, srem } from './../functional'

// Keys!
import { userListsKey, categoryListsKey, officialListsKey, listKey } from './../keys'

// Dependent commands
import getListCategories from './getListCategories'
import getListOwners from './getListOwners'

/**
 * Delete a list
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async (tenant, lId) => {
  // Some key generators
  const keyFormer = (fn, ...args) => (...least) => fn(...least.concat(args))
  const ownerKey = keyFormer(userListsKey, tenant)
  const categoryKey = keyFormer(categoryListsKey, tenant)

  // Remove the item from
  const removeFrom = (entries, keyFormer, item) => map(entries, (entry) => srem(keyFormer(entry), item))

  // Return the categories that the list has
  const cts = await getListCategories(tenant, lId)(client)

  // Return the list owners
  const owns = await getListOwners(tenant, lId)(client)

  // Remove from the list and delete the hash
  await composeRedis(client)(
    // Remove from categories
    ...removeFrom(cts, categoryKey, lId)
    // Remove from owners
    ...removeFrom(owns, ownerKey, lId),
    // Remove from official
    srem(officialListsKey(tenant), lId)
  )

  // Remove the full namespace of the list
  return deleteNamespace(listKey(lId, tenant))
}
