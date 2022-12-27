import React, { useState } from "react";
import CMP from "./Style";
import DiloagShow from "../../component/dailog/DiloagShow";
import Countup from "react-countup";
// import NewOffer from "./NewOffer";
import { Box, Button, Typography } from "@mui/material";
import { MdAddCircleOutline } from "react-icons/md";
import { useGetAlloffers } from "../../component/utils/hooks/useGetdata";
import { NewCard } from "./offerCompnent/NewCard";

export const Offer = () => {
  const [open, setOpen] = useState(false);
  const { data, isFetched } = useGetAlloffers();


  let sale=0;
  let rent=0;

  const RentCounter=()=>{
    data?.data.forEach(element => {
      element.offertypeCat ==="بيع" ? sale++:rent++;
      
    });
  }


 isFetched && RentCounter()

  return (
    <>
      <CMP.OfferBodyWarper>
        <CMP.OfferActions>
          <CMP.OfferCounter>
            <CMP.OfferCounterWraper>
              <p>عدد العروض</p>
              <p> <Countup end={data?.data.length} />  </p>
            </CMP.OfferCounterWraper>
            <CMP.OfferCounterWraper>
              <p>عروض الايجار </p>
              <p> <Countup end={rent} /> </p>
            </CMP.OfferCounterWraper>
            <CMP.OfferCounterWraper>
              <p>عروض البيع</p>
              <p> <Countup end={sale} />  </p>
            </CMP.OfferCounterWraper>
          </CMP.OfferCounter>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            endIcon={<MdAddCircleOutline />}
            sx={{
              // width: "50%",
              display: "flex",
              gap: "1rem",
              minHeight: "50px",
              fontFamily: "CB",
              // mt: 2,
              ml: 1,
            }}
          >
            <Typography sx={{ fontFamily: "CB" }}>عرض جديد</Typography>
          </Button>
        </CMP.OfferActions>

        <CMP.OfferNormalDivr>
          {isFetched &&
            data.data.map((el) => {
              return (
                <React.Fragment key={el.id}>
                  <NewCard cardData={el} />
                </React.Fragment>
              );
            })}
        </CMP.OfferNormalDivr>
      </CMP.OfferBodyWarper>
      {open && (
        <DiloagShow
          open={open}
          toggle={setOpen}
          Xfullscreen={true}
          title={"عرض جديد"}
        >
          {/* <NewOffer /> */}
        </DiloagShow>
      )}
    </>
  );
};

export default Offer;
