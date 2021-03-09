import React from "react";
import "./Footer.css";
import "./AuthenticationForm.css";

const Links = ["link1", "link2", "link3", "link4"];

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-light mt-5 pt-3 pb-3">
            <div className="container p-4 pt-5">
                <div className="row">
                    <div className="col-lg-4 border-lining-right col-md-8 mb-4 mb-md-0">
                        <h5 className="footer-text-styling">
                            G.B.Pant Library,Nainital
                            <span className="under-line-card mt-3"></span>
                        </h5>

                        <p className="pt-2">
                            We welcome you to our prestigious organisation help
                            you build a great exprience togather. We here work
                            as a team and help each other grow. We are team of
                            highly qualified professionals who are always there
                            to help you at any time. And we suppose you to help
                            us with the suggestions so that we too can improve
                            and serve you the best
                        </p>
                        <div className="div-welcome-button">We Welcome You</div>
                    </div>

                    <div className="col-lg-4 border-lining-right col-md-6 mb-4 mb-md-0">
                        <h5 className="footer-text-styling">Help & Queries</h5>
                        <span className="under-line-card mt-3"></span>
                        <input
                            className="mt-3 text-input-area"
                            type="text"
                            id="name"
                            name="studentname"
                            placeholder="Your name..."
                        ></input>
                        <input
                            className="text-input-area"
                            type="text"
                            id="email"
                            name="studentemail"
                            placeholder="Your e-mail..."
                        ></input>
                        <textarea
                            className="text-input-area"
                            id="subject"
                            name="subject"
                            placeholder="Help & Queries..."
                        ></textarea>
                        <input
                            type="submit"
                            className="submit-button"
                            value="Submit"
                        ></input>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="footer-text-styling">Contact Us</h5>
                        <span className="under-line-card mt-3"></span>
                        <div className="container-fluid d-flex flex-column mt-3">
                            <div className="w-100 mx-auto text-start">
                                <p className="text-alignment ">
                                    <i className="fa fa-map-marker fa-2x mx-3"></i>
                                    D.S.B. Campus,Ayarpata,
                                    <br />
                                    Nainital(263001),Uttarakhand
                                </p>
                            </div>
                            <div className="mt-3 w-100 mx-auto text-start">
                                <p className="text-alignment ">
                                    <i className="fa fa-envelope fa-2x mx-3"></i>
                                    registrar@kunainital.ac.in
                                </p>
                            </div>
                            <div className="mt-3 w-100 mx-auto text-start">
                                <p className="text-alignment ">
                                    <i className="fa fa-phone fa-2x mx-3"></i>
                                    (05942)- 12232, 42838, 32423
                                </p>
                            </div>
                            <div className="mt-3 w-100 mx-auto text-start">
                                <p className="text-alignment ">
                                    <i className="fa fa-phone fa-2x mx-3"></i>
                                    +91-9870688698
                                </p>
                            </div>
                            <div className="mt-3 w-100 mx-auto text-start">
                                <p className="text-alignment ">
                                    <i className="fa fa-internet-explorer fa-2x mx-3"></i>
                                    www.libraryku.herokuapp.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center footer-text-styling p-3">
                © 2020 Copyright :{"  "}
                <a className="text-light" href="/">
                    Library.kumaununiversity.ac.in
                </a>
            </div>
        </footer>
    );
};

export default Footer;
