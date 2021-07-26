import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"

import { Provider } from "react-redux"

// Component App
import App from './components/App/AppComponent'

import store from "./redux/store.js"

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
