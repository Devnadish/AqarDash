import React from "react";
import CMP from "./CardStyle";
import { CardFooer } from "./CardFooer";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";

export const NewCard = ({ cardData }) => {
  return (
    <>
      <CMP.OfferCardWraper>
        <CardHeader
          title={cardData.title}
          oId={cardData.id_offer}
          offertype={cardData.offertype}
          offertypeCat={cardData.offertypeCat}
          iscomment={cardData.iscomment}
          ispriceshown={cardData.ispriceshown}
          isowner={cardData.isowner}
        />

        <CMP.OfferCardBody>
          <CardBody
            imgsrc={import.meta.env.VITE_OfferImage + cardData.cover_offerimage}
            offerDetail={cardData.detail}
            regoin={cardData.regoin}
            city={cardData.city}
            dist={cardData.dist}
          />
        </CMP.OfferCardBody>
        <CMP.OfferCardFooter>
          <CardFooer
            offerId={cardData.id}
            offerDate={cardData.offer_date}
          
          />
        </CMP.OfferCardFooter>
      </CMP.OfferCardWraper>
    </>
  );
};
