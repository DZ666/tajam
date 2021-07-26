import React from 'react'
import PropTypes from 'prop-types'

// Imports
  // Images
  import logo_webp from "../../assets/images/logos/logo.webp"
  import facebook_webp from "../../assets/images/social/facebook.png"
  import twitter_webp from "../../assets/images/social/twitter.png"
  import dribbble_webp from "../../assets/images/social/dribbble.png"
  import instagram_webp from "../../assets/images/social/instagram.png"
  import google_webp from "../../assets/images/social/google.png"
  import youtube_webp from "../../assets/images/social/youtube.png"

class Footer extends React.Component {
  render () {
    return (
      <footer className="d-flex justify-content-center pt-70 pb-70">
        <div className="inner-footer container align-items-center mh-260 col-lg-9 col-sm-12">
          <div className="container col-12 d-flex justify-content-center row-lg-cols-3 row-sm-cols-1 flex-wrap row">
            <div className="col-lg-4 col-sm-12 d-flex flex-wrap align-items-start align-content-start justify-content-md-center">
              <a className="footer-logo col-12 d-flex align-items-center justify-content-sm-start justify-content-md-center justify-content-lg-start" href="/">
                <img src={logo_webp} alt="tajam-logo" />
                <div className="logo-name ml-10">tajam</div>
              </a>
              <p>lorem quis bibendum auctor, nisi elit<br />consequat ipsum, nec sagittis sem nibh elit.<br />Duis sed odio sit amet auctror a ornare odio<br />non mauris vitae erat in elit</p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-md-flex d-sm-flex flex-md-wrap justify-content-md-center justify-content-lg-start">
              <div className="title">OUR STUDIO</div>
              <div className="location col-lg-12 col-md-12 col-sm-11 row pb-16 d-md-flex flex-md-wrap justify-content-md-center"><i className="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="14px" height="19px">
                    <image x="0px" y="0px" width="14px" height="19px" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAATCAQAAAAKCfQfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBxgBAhiNSBMSAAABI0lEQVQoz1WPvUqcURRF14xRsJBhioBNQC0UfAMhSZNnmEZCSDNMIVooKIQgBE2QIDZBYZpBEgLBHwgpfAMhjY2Yp1BwTYpAQNgW3zd/t9p7rXMv5xJC8Kkd741Rvzpd0EqAboMTuhxzCSzxljqva9+BYMP4uZgt3/lkXA44ZTwYViH40VjHbz6UoOWtd66U7b9nGPdDcM146BfjZgjuGIyvQjDuhuC2sRp8YapAFboV4AaAPwWhAvjXTgj+ML70ufFnCLb9hx9MucIvY7woW9zDMWOzBPMulOmNcZzgUe/u0D9jO/Ti+xH1rhgvyqpxsq8mjOt9Gbz1qi9/e1ekHpg1tkKwaZwbkcEN44zPjFs9NrzGqTGeD0glDE73mie1xUF/BIF4Krpuvw4hAAAAAElFTkSuQmCC"></image>
                  </svg></i>
                <p className="col-lg-11 col-md-6 col-sm-11">Ruko cucruk, Jl. Radio luar dalem jos<br />No.12 - 13, Kalideres - Jakarta Barat<br />11480 - Indonesia</p>
              </div>
              <div className="phone col-12 row d-md-flex flex-md-wrap justify-content-md-center"><i className="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="17px">
                    <image x="0px" y="0px" width="17px" height="17px" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAQAAACRZI9xAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBxgBAy8s7odcAAABE0lEQVQoz3XQsUvUcRjH8ddPfgROv5IodIimo7qhqSiXBGlw0a04Iom4TXALl2vo39ClliNtcRIlKWhQukEwxKD9vAsJH1ua4tugUna/3/MZnw/v98OThcrZd9Pt4stQZaHtstd2j+/kFYWnGgo/DetkpaK6PVPWcdFRuaiODnilVy5accsPVxya96jq3C4OfbZdvCunTFl0TdNdOWWUe9Y88cuSB34zSJnw0QttScsnECepxfMQ4lmkmAuRYvlkk04pTYsy9/W89NCmZMPjM2yON2ZN6+hjxJjkrcY/6vga/bh6qrsQrUjRCn+T5G7Y8h2Meq9u0ofz9w+pGbdpxpIDXcP/F8iC63Zc8s2C1cEnFf4Aqo9gDQs805cAAAAASUVORK5CYII="></image>
                  </svg></i>
                <p className="col-lg-11 col-md-6 col-sm-11">(+62) 21-2224 3333</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-9 d-md-flex flex-md-wrap justify-content-md-center justify-content-lg-start">
              <div className="title">STAY IN TOUCH</div>
              <form className="col-12 row d-flex justify-content-start footer-form m-0" action="" method="post">
                <div className="col-12 field-wrapper">
                  <input className="field" type="text" name="subscribe" placeholder="Subscribe our newsletter"/>
                  <input className="submit-btn" type="submit" value="" />
                </div>
                <div className="col-12 field-wrapper-social">
                  <a className="social" href="/">
                    <img src={facebook_webp} alt="facebook"/>
                  </a>
                  <a className="social" href="/">
                    <img src={twitter_webp} alt="twitter"/>
                  </a>
                  <a className="social" href="/">
                    <img src={dribbble_webp} alt="dribbble" />
                  </a>
                  <a className="social" href="/">
                    <img src={instagram_webp} alt="instagram"/>
                  </a>
                  <a className="social" href="/">
                    <img src={google_webp} alt="google" />
                  </a>
                  <a className="social" href="/">
                    <img src={youtube_webp} alt="youtube" />
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="container col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between pt-70">
            <div className="col-lg-11 col-md-12 row d-flex justify-content-between m-0">
              <nav className="footer-links-wrapper col-lg-6 col-md-12 col-sm-12 justify-content-md-center justify-content-lg-start"><a className="footer-link" href="">HELP</a><a className="footer-link" href="">TERMS & CONDITION</a><a className="footer-link" href="">PRIVACY</a></nav>
              <div className="copyright col-lg-6 col-md-12 col-sm-12 ta-r ta-sm-l ta-md-c">Copyright © 2021 - Tajem Creative</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
