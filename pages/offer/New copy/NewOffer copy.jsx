import React, { useState} from "react";
import Box from "@mui/material/Box";
import { OfferId } from "./OfferId";
import CMP from "./offerStyle";
import { OfferRegion } from "./OfferRegion";
import { OfferLocation } from "./OfferLocation";
import { OfferImages } from "./OfferImages";
import { OfferDetail } from "./OfferDetail";
import { OfferOther } from "./OfferOther";
import { OfferCoverImage } from "./OfferCoverImage";
import { Button } from "@mui/material";
import { useOfferID } from "../../../component/utils/hooks/useGetdata";
import axios from "axios";
import {  toast } from 'react-toastify';
import { FormProvider, useForm ,Controller} from "react-hook-form";
 
 

function NewOffer() {
  const defValue={
    titlename:"",
    VarOfferDetail:"",
    email:"khalid nadish"

  }
  const FormMx = useForm({
    defaultValues: defValue
  });
  
  const {reset,clearErrors,register,watch,control, handleSubmit,formState: { errors }} = FormMx
  
  
  const [isSaveed,setIssaved]=useState(false)
  /* ------------------------------------------------------ */
  const [offerTypeId, setofferTypeId] = useState("");
  const [offerDate, setOfferDate] = useState(new Date());
  /* ------------------------------------------------------- */
  const [locationImage, setlocationImage] = useState([]);
  const [coverImage, setCoverImage] = useState([]);
  const [imageToUpload, setImageToUpload] = useState([]);
  /* --------------------------------------------------------- */
  const [price,setPrice]=useState(0)
  const [isShowPrice, setIsShowPrice] = useState(false);
  const [isComment, setIsComment] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  /* --------------------------------------------------------- */
  const [regionId, setRegionId] = useState(10);
  const [cityId, setCityId] = useState(0);
  const [distId, setDistId] = useState(0);
  /* ---------------------------------------------------------- */
  const [title,setTitle]=useState("");
  const [detail,setDetail]=useState("");
  /* ------------------------------------------------------------ */
  const [isSaveProccess,setIsSaveProccess]=useState(false);




  const { data, isFetched,refetch } = useOfferID();
  let masterOfferId = 0;
  isFetched ? (masterOfferId = parseInt(data?.data?.OfferId) + 1) : 0;
  /* ------------------ */

   

  const handleSubmitData = async (data,e) => {
    // console.log("🚀 ~ file: NewOffer.jsx:69 ~ handleSubmitData ~ data", data)
    alert(JSON.stringify(data))
    // e.preventDefault();
    // console.log(offerDate.toLocaleDateString())

    setIsSaveProccess(true)
    const offreForm = new FormData();
    offreForm.append("offerId", masterOfferId);
    offreForm.append("offerDate", offerDate.toLocaleDateString());
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
    offreForm.append("locationImage", locationImage[0] );
    offreForm.append("coverImage", coverImage[0]);
    for (let index = 0; index <= imageToUpload.length; index++) {
      offreForm.append("offerimages", imageToUpload[index]);
    }
    offreForm.append("my","khalid nadish");
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


  const onSubmit=(data)=>{
    console.log({data})
    alert(JSON().stringify(data))
     console.log(FormMx.formState)
    console.log( FormMx.formState.isSubmitSuccessful)
    // console.log(formState.isSubmitSuccessful)
    FormMx.formState.isSubmitSuccessful ? alert("submit now")  : alert("Error")
  }

  return (
    <>
    <FormProvider {...FormMx}>
      <CMP.Form onSubmit={handleSubmit(handleSubmitData)}   >
        <Controller
         name="email"
         control={control}
         render={({field}) => (<><CMP.Input {...field}/></>)}/>
           
            <OfferId
              masterOfferNO={masterOfferId}
              offerDate={offerDate}
              setOfferDate={setOfferDate}
              offerTypeId={offerTypeId}
              setofferTypeId={setofferTypeId}
            />
            
{/* -------------------------------------------------------------- */}
            <OfferDetail
               title={title}
               detail={detail}  
               setTitle={setTitle} 
               setDetail={setDetail}
               register={register}
               titleError={errors.titlename}
               detailError={errors.VarOfferDetail}
               clearErrors={clearErrors}

                />
{/* -------------------------------------------------------------- */}               
            <OfferRegion
              regionId={regionId}
              setRegionId={setRegionId}
              cityId={cityId}
              setCityId={setCityId}
              distId={distId}
              setDistId={setDistId}
            />
{/* -------------------------------------------------------------- */}
            <Box sx={{display:"flex", flexDirection:{xs:"column",sm:"column",md:"row"},gap:1, justifyContent:"space-between", width:"100%"}}>
              <OfferLocation 
                locationImage={locationImage}
                setlocationImage={setlocationImage}
              />
              <OfferCoverImage   
                coverImage={coverImage} 
                setCoverImage={setCoverImage}
              />
              <OfferImages
                imageToUpload={imageToUpload}
                setImageToUpload={setImageToUpload}
              />
              </Box>
{/* -------------------------------------------------------------- */}              
            <OfferOther
              price={price}
              setPrice={setPrice}
              isShowPrice={isShowPrice}
              setIsShowPrice={setIsShowPrice}
              isComment={isComment}
              setIsComment={setIsComment}
              isOwner={isOwner}
              setIsOwner={setIsOwner}
            />
{/* -------------------------------------------------------------- */}            
       
{/* -------------------------------------------------------------- */}               
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
            color={"warning"}
            type="submit"
            // disabled={isSaveProccess == true ? true : false  }  //TODO: important to displable it while saving
            sx={{ fontFamily: "CB" }}
          >
            حفظ {isSaveProccess}
          </Button>

          <Button
            variant="contained"
            color={"error"}
            type="button"
            onClick={() => reset()}
            
            sx={{ fontFamily: "CB" }}
          >
            مسح {isSaveProccess}
          </Button>
        </Box>
      </CMP.Form>
      </FormProvider>
      {isSaveed && saveMsg()  }
    </>
  );
}


export default NewOffer;
