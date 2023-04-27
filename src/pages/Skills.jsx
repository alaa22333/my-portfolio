import { Box, LinearProgress, Typography, styled } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { HeadLine, skills } from "../utilis/helpers";
import { motion } from "framer-motion";

const Skills = () => {
  const color = theme.palette.primary.main;

  return (
    <Box mt={10} sx={{ paddingX: { md: 15, xs: 3 } }} id="skills">
      <HeadLine title2="Skills" title1="My" />
      <Box
        display="flex"
        flexWrap="wrap"
        my={10}
        justifyContent="center"
        gap={5}
      >
        {skills.map((item, i) => {
          const { skill, value } = item;
          return (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 2 }}
              transition={{ delay: 0.7, duration: 1 }}
              key={i}
              sx={{ width: { md: "36%", xs: "90%" } }}
            >
              <Typography sx={{ color: "white", textTransform: "capitalize" }}>
                {skill}
              </Typography>
              <LinearProgress
                style={{
                  borderRadius: "10px",
                  height: "15px",
                  background: "white",
                }}
                variant="determinate"
                value={value}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
