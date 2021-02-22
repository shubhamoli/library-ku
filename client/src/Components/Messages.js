import React from "react";
import "./Messeges.css";
import drsuchetan from "../Common/drsuchetan.jpg";
import drneeta from "../Common/drneeta.jpg";
import { Link } from "react-router-dom";

export const authorities = [
    {
        name: "Dr. Neeta Bora",
        designation: "National HOD",
        link_to: "/message_from_desk/",
        img: drneeta,
        message:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Magna ac placerat vestibulum lectus mauris.Egestas congue quisque egestas diam in. Fames acturpis egestas maecenas pharetra. Iaculis eu nondiam phasellus. Vel quam elementum pulvinaretiam non quam lacus suspendisse faucibusRidiculus mus mauris vitae ultricies leo integermalesuada nunc. Vitae semper quis lectus nulla",
    },
    {
        name: "Dr. Suchetan sah",
        designation: "Assistance Librarian",
        link_to: "/message_from_desk/",
        img: drsuchetan,
        message:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Magna ac placerat vestibulum lectus mauris.Egestas congue quisque egestas diam in. Fames acturpis egestas maecenas pharetra. Iaculis eu nondiam phasellus. Vel quam elementum pulvinaretiam non quam lacus suspendisse faucibusRidiculus mus mauris vitae ultricies leo integermalesuada nunc. Vitae semper quis lectus nulla",
    },
];

const Messages = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12 mt-5 mb-5">
                    <h2 className="font-decor">Message From the Desk</h2>
                    <span className="under-line"></span>
                </div>
            </div>
            <div className="row mt-5">
                {authorities.map((authority) => {
                    return (
                        <div className="col-lg-4 col-sm-8 col-xs-6order-1 mx-auto">
                            <Link
                                to={
                                    authority.link_to +
                                    authority.name.toLowerCase()
                                }
                                className="text-decoration-none"
                            >
                                <div className="card mb-5">
                                    <img
                                        src={authority.img}
                                        className="card-img-top message-box-styling"
                                        alt={authority.name}
                                    />
                                    <h5 className="card-title mt-3 color-change">
                                        {authority.name}
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {authority.designation}
                                    </h6>
                                    <div className="card-body color-change">
                                        <p className="card-text color-change">
                                            {authority.message}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Messages;
