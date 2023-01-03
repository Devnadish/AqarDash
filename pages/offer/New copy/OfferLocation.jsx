import React from "react";
import InnerBoxCom from "./InnerBoxCom";
import MultiImageUploader from "./DropZone/MultiImageUploader";
import {useFormContext  ,Controller} from "react-hook-form";
import { Box } from "@mui/material";

const imagePath = import.meta.env.VITE_OfferImage;
export const OfferLocation = ({
  setlocationImage,
  locationImage,
}) => {
  const { control}=useFormContext()
  return (
    <>
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <InnerBoxCom>
        <MultiImageUploader
          files={locationImage}
          setFiles={setlocationImage}
          maxUpload={1}
          isMulti={false}
          title="خريطة الموقع"
        />
      </InnerBoxCom>

       
     
      </Box>
    </>
  );
};
