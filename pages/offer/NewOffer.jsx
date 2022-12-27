import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import { OfferId } from "../../dashboard/Offers/newoffer/OfferId";
import { OfferRegion } from "../../dashboard/Offers/newoffer/OfferRegion";
import { OfferLocation } from "../../dashboard/Offers/newoffer/OfferLocation";
import { OfferImages } from "../../dashboard/Offers/newoffer/OfferImages";
import { OfferDetail } from "../../dashboard/Offers/newoffer/OfferDetail";
import { OfferOther } from "../../dashboard/Offers/newoffer/OfferOther";
import { OfferCoverImage } from "../../dashboard/Offers/newoffer/OfferCoverImage";
// import AqarType from "../../../data/AqarType.json";
import BoxCom from "../../dashboard/Offers/BoxCom";
import { Button } from "@mui/material";
import { useOfferID } from "../../../component/utils/hooks/useGetdata";
import axios from "axios";
import {  toast } from 'react-toastify';

function NewOffer() {
  const [isSaveed,setIssaved]=useState(false)
  const [coverImage, setCoverImage] = useState([]);
  const [offerImage, setOfferImage] = useState([]);
  const [locationImage, setlocationImage] = useState([]);
  const [imageToUpload, setImageToUpload] = useState([]);

  const [isShowPrice, setIsShowPrice] = useState(false);
  const [isComment, setIsComment] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  const [regionId, setRegionId] = useState(10);
  const [cityId, setCityId] = useState(0);
  const [distId, setDistId] = useState(0);

  const [offerTypeId, setofferTypeId] = useState("");
  const [isSaveProccess,setIsSaveProccess]=useState(false);

  const { data, isFetched,refetch } = useOfferID();
  let masterOfferId = 0;
  isFetched ? (masterOfferId = parseInt(data?.data.OfferId) + 1) : 0;
 

  // const clientId = useRef()
  const offerId = useRef();
  const offerDate = useRef();
  const offerType = useRef();
  /* ------------------ */
  const regon = useRef();
  const city = useRef();
  const dist = useRef();
  /* ------------------ */
  const price = useRef();
  const title = useRef();
  const detail = useRef();
  const frm = useRef();
  /* ------------------ */
  const locationRef = useRef();
 
const conveFormToJson=(xform)=>{
  let obj={};
  for (let key of xform.keys()){
    obj[key] = xform.get(key);
  }
// return JSON.stringify(obj);
return obj;

}


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaveProccess(true)
    const offreForm = new FormData();
    offreForm.append("offerId", masterOfferId);
    offreForm.append("offerDate", offerDate.current?.value);
    offreForm.append("offerType", offerTypeId);
    offreForm.append("regon", regionId);
    offreForm.append("city", cityId);
    offreForm.append("dist", distId);
    offreForm.append("price", price.current?.value);
    offreForm.append("isPriceShown", Number(isShowPrice));
    offreForm.append("isComment", Number(isComment));
    offreForm.append("isOwner", Number(isOwner));
    offreForm.append("title", title.current?.value);
    offreForm.append("detail", detail.current?.value);
    offreForm.append("offerIndex", imageToUpload.length);
    offreForm.append("locationImage", locationImage[0] );
    offreForm.append("coverImage", coverImage[0]);
    
    for (let index = 0; index <= imageToUpload.length; index++) {
      offreForm.append("offerimages", imageToUpload[index]);
    }
  
    offreForm.append("my","khalid nadish");
    // console.log([...offreForm]);
    // for (var key of offreForm.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    // const jsonForm = conveFormToJson(offreForm);
    // console.log("jsonForm :>>", jsonForm);

    saveToDatabase(offreForm)
    setIsSaveProccess(false)
   
  };

const saveToDatabase = async (offreForm) => {
  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/savenewoffer";
    const sendForm = await axios
      .post(url, offreForm,{headers: {'Content-Type': 'multipart/form-data' }})
      .then((res)=>setIssaved(true) ) 
}

  const saveMsg=()=>{
    toast.success("تم تفعيل العرض وتم عرضه في صفحة العروض")
    refetch() 
    setIssaved(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} ref={frm} >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 1,
            padding: "2rem",
            width: "100%",
          }}
        >
          <BoxCom>
            <OfferId
              offerTypeData={AqarType}
              offerId={offerId}
              masterOfferNO={masterOfferId}
              offerDate={offerDate}
              offerType={offerType}
              offerTypeId={offerTypeId}
              setofferTypeId={setofferTypeId}
            />
          </BoxCom>

          <BoxCom>
            <OfferRegion
              regon={regon}
              city={city}
              dist={dist}
              regionId={regionId}
              setRegionId={setRegionId}
              cityId={cityId}
              setCityId={setCityId}
              distId={distId}
              setDistId={setDistId}
            
              




            />
          </BoxCom>

          <BoxCom>
            <BoxCom>
              <OfferLocation
                locationRef={locationRef}
                locationImage={locationImage}
                setlocationImage={setlocationImage}
                nameAttr={"locationImage"}
              />
              <OfferCoverImage
                coverImage={coverImage}
                setCoverImage={setCoverImage}
              />
              <OfferImages
                offerImage={offerImage}
                setOfferImage={setOfferImage}
                imageToUpload={imageToUpload}
                setImageToUpload={setImageToUpload}
              />
            </BoxCom>
          </BoxCom>

          <BoxCom>
            <OfferOther
              price={price}
              isShowPrice={isShowPrice}
              setIsShowPrice={setIsShowPrice}
              isComment={isComment}
              setIsComment={setIsComment}
              isOwner={isOwner}
              setIsOwner={setIsOwner}
            />
          </BoxCom>

          <BoxCom>
            <OfferDetail title={title} detail={detail} />
          </BoxCom>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: 2,
            position: "fixed",
            bottom: "10px",
            left: "5px",
            width: "100px",
            zIndex: 1000,
            boxShadow: 24,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            color={"warning"}
            type="submit"
            // disabled={isSaveProccess == true ? true : false  }  //TODO: important to displable it while saving
            sx={{ fontFamily: "CairoBold" }}
          >
            حفظ {isSaveProccess}
          </Button>
        </Box>
      </form>
      {isSaveed && saveMsg()  }
    </>
  );
}

export default NewOffer;
