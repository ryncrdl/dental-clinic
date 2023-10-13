import useModalApp from "../utils/useModalApp"

import { useState, useEffect } from "react"
import axios from "axios"
import AOS from "aos"
import "aos/dist/aos.css"

function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://us-east-1.aws.data.mongodb-api.com/app/dental-pbjlw/endpoint/services"
      )
      .then((response) => {
        setServices(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])

  const { openDownloadApp } = useModalApp()

  const onOpenDownloadApp = () => {
    openDownloadApp()
  }

  AOS.init({
    delay: 1000,
    duration: 1000,
    offset: 120,
    mirror: false,
    anchorPlacement: "top-bottom",
  })

  return (
    <section id="services-container">
      <h1>Our Services</h1>
      <div className="services">
        {services &&
          services.map((service, index) => (
            <div className="service" key={index}>
              <div data-aos="fade-right">
                <h2>{service.Title}</h2>
                <p>{service.Description}</p>
                <button onClick={onOpenDownloadApp}>Book Now</button>
              </div>
              {service.image && (
                <img
                  src={`data:image/jpeg;base64,${service.image.Data}`}
                  alt="service-img"
                  data-aos="fade-left"
                />
              )}
            </div>
          ))}

        {!services && (
          <h3 style={{ textAlign: "center" }}>No Services Available.</h3>
        )}
      </div>
    </section>
  )
}

export default Services
