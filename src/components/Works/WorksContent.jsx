import React from 'react'

class WorksContent extends React.Component {

  constructor() {
    super()
    this.state = {
      works_dom: []
    }
  }

  async display_works() {
    await this.setState({
      works_dom: [ ...this.props.actions.works.map(work => (
        <div className="work-item col col-sm-12 col-md-6 col-lg-2" key={"work-" + work.id}>
          <div className="photo-container" style={{backgroundImage: `url("${work.img}")`}}></div>
          <div className="slide">
            <p>{work.name}</p>
          </div>
        </div>
      )) ]
    })
  }

  componentDidMount() {
    this.display_works()
  }

  render () {
    return (
      <div className="work-list row col-12">
        <div className="d-flex flex-md-wrap flex-sm-wrap overflow-sm-scroll col-12">
          { this.state.works_dom }
        </div>
        <div className="col-12 d-flex justify-content-center pt-70 pb-70">
          <input className="submit-btn" type="submit" value="LOAD MORE"/>
        </div>
      </div>
    )
  }
}

export default WorksContent
