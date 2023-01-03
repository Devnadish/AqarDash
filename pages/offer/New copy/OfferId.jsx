import React   from "react";
import SelectCopm from "./SelectCopm";
import InnerBoxCom from "./InnerBoxCom";
import { useGetOfferType } from "../../../component/utils/hooks/useGetdata";
import CMP from "./offerStyle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormContext  ,Controller} from "react-hook-form";
import { Stack } from "@mui/material";

/* ------------------------------------------------------- */
export const OfferId = ({
  offerDate,
  setOfferDate,
  offerType,
  masterOfferNO,
  setofferTypeId,
  offerTypeId,
}) => {
  const {data,isFetched}=useGetOfferType()
 
 const {register, control}=useFormContext()
  return (
    <>

<Stack sx={{ width: "100%" }} flexDirection={"row"}>
            <CMP.OfferIdnOWraper>
              <CMP.TypoTXT> رقم العرض</CMP.TypoTXT>
              <CMP.OfferIdnO>{masterOfferNO}</CMP.OfferIdnO>
            </CMP.OfferIdnOWraper>
            <CMP.OfferDateWraper>
              <CMP.InputContainer dirLabel={"column"}>
                <CMP.TXTLabel>تاريخ العرض</CMP.TXTLabel>
                <Controller
                  name="offerDate"
                  control={control}
                  render={({ field, onChange, value }) => (
                    <>
                      <DatePicker
                        placeholderText="Select date"
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                        {...field}
                      />
                    </>
                  )}
                />
              </CMP.InputContainer>
            </CMP.OfferDateWraper>
            {isFetched && (<OfferTypeSelect data={data.data} register={register}/> )}
          </Stack>
    </>
  );
};

const OfferTypeSelect = ({data,register}) => {
  return (
    <>
      <CMP.InputContainer dirLabel={"column"}>
        <CMP.TXTLabel>طبيعة العرض</CMP.TXTLabel>
        <CMP.CustomSelectDiv>
          <CMP.SeclectOption
                 {...register("offerTypeId", { required: true })}
          >
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


 


// {isFetched && (
//   <OfferTypeSelect data={data.data} register={register}/>
// // <SelectCopm
// //   data={data.data}
// //   Xlabel={"طبيعة العرض"}
// //   Xrefrence={offerType}
// //   setSelectId={setofferTypeId}
// //   SelectId={offerTypeId}
// // />
// )}


{/* 
      <InnerBoxCom flexDir="row">
        <CMP.OfferIdnOWraper>
          <CMP.TypoTXT> رقم العرض</CMP.TypoTXT>
          <CMP.OfferIdnO>{masterOfferNO}</CMP.OfferIdnO>
        </CMP.OfferIdnOWraper>

        <CMP.OfferDateWraper>
          <CMP.InputContainer dirLabel={"column"}>
            <CMP.TXTLabel>تاريخ العرض</CMP.TXTLabel>
            <DatePicker
              selected={offerDate}
              onChange={(date) => setOfferDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </CMP.InputContainer>
        </CMP.OfferDateWraper>

        {isFetched && (
          <SelectCopm
            data={data.data}
            Xlabel={"طبيعة العرض"}
            Xrefrence={offerType}
            setSelectId={setofferTypeId}
            SelectId={offerTypeId}
          />
        )}
      </InnerBoxCom> */}