import React from 'react';
import './Testimonial.css'
import TestimonialCard from '../cards/Testimonial-card';
import userImg from '../../assets/seaferers/cj.png';
import userImg2 from '../../assets/seaferers/ken.png';
import userImg3 from  '../../assets/seaferers/silva.png';
import userImg4 from  '../../assets/seaferers/santos.png';

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

    const displayList = [...allTestimonials, ...allTestimonials];

    return (
        <section id="testimonial" className="testimonial-section">
            <div className="testimonial-header">
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