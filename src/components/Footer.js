import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div id="footer-container">
        <div>
          <h2>Contact info</h2>
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
        <div>
          <h2>Services</h2>
          <a href="#">Whitening</a>
          <a href="#">Braces</a>
          <a href="#">Porcelain</a>
          <a href="#">Flexible Dentures</a>
          <a href="#">Crown and Fixed Bridge</a>
          <a href="#">Jacket Crowns</a>
          <a href="#">Tooth Filling</a>
          <a href="#">Retainer</a>
          <a href="#">Dental Consultation</a>
        </div>
        <div>
          <h2>Links</h2>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#blogs">Blog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
