import React, { useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
    const [values, setValues] = useState({
        fname: "",
        bname: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | submitting | success

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validate = () => {
        const next = {};
        if (!values.fname.trim()) next.fname = "Please enter your full name.";
        if (!values.email.trim()) {
            next.email = "Please enter your email address.";
        } else if (!EMAIL_PATTERN.test(values.email.trim())) {
            next.email = "Please enter a valid email address.";
        }
        if (!values.message.trim()) next.message = "Please enter a message.";
        return next;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const next = validate();
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        setStatus("submitting");
        // TODO(user): wire to Formspree or backend endpoint by setting
        // VITE_CONTACT_ENDPOINT in a .env file
        const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
        if (endpoint) {
            try {
                await fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values)
                });
            } catch {
                // fall through to the confirmation either way for now
            }
        } else {
            // no backend yet: simulate the request
            await new Promise(resolve => setTimeout(resolve, 800));
        }
        setStatus("success");
    };

    return(
        <div className="contact-wrapper top-padding">
            <div className="grid-pat"></div>
            <div className="contact-h-container u-container">
                <h1 className="contact-h">Contact us</h1>
                <p className="contact-p">Have questions or comments for the Trilogy team? Please fill out the form below and someone will get back to you promptly. Reach us by phone at <span className="bolder">312-750-0900</span> or visit our main office at <span className="bolder">520 West Erie Street, Suite 100, Chicago, IL 60654</span>.</p>
                {status === "success" ? (
                    <p className="contact-p form-success" role="status">
                        Thank you, {values.fname.trim()}. Your message has been sent and someone from the Trilogy team will get back to you promptly.
                    </p>
                ) : (
                    <form className="contact-form-container" onSubmit={handleSubmit} noValidate>
                        <div className="form-left">
                            <label htmlFor="fname">Full Name</label><br />
                            <input
                                className="form-input"
                                type="text"
                                id="fname"
                                name="fname"
                                value={values.fname}
                                onChange={handleChange}
                                required
                                aria-invalid={Boolean(errors.fname)}
                                aria-describedby={errors.fname ? "fname-error" : undefined}
                            /><br />
                            {errors.fname && <span className="form-error" id="fname-error">{errors.fname}</span>}
                            <label htmlFor="bname">Business Name</label><br />
                            <input
                                className="form-input"
                                type="text"
                                id="bname"
                                name="bname"
                                value={values.bname}
                                onChange={handleChange}
                            /><br />
                            <label htmlFor="email">Email</label><br />
                            <input
                                className="form-input"
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                required
                                aria-invalid={Boolean(errors.email)}
                                aria-describedby={errors.email ? "email-error" : undefined}
                            /><br />
                            {errors.email && <span className="form-error" id="email-error">{errors.email}</span>}
                            <label className="message-label" htmlFor="message">Message</label><br />
                            <textarea
                                className="form-input message-input"
                                id="message"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                required
                                aria-invalid={Boolean(errors.message)}
                                aria-describedby={errors.message ? "message-error" : undefined}
                            />
                            {errors.message && <span className="form-error" id="message-error">{errors.message}</span>}
                        </div>
                        <button className="submit-btn" type="submit" disabled={status === "submitting"}>
                            {status === "submitting" ? "Sending..." : "Submit"}
                        </button>
                    </form>
                )}
            </div>
        </div>

    )
}
