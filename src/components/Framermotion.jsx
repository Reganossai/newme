import React, { useRef } from "react";
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

// Floating Objects Component (boxes and toruses)
const FloatingObjects = () => {
  const shapes = ["box", "torus"];
  return (
    <>
      {[...Array(20)].map((_, index) => {
        const randomX = Math.random() * 12 - 6;
        const randomY = Math.random() * 4 - 2;
        const randomZ = Math.random() * 12 - 6;
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];

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

// Individual Floating Shape Component
const FloatingShape = ({ position, shapeType }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(Date.now() * 0.001 + position[0]) * 0.5 + position[1];
      meshRef.current.rotation.y += 0.01;
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
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

// Navbar Styles
const navbarStyle = {
  position: "absolute",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  justifyContent: "space-around",
  width: "300px",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "5px",
  padding: "10px",
  zIndex: 10,
  color: "white",
  fontFamily: "Poppins, sans-serif",
};

const linkStyle = {
  cursor: "pointer",
  fontWeight: "600",
  textDecoration: "none",
  color: "white",
};

// Main Framermotion Component
const Framermotion = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh", // ✅ allows content to extend and scroll
        overflowX: "hidden", // ✅ only hides horizontal scroll
        background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
      }}
    >
      <Navbar />

      {/* 3D Animated Background */}
      <Canvas
        style={{
          position: "fixed", // ✅ stays behind content
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // ✅ ensures background stays behind text
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <RotatingSphere />
        <FloatingObjects />
      </Canvas>

      {/* Animated Foreground Text */}
      <motion.div
        style={styles.overlay}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transforming Ideas into Interactive Web Experiences
        </motion.h1>

        <motion.h2
          style={styles.subtitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I’m <span style={{ color: "#ff5733" }}>Reagan Ossai</span>, a
          passionate Frontend Developer.
        </motion.h2>

        <motion.p
          style={styles.paragraph}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          I specialize in crafting beautiful and efficient user interfaces using
          <strong> React.js</strong>, <strong>JavaScript (ES6+)</strong>,{" "}
          <strong>HTML5</strong>, and <strong>CSS3</strong>. My goal is to merge
          design and functionality to create seamless digital experiences that
          look great on every device. Whether it’s building modern dashboards,
          e-commerce stores, or interactive tools — I bring ideas to life with
          clean code and smooth animations.
        </motion.p>

        <motion.div
          style={styles.skills}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h3 style={styles.sectionTitle}>Technical Skills</h3>
          <ul style={styles.list}>
            <li>
              ⚛️ React.js & Next.js – Building fast, scalable single-page apps
            </li>
            <li>
              🎨 UI/UX Design – Turning mockups into pixel-perfect interfaces
            </li>
            <li>
              🧩 JavaScript / TypeScript – Writing clean, reusable, and
              efficient code
            </li>
            <li>
              💼 REST APIs / JSON – Integrating backend services and dynamic
              data
            </li>
            <li>
              📱 Responsive Design – Ensuring flawless experience across devices
            </li>
            <li>
              🚀 Performance Optimization – Enhancing speed and user
              satisfaction
            </li>
            <li>
              🌐 Version Control (Git / GitHub) – Collaborative modern
              development
            </li>
          </ul>
        </motion.div>

        <motion.p
          style={styles.mission}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          “I believe that great frontend development isn’t just about code —
          it’s about{" "}
          <strong>creating digital experiences that feel alive.</strong>”
        </motion.p>

        <motion.div
          style={styles.buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <Link to="/projects" style={styles.button}>
            View My Projects
          </Link>
          <Link to="/contact" style={styles.buttonOutline}>
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Styles
const styles = {
  overlay: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    paddingTop: "10vh",
    paddingBottom: "10vh", // ✅ gives space for scrolling
    color: "white",
    fontFamily: "Poppins, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    fontWeight: "400",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: "1.7",
    color: "#e5e5e5",
    marginBottom: "40px",
  },
  skills: {
    textAlign: "left",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    padding: "20px",
    margin: "0 auto 40px auto",
    maxWidth: "700px",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#ff5733",
    fontWeight: "600",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: "1.8",
  },
  mission: {
    fontStyle: "italic",
    fontSize: "1.1rem",
    marginBottom: "40px",
    color: "#f1f1f1",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    backgroundColor: "#ff5733",
    color: "white",
    textDecoration: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "600",
  },
  buttonOutline: {
    border: "1px solid white",
    color: "white",
    textDecoration: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "600",
  },
};

export default Framermotion;
