import React, { Component } from "react";
import { MEMBERS } from "../../data/team";
import AboutUs from "./AboutUs";
import "../../styles/About.css"; // Import the About.css f
import ScrollToTopButton from "../ScrollToTopButton"; // Import the ScrollToTopButton component

class About extends Component {
  constructor() {
    super();

    this.state = {
      members: MEMBERS
    };
  }

  render() {
    return (
      <div>
        <img
          src='/img/slipiglogo.png'
          alt='The Slip'
          className="logo"
        />
        <AboutUs members={this.state.members} />
        {/* Scroll to top button */}
        <ScrollToTopButton />
      </div>
    );
  }
}

export default About;
