// This is the home page of the app.
// contains all the components firstly seen in home page of the app.

import React from "react";
import AuthenticationForm from "../Components/AuthenticationForm";
import Carousal from "../Components/Carousal";

import InstituteDetails from "../Components/InstituteDetails";
import Messages from "../Components/Messages";

import NoticeBoard from "../Components/NoticeBoard";
import StudentHelp from "../Components/StudentHelp";

const Home = () => {
    return (
        <>
            <Carousal />

            <InstituteDetails />
            <Messages name={window.location.pathname} />

            <StudentHelp />
            <NoticeBoard />
            <AuthenticationForm />
        </>
    );
};

export default Home;
