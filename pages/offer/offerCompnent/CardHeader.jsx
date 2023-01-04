import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import CMP from "./CardStyle";
import { FaCommentDollar,FaCreativeCommonsNc } from 'react-icons/fa';
import { FaCommentSlash,FaCommentDots } from 'react-icons/fa';
import zIndex from "@mui/material/styles/zIndex";







export const CardHeader = ({ title, oId,  offertype, offertypeCat,iscomment, ispriceshown, isowner, }) => {

  return (
    <>
      <CMP.OfferCardHeader>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0,.3)",
            width: "100%",
            height: "60px",
            borderBottom: "2px solid white",
            p: 1,
            boxShadow:1,
          }}
        >
           <CMP.OfferIdTxt>{oId}</CMP.OfferIdTxt>
           <Options   offertypeCat={offertypeCat} offertype={offertype} iscomment={iscomment} ispriceshown={ispriceshown}  />
          
        </Box>


        
          <Typography
            
            sx={{
              fontFamily: "CB",
              color: "white",
              // mb: 1,
              textAlign: "right",
              wordWrap: "break-word",
              fontSize:".8rem",
              // pt:"3rem",
              // overflowY: "auto",
            }}
          >
            {title}
          </Typography>
        
     

     
      </CMP.OfferCardHeader>
    </>
  );
};

    function Options({offertypeCat, offertype, iscomment, ispriceshown}) {
      return (<Box sx={{
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "5px"
}}>
            <CMP.OfferTypeTXT type={offertypeCat}>{offertype}</CMP.OfferTypeTXT>

            <CMP.OfferOptionTxt type={iscomment}>
              {iscomment === 1 ? <div>
                    <FaCommentDots />
                  </div> : <div>
                    <FaCommentSlash color="red" />
                  </div>}
            </CMP.OfferOptionTxt>

            <CMP.OfferOptionTxt type={ispriceshown}>
              {ispriceshown === 1 ? <div>
                    <FaCommentDollar />
                  </div> : <div>
                    <FaCreativeCommonsNc color="red" />
                  </div>}
            </CMP.OfferOptionTxt>

            {
    /* <CMP.OfferOptionTxt type={isowner}>  {isowner === 1 ? "المالك" : "مسوق"}</CMP.OfferOptionTxt> */
  }
          
        </Box>);
    }
  