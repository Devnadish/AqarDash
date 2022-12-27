import React,{useState} from 'react'
import cpm from "./dashbordCpm"
import  Genral from './General/Genral'
import { Comments } from './Comments/Comments'
import { Offer } from './Offers/Offer'
import { Reqest } from './request/Reqest'


function Dashboard() {
  const [menu,setMenu]=useState(<Genral />)  
  
  return (
    <cpm.BodyWarper>
        <DashMenu menu={menu} setMenu={setMenu}/>
        <ShowBox childern={menu} />
    </cpm.BodyWarper>
  )
}

export default Dashboard

const DashMenu=({menu,setMenu}) => {
  return (
  <>
    <cpm.MenuArae>
      <cpm.MenuTxt
        onClick={() => {
            setMenu(<Genral />);
        }}
      >
        عام
      </cpm.MenuTxt>
      <cpm.MenuTxt
        onClick={() => {
            setMenu(<Offer />);
        }}
      >
        العروض
      </cpm.MenuTxt>
      <cpm.MenuTxt
        onClick={() => {
            setMenu(<Reqest  />);
        }}
      >
        الطلبات
      </cpm.MenuTxt>
      <cpm.MenuTxt
        onClick={() => {
            setMenu(<Comments  />);
        }}
      >
        التعلقات
      </cpm.MenuTxt>
    </cpm.MenuArae>
  </>
);}



const ShowBox = ({ childern }) => {
    return (
      <>
        <cpm.ShowContentWarper>{childern} </cpm.ShowContentWarper>
      </>
    );
  };
  

