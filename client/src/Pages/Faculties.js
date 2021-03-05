import React from "react";
import "./Faculties.css";
import dr from "../Common/drsuchetan.jpg";
import mrs from "../Common/drneeta.jpg";

const faculties = [
    {
        name: "dr. suchetan shah",
        designation: "assistant librarian",
        image: dr,
    },
    {
        name: "dr. neeta bora",
        designation: "HOD",
        image: mrs,
    },
    {
        name: "dr. suchetan shah",
        designation: "assistant librarian",
        image: dr,
    },
    {
        name: "dr. suchetan shah",
        designation: "assistant librarian",
        image: dr,
    },
    {
        name: "dr. suchetan shah",
        designation: "assistant librarian",
        image: dr,
    },
    {
        name: "dr. suchetan shah",
        designation: "assistant librarian",
        image: dr,
    },
    {
        name: "dr. suchetan shah",
        designation: "assistant librarian",
        image: dr,
    },
    {
        name: "dr. suchetan shah",
        designation: "assistant librarian",
        image: dr,
    },
];
class Faculties extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <h3>these are our prominent faculties.</h3>
                <div className="row">
                    {faculties.map((faculty) => {
                        return (
                            <div className="col-lg-3">
                                <div className="card">
                                    <img
                                        src={faculty.image}
                                        className="card-img-top"
                                        alt="dr suchetan sah"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {faculty.name}
                                        </h5>
                                        <p className="card-text">
                                            {faculty.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Faculties;
