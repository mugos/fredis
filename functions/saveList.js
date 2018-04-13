// Redis stuff
import { hmset, hgetall } from './../functional'

// Necessary keys
import { listKey } from './../keys'

// Dependent commands
import saveListItems from './saveListItems'
import saveListOwners from './saveListOwners'
import saveListCategories from './saveListCategories'
import saveListOfficial from './saveListOfficial'

//
import { reject, isNil } from 'ramda'

// Contracts
import {
  getListVariants,
  getListUsers,
  getListCategories,
  getListName,
  getListInfos,
  getListOfficial
} from './../../contracts'

/**
 * Saves the list
*/
export default client => async (tenant, id, list) => {
  // Add the items
  await saveListItems(client)(tenant, id, getListVariants(list))

  // Add Owners
  await saveListOwners(client)(tenant, id, getListUsers(list))

  // Add Categories
  await saveListCategories(client)(tenant, id, getListCategories(list))

  // Save as official
  await saveListOfficial(client)(tenant, id, getListOfficial(list))

  // Save it itself
  await hmset(listKey(id, tenant), reject(isNil, getListInfos(list)))(client)

  // Positive return
  return true
}
