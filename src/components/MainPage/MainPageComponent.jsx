import React from 'react'

import { withRouter } from "react-router-dom";

import { connect } from "react-redux"

import { openWindow, closeWindow } from "../../redux/actions/action.actions.js"

import MainPage from "./MainPage"

class MainPageComponent extends React.Component {
  render () {
    return <MainPage {...this.props} openWindow={this.props.openWindow.bind(this)} closeWindow={this.props.closeWindow.bind(this)} />
  }
}

let mapStateToProps = (state) => {
  return {
    ...state
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openWindow: () => {
      dispatch(openWindow())
    },
    closeWindow: () => {
      dispatch(closeWindow())
    }
  }
}

let withMainPageComponent = withRouter(MainPageComponent)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withMainPageComponent)
