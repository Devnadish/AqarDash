import React from "react";
import Box from "@mui/material/Box";
import { InputText } from "../../../../component/Input/Input";
import InnerBoxCom from "../InnerBoxCom"
import glb from "../../../../component/globalCpm";


export const OfferDetail = ({title, setTilte, detail}) => {
  return (
    <>
      <InnerBoxCom>
        <UpdInput Xlabel={"عنوان الاعلان"}  value={title} setValue={setTilte}    />
        <InputText
          Xlabel={"تفاصيل الاعلان"}
          Xplaceholder={"تفاصيل كاملة للاعلان توضح المزياء والخدمات المتوفرة"}
          Xrows={5}
          Xrefrence={detail}
        
        />
      </InnerBoxCom>
    </>
  );
};

/* ------------------------------------------------- */

export function UpdInput({
  Xlabel,
  dirLabel="column",
  xvalue="dfgfg",
  setValue
}) {
  return (
    <>
      <glb.InputContainer dirLabel={dirLabel}>
        <glb.TXTLabel>{Xlabel}</glb.TXTLabel>
        <glb.Input
          width="100%"
          value={xvalue}
          onChange={(e)=>setValue(e.target.value)}
        />
      </glb.InputContainer>
    </>
  );
}