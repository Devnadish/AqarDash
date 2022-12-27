import { Box, Button, Typography } from "@mui/material";
import { AiOutlineHome,AiFillSetting } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GoRequestChanges,GoComment } from "react-icons/go"; 

import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";





export const MenuItem = () => {
  return (
    <>
      
        <MenuBtn
        icon={<AiOutlineHome/>}
        txt="عام"
        xhref="/general"
        />
        <MenuBtn
        icon={<MdOutlineLocalOffer/>}
        txt="العروض"
        xhref={"/"}
        />
        <MenuBtn
        icon={<GoRequestChanges/>}
        txt="الطلبات"
        xhref={"/request"}
        />
        <MenuBtn
        icon={<GoComment/>}
        txt="التعليقات"
        xhref={"/comments"}
        />
           <MenuBtn
        icon={<AiFillSetting/>}
        txt="الاعدادات"
        xhref={"/setting"}
        />
        
        
    
     
    </>
  );
};

const MenuBtn = ({ txt ,icon,xhref}) => {
  const MQ = useMediaQuery("(max-width:600px)");
  console.log({ MQ });

  return (
    <>
      <Button
        component={Link}
        color="warning"
        variant="contained"
        endIcon={icon}
        to={xhref}
        
        sx={{
          
          minWidth:0,
          width: "15%",

          display: "flex",
          alignItems: "center",
          justifyContent: {xs:"center",sm:"space-between"},
          lineHeight:"1.5"
        }}
      >
        {/* if Small screen Show Only icons */}
        {!MQ && <Typography sx={{ fontFamily: "TB",lineHeight:"1.5",fontSize:".9rem",height:"100%" }}>{txt}</Typography>}
      </Button>
    </>
  );
};
