import React from "react";
import PreviewDisplay from "../components/PreviewDisplay.jsx";
import Footer from "../components/Footer";


export function Careers() {
    return(
        <div className="careers-wrapper">
            <div className="grid-pat"></div>
            <div className="careers-header-container u-container">
                <h1 className="careers-h">Raising the bar.</h1>
                <div className="careers-inner-right">
                    <p className="careers-h-p">An emphasis on and commitment to employee well being. An open-door policy from leadership. A dedication to diversity, mentorship, and dynamic career progression. At Trilogy, exceeding expectations is all-encompassing—our culture included.</p>
                    <p className="careers-h-p">If you don’t see an open position for you but would like to start a conversation, email your resume to <a href="#" className="careers-email-link">hr@trilogyreg.com</a>.</p>
                    <div className="c-pos-link-container">
                        <a href="#" className="c-pos-link">view open positions</a>
                    </div>
                </div>
            </div>
            <section className="careers-hero" style={{backgroundImage: 'url(/Trilogy/images/careers-hero.png)'}}>

            </section>
            <section className="three-col-container u-container">
                <h2 className="three-col-h">The beliefs that guide us.</h2>
                <div className="tc-col-two">
                    <div className="three-col-tb">
                        <h3 className="three-col-tb-h">We believe everyone deserves to live well.</h3>
                        <p className="three-col-tb-p">We know the spaces we invest in today shape the health and success of our communities tomorrow.</p>
                    </div>
                    <div className="three-col-tb">
                        <h3 className="three-col-tb-h">We believe in progress.</h3>
                        <p className="three-col-tb-p">Sustainable, measured progress. We see growth as an opportunity for advancement. Upward momentum motivates us.</p>
                    </div>
                    <div className="three-col-tb">
                        <h3 className="three-col-tb-h">We believe in each other.</h3>
                        <p className="three-col-tb-p">We hire the best, the brightest, and the kindest in the industry. We trust our partners and check our egos.</p>
                    </div>
                </div>
                <div className="tc-col-three">
                    <div className="three-col-tb">
                        <h3 className="three-col-tb-h">We believe in taking chances.</h3>
                        <p className="three-col-tb-p">We run towards opportunity. We know that calculated risks can reap extraordinary rewards.</p>
                    </div>
                    <div className="three-col-tb">
                        <h3 className="three-col-tb-h">We believe if it can be done well, it can be done better.</h3>
                        <p className="three-col-tb-p">Ours is a culture of continual improvement. Our discerning taste and drive for excellence are what makes Trilogy people, properties, and investments exceptional.</p>
                    </div>
                </div>
            </section>
            <PreviewDisplay
            header = 'CAREERS'
            paragraph = 'We shape environments into prosperous, thriving communities. Join us.'
            backgroundImage = 'images//p-display-img2.png'
            />
            <Footer />

        </div>
        
    )
}






