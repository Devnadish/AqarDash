import React  from "react";
import CMP from "./Style";





function GeneralInfo({
  Refid,
  Refname,
  Refphone,
 
  data,

 
}) {




  return (
    <>
      <CMP.CardWraper>
        <CMP.CardHeader>معلومات عامة</CMP.CardHeader>
        <CMP.CardBody>
          <CMP.Input
            ref={Refid}
            defaultValue={data.data?.id}
            width={"10%"}
            placeholder="id"
            name="id"
            disabled
            hidden
          />
          <CMP.DataDiv  >


            <CMP.InputContainer W="70%" dirLabel={"column"}>
              <CMP.TXTLabel Fsize={".8rem"}>الاسم</CMP.TXTLabel>
              <CMP.Input
                type="text"
                id="fname"
                name="name"
                defaultValue={data.data.name}
                ref={Refname}
                width={"100%"}
                placeholder="name"
              />
            </CMP.InputContainer>

            <CMP.InputContainer  W="25%" dirLabel={"column"}>
              <CMP.TXTLabel Fsize={".8rem"}>الجوال</CMP.TXTLabel>

              <CMP.Input
                defaultValue={data.data.phone}
                width={"100%"}
                placeholder="phone"
                maxLength="10"
                ref={Refphone}
                name="phone"
              />
            </CMP.InputContainer>
          </CMP.DataDiv>

         
        </CMP.CardBody>
      </CMP.CardWraper>
    </>
  );
}

export default GeneralInfo;
