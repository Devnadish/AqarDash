import React from "react";
import { Box } from "@mui/material";
import InnerBoxCom from "./InnerBoxCom";
import MultiImageUploader from "./DropZone/MultiImageUploader";

const imagePath=import.meta.env.VITE_OfferImage
export const OfferCoverImage = ({
  coverImage,
  setCoverImage,
  oldcoverImage,
}) => {
  // console.log(oldcoverImage)
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
     
       
      </Box>
    </>
  );
};
