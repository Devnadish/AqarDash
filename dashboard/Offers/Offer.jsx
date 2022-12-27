import React, { useState } from "react";
import cpm from "./offerCpm";
import Card from "./displayOfferCardCpm";
import DiloagShow from "../../../component/dailog/DiloagShow";
import NewOffer from "./NewOffer";
import { Box, Button, Typography } from "@mui/material";
import { MdAddCircleOutline } from "react-icons/md";
import { useGetAlloffers } from "../../../component/utils/hooks/useGetdata";
import { NewCard } from "./offerCompnent/NewCard";

const Offer=()=>{return (<><h1>sds</h1></>)}

//  const Offer = () => {
//   const [open, setOpen] = useState(false);
//   const { data, isFetched } = useGetAlloffers();

//   return (
//     <>
//       <cpm.OfferBodyWarper>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             width: "100%",
//             gap: "1rem",
//             justifyContent: "flex-start",
             
//           }}
//         >
//           <Button
//             variant="contained"
//             onClick={() => setOpen(true)}
//             endIcon={<MdAddCircleOutline />}
//             sx={{
//               width: "50%",
//               display: "flex",
//               gap: "1rem",
//               minHeight: "50px",
//             }}
//           >
//             <Typography sx={{ fontFamily: "TajawalBold" }}>عرض جديد</Typography>
//           </Button>
//           <cpm.OfferHr />
//         </Box>
//         <Card.OfferNormalDivr>
//           {isFetched &&
//             data.data.map((el) => {
//               return (
//                 <React.Fragment key={el.id}>
//                   <NewCard cardData={el} />
//                 </React.Fragment>
//               );
//             })}
//         </Card.OfferNormalDivr>
//       </cpm.OfferBodyWarper>
//       {open && (
//         <DiloagShow
//           open={open}
//           toggle={setOpen}
//           Xfullscreen={true}
//           title={"عرض جديد"}
//         >
//           <NewOffer />
//         </DiloagShow>
//       )}
//     </>
//   );
// };

export default Offer
