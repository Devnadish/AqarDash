import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import SectionTilte from "../../../component/sectionTitle/SectionTilte";
import {AiFillSetting} from "react-icons/ai"

export const OfferOther = ({}) => {
  const { control } = useFormContext();
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "end",
          borderRadius: "5px",
          boxShadow: 1,
          width: "100%",
          p:1,
          height: "100%",
          position: "relative"
        }}
      >
       
        <SectionTilte  TextLabel={"اعدادات"} icon={<AiFillSetting color={"white"} size={"1.5rem"}/>} />
        <br />
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
          label={
            <Typography sx={{ fontFamily: "TR" }}>مسموح التعليق</Typography>
          }
          sx={{p:0,m:0}}
        />

        <FormControlLabel
          control={
            <Controller
              name="isFixed"
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
          label={<Typography sx={{ fontFamily: "TR" }}>تثبيت العرض</Typography>}
          sx={{p:0,m:0}}
        />

        <FormControlLabel
          control={
            <Controller
              name="isNeqish"
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
          label={
            <Typography sx={{ fontFamily: "TR" }}>
               قابل للتفاوض 
            </Typography>
          }
          sx={{p:0,m:0}}
        />
      </Stack>
    </>
  );
};
