import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid ">
                <a className="navbar-brand navbarLogo p-2" href="#topBanner">SG</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse specialClass" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link"  href="#topBanner">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#mySkills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;