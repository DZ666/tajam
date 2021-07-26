import React from 'react'

// Imports

class Team extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  async dispalyReviews() {
    this.setState({
      reviews: [ await this.props.actions.reviews.map(review => (
        <div className="team-card" key={review.id + "-team-card"}>
          <div className="team-card-image" onClick={async () => {
              await this.props.openReview(review.id)
              await this.dispalyReviews()
            }}>
            
            <img src={review.img} alt={review.name}/>
          </div>
          <div className="team-card-title_profession-wrapper">
            <div className="team-card-title">{review.name}</div>
            <div className="team-card-profession">{review.profession}</div>
          </div>
          <div className={"team-card-review" + (review.is_open ? " team-card-review-opened" : "")}>
            <div className="close-btn" onClick={async () => {
                await this.props.closeReview(review.id)
                await this.dispalyReviews()
              }}>
            </div>
            <p>
              {review.review}
            </p>
          </div>
        </div>
      )) ]
    })
  }

  componentDidMount() {
    this.dispalyReviews()
  }

  render() {
    return (<div className="team d-flex justify-content-center align-items-start pt-70 pb-70">
      <div className="container inner-team d-flex justify-content-center align-items-start row">
        <div className="title-wrapper w-100 d-flex justify-content-center align-items-start row pb-50 col-12">
          <h1 className="title white-color ta-l p-0 pb-30 w-100">MEET OUR AMAZING TEAM</h1>
          <p className="sm-t p-0 white-sm-t grey-underline">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
        </div>
        <div className="team-cards-wrapper col-12 d-flex justify-content-center pb-70 row col-sm-12">
          { this.state.reviews }
        </div>
        <div className="row d-flex justify-content-center">
          <p className="sm-t pb-30 mb-0">Become part of our dream team, let's join us !</p>
          <input className="submit-btn" type="submit" value="WE ARE HIRING"/>
        </div>
      </div>
    </div>)
  }
}

export default Team
