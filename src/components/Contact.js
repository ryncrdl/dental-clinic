import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Us</h1>

      <form id="contact-container">
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="e.g John Doe" id="name" />
        </div>
        <div className="field-container">
          <label htmlFor="subject">Subject</label>
          <input type="text" placeholder="e.g Request Refund" id="subject" />
        </div>
        <div className="field-container">
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Contact;
