import React, { useState } from "react";
import CMP from "./CardStyle";
import { Box, IconButton, Stack } from "@mui/material";

import { BsImages } from "react-icons/bs";
import { MdLocationOn,MdLocationOff } from "react-icons/md";
import DiloagShow from "../../../component/dailog/DiloagShow";

export const CardBody = ({
  imgsrc,
  offerDetail,
  regoin,
  city,
  dist,
  locationImage,
  offerID,
  cover_offerimage,
}) => {
  const [isImage, setIsImage] = useState(imgsrc);
  const [open, setOpen] = useState(false);
  // console.log({dist})
  return (
    <>
      <CMP.CardBodyWraper>
        {/* -------------image  */}
        <CMP.HeroImageWarper>
          <CMP.Image
            src={isImage}
            onError={() => setIsImage("coverImageNot.png")}
            onClick={() => alert(cover_offerimage)}
          />
        </CMP.HeroImageWarper>
        {/* -------------Detail  */}

        <CMP.OfferDetail>{offerDetail}</CMP.OfferDetail>
        {/* -------------------------------- location --------------------- */}

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Location regoin={regoin} city={city} dist={dist} />
          <LocationAction
            locationImage={locationImage}
            offerID={offerID}
            open={open}
            setOpen={setOpen}
          />
        </Stack>
      </CMP.CardBodyWraper>
    </>
  );
};

function Location({ regoin, city, dist }) {
  return (
    <CMP.LocationWraper>
      <CMP.LocationDetail>{regoin}</CMP.LocationDetail>
      <CMP.LocationDetail>{city}</CMP.LocationDetail>
      <CMP.LocationDetail>{dist}</CMP.LocationDetail>
    </CMP.LocationWraper>
  );
}

// {open ? (
//   <DiloagShow open={open} toggle={setOpen}>
//     <CMP.Image src={bigImage} />
//   </DiloagShow>
// ) : null}

// VITE_mainPageImage
// VITE_OfferImage

function LocationAction({ locationImage, offerID, open, setOpen }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <LocationImage  locationImage={locationImage} />
        <XOfferAlbum    offerID={offerID}/>
      </Box>
    </>
  );
}

function LocationImage({ locationImage }) {
  const [isImage, setIsImage] = useState(import.meta.env.VITE_OfferImage+locationImage);

  const [open1, setOpen1] = useState(false);
  console.log(locationImage);
 
  const showme=import.meta.env.VITE_OfferImage+locationImage
  const showmeError=import.meta.env.VITE_OfferImage+"coverImageNot.png"
  
  const handleLocationImage = () => {
    setOpen1(true);
  };
  return (
    <>
      {locationImage !== "No loaction" ? (
        <IconButton color="secondary" onClick={handleLocationImage}>
          <MdLocationOn />
        </IconButton>
      ) : (
        <IconButton color="secondary" >
          <MdLocationOff />
        </IconButton>
      )}

      {open1 ? (
        <DiloagShow open={open1} toggle={setOpen1}>
          <CMP.ImagePreview
            src={isImage}
            onError={() => setIsImage("coverImageNot.png")}
          />
        </DiloagShow>
      ) : null}
    </>
  );
 }



/* ----------------------------- */
  function XOfferAlbum({ offerID,open,setOpen }) {
    const [open2, setOpen2] = useState(false);
    const handleLocationAlbum = () => {
      setOpen2(true);
      alert(offerID)

    };

    return (
      <>
      <IconButton  onClick={handleLocationAlbum}>
        <BsImages color="blue" />
      </IconButton>
       
 {open2 ? (
  <DiloagShow open={open2} toggle={setOpen2}>
    <p>{offerID}</p>
    {/* <CMP.Image src={bigImage} /> */}
   </DiloagShow>
 ) : null}
      </>
    );
  }

