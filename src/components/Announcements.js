import { useState, useEffect } from "react"
import axios from "axios"

import AOS from "aos"
import "aos/dist/aos.css"

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://us-east-1.aws.data.mongodb-api.com/app/dental-pbjlw/endpoint/announcements"
      )
      .then((response) => {
        setAnnouncements(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])

  AOS.init({
    duration: 1000,
    offset: 0,
  })

  return (
    <section id="announcements-container">
      <h1>Announcements</h1>
      <div className="announcements">
        {announcements &&
          announcements.map((announcement, index) => (
            <div className="announcement" key={index} data-aos="fade-left">
              <div>
                <h2>{announcement.Title}</h2>
                <p>{announcement.Context}</p>
              </div>
              {announcement.image ? (
                <img
                  src={`data:image/jpeg;base64,${announcement.image.Data}`}
                  alt="announcement-img"
                />
              ) : (
                <h2>No IMAGE</h2>
              )}
            </div>
          ))}
      </div>
    </section>
  )
}

export default Announcements
