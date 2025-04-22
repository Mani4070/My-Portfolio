import React, { useState } from "react";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const certificateImages = [
  "/assets/img/c1.png",
  "/assets/img/c2.png",
  "/assets/img/c3.png",
  "/assets/img/c4.png",
  "/assets/img/c5.png",
  "/assets/img/c6.png",
  "/assets/img/c7.png",
  "/assets/img/c8.png",
  "/assets/img/c9.png",
  "/assets/img/c10.png",
];

const Certification: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Container id="certificates" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, color: "#fff",fontWeight:"750",textAlign:"center" }}>
        My <span style={{ color: "#48aaff"}}>Certificates</span>
      </Typography>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {certificateImages.map((image, index) => (
          <Card
            key={index}
            onClick={() => handleImageClick(image)}
            sx={{
              width: isMobile ? "90%" : 350,
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: '0 4px 10px #48aaff;'
              },
            }}
          >
            <CardMedia
              component="img"
              image={image}
              alt={`Certificate ${index + 1}`}
              sx={{ width: "100%", height: "auto", display: "block" }}
            />
          </Card>
        ))}
      </Box>

      {/* Fullscreen Popup */}
      <Dialog open={!!selectedImage} onClose={handleClose} maxWidth="lg">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#fff",
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 0 }}>
          <img
            src={selectedImage ?? ""}
            alt="Certificate"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Certification;
