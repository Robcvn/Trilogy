import { Link } from "react-router-dom";

export default function AltDisplay(props) {
  const bgStyle = {
    backgroundImage: `url(${props.imageUrl})`
  };

  return (
    <div className="ap-p-display-wrapper" style={bgStyle}>
      <div className="prev-display-container u-container">
        <h3 className="prev-h">{props.hText}</h3>
        <p className="prev-p">{props.pText}</p>
        <div className="contact-link-container">
          <Link to={props.linkTo} className="contact-link">
            {props.lText}
          </Link>
        </div>
      </div>
    </div>
  );
}
