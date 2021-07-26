import { combineReducers, applyMiddleware, createStore } from "redux"

import ationsReducer from "./reducers/actions.reducer.js"
import alertReducer from "./reducers/alert.reducer.js"

import thunk from "redux-thunk"

import { reducer as formReducer } from "redux-form"

let reducersBatch = combineReducers({
  actions: ationsReducer,
  alert: alertReducer,
  form: formReducer,
})

let store = createStore(reducersBatch, applyMiddleware(thunk))

export default store
