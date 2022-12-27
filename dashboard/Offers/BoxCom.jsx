 
import Box from "@mui/material/Box";

function BoxCom({children,flexDir="row"}) {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      // flexDirection:flexDir,
      gap: 2,
      height: "100%",
     
      flexWrap:"wrap",
      flexDirection:{xs:"column",sm:"row"},
      width: "100%",
    }}
  >
    {children}
  </Box>
  )
}

export default BoxCom
