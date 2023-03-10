import styled from "styled-components";

/* ------------------------------------- */
const OfferBodyWarper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.text};
  min-height: 0px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 0.8rem;
  }
`;
/* ---------------------------- */
const OfferHr = styled.hr`
margin: 5px 0px;
border: .5px solid ${({ theme }) => theme.hrColor};;
width: 100%;
`;
/* ------------------------------------- */
const OfferNormalDivr = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:  stretch;
  gap: 1.5rem;
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.error.dark};
  overflow: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;
/* ---------------------------- */
const OfferActions= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 10px;

`;
/* ---------------------------- */
const OfferCounter= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1rem;

gap:15px;
`;
/* ---------------------------- */
const OfferCounterWraper= styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding: 0 1rem;
color: red;
border-radius:4px ;
/* box-shadow: ${({theme})=>theme.shadow1}; */
max-height: 50px;
height: 50px;
`;
/* ---------------------------- */
export default {
    OfferHr,
    OfferNormalDivr,
    OfferBodyWarper,
    OfferActions,
    OfferCounter,
    OfferCounterWraper
     
}
