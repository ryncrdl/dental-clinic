import AOS from "aos"
import "aos/dist/aos.css"

const About = () => {
  AOS.init({
    delay: 1000,
    duration: 1000,

    offset: 120,
    mirror: false,
    anchorPlacement: "top-bottom",
  })

  return (
    <section id="about">
      <h1>About</h1>

      <div id="about-container">
        <div data-aos="fade-left">
          <h2>Dental Clinic</h2>
          <p>
            In today's fast-paced world, technology continues to revolutionize
            various industries, and healthcare is no exception. Dentistry, a
            critical aspect of healthcare, has also seen significant
            advancements in the form of dental applications. These innovative
            tools not only improve the overall patient experience but also
            streamline the workflow for dental professionals. We will explore
            the essential features of a dental application and how it benefits
            both patients and dental practitioners.Dental applications have
            emerged as a transformative tool in the healthcare industry,
            enhancing the dental care experience for both patients and
            practitioners. These apps offer a range of essential features,
            including appointment scheduling, user verification for security,
            access to dental services, and the ability to select specific
            doctors and schedules. Furthermore, they provide a seamless
            sign-up/sign-in process and often come with a desktop counterpart
            for efficient data management. The benefits of dental applications
            are extensive. They provide convenience by enabling patients to book
            appointments easily, saving time and effort. Dental professionals
            benefit from improved time management, streamlined workflows, and
            enhanced communication with patients. Data security is a top
            priority, ensuring the protection of sensitive patient information.
            It's important to note that this website showcases the remarkable
            capstone project developed by students from Colegio De Montalban
            (CDM): Ryan Cordial, Rojames Carl Quicoy, John Mark Arroyo, Jecyl
            Tortosa, Ezrha Mae Bongato Espiritu, and Julie Ann Labajan. Their
            innovative dental application represents a significant contribution
            to the field of healthcare technology, promising a more efficient
            and patient-centered future in dentistry.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
