
import React, { useState, useEffect } from "react";
import "../styles/ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight; // Set scroll threshold to entire page height
    if (window.scrollY > scrollThreshold) { // Replace window.pageYOffset with window.scrollY
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
      style={{ left: "0", bottom: "20px" }} // Adjusted to touch the left side of the page
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white" // Changed to white color
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-up" // Changed class name to indicate a chevron icon
      >
        <polyline points="18 15 12 9 6 15"></polyline> 
      </svg>
    </div>
  );
};

export default ScrollToTopButton;
