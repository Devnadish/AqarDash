import React  from "react";
import CMP from "./Style";


function MainPageInfo({
  Refherotext,
  Refherodeail,
  data,
}) {
  


 

  return (
    <>
      <CMP.CardWraper>
        <CMP.CardHeader>الصفحة الرئسية</CMP.CardHeader>
        <CMP.CardBody>
          <CMP.DataDiv >
            <CMP.InputContainer  W="100%" dirLabel={"column"}>
              <CMP.TXTLabel  Fsize={".8rem"}>كلمة ترحبية</CMP.TXTLabel>
              <CMP.Input
                defaultValue={data.data.herotext}
                ref={Refherotext}
                width={"100%"}
                placeholder="herotext"
                name="heroText"
              />
            </CMP.InputContainer>
            <CMP.InputContainer  W="100%" dirLabel={"column"}>
              <CMP.TXTLabel  Fsize={".8rem"}>نبذة عنك</CMP.TXTLabel>
              <CMP.TextInput
                defaultValue={data.data.herodeail}
                placeholder="heroDetail"
                width={"100%"}
                rows={"5"}
                name="HeroDetail"
                ref={Refherodeail}
              />
            </CMP.InputContainer>
          </CMP.DataDiv>

         
        </CMP.CardBody>
      </CMP.CardWraper>
    </>
  );
}

export default MainPageInfo;
