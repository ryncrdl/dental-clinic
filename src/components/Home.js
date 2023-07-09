import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules"

import slide1 from "../assets/slide-1.jpg"
import slide2 from "../assets/slide-2.jpg"
import slide3 from "../assets/slide-3.jpg"
import slide4 from "../assets/slide-4.jpg"
import slide5 from "../assets/slide-5.jpg"

function Home() {
  return (
    <section id="home" >
      <div className="home-content content">
        <h1>Put on your Best Smile Everyday</h1>
        <p>
          Streamline Operations, Appointments, and Payments with our Dental
          Management System.
        </p>
        <button className="btn-booknow-home">Book Now</button>
      </div>
      <Swiper
        autoplay={{ delay: 3000 }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        id="slider"
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Slide 5" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Home
