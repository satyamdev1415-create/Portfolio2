function About() {
return (
    <section className="about section" id="about">

    <div className="container">

        <div className="section-title">
            <p>Get To Know Me</p>
            <h2>About Me</h2>
        </div>

        <div className="about-content">

        <div className="about-image">
            <img src="/src/assets/saksham.png" alt="Satyam" />
        </div>

        <div className="about-text">

            <h3>
            Passionate Developer & Problem Solver
            </h3>

            <p>
            I am a BCA student and aspiring software developer
            passionate about building web applications and
            solving real-world problems through technology.
            </p>

            <p>
            My primary focus is Python development, Django,
            REST APIs and React. I enjoy learning new technologies
            and turning ideas into useful applications.
            </p>

            <div className="about-info">

            <div>
                <strong>Name:</strong>
                <span>Satyam Kumar Ray</span>
            </div>

            <div>
                <strong>Role:</strong>
                <span>Python Full Stack Developer</span>
            </div>

            <div>
                <strong>Education:</strong>
                <span>BCA</span>
            </div>

            <div>
                <strong>Location:</strong>
                <span>Patna, Bihar</span>
            </div>

        </div>

        </div>

        </div>

    </div>

    </section>
);
}

export default About;