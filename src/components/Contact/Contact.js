import React, { Component } from "react";
import "../../App.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-form">
        <input className="name" placeholder="Name.." />
        <input className="email" placeholder="Email.." type="email" />
        <textarea className="text" placeholder="Message.."  />
        <div className="button-container">
        <button className="Submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default Contact;
