import React, { useState, useEffect } from "react";
import SelectCopm from "./SelectCopm";
import InnerBoxCom from "./InnerBoxCom";
import Reigon from "./reigon.json";
import axios from "axios";
import { Box, Stack } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import Select from 'react-select'


const OfferRegion = () => {
  
  const [ country, setCountry] = useState([]);
  const [ state, setState] = useState([]);
  const [ city, setCity] = useState([]);

  useEffect(()=>{
    setCountry(Reigon);
  },[])

  const { register, getValues, setValue } = useFormContext();

  return (
    <>
      <Stack
        flexDirection={"column"}
        spacing={2}
        sx={{
          flex: 1,
          p: 1,
          borderRadius: "5px",
          boxShadow: 3,
          height: "100%",
        }}
      >
<Select options={Reigon}/>
        <SelectCopm
          data={Reigon}
          Xlabel={"المنظقة"}
          register={register}
          fname={"regionId"}
        />

        {/* <City   cityData={cityData} /> */}

        <SelectCopm
          // data={cityData}
          data={Reigon}
          Xlabel={"المدينة"}
          register={register}
          fname={"cityId"}
        />

        <SelectCopm
          // data={NewDistData}
          data={Reigon}
          Xlabel={"الحي"}
          register={register}
          fname={"distId"}
        />
      </Stack>
    </>
  );
};

export default OfferRegion;

export const OfferRegion1 = () => {
  const [cityData, setCityData] = useState([]);
  const { register, getValues, setValue } = useFormContext();
  const RG = getValues("regionId");
  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getcities";

  useEffect(() => {
    const cityes = axios({
      method: "get",
      params: { regionId: parseInt(RG) },
      url: url,
      responseType: "json",
    }).then((response) => {
      setCityData(response.data);
    });
    setValue("distId", "");
  }, [RG]);

  return (
    <>
      <InnerBoxCom flexDir="row">
        <SelectCopm
          data={Reigon}
          Xlabel={"المنظقة"}
          register={register}
          fname={"regionId"}
        />
        <City cityData={cityData} />
      </InnerBoxCom>
    </>
  );
};

const City = ({ cityData }) => {
  const [distData, setDistData] = useState([]);
  const { register, getValues } = useFormContext();

  const CTY = getValues("cityId");
  const RG = getValues("regionId");

  const getDist = (cityId) => {
    const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getdist";
    const cityes = axios({
      method: "get",
      params: { cityId: parseInt(cityId) },
      url: url,
      responseType: "json",
    }).then((response) => {
      setDistData(response.data);
    });
  };

  useEffect(() => {
    getDist(CTY);
  }, [CTY, RG]);

  return (
    <>
      {/* <p>{CTY}{RG}</p> */}
      <SelectCopm
        data={cityData}
        Xlabel={"المدينة"}
        register={register}
        fname={"cityId"}
      />
      {distData.length > 0 ? <Dist data={distData} /> : <Nodist />}
    </>
  );
};

const Dist = ({ data }) => {
  const [NewDistData, setNewDistData] = useState(data);
  const { register } = useFormContext();
  useEffect(() => {
    setNewDistData((pre) => data);
  }, [data]);
  return (
    <>
      <SelectCopm
        data={NewDistData}
        Xlabel={"الحي"}
        register={register}
        fname={"distId"}
      />
    </>
  );
};

const Nodist = () => {
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
          fontFamily: "TB",
          borderRadius: 2,
        }}
      >
        لا توجد احياء
      </Box>
    </>
  );
};
