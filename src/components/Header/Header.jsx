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
    this.nav = React.createRef()
    this.handleClickOutside = this.handleClickOutside.bind(this)
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

  handleClickOutside(event) {
      if (this.nav && !this.nav.current.contains(event.target)) {
          this.closeNav()
      }
  }

  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  render() {
    return (
      <header className="header">
        <div className="inner-header">
          <ul ref={this.nav} id="nav" className={"header__navigation col-10" + (this.state.is_nav_open === true ? " opened-nav" : "")}>
            <div className="navigation__close-btn" onClick={async () => await this.closeNav()}>
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
          <div className="header-logo__nav-wrapper">
			  <div className={"navigation__open-btn" + (this.state.is_nav_open === true ? " navigation__closed-opening-btn" : "")} onClick={async () => await this.openNav()}>
				  <div className="middle-line"></div>
			  </div>
            <Link className="inner-header__logotype col-lg-3 col-sm-12 col-md-12" to="/">
              <img src={Logo_webp} alt="tajam-logo" />
              <span className="logo-name ml-10">tajam</span>
            </Link>
            <nav className="inner-header__navigation col-lg-9 col-md-12 col-sm-12">
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
          <div className="inner-header__content col-lg-7 col-md-8 col-sm-10">
            <h1 className="title blue-subline">We Are Awesome Creative Agency</h1>
            <p className="subtitle">
				This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem <br/>
				quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate <br/>
				cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            <Link className="submit-btn" to="/">LEARN MORE</Link>
          </div>
        </div>
      </header>
      )
  }
}

export default Header
