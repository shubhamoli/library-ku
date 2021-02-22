import React, { Component } from "react";
import StudentForm from "../Components/StudentForm";

class ReturnBooks extends Component {
    render() {
        return (
            <div>
                <h2>Students need books. Please do return and help other.</h2>
                <StudentForm />
            </div>
        );
    }
}
export default ReturnBooks;
