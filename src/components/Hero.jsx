import { Box, Button, Typography,Link } from '@mui/material'
import React from 'react'
import { theme } from "../theme";
import welcome from '../assets/Welcome.gif'
import { Circle } from '@mui/icons-material';
import { motion } from 'framer-motion';
const Hero = () => {
    const color = theme.palette.primary.main;
    return (
    <Box   display='flex' alignItems='center' mb={15} sx={{mt:{md:17,xs:2},flexWrap:'wrap-reverse',paddingX:{md:15,xs:3}}}>
        <Box component={motion.div}
    initial={{opacity:0,translateX:'-20%'}}
    whileInView={{opacity:2,translateX:0}}
 
    transition={{delay:.7,duration:2}}  display='flex' gap={1} flexDirection='column' alignItems='start' sx={{width:{lg:'60%',xs:'100%'},mt:{md:0,xs:'20px'}}}>
<Typography sx={{color:color}}>Hi ,My Name is</Typography>
<Typography  sx={{color:'white',fontSize:{md:'2.5rem',xs:'1.5rem'}}}>Alaa AbdelRasoul<Circle sx={{fontSize:{md:'.8rem',xs:'.5rem'}}}/></Typography>
<Typography  sx={{color:'#cbd5e1',fontSize:{md:'3rem',xs:'1.3rem'}}} >I Build Things For Web<Circle sx={{fontSize:{md:'.8rem',xs:'.5rem'}}}/></Typography>
<Typography sx={{color:theme.palette.secondary.main,width:{md:'70%',xs:'100%'},fontSize:{md:'1rem',xs:'.7rem'}}} component='p'>I'm a frontend web Developer specializing in building exceptional digital experiences and feeling interested in creating new things. </Typography>
<Link href='https://drive.google.com/file/d/1fyRaesj7QFJRyAVcYcj4hXhHPISeP1Rv/view?usp=sharing' target='_blank'  underline='none' sx={{color:color,marginTop:'20px',border:'2px #f472b6 solid' ,'&:hover':{color:theme.palette.background,background:color} ,transition:'all .4s linear',p:'10px'}} >See My Resume</Link>
        </Box>
        <Box  sx={{width:{lg:'40%',xs:'100%'},textAlign:'center'}}>
            <Box component={motion.img}
    initial={{opacity:0,translateY:'60%'}}
    whileInView={{opacity:1,translateY:0}}
 
    transition={{delay:.7,duration:2}}  borderRadius='50%'  sx={{ width: {xs:'100%', sm: "80%", md: "50%", lg: "90%" } }}  src={welcome}></Box>
        </Box>

    </Box>
  )
}

export default Hero
