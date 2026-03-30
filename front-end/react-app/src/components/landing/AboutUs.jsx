import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './AboutUs.css';

import MainImg from '../../assets/images/mti-main.png';
import SideImg1 from '../../assets/images/mti-side1.png';
import SideImg2 from '../../assets/images/mti-side2.png';

export default function AboutUs() {
   
    const reveal = useScrollReveal();

    return (
        <section className="aboutUs-section scroll-reveal" id="about" ref={reveal}>
            <div className="container about-container">
                <div className="about-left">
                    <div className="about-badge">
                        <span className="badge-tag">MTI Overview</span>
                    </div>

                    <h2 className="about-title">
                        Training Excellence,<br />
                        Global Deployment
                    </h2>

                    <div className="about-description">
                        <p>
                            Tutela Marine Inc. (MTI) streamlines the journey from classroom to cockpit.
                            We provide the essential link between technical mastery and
                            international maritime deployment.
                        </p>
                        <p>
                            By integrating STCW-compliant training with our vast network of
                            shipping partners, we ensure our seafarers are certified,
                            mission-ready, and prioritized for the world’s leading fleets.
                        </p>
                    </div>
                    <button className="btn service-cta-btn">
                        Explore Services
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="about-right">
                    <div className="about-grid">
                        <div className="grid-main">
                            <img src={MainImg} alt="Maritime Vessel" />
                        </div>
                        <div className="grid-side">
                            <div className="side-top">
                                <img src={SideImg1} alt="Logistics" />
                            </div>
                            <div className="side-bottom">
                                <img src={SideImg2} alt="Deployment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}