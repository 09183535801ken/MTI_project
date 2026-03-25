import vesselLogo from '../../assets/logo_vessel.webp'
import deploy from '../../assets/people.png'
import train from '../../assets/logo_vessel.webp'
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
          <div className="stat-item  stat-item1">
            <img src={vesselLogo} alt="" aria-hidden="true" className="img1" />
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

          <div className="stat-item stat-item2">
            <img src={deploy} alt="" aria-hidden="true" className="img2" />
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

          <div className="stat-item stat-item3">
            <img src={train} alt="" aria-hidden="true" className="img3" />
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