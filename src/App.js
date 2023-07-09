import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import "./index.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
