import React, { useRef, useState } from "react";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { HeadLine } from "../utilis/helpers";
import emailjs from "@emailjs/browser";
import { theme } from "../theme";

import TelegramIcon from "@mui/icons-material/Telegram";
import { motion } from "framer-motion";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
        console.log(result.text);
        
     
        },
        (error) => {
          console.log(error.text);
        }
      );
   
      
      
    e.target.reset();
   
  };
  const color = theme.palette.primary.main;

  return (
    <Stack
    
      direction="column"
      onSubmit={sendEmail}
      ref={form}
      component={motion.form}
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:.5,duration:1}}
      gap={2}
      sx={{
        borderRadius: "40px",
        background: "white",
        padding: "2rem 1.3rem",
        width: "80%",
      }}
    >
      <Typography
        sx={{
          color: color,
          m: 0,
          fontSize: {
            md: "50px",
            xs: "40px",
            textAlign: "center",whiteSpace:'nowrap',
            fontWeight: "800",
          },
        }}
      >
      <Box  sx={{color:theme.palette.background}} component='span'>  Say</Box> Hello !
      </Typography>
      <Stack gap={1}>
        {" "}
        <Box component="label" sx={{ color: color }}>
          User Name
        </Box>
        <TextField
          type="text"
          name="user_name"
          label="User Name"
          style={{
            backgroundColor: "white",
          }}
          InputProps={{
            style: {
              color: "black",
            },
          }}
          variant="outlined"
        />
      </Stack>
      <Stack gap={1}>
        <Box component="label" sx={{ color: color }}>
          Email
        </Box>
        <TextField type="email" name="email" label="Email" variant="outlined" />
      </Stack>
      <Stack gap={1}>
        <Box component="label" sx={{ color: color }}>
          Message
        </Box>
        <Box
          component="textarea"
          type=""
          id="email"
          label="Enter Your Message"
          placeholder="Enter Message"
          sx={{
            borderColor: color,
            padding: "13px",
            resize: "none",
            "&:focus-visible": { borderColor: color },
            height: 120,
            "&::placeholder": {
              fontSize: "20px",
              fontFamily: '"Roboto",sans-serif',
            },
            borderRadius: "10px",
          }}
        ></Box>
      </Stack>
      <Box>
        <Button
          type="submit"
          sx={{
            background: color,
            p: "10px  20px 10px 40px",
            color: "white",
            "&:hover": { background: color },
            borderRadius: "60px",
            mt: "10px",
          }}
        >
          Send
          <TelegramIcon />
        </Button>
      </Box>
    </Stack>
  );
};

export default Form;
