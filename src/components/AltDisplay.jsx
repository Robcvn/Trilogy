import React from "react";

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
          <a href="#" className="contact-link">
            {props.lText}
          </a>
        </div>
      </div>
    </div>
  );
}
