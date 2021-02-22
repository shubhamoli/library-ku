// Navbar.js contains the nav links.

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const tabs = [
    {
        display_name: "Home",
        link: "/",
    },
    {
        display_name: "Events",
        link: "/events",
    },
    {
        display_name: "Services",
        link: "/services",
    },
    {
        display_name: "Faculties",
        link: "/faculties",
    },
    {
        display_name: "E-Newsletter",
        link: "/enewsletter",
    },
    {
        display_name: "About Us",
        link: "/aboutus",
    },
    {
        display_name: "Contact Us",
        link: "/contactus",
    },
];

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="container-fluid navbar-alignment collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        {tabs.map((tab) => {
                            return (
                                <li className="nav-item navlink-spacing">
                                    <Link
                                        className="nav-link link-formatting"
                                        to={tab.link}
                                    >
                                        {tab.display_name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
