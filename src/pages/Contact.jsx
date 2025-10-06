import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div style={contactPageStyle}>
      <h1 style={styles.title}>Contact Me</h1>
      <p style={styles.text}>
        Feel free to reach out for collaborations, projects, or just to say hi!
      </p>

      <div style={styles.contactInfo}>
        <p>Email: <a href="mailto:ossaireagano@gmail.com" style={styles.link}>ossaireagano@gmail.com</a></p>
        <p>Phone: <a href="tel:+17473247111" style={styles.link}>747-324-7111</a></p>
      </div>

      <Link to="/" style={styles.homeButton}>
        Back Home
      </Link>
    </div>
  );
};

const contactPageStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
  color: "white",
  padding: "20px",
};

const styles = {
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    fontFamily: "Poppins, sans-serif",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
  },
  contactInfo: {
    fontSize: "1.1rem",
    marginBottom: "40px",
    textAlign: "center",
  },
  link: {
    color: "#ff5733",
    textDecoration: "none",
    fontWeight: "600",
  },
  homeButton: {
    backgroundColor: "#ff5733",
    color: "white",
    textDecoration: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    transition: "background 0.3s",
  },
};

export default Contact;
