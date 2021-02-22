// contains the header of the app including an app image an email-address and search bar

import React from "react";
import "./TitleHead.css";
import logo from "../Common/logoku.png";

const TitleHead = () => {
    return (
        <div className="container-fluid mb-3">
            <div className="row d-flex justify-content-between main-header">
                <div className="col-lg-2 col-visibility d-flex">
                    <div className="icon-placing">
                        <i className="fa fa-envelope fa-2x" />
                    </div>
                    <div className="mail-id-alignment">
                        <b> registrar@kunainital.ac.in</b>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 col-xs-12">
                    <img
                        src={logo}
                        alt="Kumaun University"
                        className="header-height"
                    />
                </div>
                <div className="col-lg-3 col-visibility d-flex ">
                    <form className="d-flex search-bar-alignment">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success bg-success text-light"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TitleHead;
