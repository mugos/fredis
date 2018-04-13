// Necessary commands
import incrListsCount from './incrListsCount'
import saveList from './saveList'

/**
 * Create a new list
 */
export default client => async (tenant, list) => {
  // Increment the number
  const id = await incrListsCount(client)(tenant)

  // Save it!
  await saveList(client)(tenant, id, list)

  // Return the ID
  return id
}
