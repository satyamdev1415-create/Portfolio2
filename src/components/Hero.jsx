function Hero() {
return (
    <section className="hero" id="home">

        <div className="container hero-content">

        <div className="hero-text">

        <p className="hero-small">
            Hello, I'm
        </p>

        <h1>
            Satyam <span>Kumar Ray</span>
        </h1>

        <h2>
            Python Full Stack Developer
        </h2>

        <p className="hero-description">
            I build modern, responsive and user-friendly web
            applications using Python, Django, React and modern
            web technologies.
        </p>

        <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
                View My Work
            </a>

            <a href="#contact" className="btn secondary-btn">
                Contact Me
            </a>
        </div>

        <div className="social-links">
            <a href="https://github.com/satyamdev1415-create" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/satyam-ray-93231a338/" target="_blank">LinkedIn</a>
            <a href="https://www.instagram.com/satyam_code.__18/" target="_blank">Instagram</a>
        </div>

        </div>

        <div className="hero-image">
            <div className="image-circle">
            <img src="/src/assets/profile.jpeg" alt="Satyam Kumar Ray" />
            </div>
        </div>

        </div>

    </section>
);
}

export default Hero;