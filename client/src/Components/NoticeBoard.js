import React from "react";
import { Link } from "react-router-dom";
import "./NoticeBoard.css";
import "./StudentHelp.css";

const notice = [
    {
        title: "Announcements",
        content: [
            "announcement 1",
            "announcement 2",
            "announcement 3",
            "announcement 4",
            "announcement 5",
            "announcement 6",
            "announcement 7",
            "announcement 10",
        ],
    },
    {
        title: "Press Release",
        content: [
            "Press release 1",
            "Press release 2",
            "Press release 3",
            "Press release 4",
            "Press release 5",
        ],
    },
    {
        title: "Awards and Achievements",
        content: [
            "awards and achievement 1",
            "awards and achievement 2",
            "awards and achievement 3",
            "awards and achievement 4",
            "awards and achievement 5",
            "awards and achievement 6",
        ],
    },
];

const NoticeBoard = () => {
    return (
        <div className="container mt-5 pt-2">
            <div className="mt-5">
                <p className="font-decor">Know Us More</p>
                <span className="under-line"></span>
            </div>
            <div className="row mt-5">
                {notice.map((notice) => {
                    return (
                        <div className="col-lg-3 col-sm-8 order-1 mx-auto">
                            <div className="mt-3">
                                <h4>{notice.title}</h4>
                                <span className="under-line-card"></span>
                            </div>
                            <div className="notice-box mt-3 pt-3 card-decoration">
                                {notice.content.map((content) => {
                                    return (
                                        <Link
                                            to={content}
                                            className="link-decor"
                                        >
                                            <p className="content-alignment">
                                                {content}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NoticeBoard;
