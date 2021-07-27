// Main Imports
	import React from 'react'
	// Components
		import App from "./App"

		import { withRouter } from "react-router-dom";

		import { connect } from "react-redux"


// Additional Imports
	// Styles
		import "../../assets/sass/Main.sass"
		import "../../assets/sass/Header.sass"
		import "../../assets/sass/Expertise.sass"
		import "../../assets/sass/Story.sass"
		import "../../assets/sass/Team.sass"
		import "../../assets/sass/Works.sass"
		import "../../assets/sass/Quotes.sass"
		import "../../assets/sass/SendDataForm.sass"
		import "../../assets/sass/Footer.sass"

// App Component with Redux Integration
class AppComponent extends React.Component {
  render () {
    return <App {...this.props} />
  }
}

// All Redux State
let mapStateToProps = (state) => {
  return {
    ...state
  }
}

// If this website needs additional functionality in the future, I will add it here
let mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

// Adding withRouter from React Router Dom
let withAppComponent = withRouter(AppComponent)

// Connecting React JSX component with Redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAppComponent)
