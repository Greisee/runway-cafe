import {React,useState,useEffect} from 'react';
import { Outlet,Link,useLocation} from "react-router-dom";//must use link to change pages
import "./layout.css";
import image from "./../assets/testBG.webp" ;

export default function Page(){
    const loc = useLocation();
    const[bgImg, setBGImg] = useState(image)

    useEffect(()=>{
        window.scrollTo(0,0);
        //can be removed if scroll is supposed to remain between pages
    },[loc.pathname])
    
    return(
        <div>
            <div className="stuckImage" style = {{backgroundImage:`url(${bgImg})`}}/>
            <div className="placeHolder"/>
            <div className="stuckImgFlexbox">
                <div className="stuckImgContent">
                    <Outlet context={setBGImg}/>
                </div>
            </div>
        </div>
    );
}