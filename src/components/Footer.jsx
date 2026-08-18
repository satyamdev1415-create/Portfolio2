function Footer() {
return (
    <footer className="footer">

    <div className="container footer-content">

        <div className="footer-brand">
        <a href="#home" className="footer-logo">
            Satyam<span>.</span>
        </a>

            <p>
            Python Full Stack Developer passionate about
            building modern and useful web applications.
            </p>
        </div>

        <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

            <h3>Connect With Me</h3>

            <a href="https://github.com/satyamdev1415-create" target="_blank" rel="noreferrer">
            GitHub
            </a>

            <a href="https://www.linkedin.com/in/satyam-ray-93231a338/" target="_blank" rel="noreferrer">
            LinkedIn
            </a>

            <a href="https://www.instagram.com/satyam_code.__18/" target="_blank" rel="noreferrer">
            Instagram
            </a>

        </div>

    </div>

        <div className="footer-bottom">
        <div className="container">

            <p>
            © 2026 Satyam Kumar Ray. All Rights Reserved.
            </p>

            <a href="#home" className="back-to-top">
            ↑
            </a>

        </div>
    </div>

    </footer>
);
}

export default Footer;