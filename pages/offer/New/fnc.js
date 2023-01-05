import axios from "axios";
import {  toast } from 'react-toastify';

export const defValue = {
  title: "",
  detail: "",
  offerDate: new Date(),
  price: 0,
  isShowPrice: false,
  isComment: true,
  offerTypeId: 2,
  ReigonSelect: "",
  CitySelect: "",
  DistSelect: "",
};



const offerTypeId =""
const regionId =""
const cityId =""
const distId =""
const  isOwner =1
 
export const handleSubmitData = async (data,locationImage, coverImage, imageToUpload,masterOfferId,trigger) => {
    // console.log("🚀 ~ file: NewOffer.jsx:69 ~ handleSubmitData ~ data", data)
    // alert(JSON.stringify(data))
    // alert(masterOfferId)
    // alert(data.CitySelect)
    if(data.DistCity==="0"){
      toast.error("يجب اختيار المدينة الصحيحه")
      return 
    }

    
    if(data.DistSelect==="0"){
      toast.error("يجب اختيار الحي الصحيح")
      return 
    }




    const offreForm = new FormData();
    offreForm.append("offerDate", data.offerDate.toLocaleDateString());
    offreForm.append("price", data.price);
    offreForm.append("isPriceShown", Number(data.isShowPrice));
    offreForm.append("isComment", Number(data.isComment));
    offreForm.append("title", data.title);
    offreForm.append("detail", data.detail);

    offreForm.append("offerType", data.offerTypeId);
    offreForm.append("offerId", masterOfferId);
    offreForm.append("regon", data.ReigonSelect);
    offreForm.append("city", data.CitySelect);
    offreForm.append("dist", data.DistSelect);
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

const options = {
  onUploadProgress: (progressEvent) => {
    const {loaded, total} = progressEvent;
    let percent = Math.floor((loaded*100) / total)
    console.log(`${loaded}kb of  ${total} | ${percent}%`)
    
  }
}

    const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/savenewoffer";
      const sendForm = await axios
        .post(url, offreForm,options,{headers: {'Content-Type': 'multipart/form-data' }})
        .then((res)=> toast.success("تم تفعيل العرض وتم عرضه في صفحة العروض") ) 
  }