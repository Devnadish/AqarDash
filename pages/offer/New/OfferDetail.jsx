import React  from "react";
import {useFormContext  ,Controller} from "react-hook-form";
import CMP from "./offerStyle";

import {
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  Box,
  
} from "@mui/material";

 
import ErrorMessage from "../../../component/ErrorMessage";
import SectionTilte from "../../../component/sectionTitle/SectionTilte";
// import { ErrorMessage } from '@hookform/error-message';

export const OfferDetail = () => {

  
 
const { clearErrors,control,formState: { errors }}=useFormContext()
  return (
    <>
      <Stack
        flexDirection={"column"}
        sx={{
          flex: 2,
          p: 1,
          borderRadius: "5px",
          boxShadow: 1,
          position: "relative",
        }}
      >
        <SectionTilte TextLabel={"تفاصيل العرض"} />
        <br/>

        <CMP.InputContainer dirLabel={"column"}>
          <CMP.TXTLabel className="require">{"العنوان"}</CMP.TXTLabel>
          <Controller
            name="title"
            control={control}
            defaultValue="test defalut value"
            // rules={{ required: true }}
            render={({ field }) => (
              <>
                <CMP.InputTitle width="100%" {...field} />
              </>
            )}
          />

          {errors.title ? (
            <ErrorMessage
              message={errors.title.message}
              clearErrors={clearErrors}
              fieldName={"title"}
            />
          ) : null}
        </CMP.InputContainer>

        <CMP.InputContainer dirLabel="column">
          <CMP.TXTLabel>{"التفاصيل"}</CMP.TXTLabel>
          <Controller
            name="detail"
            control={control}
            render={({ field }) => (
              <>
                <CMP.InputDetail
                  data-tooltip="asdasd"
                  rows={8}
                  width="100%"
                  {...field}
                />
              </>
            )}
          />
          {errors.detail ? (
            <ErrorMessage
              message={errors.detail.message}
              clearErrors={clearErrors}
              fieldName={"detail"}
            />
          ) : null}
        </CMP.InputContainer>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto",
          }}
        >

          <FormControlLabel
            sx={{ flex: 1 }}
            labelPlacement="start"
            label={
              <Typography sx={{ fontFamily: "TR", width: "40%" }}>
                السعر
              </Typography>
            }
            control={
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <>
                  <Box sx={{display:"flex",flexDirection:"column",width:"100%"}}>
                    <CMP.InputTitle type={"number"} width="100%" {...field} />
                    {errors.price ? (
            <ErrorMessage
              message={errors.price.message}
              clearErrors={clearErrors}
              fieldName={"price"}
            />
          ) : null}
          </Box>


                  </>




                )}
              />
            }

          />




          <FormControlLabel
            sx={{ flex: 1, width: "100%" }}
            // labelPlacement="end"
            label={
              <Typography sx={{ fontFamily: "TR", textAlign: "right",width:"100%" }}>
                عرض السعر
              </Typography>
            }
            control={
              <Controller
                name="isShowPrice"
                control={control}
                render={({ field: props }) => (
                  <Checkbox
                    {...props}
                    checked={props.value}
                    onChange={(e) => props.onChange(e.target.checked)}
                  />
                )}
              />
            }
          />
        </Box>
      </Stack>
    </>
  );
};

/* ------------------------------------------------- */
