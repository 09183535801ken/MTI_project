import React from 'react';
import './Testimonial-card.css';

const TestimonialCard = ({ 
  quote, 
  authorName, 
  authorRole, 
  imageSrc 
}) => {
  return (
    <div className="testi-card">
      <div className="testi-card__grid">
        {/* Left Side: Visuals */}
        <div className="testi-card__image-container">
          <div className="testi-card__glow"></div>
          <img 
            src={imageSrc} 
            alt={authorName} 
            className="testi-card__image" 
          />
        </div>
        {/* Right Side: Content */}
        <div className="testi-card__content">
          
          <div className="testi-card__body">
            {/* Quote Icon with Gradient Applied */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 640 640" 
              width="45" 
              height="45"
              fill="#34cc99 " /* This matches the ID in your IconGradient */
            >
              <path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z"/>
            </svg>
            <p>“{quote}”</p>
          </div>

          <footer className="testi-card__footer">
            <p className="authorName">{authorName}</p>
            <p>{authorRole}</p>
          </footer>
        </div>

      </div>
    </div>
  );
};

export default TestimonialCard;