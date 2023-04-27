import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { socialLinks } from "../utilis/helpers";

const Footer = () => {
  const color = theme.palette.primary.main;
  return (
    <Stack position='relative' direction='column' width="100%" pb={5} alignItems='center' justifyContent="center">
      <Typography
        sx={{
          color: theme.palette.secondary.main,
          textAlign: "center",
         
          width:'50%',
          fontSize: "20px",
        }}
      >
        Designed & Built by{" "}
        <Box component='span' sx={{ color: color}}>Alaa AbdelRasoul.</Box>{" "}
      </Typography>
      <Stack direction='row'  gap={1}>
        {socialLinks.map((link,i)=>{
          
          return  <Link key={i}   target='_blank' sx={{  color: theme.palette.secondary.main,'&:hover':{  color:color}}} href={link.href} underline='none'  >{<link.icon/>}</Link>
        })}</Stack>
   
    </Stack>
  );
};

export default Footer;
