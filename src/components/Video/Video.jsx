import React from 'react'

// images
import play_btn_webp from "../../assets/images/icons/play-icon.webp"

class Video extends React.Component {
  render () {
    return(
      <div className="container story d-flex justify-content-center align-items-center">
        <div className="inner-story d-flex justify-content-center" id="watch" onClick={this.props.openWindow}>
          <img src={play_btn_webp} alt="Play" />
          <p>WATCH OUR STORY</p>
        </div>
      </div>
    )
  }
}

export default Video
