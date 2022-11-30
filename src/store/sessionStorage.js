export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("users")
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

export const saveState = (users) => {
  try {
    const serializedState = JSON.stringify(users)
    sessionStorage.setItem("users", serializedState)
  } catch (error) {}
}
