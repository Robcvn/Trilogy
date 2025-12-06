import React from "react";

export default function PreviewDisplay(props) {
    return(
        <div className="prev-display-wrapper" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <div className="prev-display-container u-container">
                <h3 className="prev-h">{props.header}</h3>
                <p className="prev-p">{props.paragraph}</p>
                <div className="prev-display-links">
                    <div className="pos-link-container">
                        <a href="#" className="port-link">view open positions</a>
                    </div>
                </div>
            </div>
        </div>
    )
}