import whitening from "../assets/whitening.jpg";
import braces from "../assets/braces.jpg";
import porcelain from "../assets/porcelain.jpg";
import denture from "../assets/denture.jpg";
import crown from "../assets/crown-and-fixed-bridge.jpg";
import jacketCrown from "../assets/jacketCrown.jpg";
import toothFilling from "../assets/tooth-filling.jpg";
import retainer from "../assets/retainer.jpg";
import dentalConsultation from "../assets/dental-consultation.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  AOS.init({
    delay: 1000,
    duration: 1000,

    offset: 120,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  return (
    <section id="services">
      <h1>Our Services</h1>
      <div className="services">
        <div className="service">
          <div data-aos="fade-right">
            <h2>Whitening</h2>
            <p>
              Our professional teeth whitening service is designed to brighten
              your smile and remove stains and discoloration caused by factors
              such as coffee, tea, tobacco, and aging. Using safe and effective
              techniques, we can help you achieve a noticeably whiter smile,
              enhancing your confidence and overall appearance.
            </p>
            <button>Book Now</button>
          </div>
          <img src={whitening} alt="service-img" data-aos="fade-left" />
        </div>
        <div className="service">
          <div data-aos="fade-left">
            <h2>Braces</h2>
            <p>
              Our orthodontic services include the application and management of
              braces, helping you achieve a straighter and more aligned smile.
              Our experienced orthodontists work closely with patients,
              customizing treatment plans to address individual needs and create
              beautiful, properly aligned teeth.
            </p>
            <button>Book Now</button>
          </div>
          <img src={braces} alt="service-img" data-aos="fade-right" />
        </div>
        <div className="service">
          <div data-aos="fade-right">
            <h2>Porcelain</h2>
            <p>
              Our porcelain service offers high-quality dental restorations
              using porcelain materials. Whether you need a crown, veneers,
              inlays, or onlays, our skilled dental professionals will craft
              custom-made porcelain restorations that match the color, shape,
              and size of your natural teeth. Porcelain restorations provide
              durability, aesthetics, and functionality, giving you a
              natural-looking and long-lasting smile.
            </p>
            <button>Book Now</button>
          </div>
          <img src={porcelain} alt="service-img" data-aos="fade-left" />
        </div>
        <div className="service">
          <div data-aos="fade-left">
            <h2>Flexible Dentures</h2>
            <p>
              Our denture services provide effective solutions for missing
              teeth, restoring your smile and improving functionality. We offer
              a range of denture options, including full dentures and partial
              dentures, carefully crafted to fit comfortably and enhance your
              overall dental well-being.
            </p>
            <button>Book Now</button>
          </div>
          <img src={denture} alt="service-img" data-aos="fade-right" />
        </div>
        <div className="service">
          <div data-aos="fade-right">
            <h2>Crown and Fixed Bridge</h2>
            <p>
              Our skilled dentists specialize in crown and fixed bridge
              procedures, helping to restore damaged or missing teeth. Using
              high-quality materials, we create durable and natural-looking
              crowns and fixed bridges that improve both the appearance and
              function of your smile.
            </p>
            <button>Book Now</button>
          </div>
          <img src={crown} alt="service-img" data-aos="fade-left" />
        </div>
        <div className="service">
          <div data-aos="fade-left">
            <h2>Jacket Crowns</h2>
            <p>
              Jacket crowns, also known as full-coverage crowns, are a versatile
              dental solution to restore damaged or weakened teeth. Our jacket
              crown service involves placing custom-made ceramic or porcelain
              caps over the entire tooth, providing protection, strength, and
              aesthetic improvement. With our precise craftsmanship, we can
              create jacket crowns that blend seamlessly with your existing
              teeth, restoring both form and function.
            </p>
            <button>Book Now</button>
          </div>
          <img src={jacketCrown} alt="service-img" data-aos="fade-right" />
        </div>
        <div className="service">
          <div data-aos="fade-right">
            <h2>Tooth Filling</h2>
            <p>
              Our dental experts utilize tooth-colored fillings to treat
              cavities and repair minor tooth damage. We prioritize both the
              aesthetics and functionality of your smile, offering durable and
              natural-looking fillings that blend seamlessly with your existing
              teeth.
            </p>
            <button>Book Now</button>
          </div>
          <img src={toothFilling} alt="service-img" data-aos="fade-left" />
        </div>
        <div className="service">
          <div data-aos="fade-left">
            <h2>Retainer</h2>
            <p>
              Our retainer service aims to maintain the alignment and position
              of your teeth after orthodontic treatment. Whether you've had
              braces or clear aligners, wearing a retainer is crucial to prevent
              teeth from shifting back to their original positions. We offer
              removable and fixed retainers tailored to your needs, ensuring
              that your beautiful smile stays intact for years to come. Our
              expert team will guide you on proper retainer usage and care to
              maximize its effectiveness.
            </p>
            <button>Book Now</button>
          </div>
          <img src={retainer} alt="service-img" data-aos="fade-right" />
        </div>
        <div className="service">
          <div data-aos="fade-right">
            <h2>Dental Consultation</h2>
            <p>
              Our dental consultation services offer personalized advice and
              guidance on various oral health concerns. Our knowledgeable
              dentists assess your dental condition, discuss treatment options,
              and answer any questions you may have, empowering you to make
              informed decisions about your dental care.
            </p>
            <button>Book Now</button>
          </div>
          <img
            src={dentalConsultation}
            alt="service-img"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
