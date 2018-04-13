// TODO: Move to other file maybe
// redis-mock.js
// import redis from 'redis-mock'
import redis from 'redis'

//
const client = redis.createClient({ host: 'lists-db' })

// Functions
import hasTenantCreator from './functions/hasTenant'
import installTenantCreator from './functions/installTenant'
import deleteTenantCreator from './functions/deleteTenant'
import saveListItemCreator from './functions/saveListItem'
import deleteListItemCreator from './functions/deleteListsItem'
import getListCreator from './functions/getList'
import saveListCateroryCreator from './functions/saveListCategory'
import createListCreator from './functions/createList'
// import saveListCreator from './functions/saveList'
import isListOwnerCreator from './functions/isListOwner'
import listExistsCreator from './functions/listExists'
import isOfficialListCreator from './functions/isOfficialList'

// Functions with context
const hasTenant = hasTenantCreator(client)
const installTenant = installTenantCreator(client)
const deleteTenant = deleteTenantCreator(client)
const saveListItem = saveListItemCreator(client)
const deleteListItem = deleteListItemCreator(client)
const getList = getListCreator(client)
const saveListCategory = saveListCateroryCreator(client)
// const getListItems = getListItemsCreator(client)
// const getListItem = getListItemCreator(client)
// const saveListItems = saveListItemsCreator(client)
// const incrListsCount = incrListsCountCreator(client)
const createList = createListCreator(client)
// const saveList = saveListCreator(client)
const isListOwner = isListOwnerCreator(client)
const isOfficialList = isOfficialListCreator(client)
const listExists = listExistsCreator(client)

//
import { flushall } from './functional'

const purge = flushall(client)

export {
  hasTenant,
  installTenant,
  deleteTenant,
  saveListItem,
  deleteListItem,
  createList,
  getList,
  isListOwner,
  isOfficialList,
  saveListCategory,
  listExists,
  purge
}
