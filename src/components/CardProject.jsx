import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { theme } from "../theme";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
const CardProject = ({ imgUrl, url, git, uses, name, color }) => {
  const themeColor = theme.palette.primary.main;

  const [showDetails, setShowDetails] = useState(false);
  return (
    <Box
      onMouseDown={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      position="relative"
      whileInView={{
        opacity: 1,scale:1
      }}
      
      sx={{height:{md:300,xs:400}}}
      borderRadius='10px'
      initial={{ opacity: 0 ,scale:.9}}
      whileHover={{translateY:-30}}
      transition={{ delay: 0.6 ,duration:1}}
      component={motion.div}
      
     
    >
  
        <picture>
          <source
            sizes="(min-width: 1200px) 730w"
            srcSet={`${imgUrl} 730w`}
          ></source>
          <source
            sizes="(max-width: 1199px) 610w"
            srcSet={`${imgUrl} 610w`}
          ></source>
          <source
            sizes="(max-width: 380px) 350w"
            srcSet={`${imgUrl} 350w`}
          ></source>
          <Box
          component='img'
            src={imgUrl}
            loading="lazy"
            sx={{objectPosition:'center ',flexShrink:0, objectFit:{md:'fill',xs:'cover'},borderRadius: "10px",height:'100%',maxWidth:'100%',width:{xl:600,lg:500,md:800,xs:'100%' }, }}>
           
            
          </Box>
        </picture>
        
        <Box
          sx={{
            position: "absolute",
            top: 0,
            background:showDetails? "#00000095":'#00000040',
            zIndex: 9,
            height: "100%", borderRadius:'10px',
            width: "100%",
          }}
        >
          {showDetails && (
            <Stack
              whileInView={{
                opacity: 1,
              }}
             
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5,duration:1 }}
              component={motion.div}
              direction="column"
              justifyContent="center"
              alignItems="center"
              gap={4}
              sx={{ mt:{md:0,xs:4}}}
              padding={5}
            >
              <Typography
               
                justifyContent="center"
                alignItems="center"
                sx={{ color: "white" ,whiteSpace:'nowrap',fontSize:{md:'30px',xs:'20px'}}}
              >
                {name}
              </Typography>
              <Box
               
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
               
                sx={{gap:{lg:3,xs:2}}}
              >
                {uses.map((item, i) => {
                  return (
                    <Button
                      key={i}
                    
                      variant="contained"
                      sx={{
                        color: "white",
                        background: color,
                        '&:hover':{background:color,opacity:.9},
                       
                        padding: " 5px 10px",whiteSpace:'nowrap',
                        fontSize: { md: "18px", xs: "15px" },
                        textTransform: "capitalize",
                      }}
                    >
                      {item}
                    </Button>
                  );
                })}
              </Box>
              <Stack   direction="row" gap={4}>
                <Link
                  href={git}
                  target='_blank'
                  sx={{ color: "white", "&:hover": { color: color } }}
                >
                  <GitHub sx={{ fontSize: "40px" }} />
                </Link>

                {url && (
                  <Link
                  target='_blank'
                  
                    href={url}
                    sx={{ color: "white", "&:hover": { color: color } }}
                  >
                    <LaunchIcon sx={{ fontSize: "40px" }} />
                  </Link>
                )}
              </Stack>
            </Stack>
          )}
        </Box>
        
    
    </Box>
  );
};

export default CardProject;
