import React from "react";
import "./InstituteDetails.css";

const InstituteDetails = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-xs-12 order-1 bg-dark text-light px-2 py-4 d-flex  justify-content-center border-seperation">
                    <div className="">
                        <i className="fa fa-book fa-3x"></i>
                    </div>
                    <div className="mx-4">
                        <h4>Books</h4>
                        <span>100000+</span>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 order-2 bg-dark text-light p-2 py-4 d-flex justify-content-center border-seperation">
                    <div className="">
                        <i className="fa fa-user fa-3x"></i>
                    </div>
                    <div className="mx-4">
                        <h4>Faculties</h4>
                        <span>12</span>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 order-3 bg-dark text-light p-2 py-4 d-flex justify-content-center border-seperation">
                    <div>
                        <i className="fa fa-briefcase fa-3x"></i>
                    </div>
                    <div className="mx-4">
                        <h4>Years of Experience</h4>
                        <span>20+</span>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 order-4 bg-dark text-light p-2 py-4 d-flex justify-content-center border-seperation">
                    <div>
                        <i className="fa fa-users fa-3x"></i>
                    </div>
                    <div className="mx-4">
                        <h4>Student strength</h4>
                        <span>5000+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstituteDetails;
