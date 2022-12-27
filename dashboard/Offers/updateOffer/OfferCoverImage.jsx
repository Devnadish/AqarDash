import React from "react";
import global from "../../../../component/global/global";
import styled from "styled-components";
import { Box } from "@mui/material";
const ImageWreaper = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 5px;
  position: relative;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const ImageTxt = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: "CairoBold";

  width: 120px;
  height: 25px;
  border-radius: 5px;
  background-color:blueviolet ;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 5px;

`;


import InnerBoxCom from "./InnerBoxCom";
import MultiImageUploader from "./MultiImageUploader";
const imagePath=import.meta.env.VITE_OfferImage
export const OfferCoverImage = ({
  coverImage,
  setCoverImage,
  oldcoverImage,
}) => {
  console.log(oldcoverImage)
  return (
    <>
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <InnerBoxCom>
        <MultiImageUploader
          files={coverImage}
          setFiles={setCoverImage}
          maxUpload={1}
          isMulti={false}
          title="صورة العرض الرئسية"
        />
      </InnerBoxCom>
        <global.Hr />
        <ImageTxt>الصور القديمة</ImageTxt>
        <ImageWreaper>
          <ImagePreview src={imagePath + oldcoverImage}  />
        </ImageWreaper>
      </Box>
    </>
  );
};
