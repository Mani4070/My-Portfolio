import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { label: "HTML", icon: "/assets/img/html.png" },
  { label: "CSS", icon: "/assets/img/css.png" },
  { label: "Bootstrap", icon: "/assets/img/bootstrap.png" },
  { label: "JavaScript", icon: "/assets/img/javascript.png" },
  { label: "TypeScript", icon: "/assets/img/typescript.png" },
  { label: "React JS", icon: "/assets/img/react.png" },
  { label: "Angular", icon: "/assets/img/angular.png" },
  { label: "Vue JS", icon: "/assets/img/vuejs.png" },
  { label: "Node JS", icon: "/assets/img/nodejs.png" },
  {label: "Express JS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3nGP9w-Ol7H0GYUnDUdCwqnoLwRzoe_cmA&usqp=CAU" },
  { label: "MongoDB", icon: "/assets/img/mongodb.png" },
  { label: "Python", icon: "/assets/img/python.png" },
  { label: "Git", icon: "/assets/img/git.png" },
];

const Skills: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Container id="skills" sx={{ py: 8, textAlign: "center", backgroundColor: "#0d1224" }}>
      <Typography variant="h4" sx={{ mb: 4, color: "#fff",fontWeight:"750" }}>
        Technical <span style={{ color: "#48aaff" }}>Skills</span>
      </Typography>

      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index}>
            <Box
              sx={{
                mx: 1,
                height: 150,
                backgroundColor: "#161d3a",
                margin:"15px",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 1px 10px #fff",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#48aaff",
                  color: "#fff",
                  transform: "translateY(-5px)",
                  boxShadow: "0 0 20px #48aaff",
                },
                "& img": {
                  width: 80,
                  height: 80,
                  marginBottom: 1.5,
                  transition: "transform 0.3s ease",
                },
                "&:hover img": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img src={skill.icon} alt={skill.label} />
              <Typography sx={{ fontWeight: 500, color: "#fff" }}>{skill.label}</Typography>
            </Box>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Skills;
