import React from "react";
import arrowLongDown from "../assets/images/arrow-long-down.svg";

export default function Header(){
    return(
        <div className="header-container u-container">
            <h1 className="head-h">Built to exceed expectations.</h1>
            <p className="head-p">Trilogy is a multi-award-winning real estate investment and management firm.</p>
            <div className="h-links">
                <a href="#" className="meet-link underline">meet trilogy</a>
                <div className="feat-prop">
                    <a href="#"><img src={arrowLongDown} className="arrow-down" alt="gold arrow pointing down" /></a>
                    <a href="#">featured properties</a>
                </div>
            </div>

        </div>
    )
}