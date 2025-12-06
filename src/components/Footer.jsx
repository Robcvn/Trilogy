import React from "react";

export default function Footer() {
    return(
        <div className="footer-wrapper">
            <div className="footer-bg"></div>
            <div className="footer-container u-container">
                <div className="footer-logo"><a href="#"><img className="logo-white" src="\images\logo-white.svg" alt="trilogy logo in white" /></a></div>
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
                                <a className='f-links' href="#">Company</a>
                                <a className='f-links' href="#">Portfolio</a>
                                <a className='f-links' href="#">Careers</a>
                                <a className='f-links' href="#">Contact</a>
                            </div>

                        </div>
                        <div className="links-last-col">
                            <h4 className="f-eyebrow">client access</h4>
                            <div className="footer-client f-white-text">
                                <a className='f-links' href="#">Residents</a>
                                <a className='f-links' href="#">Management</a>
                                <a className='f-links' href="#">Investors</a>
                            </div>

                        </div>
                </div>
                <p className="f-disclaimer ">The contents of this website and/or any related web page links do not constitute an offer of securities or a solicitation of an offer to buy securities. Securities offered through Arete Wealth Management, LLC member FINRA, SIPC, and NFA. Only available in states where Arete Wealth Management, LLC is registered. Arete Wealth Management, LLC is not affiliated with Trilogy Real Estate Group or its affiliates.”</p>
            </div>
            <div className="f-divider"></div>
            <div className="sub-footer u-container">
                <div className="sub-footer-left">
                    <h5 className="copyright copyright-text">© 2023 Trilogy Real Estate Group</h5>
                    <div className="copyright-inner">
                        <h5 className="copyright-text">terms</h5>
                        <h5 className="copyright-text">privacy policy</h5>
                    </div>
                </div>
                <div className="sub-footer-right">
                    <img src="\images\aamc.png" alt="aamc logo"/>
                    <img src="\images\house.png" alt="small image of house"/>
                    <img src="\images\handi.png" alt="handicap symbol"/>
                </div>
            </div>       
        </div>
    )
}