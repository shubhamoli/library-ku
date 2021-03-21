import React, { useState } from "react";
import Axios from "axios";
import("./CreateStudent.css");

const CreateBooks = () => {
    const [bookName, setBookName] = useState();
    const [bookID, setBookID] = useState();
    const [tag, setTag] = useState();
    const [author, setAuthor] = useState();
    const [sem, setSem] = useState();
    const [course, setCourse] = useState();
    const [totalBooks, setTotalBooks] = useState();

    const postData = () => {
        Axios.post("http://localhost:5000/books/create", {
            name: bookName,
            bookID: bookID,
            tag: tag,
            author: author,
            total_Books: totalBooks,
            semester: sem,
            course: course,
        }).then(
            console.log(
                "success with values : ",
                bookName,
                bookID,
                tag,
                author,
                totalBooks,
                sem,
                course
            )
        );
    };

    return (
        <div className="content-alignment">
            <p>This is a normal form for a creating new Books in DB</p>
            <label>Book' Name</label>
            <input
                type="text"
                placeholder="enter Book name..."
                required
                onChange={(event) => {
                    setBookName(event.target.value);
                }}
            ></input>

            <label>Book ID </label>
            <input
                type="text"
                placeholder="Enter your Book number..."
                required
                onChange={(event) => {
                    setBookID(event.target.value);
                }}
            ></input>
            <label>Author</label>
            <input
                type="text"
                placeholder="enter Author name"
                required
                onChange={(event) => {
                    setAuthor(event.target.value);
                }}
            ></input>
            <label>Tag</label>
            <input
                type="text"
                placeholder="enter tag (e.g - maths,physics etc...)"
                required
                onChange={(event) => {
                    setTag(event.target.value);
                }}
            />
            <label>Total Books</label>
            <input
                type="text"
                placeholder="enter total books..."
                required
                onChange={(event) => {
                    setTotalBooks(event.target.value);
                }}
            ></input>
            <label>Semester</label>
            <input
                type="text"
                placeholder="enter which sem book it is..."
                required
                onChange={(event) => {
                    setSem(event.target.value);
                }}
            ></input>
            <label>Course</label>
            <input
                type="text"
                placeholder="enter books course..."
                required
                onChange={(event) => {
                    setCourse(event.target.value);
                }}
            ></input>

            <button onClick={postData}>Create Book</button>
        </div>
    );
};

export default CreateBooks;
