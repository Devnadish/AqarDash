import { Box, Button, Typography } from "@mui/material"
import { BiErrorAlt } from 'react-icons/bi';

const ErrorMessage = ({message,clearErrors,fieldName}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width:{sx:"100%",md:"100%"},
        gap: "25px",
        mt: "6px",
        p:1,
        border:1,
        borderColor: "error.main",
        backgroundColor: "rgba(255,255,255,.9)"
      }}
    >

      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}>
      <BiErrorAlt color="red" size={"20px"} />
      <Typography color="error.main" variant="span" fontSize="12px"> {message} </Typography>
      </Box>
      <Button
        onClick={() => clearErrors(fieldName)}
        variant={"contained"}
        color={"error"}
        sx={{minWidth:"0",width:"20px",height:"20px",p:1}}
      >
        X
      </Button>
    </Box>
  );
}

export default ErrorMessage