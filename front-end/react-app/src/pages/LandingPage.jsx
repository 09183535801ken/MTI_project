
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Hero from "../components/landing/Hero";
import Testimonial from "../components/landing/Testimonial";
import CTA from "../components/landing/CTA";
import Services from "../components/landing/Services";

import '../App.css';
import AboutUs from "../components/landing/AboutUs";


function LandingPage() {

  return (
    <div className="landing">
      <Header />

      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage;