import React from "react";
import InnerBoxCom from "./InnerBoxCom";
import MultiImageUploader from "./DropZone/MultiImageUploader";
import { Box } from "@mui/material";

const imagePath = import.meta.env.VITE_OfferImage;

export const OfferImages = ({ imageToUpload, setImageToUpload }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InnerBoxCom>
          <MultiImageUploader
            files={imageToUpload}
            setFiles={setImageToUpload}
            maxUpload={10}
            isMulti={true}
            title="صورة العرض"
            noteTitle="10 صور حد اقصى"
          />
        </InnerBoxCom>
      </Box>
    </>
  );
};
