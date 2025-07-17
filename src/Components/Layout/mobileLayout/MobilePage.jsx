import {React,useState,useEffect} from 'react';
import { Outlet,Link,useLocation} from "react-router-dom";//must use link to change pages
import "./mobile.css";
import MobileTopMenu from "./mobileTopMenu.jsx";
import logo from "./../../assets/logo.png";
import image from "./../../assets/testBG2.webp" ;

export default function MobilePage(){
      const loc = useLocation();
      const[bgImg, setBGImg] = useState(image)
  
      useEffect(()=>{
          window.scrollTo(0,0);
          //can be removed if scroll is supposed to remain between pages
      },[loc.pathname])
  
      return(
          <div className="mTop">
              <div className="mStuckImage" style = {{backgroundImage:`url(${bgImg})`}}/>
              <div className="mPlaceHolder"/>
              <div className="mStuckImgFlexbox">
                  <div className="mStuckImgContent">
                      <MobileTopMenu/>
                      <Outlet context={setBGImg}/>
                  </div>
              </div>
          </div>
      )
}