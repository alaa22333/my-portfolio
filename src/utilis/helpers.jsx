import { Home } from "@mui/icons-material";
import FolderIcon from "@mui/icons-material/Folder";
import PersonIcon from "@mui/icons-material/Person";
import DraftsRoundedIcon from "@mui/icons-material/DraftsRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";
import { theme } from "../theme";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img11 from '../assets/img11.png';
const color = theme.palette.primary.main;

export const links = [
  { icon: Home, title: "Home", href: "#home" },
  { icon: PersonIcon, title: "skills", href: "#skills" },
  { icon: FolderIcon, title: "Projects", href: "#projects" },
  { icon: DraftsRoundedIcon, title: "Contact", href: "#contact" },
];
export const socialLinks = [
  { icon: FacebookRoundedIcon, href: "https://www.facebook.com/loly.ahmed.16121/" },
  { icon: GitHubIcon, href: "https://github.com/alaa22333" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/alaa-ahmed-852865214" },
];
export const skills=[
  {skill:'HTML',value:80},
  {skill:'CSS',value:90},
  {skill:'Tailwind css',value:90},
  {skill:'MUI',value:80},
  {skill:'Javascript',value:90},
  {skill:'React js',value:95},
  {skill:' Redux',value:80},
  {skill:'git',value:60},
]

export const projects=[
{imgUrl:img1,color:'#E50914',url:'https://react-netflix-website.netlify.app/',git:'https://github.com/alaa22333/React-Netflix-Website',uses:['Tailwind css','React js','Redux Toolkit','firebase','Rest Api'],name:'Netflix App'},
{imgUrl:img2,color:'#f97316',url:'https://artenon-e-commerce-website.netlify.app/',git:'https://github.com/alaa22333/Ecommerce-Artenon-Website',uses:['Mui','React js','Context','firebase','Rest Api'],name:'Artenon E-commerce Website'},
{imgUrl:img11,color:'#3b82f6',git:'https://github.com/alaa22333/React-Dashboard',uses:['Material Tailwind','Mui','full Calendar','React js','firebase'],name:'E-commerce Dashboard '},
{imgUrl:img3,color:'#f472b6',url:'https://artenon-e-commerce-website.netlify.app/',git:'https://github.com/alaa22333/Ecommerce-Artenon-Website',uses:['Mui','React js','Framer Motion','Email js'],name:'My Portfolio'},
{imgUrl:img4,color:'#3b82f6',url:'https://javascript-bookmark-project.netlify.app/',git:'https://github.com/alaa22333/javascript-Bookmark-project.git',uses:['HTML','Css','JavaScript'],name:'Bookmark App'},
{imgUrl:img5,color:'black',url:'https://nasa-articles-js.netlify.app/',git:'https://github.com/alaa22333/nasa-articles-js.git',uses:['HTML','Css','JavaScript'],name:'Nasa Articles App'},
{imgUrl:img6,color:'red',url:'https://quots-js.netlify.app/',git:'https://github.com/alaa22333/quots-js.git',uses:['HTML','Css','JavaScript'],name:'Random Quot App'},
{imgUrl:img7,color:'#f472b6',url:'https://custom-count-down.netlify.app/',git:'https://github.com/alaa22333/Custom-counterDown-js.git',uses:['HTML','Css','JavaScript'],name:'Custom CountDown '},
{imgUrl:img8,color:'#00000073',url:'https://js-picture-in-pricture.netlify.app/',git:'https://github.com/alaa22333/picture-in-picture.git',uses:['HTML','Css','JavaScript'],name:'Picture in Picture App'},

]
export const HeadLine = ({title1,title2}) => {
  return (
    <>
    
      <Box
        sx={{
        alignItems:'center',
          position: "relative",
          mb:'6px',
          color: "white",
          fontSize: "2rem",
          display: "flex",
          gap: "5px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {" "}
       {title1}{" "}
        <Typography sx={{ color: color, fontSize: "2rem" }}>
         {title2}
        </Typography>{" "}
      </Box>
      <Box
        position="absolute"
        sx={{ background: color, width: "70px", height: "4px", display:'flex',left:'50%',transform:'translateX(-50%)'  }}
      ></Box>
    </>
  );
};
