// Header.js contains header of the app which contains titlehead.js file of the app

import React from "react";

import TitleHead from "./TitleHead";

const Header = () => {
    return (
        // rendering TitleHead.js file
        <div className="container-fluid">
            <TitleHead />
        </div>
    );
};

export default Header;
