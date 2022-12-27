import React from "react";
import Drawer from "@mui/material/Drawer";

function LeftDrawer({ open, setOpen, children, drawerWidth, anchor, drHight }) {
  
  return (
    <>
      <Drawer
        variant="temporary"
        anchor={anchor}
        open={open}
        role="presentation"
        BackdropProps={{ invisible: true }}
        
        PaperProps={{
          sx: {
            width: "30%",
            marginTop: "auto",
            marginBottom: "auto",
            margin: "auto",
            height: drHight,
           
          },
        }}
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {children}
      </Drawer>
    </>
  );
}

export default React.memo(LeftDrawer);
