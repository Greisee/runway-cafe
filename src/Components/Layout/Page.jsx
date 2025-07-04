import {React, useState} from 'react';
import { Outlet,Link} from "react-router-dom";//must use link to change pages
import "./layout.css";
import image from "./../assets/testBG.webp" ;

export default function Page(){
    const[bgImg, setBGImg] = useState(image)
    
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