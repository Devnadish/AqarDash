import React, { useState, useEffect } from "react";
import SelectCopm from "./SelectCopm";
import InnerBoxCom from "./InnerBoxCom";
import Reigon from "./reigon.json";
import axios from "axios";
import { Box } from "@mui/material";
import {useFormContext  ,Controller} from "react-hook-form";


export const OfferRegion = ({  dist,regionId, setRegionId ,cityId,
  setCityId,distId, setDistId}) => {
  const [cityData, setCityData] = useState([]);
  const {register, getValues }=useFormContext()
  
  const RG=getValues("regionId")
  
  console.log("🚀 ~ file: OfferRegion.jsx:18 ~ RG", RG)
  
  
  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getcities";

  useEffect(() => {
    const cityes = axios({
      method: "get",
      params: { regionId:parseInt(RG) },
      url: url,
      responseType: "json",
    }).then((response) => {
      setCityData(response.data);
    });
  }, [RG]);



  return (
    <>
      <InnerBoxCom flexDir="row">
        <SelectCopm
          data={Reigon}
          Xlabel={"المنظقة"}
          setSelectId={setRegionId}
          SelectId={regionId}
          register={register}
          fname={"regionId"}

        />
       

        {/* {regionId} */}
        <City
          cityData={cityData}
          dist={dist}
          regionId={regionId}
          cityId={cityId}
          setCityId={setCityId}
          distId={distId}
          setDistId={setDistId}
        />
      </InnerBoxCom>
    </>
  );
};




const City = ({ cityData, cityId, setCityId, distId,
  setDistId}) => {
    const [distData, setDistData] = useState([]);
    const {register, getValues }=useFormContext()
    const CTY=getValues("cityId")

    const getDist = (cityId) => {
      const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getdist";
      const cityes = axios({
        method: "get",
        params: { cityId:parseInt(CTY) },
        url: url,
        responseType: "json",
      }).then((response) => {
        setDistData(response.data);
      });
    };

    useEffect(() => {
      getDist(CTY);
    }, [CTY,cityData]);

    return (
      <>
        <SelectCopm
          data={cityData}
          Xlabel={"المدينة"}
          register={register}
          fname={"cityId"}

          setSelectId={setCityId}
          SelectId={cityId}
        />
        {/* {cityId} */}
        {distData.length > 0 ? <Dist data={distData}  distId={distId} setDistId={setDistId}/> : <Nodist />}
      </>
    );
  };

const Dist = ({  data, distId,  setDistId }) => {
  const [NewDistData, setNewDistData] = useState(data);

  const {register }=useFormContext()

  useEffect(() => {
    setNewDistData(pre=>data)
  }, [data]);

 
  return (
    <>
      <SelectCopm

        data={NewDistData}
        Xlabel={"الحي"}
        register={register}
        fname={"distId"}

        setSelectId={setDistId}
        SelectId={distId}
      />
       {/* {distId} */}
    </>
  );
};

const Nodist=() =>{
  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "primary.light",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily:"TB",
          borderRadius:2
        }}
      >
        لا توجد احياء 
      </Box>
    </>
  );
} 
  
