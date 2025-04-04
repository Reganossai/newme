import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Projects = () => {
  const updateScoreInfo = () => {
    
    alert("This project allows users to check live scores,fixtures,league standings and players stats in the top leagues in soccer. This website was created using react framework as the frontend framework.");
  };

  const kinkiverseInfo = () => {
    
    alert("This project is a demo shopping website created using react framework");
  };

  return (
    <div style={projectsPageStyle}>
      <h1 style={{ color: "white", fontFamily: "Poppins, sans-serif" }}>
        My Projects
      </h1>
      <p style={{ color: "white", fontFamily: "Roboto, sans-serif", textAlign:"center" }}>
        Here are some of my projects that showcase my skills in web development,
        cloud architecture, and business intelligence.
      </p>
      <ul>
        <li>
          <a href="https://updatescore-reagan.netlify.app/" className="update">
            Update Scores (Web development)
          </a>
          <span onClick={updateScoreInfo} style={iconStyle}>
            <FontAwesomeIcon icon={faCircleInfo} className="fontawe" />
          </span>
        </li>

        <li>
          <a href="https://kinkiverse.netlify.app/" className="update">
            Kinkiverse  (Web development)
          </a>
          <span onClick={kinkiverseInfo} style={iconStyle}>
            <FontAwesomeIcon icon={faCircleInfo} className="fontawe" />
          </span>
        </li>

        <li>
          <a href ="/" className="update">
            Yet Another Project
          </a>
          <span onClick={updateScoreInfo} style={iconStyle}>
            <FontAwesomeIcon icon={faCircleInfo} className="fontawe" />
          </span>
        </li>

        <li>
          <a href="/" className="update">
            More Projects
          </a>
          <span onClick={updateScoreInfo} style={iconStyle}>
            <FontAwesomeIcon icon={faCircleInfo} className="fontawe" />
          </span>
        </li>
      </ul>
    </div>
  );
};

// Styles for the Projects page
const projectsPageStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "linear-gradient(135deg, #1f1c2c, #928DAB)", // Background gradient
};

// Styles for the icon
const iconStyle = {
  cursor: "pointer",
  marginLeft: "10px",
};

export default Projects;
