import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <section id="about">
      <h1>About</h1>

      <div id="about-container">
        <img src={logo} alt="about-img" />
        <div>
          <h2>Alberba Dental Clinic</h2>
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
