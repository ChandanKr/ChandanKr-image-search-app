import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details", { state: { image } });
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          image={image.thumbnail}
          alt={image.title}
        />
        <CardContent>
          <Typography variant="h2">{image.title}</Typography>
          <Typography variant="body1">{image.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImageCard;
