import React from "react";
import { Grid } from "@mui/material";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image) => (
        <Grid item key={image.id} xs={12} sm={6} md={4}>
          <ImageCard image={image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageList;
