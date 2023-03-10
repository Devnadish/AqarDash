import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Reigon from "../offerCompnent/data/reigon.json";
import axios from "axios";
import { Box, Stack, Typography } from "@mui/material";
import ErrorMessage from "../../../component/ErrorMessage";
import SectionTilte from "../../../component/sectionTitle/SectionTilte";

/* ***************************************************************************************** */
const boxSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};



const typoSx = { fontFamily: "TB", textAlign: "right", fontSize: ".9rem" };

function TstSelect() {
  const [area, setArea] = useState(Reigon);
  const [city, setCity] = useState([]);
  const [dist, setDist] = useState([]);
  /* --------------------------------collect City----------------------------------------------- */
  const getCityDate = (areaId) => {
    const url = import.meta.env.VITE_BASE_URL + "/aqar/newoffer/getcities";
    const cityes = axios({
      method: "get",
      params: { regionId: parseInt(areaId) },
      url: url,
      responseType: "json",
    }).then((response) => {
      setCity(response.data);
      console.lig({city})
    });
  };
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
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const handleCity = (e) => {
    if (e.target.value === "") {
      setDist([]);
      setCity([]);
      return;
    }
    setValue("ReigonSelect", e.target.value);
    const rValue = getValues("ReigonSelect");
    const cData = getCityDate(parseInt(rValue));
    setDist([]);
    setValue("CitySelect", 0);
    setValue("DistSelect", 0);
  };
  /* ------------------------------------------------------------------------------- */
  const handleDist = (e) => {
    if (e.target.value === "") {
      setDist([]);
      return;
    }
    setValue("CitySelect", e.target.value);
    const rValue = getValues("CitySelect");
    const cData = getDistDate(parseInt(rValue));
    console.log({ dist });
    setValue("DistSelect", 0);
  };
  /* ------------------------------------------------------------------------------- */
  return (
    <Stack
      flexDirection={"column"}
      sx={{
        flex: 1,
        borderRadius: "5px",
        boxShadow: 1,
        height: "100%",
        justifyContent: "space-around",
        p: 2,
        position: "relative",
        width: "100%",
      }}
    >
      <SectionTilte TextLabel={"???????? ??????????"} />
      <br />
      <Box sx={boxSx}>
        <Typography className="require" sx={typoSx}>
          ??????????????
        </Typography>
        <label className="custom-select">
          <select
            {...register("ReigonSelect")}
            onChange={handleCity}
            // name="ReigonSelect"
          >
            <option value="">?????????? ??????????????</option>
            {area && area !== undefined
              ? area.map((ctr) => {
                  return (
                    <option key={ctr.id} value={ctr.id}>
                      {ctr.label} / {ctr.id}
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
      <Box sx={boxSx}>
        <Typography className="require" sx={typoSx}>
          ??????????????
        </Typography>
        <label className="custom-select">
          <select {...register("CitySelect")} onChange={handleDist}>
            <option value="">?????? ??????????????</option>
            {city && city !== undefined
              ? city.map((ctr) => {
                  return (
                    <option key={ctr.id} value={ctr.id}>
                      {ctr.label} / {ctr.id}
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
      <Box sx={boxSx}>
        <Typography className="require" sx={typoSx}>
          ????????
        </Typography>
        <label className="custom-select">
          <select {...register("DistSelect")}>
            <option value="">????????</option>
            {dist && dist !== undefined
              ? dist.map((ctr) => {
                  return (
                    <option key={ctr.id} value={ctr.id}>
                      {ctr.label} / {ctr.id}
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
export default TstSelect;
