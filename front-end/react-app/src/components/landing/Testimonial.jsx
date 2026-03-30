import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import TestimonialCard from '../cards/Testimonial-card';
import './Testimonial.css'

import userImg from '../../assets/seaferers/cj.png';
import userImg2 from '../../assets/seaferers/ken.png';
import userImg3 from '../../assets/seaferers/silva.png';
import userImg4 from '../../assets/seaferers/santos.png';

const allTestimonials = [
    {
        authorName: "Capt. Christian Abendan",
        authorRole: "MTI Master Mariner",
        imageSrc: userImg,
        quote: "They didn't just hire me; they built the Captain I am today. This support has shaped every mile of my career as a Captain."
    },
    {
        authorName: "Engr. Mark Ken Purisima",
        authorRole: "Professional MTI Seafarer",
        imageSrc: userImg2,
        quote: "Unmatched safety and support. After sailing with many fleets, this is clearly the best environment to grow."
    },
    {
        authorName: "Engr. Roberto Silva",
        authorRole: "Senior Master Mariner",
        imageSrc: userImg3,
        quote: "Navigating with this team is a point of pride. The commitment to excellence is visible in every department."
    },
    {
        authorName: "Engr. Leo Santos",
        authorRole: "Chief Engineer",
        imageSrc: userImg4,
        quote: "The technical support and modern fleet standards make my job efficient. It’s a great place to learn new skills."
    }
];

function Testimonial() {
    const reveal = useScrollReveal();
    const displayList = [...allTestimonials, ...allTestimonials];

    return (
        <section id="testimonial" className="testimonial-section scroll-reveal" ref={reveal}>
            <div className="testimonial-header">
                <div className="about-badge">
                    <span className="badge-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            width="18"
                            height="18"
                            fill="currentColor"
                            style={{ flexShrink: 0 }}
                        >
                            <path d="M320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192C337.7 192 352 177.7 352 160C352 142.3 337.7 128 320 128zM224 160C224 107 267 64 320 64C373 64 416 107 416 160C416 201.8 389.3 237.4 352 250.5L352 508.4C414.9 494.1 462.2 438.7 463.9 371.9L447.8 386C437.8 394.7 422.7 393.7 413.9 383.7C405.1 373.7 406.2 358.6 416.2 349.8L480.2 293.8C489.2 285.9 502.8 285.9 511.8 293.8L575.8 349.8C585.8 358.5 586.8 373.7 578.1 383.7C569.4 393.7 554.2 394.7 544.2 386L528 371.9C525.9 485 433.6 576 320 576C206.4 576 114.1 485 112 371.9L95.8 386.1C85.8 394.8 70.7 393.8 61.9 383.8C53.1 373.8 54.2 358.7 64.2 349.9L128.2 293.9C137.2 286 150.8 286 159.8 293.9L223.8 349.9C233.8 358.6 234.8 373.8 226.1 383.8C217.4 393.8 202.2 394.8 192.2 386.1L176.1 372C177.9 438.8 225.2 494.2 288 508.5L288 250.6C250.7 237.4 224 201.9 224 160.1z" />
                        </svg>
                        Testimonials
                    </span>
                </div>
                <p>1000+ Certified Professional Seafarers </p>
                <h2>What our seafarers say</h2>
            </div>

            <div className="testimonial-slider-viewport">
                <div className="testimonial-track">
                    {displayList.map((person, index) => (
                        <div className="testimonial-slide-item" key={index}>
                            <TestimonialCard
                                authorName={person.authorName}
                                authorRole={person.authorRole}
                                imageSrc={person.imageSrc}
                                quote={person.quote}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;