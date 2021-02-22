import React from "react";
import "./Footer.css";
import "./AuthenticationForm.css";

const Links = ["link1", "link2", "link3", "link4"];

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-light mt-5">
            <div className="container p-4 pt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Iste atque ea quis molestias. Fugiat pariatur
                            maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus
                            sint!
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            {Links.map((link) => {
                                return (
                                    <li>
                                        <a href="#!" className="text-light">
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>

                        <ul className="list-unstyled">
                            {Links.map((link) => {
                                return (
                                    <li>
                                        <a href="#!" className="text-light">
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3">
                © 2020 Copyright :{"  "}
                <a className="text-light" href="/">
                    Library.kumaununiversity.ac.in
                </a>
            </div>
        </footer>
    );
};

export default Footer;
