import styled from "styled-components";

const HeroImageWarper = styled.div`
  max-width: 300px;
  /* max-height: 112px; */
  margin: auto;
`;
/* ----------------------------------------- */
const Image = styled.img`
 max-width: 100%;
 /* max-height: 112px; */
  width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 8px;
`;

/* ----------------------------------------- */
const CardBodyWraper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 gap:5px;
 width: 100%;
`;

/* --------------------------------------------- */
const OfferCardWraper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 300px;
  align-items: stretch;
  width: 100%;
  margin: 1rem auto;
 
  border-radius: 6px;
  /* border: 1px solid; */
  color: ${({ theme }) => theme.text};
  box-shadow: ${({theme})=>theme.shadow1};
  overflow: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    font-size: 0.8rem;
  }
`;
/* ----------------------------------------- */
const OfferCardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  min-height:130px;
  margin: auto;
  /* border-radius: 8px; */
  padding: 0;
  padding: .5rem 1rem;
  background-color: ${({ theme }) => theme.appleBackgroud};
  color: ${({ theme }) => theme.text};
  font-family: "CB";
  text-align: center;
`;
/* ----------------------------------------------- */
const OfferCardFooter = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.nafbar};
`;
/* ---------------------------------- */

const OfferHr = styled.hr`
margin: 5px 0px;
border: .5px solid ${({ theme }) => theme.hrColor};;
width: 100%;
`;
/* ---------------------------------------- */
const OfferCardBody = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.nafbar};
`;
/* --------------------------------------- */
const OfferCardBtn=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 15%;
height: 30px;
background-color: rgba(0, 0, 0,.1);
border-radius:4px;
border:1px solid rgba(0, 0, 0,.2);
cursor: pointer;

`;
const OfferTypeTXT = styled.p`
  font-family: "CB";
  font-size: .7rem;
  text-align: right;
  background-color: ${({type,theme}) => type === "بيع" ? theme.warning.dark : theme.success.dark }    ;
  padding: 0 1rem ;
  width: fit-content;
  border-radius: 14px;
  border: .1px solid white ;
  color:white;
`;


const OfferIdTxt = styled.p`
display: flex;
justify-content: center;
align-items: center;
  font-family: "CB";
  font-size: 1.2rem;
  background-color: ${({theme}) =>   theme.primary.extradark };
  padding: 0 1rem ;
  border: 2px solid white;
  color: white;
  width: fit-content;
  height: fit-content;
  border-radius:4px;
  box-shadow: ${({theme})=>theme.shadow2};
`;


 
 
const OfferOptionTxt = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: "CB";
font-size: 1.5rem;
text-align: right;
color: ${({type,theme}) => type === 0 ? theme.error.dark : theme.success.dark }    ;
padding: 0 1rem ;
width: fit-content;
border-bottom: 3px solid;
border-color: ${({type,theme}) => type === 0 ? theme.error.dark : theme.success.dark }    ;
padding: 5px;
color:white;
`;


 
const OfferDetail = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CB";
  font-size: 0.8rem;
  max-height: 100px;
  min-height: 100px;
  overflow: auto;
  background-color: rgba(0,0,0,.1);
  text-align: right;
  padding: 1rem;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 8px;
`;


const LocationDetail = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CB";
  font-size: 0.7rem;
  /* background-color: "rgba(0,0,0,.1)"; */
  text-align: right;
  /* padding: 1rem; */
  border: 1px solid rgba(255,255,255,.7);
  border-radius: 8px;
  width: fit-content;
`;
const LocationWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: right;
  width: 100%;
  gap: 5px;
  border: 1px solid rgba(0,0,0,.09);
  border-radius: 4px;
  margin-top: 5px;
  min-height: 100px;
  padding-right: 5px;
  /* width: 100%; */
  /* background-color:  rgba(100,155,255,.2);; */
`;

 
const ImagePreview = styled.img`
 max-width: 100%;
 max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  padding: 1.5rem;
  border: 3px solid rgba(0,0,0,.09);
  margin-top: 1rem;
`;


export default {
    HeroImageWarper,
    Image,
    CardBodyWraper,
    OfferCardWraper,
    OfferCardHeader,
    OfferCardFooter,
    OfferHr,
    OfferCardBody,
    OfferCardBtn,
    OfferTypeTXT,
    OfferIdTxt,
    OfferOptionTxt,
    OfferDetail,
    LocationDetail,
    LocationWraper,
    ImagePreview
}