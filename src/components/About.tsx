import React from "react";
import {Container } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container className="about-section" id="about">
        <h2>About <span className="highlight">Me</span></h2>
        <p>
            I’m a Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, SQL, MongoDB,
            Node.js, Express.js, ReactJS, and Figma.
            I’m passionate about using these skills to develop innovative web applications that are user-friendly.
            I’m always eager to learn more about web development and marketing. I enjoy the challenge of coding and
            solving real-world problems.
            Currently, I’m looking for opportunities to join a team that values innovation and shares my enthusiasm for
            technology.
        </p>
    </Container>
  );
};

export default About;
