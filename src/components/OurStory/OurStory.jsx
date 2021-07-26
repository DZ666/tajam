import React from 'react'

// Images
import Logo from "../../assets/images/simple/big-logo.webp"

class OurStory extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="col-12 d-flex flex-wrap pt-70 pb-70 justify-content-sm-center">
          <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-lg-end justify-content-sm-center align-items-start pb-30 p-sm-0"><img src={Logo} alt="Logo" /></div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-wrap align-items-start pl-60 justify-content-lg-start justify-content-md-start justify-content-sm-center sm-pl-0">
            <h1 className="title dark-color ta-l p-0 pb-30 col-lg-12 col-md-12 col-sm-12 justify-content-sm-start">OUR STORY</h1>
            <p className="sm-t p-0 ta-sm-j">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus</p>
            <p className="sm-t p-0 pb-30 ta-sm-j">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <input className="submit-btn" type="submit" value="LEARN MORE" />
          </div>
        </div>
      </div>
    )
  }
}

export default OurStory;
