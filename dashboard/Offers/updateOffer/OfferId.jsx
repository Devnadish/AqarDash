import React,{useEffect} from "react";
import SelectCopm from "../../../../component/selectCom/SelectCopm";
import InnerBoxCom from "./InnerBoxCom";
import { Typography, Box } from "@mui/material";
import { useGetOfferType } from "../../../../component/utils/hooks/useGetdata";
import glb from "../../../../component/globalCpm";
 

 



export const OfferId = ({
  offerDate,
  setOfferDate,
  offerType,
  masterOfferNO,
  setofferTypeId,
  offerTypeId,
}) => {
  const {data,isFetched}=useGetOfferType()
 
 
 
  return (
    <>
      <InnerBoxCom flexDir="row">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            border: ".5px solid rgba(0,0,0,0.2)",
            borderRadius: 2,
            padding: 0,
            margin: 0,
          }}
        >
          <Typography
            sx={{
              display: "block",
              width: "100%",
              backgroundColor: "primary.light",
              color: "white",
              fontFamily: "TajawalBold",
              fontSize: "1rem",
              textAlign: "center",
              verticalAlign: "middle",
              margin: 0,
              py: 0.5,
              borderBottom:"3px solid red"
            }}
          >
            رقم العرض
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "TajawalBold",
              fontSize: "1.3rem",
              textAlign: "center",
              margin: 0,
            }}
          >
            {masterOfferNO}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            border: ".5px solid rgba(0,0,0,0.2)",
            borderRadius: 2,
            padding: 0,
            margin: 0,
          }}
        >
          <Typography
            sx={{
              display: "block",
              width: "100%",
              backgroundColor: "primary.light",
              color: "white",
              fontFamily: "TajawalBold",
              fontSize: "1rem",
              textAlign: "center",
              verticalAlign: "middle",
              margin: 0,
              borderBottom:"3px solid black",
              py: 0.5,
            }}
          >
            تاريخ العرض
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "TajawalBold",
              fontSize: "1.3rem",
              textAlign: "center",
              margin: 0,
            }}
          >
            

             <glb.Input
               type="date"
               width="100%"
               value={offerDate}
               onChange={(e) => setOfferDate(e.target.value)}
           
         
        />
            
          </Typography>
        </Box>
        
     {isFetched && 
        <SelectCopm
        data={data.data}
        Xlabel={"طبيعة العرض"}
        Xrefrence={offerType}
        setSelectId={setofferTypeId}
        SelectId={offerTypeId}
      />
     
     
     }
     
      </InnerBoxCom>
    </>
  );
};


