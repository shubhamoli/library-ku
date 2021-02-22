import React from "react";
import { Link } from "react-router-dom";
import "./StudentHelp.css";

const cards = [
    {
        heading: "I-Card",
        para: "Issue your Library-Card here.",
        para1: "Get your Library-Card online.",
        icon: "I-card",
        link_to: "/issue_i_card",
    },
    {
        heading: "Issue Books",
        para: "Issue your books here.",
        para1: "Get your books early.",
        icon: "Books",
        link_to: "/issue_books",
    },
    {
        heading: "Return Your Books",
        para: "Please return your books after use",
        para1: "Other students need them.",
        icon: "Return books",
        link_to: "/return_books",
    },
    {
        heading: "Student Feedback",
        para: "Please give your suggestions.",
        para1: "Help us improve.",
        icon: "Feedback",
        link_to: "/student_feedback",
    },
];

const StudentHelp = () => {
    return (
        <div className="container  mt-5 pt-3">
            <div className="mt-5 mb-5">
                <h3 className="font-decor">Students Important Links</h3>
                <span className="under-line"></span>
            </div>
            <div className="row border-lining important-box-styling">
                <div className="col-2 p-3 bg-dark text-light important-box-styling">
                    <p>Important Notice :</p>
                </div>
                <div className="col-8 marquee-style">
                    <marquee className="mt-3">
                        hello, this is a important notice to all of you out
                        there. This is my new website and i'll be making this
                        whole website all alone
                    </marquee>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                {cards.map((card) => {
                    return (
                        <div className="col-lg-3 col-sm-8 order-1 mx-auto">
                            <div className="card mt-2 mb-3 card-decoration">
                                <Link to={card.link_to} className="link-decor">
                                    <div className="icon mt-3">{card.icon}</div>
                                    <span className="under-line-card"></span>
                                    <div className="text-heading mt-3">
                                        <h4>{card.heading}</h4>
                                        <p>{card.para}</p>
                                        <p>{card.para1}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StudentHelp;
