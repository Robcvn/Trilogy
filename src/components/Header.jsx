import React from "react";
import { Link } from "react-router-dom";
import arrowLongDown from "../assets/images/arrow-long-down.svg";

export default function Header(){
    const scrollToFeatured = (e) => {
        e.preventDefault();
        const target = document.getElementById("featured-properties");
        if (target) target.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <div className="header-container u-container">
            <h1 className="head-h">Built to exceed expectations.</h1>
            <p className="head-p">Trilogy is a multi-award-winning real estate investment and management firm.</p>
            <div className="h-links">
                <Link to="/company" className="meet-link underline">meet trilogy</Link>
                <div className="feat-prop">
                    <a href="#featured-properties" onClick={scrollToFeatured}><img src={arrowLongDown} className="arrow-down" alt="gold arrow pointing down" /></a>
                    <a href="#featured-properties" onClick={scrollToFeatured}>featured properties</a>
                </div>
            </div>

        </div>
    )
}