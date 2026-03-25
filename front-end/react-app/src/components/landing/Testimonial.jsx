import React, { useState } from 'react';
import TestimonialCard from '../cards/Testimonial-card';
import userImg from '../../assets/cj.png';
import userImg2 from '../../assets/ken.png';
// Import more images if you have them for the second slide

const testimonialGroups = [
    [
        {
            authorName: "Capt. Christian Abendan",
            authorRole: "MTI Master Mariner",
            imageSrc: userImg,
            quote: "They didn't just hire me; they built the Captain I am today. This support has shaped every mile of my career at sea."
        },
        {
            authorName: "Mark Ken Purisima",
            authorRole: "Professional MTI Seafarer",
            imageSrc: userImg2,
            quote: "Unmatched safety and support. After sailing with many fleets, this is clearly the best environment for any seafarer to grow."
        }
    ],
    // Slide 2
    [
        {
            authorName: "Capt. Roberto Silva",
            authorRole: "Senior Master Mariner",
            imageSrc: userImg, 
            quote: "Navigating with this team is a point of pride. The commitment to excellence is visible in every department."
        },
        {
            authorName: "Engr. Leo Santos",
            authorRole: "Chief Engineer",
            imageSrc: userImg2,
            quote: "The technical support and modern fleet standards make my job efficient. It’s a great place for engineers to lead."
        }
    ],

     // Slide 3
     [
        {
            authorName: "Capt. Roberto Silva",
            authorRole: "Senior Master Mariner",
            imageSrc: userImg, 
            quote: "Navigating with this team is a point of pride. The commitment to excellence is visible in every department."
        },
        {
            authorName: "Engr. Leo Santos",
            authorRole: "Chief Engineer",
            imageSrc: userImg2,
            quote: "The technical support and modern fleet standards make my job efficient. It’s a great place for engineers to lead."
        }
    ],
];

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section id="testimonial" className="testimonial-section">
            <div className="testimonial-header">
                <h2>What our seafarers say</h2>
                <p>Real stories from the people who keep our fleet moving. Discover why our crew chooses to sail with us year after year.
                <br></br>Their experiences define our commitment to excellence at sea.
                </p>
            </div>

            {/* The KEY here triggers the animation every time index changes */}
            <div className="testimonial-container fade-in" key={currentIndex}>
                {testimonialGroups[currentIndex].map((person, index) => (
                    <TestimonialCard
                        key={index}
                        authorName={person.authorName}
                        authorRole={person.authorRole}
                        imageSrc={person.imageSrc}
                        quote={person.quote}
                    />
                ))}
            </div>

            <div className="testimonial-pagination">
                {testimonialGroups.map((_, index) => (
                    <input
                        key={index}
                        type="radio"
                        name="testimonial-slide"
                        checked={currentIndex === index}
                        onChange={() => setCurrentIndex(index)}
                        className="testimonial-radio"
                    />
                ))}
            </div>
        </section>
    );
}

export default Testimonial;