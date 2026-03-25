import vesselLogo from '../../assets/logo_vessel.webp'
import CountUp from '../../components/animations/CountUp';

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
              <div className="stat-value">
                <CountUp
                  from={0}
                  to={600}
                  duration={2} 
                  separator=","
                />
                <span className="plus-sign">+</span>
              </div>
              <div className="stat-label">Vessels Managed</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon" aria-hidden="true">
              <img src={vesselLogo} alt="" />
            </div>
            <div className="stat-text">
              <div className="stat-value">
                <CountUp
                  from={0}
                  to={8200}
                  duration={2}
                  separator=","
                />
                <span className="plus-sign">+</span>
              </div>
              <div className="stat-label">Deployed Seafarers</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon" aria-hidden="true">
              <img src={vesselLogo} alt="" />
            </div>
            <div className="stat-text">
              <div className="stat-value">
              <CountUp
                  from={0}
                  to={1500}
                  duration={2}
                  separator=","
                />
                <span className="plus-sign">+</span>
              </div>
              <div className="stat-label">Monthly Trainees</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero;