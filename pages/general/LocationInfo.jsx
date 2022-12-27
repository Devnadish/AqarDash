import React from "react";
import CMP from "./Style";



function LocationInfo({
  Refadrs,
  Reflat,
  Refatt,
  Reflocation,
  data,
  
}) {

 



  return (
    <>
      <CMP.CardWraper>
        <CMP.CardHeader> الموقع</CMP.CardHeader>
        <CMP.CardBody>
          <CMP.DataDiv>
            <CMP.InputContainer  W="100%" dirLabel={"column"}>
              <CMP.TXTLabel  Fsize={".8rem"}>العنوان</CMP.TXTLabel>
              <CMP.TextInput
                defaultValue={data.data.adrs}
                placeholder="location"
                width={"100%"}
                ref={Refadrs}
                rows={"5"}
                name="adrs"
              />
            </CMP.InputContainer>

            <CMP.InputContainer  W="45%"  dirLabel={"column"}>
              <CMP.TXTLabel  Fsize={".8rem"}>خط الطول</CMP.TXTLabel>
              <CMP.Input
                defaultValue={data.data.lat}
                placeholder="lat"
                width={"100%"}
                ref={Reflat}
                name="lat"
              />
            </CMP.InputContainer >
            <CMP.InputContainer   W="45%" dirLabel={"column"}>
              <CMP.TXTLabel  Fsize={".8rem"}>خط العرض</CMP.TXTLabel>
              <CMP.Input
                defaultValue={data.data.att}
                placeholder="lan"
                width={"100%"}
                ref={Refatt}
                name="lan"
              />
            </CMP.InputContainer>
          </CMP.DataDiv>
       
        </CMP.CardBody>
      </CMP.CardWraper>
    </>
  );
}

export default LocationInfo;
