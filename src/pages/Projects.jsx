import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Projects = () => {
  const updateScoreInfo = () => {
    alert(
      "This project allows users to check live scores, fixtures, league standings and players stats in the top leagues in soccer. This website was created using React framework as the frontend framework."
    );
  };

  const kinkiverseInfo = () => {
    alert("This project is a demo shopping website created using React framework.");
  };

  const userlistInfo = () => {
    alert(
      "This project is a website that displays demo users and their respective information and was created using React framework."
    );
  };

  const elRapidoInfo = () => {
    alert(
      "ElRapido is a website to carry out a lot of functions for job coaches and companies that deal with people with disability."
    );
  };

  return (
    <div style={projectsPageStyle}>
      <h1 style={{ color: "white", fontFamily: "Poppins, sans-serif" }}>
        My Projects
      </h1>
      <p style={{ color: "white", fontFamily: "Roboto, sans-serif", textAlign: "center" }}>
        Here are some of my projects that showcase my skills in web development,
        cloud architecture, and business intelligence.
      </p>
      <ul>

         <li>
          <a href="https://elrapido.netlify.app/" className="update">
            ElRapido 
          </a>
          <span onClick={elRapidoInfo} style={iconStyle}>
            <FontAwesomeIcon icon={faCircleInfo} className="fontawe" />
          </span>
        </li>

        <li>
          <a href="https://updatescore-reagan.netlify.app/" className="update">
            Update Scores 
          </a>
          <span onClick={updateScoreInfo} style={iconStyle}>
            <FontAwesomeIcon icon={faCircleInfo} className="fontawe" />
          </span>
        </li>

        <li>
          <a href="https://kinkiverse.netlify.app/" className="update">
            Kinkiverse 
          </a>
          <span onClick={kinkiverseInfo} style={iconStyle}>
            <FontAwesomeIcon icon={faCircleInfo} className="fontawe" />
          </span>
        </li>

        <li>
          <a href="https://userlist-userinfo-demo.netlify.app/" className="update">
            Users list and User Information demo 
          </a>
          <span onClick={userlistInfo} style={iconStyle}>
            <FontAwesomeIcon icon={faCircleInfo} className="fontawe" />
          </span>
        </li>

      </ul>

      {/* Back Home Button */}
      <Link to="/" style={styles.homeButton}>
        Back Home
      </Link>
    </div>
  );
};

// Styles for the Projects page
const projectsPageStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
  paddingBottom: "40px", // Space for the home button
};

// Styles for the icon
const iconStyle = {
  cursor: "pointer",
  marginLeft: "10px",
};

// Styles for Back Home button
const styles = {
  homeButton: {
    marginTop: "30px",
    backgroundColor: "#ff5733",
    color: "white",
    textDecoration: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    transition: "background 0.3s",
  },
};

export default Projects;
