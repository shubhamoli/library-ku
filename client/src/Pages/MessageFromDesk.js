import React from "react";
import { authorities } from "../Components/Messages";

class MessageFromTDesk extends React.Component {
    render() {
        if (
            this.props.match.params.name === authorities[0].name.toLowerCase()
        ) {
            return (
                <div className="border-secondary">
                    <img src={authorities[0].img} alt="Dr. Suchetan sah" />
                    <h3>{authorities[0].name}</h3>
                    <p>
                        this is the message from {authorities[0].name} our
                        national HOD.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Magna ac
                        placerat vestibulum lectus mauris. <br />
                        Egestas congue quisque egestas diam <br />
                        in. Fames ac turpis egestas maecenas pharetra. Iaculis
                        eu non diam phasellus. Vel quam elementum pulvinar etiam
                        non quam <br />
                        lacus suspendisse faucibus. Ridiculus mus mauris vitae
                        ultricies leo integer malesuada nunc. <br />
                        Vitae semper quis lectus nulla at. Tincidunt dui ut
                        ornare lectus sit. Vel facilisis volutpat est velit
                        egestas dui id ornare. Eleifend mi in nulla posuere.
                        <br />
                        Et tortor consequat id porta nibh venenatis. Cras semper
                        auctor neque vitae tempus quam. Nec ultrices dui sapien
                        eget.
                    </p>
                </div>
            );
        } else {
            return (
                <div className="border-secondary">
                    <img src={authorities[1].img} alt="Dr. Suchetan sah" />
                    <h3>{authorities[1].name}</h3>
                    <p>
                        this is the message from {authorities[1].name} our
                        assistance librarian.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Magna ac
                        placerat vestibulum lectus mauris. <br />
                        Egestas congue quisque egestas diam <br />
                        in. Fames ac turpis egestas maecenas pharetra. Iaculis
                        eu non diam phasellus. Vel quam elementum pulvinar etiam
                        non quam <br />
                        lacus suspendisse faucibus. Ridiculus mus mauris vitae
                        ultricies leo integer malesuada nunc. <br />
                        Vitae semper quis lectus nulla at. Tincidunt dui ut
                        ornare lectus sit. Vel facilisis volutpat est velit
                        egestas dui id ornare. Eleifend mi in nulla posuere.
                        <br />
                        Et tortor consequat id porta nibh venenatis. Cras semper
                        auctor neque vitae tempus quam. Nec ultrices dui sapien
                        eget.
                    </p>
                </div>
            );
        }
    }
}

export default MessageFromTDesk;
