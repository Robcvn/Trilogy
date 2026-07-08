import React, { useState, useEffect } from "react";
import GalleryData from "../GalleryData";
import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";

export default function PropertyDisplay() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    // Use only first 5 properties for the featured carousel
    const featuredProperties = GalleryData.slice(0, 5);
    const currentProperty = featuredProperties[currentIndex];
    const totalProperties = featuredProperties.length;

    // Handle previous property
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? totalProperties - 1 : prevIndex - 1
        );
    };

    // Handle next property
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === totalProperties - 1 ? 0 : prevIndex + 1
        );
    };

    // Touch handlers for mobile swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrevious();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") handlePrevious();
            if (e.key === "ArrowRight") handleNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    return (
        <div 
            className="p-display-wrapper" 
            style={{ backgroundImage: `url(${currentProperty.img})` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="p-display-container u-container">
                <div className="p-display-content">
                    <div className="address">
                        <p className="p-title">{currentProperty.name}</p>
                        <div className="p-address">
                            <p>{currentProperty.address}</p>
                            <p>{currentProperty.city}</p>
                        </div>
                    </div>
                    <div className="p-buttons">
                        <a href="#" className="view-prop-link">VIEW PROPERTY</a>
                        <div className="p-display-btn-container">
                            <button 
                                className="left-arrow" 
                                onClick={handlePrevious}
                                aria-label="Previous property"
                            >
                                <img className="left-arrow" src={arrowLeft} alt="" />
                            </button>
                            <div className="btn-text-container">
                                <span className="btn-text">{currentIndex + 1}</span>
                                <span className="btn-text">/</span>
                                <span className="btn-text">{totalProperties}</span>
                            </div>
                            <button 
                                className="right-arrow" 
                                onClick={handleNext}
                                aria-label="Next property"
                            >
                                <img className="right-arrow" src={arrowRight} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="p-buttons-mobile">
                        <a href="#" className="view-prop-link-mobile">VIEW PROPERTY</a>
                        <div className="p-display-btn-container">
                            <button 
                                className="left-arrow" 
                                onClick={handlePrevious}
                                aria-label="Previous property"
                            >
                                <img className="left-arrow" src={arrowLeft} alt="" />
                            </button>
                            <button 
                                className="right-arrow" 
                                onClick={handleNext}
                                aria-label="Next property"
                            >
                                <img className="right-arrow" src={arrowRight} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}