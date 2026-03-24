import vesselLogo from '../../assets/logo_vessel.webp'

function Hero() {

  return (
    <section className="hero-section">
      <div className="hero-container container">
        <div className="hero-text">
          <h1>Dedicated provider of quality maritime solutions.</h1>
          <p>
            Serving Elite Principles. Empowering Seafarers. Traning for the Future.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Principal Inquiries</button>
            <button className="btn btn-secondary">Seafarer Jobs</button>
          </div>
        </div>
      </div>


      <div className="stats-card-container">
        <div className="stats-card">
          <div className="stat-item">
            <div className="stat-icon" aria-hidden="true">
              <img src={vesselLogo} alt="" />
            </div>
            <div className="stat-text">
              <div className="stat-value">600+</div>
              <div className="stat-label">Vessels Managed</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon" aria-hidden="true">
              <img src={vesselLogo} alt="" />
            </div>
            <div className="stat-text">
              <div className="stat-value">8,200+</div>
              <div className="stat-label">Deployed Seafarers</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon" aria-hidden="true">
              <img src={vesselLogo} alt="" />
            </div>
            <div className="stat-text">
              <div className="stat-value">1,500+</div>
              <div className="stat-label">Monthly Trainees</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero;