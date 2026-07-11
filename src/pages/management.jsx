import { Link } from "react-router-dom";
import AltDisplay from "../components/AltDisplay";
import residentsImg from "../assets/images/residents-img.png";



export function Management() {
    return(
        <div className="management-wrapper">
            <div className="grid-pat"></div>
            <div className="r-h-container u-container">
                <div className="h-lc">
                    <h1 className="res-h">For Management</h1>
                    <p className="res-h-p">Trilogy Residential Management currently manages properties in 9 different states. With decades of multifamily management experience, our teams provide best-in-class professional management services to our clients.</p>
                </div>
                <div className="h-rc">
                    <p className="h-rc-p">We pride ourselves in exceeding expectations and consistently setting the standard for innovation, quality, and attention to detail in all of our managed communities. Trilogy offers a fully-integrated operating platform with expertise in property operations, construction management, accounting, marketing and branding, risk management, human resources, software and technology, and all other related support functions. Through local-market knowledge and a focus on recruiting and professional development, we are able to expertly maintain our properties, provide superior customer service, and maximize the performance of our assets.</p>
                    {/* TODO(user): confirm destination for this link */}
                    <Link className="log-link" to="/company">learn more</Link>
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