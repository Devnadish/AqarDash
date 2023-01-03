 
import Box from "@mui/material/Box";

function InnerBoxCom({children,flexDir="column"}) {
  return (
    <Box
    sx={{
      border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "5px",
      padding: ".5em",
      display: "flex",
      gap: 1,
      flex: 1,
      flexDirection: flexDir,
      minWidth:"300px"  ,
      width: "100%",
      height: "100%",
    }}
  >
    {children}
  </Box>
  )
}

export default InnerBoxCom
