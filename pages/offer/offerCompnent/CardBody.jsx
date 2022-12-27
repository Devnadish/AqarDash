import React,{useState} from "react";
import CMP from "./CardStyle";
import { Box,} from "@mui/material";
 


export const CardBody = ({
  imgsrc, offerDetail,  regoin, city, dist,
}) => {
  const [isImage, setIsImage]=useState(imgsrc)
  return (
    <>
      <CMP.CardBodyWraper>
        {/* -------------image  */}
        <CMP.HeroImageWarper>
          <CMP.Image src={isImage} onError={()=>setIsImage("coverImageNot.png")}/>
        </CMP.HeroImageWarper>
        {/* -------------Detail  */}

        <CMP.OfferDetail>
          {offerDetail}
        </CMP.OfferDetail>
        {/* -------------------------------- location --------------------- */}
        <CMP.LocationWraper>
          
           <CMP.LocationDetail>
            {regoin}
            </CMP.LocationDetail>
          {/* <FcApproval/> */}

          <CMP.LocationDetail>
            {city}
            </CMP.LocationDetail>

          <CMP.LocationDetail>
            {dist}
          </CMP.LocationDetail>
        </CMP.LocationWraper>
      </CMP.CardBodyWraper>
    </>
  );
};
