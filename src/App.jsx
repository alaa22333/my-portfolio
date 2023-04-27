import { Suspense, lazy, memo } from "react";

import "./App.css";
import { Box, Stack } from "@mui/material";
import { theme } from "./theme";
import { useStateContext } from "./context/state_context";
import Loader from "./components/Loader";
const Home = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./pages/Home");
});
const Skills = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./pages/Skills");
});
const Projects = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./pages/Projects");
});
const Contact = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./pages/Contact");
});
const Navbar = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./components/Navbar");
});
const SideBar = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./components/SideBar");
});
const Footer = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./components/Footer");
});
const Borders = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./components/Borders");
});
function App() {
  const { closeSideBar } = useStateContext();
  return (
    <Stack
      sx={{
        position: "relative",
        background: theme.palette.background,
        minHeight: "100vh",
        width: "100%",overflow:'hidden'
      }}
    >
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Borders />

        <SideBar />
        {closeSideBar && (
          <Box
            sx={{
              opacity: ".8",
              position: "fixed",
              top: 0,
              background: "black",
              zIndex: 9,
              height: "100%",
              width: "100%",
            }}
          ></Box>
        )}

        <Home />
        <Skills />
        <Projects />
        <Contact/>
        <Footer/>
      </Suspense>
    </Stack>
  );
}

export default memo(App) ;
