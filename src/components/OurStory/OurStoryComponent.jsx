import React from 'react'

import OurStory from "./OurStory"

class OurStoryComponent extends React.Component {
  render () {
    return <OurStory { ...this.props } />
  }
}

export default OurStoryComponent
