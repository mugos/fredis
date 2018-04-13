// Ramda stuff
import { pluck, zipObj, difference } from 'ramda'

// Dependent commands
import saveResource from './saveResource'
import getListCategories from './getListCategories'
import deleteListCategory from './deleteListCategory'
import saveListCategory from './saveListCategory'

/**
 *
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async (tenant, lId, categories) => saveResource(getListCategories, deleteListCategory, saveListCategory)(client, categories, tenant, lId)
