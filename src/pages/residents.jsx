import React from "react";
import PreviewDisplay from "../components/PreviewDisplay";
import Footer from "../components/Footer";
import AltDisplay from "../components/AltDisplay";


export function Residents() {
    return(
        <div className="residents-wrapper">
            <div className="grid-pat"></div>
            <div className="r-h-container u-container">
                <div className="h-lc">
                    <h1 className="res-h">For Residents</h1>
                    <p className="res-h-p">At Trilogy Residential Management, our communities are more than just a place to call home.</p>
                </div>
                <div className="h-rc">
                    <p className="h-rc-p">Our communities offer resort-style amenities, designer finishes, and premier services. They’re located in desirable neighborhoods, just steps from shopping and dining with easy access to a wide range of recreations and conveniences. And our promise to our residents is that they will always come first—our attentive onsite office and highly-skilled 24/7 maintenance teams ensure our residents live well.</p>
                    <div className="h-rc-links">
                        <a className="port-link" href="#">find a home</a>
                    </div>
                </div>
                
            </div>
            <AltDisplay
            hText = 'ABOUT US'
            pText = 'Committed to the highest level of quality, service, and performance.'
            lText = 'meet trilogy'
            imageUrl = 'images//residents-img.png'
            />
            <Footer />
        </div>
        
    )
}