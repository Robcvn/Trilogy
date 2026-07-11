import { Link } from "react-router-dom";

export default function PreviewDisplay(props) {
    return(
        <div className="prev-display-wrapper" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <div className="prev-display-container u-container">
                <h3 className="prev-h">{props.header}</h3>
                <p className="prev-p">{props.paragraph}</p>
                <div className="prev-display-links">
                    <div className="pos-link-container">
                        <Link to={props.linkTo} className="port-link">{props.linkText}</Link>
                    </div>
                    {props.linkText2 && (
                        <Link to={props.linkTo2} className="contact-link">{props.linkText2}</Link>
                    )}
                </div>
            </div>
        </div>
    )
}