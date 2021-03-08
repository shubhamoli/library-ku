import React from "react";
import office from "../Common/office.jpeg";
import readingroom from "../Common/readingroom.jpeg";

import img from "../Common/gbpantlib.png";
import newbookbank from "../Common/newbookbank.jpeg";
import bookbank from "../Common/bookbank.jpeg";

import "./Section.css";

const librarySections = [
    {
        name: "Office",
        description: `This is our Office section that we have in our library.
        This section of the library provide you with lots of hand in facilities like problems related to library, helps with issues related to library card, problem related to books are easily solved by our highly professional staff.
        You can visit us anytime, we'll try to solve your problem as soon possible.
        Thank you `,
        img: office,
        alt: "this is office image",
    },

    {
        name: "Book Bank",
        description: `This is our Book Bank section we have in our library.
        This section has session has vast variety of books of all the courses we have in our college.
        This is the section where you can issue your books in the beginning of the semester and then return to same place after the session gets over.
        Do visit us and help yourself learn and grow.
        Thank you.`,

        img: bookbank,
        alt: "this is book bank image",
    },
    {
        name: "New book Bank",
        description: `This is our New Book Bank section we have in our library.
        This is section in our library where you can issue your books with 10% payment only.
        In case the books aren't available in the book bank you can visit us.
        you'll never be without book.
        A student is defined by his books and you'll never loose one. 
        Thank you.`,

        img: newbookbank,
        alt: "this is new book bank image",
    },
    {
        name: "Reading Room",
        description: `This is our Reading Room we have in our library.
        Here you can come up any time and study in silence.
        This is always open to student. Let your mind and soul be at peace and help yourself learn more and more.
        Do visit us for silence and peacful studies.
        Thank you`,
        img: readingroom,
        alt: "this is reading room section image",
    },
    {
        name: "Conference room",
        description: `This is our Conference room we have in our library.
        Here you can come in groups and have a discussion with you friends and faculites over your doubt.
        Always remember discussion is must, it lets you gain more knowledge and clear doubts.
        Thank you.`,
        img: readingroom,
        alt: "this is comference room image",
    },
    {
        name: "Computer Lab",
        description: `This is our computer lab we provide in our library.
        Our computer labs are well connected to the internet which you can help to grow further.
        You are provided with e-books in the computer so that you never miss reading and learning.
        Please do visit our computer lab section.
        Thank you.`,
        img: img,
        alt: "this is computer lab section image",
    },
    {
        name: "Reprography",
        description: `This is our reprography section we have in our library.
           
        This section of the library provide you with lots of hand in facilities like internet connection, helps with print out for your project, helps you in your notes getting photocopied etc.$
         
       You can also find different accessories here like stationary. `,
        img: img,
        alt: "this is reprography section image",
    },
];

const Section = () => {
    return (
        <div className="container mt-5">
            <h4 className="mb-5">
                These are the various sectional facilities provided to our
                students with any kind of help
            </h4>
            {librarySections.map((section) => {
                return (
                    <div className="card mb-3 mt-5 card-border-styling">
                        <div className="row g-0">
                            <div className="col-md-4 sizing">
                                <img src={section.img} alt={section.alt} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {section.name}
                                    </h5>
                                    <p className="card-text mt-3">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Section;
