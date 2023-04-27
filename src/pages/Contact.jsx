import { Box } from "@mui/material";
import { HeadLine } from "../utilis/helpers";
import emailjs from "@emailjs/browser";
import { theme } from "../theme";
import contact from "../assets/contact.gif";
import Form from "../components/Form";
import { motion } from "framer-motion";
const Contact = () => {
 
  return (
    <Box    my={15} sx={{ paddingX: { md: 15, xs: 3 } }} id="contact">
      <HeadLine title2="Contact" />
      <Box
        display="flex"
        mb={15}
        alignItems="center"
        sx={{
          justifyContent: { lg: "space-between", md: "center" },
          mt: { md: 17, xs: 10 },
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: { lg: "40%", xs: "100%" }, textAlign: "center" }}>
          <Box
           component={motion.img}
           initial={{opacity:0,translateX:'-100%'}}
           whileInView={{opacity:2 ,translateX:0}}
        
           transition={{delay:.7,duration:1}}
           
            borderRadius="50%"
            sx={{ width: {xs:'100%', sm: "80%", md: "50%", lg: "90%" } }}
            src={contact}
          ></Box>
        </Box>
        <Box
          display="flex"
          gap={1}
          flexDirection="column"
          alignItems="center"
          mx='0'
          justifyContent='center'
          sx={{ width: { lg: "45%", md: "93%" ,xs:'100%' }, mt: { xs: "20px" } }}
        >
         <Form/>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
