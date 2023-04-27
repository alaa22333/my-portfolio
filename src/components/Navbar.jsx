import { Box, Divider, Button, Link, Stack, Typography } from "@mui/material";
import { theme } from "../theme";
import { links } from "../utilis/helpers";
import { useStateContext } from "../context/state_context";
import SegmentIcon from "@mui/icons-material/Segment";
import Logo from "./Logo";
import { motion } from "framer-motion";
const Navbar = () => {
  const color = theme.palette.primary.main;
  const { selectedLink, setSelectedLink, setCloseSideBar, closeSideBar } =
    useStateContext();
  return (
    <Stack
      direction="row"
      py={2}
      justifyContent="space-between"
      sx={{ paddingX: { md: 16, xs: 3 } }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 2, scale: 1 }}
        transition={{ delay: 0.7, duration: 2 }}
      >
        {" "}
        <Logo />
      </Box>

      <Box
        alignItems="center"
        gap={4}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {links.map((link, i) => {
          const { href, title } = link;
          return (
            <Link
              component={motion.a}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 2 }}
              underline="none"
              display="flex"
              gap={2}
              onClick={(e) => {
                setSelectedLink(e.target.textContent);
                console.log(e.target.textContent);
              }}
              sx={{
                color: selectedLink === title ? color : "white",
                textDecoration: selectedLink === title && "underline",
                textDecorationThickness: "3px",
                "&:hover": { color: selectedLink === title ? color : "white" },
                textUnderlineOffset: "5px",
                transitionDuration: "500ms",
              }}
              key={i}
              href={href}
            >
              {title}
            </Link>
          );
        })}
      </Box>
      <Button
        onClick={() => setCloseSideBar(!closeSideBar)}
        sx={{ display: { md: "none", xs: "block" } }}
      >
        {" "}
        <SegmentIcon sx={{ fontSize: "2.3rem" }} />
      </Button>
    </Stack>
  );
};

export default Navbar;
