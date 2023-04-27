import { Box } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Box
      component={motion.div}
     
      initial={{ opacity: 0, scale: ".3" }}
    
      animate={{ x: [50, 50], opacity: 1, scale: 1.3 }}
      transition={{
        duration: 2,
        delay: 0.3,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      sx={{transform:'translate(-50%,-50%) ', left:{lg:"48%",md:'43%',xs:'33%'}}}
      position="absolute"
      top="50%"
     
    >
      <Logo />
    </Box>
  );
};

export default Loader;
