// Default Imports
  import { combineReducers, applyMiddleware, createStore } from "redux"
  import { reducer as formReducer } from "redux-form"
  import thunk from "redux-thunk"

// Reducer Imports
  import actionsReducer from "./reducers/actions.reducer.js"
  import alertReducer from "./reducers/alert.reducer.js"

let reducersBatch = combineReducers({
  actions: actionsReducer,
  alert: alertReducer,
  form: formReducer,
})

let store = createStore(reducersBatch, applyMiddleware(thunk))

export default store
