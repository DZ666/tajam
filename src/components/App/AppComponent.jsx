import React from 'react'

// Components
import App from "./App"

import { withRouter } from "react-router-dom";

import { connect } from "react-redux"

import { withAlert } from "react-alert"


// Styles
import "../../assets/css/main.min.css"

class AppComponent extends React.Component {
  render () {
    return <App {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    ...state
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

let withAppComponent = withRouter(AppComponent)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAppComponent)
