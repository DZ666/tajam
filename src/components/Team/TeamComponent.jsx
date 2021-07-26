import React from 'react'

import { withRouter } from "react-router-dom";

import { connect } from "react-redux"

import { withAlert } from "react-alert"

import { openReview, closeReview } from "../../redux/actions/action.actions.js"

// Imports
import Team from "./Team.jsx"

class TeamComponent extends React.Component {
  render () {
    return <Team {...this.props} openReview={this.props.openReview.bind(this)} closeReview={this.props.closeReview.bind(this)} />
  }
}

let mapStateToProps = (state) => {
  return {
    ...state
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openReview: (id) => {
      dispatch(openReview(id))
    },
    closeReview: (id) => {
      dispatch(closeReview(id))
    }
  }
}

let withTeamComponent = withRouter(TeamComponent)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTeamComponent)
