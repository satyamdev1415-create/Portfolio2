function Education() {
    const education = [
    {
        year: "2024 - Present",
        degree: "Bachelor of Computer Applications (BCA)",
        institute: "Oxford Business College, Patna",
        description:
        "Currently pursuing BCA with a focus on programming, web development, databases and software development.",
    },
    {
        year: "2022 - 2024",
        degree: "Higher Secondary (12th)",
        institute: "PPY College, Chakai, Jamui, Bihar",
        description:
        "Completed higher secondary education with a focus on building a strong academic foundation.",
    },
    {
        year: "2020 - 2022",
        degree: "Secondary Education (10th)",
        institute: "SK+2 Vidya Mandir, Chakai, Jamui, Bihar",
        description:
        "Completed secondary education and developed an early interest in computers and technology.",
    },
    ];

return (
    <section className="education section" id="education">
        <div className="container">

        <div className="section-title">
            <p>My Academic Journey</p>
            <h2>Education</h2>
        </div>

        <div className="education-timeline">

            {education.map((item, index) => (
            <div className="education-item" key={index}>

                <div className="education-dot"></div>

                <div className="education-card">

                <span className="education-year">
                    {item.year}
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.institute}</h4>

                <p>{item.description}</p>

            </div>

            </div>
        ))}

        </div>

    </div>
    </section>
);
}

export default Education;