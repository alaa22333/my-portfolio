import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Divider, Link, Stack } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { socialLinks } from "../utilis/helpers";

const Borders = () => {
  const color=theme.palette.primary.main
  return (
    <Stack
    direction="row"
    justifyContent="space-between"
   
    width="100%"
    sx={{ position: "fixed",bottom:{xs:'240px',md:0},paddingX:{md:4,xs:1},display:{md:'flex',xs:'none'}} } 
    >
      <Stack direction="column" gap={3} sx={{ color: "white" }}  alignItems='center'>
        {socialLinks.map((link,i)=>{
          
          return  <Link key={i}   target='_blank' underline='none' sx={{color:'white','&:hover':{color:color}}}  href={link.href}>{<link.icon/>}</Link>
        })}
        <Divider
      
          orientation="vertical"
          sx={{
            borderColor:{md: color},
           height:'100px',
         
            mt: "13px",
          }}
        />
      </Stack>
      <Stack direction="column"  mr='-67px'  justifyContent='space-between' alignItems='center'>
        <Link
      target='_blank'
          href="https://alaa.ahmed20022002@gmail.com"
          sx={{ transform: "rotate(90deg)", }}
        >
          alaa.ahmed20022002@gmail.com
        </Link>
        <Divider
      
      orientation="vertical"
      sx={{
        borderColor: color,
       height:'100px',
      
      }}
    />
      </Stack>
    </Stack>
  );
};

export default Borders;
