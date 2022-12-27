import  { useRef, useState,lazy,Suspense } from "react";
// import cpm from "./generalStyle";
import CMP from "./Style";
import { Box } from "@mui/material";
import axios from "axios";
import { useGetdata } from "../../component/utils/hooks/useGetdata";
import { toast } from "react-toastify";

const  GeneralInfo = lazy(()=>import ("./GeneralInfo")) ;
const  SoicalInfo = lazy(()=>import ("./SoicalInfo")) ;
const  LocationInfo = lazy(()=>import ("./LocationInfo")) ;
const  MainPageInfo = lazy(()=>import ( "./MainPageInfo")) ;
const  Generalmage = lazy(()=>import ("./GeneralImage")) ;



 
 
 
 

 
const General = () => {
  const [imageLogo, setImageLogo] = useState(null);
  const [heroimage, setHeroImage] = useState(null);
  const [mapimage, setMapImage] = useState(null);
  const Refid = useRef();
  const Refname = useRef();
  const Reflogo = useRef();
  const Refphone = useRef();
  const Refheroimage = useRef();
  const Refherotext = useRef();
  const Refherodeail = useRef();
  const Refemail = useRef();
  const Refsnapsot = useRef();
  const Refwhatapp = useRef();
  const Refinstgram = useRef();
  const Refadrs = useRef();
  const Reflat = useRef();
  const Refatt = useRef();
  const Reflocation = useRef();
  const RefFrom = useRef();

  const { data, isLoading, isFetched } = useGetdata();
  if (isLoading) {
    return <div>Loadin....</div>;
  }

  const handleData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", Refid.current.value);
    formData.append("name", Refname.current.value);
    formData.append("phone", Refphone.current.value);
    formData.append("herotext", Refherotext.current.value);
    formData.append("herodeail", Refherodeail.current.value);
    formData.append("email", Refemail.current.value);
    formData.append("snapsot", Refsnapsot.current.value);
    formData.append("whatapp", Refwhatapp.current.value);
    formData.append("instgram", Refinstgram.current.value);
    formData.append("adrs", Refadrs.current.value);
    formData.append("lat", Reflat.current.value);
    formData.append("att", Refatt.current.value);
    formData.append("mapImage", mapimage);
    formData.append("logoImage", imageLogo);
    formData.append("heroImage", heroimage);

    // console.log(Array.from(formData));

    const sendData = axios
      .post("http://localhost:3009/aqar/savenewinfo", formData)
      .then(toast.info("بنجاح تم تاسيس المعلومات الاساسية للمنصة"));
  };

  return (
    <>
      <CMP.BodyWarper>
        <DataFormx
          data={data}
          handleData={handleData}
          Refid={Refid}
          Refname={Refname}
          Reflogo={Reflogo}
          Refphone={Refphone}
          Refheroimage={Refheroimage}
          Refherotext={Refherotext}
          Refherodeail={Refherodeail}
          Refemail={Refemail}
          Refsnapsot={Refsnapsot}
          Refwhatapp={Refwhatapp}
          Refinstgram={Refinstgram}
          Refadrs={Refadrs}
          Reflat={Reflat}
          Refatt={Refatt}
          Reflocation={Reflocation}
          RefFrom={RefFrom}
          imageLogo={imageLogo}
          setImageLogo={setImageLogo}
          heroimage={heroimage}
          setHeroImage={setHeroImage}
          mapimage={mapimage}
          setMapImage={setMapImage}
        />
      </CMP.BodyWarper>
    </>
  );
};
export default General;



const DataFormx = ({
  data,
  handleData,
  Refid,
  Refname,
  Reflogo,
  Refphone,
  Refheroimage,
  Refherotext,
  Refherodeail,
  Refemail,
  Refsnapsot,
  Refwhatapp,
  Refinstgram,
  Refadrs,
  Reflat,
  Refatt,
  Reflocation,
  imageLogo,
  setImageLogo,
  heroimage,
  setHeroImage,
  mapimage,
  setMapImage,
}) => {
  return (
    <>
    <Suspense fallback={<h1>Loaddinggg....</h1>}>
      <CMP.Form onSubmit={handleData} id="myform">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
          mb={2}
        >
          <CMP.TXTLabel Fsize={"1.5rem"}>المعلومات العامة للمنصة</CMP.TXTLabel>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            <CMP.Btn colorx={"save"} W="160px" H="40px" type="submit">
              حفظ
            </CMP.Btn>
            <CMP.Btn colorx={"cancel"} W="80px" H="40px">
              الغاء
            </CMP.Btn>
          </Box>
        </Box>
        <GeneralInfo
          Refid={Refid}
          Refname={Refname}
      
          Refphone={Refphone}
          data={data}
        
        />
        <MainPageInfo
          Refherotext={Refherotext}
          Refherodeail={Refherodeail}
          data={data}
         
        />
        <SoicalInfo
          Refemail={Refemail}
          Refinstgram={Refinstgram}
          Refsnapsot={Refsnapsot}
          Refwhatapp={Refwhatapp}
          data={data}
        />

        <LocationInfo
          Refadrs={Refadrs}
          Reflat={Reflat}
          Refatt={Refatt}
          Reflocation={Reflocation}
          data={data}
         
        />
        <Generalmage
      
      heroimage={heroimage}
      setHeroImage={setHeroImage}
      
      Refheroimage={Refheroimage}
      mapimage={mapimage}
      setMapImage={setMapImage}
         
      Reflogo={Reflogo}
      setImageLogo={setImageLogo}
      imageLogo={imageLogo}
        
        
        
        
        />
      </CMP.Form>
      </Suspense>


    </>
  );
};

