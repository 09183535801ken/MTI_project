import Header from './components/header.jsx'
import './App.css'

function Landing() {
  return (
    <div className="landing">
      <Header />

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1>Create a beautiful landing page in minutes</h1>
              <p>
                Showcase your product, grow your audience, and convert visitors
                with a clean, modern landing page built with React.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-ghost">Learn More</button>
              </div>
              <p className="hero-note">No credit card required. Cancel anytime.</p>
            </div>

            <div className="hero-card">
              <div className="hero-card-header">Live Preview</div>
              <div className="hero-card-body">
                <div className="preview-bar" />
                <div className="preview-content">
                  <div className="preview-line long" />
                  <div className="preview-line" />
                  <div className="preview-line" />
                  <div className="preview-pill-row">
                    <span className="preview-pill" />
                    <span className="preview-pill" />
                    <span className="preview-pill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
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

      <footer className="site-footer">
        <div className="container footer-content">
          <span>© {new Date().getFullYear()} MyLanding. All rights reserved.</span>
          <span className="footer-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Landing
