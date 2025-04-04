import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

// Rotating Sphere Component
const RotatingSphere = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#ff5733" wireframe />
    </mesh>
  );
};

// Floating Objects Component (only boxes and toruses)
const FloatingObjects = () => {
  const shapes = ["box", "torus"]; // Array of shapes (boxes and toruses)
  return (
    <>
      {[...Array(20)].map((_, index) => {
        const randomX = Math.random() * 12 - 6; // Spread X position wider
        const randomY = Math.random() * 4 - 2; // Random Y position
        const randomZ = Math.random() * 12 - 6; // Spread Z position wider
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)]; // Randomly select a shape

        return (
          <FloatingShape
            key={index}
            position={[randomX, randomY, randomZ]}
            shapeType={shapeType}
          />
        );
      })}
    </>
  );
};

// Individual Floating Shape Component (boxes and toruses)
const FloatingShape = ({ position, shapeType }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(Date.now() * 0.001 + position[0]) * 0.5 + position[1]; // Float effect
      meshRef.current.rotation.y += 0.01; // Continuous rotation
    }
  });

  let geometry;
  switch (shapeType) {
    case "box":
      geometry = <boxGeometry args={[0.5, 0.5, 0.5]} />;
      break;
    case "torus":
      geometry = <torusGeometry args={[0.3, 0.1, 16, 32]} />;
      break;
    default:
      geometry = <boxGeometry args={[0.5, 0.5, 0.5]} />;
  }

  // Mature color palette
  const color = new THREE.Color(`hsl(${Math.random() * 360}, 70%, 40%)`);

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};



// Navbar Component
const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/projects" style={linkStyle}>
          Projects
        </Link>
      </div>
      <div>
        <Link to="/" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

// Navbar styles
const navbarStyle = {
  position: "absolute",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  justifyContent: "space-around",
  width: "300px",
  background: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
  borderRadius: "5px",
  padding: "10px",
  zIndex: 10,
  color: "white",
  fontFamily: "Poppins, sans-serif", 
};

const linkStyle = {
  cursor: "pointer",
  fontWeight: "600", 
  textDecoration:"none",
  color:"white",
};

// Main Framermotion Component
const Framermotion = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
      }}
    >
      <Navbar /> {/* Add the Navbar */}
      {/* Three.js Animated Background */}
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <RotatingSphere />
        <FloatingObjects /> {/* Floating objects */}
      </Canvas>
      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          zIndex: 2,
          fontFamily: "Poppins, sans-serif", // Use Poppins font for the main text
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Hello, I'm Ossai Osaegboka Reagan
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "400",
            marginBottom: "20px",
          }}
        >
          I'm a Web Developer, Cloud Architect, and Business Intelligence
          Manager based in Los Angeles, California.
        </h2>
      </div>
    </div>
  );
};

export default Framermotion;
