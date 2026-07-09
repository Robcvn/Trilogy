import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import '../App.css';
import GalleryData from '../GalleryData';

export function PortfolioDetail() {
    const { id } = useParams();
    const [galleryOpen, setGalleryOpen] = useState(false);

    // fresh property page starts with the gallery collapsed
    useEffect(() => {
        setGalleryOpen(false);
    }, [id]);

    // opening the gallery scrolls it into view so the toggle has a
    // visible effect even when the grid sits below the fold
    useEffect(() => {
        if (galleryOpen) {
            const gallery = document.getElementById('property-gallery');
            if (gallery) gallery.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [galleryOpen]);

    const currentIndex = GalleryData.findIndex(prop => prop.slug === id);

    // Unknown slug: send the visitor back to the portfolio instead of
    // silently showing the wrong property
    if (currentIndex < 0) {
        return <Navigate to="/portfolio" replace />;
    }

    const property = GalleryData[currentIndex];
    const previousProperty = currentIndex > 0 ? GalleryData[currentIndex - 1] : null;
    const nextProperty = currentIndex < GalleryData.length - 1 ? GalleryData[currentIndex + 1] : null;

    return (
        <div className='port-detail-wrapper'>
            {/* Hero Image */}
            <div className='port-detail-hero' style={{ backgroundImage: `url(${property.img})` }}>
            </div>

            {/* Main Content */}
            <div className='port-detail-main u-container'>
                <div className='port-detail-content-grid'>
                    {/* Left Column */}
                    <div className='port-detail-left-col'>
                        <span className='port-detail-category overline-xs-medium'>{property.category}</span>
                        <h1 className='port-detail-title serif-3xl-reg'>{property.name}</h1>

                        <div className='port-detail-info-block'>
                            <p className='body-md-reg port-detail-address-text'>{property.address}</p>
                            <p className='body-md-reg port-detail-address-text'>{property.city}</p>
                        </div>

                        <div className='port-detail-info-block'>
                            <span className='overline-2xs-medium port-detail-label'>UNITS</span>
                            <p className='heading-2xl-book'>{property.units}</p>
                        </div>

                        <div className='port-detail-info-block'>
                            <button
                                className='gallery-toggle-btn body-sm-med'
                                onClick={() => setGalleryOpen(open => !open)}
                                aria-expanded={galleryOpen}
                                aria-controls='property-gallery'
                            >
                                Gallery <span className='gallery-count body-sm-med'>[{property.gallery.length}]</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Description */}
                    <div className='port-detail-right-col'>
                        {property.description.map((paragraph, index) => (
                            <p key={index} className='body-md-reg port-detail-description'>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Gallery Section */}
                {galleryOpen && (
                    <div className='port-detail-gallery-section' id='property-gallery'>
                        <div className='port-gallery-grid'>
                            {property.gallery.map((image, index) => (
                                <div key={index} className='port-gallery-item'>
                                    <img src={image} alt={`${property.name} view ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <div className='port-detail-nav-section'>
                    {previousProperty ? (
                        <Link to={`/portfolio/${previousProperty.slug}`} className='port-nav-link'>
                            <span className='overline-2xs-medium port-nav-label'>PREVIOUS</span>
                            <span className='body-md-med'>{previousProperty.name}</span>
                        </Link>
                    ) : (
                        <div className='port-nav-link'></div>
                    )}

                    <Link to="/portfolio" className='port-nav-center'>
                        <span className='body-sm-med'>All Properties</span>
                    </Link>

                    {nextProperty ? (
                        <Link to={`/portfolio/${nextProperty.slug}`} className='port-nav-link port-nav-right'>
                            <span className='overline-2xs-medium port-nav-label'>NEXT</span>
                            <span className='body-md-med'>{nextProperty.name}</span>
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
        </div>
    );
}
