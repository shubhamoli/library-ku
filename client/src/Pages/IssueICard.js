import React, { Component } from "react";
import StudentForm from "../Components/StudentForm";

class IssueICard extends Component {
    render() {
        return (
            <div>
                <h4 className="mt-4">
                    Here you can issue your i-card . Just fill the form below
                    and get your i-card.
                </h4>
                <StudentForm />
            </div>
        );
    }
}
export default IssueICard;
