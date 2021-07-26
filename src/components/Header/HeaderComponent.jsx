import React from 'react'

import Header from "./Header"

class HeaderComponent extends React.Component {
  render () {
    return <Header {...this.props} />
  }
}

export default HeaderComponent
