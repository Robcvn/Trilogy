import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoBlack from "../assets/images/logo-black.svg";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on a portfolio detail page
  const isPortfolioDetail = location.pathname.includes('/portfolio/') && location.pathname !== '/portfolio';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Detect scroll on portfolio detail pages
  useEffect(() => {
    if (!isPortfolioDetail) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPortfolioDetail]);

  // Add both nav-transparent and nav-scrolled classes as needed
  const navClasses = `nav-container ${isPortfolioDetail && !isScrolled ? 'nav-transparent' : ''}`;

  return (
    <div className={navClasses}>
      <div className="nav-items u-container">
        <Link to="/">
          <button className="nav-logo">
            <img
              src={logoBlack}
              className="trilogy-logo"
              alt="Trilogy in all uppercase"
            />
          </button>
        </Link>
        <div className="nav-links">
          <div className="nav-links-container">
            <Link to="/company">
              <button className="first-btn">Company</button>
            </Link>
            <Link to="/portfolio">
              <button>Portfolio</button>
            </Link>
            <Link to="/careers">
              <button>Careers</button>
            </Link>
            <Link to="/residents">
              <button>Residents</button>
            </Link>
            <Link to="/management">
              <button>Management</button>
            </Link>
            <Link to="/investors">
              <button>Investors</button>
            </Link>
            <Link to="/contact">
              <button className="last-btn">Contact</button>
            </Link>
          </div>
        </div>
        <div
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mm-nav-links u-container">
          <h5 className="mobile-eyebrow">Navigation</h5>
          <Link className="mobile-links" to="/company" onClick={toggleMenu}>
            Company
          </Link>
          <Link className="mobile-links" to="/portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link className="mobile-links" to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
        <div className="mm-client-links u-container">
          <h5 className="mobile-eyebrow">Client Access</h5>
          <Link className="mobile-links" to="/careers" onClick={toggleMenu}>
            Careers
          </Link>
          <Link className="mobile-links" to="/residents" onClick={toggleMenu}>
            Residents
          </Link>
          <Link className="mobile-links" to="/management" onClick={toggleMenu}>
            Management
          </Link>
          <Link className="mobile-links" to="/investors" onClick={toggleMenu}>
            Investors
          </Link>
        </div>
        <div className="mobile-footer">
          <div className="mf-divider"></div>
          <div className="mobile-footer-inner-content u-container">
            <p>© 2023 Trilogy Real Estate Group</p>
            <div className="mf-links-container">
              {/* TODO(user): terms and privacy policy pages/content */}
              <span>TERMS</span>
              <span>PRIVACY POLICY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}