import React from "react";

export default function TwoColSection() {
    return(
        <div className="two-col-wrapper">

            <div className="grid-img"></div>

            <div className="two-col-container u-container u-grid">
                <div className="two-col-inner-left">
                    <h2 className="two-col-h">Driven by market opportunity.</h2>
                </div>
                <div className="two-col-inner-right">
                    <p className="inner-right-p">We buy or build, and manage our own communities in 14 cities across the U.S. and have $4.5 billion in real estate transaction volume. Our complete vertical integration gives us the uncommon ability to see and predict market conditions—and maintain the highest standards of service.</p>
                    <button className="port-link"><a className="" href="#">VIEW OUR PORTFOLIO</a></button>
                </div>
                
            </div>
        </div>
    )
}