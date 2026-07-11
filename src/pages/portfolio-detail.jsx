import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import '../App.css';
import GalleryData from '../GalleryData';
import arrowLeft from '../assets/images/arrow-left.svg';
import arrowRight from '../assets/images/arrow-right.svg';
import arrowLongDown from '../assets/images/arrow-long-down.svg';

export function PortfolioDetail() {
    const { id } = useParams();
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [progress, setProgress] = useState({ left: 0, width: 1 });
    const carouselRef = useRef(null);

    const currentIndex = GalleryData.findIndex(prop => prop.slug === id);
    const property = currentIndex >= 0 ? GalleryData[currentIndex] : null;
    const galleryLength = property ? property.gallery.length : 0;

    // scroll-progress indicator under the carousel
    const updateProgress = useCallback(() => {
        const el = carouselRef.current;
        if (!el || el.scrollWidth === 0) return;
        setProgress({
            left: el.scrollLeft / el.scrollWidth,
            width: Math.min(1, el.clientWidth / el.scrollWidth),
        });
    }, []);

    useEffect(() => {
        updateProgress();
        window.addEventListener('resize', updateProgress);
        return () => window.removeEventListener('resize', updateProgress);
    }, [updateProgress, id]);

    // fresh property page starts with the lightbox closed
    useEffect(() => {
        setLightboxIndex(null);
    }, [id]);

    // lightbox: keyboard navigation + background scroll lock
    useEffect(() => {
        if (lightboxIndex === null || galleryLength === 0) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + galleryLength) % galleryLength);
            if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % galleryLength);
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [lightboxIndex, galleryLength]);

    // Unknown slug: send the visitor back to the portfolio instead of
    // silently showing the wrong property
    if (currentIndex < 0) {
        return <Navigate to="/portfolio" replace />;
    }

    const previousProperty = currentIndex > 0 ? GalleryData[currentIndex - 1] : null;
    const nextProperty = currentIndex < GalleryData.length - 1 ? GalleryData[currentIndex + 1] : null;

    const scrollToGallery = () => {
        const gallery = document.getElementById('property-gallery');
        if (gallery) gallery.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    return (
        <div className='port-detail-wrapper'>
            {/* Hero Image */}
            <div className='port-detail-hero' style={{ backgroundImage: `url(${property.img})` }}>
            </div>

            {/* Main Content */}
            <div className='port-detail-main u-container'>
                <div className='port-detail-header'>
                    <span className='port-detail-category overline-xs-medium'>{property.category}</span>
                    <h1 className='port-detail-title heading-4xl-book'>{property.name}</h1>
                </div>
                <div className='port-detail-divider'></div>

                <div className='port-detail-content-grid'>
                    {/* Left Column */}
                    <div className='port-detail-left-col'>
                        <div className='port-detail-info-block'>
                            <p className='port-detail-address-text'>{property.address}</p>
                            <p className='port-detail-address-text'>{property.city}</p>
                        </div>

                        <div className='port-detail-col-divider'></div>

                        <div className='port-detail-info-block'>
                            <span className='overline-2xs-medium port-detail-label'>UNITS</span>
                            <p className='port-detail-units serif-2xl-reg'>{property.units}</p>
                        </div>
                    </div>

                    {/* Right Column - Description */}
                    <div className='port-detail-right-col'>
                        <p className='port-detail-lede'>{property.description[0]}</p>
                        {property.description.slice(1).map((paragraph, index) => (
                            <p key={index} className='body-md-reg port-detail-description'>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <button className='gallery-scroll-btn' onClick={scrollToGallery}>
                    <img src={arrowLongDown} alt='' />
                    <span className='gallery-scroll-text'>Gallery</span>
                    <sup className='gallery-count'>[{galleryLength}]</sup>
                </button>
            </div>

            {/* Gallery carousel */}
            <div className='port-gallery-section' id='property-gallery'>
                <div className='port-gallery-carousel' ref={carouselRef} onScroll={updateProgress}>
                    {property.gallery.map((image, index) => (
                        <button
                            key={index}
                            className='port-gallery-slide'
                            onClick={() => setLightboxIndex(index)}
                            aria-label={`Open image ${index + 1} of ${galleryLength} in fullscreen`}
                        >
                            <img src={image} alt={`${property.name} view ${index + 1}`} />
                        </button>
                    ))}
                </div>
                <div className='port-gallery-progress'>
                    <div
                        className='port-gallery-progress-thumb'
                        style={{ left: `${progress.left * 100}%`, width: `${progress.width * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Navigation */}
            <div className='port-detail-nav u-container'>
                <div className='port-detail-nav-section'>
                    {previousProperty ? (
                        <Link to={`/portfolio/${previousProperty.slug}`} className='port-nav-link'>
                            <span className='ap-btn-left' aria-hidden='true'></span>
                            <span className='port-nav-text'>
                                <span className='overline-2xs-medium port-nav-label'>PREVIOUS</span>
                                <span className='body-md-med'>{previousProperty.name}</span>
                            </span>
                        </Link>
                    ) : (
                        <div className='port-nav-link'></div>
                    )}

                    <Link to="/portfolio" className='port-nav-center'>
                        <span>All Properties</span>
                    </Link>

                    {nextProperty ? (
                        <Link to={`/portfolio/${nextProperty.slug}`} className='port-nav-link port-nav-right'>
                            <span className='port-nav-text'>
                                <span className='overline-2xs-medium port-nav-label'>NEXT</span>
                                <span className='body-md-med'>{nextProperty.name}</span>
                            </span>
                            <span className='ap-btn-right' aria-hidden='true'></span>
                        </Link>
                    ) : (
                        <div className='port-nav-link port-nav-right'></div>
                    )}
                </div>
            </div>

            {/* Bottom CTA Section */}
            <div className='port-detail-cta-section'>
                <div className='port-cta-overlay'>
                    <div className='u-container'>
                        <span className='overline-sm-medium port-cta-eyebrow'>INVESTMENTS</span>
                        <h2 className='heading-2xl-book port-cta-heading'>A track record of performance and opportunity.</h2>
                        <Link to="/contact" className='port-cta-link body-sm-med'>
                            REACH OUT TO OUR TEAM
                        </Link>
                    </div>
                </div>
            </div>

            {/* Fullscreen gallery lightbox */}
            {lightboxIndex !== null && (
                <div className='gallery-lightbox' role='dialog' aria-modal='true' aria-label={`${property.name} gallery`}>
                    <span className='lightbox-counter'>{lightboxIndex + 1} / {galleryLength}</span>
                    <button
                        className='lightbox-close'
                        onClick={() => setLightboxIndex(null)}
                        aria-label='Close gallery'
                    ></button>
                    <button
                        className='lightbox-arrow lightbox-prev'
                        onClick={() => setLightboxIndex(i => (i - 1 + galleryLength) % galleryLength)}
                        aria-label='Previous image'
                    >
                        <img src={arrowLeft} alt='' />
                    </button>
                    <img
                        className='lightbox-image'
                        src={property.gallery[lightboxIndex]}
                        alt={`${property.name} view ${lightboxIndex + 1}`}
                    />
                    <button
                        className='lightbox-arrow lightbox-next'
                        onClick={() => setLightboxIndex(i => (i + 1) % galleryLength)}
                        aria-label='Next image'
                    >
                        <img src={arrowRight} alt='' />
                    </button>
                </div>
            )}
        </div>
    );
}
