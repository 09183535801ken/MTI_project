import React, { useEffect, useRef } from 'react';
import './Services.css';

import Service1 from '../../assets/service1.png';
import Service2 from '../../assets/service2.png';
import Service3 from '../../assets/service3.png';

const servicesData = [
    {
        id: "01",
        title: "Apply for Training",
        description: "Begin your maritime career by enrolling in our world-class academy. We offer comprehensive deck and engineering programs designed to take you from a beginner to a sea-ready professional through hands-on instruction.",
        image: Service1,
        ctaText: "Enroll Now",
        link: "",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                <path d="M623.1 136.9l-282.7-101.2c-13.7-4.9-28.8-4.9-42.5 0L16.9 136.9C6.5 140.6 0 150.4 0 161.5s6.5 20.9 16.9 24.6l103.1 36.9V320c0 44.2 71.6 80 160 80s160-35.8 160-80v-97l103.1-36.9c10.4-3.7 16.9-13.5 16.9-24.6s-6.5-20.9-16.9-24.6zM280 352c-44.2 0-80-17.9-80-40V245.5l71.4 25.5c8.8 3.1 18.2 4.7 27.7 4.7s18.9-1.6 27.7-4.7l71.4-25.5V312c0 22.1-35.8 40-80 40z" />
            </svg>
        )
    },
    {
        id: "02",
        title: "Get License and Certification",
        description: "Ensure you are globally compliant with mandatory IMO and STCW-certified qualifications. We facilitate the entire examination and licensing process, keeping all your digital credentials secure and ready for verification.",
        image: Service2,
        ctaText: "Check Eligibility",
        link: "",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 64L64 145.2V140c.4 82.4 35.1 241.4 192 313.4C412.9 381.4 447.6 222.4 448 140v-5.2L256 64zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
        )
    },
    {
        id: "03",
        title: "Deployment with Partners",
        description: "Get assigned to active duty through our exclusive network of partnered shipping vessels. Once certified, your profile is prioritized for recruitment, bridging the gap between education and high-stakes maritime employment.",
        image: Service3,
        ctaText: "View Vacancies",
        link: "",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                <path d="M272 64C245.5 64 224 85.5 224 112L224 128L208 128C163.8 128 128 163.8 128 208L128 316.8L106.4 325.4C91.6 331.3 83.9 347.8 89 362.9C99.4 394.2 115.8 422.2 136.7 446C156.8 436.8 178.4 432.1 200 432C233.1 431.8 266.3 442.2 294.4 463.4L296 464.6L296 249.6L192 291.2L192 208C192 199.2 199.2 192 208 192L432 192C440.8 192 448 199.2 448 208L448 291.2L344 249.6L344 464.6L345.6 463.4C373.1 442.7 405.5 432.2 438 432C460.3 431.9 482.6 436.5 503.3 446C524.2 422.3 540.6 394.2 551 362.9C556 347.7 548.4 331.3 533.6 325.4L512 316.8L512 208C512 163.8 476.2 128 432 128L416 128L416 112C416 85.5 394.5 64 368 64L272 64zM403.4 540.1C424.7 524 453.3 524 474.6 540.1C493.6 554.5 516.5 568.3 541.8 573.4C568.3 578.8 596.1 574.2 622.5 554.3C633.1 546.3 635.2 531.3 627.2 520.7C619.2 510.1 604.2 508 593.6 516C578.7 527.2 565 529.1 551.3 526.3C536.4 523.3 520.4 514.4 503.5 501.7C465.1 472.7 413 472.7 374.5 501.7C350.5 519.8 333.8 528 320 528C306.2 528 289.5 519.8 265.5 501.7C227.1 472.7 175 472.7 136.5 501.7C114.9 518 95.2 527.5 77.6 527.4C68 527.3 57.7 524.4 46.4 515.9C35.8 507.9 20.8 510 12.8 520.6C4.8 531.2 7 546.3 17.6 554.3C36.7 568.7 57 575.3 77.4 575.4C111.3 575.6 141.7 558 165.5 540.1C186.8 524 215.4 524 236.7 540.1C260.9 558.4 289 576 320.1 576C351.2 576 379.2 558.3 403.5 540.1z" />
            </svg>
        )
    }
];

function Services() {

    /* To do: Make this as a reusable function */
    const rowRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, observerOptions);

        rowRefs.current.forEach((row) => {
            if (row) observer.observe(row);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="services-section">
            <div className="services-header">
                <p>What we offer</p>
                <h2>Services</h2>
            </div>
            <div className="container services-container">
                <div className="services-content">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            ref={(el) => (rowRefs.current[index] = el)}
                            className={`service-row scroll-reveal ${index % 2 !== 0 ? 'row-reverse' : ''}`}
                        >
                            <div className="service-visual">
                                <div className="image-wrapper">
                                    <img src={service.image} alt={service.title} className="mockup-img" />
                                </div>
                            </div>
                            <div className="service-content">
                                <div className="service-icon-box">
                                    {service.icon}
                                </div>
                                <h2 className="service-title">{service.title}</h2>
                                <p className="service-description">{service.description}</p>
                                <a href={service.link} className="service-cta-btn">
                                    {service.ctaText}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;