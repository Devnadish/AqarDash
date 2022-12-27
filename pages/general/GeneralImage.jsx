import React ,{useEffect,useState}from 'react'
import CMP from "./Style";
// import ImageUploadBtn from "./ImageUploadBtn";
import { Box } from "@mui/material";
import { AiOutlineCloudUpload } from "react-icons/ai";
import DiloagShow from "../../component/dailog/DiloagShow";
import {  toast } from 'react-toastify';



function GeneralImage({
  Refheroimage,
  heroimage,
  setHeroImage,

  Reflogo,
  imageLogo,
  setImageLogo,

  setMapImage,
  mapimage,
}) {
  const [logoPreview, setLogoPreview] = useState(null);
  const [heroPreview, setHeroPreview] = useState(null);
  const [mapPreview, setMapPreview] = useState(null);

  useEffect(() => {
    setHeroPreview(import.meta.env.VITE_mainPageImage + "heroimage.jpg");
    setLogoPreview(import.meta.env.VITE_mainPageImage + "logo.jpg");
    setMapPreview(import.meta.env.VITE_mainPageImage + "mapImage.jpg");
  }, []);

  const handleMapimage = (event) => {
    setMapImage((pre) => event.target.files[0]);
    setMapPreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleHeroimage = (event) => {
    setHeroImage((pre) => event.target.files[0]);
    setHeroPreview(URL.createObjectURL(event.target.files[0]));
  };
  const handleLogoimage = (event) => {
    setImageLogo((pre) => event.target.files[0]);
    setLogoPreview(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
 {/* Logo */}
<Box  sx={{display:"flex" ,justifyContent:"space-between",alignItems:"start" ,gap:1,width:"100%",border:"1px solid black"}}
          >
      <CMP.ImageDataDiv>
        <input
          ref={Reflogo}
          name="logoImage"
          type="file"
          id="logoimage"
          accept=".jpg"
          hidden
          onChange={handleLogoimage}
        />
        <ImageUploadBtn
          refid={Reflogo}
          imageLogo={imageLogo}
          logoPreview={logoPreview}
          btnTitle={"الشعار"}
        />
      </CMP.ImageDataDiv>
 {/* Hero Image */}
      <CMP.ImageDataDiv>
        <CMP.ImageInput
          ref={Refheroimage}
          width={"45%"}
          placeholder="heroimage"
          name="HeroImage"
          type={"file"}
          id="HeroImage"
          onChange={handleHeroimage}
          hidden
        />
        <ImageUploadBtn
          refid={Refheroimage}
          logoPreview={heroPreview}
          btnTitle={"البنر"}
        />
      </CMP.ImageDataDiv>
  {/* Location */}
      <CMP.ImageDataDiv>
        <CMP.ImageInput
          // ref={Reflocation}
          width={"30%"}
          placeholder="loc Image"
          name="locationImage"
          type="file"
          id="locationImage"
          hidden
          onChange={handleMapimage}
        />

        <ImageUploadBtn
          // refid={Reflocation}
          imageLogo={mapimage}
          logoPreview={mapPreview}
          btnTitle={"الموقع"}
        />
      </CMP.ImageDataDiv>

</Box>
    </>
  );
}

export default GeneralImage




function ImageUploadBtn({ refid,  logoPreview,btnTitle }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    refid.current.click();
  };

  const handlshow = () => {
    if (logoPreview===null){
        toast.info("الرجاء اختيار الصورة قبل طلب عرضها ...")
    }else{
        setOpen(true)
    }
  };
  
  return (
    <>
      <CMP.ImagePreviewContainer>
        <CMP.ImageBtn type="button" onClick={handleClick}>
          <AiOutlineCloudUpload />
          <CMP.TXTLabel>{btnTitle}</CMP.TXTLabel>
        </CMP.ImageBtn>

        <CMP.ImagePreview imgpreview={logoPreview} onClick={handlshow}>
          <CMP.Image src={logoPreview} />
        </CMP.ImagePreview>
      </CMP.ImagePreviewContainer>


      
      {open   ? (
        <DiloagShow open={open} toggle={setOpen}>
          <CMP.Image src={logoPreview} />
        </DiloagShow>
      ) : null}
    </>
  );
}