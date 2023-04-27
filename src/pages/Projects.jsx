import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { HeadLine, projects } from "../utilis/helpers";
import CardProject from "../components/CardProject";
import { theme } from "../theme";
import { motion } from "framer-motion";
const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const color = theme.palette.primary.main;

  return (
    <Box my={15} id='projects' sx={{ paddingX: { md: 15, xs: 3 } }} >
      <HeadLine title1='My' title2="Projects" />
      <Box
        display="flex"
        flexWrap="wrap"
        my={10}
        justifyContent="center"
        gap={5}
      >
        {projects.slice(0, 4).map((item, i) => {
          return <CardProject key={i} {...item} />;
        })}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={5}
          id="show"
        >
          {showMore &&
            projects.slice(4).map((item, i) => {
              return <CardProject key={i} {...item} />;
            })}
        </Box>
      </Box>
      <Box width="100%" sx={{ textAlign: "center" }}>
        <Button variant="outlined"
          onClick={() => setShowMore(!showMore)}
          sx={{
            "&:hover": { background: color ,color:theme.palette.background},
            borderColor: color,transition:'all linear .5sa'
            
          }}
        >
          {showMore ? "show less" : "Show More"}{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
