// Main Imports
import React from 'react'
import {
  Route,
  Switch,
} from "react-router-dom"

// Pages Imports
import MainPage from "../MainPage/MainPageComponent"

class App extends React.Component {
  render () {
    return(
		<Switch>
			<Route exact path="/">
				<MainPage {...this.props} />
			</Route>
		</Switch>
	)
  }
}

export default App
