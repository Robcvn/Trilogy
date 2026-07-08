import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Footer from '../components/Footer';
import PropertyDisplay from '../components/PropertyDisplay';
import GalleryCardGrid from '../components/GalleryCardGrid';
import GalleryData from '../GalleryData';
import arrowLongDown from '../assets/images/arrow-long-down.svg';

export function Portfolio() {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');
    const propertiesPerPage = 6;

    // Filter properties based on active filter
    const getFilteredProperties = () => {
        if (activeFilter === 'all') {
            return GalleryData;
        }
        return GalleryData.filter(prop => prop.status === activeFilter);
    };

    const filteredProperties = getFilteredProperties();
    const totalProperties = filteredProperties.length;
    const totalPages = Math.ceil(totalProperties / propertiesPerPage);

    // Get current page properties
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Reset to page 1 when filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilter]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to top of gallery
        window.scrollTo({ top: 600, behavior: 'smooth' });
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const scrollToAllProps = (e) => {
        e.preventDefault();
        const target = document.getElementById('all-properties');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='port-main-container'>
            <div className="grid-pat"></div>
            <div className="port-content u-container p-grid">
                <div className="h-links h-fp">
                    <div className="feat-prop">
                        <a href="#all-properties" onClick={scrollToAllProps}><img src={arrowLongDown} className="arrow-down" alt="gold arrow pointing down" /></a>
                        <a href="#all-properties" onClick={scrollToAllProps}>featured properties</a>
                    </div>
                </div>
                <div className="port-content-inner">
                    <div className='port-inner-left'>
                        <h1 className="heading-5xl-book p-h">Everyone deserves to live well.</h1>
                        <div className='p-stats'>
                            <div className='stat-block-one'>
                                <h2 className='stat-h'>20+ Years</h2>
                                <p className='stat-p'>of operational excellence across every market cycle</p>
                            </div>
                            <div className='stat-block-two'>
                                <h2 className='stat-h'>14 cities</h2>
                                <p className='stat-p'>across the United States</p>
                            </div>
                            <div className='stat-block-three'>
                                <h2 className='stat-h'>$4.5 billion</h2>
                                <p className='stat-p'>in real estate volume</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PropertyDisplay />
            <section className='all-props' id='all-properties'>
                <div className='all-props-content u-container'>
                    <div className='mini-nav'>
                        <div className='ap-h-wrapper'>
                            <h2 className='ap-h'>All Properties</h2>
                            <span className='ap-counter'>[{totalProperties}]</span>
                        </div>
                        <div className='mini-nav-items'>
                            <button 
                                className={`mini-nav-btn overline-sm-medium ${activeFilter === 'all' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('all')}
                            >
                                all
                            </button>
                            <button 
                                className={`mini-nav-btn overline-sm-medium ${activeFilter === 'current' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('current')}
                            >
                                current
                            </button>
                            <button 
                                className={`mini-nav-btn overline-sm-medium ${activeFilter === 'development' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('development')}
                            >
                                development
                            </button>
                            <button 
                                className={`mini-nav-btn overline-sm-medium ${activeFilter === 'legacy' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('legacy')}
                            >
                                legacy
                            </button>
                        </div>
                    </div>
                    
                    {/* Pass filtered properties to GalleryCardGrid */}
                    <GalleryCardGrid properties={currentProperties} />
                    
                    <div className='ap-gallery-btns'>
                        <button 
                            className='ap-btn-left'
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            style={{ opacity: currentPage === 1 ? 0.3 : 1 }}
                        ></button>
                        
                        {/* Mobile pagination dots */}
                        <div className='gallery-pag-btns'>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button 
                                    key={i + 1}
                                    className={`g-pag-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                    onClick={() => handlePageChange(i + 1)}
                                    aria-label={`Go to page ${i + 1}`}
                                ></button>
                            ))}
                        </div>
                        
                        {/* Desktop pagination numbers */}
                        <div className='ap-mid-btns-container'>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button 
                                    key={i + 1}
                                    className={`ap-mid-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                        
                        <button 
                            className='ap-btn-right'
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            style={{ opacity: currentPage === totalPages ? 0.3 : 1 }}
                        ></button>
                    </div>
                </div>
            </section>
            <div className="ap-p-display-wrapper">
                <div className="prev-display-container u-container">
                    <h3 className="prev-h">Investments</h3>
                    <p className="prev-p">A track record of performance and opportunity.</p>
                    <div className="contact-link-container">
                        <Link to="/contact" className='contact-link'>contact us</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}