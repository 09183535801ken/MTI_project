import { useEffect, useRef } from 'react';

/**
 * A custom hook to handle Intersection Observer logic
 * for scroll-reveal animations.
 */
export const useScrollReveal = (options = { threshold: 0.15 }) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, options);

   
        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [options]);

    
    const addToRefs = (el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    return addToRefs;
};