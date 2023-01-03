import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import CMP from "./CardStyle";
import { FaCommentDollar,FaCreativeCommonsNc } from 'react-icons/fa';
import { FaCommentSlash,FaCommentDots } from 'react-icons/fa';



let iconStyles = { color: "white", fontSize: "1.5em" };

export const CardHeader = ({ title, oId,  offertype, offertypeCat,iscomment, ispriceshown, isowner, }) => {

  return (
    <>
      <CMP.OfferCardHeader>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Typography component={'div'}
          
            sx={{ fontFamily: "CB", color: "white", mb: 1, textAlign: "right" }}
          >
            {title}
          </Typography>
          
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <CMP.OfferTypeTXT type={offertypeCat}>{offertype}</CMP.OfferTypeTXT>
            {/* <CMP.OfferOptionTxt type={iscomment}>
              {iscomment === 1 ? (
                <Tooltip
                arrow={true}
                placement="top"
                title={"مسموح التعليق للعرض"}
                >
                  <div>
                    <FaCommentDots />
                  </div>
                 </Tooltip>
              ) : (
                <Tooltip
                arrow={true}
                placement="top"
                title={"غير مسموح التعليق للعرض"}
                >
                  <div>
                    <FaCommentSlash color="red"/>
                  </div>
                </Tooltip>
              )}
            </CMP.OfferOptionTxt>
            <CMP.OfferOptionTxt type={ispriceshown}>
              {ispriceshown === 1 ? (
                <Tooltip
                arrow={true}
                placement="top"
                title={"مسموح عرض السعر"}
              > 
              <div>
                    <FaCommentDollar />
                  </div>
                </Tooltip> 
              ) : (
                <Tooltip
                arrow={true}
                placement="top"
                title={"غير مسموح عرض السعر"}
                >
                  <div>
                    <FaCreativeCommonsNc color="red"/>
                  </div>
                </Tooltip>
              )}
            </CMP.OfferOptionTxt> */}
            {/* <CMP.OfferOptionTxt type={isowner}>  {isowner === 1 ? "المالك" : "مسوق"}</CMP.OfferOptionTxt> */}
          </Box>
        </Box>
        <CMP.OfferIdTxt>{oId}</CMP.OfferIdTxt>
      </CMP.OfferCardHeader>
    </>
  );
};
