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

const BodyWarper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  width: 100%;
  margin: auto;
  color: white;
  /* background-color: #0e0238; */
  min-height: 0px;
  overflow-y: auto;
  padding: 0 1rem ;
  min-height: 0px;
 
  
  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 0.8rem;
  }
`;

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
/* --------------------------------------- */
const InputContainer = styled.div`
  display:inline-flex;
  flex-direction: ${({dirLabel})=>dirLabel} ;
  justify-content: flex-start;
  align-items: flex-start;
  width:  ${({ W }) => W};
  padding: 5px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 100%;
  }
`;
/* --------------------------------------- */
const TXTLabel = styled.p`
  display: flex;
  font-size: ${({Fsize})=>Fsize};
  font-family: "TB";
  color:black;
  font-family: "TB";
  line-height:1.5;
  width: fit-content;
 
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    /* width: ${({ width }) => width}; */
  }
`;

/* --------------------------------------- */
const CardWraper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  margin: auto;
  border-radius: 4px;
  /* border: 1px solid; */
  box-sizing: border-box;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    font-size: 0.8rem;
  }
`;

/* ------------------------------------- */
const CardHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.warning.dark};
  color: ${({ theme }) => theme.primary.extraDark};
  font-family: "CB";
  line-height: normal;
  font-size: 1rem;
  overflow: hidden;
  border-radius: 4px 4px 0px 0px;
`;
/* ------------------------------------- */

/* ------------------------------------- */
const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  /* height: 100%; */
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.nafbar};
`;
/* ------------------------------------- */
const DataDiv= styled.div`
width: 100%;
@media (max-width: 768px) {
  width: 100%;
  }
`;
/* ------------------------------------- */
const ImageDataDiv= styled.div`
display: flex;
justify-content: center;
width: 25%;
@media (max-width: 768px) {
  width: 100%;
  }
`;
/* ------------------------------------- */

/* ------------------------------------- */

const TextInput = styled.textarea`
  border: 0.5px solid ${({ theme }) => theme.hrColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: ${({ width }) => width};
  resize: vertical;
  font-family: "TR";

  &:focus {
    color: black;
    background-color: white;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;
/* ------------------------------------- */

const ImageInput = styled.input`
  /* display: none; */
`;
/* -------------------------------- */
const WraperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  overflow-y: auto;
  padding:  12rem;
  background-color: #bda1a1;
`;
/* -------------------------------- */
const NormalDivr= styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
gap: 1.5rem;
overflow-y: auto;
background-color: #bda1a1;
@media (max-width: 768px) {
  flex-direction: column;
  max-height: 100%;
  height: 100%;
  padding-bottom: 6rem;
  }

`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0.2rem 1rem;
  font-family: "TB";
  border-radius: 4px;
  width: ${({W})=>W};
  height: ${({H})=>H};
  font-size: 1rem;
  justify-items: center;
  background-color: ${({ colorx,theme }) => colorx === "save" ?  theme.success.dark: theme.error.dark };
  color: ${({ theme }) =>theme.primary.light};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
 
  cursor: pointer;
`;
/* -------------------------------- */
/* -------------------------------- */
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  background-color:rgba(0,0,0,0.1); 
  border-radius: 8px;
  min-height: 0px;
  margin: 1rem;
  padding: 1rem;
  @media (max-width: 768px)  {
    align-items: center;
    margin: 1rem auto;
    
  
  
}
  
`;
/* -------------------------------------------- */
const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content:"center";
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  padding: 5px 15px;
  border-radius: 4px;
  
`;


const ImageBtn = styled.button`
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "TR";
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  min-height: 40px;
  min-width: 64px;
  padding: 3px 8px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  background-color: rgb(25, 118, 210);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

    width: 100%;
  @media (max-width: 768px) {
    font-size: 0.8rem;
     
  }
`;
const Image = styled.img`
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
`;
/* ------------------------------ */

const ImagePreview = styled.div`
display: flex;
justify-content: center;
align-items: center;
  /* max-width: 30%; */
  /* max-height: 100%; */
  background-image: url(${({imgpreview})=>  imgpreview === null ? "img/general/addfile.svg" : null});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${({imgpreview})=>  imgpreview === null ? "lightgray" : null};
  background-position: center;
  border: 1px solid black;
  /* width: 8rem; */
  /* height: 8rem; */
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  padding: 3px;
`;
export default {
    Input,
    InputContainer,
    TXTLabel,
    CardWraper,
    CardHeader,
    CardBody,
    DataDiv,
    ImageDataDiv,
    TextInput,
    ImageInput,
    WraperDiv,
    BodyWarper,
    NormalDivr,
    Btn,Form,
    ImagePreviewContainer,
    ImageBtn,Image,ImagePreview
}


