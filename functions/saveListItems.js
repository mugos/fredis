// Ramda stuff
import { pluck, zipObj, difference, keys } from 'ramda'

// Dependent commands
import saveResource from './saveResource'
import getListItems from './getListItems'
import deleteListItem from './deleteListItem'
import saveListItem from './saveListItem'

/**
 * Save the list items
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async (tenant, lId, items) => saveResource(getListItems, deleteListItem, saveListItem, 'ref')(client, items, tenant, lId)
