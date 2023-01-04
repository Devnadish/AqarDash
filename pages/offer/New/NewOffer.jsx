import React, { useState } from "react";
import Box from "@mui/material/Box";
import { OfferId } from "./OfferId";
import CMP from "./offerStyle";
import OfferRegion from "./OfferRegion";
import OfferImgs from "./OfferImgs";
import { OfferDetail } from "./OfferDetail";
import { OfferOther } from "./OfferOther";
import { Button, Stack } from "@mui/material";
import { useOfferID } from "../../../component/utils/hooks/useGetdata";
import { handleSubmitData ,defValue} from "./fnc";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { offerSchema } from "../../../component/utils/validation/newOfferValidation";
import {AiOutlineSave,AiOutlineClear} from "react-icons/ai"
import {MdPublish} from "react-icons/md"


function NewOffer() {
  const { data, isFetched, refetch } = useOfferID();
  let masterOfferId = 0;
  isFetched ? (masterOfferId = parseInt(data?.data?.OfferId) + 1) : 0;

  const [locationImage, setlocationImage] = useState([]);
  const [coverImage, setCoverImage] = useState([]);
  const [imageToUpload, setImageToUpload] = useState([]);
  /* ##################################################################################### */
 
  const FormMx = useForm({
    // mode: "onChange",
    defaultValues: defValue,
    resolver: yupResolver(offerSchema),
  });
  const {
    reset,
    watch,
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = FormMx;
  const showme = watch([
    "title",
    "detail",
    "offerDate",
    "isShowPrice",
    "isComment",
    "price",
    "offerTypeId",
    "ReigonSelect",
    "CitySelect",
    "DistSelect",
  ]);
  // console.log({showme})
  // console.log({ errors });
  /* ##################################################################################### */
  return (
    <>
      <FormProvider {...FormMx}>
        <CMP.Form
          onSubmit={handleSubmit((data) =>
            handleSubmitData(
              data,
              locationImage,
              coverImage,
              imageToUpload,
              masterOfferId,
            )
          )}
        >
          {/* <pre>{JSON.stringify(showme)}</pre> */}
          {/* <pre>area Id :{showme[7]}</pre>
          <pre>city Id :{showme[8]}</pre>
          <pre>Dist Id :{showme[9]}</pre> */}
          <Box
            sx={{
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "block",
              color: "white",
              position: "absolute",
              top: 0,
              left: 0,
              p: 1,
            }}
          >
            تاسيس عرض جديد
          </Box>

          <Stack
            sx={{
              width: "100%",
              top: "20px",
              left: 0,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                width: "100%",
                justifyContent: "space-between",
                alignItems: "stretch",
                gap: "2rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // flexDirection: { xs: "column", sm: "column", md: "row" },
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    gap: "2rem",
                  }}
                >
                  <OfferId masterOfferNO={masterOfferId} />
                  <OfferRegion />
                  {/* <TstSelect/> */}
                </Box>

                <OfferOther />
              </Box>

              <OfferDetail />
            </Box>

            <OfferImgs
              locationImage={locationImage}
              setlocationImage={setlocationImage}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
              imageToUpload={imageToUpload}
              setImageToUpload={setImageToUpload}
            />

            {/* --------------------Button Control------------------------------------------ */}

            <Box
              sx={{
                display: "flex",
                width: {xs:"100%",md:"50%"},
                boxShadow: 1,
                padding: "1rem",
                justifyContent: "space-around",
                gap: "3rem",
                alignItems: "center",
                alignSelf: "flex-end",
              }}
            >
              <Button
                variant="contained"
                color={"success"}
                type="submit"
                fullWidth
                // disabled={isSaveProccess == true ? true : false  }  //TODO: important to displable it while saving
                sx={{
                  fontFamily: "CB",
                  boxShadow: 0,
                  borderRadius: 0,
                  minHeight: "45px",
                  display: "felx",
                  justifyContent: "space-evenly",
                }}
                endIcon={<MdPublish />}
              >
                نشر العرض
              </Button>

              <Button
                variant="contained"
                color={"error"}
                type="button"
                fullWidth
                onClick={() => reset()}
                sx={{
                  fontFamily: "CB",
                  boxShadow: 0,
                  borderRadius: 0,
                  minHeight: "45px",
                  display: "felx",
                  justifyContent: "space-evenly",
                }}
                endIcon={<AiOutlineClear />}
              >
                مسح
              </Button>
            </Box>
          </Stack>
        </CMP.Form>
      </FormProvider>
    </>
  );
}

export default NewOffer;
