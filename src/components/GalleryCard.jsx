import React from "react";
import { Link } from "react-router-dom";

export default function GalleryCard(props) {
    // Create a URL-friendly slug from the property name
    const slug = props.data.name.toLowerCase().replace(/\s+/g, '-');
    
    return(
        <div className="gallery-card-wrapper">
            <Link to={`/portfolio/${slug}`} className="gallery-link"></Link>
            <div className="g-card-img" style={{ backgroundImage: `url(${props.img})`}}></div>
            <div className="gallery-card-content">
                <div className="gallery-inner">
                    <h4 className="gallery-h">{props.data.name}</h4>
                    <div className="gallery-address-container">
                        <p className="gallery-address">{props.data.address}</p>
                        <p className="gallery-address">{props.data.city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}