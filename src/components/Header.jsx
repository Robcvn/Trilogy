import React from "react";

export default function Header(){
    return(
        <div className="header-container u-container">
            <h1 className="head-h">Built to exceed expectations.</h1>
            <p className="head-p">Trilogy is a multi-award-winning real estate investment and management firm.</p>
            <div className="h-links">
                <a href="#" className="meet-link underline">meet trilogy</a>
                <div className="feat-prop">
                    <a href="#"><img src="\images\arrow-long-down.svg" className="arrow-down" alt="gold arrow pointing down" /></a>
                    <a href="#">featured properties</a>
                </div>
            </div>

        </div>
    )
}