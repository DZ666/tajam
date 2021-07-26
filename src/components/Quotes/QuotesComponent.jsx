import React from 'react'

import { withRouter } from "react-router-dom";

import { connect } from "react-redux"

import { withAlert } from "react-alert"

import { openQuotesReview, closeQuotesReview } from "../../redux/actions/action.actions.js"

// Imports
import Quotes from "./Quotes"

class QuotesComponent extends React.Component {
  render () {
    return <Quotes {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    ...state
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
  openQuotesReview: (id) => {
      dispatch(openQuotesReview(id))
    },
    closeQuotesReview: (id) => {
      dispatch(closeQuotesReview(id))
    }
  }
}

let withQuotesComponent = withRouter(QuotesComponent)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withQuotesComponent)
