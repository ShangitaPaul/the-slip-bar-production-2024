import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Nav } from "react-bootstrap";
import redondoBeachCarouselImages from "../data/redondoBeachCarouselImages";
import redondoBeachMenu1 from "../menus/redondomenupage2.jpg";
import redondoBeachMenu2 from "../menus/redondomenupage1.jpg";
// import redondoMap from "../maps/redondoparking.png";
import redondoevents1 from "../calendar/april-events-1.jpg";
import redondoevents2 from "../calendar/april-events-2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from "react-bootstrap/Navbar";
import ScrollToTopButton from "./ScrollToTopButton";
import "../styles/RedondoBeach.css";

const RedondoBeach = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tockify.com/browser/embed.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-tockify-script", "embed");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="Redondo Beach">
      <h4 style={{ marginBottom: "-30px", marginTop: "20px" }}>
        Redondo Beach
      </h4>

      <Navbar
        expand="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "-20px",
          marginTop: "0",
          paddingBottom: "0",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Container>
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "0 auto",
              marginBottom: 0,
            }}
          >
            <Nav.Link
              href="#contact"
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 400,
                fontSize: "1.5rem",
                color: "#0d4d8d",
                textDecoration: "none",
                margin: "0 5px", // Add margin to create space between links
              }}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              href="#menu"
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 400,
                fontSize: "1.5rem",
                color: "#0d4d8d",
                textDecoration: "none",
                margin: "0 5px", // Add margin to create space between links
              }}
            >
              MENU
            </Nav.Link>
            <Nav.Link
              href="#events"
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 400,
                fontSize: "1.5rem",
                color: "#0d4d8d",
                textDecoration: "none",
                margin: "0 5px", // Add margin to create space between links
              }}
            >
              CALENDAR
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className="af-height-90 af-max-width mx-auto mt-2 position-relative">
        <Carousel
          activeIndex={currentIndex}
          onSelect={(index) => setCurrentIndex(index)}
          interval={3000} // Set interval to 2 seconds for faster scrolling
        >
          {redondoBeachCarouselImages.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={slide.link}
                alt={slide.title}
              />
              <div className="carousel-caption position-absolute">
                <div className="af-position-lg af-bg-dark-transparent py-5">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container id="contact">
        <h5 className="contact-heading">Contact</h5>
        <Row>
          <Col md={4}>
            <h2 className="h2-custom">Hours of Operation</h2>
            Opens 11:30am daily
            <br />
          </Col>
          <Col md={4}>
            <h2 className="h2-custom">Address</h2>
            120 N International Boardwalk, Redondo Beach, CA 90277
            <br />
            <a
              href="https://www.google.com/maps/dir//120+N+International+Boardwalk,+Redondo+Beach,+CA+90277"
              target="_blank"
              rel="noreferrer"
            >
              GET DIRECTIONS
            </a>

          </Col>
          <Col md={4}>
            <h2 className="h2-custom">Contact Information</h2>
            {/* Phone: <a href="tel:+14243766947">(310) 921-8940</a>
            <br /> */}
            Email: <a href="mailto:info@theslipbar.com">info@theslipbar.com</a>
          </Col>
        </Row>

        <Col md={12}>
          <h2 className="h2-custom">Parking</h2>
          We are located on the Pier. Parking information coming soon!
          {/* hours are free.
          {redondoMap && (
            <img
              src={redondoMap}
              alt="Redondo Beach Parking Map"
              className="img-fluid"
              style={{ maxWidth: "100%", border: "1px #0d4d8d solid" }}
              onError={(e) => console.error("Error loading map image:", e)}
            /> */}
          
        </Col>
      </Container>
      <Container id="menu">
        <h5>Menu</h5>
        <Row>
          <Col md={12}>
            {redondoBeachMenu1 && (
              <img
                src={redondoBeachMenu1}
                alt="Menu Page 1"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
                onError={(e) => console.error("Error loading menu image 1:", e)}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {redondoBeachMenu2 && (
              <img
                src={redondoBeachMenu2}
                alt="Menu Page 2"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
                onError={(e) => console.error("Error loading menu image 2:", e)}
              />
            )}
          </Col>
        </Row>
      </Container>
      <Container id="events">
        <h5>Calendar</h5>
        <h2>Check out <a href="https://www.instagram.com/theslipbar" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /></a> for the latest updates on our events!
          </h2>
           
    
        
        <Row>
          <Col md={6}>
            {redondoevents1 && (
              <img
                src={redondoevents1}
                alt="Events Page 1"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
                onError={(e) => console.error("Error loading events page 1:", e)}
              />
            )}
          </Col>
          <Col md={6}>
            {redondoevents1 && (
              <img
                src={redondoevents2}
                alt="Events Page 2"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
                onError={(e) => console.error("Error loading events page 2:", e)}
              />
            )}
          </Col>
        </Row>
      </Container>
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default RedondoBeach;

