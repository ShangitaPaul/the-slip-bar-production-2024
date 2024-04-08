import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "../styles/Navigation.css";

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const unlisten = history.listen(() => {
      setExpanded(false); // Close the navigation menu when location changes
    });
    return () => {
      unlisten(); // Cleanup function to remove the listener when component unmounts
    };
  }, [history]);

  return (
    <Navbar expand="lg" bg="light" className="navbar-with-border" expanded={expanded}>
      <Container>
        {/* <Nav.Link as={Link} to="/" className="instagram-icon"><i className="fab fa-instagram"></i></Nav.Link> Instagram icon */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img src="/img/slip-banner-logo-2024.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
            <NavDropdown title="LOCATIONS" id="locations-dropdown" className="custom-dropdown justify-content-center">
              <NavDropdown.Item as={Link} to="/redondo-beach">REDONDO BEACH</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lomita">LOMITA</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CALENDAR" id="events-dropdown" className="custom-dropdown justify-content-center">
              <NavDropdown.Item as={Link} to="/redondo-beach#events">REDONDO BEACH CALENDAR</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lomita#events">LOMITA CALENDAR</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
