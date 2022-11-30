import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { loadState, saveState } from "./sessionStorage"
import { userReducer } from "./userReducer"

const persistedState = loadState()

export const store = createStore(
  userReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  saveState(store.getState())
})
