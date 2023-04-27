import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme';

const Logo = () => {
    const color = theme.palette.primary.main;

  return (
    <Box display="flex" gap={2}>
    <Divider
      orientation="vertical"
      sx={{
        borderColor: color,
        borderWidth: "3px",
        height: "55px",
        mt: "13px",
      }}
    ></Divider>
    <Typography fontSize="60px" sx={{ color: color }}>
      A
    </Typography>
  </Box>
  )
}

export default Logo
