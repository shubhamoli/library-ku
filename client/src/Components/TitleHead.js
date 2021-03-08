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

                <div className="col-lg-6 col-sm-10 col-xs-10">
                    <img
                        src={logo}
                        alt="Kumaun University"
                        className="header-height"
                    />
                </div>
                <div className="col-lg-3 col-visibility d-flex "></div>
            </div>
        </div>
    );
};

export default TitleHead;
