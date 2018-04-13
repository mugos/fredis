// Ramda stuff
import { pluck, zipObj, difference, keys } from 'ramda'

// Dependent commands
import saveResource from './saveResource'
import getListOwners from './getListOwners'
import deleteListOwner from './deleteListOwner'
import saveListOwner from './saveListOwner'

/**
 *
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => (tenant, lId, owners) => saveResource(getListOwners, deleteListOwner, saveListOwner, 'ref')(client, owners, tenant, lId)
