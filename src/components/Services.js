import toothExtraction from "../assets/tooth-extraction.jpg"
import braces from "../assets/braces.jpg"
import oral from "../assets/oral-prophylaxis.jpg"
import denture from "../assets/denture.jpg"
import crown from "../assets/crown-and-fixed-bridge.jpg"
import rootCanal from "../assets/root-canal-treatment.jpg"
import toothFilling from "../assets/tooth-filling.jpg"
import pediatrix from "../assets/pediatrix-dentistry.jpg"
import dentalConsultation from "../assets/dental-consultation.jpg"
import wisdom from "../assets/wisdom-tooth-extraction.jpg"

function Services() {
  return (
    <section id="services-container">
      <h1>Our Services</h1>
      <div className="services">
        <div className="service">
          <div>
            <h2>Tooth Extraction</h2>
            <p>
              Our skilled dentists perform tooth extractions with precision and
              care, ensuring a comfortable experience. Whether it's a severely
              decayed tooth, an impacted wisdom tooth, or any other dental issue
              requiring extraction, we provide reliable and efficient treatment.
            </p>
            <button>Book Now</button>
          </div>
          <img src={toothExtraction} alt="service-img" />
        </div>
        <div className="service">
          <div>
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
          <img src={braces} alt="service-img" />
        </div>
        <div className="service">
          <div>
            <h2>Oral Prophylaxis</h2>
            <p>
              We offer thorough oral prophylaxis services, including
              professional dental cleaning, to maintain optimal oral health. Our
              skilled hygienists remove plaque, tartar, and stains, reducing the
              risk of cavities and gum disease while leaving your teeth feeling
              fresh and polished.
            </p>
            <button>Book Now</button>
          </div>
          <img src={oral} alt="service-img" />
        </div>
        <div className="service">
          <div>
            <h2>Denture</h2>
            <p>
              Our denture services provide effective solutions for missing
              teeth, restoring your smile and improving functionality. We offer
              a range of denture options, including full dentures and partial
              dentures, carefully crafted to fit comfortably and enhance your
              overall dental well-being.
            </p>
            <button>Book Now</button>
          </div>
          <img src={denture} alt="service-img" />
        </div>
        <div className="service">
          <div>
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
          <img src={crown} alt="service-img" />
        </div>
        <div className="service">
          <div>
            <h2>Root Canal Treatment</h2>
            <p>
              We provide professional root canal treatment to save and restore
              severely infected or damaged teeth. Our experienced endodontists
              employ advanced techniques and modern equipment to ensure the
              procedure is as comfortable and effective as possible.
            </p>
            <button>Book Now</button>
          </div>
          <img src={rootCanal} alt="service-img" />
        </div>
        <div className="service">
          <div>
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
          <img src={toothFilling} alt="service-img" />
        </div>
        <div className="service">
          <div>
            <h2>Pediatrix Dentistry</h2>
            <p>
              Our team specializes in pediatric dentistry, catering to the
              unique oral health needs of children. With a gentle and friendly
              approach, we provide comprehensive dental care for kids, ensuring
              their smiles remain healthy and bright.
            </p>
            <button>Book Now</button>
          </div>
          <img src={pediatrix} alt="service-img" />
        </div>
        <div className="service">
          <div>
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
          <img src={dentalConsultation} alt="service-img" />
        </div>
        <div className="service">
          <div>
            <h2>Wisdom Tooth Extraction</h2>
            <p>
              Our experienced dentists perform wisdom tooth extractions with
              precision and expertise. Whether your wisdom teeth are impacted,
              causing discomfort, or affecting the alignment of your other
              teeth, we provide safe and effective removal to alleviate pain and
              preserve your oral health.
            </p>
            <button>Book Now</button>
          </div>
          <img src={wisdom} alt="service-img" />
        </div>
      </div>
    </section>
  )
}

export default Services
