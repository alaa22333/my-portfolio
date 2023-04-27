import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#f472b6",
      },
      secondary: {
        main: "#94a3b8",
       
      },
      background: "#030712",
     
  
      typography: {
        fontSize: 11,
        h1: {
          fontSize: 48,
        },
        h2: {
          fontSize: 36,
        },
        h3: {
          fontSize: 20,
        },
      
      h4: {
        fontSize: 14,
      },
    },
    boxShadow:{
      main:"#b5b1a5 1px 1px 39px",
      secondary:'#b5b1a5 1px 1px 7px',
    },transitionDuration:{main:'500ms'}
  }})