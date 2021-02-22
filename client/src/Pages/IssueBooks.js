import React, { Component } from "react";
import StudentForm from "../Components/StudentForm";

class IssueIBooks extends Component {
    render() {
        return (
            <div>
                <h4 className="mt-4">
                    Issue your books and help yourself study well and have a
                    bright future.
                    <br /> All the best
                </h4>
                <StudentForm />
            </div>
        );
    }
}
export default IssueIBooks;
