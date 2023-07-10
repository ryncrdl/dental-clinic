import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init({
    delay: 1000,
    duration: 1000,

    offset: 120,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  return (
    <section id="about">
      <h1>About</h1>

      <div id="about-container">
        <img src={logo} alt="about-img" data-aos="fade-right" />
        <div data-aos="fade-left">
          <h2>Alberba Dental Clinic</h2>
          <p>
            At Alberba Dental Clinic, we are dedicated to providing exceptional
            dental care and creating beautiful smiles. Our experienced team
            offers a comprehensive range of services, from routine check-ups to
            advanced treatments. With state-of-the-art facilities and a focus on
            patient comfort, we prioritize your well-being. Contact us today to
            experience the difference and achieve optimal oral health.
          </p>

          <span>
            <FontAwesomeIcon icon={faMapMarker} />
            Kasiglahan Blk 10, Lot 1A, Phase 1B San Jose, Rodriguez, Rizal
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} />
            0917 846 1563
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} />
            0921 719 9438
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
