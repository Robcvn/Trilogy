import React from "react";
import Footer from "../components/Footer";


export function Contact() {
    return(
        <div className="contact-wrapper top-padding">
            <div className="grid-pat"></div>
            <div className="contact-h-container u-container">
                <h1 className="contact-h">Contact us</h1>
                <p className="contact-p">Have questions or comments for the Trilogy team? Please fill out the form below and someone will get back to you promptly. Reach us by phone at <span className="bolder">312-750-0900</span> or visit our main office at <span className="bolder">520 West Erie Street, Suite 100, Chicago, IL 60654</span>.</p>
                <form className="contact-form-container">
                    <div className="form-left">
                        <label htmlFor="fname">Full Name</label><br />
                        <input className="form-input" type="text" id="fname" name="fname"></input><br />
                        <label htmlFor="bname">Business Name</label><br />
                        <input className="form-input" type="text" id="bname" /><br />
                        <label className="message-label" htmlFor="message">Message</label><br />
                        <textarea className="form-input message-input" type="text" id="message" />
                    </div>
                </form>
                <button className="submit-btn">Submit</button>  
            </div>

            <Footer />
        </div>
        
    )
}