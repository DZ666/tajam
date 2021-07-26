import React from 'react'

import { withRouter } from "react-router-dom";

import { connect } from "react-redux"

import { withAlert } from "react-alert"

// Imports
import SendMessageForm from "./SendMessageForm"
import { sendMessage } from "../../redux/actions/action.actions.js"

class SendMessageFormComponent extends React.Component {

  sendMessage(data) {
    console.log(data)
  }

  render () {
    return <SendMessageForm onSubmit={this.sendMessage.bind(this)} />
  }
}

let mapStateToProps = (state) => {
  return {}
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendMessage: (data) => {
      dispatch(sendMessage(data))
    }
  }
}

let withSendMessageFormComponent = withRouter(SendMessageFormComponent)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSendMessageFormComponent)
