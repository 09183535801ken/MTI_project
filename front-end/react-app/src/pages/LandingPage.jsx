
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Hero from "../components/landing/Hero";
import '../App.css';


function LandingPage() {
  


  return (
    <div className="landing">
      <Header />

      <main>
        <Hero />

        <section id="features" className="feature-section">
          <div className="container">
            <h2>Everything you need to launch</h2>
            <p className="section-subtitle">
              A simple starting point that you can customize to match your brand.
            </p>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>Responsive by default</h3>
                <p>Looks great on desktop, tablet, and mobile without extra work.</p>
              </div>
              <div className="feature-card">
                <h3>Clean React structure</h3>
                <p>Organized components that are easy to understand and extend.</p>
              </div>
              <div className="feature-card">
                <h3>Modern styling</h3>
                <p>Soft shadows, rounded corners, and a focus on readability.</p>
              </div>
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

        <section id="contact" className="section">
          <div className="container cta">
            <div>
              <h2>Ready to customize this page?</h2>
              <p className="section-subtitle">
                Start editing the text and components to make it your own.
              </p>
            </div>
            <button className="btn btn-primary">Start Editing</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage;