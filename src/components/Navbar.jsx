import { useState } from "react";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
    setMenuOpen(false);
};

return (
    <nav className="navbar">
        <div className="container nav-content">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
            Satyam<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

        </div>

        {/* Desktop Button */}
        <a href="#contact" className="nav-button">
            Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

    </div>
    </nav>
);
}

export default Navbar;