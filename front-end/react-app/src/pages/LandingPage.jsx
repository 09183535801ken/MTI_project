
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Hero from "../components/landing/Hero";
import Testimonial from "../components/landing/Testimonial";
import CTA from "../components/landing/CTA";

import landing_image1 from "../assets/crew.jpg";
import landing_image2 from "../assets/trainings.png";
import landing_image3 from "../assets/technical.jpg";

import '../App.css';

function LandingPage() {

  return (
    <div className="landing">
      <Header />

      <main>
        <Hero />

        <section id="features" className="feature-section">
          <div className="container landing-features">
            <div className="feature-card landing_image1">
              <img src={landing_image1} className="landing_image1" alt="Crewing" />
              <h3>Crewing</h3>
              <p>
                We provide skilled seafarers
                <br />and officers for efficient
                <br />crew management and
                <br />
                smooth vessel operations.
              </p>
            </div>
            <div className="feature-card landing_image2">
              <img src={landing_image2} className="landing_image2" alt="Training" />
              <h3>Training</h3>
              <p>
                We provide skilled seafarers,
                <br />
                reliable crewing,
                and essential
                <br /> training for safe and efficient
                <br /> vessel operations.
              </p>
            </div>
            <div className="feature-card landing_image3">
              <img src={landing_image3} className="landing_image3" alt="Technical Services" />
              <h3>Technical Services</h3>
              <p>
                We provide skilled seafarers,
                <br />
                reliable crewing,
                technical services,
                <br />
                and training for safe and efficient vessel operations.
              </p>
            </div>
          </div>

        </section>

        <section id="about" className="section muted">
          <div className="container">
            <h2>Built with React + Vite</h2>
            <p className="section-subtitle">
              Fast development, instant feedback, and a production-ready build
              pipeline out of the box.
            </p>
          </div>
        </section>

        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage;