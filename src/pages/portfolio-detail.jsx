import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';
import Footer from '../components/Footer';
import GalleryData from '../GalleryData';

export function PortfolioDetail() {
    const { id } = useParams();
    
    // Find current property by matching the slug
    const currentIndex = GalleryData.findIndex(prop => {
        const slug = prop.name.toLowerCase().replace(/\s+/g, '-');
        return slug === id;
    });
    
    // Get current property or default to first one
    const property = currentIndex >= 0 ? GalleryData[currentIndex] : GalleryData[0];
    
    // Get previous and next properties
    const previousProperty = currentIndex > 0 ? GalleryData[currentIndex - 1] : null;
    const nextProperty = currentIndex < GalleryData.length - 1 ? GalleryData[currentIndex + 1] : null;
    
    // Create slugs for navigation
    const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');
    const previousSlug = previousProperty ? createSlug(previousProperty.name) : null;
    const nextSlug = nextProperty ? createSlug(nextProperty.name) : null;

    // Property images for gallery
    const propertyImages = [
        property.img,
        "/images/noca.png",
        "/images/volaris.png"
    ];

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
                        <span className='port-detail-category overline-xs-medium'>RESIDENTIAL</span>
                        <h1 className='port-detail-title serif-3xl-reg'>{property.name}</h1>
                        
                        <div className='port-detail-info-block'>
                            <p className='body-md-reg port-detail-address-text'>{property.address}</p>
                            <p className='body-md-reg port-detail-address-text'>{property.city}</p>
                        </div>

                        <div className='port-detail-info-block'>
                            <span className='overline-2xs-medium port-detail-label'>UNITS</span>
                            <p className='heading-2xl-book'>172</p>
                        </div>

                        <div className='port-detail-info-block'>
                            <button className='gallery-toggle-btn body-sm-med'>
                                Gallery <span className='gallery-count body-sm-med'>[38]</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Description */}
                    <div className='port-detail-right-col'>
                        <p className='body-md-reg port-detail-description'>
                            Optima Old Orchard Woods is a 646-unit condominium tower featuring 172 high-end rental units in Skokie, IL.
                        </p>
                        <p className='body-md-reg port-detail-description'>
                            The property is located within walking distance of Harms Woods and Old Orchard Woods with direct access to the Eden's Expressway. The property features first-class amenities including a resort-style indoor swimming pool, spa, state-of-the-art fitness center, tennis court, party room with catering kitchen, heated indoor parking and grand lobby. Each rental unit has its own private balcony or patio and is finished with modern, luxury-apartment designed finishes including floor-to-ceiling views, private recessed balconies and terraces with breathtaking views of acres of forest and the Chicago skyline, stainless steel appliances, granite countertops, and full-size washer/dryer.
                        </p>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className='port-detail-gallery-section'>
                    <div className='port-gallery-grid'>
                        {propertyImages.map((image, index) => (
                            <div key={index} className='port-gallery-item'>
                                <img src={image} alt={`${property.name} view ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className='port-detail-nav-section'>
                    {previousProperty ? (
                        <Link to={`/portfolio/${previousSlug}`} className='port-nav-link'>
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
                        <Link to={`/portfolio/${nextSlug}`} className='port-nav-link port-nav-right'>
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

            <Footer />
        </div>
    );
}