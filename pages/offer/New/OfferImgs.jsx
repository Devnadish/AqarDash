import React from 'react'
import { Box } from '@mui/material'
import MultiImageUploader from "./DropZone/MultiImageUploader";
import { MdLocationOn } from "react-icons/md";
import { BsImages,BsCardImage } from "react-icons/bs";
import SectionTilte from "../../../component/sectionTitle/SectionTilte";


function OfferImgs({locationImage,
setlocationImage,
coverImage,
setCoverImage,
imageToUpload,
setImageToUpload}) {
  return (
    <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: "1rem",
              justifyContent: "space-between",
            
            }}
          >
            <OfferLocation
              locationImage={locationImage}
              setlocationImage={setlocationImage}
            />
            <OfferCoverImage
              coverImage={coverImage}
              setCoverImage={setCoverImage}
            />
            <OfferImages
              imageToUpload={imageToUpload}
              setImageToUpload={setImageToUpload}
            />
    </Box>
  )
}

export default OfferImgs

export const OfferLocation = ({
  setlocationImage,
  locationImage,
}) => {
  const imagePath = import.meta.env.VITE_OfferImage;
 
  return (
    <>
     
      <Box
        sx={{
          borderRadius: "5px",
          padding: ".5em",
          display: "flex",
          gap: 1,
          flex: 1,
          flexDirection: "column",
          width: "350px",
          boxShadow:1,
          position: "relative"
        }}
      >
        <SectionTilte TextLabel={"صورة لتوضيح اتجهات الموقع"} icon={<MdLocationOn color={"white"} size={"1.5rem"}/>} />
        <br/>
        <MultiImageUploader
          files={locationImage}
          setFiles={setlocationImage}
          maxUpload={1}
          isMulti={false}
          title="صورة للموقع"
          icon={<MdLocationOn color={"white"} size={"2rem"}/>
        }
        />
      </Box>
    </>
  );
};


export const OfferImages = ({ imageToUpload, setImageToUpload }) => {
  const imagePath = import.meta.env.VITE_OfferImage;
  return (
    <>
        <Box
        sx={{
          borderRadius: "5px",
          padding: ".5em",
          display: "flex",
          gap: 1,
          flex: 1,
          flexDirection: "column",
          width: "350px",
          boxShadow:1,
          position: "relative",
          display: "flex",
          
          // alignItems: "center",
        }}
      >
        
         <SectionTilte TextLabel={"صور العرض"} icon={<BsImages color={"white"} size={"1.5rem"}/>} />
         <br/>
          <MultiImageUploader
            files={imageToUpload}
            setFiles={setImageToUpload}
            maxUpload={10}
            isMulti={true}
            title="صورة العرض"
            icon={<BsImages color={"white"} size={"2rem"}/>}
            
            noteTitle="10 البوم صور حد اقصى"
          />
          </Box>
        
    </>
  );
};



export const OfferCoverImage = ({
  coverImage,
  setCoverImage,
}) => {
  const imagePath=import.meta.env.VITE_OfferImage
   
  return (
    <>
        <Box
        sx={{
          borderRadius: "5px",
          padding: ".5em",
          display: "flex",
          gap: 1,
          flex: 1,
          flexDirection: "column",
          width: "350px",
          boxShadow:1,
          position: "relative"
        }}
      >
         
          <SectionTilte  TextLabel={"صورة اساسية لواجهة العرض"} icon={<BsCardImage color={"white"} size={"1.5rem"}/>} />
          <br/>
        <MultiImageUploader
          files={coverImage}
          setFiles={setCoverImage}
          maxUpload={1}
          isMulti={false}
          icon={<BsCardImage color={"white"} size={"2rem"}/>}
          title="صورة الغلاف"
          
        />
      </Box>
    </>
  );
};
