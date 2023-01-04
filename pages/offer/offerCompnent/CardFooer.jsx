import React,{useState} from "react";
import CMP from "./CardStyle";
import { Box,Typography } from "@mui/material";
import { BiStopCircle } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import DiloagShow from "../../../component/dailog/DiloagShow";
// import UpdOffer from "../../../dashboard/Offers/UpdOffer";
import { BsImages } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";


export const CardFooer = ({ offerId ,offerDate}) => {
   const [open, setOpen] = useState(false);
    const handleUpdate=()=>{
      setOpen(true)
    }
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          borderTop: "1px solid",
          pt:1,
        }}
      >
        <CMP.OfferCardBtn>
          <BiStopCircle color={"orange"} />
        </CMP.OfferCardBtn>
        <CMP.OfferCardBtn>
          <MdDelete color={"red"} />
        </CMP.OfferCardBtn>
        <CMP.OfferCardBtn  onClick={() =>handleUpdate() }>
          <MdEdit color={"green"} />
        </CMP.OfferCardBtn>

        {/* <CMP.OfferCardBtn>
          <BsImages color={"blue"} />
        </CMP.OfferCardBtn>
        <CMP.OfferCardBtn>
          <MdLocationOn color={"blue"} />
        </CMP.OfferCardBtn> */}
    
      </Box>
      <Typography
            sx={{fontFamily: "TR", m: 0, p: 0, fontSize: ".7rem" ,textAlign: "left"}}
          >
            تارخ النشر:  {offerDate}
          </Typography>
      {open && (
        <DiloagShow
          open={open}
          toggle={setOpen}
          Xfullscreen={true}
          title={"تعديل العرض رقم :  " + offerId}  
          titleColor = "error.dark"
        >
          <UpdOffer UpdofferId={offerId}/>
        </DiloagShow>
      )}
    </>
  );
};
