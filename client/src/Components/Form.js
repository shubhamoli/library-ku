import React from "react";
import "./Form.css";
import Axios from "axios";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FullName: null,
            RollNo: null,
            FathersName: null,
            e_mail: null,
            DOB: null,
        };
    }
    getStudentData = async () => {
        const student_data = await Axios.get("http://localhost:5000/users");
        console.log(student_data.data[0].name);
    };

    render() {
        return (
            <div className="container-fluid border-lining">
                <h4>Get in touch with us.</h4>
                <form className="mt-4" action="/">
                    <p className="d-flex justify-content-center form-styling">
                        Full Name
                        <input
                            type="text"
                            className=""
                            placeholder="Enter you name..."
                            name="FullName"
                        ></input>
                    </p>

                    <p className="d-flex justify-content-center form-styling">
                        Subject
                        <input
                            type="text"
                            placeholder="Subject...."
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
                    <p className="d-flex justify-content-center form-styling">
                        Message
                        <textarea
                            name="description"
                            placeholder="your message"
                        ></textarea>
                    </p>

                    <button
                        type="submit"
                        onClick={this.getStudentData()}
                        className="btn btn-dark text-light"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
