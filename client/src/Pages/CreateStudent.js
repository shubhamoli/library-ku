import React, { useState } from "react";
import "./CreateStudent.css";
import Axios from "axios";

const CreateStudent = () => {
    const [rollno, setRollno] = useState();
    const [stname, setStName] = useState();
    const [dob, setDob] = useState();
    const [fathersname, setFathersName] = useState();
    const [course, setCourse] = useState();
    const [sem, setSem] = useState();

    const postData = () => {
        Axios.post("http://localhost:5000/students", {
            rollno: rollno,
            stname: stname,
            dob: dob,
            fathersname: fathersname,
            course: course,
            semester: sem,
        }).then(
            console.log(
                "success with values : ",
                rollno,
                stname,
                fathersname,
                dob,
                course,
                sem
            )
        );
    };

    return (
        <div className="content-alignment">
            <p>This is a normal form for a creating new Student in DB</p>
            <label>Roll Number</label>
            <input
                type="text"
                placeholder="enter roll number..."
                required
                onChange={(event) => {
                    setRollno(event.target.value);
                }}
            ></input>

            <label>Name </label>
            <input
                type="text"
                placeholder="Enter your name..."
                required
                onChange={(event) => {
                    setStName(event.target.value);
                }}
            ></input>
            <label>Date of Birth</label>
            <input
                type="text"
                placeholder="enter your dob."
                required
                onChange={(event) => {
                    setDob(event.target.value);
                }}
            ></input>
            <label>Father's Name</label>
            <input
                type="text"
                placeholder="enter yours father's name..."
                required
                onChange={(event) => {
                    setFathersName(event.target.value);
                }}
            />
            <label>Course</label>
            <input
                type="text"
                placeholder="enter your Course...."
                required
                onChange={(event) => {
                    setCourse(event.target.value);
                }}
            ></input>
            <label>Semester</label>
            <input
                type="text"
                placeholder="enter your semester..."
                required
                onChange={(event) => {
                    setSem(event.target.value);
                }}
            ></input>
            <button onClick={postData}>Create Student</button>
        </div>
    );
};

export default CreateStudent;
