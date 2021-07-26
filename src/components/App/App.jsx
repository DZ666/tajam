import React from 'react'
import {
	BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

// Pages
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
