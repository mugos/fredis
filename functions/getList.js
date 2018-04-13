// Redis stuff
import { hgetall } from './../functional'

// Keys
import { listKey } from './../keys'

// Contracts
import { setListVariants, setListCategories, setListRef, setListUsers, setListOfficial } from './../../contracts'

// Dependent commands
import getListItems from './getListItems'
import getListCategories from './getListCategories'
import getListOwners from './getListOwners'
import isOfficialList from './isOfficialList'

/**
 *
 */
export default client => async (tenant, l) => {
  // Get the list information
  let list = await hgetall(listKey(l, tenant))(client)

  // Primitive return if the list does not exists
  if (list === null) { return false }

  // Set it reference
  list = setListRef(l, list)

  // Get the list items
  list = setListVariants(await getListItems(client)(tenant, l), list)

  // Get the list categories
  list = setListCategories(await getListCategories(client)(tenant, l), list)

  // Get list owners
  list = setListUsers(await getListOwners(client)(tenant, l), list)

  // Set it as official
  list = setListOfficial(await isOfficialList(client)(tenant, l), list)

  //
  return list
}
