import React, { Component } from "react";
import "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
      <div className='af-footer mt-5' style={{ backgroundColor: "#0d4d8d", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100px', marginTop: "10px" }}>
        <div className="social-media" style={{ textAlign: "center", marginTop: "10px" }}>
        <a href="https://www.facebook.com/theslipbar" target="_blank" rel="noreferrer">
          <img src="/img/icons8-facebook-50.png" alt="Facebook" style={{ width: "30px", height: "auto", margin: "3px" }} />
        </a>
        <a href="https://www.instagram.com/theslipbar" target="_blank" rel="noreferrer">
          <img
          src="/img/icons8-instagram-50.png"
          alt="Instagram"
          style={{fontSize: "1.5rem", width: "30px", height: "auto", margin: "3px", marginRight: "0px" }}
          />
        </a>
        </div>
        <div className='text-light text-center mt-0 py-0'>
        <p>© 2024 The Slip Bar & Eatery</p>
        <p>All Rights Reserved</p>
        <p>Website by: <a href="https://www.instagram.com/sangitasurfs" className="spaul" target="_blank" rel="noopener noreferrer">S.Paul</a> <a href="https://www.instagram.com/sangitasurfs" className="media" target="_blank" rel="noopener noreferrer">Media</a></p> {/* Apply separate font classes */}
        <br />
        </div>
      </div>
      </div>  
    );
  }
}

export default Footer;
