import React from "react";
import { useGetOfferType } from "../../../component/utils/hooks/useGetdata";
import CMP from "./offerStyle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext, Controller } from "react-hook-form";
import { Stack } from "@mui/material";
import SectionTilte from "../../../component/sectionTitle/SectionTilte";

/* ------------------------------------------------------- */
export const OfferId = ({ masterOfferNO }) => {
  const { data, isFetched } = useGetOfferType();
  const { register, control } = useFormContext();
  return (
    <>
      <Stack
        flexDirection={"column"}
        sx={{
          flex: 1,
          p: 1,
          borderRadius: "5px",
          boxShadow: 1,
          height: "100%",
          position: "relative"
          
        }}
        justifyContent={"space-between"}
      >
        <SectionTilte TextLabel={"عام"}/>
        <br/>
        <Oid masterOfferNO={masterOfferNO} />
        <Odate />
        {isFetched && <OfferTypeSelect data={data.data} register={register} />}
      </Stack>
    </>
  );
};

const OfferTypeSelect = ({ data, register }) => {
  return (
    <>
      <CMP.InputContainer dirLabel={"column"}>
        <CMP.TXTLabel className="require">طبيعة العرض</CMP.TXTLabel>
        <CMP.CustomSelectDiv>
          <CMP.SeclectOption {...register("offerTypeId", { required: true })}>
            {data?.map((el) => {
              return (
                <React.Fragment key={el.id}>
                  <option value={el.id}>{el.label}</option>
                </React.Fragment>
              );
            })}
          </CMP.SeclectOption>
          <span className="CustomSelectArrow"></span>
        </CMP.CustomSelectDiv>
      </CMP.InputContainer>
    </>
  );
};



/* ----------------------- */
function Oid({ masterOfferNO }) {
  return (
    <CMP.OfferIdnOWraper>
      {/* <CMP.TypoTXT> رقم العرض</CMP.TypoTXT> */}
      <CMP.OfferIdnO>{masterOfferNO}</CMP.OfferIdnO>
    </CMP.OfferIdnOWraper>
  );
}

function Odate() {
  const { control } = useFormContext();
  return (
    <CMP.InputContainer dirLabel={"column"}>
      <CMP.TXTLabel className="require">تاريخ العرض</CMP.TXTLabel>
      <Controller
        name="offerDate"
        control={control}
        render={({ field }) => (
          <>
            <DatePicker
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              data-tooltip="test tooltip"
              {...field}
            />
          </>
        )}
      />
    </CMP.InputContainer>
  );
}
