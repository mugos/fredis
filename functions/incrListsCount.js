// Necessary keys
import { listsCountKey } from './../keys'

// Redis stuff
import { incr } from './../functional'

/**
 * Increment the lists count key
 */
export default client => async (tenant) => await incr(listsCountKey(tenant))(client)

