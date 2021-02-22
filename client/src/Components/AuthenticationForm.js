import React from "react";
import "./AuthenticationForm.css";
import Form from "./Form";

const AuthenticationForm = () => {
    return (
        <div className="container box-adjustment">
            <div className="row mt-5 mb-5">
                <div className="col-lg-5 p-2 mt-2 mx-auto">
                    <Form />
                </div>
                <div className="col-lg-4 p-5 mt-5  mx-auto">
                    this section has text
                </div>
            </div>
        </div>
    );
};

export default AuthenticationForm;
