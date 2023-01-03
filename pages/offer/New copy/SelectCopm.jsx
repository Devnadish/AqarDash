import React from "react";
import CMP from "./offerStyle";
// setXdefaultValue
function SelectCopm({ Xlabel, data ,  dirLabel="column",Xrefrence,setSelectId,SelectId,register,fname}) {

  const handleChane=(e)=>{
    setSelectId(e.target.value)

    
   
  }

  return (
    <>
      <CMP.InputContainer dirLabel={dirLabel}>
        <CMP.TXTLabel>{Xlabel}</CMP.TXTLabel>
     
        <CMP.CustomSelectDiv>
          <CMP.SeclectOption
            {...register(fname, { required: true })}
            // ref={Xrefrence}
            // value={SelectId}
            // onChange={(e) => handleChane(e,)}
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
