import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageSliderProps {
    images: string[];
    interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [images.length, interval]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    width={1920}
                    height={1080}
                    alt={`Slide ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
        </div>
    );
};

export default ImageSlider;
