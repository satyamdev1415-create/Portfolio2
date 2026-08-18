function Projects() {
const projects = [
    {
        title: "E-Commerce Website",
        description:
        "A full-stack e-commerce platform with products, categories, wishlist, cart and authentication.",
        tech: ["React", "Django", "REST API"],
        image: "/src/assets/ecommerce.jpeg",
        github: "https://github.com/satyamdev1415-create/saksham-store",
        live: "#",
    },
    {
        title: "FoodReels",
        description:
        "A food-focused web application where users can explore recipes and manage their content.",
        tech: ["Django", "DRF", "SQLite"],
        image: "/src/assets/foodreels.jpg",
        github: "https://github.com/satyamdev1415-create/Foodreel",
        live: "#",
    },
    {
        title: "Student Dashboard",
        description:
        "A responsive student dashboard designed to manage academic information through a clean interface.",
        tech: ["React", "CSS", "JavaScript"],
        image: "/src/assets/dashboard.jpg",
        github: "https://github.com/satyamdev1415-create/student-managment",
        live: "#",
    },
    {
        title: "Weather Application",
        description:
        "A simple weather application that displays weather information through a clean and responsive UI.",
        tech: ["React", "API", "CSS"],
        image: "/src/assets/weather.jpg",
        github: "#",
        live: "#",
    },
    {
        title: "Student Management System",
        description:
        "A Django-based application for managing student records and academic information.",
        tech: ["Python", "Django", "SQLite"],
        image: "/src/assets/student.jpg",
        github: "https://github.com/satyamdev1415-create/student-managment",
        live: "#",
    },
    {
        title: "Portfolio Website",
        description:
        "A responsive personal portfolio website showcasing skills, projects, education and contact details.",
        tech: ["React", "CSS", "Vite"],
        image: "/src/assets/portfolio.jpg",
        github: "https://github.com/satyamdev1415-create/portfolio",
        live: "#",
    },
];

return (
    <section className="projects section" id="projects">
        <div className="container">

        <div className="section-title">
            <p>What I Have Built</p>
            <h2>My Projects</h2>
        </div>

        <div className="projects-grid">

            {projects.map((project) => (
            <div className="project-card" key={project.title}>

            <div className="project-image">
                <img
                    src={project.image}
                    alt={project.title}
                />
            </div>

            <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                {project.tech.map((technology) => (
                    <span key={technology}>
                    {technology}
                    </span>
                ))}
                </div>

                <div className="project-buttons">
                <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn primary-project-btn"
                >
                    Live Demo
                </a>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn secondary-project-btn"
                >
                    GitHub
                </a>
                </div>

            </div>

            </div>
        ))}

        </div>

    </div>
    </section>
);
}

export default Projects;