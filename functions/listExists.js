// Redis stuff
import { exists } from './../functional'

// Necessary keys
import { listKey } from './../keys'

/**
 * Check if a list exists
 */
export default client => async (tenant, l) => await exists(listKey(l, tenant))(client) === 1
