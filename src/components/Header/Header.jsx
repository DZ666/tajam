import React from 'react'

// Dom Data
import {Link} from "react-router-dom"

// Images
import Logo_webp from "../../assets/images/logos/logo.webp"

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      is_nav_open: false
    }
  }

  async closeNav() {
    await this.setState({
      is_nav_open: false
    })
  }

  async openNav() {
    await this.setState({
      is_nav_open: true
    })
  }

  render() {
    return (
      <header className="d-flex justify-content-center">
        <div className="inner-header row container align-items-start justify-content-center pb-30">
          <ul className={"col-10 row row-cols-12 mb-0" + (this.state.is_nav_open === true ? " opened-nav" : "")} id="nav">
            <div className="nav-close-btn" id="nav-close-btn" onClick={async () => await this.closeNav()}>
              <div className="middle-line"></div>
            </div>
            <li>
              <Link onClick={()=>{
                this.closeNav()
              }} to="#">HOME</Link>
            </li>
            <li>
              <Link onClick={()=>{
                this.closeNav()
              }} to="#">ABOUT</Link>
            </li>
            <li>
              <Link onClick={()=>{
                this.closeNav()
              }} to="#">EXPERTISE</Link>
            </li>
            <li>
              <Link onClick={()=>{
                this.closeNav()
              }} to="#">TEAMS</Link>
            </li>
            <li>
              <Link onClick={()=>{
                this.closeNav()
              }} to="#">WORKS</Link>
            </li>
            <li>
              <Link onClick={()=>{
                this.closeNav()
              }} to="#">PEOPLE SAY</Link>
            </li>
            <li>
              <Link onClick={()=>{
                this.closeNav()
              }} to="#">CONTACT</Link>
            </li>
          </ul>
          <div className="header-logo_nav-wrapper flex d-flex flex-wrap justify-content-lg-center justify-content-md-center justify-content-sm-center container align-items-start pt-15">
            <Link className="header-logo col-lg-2 col-sm-12 col-md-12 d-flex align-items-center justify-content-lg-center justify-content-md-center justify-content-sm-center" to="/">
              <img src={Logo_webp} alt="tajam-logo" />
              <div className="logo-name ml-10">tajam</div>
            </Link>
            <nav className="header-navigation mh-50 col-lg-10 col-md-12 col-sm-12 row align-items-center justify-content-lg-end justify-content-md-center justify-content-sm-center">
              <div className="nav-open-btn" id="nav-open-btn" onClick={async () => await this.openNav()}>
                <div className="middle-line"></div>
              </div>
              <ul className="col-lg-10 col-md-12 col-sm-12 d-flex flex-wrap row-cols-12 mb-0 justify-content-lg-end justify-content-md-center justify-content-sm-center">
                <li>
                  <Link to="#">HOME</Link>
                </li>
                <li>
                  <Link to="#">ABOUT</Link>
                </li>
                <li>
                  <Link to="#">EXPERTISE</Link>
                </li>
                <li>
                  <Link to="#">TEAMS</Link>
                </li>
                <li>
                  <Link to="#">WORKS</Link>
                </li>
                <li>
                  <Link to="#">PEOPLE SAY</Link>
                </li>
                <li>
                  <Link to="#">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="container col-lg-7 col-md-8 col-sm-10 row d-flex justify-content-center">
            <h1 className="title blue-subline">We Are Awesome Creative Agency</h1>
            <p className="subtitle p-0 mb-50">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            <input className="submit-btn" type="submit" value="LEARN MORE" />
          </div>
        </div>
      </header>
      )
  }
}

export default Header
