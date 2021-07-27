// Main Imports
	import React from 'react'
	import {reduxForm, Field} from "redux-form"
	import { Link } from "react-router-dom"

// Additional Imports
	// Images
		// WEBP
			import logo_webp from "../../assets/images/logos/logo.webp"
			import facebook_webp from "../../assets/images/social/facebook.webp"
			import twitter_webp from "../../assets/images/social/twitter.webp"
			import dribbble_webp from "../../assets/images/social/dribbble.webp"
			import instagram_webp from "../../assets/images/social/instagram.webp"
			import google_webp from "../../assets/images/social/google.webp"
			import youtube_webp from "../../assets/images/social/youtube.webp"
		// PNG
		import location from "../../assets/images/icons/location.png"
		import phone from "../../assets/images/icons/phone.png"

// In a real project, I will take the validation from here and transfer it to one additional file, and I will take these files from there

// If value equals undefined then return false
const required = value => value
	? undefined
	: 'Fill in the field'

// If email is not fitting to template then returns false
const email_validation = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
	? 'Please write a correct email address'
	: undefined

// Form Field Template
const CustomField = ({
	input,
	meta,
	type,
	...props
}) => {
	let hasError = meta.error && meta.touched
	let additionalStylesWrapper = props.forwrapper !== undefined
		? ` ${props.forwrapper} `
		: ""
	let additionalStylesSpanWidthError = props.forspan !== undefined
		? ` ${props.forspan} `
		: ""
	return (<div className={"field " + (
			hasError
			? " error "
			: "") + additionalStylesWrapper}>
		{
			type === "textarea"
				? <textarea {...input} {...props}></textarea>
				: <input {...input} {...props} type={type}/>
		}

		{
			hasError
				? <span className={"pt-10" + additionalStylesSpanWidthError}>{meta.error}</span>
				: ""
		}
	</div>)
}

// Subscribe {Footer Form}
class FF extends React.Component {
	render() {
		return (<form className="col-12 footer-form" onSubmit={this.props.handleSubmit}>
			<div className="field-wrapper">
				<Field type="text" validate={[required, email_validation]} component={CustomField} name="subscribe" placeholder="Subscribe our newsletter"/>
				<input className="submit-btn" type="submit" value=""/>
			</div>
		</form>)
	}
}

// Hooking FooterForm with reduxForm and adding to redux-form state
const FooterForm = reduxForm({form: "footer"})(FF)

// Footer Component
class Footer extends React.Component {

	// Submit Which Alerting User Email
	handleSubmit(data) {
		alert(data.subscribe)
	}

	render() {
		return (<footer className="footer">
			<div className="inner-footer col-lg-8 col-md-12 col-sm-12">
				<div className="inner-footer__content-wrapper col-12">
					<div className="content-wrapper__logotype col-lg-4 col-sm-12">
						<Link className="logotype col-12" to="/">
							<img src={logo_webp} alt="tajam-logo"/>
							<span className="logo-name">tajam</span>
						</Link>
						<p>lorem quis bibendum auctor, nisi elit<br/>consequat ipsum, nec sagittis sem nibh elit.<br/>Duis sed odio sit amet auctror a ornare odio<br/>non mauris vitae erat in elit</p>
					</div>
					<div className="content-wrapper__location col-lg-4 col-md-12 col-sm-12">
						<div className="content-wrapper__location-title">
							<h4 className="title">OUR STUDIO</h4>
						</div>
						{/* I used the "a" tag instead of the "Link" tag because the link does not allow you to do something like this */}
						<a className="location col-lg-12 col-md-4 col-sm-12" href="https://www.google.com/maps/search/Ruko+cucruk,+Jl.+Radio+luar+dalem+jos+No.12+-+13,+Kalideres+-+Jakarta+Barat+11480+-+Indonesia/@-6.1940192,106.7822188,15z/data=!3m1!4b1" target="_blank" rel="noreferrer">
							<div className="col-1">
								<img src={location} alt="Location"/>
							</div>
							<p className="col-lg-11 col-md-6 col-sm-4" >Ruko cucruk, Jl. Radio luar dalem jos<br/>No.12 - 13, Kalideres - Jakarta Barat<br/>11480 - Indonesia</p>
						</a>
						{/* I used the "a" tag instead of the "Link" tag because the link does not allow you to do something like this */}
						<a className="phone col-lg-12 col-md-4 col-sm-12" href="tel: +622122243333">
							<div className="col-1">
								<img src={phone} alt="Phone"/>
							</div>
							<p className="col-lg-11 col-md-6 col-sm-4">(+62) 21-2224 3333</p>
						</a>
					</div>
					<div className="send-footer-form__social col-lg-4 col-sm-9">
						<h4 className="title">STAY IN TOUCH</h4>
						<div className="col-12">
							<FooterForm/>
							<div className="col-12 field-wrapper-social">
								<Link className="social" to="/">
									<img src={facebook_webp} alt="facebook"/>
								</Link>
								<Link className="social" to="/">
									<img src={twitter_webp} alt="twitter"/>
								</Link>
								<Link className="social" to="/">
									<img src={dribbble_webp} alt="dribbble"/>
								</Link>
								<Link className="social" to="/">
									<img src={instagram_webp} alt="instagram"/>
								</Link>
								<Link className="social" to="/">
									<img src={google_webp} alt="google"/>
								</Link>
								<Link className="social" to="/">
									<img src={youtube_webp} alt="youtube"/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="inner-footer__content-wrapper second-footer-block col-12">
						<nav className="footer-links-wrapper col-lg-6 col-md-12 col-sm-12">
							<Link className="footer-link" to="">HELP</Link>
							<Link className="footer-link" to="">TERMS & CONDITION</Link>
							<Link className="footer-link" to="">PRIVACY</Link>
						</nav>
						<p className="copyright col-lg-6 col-md-12 col-sm-12">Copyright © 2021 - Tajem Creative</p>
					</div>
				</div>
			</div>
		</footer>)
	}
}

export default Footer;
