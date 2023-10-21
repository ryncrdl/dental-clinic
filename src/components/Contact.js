import React from "react"
import { useState } from "react"
import emailjs from "emailjs-com"

const Contact = () => {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      to_email: "capstone12023@gmail.com",
      from_name: name,
      message: message,
      subject: subject,
    }

    emailjs
      .send(
        "service_qi79bit",
        "template_ue90ss9",
        templateParams,
        "7jeeze9cvDZjVZ8Bo"
      )
      .then((response) => {
        console.log("Email sent successfully:", response)
        alert("Email sent successfully")
        setName("")
        setSubject("")
        setMessage("")
      })
      .catch((error) => {
        console.error("Email error:", error)
        alert("Error sending email")
      })
  }

  return (
    <section id="contact">
      <h1>Contact Us</h1>

      <form id="contact-container" onSubmit={handleSubmit}>
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="e.g John Doe"
            id="from_name"
            required
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="subject" id="subject">
            Subject
          </label>
          <input
            type="text"
            placeholder="e.g Request Refund"
            id="subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.currentTarget.value)}
          />
        </div>
        <div className="field-container">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Contact
