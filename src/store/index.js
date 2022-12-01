import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { persistanceReducer } from "./persistanceReducer"
import { loadState, saveState } from "./sessionStorage"
import { userReducer } from "./userReducer"

const persistedState = loadState()

const rootReducers = combineReducers({
  users: userReducer,
  persistance: persistanceReducer,
})

export const store = createStore(
  rootReducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  if (store.getState().persistance.status) {
    saveState(store.getState())
  }
})
