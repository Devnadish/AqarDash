import styled from "styled-components";

/* ------------------------------------- */
const CardWraper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  margin: auto;
  margin-top: .1rem;
  margin-bottom: .5rem;
  border-radius: 8px;
  border: 1px solid;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  overflow: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    font-size: 0.8rem;
  }
`;


const OfferCardWraper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 500px;
  width: 25%;
  margin: auto;
  margin-top: .1rem;
  margin-bottom: .5rem;
  border-radius: 8px;
  border: 1px solid;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  overflow: auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    font-size: 0.8rem;
  }
`;





const CardHeader= styled.div`
width: 100%;
height: 30px;
background-color: ${({ theme }) => theme.bg};
font-family: "CairoBold";
padding: .1rem;
text-align: center;

`;

const OfferCardHeader= styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: fit-content;
padding: .5rem;
background-color: ${({ theme }) => theme.bg};
font-family: "CairoBold";
/* padding: .1rem; */
text-align: center;

`;

const CardBody= styled.div`
padding: 10px;
display: flex;
flex-wrap: wrap;
gap: .5rem;
justify-content: space-evenly;
align-items: center;

width: 100%;
height: 100%;
background-color:${({ theme }) => theme.nafbar};

`;


/* ------------------------------------- */




const NormalDivr= styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
width: 100%;
gap: 1.5rem;
max-height: 80%;
height: 100%;
overflow: auto;
/* padding: 1rem; */

@media (max-width: 768px) {
  flex-direction: column;
  max-height: 100%;
  height: 100%;
  padding-bottom: 6rem;
  }

`;



const OfferNormalDivr= styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
width: 100%;
gap: 1.5rem;
max-height: 80%;
height: 100%;
overflow: auto;
/* padding: 1rem; */

@media (max-width: 768px) {
  flex-direction: column;
  max-height: 100%;
  height: 100%;
  padding-bottom: 6rem;
  }

`;

export default {
  CardWraper,
  CardHeader,
  CardBody,
  NormalDivr,
  OfferNormalDivr,
  OfferCardWraper,
  OfferCardHeader


};
