import React from "react";
import "./InstituteDetails.css";

const InstituteDetails = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-xs-12 order-1 bg-dark text-light px-2 py-4 border-seperation">
                    <h3>Books</h3>
                    <span>100000+</span>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 order-2 bg-dark text-light p-2 py-4 border-seperation">
                    <h3>Faculty</h3>
                    <span>12</span>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 order-3 bg-dark text-light p-2 py-4 border-seperation">
                    <h3>Years of Experience</h3>
                    <span>20+</span>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12 order-4 bg-dark text-light p-2 py-4 border-seperation">
                    <h3>Student strength</h3>
                    <span>5000+</span>
                </div>
            </div>
        </div>
    );
};

export default InstituteDetails;
