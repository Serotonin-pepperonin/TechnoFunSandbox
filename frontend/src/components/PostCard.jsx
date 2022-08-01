import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function PostCard(props) {
  const { title, text, img, link } = props;

  return (
    <Grid item xs={12} xm={2} md={4} sx={{ height: "350px" }}>
      <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <CardMedia component="img" image={img} alt={title} height="140" />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" color="initial">
            {title}
          </Typography>
          <Typography variant="body2" color="initial">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={ link } style={{textDecoration:'none'}}>
            <Button>Try!</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
