import { Stack } from "@mui/material";
import React, { useState } from "react";
import {useFormContext  ,Controller} from "react-hook-form";
import InnerBoxCom from "./InnerBoxCom";
import CMP from "./offerStyle";

export const OfferDetail = ({
  title,
  setTitle,
  detail,
  setDetail,
  register,
  titleError,
  detailError,

  clearErrors
  
  
}) => {
  
 
const { control}=useFormContext()
  return (
    <>
  <Stack sx={{ width: "100%" }}>
            <CMP.InputContainer dirLabel={"column"}>
              <CMP.TXTLabel>{"عنوان الاعلان"}</CMP.TXTLabel>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <>
                    <CMP.InputTitle width="100%" {...field} />
                  </>
                )}
              />
            </CMP.InputContainer>
            <CMP.InputContainer dirLabel="column">
              <CMP.TXTLabel>{"تفاصيل الاعلان"}</CMP.TXTLabel>
              <Controller
                name="detail"
                control={control}
                render={({ field }) => (
                  <>
                    <CMP.InputDetail width="100%" {...field} />
                  </>
                )}
              />
            </CMP.InputContainer>
          </Stack>


      {/* <InnerBoxCom>
        <CMP.InputContainer dirLabel={"column"}>
          <CMP.TXTLabel>{"عنوان الاعلان"}</CMP.TXTLabel>
          <CMP.Input
          {...register('titlename',{required:"لابد من ادخال معلومات العرض"}, { minLength  : {  value: 10,    message: "لابد من عنوان للعرض الحد الادني  10 احرف "  }  })}
            width="100%"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
         
          {titleError?.type === "minLength" && (
            <>
            <p style={{ background: "orange", color: "white" }}> {titleError?.message} </p>
            <button onClick={()=>clearErrors("titlename")}>X</button>
            </>
          )} 
             {titleError?.type === "required" && (
              <>
            <p style={{ background: "red", color: "white" }}>
              {titleError?.message}
            </p>
              <button type="button" onClick={()=>clearErrors("titlename")} style={{color:"white"}}>sdsd</button>
            </>
          )} 
        
        
        </CMP.InputContainer>
        <CMP.InputContainer dirLabel="column">
          <CMP.TXTLabel>{"تفاصيل الاعلان"}</CMP.TXTLabel>
          <CMP.InputTextarea
           {...register('VarOfferDetail')}
            type={"text"}
            width="100%"
            // value={detail}
            // onChange={(e) => setDetail(e.target.value)}
            // placeholder={"تفاصيل كاملة للاعلان توضح المزياء والخدمات المتوفرة"}
            rows={5}
            // {...register("OfferBodytitle")}
          />
        </CMP.InputContainer>
      </InnerBoxCom> */}
    </>
  );
};

/* ------------------------------------------------- */
