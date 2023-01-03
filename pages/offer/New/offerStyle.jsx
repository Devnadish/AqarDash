import styled,{css} from "styled-components";
const InputCss=css`
 border: 0.5px solid ${({ theme }) => theme.hrColor};
  border-radius: 2px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  font-family: "TR";
  /* font-size: 1rem; */
  &:focus {
    color: black;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.price};

  }
`;
/* ---------------------------------------------- */
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  background-color:rgba(0,0,0,.05); 
  border-radius: 8px;
  min-height: 0px;
  margin: 2rem 4rem;
  padding: 2rem 4rem;
  position: relative;
  
  @media (max-width: 768px)  {
    /* align-items: center; */
    /* flex-direction: column; */
    margin: 2rem 4rem ;
}
  
`;

/* ----------------------------------------- */
const Input = styled.input`
  ${InputCss}
  background-color: ${({disabled})=>disabled === true ? "rgba(255,150,0,.9)" :"transparent"};
  color: black;
  font-size: 1rem;
  width: ${({ width }) => width};
  @media (max-width: 500px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;

/* ##################### OfferId Style ############################ */
/* ---------------------------------------------- */
const OfferIdnOWraper=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 4px;
/* max-width: 112px; */

width: 100%;
padding: .5rem;
margin: 0;
/* background-color: white; */
/* box-shadow: ${({theme})=>theme.shadow2}; */
`;
/* ---------------------------------------------- */
const TypoTXT=styled.p`
display: block;
width: 100%;
background-color: red;
color: white;
font-family: "TB";
font-size: 1rem;
text-align: center;
margin: 0;
padding: 5px 0px;
/* border-bottom:3px solid red */
`;
/* ---------------------------------------------- */
const OfferIdnO=styled.p`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid red;
border-radius: 8px;
background-color: red;
width: 70%;
color: white;
font-family: "TB";
font-size: 2rem;
font-weight: bolder;
text-align: center;
margin: 0;
padding: 0.5rem;
box-shadow: ${({theme})=>theme.shadow2};
/* border-bottom:3px solid red */
`;
/* ##################### OfferDate Style ############################ */
const OfferDateWraper=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 4px;
/* border:1px solid rgba(0,0,0,0.9); */
width: 100%;

padding: 0;
margin: 0;
`;

/* ---------------------------------------------- */
const OfferDate=styled.p`
display: block;
width: 100%;
background-color: ${({ theme }) => theme.price};
color: black;
font-family: "TB";
font-size: 1.5rem;
font-weight: bolder;
text-align: center;
margin: 0;
padding: 0.5rem;
border-bottom:3px solid red
`;
/* ################################################# */

const TXTLabel = styled.p`
display: inline;
  font-size: 0.9rem;
  font-family: "TB";
  text-align: right;
  
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;
/* ---------------------------------------------- */
const InputContainer = styled.div`
  display:inline-flex;
  flex-direction: ${({dirLabel})=>dirLabel} ;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  /* border:1px solid rgba(0, 0, 255, 0.9); */
  padding: 5px;
  height: 100%;
  gap: 5px;
`;

/* ---------------------------------------------- */
const InputTextarea = styled.textarea`
  ${InputCss}
  width: ${({ width }) => width};
  color: black;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;

const CustomSelectDiv= styled.div`
 max-height: 31px;
position: relative;
width: 100%;
height: 100%;
border-radius: 6px;
`;

const SeclectOption = styled.select`
  /* ${InputCss} */
  border: 0.5px solid ${({ theme }) => theme.hrColor};
  border-radius: 2px;
 
 
  outline: none;
 
  width: 100%;
  height: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
 display: flex;
 justify-content: flex-start;
 align-items:"center";
font-size: .8rem;
padding:.5rem .5rem; 
color:white;
background-color: #9496a5;
font-family: "TR";
font-weight: bold;
border: 0;



&:focus {
    color: black;
    background-color: #96b396;
    border: 1px solid ${({ theme }) => theme.price};

  }
 
`;


const InputTitle = styled.input`
  ${InputCss}
  background-color: ${({disabled})=>disabled === false ? "rgba(255,150,0,.9)" :"rgba(255,150,0,.2)"};
  color: black;
  font-size: 1rem;
  width: ${({ width }) => width};
  border-radius: 4px;
  @media (max-width: 500px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;

const InputDetail = styled.textarea`
  ${InputCss}
  width: ${({ width }) => width};
  color: black;
  background-color: ${({disabled})=>disabled === false ? "rgba(255,150,0,.9)" :"rgba(255,150,0,.1)"};
  resize:none ;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;


const ErrorTXT=styled.p`
display: block;
width: 100%;
background-color: red;
color: white;
font-family: "TB";
font-size: 14px;
text-align: right;
margin: 0;
padding: 5px 0px;
/* border-bottom:3px solid red */
`;
 
export default {
    Form,
    TypoTXT,
    Input,
    OfferIdnO,
    OfferIdnOWraper,
    OfferDate,
    TXTLabel,
    InputContainer,
    InputTextarea,
    CustomSelectDiv,
    SeclectOption,OfferDateWraper,
    InputTitle,
    InputDetail,ErrorTXT


    

}