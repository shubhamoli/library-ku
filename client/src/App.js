// The main component in which holds all the app components.

import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import CreateBooks from "./Pages/CreateBook";
import CreateStudent from "./Pages/CreateStudent";
import ENewsLetter from "./Pages/ENewsLetter";
import Events from "./Pages/Events";
import Faculties from "./Pages/Faculties";
import Home from "./Pages/Home";
import IssueIBooks from "./Pages/IssueBooks";
import IssueICard from "./Pages/IssueICard";
import MessageFromTDesk from "./Pages/MessageFromDesk";
import ReturnBooks from "./Pages/ReturnBooks";
import Section from "./Pages/Section";
import Services from "./Pages/Services";
import StudentFeedback from "./Pages/Student_feedback";

class App extends React.Component {
    render() {
        return (
            // All conponents sequences and rendering.
            <div className="App">
                <Header />
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/events" component={Events}></Route>
                    <Route exact path="/services" component={Services}></Route>
                    <Route
                        exact
                        path="/students/create"
                        component={CreateStudent}
                    ></Route>
                    <Route
                        exact
                        path="/faculties"
                        component={Faculties}
                    ></Route>
                    <Route
                        exact
                        path="/enewsletter"
                        component={ENewsLetter}
                    ></Route>
                    <Route exact path="/aboutus" component={About}></Route>
                    <Route
                        exact
                        path="/contactus"
                        component={ContactUs}
                    ></Route>
                    <Route
                        exact
                        path="/issue_i_card"
                        component={IssueICard}
                    ></Route>
                    <Route
                        exact
                        path="/issue_books"
                        component={IssueIBooks}
                    ></Route>
                    <Route
                        exact
                        path="/return_books"
                        component={ReturnBooks}
                    ></Route>
                    <Route
                        exact
                        path="/student_feedback"
                        component={StudentFeedback}
                    ></Route>
                    <Route
                        exact
                        path="/message_from_desk/:name"
                        component={MessageFromTDesk}
                    ></Route>
                    <Route
                        exact
                        path="/library_section"
                        component={Section}
                    ></Route>

                    <Route
                        exact
                        path="/books/create"
                        component={CreateBooks}
                    ></Route>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
