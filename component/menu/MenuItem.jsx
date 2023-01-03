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
        icon={<AiOutlineHome size={"12px"}/>}
        txt="عام"
        xhref="/general"
        />
        <MenuBtn
        icon={<MdOutlineLocalOffer size={"12px"}/>}
        txt="العروض"
        xhref={"/"}
        />
        <MenuBtn
        icon={<GoRequestChanges size={"12px"}/>}
        txt="الطلبات"
        xhref={"/request"}
        />
        <MenuBtn
        icon={<GoComment size={"12px"}/>}
        txt="التعليقات"
        xhref={"/comments"}
        />
           <MenuBtn
        icon={<AiFillSetting size={"12px"}/>}
        txt="الاعدادات"
        xhref={"/setting"}
        />
        
        
    
     
    </>
  );
};

const MenuBtn = ({ txt ,icon,xhref}) => {
  const MQ = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Button
        component={Link}
        variant="text"
        endIcon={icon}
        to={xhref}
        sx={{
          color: "rgb(245,245,247)",
          minWidth: 0,
          width: "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap:"1rem",
          lineHeight: "1.5",
        }}
      >
        {/* if Small screen Show Only icons */}
        {!MQ && (
          <Typography
          variant="span"
            sx={{
              fontFamily: "AF",
              lineHeight: "1.5",
              fontSize: "17px",
              height: "100%",
              fontWeight: "light",
            }}
          >
            {txt}
          </Typography>
        )}
      </Button>
    </>
  );
};
