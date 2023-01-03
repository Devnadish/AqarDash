import React from "react";
import CMP from "./offerStyle";
import {useFormContext  ,Controller} from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  Box,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Typography,
} from "@mui/material";
import InnerBoxCom from "./InnerBoxCom";

export const OfferOther = ({
  price,
  setPrice,
  // isShowPrice,
  isComment,
  isOwner,
  setIsShowPrice,
  setIsComment,
  setIsOwner,
}) => {
  const { control}=useFormContext()
  return (
    <>
      <InnerBoxCom flexDir="row">
      <CMP.InputContainer dirLabel={"column"}>
              <CMP.TXTLabel>{"السعر"}</CMP.TXTLabel>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <>
                    <CMP.InputTitle width="100%" {...field} />
                  </>
                )}
              />
            </CMP.InputContainer>


  <FormControlLabel
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
    label={"عرض السعر"}
  />
  <FormControlLabel
    control={
      <Controller
        name="isComment"
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
    label={"التعليق"}
  />




        {/* <FormControl variant="filled" error sx={{ width: "100%" }}>
          <FormLabel
            sx={{
              fontFamily: "CB",
              fontSize: { xs: ".8rem", sm: "1rem" },
              textAlign: "right",
            }}
          >
            خصائص العرض
          </FormLabel>
          <FormGroup row>
            <FormControlLabel
              label={
                <Typography
                  sx={{
                    fontFamily: "CB",
                    fontSize: { xs: ".8rem", sm: "1rem" },
                  }}
                >
                  عرض السعر
                </Typography>
              }
              control={
                <Checkbox
                  color="secondary"
                  size="medium"
                  checked={isShowPrice}
                  onChange={(e) => setIsShowPrice((pre) => e.target.checked)}
                />
              }
            />
            <FormControlLabel
              label={
                <Typography
                  sx={{
                    fontFamily: "CB",
                    fontSize: { xs: ".8rem", sm: "1rem" },
                  }}
                >
                  مسموح التعليق
                </Typography>
              }
              control={
                <Checkbox
                  color="secondary"
                  size="medium"
                  checked={isComment}
                  onChange={(e) => setIsComment((pre) => e.target.checked)}
                />
              }
            />
            <FormControlLabel
              label={
                <Typography
                  sx={{
                    fontFamily: "CB",
                    fontSize: { xs: ".8rem", sm: "1rem" },
                  }}
                >
                  المالك المباشر
                </Typography>
              }
              control={
                <Checkbox
                  color="secondary"
                  size="medium"
                  checked={isOwner}
                  onChange={(e) => setIsOwner((pre) => e.target.checked)}
                />
              }
            />
          </FormGroup>
         
        </FormControl> */}

      </InnerBoxCom>
    </>
  );
};
