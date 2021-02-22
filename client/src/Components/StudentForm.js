import React from "react";
import "./Form.css";

class StudentForm extends React.Component {
    render() {
        return (
            <div className="mt-3 border-lining">
                <form className="mt-4" action="/">
                    <p className="d-flex justify-content-center form-styling">
                        RollNo
                        <input
                            type="text"
                            className=""
                            placeholder="Enter your name...."
                            name="FullName"
                        ></input>
                    </p>

                    <p className="d-flex justify-content-center form-styling">
                        FullName
                        <input
                            type="text"
                            placeholder="Enter your name...."
                            name="subject"
                        ></input>
                    </p>
                    <p className="d-flex justify-content-center form-styling">
                        FathersName
                        <input
                            type="text"
                            placeholder="Enter your father's name...."
                            name="subject"
                        ></input>
                    </p>
                    <p className="d-flex justify-content-center form-styling">
                        DOB
                        <input
                            type="text"
                            placeholder="Enter your date of birth"
                            name="subject"
                        ></input>
                    </p>
                    <p className="d-flex justify-content-center form-styling">
                        E-Mail
                        <input
                            type="text"
                            placeholder="Enter you E-Mail Address..."
                            name="e_Mail"
                        ></input>
                    </p>

                    <button type="submit" className="btn btn-dark text-light">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default StudentForm;
