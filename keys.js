// KEYS
export const tenantsKey = 't' // => Set
export const listsCountKey = (tenant) => `${tenant}:l:c` // => String
export const listsBeginDateKey = (tenant) => `${tenant}:l:b` // => Sorted Set
export const listsEndDateKey = (tenant) => `${tenant}:l:e` // => Sorted Set
export const listKey = (id, tenant) => `${tenant}:l:${id}` // => Hash
export const listOwnersKey = (id, tenant) => `${listKey(id, tenant)}:o` // => Set
export const listCategoriesKey = (id, tenant) => `${listKey(id, tenant)}:c` // => Set
export const listItemsKey = (id, tenant) => `${listKey(id, tenant)}:i` // => Set
export const listItemKey = (lId, iId, tenant) => `${listItemsKey(lId, tenant)}:${iId}` // => Hash
export const userListsKey = (id, tenant) => `${tenant}:ul:${id}` // => Set
// export const userKey = (id, tenant) => `${tenant}:u:${id}` // => Hash
export const categoryListsKey = (id, tenant) => `${tenant}:cl:${id}` // => Set
export const officialListsKey = (tenant) => `${tenant}:o` // => Set
