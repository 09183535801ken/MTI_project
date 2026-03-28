import React from 'react';
import './Services.css';

const servicesData = [
    {
        id: "01",
        title: "Manage your training and deployment online!",
        description: "Our integrated platform provides tailored tools for aspiring and existing marines to manage their entire career lifecycle. Within your personal MTI 'Seaman Portal,' you can track your current course progress, apply for advanced certifications, and build a complete digital dossier.",
        subText: "The most direct route to a partnered vessel is through our deployment network. Monitor exclusive officer and crew vacancies directly.",
        image: "https://via.placeholder.com/500x300", 
        chartIcon: true 
    },
    {
        id: "02",
        title: "Data Integrity and Confidentiality",
        description: "At MTI, your professional data remains secure and controlled. We prioritize the absolute confidentiality of your academic records, licenses, and personal details. Unlike open job boards, your profile is only shared with verified partnered vessels.",
        subText: "To make your candidacy visible, simply adjust your profile status to 'Ready for Deployment' under specific vacancy types and click 'Apply'.",
        image: "https://via.placeholder.com/500x300", 
        lockIcon: true 
    },
    {
        id: "03",
        title: "Direct Deployment to Partnered Fleets",
        description: "Your journey doesn't end at graduation. MTI maintains exclusive placement agreements with global shipping leaders. Once certified, your digital profile is instantly accessible to fleet managers looking for sea-ready officers and crew.",
        subText: "We bridge the gap between maritime education and active duty. Track your deployment status, vessel assignments, and contract details all within your unified dashboard.",
        image: "https://via.placeholder.com/500x300",
        shipIcon: true 
    }
];

function Services() {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="service-header">
                    <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi fuga labore, soluta vero alias architecto reiciendis voluptatum delectus repudiandae consequatur rem asperiores veniam repellat cum suscipit recusandae consectetur dolorum.</p>
                </div>
                {servicesData.map((service, index) => (
                    <div 
                        key={service.id} 
                        className={`service-row ${index % 2 !== 0 ? 'row-reverse' : ''}`}
                    >
                        <div className="service-visual">
                            <div className="image-wrapper">
                                <img src={service.image} alt={service.title} className="mockup-img" />
                                {service.chartIcon && <div className="floating-icon chart-icon">📈</div>}
                                {service.lockIcon && <div className="floating-icon lock-icon">🔒</div>}
                            </div>
                        </div>
                        <div className="service-content">
                            <span className="service-number">{service.id}</span>
                            <h2 className="service-title">{service.title}</h2>
                            <p className="service-description">{service.description}</p>
                            <p className="service-subtext">{service.subText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;