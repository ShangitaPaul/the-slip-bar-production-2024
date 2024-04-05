import React, { Component } from "react";
import COMPANY_DESCRIPTION from "../../data/companyDescription";
import "../../styles/AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Our Story</h1>
        <div className='af-black text-center my-1'>{COMPANY_DESCRIPTION}</div>
      </div>
    );
  }
}

export default AboutUs;
