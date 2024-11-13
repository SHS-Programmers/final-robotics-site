import React, { useState, useEffect } from 'react';
import "./ImageSlider.css"

interface ImageSliderProps {
    images: string[];
    interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set up an interval to update the current image index
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [currentIndex, images.length, interval]);

    return (
        <div className="image-slider">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`slide-image ${index === currentIndex ? 'active' : 'inactive'}`}
                />
            ))}
        </div>
    );
};

export default ImageSlider;
