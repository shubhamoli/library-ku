const DB = {
    users: [
        {
            id: 1,
            name: "Ashish Oli",
            roll_no: "170120270034",
            father_name: "Mr. K.C. Oli",
            dob: "20/02/2000",
            handle: "aoli ",
            profile_picture: "",
            is_active: 1,
        },
        {
            id: 2,
            name: "Akash",
            roll_no: "170120270060",
            father_name: "Mr. Thangunna",
            dob: "10/05/1999",
            handle: "athagunna",
            profile_picture: "",
            is_active: 0,
        },
    ],
    books: [
        {
            id: 3,
            title: "numerical methods",
            author: "krishna publication",
            entry_date: "20/12/2010",
            total_issued: 250,
            remaining_count: 100,
        },

        {
            id: 4,
            title: "Concepts of Physics",
            author: "Dr. H. C. Verma",
            entry_date: "",
            total_issued: 25,
            remaining_count: 10,
        },
    ],
    user_x_books: [
        {
            id: 1,
            user_id: 1,
            book_id: 3,
            issue_date: "2020/12/12 00:00:00",
            is_returned: 0,
        },
        {
            id: 1,
            user_id: 3,
            book_id: 3,
            issue_date: "2020/12/12 00:00:00",
            is_returned: 0,
        },
    ],
    faculties: [
        {
            id: 1,
            faculty_id: 1,
            name: "Dr. Suchetan sah",
            designation: "Assitance librarian",
        },
        {
            id: 2,
            faculty_id: 2,
            name: "Mr. Akash Thagunna",
            designation: "librarian",
        },
        {
            id: 3,
            faculty_id: 3,
            name: "Ms. Gunjan Pandey",
            designation: "Controller",
        },
        {
            id: 4,
            faculty_id: 4,
            name: "Dr. vinayak",
            designation: "Assitance librarian",
        },
        {
            id: 5,
            faculty_id: 5,
            name: "Dr. Mudit sharma",
            designation: "HOD",
        },
        {
            id: 6,
            faculty_id: 6,
            name: "Mr. ajay pandey",
            designation: "head librarian",
        },
        {
            id: 7,
            faculty_id: 7,
            name: "mrs. aradhana mukharjee",
            designation: "incharge of library",
        },
    ],
};

module.exports = DB;
