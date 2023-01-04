import React, { useState } from "react";
import CMP from "./CardStyle";
import { Box, IconButton, Stack } from "@mui/material";
import { BsImages } from "react-icons/bs";
import { MdLocationOn,MdLocationOff } from "react-icons/md";
import DiloagShow from "../../../component/dailog/DiloagShow";
import axios from "axios";
export const CardBody = ({
  imgsrc,
  offerDetail,
  regoin,
  city,
  dist,
  locationImage,
  offerID,
  albumFiles,
  cover_offerimage,
}) => {
  const [isImage, setIsImage] = useState(imgsrc);
  const [open, setOpen] = useState(false);
 
  return (
    <>
      <CMP.CardBodyWraper>
        {/* -------------image  */}
        <CMP.HeroImageWarper>
          <CMP.Image
            src={isImage}
            onError={() => setIsImage("coverImageNot.png")}
            onClick={() => setOpen(true)}
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
            albumFiles={albumFiles}
          
          />
        </Stack>
        
      </CMP.CardBodyWraper>
      {open ? (
        <DiloagShow open={open} toggle={setOpen}>
          <CMP.ImagePreview
            src={isImage}
            onError={() => setIsImage("coverImageNot.png")}
          />
        </DiloagShow>
      ) : null}
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

function LocationAction({ locationImage, offerID,albumFiles }) {
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
        <XOfferAlbum    offerID={offerID} albumFiles={albumFiles}/>
      </Box>
    </>
  );
}

function LocationImage({ locationImage }) {
  const [isImage, setIsImage] = useState(import.meta.env.VITE_OfferImage+locationImage);
  const [open1, setOpen1] = useState(false);
 
 
  const showme=import.meta.env.VITE_OfferImage+locationImage
  const showmeError=import.meta.env.VITE_OfferImage+"coverImageNot.png"
  
  const handleLocationImage = () => {
    setOpen1(true);
  };
  return (
    <>
      {locationImage !== "No loaction" ? (
        <IconButton color="success" onClick={handleLocationImage}>
          <MdLocationOn />
        </IconButton>
      ) : (
        <IconButton color="error" disabled>
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
  function XOfferAlbum({ offerID,albumFiles  }) {
    const [open2, setOpen2] = useState(false);
    const [album,setAlbum] = useState([]);


    const handleLocationAlbum = async () => {
      const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getofferalbum";
      const sendForm = await axios
        .get(url, { params: { id: offerID } })
        .then((res) => {
          setAlbum(res.data);
            setOpen2(true);
        });
  };

    return (
      <>
        {albumFiles === 0 ? (
          <IconButton disabled>
            <BsImages />
          </IconButton>
        ) : (
          <IconButton onClick={handleLocationAlbum}>
            <BsImages color="blue" />
          </IconButton>
        )}

        {open2 && (
          <DiloagShow open={open2} toggle={setOpen2}>
            <ShowAlbum album={album} />
          </DiloagShow>
        )}
      </>
    );
  }

const ShowAlbum=({album})=>{return(<>

<Box sx={{padding:"1rem"}}>
{album?.map((el,idx)=>{
      return (
        <React.Fragment key={idx}>
          <CMP.ImagePreview src={import.meta.env.VITE_OfferImage + el.image} />
        </React.Fragment>
      );
    })}
</Box>
</>)}