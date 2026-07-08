import React from "react";
import CompanyInfo from "../components/CompanyInfo";
import CompanyCard from "../components/CompanyCard";
import CardGrid from "../components/CardGrid"
import PreviewDisplay from "../components/PreviewDisplay";
import Footer from "../components/Footer";
import propsImage from '../assets/images/p-display-img2.png'
import heroImg from '../assets/images/hero-img.png'


export function Company() {
    return(
        <div className="company-wrapper">
            <div className="company-content">
            <div className="grid-pat"></div>
                <div className="company-content-inner u-container">
                    <span className="h-eyebrow">Company</span>
                    <h1 className="heading-5xl-book c-h">Exceptional is our standard.</h1>
                    <p className="p-xl-reg company-p">Trilogy is a multi-award-winning real estate investment and management firm.</p>
                </div>
            </div>
            <img className="c-hero-img" src={heroImg} alt="" />
            <CompanyInfo />
            <div className="leadership-container u-container">
                <h2 className="l-h">Leadership</h2>
                <p className="l-p">Committed to our people, communities, and investments.</p>
            </div>
            <CardGrid />
            <PreviewDisplay
            header = "careers"
            paragraph = "Voted one of National Apartment Association's top employers."
            backgroundImage = {propsImage}
            linkText = "view open positions"
            linkTo = "/careers"
            />
            <Footer />

        </div>
        
    )
}






