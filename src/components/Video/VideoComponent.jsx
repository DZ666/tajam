import React from 'react'

import { withRouter } from "react-router-dom";

import { connect } from "react-redux"

import { withAlert } from "react-alert"

import { openWindow, closeWindow } from "../../redux/actions/action.actions.js"

import Video from "./Video"

class VideoComponent extends React.Component {
  render () {
    return <Video { ...this.props } openWindow={this.props.openWindow.bind(this)} closeWindow={this.props.closeWindow.bind(this)} />
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

let withVideoComponent = withRouter(VideoComponent)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withVideoComponent)
