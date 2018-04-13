// Redis stuff
import { sismember } from './../functional'

//
import { userListsKey } from './../keys'

/**
 * Get the list of a list owners
 * @param {String} tenant Tenant slug
 * @param {String/Number} l List "id"
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async (tenant, l, u) => await sismember(userListsKey(u, tenant), l)(client) === 1
