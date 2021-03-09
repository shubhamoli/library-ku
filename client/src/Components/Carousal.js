import React from "react";
import "./Carousal.css";

import lib from "../Common/lib.jpeg";
import libaray from "../Common/library.jpeg";
import libarayinside from "../Common/libraryinside.jpeg";
import gbpantlib from "../Common/gbpantlib.png";

const Carousal = () => {
    return (
        <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner ">
                <div className="carousel-item active carousel-sizing">
                    <img
                        src={gbpantlib}
                        className="img-sizing d-block w-100"
                        alt="..."
                    />
                </div>
                <div className="carousel-item carousel-sizing">
                    <img
                        src={libaray}
                        className="img-sizing d-block w-100"
                        alt="..."
                    />
                </div>
                <div className="carousel-item carousel-sizing">
                    <img
                        src={libarayinside}
                        className="img-sizing d-block w-100"
                        alt="..."
                    />
                </div>
                <div className="carousel-item carousel-sizing">
                    <img
                        src={lib}
                        className="img-sizing d-block w-100"
                        alt="..."
                    />
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleFade"
                role="button"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleFade"
                role="button"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
};

export default Carousal;
