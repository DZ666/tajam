import React from 'react'

// Imports
  // Images
  import desktop_webp from "../../assets/images/icons/expertise_cards/desktop.webp"
  import brush_webp from "../../assets/images/icons/expertise_cards/brush.webp"
  import phone_webp from "../../assets/images/icons/expertise_cards/phone.webp"
  import chart_webp from "../../assets/images/icons/expertise_cards/chart.webp"
  import calculator_webp from "../../assets/images/icons/expertise_cards/calculator.webp"
  import heart_webp from "../../assets/images/icons/expertise_cards/heart.webp"

class Expertise extends React.Component {
  render () {
    return (
      <div className="container expertise d-flex justify-content-center align-items-start pt-70 pb-70">
        <div className="inner-expertise d-flex justify-content-center align-items-start row">
          <div className="title-wrapper w-100 d-flex justify-content-center align-items-start row pb-50 col-12">
            <h1 className="title dark-color ta-l p-0 pb-30 w-100">EXPERTISE</h1>
            <p className="sm-t p-0 grey-underline">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
          </div>
          <div className="expertise-cards-wrapper row cols-12 row-cols-3 row-md-cols-2 row-sm-cols-1 justify-content-center">
            <div className="expertise-card">
              <div className="card-image">
                <img src={desktop_webp} alt="WEB DESIGN AND DEVELOPMENT" />
              </div>
              <div className="card-title">WEB DESIGN AND DEVELOPMENT</div>
              <div className="card-text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
            </div>
            <div className="expertise-card">
              <div className="card-image">
                <img src={brush_webp} alt="BRENDING IDENTITY" />
              </div>
              <div className="card-title">BRENDING IDENTITY</div>
              <div className="card-text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
            </div>
            <div className="expertise-card">
              <div className="card-image">
                <img src={phone_webp} alt="MOBILE APP" />
              </div>
              <div className="card-title">MOBILE APP</div>
              <div className="card-text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
            </div>
          </div>
          <div className="expertise-cards-wrapper row cols-12 row-cols-3 row-md-cols-2 row-sm-cols-1 justify-content-center">
            <div className="expertise-card">
              <div className="card-image">
                <img src={chart_webp} alt="SEARCH ENGINE OPTIMIZATION" />
              </div>
              <div className="card-title">SEARCH ENGINE OPTIMIZATION</div>
              <div className="card-text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
            </div>
            <div className="expertise-card">
              <div className="card-image">
                <img src={calculator_webp} alt="GAME DEVELOPMENT" />
              </div>
              <div className="card-title">GAME DEVELOPMENT</div>
              <div className="card-text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
            </div>
            <div className="expertise-card">
              <div className="card-image">
                <img src={heart_webp} alt="MADE WITH LOVE" />
              </div>
              <div className="card-title">MADE WITH LOVE</div>
              <div className="card-text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Expertise
