import React, { useState} from "react";
import Box from "@mui/material/Box";
import { OfferId } from "./OfferId";
import CMP from "./offerStyle";
import { OfferRegion } from "./OfferRegion";
import { OfferLocation } from "./OfferLocation";
import { OfferImages } from "./OfferImages";
import { OfferDetail } from "./OfferDetail";
import { OfferOther } from "./OfferOther";
import { OfferCoverImage } from "./OfferCoverImage";
import { Button } from "@mui/material";
import { useOfferID } from "../../../component/utils/hooks/useGetdata";
import {handleSubmitData} from "./fnc"
import { FormProvider, useForm } from "react-hook-form";

function NewOffer() {

  const { data, isFetched,refetch } = useOfferID();
  let masterOfferId = 0;
  isFetched ? (masterOfferId = parseInt(data?.data?.OfferId) + 1) : 0;

  const [locationImage, setlocationImage] = useState([]);
  const [coverImage, setCoverImage] = useState([]);
  const [imageToUpload, setImageToUpload] = useState([]);
  /* ##################################################################################### */
  const defValue = {
    title: "",
    detail: "",
    offerDate: new Date(),
    price: 0,
    isShowPrice: false,
    isComment: true,
    offerTypeId:2,
    regionId:0,
    cityId:0,
    distId:0
  };
  const FormMx = useForm({
    defaultValues: defValue
  });
  const {reset,clearErrors,register,watch,control, handleSubmit,formState: { errors }} = FormMx
  const showme = watch([
    "title",
    "detail",
    "offerDate",
    "isShowPrice",
    "isComment",
    "price",
    "offerTypeId",
    "regionId",
    "cityId",
    "distId"
  ]);
  console.log(showme)
/* ##################################################################################### */
  return (
    <>
      <FormProvider {...FormMx}>
        <CMP.Form
          onSubmit={handleSubmit((data) =>
            handleSubmitData(data, locationImage, coverImage, imageToUpload,masterOfferId)
          )}
        >
          <OfferId    masterOfferNO={masterOfferId}/>
          <OfferDetail />
          <OfferOther />
          {/* -------------------------------------------------------------- */}
          <OfferRegion />
          {/* --------------------image Control------------------------------------------ */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: 1,
              justifyContent: "space-between",
              width: "100%",
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
          {/* --------------------Button Control------------------------------------------ */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              borderRadius: 2,
              position: "fixed",
              bottom: "10px",
              left: "5px",
              width: "100px",
              zIndex: 1000,
              boxShadow: 24,
            }}
          >
            <Button
              variant="contained"
              color={"warning"}
              type="submit"
              // disabled={isSaveProccess == true ? true : false  }  //TODO: important to displable it while saving
              sx={{ fontFamily: "CB" }}
            >
              حفظ
            </Button>

            <Button
              variant="contained"
              color={"error"}
              type="button"
              onClick={() => reset()}
              sx={{ fontFamily: "CB" }}
            >
              مسح
            </Button>
          </Box>
        </CMP.Form>
      </FormProvider>
   
    </>
  );
}


export default NewOffer;
