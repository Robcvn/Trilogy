import { Link } from "react-router-dom";
import arrowRight from "../assets/images/arrow-right.svg";

export default function GalleryCard(props) {
    return(
        <div className="gallery-card-wrapper">
            <Link to={`/portfolio/${props.data.slug}`} className="gallery-link"></Link>
            <div className="g-card-img" style={{ backgroundImage: `url(${props.img})`}}></div>
            <div className="gallery-card-content">
                <div className="gallery-inner">
                    <h4 className="gallery-h">{props.data.name}</h4>
                    <div className="gallery-address-container">
                        <p className="gallery-address">{props.data.address}</p>
                        <p className="gallery-address">{props.data.city}</p>
                    </div>
                </div>
                <img className="gallery-arrow" src={arrowRight} alt="" />
            </div>
        </div>
    )
}