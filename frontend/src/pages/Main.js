import { Grid } from "@mui/material";
import React from "react";
import PostCard from "../components/PostCard";
import { postList } from "../data/postlist";


export default function Main() {
  return (
    <>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {postList.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </Grid>
    </>
  );
}
