import React from "react";

export default function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-content">
                <img src="\images\logo-white.svg" className="logo-white" alt="trilogy logo white" />
                <div className="f-inner-content-wrapper">
                    <div className="f-contact">
                        <h4 className="f-eyebrow">contact us</h4>
                        <p className="f-address f-white-text">520 West Erie Street Ste 100 Chicago, IL 60654</p>
                        <div className="f-numbers">
                            <div className="f-phone">
                                <h4 className="f-eyebrow">phone</h4>
                                <p className="f-p f-white-text">312-750-0900</p>
                            </div>
                            <div className="f-fax">
                                <h4 className="f-eyebrow">fax</h4>
                                <p className="f-p f-white-text">312-750-0909</p>
                            </div>
                        </div>

                    </div>
                    <div className="f-links">
                        <div className="links-first-col">
                            <h4 className="f-eyebrow">navigation</h4>
                            <ul className="first-col-ul-links f-white-text">
                                <li>Company</li>
                                <li>Portfolio</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>

                        </div>
                        <div className="links-last-col">
                            <h4 className="f-eyebrow">client access</h4>
                            <ul className="last-col-ul-links f-white-text">
                                <li>Residents</li>
                                <li>Management</li>
                                <li>Investors</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <p className="f-disclaimer">The contents of this website and/or any related web page links do not constitute an offer of securities or a solicitation of an offer to buy securities. Securities offered through Arete Wealth Management, LLC member FINRA, SIPC, and NFA. Only available in states where Arete Wealth Management, LLC is registered. Arete Wealth Management, LLC is not affiliated with Trilogy Real Estate Group or its affiliates.”</p>
            <div className="f-divider"></div>
            <div className="sub-footer">
                <div className="sub-footer-left">
                    <h5 className="copyright copyright-text">© 2023 Trilogy Real Estate Group</h5>
                    <h5 className="copyright-text">terms</h5>
                    <h5 className="copyright-text">privacy policy</h5>
                </div>
                <div className="sub-footer-right">
                    <img src="public\images\aamc.png" alt="aamc logo"/>
                    <img src="public\images\house.png" alt="small image of house"/>
                    <img src="public\images\handi.png" alt="handicap symbol"/>
                </div>
            </div>
            <img src="\images\Union.svg" className="union" alt="trilogy alternate logo" />
        </div>
    )
}