import React from "react";
import InnerBoxCom from "./InnerBoxCom";
import MultiImageUploader from "./DropZone/MultiImageUploader";
import styled from "styled-components";
import { Box } from "@mui/material";
const ImageContiner = styled.div`
max-width: 350px;
  width: 100%;
  /* height: 112px; */
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 5px;
  position: relative;
  overflow: auto;
`;
const ImageWreaper = styled.div`
  max-width: 112px;
  min-width: 112px;
  height: 112px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 5px;
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
  font-family: "CB";

  width: 120px;
  height: 25px;
  border-radius: 5px;
  background-color: blueviolet;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 5px;
`;

const imagePath = import.meta.env.VITE_OfferImage;


export const OfferImages = ({
  oldOfferImage,
  imageToUpload,
  setImageToUpload,
}) => {
  // console.log("oldOfferImage : ",oldOfferImage)
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

        <ImageTxt>الصور القديمة</ImageTxt>
        <ImageContiner>
        

          {oldOfferImage?.map((el) => {
            return (
              <React.Fragment key={el.id}>
                <ImageWreaper>

                <ImagePreview src={imagePath + el.image} />
                </ImageWreaper>
              </React.Fragment>
            );
          })}

         
         
        </ImageContiner>
      </Box>
    </>
  );
};
