// Ramda dependencies
import { difference, zipObj, pluck, keys } from 'ramda'
/**
 *
 */
const toIndexedObj = (prop, arr) => zipObj(pluck(prop, arr), arr)

/**
 * This function is an abstraction of a simple calculation
 * of which resource of an list will be delete and
 * what will be created
 */
export default (getFn, deleteFn, saveFn, indexProp = 'id') => {
  // Return a function
  return async (client, items, ...defaultArgs) => {
    // Transform to an indexed array
    const indexed = toIndexedObj(indexProp, items)
    const indexedKeys = keys(indexed)

    //
    const current = await getFn(client)(...defaultArgs)

    // To be deleted
    difference(current, indexedKeys).forEach((i) => deleteFn(client)(...defaultArgs.concat(i)))

    // To be created
    difference(indexedKeys, current).forEach((i) => saveFn(client)(...defaultArgs.concat(indexed[i])))
  }
}
