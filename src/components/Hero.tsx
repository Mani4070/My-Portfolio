import React from "react";
import { Container } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Container className="hero" id="home">
    <div className="hero-content">
        <h3>Hello, I am</h3>
        <h1>Manikanta Vaddi</h1>
        <h2>I'm a <span className="highlight">Full Stack Developer</span></h2>
        <p>Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/manikantavaddi428" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Mani4070" className="social-icon" target="blank"><i className="fab fa-github"></i></a>
            <a href="mailto:manikanta4070@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
        </div>
        <button className="btn primary" onClick={() => window.open('/', '_blank')}>Download Resume <i className="fas fa-download"></i></button>
    </div>
    <div className="hero-image jump-animation">
  <img src="/assets/img/hero.jpg" alt="Manikanta Vaddi" />
</div>

</Container>
  );
};

export default Hero;
