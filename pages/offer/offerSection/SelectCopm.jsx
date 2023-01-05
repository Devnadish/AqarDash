import React from "react";
import CMP from "./offerStyle";


function SelectCopm({ Xlabel, data ,  dirLabel="column",register,fname}) {
  return (
    <>
      <CMP.InputContainer dirLabel={dirLabel}>
        <CMP.TXTLabel>{Xlabel}</CMP.TXTLabel>
        <CMP.CustomSelectDiv>
          <CMP.SeclectOption
            {...register(fname, { required: true })}
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
}
export default SelectCopm;
