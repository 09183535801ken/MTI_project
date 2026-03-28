
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Hero from "../components/landing/Hero";
import Testimonial from "../components/landing/Testimonial";
import CTA from "../components/landing/CTA";
import Services from "../components/landing/Services";

import '../App.css';


function LandingPage() {

  return (
    <div className="landing">
      <Header />

      <main>
        <Hero />

      
        <section id="about" className="section muted">
          <div className="container">
            <h2>Built with React + Vite</h2>
            <p className="section-subtitle">
              Fast development, instant feedback, and a production-ready build
              pipeline out of the box.
            </p>
          </div>
        </section>
        <Services />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage;