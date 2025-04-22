import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Services: React.FC = () => {
  return (
    <Container id="services" sx={{ py: 8, textAlign: "center", backgroundColor: "#0d1224" }}>
      <Typography variant="h4" sx={{ mb: 4, color: "#fff",fontWeight:"750" }}>
        My <span style={{ color: "#48aaff" }}>Services</span>
      </Typography>

      {/* Grid Container */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#161d3a",
              borderRadius: 2,
              p: 4,
              boxShadow: "0 1px 10px #fff",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between", // Ensures content is spread across
              height: "80%", // Ensures all cards stretch to same height
              "&:hover": {
                // backgroundColor: "#48aaff",
                color: "#fff",
                transform: "translateY(-5px)",
                boxShadow: "0 0 20px #48aaff",
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Web Development
            </Typography>
            <Typography sx={{ color: "#ddd" }}>
              As a web developer, I create dynamic and functional websites using a combination of front-end and
              back-end technologies. I specialize in building responsive, user-friendly interfaces that enhance
              the user experience. Whether it’s an e-commerce site, a blog, or a custom web application, I bring
              ideas to life through code.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#161d3a",
              borderRadius: 2,
              p: 4,
              boxShadow: "0 1px 10px #fff",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between", // Ensures content is spread across
              height: "80%", // Ensures all cards stretch to same height
              "&:hover": {
                // backgroundColor: "#48aaff",
                color: "#fff",
                transform: "translateY(-5px)",
                boxShadow: "0 0 20px #48aaff",
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              UI Development
            </Typography>
            <Typography sx={{ color: "#ddd" }}>
              UI (User Interface) development focuses on creating the visual elements of a website or application.
              I specialize in turning design mockups into interactive interfaces using HTML, CSS, and JavaScript.
              My goal is to ensure that users have a seamless and enjoyable experience while interacting with your
              product.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#161d3a",
              borderRadius: 2,
              p: 4,
              boxShadow: "0 1px 10px #fff",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between", // Ensures content is spread across
              height: "80%", // Ensures all cards stretch to same height
              "&:hover": {
                // backgroundColor: "#48aaff",
                color: "#fff",
                transform: "translateY(-5px)",
                boxShadow: "0 0 20px #48aaff",
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              UI Designing
            </Typography>
            <Typography sx={{ color: "#ddd" }}>
              UI design is all about aesthetics and usability. As a UI designer, I craft visually appealing
              layouts, choose color schemes, and create intuitive navigation. I pay attention to details like
              typography, spacing, and consistency. My designs aim to enhance the overall look and feel of your
              digital product.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
