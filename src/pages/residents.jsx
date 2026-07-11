import { Link } from "react-router-dom";
import AltDisplay from "../components/AltDisplay";
import residentsImg from "../assets/images/residents-img.png";


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
                        <Link className="port-link" to="/portfolio">find a home</Link>
                        {/* TODO(user): resident portal URL */}
                        <a className="res-login-link" href="#">resident login</a>
                    </div>
                </div>
                
            </div>
            <AltDisplay
            hText = 'ABOUT US'
            pText = 'Committed to the highest level of quality, service, and performance.'
            lText = 'meet trilogy'
            linkTo = '/company'
            imageUrl = {residentsImg}
            />
        </div>
        
    )
}