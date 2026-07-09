import { Link } from "react-router-dom";
import logoWhite from "../assets/images/logo-white.svg";
import aamcLogo from "../assets/images/aamc.png";
import houseLogo from "../assets/images/house.png";
import handiLogo from "../assets/images/handi.png";

export default function Footer() {
    return(
        <div className="footer-wrapper">
            <div className="footer-bg"></div>
            <div className="footer-container u-container">
                <div className="footer-logo"><Link to="/"><img className="logo-white" src={logoWhite} alt="Trilogy Real Estate Group" /></Link></div>
                <div className="footer-mid f-grid">                                       
                    <div className="f-contact contact-grid">
                        <div className="f-address">
                            <h4 className="f-eyebrow">contact us</h4>
                            <p className="f-address f-white-text">520 West Erie Street Ste 100 Chicago, IL 60654</p>
                        </div>
                        <div className="f-phone">
                            <h4 className="f-eyebrow">phone</h4>
                            <p className="f-p f-white-text">312-750-0900</p>
                        </div>
                        <div className="f-phone-second">
                            <h4 className="f-eyebrow">fax</h4>
                            <p className="f-p f-white-text">312-750-0909</p>
                        </div>
                    </div>
                    
                    
                        
                    <div className="links-first-col">
                            <h4 className="f-eyebrow">navigation</h4>
                            <div className="footer-nav f-white-text">
                                <Link className='f-links' to="/company">Company</Link>
                                <Link className='f-links' to="/portfolio">Portfolio</Link>
                                <Link className='f-links' to="/careers">Careers</Link>
                                <Link className='f-links' to="/contact">Contact</Link>
                            </div>

                        </div>
                        <div className="links-last-col">
                            <h4 className="f-eyebrow">client access</h4>
                            <div className="footer-client f-white-text">
                                <Link className='f-links' to="/residents">Residents</Link>
                                <Link className='f-links' to="/management">Management</Link>
                                <Link className='f-links' to="/investors">Investors</Link>
                            </div>

                        </div>
                </div>
                <p className="f-disclaimer ">The contents of this website and/or any related web page links do not constitute an offer of securities or a solicitation of an offer to buy securities. Securities offered through Arete Wealth Management, LLC member FINRA, SIPC, and NFA. Only available in states where Arete Wealth Management, LLC is registered. Arete Wealth Management, LLC is not affiliated with Trilogy Real Estate Group or its affiliates.</p>
            </div>
            <div className="f-divider"></div>
            <div className="sub-footer u-container">
                <div className="sub-footer-left">
                    <h5 className="copyright copyright-text">© 2023 Trilogy Real Estate Group</h5>
                    <div className="copyright-inner">
                        {/* TODO(user): terms and privacy policy pages/content */}
                        <h5 className="copyright-text">terms</h5>
                        <h5 className="copyright-text">privacy policy</h5>
                    </div>
                </div>
                <div className="sub-footer-right">
                    <img src={aamcLogo} alt="AAMC accreditation logo"/>
                    <img src={houseLogo} alt="Equal Housing Opportunity"/>
                    <img src={handiLogo} alt="Wheelchair accessible"/>
                </div>
            </div>       
        </div>
    )
}