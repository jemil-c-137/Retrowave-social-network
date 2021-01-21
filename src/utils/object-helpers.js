export const updateUsersArray = (items, itemId, objectPropName, newObj) => {
 return  items.map(i => {
  if (i[objectPropName] === itemId) {
    return {...i, ...newObj} // changing item state
  }
  return i
})
}

