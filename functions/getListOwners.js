// Redis stuff
import { smembers } from './../functional'

//
import { listOwnersKey } from './../keys'
/**
 * Get the list of a list owners
 * @param {String} tenant Tenant slug
 * @param {String/Number} l List "id"
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async (tenant, l) => await smembers(listOwnersKey(l, tenant))(client)
