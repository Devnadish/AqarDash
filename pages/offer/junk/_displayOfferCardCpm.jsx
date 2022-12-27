import styled from "styled-components";

/* ------------------------------------- */

const OfferCardWraper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  max-width: 300px;
  width: 100%;
  margin: auto;
  /* margin-top: 0.1rem; */
  /* margin-bottom: 0.5rem; */
  border-radius: 6px;
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

const OfferCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  /* border-radius: 8px; */
  padding: 0;
  padding: .5rem 1rem;
  background-color: ${({ theme }) => theme.cardbg};
  color: ${({ theme }) => theme.text};
  font-family: "CairoBold";
  text-align: center;
`;
const OfferCardText = styled.p``;

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

/* ------------------------------------- */


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

/* ------------------------------------- */


const OfferNormalDivr = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 1.5rem;
  max-height: 80%;
  height: 100%;
  overflow: auto;
  padding: 1rem;

  @media (max-width: 768px) {
    /* flex-direction: column; */
    height: 100%;
  }
`;


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

export default {
  OfferCardBody,
  OfferCardFooter,
  OfferNormalDivr,
  OfferCardWraper,
  OfferCardHeader,
  OfferCardText,
  OfferCardBtn
};
