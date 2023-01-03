import axios from "axios";
import {  toast } from 'react-toastify';

const offerTypeId =""
const masterOfferId =""
const regionId =""
const cityId =""
const distId =""
const  isOwner =1
const imageToUpload=[]
const locationImage=""
// const coverImage=""

export const handleSubmitData = async (data,locationImage, coverImage, imageToUpload,masterOfferId) => {
    console.log("🚀 ~ file: NewOffer.jsx:69 ~ handleSubmitData ~ data", data)
    // alert(JSON.stringify(data))
    // alert(masterOfferId)
    const offreForm = new FormData();
    offreForm.append("offerDate", data.offerDate.toLocaleDateString());
    offreForm.append("price", data.price);
    offreForm.append("isPriceShown", Number(data.isShowPrice));
    offreForm.append("isComment", Number(data.isComment));
    offreForm.append("title", data.title);
    offreForm.append("detail", data.detail);

    offreForm.append("offerType", offerTypeId);
    offreForm.append("offerId", masterOfferId);
    offreForm.append("regon", regionId);
    offreForm.append("city", cityId);
    offreForm.append("dist", distId);
    offreForm.append("isOwner", isOwner);

    offreForm.append("offerIndex", imageToUpload.length);
    offreForm.append("locationImage", locationImage[0] );
    offreForm.append("coverImage", coverImage[0]);
    for (let index = 0; index <= imageToUpload.length; index++) {
      offreForm.append("offerimages", imageToUpload[index]);
    }
    offreForm.append("my","khalid nadish");
    saveToDatabase(offreForm)
    // setIsSaveProccess(false)
  };
  


const saveToDatabase = async (offreForm) => {
    const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/savenewoffer";
      const sendForm = await axios
        .post(url, offreForm,{headers: {'Content-Type': 'multipart/form-data' }})
        .then((res)=> toast.success("تم تفعيل العرض وتم عرضه في صفحة العروض") ) 
  }