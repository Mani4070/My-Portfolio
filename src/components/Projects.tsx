import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    title: "Tasty Kichens",
    description:
      "Tasty Kichens built using ReactJS, mimicking the popular streaming platform UI. (Login - username: rahul, password: rahul@2021)",
    image: "/assets/img/kichen.jpg",
    link: "https://tastykitchensmk.ccbp.tech/login",
  },
  {
    title: "E-Commerce App",
    description:
      "A responsive e-commerce platform built with React, complete with cart and checkout. (Login - username: rahul, password: rahul@2021)",
    image: "/assets/img/e-commerce.jpg",
    link: "https://babbutrendzz.ccbp.tech/login",
  },
  {
    title: "Job Search Platform",
    description:
      "Job listing and application platform built with React and Firebase. (Login - username: rahul, password: rahul@2021)",
    image: "/assets/img/job.png",
    link: "https://jobbyappreactmk.ccbp.tech/",
  },
  {
    title: "Rock Paper Scissors Game",
    description:
      "A fun mini-game implemented with HTML, CSS, and JavaScript.",
    image: "/assets/img/rock.png",
    link: "https://babbugames.ccbp.tech/",
  },
  {
    title: "Nxt Slides",
    description:
      "A task and habit tracker built to boost daily productivity.",
    image: "/assets/img/nxt.png",
    link: "https://nxtslidesmk.ccbp.tech/",
  },
  {
    title: "Food App",
    description:
      "Order food online with this modern React and Node.js application.",
    image: "/assets/img/food.jpg",
    link: "https://foodhubmunch.ccbp.tech/",
  },
];

const Projects: React.FC = () => {
  return (
    <Box className="projects-section" id="projects" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 4, color: "#fff",fontWeight:"750" }}>
          My <span className="highlight">Projects</span>
        </Typography>

        <Box
          className="projects-grid"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 3,
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover .overlay": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.85)",
                  color: "#fff",
                  opacity: 0,
                  transform: "translateY(100%)",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#48aaff" }}
                  >
                    <OpenInNewIcon />
                  </IconButton>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
