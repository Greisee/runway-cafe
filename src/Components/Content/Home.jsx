import {React, useEffect, useState} from "react";
import "./content.css";
import "./../Layout/mobileLayout/mobile.css";
import image from "./../assets/testBG2.webp" ;
import MobileTopMenu from "../Layout/mobileLayout/mobileTopMenu";


export default function Home(){
    const[mobile, setMobile] = useState(false);

    useEffect(()=>{
        setMobile(window.innerWidth <= 768);
    },[])
    if(mobile){
        return(
            <div className="mHomeBG" style = {{backgroundImage:`url(${image})`}}>
                <MobileTopMenu/>
                <div className="mHomeContent">
                    Welcome to Runway Cafe!
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="homeBG" style = {{backgroundImage:`url(${image})`}}>
                <div className="homeContent">
                    Welcome to Runway Cafe!
                </div>
            </div>
        )
    }
   
}