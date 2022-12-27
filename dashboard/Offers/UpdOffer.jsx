import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { OfferId } from "./updateoffer/OfferId";
import { OfferRegion } from "./updateoffer/OfferRegion";
import { OfferOther } from "./updateoffer/OfferOther";
import { OfferCoverImage } from "./updateoffer/OfferCoverImage";
import BoxCom from "./BoxCom";
import { Button } from "@mui/material";
import { useGetofferToUpdate } from "../../../component/utils/hooks/useGetdata";
import glb from "../../../component/globalCpm";
import axios from "axios";
import { toast } from "react-toastify";
import { OfferLocation } from "./updateoffer/OfferLocation";
import { OfferImages } from "./updateoffer/OfferImages";


function UpdOffer({ UpdofferId }) {

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);
  const [offerTypeId, setofferTypeId] = useState("");
  const [offerDate, setOfferDate] = useState("");

  const [regionId, setRegionId] = useState("");
  const [cityId, setCityId] = useState("");
  const [distId, setDistId] = useState("");

  const [isShowPrice, setIsShowPrice] = useState("");
  const [isComment, setIsComment] = useState("");
  const [isOwner, setIsOwner] = useState("");
  const [oldcoverImage, setOldcoverImage] = useState("");
  const [oldmapImage, setOldmapImage] = useState("");
  const [oldOfferImage, setOldOfferImage] = useState([]);

  const [isSaveed, setIssaved] = useState(false);

  //  const [oldcoverImage,setOldcoverImage]=useState("")
  const [coverImage, setCoverImage] = useState([]);
  const [offerImage, setOfferImage] = useState([]);
  const [locationImage, setlocationImage] = useState([]);
  const [imageToUpload, setImageToUpload] = useState([]);



  const { data, isFetched, refetch, isLoading } =
    useGetofferToUpdate(UpdofferId);
    console.log(data)
    // console.log(" data?.data[0].offerData.city:",data?.data.offerData[0].detail)
    // console.log(" data?.data[0].images :",data?.data.offerImage )

  /* ------------------------------------------------ */
  // const [title,setTitle]=useState(data?.data[0].title);
  // const [detail,setDetail]=useState(data?.data[0].detail);
  // const [price,setPrice]=useState(data?.data[0].price);
  // const [offerTypeId, setofferTypeId] = useState(data?.data[0].type_offer);
  // const [offerDate, setOfferDate] = useState(data?.data[0].offer_date);

  // const [regionId, setRegionId] = useState(data?.data[0].regon);
  // const [cityId, setCityId] = useState(data?.data[0].city);
  // const [distId, setDistId] = useState(data?.data[0].dist);

  // const [isShowPrice, setIsShowPrice] = useState(data?.data[0].ispriceshown);
  // const [isComment, setIsComment] = useState(data?.data[0].iscomment);
  // const [isOwner, setIsOwner] = useState(data?.data[0].isowner);
  // const [oldcoverImage,setOldcoverImage]=useState(import.meta.env.VITE_OfferImage+data.data[0].cover_offerimage)
  /* ------------------------------------------------ */

  // const url=import.meta.env.VITE_BASE_URL+"/aqar/newoffer/getities"

  const [isSaveProccess, setIsSaveProccess] = useState(false);

  let masterOfferId = parseInt(UpdofferId);

  // /* ------------------ */

  /* ------------------ */
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaveProccess(true);
    const offreForm = new FormData();
    offreForm.append("offerId", masterOfferId);
    offreForm.append("offerDate", offerDate);
    offreForm.append("offerType", offerTypeId);
    offreForm.append("regon", regionId);
    offreForm.append("city", cityId);
    offreForm.append("dist", distId);
    offreForm.append("price", price);
    offreForm.append("isPriceShown", Number(isShowPrice));
    offreForm.append("isComment", Number(isComment));
    offreForm.append("isOwner", Number(isOwner));
    offreForm.append("title", title);
    offreForm.append("detail", detail);
    offreForm.append("offerIndex", imageToUpload.length);
    offreForm.append("locationImage", locationImage[0]);
    offreForm.append("coverImage", coverImage[0]);

    for (let index = 0; index <= imageToUpload.length; index++) {
      offreForm.append("offerimages", imageToUpload[index]);
    }

    offreForm.append("my", "khalid nadish");
    // console.log([...offreForm]);
    // for (var key of offreForm.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    // const jsonForm = conveFormToJson(offreForm);
    // console.log("jsonForm :>>", jsonForm);

    saveToDatabase(offreForm);
    setIsSaveProccess(false);
  };

  const saveToDatabase = async (offreForm) => {
    const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/updateoffer";
    const sendForm = await axios
      .put(url, offreForm, {
        params:{offerId:UpdofferId},
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => setIssaved(true));
  };

  const saveMsg = () => {
    toast.success("تم تفعيل العرض وتم عرضه في صفحة العروض");
    refetch();
    setIssaved(false);
  };

  useEffect(() => {
    if (data) {
      /* ------------------------------------------------ */
      setofferTypeId((pre) => {
        return data?.data.offerData[0].type_offer;
      });
      setOfferDate((pre) => {
        return data?.data.offerData[0].offer_date;
      });
      /* ------------------------------------------------ */
      setRegionId((pre) => {
        return data?.data.offerData[0].regon;
      });
      setCityId((pre) => {
        return data?.data.offerData[0].city;
      });
      setDistId((pre) => {
        return data?.data.offerData[0].dist;
      });
      /* ------------------------------------------------ */
      setPrice((pre) => {
        return data?.data.offerData[0].price;
      });
      setIsShowPrice((pre) => {
        if(data?.data.offerData[0].ispriceshown===1){return true}else{return false}
        // return data?.data.offerData[0].ispriceshown;
      });
      setIsComment((pre) => {
        if(data?.data.offerData[0].iscomment===1){return true}else{return false}
        // return data?.data.offerData[0].iscomment;
      });
      setIsOwner((pre) => {
        if(data?.data.offerData[0].isowner===1){return true}else{return false}
        // return data?.data.offerData[0].isowner;
      });
      /* ------------------------------------------------ */
      setTitle((pre) => {
        return data?.data.offerData[0].title;
      });
      setDetail((pre) => {
        return data?.data.offerData[0].detail;
      });
      setOldcoverImage((pre) => {
        return data?.data.offerData[0].cover_offerimage;
      });
      setOldmapImage((pre) => {
        return data?.data.offerData[0].map;
      });
      setOldOfferImage((pre) => {
        return data?.data.offerImage
      });
      
     
      
    }
  }, [data]);

  
  if (isLoading) {
    return <h1>Loading.. </h1>;
  }
  // const newDate1 = moment(donors.donateDate).format('YYYY-MM-DD')

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              masterOfferNO={masterOfferId}
              offerDate={offerDate}
              setOfferDate={setOfferDate}
              offerTypeId={offerTypeId}
              setofferTypeId={setofferTypeId}
            />
          </BoxCom>

          <BoxCom>
            <OfferRegion
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
                oldmapImage={oldmapImage}
                locationImage={locationImage}
                setlocationImage={setlocationImage}
               
              />
              <OfferCoverImage
                oldcoverImage={oldcoverImage}
                coverImage={coverImage}
                setCoverImage={setCoverImage}
              />
              <OfferImages
                // offerImage={offerImage}
                // setOfferImage={setOfferImage}
                oldOfferImage={oldOfferImage}
                imageToUpload={imageToUpload}
                setImageToUpload={setImageToUpload}
              />
            </BoxCom>
          </BoxCom>
          <BoxCom>
            {price && (
              <glb.InputContainer dirLabel={"column"}>
                <glb.TXTLabel>{" السعر"}</glb.TXTLabel>
                <glb.Input
                  width="100%"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </glb.InputContainer>
            )}

            <OfferOther
              isShowPrice={isShowPrice}
              setIsShowPrice={setIsShowPrice}
              isComment={isComment}
              setIsComment={setIsComment}
              isOwner={isOwner}
              setIsOwner={setIsOwner}
            />
          </BoxCom>
          <BoxCom>
            {title && (
              <glb.InputContainer dirLabel={"column"}>
                <glb.TXTLabel>{"عنوان الاعلان"}</glb.TXTLabel>
                <glb.Input
                  width="100%"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </glb.InputContainer>
            )}

            {detail && (
              <glb.InputContainer dirLabel={"column"}>
                <glb.TXTLabel>{"تفاصيل الاعلان"}</glb.TXTLabel>
                <glb.InputTextarea
                  width="100%"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                />
              </glb.InputContainer>
            )}
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
            color={"error"}
            type="submit"
            // disabled={isSaveProccess == true ? true : false  }  //TODO: important to displable it while saving
            sx={{ fontFamily: "CairoBold" }}
          >
            تعديل
          </Button>
        </Box>
      </form>
      {isSaveed && saveMsg()}
    </>
  );
}

export default UpdOffer;
