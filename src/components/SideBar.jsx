import { Box, Divider, IconButton, Link, Stack } from "@mui/material";
import React from "react";
import { links, socialLinks } from "../utilis/helpers";
import { theme } from "../theme";
import { useStateContext } from "../context/state_context";
import Borders from "./Borders";
import CloseIcon from "@mui/icons-material/Close";
const SideBar = () => {
  const { selectedLink, setSelectedLink, setCloseSideBar, closeSideBar } =
    useStateContext();
  const color = theme.palette.primary.main;

  return (
    closeSideBar && (
      <Stack
        direction="column"
        gap="10px"
        py={10}
        sx={{
          background: "#030712e6",
          position: "absolute",
          height: "100%",
          width: "400px",
          zIndex: 10,
          transitionDuration: "500ms",
          transition: "all linear",
        }}
        top={0}
        right={0}
      >
        <IconButton
          onClick={() => setCloseSideBar(!closeSideBar)}
          sx={{
            color: color,
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
        >
          <CloseIcon sx={{ fontSize: "2.3rem" }} />
        </IconButton>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <Box key={i}>
              <Stack
                pl={3}
                direction="row"
                sx={{ alignItems: "center" }}
                gap={3}
              >
                <IconButton sx={{ color: color }}>
                  <link.icon />
                </IconButton>
                <Link
                  target='_blank'
                  underline="none"
                  display="flex"
                  gap={2}
                  onClick={(e) => {
                    setSelectedLink(e.target.textContent);
                    setCloseSideBar(!closeSideBar);
                  }}
                  sx={{ color: selectedLink === title ? color : "white" }}
                  key={i}
                  href={href}
                >
                  {title}
                </Link>
              </Stack>{" "}
              <Divider
                variant="middle"
                sx={{
                  width: "80%",
                  borderColor: color,
                  padding: "10px",
                  ml: "30px",
                }}
              />
            </Box>
          );
        })}

        <Stack
          direction="row"
          gap={8}
          padding={10}
          pt={30}
          sx={{ mx: "auto", color: "white" }}
          alignItems="center"
        >
          {socialLinks.map((link, i) => {
            return (
              <Link
                key={i}
                underline="none"
                sx={{ color: "white", "&:hover": { color: color } }}
                key={i}
                href={link.href}
              >
                {<link.icon />}
              </Link>
            );
          })}
        </Stack>
      </Stack>
    )
  );
};

export default SideBar;
