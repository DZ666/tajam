import React from 'react'
import { reduxForm, Field } from "redux-form"

class SendMessage extends React.Component {
  render () {
    return (
      <div className="send-data-form d-flex justify-content-center align-items-start pt-70 pb-70 col-lg-4 col-sm-12">
        <form onSubmit={this.props.handleSubmit} className="container inner-quotes d-flex justify-content-center align-items-start row col-12 row">
          <div className="title-wrapper w-100 d-flex justify-content-center align-items-start row pb-45 col-12">
            <h1 className="title dark-color ta-c p-0 pb-30 w-100">GIVE US A GOOD NEWS</h1>
          </div>
          <div className="fields">
            <div className="field">
              <Field type="text" component="input" name="name" placeholder="Name" required />
            </div>
            <div className="field">
              <Field type="email" component="input" name="email" placeholder="Email" required />
            </div>
            <div className="field">
              <Field type="text" component="input" name="subject" placeholder="Subject" required />
            </div>
            <div className="field">
              <Field name="message" component="textarea"  placeholder="Your Message" required />
            </div>
            <div className="field-submit">
              <input className="submit-btn" type="submit" value="SUBMIT" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const SendMessageForm = reduxForm({
  form: "SendMessage",
})(SendMessage)

export default SendMessageForm
