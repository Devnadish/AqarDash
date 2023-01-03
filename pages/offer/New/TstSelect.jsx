import React,{useState} from 'react'
import { useFormContext } from "react-hook-form";
import Reigon from "./reigon.json";
import axios from "axios";
import { Box, Stack, Typography } from '@mui/material';
import ErrorMessage from "../../../component/ErrorMessage";
/* ***************************************************************************************** */  

function TstSelect() {
  const [ area, setArea] = useState(Reigon);
  const [ city, setCity] = useState([]);
  const [ dist, setDist] = useState([]);   
/* --------------------------------collect City----------------------------------------------- */  
const getCityDate =  (areaId) => {
  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getcities";
  const cityes =  axios({
    method: "get",
    params: { regionId: parseInt(areaId) },
    url: url,
    responseType: "json",
  }).then((response) => {  setCity( response.data ) } );
}
/* ------------------------------------------------------------------------------- */  
const getDistDate = (cityId) => {
  const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getdist";
  const cityes = axios({
    method: "get",
    params: { cityId: parseInt(cityId) },
    url: url,
    responseType: "json",
  }).then((response) => {
    setDist(response.data);
  });
};
/* ------------------------------------------------------------------------------- */  
  const { register, getValues, setValue ,formState: { errors },clearErrors} = useFormContext();
  const handleCity = (e) => {
    if( e.target.value === ""){
      setDist([])
      setCity([])
      return;
    }
    setValue("ReigonSelect", e.target.value)
    const rValue=getValues("ReigonSelect")
    const cData = getCityDate(parseInt(rValue))
    setDist([])
    setValue("CitySelect", 0)
    setValue("DistSelect", 0)
  }
/* ------------------------------------------------------------------------------- */  
  const handleDist = (e) => {
    if( e.target.value === ""){
      setDist([])
      return;
    }
    setValue("CitySelect", e.target.value)
    const rValue=getValues("CitySelect")
    const cData = getDistDate(parseInt(rValue))
    console.log({dist})
    setValue("DistSelect", 0)
  }
 /* ------------------------------------------------------------------------------- */  
  return (
      <Stack
        flexDirection={"column"}
        spacing={2}
        sx={{
          flex: 1,
          borderRadius: "5px",
          boxShadow: 3,
          height: "100%",
          justifyContent: "space-around",
          p: 1,
        }}
      >
       <Box sx={{ display: "flex", flexDirection: "column",alignItems:"flex-start" }}>
          <Typography className="require" sx={{ fontFamily: "CB", textAlign: "right" }}>
            المنطقة
          </Typography>
      <label className="custom-select">
          <select
           {...register("ReigonSelect")}
            onChange={handleCity}
            // name="ReigonSelect"
          >
            <option value="">اختار المنطقة</option>
            {area && area !== undefined
              ? area.map((ctr) => {
                  return (
                    <option key={ctr.id} value={ctr.id}>
                      {ctr.label}
                    </option>
                  );
                })
              : "No Country"}
          </select>
      </label>
      {errors.ReigonSelect ? (
            <ErrorMessage
              message={errors.ReigonSelect.message}
              clearErrors={clearErrors}
              fieldName={"ReigonSelect"}
            />
          ) : null}
          </Box>
{/* -------------------- city ------------------------------------------------------ */}
<Box sx={{ display: "flex", flexDirection: "column",alignItems:"flex-start" }}>
          <Typography className="require" sx={{ fontFamily: "CB", textAlign: "right" }}>
            المدينة
          </Typography>
      <label className="custom-select">
          <select
                 {...register("CitySelect")}
          onChange={handleDist}
        >
          <option value="">حدد المدينة</option>
          {city && city !== undefined
            ? city.map((ctr) => {
                return (
                  <option key={ctr.id} value={ctr.id}>
                    {ctr.label}
                  </option>
                );
              })
            : "No city"}
        </select>
        </label>
        {errors.CitySelect ? (
            <ErrorMessage
              message={errors.CitySelect.message}
              clearErrors={clearErrors}
              fieldName={"CitySelect"}
            />
          ) : null}
        </Box>
{/* -------------------- dist ------------------------------------------------------ */}
<Box sx={{ display: "flex", flexDirection: "column",alignItems:"flex-start" }}>
          <Typography className="require" sx={{ fontFamily: "CB", textAlign: "right" }}>
            الحي
          </Typography>
      <label className="custom-select">
       <select  
        {...register("DistSelect")}
       >
        <option value="">الحي</option>
        {dist && dist !== undefined
          ? dist.map((ctr) => {
              return (
                <option key={ctr.id} value={ctr.id}>
                  {ctr.label}
                </option>
              );
            })
          : "No dist"}
      </select> 
      </label>
{errors.DistSelect ? (
            <ErrorMessage
              message={errors.DistSelect.message}
              clearErrors={clearErrors}
              fieldName={"DistSelect"}
            />
          ) : null}
      </Box>
      </Stack>
  );
}
export default TstSelect
