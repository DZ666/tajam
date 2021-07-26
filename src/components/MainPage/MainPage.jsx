import React from 'react'

// Components
import Header from "../Header/HeaderComponent"
import OurStory from "../OurStory/OurStoryComponent"
import Video from "../Video/VideoComponent"
import Expertise from "../Expertise/ExpertiseComponent"
import Team from "../Team/TeamComponent"
import WorksTitle from "../Works/WorksTitle"
import WorksContent from "../Works/WorksContent"
import Quotes from "../Quotes/QuotesComponent"
import SendMessageForm from "../SendMessageForm/SendMessageFormComponent"
import Footer from "../Footer/FooterComponent"

class MainPage extends React.Component {
  render () {
    let video = <div className={"video-window" + (this.props.actions.loadings.is_open_video_winodw ? " open-window" : " window-hide")}>
      <div id="close-window" onClick={this.props.closeWindow}></div>
      <iframe className="frame" src="https://www.youtube.com/embed/KvUgaHTNit4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>

    return (
      <div className="wrapper">
        <div className="inner-wrapper">
          <Header {...this.props} />
          <OurStory {...this.props} />
          <Video {...this.props} />
          <Expertise {...this.props} />
          <Team {...this.props} />
          <WorksTitle {...this.props} />
          <WorksContent {...this.props} />
          <Quotes {...this.props} />
          <SendMessageForm {...this.props} />
          <Footer {...this.props} />
          { video }
        </div>
      </div>
    )
  }
}

export default MainPage
