// Redis stuff
import { sismember } from './../functional'

//
import { officialListsKey } from './../keys'

/**
 * Get the list of a list owners
 * @param {String} tenant Tenant slug
 * @param {String/Number} l List "id"
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async (tenant, l) => await sismember(officialListsKey(tenant), l)(client) === 1
