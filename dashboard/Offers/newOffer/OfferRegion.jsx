import React, { useState, useEffect } from "react";
import SelectCopm from "../../../../component/selectCom/SelectCopm";
import InnerBoxCom from "./InnerBoxCom";
import Reigon from "../../../../data/reigon.json";
import axios from "axios";
import { Box } from "@mui/material";

export const OfferRegion = ({ regon, city, dist,regionId, setRegionId ,cityId,
  setCityId,distId, setDistId}) => {
  const [cityData, setCityData] = useState([]);

  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getcities";
  useEffect(() => {
    const cityes = axios({
      method: "get",
      params: { regionId: regionId },
      url: url,
      responseType: "json",
    }).then((response) => {
      setCityData(response.data);
      
    });
  }, [regionId]);



  return (
    <>
      <InnerBoxCom flexDir="row">
        <SelectCopm
          data={Reigon}
          Xlabel={"المنظقة"}
          setSelectId={setRegionId}
          SelectId={regionId}

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

    const getDist = (cityId) => {
      const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getdist";
      const cityes = axios({
        method: "get",
        params: { cityId: cityId },
        url: url,
        responseType: "json",
      }).then((response) => {
        setDistData(response.data);
      });
    };

    useEffect(() => {
      getDist(cityId);
    }, [cityData, cityId]);

    return (
      <>
        <SelectCopm
          data={cityData}
          Xlabel={"المدينة"}
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
  // const [distId, setDistId] = useState(12);

  useEffect(() => {
    setNewDistData(pre=>data)
    // console.log(data.length)

  }, [data]);

 
  return (
    <>
      <SelectCopm
        data={NewDistData}
        Xlabel={"الحي"}
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
          fontFamily:"TajawalBold",
          borderRadius:2
        }}
      >
        لا توجد احياء 
      </Box>
    </>
  );
} 
  
