// Footer.jsx
import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1f2937", // dark gray
    color: "white",
    padding: "24px 16px",
    marginTop: "32px",
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const linkContainer = {
    display: "flex",
    gap: "16px",
    margin: "12px 0",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const socialStyle = {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    marginTop: "8px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Left: Branding */}
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Mini E-Commerce</h1>
          <p style={{ fontSize: "14px", color: "#d1d5db" }}>© 2026 All rights reserved</p>
        </div>

        {/* Center: Links */}
        <div style={linkContainer}>
          <a href="#products" style={linkStyle}>Products</a>
          <a href="#cart" style={linkStyle}>Cart</a>
          <a href="#orders" style={linkStyle}>Orders</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>

        {/* Right: Social */}
        <div style={socialStyle}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={linkStyle}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={linkStyle}>Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={linkStyle}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;