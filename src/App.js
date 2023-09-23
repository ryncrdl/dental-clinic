import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import DownloadApp from "./components/DownloadApp"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import "./index.css"

function App() {
  return (
    <div className="App">
      <DownloadApp />
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
