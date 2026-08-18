function Skills() {
    const skills = [
        { name: "Python", level: 90 },
        { name: "Django", level: 85 },
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Git & GitHub", level: 80 },
        {name: "spring boot", level:60},
        { name: "postgresql", level: 80 },
        { name: "Numpy", level: 85 },
        { name: "Pandas", level: 65 },
        { name: "Matplotlib", level: 85 },
        { name: "Java", level: 65 },
        { name: " Rest Api", level: 55 },
        { name: "Flask", level: 85 },
        { name: "Tailwind", level: 67 },
        { name: "JavaScript", level: 55 },
        
    ];

return (
    <section className="skills section" id="skills">
    <div className="container">

        <div className="section-title">
            <p>My Expertise</p>
            <h2>My Skills</h2>
        </div>

        <div className="skills-grid">
        {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

                <div className="skill-top">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
                </div>

                <div className="skill-bar">
                <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                ></div>
                </div>

            </div>
        ))}
        </div>

    </div>
    </section>
);
}

export default Skills;