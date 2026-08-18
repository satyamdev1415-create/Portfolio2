import { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
};

return (
    <section className="contact section" id="contact">
    <div className="container">

        <div className="section-title">
            <p>Let's Connect</p>
            <h2>Contact Me</h2>
        </div>

        <div className="contact-content">

          {/* Contact Information */}
            <div className="contact-info">

            <h3>Let's Talk</h3>

            <p>
                Have a project idea, internship opportunity or
                just want to say hello? Feel free to reach out.
            </p>

            <div className="contact-details">

            <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                <h4>Email</h4>
                <a href="mailto:satyam@example.com">
                    satyamray940@gmail.com
                </a>
                </div>
            </div>

            <div className="contact-item">
                <div className="contact-icon">☎</div>
                <div>
                    <h4>Phone</h4>
                    <a href="tel:+919876543210">
                    +91 6205757906
                    </a>
                </div>
            </div>

                <div className="contact-item">
                <div className="contact-icon">⌖</div>
                <div>
                    <h4>Location</h4>
                    <span>Patna, Bihar, India</span>
                </div>
            </div>

            </div>

        </div>

          {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-row">

            <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                />
            </div>

            </div>

            <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
                type="text"
                id="subject"
                placeholder="What is this about?"
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                rows="6"
                placeholder="Write your message..."
                required
            ></textarea>
            </div>

            <button type="submit" className="send-btn">
                Send Message →
            </button>

            {submitted && (
                <p className="success-message">
                ✓ Thank you! Your message has been submitted.
                </p>
            )}

        </form>

        </div>

    </div>
    </section>
);
}

export default Contact;