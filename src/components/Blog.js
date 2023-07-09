import service1 from "../assets/service-1.jpg"

const Blog = () => {
  return (
    <section id="blog-container">
      <h1>Blog</h1>
      <div className="blogs">
        <div className="blog">
          <div>
            <h2>Dental Cleaning and Check-up</h2>
            <p>
              Regular dental cleaning and check-up services are essential for
              maintaining good oral health. Our skilled dental professionals
              will perform a thorough cleaning of your teeth, removing plaque,
              tartar, and stains.
            </p>
            <a href="#read-more">Read more</a>
          </div>
          <img src={service1} alt="service-img" />
        </div>
        <div className="blog">
          <div>
            <h2>Dental Cleaning and Check-up</h2>
            <p>
              Regular dental cleaning and check-up services are essential for
              maintaining good oral health. Our skilled dental professionals
              will perform a thorough cleaning of your teeth, removing plaque,
              tartar, and stains.
            </p>
            <a href="#read-more">Read more</a>
          </div>
          <img src={service1} alt="service-img" />
        </div>
        <div className="blog">
          <div>
            <h2>Dental Cleaning and Check-up</h2>
            <p>
              Regular dental cleaning and check-up services are essential for
              maintaining good oral health. Our skilled dental professionals
              will perform a thorough cleaning of your teeth, removing plaque,
              tartar, and stains.
            </p>
            <a href="#read-more">Read more</a>
          </div>
          <img src={service1} alt="service-img" />
        </div>
      </div>
    </section>
  )
}

export default Blog
