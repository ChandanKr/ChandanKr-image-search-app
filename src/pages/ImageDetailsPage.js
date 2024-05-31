import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography } from "@mui/material";

const ImageDetailsPage = () => {
  const location = useLocation();
  const { image } = location.state;

  return (
    <Container>
      <Typography variant="h1">{image.title}</Typography>
      <img src={image.thumbnail} alt={image.title} />
      <Typography variant="body1">{image.description}</Typography>
    </Container>
  );
};

export default ImageDetailsPage;
