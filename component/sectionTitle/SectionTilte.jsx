import { Box, Typography } from '@mui/material';
import React from 'react'

function SectionTilte({TextLabel,color="rgb(110,110,115)",icon}) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: color,
        color: "white",
      gap: "2rem",
        borderRadius: "4px 4px 0px 0px",
        boxShadow: 0,
        m: 0,
        p: 0,
      }}
    >
      <Typography fontFamily={"AF"} variant="span"> {TextLabel}</Typography>
      <Box sx={{p:0,m:0,  display: "flex",
        alignItems: "center",
        justifyContent: "center",}}>{icon}</Box>
    </Box>
  );
}

export default SectionTilte