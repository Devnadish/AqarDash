import React,{Suspense,lazy} from 'react'
import {Routes, Route } from "react-router-dom";
const Offer=lazy(()=>import("../../../pages/offer/Offer"))
const General=lazy(()=>import("../../../pages/general/General"))
const Setting=lazy(()=>import("../../../pages/setting/Setting"))
const Request=lazy(()=>import("../../../pages/requests/Request"))
const Comments=lazy(()=>import("../../../pages/comments/Comments"))

function MyRoutes() {
  return (
    <Suspense fallback={<h1>..loading</h1>}>
    <Routes>
      <Route path="/">
        <Route index element={<Offer />} />
        <Route path="/general" element={<General/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/request" element={<Request />} />
        <Route path="/setting" element={<Setting />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Route>
    </Routes>
  </Suspense>
  )
}

export default MyRoutes
