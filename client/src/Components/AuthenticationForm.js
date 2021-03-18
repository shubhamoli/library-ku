import React from "react";
import "./AuthenticationForm.css";
import Form from "./Form";

const highlights = [
    {
        hightlight: "This is highlight 1 ",
    },
    {
        hightlight: "This is highlight 1",
    },
    {
        hightlight: "This is highlight 1",
    },
    {
        hightlight: "This is highlight 1",
    },
    {
        hightlight: "This is highlight 1",
    },
    {
        hightlight: "This is highlight 1",
    },
    {
        hightlight: "This is highlight 1",
    },
    {
        hightlight: "This is highlight 1",
    },
    {
        hightlight: "This is highlight 1",
    },
];

const AuthenticationForm = () => {
    return (
        <div className="container box-adjustment">
            <div className="row mt-5 mb-5">
                <div className="col-lg-5 p-2 mt-2 mx-auto">
                    <Form />
                </div>
                <div className="col-lg-5 bg-dark text-light highlights-styling mt-3  mx-auto">
                    <h3>Highlights</h3>
                    <span className="under-line-card mt-3"></span>
                    <ul className="mt-4 text-start">
                        {highlights.map((hightlight) => {
                            return (
                                <li className="">
                                    <p>{hightlight.hightlight}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthenticationForm;
