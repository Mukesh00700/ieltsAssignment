import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonial'
import Footer from './components/Footer'


function App() {

  return (
    <div className="antialiased">
      <Navbar />
        <main>
          <Hero />
          <Features />
          <Testimonials />
        </main>
      <Footer />
    </div>
)
}

export default App
