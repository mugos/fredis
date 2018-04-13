// Redis stuff
import { hgetall } from './../functional'

//
import { listItemKey } from './../keys'

//
import { pipe } from 'ramda'

// Contracts
import { setItemVariant, itemPublicProps } from './../../contracts'

/**
 * Get the informations of a list item
 * @param {String} tenant Tenant slug
 * @param {String/Number} l List "id"
 * @param {String/Number} i Item variant id
 * @promise Get user from database.
 * @resolve {object} user information
 * @reject {Error} validation error, connection error
 */
export default client => async (tenant, l, i) => itemPublicProps(pipe(setItemVariant(i))(await hgetall(listItemKey(l, i, tenant))(client)))
