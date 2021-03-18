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
        //const student_data = await Axios.get("http://localhost:5000/users");
        //console.log(student_data.data[0].name);
    };

    render() {
        return (
            <div className="container bg-dark text-light auth-form-container-styling">
                <h3>Get in touch with us.</h3>
                <span className="under-line-card mt-3"></span>
                <form className="form-alignment" action="/">
                    <input
                        type="text"
                        className="auth-form-styling"
                        placeholder="Your Name..."
                        name="FullName"
                    ></input>

                    <input
                        type="text"
                        className="auth-form-styling"
                        placeholder="Subject..."
                        name="subject"
                    ></input>

                    <input
                        type="text"
                        className="auth-form-styling"
                        placeholder="E-Mail Address..."
                        name="e_Mail"
                    ></input>

                    <textarea
                        name="description"
                        className="auth-form-styling"
                        placeholder="Your Message..."
                    ></textarea>

                    <button
                        type="submit"
                        onClick={this.getStudentData()}
                        className="btn btn-dark text-light submit-button"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
