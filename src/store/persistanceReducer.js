const defaultState = {
  status: false,
}

const CHANGE_STATUS = "CHANGE_STATUS"

export const persistanceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return { status: !state.status }
    default:
      return state
  }
}

export const changeStatusAction = (payload) => ({
  type: CHANGE_STATUS,
  payload,
})
