import React from "react";
import CMP from "./Style";

function SoicalInfo({ Refemail, Refinstgram, Refsnapsot, Refwhatapp, data }) {
  return (
    <>
      <CMP.CardWraper>
        <CMP.CardHeader> التواصل الاجتماعي</CMP.CardHeader>
        <CMP.CardBody>

          <CMP.InputContainer  W="45%" dirLabel={"column"}>
            <CMP.TXTLabel  Fsize={".8rem"}>واتس اب</CMP.TXTLabel>
            <CMP.Input
              defaultValue={data.data.whatapp}
              width={"100%"}
              placeholder="whats app"
              ref={Refwhatapp}
              name="whatsapp"
            />
          </CMP.InputContainer>

          <CMP.InputContainer  W="45%" dirLabel={"column"}>
            <CMP.TXTLabel  Fsize={".8rem"}>ايميل</CMP.TXTLabel>

            <CMP.Input
              defaultValue={data.data.email}
              width={"100%"}
              placeholder="email"
              ref={Refemail}
              name="email"
            />
          </CMP.InputContainer>

          <CMP.InputContainer  W="45%" dirLabel={"column"}>
            <CMP.TXTLabel   Fsize={".8rem"}>انستجرام</CMP.TXTLabel>
            <CMP.Input
              defaultValue={data.data.instgram}
              width={"100%"}
              placeholder="instgram"
              ref={Refinstgram}
              name="instgram"
            />
          </CMP.InputContainer>

          <CMP.InputContainer  W="45%" dirLabel={"column"}>
            <CMP.TXTLabel  Fsize={".8rem"}>سناب شت</CMP.TXTLabel>
            <CMP.Input
              defaultValue={data.data.snapsot}
              width={"100%"}
              placeholder="snapshot"
              ref={Refsnapsot}
              name="snapshot"
            />
          </CMP.InputContainer>

        </CMP.CardBody>
      </CMP.CardWraper>
    </>
  );
}

export default SoicalInfo;
