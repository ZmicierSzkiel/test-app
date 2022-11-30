const defaultState = {
  users: [],
}

const ADD_USERS = "ADD_USERS"

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: [...state.users, ...action.payload] }
    default:
      return state
  }
}

export const addUsersAction = (payload) => ({
  type: ADD_USERS,
  payload,
})
